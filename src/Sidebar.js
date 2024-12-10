import React from 'react';
import { 
  BsGrid1X2Fill, 
  BsFillArchiveFill, 
  BsTicketPerforatedFill, 
  BsBellFill, 
  BsPinMapFill, 
  BsExclamationTriangleFill, 
  BsFillTelephoneFill, 
  BsInfoCircleFill 
} from 'react-icons/bs';
import { FaBus } from 'react-icons/fa';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <FaBus className='icon_header' /> 
          <span>KDU_</span>
          <span style={{ color: 'green' }}>g</span>
          <span style={{ color: 'orange' }}>o</span>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon' /> Seat Reservation
            
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillArchiveFill className='icon' /> Live Scheduling
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsTicketPerforatedFill className='icon' /> Ticket Prices
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsBellFill className='icon' /> Notification
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPinMapFill className='icon' /> Tracking
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsExclamationTriangleFill className='icon' /> Emergency
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillTelephoneFill className='icon' /> Contact
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsInfoCircleFill className='icon' /> About
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
