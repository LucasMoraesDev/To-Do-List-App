import { Pressable, View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import React from "react";

export function Task({ name, isDone, onRemove, onCheck }: any) {
  return (
    
    <View style={styles.container}>
        
      {/* CHEBOX */}
      
        <Pressable
          style={styles.checkboxWrapper}
          onPress={onCheck}
        >
          <View style={styles.checkboxBase}>
          <Image
            style={isDone ? styles.checkboxChecked : {display: 'none'}}
            source={require("./img/checkedSquared.png")}
          />
          </View>
        </Pressable>

      {/* TASK */}
      <View style={styles.nameWrapper}>
        <Text style={isDone ? [styles.name, styles.textDashed] : styles.name}>
          {name}
        </Text>
      </View>
      {/* DELETE BTN */}
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image style={styles.buttonImage} source={require("./img/del4.png")} />
      </TouchableOpacity>
    </View>
  );
}
