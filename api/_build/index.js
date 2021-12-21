var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
var import_auth2 = __toModule(require("firebase/auth"));

// app/firebase/firebase.ts
init_react();
var import_app = __toModule(require("firebase/app"));
var import_auth = __toModule(require("firebase/auth"));
var import_firestore = __toModule(require("firebase/firestore"));
var firebaseConfig = {
  apiKey: "AIzaSyCRxj5TuXBO1uIVT2Teho9lUbG0rFngPSc",
  authDomain: "ca7o-js.firebaseapp.com",
  databaseURL: "https://ca7o-js.firebaseio.com",
  projectId: "ca7o-js",
  storageBucket: "ca7o-js.appspot.com",
  messagingSenderId: "404100090071",
  appId: "1:404100090071:web:27a2938a815b7cb8"
};
(0, import_app.initializeApp)(firebaseConfig);
var db = (0, import_firestore.getFirestore)();
var auth = (0, import_auth.getAuth)();

// app/firebase/session.server.ts
async function login({ username, password }) {
  const user = await (0, import_auth2.signInWithEmailAndPassword)(auth, username, password).then((userCredential) => userCredential.user).catch((err) => {
    err.code;
    err.message;
  });
  return user;
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
  var _a;
  const userId = (_a = auth.currentUser) == null ? void 0 : _a.email;
  if (typeof userId !== "string") {
    return null;
  }
  try {
    const user = auth.currentUser;
    (0, import_auth2.onAuthStateChanged)(auth, (user2) => user2);
    return user;
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  (0, import_auth2.signOut)(auth);
  const session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_remix2.redirect)("/logg-inn", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
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

// app/components/recipe/markdown.tsx
init_react();
var import_react = __toModule(require("react"));
var import_markdown_to_jsx = __toModule(require("markdown-to-jsx"));

// app/lib/slugify.ts
init_react();
function slugify(text) {
  const a = "\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;";
  const b = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
  const p = new RegExp(a.split("").join("|"), "g");
  return text.toString().toLowerCase().replace(/\s+/g, "-").replace(p, (c) => b.charAt(a.indexOf(c))).replace(/&/g, "-and-").replace(/[^\w-]+/g, "").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
}

// app/components/recipe/timer.tsx
init_react();
var React2 = __toModule(require("react"));
var initialState = {
  remaining: 0,
  clock: "00:00",
  isRunning: false,
  canStart: false
};
var reducer = (state, action4) => {
  switch (action4.type) {
    case "start":
      return __spreadProps(__spreadValues({}, state), { canStart: true });
    case "started":
      return __spreadProps(__spreadValues({}, state), { isRunning: true });
    case "reset":
      return __spreadProps(__spreadValues({}, action4.data), {
        clock: msToClock(action4.data.remaining)
      });
    case "pause":
      return __spreadProps(__spreadValues({}, state), { isRunning: false, canStart: false });
    case "tick":
      const _remaining = state.remaining - 1e3;
      return __spreadProps(__spreadValues({}, state), {
        remaining: _remaining,
        clock: msToClock(_remaining)
      });
    default:
      return state;
  }
};
function msToClock(ms) {
  const totalSeconds = ms / 1e3;
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}
var useTimer = (minutes, onExpire) => {
  const ms = minutes * 1e3 * 60;
  const remainingRef = React2.useRef(ms);
  const [state, dispatch] = React2.useReducer(reducer, __spreadProps(__spreadValues({}, initialState), {
    remaining: ms,
    clock: msToClock(ms)
  }));
  const { remaining, canStart } = state;
  React2.useEffect(() => {
    remainingRef.current = remaining;
  }, [remaining]);
  const start = () => {
    dispatch({ type: "start" });
  };
  const reset = () => {
    dispatch({ type: "reset", data: __spreadProps(__spreadValues({}, initialState), { remaining: ms }) });
  };
  const pause = React2.useCallback(() => {
    dispatch({ type: "pause" });
  }, []);
  const expire = React2.useCallback(() => {
    if (onExpire && typeof onExpire === "function") {
      onExpire();
    }
    pause();
  }, [onExpire, pause]);
  React2.useEffect(() => {
    function tick() {
      if (remainingRef.current <= 0) {
        expire();
      } else {
        dispatch({ type: "tick" });
      }
    }
    let id;
    if (canStart) {
      id = setInterval(tick, 1e3);
      dispatch({ type: "started" });
    }
    return () => clearInterval(id);
  }, [canStart, expire]);
  return __spreadProps(__spreadValues({}, state), {
    start,
    reset,
    pause
  });
};
var Timer = ({ value }) => {
  const { remaining, clock, isRunning, start, reset, pause } = useTimer(value);
  const [progress, setProgress] = React2.useState(10);
  React2.useEffect(() => {
    setProgress(Math.round(remaining / (value * 1e3 * 60) * 100));
  }, [remaining, value]);
  return /* @__PURE__ */ React2.createElement("div", {
    className: "flex gap-2"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "flex-grow relative cursor-pointer h-8 rounded",
    onClick: isRunning ? pause : start
  }, /* @__PURE__ */ React2.createElement(LinearProgress, {
    isRunning: true,
    value: progress
  }), /* @__PURE__ */ React2.createElement("span", {
    className: "absolute top-0 right-0 bottom-0 left-0 flex flex-grow justify-center items-center text-white text-xl"
  }, clock)), /* @__PURE__ */ React2.createElement("button", {
    className: "bg-gray-200 flex items-center justify-center rounded px-2 ",
    onClick: () => reset()
  }, /* @__PURE__ */ React2.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-4 w-4",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React2.createElement("path", {
    fillRule: "evenodd",
    d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
    clipRule: "evenodd"
  }))));
};
var timer_default = Timer;
var LinearProgress = ({
  isRunning,
  value
}) => {
  return /* @__PURE__ */ React2.createElement("div", {
    className: `h-8 rounded w-full ${isRunning ? "bg-gray-200" : "bg-gray-200"}`
  }, /* @__PURE__ */ React2.createElement("div", {
    className: `h-full rounded transition-all duration-200 ease-linear ${isRunning ? "bg-gray-500" : "bg-gray-500"}`,
    style: { width: `${value}%` }
  }));
};

// app/components/recipe/markdown.tsx
function RecipeMarkdown({ markdown }) {
  return /* @__PURE__ */ import_react.default.createElement(import_markdown_to_jsx.default, {
    children: markdown,
    options: {
      overrides: {
        h1: {
          component: H1
        },
        li: {
          component: ListItem
        },
        code: {
          component: Code
        }
      }
    }
  });
}
function H1({ children }) {
  return /* @__PURE__ */ import_react.default.createElement("h3", {
    className: "text-sm uppercase text-gray-500 pb-0 pt-4"
  }, children);
}
function ListItem({ children }) {
  const [checked, setChecked] = import_react.default.useState(false);
  const id = slugify(children[0]);
  const handleChange = () => {
    setChecked(!checked);
  };
  return /* @__PURE__ */ import_react.default.createElement("li", {
    className: "flex items-center"
  }, /* @__PURE__ */ import_react.default.createElement("input", {
    id,
    type: "checkbox",
    checked,
    onChange: handleChange,
    name: id,
    className: "checkbox"
  }), /* @__PURE__ */ import_react.default.createElement("label", {
    htmlFor: id,
    className: `p-3 text-base inline-block cursor-pointer whitespace-normal flex-grow ${checked ? "text-gray-500" : "inherit"}`
  }, children));
}
function Code({ children }) {
  const timer = parseInt(children.replace("timer:", ""));
  console.log(timer);
  if (children.startsWith("timer:")) {
    return /* @__PURE__ */ import_react.default.createElement(timer_default, {
      value: timer
    });
  }
  return null;
}

// app/firebase/recipe-service.ts
init_react();
var import_firestore2 = __toModule(require("firebase/firestore"));
async function getRecipes(take = 10) {
  const q = (0, import_firestore2.query)((0, import_firestore2.collection)(db, "recipes"), (0, import_firestore2.limit)(take), (0, import_firestore2.orderBy)("created", "desc"));
  const snapshot = await (0, import_firestore2.getDocs)(q);
  const recipes = snapshot.docs.map((doc2) => {
    const dbRecipe = doc2.data();
    return __spreadValues({
      id: doc2.id,
      slug: slugify(dbRecipe.name)
    }, dbRecipe);
  });
  return recipes;
}
async function getRecipe(id, rendered = true) {
  const ref = (0, import_firestore2.doc)(db, "recipes", id);
  const snap = await (0, import_firestore2.getDoc)(ref);
  if (!snap.exists()) {
    return null;
  }
  const dbRecipe = snap.data();
  const recipe = __spreadValues({
    id: snap.id
  }, dbRecipe);
  return recipe;
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
  }, recipe.name)))), /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto flex flex-wrap justify-center gap-4 p-4 bg-white"
  }, /* @__PURE__ */ React.createElement("button", {
    "aria-label": "legg til som favoritt",
    className: "button flex flex-row items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-2 hidden lg:block"
  }, "Lagre som favoritt")), /* @__PURE__ */ React.createElement("button", {
    "aria-label": "legg til meny",
    className: "button flex flex-row items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-2 hidden lg:block"
  }, "Legg til meny")), /* @__PURE__ */ React.createElement("button", {
    "aria-label": "print",
    className: "button flex flex-row items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-2 hidden lg:block"
  }, "Print")), /* @__PURE__ */ React.createElement("button", {
    "aria-label": "last ned",
    className: "button flex flex-row items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-2 hidden lg:block"
  }, "Lagre")), recipe.source ? /* @__PURE__ */ React.createElement("a", {
    href: recipe.source,
    className: "button flex flex-row items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-2 hidden lg:block"
  }, "Kilde")) : null)), recipe.description ? /* @__PURE__ */ React.createElement("section", {
    className: "hidden lg:block container mx-auto px-4 sm:px-0 bg-white text-center"
  }, /* @__PURE__ */ React.createElement(RecipeMarkdown, {
    markdown: recipe.description
  })) : null, /* @__PURE__ */ React.createElement("section", {
    className: "container mx-auto px-4 sm:px-0 bg-white flex flex-col sm:flex-row gap-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-1/2 xl:w-5/12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-2 text-lg uppercase bg-gray-100 text-gray-600"
  }, "Ingredienser"), /* @__PURE__ */ React.createElement(RecipeMarkdown, {
    markdown: recipe.ingredients
  })), /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-1/2 xl:w-7/12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-2 text-lg uppercase bg-gray-100 text-gray-600"
  }, "Fremgangsm\xE5te"), /* @__PURE__ */ React.createElement(RecipeMarkdown, {
    markdown: recipe.steps
  }))));
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
var import_react2 = __toModule(require("react"));
var draw = (ctx, frameCount) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = "#000000";
  ctx.beginPath();
  ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  ctx.fill();
};
function Canvas() {
  const canvasRef = import_react2.default.useRef(null);
  import_react2.default.useEffect(() => {
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
  return /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h1", null, "Hei"), /* @__PURE__ */ import_react2.default.createElement("canvas", {
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
    key: recipe.slug
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9maXJlYmFzZS9zZXNzaW9uLnNlcnZlci50cyIsICIuLi8uLi9hcHAvZmlyZWJhc2UvZmlyZWJhc2UudHMiLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvbGF5b3V0LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9mb290ZXIudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2xvZ28udHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2hlYWRlci50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvZG9jdW1lbnQudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvcmVjaXBlcy8kc2x1Zy50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvcmVjaXBlL21hcmtkb3duLnRzeCIsICIuLi8uLi9hcHAvbGliL3NsdWdpZnkudHMiLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvcmVjaXBlL3RpbWVyLnRzeCIsICIuLi8uLi9hcHAvZmlyZWJhc2UvcmVjaXBlLXNlcnZpY2UudHMiLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9yZWNpcGVzL2luZGV4LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9yZWNpcGUtY2FyZC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9jYW52YXMudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvbG9nb3V0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluLyRzbHVnLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy91aS9pbnB1dC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi9uZXcudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvbG9naW4udHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9yZWNpcGVzLyRzbHVnLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvcmVjaXBlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2NhbnZhcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2xvZ291dC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNSBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOCBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluL25ldy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlOSBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMCBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2xvZ2luLnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvcmVjaXBlcy8kc2x1Z1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlY2lwZXMvJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCIvb3Bwc2tyaWZ0ZXIvOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9LFxuICBcInJvdXRlcy9yZWNpcGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcmVjaXBlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIi9vcHBza3JpZnRlclwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2NhbnZhc1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2NhbnZhc1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNhbnZhc1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUzXG4gIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2xvZ291dFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH0sXG4gIFwicm91dGVzL2FkbWluXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJhZG1pblwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH0sXG4gIFwicm91dGVzL2FkbWluLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW4vJHNsdWdcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXRoOiBcIjpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hZG1pbi9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hZG1pblwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTdcbiAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vbmV3XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW4vbmV3XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGF0aDogXCJuZXdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOFxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTlcbiAgfSxcbiAgXCJyb3V0ZXMvbG9naW5cIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dpblwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIi9sb2dnLWlublwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxMFxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZUNhdGNoLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIlxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL2ZpcmViYXNlL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9kb2N1bWVudFwiXG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9hcHAjbGlua3NcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpXG4gIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCNqc29uXG4gIHJldHVybiB1c2VyXG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjZGVmYXVsdC1leHBvcnRcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNyb3V0ZS1maWxlbmFtZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZUxvYWRlckRhdGEoKVxuICBcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0IHVzZXI9e3VzZXJ9PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhleSwgZGV2ZWxvcGVyLCB5b3Ugc2hvdWxkIHJlcGxhY2UgdGhpcyB3aXRoIHdoYXQgeW91IHdhbnQgeW91clxuICAgICAgICAgICAgdXNlcnMgdG8gc2VlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuICBsZXQgbWVzc2FnZTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXG4gICAgICAgICAgdG8uXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQwNDpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPk9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IGRvZXMgbm90IGV4aXN0LjwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9e2Ake2NhdWdodC5zdGF0dXN9ICR7Y2F1Z2h0LnN0YXR1c1RleHR9YH0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+XG4gICAgICAgICAge2NhdWdodC5zdGF0dXN9OiB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQge1xuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduT3V0LFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXG4gIFVzZXIsXG59IGZyb20gXCJmaXJlYmFzZS9hdXRoXCJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi9maXJlYmFzZVwiXG5cbnR5cGUgTG9naW5Gb3JtID0ge1xuICB1c2VybmFtZTogc3RyaW5nXG4gIHBhc3N3b3JkOiBzdHJpbmdcbn1cblxuLy8gVE9ETzogY3JlYXRlIHVzZXIgaW4gZmlyZWJhc2UvdXNlcnNcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWdpc3Rlcih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCB1c2VybmFtZSwgcGFzc3dvcmQpXG4gICAgLnRoZW4oKHVzZXJDcmVkZW50aWFsKSA9PiB1c2VyQ3JlZGVudGlhbC51c2VyKVxuICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpOiBhbnkge1xuICAgICAgY29uc3QgZXJyb3JDb2RlID0gZXJyb3IuY29kZVxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IubWVzc2FnZVxuICAgICAgaWYgKGVycm9yQ29kZSA9PSBcImF1dGgvd2Vhay1wYXNzd29yZFwiKSB7XG4gICAgICAgIHJldHVybiBcIlRoZSBwYXNzd29yZCBpcyB0b28gd2Vhay5cIlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTWVzc2FnZVxuICAgICAgfVxuICAgIH0pXG5cbiAgcmV0dXJuIHVzZXJcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xuICBjb25zdCB1c2VyID0gYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgdXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4gdXNlckNyZWRlbnRpYWwudXNlcilcbiAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgZXJyLmNvZGVcbiAgICAgIGVyci5tZXNzYWdlXG4gICAgfSlcbiAgcmV0dXJuIHVzZXJcbn1cblxuLy8gY29uc3Qgc2Vzc2lvblNlY3JldCA9IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUXG4vLyBpZiAoIXNlc3Npb25TZWNyZXQpIHtcbi8vICAgdGhyb3cgbmV3IEVycm9yKFwiU0VTU0lPTl9TRUNSRVQgbXVzdCBiZSBzZXRcIilcbi8vIH1cblxuY29uc3Qgc3RvcmFnZSA9IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlKHtcbiAgY29va2llOiB7XG4gICAgbmFtZTogXCJSSl9zZXNzaW9uXCIsXG4gICAgc2VjdXJlOiB0cnVlLFxuICAgIHNlY3JldHM6IFtcIndlZWUxMjM0d2VlZVwiXSxcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICB9LFxufSlcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIilcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikgcmV0dXJuIG51bGxcbiAgcmV0dXJuIHVzZXJJZFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWlyZVVzZXJJZChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVkaXJlY3RUbzogc3RyaW5nID0gbmV3IFVSTChyZXF1ZXN0LnVybCkucGF0aG5hbWVcbikge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpXG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFwidXNlcklkXCIpXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKFtbXCJyZWRpcmVjdFRvXCIsIHJlZGlyZWN0VG9dXSlcbiAgICB0aHJvdyByZWRpcmVjdChgL2xvZ2ctaW5uPyR7c2VhcmNoUGFyYW1zfWApXG4gIH1cbiAgcmV0dXJuIHVzZXJJZFxufVxuXG4vLyBUT0RPOiBnZXQgdXNlciBmcm9tIGZpcmViYXNlL3VzZXJzLCBub3QgYXV0aFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogUmVxdWVzdCk6IFByb21pc2U8VXNlciB8IG51bGw+IHtcbiAgY29uc3QgdXNlcklkID0gYXV0aC5jdXJyZW50VXNlcj8uZW1haWxcbiAgaWYgKHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXV0aC5jdXJyZW50VXNlclxuICAgIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4gdXNlcilcbiAgICByZXR1cm4gdXNlclxuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBsb2dvdXQocmVxdWVzdClcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0KHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgc2lnbk91dChhdXRoKVxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpXG4gIHJldHVybiByZWRpcmVjdChcIi9sb2dnLWlublwiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKFxuICB1c2VySWQ6IHN0cmluZyB8IG51bGwsXG4gIHJlZGlyZWN0VG86IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKVxuICBzZXNzaW9uLnNldChcInVzZXJJZFwiLCB1c2VySWQpXG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDUnhqNVR1WEJPMXVJVlQyVGVobzlsVWJHMHJGbmdQU2NcIixcbiAgYXV0aERvbWFpbjogXCJjYTdvLWpzLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL2NhN28tanMuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcImNhN28tanNcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJjYTdvLWpzLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQwNDEwMDA5MDA3MVwiLFxuICBhcHBJZDogXCIxOjQwNDEwMDA5MDA3MTp3ZWI6MjdhMjkzOGE4MTViN2NiOFwiLFxufVxuXG5pbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKVxuXG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKVxuXG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoKVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHVzZXI/OiBVc2VyIHwgbnVsbFxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHVzZXIsIGNoaWxkcmVuIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC0xNiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxIZWFkZXIgdXNlcj17dXNlcn0vPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktNFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IGl0ZW1zLWNlbnRlciBweS04IGJnLWdyYXktMTAwXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8TG9nbyAvPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IGxlYWRpbmctdGlnaHRcIj5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBJbGxvIG1haW9yZXNcbiAgICAgICAgICBpdXJlIGluIHZpdGFlIGl1c3RvIGZ1Z2EgcmF0aW9uZT9cbiAgICAgICAgPC9wPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGdhcC04XCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgIE9tIG9zc1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgIEhqZWxwXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgVmlsa1x1MDBFNXJcbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCI+XG4gICAgICAgIHtcIkNvcHlyaWdodCBcdTAwQTkgXCJ9XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPmNhN28uY29tPC9zcGFuPiB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgICB7XCIuXCJ9XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuIiwgImNvbnN0IHByaW1hcnkgPSBcIiNGMzZBM0VcIlxuY29uc3Qgc2Vjb25kYXJ5ID0gXCIjRkZCMzBCXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbygpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgODEgODFcIiB2ZXJzaW9uPVwiMS4xXCIgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHctOCBoLThcIj5cbiAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjQ0OTk3NywtMC40NDk5NzcsMC40NDk5NzcsMC40NDk5NzcsLTIxMjguMzksMTkyNS45KVwiPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwwLDAsMSwzOTQwLC0xMTIwLjU2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTUyMCwxMzkwLjU3TDU2MCwxMzkwLjU3TDU2MCwxNDAwLjU3TDUzMCwxNDAwLjU3TDUzMCwxNDIwLjU3TDU2MCwxNDIwLjU3TDU2MCwxNDMwLjU3TDUyMCwxNDMwLjU3TDUyMCwxMzkwLjU3WlwiXG4gICAgICAgICAgICBzdHlsZT17eyBmaWxsOiBwcmltYXJ5IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwwLDAsMSwzOTMwLC0xMTIwLjU2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTYyMCwxMzkwLjU3TDYyMCwxNDMwLjU3TDYxMCwxNDMwLjU3TDYxMCwxNDAwLjU3TDU5MCwxNDAwLjU3TDU5MCwxNDMwLjU3TDU4MCwxNDMwLjU3TDU4MCwxMzkwLjU3TDYyMCwxMzkwLjU3WlwiXG4gICAgICAgICAgICBzdHlsZT17eyBmaWxsOiBwcmltYXJ5IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwwLDAsMSwzOTQwLC0xMTIwLjU2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTUyMCwxNDQwLjU3TDU2MCwxNDQwLjU3TDU2MCwxNDgwLjU3TDU1MCwxNDgwLjU3TDU1MCwxNDUwLjU3TDUyMCwxNDUwLjU3TDUyMCwxNDQwLjU3WlwiXG4gICAgICAgICAgICBzdHlsZT17eyBmaWxsOiBzZWNvbmRhcnkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDM5MzAsLTExMjAuNTYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNTkwLDE0NzAuNTdMNjEwLDE0NzAuNTdMNjEwLDE0NTAuNTdMNTkwLDE0NTAuNTdMNTkwLDE0NzAuNTdaTTU4MCwxNDQwLjU3TDYyMCwxNDQwLjU3TDYyMCwxNDgwLjU3TDU4MCwxNDgwLjU3TDU4MCwxNDQwLjU3WlwiXG4gICAgICAgICAgICBzdHlsZT17eyBmaWxsOiBwcmltYXJ5IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICApXG59XG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHVzZXI/OiBVc2VyIHwgbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyB1c2VyIH06IFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIHctZnVsbCB0b3AtMCBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTYgYmctZ3JheS0xMDBcIj5cbiAgICAgIDxuYXYgYXJpYS1sYWJlbD1cIk1haW4gbmF2aWdhdGlvblwiIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXhcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCIgdGl0bGU9XCJSZW1peFwiIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL29wcHNrcmlmdGVyXCI+T3Bwc2tyaWZ0ZXI8L0xpbms+XG4gICAgICAgICAge3VzZXIgP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2FkbWluXCI+QWRtaW48L0xpbms+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3VzZXIuZGlzcGxheU5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIi9sb2dvdXRcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgTG9nb3V0XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiA8TGluayB0bz1cIi9sb2dnLWlublwiPkxvZ2cgaW5uPC9MaW5rPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufSIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb259IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2N1bWVudCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZVxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5IGNsYXNzTmFtZT1cImJnLWdyYXktNDAwXCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgTWFya2Rvd24gZnJvbSBcIm1hcmtkb3duLXRvLWpzeFwiXG5pbXBvcnQgeyBMaW5rLCBMb2FkZXJGdW5jdGlvbiwgdXNlQ2F0Y2gsIHVzZUxvYWRlckRhdGEsIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiXG5pbXBvcnQgUmVjaXBlTWFya2Rvd24gZnJvbSBcIn4vY29tcG9uZW50cy9yZWNpcGUvbWFya2Rvd25cIlxuaW1wb3J0IHsgZ2V0UmVjaXBlLCBJUmVjaXBlIH0gZnJvbSBcIn4vZmlyZWJhc2UvcmVjaXBlLXNlcnZpY2VcIlxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgXCJleHBlY3RlZCBwYXJhbXMuc2x1Z1wiKVxuICBjb25zdCByZWNpcGUgPSBhd2FpdCBnZXRSZWNpcGUocGFyYW1zLnNsdWcpXG4gIGlmICghcmVjaXBlKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKGBObyByZWNpcGUgZm91bmQgd2l0aCBpZCA9ICR7cGFyYW1zLnNsdWd9YCwgeyBzdGF0dXM6IDQwNCB9KVxuICB9XG5cbiAgcmV0dXJuIHJlY2lwZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGUoKSB7XG4gIGNvbnN0IHJlY2lwZSA9IHVzZUxvYWRlckRhdGE8SVJlY2lwZT4oKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB4LTQgc206cHgtMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC1jb2wgYmctd2hpdGUgZ2FwLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtdmgzM1wiPlxuICAgICAgICAgICAgey8qIFRPRE86IG9ubHkgc2hvdyBmb3IgYWRtaW5zICovfVxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgdG89e2AvYWRtaW4vcmVjaXBlcy8ke3JlY2lwZS5pZH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNCByaWdodC00IHotMTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCB0ZXh0LXdoaXRlIHctMTAgaC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogPFBlbmNpbEFsdEljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICB7LyogPFJlY2lwZU1ldHJpY3MgcmVjaXBlPXtyZWNpcGV9IC8+ICovfVxuICAgICAgICAgICAge3JlY2lwZS5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBvYmplY3QtY292ZXIgaC12aDMzIHctZnVsbFwiXG4gICAgICAgICAgICAgICAgc3JjPXtyZWNpcGUuaW1hZ2V9XG4gICAgICAgICAgICAgICAgYWx0PXtyZWNpcGUubmFtZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYWJzb2x1dGUgYm90dG9tLTAgdGV4dC1jZW50ZXIgdy1mdWxsIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgcHktNFwiPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LXNlcmlmXCI+e3JlY2lwZS5uYW1lfTwvaDE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBwLTQgYmctd2hpdGVcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibGVnZyB0aWwgc29tIGZhdm9yaXR0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIDxCb29rbWFya0ljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIGhpZGRlbiBsZzpibG9ja1wiPkxhZ3JlIHNvbSBmYXZvcml0dDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxlZ2cgdGlsIG1lbnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPEJvb2tPcGVuSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+TGVnZyB0aWwgbWVueTwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInByaW50XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIDxQcmludGVySWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+UHJpbnQ8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYXN0IG5lZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8U2F2ZUljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIGhpZGRlbiBsZzpibG9ja1wiPkxhZ3JlPC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICB7cmVjaXBlLnNvdXJjZSA/IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e3JlY2lwZS5zb3VyY2V9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiA8RXh0ZXJuYWxMaW5rSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMiBoaWRkZW4gbGc6YmxvY2tcIj5LaWxkZTwvZGl2PlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAge3JlY2lwZS5kZXNjcmlwdGlvbiA/IChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrIGNvbnRhaW5lciBteC1hdXRvIHB4LTQgc206cHgtMCBiZy13aGl0ZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxSZWNpcGVNYXJrZG93biBtYXJrZG93bj17cmVjaXBlLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApIDogbnVsbH1cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC0wIGJnLXdoaXRlIGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgZ2FwLTRcIj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnctMS8yIHhsOnctNS8xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtbGcgdXBwZXJjYXNlIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIEluZ3JlZGllbnNlclxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSZWNpcGVNYXJrZG93biBtYXJrZG93bj17cmVjaXBlLmluZ3JlZGllbnRzfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOnctMS8yIHhsOnctNy8xMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHRleHQtbGcgdXBwZXJjYXNlIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgIEZyZW1nYW5nc21cdTAwRTV0ZVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxSZWNpcGVNYXJrZG93biBtYXJrZG93bj17cmVjaXBlLnN0ZXBzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcbiAgY29uc3QgeyBzbHVnIH0gPSB1c2VQYXJhbXMoKTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDQ6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgRmFudCBpbmdlbiBvcHBza3JpZnQgbWVkIGlkOiBcIntzbHVnfVwiXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSA0MDE6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+XG4gICAgICAgICAgRHUgaGFyIGlra2UgdGlsZ2FuZyB0aWwgb3Bwc2tyaWZ0IG1lZCBpZDogXCJ7c2x1Z31cIlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVWtqZW50IGZlaWw6ICR7Y2F1Z2h0LnN0YXR1c31gKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVE9ETzogbWFrZSBwZXJ0aWVyIG9yIHJlbW92ZSB0byBjYXRjaCBoaWdoZXIgdXAgPyAodGhyb3cgbmV3IEVycm9yKFwid29vb1wiKSBpbiBsb2FkZXIgdG8gdmlldylcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKVxuICBjb25zdCB7IHNsdWcgfSA9IHVzZVBhcmFtcygpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGFpbmVyXCI+RGV0IHNramVkZGUgZW4gZmVpbCBtZWQgbGFzdGluZyBhdiBvcHBza3JpZnQgbWVkIGlkOiBcIntzbHVnfVwiLjwvZGl2PlxuICApO1xufSIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBNYXJrZG93biBmcm9tIFwibWFya2Rvd24tdG8tanN4XCJcbmltcG9ydCBzbHVnaWZ5IGZyb20gXCJ+L2xpYi9zbHVnaWZ5XCJcbmltcG9ydCBUaW1lciBmcm9tIFwiLi90aW1lclwiXG5cbnR5cGUgUHJvcHNUeXBlID0ge1xuICBtYXJrZG93bjogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZU1hcmtkb3duKHsgbWFya2Rvd24gfTogUHJvcHNUeXBlKSB7XG4gIHJldHVybiA8TWFya2Rvd25cbiAgICBjaGlsZHJlbj17bWFya2Rvd259XG4gICAgb3B0aW9ucz17e1xuICAgICAgb3ZlcnJpZGVzOiB7XG4gICAgICAgIGgxOiB7XG4gICAgICAgICAgY29tcG9uZW50OiBIMVxuICAgICAgICB9LFxuICAgICAgICBsaToge1xuICAgICAgICAgIGNvbXBvbmVudDogTGlzdEl0ZW1cbiAgICAgICAgfSxcbiAgICAgICAgY29kZToge1xuICAgICAgICAgIGNvbXBvbmVudDogQ29kZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfX1cbiAgLz5cbn1cblxudHlwZSBNYXJrZG93bkNvbXBvbmVudFR5cGUgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gSDEoeyBjaGlsZHJlbiB9OiBNYXJrZG93bkNvbXBvbmVudFR5cGUpIHtcbiAgcmV0dXJuIChcbiAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSB1cHBlcmNhc2UgdGV4dC1ncmF5LTUwMCBwYi0wIHB0LTRcIj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2gzPlxuICApXG59XG5cbmZ1bmN0aW9uIExpc3RJdGVtKHsgY2hpbGRyZW4gfTogTWFya2Rvd25Db21wb25lbnRUeXBlKSB7XG4gIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGlkID0gc2x1Z2lmeShjaGlsZHJlblswXSlcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCkgPT4ge1xuICAgIHNldENoZWNrZWQoIWNoZWNrZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGlkPXtpZH1cbiAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgbmFtZT17aWR9XG4gICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94XCJcbiAgICAgIC8+XG4gICAgICA8bGFiZWxcbiAgICAgICAgaHRtbEZvcj17aWR9XG4gICAgICAgIGNsYXNzTmFtZT17YHAtMyB0ZXh0LWJhc2UgaW5saW5lLWJsb2NrIGN1cnNvci1wb2ludGVyIHdoaXRlc3BhY2Utbm9ybWFsIGZsZXgtZ3JvdyAke2NoZWNrZWQgPyBcInRleHQtZ3JheS01MDBcIiA6IFwiaW5oZXJpdFwifWB9XG4gICAgICA+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9saT5cbiAgKVxufVxuXG5mdW5jdGlvbiBDb2RlKHsgY2hpbGRyZW4gfTogTWFya2Rvd25Db21wb25lbnRUeXBlKSB7XG4gIGNvbnN0IHRpbWVyID0gcGFyc2VJbnQoY2hpbGRyZW4ucmVwbGFjZShcInRpbWVyOlwiLCBcIlwiKSlcbiAgY29uc29sZS5sb2codGltZXIpO1xuICBpZiAoY2hpbGRyZW4uc3RhcnRzV2l0aChcInRpbWVyOlwiKSkge1xuICAgIHJldHVybiA8VGltZXIgdmFsdWU9e3RpbWVyfSAvPlxuICB9XG5cbiAgcmV0dXJuIG51bGxcbn0iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2x1Z2lmeSh0ZXh0OiBzdHJpbmcpIHtcbiAgY29uc3QgYSA9IFwiXHUwMEUwXHUwMEUxXHUwMEUyXHUwMEU0XHUwMEU2XHUwMEUzXHUwMEU1XHUwMTAxXHUwMTAzXHUwMTA1XHUwMEU3XHUwMTA3XHUwMTBEXHUwMTExXHUwMTBGXHUwMEU4XHUwMEU5XHUwMEVBXHUwMEVCXHUwMTEzXHUwMTE3XHUwMTE5XHUwMTFCXHUwMTFGXHUwMUY1XHUxRTI3XHUwMEVFXHUwMEVGXHUwMEVEXHUwMTJCXHUwMTJGXHUwMEVDXHUwMTQyXHUxRTNGXHUwMEYxXHUwMTQ0XHUwMUY5XHUwMTQ4XHUwMEY0XHUwMEY2XHUwMEYyXHUwMEYzXHUwMTUzXHUwMEY4XHUwMTREXHUwMEY1XHUwMTUxXHUxRTU1XHUwMTU1XHUwMTU5XHUwMERGXHUwMTVCXHUwMTYxXHUwMTVGXHUwMjE5XHUwMTY1XHUwMjFCXHUwMEZCXHUwMEZDXHUwMEY5XHUwMEZBXHUwMTZCXHUwMUQ4XHUwMTZGXHUwMTcxXHUwMTczXHUxRTgzXHUxRThEXHUwMEZGXHUwMEZEXHUwMTdFXHUwMTdBXHUwMTdDXHUwMEI3L18sOjtcIlxuICBjb25zdCBiID0gXCJhYWFhYWFhYWFhY2NjZGRlZWVlZWVlZWdnaGlpaWlpaWxtbm5ubm9vb29vb29vb3BycnNzc3NzdHR1dXV1dXV1dXV3eHl5enp6LS0tLS0tXCJcbiAgY29uc3QgcCA9IG5ldyBSZWdFeHAoYS5zcGxpdChcIlwiKS5qb2luKFwifFwiKSwgXCJnXCIpXG5cbiAgcmV0dXJuIHRleHRcbiAgICAudG9TdHJpbmcoKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1xccysvZywgXCItXCIpIC8vIFJlcGxhY2Ugc3BhY2VzIHdpdGggLVxuICAgIC5yZXBsYWNlKHAsIChjKSA9PiBiLmNoYXJBdChhLmluZGV4T2YoYykpKSAvLyBSZXBsYWNlIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgIC5yZXBsYWNlKC8mL2csIFwiLWFuZC1cIikgLy8gUmVwbGFjZSAmIHdpdGggJ2FuZCdcbiAgICAucmVwbGFjZSgvW15cXHctXSsvZywgXCJcIikgLy8gUmVtb3ZlIGFsbCBub24td29yZCBjaGFyYWN0ZXJzXG4gICAgLnJlcGxhY2UoLy0rL2csIFwiLVwiKSAvLyBSZXBsYWNlIG11bHRpcGxlIC0gd2l0aCBzaW5nbGUgLVxuICAgIC5yZXBsYWNlKC9eLSsvLCBcIlwiKSAvLyBUcmltIC0gZnJvbSBzdGFydCBvZiB0ZXh0XG4gICAgLnJlcGxhY2UoLy0rJC8sIFwiXCIpIC8vIFRyaW0gLSBmcm9tIGVuZCBvZiB0ZXh0XG59XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0xvYnN0ZXJCYW5kaXQvdXNlLWNvdW50ZG93bi10aW1lci9ibG9iL21hc3Rlci9zcmMvaW5kZXgudHNcbi8vIGh0dHBzOi8vcmVhY3Rqc2V4YW1wbGUuY29tL3JlYWN0LWhvb2stZXhwb3NpbmctYS1jb3VudGRvd24tdGltZXItd2l0aC1vcHRpb25hbC1leHBpcmF0aW9uLWFuZC1yZXNldC1jYWxsYmFja3MvXG5pbnRlcmZhY2UgSVRpbWVyU3RhdGUge1xuICByZW1haW5pbmc6IG51bWJlclxuICBjbG9jazogc3RyaW5nXG4gIGlzUnVubmluZzogYm9vbGVhblxuICBjYW5TdGFydDogYm9vbGVhblxufVxuXG50eXBlIEFjdGlvblR5cGUgPVxuICB8IHsgdHlwZTogXCJzdGFydFwiIH1cbiAgfCB7IHR5cGU6IFwic3RhcnRlZFwiIH1cbiAgfCB7IHR5cGU6IFwicmVzZXRcIjsgZGF0YTogSVRpbWVyU3RhdGUgfVxuICB8IHsgdHlwZTogXCJwYXVzZVwiIH1cbiAgfCB7IHR5cGU6IFwidGlja1wiIH1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBJVGltZXJTdGF0ZSA9IHtcbiAgcmVtYWluaW5nOiAwLFxuICBjbG9jazogXCIwMDowMFwiLFxuICBpc1J1bm5pbmc6IGZhbHNlLFxuICBjYW5TdGFydDogZmFsc2UsXG59XG5cbi8vIFRPRE86IGZpeCBpc1J1bm5pbmdcbmNvbnN0IHJlZHVjZXI6IFJlYWN0LlJlZHVjZXI8SVRpbWVyU3RhdGUsIEFjdGlvblR5cGU+ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgXCJzdGFydFwiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhblN0YXJ0OiB0cnVlIH1cbiAgICBjYXNlIFwic3RhcnRlZFwiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzUnVubmluZzogdHJ1ZSB9XG4gICAgY2FzZSBcInJlc2V0XCI6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5hY3Rpb24uZGF0YSxcbiAgICAgICAgY2xvY2s6IG1zVG9DbG9jayhhY3Rpb24uZGF0YS5yZW1haW5pbmcpLFxuICAgICAgfVxuICAgIGNhc2UgXCJwYXVzZVwiOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGlzUnVubmluZzogZmFsc2UsIGNhblN0YXJ0OiBmYWxzZSB9XG4gICAgY2FzZSBcInRpY2tcIjpcbiAgICAgIGNvbnN0IF9yZW1haW5pbmcgPSBzdGF0ZS5yZW1haW5pbmcgLSAxMDAwXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVtYWluaW5nOiBfcmVtYWluaW5nLFxuICAgICAgICBjbG9jazogbXNUb0Nsb2NrKF9yZW1haW5pbmcpLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5mdW5jdGlvbiBtc1RvQ2xvY2sobXM6IG51bWJlcikge1xuICBjb25zdCB0b3RhbFNlY29uZHMgPSBtcyAvIDEwMDBcblxuICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyA2MClcbiAgICAudG9TdHJpbmcoKVxuICAgIC5wYWRTdGFydCgyLCBcIjBcIilcbiAgY29uc3Qgc2Vjb25kcyA9ICh0b3RhbFNlY29uZHMgJSA2MCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIilcblxuICByZXR1cm4gYCR7bWludXRlc306JHtzZWNvbmRzfWBcbn1cblxuY29uc3QgdXNlVGltZXIgPSAobWludXRlczogbnVtYmVyLCBvbkV4cGlyZT86ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3QgbXMgPSBtaW51dGVzICogMTAwMCAqIDYwXG4gIGNvbnN0IHJlbWFpbmluZ1JlZiA9IFJlYWN0LnVzZVJlZjxudW1iZXI+KG1zKVxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwge1xuICAgIC4uLmluaXRpYWxTdGF0ZSxcbiAgICByZW1haW5pbmc6IG1zLFxuICAgIGNsb2NrOiBtc1RvQ2xvY2sobXMpLFxuICB9KVxuICBjb25zdCB7IHJlbWFpbmluZywgY2FuU3RhcnQgfSA9IHN0YXRlXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZW1haW5pbmdSZWYuY3VycmVudCA9IHJlbWFpbmluZ1xuICB9LCBbcmVtYWluaW5nXSlcblxuICBjb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwic3RhcnRcIiB9KVxuICB9XG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcInJlc2V0XCIsIGRhdGE6IHsgLi4uaW5pdGlhbFN0YXRlLCByZW1haW5pbmc6IG1zIH0gfSlcbiAgfVxuXG4gIGNvbnN0IHBhdXNlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJwYXVzZVwiIH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGV4cGlyZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAob25FeHBpcmUgJiYgdHlwZW9mIG9uRXhwaXJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIG9uRXhwaXJlKClcbiAgICB9XG4gICAgcGF1c2UoKVxuICB9LCBbb25FeHBpcmUsIHBhdXNlXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHRpY2soKSB7XG4gICAgICBpZiAocmVtYWluaW5nUmVmLmN1cnJlbnQgPD0gMCkge1xuICAgICAgICBleHBpcmUoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcInRpY2tcIiB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBpZDogTm9kZUpTLlRpbWVvdXRcbiAgICBpZiAoY2FuU3RhcnQpIHtcbiAgICAgIGlkID0gc2V0SW50ZXJ2YWwodGljaywgMTAwMClcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJzdGFydGVkXCIgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZClcbiAgfSwgW2NhblN0YXJ0LCBleHBpcmVdKVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgc3RhcnQsXG4gICAgcmVzZXQsXG4gICAgcGF1c2UsXG4gIH1cbn1cblxuaW50ZXJmYWNlIElUaW1lclByb3BzIHtcbiAgdmFsdWU6IG51bWJlclxufVxuXG4vLyBUT0RPOiByZWZhY3RvciBzdHlsZXNcbi8vIFRPRE86IGFjY2VwdCBob3VycywgbWludXRlcywgc2Vjb25kcyBtYXliZSA/XG5jb25zdCBUaW1lcjogUmVhY3QuRkM8SVRpbWVyUHJvcHM+ID0gKHsgdmFsdWUgfSkgPT4ge1xuICBjb25zdCB7IHJlbWFpbmluZywgY2xvY2ssIGlzUnVubmluZywgc3RhcnQsIHJlc2V0LCBwYXVzZSB9ID0gdXNlVGltZXIodmFsdWUpXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gUmVhY3QudXNlU3RhdGUoMTApXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcm9ncmVzcyhNYXRoLnJvdW5kKChyZW1haW5pbmcgLyAodmFsdWUgKiAxMDAwICogNjApKSAqIDEwMCkpXG4gIH0sIFtyZW1haW5pbmcsIHZhbHVlXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMlwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcmVsYXRpdmUgY3Vyc29yLXBvaW50ZXIgaC04IHJvdW5kZWRcIlxuICAgICAgICBvbkNsaWNrPXtpc1J1bm5pbmcgPyBwYXVzZSA6IHN0YXJ0fVxuICAgICAgPlxuICAgICAgICA8TGluZWFyUHJvZ3Jlc3NcbiAgICAgICAgICAvLyBjb2xvcj17aXNSdW5uaW5nID8gXCJzZWNvbmRhcnlcIiA6IHVuZGVmaW5lZH1cbiAgICAgICAgICBpc1J1bm5pbmdcbiAgICAgICAgICAvLyB2YXJpYW50PVwiZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgIHZhbHVlPXtwcm9ncmVzc31cbiAgICAgICAgLy8gc3R5bGU9e3sgaGVpZ2h0OiBcIjJyZW1cIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTAgbGVmdC0wIGZsZXggZmxleC1ncm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQteGxcIj5cbiAgICAgICAgICB7Y2xvY2t9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIHB4LTIgXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcmVzZXQoKX1cbiAgICAgID5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC00IHctNFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk00IDJhMSAxIDAgMDExIDF2Mi4xMDFhNy4wMDIgNy4wMDIgMCAwMTExLjYwMSAyLjU2NiAxIDEgMCAxMS0xLjg4NS42NjZBNS4wMDIgNS4wMDIgMCAwMDUuOTk5IDdIOWExIDEgMCAwMTAgMkg0YTEgMSAwIDAxLTEtMVYzYTEgMSAwIDAxMS0xem0uMDA4IDkuMDU3YTEgMSAwIDAxMS4yNzYuNjFBNS4wMDIgNS4wMDIgMCAwMDE0LjAwMSAxM0gxMWExIDEgMCAxMTAtMmg1YTEgMSAwIDAxMSAxdjVhMSAxIDAgMTEtMiAwdi0yLjEwMWE3LjAwMiA3LjAwMiAwIDAxLTExLjYwMS0yLjU2NiAxIDEgMCAwMS42MS0xLjI3NnpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyXG5cbmludGVyZmFjZSBMaW5lYXJQcm9ncmVzc1Byb3BzIHtcbiAgaXNSdW5uaW5nOiBib29sZWFuXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuY29uc3QgTGluZWFyUHJvZ3Jlc3M6IFJlYWN0LkZDPExpbmVhclByb2dyZXNzUHJvcHM+ID0gKHtcbiAgaXNSdW5uaW5nLFxuICB2YWx1ZSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BoLTggcm91bmRlZCB3LWZ1bGwgJHtpc1J1bm5pbmcgPyBcImJnLWdyYXktMjAwXCIgOiBcImJnLWdyYXktMjAwXCJ9YH1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGgtZnVsbCByb3VuZGVkIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBlYXNlLWxpbmVhciAke2lzUnVubmluZyA/IFwiYmctZ3JheS01MDBcIiA6IFwiYmctZ3JheS01MDBcIn1gfVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogYCR7dmFsdWV9JWAgfX1cbiAgICAgID48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwgImltcG9ydCB7XG4gIGNvbGxlY3Rpb24sXG4gIGRvYyxcbiAgZ2V0RG9jLFxuICBnZXREb2NzLFxuICBsaW1pdCxcbiAgb3JkZXJCeSxcbiAgcXVlcnksXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIlxuaW1wb3J0IHNsdWdpZnkgZnJvbSBcIn4vbGliL3NsdWdpZnlcIlxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9maXJlYmFzZVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlY2lwZSB7XG4gIGlkOiBzdHJpbmdcbiAgc2x1Zzogc3RyaW5nXG4gIC8vIFRPRE86IHB1Ymxpc2hlZDogYm9vbGVhbixcbiAgY3JlYXRlZDogbnVtYmVyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgaW5ncmVkaWVudHM6IHN0cmluZ1xuICBzdGVwczogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzb3VyY2U/OiBzdHJpbmdcbiAgaW1hZ2U6IHN0cmluZ1xuICB0YWdzOiBzdHJpbmdbXVxuICB0aW1lOiBudW1iZXJcbiAgdHlwZTogbnVtYmVyXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWNpcGVzKHRha2UgPSAxMCkge1xuICBjb25zdCBxID0gcXVlcnkoXG4gICAgY29sbGVjdGlvbihkYiwgXCJyZWNpcGVzXCIpLFxuICAgIC8vIFRPRE86IHdoZXJlKFwicHVibGlzaGVkXCIsIFwiPT1cIiAsIHRydWUpXG4gICAgbGltaXQodGFrZSksXG4gICAgb3JkZXJCeShcImNyZWF0ZWRcIiwgXCJkZXNjXCIpXG4gIClcblxuICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSlcbiAgY29uc3QgcmVjaXBlcyA9IHNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+IHtcbiAgICAvLyBUT0RPOiByZXBsYWNlIGlkIHdpdGggc2x1Z1xuICAgIGNvbnN0IGRiUmVjaXBlID0gZG9jLmRhdGEoKVxuICAgIHJldHVybiB7XG4gICAgICBpZDogZG9jLmlkLFxuICAgICAgc2x1Zzogc2x1Z2lmeShkYlJlY2lwZS5uYW1lKSxcbiAgICAgIC4uLmRiUmVjaXBlLFxuICAgIH0gYXMgSVJlY2lwZVxuICB9KVxuXG4gIHJldHVybiByZWNpcGVzXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWNpcGUoaWQ6IHN0cmluZywgcmVuZGVyZWQgPSB0cnVlKSB7XG4gIGNvbnN0IHJlZiA9IGRvYyhkYiwgXCJyZWNpcGVzXCIsIGlkKVxuICBjb25zdCBzbmFwID0gYXdhaXQgZ2V0RG9jKHJlZilcblxuICBpZiAoIXNuYXAuZXhpc3RzKCkpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgZGJSZWNpcGUgPSBzbmFwLmRhdGEoKVxuICBcbiAgY29uc3QgcmVjaXBlID0ge1xuICAgIGlkOiBzbmFwLmlkLFxuICAgIC4uLmRiUmVjaXBlLFxuICB9IGFzIElSZWNpcGVcblxuICByZXR1cm4gcmVjaXBlXG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IGdldFJlY2lwZXMsIElSZWNpcGUgfSBmcm9tIFwifi9maXJlYmFzZS9yZWNpcGUtc2VydmljZVwiXG5pbXBvcnQgUmVjaXBlQ2FyZCBmcm9tIFwifi9jb21wb25lbnRzL3JlY2lwZS1jYXJkXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBnZXRSZWNpcGVzKDEyKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVzKCkge1xuICBjb25zdCByZWNpcGVzID0gdXNlTG9hZGVyRGF0YTxJUmVjaXBlW10+KClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgeGw6Z3JpZC1jb2xzLTVcIj5cbiAgICAgICAge3JlY2lwZXMubWFwKHJlY2lwZSA9PiAoXG4gICAgICAgICAgPFJlY2lwZUNhcmQga2V5PXtyZWNpcGUuaWR9IHJlY2lwZT17cmVjaXBlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBJUmVjaXBlIH0gZnJvbSBcIn4vZmlyZWJhc2UvcmVjaXBlLXNlcnZpY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlQ2FyZCh7IHJlY2lwZSB9OiB7IHJlY2lwZTogSVJlY2lwZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIHRvPXtyZWNpcGUuaWR9XG4gICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSByb3VuZGVkLWxnIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LWxnXCJcbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTY0IG9iamVjdC1jb3ZlclwiXG4gICAgICAgIHNyYz17cmVjaXBlLmltYWdlfVxuICAgICAgICBhbHQ9e3JlY2lwZS5uYW1lfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBsZWZ0LTAgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWJsYWNrIHRvLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTIgYm90dG9tLTIgbGVmdC0yIHotMTAgdGV4dC13aGl0ZSB1cHBlcmNhc2UgdGV4dC1jZW50ZXIgdGV4dC1iYXNlXCI+XG4gICAgICAgIHtyZWNpcGUubmFtZX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGluaz5cbiAgKVxufSIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuXG5jb25zdCBkcmF3ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBmcmFtZUNvdW50OiBudW1iZXIpID0+IHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodClcbiAgY3R4LmZpbGxTdHlsZSA9ICcjMDAwMDAwJ1xuICBjdHguYmVnaW5QYXRoKClcbiAgY3R4LmFyYyg1MCwgMTAwLCAyMCAqIE1hdGguc2luKGZyYW1lQ291bnQgKiAwLjA1KSAqKiAyLCAwLCAyICogTWF0aC5QSSlcbiAgY3R4LmZpbGwoKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FudmFzKCkge1xuXG4gIGNvbnN0IGNhbnZhc1JlZiA9IFJlYWN0LnVzZVJlZjxIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw+KG51bGwpXG5cblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnRcblxuICAgIGlmICghY2FudmFzKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBpZiAoIWNvbnRleHQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmcmFtZUNvdW50ID0gMFxuICAgIGxldCBhbmltYXRpb25GcmFtZUlkID0gMFxuICAgIC8vT3VyIGRyYXcgY2FtZSBoZXJlXG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgZnJhbWVDb3VudCsrXG4gICAgICBkcmF3KGNvbnRleHQsIGZyYW1lQ291bnQpXG4gICAgICBhbmltYXRpb25GcmFtZUlkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpXG4gICAgfVxuICAgIHJlbmRlcigpXG5cbiAgICByZXR1cm4gKCkgPT4geyB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCkgfVxuICB9LCBbZHJhd10pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkhlaTwvaDE+XG4gICAgICA8Y2FudmFzIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJjb3JuZmxvd2VyYmx1ZVwiIH19IHJlZj17Y2FudmFzUmVmfT48L2NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgKVxuXG59IiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tIFwifi9maXJlYmFzZS9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IGxvZ291dChyZXF1ZXN0KVxuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdChcIi9cIikiLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBMaW5rLCBPdXRsZXQsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgZ2V0UmVjaXBlcywgSVJlY2lwZSB9IGZyb20gXCJ+L2ZpcmViYXNlL3JlY2lwZS1zZXJ2aWNlXCJcbmltcG9ydCB7IHJlcXVpcmVVc2VySWQgfSBmcm9tIFwifi9maXJlYmFzZS9zZXNzaW9uLnNlcnZlclwiXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IHJlcXVpcmVVc2VySWQocmVxdWVzdClcbiAgXG4gIC8vIFRPRE86IGxvYWQgbW9yZSB0aGFuIDIwIHJlY2lwZXMuLi5cbiAgcmV0dXJuIGdldFJlY2lwZXMoNTApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xuICBjb25zdCByZWNpcGVzID0gdXNlTG9hZGVyRGF0YTxJUmVjaXBlW10+KClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBnYXAtNFwiPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJib3JkZXItciBib3JkZXItZ3JheS02MDAgcHItNFwiPlxuICAgICAgICA8aDE+QWRtaW48L2gxPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3JlY2lwZXMubWFwKHJlY2lwZSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtyZWNpcGUuc2x1Z30+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2FkbWluLyR7cmVjaXBlLmlkfWB9PlxuICAgICAgICAgICAgICAgIHtyZWNpcGUubmFtZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBGb3JtLCB1c2VMb2FkZXJEYXRhLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCJcbmltcG9ydCBJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL3VpL2lucHV0XCJcbmltcG9ydCB7IGdldFJlY2lwZSwgSVJlY2lwZSB9IGZyb20gXCJ+L2ZpcmViYXNlL3JlY2lwZS1zZXJ2aWNlXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIilcblxuICBjb25zdCByZWNpcGUgPSBhd2FpdCBnZXRSZWNpcGUocGFyYW1zLnNsdWcsIGZhbHNlKVxuICBpZiAoIXJlY2lwZSkge1xuICAgIHRocm93IG5ldyBSZXNwb25zZShgTm8gcmVjaXBlIGZvdW5kIHdpdGggaWQgPSAke3BhcmFtcy5zbHVnfWAsIHsgc3RhdHVzOiA0MDQgfSlcbiAgfVxuXG4gIHJldHVybiByZWNpcGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdCgpIHtcbiAgY29uc3QgcmVjaXBlID0gdXNlTG9hZGVyRGF0YTxJUmVjaXBlPigpXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDE+RWRpdDoge3JlY2lwZS5uYW1lfTwvaDE+XG5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwibmFtZVwiIGxhYmVsPVwiTmFtZVwiIHZhbHVlPXtyZWNpcGUubmFtZX0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJpbWFnZVwiIGxhYmVsPVwiSW1hZ2VcIiB2YWx1ZT17cmVjaXBlLmltYWdlfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInNvdXJjZVwiIGxhYmVsPVwiU291cmNlXCIgdmFsdWU9e3JlY2lwZS5zb3VyY2V9IC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwidGltZVwiIGxhYmVsPVwidGltZVwiIHZhbHVlPXtyZWNpcGUudGltZX0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJ0eXBlXCIgbGFiZWw9XCJ0eXBlXCIgdmFsdWU9e3JlY2lwZS50eXBlfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInRhZ3NcIiBsYWJlbD1cInRhZ3NcIiB2YWx1ZT17cmVjaXBlLnRhZ3N9IC8+XG5cblxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPVwiaW5ncmVkaWVudHNcIj5cbiAgICAgICAgICBJbmdyZWRpZW50c1xuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJpbnB1dCBoLTIwXCIgaWQ9XCJpbmdyZWRpZW50c1wiIHJvd3M9ezIwfSBuYW1lPVwiaW5ncmVkaWVudHNcIj5cbiAgICAgICAgICAgIHtyZWNpcGUuaW5ncmVkaWVudHN9XG4gICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICB7Lyoge2Vycm9ycz8ubWFya2Rvd24gJiYgPGRpdj5NYXJrZG93biBpcyByZXF1aXJlZDwvZGl2Pn0gKi99XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJMYWdyZXIuLi5cIiA6IFwiTGFncmVcIn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG5cbiAgICA8L2Rpdj5cbiAgKVxufSIsICJpbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXQoeyBuYW1lLCBsYWJlbCwgLi4ucmVzdCB9OiBJbnB1dFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsYWJlbCA/IDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9e25hbWV9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPiA6IG51bGx9XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPXtuYW1lfSBuYW1lPXtuYW1lfSB7Li4ucmVzdH0gLz5cbiAgICAgIHsvKiB7ZXJyb3JzPy50aXRsZSAmJiA8ZGl2PlRpdGxlIGlzIHJlcXVpcmVkPC9kaXY+fSAqL31cbiAgICA8Lz5cbiAgKVxufSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxwPlxuICAgICAgPExpbmsgdG89XCJuZXdcIj5DcmVhdGUgYSBuZXcgcmVjaXBlPC9MaW5rPlxuICAgIDwvcD5cbiAgKVxufSIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBGb3JtLCB1c2VBY3Rpb25EYXRhLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbi8vIGltcG9ydCB7IGNyZWF0ZVJlY2lwZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3JlY2lwZS1zZXJ2aWNlXCI7XG5cbnR5cGUgUG9zdEVycm9yID0ge1xuICB0aXRsZT86IGJvb2xlYW5cbiAgc2x1Zz86IGJvb2xlYW5cbiAgbWFya2Rvd24/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IG5ldyBQcm9taXNlKHJlcyA9PiBzZXRUaW1lb3V0KHJlcywgMTAwMCkpXG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpXG4gIGNvbnN0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpXG4gIGNvbnN0IG1hcmtkb3duID0gZm9ybURhdGEuZ2V0KFwibWFya2Rvd25cIilcblxuICBjb25zdCBlcnJvcnM6IFBvc3RFcnJvciA9IHt9XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWVcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWVcbiAgaWYgKCFtYXJrZG93bikgZXJyb3JzLm1hcmtkb3duID0gdHJ1ZVxuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpXG4gIGludmFyaWFudCh0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIilcbiAgaW52YXJpYW50KHR5cGVvZiBtYXJrZG93biA9PT0gXCJzdHJpbmdcIilcbiAgLy8gYXdhaXQgY3JlYXRlUmVjaXBlKHsgdGl0bGUsIHNsdWcsIG1hcmtkb3duIH0pXG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2FkbWluXCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKVxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cInRpdGxlXCI+XG4gICAgICAgIFRpdGxlOlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiAvPlxuICAgICAgICB7ZXJyb3JzPy50aXRsZSAmJiA8ZGl2PlRpdGxlIGlzIHJlcXVpcmVkPC9kaXY+fVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+XG4gICAgICAgIFNsdWc6IDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNsdWdcIiAvPlxuICAgICAgICB7ZXJyb3JzPy5zbHVnICYmIDxkaXY+U2x1ZyBpcyByZXF1aXJlZDwvZGl2Pn1cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9XCJtYXJrZG93blwiPk1hcmtkb3duOlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiaW5wdXQgaC0yMFwiIGlkPVwibWFya2Rvd25cIiByb3dzPXsyMH0gbmFtZT1cIm1hcmtkb3duXCIgLz5cbiAgICAgICAge2Vycm9ycz8ubWFya2Rvd24gJiYgPGRpdj5NYXJrZG93biBpcyByZXF1aXJlZDwvZGl2Pn1cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJMYWdyZXIuLi5cIiA6IFwiTGFncmVcIn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKVxufSIsICJpbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG4vLyB0eXBlIEluZGV4RGF0YSA9IHtcbi8vICAgcmVzb3VyY2VzOiBBcnJheTx7IG5hbWU6IHN0cmluZzsgdXJsOiBzdHJpbmcgfT47XG4vLyAgIGRlbW9zOiBBcnJheTx7IG5hbWU6IHN0cmluZzsgdG86IHN0cmluZyB9Pjtcbi8vIH07XG5cbi8vIC8vIExvYWRlcnMgcHJvdmlkZSBkYXRhIHRvIGNvbXBvbmVudHMgYW5kIGFyZSBvbmx5IGV2ZXIgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIsIHNvXG4vLyAvLyB5b3UgY2FuIGNvbm5lY3QgdG8gYSBkYXRhYmFzZSBvciBydW4gYW55IHNlcnZlciBzaWRlIGNvZGUgeW91IHdhbnQgcmlnaHQgbmV4dFxuLy8gLy8gdG8gdGhlIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgaXQuXG4vLyAvLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbG9hZGVyXG4vLyBleHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4vLyAgIGxldCBkYXRhOiBJbmRleERhdGEgPSB7XG4vLyAgICAgcmVzb3VyY2VzOiBbXG4vLyAgICAgICB7XG4vLyAgICAgICAgIG5hbWU6IFwiUmVtaXggRG9jc1wiLFxuLy8gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9yZW1peC5ydW4vZG9jc1wiXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBuYW1lOiBcIlJlYWN0IFJvdXRlciBEb2NzXCIsXG4vLyAgICAgICAgIHVybDogXCJodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzXCJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIG5hbWU6IFwiUmVtaXggRGlzY29yZFwiLFxuLy8gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9kaXNjb3JkLmdnL1ZCZVBzNmRcIlxuLy8gICAgICAgfVxuLy8gICAgIF0sXG4vLyAgICAgZGVtb3M6IFtcbi8vICAgICAgIHtcbi8vICAgICAgICAgdG86IFwiZGVtb3MvYWN0aW9uc1wiLFxuLy8gICAgICAgICBuYW1lOiBcIkFjdGlvbnNcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgdG86IFwiZGVtb3MvYWJvdXRcIixcbi8vICAgICAgICAgbmFtZTogXCJOZXN0ZWQgUm91dGVzLCBDU1MgbG9hZGluZy91bmxvYWRpbmdcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgdG86IFwiZGVtb3MvcGFyYW1zXCIsXG4vLyAgICAgICAgIG5hbWU6IFwiVVJMIFBhcmFtcyBhbmQgRXJyb3IgQm91bmRhcmllc1wiXG4vLyAgICAgICB9XG4vLyAgICAgXVxuLy8gICB9O1xuXG4vLyAgIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCNqc29uXG4vLyAgIHJldHVybiBqc29uKGRhdGEpO1xuLy8gfTtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI21ldGFcbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIlJlbWl4IFN0YXJ0ZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZWxjb21lIHRvIHJlbWl4IVwiXG4gIH07XG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvcm91dGluZyNpbmRleC1yb3V0ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+QSB0aXRsZTwvaDE+XG4gICAgICAgIDxwPkhlbGx1dXV1PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgRm9ybSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlclNlc3Npb24sIGxvZ2luIH0gZnJvbSBcIn4vZmlyZWJhc2Uvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZTogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8IHVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm4gYFVzZXJuYW1lcyBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycyBsb25nYDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgIHJldHVybiBgUGFzc3dvcmRzIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZEVycm9ycz86IHtcbiAgICB1c2VybmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIH07XG4gIGZpZWxkcz86IHtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSk6IFByb21pc2U8UmVzcG9uc2UgfCBBY3Rpb25EYXRhPiA9PiB7XG4gIGNvbnN0IGZvcm0gPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IHVzZXJuYW1lID0gZm9ybS5nZXQoXCJ1c2VybmFtZVwiKTtcbiAgY29uc3QgcGFzc3dvcmQgPSBmb3JtLmdldChcInBhc3N3b3JkXCIpO1xuICBjb25zdCByZWRpcmVjdFRvID0gZm9ybS5nZXQoXCJyZWRpcmVjdFRvXCIpIHx8IFwiL1wiO1xuICBcbiAgaWYgKFxuICAgIHR5cGVvZiB1c2VybmFtZSAhPT0gXCJzdHJpbmdcIiB8fFxuICAgIHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fFxuICAgIHR5cGVvZiByZWRpcmVjdFRvICE9PSBcInN0cmluZ1wiXG4gICkge1xuICAgIHJldHVybiB7IGZvcm1FcnJvcjogYEZvcm0gbm90IHN1Ym1pdHRlZCBjb3JyZWN0bHkuYCB9O1xuICB9XG5cbiAgY29uc3QgZmllbGRzID0geyB1c2VybmFtZSwgcGFzc3dvcmQgfTtcbiAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgdXNlcm5hbWU6IHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWUpLFxuICAgIHBhc3N3b3JkOiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkKVxuICB9O1xuICBpZiAoT2JqZWN0LnZhbHVlcyhmaWVsZEVycm9ycykuc29tZShCb29sZWFuKSlcbiAgICByZXR1cm4geyBmaWVsZEVycm9ycywgZmllbGRzIH07XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pO1xuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmllbGRzLFxuICAgICAgZm9ybUVycm9yOiBgVXNlcm5hbWUvUGFzc3dvcmQgY29tYmluYXRpb24gaXMgaW5jb3JyZWN0YFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci51aWQsIHJlZGlyZWN0VG8pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgPGgxPkxvZ2cgaW5uPC9oMT5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwicmVkaXJlY3RUb1wiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gdW5kZWZpbmVkfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInVzZXJuYW1lXCIgbGFiZWw9XCJCcnVrZXJuYXZuXCIgdHlwZT1cImVtYWlsXCIgLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJwYXNzd29yZFwiIGxhYmVsPVwiUGFzc29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIC8+XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJMb2dnZXIgaW5uLi4uXCIgOiBcIkxvZ2cgaW5uXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApXG59Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxX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
