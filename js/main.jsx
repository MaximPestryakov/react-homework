import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super();
    //this.addTodo = this.addTodo.bind(this);
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

class TodoList extends React.Component {
  render() {
    const array = ['1', '2', '3'];
    return (
      <ul className='todo-list'>
        {array.map(title =>
          <li className='completed'>
            <div className='view'>
              <input className='toggle' type='checkbox' checked />
              <label>{title}</label>
              <button className='destroy'></button>
            </div>
            <input className='edit' value={title} />
          </li>
        )}
      </ul>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <section className='main'>
        <input className='toggle-all' type='checkbox' />
        <label htmlFor='toggle-all'>Mark all as complete</label>
        <TodoList />
      </section>
    );
  }
}

class TodoApp extends React.Component {
  render() {
    return (
      <section className='todoapp'>
        <Header />
        <Main />
      </section>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.querySelector('div.main')
);
