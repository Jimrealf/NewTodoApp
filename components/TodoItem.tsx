import { on } from 'events';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';


interface Todo {
    id: string;
    text: string;
    done: boolean;
}

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
}

export default function TodoItem({ todo, onToggle }: TodoItemProps) {
    return (
        <TouchableOpacity onPress={() => onToggle(todo.id)}>
            <Text style={[styles.todo, todo.done && styles.todoDone]}>{todo.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todo: {
        fontSize: 18,
        marginVertical: 5,
    },
    todoDone: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});