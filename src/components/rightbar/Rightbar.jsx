import "./Rightbar.css";


export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
         
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle"> <b>Information</b></h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Copies:</span>
            <span className="rightbarInfoValue">500</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/1.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"><b>Ads</b></span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/2.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"><b>Offline Marketing</b></span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"><b>Pamplets</b></span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/4.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"><b>Wall posters</b></span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/6.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"><b>Online marketing</b></span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"><b>Email marketing</b></span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}