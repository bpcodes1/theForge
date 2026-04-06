import { useState, FormEvent } from 'react'
import { isValidEmail } from '../utils/sanitize'

interface Props {
  headline?: string
  subtext?: string
}

export default function NewsletterStrip({
  headline = 'Stay in the Know',
  subtext = 'Events and invites, first to your inbox.',
}: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isValidEmail(email)) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="newsletter-strip">
      <div>
        <h3 className="nl-headline">{headline}</h3>
        <p className="nl-sub">{subtext}</p>
      </div>
      <form className="nl-form" onSubmit={handleSubmit}>
        <input
          className="nl-input"
          type="email"
          placeholder="your@email.com"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          maxLength={254}
          autoComplete="email"
          disabled={submitted}
        />
        <button
          className="nl-submit"
          type="submit"
          disabled={submitted}
          style={submitted ? { background: 'var(--charcoal)', borderColor: 'var(--charcoal)' } : {}}
        >
          {submitted ? "You're in ✓" : 'Subscribe'}
        </button>
      </form>
    </div>
  )
}
