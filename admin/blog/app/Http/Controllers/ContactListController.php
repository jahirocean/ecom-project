<?php

namespace App\Http\Controllers;

use App\Models\ContactModel;
use Illuminate\Http\Request;

class ContactListController extends Controller
{
    function SendContactDetails(Request $request)
    {
        $name = $request->input('name');
        $mobile = $request->input('mobile');
        $msg = $request->input('msg');

        date_default_timezone_set("Asia/Dhaka");
        $contact_time = date('h:i:sa');
        $contact_date = date('d-m-Y');

        $result = ContactModel::insert([
            'name' => $name,
            'mobile' => $mobile,
            'message' => $msg,
            'contact_date' => $contact_date,
            'contact_time' => $contact_time
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }
}
