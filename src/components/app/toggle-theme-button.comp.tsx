import React from 'react';
import { ThemeChangerContext } from '../../styles/theming';
export const ToggleThemeButton = () => {
  const { changeColorsTheme } = React.useContext(ThemeChangerContext);
  return (
    <div>
      <label htmlFor="chkDark">
        Toggle Theme
        <input
          type="checkbox"
          id="chkDark"
          defaultChecked={true}
          onChange={e => {
            changeColorsTheme(e.target.checked ? 'dark' : 'light');
          }}
        />
      </label>
    </div>
  );
};
