import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state  = {
      tasks  : [],
    };

    this.onGenerateData = this.onGenerateData.bind(this);
  }

  onGenerateData(){
    var dataTasks = [
      {
        id      : '1',
        name    : 'Game',
        status  : false
      },
      {
        id      : '2',
        name    : 'Code',
        status  : true
      },
      {
        id      : '3',
        name    : 'Sleep',
        status  : false
      },
    ];

    this.setState({
      tasks : dataTasks,
    });

    console.log(this.state.tasks);
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary"><span className="fa fa-plus mr-5"/>Thêm Công Việc</button>
            <button type="button" className="btn btn-danger" onClick={this.onGenerateData}>Generate Data</button>
            <TaskControl/>
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
