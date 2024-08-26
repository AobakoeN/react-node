// src/pages/Profile/UserProfile.jsx
import React from 'react';
import { UserProfileContainer, ProfileHeader, ProfileInfo, FollowerCount, EditButton } from './UserProfile.styled';

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <ProfileHeader>User Profile</ProfileHeader>
      <ProfileInfo>
        <label>Username:</label>
        <input type="text" value="JohnDoe" readOnly />
      </ProfileInfo>
      <ProfileInfo>
        <label>Email:</label>
        <input type="email" value="johndoe@example.com" readOnly />
      </ProfileInfo>
      <FollowerCount>
        <label>TikTok Followers:</label>
        <input type="number" value="5000" readOnly />
      </FollowerCount>
      <FollowerCount>
        <label>YouTube Subscribers:</label>
        <input type="number" value="10000" readOnly />
      </FollowerCount>
      <FollowerCount>
        <label>Instagram Followers:</label>
        <input type="number" value="8000" readOnly />
      </FollowerCount>
      <FollowerCount>
        <label>Twitter Followers:</label>
        <input type="number" value="6000" readOnly />
      </FollowerCount>
      <EditButton>Edit Profile</EditButton>
    </UserProfileContainer>
  );
};

export default UserProfile;
