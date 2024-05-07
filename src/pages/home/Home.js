import Topbar from "../../components/topbar/Topbar";
import home from './home.png';
import './Home.css'
export default function Home(){
    return(
        <div>
        <Topbar/>
        <div id="photo">
            <img src={home} alt="" id="home" style={{width:"400px",height:"400px"}} />
            <div id="buttons">
                <a href="/log"><button id="sign-in">SIGN-IN</button></a>
                <a href="/res"><button id="register">REGISTER</button></a>
                <a href="/pro"><button id="profile">Profile</button></a>                
            </div>
        </div>
        
        </div>
        
    
    )
}