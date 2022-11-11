import React from 'react'
import { IUser } from '../interface/user';
import '../css/UserCard.css';

interface IUsercardParams {
    user: IUser;
}

export const UserCard = ({user} : IUsercardParams): JSX.Element => {
    const userName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const birthday = new Date(user.dob.date).toLocaleDateString();
    return (
        <div className='user-card'>
            <div className='user-card__photo'>
                <img src={user.picture.large}  alt='user'/>
            </div>
            <div className='user-card__info'>
                <div className='user-card__nam'>{userName};</div>
                <div className='user-card__place'>{`${user.location.country} / ${user.location.city}`};</div>
                <div className='user-card__age'>{`Age: ${user.dob.age} (${birthday})`};</div>
            </div>
        </div>
    );
};
