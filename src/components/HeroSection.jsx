import React from 'react';
import styled from "styled-components";

const MainSec = styled.section`
 padding:0 1.4rem;
 margin:0 0.8rem;
 border-left:1px solid black;
 border-right:1px solid black;
//  border-radius:9px;
 opacity:1;

.hero-section{
    padding:1rem 0;
    position: relative;

    img {
        display:block;
        width:100%;
        height: 100%; 
        object-fit: cover;
        object-align: center;
        box-shadow: 0.6rem 0.4rem;
        filter: brightness(70%);


        &:hover{
            cursor:cursor;
            filter: brightness(89%);
        }
    }

    .text{
        position:absolute;
        margin-right:1rem;
        bottom: 40%;
        left: 70%;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.helper};
        opacity: 0.8;
        
        h3{
            margin:0.6rem 0.9rem;
            font-size:x-large;
            font-weight:bold;
            text-align:center;
            text-transform:uppercase;
            text-decoration:underline;
        }

        p{
            font-size:2rem;
            color: ${({ theme }) => theme.colors.heading};
            font-weight:bold;
            text-align:center;
        }

        &:hover{
            cursor:cursor;
            opacity: 1;
        }
        
    }
}

`;


const HeroSection = () => {
    return (

        <MainSec>
            <div className="hero-section">
                <picture className='hero-img'>
                    <img src="./cardrive.png" alt="loading..." />
                    <div className="text">
                        <h3>Drive Safe and Responsibly</h3>
                        <p>``Safety on the road is a responsibility we all share``
                        </p>
                    </div>
                </picture>
            </div>
        </MainSec>

    )
}

export default HeroSection