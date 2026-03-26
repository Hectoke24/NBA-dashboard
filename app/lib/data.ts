import { Team, Player, Game, Standing } from './definitions';  

export const teams = [
  { id: 1, name: 'Lakers', city: 'Los Angeles', conference: 'West', wins: 48, losses: 34 },
  { id: 2, name: 'Celtics', city: 'Boston', conference: 'East', wins: 54, losses: 28 },
  { id: 3, name: 'Warriors', city: 'Golden State', conference: 'West', wins: 46, losses: 36 },
  { id: 4, name: 'Bucks', city: 'Milwaukee', conference: 'East', wins: 58, losses: 24 },
  { id: 5, name: 'Heat', city: 'Miami', conference: 'East', wins: 44, losses: 38 },
  { id: 6, name: 'Nets', city: 'Brooklyn', conference: 'East', wins: 42, losses: 40 },
  { id: 7, name: 'Clippers', city: 'Los Angeles', conference: 'West', wins: 40, losses: 42 },
  { id: 8, name: 'Suns', city: 'Phoenix', conference: 'West', wins: 38, losses: 44 },
  { id: 9, name: 'Jazz', city: 'Utah', conference: 'West', wins: 36, losses: 46 },
  { id: 10, name: 'Mavericks', city: 'Dallas', conference: 'West', wins: 34, losses: 48 },
  { id: 11, name: 'Raptors', city: 'Toronto', conference: 'East', wins: 32, losses: 50 },
  { id: 12, name: '76ers', city: 'Philadelphia', conference: 'East', wins: 30, losses: 52 },
];

export const players = [
  { id: 1, name: 'LeBron James', team: 'Lakers', position: 'SF', ppg: 25.4 },
  { id: 2, name: 'Stephen Curry', team: 'Warriors', position: 'PG', ppg: 27.9 },
  { id: 3, name: 'Jayson Tatum', team: 'Celtics', position: 'SF', ppg: 26.8 },
  { id: 4, name: 'Giannis Antetokounmpo', team: 'Bucks', position: 'PF', ppg: 29.1 },
  { id: 5, name: 'Jimmy Butler', team: 'Warriors', position: 'SG', ppg: 22.3 },
  { id: 6, name: 'Kevin Durant', team: 'Rockets', position: 'SF', ppg: 27.0 },
  { id: 7, name: 'Kawhi Leonard', team: 'Clippers', position: 'SF', ppg: 24.5 },
  { id: 8, name: 'Devin Booker', team: 'Suns', position: 'SG', ppg: 26.1 },
  { id: 9, name: 'Donovan Mitchell', team: 'Cleveland', position: 'SG', ppg: 24.7 },
  { id: 10, name: 'Luka Dončić', team: 'Lakers', position: 'PG', ppg: 33.3 },
  { id: 11, name: 'Zion Williamson', team: 'Pelicans', position: 'PF', ppg: 24.0 },
  { id: 12, name: 'Ja Morant', team: 'Grizzlies', position: 'PG', ppg: 24.8 },

];

export const games = [
  { id: 1, awayTeam: 'Lakers', homeTeam: 'Celtics', date: '2026-03-27', time: '19:30' },
  { id: 2, awayTeam: 'Warriors', homeTeam: 'Bucks', date: '2026-03-28', time: '21:00' },
  { id: 3, awayTeam: 'Celtics', homeTeam: 'Heat', date: '2026-03-29', time: '18:00' },
  { id: 4, awayTeam: 'Bucks', homeTeam: 'Nets', date: '2026-03-30', time: '20:00' },
  { id: 5, awayTeam: 'Clippers', homeTeam: 'Suns', date: '2026-03-31', time: '19:00' },
  { id: 6, awayTeam: 'Suns', homeTeam: 'Jazz', date: '2026-04-01', time: '21:30' },
  { id: 7, awayTeam: 'Jazz', homeTeam: 'Mavericks', date: '2026-04-02', time: '20:00' },
  { id: 8, awayTeam: 'Mavericks', homeTeam: 'Raptors', date: '2026-04-03', time: '19:30' },
  { id: 9, awayTeam: 'Raptors', homeTeam: '76ers', date: '2026-04-04', time: '18:00' },
  { id: 10, awayTeam: '76ers', homeTeam: 'Lakers', date: '2026-04-05', time: '20:00' },
];

export const standings = [
  { id: 1, team: 'Celtics', conference: 'East', wins: 58, losses: 24 },
  { id: 2, team: 'Bucks', conference: 'East', wins: 54, losses: 28 },
  { id: 3, team: 'Lakers', conference: 'West', wins: 48, losses: 34 },
  { id: 4, team: 'Warriors', conference: 'West', wins: 46, losses: 36 },
  { id: 5, team: 'Heat', conference: 'East', wins: 44, losses: 38 },
  { id: 6, team: 'Nets', conference: 'East', wins: 42, losses: 40 },
  { id: 7, team: 'Clippers', conference: 'West', wins: 40, losses: 42 },
  { id: 8, team: 'Suns', conference: 'West', wins: 38, losses: 44 },
  { id: 9, team: 'Jazz', conference: 'West', wins: 36, losses: 46 },
  { id: 10, team: 'Mavericks', conference: 'West', wins: 34, losses: 48 },
  { id: 11, team: 'Raptors', conference: 'East', wins: 32, losses: 50 },
  { id: 12, team: '76ers', conference: 'East', wins: 30, losses: 52 },
];