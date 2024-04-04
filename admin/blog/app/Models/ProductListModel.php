<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductListModel extends Model
{

    protected $table = 'product_list';
    protected $primaryKey = 'id';
    public $increamenting = true;
    protected $keyType = 'int';
    public $timestamp = false;
}
