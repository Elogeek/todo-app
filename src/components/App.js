import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TasksScreen from "../screens/Tasks";
import {Provider} from "react-redux";
import {store} from "../redux/store";

export default function App() {
  return (
      <Provider store={store}>
        <SafeAreaView style={{flex: 1}}>
          <TasksScreen />
        </SafeAreaView>
      </Provider>
  );
}

const styles = StyleSheet.create({

});
