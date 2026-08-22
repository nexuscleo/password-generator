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
        <span className="text-xs sm:text-sm font-semibold text-zinc-300">
          Tamanho da Senha
        </span>
        <span className="px-3 py-1 rounded-xl bg-[#17181b] neu-inset text-white border border-white/5 text-xs font-bold font-mono shadow-inner">
          {lenght} {lenght === 1 ? "caractere" : "caracteres"}
        </span>
      </div>

      {/* Custom Neumorphic Range Slider */}
      <div className="relative flex items-center py-1">
        <input
          type="range"
          min={4}
          max={32}
          value={lenght}
          onChange={(e) => setLentgh(Number(e.target.value))}
          className="w-full h-2 cursor-pointer focus:outline-none"
        />
      </div>

      {/* Quick Select Preset Buttons */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-[11px] text-zinc-400 font-medium">Atalhos:</span>
        <div className="flex gap-2 flex-wrap">
          {PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setLentgh(preset)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer ${
                lenght === preset
                  ? "bg-white text-black shadow-md shadow-white/10 font-extrabold scale-105"
                  : "neu-button-flat text-zinc-400 border border-white/5 hover:text-white"
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