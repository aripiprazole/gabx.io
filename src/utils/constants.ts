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

import {
  FiBook,
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiCpu,
  FiStar,
} from 'react-icons/fi';
import {TbBrandMedium} from 'react-icons/tb';
import {GiChemicalDrop} from 'react-icons/gi';
import {BsBlockquoteLeft} from 'react-icons/bs';

import Github from '~/ui/Github';
import Gitlab from '~/ui/Gitlab';
import Wynncraft from '~/ui/Wynncraft';
import Psychonaut from '~/ui/Psychonaut';

import WynncraftIcon from '~/assets/WynncraftIcon';
import LambdaIcon from '~/assets/LambdaIcon';
import BlueSkyIcon from '~/assets/BlueSkyIcon';

export const ABOUT_ME =
  'My name is Gabrielle and I am a 17-year-old ' +
  'software engineer with a passion for functional programming ' +
  'and the Kotlin programming language. In my free time, I enjoy ' +
  'playing Minecraft and working on projects related to compilers. ' +
  'I am excited to share my skills and experience with others in the field.';

export const ABOUT_WORK =
  'I specialize in web site and ' +
  'working with the Minecraft protocol. With years of experience ' +
  'in software development, I have a passion for creating efficient ' +
  "and reliable tools for programming and game development. Let's " +
  'bring your ideas to life!';

export const ABOUT_PROJECTS =
  "I'm passionate about compilers, type " +
  'theory, the Minecraft protocol, and Hindley Milner! These topics ' +
  'perfectly blend my love for programming and problem-solving. Compilers ' +
  'transform code into machine code, while Hindley Milner adds elegance ' +
  'and safety to the process. Tinkering with the Minecraft protocol to ' +
  'optimize and customize gameplay is a joy. I love pushing the boundaries ' +
  'of programming and seeking new challenges!';

export const MOMENTUM_EASE = 0.175;

export const MEDICATIONS = [
  ['aripiprazole'],
  ['atomoxetine'],
  ['lurasidone'],
  ['oestradiol'],
  ['perospirone'],
  ['algebraic-sofia', 'algebraic-sofia'],
];

export const PROJECTS = [
  {
    title: 'Plank',
    description:
      'A functional programming language with a focus on ' +
      'simplicity and ease of use. Plank is a statically typed language ' +
      'with a syntax similar to Kotlin, and a compiler written in Kotlin...',
    href: 'https://github.com/aripiprazole/plank',
    icon: LambdaIcon,
  },
  {
    title: 'Trazodone',
    description:
      'A LLVM backend for HVM that runs just-in-time ' +
      'compilation, and abstract the codegen into multiple steps ' +
      'to be easy to generate LLVM, Rust, or any target, ' +
      'and has a built-in evaluator...',
    href: 'https://github.com/aripiprazole/trazodone',
    icon: LambdaIcon,
  },
  {
    title: 'Asena',
    description:
      'Incremental/single-pass based compiler,' +
      'the API can be either used for Single-Pass Compiling' +
      'and for building LSP, or' +
      'things that would need incremental pipelines. ' +
      'Its a study project of mine for studying ' +
      'incremental compilers and package-managers...',
    href: 'https://github.com/aripiprazole/asena',
    icon: LambdaIcon,
  },
  {
    title: 'Lura',
    description:
      'The Lura compiler is the continuation of Asena, ' +
      'it aims an incremental and query-based compiler ' +
      'with focus in a new tooling toolkit.',
    href: 'https://lurasidone.vercel.app',
    icon: LambdaIcon,
  },
  {
    title: 'Andesite',
    description:
      'A library for Minecraft protocol development that ' +
      'makes easier to develop servers and stuff directly with ' +
      'the protocol, like a minecraft server with void, ' +
      'or even a proxy...',
    href: 'https://github.com/aripiprazole/andesite',
    icon: FiBook,
  },
  {
    title: 'Bupropion',
    description:
      'Bupropion is a library based on Miette error handling that ' +
      'provides a way to handle errors in a functional way, ' +
      'and it is very similar to Rust error handling and Ariadne too. ' +
      'It is a beautiful way to present your errors...',
    href: 'https://crates.io/crates/bupropion',
    icon: FiStar,
  },
];

export const SOCIAL = [
  {
    brand: 'linkedin',
    href: 'https://www.linkedin.com/in/aripiprazole',
    username: 'aripiprazole',
    icon: FiLinkedin,
    preview: [],
  },
  {
    brand: 'medium',
    href: 'https://aripiprazole.medium.com',
    username: 'aripiprazole',
    icon: TbBrandMedium,
    preview: [],
  },
  {
    brand: 'github',
    href: 'https://github.com/aripiprazole',
    username: 'aripiprazole',
    icon: FiGithub,
    preview: [Github],
  },
  {
    brand: 'lurasidone',
    href: 'https://gitlab.com/lurasidone',
    username: 'lurasidone',
    icon: FiGitlab,
    preview: [Gitlab],
  },
  {
    brand: 'instagram',
    href: 'https://instagram.com/io.gabx',
    username: 'io.gabx',
    icon: FiInstagram,
    preview: [],
  },
  {
    brand: 'twitter',
    href: 'https://twitter.com/io_gabx',
    username: 'io_gabx',
    icon: FiTwitter,
    preview: [],
  },
  {
    brand: 'wynncraft',
    href: 'https://wynncraft.com/stats/player/Brexpiprazole',
    username: 'Brexpiprazole',
    icon: WynncraftIcon,
    preview: [Wynncraft],
  },
  {
    brand: 'psychonaut',
    href: 'https://en.wikipedia.org/wiki/Aripiprazole',
    username: 'Aripiprazole',
    icon: GiChemicalDrop,
    preview: [Psychonaut],
  },
  {
    brand: 'bluesky',
    href: 'https://bsky.app/profile/aripiprazole.dev',
    username: 'aripiprazole.dev',
    icon: BlueSkyIcon,
    preview: [],
  },
];

export const ARTICLES = [
  {
    title: 'Writing a Minecraft Protocol implementation in Kotlin',
    description:
      'A Minecraft Server/Protocol project is very cool ' +
      'to practice concurrency, and tooling stuff, which is very cool ' +
      'and useful nowadays...',
    href: 'https://medium.com/@gabrielleeg1/writing-a-minecraft-protocol-implementation-in-kotlin-9276c584bd42',
    icon: FiBook,
  },
  {
    title: 'Defunctionalization',
    description:
      'Defunctionalization is a way to transform higher-order ' +
      'functions in closures, that can be compiled in a lower level ' +
      'like LLVM, C, or even directly on Machine Code. For this task, ' +
      'we can use Closure...',
    href: 'https://aripiprazole.medium.com/defunctionalization-5fd03b21813e',
    icon: LambdaIcon,
  },
  {
    title: 'Rebasing old commits for trans people',
    description:
      'Hello, my name is Gabrielle, and I’m a transgender person, ' +
      'so it does mean that I changed my name, so here I want ' +
      'to present some techniques to rebase your old commits into ' +
      'new ones with your real name...',
    href: 'https://aripiprazole.medium.com/rebasing-old-commits-for-trans-people-3740d1bc1157',
    icon: BsBlockquoteLeft,
  },
  {
    title: 'Writing an Equation Solver',
    description:
      'Writing an Equation Solver is a process that is made of: parsing, ' +
      'equating/unifying and rewriting.' +
      'It is a powerful project that allows us to learn more about logic ' +
      'and functional programming.',
    href: 'https://github.com/aripiprazole/eq',
    icon: FiCpu,
  },
  {
    title:
      'Driving Complete and Easy Bidirectional Typechecking ' +
      'for Higher-Rank Polymorphism in Rust ',
    description:
      'The main goal of this article is making some comments about ' +
      'mb64 implementation of the Complete and Easy.. paper, ' +
      'but implementing it in pure rust code, and some optimizations, ' +
      'like de bruijin levels and indexes!',
    href: 'https://dev.to/aripiprazole/driving-complete-and-easy-bidirectional-typechecking-for-higher-rank-polymorphism-in-rust-4856',
    icon: LambdaIcon,
  },
  {
    title: ' GADT-like types in Rust',
    description:
      'I think that GADTs are a very powerful feature of Haskell, ' +
      'and I would like to' +
      'have something similar in Rust. I think this is the closest' +
      'thing to GADTs in Rust.',
    href: 'https://dev.to/aripiprazole/gadt-like-types-in-rust-4hcp',
    icon: LambdaIcon,
  },
  {
    title: 'Writing Haskell in Kotlin',
    description:
      'Talks about implementing a Haskell-like interpreter in Kotlin. ' +
      'That comes from writing the parser, type system, context resolving to ' +
      'the interpreter. The goal of this article, is to show a short ' +
      'introduction to compilers... (STILL INCOMPLETE)',
    href: 'https://github.com/aripiprazole/ekko/tree/main/docs',
    icon: LambdaIcon,
  },
];
