import React, { useEffect, useState } from 'react';

const SingleService = ({ props }) => {
  const [service, setService] = useState({});
  const { slug } = props.match.params;

  useEffect(() => {
    const response = await client.getEntries({
      content_type: 'recipe',
      'fields.slug': slug,
    });

    setService(response.items[0]);
  }, [service]);

  return <div></div>;
};

export default SingleService;
