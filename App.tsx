import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView } from 'react-native';

export default function App() {

  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (inputText.trim()) {
      setTodos([...todos, inputText]);
      setInputText('');
    }
  }


  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>To-Do List</Text>

      <TextInput style={styles.input} value={inputText} onChangeText={setInputText} placeholder='Enter a task' />

      <Button title='Add Task' onPress={addTodo} />

      <FlatList data={todos} renderItem={({ item }) => <Text style={styles.todo}>{ item }</Text>} keyExtractor={(_item, index) => index.toString()} />
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
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  todo: {
    fontSize: 18,
    marginVertical: 5,
  }
});
