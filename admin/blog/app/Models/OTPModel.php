<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OTPModel extends Model
{
    protected $table = 'otp_table';
    protected $primaryKey = 'id';
    public $increamenting = true;
    protected $keyType = 'int';
    public $timestamp = false;
}
