# ASTRA - [a](#astra---aggressively-simple-template-for-react-apps)ggressively [s](#astra---aggressively-simple-template-for-react-apps)imple [t](#astra---aggressively-simple-template-for-react-apps)emplate for [r](#astra---aggressively-simple-template-for-react-apps)eact [a](#astra---aggressively-simple-template-for-react-apps)pps

- [quick start guide](#quick-start-guide)
- [philosophy](#philosophy)
- [gratuitous, borderline-propaganda comparisons](#gratuitous-borderline-propaganda-comparisons)
- [contributing/roadmap](#contributingroadmap)

ASTRA helps you create a react app with the smallest amount of work possible. it is written in [bun](https://bun.sh). here is a list of things it will not do for you:

- it won't lint your code for you
- it won't reload your browser when you edit a file
- it doesn't come with any routing libraries
- it doesn't come with any special CSS flavors or tools
- it isn't set up to do server-side rendering

(the good news is: you can add any of these things yourself when you're ready.)

here is a list of things ASTRA _will_ do for you:

1. build your TypeScript/JSX/plain JavaScript React app, so you can view it locally and then host it anywhere
2. run a simple server so you can host it locally if you want (this part is optional)

that's it. as a result, here are some things you will never ever have to worry about if you don't want to:

- no babel
- no jest
- no webpack
- no bundler packages of any kind actually
- no expressjs
- no css-loaders
- no loaders of any kind: non-javascript files are just treated as files
- no react-router

you can get an idea of just how aggressively simple this library is by looking at its `package.json` dependencies:

```
"dependencies": {
  "bun": "1.0.7",
  "react": "18.2.0",
  "react-dom": "18.2.0"
},
```

the end.

### quick start guide

step one: clone or fork this repository

```
git clone https://github.com/i-a-n/astra.git
```

step two: install bun and react

```
npm install
```

...or if you [already have bun installed](https://bun.sh/docs/installation) on your machine:

```
bun install
```

step three: make your react app however you want to

> hint: add & edit files in the `./source-code/` directory. they can be typescript or javascript and can include JSX. just make a react app and keep `index.jsx` as the name of root file (there's a placeholder there you probably won't have to edit).

> hint: add & edit files in the `./web-app/` directory if you want images or CSS or any other kinds of files to be available.

step four: build the app

```
npm run build-the-app
```

...or if you have bun installed on your machine:

```
bun run build-the-app
```

step five: you're done! go look at your new React app in a web browser:

```
file:///path/to/your/repository/astra/web-app/index.html
```

at this point you could simply copy the contents of your `web-app` directory to a web server of your choice and—get this!—you'll have a real, live react app ready to be served to the public. it really can be that simple my friends.

step six (optional): run your build in `watch` mode so when you edit files it will rebuild your app immediately.

```
npm run watch-the-app
```

note: after you make a code change, you will have to hit refresh in your browser to see your new code. my very deepest apologies for this inconvenience.

step seven (also optional): serve your build for developing locally

```
npm run serve-for-development
```

now you can view it at `http://localhost:6969`. I once again apologize: you'll need to open your own web browser of choice and enter that URL into the bar yourself.

### philosophy

ASTRA exists because the javascript front end ecosystem has become so ferociously complex (often for good reasons, in fairness) that standing up simple apps, proofs-of-concepts, etc, has become too difficult.

beginners will like ASTRA because it lets them just make a react app very quickly, and without having to worry about forty thousand things.

experts will like ASTRA because it's so un-opinionated they can add things like routing and CSS loading exactly how they want them configured, without having to worry about choices other people have made, or anything they don't want bloating the app.

mid-level developers might not have much use for ASTRA. that's perfectly fine. as we say here in australia, "no need to shear every jumbuck at the station" (I'm not from australia and no one says that there).

### gratuitous, borderline-propaganda comparisons

_number of dependencies in default app's node_modules directory_

| tool/framework               | number of dependencies |
| ---------------------------- | ---------------------- |
| create-react-app             | 852                    |
| next.js                      | 300                    |
| vite                         | 146                    |
| aggressively simple template | **11** 🎉              |

_time it takes to build default app (on my mbp)_

| tool/framework               | build time  |
| ---------------------------- | ----------- |
| create-react-app             | 5,380ms     |
| next.js                      | 7,020ms     |
| vite                         | 327ms       |
| aggressively simple template | **18ms** 🎉 |

_default web port_

| tool/framework               | default web port |
| ---------------------------- | ---------------- |
| create-react-app             | 3000             |
| next.js                      | 3000             |
| vite                         | 5137             |
| aggressively simple template | **6969** 🎉      |

### contributing/roadmap

I'd welcome any discussions or suggestions, however I must warn you I intend to keep this library true to its name: new features are heavily discouraged, and I aim for there to never be a breaking change of any kind or to update the documentation significantly.

one area I'd like to consider exploring is collecting a shitload of "recipes", in which adding simple things like routing or environment variable injection or server-side rendering, etc, are explained in step-by-step instructions.

these should also be aggressively simple.

made by ian, ([@union.io](https://bsky.app/profile/union.io) on bluesky)
