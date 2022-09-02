import React from 'react'
import './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

function Featured() {
  return (
    <div className='featured'>
      <div className='top'>
        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon fontSize = 'small'/>
      </div>
      <div className='bottom'>
        <div className='featured__chart'>
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className='title'>Total Sales Made Today</p>
        <p className='amount'>$420</p>
        <p className='desc'>Previous Transactions Processing.Last Payment may not be included.</p>
        <div className='summary'>
            <div className='item'>
            <div className='item__title'>Target</div>
                <div className='item__result negative'>
                    <KeyboardArrowDown fontSize='small'/>
                    <div className='result__amount'>$12.5k</div>
                </div>
            </div>
            <div className='item'>
                <div className='item__title'>Last Week</div>
                <div className='item__result positive'>
                    <KeyboardArrowUp fontSize='small'/>
                    <div className='result__amount'>$12.5k</div>
                </div>    
            </div>
            <div className='item'>
                <div className='item__title'>Last Month</div>
                <div className='item__result positive'>
                    <KeyboardArrowUp fontSize='small'/>
                    <div className='result__amount'>$12.5k</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
