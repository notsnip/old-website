// importing libraries and css
import {React, useState} from 'react'
import './Navbar.css'
import { Link} from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';





function Navbar() {
  


  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  // const darkMode = useDarkMode(false);


  return (
    
    // navbar section 
    <div id='navbar'>

      {/* testing  */}
      <Modal open={open} onClose={onCloseModal} center containerId='dialog_modal' modalId='model_box'>
        <h2 style={{color:'black'}}>Simple centered modal</h2>
      </Modal>


        <span id='mode' target='' className='switch-btn' onClick={onOpenModal}>
          <iconify-icon icon="akar-icons:paper-airplane" height='1.4em'></iconify-icon>
          </span>

        <span id='mode' target=''> 
        <Link to='/'>
<iconify-icon icon="ic:round-home" height='1.4em' style={{color:'white'}}>
          </iconify-icon>
          </Link>
          </span>


        </div>
)}

export default Navbar
