import React, { useState, useEffect } from 'react';
import '../CSS/MatchDetails.css';
import axios from 'axios'

function MatchDetails(props) {

    const [matchDetails, setMatchDetails] = useState(props.matchDetails)
    const [matchStats , setMatchStats] = useState()
    const [queuesData, setQueuesData] = useState()
    const [queueName, setQueueName] = useState()
    const [apiCallsDone, setAPICallsDone] = useState(false)

    useEffect(() => {
        if (!apiCallsDone) {
            makeAPICalls()
        }
        else {
            getQueueName(matchDetails.queue)
        }
    }, [apiCallsDone])

    const makeAPICalls = async () => {
        const queueURL = "http://static.developer.riotgames.com/docs/lol/queues.json"
        await axios
            .get(queueURL)
            .then(res => {
                setQueuesData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        const statsURL = `http://192.168.0.15:5000/lflolapi/match?gameId=${matchDetails.gameId}`
        await axios
            .get(statsURL)
            .then(res => {
                setMatchStats(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        setAPICallsDone(true)
    }

    const getQueueName = (queueId) => {
        queuesData.forEach(queue => {
            if (queue.queueId === queueId) {
                const queueName = queue.description.slice(0, -5)
                setQueueName(queueName)
            }
        });
    }

    const millisToMinutes = (millis) => {
        const minutes = Math.floor(millis / 60)
        const seconds = (millis % 60)
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds
    }

    if (!apiCallsDone) return false

    return (
        <div className="card">
            <div className="card-header d-flex bg-win text-white">
                <div className="flex-fill second-font date-time-labels">
                    <label>{new Date(matchDetails.timestamp).toLocaleDateString()}</label>
                    <br></br>
                    <label>{new Date(matchDetails.timestamp).toLocaleTimeString()}</label>
                </div>
                <div className="flex-fill text-center">
                    <label className="second-font match-title">{queueName}</label>
                </div>
                <div className="flex-fill text-right">
                    <label className="second-font date-time-labels">{millisToMinutes(matchStats.gameDuration)} </label>
                </div>
            </div>
            <div className="card-content match-details-bg">
                
            </div>
        </div>
    );
}

export default MatchDetails;