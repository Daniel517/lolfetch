import React, { useState, useEffect } from 'react';
import '../CSS/SummonerHistory.css';
import axios from 'axios'

import MatchDetails from '../Components/MatchDetails.js'

function SummonerInfo(props) {

    const [accountId, setAccountId] = useState(props.accountId)
    const [matchHistory, setMatchHistory] = useState([])
    const [rerender, setRerender] = useState(false)


    useEffect(() => {
        if (!rerender) {
            getMatchHistory(accountId)
        }
    }, [rerender])

    //Makes API call for summoner match history
    const getMatchHistory = async summonerId => {
        const rankUrl = `http://192.168.0.15:5000/lflolapi/matchHistory?accountId=${accountId}`
        await axios
            .get(rankUrl)
            .then(res => {
                setMatchHistory(res.data.matches)
                setRerender(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    if (!rerender) return false

    return(
        <div className="card my-4 w-75 mx-auto">
            <div className="card-header bg-header text-center">
                <label className="title third-font">Match History</label>
                <div className="d-flex text-center my-2 second-font options">
                    <div className="flex-fill">
                        Norms
                    </div>
                    <div className="flex-fill">
                        Solo/Duo
                    </div>
                    <div className="flex-fill">
                        Flex
                    </div>
                    <div className="flex-fill">
                        Clash
                    </div>
                </div>
            </div>
            <div className="card-content bg-content">
                <div className="d-flex">
                    <div className="flex-fill m-3">
                        <MatchDetails matchDetails={matchHistory[0]} />
                    </div>
                    <div className="flex-fill m-3">
                        <MatchDetails matchDetails={matchHistory[0]} />
                    </div>
                    <div className="flex-fill m-3">
                        <MatchDetails matchDetails={matchHistory[0]} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default SummonerInfo;