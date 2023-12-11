<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->resource('login', ['controller' => 'LoginController']);
$routes->match(['get', 'post', 'options'], 'register', 'LoginController::register');
$routes->match(['put' ,'options'], 'update-user/(:num)', 'LoginController::update/$1');
$routes->match(['delete' ,'options'], 'delete-user/(:num)', 'LoginController::delete/$1');

