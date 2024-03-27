// Assuming topGames is an array of game objects
const gamesMap = new Map(topGames.map(game => [game.id, game]));

// This will now be a constant-time lookup
const leaderboardItemIndex = gamesMap.has(gameId) ? [...gamesMap.keys()].indexOf(gameId) : -1;
