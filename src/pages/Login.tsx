import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { baseUrl } from '../baseUrl';

export function Login() {
    const [cookies, setCookies] = useCookies(['login']);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState<{ id?: string }>({});

    const code = new URLSearchParams(useLocation().search).get('token') || "";

    if (!code) window.location.href = `${baseUrl}login`;

    useEffect(() => {
        fetch(`${baseUrl}user/code?code=${encodeURIComponent(code)}`).then(res => {
            res.json().then(d => { setUserData(d); setLoading(false); console.log(d) })
        })
    }, []);

    if (loading) return (
        <div className='error_page'>
            <h1>Loading..</h1>
        </div>
    )

    if (cookies.login && !userData.id) window.location.href = `${baseUrl}/login`;

    if (!userData.id) return (
        <div className='error_page'>
            <h1>Invalid Token, Please try to login again</h1>
            <a href="/">Home</a>
            <a href="/login">Login</a>
        </div>
    )

    setCookies("login", code, {
        maxAge: 24 * 3600000,
        sameSite: false,
        path: "/",
    })

    setLoading(false);

    window.location.href =  window.location.origin;

    return (
        <div className='error_page'>
            <h1>Logged In Successfully!</h1>
        </div>
    )
}