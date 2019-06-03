import React from 'react';
import { Container } from './style';
import { IoMdPin, IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

const UserProfile = () => (
  <Container>
    <img
      src="https://avatars0.githubusercontent.com/u/8916632?v=4"
      alt="User avatar"
    />
    <div className="user-info">
      <span className="name">Manoel Lobo</span>
      <span className="title">Software Developer</span>
      <span className="location">
        <IoMdPin aria-hidden />
        Campina Grande, Brazil
      </span>
      <div className="social">
        <span className="github">
          <a href="">
            <IoLogoGithub aria-label="Github profile" />
          </a>
        </span>
        <span className="twitter">
          <a href="">
            <IoLogoTwitter aria-label="Twitter feed" />
          </a>
        </span>
      </div>
    </div>
  </Container>
);

export default UserProfile;
