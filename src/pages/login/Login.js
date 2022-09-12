import { signInWithEmailAndPassword } from "firebase/auth";
import { React,useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import {auth} from '../../firebase'
import './Login.scss';



const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthenticationContext);

  const handleLogin = (e) => {
    console.log(email);
    console.log(password);
  
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN",payload:user})
    
        navigate("/");
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email"
          // value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          // value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error===true && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
