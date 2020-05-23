import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        { name: 'Joo', message: 'Hiii' },
        { name: 'Joo 1', message: 'Hello' },
      ],
      currentUser: '',
      text: '',
    };
    console.log('contructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    if (props.username) {
      return {
        currentUser: props.username,
      };
    } else {
      return {
        currentUser: 'Noone',
      };
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    // this.interval = setInterval(() => {
    //   console.log(new Date());
    // }, 1000);
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true; // false
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  _onInputChange = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  };

  _onSubmit = () => {
    let message = {
      name: this.state.currentUser,
      message: this.state.text,
    };

    this.setState({
      messages: [...this.state.messages, message],
      text: '',
    });
  };

  _onEnter = (event) => {
    var code = event.keyCode || event.which;
    if(code === 13) {
      this._onSubmit();
    } 
  }

  render() {
    console.log('render');
    const { messages, text } = this.state;
    return (
      <div className='container'>
        <h1>Hello {this.state.currentUser}!</h1>
        <div className='chatbox'>
          {messages.map((item, idx) => {
            return (
              <div key={idx} className='message'>
                <p className='name'>{item.name}</p>
                <p className='content'>{item.message}</p>
              </div>
            );
          })}
        </div>
        <div className='form'>
          <input
            className='ip'
            type='text'
            onChange={this._onInputChange}
            onKeyPress={this._onEnter}
            value={text}
          />
          <button onClick={this._onSubmit}>Send</button>
        </div>
      </div>
    );
  }
}

export default App;
