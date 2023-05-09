import React, { useRef, useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    console.log(email, name);

    return (
        <>
            <form name="contact" method='POST'>

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

                <button type='submit'  >submit</button>

            </form>
        </>
    )
}

export default Contact