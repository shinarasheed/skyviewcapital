import React, { useEffect, useState } from 'react';
import Title from '../Title';

import Client from '../../Contentful';

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await Client.getEntries({
        content_type: 'managementTeam',
      });
      setTeam(response.items);
    }

    fetchData();
  }, []);

  return (
    <section className="team">
      <Title title="meet our management team" />
      <article className="team__section">
        {team.length > 0 && (
          <>
            {team.map((teamMember, index) => {
              const {
                fields: {
                  name,
                  title,
                  userPhoto: {
                    fields: {
                      file: { url },
                    },
                  },
                },
              } = teamMember;

              return (
                <div key={index}>
                  <img className="team__section__photo" src={url} alt={name} />
                  <div>
                    <h5 className="team__section__name">{name}</h5>
                    <p className="team__section__title">{title}</p>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </article>
    </section>
  );
};

export default Team;
