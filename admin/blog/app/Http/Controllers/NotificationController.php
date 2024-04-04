<?php

namespace App\Http\Controllers;

use App\Models\NotificationModel;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    function notificationHistory()
    {
        $notificationDetails = NotificationModel::get();
        return $notificationDetails;
    }
}
