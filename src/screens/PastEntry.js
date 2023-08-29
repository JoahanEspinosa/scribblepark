import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextareaAutosize from 'react-textarea-autosize';
import CanvasDraw from "react-canvas-draw";
import {createCollection, deleteCollection, getRow, getCollection} from "../purr.js"

export const PastEntry = () => {
    const [loading, setLoading] = useState();
    const [entry, setEntry] = useState();
    const {id} = useParams()
    const canvasref=useRef()
    

    useEffect(() => {
        setLoading(true)
        const data = getRow("entries", id)
        setEntry(data)
        console.log(data)
        const temp = JSON.parse(data.drawing)
        canvasref.current.loadSaveData(temp, false)
    },[])

  return (
    <Row>
        <Col sm={6}><TextareaAutosize value={entry?.text} minRows= {25} style={{width: "100%", backgroundColor: "transparent"}}/></Col>
        <Col sm={6}><CanvasDraw ref={canvasref}/></Col>
    </Row>
  )
}
