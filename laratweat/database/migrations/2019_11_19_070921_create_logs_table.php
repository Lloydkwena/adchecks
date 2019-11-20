<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @param $table->foreign('user_id')->references('id')->on('users')->ondelete('cascade');
     * Delete Log linked to the user who logged it
     *
     * @return void
     */
    public function up()
    {
        Schema::create('logs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('user_id')->unsinged();
            $table->string('body', 140);
            $table->timestamps();
            /********************************
            * To select gatergories by 1,2,3
            * My apologies run out of time to fully implement this functionality
            * So we only have empty select-box on front-end

            * $table->integer('active');
            ********************************/
            $table->bigIncrements('id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('logs');
    }
}
