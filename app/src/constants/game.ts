const GAMES = [
  {
    title: "ほうれん草ゲーム",
    description: {
      overview: "ゲームの説明",
      url: "https://w.atwiki.jp/nomikai-game/pages/35.html"
    }
  },
  {
    title: "ルパン三世ゲーム",
    description: {
      overview: "ゲームの説明",
      url: "ゲームのURL"
    }
  },
  {
    title: "シュビドゥバドゥゲーム",
    description: {
      overview: "ゲームの説明",
      url: "https://drinkgame.net/game10/"
    }
  },
  {
    title: "炙りカルビゲーム",
    description: {
      overview: "ゲームの説明",
      url: "https://w.atwiki.jp/nomikai-game/pages/21.html"
    }
  },
  {
    title: "サイコロゲーム",
    description: {
      overview: "ゲームの説明",
      url: "ゲームのURL"
    }
  },
  {
    title: "ピンポンパンゲーム",
    description: {
      overview: "ゲームの説明",
      url: "https://w.atwiki.jp/nomikai-game/pages/17.html"
    }
  },
  {
    title: "トランプゲーム",
    description: {
      overview: "ゲームの説明",
      url: "ゲームのURL"
    }
  }
]

export const getRandomGame = () => {
  return GAMES[Math.floor(Math.random() * GAMES.length)]
}
