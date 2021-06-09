import React from 'react';
import { team } from '../../data/team';
import Title from '../Title';

const Team = () => {
  return (
    <section className="team">
      <Title title="meet our management team" />
      <article className="team__section">
        {team.map((member, index) => (
          <div key={index}>
            <img
              className="team__section__photo"
              src={member.img}
              alt={member.name}
            />
            <div>
              <h5 className="team__section__name">{member.name}</h5>
              <p className="team__section__title">{member.title}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Team;
