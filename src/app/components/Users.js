import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { browserHistory } from 'react-router';

import { UserRow } from './UserRow';

export class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: [],
      lastId: props.params.id
    }
  }

  next() {
    this.getUsers(this.state.lastId);
  }

  componentDidMount() {
    this.getUsers(this.state.lastId);
  }

  getUsers(lastId) {
    let url = 'https://api.github.com/users?access_token=f34f48a22006c1c86105fa27569cdbb7722a7110&since=' + lastId;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          data: this.state.data.concat(data),
          lastId: data[data.length-1].id
        });
      })
      .catch(err => console.error('err', err.toString()))
  }

  render() {
    if (this.state.data.length > 0) {
      var rows = this.state.data.map(function(user, i) {
        return (
          <UserRow key={i} user={user} />
        );
      }.bind(this));

      return (
        <div>
          <h1>Github Users</h1>
          <div className="list-group">
            {rows}
          </div>
          <button className="btn btn-primary" onClick={() => this.next()}>More</button>
        </div>
      );
    }

    return <div>loading...</div>;
  }
}
