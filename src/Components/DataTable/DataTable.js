import React, { useEffect, useState } from 'react'
import './DataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userColumn} from "../../datatableSource"
import {Link} from 'react-router-dom';
import { collection,deleteDoc,doc, onSnapshot } from "firebase/firestore";
import {db} from '../../firebase';


function DataTable({title}) {
  const[data,setData] = useState([]);
  useEffect(()=>{
  //   let list = []
  //   const fetchData = async () =>{
  //     const querySnapshot = await getDocs(collection(db, "user"));
  //     querySnapshot.forEach((doc) => {
  //       list.push({id:doc.id,...doc.data()});
  //     });
  //     setData(list);
  //   }
  //   fetchData()
  //Listen
  const unsub = onSnapshot(collection(db,"user"),(snapShot) =>{
      let list=[];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    },(error)=>{
      console.log(error);
    });
    return ()=>{
      unsub();  //Clean Up Function
    }
      
    
  },[]);
  

  const handleDelete  = async(id)=>{
    await deleteDoc(doc(db,'user',id));
    setData(data.filter((item) => item.id !== id));
  };
    const actionColumn=[{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell:(params)=>{
            return(
                <div className='cell__action'>
                  <Link to="/users/test" style={{textDecoration:"none"}}>
                    <div className='view__button'>View</div>
                    </Link>
                    <div className='delete__button' onClick={()=>handleDelete(params.row.id)}>Delete</div>
                    
                </div>
            );
        },
    },];
  return (
    <div className='datatable' >
      <div className='datatable__title'>
        {title}
        <Link to="new" style={{textDecoration:"none"}} className='link'>
          Add New
        </Link>
      </div>
      <DataGrid 
        className='datagrid'
        rows={data}
        columns={userColumn.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable
