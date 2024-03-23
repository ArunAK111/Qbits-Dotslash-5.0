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
  const { imagePath, linkPath, position = 'bottom-right', size = [100, 100] } = props;
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
      target="https://www.google.com/"
      rel="noreferrer noopener"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button style={hover ? hoverStyles.button : styles.button} >
        {/* Add your button content here */}
        Button
      </button>
    </a>
  );
};

// ========================================================
// styles

type Styles = { [key in string]: React.CSSProperties };

const temp: Styles = {
  container: {
    position: 'fixed',
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
	right: '900px',
},
button: {
	background: 'linear-gradient(to bottom, #ff7e5f, #feb47b)',
	border: '1px solid #ff7e5f',
	borderRadius: '4px',
	color: '#fff',
	cursor: 'pointer',
	padding: '10px 20px',
	fontSize: '16px',
	fontWeight: 'bold',
	outline: 'none',
	opacity: '1',
	boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
	transition: 'transform 0.3s ease-in-out', // Add transition for smooth effect
},
};

const hoverStyles: Styles = {
	button: {
	...styles.button,
	transform: 'scale(1.5)', // Increase the scale on hover
	}
}
  