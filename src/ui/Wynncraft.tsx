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

import styles from '~/styles/ui/Wynncraft.module.scss';

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
  characters: Character[];
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

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function handleFetchPlayer() {
      try {
        const response = await axios.get(`/api/wynncraft/${username}`);
        const user: User = response.data;
        if (!user) return null;

        setUser(user);
      } catch (error) {
        setError(error as any);
      } finally {
        setLoading(false);
      }
    }

    handleFetchPlayer().then();
  }, []);

  if (loading) return null;
  if (error) return null;
  if (!user) return null;

  return (
    <div className={styles.content}>
      <img src={user.avatarUrl} alt={user.username} />
      <div className={styles.info}>
        <img
          className={styles.background}
          src='https://cdn.wynncraft.com/nextgen/planks-texture.webp'
          alt='Background'
        />
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
            {user.characters.map((character) => (
              <div key={character.type}>
                <img src={character.classImageUrl} alt={character.type} />
              </div>
            ))}
          </ul>
        </main>
        <footer>
          <a href={user.webUrl} className={styles.readMore}>
            <FiExternalLink />
            Read more
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Wynncraft;
