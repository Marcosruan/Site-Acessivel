export function SectionExercicio() {
  return (
    <section id="questionario">
      <h2>Exercícios</h2>
      <article className="exercicio">
        <form action="/enviar-resposta" method="POST">
          <fieldset>
            <legend>
              <strong>Questão 1:</strong> Qual das alternativas apresenta apenas
              tags estruturais do HTML semântico?
            </legend>
            <ul className="opcoes">
              <li>
                <label>
                  <input type="radio" name="questao-1" value="a" required />a
                  &lt;div&gt;, &lt;span&gt; e &lt;section&gt;
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="questao-1" value="b" />b
                  &lt;header&gt;, &lt;main&gt; e &lt;article&gt;
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="questao-1" value="c" />a
                  &lt;table&gt;, &lt;b&gt; e &lt;p&gt;
                </label>
              </li>
            </ul>
          </fieldset>

          <button type="submit">Enviar Resposta</button>
        </form>
      </article>
    </section>
  );
}
