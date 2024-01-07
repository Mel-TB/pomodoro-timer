import { useState } from "react";
import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { spacing } from "../utils/size";
import { colors } from "../utils/color";
import { RoundedButton } from "../components/RoundedButton";

export const Focus = ({ addSubject }) => {
  const [text, setText] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label={"What you would like to focus on? "}
          value={text}
          onChangeText={setText}
          style={styles.textInput}
        />
        <View style={styles.button}>
          <RoundedButton
            onPress={() => addSubject(text)}
            size={50}
            title={"+"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: spacing.large,
    justifyContent: "top",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.small,
  },
  button: {
    justifyContent: "center",
  },
});
