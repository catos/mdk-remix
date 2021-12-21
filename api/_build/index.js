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
  }, children, /* @__PURE__ */ React.createElement(import_remix5.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix5.Scripts, null), false));
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
