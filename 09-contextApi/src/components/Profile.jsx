import { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const { username, password } = useContext(UserContext)
    if (!username) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
                <div className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 shadow-lg">
                    Please login to continue
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <div className="px-8 py-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center shadow-xl">
                <h2 className="text-2xl font-semibold text-white mb-2">Welcome</h2>
                <p className="text-lg text-blue-400 font-medium">{username}</p>
                <p className="text-lg text-blue-400 font-medium">{password}</p>
            </div>
        </div>
    )
}