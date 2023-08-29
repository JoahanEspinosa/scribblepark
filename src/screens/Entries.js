import React, { useEffect, useRef, useState } from 'react';
import { Entrycard } from '../components/Entrycard'
import {createCollection, deleteCollection, insertRow, getCollection} from "../purr.js"

export const Entries = () => {
    const [loading, setLoading] = useState();
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        setLoading(true)
        const data = getCollection("entries")
        setEntries(data)
        console.log(data)
    },[])

  return (
    <div>
        {/* <Entrycard date={"8/29/23"}></Entrycard>
        <Entrycard date={"8/30/23"}></Entrycard>
        <Entrycard date={"9/1/23"}></Entrycard> */}
        {entries.map((entry, index) => {return <Entrycard id={entry.id} date={entry.date.toString()}></Entrycard>})}
    </div>
  )
}
