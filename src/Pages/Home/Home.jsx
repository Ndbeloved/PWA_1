import { useLocation, useNavigate } from "react-router-dom"
import "../Styles/Home.css"
import Modal from "../../Components/Modal/Modal"
import { useEffect, useState } from "react"
import Navigation from "../../Components/Navigation/Navigation"
import BottomNavigation from "../../Components/Modal/BottomNavigation/BottomNavigation"
import ListingCard from "../../Components/ListingCard/ListingCard"
//dummy
import sampleImage1 from "/sample-1.jpg"
import sampleImage2 from "/sample-2.jpg"
import sampleImage3 from "/sample-3.jpg"

const Home = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [ stateLocation , setStateLocation ] = useState({})

    function handleItemClick(id){
        navigate(`/item/${id}`, 
            {
                state: {
                    modal: true,
                    itemId: id
                }
            }
        )
    }

    useEffect(function(){
        if(location.state){
            setStateLocation( location.state)
        }
        else{
            setStateLocation({})
        }
    }, [location.pathname])

    const data = [
        {
            images: [sampleImage1, sampleImage2, sampleImage3],
            name: "Dominion City Lodge",
            price: "120,000",
            location: "Eziobodo Federal University of Technology Owerri, Imo"
        },
        {
            images: [sampleImage2, sampleImage1, sampleImage3],
            name: "ND's Lodge",
            price: "200,000",
            location: "Umuchima Federal University of Technology Owerri, Imo"
        },
        {
            images: [sampleImage3, sampleImage1, sampleImage2],
            name: "2 Bedroom Duplex",
            price: "80,000,000",
            location: "363 7th Avenue Egbeada Owerri, Imo"
        }
    ]

    return (
        <>
        <Navigation />
        <section className="home-wrapper">
            {/* <ul>
                <li onClick={()=> handleItemClick(1)}>Item 1</li>
                <li onClick={()=> handleItemClick(2)}>Item 2</li>
                <li onClick={()=> handleItemClick(3)}>Item 3</li>
                <li>{JSON.stringify(stateLocation)}</li>
            </ul> */}

            {/* Rendering modal conditionally based on the URL */}
            {/* { stateLocation.modal && (
                <Modal 
                itemId = { stateLocation?.itemId }
                onClose = {()=> window.history.back()}
                />
            )} */}
            {data && data.map((info, index)=>(
                <ListingCard data={info} key={index} />
            ))}
        </section>
        <BottomNavigation />
        </>
    )
}

export default Home