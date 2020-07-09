import React from 'react';
import '../CSS/Home.css';

const centerDivStyle = {
    position: 'absolute',
    left: '50%',
    top: '45%',
    transform: 'translate(-50%, -50%)'
}

function Home() {
  return (
    <div style={centerDivStyle} className="text-center">
        <br></br>
        <label class="main-font title">LoLFetch</label>
        <br></br>
        <label class="second-font sub-title">League of Legends Stat Checker</label>
        <br></br>
        <form className="form-inline">
            <div className="mx-auto w-100 mt-5">
                <input className="form-control mr-sm-2 w-75 textfield" type="text" placeholder="Search Summoner Name(s):"/>
                <button class="btn btn-success">Search</button>
            </div>
        </form>
    </div>
  );
}

export default Home;