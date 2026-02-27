import React, { useState } from 'react';
import './Invitation.css';

const Invitation = ({ onOpen }) => {
    const [opened, setOpened] = useState(false);

    const handleOpen = () => {
        if (opened) return;
        setOpened(true);

        // This delay should match the 'transition' duration in your CSS
        // For example, if your flap takes 1.5s to open, use 1500ms
        setTimeout(() => {
            if (onOpen) onOpen();
        }, 1500);
    };

    return (
        <div className={`full-screen-envelope ${opened ? 'is-open' : ''}`}>
            {/* 1. Interior: This stays hidden behind the flaps until they open */}
            {/* <div className="envelope-interior">
                <div className="inner-message">
                    <h2>Welcome</h2>
                    <p>The envelope is now open.</p>
                </div>
            </div> */}

            {/* 2. Flaps: Order matters for z-index */}
            <div className="flap left"></div>
            <div className="flap right"></div>
            <div className="flap bottom"></div>
            <div className="flap top"></div>

            {/* 3. UI Elements: Instructions and Seal */}

            <br />
            <div className="wax-seal" onClick={handleOpen}>
                <img src="/logo.png" alt="Seal Logo" className="seal-logo" />
            </div>

            <br />
            <div className="exclusive-text">
                अतिथि देवो भवः
            </div>
        </div>
    );
};

export default Invitation;