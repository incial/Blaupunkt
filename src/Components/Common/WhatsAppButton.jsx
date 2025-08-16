import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

// Config: set your WhatsApp number and optional default message
// Prefer setting via Vite env: VITE_WHATSAPP_NUMBER, VITE_WHATSAPP_MESSAGE
// Fallback defaults to the UAE phone listed on the Contact page
const WHATSAPP_NUMBER = (import.meta.env?.VITE_WHATSAPP_NUMBER || '971558882595').replace(/[^\d]/g, '')
const WHATSAPP_MESSAGE = import.meta.env?.VITE_WHATSAPP_MESSAGE || 'Hello! I would like to know more about your products.'

const buildWaLink = (phone, message) => {
  const encoded = encodeURIComponent(message || '')
  return `https://wa.me/${phone}${encoded ? `?text=${encoded}` : ''}`
}

const WhatsAppButton = ({ phone = WHATSAPP_NUMBER, message = WHATSAPP_MESSAGE, className = '' }) => {
  if (!phone) return null
  const href = buildWaLink(phone, message)

  return (
    <div
      className={[
        // positioning
        'fixed z-50',
        'right-4 bottom-4 md:right-6 md:bottom-6',
        // allow parent overrides
        className,
      ].join(' ')}
      aria-hidden="false"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={[
          // size & layout
          'flex items-center justify-center rounded-full',
          'w-14 h-14 md:w-16 md:h-16',
          // brand style
          'bg-[#25D366] text-white',
          // effects
          'shadow-lg shadow-emerald-500/30 ring-1 ring-white/40',
          'transition-transform duration-200 ease-out hover:scale-105 active:scale-95',
          // subtle attention pulse
          'animate-pulse',
        ].join(' ')}
      >
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
        <span className="sr-only">Open WhatsApp chat</span>
      </a>
    </div>
  )
}

export default WhatsAppButton
