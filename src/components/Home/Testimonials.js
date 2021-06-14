// import React from 'react';
// import { testimonials } from '../../data/testimonials';
// import Title from '../Title';

// const Testimonials = () => {
//   return (
//     <section className="testimonials">
//       <Title title="client testimonials" />
//       <article className="testimonials__section">
//         {testimonials.map((testimonial, index) => (
//           <div className="testimonial" key={index}>
//             <img
//               className="mx-auto"
//               src={testimonial.img}
//               alt={testimonial.name}
//             />
//             <h5>{testimonial.testimonial}</h5>
//             <p>- {testimonial.name}</p>
//           </div>
//         ))}
//       </article>
//     </section>
//   );
// };

// export default Testimonials;

import React, { Component } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Title from '../Title';

import { testimonials } from '../../data/testimonials';

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
    return (
      <div>
        <Title title="client testimonials" />
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <img
                className="mx-auto"
                src={testimonial.img}
                alt={testimonial.name}
              />
              <h5>{testimonial.testimonial}</h5>
              <p>- {testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
