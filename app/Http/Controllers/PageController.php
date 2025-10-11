<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    /**
     * Display the main application view.
     * Semua routing akan ditangani oleh React Router
     *
     * @return \Illuminate\Contracts\View\View
     */
    public function index()
    {
        return view('app');
    }
}

