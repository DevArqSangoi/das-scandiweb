<?php
require_once __DIR__ . '/../src/Database/ProductsDatabase.php';
require_once __DIR__ . '/../src/Product/ProductAPI.php';
require_once __DIR__ . '/../src/Product/DVD.php';
require_once __DIR__ . '/../src/Product/Book.php';
require_once __DIR__ . '/../src/Product/Furniture.php';
require_once 'router.php';

$api = new ProductAPI();

$router = new Router();

$router->get('/api/products', [$api, 'handleRequest']);
$router->post('/api/products', [$api, 'handleRequest']);
$router->delete('/api/products/{sku}', [$api, 'handleRequest']);

$router->dispatch();
?>