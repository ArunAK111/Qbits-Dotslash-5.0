import React, { useState, VFC } from 'react';

type LinkIconButtonProps = {
  /**
   * Resource path directly under the public folder.
   * @example '/assets/icons/github.svg'
   */
  imagePath: string;
  /**
   * @example 'https://github.com'
   */
  linkPath: string;
  /**
   * @default 'bottom-right'
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /**
   * @default [50, 50] - width:50px, height:50px
   */
  size?: [number, number];
};

export const LinkIconButton: VFC<LinkIconButtonProps> = (props) => {
  const { imagePath, linkPath, position = 'bottom-right', size = [50, 50] } = props;
  const [hover, setHover] = useState(false);

  const publicImagePath = process.env.PUBLIC_URL + imagePath;

  let positionStyle;
  switch (position) {
    case 'top-left':
      positionStyle = styles.topLeft;
      break;
    case 'top-right':
      positionStyle = styles.topRight;
      break;
    case 'bottom-left':
      positionStyle = styles.bottomLeft;
      break;
    default:
      positionStyle = styles.bottomRight;
  }

  return (
    <a
      style={positionStyle}
      href={linkPath}
      target="_blank"
      rel="noreferrer noopener"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="button" // Apply button class to anchor tag
    >
      <span>Ready for Work</span> {/* Text content */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ml-2"
      >
        <path d="M18 8L22 12L18 16"></path>
        <path d="M2 12H22"></path>
      </svg>
    </a>
  );
};

// ========================================================
// styles

type Styles = { [key in string]: React.CSSProperties };

const temp: Styles = {
  container: {
    position: 'fixed',
    padding: '15px 30px',
    bottom: '0',
    right: '0',
    fontSize: '0',
  },
};

const styles: Styles = {
  topLeft: {
    ...temp.container,
    top: '10px',
    left: '10px',
  },
  topRight: {
    ...temp.container,
    top: '10px',
    right: '10px',
  },
  bottomLeft: {
    ...temp.container,
    bottom: '10px',
    left: '10px',
  },
  bottomRight: {
    ...temp.container,
    bottom: '150px',
    right: '650px',
  },
  img: {
    objectFit: 'cover',
    opacity: '0.5',
    transform: 'rotate(0deg)',
    transition: 'all 0.3s',
  },
};

const hoverStyles: Styles = {
  img: {
    ...styles.img,
    opacity: '1',
    transform: 'rotate(360deg)',
  },
};
