import React, { useState } from 'react';
import './Users.css'
import SingleUser from '../SingleUser/SingleUser';


const Users = () => {
    const users = [
        {name:'Farhan Fardid', email:'farhanfardid62@gmail.com', phone:'01XXXXXXXXX', income: 20000, img: require('../../images/farhan.jpg')},
        {name:'Md. Shahanul Haque', email:'shawon63@gmail.com', phone:'01XXXXXXXXX', income: 80000, img: require('../../images/shawon.jpg')},
        {name:'Saddam Hossain', email:'saddambubt65@gmail.com', phone:'01XXXXXXXXX', income: 50000, img: require('../../images/saddam.jpg')},
        {name:'Zahid Ahmed', email:'zahidbubt67@gmail.com', phone:'01XXXXXXXXX', income: 90000, img: require('../../images/zahid.jpg')},
        {name:'Sudipto Kumar Mitra', email:'sudiptobt68@gmail.com', phone:'01XXXXXXXXX', income: 60000, img: require('../../images/sudipto.jpg')},
        {name:'Md. Motiur Rahman', email:'motiur47@gmail.com', phone:'01XXXXXXXXX', income: 40000, img: require('../../images/mridul.jpg')},
        {name:'Md. Tanvir Hossain Mitul', email:'mitulbubt48@gmail.com', phone:'01XXXXXXXXX', income: 70000, img: require('../../images/mitul.jpg')},
        {name:'Masum', email:'masumbubt55@gmail.com', phone:'01XXXXXXXXX', income: 80000, img: require('../../images/masum.jpg')},
        {name:'Tanmmay Debnath', email:'tanmmaybubt71@gmail.com', phone:'01XXXXXXXXX', income: 30000, img: require('../../images/tonmmy.jpg')},
        {name:'Md. Emam Uddin Shahed', email:'shahedbubt7367@gmail.com', phone:'01XXXXXXXXX', income: 20000, img: require('../../images/shahed.jpg')},
        {name:'Md Nazmul Rahman', email:'nazmulbubt77@gmail.com', phone:'01XXXXXXXXX', income: 35000, img: require('../../images/shojol.jpg')},
        {name:'Mahadi Hasan Rabby', email:'rabby78@gmail.com', phone:'01XXXXXXXXX', income: 32000, img: require('../../images/rabby.jpg')},
        {name:'Kafiul Islam', email:'kafiulbubt79@gmail.com', phone:'01XXXXXXXXX', income: 45000, img: require('../../images/kafiul.jpg')},
        {name:'Abdullah-AL-Noman', email:'nomanbubt83@gmail.com', phone:'01XXXXXXXXX', income: 47000, img: require('../../images/noman.jpg')},
        {name:'Forhad Hossain', email:'forhadbubt75@gmail.com', phone:'01XXXXXXXXX', income: 41000, img: require('../../images/frohan.jpg')}
    
    ]

    const [userInfo, setserInfo] = useState([]);

    const handleAddUser = (user) => {
        console.log('Person added', user);
        const newUserInfo = [...userInfo, user];
        setserInfo(newUserInfo);
    }
    
    let totalSalary = 0;
    for(let i = 0; i < userInfo.length; i++) {
        totalSalary += userInfo[i].income;
    }
    return (
        <div className='user-container'>
            <div className="user-profile">
                {
                    users.map(usr => <SingleUser 
                        handleAddUser = {handleAddUser}
                        user={usr}
                        ></SingleUser>)
                }
            </div>
            <div className="user-salary">
                <h1>User Salary</h1>
                <p><b>User Count:</b> {userInfo.length}</p>
                <p><b>Total Annual Salary:</b> BDT {totalSalary * 12}/-</p>
            </div>
        </div>
    );
};

export default Users;