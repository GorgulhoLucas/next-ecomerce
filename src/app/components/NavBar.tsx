import Link from "next/link"
import {SignedIn, SignedOut} from "@clerk/nextjs";
import {SignInButton, UserButton} from "@clerk/nextjs";


function Navbar() {
    return(
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between bg-slate-500 text-gray-300 z-50'>
        <Link 
        href='/'
        className='uppercase font-bold text-md h-12 flex items-center'> Next store
        </Link>

        <div className='flex items-center gap-8'>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode='modal'>
              <button className='border rounded-md border-gray-700 px-3 py-2'>
                fazer login
              </button>
            </SignInButton>
          </SignedOut>
        </div>

      </nav>
    )
}


export default Navbar;