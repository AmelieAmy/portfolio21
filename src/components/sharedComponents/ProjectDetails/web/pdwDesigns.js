import React from 'react'
import { Slide } from 'react-slideshow-image';
import styled from "styled-components";

// Assets links
import projectsDatas from '../../../../assets/datas/projectsDatas';
import RightArrowIcon from '../../../../assets/icons/rightArrowIcon.svg';
import LeftArrowIcon from '../../../../assets/icons/leftArrowIcon.svg';

// Style links
import 'react-slideshow-image/dist/styles.css'


const pdwDesigns = ({pageName}) => {

    const slideShowMiniatures =
        projectsDatas.map((project) => (
        project.urlName === pageName &&
        project.sliderDesignsMiniatures
    ))

    const slideShowPictures =
        projectsDatas.map((project) => (
        project.urlName === pageName &&
        project.sliderDesignsFullSize
    ))

    const slideShowNames =
        projectsDatas.map((project) => (
        project.urlName === pageName &&
        project.sliderDesignsTitles
    ))

    const slideInProperties = {
        scale: 0.4,
        indicators: false
    }

    const properties = pageName === "ak2i"
        ? {
            autoplay: false,
            infinite: false,
            arrows: false
        } : {
            duration: 2000,
            infinite: true,
            prevArrow: <div className="arrow leftArrow"> <img src={LeftArrowIcon} alt="previous arrow" /> </div>,
            nextArrow: <div className="arrow rightArrow"> <img src={RightArrowIcon} alt="next arrow" /> </div>
        }
    
    const PdwDesign = ({imgIndex}) => {
        return(
            projectsDatas.map((project) => (
                project.urlName === pageName &&
                <a href={slideShowPictures[project.index][imgIndex]} alt={slideShowNames[project.index][imgIndex]} key={project.id} >
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideShowMiniatures[project.index][imgIndex]})`}}>
                            <span>{slideShowNames[project.index][imgIndex]}</span>
                        </div>
                    </div>
                </a>
            ))
        )
    }

    return (
        <SlideContainer>
            <div className="slide-container pdwDesigns">
                { projectsDatas.map((projet) => (
                projet.urlName === pageName &&
                    <Slide {...slideInProperties} {...properties} key={projet.id} >
                        { projet.sliderDesignsMiniatures.map((indexNum, index) => (
                            <PdwDesign imgIndex={index} key={projet.index}  />
                        )) }
                    </Slide>
                ))}
                <p>( Cliquez sur l'image pour voir la page complète )</p>
            </div>
        </SlideContainer>
    )
}

export default pdwDesigns


const SlideContainer = styled.div`


.pdwDesigns
{
    padding: 50px 0px 40px;
}

.pdwDesigns .each-slide > div
{
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 250px;
}

.pdwDesigns .each-slide span
{
    align-self: flex-start;
    color: white;
    font-family:"montserrat_medium";
    letter-spacing: 0.7px;
    font-size: 1.4rem;
    font-weight: normal;
}

.pdwDesigns .arrow
{
    width: 80px;
    cursor: pointer;
}

.pdwDesigns .leftArrow
{
    margin-left: -25px;
}

.pdwDesigns .rightArrow
{
    margin-right: -25px;
}

.pdwDesigns .arrow img
{
    width: 80px;
}

.pdwDesigns p
{
    margin: 20px 0px;
}

@media screen and (min-width:600px)
{
    .pdwDesigns .each-slide > div
    {
        height: 300px;
    }
}

@media screen and (min-width:800px)
{
    .pdwDesigns
    {
        width: 95%;
        margin: 0 auto;
    }
    
    .pdwDesigns .leftArrow
    {
        margin-left: 0px;
    }
    
    .pdwDesigns .rightArrow
    {
        margin-right: 0px;
    }    
}

@media screen and (min-width:1200px)
{
    .pdwDesigns
    {
        width:70%;
        margin: 0 auto;
    }
    
    .pdwDesigns .each-slide > div
    {
        height: 340px;
    }
}

`;