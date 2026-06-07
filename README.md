# CrazyStory

CrazyStory is an offline-friendly web party game about building a shared story while trying to uncover the hidden impostor.

Players take turns reading their secret role, adding one sentence to the same story, and trying to sound like they know the secret prompt. At the end of each round, everyone votes for the player who seemed most suspicious. The group scores by finding the impostor, while the impostor scores by escaping the vote, tying the vote, or correctly guessing the secret theme.

## Play Online

Production game: <https://insight-x-lab-technologies.github.io/CrazyStory>

## Features

- Local web gameplay for 3 to 10 players.
- Classic and lightning game modes.
- One or two impostors, depending on group size.
- Secret role reveal flow for pass-and-play sessions.
- Optional story recap by saving each spoken sentence.
- Secret voting, impostor defense, scoring, and historical leaderboard.
- Family and party content modes, custom prompts, twists, and extension packs.
- Multi-device session support for using phones as companion player screens.
- Multiple visual themes, music, sound settings, and installable PWA assets.
- Interface language support for Portuguese, English, and Spanish.

## Local Play

Open `src/index.html` in a browser, or run the local static server:

```bash
./scripts/run.sh
```

By default, the server serves the app from `src` on port `8080`.

## Tests

```bash
node scripts/test-scoring.js
node scripts/test-hygiene.js
node scripts/test-story-recap.js
node scripts/test-content.js
node scripts/test-audio.js
node scripts/test-multidevice.js
node scripts/test-visual.js
```
