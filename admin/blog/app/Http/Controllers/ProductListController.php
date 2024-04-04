<?php

namespace App\Http\Controllers;

use App\Models\ProductListModel;
use Illuminate\Http\Request;

class ProductListController extends Controller
{
    function ProductListByRemark(Request $request)
    {
        $remark = $request->remark;
        $ProductList = ProductListModel::where('remark', $remark)->get();
        return $ProductList;
    }
    function ProductListBySubCategory(Request $request)
    {
        $category = $request->category;
        $subcategory = $request->subcategory;
        $ProductList = ProductListModel::where('category', $category)->where('subcategory', $subcategory)->get();
        return $ProductList;
    }
    function ProductListByCategory(Request $request)
    {
        $category = $request->category;

        $ProductList = ProductListModel::where('category', $category)->get();
        return $ProductList;
    }
    function ProductBySearch(Request $request)
    {
        $key = $request->key;
        $result = ProductListModel::where('title', 'LIKE', "%{$key}%")->get();
        return $result;
    }
}
