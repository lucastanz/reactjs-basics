import React from 'react';
import {Link} from 'react-router';

export class UserRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <Link to={`/user/${this.props.user.login}`} activeClassName={"active"}>
          <div className="col-xs-2 mrT20">
            <img className="img-circle" src={this.props.user.avatar_url} width="100" />
          </div>
          <div className="col-xs-6">
            <h3>{this.props.user.login}</h3>
          </div>
        </Link>
      </div>
    );
  }
}
