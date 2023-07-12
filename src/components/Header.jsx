import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="row mt-3 align-items-center"
      style={{ borderBottom: "1px solid #000", height:'4rem' }}
    >
      <div className="col-3">LOGO</div>
      <div className="col-5" >
        <ul class="nav justify-content-center " >
          <li class="nav-item ">
            <a class="nav-link active" aria-current="page" href="#" style={{color:'#000'}}>
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'#000'}}>
              Courses
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'#000'}}>
              Lab
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'#000'}}>
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="col-4">side</div>
    </div>
  );
};

export default Header;
