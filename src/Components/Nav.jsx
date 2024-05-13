import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './style/Nav.css'
const Nav = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <nav>
            <div className="information">
                {isAuthenticated && <li>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </li>}
            </div>


            <ul>

                {isAuthenticated ? (<li><a href="" target='_blank'> <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button></a></li>) : (<li><a href="" target='_blank'><button onClick={() => loginWithRedirect()}>Log In</button></a></li>)}


            </ul>
        </nav>
    )
}

export default Nav
