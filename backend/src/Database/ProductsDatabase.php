<?php
/**
 * Class for managing product data in the database.
 */
class ProductDatabase
{
    private $pdo;

    /**
     * Creates a new ProductDatabase instance.
     */
    public function __construct()
    {
        $host = '127.0.0.1';
        $db = 'test';
        $user = 'root';
        $pass = 'abluble';
        $charset = 'utf8mb4';

        $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
        $options = [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ];
        try {
            $this->pdo = new PDO($dsn, $user, $pass, $options);
        } catch (\PDOException $e) {
            throw new \PDOException($e->getMessage(), (int) $e->getCode());
        }
    }

    /**
     * Returns the PDO instance.
     *
     * @return PDO The PDO instance.
     */
    public function getPDO()
    {
        return $this->pdo;
    }

    /**
     * Retrieves products of a specific type from the database.
     *
     * @param string $type The product type.
     * @return array An array of products.
     */
    public function getProducts($type)
    {
        $stmt = $this->pdo->prepare("SELECT name, sku, price FROM products WHERE type = ?");
        $stmt->execute([$type]);
        return $stmt->fetchAll(PDO::FETCH_CLASS, $type);
    }

    /**
     * Deletes a product from the database.
     *
     * @param string $sku The SKU of the product to delete.
     */
    public function deleteProduct($sku)
    {
        $stmt = $this->pdo->prepare("DELETE FROM products WHERE sku = ?");
        $stmt->execute([$sku]);
    }

    /**
     * Retrieves all products from the database.
     *
     * @return array An array of all products.
     */
    public function getAllProducts()
    {
        $stmt = $this->pdo->prepare("SELECT * FROM products");
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>