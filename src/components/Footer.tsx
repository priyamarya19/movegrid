// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="px-8 md:px-20 py-10 border-t border-white/10 mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-6">

        <div>
          <h2 className="text-xl font-bold">Powered by MOVEGRID </h2>
          <p className="text-gray-400 mt-2">
            <sup>&copy;</sup> Movegrid Technologies Private Limited
          </p>
        </div>

        <div>
  

  <a
    href="https://wa.me/919639350154"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-[#12121A] px-4 py-3 rounded-xl border border-gray-800 hover:border-[#25D366] transition"
  >
    {/* WhatsApp Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#25D366"
      viewBox="0 0 24 24"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0012.05 0C5.5 0 .14 5.36.14 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.66a11.9 11.9 0 005.72 1.46h.01c6.55 0 11.91-5.36 11.91-11.91 0-3.18-1.24-6.17-3.45-8.41zM12.06 21.5c-1.82 0-3.6-.49-5.15-1.41l-.37-.22-3.76.98 1-3.66-.24-.38a9.5 9.5 0 01-1.47-5.06c0-5.26 4.28-9.54 9.55-9.54 2.55 0 4.94 1 6.74 2.8a9.47 9.47 0 012.79 6.74c0 5.26-4.28 9.54-9.54 9.54zm5.25-7.14c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.97 2.44.03 1.44 1.02 2.83 1.16 3.02.15.19 2 3.05 4.84 4.27.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.11-.26-.18-.55-.33z" />
    </svg>

    <span className="text-sm text-gray-300">
      Chat on WhatsApp
    </span>
  </a>
</div>
        <div className="text-gray-400">
          <p>Email: contact@movegrid.in</p>
          <p>Phone: +91 96393 50154</p>
        </div>

      </div>
    </footer>
  );
}