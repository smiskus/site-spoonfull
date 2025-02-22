import { useCallback, useState, type ChangeEvent } from "react"

export const LoginPage = () => {
    // if authenticated redirect to home
    // if not show page
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccessful, setIsSuccessful] = useState<Boolean | undefined>(undefined);

    const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const inputType = event.target.name;
        const value = event.target.value;
        if (inputType === "username") {
            setUsername(value);
        } else if (inputType === "password") {
            setPassword(value);
        }
    }, [setUsername, setPassword])

    const handleSubmit = useCallback(() => {
        // Send username and password to api
        // How to obscure password??

    }, [])

    return (
        <div>
            <h1>Spoonfull</h1>
            <div>Sign in</div>
            <form>
                <label>Username: <input name="username" value={username} onChange={handleOnChange}></input></label>
                <label>Password: <input type="password" name="password" value={password} onChange={handleOnChange}></input></label>
            </form>
        </div>
    )
}