import React, {useState} from "react";
import {Text, StyleSheet, View} from 'react-native';
import Form from "./src/components/Form";
import Task from "./src/components/Task";

const App = () => {
  const [tasks, setTask] = useState([]);
 

  const addTask = task => {
    setTask([...tasks, task]);
  };

const [taskList, setTaskList] = useState([]);
  const handleDeleteTask = (index) => {
    Alert.alert(
        "Thông báo !!!",
        "Bạn có chắc chắn muốn xóa ?",
        [
            {
                text: "Cancel",
                onPress : () => {},
                style: "center"
            },
            {
                text: "OK",
                onPress : () => {
                    let taskListTmp = [...taskList];
                    taskListTmp.splice(index,1);
                    setTaskList(taskListTmp);
                    
                },
            }
        ]
    )
};

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Todo List</Text>
      <Form onAddTask={addTask} />
      {
        tasks.map((task, index) => (
          <Task key={index} index={index} task={task} onDeleteTask={() => handleDeleteTask(index)}/>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 10,
    
  },
  headerTitle: {
    fontSize: 30,
    color: '#3F8AFA',
    fontWeight: '700',
  },
});

export default App;