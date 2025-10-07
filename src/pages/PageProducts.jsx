/* import axios */
import axios from "axios";

/* Import useState useEffect */
import { useState, useEffect} from "react";
/* Import Link */
import { Link } from "react-router-dom";
/* Importi useParams */
import { useParams } from "react-router-dom"


const  PageProduct = () => {

    const [product, setProduct] = useState({}) /* Per dare valore a product */
    
    const { id } = useParams(); /* Per far ritornare l'informazione ad ID */


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch(error => console.log(error)
        )
    } 

    )

    return (
        
        <div className="containerMy">
        <div className="infoProduct p-2 d-flex flex-column align-items-center">

           <h2> {product.title}</h2>
           <img src={product.image} alt={product.title} />
           <p>{product.description}</p>

        <Link className="prova p-3 border border-secondary rounded-pill bg-info" to="/Products">Torna ai prodotti</Link>
        </div>

        </div>

    )
}

export default PageProduct