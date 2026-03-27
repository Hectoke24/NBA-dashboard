import postgres from 'postgres';
import { teams, players, games, standings } from '../lib/seed-data';

const connectionString =
  process.env.DATABASE_URL || process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error('Falta DATABASE_URL o POSTGRES_URL en las variables de entorno');
}

const sql = postgres(connectionString, { ssl: 'require' });

async function seedTeams() {
  await sql`
    CREATE TABLE IF NOT EXISTS teams (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      city VARCHAR(255) NOT NULL,
      conference VARCHAR(20) NOT NULL,
      wins INT NOT NULL DEFAULT 0,
      losses INT NOT NULL DEFAULT 0
    );
  `;

  await Promise.all(
    teams.map((team) => sql`
      INSERT INTO teams (name, city, conference, wins, losses)
      VALUES (${team.name}, ${team.city}, ${team.conference}, ${team.wins}, ${team.losses})
      ON CONFLICT (name) DO UPDATE SET
        city = EXCLUDED.city,
        conference = EXCLUDED.conference,
        wins = EXCLUDED.wins,
        losses = EXCLUDED.losses;
    `),
  );
}

async function seedPlayers() {
  await sql`
    CREATE TABLE IF NOT EXISTS players (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      team VARCHAR(255) NOT NULL,
      position VARCHAR(20) NOT NULL,
      ppg NUMERIC(4,1) NOT NULL DEFAULT 0,
      UNIQUE (name, team)
    );
  `;

  await Promise.all(
    players.map((player) => sql`
      INSERT INTO players (name, team, position, ppg)
      VALUES (${player.name}, ${player.team}, ${player.position}, ${player.ppg})
      ON CONFLICT (name, team) DO UPDATE SET
        position = EXCLUDED.position,
        ppg = EXCLUDED.ppg;
    `),
  );
}

async function seedGames() {
  await sql`
    CREATE TABLE IF NOT EXISTS games (
      id SERIAL PRIMARY KEY,
      away_team VARCHAR(255) NOT NULL,
      home_team VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      time VARCHAR(10) NOT NULL,
      UNIQUE (away_team, home_team, date, time)
    );
  `;

  await Promise.all(
    games.map((game) => sql`
      INSERT INTO games (away_team, home_team, date, time)
      VALUES (${game.awayTeam}, ${game.homeTeam}, ${game.date}, ${game.time})
      ON CONFLICT (away_team, home_team, date, time) DO NOTHING;
    `),
  );
}

async function seedStandings() {
  await sql`
    CREATE TABLE IF NOT EXISTS standings (
      id SERIAL PRIMARY KEY,
      team VARCHAR(255) NOT NULL UNIQUE,
      conference VARCHAR(20) NOT NULL,
      wins INT NOT NULL DEFAULT 0,
      losses INT NOT NULL DEFAULT 0
    );
  `;

  await Promise.all(
    standings.map((row) => sql`
      INSERT INTO standings (team, conference, wins, losses)
      VALUES (${row.team}, ${row.conference}, ${row.wins}, ${row.losses})
      ON CONFLICT (team) DO UPDATE SET
        conference = EXCLUDED.conference,
        wins = EXCLUDED.wins,
        losses = EXCLUDED.losses;
    `),
  );
}

export async function GET() {
  try {
    await seedTeams();
    await seedPlayers();
    await seedGames();
    await seedStandings();

    return Response.json({
      message: 'Base de datos creada y rellenada correctamente',
    });
  } catch (error) {
    console.error('Error al ejecutar seed:', error);
    return Response.json(
      { error: 'Error al crear o rellenar la base de datos' },
      { status: 500 },
    );
  }
}