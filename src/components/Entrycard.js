import React from 'react'
import { useNavigate } from "react-router-dom";
import "../styles/Entrycardstyle.css"

export const Entrycard = ({date, id}) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/pastentry/${id}`);
  }

  return (
    <div onClick={() => handleClick()} className='entryContainer'>
        <h1 className='entryText'>{date}</h1>
    </div>
  )
}
