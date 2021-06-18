import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Title from '../Title';

export default class Fade extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const { clientsTestimonial } = this.props;

    return (
      <>
        {clientsTestimonial.length === 0 ? (
          <p>Loading Testimonail</p>
        ) : (
          <div style={{ maxWidth: '100vw' }}>
            <Title title="client testimonials" />
            <Slider {...settings}>
              {clientsTestimonial.map((clientTestimonial, index) => {
                const {
                  fields: {
                    name,
                    testimonial,
                    userphoto: {
                      fields: {
                        file: { url },
                      },
                    },
                  },
                } = clientTestimonial;
                return (
                  <div className="testimonial" key={index}>
                    <img className="mx-auto" src={url} alt={name} />
                    <h5>{testimonial}</h5>
                    <p>- {name}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
        )}
      </>
    );
  }
}
