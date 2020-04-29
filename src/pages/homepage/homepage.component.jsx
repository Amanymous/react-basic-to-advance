import React from 'react';

import Directory from '../../components/directory/directory.component';
import { HomePageContianer } from './homepage.styles';
// import './homepage.styles.scss';

const HomePage = () => (
  <HomePageContianer className='homepage'>
    <Directory />
  </HomePageContianer>
);

export default HomePage;
