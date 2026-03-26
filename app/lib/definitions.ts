export type Team = {
  id: string;
  name: string;
  city: string;
  conference: 'East' | 'West';
  wins: number;
  losses: number;
};

export type Player = {
  id: string;
  name: string;
  team: string;
  position: string;
  ppg: number;
};

export type Game = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  status: string;
};

export type Standing = {
  team: string;
  conference: 'East' | 'West';
  wins: number;
  losses: number;
};