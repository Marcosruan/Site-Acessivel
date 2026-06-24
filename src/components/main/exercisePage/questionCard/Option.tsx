type QuestionOptionProps = {
  option: string | null;
  value: string;
  questionName: string;
  isSelected: boolean;
  isCorrect: boolean | null;
  isRightAnswer: boolean;
  onChange: (value: string) => void;
  onFocus?: () => void;
};

export function QuestionOption({
  option,
  value,
  questionName,
  isSelected,
  isCorrect,
  isRightAnswer,
  onChange,
  onFocus,
}: QuestionOptionProps) {
  const revealed = isCorrect !== null;

  const getBorderColor = () => {
    if (!revealed) return isSelected ? "border-blue-500" : "border-slate-200";
    if (isRightAnswer) return "border-green-500";
    if (isSelected && !isCorrect) return "border-red-400";
    return "border-slate-200";
  };

  const getBgColor = () => {
    if (!revealed) return isSelected ? "bg-blue-50" : "bg-white";
    if (isRightAnswer) return "bg-green-50";
    if (isSelected && !isCorrect) return "bg-red-50";
    return "bg-white";
  };

  const getTextColor = () => {
    if (!revealed) return "text-slate-700";
    if (isRightAnswer) return "text-green-700";
    if (isSelected && !isCorrect) return "text-red-600";
    return "text-slate-400";
  };

  const getIcon = () => {
    if (!revealed || (!isRightAnswer && !isSelected)) return null;
    if (isRightAnswer) {
      return (
        <span className="ml-auto text-green-500 font-bold text-base" aria-hidden="true">
          ✓
        </span>
      );
    }
    if (isSelected && !isCorrect) {
      return (
        <span className="ml-auto text-red-400 font-bold text-base" aria-hidden="true">
          ✗
        </span>
      );
    }
    return null;
  };

  return (
    <label
      className={`flex items-center gap-3 border rounded-lg px-4 py-3 transition-all duration-200
        ${getBorderColor()} ${getBgColor()}
        ${revealed ? "pointer-events-none" : "cursor-pointer hover:border-blue-400 hover:bg-blue-50"}
        focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-1`}
    >
      <input
        type="radio"
        name={questionName}
        value={value}
        checked={isSelected}
        onChange={() => onChange(value)}
        onFocus={onFocus}
        disabled={revealed}
        className="h-4 w-4 accent-blue-600 focus:outline-none"
      />
      <span className={`text-sm flex-1 ${getTextColor()}`}>{option}</span>
      {getIcon()}
    </label>
  );
}
