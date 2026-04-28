import Link from 'next/link'

const footerLinks = {
  Product: [
    { label: 'Home', href: '/' },
    { label: 'Pricing', href: '/plans' },
    { label: 'Academy', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '/#contact' },
  ],
  Resources: [
    { label: 'Blog', href: '#' },
    { label: 'Newsletter', href: '#' },
    { label: 'Support', href: '#' },
  ],
  Legal: [
    { label: 'Terms', href: '#' },
    { label: 'Privacy', href: '#' },
    { label: 'Contact', href: '/#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0A0C0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo col */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="GammaStrat"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-white/40 leading-relaxed">
              Data-driven options analytics for serious traders.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">{category}</p>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <img
              src="/logo.png"
              alt="GammaStrat"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-white/30">© {new Date().getFullYear()} GammaStrat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
