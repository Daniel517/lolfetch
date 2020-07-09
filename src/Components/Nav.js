import React , {useState} from 'react';
import '../CSS/Nav.css';

function Nav() {
  
  const [summonerName, setSummonerName] = useState('')

  const submit = e => {
    e.preventDefault()
    console.log(summonerName)
  }

  const eventHandler = e => {
    setSummonerName(e.target.value)
  }

  return (
    <div className="bottom-border">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <a className="navbar-brand main-font brand" href="/">LoLFetch</a>
        <ul className="navbar-nav ml-auto mr-5">
          <form className="form-inline" onSubmit={submit}>
            <input className="form-control mr-sm-2" type="text" placeholder="Search Summoner Name(s):" onChange={eventHandler}/>
            <button className="btn btn-success">Search</button>
          </form>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
