import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/7.png"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/3.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName"><b>Publicity marketing and management System</b></h4>
                <span className="profileInfoDesc">Select your Option</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}