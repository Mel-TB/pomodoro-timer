import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { colors } from "../utils/color";

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      {...props}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.lightOrange,
    borderWidth: 2,
  },

  text: {
    color: colors.lightOrange,
    fontSize: size / 3,
  },
});