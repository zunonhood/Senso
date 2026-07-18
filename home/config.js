// Woodoo live endpoints.
// These are the PUBLIC HTTPS URLs of the host machine's live services (via Cloudflare Tunnel),
// so visitors anywhere can see the live cam / map / data. Chat + guestbook use Supabase.
//
// NOTE: these are Cloudflare *quick tunnel* URLs — they are temporary and CHANGE every time the
// tunnels restart. For a permanent 24/7 setup, switch to a named tunnel on woodcutleaf.com
// (cam./map./data.woodcutleaf.com) and update the three URLs below.
window.WOODOO = {
    cam: 'https://principle-matches-constitutional-loading.trycloudflare.com',
    map: 'https://assessment-dry-mothers-studios.trycloudflare.com/index.html?v=5&worldname=world&mapname=surface&zoom=5&x=0&y=88&z=0',
    data: 'https://types-peas-marc-outline.trycloudflare.com'
};
