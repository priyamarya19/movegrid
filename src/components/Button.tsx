// src/components/Button.tsx
export default function Button({ children }: any) {
  return (
    <button className="bg-[#6C5CE7] hover:bg-[#5a4fd6] transition px-6 py-3 rounded-xl shadow-lg shadow-purple-500/20">
      {children}
    </button>
  );
}