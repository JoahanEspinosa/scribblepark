import React, { useEffect, useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextareaAutosize from 'react-textarea-autosize';
import '../styles/Home.css'
import {createCollection, deleteCollection, insertRow} from "../purr.js"
import CanvasDraw from "react-canvas-draw";
import { Button, Container } from 'react-bootstrap';

export const Home = () => {
const [text, setText] = useState();
const [drawing, setDrawing] = useState();
const canvasref=useRef()

useEffect(() => {
    createCollection("entries")
},[])

const handlesave = async () => {
    const data = canvasref.current.getSaveData()
    insertRow("entries", {text: text, drawing: JSON.stringify(data), date: new Date()})
}
const handleload = () => {
    deleteCollection("entries")
}

  return (
    <Container>
        <h1>New journal entry</h1>
        <Row>
            <Col sm={6}><TextareaAutosize className="textArea" value={text} onChange={e=>setText(e.target.value)} placeholder="Frogs! Witches! and MORE!" minRows= {25} style={{width: "100%"}}/></Col>
            <Col sm={6}>
                <CanvasDraw brushRadius={4} ref={canvasref}/>   
                <Button style={{backgroundColor: 'green', marginTop: 20}} onClick={() => {
                    handlesave()
                }}>Save entry</Button>
            </Col>
        </Row>
    </Container>
  )
}
