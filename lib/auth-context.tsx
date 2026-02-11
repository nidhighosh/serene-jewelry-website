"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react"

export interface UserProfile {
  fullName: string
  phone: string
  email: string
}

interface AuthContextValue {
  user: UserProfile | null
  isSignedUp: boolean
  signUp: (profile: UserProfile) => void
  signOut: () => void
  showSignupModal: boolean
  setShowSignupModal: (show: boolean) => void
  requireAuth: () => boolean
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load user from localStorage on mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (err) {
      console.error("Failed to load user from localStorage:", err)
    } finally {
      setIsLoaded(true)
    }
  }, [])

  const signUp = useCallback((profile: UserProfile) => {
    setUser(profile)
    localStorage.setItem("user", JSON.stringify(profile))
    setShowSignupModal(false)
  }, [])

  const signOut = useCallback(() => {
    setUser(null)
    localStorage.removeItem("user")
  }, [])

  const requireAuth = useCallback(() => {
    if (!user) {
      setShowSignupModal(true)
      return false
    }
    return true
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        isSignedUp: !!user,
        signUp,
        signOut,
        showSignupModal,
        setShowSignupModal,
        requireAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
