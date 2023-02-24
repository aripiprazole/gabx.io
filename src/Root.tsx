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

import React, {useEffect, useRef} from 'react';

import Sidebar from '~/Sidebar';

import {setStyles, setTransform} from '~/utils/momentum';
import {MOMENTUM_EASE} from '~/utils/constants';

import styles from '~/styles/components/Root.module.scss';

type Props = {
  children: React.ReactNode;
};

function Root(props: Props) {
  const {children} = props;

  const spacer = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  let yCurrent = 0;
  let yScroll = 0;
  let animationFrame: number | null = null;

  function animate() {
    const diff = yScroll - yCurrent;
    const delta = Math.abs(diff) < 0.1 ? 0 : diff * MOMENTUM_EASE;
    if (delta) {
      yCurrent += delta;
      yCurrent = parseFloat(yCurrent.toFixed(2));
      animationFrame = requestAnimationFrame(animate);
    } else {
      cancelAnimation();
    }
    setTransform(container.current!, 'translateY(' + -yCurrent + 'px)');
  }

  function cancelAnimation() {
    yCurrent = yScroll;
    cancelAnimationFrame(animationFrame!);
    animationFrame = null;
  }

  function startAnimation() {
    if (animationFrame) return;

    animationFrame = requestAnimationFrame(animate);
  }

  function updateScroll() {
    // noinspection JSDeprecatedSymbols
    yScroll = window.scrollY ?? window.pageYOffset;
    startAnimation();
  }

  function init() {
    // noinspection JSDeprecatedSymbols
    yScroll = window.scrollY || window.pageYOffset;
    yCurrent = yScroll;
    setStyles(spacer.current!, container.current!);
    startAnimation();
  }

  useEffect(() => {
    init();
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  return (
    <>
      <div ref={spacer} />
      <div ref={container}>
        <div className={styles.container}>
          <main className={styles.main}>
            <Sidebar />
            <div className={styles.content}>{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Root;
