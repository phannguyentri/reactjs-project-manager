import React, {Component} from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName    : '',
      filterStatus  : 0 // disable -1 , 0 all, 1 enable
    };
  }


  onReceiveDelete = (taskId) => {
    this.props.deleteTask(taskId);
  };

  onChange = (e) => {
    let nameFilter  = e.target.name;
    let valueFilter = e.target.value;
    this.setState({
      [nameFilter] : valueFilter
    });
    this.props.onFilter(nameFilter, valueFilter);
  };

  render() {
    let { tasks } = this.props;

    let elementTasks = tasks.map((task, index) => {
      return <TaskItem key={ index } id={ task.id } name={ task.name } status={ task.status }
                       onReceiveDelete={ this.onReceiveDelete }/>
    });

    return (
      <div className="row mt-15">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <table className="table table-bordered table-hover">
            <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Tên</th>
              <th className="text-center">Trạng Thái</th>
              <th className="text-center">Hành Động</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td/>
              <td>
                <input type="text"
                       className="form-control"
                       name="filterName"
                       value={ this.state.name }
                       onChange={ this.onChange } />
              </td>
              <td>
                <select className="form-control"
                        name="filterStatus"
                        value={ this.state.filterStatus }
                        onChange={ this.onChange }
                >
                  <option value="0">Tất Cả</option>
                  <option value="-1">Ẩn</option>
                  <option value="1">Kích Hoạt</option>
                </select>
              </td>
              <td/>
            </tr>
            { elementTasks }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default TaskList;