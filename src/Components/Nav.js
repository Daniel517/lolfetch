import React from 'react';
import '../CSS/Nav.css';

function Nav() {
  return (
    <div className="bottom-border">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <a class="navbar-brand main-font brand" href="/">LoLFetch</a>
        <ul class="navbar-nav ml-auto mr-5">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" placeholder="Search Summoner Name(s):"/>
            <button class="btn btn-success">Search</button>
          </form>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
