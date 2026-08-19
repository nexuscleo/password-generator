"use client";

type LenghtSliderProps = {
  lenght: number;
  setLentgh: (value: number) => void;
};

const PRESETS = [8, 12, 16, 24, 32];

export default function LengthSlider({ lenght, setLentgh }: LenghtSliderProps) {
  return (
    <div className="mt-6 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-xs sm:text-sm font-semibold text-slate-300">
          Tamanho da Senha
        </span>
        <span className="px-2.5 py-0.5 rounded-lg bg-[#b8f7e4]/15 text-[#b8f7e4] border border-[#b8f7e4]/25 text-xs font-bold font-mono">
          {lenght} {lenght === 1 ? "caractere" : "caracteres"}
        </span>
      </div>

      {/* Custom SkyMint Range Slider */}
      <div className="relative flex items-center">
        <input
          type="range"
          min={4}
          max={32}
          value={lenght}
          onChange={(e) => setLentgh(Number(e.target.value))}
          className="w-full h-2 bg-[#17181c] border border-[#353942] rounded-lg appearance-none cursor-pointer transition-all focus:outline-none"
        />
      </div>

      {/* Quick Select Preset Buttons */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-[11px] text-slate-400 font-medium">Atalhos:</span>
        <div className="flex gap-1.5 flex-wrap">
          {PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setLentgh(preset)}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all duration-150 cursor-pointer ${
                lenght === preset
                  ? "bg-[#b8f7e4] text-[#25272c] shadow-md shadow-[#b8f7e4]/20"
                  : "bg-[#17181c] text-slate-400 border border-[#353942]/70 hover:border-[#b8f7e4]/40 hover:text-white"
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}