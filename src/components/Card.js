import React from 'react';

const Card = props => (
  <div className='card' style={styles.cardStyle} onClick={() => props.handleClick(props.id)} >
    <div className='img-container' >
      <img src={props.image} alt={props.name} style={styles.imgStyle} />
    </div>
  </div>
)

const styles = {
  cardStyle:{
    margin: 1,
    background: "#666",
    borderRadius: 7,
    width: 200,
    height: 200
  },

  imgStyle: {
    height: 175,
    maxWidth: 190,
    position: "relative"
  }
}

export default Card;