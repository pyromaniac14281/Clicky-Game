import React, { Component } from 'react';
import './App.css';


import Header from './Header';
import Card from './Card';
import cards from './cards.json'

function shuffleCard(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {


  state = {
    cards,
    selected: [],
    currentScore: 0,
    topScore: 0,
    message: 'Click On A Character'
  }

  handleShuffle = () => {
    let shuffledCards = shuffleCard(cards);
    this.setState({
      cards: shuffledCards
    });
  }

  handleUpdateTopScore = () => {
    if(this.state.topScore < this.state.currentScore){
      this.setState({
        topScore: this.state.currentScore
      })
    }
  }
