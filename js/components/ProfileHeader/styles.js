import { StyleSheet, Dimensions } from 'react-native';
import { textStyles, colors } from '../../config/styles';

const { width } = Dimensions.get('window');
const { H2, H4, BODY, SMALL } = textStyles;

export const styles = StyleSheet.create({
  profileContainer: {
    padding: 8,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderRadius: 5,
    borderColor: 'lightgrey'
  },
  editContainer: {
    alignItems: 'flex-end'
  },
  editProfile: {
    fontSize: SMALL.fontSize,
    fontFamily: SMALL.fontFamily,
    color: colors.MAIN_LIGHT
  },
  userWrapper: {
    flexDirection: 'column'
  },
  profileImage: {
    borderRadius: 75,
    height: 150,
    width: 150,
    marginBottom: 15,
    marginRight: 5,
    flex: 1,
    alignSelf: 'center'
  },
  userInfo: {
    marginLeft: 5,
    flex: 1
  },
  imageContainer: {
    margin: 5
  },
  changeImage: {
    color: colors.night,
    backgroundColor: colors.GREY,
    position: 'absolute',
    alignSelf: 'center',
    top: 75,
    paddingHorizontal: 15,
    paddingVertical: 2
  },
  userNameContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  userName: {
    fontSize: H2.fontSize,
    fontFamily: H2.fontFamily,
    paddingHorizontal: 4
  },
  location: {
    fontSize: H4.fontSize,
    fontFamily: H4.fontFamily,
    paddingVertical: 5,
    alignSelf: 'center'
  },
  profileButtonContainer: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  descriptionContainer: {
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 5,
    borderColor: colors.night,
    minHeight: width / 3
  },
  subTitle: {
    fontSize: H4.fontSize,
    fontFamily: H4.fontFamily
  },
  description: {
    fontSize: BODY.fontSize,
    fontFamily: BODY.fontFamily,
    paddingVertical: 5
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.MAIN,
    borderRadius: 25,
    minWidth: 120,
    maxWidth: 150,
    minHeight: 30,
    marginVertical: 15,
    paddingHorizontal: 10
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: BODY.fontSize,
    fontFamily: BODY.fontFamily,
    textAlign: 'center'
  }
});
