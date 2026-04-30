'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

interface NavbarProps {
  loginText?: string
  loginUrl?: string
  ctaText?: string
  ctaUrl?: string
}

const NAV_ITEMS = [
  { label: 'Edge',    anchor: 'edge' },
  { label: 'Reports', anchor: 'reports' },
  { label: 'Method',  anchor: 'method' },
  { label: 'FAQ',     anchor: 'faq' },
]

// Offset so the section is not hidden behind the fixed nav
const SCROLL_OFFSET = 80

function scrollToSection(anchor: string) {
  const el = document.getElementById(anchor)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar({
  loginText = 'Member Portal',
  loginUrl = 'https://members.gammastrat.com',
  ctaText = 'Start Your Edge',
  ctaUrl = '/plans',
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [mobileOpen, setMobileOpen] = useState(false)

  // Transparent → solid on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection via IntersectionObserver
  const updateActive = useCallback(() => {
    const sections = NAV_ITEMS.map(item => document.getElementById(item.anchor))
    const scrollY = window.scrollY + SCROLL_OFFSET + 40

    let current = ''
    for (const section of sections) {
      if (!section) continue
      const top = section.offsetTop
      const bottom = top + section.offsetHeight
      if (scrollY >= top && scrollY < bottom) {
        current = section.id
        break
      }
    }
    setActiveSection(current)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', updateActive, { passive: true })
    updateActive()
    return () => window.removeEventListener('scroll', updateActive)
  }, [updateActive])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D0F12]/95 backdrop-blur-md border-b border-white/8 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">

        {/* ── Logo ── */}
        <button
          onClick={() => scrollToSection('edge')}
          className="flex items-center gap-2 flex-shrink-0 focus:outline-none"
          aria-label="Back to top"
        >
          <img src="/logo.png" alt="GammaStrat" className="h-9 w-auto object-contain" />
        </button>

        {/* ── Desktop nav items ── */}
        <div className="hidden md:flex items-center gap-0.5">
          {NAV_ITEMS.map(item => {
            const isActive = activeSection === item.anchor
            return (
              <button
                key={item.anchor}
                onClick={() => scrollToSection(item.anchor)}
                className={`relative text-sm px-4 py-2 rounded-md transition-all duration-200 focus:outline-none
                  ${isActive
                    ? 'text-[#C9A24A] font-medium'
                    : 'text-white/65 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.label}
                {/* Active underline indicator */}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#C9A24A] rounded-full" />
                )}
              </button>
            )
          })}
        </div>

        {/* ── Desktop right side: Member Portal + CTA ── */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={loginUrl}
            className="text-xs text-white/50 hover:text-white/80 transition-colors px-2 py-1.5 tracking-wide"
          >
            {loginText}
          </Link>
          <button
            onClick={() => scrollToSection('cta')}
            className="text-sm font-semibold bg-[#C9A24A] hover:bg-[#E0B85A] text-[#0D0F12] px-5 py-2 rounded-md transition-all duration-200 tracking-wide shadow-[0_0_16px_rgba(201,162,74,0.25)] hover:shadow-[0_0_24px_rgba(201,162,74,0.4)]"
          >
            {ctaText}
          </button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-white/5 transition-colors focus:outline-none"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-0.5 bg-white/80 transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white/80 transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white/80 transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0D0F12]/98 backdrop-blur-md border-t border-white/5`}
      >
        <div className="px-5 pt-4 pb-6 flex flex-col gap-1">
          {NAV_ITEMS.map(item => {
            const isActive = activeSection === item.anchor
            return (
              <button
                key={item.anchor}
                onClick={() => { scrollToSection(item.anchor); setMobileOpen(false) }}
                className={`text-left text-base py-3 px-3 rounded-md transition-colors focus:outline-none
                  ${isActive
                    ? 'text-[#C9A24A] font-medium bg-[#C9A24A]/8'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            )
          })}

          {/* Divider */}
          <div className="h-px bg-white/8 my-2" />

          {/* Member Portal */}
          <Link
            href={loginUrl}
            onClick={() => setMobileOpen(false)}
            className="text-sm text-white/50 hover:text-white/80 py-2 px-3 transition-colors text-center"
          >
            {loginText}
          </Link>

          {/* CTA — pinned at bottom of mobile menu */}
          <button
            onClick={() => { scrollToSection('cta'); setMobileOpen(false) }}
            className="mt-1 w-full text-sm font-semibold bg-[#C9A24A] hover:bg-[#E0B85A] text-[#0D0F12] px-5 py-3 rounded-md transition-all duration-200 tracking-wide"
          >
            {ctaText}
          </button>
        </div>
      </div>
    </nav>
  )
}
