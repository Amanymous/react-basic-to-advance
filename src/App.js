import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
// import HomePage from './pages/homepage/homepage.component';

const HomePage = (props) => {
  // ager yahan props dain gy to ye route / ky sath jo bhi define hoga wo bi dega
  console.log(props);
  return (
    <div>
      {/* <Link to="/topics">topics</Link> */}
      <button onClick={()=>props.history.push('/topics')}>Topics</button>
      <h1>HomePage PAGE</h1>
    </div>
  );
};
const TopicList = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Topic List Details</h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/19`}>TO TOPIC 19</Link>
      <Link to={`${props.match.url}/99`}>TO TOPIC 99</Link>

    </div>
  );
};
const TopicDetail = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Topic detail Page: {props.match.params.topicId}</h1>
    </div>
  );
};
function App() {
  return (
    <div>
      {/* <Switch> */}
      <Route path="/" component={HomePage} />
      <Route path="/topics" component={TopicList} />
      <Route path="topics/:topicId" component={TopicDetail} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
// ager exact ma dunga router ma to wo ek fix cheez ko render karega
// or ager exact nai dunga to wo har cheex ko render karega jo particular dosri class sath hain
// switch hamesha path ko dekhta jo cheez path given hogi sirf ausko render karega
// baki sb ko neglect kardega
