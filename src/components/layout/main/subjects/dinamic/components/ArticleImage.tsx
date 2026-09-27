import type { CSSProperties } from "react";

type Props = {
  src: string;
  alt?: string;
};

export function ArticleImage({ src, alt }: Props) {
  return (
    <figure style={styles.wrapper}>
      <img src={src} alt={alt ?? ""} style={styles.img} />
    </figure>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    margin: "1.25rem 0",
  },
  img: {
    maxWidth: "100%",
    display: "block",
    borderRadius: "0.25rem",
  },
};
