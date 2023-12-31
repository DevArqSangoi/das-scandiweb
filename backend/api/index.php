<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
require_once __DIR__ . '/src/Database/ProductsDatabase.php';
require_once __DIR__ . '/src/Product/ProductAPI.php';
require_once __DIR__ . '/src/Product/DVD.php';
require_once __DIR__ . '/src/Product/Book.php';
require_once __DIR__ . '/src/Product/Furniture.php';
require_once __DIR__ . '/../router.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$api = new ProductAPI();

$router = new Router();

$router->get('/api/products', [$api, 'handleRequest']);
$router->post('/api/products', [$api, 'handleRequest']);
$router->delete('/api/products/{sku}', [$api, 'handleRequest']);

$router->dispatch();