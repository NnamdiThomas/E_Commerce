import React from 'react'
import "./profile.css"
import { User } from 'phosphor-react';

export const Profile = () => {

  const FN = localStorage.getItem("firstName");
  const LN = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
    return (
        <div className="container mt-5">
      <div className="card profile-card">
        <div className="card-body text-center">
        <User size={200} />
          <h2 className="card-title">{LN + "  " + FN}</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h4>Contact Information</h4>
              <p>{email}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
          );
  
}
