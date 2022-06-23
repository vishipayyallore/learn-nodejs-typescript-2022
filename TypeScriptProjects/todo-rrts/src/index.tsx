import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

interface AppProperties {
  color?: string; /* Optional Property */
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProperties, AppState> {

  // :: We are redifining the state of "Component" class
  // state = { counter: 0 };

  constructor(props: AppProperties) {
    super(props);

    this.state = { counter: 0 };
  }



  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render(): React.ReactNode {

    return (
      <div>
        {this.props.color} Hello World !!
        <br></br>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <br></br>
        <span color='navy'>{this.state.counter}</span>
      </div>
    );

  }
}

// :: React 18 way !!
const root = ReactDOM.createRoot(document.querySelector("#root") as Element);
root.render(<App />);

// :: React Below Version 18
// ReactDOM.render(
//   <App color="blue from property" />,
//   document.querySelector("#root")
// )

// Using Optional Property. We are not sending "color" inside the "App" Components
// ReactDOM.render(
//   <App />,
//   document.querySelector("#root")
// )