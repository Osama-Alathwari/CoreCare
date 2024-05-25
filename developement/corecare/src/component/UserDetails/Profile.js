import "../../css/UserPageStyle/profile.css"
import Osama from '../../assets/osama.jpg'
import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";



function Profile(props) {
    return (
        <div className="profile-container">
            <ProfileHeader image={Osama} username="osama" name="Osama Alathwari" gender="Male" age="29" twitter="osama" insta="osama" linkedin="osama" fb="osama" whatsapp="osama" />
            <ProfileBody isDoctor={props.isDoctor} />
        </div>
    )
}

export default Profile;

