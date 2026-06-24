import { useEffect, useState } from "react";

const MIN_SIZE = 12;
const MAX_SIZE = 24;
const DEFAULT_SIZE = 16;

export function AccessibilityControls() {
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem("font-size");
    const size = saved ? Number(saved) : DEFAULT_SIZE;

    return Number.isFinite(size) ? size : DEFAULT_SIZE;
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem("font-size", String(fontSize));
  }, [fontSize]);

  const changeFontSize = (newSize: number) => {
    if (newSize < MIN_SIZE || newSize > MAX_SIZE) return;

    setFontSize(newSize);
  };


  return (
    <fieldset className="flex fixed items-center right-0 top-5 px-4 py-2">
      <legend className="sr-only">Controle de tamanho da fonte</legend>

      <button
        onClick={() => changeFontSize(fontSize - 2)}
        aria-label="Diminuir tamanho da fonte"
        className="mx-1 mt-2 px-1 bg-[#064EA4] text-white rounded-sm"
      >
        A-
      </button>

      <button
        onClick={() => changeFontSize(DEFAULT_SIZE)}
        aria-label="Restaurar tamanho padrão da fonte"
        className="mx-1 mt-2 px-2 bg-gray-500 text-white rounded-sm"
      >
        A
      </button>

      <button
        onClick={() => changeFontSize(fontSize + 2)}
        aria-label="Aumentar tamanho da fonte"
        className="mx-1 mt-2 px-1 bg-[#064EA4] text-white rounded-sm"
      >
        A+
      </button>
    </fieldset>
  );
}
