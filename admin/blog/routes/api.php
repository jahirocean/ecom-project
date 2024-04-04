<?php

use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ContactListController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProductDetailsController;
use App\Http\Controllers\ProductListController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\VisitorListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/SendVisitorDetails', [VisitorListController::class, 'SendVisitorDetails']);
Route::post('/SendContactDetails', [ContactListController::class, 'SendContactDetails']);
Route::get('/SendSiteInfo', [SiteInfoController::class, 'SendSiteInfo']);



// Category details
Route::get('/SendCategoryDetails', [CategoryDetailsController::class, 'SendCategoryDetails']);

// Product List
Route::get('/ProductListByRemark/{remark}', [ProductListController::class, 'ProductListByRemark']);
Route::get('/ProductListBySubCategory/{category}/{subcategory}', [ProductListController::class, 'ProductListBySubCategory']);
Route::get('/ProductListByCategory/{category}', [ProductListController::class, 'ProductListByCategory']);
Route::get('/ProductBySearch/{key}', [ProductListController::class, 'ProductBySearch']);

// slider
Route::get('/SendSliderInfo', [SliderController::class, 'SendSliderInfo']);

//ProductDetails
Route::get('/ProductDetails/{code}', [ProductDetailsController::class, 'ProductDetails']);

//  notificationHistory
Route::get('/notificationHistory', [NotificationController::class, 'notificationHistory']);
// CreateOTP
Route::get('/CreateOTP/{mobile}', [LoginController::class, 'CreateOTP']);
Route::post('/OtpVerification', [LoginController::class, 'OtpVerification']);
 