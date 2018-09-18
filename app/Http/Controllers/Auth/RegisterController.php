<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/admin';

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        dd($data);
        return Validator::make($data, [
            'company' => 'required',
            'city' => 'required',
            'email' => 'required',
            'password' => 'required|string|min:6'
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    public function register(Request $request)
    {
        $messages = [
            'required' => 'Поле обязательно для заполнения.',
            'max' => 'Количество символов в поле не может превышать :max.',
            'min' => 'Количество символов в поле не может превышать :min.',
            'unique' => 'Такое значение поля уже существует.',
            'email' => 'Поле должно быть действительным электронным адресом.'
        ];
        $validator = Validator::make($request->all(), [
            'company' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6'
        ], $messages);

        if ($validator->passes()) {
            $data = $request->only(['company', 'category', 'email', 'password']);
            $user = User::create([
                'name' => $data['company'],
                'city' => $data['category'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);
            if($user !== null){
                Auth::guard()->login($user);
                return response()->json([
                    'auth' => Auth::check(),
                    'user' => $user,
                    'error' => '',
                    'redirectPath' => $this->redirectPath()
                ]);
            }
        }
        return response()->json([
            'auth' => Auth::check(),
            'user' => '',
            'error' => $validator->errors(),
            'redirectPath' => $this->redirectPath()
        ]);
    }
}
