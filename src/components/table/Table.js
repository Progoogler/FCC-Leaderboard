import React, { Component } from 'react';
import ReactTable from 'react-table';
import axios from 'axios';
import 'react-table/react-table.css';
import './Table.css';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  render() {
    return (
      <div className="Container">
        <div className="Table-Title">
          <p className="Table-Title-Text">Leaderboard</p>
        </div>
        <ReactTable
          className="Table -striped -highlight"
          data={this.state.data}
          columns={this.columns}
          defaultPageSize={100}
          showPaginationBottom={false} />
      </div>
    );
  }

  componentWillMount() {
    this.columns = [{
      Header: '#',
      Cell: (props) => <span>{props.index + 1}</span>,
      headerClassName: "Header",
      className: "Vertical-Align",
      sortable: false,
      width: 50,
    }, {
      Header: 'Camper Name',
      accessor: 'username',
      Cell: props => <span className="Name"><img className="Profile-Image" src={props.original.img} alt="user's profile avatar" /><a className="Name-Text" href={"https://freecodecamp.com/" + props.value}>{props.value}</a></span>,
      headerClassName: "Header Header-Name",
      className: "Vertical-Align Name-Container",
      sortable: false,
      width: 400,
    }, {
      Header: 'Points in the past 30 days',
      accessor: 'recent',
      headerClassName: "Header Header-Recent",
      className: "Vertical-Align",
      defaultSortDesc: true,
      width: 270,
    }, {
      Header: 'All time points',
      accessor: 'alltime',
      headerClassName: "Header Header-Alltime",
      className: "Vertical-Align",
      defaultSortDesc: true,
      width: 270,
    }];

    axios({
      method:'get',
      url:'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
      responseType:'json',
    })
    .then((response) => {
      this.setState({data: response.data});
    });

    // this.data = [{
    //   number: 1,
    //   img: "https://avatars2.githubusercontent.com/u/24684319?v=3",
    //   name: 'Progoogler',
    //   recent: 1000,
    //   alltime: 10000,
    // },
    // {
    //   number: 2,
    //   img: "https://avatars2.githubusercontent.com/u/24684319?v=3",
    //   name: "SkysTheLimit",
    //   recent: 1000,
    //   alltime: 10000,
    // }];
  }
}

export default Table;
