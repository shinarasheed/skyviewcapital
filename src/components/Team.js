import React, { useState, useEffect } from 'react';
import Title from './Title';

import Client from '../Contentful';

const Teamplayer = ({
  fields: {
    title,
    name,
    userPhoto: {
      fields: {
        file: { url },
      },
    },
  },
}) => {
  return (
    <div>
      <img className="team__section__photo" src={url} alt={title} />
      <div>
        <h5 className="team__section__name">{name}</h5>
        <p className="team__section__title">{title}</p>
      </div>
    </div>
  );
};

const Management = () => {
  const [managementTeam, setManagementTeam] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Client.getEntries({
        content_type: 'managementTeam',
      });
      setManagementTeam(response.items);
    }

    fetchData();
  }, []);
  return (
    <section className="team">
      <Title title="board of directors" />
      <article className="team__section">
        {managementTeam.map((member) => (
          <Teamplayer {...member} key={member.sys.id} />
        ))}
      </article>
    </section>
  );
};

export default Management;
