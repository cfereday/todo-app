import React from 'react';
import {cleanup, fireEvent, render, screen } from '@testing-library/react';
import {App} from '../src/components/App';
import {afterEach} from "@jest/globals";

afterEach(cleanup);

it('ToDo Checkbox is true when clicked & false otherwise ', () => {
    render(<App/>);
    const  todo = screen.getByTestId('todo-1');

    expect(todo.checked).toBeTruthy();
    fireEvent.click(todo);

    const updatedTodo = screen.getByTestId('todo-1');
    expect(updatedTodo.checked).toBeFalsy();
});
