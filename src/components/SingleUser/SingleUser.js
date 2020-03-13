import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusSquare} from '@fortawesome/free-solid-svg-icons'
import './SingleUser.css'

const SingleUser = (props) => {
    console.log(props)
    const{name, email, phone, income, img} =props.user;
    return (
        <div className='single-user'>
            <div>
                <img className='profile-img' src={require('../../images/user.jpg')} />
                {/* <img className='profile-img' src={require(img)} /> */}
            </div>
            <div className='user-info'>
                <h1 className='user-name'>{name}</h1>
                <p><b>Email:</b>  {email}</p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Income: </b>BDT {income}/-</p>
                <button
                className='add-button'
                onClick={() => props.handleAddUser(props.user)}
                > <FontAwesomeIcon icon={faPlusSquare} /> Add Me
                </button>
            </div>
            
        </div>
    );
};

export default SingleUser;