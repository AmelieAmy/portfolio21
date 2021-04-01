import React from 'react'
import { Slide } from 'react-slideshow-image';
import styled from "styled-components";

// Component links

// Assets links
import projectsDatas from '../../../../assets/datas/projectsDatas';
import mobileIcon from '../../../../assets/icons/mobileIcon.svg';
import tabletIcon from '../../../../assets/icons/tabletIcon.svg';
import desktopIcon from '../../../../assets/icons/desktopIcon.svg';

// Style links
import 'react-slideshow-image/dist/styles.css'


const SlideThreePics = ({pageName}) => {
    
    const slideInProperties = {
        scale: 0.4,
        indicators: i => (
            <div className="indicator">
                {i +1}
            </div>
        ),
        arrows: false
    }
    
    const properties = {
        duration: 2500,
        infinite: true,
    };
    
    return(
        <SlideThreePicsStyle>
            <div className="slide-container">
                { projectsDatas.map((project) => (
                    project.urlName === pageName &&
                    <Slide {...slideInProperties}{...properties} key={project.id}>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${project.sliderIntroPics[0]})`}}>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${project.sliderIntroPics[1]})`}}>
                                </div>
                            </div>
                        <div className="each-slide">
                            <div style={{'backgroundImage': `url(${project.sliderIntroPics[2]})`}}>
                            </div>
                        </div>
                    </Slide>
                )) }
            </div>
        </SlideThreePicsStyle>
    )
}

export default SlideThreePics


const SlideThreePicsStyle = styled.div`

    .slide-container
    {
        padding: 10px 0px 40px;
    }

    .slide-container > div
    {
        display: flex;
        flex-direction: column;
    }

    .each-slide > div
    {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 250px;
    }

    .slide-container .react-slideshow-container
    {
        width: 100%;
        margin: 0 auto;
    }

    .indicators
    {
        padding: 0px;
    }

    .indicator
    {
        cursor: pointer;
        padding: 10px 20px;
        margin: 0px 10px;
        color: rgba(0, 0, 0, 0);
        text-align: center;
        height: 50px;
    }

    .indicator:first-of-type
    {
        background: 50% 0% / 90% 90% no-repeat url(${mobileIcon});
        width: 50px;
    }

    .indicator:nth-of-type(2)
    {
        background: 50% 0% / 90% 90% no-repeat url(${tabletIcon});
        width: 60px;
    }

    .indicator:last-of-type
    {
        background: 50% 0% / 90% 90% no-repeat url(${desktopIcon});
        width: 70px;
    }

    .indicator.active
    {
        background-color: #FF7700;
        border-radius: 2px;
    }

    @media screen and (min-width:600px)
    {
        .each-slide > div
        {
            height: 300px;
        }
    }

    @media screen and (min-width:1200px)
    {
        .slide-container
        {
            padding: 10px 0px 40px;
        }
        
        .slide-container > div
        {
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        
        .each-slide > div
        {
            height: 550px;
        }

        .slide-container .react-slideshow-container
        {
            width: 1000px;
            padding-left: 5%;
            margin: 0px;
        }

        .indicators
        {
            display: flex;
            flex-direction: column;
        }

        .indicator:first-of-type, .indicator:nth-of-type(2), .indicator:last-of-type
        {
            width: 60px;
            height: 60px;
            margin: 10px 0px;
        }
    }

    @media screen and (min-width:1600px)
    {
        .slide-container .react-slideshow-container
        {
            padding-left: 4%;
        }
    }

`;