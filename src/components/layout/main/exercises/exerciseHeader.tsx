type ExerciseHeaderProps = {
  title: string;
  description: string;
};

export function ExerciseHeader({ title, description }: ExerciseHeaderProps) {
  return (
    <section aria-labelledby="titulo-exercicio" className="mb-8">
      <h2 id="titulo-exercicio" className="text-3xl font-bold text-slate-800">
        {title}
      </h2>
      <p className="mt-1 text-lg text-slate-600">{description}</p>
    </section>
  );
}
