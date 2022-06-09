import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/9';

axios
    .get(url)
    .then(response => {
        console.log(response.data);
    });