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
var import_remix5 = __toModule(require_remix());

// app/styles/styles.css
var styles_default = "/build/_assets/styles-SKCWULOB.css";

// app/components/layout.tsx
init_react();

// app/components/footer.tsx
init_react();
var import_remix2 = __toModule(require_remix());

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
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Om oss"), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Hjelp"), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/"
  }, "Vilk\xE5r")), /* @__PURE__ */ React.createElement("section", {
    className: "text-sm"
  }, "Copyright \xA9 ", /* @__PURE__ */ React.createElement("span", {
    className: "font-bold"
  }, "ca7o.com"), " ", new Date().getFullYear(), "."));
}

// app/components/header.tsx
init_react();
var import_remix3 = __toModule(require_remix());
function Header({ user }) {
  return /* @__PURE__ */ React.createElement("header", {
    className: "fixed z-50 w-full top-0 flex flex-wrap items-center justify-between h-16 bg-gray-100"
  }, /* @__PURE__ */ React.createElement("nav", {
    "aria-label": "Main navigation",
    className: "container mx-auto flex"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/",
    title: "Remix",
    className: "flex-1"
  }, /* @__PURE__ */ React.createElement(Logo, null)), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4 items-center"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/oppskrifter"
  }, "Oppskrifter"), user ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/admin"
  }, "Admin"), /* @__PURE__ */ React.createElement("span", null, user.displayName), /* @__PURE__ */ React.createElement("form", {
    action: "/logout",
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Logout"))) : /* @__PURE__ */ React.createElement(import_remix3.Link, {
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
var import_remix4 = __toModule(require_remix());
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
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-gray-400"
  }, children, /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
}

// route-module:/home/cato/code/mdk-remix/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var loader = async ({ request }) => {
  return null;
};
function App() {
  const user = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Document, {
    title: "MDK"
  }, /* @__PURE__ */ React.createElement(Layout, {
    user
  }, /* @__PURE__ */ React.createElement(import_remix5.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  const caught = (0, import_remix5.useCatch)();
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
var import_remix6 = __toModule(require_remix());
var import_tiny_invariant = __toModule(require("tiny-invariant"));

// prisma/db.server.ts
init_react();
var import_client = __toModule(require("@prisma/client"));
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route-module:/home/cato/code/mdk-remix/app/routes/recipes/$slug.tsx
var loader2 = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.slug, "expected params.slug");
  return await db.recipe.findUnique({ where: { id: parseInt(params.slug) } });
};
function Recipe() {
  const recipe = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    className: "px-4 sm:px-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto flex flex-col bg-white gap-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative h-vh33"
  }, /* @__PURE__ */ React.createElement(import_remix6.Link, {
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
  }, recipe.name))))), recipe.description ? /* @__PURE__ */ React.createElement("section", {
    className: "hidden lg:block container mx-auto px-4 sm:px-0 bg-white text-center"
  }, recipe.description) : null);
}
function CatchBoundary2() {
  const caught = (0, import_remix6.useCatch)();
  const { slug } = (0, import_remix6.useParams)();
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
  const { slug } = (0, import_remix6.useParams)();
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
var import_remix8 = __toModule(require_remix());

// app/components/recipe-card.tsx
init_react();
var import_remix7 = __toModule(require_remix());
function RecipeCard({ recipe }) {
  return /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: recipe.id.toString(),
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
var loader3 = async () => {
  return await db.recipe.findMany();
};
function Recipes() {
  const recipes = (0, import_remix8.useLoaderData)();
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

// prisma/session.server.ts
init_react();
var import_remix9 = __toModule(require_remix());
async function login({ username, password }) {
  return null;
}
var storage = (0, import_remix9.createCookieSessionStorage)({
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
async function logout(request) {
  throw new Error("Not implemented!");
}
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix9.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}

// route-module:/home/cato/code/mdk-remix/app/routes/logout.tsx
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
  return await db.recipe.findMany();
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
  return await db.recipe.findUnique({ where: { id: parseInt(params.slug) } });
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
  }), /* @__PURE__ */ React.createElement("button", {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2xheW91dC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9sb2dvLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9oZWFkZXIudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2RvY3VtZW50LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL3JlY2lwZXMvJHNsdWcudHN4IiwgIi4uLy4uL3ByaXNtYS9kYi5zZXJ2ZXIudHMiLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9yZWNpcGVzL2luZGV4LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9yZWNpcGUtY2FyZC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9jYW52YXMudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICIuLi8uLi9wcmlzbWEvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi8kc2x1Zy50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvdWkvaW5wdXQudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vbmV3LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2xvZ2luLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvcmVjaXBlcy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL3JlY2lwZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9jYW52YXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3JlY2lwZXMvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy9yZWNpcGVzLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiL29wcHNrcmlmdGVyLzpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvcmVjaXBlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlY2lwZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCIvb3Bwc2tyaWZ0ZXJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9jYW52YXNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jYW52YXNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJjYW52YXNcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9hZG1pblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWRtaW5cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9hZG1pbi8kc2x1Z1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGF0aDogXCI6c2x1Z1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2FkbWluL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU3XG4gIH0sXG4gIFwicm91dGVzL2FkbWluL25ld1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluL25ld1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hZG1pblwiLFxuICAgIHBhdGg6IFwibmV3XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZThcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU5XG4gIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCIvbG9nZy1pbm5cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTBcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgT3V0bGV0LCB1c2VDYXRjaCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBEb2N1bWVudCBmcm9tIFwiLi9jb21wb25lbnRzL2RvY3VtZW50XCJcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2FwcCNsaW5rc1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgLy8gY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdClcbiAgLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I2pzb25cbiAgcmV0dXJuIG51bGxcbn07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNkZWZhdWx0LWV4cG9ydFxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI3JvdXRlLWZpbGVuYW1lc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpXG4gIFxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT1cIk1ES1wiPlxuICAgICAgPExheW91dCB1c2VyPXt1c2VyfT5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZG9jcy9lbi92MS9hcGkvY29udmVudGlvbnMjZXJyb3Jib3VuZGFyeVxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT1cIkVycm9yIVwiPlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+VGhlcmUgd2FzIGFuIGVycm9yPC9oMT5cbiAgICAgICAgICA8cD57ZXJyb3IubWVzc2FnZX08L3A+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBIZXksIGRldmVsb3BlciwgeW91IHNob3VsZCByZXBsYWNlIHRoaXMgd2l0aCB3aGF0IHlvdSB3YW50IHlvdXJcbiAgICAgICAgICAgIHVzZXJzIHRvIHNlZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZG9jcy9lbi92MS9hcGkvY29udmVudGlvbnMjY2F0Y2hib3VuZGFyeVxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG5cbiAgbGV0IG1lc3NhZ2U7XG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDAxOlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgT29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgeW91IGRvIG5vdCBoYXZlIGFjY2Vzc1xuICAgICAgICAgIHRvLlxuICAgICAgICA8L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0MDQ6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5Pb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCBkb2VzIG5vdCBleGlzdC48L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGNhdWdodC5kYXRhIHx8IGNhdWdodC5zdGF0dXNUZXh0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfToge2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICA8L2gxPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuXG50eXBlIFByb3BzID0ge1xuICB1c2VyPzogVXNlciB8IG51bGxcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyB1c2VyLCBjaGlsZHJlbiB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTYgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8SGVhZGVyIHVzZXI9e3VzZXJ9Lz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTRcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBpdGVtcy1jZW50ZXIgcHktOCBiZy1ncmF5LTEwMFwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gSWxsbyBtYWlvcmVzXG4gICAgICAgICAgaXVyZSBpbiB2aXRhZSBpdXN0byBmdWdhIHJhdGlvbmU/XG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBnYXAtOFwiPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICBPbSBvc3NcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICBIamVscFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgIFZpbGtcdTAwRTVyXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICB7XCJDb3B5cmlnaHQgXHUwMEE5IFwifVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5jYTdvLmNvbTwvc3Bhbj4ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAge1wiLlwifVxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgPC9mb290ZXI+XG4gIClcbn1cbiIsICJjb25zdCBwcmltYXJ5ID0gXCIjRjM2QTNFXCJcbmNvbnN0IHNlY29uZGFyeSA9IFwiI0ZGQjMwQlwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDgxIDgxXCIgdmVyc2lvbj1cIjEuMVwiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTggaC04XCI+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMC40NDk5NzcsLTAuNDQ5OTc3LDAuNDQ5OTc3LDAuNDQ5OTc3LC0yMTI4LjM5LDE5MjUuOSlcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsMzk0MCwtMTEyMC41NilcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk01MjAsMTM5MC41N0w1NjAsMTM5MC41N0w1NjAsMTQwMC41N0w1MzAsMTQwMC41N0w1MzAsMTQyMC41N0w1NjAsMTQyMC41N0w1NjAsMTQzMC41N0w1MjAsMTQzMC41N0w1MjAsMTM5MC41N1pcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogcHJpbWFyeSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsMzkzMCwtMTEyMC41NilcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk02MjAsMTM5MC41N0w2MjAsMTQzMC41N0w2MTAsMTQzMC41N0w2MTAsMTQwMC41N0w1OTAsMTQwMC41N0w1OTAsMTQzMC41N0w1ODAsMTQzMC41N0w1ODAsMTM5MC41N0w2MjAsMTM5MC41N1pcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogcHJpbWFyeSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsMzk0MCwtMTEyMC41NilcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk01MjAsMTQ0MC41N0w1NjAsMTQ0MC41N0w1NjAsMTQ4MC41N0w1NTAsMTQ4MC41N0w1NTAsMTQ1MC41N0w1MjAsMTQ1MC41N0w1MjAsMTQ0MC41N1pcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogc2Vjb25kYXJ5IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwwLDAsMSwzOTMwLC0xMTIwLjU2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTU5MCwxNDcwLjU3TDYxMCwxNDcwLjU3TDYxMCwxNDUwLjU3TDU5MCwxNDUwLjU3TDU5MCwxNDcwLjU3Wk01ODAsMTQ0MC41N0w2MjAsMTQ0MC41N0w2MjAsMTQ4MC41N0w1ODAsMTQ4MC41N0w1ODAsMTQ0MC41N1pcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogcHJpbWFyeSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nb1wiO1xuXG50eXBlIFByb3BzID0ge1xuICB1c2VyPzogVXNlciB8IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgdXNlciB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZml4ZWQgei01MCB3LWZ1bGwgdG9wLTAgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE2IGJnLWdyYXktMTAwXCI+XG4gICAgICA8bmF2IGFyaWEtbGFiZWw9XCJNYWluIG5hdmlnYXRpb25cIiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4XCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIHRpdGxlPVwiUmVtaXhcIiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9vcHBza3JpZnRlclwiPk9wcHNrcmlmdGVyPC9MaW5rPlxuICAgICAgICAgIHt1c2VyID9cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZG1pblwiPkFkbWluPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLmRpc3BsYXlOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogPExpbmsgdG89XCIvbG9nZy1pbm5cIj5Mb2dnIGlubjwvTGluaz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gIClcbn0iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9ufSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnQoe1xuICBjaGlsZHJlbixcbiAgdGl0bGVcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiLy8gaW1wb3J0IE1hcmtkb3duIGZyb20gXCJtYXJrZG93bi10by1qc3hcIlxuaW1wb3J0IHsgTGluaywgTG9hZGVyRnVuY3Rpb24sIHVzZUNhdGNoLCB1c2VMb2FkZXJEYXRhLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIlxuLy8gaW1wb3J0IFJlY2lwZU1hcmtkb3duIGZyb20gXCJ+L2NvbXBvbmVudHMvcmVjaXBlL21hcmtkb3duXCJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uLy4uL3ByaXNtYS9kYi5zZXJ2ZXJcIlxuaW1wb3J0IHsgUmVjaXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIilcbiAgLy8gY29uc3QgcmVjaXBlID0gYXdhaXQgZ2V0UmVjaXBlKHBhcmFtcy5zbHVnKVxuICAvLyBpZiAoIXJlY2lwZSkge1xuICAvLyAgIHRocm93IG5ldyBSZXNwb25zZShgTm8gcmVjaXBlIGZvdW5kIHdpdGggaWQgPSAke3BhcmFtcy5zbHVnfWAsIHsgc3RhdHVzOiA0MDQgfSlcbiAgLy8gfVxuXG4gIC8vIHJldHVybiByZWNpcGVcbiAgcmV0dXJuIGF3YWl0IGRiLnJlY2lwZS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHBhcmFtcy5zbHVnKSB9IH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZSgpIHtcbiAgY29uc3QgcmVjaXBlID0gdXNlTG9hZGVyRGF0YTxSZWNpcGU+KClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGJnLXdoaXRlIGdhcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXZoMzNcIj5cbiAgICAgICAgICAgIHsvKiBUT0RPOiBvbmx5IHNob3cgZm9yIGFkbWlucyAqL31cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPXtgL2FkbWluL3JlY2lwZXMvJHtyZWNpcGUuaWR9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB6LTEwIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgdGV4dC13aGl0ZSB3LTEwIGgtMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIDxQZW5jaWxBbHRJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiAqL31cbiAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgey8qIDxSZWNpcGVNZXRyaWNzIHJlY2lwZT17cmVjaXBlfSAvPiAqL31cbiAgICAgICAgICAgIHtyZWNpcGUuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gb2JqZWN0LWNvdmVyIGgtdmgzMyB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgIHNyYz17cmVjaXBlLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17cmVjaXBlLm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGFic29sdXRlIGJvdHRvbS0wIHRleHQtY2VudGVyIHctZnVsbCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHB5LTRcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZXJpZlwiPntyZWNpcGUubmFtZX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG5cbiAgICAgIHtyZWNpcGUuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBjb250YWluZXIgbXgtYXV0byBweC00IHNtOnB4LTAgYmctd2hpdGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7LyogPFJlY2lwZU1hcmtkb3duIG1hcmtkb3duPXtyZWNpcGUuZGVzY3JpcHRpb259IC8+ICovfVxuICAgICAgICAgIHtyZWNpcGUuZGVzY3JpcHRpb259XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvPlxuICApXG5cbiAgLy8gcmV0dXJuIChcbiAgLy8gICA8PlxuICAvLyAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHgtNCBzbTpweC0wXCI+XG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBiZy13aGl0ZSBnYXAtNFwiPlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC12aDMzXCI+XG4gIC8vICAgICAgICAgICB7LyogVE9ETzogb25seSBzaG93IGZvciBhZG1pbnMgKi99XG4gIC8vICAgICAgICAgICA8TGlua1xuICAvLyAgICAgICAgICAgICB0bz17YC9hZG1pbi9yZWNpcGVzLyR7cmVjaXBlLmlkfWB9XG4gIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgei0xMCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHRleHQtd2hpdGUgdy0xMCBoLTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbFwiXG4gIC8vICAgICAgICAgICA+XG4gIC8vICAgICAgICAgICAgIHsvKiA8UGVuY2lsQWx0SWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gIC8vICAgICAgICAgICAgIEVkaXRcbiAgLy8gICAgICAgICAgIDwvTGluaz5cbiAgLy8gICAgICAgICAgIHsvKiA8UmVjaXBlTWV0cmljcyByZWNpcGU9e3JlY2lwZX0gLz4gKi99XG4gIC8vICAgICAgICAgICB7cmVjaXBlLmltYWdlICYmIChcbiAgLy8gICAgICAgICAgICAgPGltZ1xuICAvLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG9iamVjdC1jb3ZlciBoLXZoMzMgdy1mdWxsXCJcbiAgLy8gICAgICAgICAgICAgICBzcmM9e3JlY2lwZS5pbWFnZX1cbiAgLy8gICAgICAgICAgICAgICBhbHQ9e3JlY2lwZS5uYW1lfVxuICAvLyAgICAgICAgICAgICAvPlxuICAvLyAgICAgICAgICAgKX1cbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBhYnNvbHV0ZSBib3R0b20tMCB0ZXh0LWNlbnRlciB3LWZ1bGwgYmctYmxhY2sgYmctb3BhY2l0eS01MCBweS00XCI+XG4gIC8vICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VyaWZcIj57cmVjaXBlLm5hbWV9PC9oMT5cbiAgLy8gICAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICA8L2Rpdj5cblxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC00IHAtNCBiZy13aGl0ZVwiPlxuICAvLyAgICAgICAgIDxidXR0b25cbiAgLy8gICAgICAgICAgIGFyaWEtbGFiZWw9XCJsZWdnIHRpbCBzb20gZmF2b3JpdHRcIlxuICAvLyAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgLy8gICAgICAgICA+XG4gIC8vICAgICAgICAgICB7LyogPEJvb2ttYXJrSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+TGFncmUgc29tIGZhdm9yaXR0PC9kaXY+XG4gIC8vICAgICAgICAgPC9idXR0b24+XG5cbiAgLy8gICAgICAgICA8YnV0dG9uXG4gIC8vICAgICAgICAgICBhcmlhLWxhYmVsPVwibGVnZyB0aWwgbWVueVwiXG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIlxuICAvLyAgICAgICAgID5cbiAgLy8gICAgICAgICAgIHsvKiA8Qm9va09wZW5JY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiAqL31cbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMiBoaWRkZW4gbGc6YmxvY2tcIj5MZWdnIHRpbCBtZW55PC9kaXY+XG4gIC8vICAgICAgICAgPC9idXR0b24+XG5cbiAgLy8gICAgICAgICA8YnV0dG9uXG4gIC8vICAgICAgICAgICBhcmlhLWxhYmVsPVwicHJpbnRcIlxuICAvLyAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgLy8gICAgICAgICA+XG4gIC8vICAgICAgICAgICB7LyogPFByaW50ZXJJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiAqL31cbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMiBoaWRkZW4gbGc6YmxvY2tcIj5QcmludDwvZGl2PlxuICAvLyAgICAgICAgIDwvYnV0dG9uPlxuXG4gIC8vICAgICAgICAgPGJ1dHRvblxuICAvLyAgICAgICAgICAgYXJpYS1sYWJlbD1cImxhc3QgbmVkXCJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gIC8vICAgICAgICAgPlxuICAvLyAgICAgICAgICAgey8qIDxTYXZlSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+TGFncmU8L2Rpdj5cbiAgLy8gICAgICAgICA8L2J1dHRvbj5cblxuICAvLyAgICAgICAgIHtyZWNpcGUuc291cmNlID8gKFxuICAvLyAgICAgICAgICAgPGFcbiAgLy8gICAgICAgICAgICAgaHJlZj17cmVjaXBlLnNvdXJjZX1cbiAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgLy8gICAgICAgICAgID5cbiAgLy8gICAgICAgICAgICAgey8qIDxFeHRlcm5hbExpbmtJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiAqL31cbiAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIGhpZGRlbiBsZzpibG9ja1wiPktpbGRlPC9kaXY+XG4gIC8vICAgICAgICAgICA8L2E+XG4gIC8vICAgICAgICAgKSA6IG51bGx9XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgPC9zZWN0aW9uPlxuXG4gIC8vICAgICB7cmVjaXBlLmRlc2NyaXB0aW9uID8gKFxuICAvLyAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC0wIGJnLXdoaXRlIHRleHQtY2VudGVyXCI+XG4gIC8vICAgICAgICAgPFJlY2lwZU1hcmtkb3duIG1hcmtkb3duPXtyZWNpcGUuZGVzY3JpcHRpb259IC8+XG4gIC8vICAgICAgIDwvc2VjdGlvbj5cbiAgLy8gICAgICkgOiBudWxsfVxuXG4gIC8vICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHNtOnB4LTAgYmctd2hpdGUgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtNFwiPlxuXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206dy0xLzIgeGw6dy01LzEyXCI+XG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdGV4dC1sZyB1cHBlcmNhc2UgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMFwiPlxuICAvLyAgICAgICAgICAgSW5ncmVkaWVuc2VyXG4gIC8vICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgPFJlY2lwZU1hcmtkb3duIG1hcmtkb3duPXtyZWNpcGUuaW5ncmVkaWVudHN9IC8+XG4gIC8vICAgICAgIDwvZGl2PlxuXG4gIC8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206dy0xLzIgeGw6dy03LzEyXCI+XG4gIC8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdGV4dC1sZyB1cHBlcmNhc2UgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMFwiPlxuICAvLyAgICAgICAgICAgRnJlbWdhbmdzbVx1MDBFNXRlXG4gIC8vICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgICAgPFJlY2lwZU1hcmtkb3duIG1hcmtkb3duPXtyZWNpcGUuc3RlcHN9IC8+XG4gIC8vICAgICAgIDwvZGl2PlxuICAvLyAgICAgPC9zZWN0aW9uPlxuICAvLyAgIDwvPlxuICAvLyApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuICBjb25zdCB7IHNsdWcgfSA9IHVzZVBhcmFtcygpO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwNDoge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250YWluZXJcIj5cbiAgICAgICAgICBGYW50IGluZ2VuIG9wcHNrcmlmdCBtZWQgaWQ6IFwie3NsdWd9XCJcbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICBjYXNlIDQwMToge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250YWluZXJcIj5cbiAgICAgICAgICBEdSBoYXIgaWtrZSB0aWxnYW5nIHRpbCBvcHBza3JpZnQgbWVkIGlkOiBcIntzbHVnfVwiXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVa2plbnQgZmVpbDogJHtjYXVnaHQuc3RhdHVzfWApO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUT0RPOiBtYWtlIHBlcnRpZXIgb3IgcmVtb3ZlIHRvIGNhdGNoIGhpZ2hlciB1cCA/ICh0aHJvdyBuZXcgRXJyb3IoXCJ3b29vXCIpIGluIGxvYWRlciB0byB2aWV3KVxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIGNvbnN0IHsgc2x1ZyB9ID0gdXNlUGFyYW1zKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250YWluZXJcIj5EZXQgc2tqZWRkZSBlbiBmZWlsIG1lZCBsYXN0aW5nIGF2IG9wcHNrcmlmdCBtZWQgaWQ6IFwie3NsdWd9XCIuPC9kaXY+XG4gICk7XG59IiwgImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbmxldCBkYjogUHJpc21hQ2xpZW50XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIGRiID0gbmV3IFByaXNtYUNsaWVudCgpXG4gIGRiLiRjb25uZWN0KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLl9fZGIpIHtcbiAgICBnbG9iYWwuX19kYiA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICAgIGdsb2JhbC5fX2RiLiRjb25uZWN0KClcbiAgfVxuXG4gIGRiID0gZ2xvYmFsLl9fZGJcbn1cblxuZXhwb3J0IHsgZGIgfSIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IFJlY2lwZUNhcmQgZnJvbSBcIn4vY29tcG9uZW50cy9yZWNpcGUtY2FyZFwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi8uLi9wcmlzbWEvZGIuc2VydmVyXCJcbmltcG9ydCB7IFJlY2lwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAvLyByZXR1cm4gZ2V0UmVjaXBlcygxMilcbiAgLy8gY29uc3QgZGF0YTogTG9hZGVyRGF0YVxuICByZXR1cm4gYXdhaXQgZGIucmVjaXBlLmZpbmRNYW55KClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlcygpIHtcbiAgY29uc3QgcmVjaXBlcyA9IHVzZUxvYWRlckRhdGE8UmVjaXBlW10+KClcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHNtOnB4LTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FwLTQgZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCB4bDpncmlkLWNvbHMtNVwiPlxuICAgICAgICB7cmVjaXBlcy5tYXAocmVjaXBlID0+IChcbiAgICAgICAgICA8UmVjaXBlQ2FyZCBrZXk9e3JlY2lwZS5pZH0gcmVjaXBlPXtyZWNpcGV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIiwgImltcG9ydCB7IFJlY2lwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVDYXJkKHsgcmVjaXBlIH06IHsgcmVjaXBlOiBSZWNpcGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICB0bz17cmVjaXBlLmlkLnRvU3RyaW5nKCl9XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnXCJcbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTY0IG9iamVjdC1jb3ZlclwiXG4gICAgICAgIHNyYz17cmVjaXBlLmltYWdlfVxuICAgICAgICBhbHQ9e3JlY2lwZS5uYW1lfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBsZWZ0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrIHRvLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTIgYm90dG9tLTIgbGVmdC0yIHotMTAgdGV4dC13aGl0ZSB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgdGV4dC1iYXNlXCI+XG4gICAgICAgIHtyZWNpcGUubmFtZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKVxufSIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuXG5jb25zdCBkcmF3ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBmcmFtZUNvdW50OiBudW1iZXIpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodClcbiAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJ1xuICBjdHguYmVnaW5QYXRoKClcbiAgY3R4LmFyYyg1MCwgMTAwLCAyMCAqIE1hdGguc2luKGZyYW1lQ291bnQgKiAwLjA1KSAqKiAyLCAwLCAyICogTWF0aC5QSSlcbiAgY3R4LmZpbGwoKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FudmFzKCkge1xuXG4gIGNvbnN0IGNhbnZhc1JlZiA9IFJlYWN0LnVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpXG5cblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnRcblxuICAgIGlmICghY2FudmFzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmcmFtZUNvdW50ID0gMFxuICAgIGxldCBhbmltYXRpb25GcmFtZUlkID0gMFxuICAgIC8vT3VyIGRyYXcgY2FtZSBoZXJlXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgZnJhbWVDb3VudCsrXG4gICAgICBkcmF3KGNvbnRleHQsIGZyYW1lQ291bnQpXG4gICAgICBhbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpXG4gICAgfVxuICAgIHJlbmRlcigpXG5cbiAgICByZXR1cm4gKCkgPT4geyB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCkgfVxuICB9LCBbZHJhd10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhlaTwvaDE+XG4gICAgICA8Y2FudmFzIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJjb3JuZmxvd2VyYmx1ZVwiIH19IHJlZj17Y2FudmFzUmVmfT48L2NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgKVxuXG59IiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwiLi4vLi4vcHJpc21hL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4gbG9nb3V0KHJlcXVlc3QpXG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL1wiKSIsICJpbXBvcnQgeyBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIlxuXG50eXBlIExvZ2luRm9ybSA9IHtcbiAgdXNlcm5hbWU6IHN0cmluZ1xuICBwYXNzd29yZDogc3RyaW5nXG59XG5cbi8vIFRPRE86IGNyZWF0ZSB1c2VyIGluIGZpcmViYXNlL3VzZXJzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XG4gIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgdXNlcm5hbWUsIHBhc3N3b3JkKVxuICAvLyAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4gdXNlckNyZWRlbnRpYWwudXNlcilcbiAgLy8gICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKTogYW55IHtcbiAgLy8gICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGVcbiAgLy8gICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2VcbiAgLy8gICAgIGlmIChlcnJvckNvZGUgPT0gXCJhdXRoL3dlYWstcGFzc3dvcmRcIikge1xuICAvLyAgICAgICByZXR1cm4gXCJUaGUgcGFzc3dvcmQgaXMgdG9vIHdlYWsuXCJcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2VcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuXG4gIC8vIHJldHVybiB1c2VyXG4gIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xuICAvLyBjb25zdCB1c2VyID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgdXNlcm5hbWUsIHBhc3N3b3JkKVxuICAvLyAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4gdXNlckNyZWRlbnRpYWwudXNlcilcbiAgLy8gICAuY2F0Y2goKGVycikgPT4ge1xuICAvLyAgICAgZXJyLmNvZGVcbiAgLy8gICAgIGVyci5tZXNzYWdlXG4gIC8vICAgfSlcbiAgLy8gcmV0dXJuIHVzZXJcbiAgcmV0dXJuIG51bGxcbn1cblxuLy8gVE9ETzogdXNlIGVudiBhZ2FpbiFcbi8vIGNvbnN0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVFxuLy8gaWYgKCFzZXNzaW9uU2VjcmV0KSB7XG4vLyAgIHRocm93IG5ldyBFcnJvcihcIlNFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0XCIpXG4vLyB9XG5cbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiUkpfc2Vzc2lvblwiLFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbXCJ3ZWVlMTIzNHdlZWVcIl0sXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpXG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFwidXNlcklkXCIpXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHJldHVybiBudWxsXG4gIHJldHVybiB1c2VySWRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKVxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbW1wicmVkaXJlY3RUb1wiLCByZWRpcmVjdFRvXV0pXG4gICAgdGhyb3cgcmVkaXJlY3QoYC9sb2dnLWlubj8ke3NlYXJjaFBhcmFtc31gKVxuICB9XG4gIHJldHVybiB1c2VySWRcbn1cblxuLy8gVE9ETzogZ2V0IHVzZXIgZnJvbSBmaXJlYmFzZS91c2Vycywgbm90IGF1dGhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcm9taXNlPGFueSB8IG51bGw+IHtcbiAgLy8gY29uc3QgdXNlcklkID0gYXV0aC5jdXJyZW50VXNlcj8uZW1haWxcbiAgLy8gaWYgKHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgLy8gICByZXR1cm4gbnVsbFxuICAvLyB9XG5cbiAgLy8gdHJ5IHtcbiAgLy8gICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlclxuICAvLyAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4gdXNlcilcbiAgLy8gICByZXR1cm4gdXNlclxuICAvLyB9IGNhdGNoIHtcbiAgLy8gICB0aHJvdyBsb2dvdXQocmVxdWVzdClcbiAgLy8gfVxuICByZXR1cm4gbnVsbFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgLy8gc2lnbk91dChhdXRoKVxuICAvLyBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpXG4gIC8vIHJldHVybiByZWRpcmVjdChcIi9sb2dnLWlublwiLCB7XG4gIC8vICAgaGVhZGVyczoge1xuICAvLyAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gIC8vICAgfSxcbiAgLy8gfSlcbiAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24oXG4gIHVzZXJJZDogc3RyaW5nIHwgbnVsbCxcbiAgcmVkaXJlY3RUbzogc3RyaW5nXG4pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbigpXG4gIHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHVzZXJJZClcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG4iLCAiaW1wb3J0IHsgUmVjaXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgTGluaywgT3V0bGV0LCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL3ByaXNtYS9kYi5zZXJ2ZXJcIlxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICAvLyBUT0RPIGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdClcbiAgcmV0dXJuIGF3YWl0IGRiLnJlY2lwZS5maW5kTWFueSgpICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW4oKSB7XG4gIGNvbnN0IHJlY2lwZXMgPSB1c2VMb2FkZXJEYXRhPFJlY2lwZVtdPigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZ2FwLTRcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYm9yZGVyLXIgYm9yZGVyLWdyYXktNjAwIHByLTRcIj5cbiAgICAgICAgPGgxPkFkbWluPC9oMT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHtyZWNpcGVzLm1hcChyZWNpcGUgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17cmVjaXBlLmlkfT5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvYWRtaW4vJHtyZWNpcGUuaWR9YH0+XG4gICAgICAgICAgICAgICAge3JlY2lwZS5uYW1lfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSIsICJpbXBvcnQgeyBSZWNpcGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCJcbmltcG9ydCBJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uLy4uL3ByaXNtYS9kYi5zZXJ2ZXJcIlxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgXCJleHBlY3RlZCBwYXJhbXMuc2x1Z1wiKVxuXG4gIC8vIGNvbnN0IHJlY2lwZSA9IGF3YWl0IGdldFJlY2lwZShwYXJhbXMuc2x1ZywgZmFsc2UpXG4gIC8vIGlmICghcmVjaXBlKSB7XG4gIC8vICAgdGhyb3cgbmV3IFJlc3BvbnNlKGBObyByZWNpcGUgZm91bmQgd2l0aCBpZCA9ICR7cGFyYW1zLnNsdWd9YCwgeyBzdGF0dXM6IDQwNCB9KVxuICAvLyB9XG4gIC8vIHJldHVybiByZWNpcGVcblxuICByZXR1cm4gYXdhaXQgZGIucmVjaXBlLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZDogcGFyc2VJbnQocGFyYW1zLnNsdWcpIH0gfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdCgpIHtcbiAgY29uc3QgcmVjaXBlID0gdXNlTG9hZGVyRGF0YTxSZWNpcGU+KClcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMT5FZGl0OiB7cmVjaXBlLm5hbWV9PC9oMT5cblxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgPElucHV0IG5hbWU9XCJuYW1lXCIgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e3JlY2lwZS5uYW1lfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cImltYWdlXCIgbGFiZWw9XCJJbWFnZVwiIHZhbHVlPXtyZWNpcGUuaW1hZ2V9IC8+XG4gICAgICAgIHsvKiA8SW5wdXQgbmFtZT1cInNvdXJjZVwiIGxhYmVsPVwiU291cmNlXCIgdmFsdWU9e3JlY2lwZS5zb3VyY2V9IC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwidGltZVwiIGxhYmVsPVwidGltZVwiIHZhbHVlPXtyZWNpcGUudGltZX0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJ0eXBlXCIgbGFiZWw9XCJ0eXBlXCIgdmFsdWU9e3JlY2lwZS50eXBlfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInRhZ3NcIiBsYWJlbD1cInRhZ3NcIiB2YWx1ZT17cmVjaXBlLnRhZ3N9IC8+ICovfVxuXG5cbiAgICAgICAgey8qIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9XCJpbmdyZWRpZW50c1wiPlxuICAgICAgICAgIEluZ3JlZGllbnRzXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImlucHV0IGgtMjBcIiBpZD1cImluZ3JlZGllbnRzXCIgcm93cz17MjB9IG5hbWU9XCJpbmdyZWRpZW50c1wiPlxuICAgICAgICAgICAge3JlY2lwZS5pbmdyZWRpZW50c31cbiAgICAgICAgICA8L3RleHRhcmVhPiAqL31cbiAgICAgICAgICB7Lyoge2Vycm9ycz8ubWFya2Rvd24gJiYgPGRpdj5NYXJrZG93biBpcyByZXF1aXJlZDwvZGl2Pn0gKi99XG4gICAgICAgIHsvKiA8L2xhYmVsPiAqL31cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkxhZ3Jlci4uLlwiIDogXCJMYWdyZVwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cblxuICAgIDwvZGl2PlxuICApXG59IiwgImludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgUmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIG5hbWU6IHN0cmluZ1xuICBsYWJlbD86IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dCh7IG5hbWUsIGxhYmVsLCAuLi5yZXN0IH06IElucHV0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xhYmVsID8gPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj17bmFtZX0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+IDogbnVsbH1cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9e25hbWV9IG5hbWU9e25hbWV9IHsuLi5yZXN0fSAvPlxuICAgICAgey8qIHtlcnJvcnM/LnRpdGxlICYmIDxkaXY+VGl0bGUgaXMgcmVxdWlyZWQ8L2Rpdj59ICovfVxuICAgIDwvPlxuICApXG59IiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPHA+XG4gICAgICA8TGluayB0bz1cIm5ld1wiPkNyZWF0ZSBhIG5ldyByZWNpcGU8L0xpbms+XG4gICAgPC9wPlxuICApXG59IiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IEZvcm0sIHVzZUFjdGlvbkRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuLy8gaW1wb3J0IHsgY3JlYXRlUmVjaXBlIH0gZnJvbSBcIn4vc2VydmljZXMvcmVjaXBlLXNlcnZpY2VcIjtcblxudHlwZSBQb3N0RXJyb3IgPSB7XG4gIHRpdGxlPzogYm9vbGVhblxuICBzbHVnPzogYm9vbGVhblxuICBtYXJrZG93bj86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCAxMDAwKSlcblxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIilcbiAgY29uc3Qgc2x1ZyA9IGZvcm1EYXRhLmdldChcInNsdWdcIilcbiAgY29uc3QgbWFya2Rvd24gPSBmb3JtRGF0YS5nZXQoXCJtYXJrZG93blwiKVxuXG4gIGNvbnN0IGVycm9yczogUG9zdEVycm9yID0ge31cbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZVxuICBpZiAoIXNsdWcpIGVycm9ycy5zbHVnID0gdHJ1ZVxuICBpZiAoIW1hcmtkb3duKSBlcnJvcnMubWFya2Rvd24gPSB0cnVlXG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIilcbiAgaW52YXJpYW50KHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiKVxuICBpbnZhcmlhbnQodHlwZW9mIG1hcmtkb3duID09PSBcInN0cmluZ1wiKVxuICAvLyBhd2FpdCBjcmVhdGVSZWNpcGUoeyB0aXRsZSwgc2x1ZywgbWFya2Rvd24gfSlcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvYWRtaW5cIilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UG9zdCgpIHtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPVwidGl0bGVcIj5cbiAgICAgICAgVGl0bGU6XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIC8+XG4gICAgICAgIHtlcnJvcnM/LnRpdGxlICYmIDxkaXY+VGl0bGUgaXMgcmVxdWlyZWQ8L2Rpdj59XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5cbiAgICAgICAgU2x1ZzogPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwic2x1Z1wiIC8+XG4gICAgICAgIHtlcnJvcnM/LnNsdWcgJiYgPGRpdj5TbHVnIGlzIHJlcXVpcmVkPC9kaXY+fVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cIm1hcmtkb3duXCI+TWFya2Rvd246XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJpbnB1dCBoLTIwXCIgaWQ9XCJtYXJrZG93blwiIHJvd3M9ezIwfSBuYW1lPVwibWFya2Rvd25cIiAvPlxuICAgICAgICB7ZXJyb3JzPy5tYXJrZG93biAmJiA8ZGl2Pk1hcmtkb3duIGlzIHJlcXVpcmVkPC9kaXY+fVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkxhZ3Jlci4uLlwiIDogXCJMYWdyZVwifVxuICAgICAgPC9idXR0b24+XG4gICAgPC9Gb3JtPlxuICApXG59IiwgImltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbi8vIHR5cGUgSW5kZXhEYXRhID0ge1xuLy8gICByZXNvdXJjZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB1cmw6IHN0cmluZyB9Pjtcbi8vICAgZGVtb3M6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB0bzogc3RyaW5nIH0+O1xuLy8gfTtcblxuLy8gLy8gTG9hZGVycyBwcm92aWRlIGRhdGEgdG8gY29tcG9uZW50cyBhbmQgYXJlIG9ubHkgZXZlciBjYWxsZWQgb24gdGhlIHNlcnZlciwgc29cbi8vIC8vIHlvdSBjYW4gY29ubmVjdCB0byBhIGRhdGFiYXNlIG9yIHJ1biBhbnkgc2VydmVyIHNpZGUgY29kZSB5b3Ugd2FudCByaWdodCBuZXh0XG4vLyAvLyB0byB0aGUgY29tcG9uZW50IHRoYXQgcmVuZGVycyBpdC5cbi8vIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNsb2FkZXJcbi8vIGV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbi8vICAgbGV0IGRhdGE6IEluZGV4RGF0YSA9IHtcbi8vICAgICByZXNvdXJjZXM6IFtcbi8vICAgICAgIHtcbi8vICAgICAgICAgbmFtZTogXCJSZW1peCBEb2NzXCIsXG4vLyAgICAgICAgIHVybDogXCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIG5hbWU6IFwiUmVhY3QgUm91dGVyIERvY3NcIixcbi8vICAgICAgICAgdXJsOiBcImh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3NcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgbmFtZTogXCJSZW1peCBEaXNjb3JkXCIsXG4vLyAgICAgICAgIHVybDogXCJodHRwczovL2Rpc2NvcmQuZ2cvVkJlUHM2ZFwiXG4vLyAgICAgICB9XG4vLyAgICAgXSxcbi8vICAgICBkZW1vczogW1xuLy8gICAgICAge1xuLy8gICAgICAgICB0bzogXCJkZW1vcy9hY3Rpb25zXCIsXG4vLyAgICAgICAgIG5hbWU6IFwiQWN0aW9uc1wiXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICB0bzogXCJkZW1vcy9hYm91dFwiLFxuLy8gICAgICAgICBuYW1lOiBcIk5lc3RlZCBSb3V0ZXMsIENTUyBsb2FkaW5nL3VubG9hZGluZ1wiXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICB0bzogXCJkZW1vcy9wYXJhbXNcIixcbi8vICAgICAgICAgbmFtZTogXCJVUkwgUGFyYW1zIGFuZCBFcnJvciBCb3VuZGFyaWVzXCJcbi8vICAgICAgIH1cbi8vICAgICBdXG4vLyAgIH07XG5cbi8vICAgLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I2pzb25cbi8vICAgcmV0dXJuIGpzb24oZGF0YSk7XG4vLyB9O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbWV0YVxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiUmVtaXggU3RhcnRlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldlbGNvbWUgdG8gcmVtaXghXCJcbiAgfTtcbn07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9yb3V0aW5nI2luZGV4LXJvdXRlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMT5BIHRpdGxlPC9oMT5cbiAgICAgICAgPHA+SGVsbHV1dXU8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBGb3JtLCB1c2VTZWFyY2hQYXJhbXMsIHVzZVRyYW5zaXRpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiwgbG9naW4gfSBmcm9tIFwiLi4vLi4vcHJpc21hL3Nlc3Npb24uc2VydmVyXCI7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWU6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fCB1c2VybmFtZS5sZW5ndGggPCAzKSB7XG4gICAgcmV0dXJuIGBVc2VybmFtZXMgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZDogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiIHx8IHBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICByZXR1cm4gYFBhc3N3b3JkcyBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nYDtcbiAgfVxufVxuXG50eXBlIEFjdGlvbkRhdGEgPSB7XG4gIGZvcm1FcnJvcj86IHN0cmluZztcbiAgZmllbGRFcnJvcnM/OiB7XG4gICAgdXNlcm5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBwYXNzd29yZDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICB9O1xuICBmaWVsZHM/OiB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pOiBQcm9taXNlPFJlc3BvbnNlIHwgQWN0aW9uRGF0YT4gPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIik7XG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcbiAgY29uc3QgcmVkaXJlY3RUbyA9IGZvcm0uZ2V0KFwicmVkaXJlY3RUb1wiKSB8fCBcIi9cIjtcbiAgXG4gIGlmIChcbiAgICB0eXBlb2YgdXNlcm5hbWUgIT09IFwic3RyaW5nXCIgfHxcbiAgICB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHxcbiAgICB0eXBlb2YgcmVkaXJlY3RUbyAhPT0gXCJzdHJpbmdcIlxuICApIHtcbiAgICByZXR1cm4geyBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAgfTtcbiAgfVxuXG4gIGNvbnN0IGZpZWxkcyA9IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH07XG4gIGNvbnN0IGZpZWxkRXJyb3JzID0ge1xuICAgIHVzZXJuYW1lOiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lKSxcbiAgICBwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZClcbiAgfTtcbiAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpXG4gICAgcmV0dXJuIHsgZmllbGRFcnJvcnMsIGZpZWxkcyB9O1xuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZpZWxkcyxcbiAgICAgIGZvcm1FcnJvcjogYFVzZXJuYW1lL1Bhc3N3b3JkIGNvbWJpbmF0aW9uIGlzIGluY29ycmVjdGBcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIudWlkLCByZWRpcmVjdFRvKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcbiAgY29uc3QgW3NlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxoMT5Mb2dnIGlubjwvaDE+XG4gICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInJlZGlyZWN0VG9cIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9e3NlYXJjaFBhcmFtcy5nZXQoXCJyZWRpcmVjdFRvXCIpID8/IHVuZGVmaW5lZH0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJ1c2VybmFtZVwiIGxhYmVsPVwiQnJ1a2VybmF2blwiIHR5cGU9XCJlbWFpbFwiIC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwicGFzc3dvcmRcIiBsYWJlbD1cIlBhc3NvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiAvPlxuXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAge3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IFwiTG9nZ2VyIGlubi4uLlwiIDogXCJMb2dnIGlublwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBQUE7QUFBQTs7O0FDQXZCO0FBQUE7QUFBQTtBQVVBO0FBRUEsV0FBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU87QUFFdEQsUUFBSSxRQUFRLFFBQVE7QUFJcEIs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
