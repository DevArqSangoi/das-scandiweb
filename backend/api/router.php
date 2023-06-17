<?php
/**
 * Class responsible for routing HTTP requests to appropriate handlers.
 */
class Router
{
    /** @var array The registered routes. */
    private $routes = [];

    /**
     * Registers a GET route with the specified handler.
     *
     * @param string $route The route pattern.
     * @param callable $handler The handler function or method.
     */
    public function get($route, $handler)
    {
        $this->addRoute('GET', $route, $handler);
    }

    /**
     * Registers a POST route with the specified handler.
     *
     * @param string $route The route pattern.
     * @param callable $handler The handler function or method.
     */
    public function post($route, $handler)
    {
        $this->addRoute('POST', $route, $handler);
    }

    /**
     * Registers a DELETE route with the specified handler.
     *
     * @param string $route The route pattern.
     * @param callable $handler The handler function or method.
     */
    public function delete($route, $handler)
    {
        $this->addRoute('DELETE', $route, $handler);
    }

    /**
     * Adds a route to the routing table.
     *
     * @param string $method The HTTP method.
     * @param string $route The route pattern.
     * @param callable $handler The handler function or method.
     */
    private function addRoute($method, $route, $handler)
    {
        $this->routes[$method][$route] = $handler;
    }

    /**
     * Dispatches the HTTP request to the appropriate handler.
     */
    public function dispatch()
    {
        $requestedRoute = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        $requestedMethod = $_SERVER['REQUEST_METHOD'];

        if (isset($this->routes[$requestedMethod][$requestedRoute])) {
            call_user_func($this->routes[$requestedMethod][$requestedRoute]);
        } else {
            http_response_code(404);
            echo '404 Not Found';
        }
    }
}
?>