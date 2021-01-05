import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import ProfileDetail from "../components/ProfileDetail";
import EditProfile from "../components/EditProfile";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const [showForm, setShowForm] = useState(false);
  const { user } = useContext(UserContext);
  if (!user) return <Redirect to="/" />;
  return (
    <div className="profileWrapper">
      <div className="profileDetails">
        <ProfileDetail title="Name" detail={user.name} />
        <ProfileDetail title="Age" detail={user.age} />
        <ProfileDetail title="Job" detail={user.job} />
      </div>
      {showForm ? (
        <EditProfile setShowForm={setShowForm} />
      ) : (
        <button onClick={() => setShowForm((prevValue) => !prevValue)}>
          Edit Details
        </button>
      )}
    </div>
  );
};
export default Profile;
