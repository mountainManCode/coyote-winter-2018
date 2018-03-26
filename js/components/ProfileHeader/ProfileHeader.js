import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';

import { styles } from './styles';

const ProfileHeader = ({
  editable,
  handleBio,
  handleFirstName,
  handleLastName,
  handleLocation,
  handleToggleEditable,
  openPicker,
  userData,
  navigation,
  signOut
}) => {
  const base64Image = `data:image/jpg;base64, ${userData.image}`;
  let userImage =
    userData.image && editable === false ? (
      <Image style={styles.profileImage} source={{ url: base64Image }} />
    ) : (
      <TouchableOpacity onPress={() => openPicker()}>
        <View style={styles.imageContainer}>
          <Image style={styles.profileImage} source={{ url: base64Image }} />
          <Text style={styles.changeImage}>Change Image</Text>
        </View>
      </TouchableOpacity>
    );

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={50}>
      <ScrollView>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={handleToggleEditable}>
            <View style={styles.editContainer}>
              <Text style={styles.editProfile}>Edit</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.userWrapper}>
            <View>{userImage}</View>
            <View style={styles.userInfo}>
              <View style={styles.userNameContainer}>
                <TextInput
                  style={styles.userName}
                  onChangeText={handleFirstName}
                  value={userData.firstName}
                  placeholder="First Name"
                  editable={editable}
                  selectTextOnFocus={true}
                />
                <TextInput
                  style={styles.userName}
                  value={userData.lastName}
                  onChangeText={handleLastName}
                  placeholder="Last Name"
                  editable={editable}
                  selectTextOnFocus={true}
                />
              </View>
              <TextInput
                style={styles.location}
                onChangeText={handleLocation}
                value={userData.location}
                placeholder="Location"
                editable={editable}
                selectTextOnFocus={true}
              />
            </View>
          </View>
          <View style={styles.profileButtonContainer}>
            (userData.role.tenant === true ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Application')}
            >
              <View style={styles.saveButton}>
                <Text style={styles.buttonText}>My Applications</Text>
              </View>
            </TouchableOpacity>
            ) : null)
            <TouchableOpacity onPress={signOut}>
              <View style={styles.saveButton}>
                <Text style={styles.buttonText}>Sign Out</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.subTitle}>About Me</Text>

            <View style={styles.descriptionContainer}>
              <TextInput
                style={styles.textDescription}
                onChangeText={handleBio}
                multiline={true}
                value={userData.bio}
                placeholder="Tell us a little something about yourself."
                editable={editable}
              />
            </View>

            {editable === true ? (
              <TouchableOpacity onPress={handleToggleEditable}>
                <View style={styles.saveButton}>
                  <Text style={styles.buttonText}>SAVE</Text>
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

ProfileHeader.propTypes = {
  editable: PropTypes.bool.isRequired,
  handleBio: PropTypes.func.isRequired,
  handleFirstName: PropTypes.func.isRequired,
  handleLastName: PropTypes.func.isRequired,
  handleLocation: PropTypes.func.isRequired,
  handleToggleEditable: PropTypes.func.isRequired,
  openPicker: PropTypes.func.isRequired,
  userData: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
};

export default ProfileHeader;
