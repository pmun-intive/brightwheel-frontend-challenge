interface StarProps {
  background?: string;
  height?: string;
  width?: string;
}

/**
 * @component
 * @name Spinner
 * @description Icon that creates a star image.
 * @namespace components components/icon/star
 * @param {string} width Sets the width for the icon
 * @param {string} height Sets the height for the icon
 * @param {string} background Sets the background color for the icon
 */

const Star: React.FC<StarProps> = ({
  background,
  height = "50px",
  width = "50px",
}) => {
  return (
    <svg
      aria-label="A star icon for your favorite results."
      height={height}
      role="icon"
      viewBox="0 0 24 24"
      width={width}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill={background ? background : "none"}
        stroke="black"
        strokeWidth="1.5px"
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

export default Star;
