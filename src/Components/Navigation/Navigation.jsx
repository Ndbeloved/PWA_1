import { FaRegBuilding, FaSearch } from "react-icons/fa"
import logo from "/logo-splash-512x512.png"
import { PiBuildingApartment, PiBuildingOfficeBold } from "react-icons/pi"
import "./Navigation.css"
import {  TbBuilding, TbBuildingBroadcastTowerFilled, TbBuildingCottage, TbBuildingEstate, TbBuildingSkyscraper } from "react-icons/tb"
import { LuBed } from "react-icons/lu"
import { IoHomeOutline } from "react-icons/io5"

const Navigation = () => {
    return (
        <nav className="navigation-bar">
            <div className="row-1">
                <div className="search-bar">
                    <FaSearch />
                    <p>Search for Accomodation</p>
                </div>
            </div>
            <div className="row-2">
                <div className="item">
                    <FaRegBuilding />
                    Lodges
                </div>
                <div className="item">
                    <LuBed />
                    Self-contained
                </div>
                <div className="item">
                    <TbBuilding />
                    1-Bedroom
                </div>
                <div className="item">
                    <TbBuildingEstate />
                    2-Bedroom
                </div>
                <div className="item">
                    <TbBuildingCottage />
                    3-Bedroom
                </div>
                <div className="item">
                    <TbBuildingSkyscraper />
                    Duplex
                </div>
                <div className="item">
                    <PiBuildingApartment />
                    Boys' Quarters
                </div>
                <div className="item">
                    <PiBuildingOfficeBold />
                    Office
                </div>
            </div>
        </nav>
    )
}

export default Navigation