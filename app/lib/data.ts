import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchTeams(query = '') {
  const search = `%${query}%`;

  const teams = await sql`
    SELECT id, name, city, conference, wins, losses
    FROM teams
    WHERE
      name ILIKE ${search}
      OR city ILIKE ${search}
      OR conference ILIKE ${search}
    ORDER BY wins DESC
  `;

  return teams;
}

export async function fetchPlayers(query = '') {
  const search = `%${query}%`;

  const players = await sql`
    SELECT id, name, team, position, ppg
    FROM players
    WHERE
      name ILIKE ${search}
      OR team ILIKE ${search}
      OR position ILIKE ${search}
    ORDER BY ppg DESC
  `;

  return players;
}

export async function fetchGames() {
  const games = await sql`
    SELECT id, away_team, home_team, date, time
    FROM games
    ORDER BY date ASC
  `;

  return games;
}

export async function fetchStandings() {
  const standings = await sql`
    SELECT id, team, conference, wins, losses
    FROM standings
    ORDER BY wins DESC
  `;

  return standings;
}