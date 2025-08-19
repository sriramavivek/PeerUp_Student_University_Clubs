import React from 'react';
import loginimg from './assets/undraw_conversation_15p8.svg';
import { Link } from 'react-router';
import { authenticate } from './Functionalities/AuthManager';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <div className="contianer container-fluid min-vh-100 min-vw-100">
            <div className="row min-vh-100 min-vw-100">
                <div className="col-6 d-none d-md-flex p-5 justify-content-end align-content-end">
                    <img src={loginimg} alt="Login" className="w-75"/>
                </div>
                <div className='col-12 col-md-6 d-flex flex-column gap-2 justify-content-center align-items-center text-center'>
                    <div className='d-flex flex-column gap-5 w-75 justify-content-center align-items-center'>
                        <div>
                            <h2 className='dancing-script fs-1 fw-bolder'>PeerUp</h2>
                            <span className='text-secondary rubrik fw-semibold'>Connect with your peers</span>
                        </div>
                        <form className='w-100 d-flex flex-column gap-4 text-center justify-content-center align-items-center' onSubmit={(e)=>{
                            e.preventDefault();
                            authenticate(email, password);
                        }}>
                            <input type="email" className='p-3 border-1 rounded-3 w-100' placeholder='Email' required aria-required onChange={(e) => setEmail(e.target.value)}/>
                            <input type="password" className='p-3 border-1 rounded-3 w-100' placeholder='Password' required aria-required onChange={(e) => setPassword(e.target.value)}/>
                            <button type='submit' className='btn p-2 w-50 btn-dark'>Login</button>
                            <span className='text-secondary rubrik fw-semibold'>Not yet joined ur peers? <Link to="/signup" className='text-decoration-none' style={{color:'#6c63ff'}}>Sign Up</Link></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}