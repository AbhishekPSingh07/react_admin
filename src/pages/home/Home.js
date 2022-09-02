import React from 'react'
import Sidebar from '../../Components/sidebar/Sidebar';
import Navbar from '../../Components/navbar/Navbar';
import './Home.scss'
import Widgets from '../../Components/widgets/Widgets';
import Featured from '../../Components/featured/Featured';
import Chart from '../../Components/chart/Chart';
import List from '../../Components/table/Table';
function Home() {
  return (
    <div className='home'>
      
      <Sidebar/>
      <div className='home__container'>
        <Navbar/>
        <div className='widgets'>
          <Widgets type="user"/>
          <Widgets type="order"/>
          <Widgets type="earning"/>
          <Widgets type="balance"/>
        </div>
        <div className='charts__container'>
          <Featured/>
          <Chart aspect={5/3} title="Last 6 Revenue"/>
        </div>
        <div className='list__container'>
          <div className='list__title' >Latest Transaction</div>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Home
