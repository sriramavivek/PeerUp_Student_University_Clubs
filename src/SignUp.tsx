import { Link } from "react-router";
import loginimg from './assets/undraw_conversation_15p8.svg'; 
import React from "react";

export default function SignUp(){
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [universityId, setUniversityId] = React.useState('');
    const [universityName, setUniversityName] = React.useState('');
    const [usn, setUsn] = React.useState('');
    const [gender, setgender] = React.useState('');
    const [bio, setBio] = React.useState('');
    return(
        <div className="contianer container-fluid min-vh-100 min-vw-100">
            <div className="row min-vh-100 min-vw-100">
                <div className="col-6 d-none d-md-flex p-5 justify-content-end align-content-end">
                    <img src={loginimg} alt="Login" className="w-75"/>
                </div>
                <div className='col-12 col-md-6 d-flex flex-column gap-2 justify-content-center align-items-center text-center'>
                    <div className='d-flex flex-column gap-5 w-100 justify-content-center align-items-center'>
                        <div>
                            <h2 className='dancing-script fs-1 fw-bolder'>PeerUp</h2>
                            <span className='text-secondary rubrik fw-semibold'>Connect with your peers</span>
                        </div>
                        <form className='w-100 d-flex flex-wrap gap-3 text-center justify-content-center align-items-center' onSubmit={(e)=>{
                            e.preventDefault();
                            
                            }}>
                            <input type="text" className="p-3 rounded-2 border-1" style={{width:'45%'}} placeholder="Name" required aria-required onChange={(e)=>{setName(e.target.value)}}/>
                            <input type="email" className='p-3 border-1 rounded-3 flex-grow-1' placeholder='Email' required aria-required onChange={(e)=>{setEmail(e.target.value)}}/>
                            <input type="password" className='p-3 border-1 rounded-3' style={{width:'45%'}} placeholder='Password' required aria-required onChange={(e)=>{setPassword(e.target.value)}}/>
                            <input type="password" className='p-3 border-1 rounded-3 flex-grow-1' placeholder='Confirm Password' required aria-required onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                            <input type="text" className='p-3 border-1 rounded-3' style={{width:'30%'}} maxLength={10} placeholder='University Id' required aria-required onChange={(e)=>{setUniversityId(e.target.value)}}/>
                            <input type="text" className='p-3 border-1 rounded-3 flex-grow-1' value={universityName} placeholder='University Name' required aria-required disabled aria-disabled />
                            <input type="text" className='p-3 border-1 rounded-3' style={{width:'30%'}} placeholder='USN' required aria-required onChange={(e)=>{setUsn(e.target.value)}}/>
                            <select className='p-3 border-1 rounded-3 flex-grow-1' required aria-required onChange={(e)=>{setgender(e.target.value)}}>
                                <option value="" disabled selected>Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <textarea className='p-3 border-1 rounded-3 flex-grow-1' placeholder='Bio' required aria-required onChange={(e)=>{setBio(e.target.value)}}/>
                            <Link to="/login" className='text-decoration-none' style={{color:'#6c63ff', width:'100%'}}>Already have an account? <span className='text-secondary rubrik fw-semibold'>Login</span></Link>
                            <button type='submit' className='btn p-2 w-50 btn-dark'>Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}