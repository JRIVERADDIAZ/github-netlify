import React, { useEffect, useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [position, setPosition] = useState("")

    console.log(email, name);
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension(){
      return {
            width: window.innerWidth,
            height: window.innerHeight
      }
    }

    useEffect(() => {
          const updateDimension = () => {
                setScreenSize(getCurrentDimension())
          }
          window.addEventListener('resize', updateDimension);
  
      
          return(() => {
              window.removeEventListener('resize', updateDimension);
          })
    }, [screenSize])

    console.log(screenSize);

    return (
        <>
            <form name="contact" method='POST' className='form-container'>
                <h1>Contact me</h1>
                <input type="hidden" name='form-name' value="contact" />
                <input
                    type="text"
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    id='email'
                    type="email"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    id='position'
                    type='text'
                    name='position'
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />

                <textarea name="" id="" cols="30" rows="10"></textarea>

                <button type='submit'  >submit</button>

            </form>
        </>
    )
}

export default Contact