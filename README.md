# yotsubotnet
A botnet for /r/place. Currently at the service of the greater good.
Don't worry, though, it's not as scary as it sounds.

## Purpose
This allows your /r/place instance (and ONLY that) to be controlled by us (4place). More specifically, your instance will communicate with our master server, asking for a task. Then, the master server will reply with a single tile that the bot will place.

What this means is that it will constantly run and execute what it needs to do, even when you're away or if you're asleep if you leave the tab open. This will **not** steal your credentials or anything like that: if you can't trust us, then that's good! You shouldn't install random scripts just like that. The source code is present in this repository for you to read (and it's less than 50 lines).
<!---
 Currently, the botnet is protecting the main core of the black void, erasing any menace that could threaten its existence.
--->
## Installation
### Chrome
Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en), then install [this script](https://github.com/lc-guy/yotsubotnet/raw/master/yotsubotnet.user.js).

### Firefox
Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/), then install [this script](https://github.com/lc-guy/yotsubotnet/raw/master/yotsubotnet.user.js).

### Other Browsers
I don't know if your browser supports userscripts or not. Search if you can install one, then install [this script](https://github.com/lc-guy/yotsubotnet/raw/master/yotsubotnet.user.js).

## Usage
Simply open this page: [https://www.reddit.com/place?webview=true](https://www.reddit.com/place?webview=true) and leave it open. That's all!

It'll automatically wait until the timer is out, then place a tile and refresh. Rinse and repeat.

## Credits
This was made by the fags over at [4place](https://discord.gg/6v27V9S). Pay us a visit if you want to.
