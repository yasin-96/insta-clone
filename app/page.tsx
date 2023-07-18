import Header from './components/header'
import Feed from './components/feed'
import { Session, getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {

  const session = await getServerSession(authOptions) 

  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Header session={session} />
      <Feed session={session}/>
    </div>
  )
}
