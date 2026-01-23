const gameDay1 = [
  ["team1", "team2"][("team1", "team3")],
  ["team1", "team4"],
  ["team1", "team5"],
  ["team2", "team3"],
  ["team2", "team4"],
  ["team2", "team5"],
  ["team3", "team4"],
  ["team3", "team5"],
  ["team4", "team5"],
];

const results = [1, 1, 0, 1, 0, 0, 1, 0, 1];

console.log(results.length);
console.log(gameDay1.length);

const HOME_TEAM_WON = 1;

const tournamentWinner = (competitions, results) => {
  let currentBestTeam = "";
  let scores = { [currentBestTeam]: 0 };

  for (let idx = 0; idx < competitions.length; idx++) {
    const result = results[idx];
    const [homeTeam, awayTeam] = competitions[idx];

    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    updateScores(winningTeam, 3, scores);

    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }

  return currentBestTeam;
};

const updateScores = (team, points, scores) => {
  if (!(team in scores)) scores[team] = 0;

  scores[team] += points;
};

console.log(tournamentWinner(gameDay1, results));
