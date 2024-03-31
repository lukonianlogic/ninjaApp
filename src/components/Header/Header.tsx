import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    // Function to close the dropdown and navigate
    const closeDropdown = () => setIsOpen(false);

    return (
        <header className="header">
            <div className='container-fluid d-flex justify-content-between align-items-center h-100'>
                <div className="logo">
                    <Link to="/" onClick={closeDropdown}>
                        <img className="header-image" alt="Header" src="/NWLogoV1.png" />
                    </Link>
                </div>

                <nav>
                <Dropdown show={isOpen} onToggle={toggleDropdown}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        ☰
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/attendance" onClick={closeDropdown}>Attendance</Dropdown.Item>
                        {/* <Dropdown.Item as={Link} to="/checklist" onClick={closeDropdown}>Checklist</Dropdown.Item> */}
                        <Dropdown.Item as={Link} to="/students" onClick={closeDropdown}>Students</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/classes" onClick={closeDropdown}>Classes</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/obstacles" onClick={closeDropdown}>Obstacles</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/courses" onClick={closeDropdown}>Courses</Dropdown.Item>
                        {/* <Dropdown.Item as={Link} to="/curriculum" onClick={closeDropdown}>Curriculum</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
            </nav>
            </div>
        </header>
    );
};

export default Header;
