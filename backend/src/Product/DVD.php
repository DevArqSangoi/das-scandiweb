<?php
require_once __DIR__ . '/../Product/Product.php';

/**
 * Class representing a DVD product.
 */
class DvdProduct extends Product
{
    /** @var float The size of the DVD. */
    private $size;

    /**
     * Constructs a DvdProduct object.
     *
     * @param string $sku The SKU of the DVD.
     * @param string $name The name of the DVD.
     * @param float $price The price of the DVD.
     * @param float $size The size of the DVD.
     */
    public function __construct($sku, $name, $price, $size)
    {
        parent::__construct($sku, $name, $price, 'dvd');
        $this->setSize($size);
    }

    /**
     * Gets the size of the DVD.
     *
     * @return float The size of the DVD.
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Sets the size of the DVD.
     *
     * @param float $size The size of the DVD.
     * @throws InvalidArgumentException If the size is not a positive number.
     */
    public function setSize($size)
    {
        if (!is_numeric($size) || $size <= 0) {
            throw new InvalidArgumentException('Size must be a positive number.');
        }
        $this->size = $size;
    }

    /**
     * Creates a new DvdProduct instance from data.
     *
     * @param array $data The data to create the DVD product from.
     * @return DvdProduct The created DvdProduct instance.
     * @throws Exception If the size is missing in the data.
     */
    public static function createFromData($data)
    {
        if (!isset($data['size'])) {
            throw new Exception('Missing size for DVD.');
        }
        return new self($data['sku'], $data['name'], $data['price'], $data['size']);
    }
}