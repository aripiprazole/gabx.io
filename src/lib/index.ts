type Project = {
  title: string;
  description: string;
  href: string;
};

type Article = {
  title: string;
  description: string;
  href: string;
};

export const momentumEase = 0.175;

export const medications: string[][] = [
  ['aripiprazole'],
  ['atomoxetine'],
  ['lurasidone'],
  ['oestradiol'],
  ['perospirone'],
  ['algebraic-sofia', 'algebraic-sofia'],
];

export const projects: Project[] = [
  {
    title: 'Plank',
    description:
      'A functional programming language with a focus on ' +
      'simplicity and ease of use. Plank is a statically typed language ' +
      'with a syntax similar to Kotlin, and a compiler written in Kotlin...',
    href: 'https://github.com/aripiprazole/plank',
  },
  {
    title: 'Trazodone',
    description:
      'A LLVM backend for HVM that runs just-in-time ' +
      'compilation, and abstract the codegen into multiple steps ' +
      'to be easy to generate LLVM, Rust, or any target, ' +
      'and has a built-in evaluator...',
    href: 'https://github.com/aripiprazole/trazodone',
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
  },
  {
    title: 'Lura',
    description:
      'The Lura compiler is the continuation of Asena, ' +
      'it aims an incremental and query-based compiler ' +
      'with focus in a new tooling toolkit.',
    href: 'https://lurasidone.gabx.io',
  },
  {
    title: 'Andesite',
    description:
      'A library for Minecraft protocol development that ' +
      'makes easier to develop servers and stuff directly with ' +
      'the protocol, like a minecraft server with void, ' +
      'or even a proxy...',
    href: 'https://github.com/aripiprazole/andesite',
  },
  {
    title: 'Bupropion',
    description:
      'Bupropion is a library based on Miette error handling that ' +
      'provides a way to handle errors in a functional way, ' +
      'and it is very similar to Rust error handling and Ariadne too. ' +
      'It is a beautiful way to present your errors...',
    href: 'https://crates.io/crates/bupropion',
  },
];

export const SOCIAL = [
  {
    brand: 'linkedin',
    href: 'https://www.linkedin.com/in/aripiprazole',
    username: 'aripiprazole',
    preview: [],
  },
  {
    brand: 'medium',
    href: 'https://aripiprazole.medium.com',
    username: 'aripiprazole',
    preview: [],
  },
  {
    brand: 'github',
    href: 'https://github.com/aripiprazole',
    username: 'aripiprazole',
  },
  {
    brand: 'lurasidone',
    href: 'https://gitlab.com/lurasidone',
    username: 'lurasidone',
  },
  {
    brand: 'instagram',
    href: 'https://instagram.com/io.gabx',
    username: 'io.gabx',
    preview: [],
  },
  {
    brand: 'twitter',
    href: 'https://twitter.com/io_gabx',
    username: 'io_gabx',
    preview: [],
  },
  {
    brand: 'wynncraft',
    href: 'https://wynncraft.com/stats/player/Brexpiprazole',
    username: 'Brexpiprazole',
  },
  {
    brand: 'psychonaut',
    href: 'https://en.wikipedia.org/wiki/Aripiprazole',
    username: 'Aripiprazole',
  },
  {
    brand: 'bluesky',
    href: 'https://bsky.app/profile/aripiprazole.dev',
    username: 'aripiprazole.dev',
    preview: [],
  },
];

export const articles: Article[] = [
  {
    title: 'Writing a Minecraft Protocol implementation in Kotlin',
    description:
      'A Minecraft Server/Protocol project is very cool ' +
      'to practice concurrency, and tooling stuff, which is very cool ' +
      'and useful nowadays...',
    href: 'https://medium.com/@gabrielleeg1/writing-a-minecraft-protocol-implementation-in-kotlin-9276c584bd42',
  },
  {
    title: 'Defunctionalization',
    description:
      'Defunctionalization is a way to transform higher-order ' +
      'functions in closures, that can be compiled in a lower level ' +
      'like LLVM, C, or even directly on Machine Code. For this task, ' +
      'we can use Closure...',
    href: 'https://aripiprazole.medium.com/defunctionalization-5fd03b21813e',
  },
  {
    title: 'Rebasing old commits for trans people',
    description:
      'Hello, my name is Gabrielle, and I’m a transgender person, ' +
      'so it does mean that I changed my name, so here I want ' +
      'to present some techniques to rebase your old commits into ' +
      'new ones with your real name...',
    href: 'https://aripiprazole.medium.com/rebasing-old-commits-for-trans-people-3740d1bc1157',
  },
  {
    title: 'Writing an Equation Solver',
    description:
      'Writing an Equation Solver is a process that is made of: parsing, ' +
      'equating/unifying and rewriting.' +
      'It is a powerful project that allows us to learn more about logic ' +
      'and functional programming.',
    href: 'https://github.com/aripiprazole/eq',
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
  },
  {
    title: ' GADT-like types in Rust',
    description:
      'I think that GADTs are a very powerful feature of Haskell, ' +
      'and I would like to' +
      'have something similar in Rust. I think this is the closest' +
      'thing to GADTs in Rust.',
    href: 'https://dev.to/aripiprazole/gadt-like-types-in-rust-4hcp',
  },
  {
    title: 'Writing Haskell in Kotlin',
    description:
      'Talks about implementing a Haskell-like interpreter in Kotlin. ' +
      'That comes from writing the parser, type system, context resolving to ' +
      'the interpreter. The goal of this article, is to show a short ' +
      'introduction to compilers... (STILL INCOMPLETE)',
    href: 'https://github.com/aripiprazole/ekko/tree/main/docs',
  },
];
