import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProperties {
    todos: Todo[],

    fetchTodos(): any
}

const mapStoreState = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos }
};

const divStyle = {
    color: 'blue',
    background: 'aliceblue',
    paddingLeft: 20,
    border: 'solid',
    margin: 20
};

const divTodoStyle = {
    color: 'orangered',
    fontWeight: 'bold',
    margin: 20
};

class _App extends React.Component<AppProperties> {

    // componentDidMount() {
    //     this.props.fetchTodos();
    // }

    onButtonClick = (): void => {
        this.props.fetchTodos();
    };

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return <div key={todo.id} style={divTodoStyle}>{todo.id}. {todo.title}</div>
        });
    };

    render() {
        // console.log(this.props.todos);

        return (
            <div style={divStyle}>
                <button onClick={this.onButtonClick}>Fetch Todos</button>
                {this.renderList()}
            </div>
        );
    }
}

export const App = connect(
    mapStoreState,
    { fetchTodos }
)(_App);