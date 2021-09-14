import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';
import CheckoutPage from './pages/checkout/checkout.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setCurrentUser } from './redux/user/user.actions'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Amplify, API, Auth, Storage } from 'aws-amplify';
const awsExports = require('@/aws-exports').default;



class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

      Amplify.register(API)
  Amplify.register(Storage)
  Amplify.register(Auth)
  /* Register the services before configure */
  Amplify.configure(awsExports)

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (
            <Redirect to='/' />
          ) : (
              <SignInAndSignUpPage />
            )
          }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);