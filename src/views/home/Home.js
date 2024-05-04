import React from 'react';

import { appConfig } from '../../config/appConfig';

const Home = () => {
  return (
    <>
      {appConfig.sections.map((section, idx) => {
        const Component = section.component;

        return <Component key={`item${idx}`} />
      })}
    </>
  )
};

export default Home;
