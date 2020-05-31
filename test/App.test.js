import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {App} from '../src/components/App';
import {afterEach, expect} from "@jest/globals";

afterEach(cleanup);

describe('App - manages ToDO', () => {
    it('ToDo Checkbox is true when clicked & false otherwise ', () => {
        render(<App/>);
        const todo = screen.getByTestId('todo-checked-1');

        expect(todo.checked).toEqual(false);
        fireEvent.click(todo);

        const updatedTodo = screen.getByTestId('todo-checked-1');
        expect(updatedTodo.checked).toEqual(true);
    });

    it('ToDo Note changes when a user clicks save', () => {
        render(<App/>);
        const todoNote = screen.getByTestId('todo-note-1');
        fireEvent.change(todoNote, {target: {value: 'A note I want to save'}});
        fireEvent.click(todoNote);

        const savedTodo = screen.getByTestId('todo-note-1');
        expect(savedTodo.value).toEqual('A note I want to save')
    });

    it('Has a button that when clicked, creates a new ToDo', () => {
        render(<App/>);
        const createNewTodo = screen.getByTestId('new-todo-button');
        expect(createNewTodo).toBeTruthy();

        fireEvent.click(createNewTodo);
        const freshToDo = screen.getByTestId('todo-note-2');
        expect(freshToDo).toBeTruthy();
    });
});
