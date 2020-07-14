import React, {useState, useEffect} from 'react';
import '../CSS/SummonerPage.css';
import axios from 'axios'

import SummonerInfo from '../Components/SummonerInfo'

function SummonerPage({match}) {

    const [summonerName, setSummonerName] = useState(match.params.summoner)
    const [summonerInfo, setSummonerInfo] = useState({})
    const [rerender, setRerender] = useState(false)

    useEffect(() => {
        getInfo(summonerName)
    }, [summonerName, rerender])

    //Makes API call for summoner account data
    const getInfo = async summonerName => {
        const accInfoUrl = `http://192.168.0.15:5000/lflolapi/summonerInfo?summonerName=${summonerName}`
        await axios
            .get(accInfoUrl)
            .then(res => {
                setSummonerInfo(res.data)
                setRerender(true)
            })
            .catch(err => {
                //Display error page
                console.log(err)
            })
    }

    if (!rerender) return false

    return(
        <div>
            <SummonerInfo summonerName={summonerName} summonerId={summonerInfo.id} profileIconId={summonerInfo.profileIconId}/>
        </div>
    );

}

export default SummonerPage;