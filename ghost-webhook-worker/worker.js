export default {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405 });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/webhook") {
      return new Response("Not found", { status: 404 });
    }

    // Validate shared secret from query parameter
    const secret = url.searchParams.get("secret");
    if (!secret || secret !== env.WEBHOOK_SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Trigger GitHub Actions repository_dispatch
    const response = await fetch(
      "https://api.github.com/repos/ASHUTOSH2224/ionova/dispatches",
      {
        method: "POST",
        headers: {
          Accept: "application/vnd.github.v3+json",
          Authorization: `Bearer ${env.GITHUB_TOKEN}`,
          "User-Agent": "ghost-webhook-worker",
        },
        body: JSON.stringify({
          event_type: "ghost-publish",
          client_payload: {
            timestamp: new Date().toISOString(),
          },
        }),
      }
    );

    if (response.status === 204) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const error = await response.text();
    return new Response(
      JSON.stringify({ ok: false, status: response.status, error }),
      {
        status: 502,
        headers: { "Content-Type": "application/json" },
      }
    );
  },
};
