import React, { Component } from 'react';
import TitleBar from '../../components/titleBar/TitleBar';
import Table from '../../components/table/Table';

class Leaderboard extends Component {

  render() {
    return (
      <div>
        <TitleBar/>
        <Table/>
      </div>
    );
  }
}

export default Leaderboard;
