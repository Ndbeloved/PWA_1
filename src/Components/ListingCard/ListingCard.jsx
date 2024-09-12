import "./ListingCard.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Favourite from "../Favourite/Favourite"
import { IoLocationSharp } from "react-icons/io5"

const ListingCard = ({data}) => {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <div className="listing-card">
            <Favourite />
            <Slider {...settings}>
                {data.images.map((image, index)=>(
                    <div className="image-div">
                        <img src={image} />
                    </div>
                ))}
            </Slider>
            <h3 id="name">{data.name}</h3>
            <p id="price">&#8358;{data.price}</p>
            <p id="location"><IoLocationSharp /> {data.location} </p>
        </div>
    )
}

export default ListingCard