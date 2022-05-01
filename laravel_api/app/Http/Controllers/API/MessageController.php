<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Message;
use Illuminate\Support\Facades\Validator;

class MessageController extends Controller
{
    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'name'=>'required|max:191',
            'email'=>'required|email|max:191',
            'message_text'=>'required|max:500'
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status'=> 422,
                'validate_err'=> $validator->messages(),
            ]);
        }
        else
        {
            $message = new Message;
            $message->name = $request->input('name');
            $message->message = $request->input('message_text');
            $message->email = $request->input('email');
            $message->save();

            return response()->json([
                'status'=> 200,
                'message'=>'Message sent Successfully',
            ]);
        }
    }
}
