import { useState } from "react";
import { useKeepAwake } from "expo-keep-awake";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Timing } from "../features/Timing";
import { CountDown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";

import { fontSize, spacing } from "../utils/size";
import { colors } from "../utils/color";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: spacing.xlarge }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View style={styles.progressContainer}>
        <AnimatedCircularProgress
          size={190}
          width={10}
          fill={progress * 100}
          tintColor={colors.lightOrange}
          backgroundColor={colors.orange}
        />
        <View style={styles.countdownOverlay}>
          <CountDown
            minutes={minutes}
            isPaused={!isStarted}
            onProgress={setProgress}
            onEnd={onEnd}
          />
        </View>
      </View>

      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title='start'
            onPress={() => setIsStarted(true)}
          />
        )}
        {isStarted && (
          <RoundedButton
            title='pause'
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton
          size={50}
          title='-'
          onPress={clearSubject}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdownOverlay: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  timingWrapper: {
    flex: 0.1,
    padding: spacing.large,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  clearSubject: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  progressContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.darkGrey,
    fontSize: fontSize.large,
    fontWeight: "semibold",
    textAlign: "center",
  },
  task: {
    color: colors.orange,
    textAlign: "center",
    fontSize: fontSize.xlarge,
    fontWeight: "bold",
  },
});
