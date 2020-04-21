import React from 'react';
import Directory from '../../components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Directory/>
  </div>
);

export default HomePage;

// yarn add node-sass
// rm -rf yarn.lock //means ky ap yarn lock delete kar rahy hain 
// ye is liye kar rhy hain sass install karny bad problem create karta ha is waja sy
// rm-rf node_modules // or isky sath apko node modules ko bi delete karna hoga
