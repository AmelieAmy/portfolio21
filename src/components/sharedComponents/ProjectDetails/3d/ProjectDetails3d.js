import React from "react";
import styled from "styled-components";

// Component links
import Title from '../../titles';
import Txt from '../../texts';

// Assets links
import projectsDatas from '../../../../assets/datas/projectsDatas';


const p3d = () =>
{    
    const currentPath = window.location.pathname;
    const lastword = (words) => {
        let w = words.split("/");
        return w[w.length - 1];
    }    
    const subPageLink = lastword(currentPath)

    return(
        <PD3d>
            { projectsDatas.map((project) => (
                project.urlName === subPageLink &&
                <div key={project.name}>
                    <Title type="H1" theme="h1__projectDetailsTitle" content={project.subName} />
                    <Txt type="p__texts_glowy" content={project.fullProjectName}/>

                    { project.index === 6 || project.index === 7 || project.index === 8|| project.index === 12 || project.index === 13 ?

                        <img className="soloPic" key={project.id} src={project.renderedImgOrVid[0]} alt={project.renderedImgOrVidAlts[0]} />
                        :
                        <iframe key={project.id} title={project.renderedImgOrVidAlts[0]} src={project.renderedImgOrVid[0]} allow="fullscreen"></iframe>
                    }

                    <p>{project.fullProjectDescription[0]}</p>

                    { project.index === 12 ?

                        <>
                            <img className="soloPic" key={project.id} src={project.renderedImgOrVid[1]} alt={project.renderedImgOrVidAlts[0]} />
                            <p>{project.fullProjectDescription[1]}</p>
                        </>
                        
                        : null
                    }

                    { project.index === 10 || project.index === 11|| project.index === 14 ?
                    
                        <div key={project.urlName}>
                            <Title type="H2" theme="h2__separatorClassic" content="Breakdown" />
                            <iframe title={project.renderedImgOrVidAlts[1]} src={project.renderedImgOrVid[1]} allow="fullscreen"></iframe>
                            <p>{project.fullProjectDescription[1]}</p>
                        </div>

                        : null
                    }

                </div>
            )) }
        </PD3d>
    )
}

export default p3d;


const PD3d = styled.div`

    margin-bottom: 50px;
    
    h1
    {
        margin: 45px 0px 0px;
    }

    h2
    {
        margin: 70px 0px 0px;
    }

    p
    {
        font-size: 1rem;
    }

    .soloPic
    {
        height: 100%;
        max-height: 550px;
        width: 100%;
        max-width: 985px;
        margin: 30px 0px;
    }

    iframe
    {
        width: 100%;
        height: 250px;
        margin: 0 auto;
        border: none;
        padding: 25px 0px 5px;
    }

    @media screen and (min-width:1000px)
    {
        iframe
        {
            height: 400px;
            padding: 20px 0px;
        }
        
        h2
        {
            margin: 60px 0px 10px;
        }
    }

    @media screen and (min-width:1200px)
    {
        iframe
        {
            height: 600px;
        }
    }
`;