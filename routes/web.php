<?php

use App\Http\Controllers\PhotoController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Rota pagina inicial
Route::get('/', [PhotoController::class, 'index']);

//Rota que exibe as fotos
Route::get('/photos', [PhotoController::class,'showAll']);

//Rota que exibe o formulário de cadastro
Route::get('/photos/new', [PhotoController::class, 'create']);

//Rota que exibe o formulário de edição
Route::get('/photos/edit/{id}', [PhotoController::class, 'edit']);

//Rota que insere no banco de dados uma nova foto
Route::post('/photos', [PhotoController::class, 'store']);

//Rota que altera uma foto no banco de dados
Route::put('/photos/{id}', [PhotoController::class, 'update']);

Route::delete('/photos/{id}', [PhotoController::class, 'destroy']);


