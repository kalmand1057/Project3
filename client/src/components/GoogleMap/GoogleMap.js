import React from 'react'

const styles = {
  size: {
    height: "90%",
    width: "100%"
  }
}

export default function GoogleMap(props) {
  return (
    <iframe style={styles.size}
      title="Citymap"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDuaZFYBgwyyEUx46x6qOKEWFBnVgKCRNE&q=${props.city}`} allowFullScreen>
    </iframe>
  )
}
