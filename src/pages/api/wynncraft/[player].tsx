/*
 * My personal blog and portfolio website
 * Copyright (C) 2023  Gabrielle Guimarães
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import {NextApiRequest, NextApiResponse} from 'next';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://web-api.wynncraft.com/api/v3',
});

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {player: username} = req.query;
  if (!username) {
    return res.status(400).send('Missing player name');
  }

  try {
    const player = await api.get(`/player/${username}`);
    const characters = await api.get(`/player/${username}/characters`);

    return res.status(200).json({
      ...player.data,
      avatarUrl: `https://visage.surgeplay.com/bust/350/${player.data.uuid}`,
      webUrl: `https://wynncraft.com/player/${username}/stats`,
      characters: Object.values(characters.data).map((character: any) => ({
        type: character.type,
        classImageUrl: `https://cdn.wynncraft.com/nextgen/classes/icons/artboards/${character.type.toLowerCase()}.webp`,
      })),
    });
  } catch (error) {
    return res.status(404).send('Could not find player');
  }
}

export default handler;
