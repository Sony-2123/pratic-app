import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('Constructor: Component is initializing');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps: Called before render');
    return null; // no state update
  }

  componentDidMount() {
    console.log('componentDidMount: Component mounted to DOM');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should component re-render?');
    return true; // allow re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Before update snapshot');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Component did update');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Cleanup before unmounting');
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('render: Rendering component');
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
