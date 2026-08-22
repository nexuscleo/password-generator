"use client";

import { SvgIcon } from "@mui/material";

function CopyIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </SvgIcon>
  );
}

function CheckIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </SvgIcon>
  );
}

type ShowPasswordProps = {
  password: string;
  onCopy: () => void;
  copied: boolean;
};

// Calculate password strength in pure monochrome (black & white)
function getPasswordStrength(password: string) {
  if (!password) return { label: "", percent: 0, color: "bg-zinc-800", text: "text-zinc-500" };
  let score = 0;
  if (password.length >= 8) score += 25;
  if (password.length >= 12) score += 25;
  if (/[A-Z]/.test(password)) score += 15;
  if (/[0-9]/.test(password)) score += 15;
  if (/[^A-Za-z0-9]/.test(password)) score += 20;

  if (score < 40) return { label: "Fraca", percent: 25, color: "bg-zinc-600", text: "text-zinc-400" };
  if (score < 70) return { label: "Média", percent: 50, color: "bg-zinc-400", text: "text-zinc-300" };
  if (score < 90) return { label: "Forte", percent: 75, color: "bg-zinc-200", text: "text-zinc-100" };
  return { label: "Muito Forte", percent: 100, color: "bg-white", text: "text-white font-extrabold" };
}

export default function ShowPassword({
  password,
  onCopy,
  copied,
}: ShowPasswordProps) {
  const strength = getPasswordStrength(password);

  return (
    <div className="mt-5 space-y-3">
      {/* Password Inset Display Box - Pure Monochrome Neumorphism */}
      <div className="relative group flex items-center justify-between p-4 rounded-2xl bg-[#17181b] neu-inset border border-white/5 transition-all duration-200 hover:border-white/10 min-w-0">
        <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-white break-all select-all pr-2 min-w-0 flex-1">
          {password || "Clique para gerar..."}
        </span>

        {password && (
          <button
            onClick={onCopy}
            type="button"
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs transition-all duration-200 shrink-0 cursor-pointer ${
              copied
                ? "bg-white text-black shadow-md shadow-white/20 scale-105"
                : "neu-button-flat text-zinc-300 border border-white/5 hover:text-white"
            }`}
          >
            {copied ? (
              <>
                <CheckIcon className="w-4 h-4 text-black" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-4 h-4 text-zinc-300" />
                <span>Copiar</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Password Strength Indicator - Monochrome */}
      {password && (
        <div className="px-1 space-y-1.5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-zinc-400 font-medium">Força da Senha:</span>
            <span className={`font-semibold ${strength.text}`}>
              {strength.label}
            </span>
          </div>
          <div className="w-full h-2 bg-[#121315] neu-inset rounded-full overflow-hidden p-0.5 border border-white/5">
            <div
              className={`h-full transition-all duration-500 rounded-full ${strength.color}`}
              style={{ width: `${strength.percent}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
