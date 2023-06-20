<?php
require_once __DIR__ . '/../Database/ProductsDatabase.php';
require_once __DIR__ . '/../Product/Product.php';
require_once __DIR__ . '/../Product/DVD.php';
require_once __DIR__ . '/../Product/Book.php';
require_once __DIR__ . '/../Product/Furniture.php';

/**
 * Class responsible for handling API requests related to products.
 */
class ProductAPI
{
    /** @var ProductDatabase The database instance. */
    private $db;

    /**
     * ProductAPI constructor.
     */
    public function __construct()
    {
        $this->db = new ProductDatabase();
    }

    /**
     * Handles the incoming API request.
     */
    public function handleRequest($sku = null)
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $type = $_SERVER['HTTP_PRODUCT_TYPE'] ?? null;

        switch ($method) {
            case 'GET':
                if ($type) {
                    $this->getProducts($type);
                } else {
                    $this->getAllProducts();
                }
                break;
            case 'POST':
                $requestBody = file_get_contents('php://input');
                $requestData = json_decode($requestBody, true);
                if (isset($requestData['delete'])) {
                    $sku = $requestData['delete'];
                    $this->deleteProduct($sku);                    
                } else {
                    $this->createProduct();
                }
                break;
            case 'DELETE':
                if ($sku) {
                    $this->deleteProduct($sku);
                } else {
                    $this->sendResponse(400, ['error' => 'Missing product sku']);
                }
                break;
            default:
                $this->sendResponse(405, ['error' => 'Method not allowed']);
                break;
        }
    }

    /**
     * Creates a new product based on the incoming API request data.
     */

    public function createProduct()
    {
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $type = $data['type'] ?? null;
            $productClasses = [
                'book' => BookProduct::class,
                'dvd' => DvdProduct::class,
                'furniture' => FurnitureProduct::class,
            ];
            if ($type && isset($productClasses[$type])) {
                $product = $productClasses[$type]::createFromData($data);
                $this->saveProduct($this->db->getPDO(), $product);
                $this->sendResponse(201, ['message' => 'Product created']);
            } else {
                $this->sendResponse(400, ['error' => 'Invalid or missing product type']);
            }
        } catch (Exception $e) {
            $this->sendResponse(500, ['error' => $e->getMessage()]);
        }
    }

    /**
     * Saves the product to the database.
     *
     * @param PDO $pdo The PDO instance.
     * @param Product $product The product to be saved.
     */
    public function saveProduct($pdo, $product)
    {
        $columns = ['sku', 'name', 'price', 'type'];
        $values = [$product->getSku(), $product->getName(), $product->getPrice(), $product->getType()];

        $productColumns = [
            'book' => ['weight'],
            'dvd' => ['size'],
            'furniture' => ['height', 'width', 'length'],
        ];

        if (isset($productColumns[$product->getType()])) {
            foreach ($productColumns[$product->getType()] as $column) {
                $getter = 'get' . ucfirst($column);
                if (method_exists($product, $getter)) {
                    $columns[] = $column;
                    $values[] = $product->$getter();
                }
            }
        }

        $placeholders = array_fill(0, count($columns), '?');

        $stmt = $pdo->prepare(
            sprintf(
                "INSERT INTO products (%s) VALUES (%s)",
                implode(', ', $columns),
                implode(', ', $placeholders)
            )
        );
        $stmt->execute($values);
    }

    /**
     * Retrieves products of the specified type from the database.
     *
     * @param string $type The type of products to retrieve.
     */
    public function getProducts($type)
    {
        try {
            $products = $this->db->getProducts($type);
            $this->sendResponse(200, $products);
        } catch (Exception $e) {
            $this->sendResponse(500, ['error' => $e->getMessage()]);
        }
    }

    /**
     * Retrieves all products from the database.
     */
    public function getAllProducts()
    {
        try {
            $products = $this->db->getAllProducts();
            $this->sendResponse(200, $products);
        } catch (Exception $e) {
            $this->sendResponse(500, ['error' => $e->getMessage()]);
        }
    }

    /**
     * Deletes a product from the database.
     *
     * @param string $sku The SKU of the product to delete.
     */
    public function deleteProduct($sku)
    {
        try {
            $this->db->deleteProduct($sku);
            $this->sendResponse(200, ['message' => 'Product deleted']);
        } catch (Exception $e) {
            $this->sendResponse(500, ['error' => $e->getMessage()]);
        }
    }
    public function deleteProductPost($requestData)
    {
        try {
            $sku = $requestData['sku'];
            $this->db->deleteProduct($sku);
            $this->sendResponse(200, ['message' => 'Product deleted']);
        } catch (Exception $e) {
            $this->sendResponse(500, ['error' => $e->getMessage()]);
        }
    }

    /**
     * Sends the HTTP response with the specified status code and data.
     *
     * @param int $statusCode The HTTP status code.
     * @param array $data The response data.
     */
    private function sendResponse($statusCode, $data)
    {
        header('Content-Type: application/json');
        http_response_code($statusCode);
        echo json_encode($data);
        exit;
    }
}

$api = new ProductAPI();
$api->handleRequest();
?>