import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import SignOutButton from "./signOutButton"

/* eslint-disable @next/next/no-img-element */
export default async function MiniProfile() {
    const session = await getServerSession(authOptions)

    return (
        <div className='flex items-center justify-between mt-14 ml-14'>
            <img
                src={session?.user?.image}
                className='rounded-full border p-[2x] w-16 h-16'
                alt="" />
        
        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>{session?.user?.username}</h2>
            <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
        </div>

        <SignOutButton />        
        </div>
    )
}