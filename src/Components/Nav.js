import React , {useState} from 'react';
import '../CSS/Nav.css';
import { Link } from 'react-router-dom'

function Nav() {
  
  const [summonerName, setSummonerName] = useState('')

  const eventHandler = e => {
    setSummonerName(e.target.value)
  }

  return (
    <div className="bottom-border">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <a className="navbar-brand main-font brand" href="/">LoLFetch</a>
        <ul className="navbar-nav ml-auto mr-5">
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="text" placeholder="Search Summoner Name(s):" onChange={eventHandler}/>
            <Link to={`/summoner/${summonerName}`}>
            <button className="btn btn-success">Search</button>
            </Link>
          </form>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
