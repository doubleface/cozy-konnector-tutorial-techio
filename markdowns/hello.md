# Hello world connector

Here is the traditional hello world code, but for a connector!

@[Hello konnector!]({ "stubs": ["hello.js"], "command": "node_modules/.bin/cozy-konnector-standalone hello.js" })

If you run it, you will the the hello world message in the standard output as a json string. The
cozy stack can interpret those message and this will be usefull later.

If you want to run this connector outside tech.io, this is not hard either provided you have nodejs
6 or better installed (even on windows) :

Create a directory, then run :

```sh
npm init
npm install cozy-konnector-libs
```

Create an `index.js` file in this directory and put code of the connector in it.
Then run :

```sh
node_modules/.bin/cozy-konnector-standalone
```

Your hello world konnector should work!

