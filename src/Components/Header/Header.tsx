import React, { ChangeEvent } from "react";
import { Image_Components, logo, magnifer_logo } from "../../exports";

interface Header_Props {
  value: string;
  input_onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  input_onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  magnifer_icon_onClick: () => void;
}
const Header = ({
  value,
  input_onKeyDown,
  input_onChange,
  magnifer_icon_onClick,
}: Header_Props) => {
  return (
    <header className="header">
      <a href="./index.html">
        <Image_Components className="logo_icon" src={logo} alt="Logo" />
      </a>

      <form>
        <input
          className="search_input"
          type="text"
          placeholder="Search Location..."
          value={value}
          onKeyDown={input_onKeyDown}
          onChange={input_onChange}
        />
        <Image_Components
          className="magnifer_icon"
          src={magnifer_logo}
          alt="Magnifer Icon"
          onClick={magnifer_icon_onClick}
        />
      </form>
    </header>
  );
};

export default Header;
