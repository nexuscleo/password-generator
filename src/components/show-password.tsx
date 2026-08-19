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

// Calculate password strength
function getPasswordStrength(password: string) {
  if (!password) return { label: "", percent: 0, color: "bg-slate-700" };
  let score = 0;
  if (password.length >= 8) score += 25;
  if (password.length >= 12) score += 25;
  if (/[A-Z]/.test(password)) score += 15;
  if (/[0-9]/.test(password)) score += 15;
  if (/[^A-Za-z0-9]/.test(password)) score += 20;

  if (score < 40) return { label: "Fraca", percent: 25, color: "bg-rose-400", text: "text-rose-300" };
  if (score < 70) return { label: "Média", percent: 50, color: "bg-amber-300", text: "text-amber-300" };
  if (score < 90) return { label: "Forte", percent: 75, color: "bg-[#b8f7e4]", text: "text-[#b8f7e4]" };
  return { label: "Muito Forte", percent: 100, color: "bg-[#b8f7e4]", text: "text-[#b8f7e4]" };
}

export default function ShowPassword({
  password,
  onCopy,
  copied,
}: ShowPasswordProps) {
  const strength = getPasswordStrength(password);

  return (
    <div className="mt-5 space-y-3">
      {/* Password Card Container - Fully Responsive */}
      <div className="relative group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#17181c] border border-[#353942] shadow-inner backdrop-blur-md transition-all duration-200 hover:border-[#b8f7e4]/40 min-w-0">
        <span className="font-mono text-sm sm:text-base font-semibold tracking-wider text-[#b8f7e4] break-all select-all pr-2 min-w-0 flex-1">
          {password || "Clique para gerar..."}
        </span>

        {password && (
          <button
            onClick={onCopy}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl font-bold text-xs transition-all duration-200 shrink-0 cursor-pointer ${
              copied
                ? "bg-[#b8f7e4] text-[#25272c] shadow-sm shadow-[#b8f7e4]/30 scale-[1.02]"
                : "bg-[#b8f7e4]/15 text-[#b8f7e4] border border-[#b8f7e4]/30 hover:bg-[#b8f7e4] hover:text-[#25272c]"
            }`}
          >
            {copied ? (
              <>
                <CheckIcon className="w-3.5 h-3.5 text-[#25272c]" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <CopyIcon className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Password Strength Indicator */}
      {password && (
        <div className="px-1 space-y-1.5">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 font-medium">Força da Senha:</span>
            <span className={`font-semibold ${strength.text}`}>
              {strength.label}
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#17181c] rounded-full overflow-hidden border border-[#353942]/60">
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
