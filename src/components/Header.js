import React from 'react';


const Header = (props) => (
 
    <div>
      <div style={styles.mainHeader}>
        <h1>clicker-game!</h1>
        <h2>Current Score: {props.currentScore} | Top Score: {props.topScore}</h2>
        <h2></h2>
        <h2>{props.message}</h2>
      </div>

      <div>
        
        <h3>
          Welcome to an image clicking game.<br></br>
          Click on a character image to gain a point.<br></br>
          Don't click on the same character image more than once.<br></br>
          Get highest score, then you are the winner!!<br></br>
        </h3>


      </div>

      </div>
)

const styles = {
  mainHeader: {
    backgroundColor: 'dodgerblue',
    color: '#fff'
  }
}

export default Header;