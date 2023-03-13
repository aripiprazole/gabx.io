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

import React, {
  Children,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  const screen = useMediaQuery('screen');

  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const items = Children.toArray(props.children)
    .filter((node: any) => Boolean(node.type) && Boolean(node.props))
    .filter((node: any) => node.type.name === 'PopoverItems')
    .flatMap((node: any) => Children.toArray(node.props.children));

  const computedItems = items
    .flatMap((node: any) => node?.props?.children ?? [node])
    .filter((node) => node);

  const children = Children.toArray(props.children).filter(
    (node: any) => node.type.name !== 'PopoverItems',
  );

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
          className={clsx(styles.popover, open && styles.open)}
        >
          <div ref={ref} className={styles.arrow} />
          {screen &&
            items.map((item, i) => (
              <span key={i}>
                {item}
                {computedItems.length > 1 && i !== computedItems.length - 1 && (
                  <span className={styles.divider} />
                )}
              </span>
            ))}
        </div>
      )}
    </div>
  );
}

export function PopoverItems(_props: PropsWithChildren) {
  return null;
}

Popover.Items = PopoverItems;

export default Popover;
