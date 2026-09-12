export function Wordmark({
  className = "",
  segment = "full",
}: {
  className?: string;
  segment?: "full" | "loh" | "it";
}) {
  return (
    <svg
      className={className}
      viewBox={
        segment === "loh"
          ? "0 0 673 250"
          : segment === "it"
            ? "687 0 313 250"
            : "0 0 1000 250"
      }
      preserveAspectRatio="none"
      fill="currentColor"
      aria-hidden="true"
    >
      {segment !== "it" && (
        <>
          <path d="M0 0H76V166H177V250H0Z" />
          <path
            fillRule="evenodd"
            d="M309 0C225 0 189 41 189 125S225 250 309 250 429 209 429 125 393 0 309 0ZM309 72C281 72 270 86 270 125S281 178 309 178 348 164 348 125 337 72 309 72Z"
          />
          <path d="M442 0H520V86H595V0H673V250H595V165H520V250H442Z" />
        </>
      )}
      {segment !== "loh" && (
        <>
          <path d="M687 0H766V250H687Z" />
          <path d="M779 0H1000V79H929V250H850V79H779Z" />
        </>
      )}
    </svg>
  );
}
