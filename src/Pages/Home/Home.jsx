import { useLocation, useNavigate } from "react-router-dom"
import "../Styles/Home.css"
import Modal from "../../Components/Modal/Modal"
import { useEffect, useState } from "react"
import Navigation from "../../Components/Navigation/Navigation"
import BottomNavigation from "../../Components/Modal/BottomNavigation/BottomNavigation"

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

    return (
        <>
        <Navigation />
        <section className="home-wrapper">
            <ul>
                <li onClick={()=> handleItemClick(1)}>Item 1</li>
                <li onClick={()=> handleItemClick(2)}>Item 2</li>
                <li onClick={()=> handleItemClick(3)}>Item 3</li>
                <li>{JSON.stringify(stateLocation)}</li>
            </ul>

            {/* Rendering modal conditionally based on the URL */}
            { stateLocation.modal && (
                <Modal 
                itemId = { stateLocation?.itemId }
                onClose = {()=> window.history.back()}
                />
            )}
        </section>
        <BottomNavigation />
        </>
    )
}

export default Home