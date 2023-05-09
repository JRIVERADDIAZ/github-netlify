
import useForm from '../hooks/useForm'
import styles from "./styles/contact.module.css"

const Contact = () => {

  const {
    registerData,
    onChange,
    disabled,
    handleSubmit,
    errors
  } = useForm()

  const { userName, position, email, phone, reason } = registerData

  return (

    <div>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="userName"
          placeholder='Name'
          onChange={onChange}
          value={userName}
          required
        />
        {
          errors.userName &&
          <span>{errors.userName} </span>
        }

        <input
          type="text"
          name="position"
          placeholder='Job position'
          onChange={onChange}
          value={position}
          maxLength={13}
          required
        />
        {
          errors.position &&
          <span>{errors.position} </span>
        }

        <input
          type="email"
          name="email"
          placeholder='E-mail'
          onChange={onChange}
          value={email}
          required
        />
        {
          errors.email &&
          <span>{errors.email} </span>
        }

        <input
          type="number"
          name="phone"
          placeholder='Phone Number'
          onChange={onChange}
          value={phone}
          required
        />
        {
          errors.phone &&
          <span>{errors.phone} </span>
        }

        <input
          type="text"
          name="reason"
          placeholder='Please leave your message'
          onChange={onChange}
          value={reason}
          maxLength={30}
          required
        />
        {
          errors.reason &&
          <span>{errors.reason} </span>
        }

        <button disabled={!disabled}> Submit </button>

      </form>

    </div>
  )
}

export default Contact