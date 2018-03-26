import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchUser } from '../../redux/modules/user';
import Profile from './Profile';
import Loader from '../../components/Loader/Loader';

class ProfileScreen extends Component {
  static navigationOptions = () => {
    return {
      title: 'Profile',
      tabBarLabel: 'Profile'
    };
  };

  async componentDidMount() {
    const { userAuth } = this.props;

    await this.props.dispatch(fetchUser(userAuth));
  }

  render() {
    const { navigation, userData, userAuth, isLoading } = this.props;
    return isLoading ? (
      <Loader />
    ) : (
      <Profile
        navigation={navigation}
        userData={userData}
        userAuth={userAuth}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  userData: state.user.userData,
  userAuth: state.auth.authenticated
});

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  userAuth: PropTypes.string,
  isLoading: PropTypes.bool
};

export default connect(mapStateToProps)(ProfileScreen);
