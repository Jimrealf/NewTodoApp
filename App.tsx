import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export default function App() {

  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {

    if (inputText.trim()) {

      const newTodo: Todo = {
        id: uuidv4(),
        text: inputText,
        done: false,
      };

      setTodos([...todos, newTodo]);
      setInputText('');
    }
  }


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>To-Do List</Text>

      <TextInput style={styles.input} value={inputText} onChangeText={setInputText} placeholder='Enter a task' />

      <Button title='Add Task' onPress={addTodo} />

      <FlatList data={todos} renderItem={({ item }) => <Text style={styles.todo}>{ item.text }</Text>} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  todo: {
    fontSize: 18,
    marginVertical: 5,
    color: 'yellow',
  }
});
