import React from 'react';
import UserItem from './UserItem';
import './UserList.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from "react-flip-move";

function UserList(props) {
    const {users} = props;
    const listUsers = users.map((user, index) => {
        return <div key={index} className="list">
            <UserItem
            id={ user.id }
            name={ user.name }
            email={ user.email }
            salary={ user.salary }
            photo={ user.photo }
            isGoldClient={ user.isGoldClient }
        />
        <span>
            <FontAwesomeIcon 
            className="faicons" 
            icon="trash"
            id="delete"
            onClick={() => props.deleteItem(user.id)}>
            </FontAwesomeIcon>
        </span>
        </div>
        
    });

    return (
        <div>
            <h2 id="header-user">Lista utilizatorilor:</h2>
            <FlipMove duration={300} easing="ease-in-out">{listUsers}</FlipMove>
        </div>
    );
}

export default UserList;