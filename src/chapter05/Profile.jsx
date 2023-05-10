import React from "react"

export default  function Profile({name = "홍길동"}) {

    return (
      <>
      {name}
       <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
      </>

    )
  }

  export function Profiles() {
    return (
      <>
      <Profile/>
      <Profile/>
      <Profile/>
      
      </>
    )
  }
  