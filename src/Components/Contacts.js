import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';


function Contacts() {

    const [ show , setShow ] = useState(false)

    // sen to mail part
    const serviceID = "service_4rotp7f"
    const templateID = "template_z61o5qu"
    const publicKey = "Qy7Djmxath4HvKv1y"

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm( serviceID, templateID , form.current, publicKey )
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          setShow(true)

        }


  return (
    <div id='contacts' className='contacts'>
        
        <div className="text-center">
            <h1>Contact Me</h1>
            <p>
                Please fill out the form and describe you project needs and
                needs I'll contact you as soon as possible.
            </p>
            {
                show && 
                    <p className='alert'> This Message sent successfully !</p>
            }
            
        </div>

        <div className="container">

            <form ref={form} onSubmit={sendEmail}>

            <div className="row">

                <div className="col-md-6 col-xs-12">

                    {/* NAME INPUT */}
                    <div className="text-center">
                        <input 
                            type="text"
                            className='form-control'
                            placeholder='Name'
                            name='name'
                        />
                        <div className="line"></div>
                    </div>

                    {/* PHONE INPUT */}
                    <div className="text-center">
                        <input 
                            type="text"
                            className='form-control'
                            placeholder='Phone Number'
                            name='phone'
                            />
                        <div className="line"></div>
                    </div>

                    {/* EMAİL INPUT */}
                    <div className="text-center">
                        <input 
                            type="email"
                            className='form-control'
                            placeholder='Email'
                            name='email'
                        />
                        <div className="line"></div>
                    </div>

                    {/* SUBJECT INPUT */}
                    <div className="text-center">
                        <input 
                            type="text"
                            className='form-control'
                            placeholder='Subject'
                            name='subject'
                        />
                        <div className="line"></div>
                    </div>

                </div>

                <div className="col-md-6 col-xs-12">

                     {/* DESCRIPTION*/}
                     <div className="text-center">
                        <textarea 
                            type='text'
                            className='form-control'
                            placeholder='Please describe shortly your project'
                            name='description'
                        >
                        </textarea>
                        <div className="line"></div>
                     </div>

                    <button 
                        className="btn-main-offer contact-btn"
                        type='submit'
                    >
                        Contact Me
                    </button>

                </div>

                
                
            </div>

            </form>

        </div>

    </div>
  )
}

export default Contacts