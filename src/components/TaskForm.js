import React, {Component} from 'react';

class TaskForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name    : '',
      status  : false
    };
  }

  onClose = () => {
    this.props.onClose();
  };

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  onSubmit = (e) =>{
    let dataTask = {
      name    : this.state.name,
      status  : this.state.status
    };

    this.props.onSubmit(dataTask);
    this.onCancel();
    e.preventDefault();
  };

  onCancel = () => {
    this.setState({
      name    : '',
      status  : false
    });
    this.props.onClose();
  };

  render() {
    let { name, status } = this.state;

    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title" onClick={ this.onClose }>Thêm Công Việc<span className="fa fa-times-circle text-right" /></h3>
        </div>
        <div className="panel-body">
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label>Tên :</label>
              <input type="text" className="form-control" name="name" value={ name } onChange={ this.onChange } />
            </div>
            <label>Trạng Thái :</label>
            <select className="form-control" name="status" value={ status } onChange={ this.onChange }>
              <option value={ true }>Kích Hoạt</option>
              <option value={ false }>Ẩn</option>
            </select>
            <br />
            <div className="text-center">
              <button type="submit" className="btn btn-warning"><span className="fa fa-plus mr-5"/>Lưu Lại
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger" onClick={ this.onCancel } ><span className="fa fa-close mr-5"/>Hủy Bỏ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;