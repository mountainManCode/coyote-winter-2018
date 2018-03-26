import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ImagePicker from 'react-native-image-crop-picker';

import ProfileHeader from './ProfileHeader';
import { updateUserData, updateToggleEditable } from '../../redux/modules/user';

class ProfileHeaderContainer extends Component {
  openPicker = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
      cropperCircleOverlay: true,
      compressImageQuality: 0
    }).then(image => {
      this.handleImage(image.data);
    });
  };

  handleImage = image => {
    this.props.dispatch(updateUserData(this.props.userAuth, { image }));
  };
  handleBio = userData => {
    this.props.dispatch(updateUserData(this.props.userAuth, { bio: userData }));
  };
  handleFirstName = userData => {
    this.props.dispatch(
      updateUserData(this.props.userAuth, { firstName: userData })
    );
  };
  handleLastName = userData => {
    this.props.dispatch(
      updateUserData(this.props.userAuth, { lastName: userData })
    );
  };
  handleLocation = userData => {
    this.props.dispatch(
      updateUserData(this.props.userAuth, { location: userData })
    );
  };
  handleToggleEditable = () => {
    this.props.dispatch(updateToggleEditable());
  };
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    const { userData, editable } = this.props;

    return (
      <ProfileHeader
        editable={editable}
        openPicker={this.openPicker}
        handleBio={this.handleBio}
        handleFirstName={this.handleFirstName}
        handleLastName={this.handleLastName}
        handleLocation={this.handleLocation}
        handleToggleEditable={this.handleToggleEditable}
        userData={userData.userData}
        navigation={this.props.navigation}
        signOut={this._signOutAsync}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  updateUser: state.user.updateUserData,
  editable: state.user.editable,
  userAuth: state.auth.authenticated
});

ProfileHeaderContainer.defaultProps = {
  firstName: '',
  lastName: '',
  location: '',
  bio: '',
  image: {},
  userData: {},
  updateUserData: {},
  userAuth: ''
};

ProfileHeaderContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  updateUserData: PropTypes.object,
  userData: PropTypes.object.isRequired,
  editable: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
  userAuth: PropTypes.string
};

export default connect(mapStateToProps)(ProfileHeaderContainer);
