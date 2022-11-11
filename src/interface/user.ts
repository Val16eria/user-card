export interface IUserName {
    title: string;
    first: string;
    last: string;
}

export interface IBirthsdayData {
    date: Date;
    age: number;
}

export interface IUserPhoto {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface ILogin {
    uuid: string;
    username: string;
}

export interface ILocation {
    city: string;
    country: string;
}

export interface IUser {
    name: IUserName;
    location: ILocation;
    email: string;
    dob: IBirthsdayData;
    picture: IUserPhoto;
    login: ILogin;
}