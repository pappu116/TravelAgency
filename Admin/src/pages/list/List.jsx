import DataTable from "../../components/datatable/DataTable"
import NavBar from "../../components/navbar/NavBar"
import SideBar from "../../components/sidebar/SideBar"
import "./list.scss"

const List = ({columns}) => {
  return (
    <div className="list">
      <SideBar/>
      <div className="listContainer">
        <NavBar/>
        <DataTable columns={columns}/>
      </div>
    </div>
  )
}

export default List