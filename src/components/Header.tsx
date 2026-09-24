import React from 'react';
import client from '../../tina/__generated__/client';

export default async function Header() {
  let data;
  try {
    const res = await client.queries.home({ relativePath: 'index.md' });
    data = res.data.home;
  } catch (error) {
    console.error("Error fetching header data from TinaCMS:", error);
  }

  // Fallbacks if data fails to load
  const name = data?.name || "Dr. Manish Kumar";
  const role = data?.role || "Assistant Professor";
  const affiliation = data?.affiliation || "School of Engineering and Technology, Central University of Haryana";
  const email1 = data?.email1 || "khanagwal.manish@gmail.com";
  const email2 = data?.email2 || "manish.kumar@cuh.ac.in";
  const phone = data?.phone || "+91-9255140623";
  const logoUrl = data?.logo || "/cuh-logo.png";
  const profileUrl = data?.profilePhoto || "/profile-img.jpg";

  return (
    <div id="header">
      <div id="logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      <div id="header-title">
        <h1>{name}</h1>
        <h2>{role}</h2>
        <div>
          <strong>{affiliation}</strong>
        </div>
        <div className="contact-info">
          <strong>E-mail: </strong> {email1} &nbsp;|&nbsp; {email2 && <>{email2} &nbsp;|&nbsp;</>} <strong>Phone:</strong> {phone}
        </div>
      </div>
      <div id="myphoto">
        <img src={profileUrl} alt="Profile" />
      </div>
    </div>
  );
}
