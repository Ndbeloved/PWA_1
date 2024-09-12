import { useState } from "react";
import IconButtonWithCaption from "../../IconButtonWithCaption/IconButtonWithCaption"
import "./BottomNavigation.css"
import HomeIcon from '@mui/icons-material/HomeRounded'
import UserIcon from "@mui/icons-material/PersonRounded"
import DownloadIcon from "@mui/icons-material/DownloadRounded"
import ArticleIcon from "@mui/icons-material/ArticleRounded"
import SearchOutlined from "@mui/icons-material/SearchOutlined"

const BottomNavigation = () => {
    const [activeEl, setActiveEl] = useState(0)

    const handleClick = (e)=>{
        alert("clicked")
    }

    return (
        <footer className='bottom-navigation'>
            <IconButtonWithCaption isActive={activeEl === 0} label="For you" Icon={HomeIcon} onClick={()=>{setActiveEl(0)}} />
            <IconButtonWithCaption isActive={activeEl === 3} label="Explore" Icon={SearchOutlined} onClick={()=>{setActiveEl(3)}} />
            <IconButtonWithCaption isActive={activeEl === 4} label="Alerts" Icon={ArticleIcon} onClick={()=>{setActiveEl(4)}} />
            <IconButtonWithCaption isActive={activeEl === 1} label="Saved" Icon={DownloadIcon} onClick={()=>{setActiveEl(1)}}/>
            <IconButtonWithCaption isActive={activeEl === 2} label="Profile" Icon={UserIcon} onClick={()=>{setActiveEl(2)}} />
        </footer>
    )
}

export default BottomNavigation