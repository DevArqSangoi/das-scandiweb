<?php
require_once __DIR__ . '/../Product/Product.php';

/**
 * Class representing a book product.
 */
class BookProduct extends Product
{
    /** @var float The weight of the book. */
    private $weight;

    /**
     * Constructs a BookProduct object.
     *
     * @param string $sku The SKU of the book.
     * @param string $name The name of the book.
     * @param float $price The price of the book.
     * @param float $weight The weight of the book.
     */
    public function __construct($sku, $name, $price, $weight)
    {
        parent::__construct($sku, $name, $price, 'book');
        $this->setWeight($weight);
    }

    /**
     * Gets the weight of the book.
     *
     * @return float The weight of the book.
     */
    public function getWeight()
    {
        return $this->weight;
    }
    /**
     * Sets the weight of the book.
     *
     * @param float $weight The weight of the book.
     * @throws InvalidArgumentException If the weight is not a positive number.
     */
    public function setWeight($weight)
    {
        if (!is_numeric($weight) || $weight <= 0) {
            throw new InvalidArgumentException('Weight must be a positive number.');
        }
        $this->weight = $weight;
    }

    /**
     * Creates a new BookProduct instance from data.
     *
     * @param array $data The data to create the book product from.
     * @return BookProduct The created BookProduct instance.
     * @throws Exception If the weight is missing in the data.
     */
    public static function createFromData($data)
    {
        if (!isset($data['weight'])) {
            throw new Exception('Missing weight for book.');
        }
        return new self($data['sku'], $data['name'], $data['price'], $data['weight']);
    }
}