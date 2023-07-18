'use client'

import { signOut } from "next-auth/react";

export default function SignOutButton() {
    return (
        <div>
            <button onClick={signOut} className='text-blue-400 text-sm font-semibold'>Sign Out</button>
        </div>
    )
}