# Simple jest project

## What it does
* Just a simple project that shows how testing with jest can be implemented

### Setup
install necessary dependancies
* npm i 

running the tests
* npm test (run all the tests)
* npm run testwatch (continuously test when modifying files)
NOTE: in case you are using linux, you might be running into this error:
``` ENOSPC: System limit for number of file watchers reached
fix it by running this in the terminal:
``` echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
