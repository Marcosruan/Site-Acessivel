import type { Estados } from "../../../../App";

type SectionLinkProps = {
  area: Estados["area"];
  materia: string;
  setArea: (area: Estados["area"]) => void;
  setConteudo: (materia: string) => void;
};

export function SectionLink({
  area,
  materia,
  setArea,
  setConteudo,
}: SectionLinkProps) {
  return (
    <button
      type="button"
      tabIndex={2}
      className="group w-auto bg-white border rounded-lg border-2 border-[#ADACB1] hover:border-[#0973F0] p-4 grid grid-cols-3 items-center gap-3 shadow-[1px_2px_4px_0_rgba(9,115,240,0.5)] hover:shadow-[1px_2px_4px_0_rgba(9,115,240,0.30)] text-left"
      onClick={() => {
        setArea(area);
        setConteudo(materia);
      }}
    >
      <svg
        className="stroke-[#ADACB1] group-hover:stroke-[#0973F0]"
        width="50"
        height="50"
        viewBox="0 0 69 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.20391 23.0001H64.9158M3.20391 45.0001H64.9158M32.2234 1.00012C26.0351 10.8987 22.7543 22.3323 22.7543 34.0001C22.7543 45.6679 26.0351 57.1015 32.2234 67.0001M35.8966 1.00012C42.0849 10.8987 45.3657 22.3323 45.3657 34.0001C45.3657 45.6679 42.0849 57.1015 35.8966 67.0001M1 34.0001C1 38.3337 1.85512 42.6249 3.51654 46.6287C5.17796 50.6324 7.61313 54.2703 10.683 57.3346C13.7529 60.399 17.3974 62.8297 21.4085 64.4882C25.4195 66.1466 29.7185 67.0001 34.0599 67.0001C38.4014 67.0001 42.7004 66.1466 46.7114 64.4882C50.7225 62.8297 54.367 60.399 57.4369 57.3346C60.5068 54.2703 62.9419 50.6324 64.6034 46.6287C66.2648 42.6249 67.1199 38.3337 67.1199 34.0001C67.1199 25.248 63.6368 16.8543 57.4369 10.6656C51.2369 4.4769 42.828 1.00012 34.0599 1.00012C25.2919 1.00012 16.883 4.4769 10.683 10.6656C4.48309 16.8543 1 25.248 1 34.0001Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      
      <p className="text-sm font-open-sans text-[#595959] group-hover:text-gray-900">
        {materia}
      </p>

      <svg
        className="justify-self-end self-end fill-[#5C5C5C] group-hover:fill-[#0973F0]"
        width="24"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_94_51"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="24"
        >
          <rect
            y="24"
            width="24"
            height="24.0436"
            transform="rotate(-90 0 24)"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_94_51)">
          <path d="M22.04 12L15.0273 19L13.5997 17.6L18.208 13H11.02V11H18.208L13.6247 6.4L15.0273 5L22.04 12ZM9.01638 13H6.01093V11H9.01638V13ZM4.0073 13H2.00366V11H4.0073V13Z" />
        </g>
      </svg>
    </button>
  );
}