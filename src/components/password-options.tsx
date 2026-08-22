"use client";

type PasswordOptionsProps = {
  includeUppercase: boolean;
  setIncludeUppercase: (value: boolean) => void;
  includeNumbers: boolean;
  setIncludeNumbers: (value: boolean) => void;
  includeSymbols: boolean;
  setIncludeSymbols: (value: boolean) => void;
};

export default function PasswordOptions({
  includeUppercase,
  setIncludeUppercase,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
}: PasswordOptionsProps) {
  const options = [
    {
      id: "uppercase",
      label: "Maiúsculas",
      badge: "ABC",
      checked: includeUppercase,
      onChange: setIncludeUppercase,
    },
    {
      id: "numbers",
      label: "Números",
      badge: "123",
      checked: includeNumbers,
      onChange: setIncludeNumbers,
    },
    {
      id: "symbols",
      label: "Símbolos",
      badge: "!@#",
      checked: includeSymbols,
      onChange: setIncludeSymbols,
    },
  ];

  return (
    <div className="mt-6 space-y-2.5">
      <span className="text-[11px] font-bold text-zinc-400 tracking-wider uppercase">
        Regras da Senha
      </span>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => opt.onChange(!opt.checked)}
            className={`flex items-center justify-between p-3.5 sm:p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer min-h-[52px] sm:min-h-0 ${
              opt.checked
                ? "bg-[#1e2024] neu-flat border-white/20 text-white"
                : "bg-[#17181b] neu-inset border-white/5 text-zinc-500 hover:text-zinc-300"
            }`}
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold">{opt.label}</span>
              <span
                className={`text-[10px] font-mono mt-0.5 font-semibold ${
                  opt.checked ? "text-zinc-200" : "text-zinc-600"
                }`}
              >
                {opt.badge}
              </span>
            </div>

            {/* Neumorphic Toggle Switch */}
            <div
              className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-all duration-200 shrink-0 ${
                opt.checked ? "bg-white" : "bg-[#121315] neu-inset"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full transition-transform duration-200 shadow-md ${
                  opt.checked
                    ? "translate-x-4 bg-black"
                    : "translate-x-0 bg-zinc-600"
                }`}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
