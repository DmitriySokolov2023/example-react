import React from 'react';
import classes from "./MyModal.module.css";

const MyModal = ({children, visible,setVisible}) => {
    return (
        <div
            className={visible ? [classes.myModal, classes.active].join(' ') : classes.myModal}
            onClick={()=>setVisible(false)}
        >
            <div
                className={classes.myModalContent}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default MyModal;