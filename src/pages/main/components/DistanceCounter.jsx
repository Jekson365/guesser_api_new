import React from 'react'
import Stat from '../../../commons/Stat'

function DistanceCounter({ distance }) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translate(-50%,0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex:"7"
        }}
      >
        <Stat text={Math.floor(distance) || 0 + " კმ" || 0 + " კმ"} />
      </div>
    </>
  )
}

export default DistanceCounter