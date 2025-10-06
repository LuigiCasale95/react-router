const  CardProdotto = (props) => {
    
    const {src, title, price} = props

    return (
    <>
        <div className="card" >
            <img src={src} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title"> {title} </h5>
                    
                    <span class="btn btn-primary"> {price} </span>
                </div>
        </div>
    </>
    )
}

export default CardProdotto