import React from 'react';
// import HomePage from './pages/homepage/homepage.component';
import './App.css';  
import { Route, Link } from 'react-router-dom';

const HomePage=props=>{
  console.log(props)
  return (
  <div>
    <button onClick={()=>props.history.push('/topics')}>Topics</button>
    <br/>
    <h1>
    HomePage PAGE
    </h1>
  </div>
);
  }

const TopicsList=(props)=>{
  console.log(props)

  return (
  <div>
    <Link to={`${props.match.url}/13`}>to topic 13</Link>
    <Link to={`${props.match.url}/19`}>to topic 19</Link>
    <Link to={`${props.match.url}/20`}>to topic 20</Link>
    <h1>
    Topics List PAGE
    </h1>
  </div>
);
  }

const TopicDetail=(props)=>{
  console.log(props)
  return(
  <div>
    <h1>
    Topic Detail PAGE:{props.match.params.topicID}
    </h1>
  </div>
);
  }
function App() {
  
  return (
    <div>
      <Route  path='/' component={HomePage}/>
      <Route exact path='/topics' component={TopicsList}/>
      <Route path='/topics/:topicID' component={TopicDetail}/>

    </div>
  );

}
export default App;
