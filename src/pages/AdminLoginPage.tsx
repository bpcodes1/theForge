import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { img } from '../utils/img'

const ADMIN_USER = 'forgeadmin'
const ADMIN_PASS = 'Forge!Salem2026'

export default function AdminLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPass, setShowPass] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const gate = sessionStorage.getItem('forge_gate')
    const isValid = gate !== null && Date.now() - parseInt(gate) < 10000
    if (!isValid) {
      navigate('/', { replace: true })
    }
  }, [navigate])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem('forge_admin', 'true')
      navigate('/admin/welcome')
    } else {
      setError('Invalid credentials.')
      setPassword('')
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#161f28',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '2rem',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '380px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}>

        {/* Logo */}
        <img
          src={img('logo2.webp')}
          alt="The Forge"
          style={{ height: '72px', width: 'auto', opacity: 0.95 }}
        />

        {/* Divider */}
        <div style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <div style={{ flex: 1, height: '1px', background: '#2a3540' }} />
          <span style={{
            color: '#7a8a95',
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontFamily: '"Cormorant Garamond", serif',
          }}>
            Admin Access
          </span>
          <div style={{ flex: 1, height: '1px', background: '#2a3540' }} />
        </div>

        {/* Form card */}
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            background: '#1f2e3c',
            borderRadius: '4px',
            padding: '2.25rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            border: '1px solid #2a3540',
          }}
        >
          {/* Username */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <label style={{
              color: '#b7c0c8',
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}>
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={e => { setUsername(e.target.value); setError('') }}
              autoComplete="username"
              required
              style={{
                background: '#161f28',
                border: '1px solid #2a3540',
                borderRadius: '3px',
                color: '#f3eedf',
                fontSize: '0.9rem',
                padding: '0.65rem 0.85rem',
                outline: 'none',
                transition: 'border-color 0.2s',
                fontFamily: 'Inter, system-ui, sans-serif',
              }}
              onFocus={e => (e.target.style.borderColor = '#e10600')}
              onBlur={e => (e.target.style.borderColor = '#2a3540')}
            />
          </div>

          {/* Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            <label style={{
              color: '#b7c0c8',
              fontSize: '0.7rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={e => { setPassword(e.target.value); setError('') }}
                autoComplete="current-password"
                required
                style={{
                  width: '100%',
                  background: '#161f28',
                  border: '1px solid #2a3540',
                  borderRadius: '3px',
                  color: '#f3eedf',
                  fontSize: '0.9rem',
                  padding: '0.65rem 2.5rem 0.65rem 0.85rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
                onFocus={e => (e.target.style.borderColor = '#e10600')}
                onBlur={e => (e.target.style.borderColor = '#2a3540')}
              />
              <button
                type="button"
                onClick={() => setShowPass(p => !p)}
                style={{
                  position: 'absolute',
                  right: '0.7rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#7a8a95',
                  fontSize: '0.75rem',
                  padding: 0,
                  lineHeight: 1,
                }}
              >
                {showPass ? 'hide' : 'show'}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p style={{
              color: '#e10600',
              fontSize: '0.78rem',
              margin: 0,
              letterSpacing: '0.03em',
            }}>
              {error}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            style={{
              background: '#e10600',
              color: '#fff',
              border: 'none',
              borderRadius: '3px',
              padding: '0.75rem 1.5rem',
              fontSize: '0.72rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
              cursor: 'pointer',
              marginTop: '0.25rem',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => ((e.target as HTMLButtonElement).style.background = '#b50500')}
            onMouseLeave={e => ((e.target as HTMLButtonElement).style.background = '#e10600')}
          >
            Enter
          </button>
        </form>

        {/* Back link */}
        <a
          href="/"
          style={{
            color: '#3c4b59',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#7a8a95')}
          onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#3c4b59')}
        >
          ← Back to site
        </a>

      </div>
    </div>
  )
}
