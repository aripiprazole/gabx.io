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

import React from 'react';

type Props = any & {
  size: any;
};

function LambdaIcon(props: Props) {
  const {size, ...divProps} = props;

  return (
    <div
      style={{
        width: size ?? '28px',
        height: size ?? '28px',
        display: 'flex',
        fontSize: size ?? '24px',
        fontWeight: 'bolder',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
      }}
      {...divProps}
    >
      <span>λ</span>
    </div>
  );
}

export default LambdaIcon;
