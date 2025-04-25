import Link from "next/link"

function Navbar() {
    return(
        <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between bg-slate-500 text-gray-300 z-50'>
        <Link 
        href='/'
        className='uppercase font-bold text-md h-12 flex items-center'> Next store
        </Link>

      </nav>
    )
}


export default Navbar;