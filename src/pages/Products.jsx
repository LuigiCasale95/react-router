import { useState, useEffect } from "react"

import axios from "axios"

/* Import component */
import CardProdotto from "../components/Card"

const  Products = () => {

    const [prodotto, setProdotto] = useState([]) /* Si setta l'useState */

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products") /* Al caricamento della pagina si ottiene il valore del 'api */
        .then((res) => setProdotto(res.data)
        )

    }, [] )
    
    
    return (
    <>
    <div className="row row2">
        
        {prodotto.map((prodotto) => (
            <CardProdotto
            key={prodotto.id}
            title={prodotto.title}
            src={prodotto.image}
            price={prodotto.price}
            />
        ))}
    </div>
    </>
    )
}

export default Products