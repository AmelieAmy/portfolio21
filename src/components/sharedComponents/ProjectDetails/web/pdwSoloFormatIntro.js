import React from 'react'
import styled from "styled-components";

// Component links

// Assets links
import projectsDatas from '../../../../assets/datas/projectsDatas';

// Style links
import 'react-slideshow-image/dist/styles.css'


const SlideSoloPic = ({pageName}) => {
    
    return(
        <SlideSoloPicStyle>
            { projectsDatas.map((project) => (
                project.urlName === pageName &&
                    <div className="soloPic" key={project.id}>
                        <img src={project.sliderIntroPics} alt={project.sliderDesignsTitles[0]} />
                    </div>
            )) }
        </SlideSoloPicStyle>
    )
}

export default SlideSoloPic


const SlideSoloPicStyle = styled.div`
    
    .soloPic
    {
        padding: 10px 0px 15px;
    }

    .soloPic img
    {
        height: 100%;
        max-height: 550px;
    }
`;
