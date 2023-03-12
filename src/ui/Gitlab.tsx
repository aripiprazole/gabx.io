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

import {FiExternalLink, FiLink} from 'react-icons/fi';

import styles from '~/styles/ui/Github.module.scss';

type Props = {
  username: string;
  href: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  public_email: string;
  followers: number;
  following: number;
  bio: string;
  work_information: string;
  location: string | null;
  website_url: string | null;
  company: string | null;
  discord: string | null;
  twitter: string | null;
  twitter_url: string | null;
  linkedin: string | null;
  linkedin_url: string | null;
  avatar_url: string;
  web_url: string;
};

function Gitlab(props: Props) {
  const {username} = props;

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function handleFetchGitlab() {
      try {
        // eslint-disable-next-line prettier/prettier
        // prettier-ignore
        const users = await axios.get<User[]>('https://gitlab.com/api/v4/users', {
          params: {username},
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITLAB_TOKEN}`,
          },
        });
        const [data] = users.data;
        if (!data) return null;

        // eslint-disable-next-line prettier/prettier
        // prettier-ignore
        const response = await axios.get<User>(`https://gitlab.com/api/v4/users/${data.id}`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITLAB_TOKEN}`,
          },
        });
        const user = response.data;
        user.website_url = normalizeLink(user.website_url);
        if (user.twitter) {
          user.twitter_url = `https://twitter.com/${user.twitter.replace(
            '@',
            '',
          )}`;
        }
        if (user.linkedin) {
          user.linkedin_url = `https://linkedin.com/in/${user.linkedin}`;
        }
        setUser(user);
        return data;
      } catch (error) {
        setError(error as any);
      } finally {
        setLoading(false);
      }
    }

    handleFetchGitlab().then();
  }, []);

  if (loading) return null;
  if (error) return null;
  if (!user) return null;

  return (
    <div className={styles.content}>
      <img src={user.avatar_url} alt={user.name} />
      <div className={styles.info}>
        <header>
          <h3>{user.name}</h3>
          {user.website_url && (
            <p>
              <a href={user.website_url!}>
                {simplifyLink(user.website_url!)} <FiLink />
              </a>
            </p>
          )}
          {user.twitter && (
            <p>
              <a href={user.twitter_url!}>
                {simplifyLink(user.twitter_url!)} <FiLink />
              </a>
            </p>
          )}
          {user.linkedin && (
            <p>
              <a href={user.linkedin_url!}>
                {simplifyLink(user.linkedin_url!)} <FiLink />
              </a>
            </p>
          )}
          {user.work_information && <p>{user.work_information}</p>}
          {user.company && <p>{user.company}</p>}
          {user.location && <p>{user.location}</p>}
        </header>
        <main>{user.bio}</main>
        <footer>
          <a href={user.web_url} className={styles.readMore}>
            <FiExternalLink />
            Read more
          </a>
        </footer>
      </div>
    </div>
  );
}

function normalizeLink(link: string | null): string | null {
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

export default Gitlab;
