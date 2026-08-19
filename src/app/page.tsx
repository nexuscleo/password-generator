"use client";

import { useEffect, useState } from "react";
import { usePasswordGenerator } from "@/hook/use-password-generator";
import PasswordOptions from "@/components/password-options";
import LengthSlider from "@/components/lenght-slider";
import PasswordActions from "@/components/password-actions";
import { SvgIcon } from "@mui/material";

function ShieldLockIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8s0 0 0 0z" />
    </SvgIcon>
  );
}

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
          <div className="p-3.5 rounded-2xl bg-[#b8f7e4]/10 border border-[#b8f7e4]/20 text-[#b8f7e4] mb-3 shadow-inner">
            <ShieldLockIcon className="w-7 h-7 sm:w-8 sm:h-8 text-[#b8f7e4]" />
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
