import { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";

import { Timer } from "./src/features/Timer";
import { Focus } from "./src/features/Focus";
import { FocusHistory } from "./src/features/FocusHistory";

import { colors } from "./src/utils/color";

export default function App() {
  const [currentObject, setCurrentObject] = useState();
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentObject ? (
        <>
          <Focus addSubject={setCurrentObject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentObject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => setCurrentObject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
