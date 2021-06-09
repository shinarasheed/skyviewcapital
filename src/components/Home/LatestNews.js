import React from 'react';
import { lastestnews } from '../../data/latestnews';
import Title from '../Title';

const LatestNews = () => {
  return (
    <section className="lastestnews">
      <Title title="lastest news" />
      <article className="lastestnews__news">
        {lastestnews.map((news, index) => (
          <div key={index}>
            <img className="w-100" src={news.img} alt={news.title} />
            <div>
              <h5 className="news__title">{news.title}</h5>
              <p className="news__description">{news.description}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default LatestNews;
