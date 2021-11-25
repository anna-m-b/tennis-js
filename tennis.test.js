const Tennis = require("./tennis")

describe("game setup", () => {
  test("Tennis is instatiated with 2 player scores of 'love'", () => {
    //ARRANGE
    const expectedScore = "Love"
    //ACT
    const game = new Tennis()
    const { score, playerA, playerB } = game
    //ASSERT
    expect(score[playerA]).toBe(expectedScore)
    expect(score[playerB]).toBe(expectedScore)
  })
})

describe("the game follows the scoring rules", () => {
  let game
  beforeEach(() => {
    game = new Tennis()
  })
  test("a player wins when they are on 40 or higher with 2 points clear", () => {
    game.playerA = 3
    game.playerB = 1

    game.serve(0)

    expect(game.hasWonByTwoPoints()).toBe(true)

    game.playerA = 3
    game.playerB = 3

    game.serve(0)

    expect(game.hasWonByTwoPoints()).toBe(false)
  })

  test("if both players reach 4 points, the player that lost the point is back to 3", () => {
    game.playerA = 4
    game.playerB = 3

    game.serve(1)

    expect(game.playerA).toBe(3)
    expect(game.playerB).toBe(4)

    game.serve(0)

    expect(game.playerA).toBe(4)
    expect(game.playerB).toBe(3)
  })
})

describe("the game can give the score in tennis terms", () => {
  let game
  beforeEach(() => {
    game = new Tennis()
  })
  test("0 is Love", () => {
    const expected = "PlayerA: Love\n PlayerB: Love"
    const actual = game.getScore()

    expect(actual).toBe(expected)
  })
  test("1 is Fifteen", () => {
    game.playerA = 1

    const expected = "PlayerA: Fifteen\n PlayerB: Love"
    const actual = game.getScore()

    expect(actual).toBe(expected)
  })
  test("2 is Thirty", () => {
    game.playerA = 2

    const expected = "PlayerA: Thirty\n PlayerB: Love"
    const actual = game.getScore()

    expect(actual).toBe(expected)
  })
  test("3 is Forty", () => {
    game.playerA = 3

    const expected = "PlayerA: Forty\n PlayerB: Love"
    const actual = game.getScore()

    expect(actual).toBe(expected)
  })
  test("3-3 is Deuce", () => {
    game.playerA = 3
    game.playerB = 3

    const expected = "DEUCE"
    const actual = game.getScore()

    expect(actual).toBe(expected)
  })
})
