import React, {useState} from 'react';
import '../CSS/Home.css';

const centerDivStyle = {
    position: 'absolute',
    left: '50%',
    top: '45%',
    transform: 'translate(-50%, -50%)'
}

function Home() {
    const [summonerName, setSummonerName] = useState('')

    const submit = e => {
        e.preventDefault()
        console.log(summonerName)
    }

    const eventHandler = e => {
      setSummonerName(e.target.value)
    }
    return (
        <div style={centerDivStyle} className="text-center">
            <br></br>
            <label className="main-font title">LoLFetch</label>
            <br></br>
            <label className="second-font sub-title">League of Legends Stat Checker</label>
            <br></br>
            <form className="form-inline" onSubmit={submit}>
                <div className="mx-auto w-100 mt-5">
                    <input className="form-control mr-sm-2 w-75 textfield" type="text" placeholder="Search Summoner Name(s):" onChange={eventHandler}/>
                    <button className="btn btn-success">Search</button>
                </div>
            </form>
        </div>
    );
}

export default Home;