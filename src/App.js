import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header/header.component";
import signInUp from "./pages/sign-in-up/sign-in-up.component";
import { auth, createUserPorfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          // yahan check kar raha ha ky user null ha ya nai
          const userRef = await createUserPorfileDocument(userAuth)
          userRef.onSnapshot(snapshot=>{
            // console.log(snapshot.data())
            // ye data show karega id or email ka
            this.setState({
                currentUser:{
                  id:snapshot.id,
                  ...snapshot.data()
                }
              },()=>{
                console.log(this.state)

              })
            })
        }
        // means user ager logout kary to user phir null hojy
        this.setState({currentUser:userAuth})
    })
  }
  // 3rd
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={signInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
// ager exact ma dunga router ma to wo ek fix cheez ko render karega
// or ager exact nai dunga to wo har cheex ko render karega jo particular dosri class sath hain
// switch hamesha path ko dekhta jo cheez path given hogi sirf ausko render karega
// baki sb ko neglect kardega
