import { type Product } from "../shared/types"
import { useState } from "react";


export default function ShoppingCart() {
    const [cartActive, setCartActive] = useState(false)

    const cartInit: Product[] = [
        {
            id: "",
            label: "",
            price: 0,
            category: "",
            currency: ""
        }
    ]
    const [cartContent, setCartContent] = useState([...cartInit])



    const cartHandler = () => {
        setCartActive(!cartActive)

        //attempt to make animated cart
        /*
        const cart = document.getElementById("cart");
        console.log(cart?.offsetHeight)
        if (cart != null) {
            if (cartActive)
                cart.style.maxHeight = "0";
            else
                cart.style.maxHeight = cart.offsetHeight.toString();
        }*/
    }
    let total = 0;


    return (
        <div id="cart">
        <button onClick={cartHandler}><h3>Cart</h3></button>
        <section className={cartActive ? "cartActive" : "cartDisabled"}>
            <ul>
                {cartContent.length > 0
                    ?   cartContent.map((item, index) => (

                        <li key={index}>
                            <span className="title">{item.label}</span>
                            <span className="price">{item.price},-</span>
                            {total += item.price}
                        </li>
                    ))
                    :
                    <li>
                        Empty
                    </li>}
            </ul>
            <p>
                Total <span id="carttotal">{total},-</span>
            </p>
        </section>
        </div>
    )

}