import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const FindUsOn = () => {
  return (
    <div className="m-2">
      <h3 className="font-semibold mb-3">Find Us On</h3>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="btn join-item justify-start"><FaFacebook /> Facebook</button>
        <button className="btn join-item justify-start"><FaTwitter /> Twitter</button>
        <button className="btn join-item justify-start"><FaInstagram /> Instagram</button>
      </div>
    </div>
  );
};

export default FindUsOn;
