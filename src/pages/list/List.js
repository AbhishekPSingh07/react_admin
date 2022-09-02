import DataTable from '../../Components/DataTable/DataTable'
import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import './List.scss'

function List({title}) {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='list__container'>
        <Navbar/>
        <DataTable title={title}/>
      </div>
    </div>
  )
}

export default List
