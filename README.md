# Woodoo

**Woodoo is an autonomous AI that designs and builds an entire city, block by block, on a live Minecraft world that never resets.** It decides for itself what to build, designs each structure, and places every block. It runs 24/7, never idles, reclaims land from the sea as it expands, and builds neighborhoods with real character — downtown skyscrapers, brownstones, villa suburbs, school campuses, stadiums, hillside homes, parks and monument plazas.

The whole thing is streamed live on a retro‑90s website: a live cam, a top‑down world map, a real‑time data dashboard, an event feed, and a shared realtime chat room + guestbook.

---

## Repository layout

```
.
├── index.html          # entry / story page  (the domain root → click ENTER → home)
├── story.html          # the full origin story
├── style.css           # entry-page styles
├── Woodoo.png          # logo / favicon
├── badges/             # entry-page badges (88x31s + socials)
├── home/               # the live homepage (what ENTER opens)
│   ├── index.html      #   live cam · map · chat · data · devlog · guide · guestbook
│   ├── config.js       #   ← live endpoints (localhost by default; tunnel URLs in production)
│   ├── style.css
│   ├── javascript/     #   woodoodata.js (charts+feed) · woodoochat.js · guestbook.js · …
│   └── graphics/       #   retro assets
└── bot/                # the AI builder that runs on the host machine
    ├── bot.js
    ├── package.json
    └── ai.config.example.json   # copy → ai.config.json and fill in (gitignored)
```

## How it fits together

| Piece            | Where it runs                      | Public to visitors?                          |
| ---------------- | ---------------------------------- | -------------------------------------------- |
| Frontend         | GitHub Pages (static)              | Yes                                          |
| Chat + guestbook | Supabase (cloud)                   | **Yes — works for everyone out of the box**  |
| Live cam         | `localhost:3007` on the host PC    | Only via a tunnel (see below)                |
| World map        | `localhost:8123` (dynmap)          | Only via a tunnel                            |
| Live data JSON   | written by the bot on the host PC  | Only via a tunnel                            |
| Minecraft server + bot | the host PC (must stay on)   | —                                            |

**GitHub Pages can only host the static frontend.** The live cam, map and data come from the
host machine, so for visitors to see the stream those services must be exposed over the internet
as **public HTTPS URLs**. `home/config.js` is where you point them.

## Running locally

1. **Minecraft server** (Paper) with RCON + the dynmap plugin (web map on `:8123`).
2. **The bot:**
   ```bash
   cd bot
   npm install
   cp ai.config.example.json ai.config.json   # fill in your OpenAI-compatible endpoint + key
   npm start
   ```
   The bot connects to the server, streams a live cam on `:3007`, builds the city, and writes
   `home/woodoo-live.json` for the dashboard/feed.
3. **Serve the site** (any static server) and open the entry page.

## Deploying (public, 24/7)

1. Host this repo on **GitHub Pages** (the frontend).
2. Keep the host PC running the Minecraft server + bot.
3. Expose the host's live services with a **Cloudflare Tunnel** (free, HTTPS, supports the
   live-cam websocket):
   - `cam`  → `localhost:3007`
   - `map`  → `localhost:8123`
   - `data` → the static server that serves `woodoo-live.json`
4. Put those public HTTPS URLs into **`home/config.js`** and commit. Visitors now see the live
   stream from anywhere; chat + guestbook already run on Supabase.

## Notes

- `bot/ai.config.json` (the AI key) is **gitignored** — never commit it.
- Chat + guestbook use a public Supabase project; the anon key in the frontend JS is safe to
  publish (row-level security allows only read + insert).
