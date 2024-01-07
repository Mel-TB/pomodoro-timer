import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "../utils/color";
import { fontSize, spacing } from "../utils/size";

export const FocusHistory = ({ history }) => {
  if (!history || history.length === 0) {
    return <Text style={styles.titleEmpty}>No Focus History</Text>;
  }

  const renderItem = ({ item }) => <Text style={styles.items}> ✅{item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thing's we've focus on: </Text>
      <FlatList
        data={history}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingLeft: spacing.large,
  },
  titleEmpty: {
    color: colors.orange,
    fontSize: fontSize.large,
    fontWeight: "bold",
    paddingLeft: spacing.large,
  },
  title: {
    color: colors.orange,
    fontSize: fontSize.large,
    fontWeight: "bold",
  },
  items: {
    paddingTop: spacing.small,
    fontSize: fontSize.medium,
  },
});
