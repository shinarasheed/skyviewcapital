import React from 'react';
import '../styles/header.scss';
import { HiOutlineMail } from 'react-icons/hi';
import phone from '../assets/images/phone.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';
import linkedin from '../assets/images/linkedin.png';

const socials = [
  {
    id: 1,
    name: 'facebook',
    logo: facebook,
  },
  {
    id: 2,
    name: 'twitter',
    logo: twitter,
  },
  {
    id: 3,
    name: 'linkedin',
    logo: linkedin,
  },
];

const Header = () => {
  return (
    <section className="header">
      <div className="addressSection">
        <div className="emailAddress d-flex align-items-center mr-3">
          <HiOutlineMail style={{ color: '#fff', fontSize: '2rem' }} />
          <span className="email">info@skyviewcapitalng.com</span>
        </div>
        <div className="phoneNumber d-flex align-items-center">
          <img src={phone} alt="phone" />
          <span className="phone">0700000000023</span>
        </div>
      </div>

      <div className="addressInfo d-flex align-items-center">
        <span>Monday - Friday (8AM - 5PM)</span>
        <div className="socials">
          {socials.map((item) => {
            return <img key={item.id} src={item.logo} alt={item.name} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Header;
