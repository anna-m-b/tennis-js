const Tennis = require("./tennis")

describe("game setup", () => {
  test("Tennis is instatiated with 2 player scores set at 0", () => {
    //ARRANGE
    const expectedScore = "love"
    //ACT
    const game = new Tennis()
    const {score, playerA, playerB} = game
    //ASSERT
    expect(score[playerA]).toBe(expectedScore)
    expect(score[playerB]).toBe(expectedScore)
  })
})

describe("the tennis scoring systems for a game is implemented correctly", () => {
  let game, score
  beforeEach(() => {
    game = new Tennis()
    score = game.score
  })

  xtest("play() increases one player's score", () => {
    const expectedScore = "15"

    game.play()

    let {playerA, playerB} = game

    const playerScores = [score[playerA], score[playerB]]
    const onePlayerScored = playerScores.includes(expectedScore)
    expect(onePlayerScored).toBe(true)
    
    const checkOnlyOneScored = (score[playerA] === expectedScore) && (score[playerB] === expectedScore)
    expect(checkOnlyOneScored).toBe(false)
  })

  xtest("play() increases the score correctly for the first 3 points", () => { 
    let expectedScore = "30"
    game.playerA = 1, game.playerB = 1

    game.play()
  
    let playerScores = [score[game.playerA], score[game.playerB]]
    let onePlayerScoredAgain = playerScores.includes(expectedScore)
    expect(onePlayerScoredAgain).toBe(true)

    expectedScore = "40"
    game.playerA = 2, game.playerB = 2

    game.play()
  
    playerScores = [score[game.playerA], score[game.playerB]]
    onePlayerScoredAgain = playerScores.includes(expectedScore)
    expect(onePlayerScoredAgain).toBe(true)
  })

})

describe("Endgame", () => {
  let game, score
  beforeEach(() => {
    game = new Tennis()
    score = game.score
  })

  xtest("One player wins", () => {
    const expected = "win"

    game.play()

    playerScores = [score[game.playerA], score[game.playerB]]
    onePlayerWon = playerScores.includes(expected)
    expect(onePlayerWon).toBe(true)

    const checkOnlyOneWon = (score[game.playerA] === expected) && (score[game.playerB] === expected)
    expect(checkOnlyOneWon).toBe(false)
  })

  test("A player can score a maximum of 10 points", () => {
    game.play()

    const {playerA, playerB} = game
    playerScores = [playerA, playerB]
    const scoredMore = playerScores.filter(s => s > 10)
    expect(scoredMore).toHaveLength(0)
  })

  test("a player wins when they are on 40 or higher with 2 points clear, or first one to ten", () => {
    for(let i = 0; i < 10; i++){
      let game = new Tennis()
      game.play()    
  
      if (game.playerA === 10) {
        expect(game.playerB).toBeLessThan(10)
      } else if (game.playerB === 10) {
        expect(game.playerA).toBeLessThan(10)
      } else {
        let diff = Math.abs(game.playerA - game.playerB)
        expect(diff).toBeGreaterThanOrEqual(2)
      }
    }
  })
})


