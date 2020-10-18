import React from 'react';
import { Router } from 'react-router-dom';
import '../../App.css';
import { Button } from '../Button';
import './SignUp.css';
 
export default function SignUp(){
    return(
        <div>
        <h1 className='signup'> Sign-Up </h1>
        <div className='form-input-areas'>
          <form>
            <input
              className='form-input'
              name='text'
              type='text'
              placeholder=' Type Your Name'
            />
            <input
              className='form-input'
              name='email'
              type='email'
              placeholder=' Email'
            />
            <input
              className='form-input'
              name='adress'
              type='text'
              placeholder=' Adress'
            />
            <input
              className='form-input'
              name='number'
              type='text'
              placeholder='Contact-Number'
            />
            <button className='submit-btn'>Submit</button>
          </form>
        </div>
        </div>
  );
    }     