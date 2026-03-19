import { useState, useRef, useEffect } from 'react'
import { GithubFilled } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { User, LogOut, ChevronDown, LayoutDashboard, UserPlus } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import Button from '../../components/Button'

const ProfileImage = ({ user }) => {
  return (<>
    {user.picture ? (
      <img src={user.picture} />
    ) : (
      <span className="text-xs font-bold text-white">
        {user.name?.charAt(0).toUpperCase() ?? <User size={14} />}
      </span>
    )}
  </>
  )
}

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = async () => {
    setDropdownOpen(false)
    await logout()
    navigate("/")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to={`${user ? "/dashboard" : "/"}`} className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8 w-8 rounded-lg object-contain border border-gray-200"
            onError={(e) => (e.target.style.display = "none")}
          />
          <span className="text-lg font-extrabold tracking-tight text-gray-900">
            B2<span className="text-emerald-600">RB</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/BittuKumar183040/B2RB"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-lg hover:border-gray-400 hover:text-gray-900 transition-all duration-200"
          >
            <GithubFilled />
            GitHub
          </a>

          {!user && (<>
            <div className="flex items-center gap-3">
              <Button isLink Logo={<User size={14} />} color="primary" label="Login" link="/login" />
              <Button isLink Logo={<UserPlus size={14} />} color="secondary" label="Sign Up" link="/signup" />
            </div>
          </>
          )}

          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all duration-200
                  ${dropdownOpen
                    ? "border-emerald-300 bg-emerald-50"
                    : "border-gray-200 hover:border-emerald-300 hover:bg-emerald-50"
                  }`}
              >

                <div className="w-7 h-7 rounded-full overflow-hidden bg-emerald-600 flex items-center justify-center shrink-0">
                  <ProfileImage user={user} />
                </div>
                <span className="text-sm font-semibold text-gray-800 max-w-25 truncate hidden sm:block">
                  {user.name}
                </span>
                <ChevronDown
                  size={14}
                  className={`text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-60 bg-white border border-gray-200 rounded-2xl shadow-xl shadow-gray-100 overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-gray-100 bg-slate-50">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-emerald-600 flex items-center justify-center shrink-0">
                        <ProfileImage user={user} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-400 truncate">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-1.5">
                    <Link
                      to="/dashboard"
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                    >
                      <LayoutDashboard size={15} className="text-emerald-500" />
                      Dashboard
                    </Link>
                  </div>

                  <div className="p-1.5 border-t border-gray-100">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-red-500 rounded-xl hover:bg-red-50 transition-colors"
                    >
                      <LogOut size={15} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav >
  )
}

export default Navbar