import React, { useState } from 'react';
import "./Home.css";
import showToast from 'crunchy-toast'

function Home() {
    const [contacts, setContacts] = useState([
        {
            name: 'Jayant',
            mobile: '7326463736',
            email: 'jayant@gmail.com',
        },
        
    ]);

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');

    const addContact = () =>{
         const obj = {
            name: name,
            mobile: mobile,
            email: email,
         }

        setContacts([...contacts, obj]);

        showToast('Contact Added Succesfully', 'success', 3000);

        setName('');
        setMobile('');
        setEmail('');
        
    };

    return (
        <div>
            <h1 className='app-title'>📞 Contact App</h1>

            <div className='app-body'>

                <div className='contacts-container'>
                    <h2 className='sub-heading'>Show Contacts</h2>
                    {
                        contacts.map((contact, index) => {

                            return (
                                <div className='contact-card' key={index}>
                                    <p className='contact-name m-2'>🤵 {contact.name}</p>
                                    <p className='contact-mobile m-2'>📞 {contact.mobile}</p>
                                    <p className='contact-email m-2'>📧 {contact.email}</p>
                                </div>
                            )

                        })
                    }
                </div>

                <div className='add-contacts-container'>
                    <h2 className='sub-heading'>Add Contact</h2>
                    <form>
                        
                        <input
                            type='text'
                            placeholder='Name'
                            className='user-input'
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                            value={name}
                          />
                         
                        <input
                            type='telephone'
                            placeholder='Mobile'
                            className='user-input'
                            onChange={(e)=>{
                                setMobile(e.target.value)
                            }}
                            value={mobile}
                         />

                        <input
                            type='email'
                            placeholder='Email'
                            className='user-input'
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            value={email}
                            />

                        <button  
                        type='button' 
                        className='btn-add-contact'
                        onClick={addContact}>
                            Add Contact
                            </button>
                    </form>
                </div>

            </div>
        </div>
    )

}
export default Home