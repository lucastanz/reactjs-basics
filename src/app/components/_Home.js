import React from 'react';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };
    setTimeout(() => {
      this.setState({
        status: 1
      });
    }, 3000);
    console.log('Constructor');
  }

  componentWillMount() {
    console.log('component will mount');
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Component will receive props', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should component update', nextProps, nextState);
    //if (nextState.status === 1) {
      //return false;
    //}
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('component will update', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component did mount', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('component will unmount');
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3 
    });
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    });
  }

  render() {
    return (
      <div>
        <p>In a new component!</p>
        <p>Your name is {this.props.name} and your age is {this.state.age}</p>
        <p>Status: {this.state.status}</p>
        <hr/>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
        <hr/>
        <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: React.PropTypes.string,
  age: React.PropTypes.number,
  greet: React.PropTypes.func,
  initialLinkName: React.PropTypes.string,
}
