import React, { Component } from 'react';

class Fortune extends Component {
  constructor(props) {
    super(props);
    this.state = { fortune: '' };
  }

  componentDidMount() {
    fetch('/api/fortune.json')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ fortune: body.fortune });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return (
      <div>
        <h1>React-Rails Fortune-Teller</h1>
        <h2>Your Fortune:</h2>
        <h3> {this.state.fortune}</h3>
      </div>
    );
  }
}

export default Fortune;
