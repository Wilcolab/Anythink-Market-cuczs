import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (ev) => {
    ev.preventDefault();
    if (ev.target.value.length >= 3) {
      props.onSearch(
        ev.target.value,
        (page) => agent.Items.byTitle(ev.target.value, page),
        agent.Items.byTitle(ev.target.value)
      );
    }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <form>
            <span>A place to </span>
            <span
              id="get-part"
              onClick={() => {
                setShowSearchBar(true);
              }}
            >
              get{" "}
            </span>
            {showSearchBar && (
              <input
                id="search-box"
                type="text"
                placeholder="What is it that you truly desire?"
                name="Search-Term"
                style={{ width: "375px" }}
                onChange={handleSearch}
              />
            )}
            <span> the cool stuff.</span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
