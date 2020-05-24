import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {ToDo} from '../src/components/ToDo';
import {afterEach} from "@jest/globals";

afterEach(cleanup);

it.skip('Checkbox is true when clicked & false otherwise ', () => {
    const todoData = {note: 'Number 3', unique: 3, done: false};

    render(<ToDo todo={todoData} doneChanged={() => {}}/>);
    const  checkboxElement = screen.getByTestId('todo-checkbox');

    expect(checkboxElement.checked).toBeFalsy();

    fireEvent.click(checkboxElement);
    expect(checkboxElement.checked).toBeTruthy();

});
