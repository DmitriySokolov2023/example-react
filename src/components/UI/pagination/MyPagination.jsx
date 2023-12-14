import React from 'react';
import MyButton from "../button/MyButton";
import classes from "./MyModal.module.css";

const MyPagination = ({pagesArray, setPage, page}) => {
    return (
        <div>
            {pagesArray?.map((p, index) =>
                <MyButton
                    key={index}
                    style={{margin: '20px 0'}}
                    className={page === p ? 'page page__current' : 'page'}
                    onClick={() => setPage(p)}
                >{p}</MyButton>
            )}
        </div>
    );
};

export default MyPagination;