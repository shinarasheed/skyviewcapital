import React from 'react';
import { lastestnews } from '../../data/latestnews';

const LatestNews = () => {
  return (
    <section className="lastestnews">
      <h3 className="text-uppercase text-center">latest news</h3>
      <article>
        {lastestnews.map((news, index) => (
          <div key={index}>
            <img src={news.img} alt={news.title} />
            <div>
              <h5>{news.title}</h5>
              <p>{news.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default LatestNews;
