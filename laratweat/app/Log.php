<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
	protected $fillable = ['body'];
	/**
	* The log belongs to the user, and the user has many logs
	**/
    public function user(){
    	return $this->belongsTo(User::class);
    }
}
