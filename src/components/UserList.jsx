import React from 'react';
import UserItem from './UserItem';

function UserList(props) {
    const {users} = props;
    const listUsers = users.map((user, index) => {
        return <div key={index}>
            <UserItem
            id={ user.id }
            name={ user.name }
            email={ user.email }
            salary={ user.salary }
            photo={ user.photo }
            isGoldClient={ user.isGoldClient }
        />
        <button onClick={() => props.deleteItem(user.id)} style={{color:'red'}}>Delete</button>
        </div>
        
    });

    return (
        <div>
            <h2>Lista utilizatorilor:</h2>
            {listUsers}
        </div>
    );
}

export default UserList;