
import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import AddCandidate from './AddCandidate';
import data from './candidate.json'
import CardView from './CardView';
import './kanbanboard.css'
const KanBanBoard = () => {
    const [candidates, setCandidates] = useState(data.candidates);
    const [list, setList] = useState({
        Source: candidates.filter(item => item.stage === "Source"),
        Applied: candidates.filter(item => item.stage === "Applied"),
        In_Touch: candidates.filter(item => item.stage === "In_Touch"),
        Interview: candidates.filter(item => item.stage === "Interview"),
        Hired: candidates.filter(item => item.stage === "Hired"),
        Rejected: candidates.filter(item => item.stage === "Rejected"),
    });
    useEffect(() => {
        // console.log(list);
    }, []);
    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.clearData();
    }
    const handleDragStart = (e, item) => {
        e.dataTransfer.setData("name", item.name);
        e.dataTransfer.setData("from", item.stage);
    }
    const handleOnDrop = (e, to) => {
        const name = e.dataTransfer.getData("name");
        const from = e.dataTransfer.getData("from");
        e.dataTransfer.clearData();
        //creating new list
        let newList = { ...list };
        //find the object from the "from" 
        const item = newList[from]?.find(d => d.name === name);
        item.stage = to;

        //deleting the object from "from"
        const fromlistupdate = newList[from];
        fromlistupdate.splice(fromlistupdate.findIndex(d => d === item), 1);

        //update the newList
        newList[from] = fromlistupdate;
        newList[to] = [...newList[to], item];
        setList(newList);
    }

    return (
        <div className='kanban__container'>
            <div className="source" onDragOver={handleDragOver} onDrop={e => handleOnDrop(e, "Source")}>
                {
                    list?.Source.map((l, index) =>
                        <CardView color={'white'} key={index} handleDragStart={handleDragStart} l={l} />
                    )
                }
                <div className='add-btn' >
                    <AddCandidate list={list} setList={setList} stage='Source' />
                </div>
            </div>
            <div className="applied" onDragOver={handleDragOver} onDrop={e => handleOnDrop(e, "Applied")} >
                {
                    list?.Applied.map((l, index) =>
                        <CardView color={'white'} key={index} handleDragStart={handleDragStart} l={l} />
                    )
                }
                 <div className='add-btn' >
                    <AddCandidate list={list} setList={setList} stage='Applied' />
                </div>
            </div>
            <div className="in__touch" onDragOver={handleDragOver} onDrop={e => handleOnDrop(e, "In_Touch")} >
                {
                    list?.In_Touch.map((l, index) =>
                        <CardView color={'white'} key={index} handleDragStart={handleDragStart} l={l} />
                    )
                }
                
                <div className='add-btn' >
                    <AddCandidate list={list} setList={setList} stage='In_Touch' />
                </div>
            </div>
            <div className="interview" onDragOver={handleDragOver} onDrop={e => handleOnDrop(e, "Interview")}>
                {
                    list?.Interview.map((l, index) =>
                        <CardView color={'white'} key={index} handleDragStart={handleDragStart} l={l} />
                    )
                }
                  <div className='add-btn' >
                    <AddCandidate list={list} setList={setList} stage='Interview' />
                </div>
            </div>
            <div className="hired" onDragOver={handleDragOver} onDrop={e => handleOnDrop(e, "Hired")}>
                {
                    list?.Hired.map((l, index) =>
                        <CardView color={'#00FF00'} key={index} handleDragStart={handleDragStart} l={l} />
                    )
                }
                  <div className='add-btn' >
                    <AddCandidate list={list} setList={setList} stage='Hired' />
                </div>
            </div>
            <div className="rejected" onDragOver={handleDragOver} onDrop={e => handleOnDrop(e, "Rejected")}>
                {
                    list?.Rejected.map((l, index) =>
                        <CardView color={'#FF0000'} key={index} handleDragStart={handleDragStart} l={l} />
                    )
                }
                  <div className='add-btn' >
                    <AddCandidate list={list} setList={setList} stage='Rejected' />
                </div>
            </div>
        </div>
    )
}

export default KanBanBoard