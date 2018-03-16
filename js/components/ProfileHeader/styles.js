import { StyleSheet } from "react-native";
import { textStyles, colors } from "../../config/styles";
import { buttonStyle } from "../../config/buttonStyle";

const { H2, H4, BODY } = textStyles;
const { GREY, MAIN_LIGHT, OFF_WHITE } = colors;
const { B_MAIN } = buttonStyle;

export const styles = StyleSheet.create({
  profileContainer: {
    padding: 10,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: GREY,
    borderRadius: 5
  },
  editContainer: {
    alignItems: "flex-end"
  },
  editProfile: {
    fontSize: H4.fontSize,
    color: MAIN_LIGHT
  },
  userWrapper: {
    flexDirection: "row"
  },
  profileImage: {
    borderRadius: 60,
    height: 125,
    width: 125,
    marginBottom: 15,
    flex: 1
  },
  userInfo: {
    marginLeft: 5,
    flex: 1,
    alignSelf: "center"
  },
  imageContainer: {
    flexDirection: "column",
    marginTop: 10
  },
  userName: {
    fontSize: H2.fontSize,
    justifyContent: "center"
  },
  textH4: {
    fontSize: H4.fontSize,
    paddingVertical: 5
  },
  descriptionContainer: {
    paddingVertical: 5
  },
  description: {
    fontSize: BODY.fontSize,
    paddingVertical: 5
  },
  saveButton: {
    backgroundColor: B_MAIN.backgroundColor,
    borderRadius: B_MAIN.borderRadius,
    paddingHorizontal: 30,
    paddingVertical: 5,
    alignSelf: "center"
  },
  buttonText: {
    color: OFF_WHITE,
    fontSize: BODY.fontSize,
    textAlign: "center"
  }
});
