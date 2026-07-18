// Woodoo live endpoints.
// LOCAL viewing (your own machine): the localhost defaults below work as-is.
// PUBLIC hosting (GitHub Pages): the live cam / map / data come from YOUR machine, so replace
// these with the public HTTPS URLs from your Cloudflare Tunnel — otherwise visitors see nothing
// (their browser's "localhost" is their own computer). Chat + guestbook use Supabase and always work.
window.WOODOO = {
    cam: 'http://localhost:3007',
    map: 'http://localhost:8123/index.html?v=5&worldname=world&mapname=surface&zoom=5&x=0&y=88&z=0',
    data: 'woodoo-live.json'

    // After the tunnel is up, use your public HTTPS URLs, e.g.:
    // cam:  'https://cam.woodoo.xyz',
    // map:  'https://map.woodoo.xyz/index.html?v=5&worldname=world&mapname=surface&zoom=5&x=0&y=88&z=0',
    // data: 'https://data.woodoo.xyz/woodoo-live.json'
};
