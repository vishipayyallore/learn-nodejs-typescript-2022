import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from './actionTypes';

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.FETCH_TODOS,
    payload: Todo[]
}

export interface DeleteTodoAction {
    type: ActionTypes.DELETE_TODO,
    payload: number
}

const url = 'https://jsonplaceholder.typicode.com/todos';

const sleep = (ms: number) => new Promise(
    resolve => setTimeout(resolve, ms)
);

export const fetchTodos = () => {

    return async (dispatch: Dispatch) => {

        console.log('fetching todos');

        dispatch<FetchTodosAction>({
            type: ActionTypes.FETCH_TODOS,
            payload: []
        });

        await sleep(500);

        const response = await axios.get<Todo[]>(url);

        console.log('fetched todos');

        dispatch<FetchTodosAction>({
            type: ActionTypes.FETCH_TODOS,
            payload: response.data
        });
    };

};

export const deleteTodo = (id: number): DeleteTodoAction => {

    return {
        type: ActionTypes.DELETE_TODO,
        payload: id
    };
};