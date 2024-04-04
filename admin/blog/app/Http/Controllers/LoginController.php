<?php

namespace App\Http\Controllers;

use App\Models\OTPModel;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    // only for practise purpuse i  alternatively using this without using ssl weareless
    function CreateOTP(Request $request)
    {
        $mobile = $request->mobile;
        $otp = rand(100000, 999999);

        date_default_timezone_set("Asia/Dhaka");
        $created_timestamp = time();
        $created_time = date('h:i:sa');
        $created_date = date('d-m-Y');
        $result = OTPModel::insert([
            "mobile" => $mobile,
            "otp" => $otp,
            "created_timestamp" => $created_timestamp,
            "created_date" => $created_date,
            "created_time" => $created_time,

        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }
    function OtpVerification(Request $request)
    {
        $Otp = $request->input('OTP');
        $mobileNo = $request->input('MobileNo');
        $countNo = OTPModel::where("mobile", $mobileNo)->where("otp", $Otp)->count();
        if ($countNo > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}
