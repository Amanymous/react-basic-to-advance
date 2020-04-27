// ==========================section 1=======================
import React from 'react';
import logo from './logo.svg';
import './App.css';
// setState multiple choice ky liye use like ager mijhe
// 1 or more then 1 condition lagani ho 
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      meaningOfLife:9
    }
  }
  handleClick=()=>{
    this.setState({meaningOfLife:'aman'}, 
    ()=>console.log(this.state.meaningOfLife))
    }
   
  // handleClick=()=>{
  //   this.setState({meaningOfLife:this.state.meaningOfLife+1}, 
  //   ()=>console.log(this.state.meaningOfLife))
  // }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {this.state.meaningOfLife}
        </p>
        <button 
        onClick={this.handleClick}  >
         Update state
        </button>
      </header>
    </div>
  );
}}

export default App;


// ===================Section 2==========================
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// // setState multiple choice ky liye use like ager mijhe
// // 1 or more then 1 condition lagani ho 
// class App extends React.Component{
//   constructor(pr){
//     super()
//     this.state = {
//       meaningOfLife:9
//     }
//   }
//   handleClick=()=>{
//     this.setState((prevState,prevProps)=> {

//       // return {meaningOfLife:prevState.meaningOfLife+this.props.increment}
//       return {meaningOfLife:prevState.meaningOfLife+prevProps.increment}

//     },
//     ()=>console.log(this.state.meaningOfLife)
//     )
//     }
   
//   render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//             {this.state.meaningOfLife}
//         </p>
//         <button 
//         onClick={this.handleClick}  >
//          Update state
//         </button>
//       </header>
//     </div>
//   );
// }}

// export default App;

// =========================Section 3=======================
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// // setState multiple choice ky liye use like ager mijhe
// // 1 or more then 1 condition lagani ho 
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       meaningOfLife:9+this.props.increment
//       // 2nd way dono ma sy koi bi use karsakty hain
//     }
//     // this.props=props ist way
//     // ye constructor ma props use karny ka tarika ha
//   }
//   handleClick=()=>{
//     this.setState((prevState,prevProps)=> {

//       // return {meaningOfLife:prevState.meaningOfLife+this.props.increment}
//       return {meaningOfLife:prevState.meaningOfLife+prevProps.increment}

//     },
//     ()=>console.log(this.state.meaningOfLife)
//     )
//     }
   
//   render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//             {this.state.meaningOfLife}
//         </p>
//         <button 
//         onClick={this.handleClick}  >
//          Update state
//         </button>
//       </header>
//     </div>
//   );
// }}

// export default App;

// ==================Section 4=========================
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// // setState multiple choice ky liye use like ager mijhe
// // 1 or more then 1 condition lagani ho 
// class App extends React.Component{
//   state = {
//       meaningOfLife:9
//     }
   
//   handleClick=()=>{
//     this.setState((prevState,prevProps)=> {
//       return {meaningOfLife:prevState.meaningOfLife+1}

//     },
//     ()=>console.log(this.state.meaningOfLife)
//     )
//     }
   
//   render(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//             {this.state.meaningOfLife}
//         </p>
//         <button 
//         onClick={this.handleClick}  >
//          Update state
//         </button>
//       </header>
//     </div>
//   );
// }}

// export default App;
