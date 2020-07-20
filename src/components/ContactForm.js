import React, { Component } from 'react'

function ContactForm(props) {
    return(
        <div>
            <form method='POST'>
                <h1>Contact Us</h1>
                <div className='form-row'>
                    <label htmlFor='Name'>Name: </label>
                    <input type='text'/>
                </div>
                <div className='form-row'>
                    <label htmlFor='Name'>E-mail: </label>
                    <input type='text' />
                </div>
                <div className='form-row'>
                    <label htmlFor='Name'>Message: </label>
                    <textarea ></textarea>
                </div>
                <div className='form-row'>
                    <input type='submit'/>
                </div>
            </form>
        </div>
    );
}
export default ContactForm
