'use client'

import { useCartStore } from "@/store";
import CartDrawer from "./CartDrawer";

export default function Cart(){
    const useStore = useCartStore();
    return(
        <>
            <div onClick={() => useStore.toggleCart()} className="flex items-center cursor-pointer relative">
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
                    {useStore.cart?.length}
                </span>
            </div>


            {!useStore.isOpen && (
                <CartDrawer/>
            )}          

            

        </>
    );
}