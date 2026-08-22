"use client";

import { useEffect, useState } from "react";
import { usePasswordGenerator } from "@/hook/use-password-generator";
import PasswordOptions from "@/components/password-options";
import LengthSlider from "@/components/lenght-slider";
import PasswordActions from "@/components/password-actions";

export default function Home() {
  const [length, setLentgh] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const { password, handleGenerator, handleCopy, copied } =
    usePasswordGenerator();

  const handleGeneratorClick = () => {
    handleGenerator({
      length,
      includeUppercase,
      includeNumbers,
      includeSymbols,
    });
  };

  // Generate initial password on first mount
  useEffect(() => {
    handleGeneratorClick();
    // eslint-disable-next-deps
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-3 sm:p-6 relative overflow-hidden bg-[#17181c]">
      {/* Background SkyMint Ambient Glowing Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[500px] h-[380px] sm:h-[500px] bg-[#b8f7e4]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[280px] h-[280px] bg-[#b8f7e4]/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Main Graphite Glass Card */}
      <div className="relative z-10 w-full max-w-[440px] p-5 sm:p-8 rounded-3xl bg-[#25272c]/95 border border-[#353942] shadow-2xl shadow-black/60 backdrop-blur-2xl transition-all">
        {/* Header Branding */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="p-2.5 sm:p-3 rounded-2xl bg-[#b8f7e4]/10 border border-[#b8f7e4]/20 mb-3 shadow-inner flex items-center justify-center overflow-hidden w-16 h-16 sm:w-20 sm:h-20 shadow-[#b8f7e4]/10">
            <video
              src="/senha.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl mix-blend-screen bg-transparent pointer-events-none drop-shadow-[0_0_8px_rgba(184,247,228,0.5)]"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Gerador de Senhas
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-[280px]">
            Gere senhas seguras e personalizadas instantaneamente
          </p>
        </div>

        {/* Controls */}
        <LengthSlider lenght={length} setLentgh={setLentgh} />

        <PasswordOptions
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />

        {/* Actions & Result Output */}
        <PasswordActions
          password={password}
          copied={copied}
          onGenerate={handleGeneratorClick}
          onCopy={handleCopy}
        />

        {/* Footer info */}
        <div className="mt-6 pt-4 border-t border-[#353942]/60 text-center">
          <span className="text-[11px] text-slate-400 font-medium">
            Padrão Militar • &copy; {new Date().getFullYear()}{" "}
            <span className="text-[#b8f7e4]">nexus.DS</span>
          </span>
        </div>
      </div>
    </main>
  );
}
