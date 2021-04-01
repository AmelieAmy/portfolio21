import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import styled from "styled-components";

// Assets links
import ReactJS from '../../../assets/icons/reactJS.svg';
import Wordpress from '../../../assets/icons/wordpress.svg';
import Illustrator from '../../../assets/icons/illustrator.svg';
import Photoshop from '../../../assets/icons/photoshop.svg';
import AdobeXD from '../../../assets/icons/adobeXD.svg';


const softs = () => {
    return (
        <Softs>
            <div className="softs">
                <div>
                    <ScrollAnimation animateIn="rollIn" animateOut="rollOut">
                        <img src={ReactJS} alt="Icone de ReactJS"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="rollIn" animateOut="rollOut">
                        <img src={Wordpress} alt="Icone de Wordpress"/>
                    </ScrollAnimation>
                </div>
                <div>
                    <ScrollAnimation animateIn="rollIn" animateOut="rollOut">
                        <img src={Illustrator} alt="Icone du logiciel Illustrator"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="rollIn" animateOut="rollOut">
                        <img src={Photoshop} alt="Icone du logiciel Photoshop"/>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="rollIn" animateOut="rollOut">
                        <img src={AdobeXD} alt="Icone du logiciel AdobeXD"/>
                    </ScrollAnimation>
                </div>
            </div>
        </Softs>
    )
}

export default softs


const Softs = styled.div`

    .softs
    {
        margin: 20px 0px
    }

    .softs > div
    {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img
    {
        width: 130px;
        margin: 3px;
    }

    @media screen and (max-width: 450px)
    {
        .softs img
        {
            width: 100px;
        }     
    }

    @media screen and (min-width: 800px)
    {
        .softs
        {
            margin: 50px 0px
        }   

        img
        {
            margin: 10px;
        }
    }

`;