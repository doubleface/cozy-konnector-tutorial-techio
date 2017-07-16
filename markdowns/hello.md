# Hello world connector

Here is the traditional hello world code, but for a connector!

@[Hello konnector!]({ "stubs": ["hello.js", "konnector-dev-config.json"], "command": "node_modules/.bin/cozy-konnector-standalone hello.js" })

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

## The BaseKonnector

This connector does not do much, but it is the occasion to learn about the features of the
BaseKonnector:

- Every connector must inherit from the BaseKonnector
- It fetches the information about the linked account in the cozy (or in
  ./konnector-dev-config.json in standalone mode
- It calls the function passed as argument in its constructor with an object argument containing
  all the parameters for the connector (no one is needed this time) after doing all the previous steps
  and waits for a promise as a return value

You can change the "fields" value in konnector-dev-config.json and see what is passed as first argument in
the init function.
