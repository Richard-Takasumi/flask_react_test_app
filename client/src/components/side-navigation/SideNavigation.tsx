import React from 'react'
import './SideNavigation.scss'
import { BsPerson } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { Link } from 'react-router-dom'
// create a side navigation component
// it should have icons for each of the following:
// Company Analysis, Bonds, Watchlist, Profile and settings and the bottom
// Clicking on each icon should redirect to the appropriate page
// it should have a company logo at the top

export const SideNavigation = () => {
    return (
        <div className="side-navigation">
            <Link className='link' to="camels"> <MdOutlineDashboardCustomize className='icon'/> </Link>
            <Link className='link' to="bond-overview"> <AiOutlineStock className='icon'/> </Link>
            <Link className='link' to="watchlist"> <AiOutlineEye className='icon'/> </Link>
            <Link className='link' to="portfolio"> <PiSuitcaseSimpleLight className='icon'/> </Link>
            <Link className='link' to="profile"> <BsPerson className='icon'/> </Link>
            <Link className='link' to="settings"> <AiOutlineSetting className='icon'/> </Link>
        </div>
    )
}
