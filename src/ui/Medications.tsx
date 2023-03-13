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

import React, {useRef} from 'react';

import {FiLink} from 'react-icons/fi';

import Github from '~/ui/Github';
import Psychonaut from '~/ui/Psychonaut';
import Popover from '~/ui/Popover';

import {MEDICATIONS} from '~/utils/constants';

import styles from '~/styles/ui/Medications.module.scss';

function Medications() {
  return (
    <div className={styles.container}>
      <h3>Meet the other compounds! 🙂</h3>
      {MEDICATIONS.map((medication) => (
        <Substance medication={medication} key={medication} />
      ))}
    </div>
  );
}

type SubstanceProps = {
  medication: string;
};

function Substance(props: SubstanceProps): JSX.Element {
  const {medication} = props;

  const arrowRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.medication}>
      ~
      <div
        ref={arrowRef}
        style={{background: '#fefefe!important'}}
        className={styles.icon}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={medication} src={`/${medication}.png`} />
      </div>
      <Popover arrowRef={arrowRef}>
        <Popover.Items>
          <Psychonaut username={medication} />
          <Github username={medication} />
        </Popover.Items>

        <a href={`https://github.com/${medication}`}>
          {medication}
          <FiLink />
        </a>
      </Popover>
    </div>
  );
}

export default Medications;
