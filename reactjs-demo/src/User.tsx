import './App.css'

interface UserProps {
    name: String,
    email: String
}

const User = ({name, email}: UserProps) => {
  return (
    <div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default User