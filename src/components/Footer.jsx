import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <MainFooter>
      <div className="fotter-sec">
        <div className="left-fot">
          <h2>Quick Links</h2>
          <ul>

            <li>
              <NavLink
                className="navbar-link"
                to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                to="/carrier">
                Carrier
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                to="/contact">
                Contact Us
              </NavLink>
            </li>

          </ul>
        </div>
        <div className="center-fot">
          <h2>We are working on</h2>
          <h3>Working Days:</h3>
          <p>Monday - Saturday & Sunday</p>
          <h3>Working Time:</h3>
          <p>5:00 AM - 9:00 PM</p>
          <p>5:00 AM - 5:00 PM (Sunday)</p>
        </div>
        <div className="right-fot">
          <h2>
            Have any Suggestions
          </h2>
          <h3>Leave your message below</h3>
          <div className="container">
            <div className="contact-form">
              <form
                action="https://formspree.io/f/meqylodq"
                method="POST"
                className="contact-inputs">
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  autoComplete="off"
                  required
                />

                <input
                  type="email"
                  name="Email"
                  autoComplete="off"
                  placeholder="Email"
                  required
                />

                <textarea
                  name="message"
                  cols="30"
                  rows="2"
                  autoComplete="off"
                  placeholder="Message"
                  required></textarea>

                <input type="submit" value="send" />
              </form>
            </div>
          </div>
        </div>
      </div>

    </MainFooter>
  )
}

const MainFooter = styled.footer`
 padding: 2rem 3.6rem;
 border: 1px solid black; 
 margin: 1rem;
 border-radius: 0.5rem;

  .fotter-sec{
    display: flex;
    gap: 3.2rem;
    justify-content: space-evenly;
    h2{
      font-size: 3.6rem;
    }

    .left-fot{
      li{
        font-size: 1.6rem;
        margin: 0.8rem 1.2rem;
        list-style: circle;

        &:hover{
          font-size: 1.8rem;
          font-weight: bold;
        }
      }
    }

    .center-fot{
      h3{
        margin-top: 1rem;
        font-size: 2.5rem;
      }
      p{
        font-size: 2rem;
        font-weight: bold;
        margin-top: 0.2rem;
      }
    }
    
    .right-fot{
      h3{
        font-size: 2rem;
        margin-top: 0.6rem;

      }

      .container {
        margin-top: 2rem;
        text-align: center;
  
        .contact-form {
          max-width: 50rem;
          margin: auto;
  
          .contact-inputs {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
  
            input[type="submit"] {
              cursor: pointer;
              transition: all 0.2s;
  
              &:hover {
                background-color: ${({ theme }) => theme.colors.white};
                border: 1px solid ${({ theme }) => theme.colors.btn};
                color: ${({ theme }) => theme.colors.btn};
                transform: scale(0.9);
              }
            }
          }
        }
      }
    }
    
  }



 }

`;

export default Footer