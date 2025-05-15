import Link from "next/link"
import {SignedIn, SignedOut} from "@clerk/nextjs";
import {SignInButton, UserButton} from "@clerk/nextjs";
import { useCartStore } from "@/store";

function Navbar() {
  //const useStore = useCartStore();

    return(
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between bg-slate-500 text-gray-300 z-50'>
        <Link 
        href='/'
        className='uppercase font-bold text-md h-12 flex items-center'> Next store
        </Link>

        <div className='flex items-center gap-8'>
          <div className="flex items-center cursor-pointer relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2.4l2 7h10l2-7h2.4M7 21a2 2 0 104 0 2 2 0 10-4 0zm10 0a2 2 0 104 0 2 2 0 10-4 0z"
              />
            </svg>
            <span className='bg-teal-500 text-sm font-bold rounded-full h-5 w-5 flex items-center justify-center absolute left-3 bottom 3'>
              2
            </span>
          </div>
          
          <div> 
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
        </div>

      </nav>
    )
}


export default Navbar;