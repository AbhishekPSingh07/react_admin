import Navbar from '../../Components/navbar/Navbar'
import Sidebar from '../../Components/sidebar/Sidebar'
import './New.scss'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useEffect, useState } from 'react';
import { setDoc,doc,  serverTimestamp } from "firebase/firestore"; 
import { auth ,db , storage} from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';



function New({inputs,title}) {
  const [file,setFile]=useState("");
  const [data,setData]=useState("");
  const [perc,setPerc] = useState(null);
  const navigate = useNavigate();
  const handleInput = (e)=>{
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data,[id]:value});
  }
  useEffect(()=>{
    const uploadFile =()=>{
      const uniqueName = new Date().getTime() + file.name
      const storageRef = ref(storage, uniqueName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPerc(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev)=>({...prev,img:downloadURL}))
          });
        }
      );
    }
    file && uploadFile();
  },[file])
  console.log(data,data.id);
  const handleAdd = async(e)=>{
    e.preventDefault();
    try{
      const res = await createUserWithEmailAndPassword(auth,data.email,data.password);
      await setDoc(doc(db, "user",res.user.uid), {
        ...data,
        timestamp : serverTimestamp(),
      });
      navigate(-1);
    }catch(error){
      console.log(error);
    }
    
    
  }

  
  
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
            <form onSubmit={handleAdd}>
            <div className='form__input'>
                 <label htmlFor='file'>Image: <DriveFolderUploadIcon className='icon'/></label>
                <input type="file" id="file" onChange ={(e)=>setFile(e.target.files[0])} style={{display:"none"}}></input>
              </div>
              {inputs.map((input)=>(
                <div className='form__input' key={input.id}>
                <label>{input.label}</label>
                <input 
                  id = {input.id}
                  type={input.type} 
                  placeholder={input.placeholder} 
                  onChange={handleInput}>
                </input>
              </div>
              ))}
            
              <button disabled={perc !== null && perc<100} type="submit">Submit</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
