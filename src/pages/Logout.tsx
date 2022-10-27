import { useCookies } from 'react-cookie';

export function Logout() {
    const [cookies, setCookies, removeCookies] = useCookies(['login']);

    if (!cookies.login) return (
        <div className='error_page'>
            <h1>You Are Not Logged In!</h1>
            <a href="/">Home</a>
            <a href="/login">Login</a>
        </div>
    )

    removeCookies("login");

    alert("Logged Out!")

    return (
        <div className='error_page'>
            <h1>Logged Out Successfully!</h1>
        </div>
    )
}
