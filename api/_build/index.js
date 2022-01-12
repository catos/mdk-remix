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
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, {
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

// app/firebase/session.server.ts
init_react();
var import_remix9 = __toModule(require_remix());
async function login({ username, password }) {
  throw new Error("Not implemented!");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2xheW91dC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9sb2dvLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9oZWFkZXIudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2RvY3VtZW50LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL3JlY2lwZXMvJHNsdWcudHN4IiwgIi4uLy4uL3ByaXNtYS9kYi5zZXJ2ZXIudHMiLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9yZWNpcGVzL2luZGV4LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9yZWNpcGUtY2FyZC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9jYW52YXMudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICIuLi8uLi9hcHAvZmlyZWJhc2Uvc2Vzc2lvbi5zZXJ2ZXIudHMiLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi8kc2x1Zy50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvdWkvaW5wdXQudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vbmV3LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2xvZ2luLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvcmVjaXBlcy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL3JlY2lwZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9jYW52YXMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTggZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTAgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3JlY2lwZXMvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy9yZWNpcGVzLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiL29wcHNrcmlmdGVyLzpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvcmVjaXBlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlY2lwZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCIvb3Bwc2tyaWZ0ZXJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9jYW52YXNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jYW52YXNcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJjYW52YXNcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9hZG1pblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWRtaW5cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9hZG1pbi8kc2x1Z1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGF0aDogXCI6c2x1Z1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2FkbWluL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU3XG4gIH0sXG4gIFwicm91dGVzL2FkbWluL25ld1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluL25ld1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hZG1pblwiLFxuICAgIHBhdGg6IFwibmV3XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZThcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU5XG4gIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCIvbG9nZy1pbm5cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMTBcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgT3V0bGV0LCB1c2VDYXRjaCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBEb2N1bWVudCBmcm9tIFwiLi9jb21wb25lbnRzL2RvY3VtZW50XCJcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2FwcCNsaW5rc1xuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH1dO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgLy8gY29uc3QgdXNlciA9IGF3YWl0IGdldFVzZXIocmVxdWVzdClcbiAgLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I2pzb25cbiAgcmV0dXJuIG51bGxcbn07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNkZWZhdWx0LWV4cG9ydFxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI3JvdXRlLWZpbGVuYW1lc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCB1c2VyID0gdXNlTG9hZGVyRGF0YSgpXG4gIFxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxMYXlvdXQgdXNlcj17dXNlcn0+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2Vycm9yYm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG4gICAgICAgICAgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSGV5LCBkZXZlbG9wZXIsIHlvdSBzaG91bGQgcmVwbGFjZSB0aGlzIHdpdGggd2hhdCB5b3Ugd2FudCB5b3VyXG4gICAgICAgICAgICB1c2VycyB0byBzZWUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2NhdGNoYm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIGxldCBtZXNzYWdlO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIE9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3NcbiAgICAgICAgICB0by5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+T29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihjYXVnaHQuZGF0YSB8fCBjYXVnaHQuc3RhdHVzVGV4dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgPC9oMT5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdXNlcj86IFVzZXIgfCBudWxsXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgdXNlciwgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTE2IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPEhlYWRlciB1c2VyPXt1c2VyfS8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS00XCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgaXRlbXMtY2VudGVyIHB5LTggYmctZ3JheS0xMDBcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIElsbG8gbWFpb3Jlc1xuICAgICAgICAgIGl1cmUgaW4gdml0YWUgaXVzdG8gZnVnYSByYXRpb25lP1xuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZ2FwLThcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgT20gb3NzXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgSGplbHBcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICBWaWxrXHUwMEU1clxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAge1wiQ29weXJpZ2h0IFx1MDBBOSBcIn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Y2E3by5jb208L3NwYW4+IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgIHtcIi5cIn1cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvZm9vdGVyPlxuICApXG59XG4iLCAiY29uc3QgcHJpbWFyeSA9IFwiI0YzNkEzRVwiXG5jb25zdCBzZWNvbmRhcnkgPSBcIiNGRkIzMEJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCA4MSA4MVwiIHZlcnNpb249XCIxLjFcIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy04IGgtOFwiPlxuICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDAuNDQ5OTc3LC0wLjQ0OTk3NywwLjQ0OTk3NywwLjQ0OTk3NywtMjEyOC4zOSwxOTI1LjkpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDM5NDAsLTExMjAuNTYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNTIwLDEzOTAuNTdMNTYwLDEzOTAuNTdMNTYwLDE0MDAuNTdMNTMwLDE0MDAuNTdMNTMwLDE0MjAuNTdMNTYwLDE0MjAuNTdMNTYwLDE0MzAuNTdMNTIwLDE0MzAuNTdMNTIwLDEzOTAuNTdaXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IHByaW1hcnkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDM5MzAsLTExMjAuNTYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNjIwLDEzOTAuNTdMNjIwLDE0MzAuNTdMNjEwLDE0MzAuNTdMNjEwLDE0MDAuNTdMNTkwLDE0MDAuNTdMNTkwLDE0MzAuNTdMNTgwLDE0MzAuNTdMNTgwLDEzOTAuNTdMNjIwLDEzOTAuNTdaXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IHByaW1hcnkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDM5NDAsLTExMjAuNTYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNTIwLDE0NDAuNTdMNTYwLDE0NDAuNTdMNTYwLDE0ODAuNTdMNTUwLDE0ODAuNTdMNTUwLDE0NTAuNTdMNTIwLDE0NTAuNTdMNTIwLDE0NDAuNTdaXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IHNlY29uZGFyeSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsMzkzMCwtMTEyMC41NilcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk01OTAsMTQ3MC41N0w2MTAsMTQ3MC41N0w2MTAsMTQ1MC41N0w1OTAsMTQ1MC41N0w1OTAsMTQ3MC41N1pNNTgwLDE0NDAuNTdMNjIwLDE0NDAuNTdMNjIwLDE0ODAuNTdMNTgwLDE0ODAuNTdMNTgwLDE0NDAuNTdaXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IHByaW1hcnkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29cIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdXNlcj86IFVzZXIgfCBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHVzZXIgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIHotNTAgdy1mdWxsIHRvcC0wIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNiBiZy1ncmF5LTEwMFwiPlxuICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiTWFpbiBuYXZpZ2F0aW9uXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleFwiPlxuICAgICAgICA8TGluayB0bz1cIi9cIiB0aXRsZT1cIlJlbWl4XCIgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvb3Bwc2tyaWZ0ZXJcIj5PcHBza3JpZnRlcjwvTGluaz5cbiAgICAgICAgICB7dXNlciA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWRtaW5cIj5BZG1pbjwvTGluaz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dXNlci5kaXNwbGF5TmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IDxMaW5rIHRvPVwiL2xvZ2ctaW5uXCI+TG9nZyBpbm48L0xpbms+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApXG59IiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlPzogc3RyaW5nO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiYmctZ3JheS00MDBcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgIi8vIGltcG9ydCBNYXJrZG93biBmcm9tIFwibWFya2Rvd24tdG8tanN4XCJcbmltcG9ydCB7IExpbmssIExvYWRlckZ1bmN0aW9uLCB1c2VDYXRjaCwgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCJcbi8vIGltcG9ydCBSZWNpcGVNYXJrZG93biBmcm9tIFwifi9jb21wb25lbnRzL3JlY2lwZS9tYXJrZG93blwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi8uLi9wcmlzbWEvZGIuc2VydmVyXCJcbmltcG9ydCB7IFJlY2lwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5zbHVnLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpXG4gIC8vIGNvbnN0IHJlY2lwZSA9IGF3YWl0IGdldFJlY2lwZShwYXJhbXMuc2x1ZylcbiAgLy8gaWYgKCFyZWNpcGUpIHtcbiAgLy8gICB0aHJvdyBuZXcgUmVzcG9uc2UoYE5vIHJlY2lwZSBmb3VuZCB3aXRoIGlkID0gJHtwYXJhbXMuc2x1Z31gLCB7IHN0YXR1czogNDA0IH0pXG4gIC8vIH1cblxuICAvLyByZXR1cm4gcmVjaXBlXG4gIHJldHVybiBhd2FpdCBkYi5yZWNpcGUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiBwYXJzZUludChwYXJhbXMuc2x1ZykgfSB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGUoKSB7XG4gIGNvbnN0IHJlY2lwZSA9IHVzZUxvYWRlckRhdGE8UmVjaXBlPigpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHgtNCBzbTpweC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBiZy13aGl0ZSBnYXAtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC12aDMzXCI+XG4gICAgICAgICAgICB7LyogVE9ETzogb25seSBzaG93IGZvciBhZG1pbnMgKi99XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz17YC9hZG1pbi9yZWNpcGVzLyR7cmVjaXBlLmlkfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgei0xMCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHRleHQtd2hpdGUgdy0xMCBoLTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiA8UGVuY2lsQWx0SWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHsvKiA8UmVjaXBlTWV0cmljcyByZWNpcGU9e3JlY2lwZX0gLz4gKi99XG4gICAgICAgICAgICB7cmVjaXBlLmltYWdlICYmIChcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG9iamVjdC1jb3ZlciBoLXZoMzMgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICBzcmM9e3JlY2lwZS5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e3JlY2lwZS5uYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBhYnNvbHV0ZSBib3R0b20tMCB0ZXh0LWNlbnRlciB3LWZ1bGwgYmctYmxhY2sgYmctb3BhY2l0eS01MCBweS00XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VyaWZcIj57cmVjaXBlLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuXG4gICAgICB7cmVjaXBlLmRlc2NyaXB0aW9uID8gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC0wIGJnLXdoaXRlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgey8qIDxSZWNpcGVNYXJrZG93biBtYXJrZG93bj17cmVjaXBlLmRlc2NyaXB0aW9ufSAvPiAqL31cbiAgICAgICAgICB7cmVjaXBlLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApIDogbnVsbH1cbiAgICA8Lz5cbiAgKVxuXG4gIC8vIHJldHVybiAoXG4gIC8vICAgPD5cbiAgLy8gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTQgc206cHgtMFwiPlxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgYmctd2hpdGUgZ2FwLTRcIj5cbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtdmgzM1wiPlxuICAvLyAgICAgICAgICAgey8qIFRPRE86IG9ubHkgc2hvdyBmb3IgYWRtaW5zICovfVxuICAvLyAgICAgICAgICAgPExpbmtcbiAgLy8gICAgICAgICAgICAgdG89e2AvYWRtaW4vcmVjaXBlcy8ke3JlY2lwZS5pZH1gfVxuICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IHotMTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCB0ZXh0LXdoaXRlIHctMTAgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGxcIlxuICAvLyAgICAgICAgICAgPlxuICAvLyAgICAgICAgICAgICB7LyogPFBlbmNpbEFsdEljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAvLyAgICAgICAgICAgICBFZGl0XG4gIC8vICAgICAgICAgICA8L0xpbms+XG4gIC8vICAgICAgICAgICB7LyogPFJlY2lwZU1ldHJpY3MgcmVjaXBlPXtyZWNpcGV9IC8+ICovfVxuICAvLyAgICAgICAgICAge3JlY2lwZS5pbWFnZSAmJiAoXG4gIC8vICAgICAgICAgICAgIDxpbWdcbiAgLy8gICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBvYmplY3QtY292ZXIgaC12aDMzIHctZnVsbFwiXG4gIC8vICAgICAgICAgICAgICAgc3JjPXtyZWNpcGUuaW1hZ2V9XG4gIC8vICAgICAgICAgICAgICAgYWx0PXtyZWNpcGUubmFtZX1cbiAgLy8gICAgICAgICAgICAgLz5cbiAgLy8gICAgICAgICAgICl9XG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYWJzb2x1dGUgYm90dG9tLTAgdGV4dC1jZW50ZXIgdy1mdWxsIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgcHktNFwiPlxuICAvLyAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlcmlmXCI+e3JlY2lwZS5uYW1lfTwvaDE+XG4gIC8vICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgPC9kaXY+XG5cbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBwLTQgYmctd2hpdGVcIj5cbiAgLy8gICAgICAgICA8YnV0dG9uXG4gIC8vICAgICAgICAgICBhcmlhLWxhYmVsPVwibGVnZyB0aWwgc29tIGZhdm9yaXR0XCJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gIC8vICAgICAgICAgPlxuICAvLyAgICAgICAgICAgey8qIDxCb29rbWFya0ljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIGhpZGRlbiBsZzpibG9ja1wiPkxhZ3JlIHNvbSBmYXZvcml0dDwvZGl2PlxuICAvLyAgICAgICAgIDwvYnV0dG9uPlxuXG4gIC8vICAgICAgICAgPGJ1dHRvblxuICAvLyAgICAgICAgICAgYXJpYS1sYWJlbD1cImxlZ2cgdGlsIG1lbnlcIlxuICAvLyAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgLy8gICAgICAgICA+XG4gIC8vICAgICAgICAgICB7LyogPEJvb2tPcGVuSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+TGVnZyB0aWwgbWVueTwvZGl2PlxuICAvLyAgICAgICAgIDwvYnV0dG9uPlxuXG4gIC8vICAgICAgICAgPGJ1dHRvblxuICAvLyAgICAgICAgICAgYXJpYS1sYWJlbD1cInByaW50XCJcbiAgLy8gICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gIC8vICAgICAgICAgPlxuICAvLyAgICAgICAgICAgey8qIDxQcmludGVySWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gIC8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+UHJpbnQ8L2Rpdj5cbiAgLy8gICAgICAgICA8L2J1dHRvbj5cblxuICAvLyAgICAgICAgIDxidXR0b25cbiAgLy8gICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYXN0IG5lZFwiXG4gIC8vICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIlxuICAvLyAgICAgICAgID5cbiAgLy8gICAgICAgICAgIHsvKiA8U2F2ZUljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAvLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIGhpZGRlbiBsZzpibG9ja1wiPkxhZ3JlPC9kaXY+XG4gIC8vICAgICAgICAgPC9idXR0b24+XG5cbiAgLy8gICAgICAgICB7cmVjaXBlLnNvdXJjZSA/IChcbiAgLy8gICAgICAgICAgIDxhXG4gIC8vICAgICAgICAgICAgIGhyZWY9e3JlY2lwZS5zb3VyY2V9XG4gIC8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gIC8vICAgICAgICAgICA+XG4gIC8vICAgICAgICAgICAgIHsvKiA8RXh0ZXJuYWxMaW5rSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMiBoaWRkZW4gbGc6YmxvY2tcIj5LaWxkZTwvZGl2PlxuICAvLyAgICAgICAgICAgPC9hPlxuICAvLyAgICAgICAgICkgOiBudWxsfVxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICAgIDwvc2VjdGlvbj5cblxuICAvLyAgICAge3JlY2lwZS5kZXNjcmlwdGlvbiA/IChcbiAgLy8gICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGNvbnRhaW5lciBteC1hdXRvIHB4LTQgc206cHgtMCBiZy13aGl0ZSB0ZXh0LWNlbnRlclwiPlxuICAvLyAgICAgICAgIDxSZWNpcGVNYXJrZG93biBtYXJrZG93bj17cmVjaXBlLmRlc2NyaXB0aW9ufSAvPlxuICAvLyAgICAgICA8L3NlY3Rpb24+XG4gIC8vICAgICApIDogbnVsbH1cblxuICAvLyAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC0wIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTRcIj5cblxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnctMS8yIHhsOnctNS8xMlwiPlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtbGcgdXBwZXJjYXNlIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDBcIj5cbiAgLy8gICAgICAgICAgIEluZ3JlZGllbnNlclxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgIDxSZWNpcGVNYXJrZG93biBtYXJrZG93bj17cmVjaXBlLmluZ3JlZGllbnRzfSAvPlxuICAvLyAgICAgICA8L2Rpdj5cblxuICAvLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnctMS8yIHhsOnctNy8xMlwiPlxuICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtbGcgdXBwZXJjYXNlIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDBcIj5cbiAgLy8gICAgICAgICAgIEZyZW1nYW5nc21cdTAwRTV0ZVxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICAgIDxSZWNpcGVNYXJrZG93biBtYXJrZG93bj17cmVjaXBlLnN0ZXBzfSAvPlxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICAgIDwvc2VjdGlvbj5cbiAgLy8gICA8Lz5cbiAgLy8gKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcbiAgY29uc3QgeyBzbHVnIH0gPSB1c2VQYXJhbXMoKTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDQ6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgRmFudCBpbmdlbiBvcHBza3JpZnQgbWVkIGlkOiBcIntzbHVnfVwiXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSA0MDE6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgRHUgaGFyIGlra2UgdGlsZ2FuZyB0aWwgb3Bwc2tyaWZ0IG1lZCBpZDogXCJ7c2x1Z31cIlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVWtqZW50IGZlaWw6ICR7Y2F1Z2h0LnN0YXR1c31gKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVE9ETzogbWFrZSBwZXJ0aWVyIG9yIHJlbW92ZSB0byBjYXRjaCBoaWdoZXIgdXAgPyAodGhyb3cgbmV3IEVycm9yKFwid29vb1wiKSBpbiBsb2FkZXIgdG8gdmlldylcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKVxuICBjb25zdCB7IHNsdWcgfSA9IHVzZVBhcmFtcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+RGV0IHNramVkZGUgZW4gZmVpbCBtZWQgbGFzdGluZyBhdiBvcHBza3JpZnQgbWVkIGlkOiBcIntzbHVnfVwiLjwvZGl2PlxuICApO1xufSIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5sZXQgZGI6IFByaXNtYUNsaWVudFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICBkYi4kY29ubmVjdCgpXG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgICBnbG9iYWwuX19kYi4kY29ubmVjdCgpXG4gIH1cblxuICBkYiA9IGdsb2JhbC5fX2RiXG59XG5cbmV4cG9ydCB7IGRiIH0iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCBSZWNpcGVDYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvcmVjaXBlLWNhcmRcIlxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vLi4vcHJpc21hL2RiLnNlcnZlclwiXG5pbXBvcnQgeyBSZWNpcGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgLy8gcmV0dXJuIGdldFJlY2lwZXMoMTIpXG4gIC8vIGNvbnN0IGRhdGE6IExvYWRlckRhdGFcbiAgcmV0dXJuIGF3YWl0IGRiLnJlY2lwZS5maW5kTWFueSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZXMoKSB7XG4gIGNvbnN0IHJlY2lwZXMgPSB1c2VMb2FkZXJEYXRhPFJlY2lwZVtdPigpXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgeGw6Z3JpZC1jb2xzLTVcIj5cbiAgICAgICAge3JlY2lwZXMubWFwKHJlY2lwZSA9PiAoXG4gICAgICAgICAgPFJlY2lwZUNhcmQga2V5PXtyZWNpcGUuaWR9IHJlY2lwZT17cmVjaXBlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbiIsICJpbXBvcnQgeyBSZWNpcGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlQ2FyZCh7IHJlY2lwZSB9OiB7IHJlY2lwZTogUmVjaXBlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e3JlY2lwZS5pZC50b1N0cmluZygpfVxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIGhvdmVyOnNoYWRvdy1sZ1wiXG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02NCBvYmplY3QtY292ZXJcIlxuICAgICAgICBzcmM9e3JlY2lwZS5pbWFnZX1cbiAgICAgICAgYWx0PXtyZWNpcGUubmFtZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTAgbGVmdC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB0by10cmFuc3BhcmVudFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0yIGJvdHRvbS0yIGxlZnQtMiB6LTEwIHRleHQtd2hpdGUgdXBwZXJjYXNlIHRleHQtY2VudGVyIHRleHQtYmFzZVwiPlxuICAgICAgICB7cmVjaXBlLm5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gIClcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cblxuY29uc3QgZHJhdyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZnJhbWVDb3VudDogbnVtYmVyKSA9PiB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpXG4gIGN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCdcbiAgY3R4LmJlZ2luUGF0aCgpXG4gIGN0eC5hcmMoNTAsIDEwMCwgMjAgKiBNYXRoLnNpbihmcmFtZUNvdW50ICogMC4wNSkgKiogMiwgMCwgMiAqIE1hdGguUEkpXG4gIGN0eC5maWxsKClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbnZhcygpIHtcblxuICBjb25zdCBjYW52YXNSZWYgPSBSZWFjdC51c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQgfCBudWxsPihudWxsKVxuXG5cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50XG5cbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZnJhbWVDb3VudCA9IDBcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZCA9IDBcbiAgICAvL091ciBkcmF3IGNhbWUgaGVyZVxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIGZyYW1lQ291bnQrK1xuICAgICAgZHJhdyhjb250ZXh0LCBmcmFtZUNvdW50KVxuICAgICAgYW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKVxuICAgIH1cbiAgICByZW5kZXIoKVxuXG4gICAgcmV0dXJuICgpID0+IHsgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpIH1cbiAgfSwgW2RyYXddKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5IZWk8L2gxPlxuICAgICAgPGNhbnZhcyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiY29ybmZsb3dlcmJsdWVcIiB9fSByZWY9e2NhbnZhc1JlZn0+PC9jYW52YXM+XG4gICAgPC9kaXY+XG4gIClcblxufSIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIn4vZmlyZWJhc2Uvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZXhwb3J0IGxldCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gKHsgcmVxdWVzdCB9KSA9PiBsb2dvdXQocmVxdWVzdClcblxuZXhwb3J0IGxldCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4gcmVkaXJlY3QoXCIvXCIpIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5cbnR5cGUgTG9naW5Gb3JtID0ge1xuICB1c2VybmFtZTogc3RyaW5nXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn1cblxuLy8gVE9ETzogY3JlYXRlIHVzZXIgaW4gZmlyZWJhc2UvdXNlcnNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcbiAgLy8gY29uc3QgdXNlciA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCB1c2VybmFtZSwgcGFzc3dvcmQpXG4gIC8vICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB1c2VyQ3JlZGVudGlhbC51c2VyKVxuICAvLyAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpOiBhbnkge1xuICAvLyAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZVxuICAvLyAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZVxuICAvLyAgICAgaWYgKGVycm9yQ29kZSA9PSBcImF1dGgvd2Vhay1wYXNzd29yZFwiKSB7XG4gIC8vICAgICAgIHJldHVybiBcIlRoZSBwYXNzd29yZCBpcyB0b28gd2Vhay5cIlxuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZVxuICAvLyAgICAgfVxuICAvLyAgIH0pXG5cbiAgLy8gcmV0dXJuIHVzZXJcbiAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIVwiKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XG4gIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCB1c2VybmFtZSwgcGFzc3dvcmQpXG4gIC8vICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB1c2VyQ3JlZGVudGlhbC51c2VyKVxuICAvLyAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gIC8vICAgICBlcnIuY29kZVxuICAvLyAgICAgZXJyLm1lc3NhZ2VcbiAgLy8gICB9KVxuICAvLyByZXR1cm4gdXNlclxuICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQhXCIpXG59XG5cbi8vIFRPRE86IHVzZSBlbnYgYWdhaW4hXG4vLyBjb25zdCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVRcbi8vIGlmICghc2Vzc2lvblNlY3JldCkge1xuLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKVxuLy8gfVxuXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIlJKX3Nlc3Npb25cIixcbiAgICBzZWN1cmU6IHRydWUsXG4gICAgc2VjcmV0czogW1wid2VlZTEyMzR3ZWVlXCJdLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gIH0sXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKVxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbFxuICByZXR1cm4gdXNlcklkXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIilcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJlZGlyZWN0VG9cIiwgcmVkaXJlY3RUb11dKVxuICAgIHRocm93IHJlZGlyZWN0KGAvbG9nZy1pbm4/JHtzZWFyY2hQYXJhbXN9YClcbiAgfVxuICByZXR1cm4gdXNlcklkXG59XG5cbi8vIFRPRE86IGdldCB1c2VyIGZyb20gZmlyZWJhc2UvdXNlcnMsIG5vdCBhdXRoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxhbnkgfCBudWxsPiB7XG4gIC8vIGNvbnN0IHVzZXJJZCA9IGF1dGguY3VycmVudFVzZXI/LmVtYWlsXG4gIC8vIGlmICh0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gIC8vICAgcmV0dXJuIG51bGxcbiAgLy8gfVxuXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXJcbiAgLy8gICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHVzZXIpXG4gIC8vICAgcmV0dXJuIHVzZXJcbiAgLy8gfSBjYXRjaCB7XG4gIC8vICAgdGhyb3cgbG9nb3V0KHJlcXVlc3QpXG4gIC8vIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIC8vIHNpZ25PdXQoYXV0aClcbiAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICAvLyByZXR1cm4gcmVkaXJlY3QoXCIvbG9nZy1pbm5cIiwge1xuICAvLyAgIGhlYWRlcnM6IHtcbiAgLy8gICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAvLyAgIH0sXG4gIC8vIH0pXG4gIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKFxuICB1c2VySWQ6IHN0cmluZyB8IG51bGwsXG4gIHJlZGlyZWN0VG86IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKVxuICBzZXNzaW9uLnNldChcInVzZXJJZFwiLCB1c2VySWQpXG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IFJlY2lwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IExpbmssIE91dGxldCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9wcmlzbWEvZGIuc2VydmVyXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgLy8gVE9ETyBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpXG4gIHJldHVybiBhd2FpdCBkYi5yZWNpcGUuZmluZE1hbnkoKSAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xuICBjb25zdCByZWNpcGVzID0gdXNlTG9hZGVyRGF0YTxSZWNpcGVbXT4oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGdhcC00XCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJvcmRlci1yIGJvcmRlci1ncmF5LTYwMCBwci00XCI+XG4gICAgICAgIDxoMT5BZG1pbjwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cmVjaXBlcy5tYXAocmVjaXBlID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3JlY2lwZS5pZH0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2FkbWluLyR7cmVjaXBlLmlkfWB9PlxuICAgICAgICAgICAgICAgIHtyZWNpcGUubmFtZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iLCAiaW1wb3J0IHsgUmVjaXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiXG5pbXBvcnQgSW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi8uLi9wcmlzbWEvZGIuc2VydmVyXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIilcblxuICAvLyBjb25zdCByZWNpcGUgPSBhd2FpdCBnZXRSZWNpcGUocGFyYW1zLnNsdWcsIGZhbHNlKVxuICAvLyBpZiAoIXJlY2lwZSkge1xuICAvLyAgIHRocm93IG5ldyBSZXNwb25zZShgTm8gcmVjaXBlIGZvdW5kIHdpdGggaWQgPSAke3BhcmFtcy5zbHVnfWAsIHsgc3RhdHVzOiA0MDQgfSlcbiAgLy8gfVxuICAvLyByZXR1cm4gcmVjaXBlXG5cbiAgcmV0dXJuIGF3YWl0IGRiLnJlY2lwZS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHBhcmFtcy5zbHVnKSB9IH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoKSB7XG4gIGNvbnN0IHJlY2lwZSA9IHVzZUxvYWRlckRhdGE8UmVjaXBlPigpXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDE+RWRpdDoge3JlY2lwZS5uYW1lfTwvaDE+XG5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwibmFtZVwiIGxhYmVsPVwiTmFtZVwiIHZhbHVlPXtyZWNpcGUubmFtZX0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJpbWFnZVwiIGxhYmVsPVwiSW1hZ2VcIiB2YWx1ZT17cmVjaXBlLmltYWdlfSAvPlxuICAgICAgICB7LyogPElucHV0IG5hbWU9XCJzb3VyY2VcIiBsYWJlbD1cIlNvdXJjZVwiIHZhbHVlPXtyZWNpcGUuc291cmNlfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInRpbWVcIiBsYWJlbD1cInRpbWVcIiB2YWx1ZT17cmVjaXBlLnRpbWV9IC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwidHlwZVwiIGxhYmVsPVwidHlwZVwiIHZhbHVlPXtyZWNpcGUudHlwZX0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJ0YWdzXCIgbGFiZWw9XCJ0YWdzXCIgdmFsdWU9e3JlY2lwZS50YWdzfSAvPiAqL31cblxuXG4gICAgICAgIHsvKiA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPVwiaW5ncmVkaWVudHNcIj5cbiAgICAgICAgICBJbmdyZWRpZW50c1xuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJpbnB1dCBoLTIwXCIgaWQ9XCJpbmdyZWRpZW50c1wiIHJvd3M9ezIwfSBuYW1lPVwiaW5ncmVkaWVudHNcIj5cbiAgICAgICAgICAgIHtyZWNpcGUuaW5ncmVkaWVudHN9XG4gICAgICAgICAgPC90ZXh0YXJlYT4gKi99XG4gICAgICAgICAgey8qIHtlcnJvcnM/Lm1hcmtkb3duICYmIDxkaXY+TWFya2Rvd24gaXMgcmVxdWlyZWQ8L2Rpdj59ICovfVxuICAgICAgICB7LyogPC9sYWJlbD4gKi99XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJMYWdyZXIuLi5cIiA6IFwiTGFncmVcIn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG5cbiAgICA8L2Rpdj5cbiAgKVxufSIsICJpbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXQoeyBuYW1lLCBsYWJlbCwgLi4ucmVzdCB9OiBJbnB1dFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsYWJlbCA/IDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9e25hbWV9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPiA6IG51bGx9XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPXtuYW1lfSBuYW1lPXtuYW1lfSB7Li4ucmVzdH0gLz5cbiAgICAgIHsvKiB7ZXJyb3JzPy50aXRsZSAmJiA8ZGl2PlRpdGxlIGlzIHJlcXVpcmVkPC9kaXY+fSAqL31cbiAgICA8Lz5cbiAgKVxufSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxwPlxuICAgICAgPExpbmsgdG89XCJuZXdcIj5DcmVhdGUgYSBuZXcgcmVjaXBlPC9MaW5rPlxuICAgIDwvcD5cbiAgKVxufSIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBGb3JtLCB1c2VBY3Rpb25EYXRhLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbi8vIGltcG9ydCB7IGNyZWF0ZVJlY2lwZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3JlY2lwZS1zZXJ2aWNlXCI7XG5cbnR5cGUgUG9zdEVycm9yID0ge1xuICB0aXRsZT86IGJvb2xlYW5cbiAgc2x1Zz86IGJvb2xlYW5cbiAgbWFya2Rvd24/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IG5ldyBQcm9taXNlKHJlcyA9PiBzZXRUaW1lb3V0KHJlcywgMTAwMCkpXG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpXG4gIGNvbnN0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpXG4gIGNvbnN0IG1hcmtkb3duID0gZm9ybURhdGEuZ2V0KFwibWFya2Rvd25cIilcblxuICBjb25zdCBlcnJvcnM6IFBvc3RFcnJvciA9IHt9XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWVcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWVcbiAgaWYgKCFtYXJrZG93bikgZXJyb3JzLm1hcmtkb3duID0gdHJ1ZVxuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpXG4gIGludmFyaWFudCh0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIilcbiAgaW52YXJpYW50KHR5cGVvZiBtYXJrZG93biA9PT0gXCJzdHJpbmdcIilcbiAgLy8gYXdhaXQgY3JlYXRlUmVjaXBlKHsgdGl0bGUsIHNsdWcsIG1hcmtkb3duIH0pXG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2FkbWluXCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKVxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cInRpdGxlXCI+XG4gICAgICAgIFRpdGxlOlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiAvPlxuICAgICAgICB7ZXJyb3JzPy50aXRsZSAmJiA8ZGl2PlRpdGxlIGlzIHJlcXVpcmVkPC9kaXY+fVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+XG4gICAgICAgIFNsdWc6IDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNsdWdcIiAvPlxuICAgICAgICB7ZXJyb3JzPy5zbHVnICYmIDxkaXY+U2x1ZyBpcyByZXF1aXJlZDwvZGl2Pn1cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9XCJtYXJrZG93blwiPk1hcmtkb3duOlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiaW5wdXQgaC0yMFwiIGlkPVwibWFya2Rvd25cIiByb3dzPXsyMH0gbmFtZT1cIm1hcmtkb3duXCIgLz5cbiAgICAgICAge2Vycm9ycz8ubWFya2Rvd24gJiYgPGRpdj5NYXJrZG93biBpcyByZXF1aXJlZDwvZGl2Pn1cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJMYWdyZXIuLi5cIiA6IFwiTGFncmVcIn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKVxufSIsICJpbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG4vLyB0eXBlIEluZGV4RGF0YSA9IHtcbi8vICAgcmVzb3VyY2VzOiBBcnJheTx7IG5hbWU6IHN0cmluZzsgdXJsOiBzdHJpbmcgfT47XG4vLyAgIGRlbW9zOiBBcnJheTx7IG5hbWU6IHN0cmluZzsgdG86IHN0cmluZyB9Pjtcbi8vIH07XG5cbi8vIC8vIExvYWRlcnMgcHJvdmlkZSBkYXRhIHRvIGNvbXBvbmVudHMgYW5kIGFyZSBvbmx5IGV2ZXIgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIsIHNvXG4vLyAvLyB5b3UgY2FuIGNvbm5lY3QgdG8gYSBkYXRhYmFzZSBvciBydW4gYW55IHNlcnZlciBzaWRlIGNvZGUgeW91IHdhbnQgcmlnaHQgbmV4dFxuLy8gLy8gdG8gdGhlIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgaXQuXG4vLyAvLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbG9hZGVyXG4vLyBleHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4vLyAgIGxldCBkYXRhOiBJbmRleERhdGEgPSB7XG4vLyAgICAgcmVzb3VyY2VzOiBbXG4vLyAgICAgICB7XG4vLyAgICAgICAgIG5hbWU6IFwiUmVtaXggRG9jc1wiLFxuLy8gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9yZW1peC5ydW4vZG9jc1wiXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBuYW1lOiBcIlJlYWN0IFJvdXRlciBEb2NzXCIsXG4vLyAgICAgICAgIHVybDogXCJodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzXCJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIG5hbWU6IFwiUmVtaXggRGlzY29yZFwiLFxuLy8gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9kaXNjb3JkLmdnL1ZCZVBzNmRcIlxuLy8gICAgICAgfVxuLy8gICAgIF0sXG4vLyAgICAgZGVtb3M6IFtcbi8vICAgICAgIHtcbi8vICAgICAgICAgdG86IFwiZGVtb3MvYWN0aW9uc1wiLFxuLy8gICAgICAgICBuYW1lOiBcIkFjdGlvbnNcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgdG86IFwiZGVtb3MvYWJvdXRcIixcbi8vICAgICAgICAgbmFtZTogXCJOZXN0ZWQgUm91dGVzLCBDU1MgbG9hZGluZy91bmxvYWRpbmdcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgdG86IFwiZGVtb3MvcGFyYW1zXCIsXG4vLyAgICAgICAgIG5hbWU6IFwiVVJMIFBhcmFtcyBhbmQgRXJyb3IgQm91bmRhcmllc1wiXG4vLyAgICAgICB9XG4vLyAgICAgXVxuLy8gICB9O1xuXG4vLyAgIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCNqc29uXG4vLyAgIHJldHVybiBqc29uKGRhdGEpO1xuLy8gfTtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI21ldGFcbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIlJlbWl4IFN0YXJ0ZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZWxjb21lIHRvIHJlbWl4IVwiXG4gIH07XG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvcm91dGluZyNpbmRleC1yb3V0ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+QSB0aXRsZTwvaDE+XG4gICAgICAgIDxwPkhlbGx1dXV1PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgRm9ybSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlclNlc3Npb24sIGxvZ2luIH0gZnJvbSBcIn4vZmlyZWJhc2Uvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZTogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8IHVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm4gYFVzZXJuYW1lcyBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycyBsb25nYDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgIHJldHVybiBgUGFzc3dvcmRzIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZEVycm9ycz86IHtcbiAgICB1c2VybmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIH07XG4gIGZpZWxkcz86IHtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSk6IFByb21pc2U8UmVzcG9uc2UgfCBBY3Rpb25EYXRhPiA9PiB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoXCJ1c2VybmFtZVwiKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xuICBjb25zdCByZWRpcmVjdFRvID0gZm9ybS5nZXQoXCJyZWRpcmVjdFRvXCIpIHx8IFwiL1wiO1xuICBcbiAgaWYgKFxuICAgIHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgIHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fFxuICAgIHR5cGVvZiByZWRpcmVjdFRvICE9PSBcInN0cmluZ1wiXG4gICkge1xuICAgIHJldHVybiB7IGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCB9O1xuICB9XG5cbiAgY29uc3QgZmllbGRzID0geyB1c2VybmFtZSwgcGFzc3dvcmQgfTtcbiAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgdXNlcm5hbWU6IHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWUpLFxuICAgIHBhc3N3b3JkOiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKVxuICB9O1xuICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSlcbiAgICByZXR1cm4geyBmaWVsZEVycm9ycywgZmllbGRzIH07XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRzLFxuICAgICAgZm9ybUVycm9yOiBgVXNlcm5hbWUvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci51aWQsIHJlZGlyZWN0VG8pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgPGgxPkxvZ2cgaW5uPC9oMT5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwicmVkaXJlY3RUb1wiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gdW5kZWZpbmVkfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgbGFiZWw9XCJCcnVrZXJuYXZuXCIgdHlwZT1cImVtYWlsXCIgLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJwYXNzd29yZFwiIGxhYmVsPVwiUGFzc29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJMb2dnZXIgaW5uLi4uXCIgOiBcIkxvZ2cgaW5uXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFB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
