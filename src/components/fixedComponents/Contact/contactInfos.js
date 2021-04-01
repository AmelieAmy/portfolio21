import React from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import styled from "styled-components";

// Component links


const contactInfos = ({iconHref, subContent, contentLink, content}) =>
{

    return(
        <ContactInfos>
            <div className="contactInfos">
                <a href={contentLink}>
                    <img src={iconHref} alt={"icone de " + iconHref} className={content === "am_bock@outlook.com" ? "img__Icon_contact_mail" : "img__Icon_contact" } />
                </a>
                <div>
                    <a href={contentLink}>
                        <ScrollAnimation animateIn="slideInRight" offset={70}>
                            <p className="p__texts_mediumColor" >{content}</p>
                            <div className="div__line_underline" ></div>
                        </ScrollAnimation>
                    </a>
                    <p>({subContent})</p>
                </div>
            </div>
        </ContactInfos>
    )
}

export default contactInfos;


const ContactInfos = styled.div`

    .img__Icon_header
    {
        width: 70px;
        cursor: pointer;
    }

    .img__Icon_contact
    {
        width: 70px;
    }

    .img__Icon_contact_mail
    {
        width: 70px;
    }

    .contactInfos
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 25px 0px;
    }

    .contactInfos > div
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contactInfos > div > div
    {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
    }

    .contactInfos > div > div p
    {
        margin: 0px 0px 5px;
    }

    .contactInfos a:last-of-type p
    {
        font-family:"montserrat_medium";
        font-size: 1rem;
        font-weight: 600;
        color: #FFC400;
        letter-spacing: 0.5px;
    }

    .div__line_underline
    {
        width: 100%;
        border-radius: 5px;
        width: 70px;
        height: 1px;
        background-color: #FFC400;
    }

    @media screen and (min-width:800px)
    {
        .img__Icon_header
        {
            width: 70px;
            cursor: pointer;
        }

        .img__Icon_contact
        {
            margin-left: 10px;
            width: 80px;
        }
        
        .img__Icon_contact_mail
        {
            margin-right: 10px;
            width: 80px;
        }

        .contactInfos
        {
            flex-direction: row;
            justify-content: flex-start;
            margin: 50px 0px;
        }

        .contactInfos > div
        {
            align-items: flex-start;
            margin-left: 20px;
        }

        .contactInfos > div > div
        {
            width: 100%;
            justify-content: flex-start;
        }
    }
`;