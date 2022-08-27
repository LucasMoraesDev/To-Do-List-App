import { View, Text } from "react-native";

import { styles } from "./styles";
import React from "react";

// , taskDoneLength: number
type PropsCount = {
  taskGroupLength: number;
  taskDoneLength: number;
};

export function TaskCounter({ taskGroupLength, taskDoneLength }: PropsCount) {
  return (

      <View style={styles.container}>
        {/* COUNTER */}
        <View style={styles.element}>
          <Text style={styles.counter}>Criadas</Text>
          <Text style={styles.ball}>{taskGroupLength}</Text>
        </View>
        <View style={styles.element}>
          <Text style={styles.counter}>Concluídas</Text>
          <Text style={styles.ball}>{taskDoneLength}</Text>
        </View>
      </View>

  );
}
