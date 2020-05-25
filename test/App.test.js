import React from 'react';
import {cleanup, fireEvent, render, screen } from '@testing-library/react';
import {App} from '../src/components/App';
import {afterEach, expect} from "@jest/globals";

afterEach(cleanup);

describe('App - manages ToDO', () => {
    it('ToDo Checkbox is true when clicked & false otherwise ', () => {
        render(<App/>);
        const  todo = screen.getByTestId('todo-checked-1');

        expect(todo.checked).toBeFalsy();
        fireEvent.click(todo);

        const updatedTodo = screen.getByTestId('todo-checked-1');
        expect(updatedTodo.checked).toBeTruthy();
    });

    it('ToDo Note changes as a user types in different tasks', () => {
        render(<App/>);
        const  todo = screen.getByTestId('todo-note-1');
        expect(todo.value).toEqual('An example ToDo');

        fireEvent.change(todo, { target: { value: 'Some very important note' } });
        const updatedTodo = screen.getByTestId('todo-note-1');
        expect(updatedTodo.value).toEqual('Some very important note')
    });

    it('Has a button that when clicked, creates a new ToDo', () => {
        render(<App/>);
        const createNewTodo = screen.getByTestId('todo-button');
        expect(createNewTodo).toBeTruthy();

        fireEvent.click(createNewTodo);
        const  freshToDo = screen.getByTestId('todo-note-2');
        expect(freshToDo).toBeTruthy();
    });
});
