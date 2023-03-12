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

/* eslint-disable @next/next/no-img-element */
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {FiExternalLink} from 'react-icons/fi';

import styles from '~/styles/ui/Github.module.scss';

type Props = {
  username: string;
};

type Character = {
  type: string;
  classImageUrl?: string;
};

type User = {
  username: string;
  uuid: string;
  avatarUrl: string;
  webUrl: string;
  meta: {
    rank: string;
    totalLevels: number;
    playtime: number;
    firstJoin: string;
    lastJoin: string;
    killedMobs: number;
    rankColor: {
      main: string;
      sub: string;
    };
  };
};

function Wynncraft(props: Props) {
  const {username} = props;

  const [characters, setCharacters] = useState<Character[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function handleFetchCharacters() {
      setLoading(true);
      try {
        // prettier-ignore
        const response = await axios.get<Record<string, Character>>(`https://web-api.wynncraft.com/api/v3/player/${username}/characters`);
        const classes = Object.values(response.data).map((character) => ({
          type: character.type,
          // prettier-ignore
          classImageUrl: {
            SHAMAN: 'https://cdn.wynncraft.com/nextgen/classes/icons/artboards/shaman.webp',
            SKYSEER: 'https://cdn.wynncraft.com/nextgen/classes/icons/artboards/skyseer.webp',
            MAGE: 'https://cdn.wynncraft.com/nextgen/classes/icons/artboards/mage.webp',
            DARKWIZARD: 'https://cdn.wynncraft.com/nextgen/classes/icons/artboards/darkwizard.webp',
            ARCHER: 'https://cdn.wynncraft.com/nextgen/classes/icons/artboards/archer.webp',
            HUNTER: 'https://cdn.wynncraft.com/nextgen/classes/icons/artboards/hunter.webp',
            ASSASSIN: 'https://cdn.wynncraft.com/nextgen/classes/icons/artboards/assassin.webp',
            NINJA: 'https://cdn.wynncraft.com/nextgen/classes/icons/artboards/ninja.webp',
          }[character.type],
        }));
        if (!classes) return null;
        setCharacters(classes);
      } catch (error) {
        console.error(error);
        setError(error as any);
      } finally {
        setLoading(false);
      }
    }

    async function handleFetchPlayer() {
      setLoading(true);
      try {
        // eslint-disable-next-line prettier/prettier
        // prettier-ignore
        const response = await axios.get(`https://web-api.wynncraft.com/api/v3/player/${username}`);
        const user: User = response.data;
        if (!user) return null;
        user.avatarUrl = `https://visage.surgeplay.com/bust/350/${user.uuid}`;
        user.webUrl = `https://wynncraft.com/player/${username}/stats`;
        setUser(user);
      } catch (error) {
        console.error(error);
        setError(error as any);
      } finally {
        setLoading(false);
      }
    }

    handleFetchPlayer().then(handleFetchCharacters);
  }, []);

  if (loading) return null;
  if (error) return null;
  if (!user) return null;

  return (
    <div className={styles.content}>
      <img src={user.avatarUrl} alt={user.username} />
      <div className={styles.info}>
        <header>
          {user.meta.rank ? (
            <h3 style={{color: user.meta.rankColor.sub}}>
              [{user.meta.rank}] {user.username}
            </h3>
          ) : (
            <h3>{user.username}</h3>
          )}
          <p>Total level: {user.meta.totalLevels}</p>
          <p>Total mobs killed: {user.meta.killedMobs}</p>
          <p>Total playtime: {user.meta.playtime}h</p>
        </header>
        <main>
          <ul>
            {characters.map((character) => (
              <div key={character.type}>
                <img src={character.classImageUrl} alt={character.type} />
              </div>
            ))}
          </ul>
        </main>
        <footer>
          <a
            href={`https://github.com/${username}`}
            className={styles.readMore}
          >
            <FiExternalLink />
            Read more
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Wynncraft;
