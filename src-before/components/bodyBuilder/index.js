import React from "react"

import MainBanner from "../bodyComponents/mainBanner"
import TextBlockBtn from "../bodyComponents/textBlockBtn"
import Purchase from "../bodyComponents/purchase"
import FeaturedTalks from "../bodyComponents/featuredTalks"
import FeaturedSpeakers from "../bodyComponents/featuredSpeakers"

const bodyBuilder = (props) => {
    let section = null

    switch (props.sectionType) {
        case('mainBanner'):
            section = (
                <MainBanner
                    currentPageID = {props.pageId}
                    currentSectionID = {props.sectionId}
                    currentSectionData = {props.sectionData}
                />
            )
            break;

        case ('textBlockBtn'):
            section = (
                <TextBlockBtn
                    currentPageID ={props.pageId}
                    currentSectionID ={props.sectionId}
                    currentSectionData = {props.sectionData}
                />
            )
            break

        case ('purchase'):
            section = (
                <Purchase
                    currentPageID ={props.pageId}
                    currentSectionID ={props.sectionId}
                    currentSectionData = {props.sectionData}
                />
            )
            break

        case ('featuredTalks'):
            section = (
                <FeaturedTalks
                    currentPageID ={props.pageId}
                    currentSectionID ={props.sectionId}
                    currentSectionData = {props.sectionData}
                />
            )
            break

        case ('featuredSpeakers'):
            section = (
                <FeaturedSpeakers
                    currentPageID ={props.pageId}
                    currentSectionID ={props.sectionId}
                    currentSectionData = {props.sectionData}
                />
            )
            break

        default:
            section = null

    }

    return (
        <>
            { section }
        </>
    )
}

export default bodyBuilder