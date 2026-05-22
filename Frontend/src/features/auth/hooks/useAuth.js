import { useContext, useEffect } from "react";
import { AuthContext } from "../auth.context";
import { login, register, logout, getMe } from "../services/auth.api";



export const useAuth = () => {

    const context = useContext(AuthContext)
    const { user, setUser, loading, setLoading } = context


    const handleLogin = async ({ email, password }) => {
        setLoading(true)
        try {
            const data = await login({ email, password })
            setUser(data.user)
            localStorage.setItem("prepstack_logged_in", "true")
            return { success: true }
        } catch (err) {
            const message = err.response?.data?.message || "Invalid email or password."
            return { success: false, message }
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async ({ username, email, password }) => {
        setLoading(true)
        try {
            const data = await register({ username, email, password })
            setUser(data.user)
            localStorage.setItem("prepstack_logged_in", "true")
            return { success: true }
        } catch (err) {
            const message = err.response?.data?.message || "Registration failed."
            return { success: false, message }
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
            setUser(null)
            localStorage.removeItem("prepstack_logged_in")
            return { success: true }
        } catch (err) {
            const message = err.response?.data?.message || "Logout failed."
            return { success: false, message }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {

        const getAndSetUser = async () => {
            const isLoggedIn = localStorage.getItem("prepstack_logged_in") === "true"
            
            if (!isLoggedIn) {
                setLoading(false)
                return
            }

            try {
                const data = await getMe()
                setUser(data.user)
            } catch (err) {
                setUser(null)
                localStorage.removeItem("prepstack_logged_in")
            } finally {
                setLoading(false)
            }
        }

        getAndSetUser()

    }, [])

    return { user, loading, handleRegister, handleLogin, handleLogout }
}