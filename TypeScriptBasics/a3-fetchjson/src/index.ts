import axios from 'axios';
import { Todo } from './todo';

const url = 'https://jsonplaceholder.typicode.com/todos/9';

axios
    .get(url)
    .then(response => {
        console.log(`Raw Data: ${JSON.stringify(response.data)}`);

        const todo = response.data as Todo;

        const id = todo.id;
        const title = todo.title;
        const completed = todo.completed;

        logToDo(id, title, completed);

    });

const logToDo = (id: number, title: string, completed: boolean) => {
    console.log(`${new Date().toUTCString()} :: Id: ${id} | Title: ${title} | Completed: ${completed}`);

};