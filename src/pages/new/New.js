import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import './New.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from 'react';

function New({inputs,title}) {

  const [file,setFile]=useState("");
  return (
    <div className='new'>
      <Sidebar/>
      <div className='new__container'>
        <Navbar/>
        <div className='top'>
          <h1>{title}</h1>
        </div>
        <div className='bottom'>
          <div className='left'>
            <img
              src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'}
              alt=''
            />
          </div>
          <div className='right'>
            <form>
            <div className='form__input'>
                 <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon'/></label>
                <input type="file" id="file" onChange ={(e)=>setFile(e.target.files[0])} style={{display:"none"}}></input>
              </div>
              {inputs.map((input)=>(
                <div className='form__input' key={input.id}>
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}></input>
              </div>
              ))}
              {/* <div className='form__input'>
                <label>Full Name</label>
                <input type="text" placeholder='Ex:John Doe'></input>
              </div>
              <div className='form__input'>
                <label>Email</label>
                <input type="Email" placeholder='Ex:johndoe@gmail.com'></input>
              </div>
              <div className='form__input'>
                <label>Phone</label>
                <input type="text"></input>
              </div>
              <div className='form__input'>
                <label>Password</label>
                <input type="password"></input>
              </div>
              <div className='form__input'>
                <label>Address</label>
                <input type="text"></input>
              </div>
              <div className='form__input'>
                <label>Country</label>
                <input type="text"></input>
              </div> */}
                <button>Submit</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
