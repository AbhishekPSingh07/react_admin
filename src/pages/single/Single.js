import './Single.scss'
import Sidebar from '../../Components/sidebar/Sidebar'
import Navbar from '../../Components/navbar/Navbar'
import Chart from '../../Components/chart/Chart'
import List from '../../Components/table/Table'

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='single__container'>
        <Navbar/>
        <div className='top'>
          <div className='left'>
            <div className='edit__button'>Edit</div>
            <h1 className='title'>Information</h1>
            <div className='item'>
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="item__img"
              />
              <div className='details'>
                <h1 className='item__title'>Jane Doe</h1>
                <div className='item__detail'>
                  <span className='item__key'>Email : </span>
                  <span className='item__value'>janedoe@gmail.com</span>
                </div>
                <div className='item__detail'>
                  <span className='item__key'>Phone : </span>
                  <span className='item__value'>9422956442</span>
                </div>
                <div className='item__detail'>
                  <span className='item__key'>Address : </span>
                  <span className='item__value'>flat xyz abc ap. area 51 India</span>
                </div>
                <div className='item__detail'>
                  <span className='item__key'>Country : </span>
                  <span className='item__value'>India</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className='right'>
          
            <Chart aspect={5/2} title="User Transaction (Last 6 Months)"/>
          </div>
        </div>
        <div className='bottom'>
        <h1 className='title'>Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single
