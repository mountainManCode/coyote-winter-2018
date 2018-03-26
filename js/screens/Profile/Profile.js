import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ProfileHeaderContainer from '../../components/ProfileHeader/ProfileHeaderContainer';
import { styles } from './styles';

const Profile = ({ navigation, userData, userAuth }) => {
  return (
    <View style={styles.container}>
      <ProfileHeaderContainer
        userData={{ userData }}
        navigation={navigation}
        userAuth={{ userAuth }}
      />;
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
  signOut: PropTypes.func,
  userData: PropTypes.object,
  userAuth: PropTypes.string
};

export default Profile;
