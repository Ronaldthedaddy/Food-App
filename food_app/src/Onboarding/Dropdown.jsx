import React, { useState } from 'react';
import profile from "../images/profile.png"
import changepass from "../images/changepass.png"
import logout from "../images/logout.png"
import './dropdown.css'; // Create a CSS file for modal styling
import { Link } from 'react-router-dom';

function App() {
  const [isModalVisible, setModalVisibility] = useState(false);

  const toggleModal = () => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <div className="App">
      <button onClick={toggleModal} className="down-button">
        &#9660; {/* Unicode down arrow character */}
      </button>

      {/* Conditional rendering of the modal */}
      {isModalVisible && (
        <div className="modal">
          
            <Link to="/userprofile" className='propassout'>
                <div><img src={profile} alt="" /></div>
                <div className='pclxt'>Profile</div>
            </Link>

            <Link to="/changepassword" className='propassout'>
                <div><img src={changepass} alt="" /></div>
                <div className='pclxt'>Change Password</div>

            </Link>
                
            <Link to="/" className='propassout'>
                <div><img src={logout} alt="" /></div>
                <div className='pclxt'>Logout</div>
            </Link>

        
        </div>
      )}

      {/* <p>Other content on the page</p> */}

    </div>
  );
}

export default App;
