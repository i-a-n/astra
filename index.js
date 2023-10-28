import path from "path";

const PORT = 6969;
const PATH_TO_WEB_APP_WITH_TRAILING_SLASH = "./web-app/";

Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/")
      return new Response(
        Bun.file(PATH_TO_WEB_APP_WITH_TRAILING_SLASH + "index.html")
      );

    if (
      url.pathname &&
      Bun.file(
        PATH_TO_WEB_APP_WITH_TRAILING_SLASH + path.normalize(url.pathname)
      ).size > 0
    ) {
      return new Response(
        Bun.file(
          PATH_TO_WEB_APP_WITH_TRAILING_SLASH + path.normalize(url.pathname)
        )
      );
    }

    return new Response("404, file not found");
  },
});

console.log("your react app is running on port " + PORT);
console.log("do not use this web server in a production environment");
