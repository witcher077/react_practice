import React,{useState} from 'react';


const AuthContext = React.createContext({
    token:'',
    type:'',
    email:'',
    username:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
});

export const AuthContextProvider =(props)=>{
    
    const initialToken = localStorage.getItem('token');
    const userType = localStorage.getItem('type');
    const userEmail = localStorage.getItem('email');
    const userName = localStorage.getItem('username');
    const [token,setToken]=useState(initialToken);
    const [type,setType]=useState(userType);
    const [email,setEmail]=useState(userEmail);
    const [name,setName]=useState(userName);

    const userLoggedIn =!!token;

    const loginHandler =(data)=>{
        console.log(data)
        setToken(data.token);
        setType(data.type);
        setEmail(data.email);
        setName(data.name);
        localStorage.setItem('token',data.token);
        localStorage.setItem('type',data.type);
        localStorage.setItem('email',data.email);
        localStorage.setItem('username',data.name);
        localStorage.setItem('fname',data.firstName);
        localStorage.setItem('lname',data.lastName);


    }

    const logoutHandler = ()=>{
        setToken(null);
        setType(null);
        setEmail(null);
        setName(null);
        localStorage.removeItem('token');
        localStorage.removeItem('type');
        localStorage.removeItem('email');
        localStorage.removeItem('username');

    }

    const contextValue ={
        token:token,
        type:type,
        email:email,
        username:name,
        isLoggedIn:userLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    };

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>

}

export default AuthContext;