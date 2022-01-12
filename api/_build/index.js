var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/cato/code/mdk-remix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/styles/styles.css
var styles_default = "/build/_assets/styles-SKCWULOB.css";

// app/firebase/session.server.ts
init_react();
var import_remix2 = __toModule(require_remix());
async function login({ username, password }) {
  throw new Error("Not implemented!");
}
var storage = (0, import_remix2.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    secure: true,
    secrets: ["weee1234weee"],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_remix2.redirect)(`/logg-inn?${searchParams}`);
  }
  return userId;
}
async function getUser(request) {
  return null;
}
async function logout(request) {
  throw new Error("Not implemented!");
}
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// app/components/layout.tsx
init_react();

// app/components/footer.tsx
init_react();
var import_remix3 = __toModule(require_remix());

// app/components/logo.tsx
init_react();
var primary = "#F36A3E";
var secondary = "#FFB30B";
function Logo() {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 81 81",
    version: "1.1",
    className: "inline-block w-8 h-8"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "matrix(0.449977,-0.449977,0.449977,0.449977,-2128.39,1925.9)"
  }, /* @__PURE__ */ React.createElement("g", {
    transform: "matrix(1,0,0,1,3940,-1120.56)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M520,1390.57L560,1390.57L560,1400.57L530,1400.57L530,1420.57L560,1420.57L560,1430.57L520,1430.57L520,1390.57Z",
    style: { fill: primary }
  })), /* @__PURE__ */ React.createElement("g", {
    transform: "matrix(1,0,0,1,3930,-1120.56)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M620,1390.57L620,1430.57L610,1430.57L610,1400.57L590,1400.57L590,1430.57L580,1430.57L580,1390.57L620,1390.57Z",
    style: { fill: primary }
  })), /* @__PURE__ */ React.createElement("g", {
    transform: "matrix(1,0,0,1,3940,-1120.56)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M520,1440.57L560,1440.57L560,1480.57L550,1480.57L550,1450.57L520,1450.57L520,1440.57Z",
    style: { fill: secondary }
  })), /* @__PURE__ */ React.createElement("g", {
    transform: "matrix(1,0,0,1,3930,-1120.56)"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M590,1470.57L610,1470.57L610,1450.57L590,1450.57L590,1470.57ZM580,1440.57L620,1440.57L620,1480.57L580,1480.57L580,1440.57Z",
    style: { fill: primary }
  }))));
}

// app/components/footer.tsx
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "flex flex-col gap-4 items-center py-8 bg-gray-100"
  }, /* @__PURE__ */ React.createElement("section", {
    className: "container mx-auto text-center"
  }, /* @__PURE__ */ React.createElement(Logo, null), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 leading-tight"
  }, "Lorem ipsum dolor amet consectetur, adipisicing elit. Illo maiores iure in vitae iusto fuga ratione?")), /* @__PURE__ */ React.createElement("section", {
    className: "flex gap-8"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, "Om oss"), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, "Hjelp"), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, "Vilk\xE5r")), /* @__PURE__ */ React.createElement("section", {
    className: "text-sm"
  }, "Copyright \xA9 ", /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "ca7o.com"), " ", new Date().getFullYear(), "."));
}

// app/components/header.tsx
init_react();
var import_remix4 = __toModule(require_remix());
function Header({ user }) {
  return /* @__PURE__ */ React.createElement("header", {
    className: "fixed z-50 w-full top-0 flex flex-wrap items-center justify-between h-16 bg-gray-100"
  }, /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation",
    className: "container mx-auto flex"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/",
    title: "Remix",
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(Logo, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4 items-center"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/oppskrifter"
  }, "Oppskrifter"), user ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/admin"
  }, "Admin"), /* @__PURE__ */ React.createElement("span", null, user.displayName), /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Logout"))) : /* @__PURE__ */ React.createElement(import_remix4.Link, {
    to: "/logg-inn"
  }, "Logg inn"))));
}

// app/components/layout.tsx
function Layout({ user, children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "pt-16 overflow-hidden"
  }, /* @__PURE__ */ React.createElement(Header, {
    user
  }), /* @__PURE__ */ React.createElement("main", {
    className: "bg-white py-4"
  }, children), /* @__PURE__ */ React.createElement(Footer, null));
}

// app/components/document.tsx
init_react();
var import_remix5 = __toModule(require_remix());
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix5.Meta, null), /* @__PURE__ */ React.createElement(import_remix5.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-gray-400"
  }, children, /* @__PURE__ */ React.createElement(import_remix5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix5.Scripts, null), /* @__PURE__ */ React.createElement(import_remix5.LiveReload, null)));
}

// route-module:/home/cato/code/mdk-remix/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var loader = async ({ request }) => {
  const user = await getUser(request);
  return user;
};
function App() {
  const user = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, {
    user
  }, /* @__PURE__ */ React.createElement(import_remix6.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  const caught = (0, import_remix6.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message));
}

// route-module:/home/cato/code/mdk-remix/app/routes/recipes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Recipe,
  loader: () => loader2
});
init_react();
var import_remix7 = __toModule(require_remix());
var import_tiny_invariant = __toModule(require("tiny-invariant"));

// app/firebase/recipe-service.ts
init_react();
var RECIPES = [
  {
    id: "1",
    name: "Oppskrift #1"
  },
  {
    id: "2",
    name: "Oppskrift #2"
  },
  {
    id: "3",
    name: "Oppskrift #3"
  }
];
async function getRecipes(take = 10) {
  return RECIPES;
}
async function getRecipe(id, rendered = true) {
  return RECIPES.find((p) => p.id === id);
}

// route-module:/home/cato/code/mdk-remix/app/routes/recipes/$slug.tsx
var loader2 = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.slug, "expected params.slug");
  const recipe = await getRecipe(params.slug);
  if (!recipe) {
    throw new Response(`No recipe found with id = ${params.slug}`, { status: 404 });
  }
  return recipe;
};
function Recipe() {
  const recipe = (0, import_remix7.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "px-4 sm:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto flex flex-col bg-white gap-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative h-vh33"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: `/admin/recipes/${recipe.id}`,
    className: "absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white w-10 h-10 flex items-center justify-center rounded-full"
  }, "Edit"), recipe.image && /* @__PURE__ */ React.createElement("img", {
    className: "container mx-auto object-cover h-vh33 w-full",
    src: recipe.image,
    alt: recipe.name
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-white absolute bottom-0 text-center w-full bg-black bg-opacity-50 py-4"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-white font-serif"
  }, recipe.name))))));
}
function CatchBoundary2() {
  const caught = (0, import_remix7.useCatch)();
  const { slug } = (0, import_remix7.useParams)();
  switch (caught.status) {
    case 404: {
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, 'Fant ingen oppskrift med id: "', slug, '"');
    }
    case 401: {
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, 'Du har ikke tilgang til oppskrift med id: "', slug, '"');
    }
    default: {
      throw new Error(`Ukjent feil: ${caught.status}`);
    }
  }
}
function ErrorBoundary2({ error }) {
  console.error(error);
  const { slug } = (0, import_remix7.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, 'Det skjedde en feil med lasting av oppskrift med id: "', slug, '".');
}

// route-module:/home/cato/code/mdk-remix/app/routes/recipes/index.tsx
var recipes_exports = {};
__export(recipes_exports, {
  default: () => Recipes,
  loader: () => loader3
});
init_react();
var import_remix9 = __toModule(require_remix());

// app/components/recipe-card.tsx
init_react();
var import_remix8 = __toModule(require_remix());
function RecipeCard({ recipe }) {
  return /* @__PURE__ */ React.createElement(import_remix8.Link, {
    to: recipe.id,
    className: "relative rounded-lg overflow-hidden shadow-md hover:shadow-lg"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-full h-64 object-cover",
    src: recipe.image,
    alt: recipe.name
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "absolute right-2 bottom-2 left-2 z-10 text-white uppercase text-center text-base"
  }, recipe.name));
}

// route-module:/home/cato/code/mdk-remix/app/routes/recipes/index.tsx
var loader3 = () => {
  return getRecipes(12);
};
function Recipes() {
  const recipes = (0, import_remix9.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto px-4 sm:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
  }, recipes.map((recipe) => /* @__PURE__ */ React.createElement(RecipeCard, {
    key: recipe.id,
    recipe
  }))));
}

// route-module:/home/cato/code/mdk-remix/app/routes/canvas.tsx
var canvas_exports = {};
__export(canvas_exports, {
  default: () => Canvas
});
init_react();
var import_react = __toModule(require("react"));
var draw = (ctx, frameCount) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  ctx.fill();
};
function Canvas() {
  const canvasRef = import_react.default.useRef(null);
  import_react.default.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    let frameCount = 0;
    let animationFrameId = 0;
    const render = () => {
      frameCount++;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("h1", null, "Hei"), /* @__PURE__ */ import_react.default.createElement("canvas", {
    style: { backgroundColor: "cornflowerblue" },
    ref: canvasRef
  }));
}

// route-module:/home/cato/code/mdk-remix/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader4
});
init_react();
var import_remix10 = __toModule(require_remix());
var action = ({ request }) => logout(request);
var loader4 = () => (0, import_remix10.redirect)("/");

// route-module:/home/cato/code/mdk-remix/app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  loader: () => loader5
});
init_react();
var import_remix11 = __toModule(require_remix());
var loader5 = async ({ request }) => {
  await requireUserId(request);
  return getRecipes(50);
};
function Admin() {
  const recipes = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto flex gap-4"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "border-r border-gray-600 pr-4"
  }, /* @__PURE__ */ React.createElement("h1", null, "Admin"), /* @__PURE__ */ React.createElement("ul", null, recipes.map((recipe) => /* @__PURE__ */ React.createElement("li", {
    key: recipe.id
  }, /* @__PURE__ */ React.createElement(import_remix11.Link, {
    to: `/admin/${recipe.id}`
  }, recipe.name))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(import_remix11.Outlet, null)));
}

// route-module:/home/cato/code/mdk-remix/app/routes/admin/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  default: () => Edit,
  loader: () => loader6
});
init_react();
var import_remix12 = __toModule(require_remix());
var import_tiny_invariant2 = __toModule(require("tiny-invariant"));

// app/components/ui/input.tsx
init_react();
function Input(_a) {
  var _b = _a, { name, label } = _b, rest = __objRest(_b, ["name", "label"]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, label ? /* @__PURE__ */ React.createElement("label", {
    className: "label",
    htmlFor: name
  }, label) : null, /* @__PURE__ */ React.createElement("input", __spreadValues({
    className: "input",
    type: "text",
    id: name,
    name
  }, rest)));
}

// route-module:/home/cato/code/mdk-remix/app/routes/admin/$slug.tsx
var loader6 = async ({ params }) => {
  (0, import_tiny_invariant2.default)(params.slug, "expected params.slug");
  const recipe = await getRecipe(params.slug, false);
  if (!recipe) {
    throw new Response(`No recipe found with id = ${params.slug}`, { status: 404 });
  }
  return recipe;
};
function Edit() {
  const recipe = (0, import_remix12.useLoaderData)();
  const transition = (0, import_remix12.useTransition)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Edit: ", recipe.name), /* @__PURE__ */ React.createElement(import_remix12.Form, {
    method: "post",
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement(Input, {
    name: "name",
    label: "Name",
    value: recipe.name
  }), /* @__PURE__ */ React.createElement(Input, {
    name: "image",
    label: "Image",
    value: recipe.image
  }), /* @__PURE__ */ React.createElement(Input, {
    name: "source",
    label: "Source",
    value: recipe.source
  }), /* @__PURE__ */ React.createElement(Input, {
    name: "time",
    label: "time",
    value: recipe.time
  }), /* @__PURE__ */ React.createElement(Input, {
    name: "type",
    label: "type",
    value: recipe.type
  }), /* @__PURE__ */ React.createElement(Input, {
    name: "tags",
    label: "tags",
    value: recipe.tags
  }), /* @__PURE__ */ React.createElement("label", {
    className: "label",
    htmlFor: "ingredients"
  }, "Ingredients", /* @__PURE__ */ React.createElement("textarea", {
    className: "input h-20",
    id: "ingredients",
    rows: 20,
    name: "ingredients"
  }, recipe.ingredients)), /* @__PURE__ */ React.createElement("button", {
    className: "button-primary",
    type: "submit"
  }, transition.submission ? "Lagrer..." : "Lagre")));
}

// route-module:/home/cato/code/mdk-remix/app/routes/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  default: () => Index
});
init_react();
var import_remix13 = __toModule(require_remix());
function Index() {
  return /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(import_remix13.Link, {
    to: "new"
  }, "Create a new recipe"));
}

// route-module:/home/cato/code/mdk-remix/app/routes/admin/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => NewPost
});
init_react();
var import_remix14 = __toModule(require_remix());
var import_remix15 = __toModule(require_remix());
var import_tiny_invariant3 = __toModule(require("tiny-invariant"));
var action2 = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 1e3));
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant3.default)(typeof title === "string");
  (0, import_tiny_invariant3.default)(typeof slug === "string");
  (0, import_tiny_invariant3.default)(typeof markdown === "string");
  return (0, import_remix15.redirect)("/admin");
};
function NewPost() {
  const errors = (0, import_remix15.useActionData)();
  const transition = (0, import_remix14.useTransition)();
  return /* @__PURE__ */ React.createElement(import_remix15.Form, {
    method: "post",
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement("label", {
    className: "label",
    htmlFor: "title"
  }, "Title:", /* @__PURE__ */ React.createElement("input", {
    className: "input",
    type: "text",
    id: "title",
    name: "title"
  }), (errors == null ? void 0 : errors.title) && /* @__PURE__ */ React.createElement("div", null, "Title is required")), /* @__PURE__ */ React.createElement("label", {
    className: "label"
  }, "Slug: ", /* @__PURE__ */ React.createElement("input", {
    className: "input",
    type: "text",
    name: "slug"
  }), (errors == null ? void 0 : errors.slug) && /* @__PURE__ */ React.createElement("div", null, "Slug is required")), /* @__PURE__ */ React.createElement("label", {
    className: "label",
    htmlFor: "markdown"
  }, "Markdown:", /* @__PURE__ */ React.createElement("textarea", {
    className: "input h-20",
    id: "markdown",
    rows: 20,
    name: "markdown"
  }), (errors == null ? void 0 : errors.markdown) && /* @__PURE__ */ React.createElement("div", null, "Markdown is required")), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit"
  }, transition.submission ? "Lagrer..." : "Lagre"));
}

// route-module:/home/cato/code/mdk-remix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index2,
  meta: () => meta
});
init_react();
var meta = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index2() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "A title"), /* @__PURE__ */ React.createElement("p", null, "Helluuuu")));
}

// route-module:/home/cato/code/mdk-remix/app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => Login
});
init_react();
var import_remix16 = __toModule(require_remix());
function validateUsername(username) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}
var action3 = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/";
  if (typeof username !== "string" || typeof password !== "string" || typeof redirectTo !== "string") {
    return { formError: `Form not submitted correctly.` };
  }
  const fields = { username, password };
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return { fieldErrors, fields };
  const user = await login({ username, password });
  if (!user) {
    return {
      fields,
      formError: `Username/Password combination is incorrect`
    };
  }
  return createUserSession(user.uid, redirectTo);
};
function Login() {
  const transition = (0, import_remix16.useTransition)();
  const [searchParams] = (0, import_remix16.useSearchParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto"
  }, /* @__PURE__ */ React.createElement("h1", null, "Logg inn"), /* @__PURE__ */ React.createElement(import_remix16.Form, {
    method: "post",
    className: "flex flex-col gap-4"
  }, /* @__PURE__ */ React.createElement(Input, {
    name: "redirectTo",
    type: "hidden",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement(Input, {
    name: "username",
    label: "Brukernavn",
    type: "email"
  }), /* @__PURE__ */ React.createElement(Input, {
    name: "password",
    label: "Passord",
    type: "password"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "button-primary",
    type: "submit"
  }, transition.submission ? "Logger inn..." : "Logg inn")));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/recipes/$slug": {
    id: "routes/recipes/$slug",
    parentId: "root",
    path: "/oppskrifter/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/recipes/index": {
    id: "routes/recipes/index",
    parentId: "root",
    path: "/oppskrifter",
    index: void 0,
    caseSensitive: void 0,
    module: recipes_exports
  },
  "routes/canvas": {
    id: "routes/canvas",
    parentId: "root",
    path: "canvas",
    index: void 0,
    caseSensitive: void 0,
    module: canvas_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/$slug": {
    id: "routes/admin/$slug",
    parentId: "routes/admin",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/admin/new": {
    id: "routes/admin/new",
    parentId: "routes/admin",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "/logg-inn",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9maXJlYmFzZS9zZXNzaW9uLnNlcnZlci50cyIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9sYXlvdXQudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2Zvb3Rlci50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvbG9nby50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9kb2N1bWVudC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9yZWNpcGVzLyRzbHVnLnRzeCIsICIuLi8uLi9hcHAvZmlyZWJhc2UvcmVjaXBlLXNlcnZpY2UudHMiLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9yZWNpcGVzL2luZGV4LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9yZWNpcGUtY2FyZC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9jYW52YXMudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluLyRzbHVnLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy91aS9pbnB1dC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi9uZXcudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvbG9naW4udHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9yZWNpcGVzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvcmVjaXBlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2NhbnZhcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvcmVjaXBlcy8kc2x1Z1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlY2lwZXMvJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCIvb3Bwc2tyaWZ0ZXIvOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9yZWNpcGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcmVjaXBlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIi9vcHBza3JpZnRlclwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2NhbnZhc1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2NhbnZhc1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNhbnZhc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2FkbWluXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhZG1pblwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH0sXG4gIFwicm91dGVzL2FkbWluLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW4vJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hZG1pbi9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hZG1pblwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTdcbiAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vbmV3XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW4vbmV3XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGF0aDogXCJuZXdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTlcbiAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIi9sb2dnLWlublwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMFxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZUNhdGNoLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIlxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL2ZpcmViYXNlL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9kb2N1bWVudFwiXG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9hcHAjbGlua3NcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpXG4gIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCNqc29uXG4gIHJldHVybiB1c2VyXG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjZGVmYXVsdC1leHBvcnRcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNyb3V0ZS1maWxlbmFtZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZUxvYWRlckRhdGEoKVxuICBcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0IHVzZXI9e3VzZXJ9PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhleSwgZGV2ZWxvcGVyLCB5b3Ugc2hvdWxkIHJlcGxhY2UgdGhpcyB3aXRoIHdoYXQgeW91IHdhbnQgeW91clxuICAgICAgICAgICAgdXNlcnMgdG8gc2VlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuICBsZXQgbWVzc2FnZTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXG4gICAgICAgICAgdG8uXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQwNDpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPk9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IGRvZXMgbm90IGV4aXN0LjwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9e2Ake2NhdWdodC5zdGF0dXN9ICR7Y2F1Z2h0LnN0YXR1c1RleHR9YH0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+XG4gICAgICAgICAge2NhdWdodC5zdGF0dXN9OiB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5cbnR5cGUgTG9naW5Gb3JtID0ge1xuICB1c2VybmFtZTogc3RyaW5nXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn1cblxuLy8gVE9ETzogY3JlYXRlIHVzZXIgaW4gZmlyZWJhc2UvdXNlcnNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcbiAgLy8gY29uc3QgdXNlciA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCB1c2VybmFtZSwgcGFzc3dvcmQpXG4gIC8vICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB1c2VyQ3JlZGVudGlhbC51c2VyKVxuICAvLyAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpOiBhbnkge1xuICAvLyAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZVxuICAvLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZVxuICAvLyAgICAgaWYgKGVycm9yQ29kZSA9PSBcImF1dGgvd2Vhay1wYXNzd29yZFwiKSB7XG4gIC8vICAgICAgIHJldHVybiBcIlRoZSBwYXNzd29yZCBpcyB0b28gd2Vhay5cIlxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZVxuICAvLyAgICAgfVxuICAvLyAgIH0pXG5cbiAgLy8gcmV0dXJuIHVzZXJcbiAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XG4gIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCB1c2VybmFtZSwgcGFzc3dvcmQpXG4gIC8vICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB1c2VyQ3JlZGVudGlhbC51c2VyKVxuICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gIC8vICAgICBlcnIuY29kZVxuICAvLyAgICAgZXJyLm1lc3NhZ2VcbiAgLy8gICB9KVxuICAvLyByZXR1cm4gdXNlclxuICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQhXCIpXG59XG5cbi8vIFRPRE86IHVzZSBlbnYgYWdhaW4hXG4vLyBjb25zdCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVRcbi8vIGlmICghc2Vzc2lvblNlY3JldCkge1xuLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKVxuLy8gfVxuXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIlJKX3Nlc3Npb25cIixcbiAgICBzZWN1cmU6IHRydWUsXG4gICAgc2VjcmV0czogW1wid2VlZTEyMzR3ZWVlXCJdLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gIH0sXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKVxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbFxuICByZXR1cm4gdXNlcklkXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIilcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJlZGlyZWN0VG9cIiwgcmVkaXJlY3RUb11dKVxuICAgIHRocm93IHJlZGlyZWN0KGAvbG9nZy1pbm4/JHtzZWFyY2hQYXJhbXN9YClcbiAgfVxuICByZXR1cm4gdXNlcklkXG59XG5cbi8vIFRPRE86IGdldCB1c2VyIGZyb20gZmlyZWJhc2UvdXNlcnMsIG5vdCBhdXRoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxhbnkgfCBudWxsPiB7XG4gIC8vIGNvbnN0IHVzZXJJZCA9IGF1dGguY3VycmVudFVzZXI/LmVtYWlsXG4gIC8vIGlmICh0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gIC8vICAgcmV0dXJuIG51bGxcbiAgLy8gfVxuXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXJcbiAgLy8gICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHVzZXIpXG4gIC8vICAgcmV0dXJuIHVzZXJcbiAgLy8gfSBjYXRjaCB7XG4gIC8vICAgdGhyb3cgbG9nb3V0KHJlcXVlc3QpXG4gIC8vIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIC8vIHNpZ25PdXQoYXV0aClcbiAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICAvLyByZXR1cm4gcmVkaXJlY3QoXCIvbG9nZy1pbm5cIiwge1xuICAvLyAgIGhlYWRlcnM6IHtcbiAgLy8gICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAvLyAgIH0sXG4gIC8vIH0pXG4gIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKFxuICB1c2VySWQ6IHN0cmluZyB8IG51bGwsXG4gIHJlZGlyZWN0VG86IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKVxuICBzZXNzaW9uLnNldChcInVzZXJJZFwiLCB1c2VySWQpXG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHVzZXI/OiBVc2VyIHwgbnVsbFxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHVzZXIsIGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xNiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxIZWFkZXIgdXNlcj17dXNlcn0vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktNFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IGl0ZW1zLWNlbnRlciBweS04IGJnLWdyYXktMTAwXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8TG9nbyAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBJbGxvIG1haW9yZXNcbiAgICAgICAgICBpdXJlIGluIHZpdGFlIGl1c3RvIGZ1Z2EgcmF0aW9uZT9cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGdhcC04XCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgIE9tIG9zc1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgIEhqZWxwXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgVmlsa1x1MDBFNXJcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgIHtcIkNvcHlyaWdodCBcdTAwQTkgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPmNhN28uY29tPC9zcGFuPiB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgICB7XCIuXCJ9XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuIiwgImNvbnN0IHByaW1hcnkgPSBcIiNGMzZBM0VcIlxuY29uc3Qgc2Vjb25kYXJ5ID0gXCIjRkZCMzBCXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgODEgODFcIiB2ZXJzaW9uPVwiMS4xXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctOCBoLThcIj5cbiAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjQ0OTk3NywtMC40NDk5NzcsMC40NDk5NzcsMC40NDk5NzcsLTIxMjguMzksMTkyNS45KVwiPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwwLDAsMSwzOTQwLC0xMTIwLjU2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTUyMCwxMzkwLjU3TDU2MCwxMzkwLjU3TDU2MCwxNDAwLjU3TDUzMCwxNDAwLjU3TDUzMCwxNDIwLjU3TDU2MCwxNDIwLjU3TDU2MCwxNDMwLjU3TDUyMCwxNDMwLjU3TDUyMCwxMzkwLjU3WlwiXG4gICAgICAgICAgICBzdHlsZT17eyBmaWxsOiBwcmltYXJ5IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwwLDAsMSwzOTMwLC0xMTIwLjU2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTYyMCwxMzkwLjU3TDYyMCwxNDMwLjU3TDYxMCwxNDMwLjU3TDYxMCwxNDAwLjU3TDU5MCwxNDAwLjU3TDU5MCwxNDMwLjU3TDU4MCwxNDMwLjU3TDU4MCwxMzkwLjU3TDYyMCwxMzkwLjU3WlwiXG4gICAgICAgICAgICBzdHlsZT17eyBmaWxsOiBwcmltYXJ5IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwwLDAsMSwzOTQwLC0xMTIwLjU2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTUyMCwxNDQwLjU3TDU2MCwxNDQwLjU3TDU2MCwxNDgwLjU3TDU1MCwxNDgwLjU3TDU1MCwxNDUwLjU3TDUyMCwxNDUwLjU3TDUyMCwxNDQwLjU3WlwiXG4gICAgICAgICAgICBzdHlsZT17eyBmaWxsOiBzZWNvbmRhcnkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDM5MzAsLTExMjAuNTYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNTkwLDE0NzAuNTdMNjEwLDE0NzAuNTdMNjEwLDE0NTAuNTdMNTkwLDE0NTAuNTdMNTkwLDE0NzAuNTdaTTU4MCwxNDQwLjU3TDYyMCwxNDQwLjU3TDYyMCwxNDgwLjU3TDU4MCwxNDgwLjU3TDU4MCwxNDQwLjU3WlwiXG4gICAgICAgICAgICBzdHlsZT17eyBmaWxsOiBwcmltYXJ5IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHVzZXI/OiBVc2VyIHwgbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyB1c2VyIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIHctZnVsbCB0b3AtMCBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTYgYmctZ3JheS0xMDBcIj5cbiAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIk1haW4gbmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXhcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCIgdGl0bGU9XCJSZW1peFwiIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL29wcHNrcmlmdGVyXCI+T3Bwc2tyaWZ0ZXI8L0xpbms+XG4gICAgICAgICAge3VzZXIgP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCI+QWRtaW48L0xpbms+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIuZGlzcGxheU5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiA8TGluayB0bz1cIi9sb2dnLWlublwiPkxvZ2cgaW5uPC9MaW5rPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufSIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb259IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2N1bWVudCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZVxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImJnLWdyYXktNDAwXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICIvLyBpbXBvcnQgTWFya2Rvd24gZnJvbSBcIm1hcmtkb3duLXRvLWpzeFwiXG5pbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlQ2F0Y2gsIHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiXG4vLyBpbXBvcnQgUmVjaXBlTWFya2Rvd24gZnJvbSBcIn4vY29tcG9uZW50cy9yZWNpcGUvbWFya2Rvd25cIlxuaW1wb3J0IHsgZ2V0UmVjaXBlLCBJUmVjaXBlIH0gZnJvbSBcIn4vZmlyZWJhc2UvcmVjaXBlLXNlcnZpY2VcIlxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgXCJleHBlY3RlZCBwYXJhbXMuc2x1Z1wiKVxuICBjb25zdCByZWNpcGUgPSBhd2FpdCBnZXRSZWNpcGUocGFyYW1zLnNsdWcpXG4gIGlmICghcmVjaXBlKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKGBObyByZWNpcGUgZm91bmQgd2l0aCBpZCA9ICR7cGFyYW1zLnNsdWd9YCwgeyBzdGF0dXM6IDQwNCB9KVxuICB9XG5cbiAgcmV0dXJuIHJlY2lwZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGUoKSB7XG4gIGNvbnN0IHJlY2lwZSA9IHVzZUxvYWRlckRhdGE8SVJlY2lwZT4oKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTQgc206cHgtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgYmctd2hpdGUgZ2FwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtdmgzM1wiPlxuICAgICAgICAgICAgey8qIFRPRE86IG9ubHkgc2hvdyBmb3IgYWRtaW5zICovfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89e2AvYWRtaW4vcmVjaXBlcy8ke3JlY2lwZS5pZH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IHotMTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCB0ZXh0LXdoaXRlIHctMTAgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogPFBlbmNpbEFsdEljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7LyogPFJlY2lwZU1ldHJpY3MgcmVjaXBlPXtyZWNpcGV9IC8+ICovfVxuICAgICAgICAgICAge3JlY2lwZS5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBvYmplY3QtY292ZXIgaC12aDMzIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgc3JjPXtyZWNpcGUuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtyZWNpcGUubmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYWJzb2x1dGUgYm90dG9tLTAgdGV4dC1jZW50ZXIgdy1mdWxsIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgcHktNFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlcmlmXCI+e3JlY2lwZS5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPD5cbiAgLy8gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTQgc206cHgtMFwiPlxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgYmctd2hpdGUgZ2FwLTRcIj5cbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtdmgzM1wiPlxuICAvLyAgICAgICAgICAgey8qIFRPRE86IG9ubHkgc2hvdyBmb3IgYWRtaW5zICovfVxuICAvLyAgICAgICAgICAgPExpbmtcbiAgLy8gICAgICAgICAgICAgdG89e2AvYWRtaW4vcmVjaXBlcy8ke3JlY2lwZS5pZH1gfVxuICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IHotMTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCB0ZXh0LXdoaXRlIHctMTAgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGxcIlxuICAvLyAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICB7LyogPFBlbmNpbEFsdEljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAvLyAgICAgICAgICAgICBFZGl0XG4gIC8vICAgICAgICAgICA8L0xpbms+XG4gIC8vICAgICAgICAgICB7LyogPFJlY2lwZU1ldHJpY3MgcmVjaXBlPXtyZWNpcGV9IC8+ICovfVxuICAvLyAgICAgICAgICAge3JlY2lwZS5pbWFnZSAmJiAoXG4gIC8vICAgICAgICAgICAgIDxpbWdcbiAgLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBvYmplY3QtY292ZXIgaC12aDMzIHctZnVsbFwiXG4gIC8vICAgICAgICAgICAgICAgc3JjPXtyZWNpcGUuaW1hZ2V9XG4gIC8vICAgICAgICAgICAgICAgYWx0PXtyZWNpcGUubmFtZX1cbiAgLy8gICAgICAgICAgICAgLz5cbiAgLy8gICAgICAgICAgICl9XG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYWJzb2x1dGUgYm90dG9tLTAgdGV4dC1jZW50ZXIgdy1mdWxsIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgcHktNFwiPlxuICAvLyAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlcmlmXCI+e3JlY2lwZS5uYW1lfTwvaDE+XG4gIC8vICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgPC9kaXY+XG5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBwLTQgYmctd2hpdGVcIj5cbiAgLy8gICAgICAgICA8YnV0dG9uXG4gIC8vICAgICAgICAgICBhcmlhLWxhYmVsPVwibGVnZyB0aWwgc29tIGZhdm9yaXR0XCJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gIC8vICAgICAgICAgPlxuICAvLyAgICAgICAgICAgey8qIDxCb29rbWFya0ljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIGhpZGRlbiBsZzpibG9ja1wiPkxhZ3JlIHNvbSBmYXZvcml0dDwvZGl2PlxuICAvLyAgICAgICAgIDwvYnV0dG9uPlxuXG4gIC8vICAgICAgICAgPGJ1dHRvblxuICAvLyAgICAgICAgICAgYXJpYS1sYWJlbD1cImxlZ2cgdGlsIG1lbnlcIlxuICAvLyAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgLy8gICAgICAgICA+XG4gIC8vICAgICAgICAgICB7LyogPEJvb2tPcGVuSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+TGVnZyB0aWwgbWVueTwvZGl2PlxuICAvLyAgICAgICAgIDwvYnV0dG9uPlxuXG4gIC8vICAgICAgICAgPGJ1dHRvblxuICAvLyAgICAgICAgICAgYXJpYS1sYWJlbD1cInByaW50XCJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gIC8vICAgICAgICAgPlxuICAvLyAgICAgICAgICAgey8qIDxQcmludGVySWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+UHJpbnQ8L2Rpdj5cbiAgLy8gICAgICAgICA8L2J1dHRvbj5cblxuICAvLyAgICAgICAgIDxidXR0b25cbiAgLy8gICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYXN0IG5lZFwiXG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIlxuICAvLyAgICAgICAgID5cbiAgLy8gICAgICAgICAgIHsvKiA8U2F2ZUljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIGhpZGRlbiBsZzpibG9ja1wiPkxhZ3JlPC9kaXY+XG4gIC8vICAgICAgICAgPC9idXR0b24+XG5cbiAgLy8gICAgICAgICB7cmVjaXBlLnNvdXJjZSA/IChcbiAgLy8gICAgICAgICAgIDxhXG4gIC8vICAgICAgICAgICAgIGhyZWY9e3JlY2lwZS5zb3VyY2V9XG4gIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gIC8vICAgICAgICAgICA+XG4gIC8vICAgICAgICAgICAgIHsvKiA8RXh0ZXJuYWxMaW5rSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMiBoaWRkZW4gbGc6YmxvY2tcIj5LaWxkZTwvZGl2PlxuICAvLyAgICAgICAgICAgPC9hPlxuICAvLyAgICAgICAgICkgOiBudWxsfVxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICAgIDwvc2VjdGlvbj5cblxuICAvLyAgICAge3JlY2lwZS5kZXNjcmlwdGlvbiA/IChcbiAgLy8gICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGNvbnRhaW5lciBteC1hdXRvIHB4LTQgc206cHgtMCBiZy13aGl0ZSB0ZXh0LWNlbnRlclwiPlxuICAvLyAgICAgICAgIDxSZWNpcGVNYXJrZG93biBtYXJrZG93bj17cmVjaXBlLmRlc2NyaXB0aW9ufSAvPlxuICAvLyAgICAgICA8L3NlY3Rpb24+XG4gIC8vICAgICApIDogbnVsbH1cblxuICAvLyAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC0wIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTRcIj5cblxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnctMS8yIHhsOnctNS8xMlwiPlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtbGcgdXBwZXJjYXNlIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDBcIj5cbiAgLy8gICAgICAgICAgIEluZ3JlZGllbnNlclxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgIDxSZWNpcGVNYXJrZG93biBtYXJrZG93bj17cmVjaXBlLmluZ3JlZGllbnRzfSAvPlxuICAvLyAgICAgICA8L2Rpdj5cblxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnctMS8yIHhsOnctNy8xMlwiPlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtbGcgdXBwZXJjYXNlIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDBcIj5cbiAgLy8gICAgICAgICAgIEZyZW1nYW5nc21cdTAwRTV0ZVxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgIDxSZWNpcGVNYXJrZG93biBtYXJrZG93bj17cmVjaXBlLnN0ZXBzfSAvPlxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICAgIDwvc2VjdGlvbj5cbiAgLy8gICA8Lz5cbiAgLy8gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcbiAgY29uc3QgeyBzbHVnIH0gPSB1c2VQYXJhbXMoKTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDQ6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgRmFudCBpbmdlbiBvcHBza3JpZnQgbWVkIGlkOiBcIntzbHVnfVwiXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSA0MDE6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgRHUgaGFyIGlra2UgdGlsZ2FuZyB0aWwgb3Bwc2tyaWZ0IG1lZCBpZDogXCJ7c2x1Z31cIlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVWtqZW50IGZlaWw6ICR7Y2F1Z2h0LnN0YXR1c31gKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVE9ETzogbWFrZSBwZXJ0aWVyIG9yIHJlbW92ZSB0byBjYXRjaCBoaWdoZXIgdXAgPyAodGhyb3cgbmV3IEVycm9yKFwid29vb1wiKSBpbiBsb2FkZXIgdG8gdmlldylcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKVxuICBjb25zdCB7IHNsdWcgfSA9IHVzZVBhcmFtcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+RGV0IHNramVkZGUgZW4gZmVpbCBtZWQgbGFzdGluZyBhdiBvcHBza3JpZnQgbWVkIGlkOiBcIntzbHVnfVwiLjwvZGl2PlxuICApO1xufSIsICJpbXBvcnQgc2x1Z2lmeSBmcm9tIFwifi9saWIvc2x1Z2lmeVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlY2lwZSB7XG4gIGlkOiBzdHJpbmdcbiAgLy8gc2x1Zzogc3RyaW5nXG4gIC8vIFRPRE86IHB1Ymxpc2hlZDogYm9vbGVhbixcbiAgLy8gY3JlYXRlZDogbnVtYmVyXG4gIC8vIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgLy8gaW5ncmVkaWVudHM6IHN0cmluZ1xuICAvLyBzdGVwczogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICAvLyBzb3VyY2U/OiBzdHJpbmdcbiAgaW1hZ2U/OiBzdHJpbmdcbiAgLy8gdGFnczogc3RyaW5nW11cbiAgLy8gdGltZTogbnVtYmVyXG4gIC8vIHR5cGU6IG51bWJlclxufVxuXG5jb25zdCBSRUNJUEVTOiBJUmVjaXBlW10gPSBbXG4gIHtcbiAgICBpZDogXCIxXCIsXG4gICAgbmFtZTogXCJPcHBza3JpZnQgIzFcIlxuICB9LFxuICB7XG4gICAgaWQ6IFwiMlwiLFxuICAgIG5hbWU6IFwiT3Bwc2tyaWZ0ICMyXCJcbiAgfSxcbiAge1xuICAgIGlkOiBcIjNcIixcbiAgICBuYW1lOiBcIk9wcHNrcmlmdCAjM1wiXG4gIH0sXG5dXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWNpcGVzKHRha2UgPSAxMCkge1xuICAvLyBjb25zdCBxID0gcXVlcnkoXG4gIC8vICAgY29sbGVjdGlvbihkYiwgXCJyZWNpcGVzXCIpLFxuICAvLyAgIC8vIFRPRE86IHdoZXJlKFwicHVibGlzaGVkXCIsIFwiPT1cIiAsIHRydWUpXG4gIC8vICAgbGltaXQodGFrZSksXG4gIC8vICAgb3JkZXJCeShcImNyZWF0ZWRcIiwgXCJkZXNjXCIpXG4gIC8vIClcblxuICAvLyBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSlcbiAgLy8gY29uc3QgcmVjaXBlcyA9IHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IHtcbiAgLy8gICAvLyBUT0RPOiByZXBsYWNlIGlkIHdpdGggc2x1Z1xuICAvLyAgIGNvbnN0IGRiUmVjaXBlID0gZG9jLmRhdGEoKVxuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBpZDogZG9jLmlkLFxuICAvLyAgICAgc2x1Zzogc2x1Z2lmeShkYlJlY2lwZS5uYW1lKSxcbiAgLy8gICAgIC4uLmRiUmVjaXBlLFxuICAvLyAgIH0gYXMgSVJlY2lwZVxuICAvLyB9KVxuXG4gIHJldHVybiBSRUNJUEVTXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWNpcGUoaWQ6IHN0cmluZywgcmVuZGVyZWQgPSB0cnVlKSB7XG4gIC8vIGNvbnN0IHJlZiA9IGRvYyhkYiwgXCJyZWNpcGVzXCIsIGlkKVxuICAvLyBjb25zdCBzbmFwID0gYXdhaXQgZ2V0RG9jKHJlZilcblxuICAvLyBpZiAoIXNuYXAuZXhpc3RzKCkpIHtcbiAgLy8gICByZXR1cm4gbnVsbFxuICAvLyB9XG5cbiAgLy8gY29uc3QgZGJSZWNpcGUgPSBzbmFwLmRhdGEoKVxuICBcbiAgLy8gY29uc3QgcmVjaXBlID0ge1xuICAvLyAgIGlkOiBzbmFwLmlkLFxuICAvLyAgIC4uLmRiUmVjaXBlLFxuICAvLyB9IGFzIElSZWNpcGVcblxuICByZXR1cm4gUkVDSVBFUy5maW5kKHAgPT4gcC5pZCA9PT0gaWQpXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IGdldFJlY2lwZXMsIElSZWNpcGUgfSBmcm9tIFwifi9maXJlYmFzZS9yZWNpcGUtc2VydmljZVwiXG5pbXBvcnQgUmVjaXBlQ2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3JlY2lwZS1jYXJkXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBnZXRSZWNpcGVzKDEyKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVzKCkge1xuICBjb25zdCByZWNpcGVzID0gdXNlTG9hZGVyRGF0YTxJUmVjaXBlW10+KClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgeGw6Z3JpZC1jb2xzLTVcIj5cbiAgICAgICAge3JlY2lwZXMubWFwKHJlY2lwZSA9PiAoXG4gICAgICAgICAgPFJlY2lwZUNhcmQga2V5PXtyZWNpcGUuaWR9IHJlY2lwZT17cmVjaXBlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBJUmVjaXBlIH0gZnJvbSBcIn4vZmlyZWJhc2UvcmVjaXBlLXNlcnZpY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlQ2FyZCh7IHJlY2lwZSB9OiB7IHJlY2lwZTogSVJlY2lwZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHRvPXtyZWNpcGUuaWR9XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnXCJcbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTY0IG9iamVjdC1jb3ZlclwiXG4gICAgICAgIHNyYz17cmVjaXBlLmltYWdlfVxuICAgICAgICBhbHQ9e3JlY2lwZS5uYW1lfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBsZWZ0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrIHRvLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTIgYm90dG9tLTIgbGVmdC0yIHotMTAgdGV4dC13aGl0ZSB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgdGV4dC1iYXNlXCI+XG4gICAgICAgIHtyZWNpcGUubmFtZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKVxufSIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuXG5jb25zdCBkcmF3ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBmcmFtZUNvdW50OiBudW1iZXIpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodClcbiAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJ1xuICBjdHguYmVnaW5QYXRoKClcbiAgY3R4LmFyYyg1MCwgMTAwLCAyMCAqIE1hdGguc2luKGZyYW1lQ291bnQgKiAwLjA1KSAqKiAyLCAwLCAyICogTWF0aC5QSSlcbiAgY3R4LmZpbGwoKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FudmFzKCkge1xuXG4gIGNvbnN0IGNhbnZhc1JlZiA9IFJlYWN0LnVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpXG5cblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnRcblxuICAgIGlmICghY2FudmFzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmcmFtZUNvdW50ID0gMFxuICAgIGxldCBhbmltYXRpb25GcmFtZUlkID0gMFxuICAgIC8vT3VyIGRyYXcgY2FtZSBoZXJlXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgZnJhbWVDb3VudCsrXG4gICAgICBkcmF3KGNvbnRleHQsIGZyYW1lQ291bnQpXG4gICAgICBhbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpXG4gICAgfVxuICAgIHJlbmRlcigpXG5cbiAgICByZXR1cm4gKCkgPT4geyB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCkgfVxuICB9LCBbZHJhd10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhlaTwvaDE+XG4gICAgICA8Y2FudmFzIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJjb3JuZmxvd2VyYmx1ZVwiIH19IHJlZj17Y2FudmFzUmVmfT48L2NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgKVxuXG59IiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwifi9maXJlYmFzZS9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IGxvZ291dChyZXF1ZXN0KVxuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdChcIi9cIikiLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBMaW5rLCBPdXRsZXQsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgZ2V0UmVjaXBlcywgSVJlY2lwZSB9IGZyb20gXCJ+L2ZpcmViYXNlL3JlY2lwZS1zZXJ2aWNlXCJcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi9maXJlYmFzZS9zZXNzaW9uLnNlcnZlclwiXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdClcbiAgXG4gIC8vIFRPRE86IGxvYWQgbW9yZSB0aGFuIDIwIHJlY2lwZXMuLi5cbiAgcmV0dXJuIGdldFJlY2lwZXMoNTApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xuICBjb25zdCByZWNpcGVzID0gdXNlTG9hZGVyRGF0YTxJUmVjaXBlW10+KClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBnYXAtNFwiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJib3JkZXItciBib3JkZXItZ3JheS02MDAgcHItNFwiPlxuICAgICAgICA8aDE+QWRtaW48L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3JlY2lwZXMubWFwKHJlY2lwZSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyZWNpcGUuaWR9PlxuICAgICAgICAgICAgICA8TGluayB0bz17YC9hZG1pbi8ke3JlY2lwZS5pZH1gfT5cbiAgICAgICAgICAgICAgICB7cmVjaXBlLm5hbWV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59IiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiXG5pbXBvcnQgSW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBnZXRSZWNpcGUsIElSZWNpcGUgfSBmcm9tIFwifi9maXJlYmFzZS9yZWNpcGUtc2VydmljZVwiXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5zbHVnLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpXG5cbiAgY29uc3QgcmVjaXBlID0gYXdhaXQgZ2V0UmVjaXBlKHBhcmFtcy5zbHVnLCBmYWxzZSlcbiAgaWYgKCFyZWNpcGUpIHtcbiAgICB0aHJvdyBuZXcgUmVzcG9uc2UoYE5vIHJlY2lwZSBmb3VuZCB3aXRoIGlkID0gJHtwYXJhbXMuc2x1Z31gLCB7IHN0YXR1czogNDA0IH0pXG4gIH1cblxuICByZXR1cm4gcmVjaXBlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoKSB7XG4gIGNvbnN0IHJlY2lwZSA9IHVzZUxvYWRlckRhdGE8SVJlY2lwZT4oKVxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxPkVkaXQ6IHtyZWNpcGUubmFtZX08L2gxPlxuXG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8SW5wdXQgbmFtZT1cIm5hbWVcIiBsYWJlbD1cIk5hbWVcIiB2YWx1ZT17cmVjaXBlLm5hbWV9IC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwiaW1hZ2VcIiBsYWJlbD1cIkltYWdlXCIgdmFsdWU9e3JlY2lwZS5pbWFnZX0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJzb3VyY2VcIiBsYWJlbD1cIlNvdXJjZVwiIHZhbHVlPXtyZWNpcGUuc291cmNlfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInRpbWVcIiBsYWJlbD1cInRpbWVcIiB2YWx1ZT17cmVjaXBlLnRpbWV9IC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwidHlwZVwiIGxhYmVsPVwidHlwZVwiIHZhbHVlPXtyZWNpcGUudHlwZX0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJ0YWdzXCIgbGFiZWw9XCJ0YWdzXCIgdmFsdWU9e3JlY2lwZS50YWdzfSAvPlxuXG5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cImluZ3JlZGllbnRzXCI+XG4gICAgICAgICAgSW5ncmVkaWVudHNcbiAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiaW5wdXQgaC0yMFwiIGlkPVwiaW5ncmVkaWVudHNcIiByb3dzPXsyMH0gbmFtZT1cImluZ3JlZGllbnRzXCI+XG4gICAgICAgICAgICB7cmVjaXBlLmluZ3JlZGllbnRzfVxuICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgey8qIHtlcnJvcnM/Lm1hcmtkb3duICYmIDxkaXY+TWFya2Rvd24gaXMgcmVxdWlyZWQ8L2Rpdj59ICovfVxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAge3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IFwiTGFncmVyLi4uXCIgOiBcIkxhZ3JlXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuXG4gICAgPC9kaXY+XG4gIClcbn0iLCAiaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBSZWFjdC5JbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcbiAgbmFtZTogc3RyaW5nXG4gIGxhYmVsPzogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0KHsgbmFtZSwgbGFiZWwsIC4uLnJlc3QgfTogSW5wdXRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bGFiZWwgPyA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPXtuYW1lfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9sYWJlbD4gOiBudWxsfVxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD17bmFtZX0gbmFtZT17bmFtZX0gey4uLnJlc3R9IC8+XG4gICAgICB7Lyoge2Vycm9ycz8udGl0bGUgJiYgPGRpdj5UaXRsZSBpcyByZXF1aXJlZDwvZGl2Pn0gKi99XG4gICAgPC8+XG4gIClcbn0iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8cD5cbiAgICAgIDxMaW5rIHRvPVwibmV3XCI+Q3JlYXRlIGEgbmV3IHJlY2lwZTwvTGluaz5cbiAgICA8L3A+XG4gIClcbn0iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIHVzZVRyYW5zaXRpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgRm9ybSwgdXNlQWN0aW9uRGF0YSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG4vLyBpbXBvcnQgeyBjcmVhdGVSZWNpcGUgfSBmcm9tIFwifi9zZXJ2aWNlcy9yZWNpcGUtc2VydmljZVwiO1xuXG50eXBlIFBvc3RFcnJvciA9IHtcbiAgdGl0bGU/OiBib29sZWFuXG4gIHNsdWc/OiBib29sZWFuXG4gIG1hcmtkb3duPzogYm9vbGVhblxufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBhd2FpdCBuZXcgUHJvbWlzZShyZXMgPT4gc2V0VGltZW91dChyZXMsIDEwMDApKVxuXG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpXG5cbiAgY29uc3QgdGl0bGUgPSBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKVxuICBjb25zdCBzbHVnID0gZm9ybURhdGEuZ2V0KFwic2x1Z1wiKVxuICBjb25zdCBtYXJrZG93biA9IGZvcm1EYXRhLmdldChcIm1hcmtkb3duXCIpXG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSB7fVxuICBpZiAoIXRpdGxlKSBlcnJvcnMudGl0bGUgPSB0cnVlXG4gIGlmICghc2x1ZykgZXJyb3JzLnNsdWcgPSB0cnVlXG4gIGlmICghbWFya2Rvd24pIGVycm9ycy5tYXJrZG93biA9IHRydWVcblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzXG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiKVxuICBpbnZhcmlhbnQodHlwZW9mIHNsdWcgPT09IFwic3RyaW5nXCIpXG4gIGludmFyaWFudCh0eXBlb2YgbWFya2Rvd24gPT09IFwic3RyaW5nXCIpXG4gIC8vIGF3YWl0IGNyZWF0ZVJlY2lwZSh7IHRpdGxlLCBzbHVnLCBtYXJrZG93biB9KVxuXG4gIHJldHVybiByZWRpcmVjdChcIi9hZG1pblwiKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdQb3N0KCkge1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKClcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9XCJ0aXRsZVwiPlxuICAgICAgICBUaXRsZTpcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cInRleHRcIiBpZD1cInRpdGxlXCIgbmFtZT1cInRpdGxlXCIgLz5cbiAgICAgICAge2Vycm9ycz8udGl0bGUgJiYgPGRpdj5UaXRsZSBpcyByZXF1aXJlZDwvZGl2Pn1cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiPlxuICAgICAgICBTbHVnOiA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJzbHVnXCIgLz5cbiAgICAgICAge2Vycm9ycz8uc2x1ZyAmJiA8ZGl2PlNsdWcgaXMgcmVxdWlyZWQ8L2Rpdj59XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPVwibWFya2Rvd25cIj5NYXJrZG93bjpcbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImlucHV0IGgtMjBcIiBpZD1cIm1hcmtkb3duXCIgcm93cz17MjB9IG5hbWU9XCJtYXJrZG93blwiIC8+XG4gICAgICAgIHtlcnJvcnM/Lm1hcmtkb3duICYmIDxkaXY+TWFya2Rvd24gaXMgcmVxdWlyZWQ8L2Rpdj59XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAge3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IFwiTGFncmVyLi4uXCIgOiBcIkxhZ3JlXCJ9XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0Zvcm0+XG4gIClcbn0iLCAiaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuLy8gdHlwZSBJbmRleERhdGEgPSB7XG4vLyAgIHJlc291cmNlczogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHVybDogc3RyaW5nIH0+O1xuLy8gICBkZW1vczogQXJyYXk8eyBuYW1lOiBzdHJpbmc7IHRvOiBzdHJpbmcgfT47XG4vLyB9O1xuXG4vLyAvLyBMb2FkZXJzIHByb3ZpZGUgZGF0YSB0byBjb21wb25lbnRzIGFuZCBhcmUgb25seSBldmVyIGNhbGxlZCBvbiB0aGUgc2VydmVyLCBzb1xuLy8gLy8geW91IGNhbiBjb25uZWN0IHRvIGEgZGF0YWJhc2Ugb3IgcnVuIGFueSBzZXJ2ZXIgc2lkZSBjb2RlIHlvdSB3YW50IHJpZ2h0IG5leHRcbi8vIC8vIHRvIHRoZSBjb21wb25lbnQgdGhhdCByZW5kZXJzIGl0LlxuLy8gLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI2xvYWRlclxuLy8gZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuLy8gICBsZXQgZGF0YTogSW5kZXhEYXRhID0ge1xuLy8gICAgIHJlc291cmNlczogW1xuLy8gICAgICAge1xuLy8gICAgICAgICBuYW1lOiBcIlJlbWl4IERvY3NcIixcbi8vICAgICAgICAgdXJsOiBcImh0dHBzOi8vcmVtaXgucnVuL2RvY3NcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgbmFtZTogXCJSZWFjdCBSb3V0ZXIgRG9jc1wiLFxuLy8gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9yZWFjdHJvdXRlci5jb20vZG9jc1wiXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBuYW1lOiBcIlJlbWl4IERpc2NvcmRcIixcbi8vICAgICAgICAgdXJsOiBcImh0dHBzOi8vZGlzY29yZC5nZy9WQmVQczZkXCJcbi8vICAgICAgIH1cbi8vICAgICBdLFxuLy8gICAgIGRlbW9zOiBbXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHRvOiBcImRlbW9zL2FjdGlvbnNcIixcbi8vICAgICAgICAgbmFtZTogXCJBY3Rpb25zXCJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHRvOiBcImRlbW9zL2Fib3V0XCIsXG4vLyAgICAgICAgIG5hbWU6IFwiTmVzdGVkIFJvdXRlcywgQ1NTIGxvYWRpbmcvdW5sb2FkaW5nXCJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHRvOiBcImRlbW9zL3BhcmFtc1wiLFxuLy8gICAgICAgICBuYW1lOiBcIlVSTCBQYXJhbXMgYW5kIEVycm9yIEJvdW5kYXJpZXNcIlxuLy8gICAgICAgfVxuLy8gICAgIF1cbi8vICAgfTtcblxuLy8gICAvLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvcmVtaXgjanNvblxuLy8gICByZXR1cm4ganNvbihkYXRhKTtcbi8vIH07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNtZXRhXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJSZW1peCBTdGFydGVyXCIsXG4gICAgZGVzY3JpcHRpb246IFwiV2VsY29tZSB0byByZW1peCFcIlxuICB9O1xufTtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZ3VpZGVzL3JvdXRpbmcjaW5kZXgtcm91dGVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPGgxPkEgdGl0bGU8L2gxPlxuICAgICAgICA8cD5IZWxsdXV1dTwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IEZvcm0sIHVzZVNlYXJjaFBhcmFtcywgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uLCBsb2dpbiB9IGZyb20gXCJ+L2ZpcmViYXNlL3Nlc3Npb24uc2VydmVyXCI7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWU6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB1c2VybmFtZS5sZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuIGBVc2VybmFtZXMgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZDogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICByZXR1cm4gYFBhc3N3b3JkcyBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nYDtcbiAgfVxufVxuXG50eXBlIEFjdGlvbkRhdGEgPSB7XG4gIGZvcm1FcnJvcj86IHN0cmluZztcbiAgZmllbGRFcnJvcnM/OiB7XG4gICAgdXNlcm5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB9O1xuICBmaWVsZHM/OiB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pOiBQcm9taXNlPFJlc3BvbnNlIHwgQWN0aW9uRGF0YT4gPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIik7XG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcbiAgY29uc3QgcmVkaXJlY3RUbyA9IGZvcm0uZ2V0KFwicmVkaXJlY3RUb1wiKSB8fCBcIi9cIjtcbiAgXG4gIGlmIChcbiAgICB0eXBlb2YgdXNlcm5hbWUgIT09IFwic3RyaW5nXCIgfHxcbiAgICB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHxcbiAgICB0eXBlb2YgcmVkaXJlY3RUbyAhPT0gXCJzdHJpbmdcIlxuICApIHtcbiAgICByZXR1cm4geyBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAgfTtcbiAgfVxuXG4gIGNvbnN0IGZpZWxkcyA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH07XG4gIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgIHVzZXJuYW1lOiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lKSxcbiAgICBwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZClcbiAgfTtcbiAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpXG4gICAgcmV0dXJuIHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9O1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkcyxcbiAgICAgIGZvcm1FcnJvcjogYFVzZXJuYW1lL1Bhc3N3b3JkIGNvbWJpbmF0aW9uIGlzIGluY29ycmVjdGBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIudWlkLCByZWRpcmVjdFRvKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxoMT5Mb2dnIGlubjwvaDE+XG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInJlZGlyZWN0VG9cIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJyZWRpcmVjdFRvXCIpID8/IHVuZGVmaW5lZH0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VybmFtZVwiIGxhYmVsPVwiQnJ1a2VybmF2blwiIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwicGFzc3dvcmRcIiBsYWJlbD1cIlBhc3NvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAge3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IFwiTG9nZ2VyIGlubi4uLlwiIDogXCJMb2dnIGlublwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsUUFBUTtBQUFBLE1BQ3JDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsU0FBUztBQUFBLE1BQ3RDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sTUFBTTtBQUFBO0FBQUE7QUFFbEMsV0FBTyxlQUFlLFNBQVMsY0FBYztBQUFBLE1BQzNDLFlB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
