// src/components/NotFound.jsx
import React, { Component } from 'react';

class NotFound extends Component {
  state = {
    showMessage: false,
  };

  componentDidMount() {
    this.setState({ showMessage: true });
    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h2>Page Not Found</h2>
        {this.state.showMessage && <p>Redirect to Movies page</p>}
      </div>
    );
  }
}

export default NotFound;