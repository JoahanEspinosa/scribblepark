import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import "../styles/Entrycardstyle.css"

export const Entrycard = ({date, id}) => {
  const [dateValue, setDateValue] = useState(new Date(date))
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/pastentry/${id}`);
  }

  return (
    <div onClick={() => handleClick()} className='entryContainer'>
        <h1 className='entryText'>{date ? `${dateValue.getMonth() + 1}/${dateValue.getDate()}/${dateValue.getFullYear()}` : ""}</h1>
    </div>
  )
}
