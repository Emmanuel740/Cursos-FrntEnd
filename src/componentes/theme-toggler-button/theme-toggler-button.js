import {ThemeContext} from '../../Context/theme-context';

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
            Cambiar tema
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;