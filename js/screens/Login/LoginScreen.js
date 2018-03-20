import React, { Component } from 'react';

import { connect } from 'react-redux';
import { firebaseAuth } from '../../config/firebaseConfig';
import { AsyncStorage } from 'react-native';
import { isValidEmailAndPassword } from '../../lib/authHelper';

import Login from './Login';
import PropTypes from 'prop-types';
import {
  displayLoginError,
  fetchEmail,
  fetchPassword
} from '../../redux/modules/login';

class LoginContainer extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this._signInAsync = this._signInAsync.bind(this);
  }

  static navigationOptions = {
    header: null
  };

  handleEmail(text) {
    this.props.dispatch(fetchEmail(text));
  }

  handlePassword(text) {
    this.props.dispatch(fetchPassword(text));
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('LocationSearch');
  };
  handleSubmit() {
    const { email, password } = this.props;

    const errorMessage = {
      code: 'Invalid login',
      message: 'Please Enter a Valid Email Address'
    };

    if (isValidEmailAndPassword(email, password)) {
      firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .then(this._signInAsync)

        .catch(err => {
          this.props.dispatch(displayLoginError(err));
        });
    } else {
      this.props.dispatch(displayLoginError(errorMessage));
    }
  }

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        handleEmail={this.handleEmail}
        handlePassword={this.handlePassword}
        email={this.props.email}
        password={this.props.password}
        error={this.props.error}
        navigation={this.props.navigation}
      />
    );
  }
}

LoginContainer.defaultProps = {
  email: '',
  password: '',
  error: {}
};

LoginContainer.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.object,
  dispatch: PropTypes.func,
  navigation: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  error: state.login.error,
  email: state.login.email,
  password: state.login.password
});

export default connect(mapStateToProps)(LoginContainer);