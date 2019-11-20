<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Log;

class LogsController extends Controller
{
	//  To greate logs
    public function create(Request $request, Log $post){
    	// To create a log
    	$createdLogs =  $request->user()->logs()->create([
    			'body' => $request->body,
    	]);
    	// To create a response
		return response()->json($post->with('user')->find($createdLogs->id));

    }
}
