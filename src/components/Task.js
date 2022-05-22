import React, {useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity , Alert} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Task = ({index, task, props}) => {
    const numberText = index < 10 ? `0${index}`: index;
    const itemBg = index % 2 === 0 ? styles.even : styles.odd;
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
                        taskListTmp.splice(index, 1);
                        setTaskList(taskListTmp);
                    },
                }
            ]
        )
    };
    return (
        <TouchableOpacity
        onPress={handleDeleteTask}
        >
            <View style={styles.container}>
                <View style={styles.taskInfo}>
                    <Pressable style={[styles.square,itemBg]}>
                        <Text style={styles.squareTitle}>{numberText}</Text>
                    </Pressable>
                    <Text numberOfLines={1}style={styles.taskName}>{task}</Text>
                </View>
                <Text>✓</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create ({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        margin: 8,
    },
    taskInfo: {
        flex: 1, 
        flexDirection: 'row',
    },
    taskName: {
        marginLeft: 5,
    },
    square: {
        width: 40,
        height: 30,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    squareTitle: {
        fontSize: 15,
        color: '#fff',
    },
    even: {
        backgroundColor: '#53d6f2',
    },
    odd: {
        backgroundColor: '#55f253',
    },
});

export default Task;