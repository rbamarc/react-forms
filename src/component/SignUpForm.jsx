import { useState } from "react"

export default function SignUp({setToken}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (username.length < 8) {
            setError("Username must be at least eight characters long.");
            return;
        }
        
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        password
                        
                    })
                })
            console.log(response)
            const result = await response.json()
            console.log(result)
            setToken(result.token)
        } catch (error) {
            setError(error.message)
        }
    }


    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error }</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input type="text" value={username } onChange={(e)=>setUsername(e.target.value)} />
                </label>
                <label>
                    Password: <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}