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
import clsx from 'clsx';

import useMediaQuery from '~/utils/useMediaQuery';

import styles from '~/styles/ui/Popover.module.scss';

type Props = {
  arrowRef?: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
};

function Popover(props: Props) {
  const {arrowRef} = props;

  const isMobile = useMediaQuery('(max-width: 768px)');

  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const items = React.Children.toArray(props.children)
    .filter((node) => Boolean(node))
    .filter((node: any) => node.type === PopoverItems);

  const children = React.Children.toArray(props.children)
    .filter((node) => Boolean(node))
    .filter((node: any) => node.type !== PopoverItems);

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
      className={styles.container}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      {!isMobile && items.length > 0 && (
        <div
          ref={containerRef}
          className={clsx(styles.popover, !open && styles.closed)}
        >
          <div ref={ref} className={styles.arrow} />
          {items.map((item) => item)}
        </div>
      )}
    </div>
  );
}

type PopoverItemsProps = {
  children: React.ReactNode;
};

export function PopoverItems(props: PopoverItemsProps) {
  const {children} = props;

  return <>{children}</>;
}

export default Popover;
