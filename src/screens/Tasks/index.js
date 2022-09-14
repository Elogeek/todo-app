import React, {useState} from "react";

import Header from "../../components/shared/Header";
import Counter from "../../components/shared/Counter";
import FloatingBtn from "../../components/shared/FloatingBtn";

import {FlatList, View, StyleSheet} from "react-native";
import TaskTile from "./TaskTile";
import TaskForm from "./TaskForm";

import {useSelector, useDispatch} from "react-redux";
import {getTasks} from "../../redux/selectors";
import {toggleTask, deleteTask} from "../../redux/actions";


export default function TasksScreen() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const tasks = useSelector(getTasks);
    const dispatch = useDispatch();

    const renderItem = ({item}) => {
        return <TaskTile task={item} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask}/>
    }

    const onDeleteTask = (id) => {
       dispatch(deleteTask(id))
    }

    const onUpdateTask = (id) => {
        dispatch(toggleTask(id));
    }

    const _toggleForm = () => {
        setIsFormVisible(!isFormVisible);
    }

    return(
        <>
            <FlatList
                ListHeaderComponent={
                <>
                    <Header />
                    {isFormVisible && <TaskForm />}
                    <View style={styles.containerCounters}>
                        <Counter nb={tasks.length} title="Tâches crées" />
                        <Counter nb={tasks.filter(t => t.isCompleted === true).length} title="Tâches effectuées" />
                    </View>
                </>}

                // onEndReached={() => loadData()} // scroll de l'ecran de manière infini
                contentContainerStyle={{flexGrow: 1}}
                data={tasks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
            <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible} />
        </>
    );
}

const styles = StyleSheet.create({
    containerCounters: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        paddingHorizontal: 20
    }
});
