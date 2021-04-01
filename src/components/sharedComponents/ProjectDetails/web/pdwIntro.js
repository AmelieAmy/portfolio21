
import React from 'react'
import styled from "styled-components";

// Component links
import Title from '../../titles';
import Txt from '../../texts';

import PDWMultipleFormatIntro from "./pdwMultipleFormatIntro";
import PDWSoloFormatIntro from "./pdwSoloFormatIntro";

// Assets links
import projectsDatas from '../../../../assets/datas/projectsDatas';

// Style links
import 'react-slideshow-image/dist/styles.css'


const pdwIntro = ({title, subTitle, pageName}) => {

    return (
        <PdwIntro>
            <Title type="H1" theme="h1__projectDetailsTitle" content={title} />
            <Txt type="p__texts_glowy" content={subTitle}/>
            { projectsDatas.map((project) => (
                project.urlName === pageName &&
                project.sliderIntroPicNbs > 2
                ? <PDWMultipleFormatIntro pageName={pageName} key={project.id} />
                : null
            )) }
            { projectsDatas.map((project) => (
                project.urlName === pageName &&
                project.sliderIntroPicNbs < 2
                ? <PDWSoloFormatIntro pageName={pageName} key={project.id} />
                : null
            )) }
        </PdwIntro>
    )
}

export default pdwIntro


const PdwIntro = styled.div`

    h1
    {
        margin: 45px 0px 0px;
    }

    p
    {
        font-size: 1rem;
    }

`;