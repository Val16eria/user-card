import React, { useEffect, useState } from 'react';
import { getUsetList } from '../api/uset-list';
import '../css/List.css';
import { IUser } from '../interface/user';
import { UserCard } from './UserCard';

export const List: React.FC = (): JSX.Element => {
    const [list, setList] = useState<IUser[] | []>([]); // либо массив пользователей либо пустой массив

    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        getUsetList()
        .then(setList)
        .catch(() => setList([]))
        .finally(() => {setIsLoading(false)});
    }, []);

    return (
        <div className='user-list'>
            {list?.length ? 
            list.map(user => (
                <UserCard key={user.login.uuid} user={user} />
            )) 
            : <div className='user-list__empty-list'>{isLoading ? 'Загрузка...' :  'Список пуст'}</div>}
        </div>
    );
}
