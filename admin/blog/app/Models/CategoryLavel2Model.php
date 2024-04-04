<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryLavel2Model extends Model
{
    protected $table = 'category_lavel2';
    protected $primaryKey = 'id';
    public $increamenting = true;
    protected $keyType = 'int';
    public $timestamp = false;
}
