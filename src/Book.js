import React from 'react'

function Book({serial,book}) {
  return (
    <div  style={{border:"1px solid black",width:"fit-content",
    margin:"auto",padding:"10px",marginBlock:"6px"}}>
      <h1>serional no. : {serial}</h1>
      <h1>Book name : {book}</h1>
    </div>
  )
}

export default Book
