import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus, faList, faHome, faUsers, faNewspaper, faDashboard, faLocationArrow, faFirstAid, faHomeUser } from "@fortawesome/free-solid-svg-icons";

const SidebarAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [artikelSubMenu, setArtikelSubMenu] = useState(false);
  const [lokasiSubMenu, setLokasiSubMenu] = useState(false);
  const [goldarSubMenu, setGoldarSubMenu] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const SidebarLink = ({ to, icon, text, showText = true, onClick }) => (
    <div style={{ border: "3px solid black", borderRadius: "10px", padding: "10px 0", margin: "10px", backgroundColor: "black", color: "white" }}>
      {to && (
        <Link to={to} className="sidebar-link" onClick={closeSidebar}>
          <span className="icon" style={{ color:"white",margin:"10px"}}>
            <FontAwesomeIcon icon={icon} className="w-5 h-5" />
          </span>
          {showText && <span className="text" style={{color:"white" ,textDecoration:"none"}}>{text}</span>}
        </Link>
      )}
      {onClick && (
        <a href="#" onClick={onClick} className="sidebar-link">
          <span className="icon"  >
            <FontAwesomeIcon icon={icon} className="w-5 h-5" />
          </span>
          {showText && <span className="text">{text}</span>}
        </a>
      )}
    </div>
  );
  

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="flex flex-col justify-between flex-grow pt-5 pb-5" style={{ width:"150%", height:"100vh",backgroundColor:"gray"}}>
        <br />
        <div>
          <div className="text-center">
            <h3>Main</h3>
          </div>
          <SidebarLink to="/" icon={faHomeUser}  text="Halaman Pengguna"/>
          <SidebarLink to="/admin" icon={faHome} text="Beranda" />
          <SidebarLink to="/databuku" icon={faUser} text="DataBuku" />
          <SidebarLink to="/datapengguna" icon={faUser} text="Data Pengguna" />
          <SidebarLink to="/datapeminjaman" icon={faUser} text="DataPinjam" />
          <SidebarLink to="/landingpageadmin" icon={faDashboard} text="Landing Page" />
        </div>
      </div>
      <div
        onClick={toggleSidebar}
        onMouseEnter={openSidebar}
        onMouseLeave={closeSidebar}
        className={`overlay ${isSidebarOpen ? "open" : ""}`}
      ></div>
    </div>
  );
};

export default SidebarAdmin;