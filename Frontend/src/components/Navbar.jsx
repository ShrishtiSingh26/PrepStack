import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../features/auth/hooks/useAuth'
import '../style/navbar.scss'

const Navbar = () => {
    const { user, handleLogout } = useAuth()
    const navigate = useNavigate()

    const onLogout = async () => {
        const result = await handleLogout()
        if (result?.success) {
            navigate('/')
        }
    }

    return (
        <nav className="main-navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="logo-icon"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                    <span>Prep<span className="highlight">Stack</span></span>
                </Link>

                <div className="nav-actions">
                    {user ? (
                        <>
                            <Link to="/home" className="nav-link dashboard-link">Home</Link>
                            <span className="user-welcome">
                                Hi, <strong>{user.username}</strong>
                            </span>
                            <button onClick={onLogout} className="button logout-btn">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/register" className="button primary-button register-btn">
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
