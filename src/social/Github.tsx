/* eslint-disable @next/next/no-img-element */
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

import React, {useEffect, useState} from 'react';

import {FiExternalLink, FiLink} from 'react-icons/fi';

import styles from '~/styles/components/social/Github.module.scss';

type Props = {
  username: string;
  href: string;
  children: JSX.Element;
};

type User = {
  login: string;
  id: number;
  avatar_url: string;
  name: string;
  email: string;
  followers: number;
  following: number;
  bio: string;
  location: string;
  blog?: string;
  company?: string;
  twitter_username?: string;
};

function Github(props: Props): JSX.Element {
  const {username, href, children} = props;

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then(setUser)
      .catch(setError)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return children;
  }

  if (error) {
    return children;
  }

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {open && user && <Profile user={user} href={href} />}

      {children}
    </div>
  );
}

type ProfileProps = {
  user: User;
  href: string;
};

function Profile(props: ProfileProps): JSX.Element {
  const {user, href} = props;

  return (
    <div className={styles.popover}>
      <div className={styles.arrow} />
      <img src={user.avatar_url} alt={user.name} />
      <div className={styles.info}>
        <header>
          <h3>{user.name}</h3>
          {user.blog && (
            <p>
              <a href={user.blog}>
                {user.blog} <FiLink />
              </a>
            </p>
          )}
          {user.twitter_username && (
            <p>
              <a href={`https://twitter.com/${user.twitter_username}`}>
                {user.twitter_username} <FiLink />
              </a>
            </p>
          )}
          {user.company && <p>{user.company}</p>}
          {user.location && <p>{user.location}</p>}
        </header>
        <main>{user.bio}</main>
        <footer>
          <a href={href} className={styles.readMore}>
            <FiExternalLink />
            Read more
          </a>
        </footer>
      </div>
    </div>
  );
}

export default Github;
