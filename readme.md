# JumpServ
> A tool to jump to a directory and start a simple node server

## Install
```
$ npm install --global jumpserv
```

## Usage
```
// First time
$ jumpserv

// You will be asked a couple of questions, like:
1. Enter the dir where your repos lie (Do not use ~/ syntax, needs the full dir structure)
/Users/ExampleUser/Developer/

// After this your preferences will be generated, encrypted, and stored on your disk

// Second time
jumpserv newAwesomeProject

Jumping to /Users/ExampleUser/Developer/newAwesomeProject
Server listening on port: 8000

You should now be able to open up localhost:8000 and see your index.html.

```
