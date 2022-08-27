// import { constructor} from 'r'
import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { TaskCounter } from "../../components/TaskCounter";

export function Home() {
  const [taskGroup, setTaskGroup] = useState<any>([]);
  const [task, setTask] = useState("");
  function enter(){ return "Enter" } 

  function handleTaskAdd(text: string) {
    if (task == "") {
      Alert.alert(
      `      
📝  Adicione uma tarefa`,'', [
        {
          text: 'Ok',
          style: 'cancel'
        }
      ])
      return;
    }

    setTaskGroup((prevState: any) => [
      ...prevState,
      {
        id: guidGenerator(),
        name: task,
        isDone: false,
      },
    ]);

    setTask("");
  }

  function indexOfTask(id: string) {
    for (let i = 0; i < taskGroup.length; i++) {
      if (taskGroup[i].id === id) {
        return i;
      }
    }
  }

  function handleTaskRemove(id: string, text: string) {
    Alert.alert(
      `

✖️  Deseja excluir ?`,
      `
${text}
`,
      [
        {
          text: "Sim",
          onPress: () =>
            setTaskGroup((prevState: any[]) =>
              prevState.filter((task) => task.id !== id)
            ),
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  function updateFieldChanged(index: number, taskGroup: any) {
    let newArr = [...taskGroup]; // copying the old datas array
    newArr[index].isDone = !newArr[index].isDone; // replace e.target.value with whatever you want to change it to

    setTaskGroup(newArr);
  }

  function guidGenerator() {
    let S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }

  function taskDoneCounter() {
    let taskDoneCount = 0;
    for (let i = 0; i < taskGroup.length; i++) {
      if (taskGroup[i].isDone) {
        taskDoneCount++;
      }
    }
    return taskDoneCount;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        {/* HEADER */}
        <Image
          source={require("./img/todologo1.png")}
          style={styles.headerBoxImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.inputBox}>
        {/* INPUT */}
        <View style={styles.topContainer}></View>
        <View style={styles.botContainer}></View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#50616C"
            onChangeText={setTask}
            value={task}
            autoFocus={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleTaskAdd(task)}
          >
            <View style={styles.buttonWrapper}>
              <Text style={styles.buttonIcon}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.taskBox}>
        {/* TASKS */}

        <FlatList
          data={taskGroup}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <TaskCounter
              taskGroupLength={taskGroup.length}
              taskDoneLength={taskDoneCounter() || 0}
            />
          }
          renderItem={({ item }) => (
            <Task
              id={item.id}
              key={item.id}
              name={item.name}
              isDone={item.isDone}
              onRemove={() => handleTaskRemove(item.id, item.name)}
              onCheck={() =>
                updateFieldChanged(Number(indexOfTask(item.id)), taskGroup)
              }
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View>
              <View style={styles.lineStyle}></View>
              <View style={styles.emptyBox}>
                <Image
                  source={require("./img/list4.png")}
                  style={styles.emptyListImage}
                />
                <Text style={[styles.emptyText, styles.strong]}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
