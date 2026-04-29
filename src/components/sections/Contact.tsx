'use client'
import { useState } from 'react'

interface ContactProps {
  headline?: string
  subheadline?: string
  email?: string
  phone?: string
  address?: string
  ctaText?: string
}

export default function Contact({
  headline = 'Connect with us now',
  subheadline = 'Need assistance? Contact our experts.',
  email = 'support@gammastrat.com',
  phone = '+1 (555) 000-0000',
  address = '1234 S Rangeline Pkwy, Suite 200\nSalt Lake City, Utah, USA',
  ctaText = 'Send message',
}: ContactProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', agreed: false })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-[#0A0C0F]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: contact info */}
          <div className="lg:w-80 flex-shrink-0">
            <p className="text-xs font-semibold text-[#2DD4BF] uppercase tracking-widest mb-3">{subheadline}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">{headline}</h2>

            <div className="space-y-8">
              {email && <ContactItem icon="✉" label="Email" value={email} />}
              {address && <ContactItem icon="📍" label="Office" value={address} />}
              {phone && <ContactItem icon="📞" label="Phone" value={phone} />}
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1 max-w-xl">
            {sent ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-white/50">We&apos;ll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/60 mb-1.5">Name *</label>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="w-full bg-[#141720] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#2DD4BF]/50 transition-colors"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/60 mb-1.5">Email *</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="w-full bg-[#141720] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#2DD4BF]/50 transition-colors"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5">Phone number</label>
                  <div className="flex gap-2">
                    <select className="bg-[#141720] border border-white/10 rounded-lg px-3 py-3 text-sm text-white/60 focus:outline-none w-20">
                      <option>US</option>
                      <option>CA</option>
                      <option>UK</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="flex-1 bg-[#141720] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#2DD4BF]/50 transition-colors"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/60 mb-1.5">Message *</label>
                  <textarea
                    placeholder="Leave us a message..."
                    required
                    rows={4}
                    className="w-full bg-[#141720] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#2DD4BF]/50 transition-colors resize-none"
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agree"
                    required
                    className="mt-0.5 accent-[#2DD4BF]"
                    checked={form.agreed}
                    onChange={e => setForm({ ...form, agreed: e.target.checked })}
                  />
                  <label htmlFor="agree" className="text-xs text-white/40">
                    You agree to our friendly{' '}
                    <a href="#" className="text-[#2DD4BF] hover:underline">privacy policy</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#2DD4BF] hover:bg-[#22b8a6] text-[#0D0F12] font-semibold py-3 rounded-lg text-sm transition-all duration-200"
                >
                  {ctaText}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-[#2DD4BF]/10 flex items-center justify-center flex-shrink-0">
        <span className="text-[#2DD4BF] text-base">{icon}</span>
      </div>
      <div>
        <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">{label}</p>
        <p className="text-sm text-white/70 whitespace-pre-line">{value}</p>
      </div>
    </div>
  )
}
