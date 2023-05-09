
import { useState } from "react"

export const useForm = () => {

    const [errors, setErrors] = useState({})
    const [disabled, setDisabled] = useState(false)

    const [registerData, setRegisterData] = useState({
        userName: '',
        position: '',
        email: '',
        phone: '',
        reason: ''
    })

    const onChange = (event) => {

        setRegisterData(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        })
        )

    }
    
    const validateForm = (registerData) => {
        
        const errors = {}
        
        if (!registerData.userName) {
            errors.name = 'Name should not be empty'
        } else if (registerData.userName.trim().length === 0) {
            errors.name = ''
        }
        if (!registerData.email) {
            errors.email = 'E-mail Required'
        } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(registerData.email)) {
            errors.email = 'E-mail format not valid'
        }
        if (!registerData.phone) {
            errors.phone = 'Phone should not be empty'
        } else if (/^[0-9]/.test(registerData.phone)) {
            errors.phone = ''
        }
        if (!registerData.position) {
            errors.position = 'Position shpuld not be empty'
        } else if (registerData.position.trim().length === 0) {
            errors.position = ''
        }
        if (!registerData.reason) {
            errors.reason = 'Reason should not be empty'
        } else if (registerData.reason.trim().length === 0) {
            errors.reason = ''
        }
        
        return errors
        
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const validationErrors = validateForm(registerData)
        setErrors(validationErrors)
        setDisabled(true)
    }

    return {
        ...registerData,
        registerData,
        handleSubmit,
        setRegisterData,
        onChange,
        disabled,
        errors
    }
}

export default useForm