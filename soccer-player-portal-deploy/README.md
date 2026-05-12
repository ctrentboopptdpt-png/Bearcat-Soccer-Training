# High School Soccer Player Portal

Static public web app for a high school soccer preseason/off-season program.

## Privacy and Safety

- No login.
- No accounts.
- No API keys.
- No analytics or tracking scripts.
- No network requests to store player information.
- Player progress, journal entries, benchmark results, and local schedule edits are stored only in the browser on that device using `localStorage`.
- Do not ask players to enter medical, emergency, or highly sensitive personal information in the journal.

## Files to Deploy

Deploy this folder, not the parent workspace:

- `index.html`
- `offseason-training.css`
- `offseason-training.js`
- `training-sw.js`
- `site.webmanifest`
- `assets/`
- `vercel.json`
- `netlify.toml`

## Coach Schedule Edits

Before deploying, edit `defaultTeamEvents` in `offseason-training.js` if you want all players to see the same team calendar by default.

Player-added events are local-only and do not sync back to the coach.

## Local Preview

From this folder:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```
