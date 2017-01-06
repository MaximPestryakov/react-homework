import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super();
    this.addTodo = this.addTodo.bind(this);
  }

  render() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <input onKeyDown={this.addTodo} className='new-todo' placeholder='What needs to be done?' autoFocus={true} />
      </header>
    );
  }

  addTodo(event) {
    const title = event.target.value.trim();
    if (event.keyCode === 13 && title.length > 0) {
      // add todo
      event.target.value = '';
    }
  }
}

ReactDOM.render(
  <Header />,
  document.querySelector('section.todoapp')
);
