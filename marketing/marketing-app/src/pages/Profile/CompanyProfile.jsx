// src/pages/Profile/CompanyProfile.jsx
import React from 'react';
import { CompanyProfileContainer, ProfileHeader, ProfileInfo, AdPosted, EditButton } from './CompanyProfile.styled';

const CompanyProfile = () => {
  return (
    <CompanyProfileContainer>
      <ProfileHeader>Company Profile</ProfileHeader>
      <ProfileInfo>
        <label>Company Name:</label>
        <input required type="text" value="TechCorp" readOnly />
      </ProfileInfo>
      <ProfileInfo>
        <label>Email:</label>
        <input required type="email" value="contact@techcorp.com" readOnly />
      </ProfileInfo>
      <AdPosted>
        <label>Advertisements Posted:</label>
        <input required type="number" value="15" readOnly />
      </AdPosted>
      <EditButton>Edit Profile</EditButton>
    </CompanyProfileContainer>
  );
};

export default CompanyProfile;
