/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "api/_build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"],
  routes(defineRoutes) {
    return defineRoutes(route => {
      route("/logg-inn", "routes/login.tsx")
      route("/oppskrifter", "routes/recipes/index.tsx")
      route("/oppskrifter/:slug", "routes/recipes/$slug.tsx")
    })
  }
};
