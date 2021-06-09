import React from 'react';
import { testimonials } from '../../data/testimonials';
import Title from '../Title';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Title title="client testimonials" />
      <article className="testimonials__section">
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
      </article>
    </section>
  );
};

export default Testimonials;
