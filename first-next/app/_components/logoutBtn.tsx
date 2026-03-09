'use client'

import React from 'react'
import { LogoutAction } from "../actions/auth"
import { useRouter } from 'next/navigation'

const LogoutBtn = () => {
    const router = useRouter()
    const logoutHandler = async () => {


        try {
            await LogoutAction();
            router.push("/")
            router.refresh()
        } catch (error) {
            console.log("Logout Failed", error)
        }
    }
    return (
        <div>
            <button className='' onClick={logoutHandler}>logout</button>
        </div>
    )
}

export default LogoutBtn;