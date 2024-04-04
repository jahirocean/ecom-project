<?php

namespace App\Http\Controllers;

use App\Models\ProductDetailsModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;

class ProductDetailsController extends Controller
{
    function ProductDetails(Request $request)
    {
        $product_code = $request->code;
        $productDetails = ProductDetailsModel::where('product_code', $product_code)->get();
        $productList = ProductListModel::where('product_code', $product_code)->get();
        $item = [
            'productDetails' => $productDetails,
            'productList' => $productList,
        ];
        return $item;
    }
}
