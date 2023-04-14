interface SpinnerProps {
  width?: string;
  height?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  width = "100px",
  height = "100px",
}) => {
  return (
    <svg
      aria-label="An circle like spinning icon indicating some waiting for the information to be shown"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      role="icon"
      style={{
        margin: "auto",
        background: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        strokeWidth="8"
        stroke="#ffffff"
        strokeDasharray="50.26548245743669 50.26548245743669"
        fill="none"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  );
};

export default Spinner;
