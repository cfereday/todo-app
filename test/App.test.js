import React from 'react';
import {cleanup, fireEvent, render, screen } from '@testing-library/react';
import {App} from '../src/components/App';
import {afterEach, expect} from "@jest/globals";

afterEach(cleanup);

describe('App - manages ToDO', () => {
    it('ToDo Checkbox is true when clicked & false otherwise ', () => {
        render(<App/>);
        const  todo = screen.getByTestId('todo-checked-1');

        expect(todo.checked).toBeTruthy();
        fireEvent.click(todo);

        const updatedTodo = screen.getByTestId('todo-checked-1');
        expect(updatedTodo.checked).toBeFalsy();
    });

    it('ToDo Note changes as a user types in different tasks', () => {
        render(<App/>);
        const  todo = screen.getByTestId('todo-note-1');
        expect(todo.value).toEqual('Number 1');

        fireEvent.change(todo, { target: { value: 'Some very important note' } });
        const updatedTodo = screen.getByTestId('todo-note-1');
        expect(updatedTodo.value).toEqual('Some very important note')
    });

    it.skip('Has a button that when clicked, creates a new ToDo', () => {
        render(<App/>);
        const createNewTodo = screen.getByTestId('todo-button');
        expect(createNewTodo).toBeTruthy();

        fireEvent.click(createNewTodo);
        const  todoSecond = screen.getByTestId('todo-note-4');
        expect(todoSecond.value).toEqual('Number 4');
    });
});
