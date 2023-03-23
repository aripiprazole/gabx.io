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

import Document, {Head, Html, Main, NextScript} from 'next/document';
import {ABOUT_ME} from '~/utils/constants';

class AppDocument extends Document {
  public render(): JSX.Element {
    return (
      <Html lang='en-US'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&display=swap'
            rel='stylesheet'
          />
          <meta name='description' content={ABOUT_ME} />
          <meta property='og:title' content={"Hi, I'm Gabi! 👋"} />
          <meta property='og:description' content={ABOUT_ME} />
          <meta
            property='og:image'
            content='https://raw.githubusercontent.com/aripiprazole/aripiprazole/main/profile.png'
          />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='1200' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
