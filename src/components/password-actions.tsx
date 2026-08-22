"use client";

import { SvgIcon } from "@mui/material";
import ShowPassword from "./show-password";

function SparklesIcon(props: React.ComponentProps<typeof SvgIcon>) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M12 3c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V4c0-.55.45-1 1-1zm6.36 2.64c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-1.41 1.41c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l1.41-1.41zM21 12c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1zm-4.64 6.36c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0l-1.41-1.41c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l1.41 1.41zM12 21c-.55 0-1-.45-1-1v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 .55-.45 1-1 1zm-6.36-2.64c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l1.41-1.41c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-1.41 1.41zM3 12c0-.55.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1H4c-.55 0-1-.45-1-1zm2.64-6.36c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l1.41 1.41c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L5.64 5.64zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
    </SvgIcon>
  );
}

type PasswordActionsProps = {
  password: string;
  copied: boolean;
  onGenerate: () => void;
  onCopy: () => void;
};

export default function PasswordActions({
  password,
  copied,
  onGenerate,
  onCopy,
}: PasswordActionsProps) {
  return (
    <div className="mt-7 space-y-4">
      {/* Generate Password Button - Pure Black & White Neumorphic Button */}
      <button
        type="button"
        onClick={onGenerate}
        className="w-full py-4 px-6 rounded-2xl neu-button-primary font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer border border-white/20 tracking-wide"
      >
        <SparklesIcon className="w-5 h-5 text-black" />
        <span>Gerar Nova Senha</span>
      </button>

      {/* Password Display Container */}
      <ShowPassword password={password} onCopy={onCopy} copied={copied} />
    </div>
  );
}
