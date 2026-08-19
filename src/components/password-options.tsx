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
      <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">
        Regras da Senha
      </span>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        {options.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => opt.onChange(!opt.checked)}
            className={`flex items-center justify-between p-3.5 sm:p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer min-h-[50px] sm:min-h-0 ${
              opt.checked
                ? "bg-[#17181c] border-[#b8f7e4]/60 shadow-md shadow-[#b8f7e4]/10 text-white"
                : "bg-[#17181c]/50 border-[#353942] text-slate-400 hover:border-[#b8f7e4]/30 hover:text-slate-200"
            }`}
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold">{opt.label}</span>
              <span
                className={`text-[10px] font-mono mt-0.5 font-semibold ${
                  opt.checked ? "text-[#b8f7e4]" : "text-slate-500"
                }`}
              >
                {opt.badge}
              </span>
            </div>

            {/* Custom SkyMint & Graphite Toggle Switch Pill */}
            <div
              className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 shrink-0 ${
                opt.checked ? "bg-[#b8f7e4]" : "bg-[#353942]"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full transition-transform duration-200 shadow-sm ${
                  opt.checked
                    ? "translate-x-4 bg-[#25272c]"
                    : "translate-x-0 bg-[#17181c]"
                }`}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
