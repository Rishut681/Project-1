import React from 'react'
import HeroSection from './components/HeroSection'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HomeSec>
        <HeroSection />
        <div className="line"></div>
        <div className="heading">
          <h1>Our Goal is to Make You a
            Responsible and Safe Driver</h1>
        </div>
        <div className="content">
          <div className="paragraph">
            <p>
              Driving Now-s-days, can be nerve-wracking. One of the largest cities in the world also has the largest variety of driving styles. At our platform, we make certain that you are ready for the City driving experience. Our platform  has always strived to provide all students with the best tools and instructions to become safe and law abiding drivers. Students graduating from our school help make the City a better and a safer place for driving.
            </p>
          </div>
          <div className="paragraph">
            <p className='center-para'>
              Caring and polite nature of the private driving instructors, driving schools make them one of the best in the driving school business. Our platform have all components you will utilize at driving test time and also on a daily basis. The proprietary driving lesson training methods provided by our trusted driving school and instructors are one of the most successful in the driving school business. During the practical driving lessons, you will obtain easy to follow guidance from our private driving instructors and are able to apply them with ease and confidence.
            </p>
          </div>
          <div className="paragraph">
            <p>
              Our goal of our Platform is to make our Nation people's and students who joined us, pass the Driving Test along with instilling the importance of safe and defensive driving. Students who graduate from our platform are competent, defensive and confident drivers who will be ready to handle any type of roads in any condition and any part of the world.
            </p>
          </div>
        </div>
        <div className="second_sec">
          <picture className='hero-img'>
            <img src="./special.jpg" alt="loading..." />
            <div className="text">
              <h2>WHAT MAKES US SPECIAL</h2>
              <div className="parasection">
                <div className="paraleft">
                  <h3>GREAT EXPERIENCE</h3>
                  <p className='para'>We always focuses on trying to Serves the Best Quality Driving Training to their clients.</p>

                </div>
                <div className="paracenter">
                  <h3>CERTIFIED INSTRUCTORS/ DRIVING SCHOOLS</h3>
                  <p className='para'>We have certified, experienced and trend instructors which is our main strong point. And Our connected driving school's are the best in this field.</p>

                </div>
                <div className="pararight">
                  <h3>WOMAN's SAFETY</h3>
                  <p className='para'>We guarantee you won’t ever feel any kind of discomfort with our instructors or any driving school personal.</p>

                </div>
              </div>
            </div>
          </picture>
        </div>
        <div className="service">
          <h2>OUR SERVICES</h2>
          <p>Start your Driving lessons with the best and most trusted driving Instructors. We all have to start somewhere! The first step to getting your full license is your first driving lesson. So you have to be choosier when it comes to learning car driving especially when you have never been behind the wheel of a car before. At our platform you will get driving lessons from basic. We know it can be daunting but all of our Driving Instructors connected with us are professional, experienced and Friendly. Learning to drive should be an enjoyable and stress-free experience! We want you to do well and enjoy driving- so you can Trust us to do our job and get you driving safely.
            <div className="btn">
              <NavLink
                className="navbar-link"
                to="/service">
                Click here to Know Our Services
              </NavLink>
            </div>
          </p>

        </div>
      </HomeSec>

    </>
  )
}

const HomeSec = styled.hgroup`
.line{
  border-top: 1px solid black;
  width: auto;
  margin-left: 2rem;
  margin-right: 2rem;
}

.heading{
  display: flex;
  align-items: center;
  justify-content: center;
  height:auto;
  width:auto;
  margin:2.5rem 0.6rem;


  h1{
    color: ${({ theme }) => theme.colors.black};
    font-size: 4rem;
    width: 60rem;
    font-weight: bold;
    text-align: center;

    
  }
}

.content{
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin:2rem 10rem;
  flex-gap:2rem;
  flex-wrap: nowrap;
  


  p{
    font-size:large;
    margin:1rem 1.4rem;
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    width: 45rem;

  }

  .center-para{
    border-left: 3px solid ${({ theme }) => theme.colors.border};
    border-right: 3px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    padding: 2rem 1rem;
  }
}

.second_sec{
  margin:4rem 13rem;
  position:relative;

  img {
    display:block;
    width:100%;
    height: 65rem; 
    padding:1rem;
    object-fit: cover;
    object-align: center;
    border:1px solid black;
    border-radius:0.8rem;
    opacity:1;
    filter:brightness(60%);
  }

  h2{
    position:absolute;
    bottom: 80%;
    left: 30%;
    text-decoration:underline;
    color: ${({ theme }) => theme.colors.white};
  }

  h3{
    text-align:center;
    color: #FFFFFF;
    font-size:x-large;
    font-weight:bold;
    text-decoration:underline;
    padding:0.5rem;
  }
  
  p{
    text-align:center;
    color: rgb(255,255,255);
    font-size:large;
    font-weight:italic;
  }

  .parasection{
    position:absolute;
    bottom: 20%;
    left:6%;
    display:flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem 5rem;

    .paracenter{
      width:35rem;
      height:auto;
    }
    
    .paraleft{
      width:30rem;
      height:auto;
    }
    
    .pararight{
      width:30rem;
      height:auto;
    }
  }
}

.service{
  margin: 3rem 12rem;
  border:1px solid blue;
  border-radius: 1rem;
  
  h2{
    font-weight:bold;
    text-decoration:underline;
    color:${({ theme }) => theme.colors.helper};
  }
  
  p{
    margin: 3rem 12rem;
    padding: 2rem;
    font-size: large;
    color: rgb(0,0,0);
    font-weight:italic;

    .btn{
      text-align: center;
      padding: 0.8rem;
      margin: auto;
      margin-top: 1.4rem;
      border: 1px solid blue;
      border-radius: 1rem;
      width: 30rem;
    }
  }
}





`;

export default Home
