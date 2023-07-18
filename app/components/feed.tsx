import { getServerSession } from "next-auth";
import MiniProfile from "./miniProfile";
import Posts from "./posts";
import Stories from "./stories";
import Suggestions from "./suggestions";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Feed() {
    const session = await getServerSession(authOptions)
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 
        md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl"}`
        }>

            <section className='col-span-2'>
                {/* Stories */}
                <Stories session={session} />
                { /* Posts */}
                <Posts />
            </section>

            {session && (<section className='hidden xl:inline-grid md:col-span-1'>
                <div className='fixed top-20'>
                    <MiniProfile />
                    <Suggestions />
                </div>
                {/* Mini profile */}
                {/* Suggestions */}
            </section>)}
            
        </main>
    )
}