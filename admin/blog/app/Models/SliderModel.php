<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SliderModel extends Model
{

    protected $table = 'slider';
    protected $primaryKey = 'id';
    public $increamenting = true;
    protected $keyType = 'int';
    public $timestamp = false;
}
