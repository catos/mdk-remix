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
var import_auth2 = __toModule(require("@firebase/auth"));

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9maXJlYmFzZS9zZXNzaW9uLnNlcnZlci50cyIsICIuLi8uLi9hcHAvZmlyZWJhc2UvZmlyZWJhc2UudHMiLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvbGF5b3V0LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9mb290ZXIudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2xvZ28udHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2hlYWRlci50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvZG9jdW1lbnQudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvcmVjaXBlcy8kc2x1Zy50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvcmVjaXBlL21hcmtkb3duLnRzeCIsICIuLi8uLi9hcHAvbGliL3NsdWdpZnkudHMiLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvcmVjaXBlL3RpbWVyLnRzeCIsICIuLi8uLi9hcHAvZmlyZWJhc2UvcmVjaXBlLXNlcnZpY2UudHMiLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9yZWNpcGVzL2luZGV4LnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9yZWNpcGUtY2FyZC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9sb2dvdXQudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4udHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vJHNsdWcudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL3VpL2lucHV0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluL25ldy50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9sb2dpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL3JlY2lwZXMvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9yZWNpcGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNiBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU3IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vbmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9sb2dpbi50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL3JlY2lwZXMvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy9yZWNpcGVzLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiL29wcHNrcmlmdGVyLzpzbHVnXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTFcbiAgfSxcbiAgXCJyb3V0ZXMvcmVjaXBlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL3JlY2lwZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCIvb3Bwc2tyaWZ0ZXJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9sb2dvdXRcIjoge1xuICAgIGlkOiBcInJvdXRlcy9sb2dvdXRcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCJsb2dvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9hZG1pblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWRtaW5cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9hZG1pbi8kc2x1Z1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGF0aDogXCI6c2x1Z1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU1XG4gIH0sXG4gIFwicm91dGVzL2FkbWluL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvYWRtaW4vaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU2XG4gIH0sXG4gIFwicm91dGVzL2FkbWluL25ld1wiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluL25ld1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hZG1pblwiLFxuICAgIHBhdGg6IFwibmV3XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTdcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH0sXG4gIFwicm91dGVzL2xvZ2luXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbG9naW5cIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogXCIvbG9nZy1pbm5cIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBFbnRyeUNvbnRleHQgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgcmVzcG9uc2VTdGF0dXNDb2RlOiBudW1iZXIsXG4gIHJlc3BvbnNlSGVhZGVyczogSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0OiBFbnRyeUNvbnRleHRcbikge1xuICBsZXQgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBPdXRsZXQsIHVzZUNhdGNoLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIlxuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gXCIuL2ZpcmViYXNlL3Nlc3Npb24uc2VydmVyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9kb2N1bWVudFwiXG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9hcHAjbGlua3NcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpXG4gIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCNqc29uXG4gIHJldHVybiB1c2VyXG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjZGVmYXVsdC1leHBvcnRcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNyb3V0ZS1maWxlbmFtZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZUxvYWRlckRhdGEoKVxuICBcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQ+XG4gICAgICA8TGF5b3V0IHVzZXI9e3VzZXJ9PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNlcnJvcmJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPVwiRXJyb3IhXCI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5UaGVyZSB3YXMgYW4gZXJyb3I8L2gxPlxuICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEhleSwgZGV2ZWxvcGVyLCB5b3Ugc2hvdWxkIHJlcGxhY2UgdGhpcyB3aXRoIHdoYXQgeW91IHdhbnQgeW91clxuICAgICAgICAgICAgdXNlcnMgdG8gc2VlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9kb2NzL2VuL3YxL2FwaS9jb252ZW50aW9ucyNjYXRjaGJvdW5kYXJ5XG5leHBvcnQgZnVuY3Rpb24gQ2F0Y2hCb3VuZGFyeSgpIHtcbiAgY29uc3QgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuICBsZXQgbWVzc2FnZTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXG4gICAgICAgICAgdG8uXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQwNDpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPk9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IGRvZXMgbm90IGV4aXN0LjwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY2F1Z2h0LmRhdGEgfHwgY2F1Z2h0LnN0YXR1c1RleHQpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9e2Ake2NhdWdodC5zdGF0dXN9ICR7Y2F1Z2h0LnN0YXR1c1RleHR9YH0+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8aDE+XG4gICAgICAgICAge2NhdWdodC5zdGF0dXN9OiB7Y2F1Z2h0LnN0YXR1c1RleHR9XG4gICAgICAgIDwvaDE+XG4gICAgICAgIHttZXNzYWdlfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9Eb2N1bWVudD5cbiAgKTtcbn1cblxuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQge1xuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduT3V0LFxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXG4gIFVzZXIsXG59IGZyb20gXCJAZmlyZWJhc2UvYXV0aFwiXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4vZmlyZWJhc2VcIlxuXG50eXBlIExvZ2luRm9ybSA9IHtcbiAgdXNlcm5hbWU6IHN0cmluZ1xuICBwYXNzd29yZDogc3RyaW5nXG59XG5cbi8vIFRPRE86IGNyZWF0ZSB1c2VyIGluIGZpcmViYXNlL3VzZXJzXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIoeyB1c2VybmFtZSwgcGFzc3dvcmQgfTogTG9naW5Gb3JtKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgdXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgIC50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4gdXNlckNyZWRlbnRpYWwudXNlcilcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKTogYW55IHtcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGVcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2VcbiAgICAgIGlmIChlcnJvckNvZGUgPT0gXCJhdXRoL3dlYWstcGFzc3dvcmRcIikge1xuICAgICAgICByZXR1cm4gXCJUaGUgcGFzc3dvcmQgaXMgdG9vIHdlYWsuXCJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBlcnJvck1lc3NhZ2VcbiAgICAgIH1cbiAgICB9KVxuXG4gIHJldHVybiB1c2VyXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIHVzZXJuYW1lLCBwYXNzd29yZClcbiAgICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHVzZXJDcmVkZW50aWFsLnVzZXIpXG4gICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGVyci5jb2RlXG4gICAgICBlcnIubWVzc2FnZVxuICAgIH0pXG4gIHJldHVybiB1c2VyXG59XG5cbi8vIGNvbnN0IHNlc3Npb25TZWNyZXQgPSBwcm9jZXNzLmVudi5TRVNTSU9OX1NFQ1JFVFxuLy8gaWYgKCFzZXNzaW9uU2VjcmV0KSB7XG4vLyAgIHRocm93IG5ldyBFcnJvcihcIlNFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0XCIpXG4vLyB9XG5cbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiUkpfc2Vzc2lvblwiLFxuICAgIHNlY3VyZTogdHJ1ZSxcbiAgICBzZWNyZXRzOiBbXCJ3ZWVlMTIzNHdlZWVcIl0sXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VySWQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpXG4gIGNvbnN0IHVzZXJJZCA9IHNlc3Npb24uZ2V0KFwidXNlcklkXCIpXG4gIGlmICghdXNlcklkIHx8IHR5cGVvZiB1c2VySWQgIT09IFwic3RyaW5nXCIpIHJldHVybiBudWxsXG4gIHJldHVybiB1c2VySWRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlcXVpcmVVc2VySWQoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlZGlyZWN0VG86IHN0cmluZyA9IG5ldyBVUkwocmVxdWVzdC51cmwpLnBhdGhuYW1lXG4pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKVxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhbW1wicmVkaXJlY3RUb1wiLCByZWRpcmVjdFRvXV0pXG4gICAgdGhyb3cgcmVkaXJlY3QoYC9sb2dnLWlubj8ke3NlYXJjaFBhcmFtc31gKVxuICB9XG4gIHJldHVybiB1c2VySWRcbn1cblxuLy8gVE9ETzogZ2V0IHVzZXIgZnJvbSBmaXJlYmFzZS91c2Vycywgbm90IGF1dGhcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyKHJlcXVlc3Q6IFJlcXVlc3QpOiBQcm9taXNlPFVzZXIgfCBudWxsPiB7XG4gIGNvbnN0IHVzZXJJZCA9IGF1dGguY3VycmVudFVzZXI/LmVtYWlsXG4gIGlmICh0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXJcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHVzZXIpXG4gICAgcmV0dXJuIHVzZXJcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbG9nb3V0KHJlcXVlc3QpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHNpZ25PdXQoYXV0aClcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICByZXR1cm4gcmVkaXJlY3QoXCIvbG9nZy1pbm5cIiwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbihcbiAgdXNlcklkOiBzdHJpbmcgfCBudWxsLFxuICByZWRpcmVjdFRvOiBzdHJpbmdcbikge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKClcbiAgc2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgdXNlcklkKVxuICByZXR1cm4gcmVkaXJlY3QocmVkaXJlY3RUbywge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmNvbW1pdFNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSlcbn1cbiIsICJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiXG5pbXBvcnQgeyBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIlxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiXG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5Q1J4ajVUdVhCTzF1SVZUMlRlaG85bFViRzByRm5nUFNjXCIsXG4gIGF1dGhEb21haW46IFwiY2E3by1qcy5maXJlYmFzZWFwcC5jb21cIixcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly9jYTdvLWpzLmZpcmViYXNlaW8uY29tXCIsXG4gIHByb2plY3RJZDogXCJjYTdvLWpzXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiY2E3by1qcy5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0MDQxMDAwOTAwNzFcIixcbiAgYXBwSWQ6IFwiMTo0MDQxMDAwOTAwNzE6d2ViOjI3YTI5MzhhODE1YjdjYjhcIixcbn1cblxuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZylcblxuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKClcblxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKClcbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuXG50eXBlIFByb3BzID0ge1xuICB1c2VyPzogVXNlciB8IG51bGxcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyB1c2VyLCBjaGlsZHJlbiB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMTYgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8SGVhZGVyIHVzZXI9e3VzZXJ9Lz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTRcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBpdGVtcy1jZW50ZXIgcHktOCBiZy1ncmF5LTEwMFwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gSWxsbyBtYWlvcmVzXG4gICAgICAgICAgaXVyZSBpbiB2aXRhZSBpdXN0byBmdWdhIHJhdGlvbmU/XG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBnYXAtOFwiPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICBPbSBvc3NcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICBIamVscFxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPlxuICAgICAgICAgIFZpbGtcdTAwRTVyXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1zbVwiPlxuICAgICAgICB7XCJDb3B5cmlnaHQgXHUwMEE5IFwifVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5jYTdvLmNvbTwvc3Bhbj4ge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1cbiAgICAgICAge1wiLlwifVxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgPC9mb290ZXI+XG4gIClcbn1cbiIsICJjb25zdCBwcmltYXJ5ID0gXCIjRjM2QTNFXCJcbmNvbnN0IHNlY29uZGFyeSA9IFwiI0ZGQjMwQlwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDgxIDgxXCIgdmVyc2lvbj1cIjEuMVwiIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB3LTggaC04XCI+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMC40NDk5NzcsLTAuNDQ5OTc3LDAuNDQ5OTc3LDAuNDQ5OTc3LC0yMTI4LjM5LDE5MjUuOSlcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsMzk0MCwtMTEyMC41NilcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk01MjAsMTM5MC41N0w1NjAsMTM5MC41N0w1NjAsMTQwMC41N0w1MzAsMTQwMC41N0w1MzAsMTQyMC41N0w1NjAsMTQyMC41N0w1NjAsMTQzMC41N0w1MjAsMTQzMC41N0w1MjAsMTM5MC41N1pcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogcHJpbWFyeSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsMzkzMCwtMTEyMC41NilcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk02MjAsMTM5MC41N0w2MjAsMTQzMC41N0w2MTAsMTQzMC41N0w2MTAsMTQwMC41N0w1OTAsMTQwMC41N0w1OTAsMTQzMC41N0w1ODAsMTQzMC41N0w1ODAsMTM5MC41N0w2MjAsMTM5MC41N1pcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogcHJpbWFyeSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsMzk0MCwtMTEyMC41NilcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk01MjAsMTQ0MC41N0w1NjAsMTQ0MC41N0w1NjAsMTQ4MC41N0w1NTAsMTQ4MC41N0w1NTAsMTQ1MC41N0w1MjAsMTQ1MC41N0w1MjAsMTQ0MC41N1pcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogc2Vjb25kYXJ5IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwwLDAsMSwzOTMwLC0xMTIwLjU2KVwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTU5MCwxNDcwLjU3TDYxMCwxNDcwLjU3TDYxMCwxNDUwLjU3TDU5MCwxNDUwLjU3TDU5MCwxNDcwLjU3Wk01ODAsMTQ0MC41N0w2MjAsMTQ0MC41N0w2MjAsMTQ4MC41N0w1ODAsMTQ4MC41N0w1ODAsMTQ0MC41N1pcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZmlsbDogcHJpbWFyeSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImltcG9ydCB7IFVzZXIgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4vbG9nb1wiO1xuXG50eXBlIFByb3BzID0ge1xuICB1c2VyPzogVXNlciB8IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgdXNlciB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZml4ZWQgei01MCB3LWZ1bGwgdG9wLTAgZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTE2IGJnLWdyYXktMTAwXCI+XG4gICAgICA8bmF2IGFyaWEtbGFiZWw9XCJNYWluIG5hdmlnYXRpb25cIiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4XCI+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiIHRpdGxlPVwiUmVtaXhcIiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8TGluayB0bz1cIi9vcHBza3JpZnRlclwiPk9wcHNrcmlmdGVyPC9MaW5rPlxuICAgICAgICAgIHt1c2VyID9cbiAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9hZG1pblwiPkFkbWluPC9MaW5rPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt1c2VyLmRpc3BsYXlOYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCIvbG9nb3V0XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogPExpbmsgdG89XCIvbG9nZy1pbm5cIj5Mb2dnIGlubjwvTGluaz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gIClcbn0iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9ufSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnQoe1xuICBjaGlsZHJlbixcbiAgdGl0bGVcbn06IHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59KSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICB7dGl0bGUgPyA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+IDogbnVsbH1cbiAgICAgICAgPE1ldGEgLz5cbiAgICAgICAgPExpbmtzIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keSBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IE1hcmtkb3duIGZyb20gXCJtYXJrZG93bi10by1qc3hcIlxuaW1wb3J0IHsgTGluaywgTG9hZGVyRnVuY3Rpb24sIHVzZUNhdGNoLCB1c2VMb2FkZXJEYXRhLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIlxuaW1wb3J0IFJlY2lwZU1hcmtkb3duIGZyb20gXCJ+L2NvbXBvbmVudHMvcmVjaXBlL21hcmtkb3duXCJcbmltcG9ydCB7IGdldFJlY2lwZSwgSVJlY2lwZSB9IGZyb20gXCJ+L2ZpcmViYXNlL3JlY2lwZS1zZXJ2aWNlXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIilcbiAgY29uc3QgcmVjaXBlID0gYXdhaXQgZ2V0UmVjaXBlKHBhcmFtcy5zbHVnKVxuICBpZiAoIXJlY2lwZSkge1xuICAgIHRocm93IG5ldyBSZXNwb25zZShgTm8gcmVjaXBlIGZvdW5kIHdpdGggaWQgPSAke3BhcmFtcy5zbHVnfWAsIHsgc3RhdHVzOiA0MDQgfSlcbiAgfVxuXG4gIHJldHVybiByZWNpcGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlKCkge1xuICBjb25zdCByZWNpcGUgPSB1c2VMb2FkZXJEYXRhPElSZWNpcGU+KClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweC00IHNtOnB4LTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGZsZXgtY29sIGJnLXdoaXRlIGdhcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLXZoMzNcIj5cbiAgICAgICAgICAgIHsvKiBUT0RPOiBvbmx5IHNob3cgZm9yIGFkbWlucyAqL31cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIHRvPXtgL2FkbWluL3JlY2lwZXMvJHtyZWNpcGUuaWR9YH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB6LTEwIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgdGV4dC13aGl0ZSB3LTEwIGgtMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgey8qIDxQZW5jaWxBbHRJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiAqL31cbiAgICAgICAgICAgICAgRWRpdFxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgey8qIDxSZWNpcGVNZXRyaWNzIHJlY2lwZT17cmVjaXBlfSAvPiAqL31cbiAgICAgICAgICAgIHtyZWNpcGUuaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gb2JqZWN0LWNvdmVyIGgtdmgzMyB3LWZ1bGxcIlxuICAgICAgICAgICAgICAgIHNyYz17cmVjaXBlLmltYWdlfVxuICAgICAgICAgICAgICAgIGFsdD17cmVjaXBlLm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGFic29sdXRlIGJvdHRvbS0wIHRleHQtY2VudGVyIHctZnVsbCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHB5LTRcIj5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZXJpZlwiPntyZWNpcGUubmFtZX08L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTQgcC00IGJnLXdoaXRlXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxlZ2cgdGlsIHNvbSBmYXZvcml0dFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8Qm9va21hcmtJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMiBoaWRkZW4gbGc6YmxvY2tcIj5MYWdyZSBzb20gZmF2b3JpdHQ8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsZWdnIHRpbCBtZW55XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIDxCb29rT3Blbkljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIGhpZGRlbiBsZzpibG9ja1wiPkxlZ2cgdGlsIG1lbnk8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwcmludFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8UHJpbnRlckljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIGhpZGRlbiBsZzpibG9ja1wiPlByaW50PC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibGFzdCBuZWRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPFNhdmVJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMiBoaWRkZW4gbGc6YmxvY2tcIj5MYWdyZTwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAge3JlY2lwZS5zb3VyY2UgPyAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtyZWNpcGUuc291cmNlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogPEV4dGVybmFsTGlua0ljb24gY2xhc3NOYW1lPVwidy01IGgtNVwiIC8+ICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+S2lsZGU8L2Rpdj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIHtyZWNpcGUuZGVzY3JpcHRpb24gPyAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhpZGRlbiBsZzpibG9jayBjb250YWluZXIgbXgtYXV0byBweC00IHNtOnB4LTAgYmctd2hpdGUgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8UmVjaXBlTWFya2Rvd24gbWFya2Rvd249e3JlY2lwZS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgc206cHgtMCBiZy13aGl0ZSBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00XCI+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTp3LTEvMiB4bDp3LTUvMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiB0ZXh0LWxnIHVwcGVyY2FzZSBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICBJbmdyZWRpZW5zZXJcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UmVjaXBlTWFya2Rvd24gbWFya2Rvd249e3JlY2lwZS5pbmdyZWRpZW50c30gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTp3LTEvMiB4bDp3LTcvMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiB0ZXh0LWxnIHVwcGVyY2FzZSBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICBGcmVtZ2FuZ3NtXHUwMEU1dGVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8UmVjaXBlTWFya2Rvd24gbWFya2Rvd249e3JlY2lwZS5zdGVwc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENhdGNoQm91bmRhcnkoKSB7XG4gIGNvbnN0IGNhdWdodCA9IHVzZUNhdGNoKCk7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gdXNlUGFyYW1zKCk7XG4gIHN3aXRjaCAoY2F1Z2h0LnN0YXR1cykge1xuICAgIGNhc2UgNDA0OiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWNvbnRhaW5lclwiPlxuICAgICAgICAgIEZhbnQgaW5nZW4gb3Bwc2tyaWZ0IG1lZCBpZDogXCJ7c2x1Z31cIlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGNhc2UgNDAxOiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWNvbnRhaW5lclwiPlxuICAgICAgICAgIER1IGhhciBpa2tlIHRpbGdhbmcgdGlsIG9wcHNrcmlmdCBtZWQgaWQ6IFwie3NsdWd9XCJcbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVramVudCBmZWlsOiAke2NhdWdodC5zdGF0dXN9YCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFRPRE86IG1ha2UgcGVydGllciBvciByZW1vdmUgdG8gY2F0Y2ggaGlnaGVyIHVwID8gKHRocm93IG5ldyBFcnJvcihcIndvb29cIikgaW4gbG9hZGVyIHRvIHZpZXcpXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSh7IGVycm9yIH06IHsgZXJyb3I6IEVycm9yIH0pIHtcbiAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgY29uc3QgeyBzbHVnIH0gPSB1c2VQYXJhbXMoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWNvbnRhaW5lclwiPkRldCBza2plZGRlIGVuIGZlaWwgbWVkIGxhc3RpbmcgYXYgb3Bwc2tyaWZ0IG1lZCBpZDogXCJ7c2x1Z31cIi48L2Rpdj5cbiAgKTtcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcIm1hcmtkb3duLXRvLWpzeFwiXG5pbXBvcnQgc2x1Z2lmeSBmcm9tIFwifi9saWIvc2x1Z2lmeVwiXG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIlxuXG50eXBlIFByb3BzVHlwZSA9IHtcbiAgbWFya2Rvd246IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVNYXJrZG93bih7IG1hcmtkb3duIH06IFByb3BzVHlwZSkge1xuICByZXR1cm4gPE1hcmtkb3duXG4gICAgY2hpbGRyZW49e21hcmtkb3dufVxuICAgIG9wdGlvbnM9e3tcbiAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICBoMToge1xuICAgICAgICAgIGNvbXBvbmVudDogSDFcbiAgICAgICAgfSxcbiAgICAgICAgbGk6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IExpc3RJdGVtXG4gICAgICAgIH0sXG4gICAgICAgIGNvZGU6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENvZGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH19XG4gIC8+XG59XG5cbnR5cGUgTWFya2Rvd25Db21wb25lbnRUeXBlID0ge1xuICBjaGlsZHJlbjogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIEgxKHsgY2hpbGRyZW4gfTogTWFya2Rvd25Db21wb25lbnRUeXBlKSB7XG4gIHJldHVybiAoXG4gICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgcGItMCBwdC00XCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oMz5cbiAgKVxufVxuXG5mdW5jdGlvbiBMaXN0SXRlbSh7IGNoaWxkcmVuIH06IE1hcmtkb3duQ29tcG9uZW50VHlwZSkge1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBpZCA9IHNsdWdpZnkoY2hpbGRyZW5bMF0pXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRDaGVja2VkKCFjaGVja2VkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIG5hbWU9e2lkfVxuICAgICAgICBjbGFzc05hbWU9XCJjaGVja2JveFwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICBjbGFzc05hbWU9e2BwLTMgdGV4dC1iYXNlIGlubGluZS1ibG9jayBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vcm1hbCBmbGV4LWdyb3cgJHtjaGVja2VkID8gXCJ0ZXh0LWdyYXktNTAwXCIgOiBcImluaGVyaXRcIn1gfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2xhYmVsPlxuICAgIDwvbGk+XG4gIClcbn1cblxuZnVuY3Rpb24gQ29kZSh7IGNoaWxkcmVuIH06IE1hcmtkb3duQ29tcG9uZW50VHlwZSkge1xuICBjb25zdCB0aW1lciA9IHBhcnNlSW50KGNoaWxkcmVuLnJlcGxhY2UoXCJ0aW1lcjpcIiwgXCJcIikpXG4gIGNvbnNvbGUubG9nKHRpbWVyKTtcbiAgaWYgKGNoaWxkcmVuLnN0YXJ0c1dpdGgoXCJ0aW1lcjpcIikpIHtcbiAgICByZXR1cm4gPFRpbWVyIHZhbHVlPXt0aW1lcn0gLz5cbiAgfVxuXG4gIHJldHVybiBudWxsXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsdWdpZnkodGV4dDogc3RyaW5nKSB7XG4gIGNvbnN0IGEgPSBcIlx1MDBFMFx1MDBFMVx1MDBFMlx1MDBFNFx1MDBFNlx1MDBFM1x1MDBFNVx1MDEwMVx1MDEwM1x1MDEwNVx1MDBFN1x1MDEwN1x1MDEwRFx1MDExMVx1MDEwRlx1MDBFOFx1MDBFOVx1MDBFQVx1MDBFQlx1MDExM1x1MDExN1x1MDExOVx1MDExQlx1MDExRlx1MDFGNVx1MUUyN1x1MDBFRVx1MDBFRlx1MDBFRFx1MDEyQlx1MDEyRlx1MDBFQ1x1MDE0Mlx1MUUzRlx1MDBGMVx1MDE0NFx1MDFGOVx1MDE0OFx1MDBGNFx1MDBGNlx1MDBGMlx1MDBGM1x1MDE1M1x1MDBGOFx1MDE0RFx1MDBGNVx1MDE1MVx1MUU1NVx1MDE1NVx1MDE1OVx1MDBERlx1MDE1Qlx1MDE2MVx1MDE1Rlx1MDIxOVx1MDE2NVx1MDIxQlx1MDBGQlx1MDBGQ1x1MDBGOVx1MDBGQVx1MDE2Qlx1MDFEOFx1MDE2Rlx1MDE3MVx1MDE3M1x1MUU4M1x1MUU4RFx1MDBGRlx1MDBGRFx1MDE3RVx1MDE3QVx1MDE3Q1x1MDBCNy9fLDo7XCJcbiAgY29uc3QgYiA9IFwiYWFhYWFhYWFhYWNjY2RkZWVlZWVlZWVnZ2hpaWlpaWlsbW5ubm5vb29vb29vb29wcnJzc3Nzc3R0dXV1dXV1dXV1d3h5eXp6ei0tLS0tLVwiXG4gIGNvbnN0IHAgPSBuZXcgUmVnRXhwKGEuc3BsaXQoXCJcIikuam9pbihcInxcIiksIFwiZ1wiKVxuXG4gIHJldHVybiB0ZXh0XG4gICAgLnRvU3RyaW5nKClcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKSAvLyBSZXBsYWNlIHNwYWNlcyB3aXRoIC1cbiAgICAucmVwbGFjZShwLCAoYykgPT4gYi5jaGFyQXQoYS5pbmRleE9mKGMpKSkgLy8gUmVwbGFjZSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICAucmVwbGFjZSgvJi9nLCBcIi1hbmQtXCIpIC8vIFJlcGxhY2UgJiB3aXRoICdhbmQnXG4gICAgLnJlcGxhY2UoL1teXFx3LV0rL2csIFwiXCIpIC8vIFJlbW92ZSBhbGwgbm9uLXdvcmQgY2hhcmFjdGVyc1xuICAgIC5yZXBsYWNlKC8tKy9nLCBcIi1cIikgLy8gUmVwbGFjZSBtdWx0aXBsZSAtIHdpdGggc2luZ2xlIC1cbiAgICAucmVwbGFjZSgvXi0rLywgXCJcIikgLy8gVHJpbSAtIGZyb20gc3RhcnQgb2YgdGV4dFxuICAgIC5yZXBsYWNlKC8tKyQvLCBcIlwiKSAvLyBUcmltIC0gZnJvbSBlbmQgb2YgdGV4dFxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Mb2JzdGVyQmFuZGl0L3VzZS1jb3VudGRvd24tdGltZXIvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LnRzXG4vLyBodHRwczovL3JlYWN0anNleGFtcGxlLmNvbS9yZWFjdC1ob29rLWV4cG9zaW5nLWEtY291bnRkb3duLXRpbWVyLXdpdGgtb3B0aW9uYWwtZXhwaXJhdGlvbi1hbmQtcmVzZXQtY2FsbGJhY2tzL1xuaW50ZXJmYWNlIElUaW1lclN0YXRlIHtcbiAgcmVtYWluaW5nOiBudW1iZXJcbiAgY2xvY2s6IHN0cmluZ1xuICBpc1J1bm5pbmc6IGJvb2xlYW5cbiAgY2FuU3RhcnQ6IGJvb2xlYW5cbn1cblxudHlwZSBBY3Rpb25UeXBlID1cbiAgfCB7IHR5cGU6IFwic3RhcnRcIiB9XG4gIHwgeyB0eXBlOiBcInN0YXJ0ZWRcIiB9XG4gIHwgeyB0eXBlOiBcInJlc2V0XCI7IGRhdGE6IElUaW1lclN0YXRlIH1cbiAgfCB7IHR5cGU6IFwicGF1c2VcIiB9XG4gIHwgeyB0eXBlOiBcInRpY2tcIiB9XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVRpbWVyU3RhdGUgPSB7XG4gIHJlbWFpbmluZzogMCxcbiAgY2xvY2s6IFwiMDA6MDBcIixcbiAgaXNSdW5uaW5nOiBmYWxzZSxcbiAgY2FuU3RhcnQ6IGZhbHNlLFxufVxuXG4vLyBUT0RPOiBmaXggaXNSdW5uaW5nXG5jb25zdCByZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPElUaW1lclN0YXRlLCBBY3Rpb25UeXBlPiA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYW5TdGFydDogdHJ1ZSB9XG4gICAgY2FzZSBcInN0YXJ0ZWRcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1J1bm5pbmc6IHRydWUgfVxuICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWN0aW9uLmRhdGEsXG4gICAgICAgIGNsb2NrOiBtc1RvQ2xvY2soYWN0aW9uLmRhdGEucmVtYWluaW5nKSxcbiAgICAgIH1cbiAgICBjYXNlIFwicGF1c2VcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1J1bm5pbmc6IGZhbHNlLCBjYW5TdGFydDogZmFsc2UgfVxuICAgIGNhc2UgXCJ0aWNrXCI6XG4gICAgICBjb25zdCBfcmVtYWluaW5nID0gc3RhdGUucmVtYWluaW5nIC0gMTAwMFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlbWFpbmluZzogX3JlbWFpbmluZyxcbiAgICAgICAgY2xvY2s6IG1zVG9DbG9jayhfcmVtYWluaW5nKSxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZnVuY3Rpb24gbXNUb0Nsb2NrKG1zOiBudW1iZXIpIHtcbiAgY29uc3QgdG90YWxTZWNvbmRzID0gbXMgLyAxMDAwXG5cbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gNjApXG4gICAgLnRvU3RyaW5nKClcbiAgICAucGFkU3RhcnQoMiwgXCIwXCIpXG4gIGNvbnN0IHNlY29uZHMgPSAodG90YWxTZWNvbmRzICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpXG5cbiAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kc31gXG59XG5cbmNvbnN0IHVzZVRpbWVyID0gKG1pbnV0ZXM6IG51bWJlciwgb25FeHBpcmU/OiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG1zID0gbWludXRlcyAqIDEwMDAgKiA2MFxuICBjb25zdCByZW1haW5pbmdSZWYgPSBSZWFjdC51c2VSZWY8bnVtYmVyPihtcylcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIHtcbiAgICAuLi5pbml0aWFsU3RhdGUsXG4gICAgcmVtYWluaW5nOiBtcyxcbiAgICBjbG9jazogbXNUb0Nsb2NrKG1zKSxcbiAgfSlcbiAgY29uc3QgeyByZW1haW5pbmcsIGNhblN0YXJ0IH0gPSBzdGF0ZVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVtYWluaW5nUmVmLmN1cnJlbnQgPSByZW1haW5pbmdcbiAgfSwgW3JlbWFpbmluZ10pXG5cbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcInN0YXJ0XCIgfSlcbiAgfVxuXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJyZXNldFwiLCBkYXRhOiB7IC4uLmluaXRpYWxTdGF0ZSwgcmVtYWluaW5nOiBtcyB9IH0pXG4gIH1cblxuICBjb25zdCBwYXVzZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwicGF1c2VcIiB9KVxuICB9LCBbXSlcblxuICBjb25zdCBleHBpcmUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKG9uRXhwaXJlICYmIHR5cGVvZiBvbkV4cGlyZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBvbkV4cGlyZSgpXG4gICAgfVxuICAgIHBhdXNlKClcbiAgfSwgW29uRXhwaXJlLCBwYXVzZV0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgaWYgKHJlbWFpbmluZ1JlZi5jdXJyZW50IDw9IDApIHtcbiAgICAgICAgZXhwaXJlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJ0aWNrXCIgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaWQ6IE5vZGVKUy5UaW1lb3V0XG4gICAgaWYgKGNhblN0YXJ0KSB7XG4gICAgICBpZCA9IHNldEludGVydmFsKHRpY2ssIDEwMDApXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic3RhcnRlZFwiIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpXG4gIH0sIFtjYW5TdGFydCwgZXhwaXJlXSlcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHN0YXJ0LFxuICAgIHJlc2V0LFxuICAgIHBhdXNlLFxuICB9XG59XG5cbmludGVyZmFjZSBJVGltZXJQcm9wcyB7XG4gIHZhbHVlOiBudW1iZXJcbn1cblxuLy8gVE9ETzogcmVmYWN0b3Igc3R5bGVzXG4vLyBUT0RPOiBhY2NlcHQgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgbWF5YmUgP1xuY29uc3QgVGltZXI6IFJlYWN0LkZDPElUaW1lclByb3BzPiA9ICh7IHZhbHVlIH0pID0+IHtcbiAgY29uc3QgeyByZW1haW5pbmcsIGNsb2NrLCBpc1J1bm5pbmcsIHN0YXJ0LCByZXNldCwgcGF1c2UgfSA9IHVzZVRpbWVyKHZhbHVlKVxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKDEwKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJvZ3Jlc3MoTWF0aC5yb3VuZCgocmVtYWluaW5nIC8gKHZhbHVlICogMTAwMCAqIDYwKSkgKiAxMDApKVxuICB9LCBbcmVtYWluaW5nLCB2YWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IHJlbGF0aXZlIGN1cnNvci1wb2ludGVyIGgtOCByb3VuZGVkXCJcbiAgICAgICAgb25DbGljaz17aXNSdW5uaW5nID8gcGF1c2UgOiBzdGFydH1cbiAgICAgID5cbiAgICAgICAgPExpbmVhclByb2dyZXNzXG4gICAgICAgICAgLy8gY29sb3I9e2lzUnVubmluZyA/IFwic2Vjb25kYXJ5XCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgaXNSdW5uaW5nXG4gICAgICAgICAgLy8gdmFyaWFudD1cImRldGVybWluYXRlXCJcbiAgICAgICAgICB2YWx1ZT17cHJvZ3Jlc3N9XG4gICAgICAgIC8vIHN0eWxlPXt7IGhlaWdodDogXCIycmVtXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGJvdHRvbS0wIGxlZnQtMCBmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LXhsXCI+XG4gICAgICAgICAge2Nsb2NrfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBweC0yIFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0KCl9XG4gICAgICA+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNCB3LTRcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNCAyYTEgMSAwIDAxMSAxdjIuMTAxYTcuMDAyIDcuMDAyIDAgMDExMS42MDEgMi41NjYgMSAxIDAgMTEtMS44ODUuNjY2QTUuMDAyIDUuMDAyIDAgMDA1Ljk5OSA3SDlhMSAxIDAgMDEwIDJINGExIDEgMCAwMS0xLTFWM2ExIDEgMCAwMTEtMXptLjAwOCA5LjA1N2ExIDEgMCAwMTEuMjc2LjYxQTUuMDAyIDUuMDAyIDAgMDAxNC4wMDEgMTNIMTFhMSAxIDAgMTEwLTJoNWExIDEgMCAwMTEgMXY1YTEgMSAwIDExLTIgMHYtMi4xMDFhNy4wMDIgNy4wMDIgMCAwMS0xMS42MDEtMi41NjYgMSAxIDAgMDEuNjEtMS4yNzZ6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lclxuXG5pbnRlcmZhY2UgTGluZWFyUHJvZ3Jlc3NQcm9wcyB7XG4gIGlzUnVubmluZzogYm9vbGVhblxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmNvbnN0IExpbmVhclByb2dyZXNzOiBSZWFjdC5GQzxMaW5lYXJQcm9ncmVzc1Byb3BzPiA9ICh7XG4gIGlzUnVubmluZyxcbiAgdmFsdWUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgaC04IHJvdW5kZWQgdy1mdWxsICR7aXNSdW5uaW5nID8gXCJiZy1ncmF5LTIwMFwiIDogXCJiZy1ncmF5LTIwMFwifWB9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BoLWZ1bGwgcm91bmRlZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXIgJHtpc1J1bm5pbmcgPyBcImJnLWdyYXktNTAwXCIgOiBcImJnLWdyYXktNTAwXCJ9YH1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3ZhbHVlfSVgIH19XG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQge1xuICBjb2xsZWN0aW9uLFxuICBkb2MsXG4gIGdldERvYyxcbiAgZ2V0RG9jcyxcbiAgbGltaXQsXG4gIG9yZGVyQnksXG4gIHF1ZXJ5LFxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCJcbmltcG9ydCBzbHVnaWZ5IGZyb20gXCJ+L2xpYi9zbHVnaWZ5XCJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4vZmlyZWJhc2VcIlxuXG5leHBvcnQgaW50ZXJmYWNlIElSZWNpcGUge1xuICBpZDogc3RyaW5nXG4gIHNsdWc6IHN0cmluZ1xuICAvLyBUT0RPOiBwdWJsaXNoZWQ6IGJvb2xlYW4sXG4gIGNyZWF0ZWQ6IG51bWJlclxuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIGluZ3JlZGllbnRzOiBzdHJpbmdcbiAgc3RlcHM6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc291cmNlPzogc3RyaW5nXG4gIGltYWdlOiBzdHJpbmdcbiAgdGFnczogc3RyaW5nW11cbiAgdGltZTogbnVtYmVyXG4gIHR5cGU6IG51bWJlclxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjaXBlcyh0YWtlID0gMTApIHtcbiAgY29uc3QgcSA9IHF1ZXJ5KFxuICAgIGNvbGxlY3Rpb24oZGIsIFwicmVjaXBlc1wiKSxcbiAgICAvLyBUT0RPOiB3aGVyZShcInB1Ymxpc2hlZFwiLCBcIj09XCIgLCB0cnVlKVxuICAgIGxpbWl0KHRha2UpLFxuICAgIG9yZGVyQnkoXCJjcmVhdGVkXCIsIFwiZGVzY1wiKVxuICApXG5cbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpXG4gIGNvbnN0IHJlY2lwZXMgPSBzbmFwc2hvdC5kb2NzLm1hcCgoZG9jKSA9PiB7XG4gICAgLy8gVE9ETzogcmVwbGFjZSBpZCB3aXRoIHNsdWdcbiAgICBjb25zdCBkYlJlY2lwZSA9IGRvYy5kYXRhKClcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgIHNsdWc6IHNsdWdpZnkoZGJSZWNpcGUubmFtZSksXG4gICAgICAuLi5kYlJlY2lwZSxcbiAgICB9IGFzIElSZWNpcGVcbiAgfSlcblxuICByZXR1cm4gcmVjaXBlc1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjaXBlKGlkOiBzdHJpbmcsIHJlbmRlcmVkID0gdHJ1ZSkge1xuICBjb25zdCByZWYgPSBkb2MoZGIsIFwicmVjaXBlc1wiLCBpZClcbiAgY29uc3Qgc25hcCA9IGF3YWl0IGdldERvYyhyZWYpXG5cbiAgaWYgKCFzbmFwLmV4aXN0cygpKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGRiUmVjaXBlID0gc25hcC5kYXRhKClcbiAgXG4gIGNvbnN0IHJlY2lwZSA9IHtcbiAgICBpZDogc25hcC5pZCxcbiAgICAuLi5kYlJlY2lwZSxcbiAgfSBhcyBJUmVjaXBlXG5cbiAgcmV0dXJuIHJlY2lwZVxufVxuIiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBnZXRSZWNpcGVzLCBJUmVjaXBlIH0gZnJvbSBcIn4vZmlyZWJhc2UvcmVjaXBlLXNlcnZpY2VcIlxuaW1wb3J0IFJlY2lwZUNhcmQgZnJvbSBcIn4vY29tcG9uZW50cy9yZWNpcGUtY2FyZFwiXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0UmVjaXBlcygxMilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlcygpIHtcbiAgY29uc3QgcmVjaXBlcyA9IHVzZUxvYWRlckRhdGE8SVJlY2lwZVtdPigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgc206cHgtMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnYXAtNCBncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IHhsOmdyaWQtY29scy01XCI+XG4gICAgICAgIHtyZWNpcGVzLm1hcChyZWNpcGUgPT4gKFxuICAgICAgICAgIDxSZWNpcGVDYXJkIGtleT17cmVjaXBlLmlkfSByZWNpcGU9e3JlY2lwZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iLCAiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgSVJlY2lwZSB9IGZyb20gXCJ+L2ZpcmViYXNlL3JlY2lwZS1zZXJ2aWNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZUNhcmQoeyByZWNpcGUgfTogeyByZWNpcGU6IElSZWNpcGUgfSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rXG4gICAgICB0bz17cmVjaXBlLmlkfVxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIGhvdmVyOnNoYWRvdy1sZ1wiXG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02NCBvYmplY3QtY292ZXJcIlxuICAgICAgICBzcmM9e3JlY2lwZS5pbWFnZX1cbiAgICAgICAgYWx0PXtyZWNpcGUubmFtZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTAgbGVmdC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB0by10cmFuc3BhcmVudFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0yIGJvdHRvbS0yIGxlZnQtMiB6LTEwIHRleHQtd2hpdGUgdXBwZXJjYXNlIHRleHQtY2VudGVyIHRleHQtYmFzZVwiPlxuICAgICAgICB7cmVjaXBlLm5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gIClcbn0iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCJ+L2ZpcmViYXNlL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBsZXQgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9ICh7IHJlcXVlc3QgfSkgPT4gbG9nb3V0KHJlcXVlc3QpXG5cbmV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL1wiKSIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IExpbmssIE91dGxldCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBnZXRSZWNpcGVzLCBJUmVjaXBlIH0gZnJvbSBcIn4vZmlyZWJhc2UvcmVjaXBlLXNlcnZpY2VcIlxuaW1wb3J0IHsgcmVxdWlyZVVzZXJJZCB9IGZyb20gXCJ+L2ZpcmViYXNlL3Nlc3Npb24uc2VydmVyXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgcmVxdWlyZVVzZXJJZChyZXF1ZXN0KVxuICBcbiAgLy8gVE9ETzogbG9hZCBtb3JlIHRoYW4gMjAgcmVjaXBlcy4uLlxuICByZXR1cm4gZ2V0UmVjaXBlcyg1MClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRtaW4oKSB7XG4gIGNvbnN0IHJlY2lwZXMgPSB1c2VMb2FkZXJEYXRhPElSZWNpcGVbXT4oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGdhcC00XCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJvcmRlci1yIGJvcmRlci1ncmF5LTYwMCBwci00XCI+XG4gICAgICAgIDxoMT5BZG1pbjwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cmVjaXBlcy5tYXAocmVjaXBlID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3JlY2lwZS5zbHVnfT5cbiAgICAgICAgICAgICAgPExpbmsgdG89e2AvYWRtaW4vJHtyZWNpcGUuaWR9YH0+XG4gICAgICAgICAgICAgICAge3JlY2lwZS5uYW1lfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSIsICJpbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IEZvcm0sIHVzZUxvYWRlckRhdGEsIHVzZVRyYW5zaXRpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIlxuaW1wb3J0IElucHV0IGZyb20gXCJ+L2NvbXBvbmVudHMvdWkvaW5wdXRcIlxuaW1wb3J0IHsgZ2V0UmVjaXBlLCBJUmVjaXBlIH0gZnJvbSBcIn4vZmlyZWJhc2UvcmVjaXBlLXNlcnZpY2VcIlxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGludmFyaWFudChwYXJhbXMuc2x1ZywgXCJleHBlY3RlZCBwYXJhbXMuc2x1Z1wiKVxuXG4gIGNvbnN0IHJlY2lwZSA9IGF3YWl0IGdldFJlY2lwZShwYXJhbXMuc2x1ZywgZmFsc2UpXG4gIGlmICghcmVjaXBlKSB7XG4gICAgdGhyb3cgbmV3IFJlc3BvbnNlKGBObyByZWNpcGUgZm91bmQgd2l0aCBpZCA9ICR7cGFyYW1zLnNsdWd9YCwgeyBzdGF0dXM6IDQwNCB9KVxuICB9XG5cbiAgcmV0dXJuIHJlY2lwZVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KCkge1xuICBjb25zdCByZWNpcGUgPSB1c2VMb2FkZXJEYXRhPElSZWNpcGU+KClcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxoMT5FZGl0OiB7cmVjaXBlLm5hbWV9PC9oMT5cblxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgPElucHV0IG5hbWU9XCJuYW1lXCIgbGFiZWw9XCJOYW1lXCIgdmFsdWU9e3JlY2lwZS5uYW1lfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cImltYWdlXCIgbGFiZWw9XCJJbWFnZVwiIHZhbHVlPXtyZWNpcGUuaW1hZ2V9IC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwic291cmNlXCIgbGFiZWw9XCJTb3VyY2VcIiB2YWx1ZT17cmVjaXBlLnNvdXJjZX0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJ0aW1lXCIgbGFiZWw9XCJ0aW1lXCIgdmFsdWU9e3JlY2lwZS50aW1lfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInR5cGVcIiBsYWJlbD1cInR5cGVcIiB2YWx1ZT17cmVjaXBlLnR5cGV9IC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwidGFnc1wiIGxhYmVsPVwidGFnc1wiIHZhbHVlPXtyZWNpcGUudGFnc30gLz5cblxuXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9XCJpbmdyZWRpZW50c1wiPlxuICAgICAgICAgIEluZ3JlZGllbnRzXG4gICAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cImlucHV0IGgtMjBcIiBpZD1cImluZ3JlZGllbnRzXCIgcm93cz17MjB9IG5hbWU9XCJpbmdyZWRpZW50c1wiPlxuICAgICAgICAgICAge3JlY2lwZS5pbmdyZWRpZW50c31cbiAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgIHsvKiB7ZXJyb3JzPy5tYXJrZG93biAmJiA8ZGl2Pk1hcmtkb3duIGlzIHJlcXVpcmVkPC9kaXY+fSAqL31cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkxhZ3Jlci4uLlwiIDogXCJMYWdyZVwifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cblxuICAgIDwvZGl2PlxuICApXG59IiwgImludGVyZmFjZSBJbnB1dFByb3BzIGV4dGVuZHMgUmVhY3QuSW5wdXRIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PiB7XG4gIG5hbWU6IHN0cmluZ1xuICBsYWJlbD86IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dCh7IG5hbWUsIGxhYmVsLCAuLi5yZXN0IH06IElucHV0UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xhYmVsID8gPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj17bmFtZX0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvbGFiZWw+IDogbnVsbH1cbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9e25hbWV9IG5hbWU9e25hbWV9IHsuLi5yZXN0fSAvPlxuICAgICAgey8qIHtlcnJvcnM/LnRpdGxlICYmIDxkaXY+VGl0bGUgaXMgcmVxdWlyZWQ8L2Rpdj59ICovfVxuICAgIDwvPlxuICApXG59IiwgImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPHA+XG4gICAgICA8TGluayB0bz1cIm5ld1wiPkNyZWF0ZSBhIG5ldyByZWNpcGU8L0xpbms+XG4gICAgPC9wPlxuICApXG59IiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IEZvcm0sIHVzZUFjdGlvbkRhdGEsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuLy8gaW1wb3J0IHsgY3JlYXRlUmVjaXBlIH0gZnJvbSBcIn4vc2VydmljZXMvcmVjaXBlLXNlcnZpY2VcIjtcblxudHlwZSBQb3N0RXJyb3IgPSB7XG4gIHRpdGxlPzogYm9vbGVhblxuICBzbHVnPzogYm9vbGVhblxuICBtYXJrZG93bj86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgYXdhaXQgbmV3IFByb21pc2UocmVzID0+IHNldFRpbWVvdXQocmVzLCAxMDAwKSlcblxuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKVxuXG4gIGNvbnN0IHRpdGxlID0gZm9ybURhdGEuZ2V0KFwidGl0bGVcIilcbiAgY29uc3Qgc2x1ZyA9IGZvcm1EYXRhLmdldChcInNsdWdcIilcbiAgY29uc3QgbWFya2Rvd24gPSBmb3JtRGF0YS5nZXQoXCJtYXJrZG93blwiKVxuXG4gIGNvbnN0IGVycm9yczogUG9zdEVycm9yID0ge31cbiAgaWYgKCF0aXRsZSkgZXJyb3JzLnRpdGxlID0gdHJ1ZVxuICBpZiAoIXNsdWcpIGVycm9ycy5zbHVnID0gdHJ1ZVxuICBpZiAoIW1hcmtkb3duKSBlcnJvcnMubWFya2Rvd24gPSB0cnVlXG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIilcbiAgaW52YXJpYW50KHR5cGVvZiBzbHVnID09PSBcInN0cmluZ1wiKVxuICBpbnZhcmlhbnQodHlwZW9mIG1hcmtkb3duID09PSBcInN0cmluZ1wiKVxuICAvLyBhd2FpdCBjcmVhdGVSZWNpcGUoeyB0aXRsZSwgc2x1ZywgbWFya2Rvd24gfSlcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvYWRtaW5cIilcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UG9zdCgpIHtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPVwidGl0bGVcIj5cbiAgICAgICAgVGl0bGU6XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIG5hbWU9XCJ0aXRsZVwiIC8+XG4gICAgICAgIHtlcnJvcnM/LnRpdGxlICYmIDxkaXY+VGl0bGUgaXMgcmVxdWlyZWQ8L2Rpdj59XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIj5cbiAgICAgICAgU2x1ZzogPGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwic2x1Z1wiIC8+XG4gICAgICAgIHtlcnJvcnM/LnNsdWcgJiYgPGRpdj5TbHVnIGlzIHJlcXVpcmVkPC9kaXY+fVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cIm1hcmtkb3duXCI+TWFya2Rvd246XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJpbnB1dCBoLTIwXCIgaWQ9XCJtYXJrZG93blwiIHJvd3M9ezIwfSBuYW1lPVwibWFya2Rvd25cIiAvPlxuICAgICAgICB7ZXJyb3JzPy5tYXJrZG93biAmJiA8ZGl2Pk1hcmtkb3duIGlzIHJlcXVpcmVkPC9kaXY+fVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkxhZ3Jlci4uLlwiIDogXCJMYWdyZVwifVxuICAgICAgPC9idXR0b24+XG4gICAgPC9Gb3JtPlxuICApXG59IiwgImltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbi8vIHR5cGUgSW5kZXhEYXRhID0ge1xuLy8gICByZXNvdXJjZXM6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB1cmw6IHN0cmluZyB9Pjtcbi8vICAgZGVtb3M6IEFycmF5PHsgbmFtZTogc3RyaW5nOyB0bzogc3RyaW5nIH0+O1xuLy8gfTtcblxuLy8gLy8gTG9hZGVycyBwcm92aWRlIGRhdGEgdG8gY29tcG9uZW50cyBhbmQgYXJlIG9ubHkgZXZlciBjYWxsZWQgb24gdGhlIHNlcnZlciwgc29cbi8vIC8vIHlvdSBjYW4gY29ubmVjdCB0byBhIGRhdGFiYXNlIG9yIHJ1biBhbnkgc2VydmVyIHNpZGUgY29kZSB5b3Ugd2FudCByaWdodCBuZXh0XG4vLyAvLyB0byB0aGUgY29tcG9uZW50IHRoYXQgcmVuZGVycyBpdC5cbi8vIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNsb2FkZXJcbi8vIGV4cG9ydCBsZXQgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHtcbi8vICAgbGV0IGRhdGE6IEluZGV4RGF0YSA9IHtcbi8vICAgICByZXNvdXJjZXM6IFtcbi8vICAgICAgIHtcbi8vICAgICAgICAgbmFtZTogXCJSZW1peCBEb2NzXCIsXG4vLyAgICAgICAgIHVybDogXCJodHRwczovL3JlbWl4LnJ1bi9kb2NzXCJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIG5hbWU6IFwiUmVhY3QgUm91dGVyIERvY3NcIixcbi8vICAgICAgICAgdXJsOiBcImh0dHBzOi8vcmVhY3Ryb3V0ZXIuY29tL2RvY3NcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgbmFtZTogXCJSZW1peCBEaXNjb3JkXCIsXG4vLyAgICAgICAgIHVybDogXCJodHRwczovL2Rpc2NvcmQuZ2cvVkJlUHM2ZFwiXG4vLyAgICAgICB9XG4vLyAgICAgXSxcbi8vICAgICBkZW1vczogW1xuLy8gICAgICAge1xuLy8gICAgICAgICB0bzogXCJkZW1vcy9hY3Rpb25zXCIsXG4vLyAgICAgICAgIG5hbWU6IFwiQWN0aW9uc1wiXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICB0bzogXCJkZW1vcy9hYm91dFwiLFxuLy8gICAgICAgICBuYW1lOiBcIk5lc3RlZCBSb3V0ZXMsIENTUyBsb2FkaW5nL3VubG9hZGluZ1wiXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICB0bzogXCJkZW1vcy9wYXJhbXNcIixcbi8vICAgICAgICAgbmFtZTogXCJVUkwgUGFyYW1zIGFuZCBFcnJvciBCb3VuZGFyaWVzXCJcbi8vICAgICAgIH1cbi8vICAgICBdXG4vLyAgIH07XG5cbi8vICAgLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL3JlbWl4I2pzb25cbi8vICAgcmV0dXJuIGpzb24oZGF0YSk7XG4vLyB9O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbWV0YVxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiUmVtaXggU3RhcnRlclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldlbGNvbWUgdG8gcmVtaXghXCJcbiAgfTtcbn07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2d1aWRlcy9yb3V0aW5nI2luZGV4LXJvdXRlc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxoMT5BIHRpdGxlPC9oMT5cbiAgICAgICAgPHA+SGVsbHV1dXU8L3A+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBGb3JtLCB1c2VTZWFyY2hQYXJhbXMsIHVzZVRyYW5zaXRpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwifi9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiwgbG9naW4gfSBmcm9tIFwifi9maXJlYmFzZS9zZXNzaW9uLnNlcnZlclwiO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgdXNlcm5hbWUgIT09IFwic3RyaW5nXCIgfHwgdXNlcm5hbWUubGVuZ3RoIDwgMykge1xuICAgIHJldHVybiBgVXNlcm5hbWVzIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGBQYXNzd29yZHMgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIHVzZXJuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KTogUHJvbWlzZTxSZXNwb25zZSB8IEFjdGlvbkRhdGE+ID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBmb3JtLmdldChcInJlZGlyZWN0VG9cIikgfHwgXCIvXCI7XG4gIFxuICBpZiAoXG4gICAgdHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIHJlZGlyZWN0VG8gIT09IFwic3RyaW5nXCJcbiAgKSB7XG4gICAgcmV0dXJuIHsgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gIH07XG4gIH1cblxuICBjb25zdCBmaWVsZHMgPSB7IHVzZXJuYW1lLCBwYXNzd29yZCB9O1xuICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICB1c2VybmFtZTogdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSksXG4gICAgcGFzc3dvcmQ6IHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpXG4gIH07XG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKVxuICAgIHJldHVybiB7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZHMsXG4gICAgICBmb3JtRXJyb3I6IGBVc2VybmFtZS9QYXNzd29yZCBjb21iaW5hdGlvbiBpcyBpbmNvcnJlY3RgXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLnVpZCwgcmVkaXJlY3RUbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8aDE+TG9nZyBpbm48L2gxPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgPElucHV0IG5hbWU9XCJyZWRpcmVjdFRvXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwicmVkaXJlY3RUb1wiKSA/PyB1bmRlZmluZWR9IC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwidXNlcm5hbWVcIiBsYWJlbD1cIkJydWtlcm5hdm5cIiB0eXBlPVwiZW1haWxcIiAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJQYXNzb3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkxvZ2dlciBpbm4uLi5cIiA6IFwiTG9nZyBpbm5cIn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFP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
