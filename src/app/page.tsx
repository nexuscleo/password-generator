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
    <main className="min-h-screen flex items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-[#16171a]">
      {/* Background Soft Monochrome Ambient Glowing Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Main Neumorphic Graphite Card */}
      <div className="relative z-10 w-full max-w-[440px] p-6 sm:p-8 rounded-[32px] neu-card border border-white/5 transition-all">
        {/* Header Branding */}
        <div className="flex flex-col items-center text-center mb-6">
          {/* Neumorphic Emblem Container for shield.png */}
          <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-[#1e2024] neu-flat flex items-center justify-center p-4 mb-4 border border-white/5 transition-transform duration-300 hover:scale-105">
            <img
              src="./shield.png"
              alt="Shield Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter invert contrast-200 drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)]"
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Gerador de Senhas
          </h1>
          <p className="text-xs text-zinc-400 mt-1 max-w-[280px]">
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
        <div className="mt-7 pt-4 border-t border-white/5 text-center">
          <span className="text-[11px] text-zinc-500 font-medium">
            Padrão Militar &bull; &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">nexus.DS</span>
          </span>
        </div>
      </div>
    </main>
  );
}
