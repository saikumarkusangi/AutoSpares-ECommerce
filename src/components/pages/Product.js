

const Product = (params) => {
    const {image,title,price} = params
    return(
        <div>
            <img src={image} alt="product"/>
        </div>
    )
}

export default Product