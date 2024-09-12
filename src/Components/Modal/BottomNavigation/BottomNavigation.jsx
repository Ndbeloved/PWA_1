import { useState } from "react";
import IconButtonWithCaption from "../../IconButtonWithCaption/IconButtonWithCaption"
import "./BottomNavigation.css"
import HomeIconActive from '@mui/icons-material/HomeRounded'
import HomeIcon from "@mui/icons-material/HomeOutlined";
import UserIconActive from "@mui/icons-material/PersonRounded"
import UserIcon from "@mui/icons-material/PersonOutlined"
import SearchOutlined from "@mui/icons-material/SearchOutlined"
import NotificationsNoneOutlined from "@mui/icons-material/NotificationsNoneOutlined"
import NotificationsOutlined from "@mui/icons-material/NotificationsOutlined"
import BookmarkIcon from "@mui/icons-material/TurnedInNotOutlined"
import BookmarkIconActive from "@mui/icons-material/TurnedInOutlined"

const BottomNavigation = () => {
    const [activeEl, setActiveEl] = useState(0)

    const handleClick = (e)=>{
        alert("clicked")
    }

    return (
        <footer className='bottom-navigation'>
            <IconButtonWithCaption isActive={activeEl === 0} label="For you" Icon={activeEl === 0 ? HomeIconActive :HomeIcon} onClick={()=>{setActiveEl(0)}} />
            <IconButtonWithCaption isActive={activeEl === 3} label="Explore" Icon={SearchOutlined} onClick={()=>{setActiveEl(3)}} />
            <IconButtonWithCaption isActive={activeEl === 4} label="Alerts" Icon={activeEl === 4 ? NotificationsOutlined : NotificationsNoneOutlined} onClick={()=>{setActiveEl(4)}} />
            <IconButtonWithCaption isActive={activeEl === 1} label="Saved" Icon={activeEl === 1 ? BookmarkIconActive : BookmarkIcon} onClick={()=>{setActiveEl(1)}}/>
            <IconButtonWithCaption isActive={activeEl === 2} label="Profile" Icon={activeEl === 2 ? UserIconActive : UserIcon} onClick={()=>{setActiveEl(2)}} />
        </footer>
    )
}

export default BottomNavigation