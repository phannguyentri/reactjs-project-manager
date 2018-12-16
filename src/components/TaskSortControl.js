import React, {Component} from 'react';

class TaskSortControl extends Component {

  onSort = (sortName, sortValue) => {
    // console.log(sortName, sortValue);
    this.props.onSort(sortName, sortValue);
  };

  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Sắp Xếp <span
            className="fa fa-caret-square-o-down ml-5"/></button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a role="button" className="sort_selected" onClick={ () => {this.onSort('name', 1)} } ><span
              className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span></a></li>
            <li><a role="button" className="" onClick={ () => {this.onSort('name', -1) } }><span className="fa fa-sort-alpha-desc pr-5">Tên Z-A</span></a>
            </li>
            <li role="separator" className="divider"/>
            <li><a role="button" className="" onClick={ ()  => { this.onSort('status', 1) }} >Trạng Thái Kích Hoạt</a></li>
            <li><a role="button" className="" onClick={ () => {this.onSort('status', -1)} } >Trạng Thái Ẩn</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default TaskSortControl;