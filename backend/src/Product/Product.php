<?php
/**
 * Abstract class for products
 */
abstract class Product
{
    /** @var string The SKU of the product. */
    protected $sku;

    /** @var string The name of the product. */
    protected $name;

    /** @var float The price of the product. */
    protected $price;

    /** @var string The type of the product. */
    protected $type;

    /**
     * Product constructor.
     *
     * @param string $sku The SKU of the product.
     * @param string $name The name of the product.
     * @param float $price The price of the product.
     * @param string $type The type of the product.
     */

    /**
     * Get the SKU of the product.
     *
     * @return string The SKU of the product.
     */
    public function __construct($sku, $name, $price, $type)
    {
        $this->setSku($sku);
        $this->setName($name);
        $this->setPrice($price);
        $this->setType($type);
    }

    /**
     * Get the SKU of the product.
     *
     * @return string The SKU of the product.
     */
    public function getSku()
    {
        return $this->sku;
    }

    /**
     * Set the SKU of the product.
     *
     * @param string $sku The SKU of the product.
     * @throws InvalidArgumentException If the SKU is empty.
     */
    public function setSku($sku)
    {
        if (empty($sku)) {
            throw new InvalidArgumentException('SKU cant be empty.');
        }
        $this->sku = $sku;
    }

    /**
     * Get the name of the product.
     *
     * @return string The name of the product.
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the name of the product.
     *
     * @param string $name The name of the product.
     * @throws InvalidArgumentException If the name is empty.
     */
    public function setName($name)
    {
        if (empty($name)) {
            throw new InvalidArgumentException('Name cannot be empty.');
        }
        $this->name = $name;
    }

    /**
     * Get the price of the product.
     *
     * @return float The price of the product.
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set the price of the product.
     *
     * @param float $price The price of the product.
     * @throws InvalidArgumentException If the price is not a positive number.
     */
    public function setPrice($price)
    {
        if (!is_numeric($price) || $price <= 0) {
            throw new InvalidArgumentException('Price must be a positive number.');
        }
        $this->price = $price;
    }

    /**
     * Get the type of the product.
     *
     * @return string The type of the product.
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set the type of the product.
     *
     * @param string $type The type of the product.
     * @throws InvalidArgumentException If the type is empty.
     */
    public function setType($type)
    {
        if (empty($type)) {
            throw new InvalidArgumentException('Type cannot be empty.');
        }
        $this->type = $type;
    }
}