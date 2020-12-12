import React from "react";
import { useParams } from "react-router-dom";

const ProfileId = () => {
  const params = useParams();
  const { profileId } = params;
  return (
    <div>
      <h1>Profile User</h1>
      <div>
        <span>{`Halo ${profileId}`}</span>
      </div>
    </div>
  );
};

export default ProfileId;
