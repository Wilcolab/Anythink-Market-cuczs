import React from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {
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
          <span>A place to </span>
          <span id="get-part">get</span>
          <form action="">
            <input id="search-box" type="text" placeholder="What is it that you truly desire?" name="Search-Term" style={{ width: "375px" }} onChange={handleSearch} />
          </form>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
