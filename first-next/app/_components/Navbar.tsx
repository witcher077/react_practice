import Link from 'next/link'
import React from 'react'
import { getSession } from '../_lib/session';
import LogoutBtn from "./logoutBtn"

const Navbar = async () => {
    const session = await getSession();
    return (
        <nav className=' bg-amber-50 shadow-2xs p-3'>
            <div className='flex align-middle justify-between'>
                <Link href="/" className=' text-blue-600 font-bold text-2xl'>
                    Contact Maneger
                </Link>
                <div className='mr-5'>
                    {
                        session ? <><Link href="/" className=' px-2 text-black font-bold text-xl'>
                            Contact
                        </Link>
                            <LogoutBtn />
                        </>
                            : (<><Link href="/login" className=' text-black font-bold text-xl'>
                                Login
                            </Link></>)
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar