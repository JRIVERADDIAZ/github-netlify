import React, { useRef, useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = () => {



    }
    console.log(message, name);

    return (
        <>
            <form onSubmit={handleSubmit} name="contact"  method='POST' netlify >

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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <button type='submit'  >submit</button>

            </form>
        </>
    )
}

export default Contact