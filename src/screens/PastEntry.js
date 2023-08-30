import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextareaAutosize from 'react-textarea-autosize';
import CanvasDraw from "react-canvas-draw";
import '../styles/Home.css'
import {createCollection, deleteCollection, getRow, getCollection} from "../purr.js"
import { Container } from 'react-bootstrap';

export const PastEntry = () => {
    const [loading, setLoading] = useState();
    const [entry, setEntry] = useState(null);
    const [date, setDate] = useState(new Date())
    const {id} = useParams()
    const canvasref=useRef()
    

    useEffect(() => {
        setLoading(true)
        const data = getRow("entries", id)
        setEntry(data)
        setDate(new Date(data.date))
        console.log(data)
        const temp = JSON.parse(data.drawing)
        canvasref.current.loadSaveData(temp, false)
    },[])

  return (
    <Container>
      <h1>Entry for: {date ? `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` : ""}</h1>
      <Row>
          <Col sm={6}><TextareaAutosize className='textArea' value={entry?.text} minRows= {25} style={{width: "100%", backgroundColor: "transparent"}}/></Col>
          <Col sm={6}><CanvasDraw ref={canvasref}/></Col>
      </Row>
    </Container>
  )
}
