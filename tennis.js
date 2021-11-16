class Tennis {
  constructor() {
    this.score = ["love", "15", "30", "40", "advantage", "win"]
    this.playerA = 0
    this.playerB = 0
    this.maxScore = 10
  }
  play() {
    while (!this.checkForWin()) {
      const scorer = Math.floor(Math.random() * 2)
      if (scorer === 0) {
        this.playerA++
        console.log('playerA scored!')
  
      }
      if (scorer === 1) {
        this.playerB++
        console.log('playerB scored!')
      }

      console.log(`SCOREBOARD: PlayerA: ${this.score[this.playerA]} | PlayerB: ${this.score[this.playerB]}`)
    }
    console.log("game over", this.playerA, this.playerB)
  }
  
  checkForWin(){
    return this.hasWonByTwoPoints() || this.hasWonWithMaxScore()
  }

  hasWonByTwoPoints(){
    return (this.playerA >= 4 || this.playerB >=4) && Math.abs(this.playerA - this.playerB) >= 2
  }

  hasWonWithMaxScore(){
   return this.playerA === this.maxScore || this.playerB === this.maxScore
  }
  
}

module.exports = Tennis
