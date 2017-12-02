import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Trendcast</h1>
        <div className="buttons">
          <Button inverted color='olive' className="header-button">Trending</Button>
          <Button inverted color='white' className="header-button">Search</Button>
        </div>
      </div>
    );
  }
}

export default Header;
