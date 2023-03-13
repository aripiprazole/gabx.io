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
import {FiExternalLink} from 'react-icons/fi';
import axios from 'axios';

import styles from '~/styles/ui/Psychonaut.module.scss';

type Props = {
  username: string;
};

function Psychonaut(props: Props) {
  const {username} = props;

  const [substance, setSubstance] = useState<Substance | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function handleFetchPsychonaut() {
      try {
        const name = capitalize(username);
        const response = await axios.post('https://api.psychonautwiki.org/', {
          query: FIND_SUBSTANCES_QUERY,
          variables: {
            name: username,
          },
        });

        const [substance]: [Substance] = response.data.data.substances;
        substance.picture =
          pictures[username.toLowerCase()] ??
          `https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/${name}_structure.svg/512px-${name}_structure.svg.png`;
        substance.commonNames = substance.commonNames ?? [];
        substance.class = {
          chemical: substance.class.chemical ?? [],
          psychoactive: substance.class.psychoactive ?? [],
        };
        substance.roas = substance.roas ?? [];
        substance.tolerance = substance.tolerance ?? {
          full: substance.tolerance ?? null,
          half: substance.tolerance ?? null,
          zero: substance.tolerance ?? null,
        };
        setSubstance(substance);
      } catch (error) {
        console.error(error);
        setError(error as any);
      } finally {
        setLoading(false);
      }
    }

    handleFetchPsychonaut().then();
  }, []);

  if (loading) return null;
  if (error) return null;
  if (!substance) return null;

  return (
    <div className={styles.content}>
      <div className={styles.info}>
        <header>
          <h3>{substance.name}</h3>
          <ul className={styles.commonNames}>
            {substance.commonNames.slice(0, 4).map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
          <ul className={styles.classes}>
            {substance.class.chemical
              .concat(substance.class.psychoactive)
              .map((name) => (
                <li key={name}>{name}</li>
              ))}
          </ul>
          <ul className={styles.roas}>
            {substance.roas.map(({name, dose}) => (
              <li key={name}>
                {capitalize(name)} {dose?.common?.min}-{dose?.common?.max}
                {dose?.units}
              </li>
            ))}
          </ul>
          {substance.tolerance.full && (
            <p>Tolerance: {substance.tolerance.full}</p>
          )}
        </header>
        <main>{substance.summary}</main>
        <footer>
          <a href={substance.url} className={styles.readMore}>
            <FiExternalLink />
            Read more
          </a>
        </footer>
      </div>
      <img src={substance.picture} alt={substance.name} />
    </div>
  );
}

type Roas = {
  name: string;
  bioavailability: {
    min: number;
    max: number;
  };
  dose: {
    units: string;
    common: {min: number; max: number};
    light: {min: number; max: number};
    strong: {min: number; max: number};
  };
};

type Substance = {
  name: string;
  commonNames: string[];
  summary: string;
  url: string;
  picture: string;
  class: {
    chemical: string[];
    psychoactive: string[];
  };
  tolerance: {
    full: string;
    half: string;
    zero: string;
  };
  roas: Roas[];
};

const FIND_SUBSTANCES_QUERY = `
  query FindSubstancesQuery($name: String!) {
    substances(query: $name) {
      name
      summary
      commonNames
      url
      class {
        chemical
        psychoactive
      }
      tolerance {
        full
        half
        zero
      }
      roas {
        name
        bioavailability { min max }
        dose {
          units
          threshold
          heavy
          common { min max }
          light { min max }
          strong { min max }
        }
      }
    }
  }
`;

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const pictures: Record<string, string> = {
  aripiprazole:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Aripiprazole.svg/512px-Aripiprazole.svg.png?20151210102538',
};

export default Psychonaut;
