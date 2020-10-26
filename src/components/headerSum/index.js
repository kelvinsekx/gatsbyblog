import React from "react"

import "./headersum.scss"

import { TypingP, TypingDiv } from "../typing/typing.styled.js"
import Typing from "../typing/typing"


export default function HeaderSum() {
  return (
    <>
      <div className="detailsContainer">
        <h1 style={{ marginTop: "0.56em" }} >Ukuejubola Kelvin</h1>
        <div className="details grey">
          <p>Software Engineer</p>
          <div style={{ fontSize: "0.5em", margin: "0.1em 0", padding: "0" }}>
            JavaScript | Web experience | node | React | Amateur python
          </div>
          <TypingDiv>
            <TypingP>
              I like: <Typing />
            </TypingP>
          </TypingDiv>
        </div>
      </div>
    </>
  )
}
