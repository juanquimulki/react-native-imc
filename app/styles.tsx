import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./theme";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  messageView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  componentsView: { flex: 1, flexDirection: "row" },
  imcLabel: { fontSize: fontSizes.giant, color: colors.textSecondary },
  imcText: {
    fontSize: fontSizes.medium,
    color: colors.secondary,
    borderColor: colors.secondary,
    borderWidth: 3,
    padding: 5,
    width: "90%",
    margin: 10,
    textAlign: "center",
  },
  genderContainer: {
    flex: 1,
    flexDirection: "row",
    borderColor: colors.primary,
    borderWidth: 3,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  genderView: { flex: 1, flexDirection: "column", alignItems: "center" },
  genderLabel: {
    color: colors.textSecondary,
    fontWeight: 600,
    fontSize: fontSizes.small,
    textAlign: "center",
    padding: 10,
  },
  genderValue: { justifyContent: "center", flex: 1 },
  buttonView: { justifyContent: "center", alignItems: "center" },
  buttonText: {
    color: colors.text,
    fontWeight: "bold",
    fontSize: fontSizes.medium,
    textAlign: "center",
  },
  buttonStyle: {
    height: 75,
    width: "90%",
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 20,
  },

  componentView: {
    flex: 1,
    borderColor: colors.primary,
    borderWidth: 3,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 5,
  },
  componentTitle: {
    color: colors.textSecondary,
    fontWeight: 600,
    fontSize: fontSizes.small,
    textAlign: "center",
    padding: 10,
  },
  componentValue: {
    color: colors.text,
    fontWeight: 600,
    fontSize: fontSizes.large,
    textAlign: "center",
  },
  componentLabel: {
    color: colors.text,
    fontWeight: 600,
    fontSize: fontSizes.large,
    textAlign: "center",
    marginTop: -10,
  },
});

export default styles;
