<?php
require_once __DIR__ . '/../Product/Product.php';

/**
 * Class representing a furniture product.
 */
class FurnitureProduct extends Product
{
    /** @var float The height of the furniture. */
    private $height;

    /** @var float The width of the furniture. */
    private $width;

    /** @var float The length of the furniture. */
    private $length;

    /**
     * Constructs a FurnitureProduct object.
     *
     * @param string $sku The SKU of the furniture.
     * @param string $name The name of the furniture.
     * @param float $price The price of the furniture.
     * @param float $height The height of the furniture.
     * @param float $width The width of the furniture.
     * @param float $length The length of the furniture.
     */
    public function __construct($sku, $name, $price, $height, $width, $length)
    {
        parent::__construct($sku, $name, $price, 'furniture');
        $this->setHeight($height);
        $this->setWidth($width);
        $this->setLength($length);
    }

    /**
     * Gets the height of the furniture.
     *
     * @return float The height of the furniture.
     */
    public function getHeight()
    {
        return $this->height;
    }

    /**
     * Sets the height of the furniture.
     *
     * @param float $height The height of the furniture.
     * @throws InvalidArgumentException If the height is not a positive number.
     */
    public function setHeight($height)
    {
        if (!is_numeric($height) || $height <= 0) {
            throw new InvalidArgumentException('Height must be a positive number');
        }
        $this->height = $height;
    }

    /**
     * Gets the width of the furniture.
     *
     * @return float The width of the furniture.
     */
    public function getWidth()
    {
        return $this->width;
    }

    /**
     * Sets the width of the furniture.
     *
     * @param float $width The width of the furniture.
     * @throws InvalidArgumentException If the width is not a positive number.
     */
    public function setWidth($width)
    {
        if (!is_numeric($width) || $width <= 0) {
            throw new InvalidArgumentException('Width must be a positive number');
        }
        $this->width = $width;
    }

    /**
     * Gets the length of the furniture.
     *
     * @return float The length of the furniture.
     */
    public function getLength()
    {
        return $this->length;
    }

    /**
     * Sets the length of the furniture.
     *
     * @param float $length The length of the furniture.
     * @throws InvalidArgumentException If the length is not a positive number.
     */
    public function setLength($length)
    {
        if (!is_numeric($length) || $length <= 0) {
            throw new InvalidArgumentException('Length must be a positive number');
        }
        $this->length = $length;
    }

    /**
     * Creates a new FurnitureProduct instance from data.
     *
     * @param array $data The data to create the furniture product from.
     * @return FurnitureProduct The created FurnitureProduct instance.
     * @throws Exception If any of the dimensions (height, width, length) is missing in the data.
     */
    public static function createFromData($data)
    {
        if (!isset($data['height']) || !isset($data['width']) || !isset($data['length'])) {
            throw new Exception('Missing dimensions for furniture');
        }
        return new self($data['sku'], $data['name'], $data['price'], $data['height'], $data['width'], $data['length']);
    }
}
?>