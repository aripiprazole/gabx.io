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

export function setTransform(element: HTMLElement, transform: string) {
  const style: any = element.style;
  style.transform = transform;
  style['WebkitTransform'] = transform;
}

export function setStyles(spacer: HTMLElement, container: HTMLElement) {
  container.style.position = 'fixed';
  container.style.left = '0';
  container.style.top = '0';
  container.style.zIndex = '2';
  container.style.width = '100%';
  container.classList.add('active');

  const containerHeight = container.getBoundingClientRect().height;
  spacer.style.height = containerHeight + 'px';
  spacer.style.width = '1px';
  spacer.style.position = 'relative';
}
