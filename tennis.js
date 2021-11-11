class Tennis {
  constructor() {
    this.score = ["love", "15", "30", "40", "advantage", "win"]
    this.playerA = 0
    this.playerB = 0
  }
  play() {
    while (this.playerA < 5 || this.playerB < 5) {
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
  }
}

module.exports = Tennis
