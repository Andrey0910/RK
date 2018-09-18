<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/admin';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function authenticated(Request $request)
    {
        $data = $request->only(['email', 'password']);
        $user = User::where('email', $data['email'])->first();

        //Проверяем наличие пользователя
        if (is_null($user)) {
            return response()->json([
                'auth' => Auth::check(),
                'user' => $user,
                'error' => 'Не верные Email или Пароль.',
                'redirectPath' => $this->redirectPath()
            ]);
        }
        // Проверяем введенный пароль:
        if (!Hash::check($data['password'], $user->password)) {
            return response()->json([
                'auth' => Auth::check(),
                'user' => $user,
                'error' => 'Не верные Email или Пароль.',
                'redirectPath' => $this->redirectPath()
            ]);
        }

        Auth::guard()->login($user);
        return response()->json([
            'auth' => Auth::check(),
            'user' => $user,
            'error' => '',
            'redirectPath' => $this->redirectPath()
        ]);
    }

    public function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->invalidate();

        return redirect('/');
    }
}
