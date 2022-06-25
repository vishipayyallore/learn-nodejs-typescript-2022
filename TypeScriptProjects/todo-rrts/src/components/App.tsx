import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProperties {
    todos: Todo[],

    // fetchTodos: typeof fetchTodos;
    fetchTodos: Function;

    deleteTodo: typeof deleteTodo;
}

interface AppState {
    fetching: boolean;
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
    border: 'solid',
    borderColor: 'maroon',
    margin: 20,
    padding: 10
};

class _App extends React.Component<AppProperties, AppState> {

    // componentDidMount() {
    //     this.props.fetchTodos();
    // }

    constructor(props: AppProperties) {
        super(props);

        this.state = { fetching: false }
    }

    componentDidUpdate(prevProps: AppProperties): void {
        console.log(`${this.state.fetching} :: ${prevProps.todos.length} :: ${this.props.todos.length}`)

        if (!prevProps.todos.length && this.props.todos.length) {
            console.log('SETTING IT TO FALSE !');
            this.setState({ fetching: false });
        }
    };

    onButtonClick = (): void => {

        this.setState({ fetching: true }, () => {
            this.props.fetchTodos();
        });

    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div style={divTodoStyle} onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
                    {todo.title}
                </div>
            );
        });
    }

    render() {
        // console.log(this.props.todos);
        return (
            <div style={divStyle}>
                <button onClick={this.onButtonClick}>Fetch Todos</button>

                {this.state.fetching ? 'LOADING ...' : this.renderList()}

            </div>
        );
    }
}

export const App = connect(
    mapStoreState,
    { fetchTodos, deleteTodo }
)(_App);