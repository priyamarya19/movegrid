// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="px-8 md:px-20 py-10 border-t border-white/10 mt-20">
      <div className="flex flex-col md:flex-row justify-between gap-6">

        <div>
          <h1 className="text-xl font-bold">MOVEGRID</h1>
          <p className="text-gray-400 mt-2">
            Powering EV logistics
          </p>
        </div>

        <div className="text-gray-400">
          <p>Email: contact@movegrid.com</p>
          <p>Phone: +91 XXXXX XXXXX</p>
        </div>

      </div>
    </footer>
  );
}