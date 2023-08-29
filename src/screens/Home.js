import React, { useEffect, useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextareaAutosize from 'react-textarea-autosize';
import CanvasDraw from "react-canvas-draw";
import {createCollection, deleteCollection, insertRow} from "../purr.js"

export const Home = () => {
const [text, setText] = useState();
const [drawing, setDrawing] = useState();
const canvasref=useRef()

useEffect(() => {
    createCollection("entries")
    // deleteCollection("entries")
},[])

const handlesave = () => {
    const data = canvasref.current.getSaveData()
    setDrawing(prev => prev = data)
    console.log(drawing)
    insertRow("entries", {text: text, drawing: JSON.stringify(drawing), date: new Date()})
}
const handleload = () => {
    canvasref.current.loadSaveData(drawing, true)
}

  return (
    <Row>
        <Col sm={6}><TextareaAutosize value={text} onChange={e=>setText(e.target.value)} placeholder="Frogs! Witches! and MORE!" minRows= {25} style={{width: "100%", backgroundColor: "transparent"}}/></Col>
        <Col sm={6}><CanvasDraw ref={canvasref}/></Col>
        <button onClick={() => {
            handlesave()
        }}>Really Good Button</button>
        <button onClick={() => {
            handleload()
        }}>Even Better Button</button>
    </Row>
  )
}
