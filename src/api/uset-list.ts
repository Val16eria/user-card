import { IUser } from "../interface/user";

export const getUsetList = (): Promise<IUser[]> => {
    return fetch('https://randomuser.me/api/?results=10')
    .then(result => {
        if (result.ok) {
            return result.json().then(data => data.results as IUser[]);
        }
        else {
            throw new Error(result.statusText);
        }
    })
};