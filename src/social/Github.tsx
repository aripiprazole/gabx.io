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

import React, {useEffect, useRef, useState} from 'react';

import {FiExternalLink, FiLink} from 'react-icons/fi';
import clsx from 'clsx';

import styles from '~/styles/ui/social/Github.module.scss';
import useMediaQuery from '~/utils/useMediaQuery';

type Props = {
  username: string;
  href: string;
  arrowRef?: React.RefObject<HTMLDivElement>;
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
  const {username, href, arrowRef, children} = props;

  const isMobile = useMediaQuery('(max-width: 768px)');

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
      .then((user) => {
        user.blog = normalizeLink(user.blog);
        return user;
      })
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
      {!isMobile && user && (
        <Profile arrowRef={arrowRef} user={user} href={href} open={open} />
      )}
      {children}
    </div>
  );
}

type ProfileProps = {
  user: User;
  href: string;
  open: boolean;
  arrowRef?: React.RefObject<HTMLDivElement>;
};

function Profile(props: ProfileProps): JSX.Element {
  const {arrowRef, user, href, open} = props;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleResize() {
      if (!ref.current || !arrowRef?.current) return;

      const rect = ref.current.getBoundingClientRect();
      const containerRect = containerRef.current!.getBoundingClientRect();
      const arrowRect = arrowRef.current!.getBoundingClientRect();

      const left = arrowRect.x - containerRect.x + rect.width / 4;

      ref.current.style.left = `${left}px`;
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [arrowRef, ref]);

  return (
    <div
      ref={containerRef}
      className={clsx(styles.popover, !open && styles.closed)}
    >
      <div ref={ref} className={styles.arrow} />
      <div className={styles.content}>
        <img src={user.avatar_url} alt={user.name} />
        <div className={styles.info}>
          <header>
            <h3>{user.name}</h3>
            {user.blog && (
              <p>
                <a href={user.blog}>
                  {simplifyLink(user.blog)} <FiLink />
                </a>
              </p>
            )}
            {user.twitter_username && (
              <p>
                <a href={`https://twitter.com/${user.twitter_username}`}>
                  {`twitter.com/${user.twitter_username}`} <FiLink />
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
    </div>
  );
}

function normalizeLink(link: string): string | null {
  if (!link) return null;

  if (link.startsWith('http') || link.startsWith('https')) {
    return link;
  }

  if (!link.includes('.')) return null;

  return `https://${link}`;
}

function simplifyLink(link: string): string {
  return link.replace(/https?:\/\//, '');
}

export default Github;
