'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/xnjzeoad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      console.error('Error sending email', err)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses =
    'w-full px-4 py-3 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm input-glow transition-all duration-300'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-xs font-mono text-slate-500 mb-2 tracking-wider uppercase">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-mono text-slate-500 mb-2 tracking-wider uppercase">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-mono text-slate-500 mb-2 tracking-wider uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formState.message}
          onChange={handleChange}
          required
          placeholder="Your message..."
          className={`${inputClasses} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-glow py-3 rounded-lg text-white font-medium text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-cyan-600 dark:text-cyan-400 text-center text-sm flex items-center justify-center gap-2"
          >
            <FontAwesomeIcon icon={faCheck as IconProp} />
            Message sent successfully!
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-600 dark:text-red-400 text-center text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}

export default ContactForm
