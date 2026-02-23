import { Instagram, Linkedin } from 'lucide-react';
import { CONTACT, SOCIAL_LINKS } from '../../constants/siteData.js';

const SOCIAL_ICONS = {
  instagram: Instagram,
  linkedin: Linkedin,
};

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="container grid gap-8 px-4 py-10 text-sm text-brand-sub sm:grid-cols-2 md:grid-cols-4 sm:px-6">
        <div>
          <div className="mb-2 font-semibold text-white">Elia Barber Shop</div>
          <p>Premium cuts, hot towel shaves, and beard trims. Walk-ins welcome. Mon–Sat.</p>
        </div>

        <div>
          <div className="mb-2 font-semibold text-white">Visit</div>
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link block"
          >
            {CONTACT.addressLine1}
            <br />
            {CONTACT.addressLine2}
          </a>
        </div>

        <div>
          <div className="mb-2 font-semibold text-white">Hours</div>
          <p>
            Mon–Fri 10:00–7:00
            <br />
            Sat 10:00–6:00
            <br />
            Sun Closed
          </p>
        </div>

        <div>
          <div className="mb-2 font-semibold text-white">Follow</div>
          {SOCIAL_LINKS.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];

            return (
              <a
                key={social.label}
                className="link mb-2 flex items-center gap-2"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-4 w-4" /> {social.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-brand-sub">
        © {new Date().getFullYear()} Omer Zahid. All rights reserved.
      </div>
    </footer>
  );
}
