# friendly-time - German Version
[![npm](https://img.shields.io/npm/v/friendly-time-german.svg)](https://www.npmjs.com/package/friendly-time-german)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbram-codes%2Ffriendly-time.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbram-codes%2Ffriendly-time?ref=badge_shield)

Prints human friendly timestamps (eg. just now, 5 minutes ago, 3 days from now) in German.

# Original Version
[GitHub](https://github.com/brams-dev/friendly-time)

## Usage

```javascript
var friendlyTime = require('friendly-time-german');

var now = new Date();
var minutes = new Date(now - (1000 * 60 * 5));
var days = new Date(now + (1000 * 60 * 60 * 24 * 3));

friendlyTime(now); // just now
friendlyTime(minutes); // 5 minutes ago
friendlyTime(days); // 3 days from now
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbram-codes%2Ffriendly-time.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbram-codes%2Ffriendly-time?ref=badge_large)