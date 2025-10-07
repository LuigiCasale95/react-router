/* import axios */
import axios from "axios";

/* Import useState useEffect */
import { useState, useEffect} from "react";

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
        <div className="infoProduct p-2">

           <h2> Pagina Del prodotto N: {id} </h2>
           <img src={product.image} alt={product.name} />
           <p>{product.description}</p>

        </div>
        </div>

    )
}

export default PageProduct