import React, { useState, useEffect } from 'react';
import '../CSS/SummonerInfo.css';
import axios from 'axios'

function SummonerInfo(props) {

    const [summonerId, setSummonerId] = useState(props.summonerId)
    const [summonerIcon, setSummonerIcon] = useState(props.profileIconId)
    const [rankSolo, setRankSolo] = useState({})
    const [rankFlex, setRankFlex] = useState({})
    const [rerender, setRerender] = useState(false)


    useEffect(() => {
        getRank(summonerId)
    }, [rerender])

    //Makes API call for summoner ranks
    const getRank = async summonerId => {
        const rankUrl = `http://192.168.0.15:5000/lflolapi/summonerRank?summonerId=${summonerId}`
        await axios
            .get(rankUrl)
            .then(res => {
                getRankData(res.data)
                setRerender(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getRankData = rankData => {
        rankData.forEach(queue => {
            if (queue['queueType'] === "RANKED_SOLO_5x5") {
                setRankSolo(queue)
            } else {
                setRankFlex(queue)
            }

        })
    }

    const isEmpty = obj => {
        return Object.keys(obj).length === 0 ? true : false
    }

    const getIconLink = () => {
        return `http://ddragon.leagueoflegends.com/cdn/10.14.1/img/profileicon/${summonerIcon}.png`
    }

    if (!rerender) return false

    return(
        <div className="my-5 w-75 mx-auto main-div">
            <div className="d-flex p-5">
                <div className="flex-fill text-center">
                    <img src={getIconLink()} width="50" height="50" alt=""/>
                    <br></br>
                    <label className="third-font main-name">{props.summonerName}</label>
                </div>
                <div className="flex-fill text-center">
                    <label className="second-font">Ranked Solo/Duo</label>
                    <br></br>
                    {isEmpty(rankSolo)
                    ? <label className="second-font"> No Rank History </label>
                    : <label className="second-font">{rankSolo.tier} {rankSolo.rank} </label>
                    }
                    <br></br>
                    {isEmpty(rankSolo)
                    ? <label className="second-font">W: 0 L: 0</label>
                    : <label className="second-font">W: {rankSolo.wins} L: {rankSolo.losses} ({ Math.round(100 * rankSolo.wins/(rankSolo.losses + rankSolo.wins))}%)</label>
                    }
                </div>
                <div className="flex-fill text-center">
                    <label className="second-font">Ranked Flex</label>
                    <br></br>
                    {isEmpty(rankFlex)
                    ? <label className="second-font"> No Rank History </label>
                    : <label className="second-font">{rankFlex.tier} {rankFlex.rank} </label>
                    }
                    <br></br>
                    {isEmpty(rankFlex)
                    ? <label className="second-font">W: 0 L: 0</label>
                    : <label className="second-font">W: {rankFlex.wins} L: {rankFlex.losses} ({ Math.round(100 * rankFlex.wins/(rankFlex.losses + rankFlex.wins))}%)</label>
                    }
                </div>

            </div>
        </div>
    );

}

export default SummonerInfo;