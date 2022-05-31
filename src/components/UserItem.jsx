import React from 'react';

function UserItem(props) {
    const {name, email, salary, photo, isGoldClient} = props;

    return (
        <div>
            <h3>{ name }</h3>
            <p>{ email }</p>
            <p>{ salary }</p>
           {
               photo 
               ? <img height="100px" src={ photo } alt="profile_picture"/>
               : null
           }
            
            { isGoldClient
                ? <h3>Client GOLD</h3>
                : null
            }
            
        </div>
    );
}

export default UserItem;