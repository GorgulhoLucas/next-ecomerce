'use client'

import { useCartStore } from "@/store";

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
                2
                </span>
            </div>


            {!useStore.isOpen && (
                <div onClick={() => useStore.toggleCart()} className='fixed  w-full h-screen bg-black/25 left-0 top-0 z-50'>
                    <div 
                    onClick={(e) => e.stopPropagation()}
                    className='absolute bg-slate-600 right-0 top-0 w-1/3 h-screen p-12 overflow-y-scroll'>
                        
                        <h1>Meu carrinho</h1>

                        {useStore.cart.map((item) => (
                            <div key={item.id}>{item.name}</div>
                        ))}

                    </div>
                </div> 
            )}          

            

        </>
    );
}