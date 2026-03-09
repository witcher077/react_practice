"use client";

import Link from 'next/link'
import React from 'react'
import { loginAction } from '../actions/auth'

const LoginForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-80">

                <form action={loginAction} className="space-y-4">

                    <div className="flex flex-col">
                        <label className="text-gray-300 text-sm mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            className="px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-300 text-sm mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your Password"
                            required
                            className="px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
                    >
                        Login
                    </button>

                </form>

                <div className="mt-4 text-center text-gray-400 text-sm">
                    <p>
                        Not registered?{" "}
                        <Link href="/register" className="text-blue-400 hover:underline">
                            Register
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default LoginForm