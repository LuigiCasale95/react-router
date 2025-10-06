const  CardProdotto = (props) => {
    
    const {src, title, price} = props

    return (
        <div className="card cardMod" >
                <img className="imgM" src={src} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    
                    <span class=""> <i class="fa-solid fa-euro-sign"></i> {price} </span>
                </div>
        </div>

    )
}

export default CardProdotto