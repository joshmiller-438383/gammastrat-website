'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0D0F12]/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="GammaStrat"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <NavDropdown label="Solutions" items={['Market Analytics', 'Trade Signals', 'Risk Management', 'Portfolio Tools']} />
          <NavLink href="/#about">About</NavLink>
          <NavLink href="/plans">Pricing</NavLink>
          <NavDropdown label="Support" items={['Documentation', 'Academy', 'Community', 'Contact']} />
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#" className="text-sm text-white/70 hover:text-white transition-colors px-3 py-2">
            Log in
          </Link>
          <Link
            href="/plans"
            className="text-sm font-semibold bg-[#C9A227] hover:bg-[#E8C547] text-[#0D0F12] px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-1.5"
          >
            Start free trial →
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D0F12] border-t border-white/5 px-6 py-4 space-y-3">
          <MobileLink href="/#solutions" onClick={() => setMobileOpen(false)}>Solutions</MobileLink>
          <MobileLink href="/#about" onClick={() => setMobileOpen(false)}>About</MobileLink>
          <MobileLink href="/plans" onClick={() => setMobileOpen(false)}>Pricing</MobileLink>
          <MobileLink href="/#support" onClick={() => setMobileOpen(false)}>Support</MobileLink>
          <MobileLink href="/#contact" onClick={() => setMobileOpen(false)}>Contact</MobileLink>
          <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
            <Link href="#" className="text-sm text-white/70 text-center py-2">Log in</Link>
            <Link href="/plans" className="text-sm font-semibold bg-[#C9A227] text-[#0D0F12] px-4 py-2.5 rounded-md text-center">
              Start free trial →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-white/70 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5">
      {children}
    </Link>
  )
}

function NavDropdown({ label, items }: { label: string; items: string[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="text-sm text-white/70 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/5 flex items-center gap-1">
        {label}
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 bg-[#141720] border border-white/10 rounded-lg shadow-2xl py-1 z-50">
          {items.map(item => (
            <a key={item} href="#" className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="block text-sm text-white/70 hover:text-white py-2 transition-colors">
      {children}
    </Link>
  )
}
