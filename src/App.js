import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList'

class App extends Component {

  constructor(props) {
    super(props);

    this.state  = {
      tasks       : [],
      isDisplayForm  : true
    };

    this.onGenerateData = this.onGenerateData.bind(this);
  }

  componentWillMount() {
    if (localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : tasks
      })
    }
  }

  onGenerateData(){
    var dataTasks = [
      {
        id      : this.genegrateId(),
        name    : 'Game',
        status  : false
      },
      {
        id      : this.genegrateId(),
        name    : 'Code',
        status  : true
      },
      {
        id      : this.genegrateId(),
        name    : 'Sleep',
        status  : false
      },
    ];

    localStorage.setItem('tasks', JSON.stringify(dataTasks));

    this.setState({
      tasks : dataTasks,
    });
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm : !this.state.isDisplayForm
    });
  };

  onCloseForm = () => {
    this.setState({
      isDisplayForm : false
    });
  };

  onSubmit = (newTask) => {
    console.log(newTask);
    newTask.id     = this.genegrateId();
    newTask.status = (newTask.status === 'true' || newTask.status === true);
    console.log(newTask);
    let dataTasks = this.state.tasks;
    dataTasks.push(newTask);
    this.setState({
      tasks : dataTasks
    });
    localStorage.setItem('tasks', JSON.stringify(dataTasks));
  };

  ramdomString(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  genegrateId(){
    return this.ramdomString() + "-" + this.ramdomString() + "-" + this.ramdomString() + "-" +this.ramdomString() + "-" +
      this.ramdomString() + "-" + this.ramdomString() + "-" + this.ramdomString() + "-" + this.ramdomString() + "-" +
      this.ramdomString() + "-" + this.ramdomString() + "-" + this.ramdomString() + "-" + this.ramdomString() + "-" +
      this.ramdomString() + "-" + this.ramdomString();
  }

  render() {
    console.log(this.state.tasks);

    let { tasks, isDisplayForm } = this.state;
    let colForm = isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12';

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            { isDisplayForm ? <TaskForm onClose={ this.onCloseForm } onSubmit={ this.onSubmit } /> : '' }
          </div>
          <div className={ colForm }>
            <button type="button" className="btn btn-primary" onClick={ this.onToggleForm }>
              <span className="fa fa-plus mr-5"/>Thêm Công Việc
            </button>
            <button type="button" className="btn btn-danger hide" onClick={ this.onGenerateData }>Generate Data</button>
            <TaskControl/>
            <TaskList tasks={ tasks } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
