import React from 'react';

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={'Nitansh'}
          feedback={'Wow, What a portfolio, simply Awesome.'}
          src={'https://avatars.githubusercontent.com/u/102876956?s=96&v=4'}
        />

        <TestimonialCard
          name={'Suniel'}
          feedback={'Great Design i have ever seen. Keep it up!'}
          src={'https://avatars.githubusercontent.com/u/88705142?v=4'}
        />

        <TestimonialCard
          name={'Ashutosh'}
          feedback={'Simple and Attractive portfolio.'}
          src={'https://avatars.githubusercontent.com/u/83029388?v=4'}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback, src }) => (
  <article>
    <img src={src} alt='User' />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
