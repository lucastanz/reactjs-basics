import React from 'react';
import { browserHistory } from 'react-router';

export class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user: {}
    }
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    let url = `https://api.github.com/users/${this.props.params.login}?access_token=f34f48a22006c1c86105fa27569cdbb7722a7110`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          user: data
        });
      })
      .catch(err => console.error('err', err.toString()))
  }

  render() {
    if (this.state.user.login) {
      return (
        <div>
          <h3>{this.state.user.login}</h3>
          <div className="col-xs-3">
            <img width="200" src={this.state.user.avatar_url} />
          </div>
          <div className="col-xs-6">
            <ul>
              <li>{this.state.user.name}</li>
              <li>{this.state.user.blog}</li>
              <li>{this.state.user.email}</li>
            </ul>
            <button onClick={browserHistory.goBack} className="btn btn-primary">Back</button>
          </div>
        </div>
      );
    }

    return <div>loading...</div>;
  }
}
