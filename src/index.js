const REDIRECT_URL = 'https://coliven.com/events/c25ab192e5ec';

const REDIRECT_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0;url=${REDIRECT_URL}">
  <link rel="canonical" href="${REDIRECT_URL}">
  <title>Redirecting…</title>
</head>
<body>
  <p>Redirecting to <a href="${REDIRECT_URL}">${REDIRECT_URL}</a></p>
  <script>window.location.replace("${REDIRECT_URL}");</script>
</body>
</html>`;

export default {
  async fetch(request, env, ctx) {
    // Always redirect — HTML meta + JS fallback
    return new Response(REDIRECT_HTML, {
      status: 301,
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Location': REDIRECT_URL,
      },
    });
  }
};
