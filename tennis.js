class Tennis {
  constructor() {
    this.score = ["Love", "Fifteen", "Thirty", "Forty", "Advantage", "Win!"]
    this.playerA = 0
    this.playerB = 0
    this.serveCount = 0
    this.maxServes = 10
  }

  play() {
    while (!this.hasWonByTwoPoints() && this.serveCount < this.maxServes) {
      const scorer = Math.floor(Math.random() * 2)
      this.serve(scorer)
      this.serveCount++
      console.log(`serve: ${this.serveCount}\n SCORES:\n ${this.getScore()}`)
    }
    console.log(`${this.getWinner()}`)
  }

  serve(scorer) {
    if (scorer === 0) {
      this.playerA++
    } else if (scorer === 1) {
      this.playerB++
    }

    if (this.playerA + this.playerB === 8) {
      this.decreaseScore(scorer)
    }
  }

  getScore() {
    return this.isDeuce()
      ? "DEUCE"
      : `PlayerA: ${this.score[this.playerA]}\n PlayerB: ${
          this.score[this.playerB]
        }`
  }

  getWinner() {
    if (this.playerA === this.playerB) {
      return `IT'S A DRAW!`
    }
    const winner = this.playerA > this.playerB ? "A" : "B"
    return `AND THE WINNER IS PLAYER ${winner}!`
  }

  isDeuce() {
    return this.playerA === 3 && this.playerB === 3
  }

  decreaseScore(scorer) {
    if (scorer === 0 && this.playerB === 4) {
      this.playerB--
    } else if (scorer === 1 && this.playerA === 4) {
      this.playerA--
    }
  }

  hasWonByTwoPoints() {
    return (
      (this.playerA >= 4 || this.playerB >= 4) &&
      Math.abs(this.playerA - this.playerB) >= 2
    )
  }
}

module.exports = Tennis

