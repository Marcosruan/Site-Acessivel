type QuestionOptionProps = {
  option: string | null;
}

export function QuestionOption({option}: QuestionOptionProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input type="radio" name="questao1" className="h-5 w-5" />
      <span className="text-sm text-[#3d3d3d]">{option}</span>
    </label>
  );
}
