/* Importi useParams */
import { useParams } from "react-router-dom"

const  PageProduct = () => {
    
    const { id } = useParams

    return (
        
        <div>Pagina Del prodotto N {id} </div>

    )
}

export default PageProduct