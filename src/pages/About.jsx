import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import "../About.css";

const Team = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      facebook: 'https://facebook.com/johndoe',
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe'
    },
    {
      name: 'Jane Smith',
      role: 'Project Manager',
      facebook: 'https://facebook.com/janesmith',
      twitter: 'https://twitter.com/janesmith',
      linkedin: 'https://linkedin.com/in/janesmith'
    },
    {
      name: 'Sam Johnson',
      role: 'UX Designer',
      facebook: 'https://facebook.com/samjohnson',
      twitter: 'https://twitter.com/samjohnson',
      linkedin: 'https://linkedin.com/in/samjohnson'
    },
    {
      name: 'Chris Lee',
      role: 'Data Scientist',
      facebook: 'https://facebook.com/chrislee',
      twitter: 'https://twitter.com/chrislee',
      linkedin: 'https://linkedin.com/in/chrislee'
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <p className="text-blk heading">Conoce nuestro equipo</p>
            <p className="text-blk subHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="responsive-container-block rightSide">
            <div className="slider-container">
              <Slider {...settings}>
                {teamMembers.map((member, index) => (
                  <div key={index} className="card">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <div className="social-icons">
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                      </a>
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;

