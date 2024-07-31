export interface User {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    password: string;
    
  }

export interface Login {
    email: string;
    password: string;
  }

  export interface resetPassowrd
  {
    Password : string,
    cofirmPassowrd : string,
    email:string,
    token:string
  }

  export interface responeModel
  {
    isLoggedIn : boolean,
    jwtToken : string,
    refreshToken : string
  }