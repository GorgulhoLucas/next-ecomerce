import { useCartStore } from "@/store";
import { headers } from "next/headers";
import { useEffect } from "react";

export default function Checkout() {
    const cartStore = useCartStore();

    useEffect(() => {
        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                items: cartStore.cart,
                payment_intent_id: cartStore.paymentIntent,
            }),
        })
    }, [cartStore.cart, cartStore.paymentIntent]);

    return(
        <div className="bg-black-500">
            <h1> checkout </h1>
        </div>
    );
}