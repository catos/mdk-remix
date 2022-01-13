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

// app/components/recipe/markdown.tsx
init_react();
var import_react = __toModule(require("react"));
var import_markdown_to_jsx = __toModule(require("markdown-to-jsx"));

// app/utils/slugify.ts
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
  }, recipe.name)))), /* @__PURE__ */ React.createElement("div", {
    className: "container mx-auto flex flex-wrap justify-center gap-4 p-4 bg-white"
  }, /* @__PURE__ */ React.createElement("button", {
    "aria-label": "legg til som favoritt",
    className: "button flex flex-row items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-2 hidden lg:block"
  }, "+ Favoritt")), /* @__PURE__ */ React.createElement("button", {
    "aria-label": "legg til meny",
    className: "button flex flex-row items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-2 hidden lg:block"
  }, "+ Meny")), /* @__PURE__ */ React.createElement("button", {
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
  }, recipe.ingredients && /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-1/2 xl:w-5/12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-2 text-lg uppercase bg-gray-100 text-gray-600"
  }, "Ingredienser"), /* @__PURE__ */ React.createElement(RecipeMarkdown, {
    markdown: recipe.ingredients
  })), recipe.steps && /* @__PURE__ */ React.createElement("div", {
    className: "sm:w-1/2 xl:w-7/12"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "p-2 text-lg uppercase bg-gray-100 text-gray-600"
  }, "Fremgangsm\xE5te"), /* @__PURE__ */ React.createElement(RecipeMarkdown, {
    markdown: recipe.steps
  }))));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3Jvb3QudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2xheW91dC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9sb2dvLnRzeCIsICIuLi8uLi9hcHAvY29tcG9uZW50cy9oZWFkZXIudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL2RvY3VtZW50LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL3JlY2lwZXMvJHNsdWcudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL3JlY2lwZS9tYXJrZG93bi50c3giLCAiLi4vLi4vYXBwL3V0aWxzL3NsdWdpZnkudHMiLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvcmVjaXBlL3RpbWVyLnRzeCIsICIuLi8uLi9wcmlzbWEvZGIuc2VydmVyLnRzIiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvcmVjaXBlcy9pbmRleC50c3giLCAiLi4vLi4vYXBwL2NvbXBvbmVudHMvcmVjaXBlLWNhcmQudHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvY2FudmFzLnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2xvZ291dC50c3giLCAiLi4vLi4vcHJpc21hL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4udHN4IiwgInJvdXRlLW1vZHVsZTovaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vJHNsdWcudHN4IiwgIi4uLy4uL2FwcC9jb21wb25lbnRzL3VpL2lucHV0LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluL25ldy50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9sb2dpbi50c3giXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vcmVhY3QgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHJlYWN0ID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9yZWFjdCcpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdGb3JtJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkZvcm07IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpdmVSZWxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGl2ZVJlbG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ01ldGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTWV0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ05hdkxpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTmF2TGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ091dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5PdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdQcmVmZXRjaFBhZ2VMaW5rcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5QcmVmZXRjaFBhZ2VMaW5rczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4QnJvd3NlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peEJyb3dzZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peFNlcnZlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5SZW1peFNlcnZlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1NjcmlwdHMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2NyaXB0czsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1Njcm9sbFJlc3RvcmF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcm9sbFJlc3RvcmF0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQWN0aW9uRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VBY3Rpb25EYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQmVmb3JlVW5sb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUJlZm9yZVVubG9hZDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUNhdGNoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUNhdGNoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRmV0Y2hlcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcnM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGb3JtQWN0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZvcm1BY3Rpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VIcmVmJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUhyZWY7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2FkZXJEYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvYWRlckRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VMb2NhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2NhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU1hdGNoZXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTWF0Y2hlczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGlvblR5cGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGlvblR5cGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Q29udGV4dCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXRDb250ZXh0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJlc29sdmVkUGF0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VSZXNvbHZlZFBhdGg7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTZWFyY2hQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU2VhcmNoUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU3VibWl0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVN1Ym1pdDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVRyYW5zaXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlVHJhbnNpdGlvbjsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBzZXJ2ZXJSdW50aW1lID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc1Nlc3Npb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc1Nlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdqc29uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuanNvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JlZGlyZWN0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUucmVkaXJlY3Q7IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9ub2RlIHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBub2RlID0gcmVxdWlyZSgnQHJlbWl4LXJ1bi9ub2RlJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUZpbGVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhOyB9XG59KTtcbiIsICIvKipcbiAqIHJlbWl4IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBjbGllbnQgPSByZXF1aXJlKCcuL2NsaWVudCcpO1xudmFyIHNlcnZlciA9IHJlcXVpcmUoJy4vc2VydmVyJyk7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKCcuL3BsYXRmb3JtJyk7XG5cblxuXG5PYmplY3Qua2V5cyhjbGllbnQpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY2xpZW50W2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhzZXJ2ZXIpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyW2tdOyB9XG5cdH0pO1xufSk7XG5PYmplY3Qua2V5cyhwbGF0Zm9ybSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwbGF0Zm9ybVtrXTsgfVxuXHR9KTtcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm9vdC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL3JlY2lwZXMvJHNsdWcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTIgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9yZWNpcGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvY2FudmFzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4udHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIi9ob21lL2NhdG8vY29kZS9tZGstcmVtaXgvYXBwL3JvdXRlcy9hZG1pbi8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNyBmcm9tIFwiL2hvbWUvY2F0by9jb2RlL21kay1yZW1peC9hcHAvcm91dGVzL2FkbWluL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvYWRtaW4vbmV3LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvaG9tZS9jYXRvL2NvZGUvbWRrLXJlbWl4L2FwcC9yb3V0ZXMvbG9naW4udHN4XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzc2V0cyB9IGZyb20gXCIuL2Fzc2V0cy5qc29uXCI7XG5leHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXMgPSB7XG4gIFwicm9vdFwiOiB7XG4gICAgaWQ6IFwicm9vdFwiLFxuICAgIHBhcmVudElkOiB1bmRlZmluZWQsXG4gICAgcGF0aDogXCJcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMFxuICB9LFxuICBcInJvdXRlcy9yZWNpcGVzLyRzbHVnXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvcmVjaXBlcy8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcIi9vcHBza3JpZnRlci86c2x1Z1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL3JlY2lwZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9yZWNpcGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiL29wcHNrcmlmdGVyXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTJcbiAgfSxcbiAgXCJyb3V0ZXMvY2FudmFzXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY2FudmFzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY2FudmFzXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvbG9nb3V0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwibG9nb3V0XCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfSxcbiAgXCJyb3V0ZXMvYWRtaW5cIjoge1xuICAgIGlkOiBcInJvdXRlcy9hZG1pblwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImFkbWluXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTVcbiAgfSxcbiAgXCJyb3V0ZXMvYWRtaW4vJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hZG1pbi8kc2x1Z1wiLFxuICAgIHBhcmVudElkOiBcInJvdXRlcy9hZG1pblwiLFxuICAgIHBhdGg6IFwiOnNsdWdcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNlxuICB9LFxuICBcInJvdXRlcy9hZG1pbi9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2FkbWluL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm91dGVzL2FkbWluXCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlN1xuICB9LFxuICBcInJvdXRlcy9hZG1pbi9uZXdcIjoge1xuICAgIGlkOiBcInJvdXRlcy9hZG1pbi9uZXdcIixcbiAgICBwYXJlbnRJZDogXCJyb3V0ZXMvYWRtaW5cIixcbiAgICBwYXRoOiBcIm5ld1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU4XG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlOVxuICB9LFxuICBcInJvdXRlcy9sb2dpblwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2xvZ2luXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiL2xvZ2ctaW5uXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTEwXG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzXG4gIH0pO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IE91dGxldCwgdXNlQ2F0Y2gsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvc3R5bGVzLmNzc1wiXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgRG9jdW1lbnQgZnJvbSBcIi4vY29tcG9uZW50cy9kb2N1bWVudFwiXG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9hcHAjbGlua3NcbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIC8vIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyKHJlcXVlc3QpXG4gIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCNqc29uXG4gIHJldHVybiBudWxsXG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjZGVmYXVsdC1leHBvcnRcbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNyb3V0ZS1maWxlbmFtZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZUxvYWRlckRhdGEoKVxuICBcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJNREtcIj5cbiAgICAgIDxMYXlvdXQgdXNlcj17dXNlcn0+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2Vycm9yYm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG4gICAgICAgICAgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSGV5LCBkZXZlbG9wZXIsIHlvdSBzaG91bGQgcmVwbGFjZSB0aGlzIHdpdGggd2hhdCB5b3Ugd2FudCB5b3VyXG4gICAgICAgICAgICB1c2VycyB0byBzZWUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2NhdGNoYm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuXG4gIGxldCBtZXNzYWdlO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwMTpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIE9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IHlvdSBkbyBub3QgaGF2ZSBhY2Nlc3NcbiAgICAgICAgICB0by5cbiAgICAgICAgPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDA0OlxuICAgICAgbWVzc2FnZSA9IChcbiAgICAgICAgPHA+T29wcyEgTG9va3MgbGlrZSB5b3UgdHJpZWQgdG8gdmlzaXQgYSBwYWdlIHRoYXQgZG9lcyBub3QgZXhpc3QuPC9wPlxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihjYXVnaHQuZGF0YSB8fCBjYXVnaHQuc3RhdHVzVGV4dCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudCB0aXRsZT17YCR7Y2F1Z2h0LnN0YXR1c30gJHtjYXVnaHQuc3RhdHVzVGV4dH1gfT5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICB7Y2F1Z2h0LnN0YXR1c306IHtjYXVnaHQuc3RhdHVzVGV4dH1cbiAgICAgICAgPC9oMT5cbiAgICAgICAge21lc3NhZ2V9XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG4iLCAiaW1wb3J0IHsgVXNlciB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdXNlcj86IFVzZXIgfCBudWxsXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgdXNlciwgY2hpbGRyZW4gfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTE2IG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPEhlYWRlciB1c2VyPXt1c2VyfS8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS00XCI+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9sb2dvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgaXRlbXMtY2VudGVyIHB5LTggYmctZ3JheS0xMDBcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIElsbG8gbWFpb3Jlc1xuICAgICAgICAgIGl1cmUgaW4gdml0YWUgaXVzdG8gZnVnYSByYXRpb25lP1xuICAgICAgICA8L3A+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZ2FwLThcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgT20gb3NzXG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgSGplbHBcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayB0bz1cIi9cIj5cbiAgICAgICAgICBWaWxrXHUwMEU1clxuICAgICAgICA8L0xpbms+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAge1wiQ29weXJpZ2h0IFx1MDBBOSBcIn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+Y2E3by5jb208L3NwYW4+IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9XG4gICAgICAgIHtcIi5cIn1cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvZm9vdGVyPlxuICApXG59XG4iLCAiY29uc3QgcHJpbWFyeSA9IFwiI0YzNkEzRVwiXG5jb25zdCBzZWNvbmRhcnkgPSBcIiNGRkIzMEJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmcgdmlld0JveD1cIjAgMCA4MSA4MVwiIHZlcnNpb249XCIxLjFcIiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdy04IGgtOFwiPlxuICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDAuNDQ5OTc3LC0wLjQ0OTk3NywwLjQ0OTk3NywwLjQ0OTk3NywtMjEyOC4zOSwxOTI1LjkpXCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDM5NDAsLTExMjAuNTYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNTIwLDEzOTAuNTdMNTYwLDEzOTAuNTdMNTYwLDE0MDAuNTdMNTMwLDE0MDAuNTdMNTMwLDE0MjAuNTdMNTYwLDE0MjAuNTdMNTYwLDE0MzAuNTdMNTIwLDE0MzAuNTdMNTIwLDEzOTAuNTdaXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IHByaW1hcnkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDM5MzAsLTExMjAuNTYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNjIwLDEzOTAuNTdMNjIwLDE0MzAuNTdMNjEwLDE0MzAuNTdMNjEwLDE0MDAuNTdMNTkwLDE0MDAuNTdMNTkwLDE0MzAuNTdMNTgwLDE0MzAuNTdMNTgwLDEzOTAuNTdMNjIwLDEzOTAuNTdaXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IHByaW1hcnkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDM5NDAsLTExMjAuNTYpXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNNTIwLDE0NDAuNTdMNTYwLDE0NDAuNTdMNTYwLDE0ODAuNTdMNTUwLDE0ODAuNTdMNTUwLDE0NTAuNTdMNTIwLDE0NTAuNTdMNTIwLDE0NDAuNTdaXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IHNlY29uZGFyeSB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsMzkzMCwtMTEyMC41NilcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZD1cIk01OTAsMTQ3MC41N0w2MTAsMTQ3MC41N0w2MTAsMTQ1MC41N0w1OTAsMTQ1MC41N0w1OTAsMTQ3MC41N1pNNTgwLDE0NDAuNTdMNjIwLDE0NDAuNTdMNjIwLDE0ODAuNTdMNTgwLDE0ODAuNTdMNTgwLDE0NDAuNTdaXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZpbGw6IHByaW1hcnkgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBVc2VyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL2xvZ29cIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgdXNlcj86IFVzZXIgfCBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHVzZXIgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZpeGVkIHotNTAgdy1mdWxsIHRvcC0wIGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gaC0xNiBiZy1ncmF5LTEwMFwiPlxuICAgICAgPG5hdiBhcmlhLWxhYmVsPVwiTWFpbiBuYXZpZ2F0aW9uXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleFwiPlxuICAgICAgICA8TGluayB0bz1cIi9cIiB0aXRsZT1cIlJlbWl4XCIgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvb3Bwc2tyaWZ0ZXJcIj5PcHBza3JpZnRlcjwvTGluaz5cbiAgICAgICAgICB7dXNlciA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89XCIvYWRtaW5cIj5BZG1pbjwvTGluaz5cbiAgICAgICAgICAgICAgICA8c3Bhbj57dXNlci5kaXNwbGF5TmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiL2xvZ291dFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IDxMaW5rIHRvPVwiL2xvZ2ctaW5uXCI+TG9nZyBpbm48L0xpbms+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApXG59IiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbn0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHRpdGxlPzogc3RyaW5nO1xufSkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAge3RpdGxlID8gPHRpdGxlPnt0aXRsZX08L3RpdGxlPiA6IG51bGx9XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPVwiYmctZ3JheS00MDBcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgIi8vIGltcG9ydCBNYXJrZG93biBmcm9tIFwibWFya2Rvd24tdG8tanN4XCJcbmltcG9ydCB7IExpbmssIExvYWRlckZ1bmN0aW9uLCB1c2VDYXRjaCwgdXNlTG9hZGVyRGF0YSwgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCJcbmltcG9ydCBSZWNpcGVNYXJrZG93biBmcm9tIFwifi9jb21wb25lbnRzL3JlY2lwZS9tYXJrZG93blwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi8uLi9wcmlzbWEvZGIuc2VydmVyXCJcbmltcG9ydCB7IFJlY2lwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgaW52YXJpYW50KHBhcmFtcy5zbHVnLCBcImV4cGVjdGVkIHBhcmFtcy5zbHVnXCIpXG4gIC8vIGNvbnN0IHJlY2lwZSA9IGF3YWl0IGdldFJlY2lwZShwYXJhbXMuc2x1ZylcbiAgLy8gaWYgKCFyZWNpcGUpIHtcbiAgLy8gICB0aHJvdyBuZXcgUmVzcG9uc2UoYE5vIHJlY2lwZSBmb3VuZCB3aXRoIGlkID0gJHtwYXJhbXMuc2x1Z31gLCB7IHN0YXR1czogNDA0IH0pXG4gIC8vIH1cblxuICAvLyByZXR1cm4gcmVjaXBlXG4gIHJldHVybiBhd2FpdCBkYi5yZWNpcGUuZmluZFVuaXF1ZSh7IHdoZXJlOiB7IGlkOiBwYXJzZUludChwYXJhbXMuc2x1ZykgfSB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGUoKSB7XG4gIGNvbnN0IHJlY2lwZSA9IHVzZUxvYWRlckRhdGE8UmVjaXBlPigpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHgtNCBzbTpweC0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBmbGV4LWNvbCBiZy13aGl0ZSBnYXAtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC12aDMzXCI+XG4gICAgICAgICAgICB7LyogVE9ETzogb25seSBzaG93IGZvciBhZG1pbnMgKi99XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICB0bz17YC9hZG1pbi9yZWNpcGVzLyR7cmVjaXBlLmlkfWB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC00IHJpZ2h0LTQgei0xMCBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHRleHQtd2hpdGUgdy0xMCBoLTEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHsvKiA8UGVuY2lsQWx0SWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gICAgICAgICAgICAgIEVkaXRcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIHsvKiA8UmVjaXBlTWV0cmljcyByZWNpcGU9e3JlY2lwZX0gLz4gKi99XG4gICAgICAgICAgICB7cmVjaXBlLmltYWdlICYmIChcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIG9iamVjdC1jb3ZlciBoLXZoMzMgdy1mdWxsXCJcbiAgICAgICAgICAgICAgICBzcmM9e3JlY2lwZS5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e3JlY2lwZS5uYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBhYnNvbHV0ZSBib3R0b20tMCB0ZXh0LWNlbnRlciB3LWZ1bGwgYmctYmxhY2sgYmctb3BhY2l0eS01MCBweS00XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VyaWZcIj57cmVjaXBlLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIGdhcC00IHAtNCBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJsZWdnIHRpbCBzb20gZmF2b3JpdHRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPEJvb2ttYXJrSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+KyBGYXZvcml0dDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxlZ2cgdGlsIG1lbnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPEJvb2tPcGVuSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+KyBNZW55PC9kaXY+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwicHJpbnRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPFByaW50ZXJJY29uIGNsYXNzTmFtZT1cInctNSBoLTVcIiAvPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMiBoaWRkZW4gbGc6YmxvY2tcIj5QcmludDwvZGl2PlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImxhc3QgbmVkXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgey8qIDxTYXZlSWNvbiBjbGFzc05hbWU9XCJ3LTUgaC01XCIgLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTIgaGlkZGVuIGxnOmJsb2NrXCI+TGFncmU8L2Rpdj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIHtyZWNpcGUuc291cmNlID8gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17cmVjaXBlLnNvdXJjZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIGhpZGRlbiBsZzpibG9ja1wiPktpbGRlPC9kaXY+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICB7cmVjaXBlLmRlc2NyaXB0aW9uID8gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2sgY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC0wIGJnLXdoaXRlIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPFJlY2lwZU1hcmtkb3duIG1hcmtkb3duPXtyZWNpcGUuZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICkgOiBudWxsfVxuXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHNtOnB4LTAgYmctd2hpdGUgZmxleCBmbGV4LWNvbCBzbTpmbGV4LXJvdyBnYXAtNFwiPlxuICAgICAgICB7cmVjaXBlLmluZ3JlZGllbnRzICYmIDxkaXYgY2xhc3NOYW1lPVwic206dy0xLzIgeGw6dy01LzEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdGV4dC1sZyB1cHBlcmNhc2UgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgSW5ncmVkaWVuc2VyXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFJlY2lwZU1hcmtkb3duIG1hcmtkb3duPXtyZWNpcGUuaW5ncmVkaWVudHN9IC8+XG4gICAgICAgIDwvZGl2Pn1cblxuICAgICAgICB7cmVjaXBlLnN0ZXBzICYmIDxkaXYgY2xhc3NOYW1lPVwic206dy0xLzIgeGw6dy03LzEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgdGV4dC1sZyB1cHBlcmNhc2UgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgRnJlbWdhbmdzbVx1MDBFNXRlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFJlY2lwZU1hcmtkb3duIG1hcmtkb3duPXtyZWNpcGUuc3RlcHN9IC8+XG4gICAgICAgIDwvZGl2Pn1cbiAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBjb25zdCBjYXVnaHQgPSB1c2VDYXRjaCgpO1xuICBjb25zdCB7IHNsdWcgfSA9IHVzZVBhcmFtcygpO1xuICBzd2l0Y2ggKGNhdWdodC5zdGF0dXMpIHtcbiAgICBjYXNlIDQwNDoge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250YWluZXJcIj5cbiAgICAgICAgICBGYW50IGluZ2VuIG9wcHNrcmlmdCBtZWQgaWQ6IFwie3NsdWd9XCJcbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICBjYXNlIDQwMToge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250YWluZXJcIj5cbiAgICAgICAgICBEdSBoYXIgaWtrZSB0aWxnYW5nIHRpbCBvcHBza3JpZnQgbWVkIGlkOiBcIntzbHVnfVwiXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVa2plbnQgZmVpbDogJHtjYXVnaHQuc3RhdHVzfWApO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUT0RPOiBtYWtlIHBlcnRpZXIgb3IgcmVtb3ZlIHRvIGNhdGNoIGhpZ2hlciB1cCA/ICh0aHJvdyBuZXcgRXJyb3IoXCJ3b29vXCIpIGluIGxvYWRlciB0byB2aWV3KVxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBlcnJvciB9OiB7IGVycm9yOiBFcnJvciB9KSB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gIGNvbnN0IHsgc2x1ZyB9ID0gdXNlUGFyYW1zKCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250YWluZXJcIj5EZXQgc2tqZWRkZSBlbiBmZWlsIG1lZCBsYXN0aW5nIGF2IG9wcHNrcmlmdCBtZWQgaWQ6IFwie3NsdWd9XCIuPC9kaXY+XG4gICk7XG59IiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJtYXJrZG93bi10by1qc3hcIlxuaW1wb3J0IHNsdWdpZnkgZnJvbSBcIn4vdXRpbHMvc2x1Z2lmeVwiXG5pbXBvcnQgVGltZXIgZnJvbSBcIi4vdGltZXJcIlxuXG50eXBlIFByb3BzVHlwZSA9IHtcbiAgbWFya2Rvd246IHN0cmluZ1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWNpcGVNYXJrZG93bih7IG1hcmtkb3duIH06IFByb3BzVHlwZSkge1xuICByZXR1cm4gPE1hcmtkb3duXG4gICAgY2hpbGRyZW49e21hcmtkb3dufVxuICAgIG9wdGlvbnM9e3tcbiAgICAgIG92ZXJyaWRlczoge1xuICAgICAgICBoMToge1xuICAgICAgICAgIGNvbXBvbmVudDogSDFcbiAgICAgICAgfSxcbiAgICAgICAgbGk6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IExpc3RJdGVtXG4gICAgICAgIH0sXG4gICAgICAgIGNvZGU6IHtcbiAgICAgICAgICBjb21wb25lbnQ6IENvZGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH19XG4gIC8+XG59XG5cbnR5cGUgTWFya2Rvd25Db21wb25lbnRUeXBlID0ge1xuICBjaGlsZHJlbjogc3RyaW5nXG59XG5cbmZ1bmN0aW9uIEgxKHsgY2hpbGRyZW4gfTogTWFya2Rvd25Db21wb25lbnRUeXBlKSB7XG4gIHJldHVybiAoXG4gICAgPGgzIGNsYXNzTmFtZT1cInRleHQtc20gdXBwZXJjYXNlIHRleHQtZ3JheS01MDAgcGItMCBwdC00XCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oMz5cbiAgKVxufVxuXG5mdW5jdGlvbiBMaXN0SXRlbSh7IGNoaWxkcmVuIH06IE1hcmtkb3duQ29tcG9uZW50VHlwZSkge1xuICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBpZCA9IHNsdWdpZnkoY2hpbGRyZW5bMF0pXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRDaGVja2VkKCFjaGVja2VkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBpZD17aWR9XG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIG5hbWU9e2lkfVxuICAgICAgICBjbGFzc05hbWU9XCJjaGVja2JveFwiXG4gICAgICAvPlxuICAgICAgPGxhYmVsXG4gICAgICAgIGh0bWxGb3I9e2lkfVxuICAgICAgICBjbGFzc05hbWU9e2BwLTMgdGV4dC1iYXNlIGlubGluZS1ibG9jayBjdXJzb3ItcG9pbnRlciB3aGl0ZXNwYWNlLW5vcm1hbCBmbGV4LWdyb3cgJHtjaGVja2VkID8gXCJ0ZXh0LWdyYXktNTAwXCIgOiBcImluaGVyaXRcIn1gfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2xhYmVsPlxuICAgIDwvbGk+XG4gIClcbn1cblxuZnVuY3Rpb24gQ29kZSh7IGNoaWxkcmVuIH06IE1hcmtkb3duQ29tcG9uZW50VHlwZSkge1xuICBjb25zdCB0aW1lciA9IHBhcnNlSW50KGNoaWxkcmVuLnJlcGxhY2UoXCJ0aW1lcjpcIiwgXCJcIikpXG4gIGNvbnNvbGUubG9nKHRpbWVyKTtcbiAgaWYgKGNoaWxkcmVuLnN0YXJ0c1dpdGgoXCJ0aW1lcjpcIikpIHtcbiAgICByZXR1cm4gPFRpbWVyIHZhbHVlPXt0aW1lcn0gLz5cbiAgfVxuXG4gIHJldHVybiBudWxsXG59IiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsdWdpZnkodGV4dDogc3RyaW5nKSB7XG4gIGNvbnN0IGEgPSBcIlx1MDBFMFx1MDBFMVx1MDBFMlx1MDBFNFx1MDBFNlx1MDBFM1x1MDBFNVx1MDEwMVx1MDEwM1x1MDEwNVx1MDBFN1x1MDEwN1x1MDEwRFx1MDExMVx1MDEwRlx1MDBFOFx1MDBFOVx1MDBFQVx1MDBFQlx1MDExM1x1MDExN1x1MDExOVx1MDExQlx1MDExRlx1MDFGNVx1MUUyN1x1MDBFRVx1MDBFRlx1MDBFRFx1MDEyQlx1MDEyRlx1MDBFQ1x1MDE0Mlx1MUUzRlx1MDBGMVx1MDE0NFx1MDFGOVx1MDE0OFx1MDBGNFx1MDBGNlx1MDBGMlx1MDBGM1x1MDE1M1x1MDBGOFx1MDE0RFx1MDBGNVx1MDE1MVx1MUU1NVx1MDE1NVx1MDE1OVx1MDBERlx1MDE1Qlx1MDE2MVx1MDE1Rlx1MDIxOVx1MDE2NVx1MDIxQlx1MDBGQlx1MDBGQ1x1MDBGOVx1MDBGQVx1MDE2Qlx1MDFEOFx1MDE2Rlx1MDE3MVx1MDE3M1x1MUU4M1x1MUU4RFx1MDBGRlx1MDBGRFx1MDE3RVx1MDE3QVx1MDE3Q1x1MDBCNy9fLDo7XCJcbiAgY29uc3QgYiA9IFwiYWFhYWFhYWFhYWNjY2RkZWVlZWVlZWVnZ2hpaWlpaWlsbW5ubm5vb29vb29vb29wcnJzc3Nzc3R0dXV1dXV1dXV1d3h5eXp6ei0tLS0tLVwiXG4gIGNvbnN0IHAgPSBuZXcgUmVnRXhwKGEuc3BsaXQoXCJcIikuam9pbihcInxcIiksIFwiZ1wiKVxuXG4gIHJldHVybiB0ZXh0XG4gICAgLnRvU3RyaW5nKClcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9cXHMrL2csIFwiLVwiKSAvLyBSZXBsYWNlIHNwYWNlcyB3aXRoIC1cbiAgICAucmVwbGFjZShwLCAoYykgPT4gYi5jaGFyQXQoYS5pbmRleE9mKGMpKSkgLy8gUmVwbGFjZSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICAucmVwbGFjZSgvJi9nLCBcIi1hbmQtXCIpIC8vIFJlcGxhY2UgJiB3aXRoICdhbmQnXG4gICAgLnJlcGxhY2UoL1teXFx3LV0rL2csIFwiXCIpIC8vIFJlbW92ZSBhbGwgbm9uLXdvcmQgY2hhcmFjdGVyc1xuICAgIC5yZXBsYWNlKC8tKy9nLCBcIi1cIikgLy8gUmVwbGFjZSBtdWx0aXBsZSAtIHdpdGggc2luZ2xlIC1cbiAgICAucmVwbGFjZSgvXi0rLywgXCJcIikgLy8gVHJpbSAtIGZyb20gc3RhcnQgb2YgdGV4dFxuICAgIC5yZXBsYWNlKC8tKyQvLCBcIlwiKSAvLyBUcmltIC0gZnJvbSBlbmQgb2YgdGV4dFxufVxuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Mb2JzdGVyQmFuZGl0L3VzZS1jb3VudGRvd24tdGltZXIvYmxvYi9tYXN0ZXIvc3JjL2luZGV4LnRzXG4vLyBodHRwczovL3JlYWN0anNleGFtcGxlLmNvbS9yZWFjdC1ob29rLWV4cG9zaW5nLWEtY291bnRkb3duLXRpbWVyLXdpdGgtb3B0aW9uYWwtZXhwaXJhdGlvbi1hbmQtcmVzZXQtY2FsbGJhY2tzL1xuaW50ZXJmYWNlIElUaW1lclN0YXRlIHtcbiAgcmVtYWluaW5nOiBudW1iZXJcbiAgY2xvY2s6IHN0cmluZ1xuICBpc1J1bm5pbmc6IGJvb2xlYW5cbiAgY2FuU3RhcnQ6IGJvb2xlYW5cbn1cblxudHlwZSBBY3Rpb25UeXBlID1cbiAgfCB7IHR5cGU6IFwic3RhcnRcIiB9XG4gIHwgeyB0eXBlOiBcInN0YXJ0ZWRcIiB9XG4gIHwgeyB0eXBlOiBcInJlc2V0XCI7IGRhdGE6IElUaW1lclN0YXRlIH1cbiAgfCB7IHR5cGU6IFwicGF1c2VcIiB9XG4gIHwgeyB0eXBlOiBcInRpY2tcIiB9XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogSVRpbWVyU3RhdGUgPSB7XG4gIHJlbWFpbmluZzogMCxcbiAgY2xvY2s6IFwiMDA6MDBcIixcbiAgaXNSdW5uaW5nOiBmYWxzZSxcbiAgY2FuU3RhcnQ6IGZhbHNlLFxufVxuXG4vLyBUT0RPOiBmaXggaXNSdW5uaW5nXG5jb25zdCByZWR1Y2VyOiBSZWFjdC5SZWR1Y2VyPElUaW1lclN0YXRlLCBBY3Rpb25UeXBlPiA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwic3RhcnRcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYW5TdGFydDogdHJ1ZSB9XG4gICAgY2FzZSBcInN0YXJ0ZWRcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1J1bm5pbmc6IHRydWUgfVxuICAgIGNhc2UgXCJyZXNldFwiOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYWN0aW9uLmRhdGEsXG4gICAgICAgIGNsb2NrOiBtc1RvQ2xvY2soYWN0aW9uLmRhdGEucmVtYWluaW5nKSxcbiAgICAgIH1cbiAgICBjYXNlIFwicGF1c2VcIjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc1J1bm5pbmc6IGZhbHNlLCBjYW5TdGFydDogZmFsc2UgfVxuICAgIGNhc2UgXCJ0aWNrXCI6XG4gICAgICBjb25zdCBfcmVtYWluaW5nID0gc3RhdGUucmVtYWluaW5nIC0gMTAwMFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHJlbWFpbmluZzogX3JlbWFpbmluZyxcbiAgICAgICAgY2xvY2s6IG1zVG9DbG9jayhfcmVtYWluaW5nKSxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZnVuY3Rpb24gbXNUb0Nsb2NrKG1zOiBudW1iZXIpIHtcbiAgY29uc3QgdG90YWxTZWNvbmRzID0gbXMgLyAxMDAwXG5cbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gNjApXG4gICAgLnRvU3RyaW5nKClcbiAgICAucGFkU3RhcnQoMiwgXCIwXCIpXG4gIGNvbnN0IHNlY29uZHMgPSAodG90YWxTZWNvbmRzICUgNjApLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpXG5cbiAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kc31gXG59XG5cbmNvbnN0IHVzZVRpbWVyID0gKG1pbnV0ZXM6IG51bWJlciwgb25FeHBpcmU/OiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG1zID0gbWludXRlcyAqIDEwMDAgKiA2MFxuICBjb25zdCByZW1haW5pbmdSZWYgPSBSZWFjdC51c2VSZWY8bnVtYmVyPihtcylcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIHtcbiAgICAuLi5pbml0aWFsU3RhdGUsXG4gICAgcmVtYWluaW5nOiBtcyxcbiAgICBjbG9jazogbXNUb0Nsb2NrKG1zKSxcbiAgfSlcbiAgY29uc3QgeyByZW1haW5pbmcsIGNhblN0YXJ0IH0gPSBzdGF0ZVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVtYWluaW5nUmVmLmN1cnJlbnQgPSByZW1haW5pbmdcbiAgfSwgW3JlbWFpbmluZ10pXG5cbiAgY29uc3Qgc3RhcnQgPSAoKSA9PiB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcInN0YXJ0XCIgfSlcbiAgfVxuXG4gIGNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogXCJyZXNldFwiLCBkYXRhOiB7IC4uLmluaXRpYWxTdGF0ZSwgcmVtYWluaW5nOiBtcyB9IH0pXG4gIH1cblxuICBjb25zdCBwYXVzZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwicGF1c2VcIiB9KVxuICB9LCBbXSlcblxuICBjb25zdCBleHBpcmUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKG9uRXhwaXJlICYmIHR5cGVvZiBvbkV4cGlyZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBvbkV4cGlyZSgpXG4gICAgfVxuICAgIHBhdXNlKClcbiAgfSwgW29uRXhwaXJlLCBwYXVzZV0pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiB0aWNrKCkge1xuICAgICAgaWYgKHJlbWFpbmluZ1JlZi5jdXJyZW50IDw9IDApIHtcbiAgICAgICAgZXhwaXJlKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJ0aWNrXCIgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaWQ6IE5vZGVKUy5UaW1lb3V0XG4gICAgaWYgKGNhblN0YXJ0KSB7XG4gICAgICBpZCA9IHNldEludGVydmFsKHRpY2ssIDEwMDApXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwic3RhcnRlZFwiIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpXG4gIH0sIFtjYW5TdGFydCwgZXhwaXJlXSlcblxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHN0YXJ0LFxuICAgIHJlc2V0LFxuICAgIHBhdXNlLFxuICB9XG59XG5cbmludGVyZmFjZSBJVGltZXJQcm9wcyB7XG4gIHZhbHVlOiBudW1iZXJcbn1cblxuLy8gVE9ETzogcmVmYWN0b3Igc3R5bGVzXG4vLyBUT0RPOiBhY2NlcHQgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgbWF5YmUgP1xuY29uc3QgVGltZXI6IFJlYWN0LkZDPElUaW1lclByb3BzPiA9ICh7IHZhbHVlIH0pID0+IHtcbiAgY29uc3QgeyByZW1haW5pbmcsIGNsb2NrLCBpc1J1bm5pbmcsIHN0YXJ0LCByZXNldCwgcGF1c2UgfSA9IHVzZVRpbWVyKHZhbHVlKVxuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IFJlYWN0LnVzZVN0YXRlKDEwKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UHJvZ3Jlc3MoTWF0aC5yb3VuZCgocmVtYWluaW5nIC8gKHZhbHVlICogMTAwMCAqIDYwKSkgKiAxMDApKVxuICB9LCBbcmVtYWluaW5nLCB2YWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTJcIj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IHJlbGF0aXZlIGN1cnNvci1wb2ludGVyIGgtOCByb3VuZGVkXCJcbiAgICAgICAgb25DbGljaz17aXNSdW5uaW5nID8gcGF1c2UgOiBzdGFydH1cbiAgICAgID5cbiAgICAgICAgPExpbmVhclByb2dyZXNzXG4gICAgICAgICAgLy8gY29sb3I9e2lzUnVubmluZyA/IFwic2Vjb25kYXJ5XCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgaXNSdW5uaW5nXG4gICAgICAgICAgLy8gdmFyaWFudD1cImRldGVybWluYXRlXCJcbiAgICAgICAgICB2YWx1ZT17cHJvZ3Jlc3N9XG4gICAgICAgIC8vIHN0eWxlPXt7IGhlaWdodDogXCIycmVtXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCByaWdodC0wIGJvdHRvbS0wIGxlZnQtMCBmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LXhsXCI+XG4gICAgICAgICAge2Nsb2NrfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0yMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZCBweC0yIFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHJlc2V0KCl9XG4gICAgICA+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGNsYXNzTmFtZT1cImgtNCB3LTRcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNNCAyYTEgMSAwIDAxMSAxdjIuMTAxYTcuMDAyIDcuMDAyIDAgMDExMS42MDEgMi41NjYgMSAxIDAgMTEtMS44ODUuNjY2QTUuMDAyIDUuMDAyIDAgMDA1Ljk5OSA3SDlhMSAxIDAgMDEwIDJINGExIDEgMCAwMS0xLTFWM2ExIDEgMCAwMTEtMXptLjAwOCA5LjA1N2ExIDEgMCAwMTEuMjc2LjYxQTUuMDAyIDUuMDAyIDAgMDAxNC4wMDEgMTNIMTFhMSAxIDAgMTEwLTJoNWExIDEgMCAwMTEgMXY1YTEgMSAwIDExLTIgMHYtMi4xMDFhNy4wMDIgNy4wMDIgMCAwMS0xMS42MDEtMi41NjYgMSAxIDAgMDEuNjEtMS4yNzZ6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lclxuXG5pbnRlcmZhY2UgTGluZWFyUHJvZ3Jlc3NQcm9wcyB7XG4gIGlzUnVubmluZzogYm9vbGVhblxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmNvbnN0IExpbmVhclByb2dyZXNzOiBSZWFjdC5GQzxMaW5lYXJQcm9ncmVzc1Byb3BzPiA9ICh7XG4gIGlzUnVubmluZyxcbiAgdmFsdWUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgaC04IHJvdW5kZWQgdy1mdWxsICR7aXNSdW5uaW5nID8gXCJiZy1ncmF5LTIwMFwiIDogXCJiZy1ncmF5LTIwMFwifWB9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BoLWZ1bGwgcm91bmRlZCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXIgJHtpc1J1bm5pbmcgPyBcImJnLWdyYXktNTAwXCIgOiBcImJnLWdyYXktNTAwXCJ9YH1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3ZhbHVlfSVgIH19XG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5sZXQgZGI6IFByaXNtYUNsaWVudFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBfX2RiOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBkYiA9IG5ldyBQcmlzbWFDbGllbnQoKVxuICBkYi4kY29ubmVjdCgpXG59IGVsc2Uge1xuICBpZiAoIWdsb2JhbC5fX2RiKSB7XG4gICAgZ2xvYmFsLl9fZGIgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgICBnbG9iYWwuX19kYi4kY29ubmVjdCgpXG4gIH1cblxuICBkYiA9IGdsb2JhbC5fX2RiXG59XG5cbmV4cG9ydCB7IGRiIH0iLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCBSZWNpcGVDYXJkIGZyb20gXCJ+L2NvbXBvbmVudHMvcmVjaXBlLWNhcmRcIlxuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vLi4vLi4vcHJpc21hL2RiLnNlcnZlclwiXG5pbXBvcnQgeyBSZWNpcGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgLy8gVE9ETzogY29uc3QgZGF0YTogTG9hZGVyRGF0YSwgY2hlY2sgSm9rZXNBcHBcbiAgcmV0dXJuIGF3YWl0IGRiLnJlY2lwZS5maW5kTWFueSgpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY2lwZXMoKSB7XG4gIGNvbnN0IHJlY2lwZXMgPSB1c2VMb2FkZXJEYXRhPFJlY2lwZVtdPigpXG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBzbTpweC0wXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhcC00IGdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgeGw6Z3JpZC1jb2xzLTVcIj5cbiAgICAgICAge3JlY2lwZXMubWFwKHJlY2lwZSA9PiAoXG4gICAgICAgICAgPFJlY2lwZUNhcmQga2V5PXtyZWNpcGUuaWR9IHJlY2lwZT17cmVjaXBlfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbiIsICJpbXBvcnQgeyBSZWNpcGUgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjaXBlQ2FyZCh7IHJlY2lwZSB9OiB7IHJlY2lwZTogUmVjaXBlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8TGlua1xuICAgICAgdG89e3JlY2lwZS5pZC50b1N0cmluZygpfVxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1sZyBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LW1kIGhvdmVyOnNoYWRvdy1sZ1wiXG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC02NCBvYmplY3QtY292ZXJcIlxuICAgICAgICBzcmM9e3JlY2lwZS5pbWFnZX1cbiAgICAgICAgYWx0PXtyZWNpcGUubmFtZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHJpZ2h0LTAgYm90dG9tLTAgbGVmdC0wIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ibGFjayB0by10cmFuc3BhcmVudFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0yIGJvdHRvbS0yIGxlZnQtMiB6LTEwIHRleHQtd2hpdGUgdXBwZXJjYXNlIHRleHQtY2VudGVyIHRleHQtYmFzZVwiPlxuICAgICAgICB7cmVjaXBlLm5hbWV9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xpbms+XG4gIClcbn0iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cblxuY29uc3QgZHJhdyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgZnJhbWVDb3VudDogbnVtYmVyKSA9PiB7XG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpXG4gIGN0eC5maWxsU3R5bGUgPSAnIzAwMDAwMCdcbiAgY3R4LmJlZ2luUGF0aCgpXG4gIGN0eC5hcmMoNTAsIDEwMCwgMjAgKiBNYXRoLnNpbihmcmFtZUNvdW50ICogMC4wNSkgKiogMiwgMCwgMiAqIE1hdGguUEkpXG4gIGN0eC5maWxsKClcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbnZhcygpIHtcblxuICBjb25zdCBjYW52YXNSZWYgPSBSZWFjdC51c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQgfCBudWxsPihudWxsKVxuXG5cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50XG5cbiAgICBpZiAoIWNhbnZhcykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZnJhbWVDb3VudCA9IDBcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZCA9IDBcbiAgICAvL091ciBkcmF3IGNhbWUgaGVyZVxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICAgIGZyYW1lQ291bnQrK1xuICAgICAgZHJhdyhjb250ZXh0LCBmcmFtZUNvdW50KVxuICAgICAgYW5pbWF0aW9uRnJhbWVJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKVxuICAgIH1cbiAgICByZW5kZXIoKVxuXG4gICAgcmV0dXJuICgpID0+IHsgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpIH1cbiAgfSwgW2RyYXddKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5IZWk8L2gxPlxuICAgICAgPGNhbnZhcyBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiY29ybmZsb3dlcmJsdWVcIiB9fSByZWY9e2NhbnZhc1JlZn0+PC9jYW52YXM+XG4gICAgPC9kaXY+XG4gIClcblxufSIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSBcIi4uLy4uL3ByaXNtYS9zZXNzaW9uLnNlcnZlclwiO1xuXG5leHBvcnQgbGV0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSAoeyByZXF1ZXN0IH0pID0+IGxvZ291dChyZXF1ZXN0KVxuXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiByZWRpcmVjdChcIi9cIikiLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCJcblxudHlwZSBMb2dpbkZvcm0gPSB7XG4gIHVzZXJuYW1lOiBzdHJpbmdcbiAgcGFzc3dvcmQ6IHN0cmluZ1xufVxuXG4vLyBUT0RPOiBjcmVhdGUgdXNlciBpbiBmaXJlYmFzZS91c2Vyc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IExvZ2luRm9ybSkge1xuICAvLyBjb25zdCB1c2VyID0gYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIHVzZXJuYW1lLCBwYXNzd29yZClcbiAgLy8gICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHVzZXJDcmVkZW50aWFsLnVzZXIpXG4gIC8vICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcik6IGFueSB7XG4gIC8vICAgICBjb25zdCBlcnJvckNvZGUgPSBlcnJvci5jb2RlXG4gIC8vICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlXG4gIC8vICAgICBpZiAoZXJyb3JDb2RlID09IFwiYXV0aC93ZWFrLXBhc3N3b3JkXCIpIHtcbiAgLy8gICAgICAgcmV0dXJuIFwiVGhlIHBhc3N3b3JkIGlzIHRvbyB3ZWFrLlwiXG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlXG4gIC8vICAgICB9XG4gIC8vICAgfSlcblxuICAvLyByZXR1cm4gdXNlclxuICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQhXCIpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBMb2dpbkZvcm0pIHtcbiAgLy8gY29uc3QgdXNlciA9IGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIHVzZXJuYW1lLCBwYXNzd29yZClcbiAgLy8gICAudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHVzZXJDcmVkZW50aWFsLnVzZXIpXG4gIC8vICAgLmNhdGNoKChlcnIpID0+IHtcbiAgLy8gICAgIGVyci5jb2RlXG4gIC8vICAgICBlcnIubWVzc2FnZVxuICAvLyAgIH0pXG4gIC8vIHJldHVybiB1c2VyXG4gIHJldHVybiBudWxsXG59XG5cbi8vIFRPRE86IHVzZSBlbnYgYWdhaW4hXG4vLyBjb25zdCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVRcbi8vIGlmICghc2Vzc2lvblNlY3JldCkge1xuLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJTRVNTSU9OX1NFQ1JFVCBtdXN0IGJlIHNldFwiKVxuLy8gfVxuXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIlJKX3Nlc3Npb25cIixcbiAgICBzZWN1cmU6IHRydWUsXG4gICAgc2VjcmV0czogW1wid2VlZTEyMzR3ZWVlXCJdLFxuICAgIHNhbWVTaXRlOiBcImxheFwiLFxuICAgIHBhdGg6IFwiL1wiLFxuICAgIG1heEFnZTogNjAgKiA2MCAqIDI0ICogMzAsXG4gICAgaHR0cE9ubHk6IHRydWUsXG4gIH0sXG59KVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKVxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSByZXR1cm4gbnVsbFxuICByZXR1cm4gdXNlcklkXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXF1aXJlVXNlcklkKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZWRpcmVjdFRvOiBzdHJpbmcgPSBuZXcgVVJMKHJlcXVlc3QudXJsKS5wYXRobmFtZVxuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSlcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIilcbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoW1tcInJlZGlyZWN0VG9cIiwgcmVkaXJlY3RUb11dKVxuICAgIHRocm93IHJlZGlyZWN0KGAvbG9nZy1pbm4/JHtzZWFyY2hQYXJhbXN9YClcbiAgfVxuICByZXR1cm4gdXNlcklkXG59XG5cbi8vIFRPRE86IGdldCB1c2VyIGZyb20gZmlyZWJhc2UvdXNlcnMsIG5vdCBhdXRoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcihyZXF1ZXN0OiBSZXF1ZXN0KTogUHJvbWlzZTxhbnkgfCBudWxsPiB7XG4gIC8vIGNvbnN0IHVzZXJJZCA9IGF1dGguY3VycmVudFVzZXI/LmVtYWlsXG4gIC8vIGlmICh0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gIC8vICAgcmV0dXJuIG51bGxcbiAgLy8gfVxuXG4gIC8vIHRyeSB7XG4gIC8vICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXJcbiAgLy8gICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHVzZXIpXG4gIC8vICAgcmV0dXJuIHVzZXJcbiAgLy8gfSBjYXRjaCB7XG4gIC8vICAgdGhyb3cgbG9nb3V0KHJlcXVlc3QpXG4gIC8vIH1cbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIC8vIHNpZ25PdXQoYXV0aClcbiAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKVxuICAvLyByZXR1cm4gcmVkaXJlY3QoXCIvbG9nZy1pbm5cIiwge1xuICAvLyAgIGhlYWRlcnM6IHtcbiAgLy8gICAgIFwiU2V0LUNvb2tpZVwiOiBhd2FpdCBzdG9yYWdlLmRlc3Ryb3lTZXNzaW9uKHNlc3Npb24pLFxuICAvLyAgIH0sXG4gIC8vIH0pXG4gIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXJTZXNzaW9uKFxuICB1c2VySWQ6IHN0cmluZyB8IG51bGwsXG4gIHJlZGlyZWN0VG86IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKVxuICBzZXNzaW9uLnNldChcInVzZXJJZFwiLCB1c2VySWQpXG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KVxufVxuIiwgImltcG9ydCB7IFJlY2lwZSB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiXG5pbXBvcnQgdHlwZSB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IExpbmssIE91dGxldCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9wcmlzbWEvZGIuc2VydmVyXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgLy8gVE9ETyBhd2FpdCByZXF1aXJlVXNlcklkKHJlcXVlc3QpXG4gIHJldHVybiBhd2FpdCBkYi5yZWNpcGUuZmluZE1hbnkoKSAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xuICBjb25zdCByZWNpcGVzID0gdXNlTG9hZGVyRGF0YTxSZWNpcGVbXT4oKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGdhcC00XCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImJvcmRlci1yIGJvcmRlci1ncmF5LTYwMCBwci00XCI+XG4gICAgICAgIDxoMT5BZG1pbjwvaDE+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7cmVjaXBlcy5tYXAocmVjaXBlID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e3JlY2lwZS5pZH0+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPXtgL2FkbWluLyR7cmVjaXBlLmlkfWB9PlxuICAgICAgICAgICAgICAgIHtyZWNpcGUubmFtZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgPE91dGxldCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iLCAiaW1wb3J0IHsgUmVjaXBlIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgRm9ybSwgdXNlTG9hZGVyRGF0YSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiXG5pbXBvcnQgSW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy91aS9pbnB1dFwiXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi8uLi9wcmlzbWEvZGIuc2VydmVyXCJcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIilcblxuICAvLyBjb25zdCByZWNpcGUgPSBhd2FpdCBnZXRSZWNpcGUocGFyYW1zLnNsdWcsIGZhbHNlKVxuICAvLyBpZiAoIXJlY2lwZSkge1xuICAvLyAgIHRocm93IG5ldyBSZXNwb25zZShgTm8gcmVjaXBlIGZvdW5kIHdpdGggaWQgPSAke3BhcmFtcy5zbHVnfWAsIHsgc3RhdHVzOiA0MDQgfSlcbiAgLy8gfVxuICAvLyByZXR1cm4gcmVjaXBlXG5cbiAgcmV0dXJuIGF3YWl0IGRiLnJlY2lwZS5maW5kVW5pcXVlKHsgd2hlcmU6IHsgaWQ6IHBhcnNlSW50KHBhcmFtcy5zbHVnKSB9IH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoKSB7XG4gIGNvbnN0IHJlY2lwZSA9IHVzZUxvYWRlckRhdGE8UmVjaXBlPigpXG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8aDE+RWRpdDoge3JlY2lwZS5uYW1lfTwvaDE+XG5cbiAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwibmFtZVwiIGxhYmVsPVwiTmFtZVwiIHZhbHVlPXtyZWNpcGUubmFtZX0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJpbWFnZVwiIGxhYmVsPVwiSW1hZ2VcIiB2YWx1ZT17cmVjaXBlLmltYWdlfSAvPlxuICAgICAgICB7LyogPElucHV0IG5hbWU9XCJzb3VyY2VcIiBsYWJlbD1cIlNvdXJjZVwiIHZhbHVlPXtyZWNpcGUuc291cmNlfSAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInRpbWVcIiBsYWJlbD1cInRpbWVcIiB2YWx1ZT17cmVjaXBlLnRpbWV9IC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwidHlwZVwiIGxhYmVsPVwidHlwZVwiIHZhbHVlPXtyZWNpcGUudHlwZX0gLz5cbiAgICAgICAgPElucHV0IG5hbWU9XCJ0YWdzXCIgbGFiZWw9XCJ0YWdzXCIgdmFsdWU9e3JlY2lwZS50YWdzfSAvPiAqL31cblxuXG4gICAgICAgIHsvKiA8bGFiZWwgY2xhc3NOYW1lPVwibGFiZWxcIiBodG1sRm9yPVwiaW5ncmVkaWVudHNcIj5cbiAgICAgICAgICBJbmdyZWRpZW50c1xuICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJpbnB1dCBoLTIwXCIgaWQ9XCJpbmdyZWRpZW50c1wiIHJvd3M9ezIwfSBuYW1lPVwiaW5ncmVkaWVudHNcIj5cbiAgICAgICAgICAgIHtyZWNpcGUuaW5ncmVkaWVudHN9XG4gICAgICAgICAgPC90ZXh0YXJlYT4gKi99XG4gICAgICAgICAgey8qIHtlcnJvcnM/Lm1hcmtkb3duICYmIDxkaXY+TWFya2Rvd24gaXMgcmVxdWlyZWQ8L2Rpdj59ICovfVxuICAgICAgICB7LyogPC9sYWJlbD4gKi99XG5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJMYWdyZXIuLi5cIiA6IFwiTGFncmVcIn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG5cbiAgICA8L2Rpdj5cbiAgKVxufSIsICJpbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIFJlYWN0LklucHV0SFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD4ge1xuICBuYW1lOiBzdHJpbmdcbiAgbGFiZWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXQoeyBuYW1lLCBsYWJlbCwgLi4ucmVzdCB9OiBJbnB1dFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsYWJlbCA/IDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9e25hbWV9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L2xhYmVsPiA6IG51bGx9XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPXtuYW1lfSBuYW1lPXtuYW1lfSB7Li4ucmVzdH0gLz5cbiAgICAgIHsvKiB7ZXJyb3JzPy50aXRsZSAmJiA8ZGl2PlRpdGxlIGlzIHJlcXVpcmVkPC9kaXY+fSAqL31cbiAgICA8Lz5cbiAgKVxufSIsICJpbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxwPlxuICAgICAgPExpbmsgdG89XCJuZXdcIj5DcmVhdGUgYSBuZXcgcmVjaXBlPC9MaW5rPlxuICAgIDwvcD5cbiAgKVxufSIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiXG5pbXBvcnQgeyBGb3JtLCB1c2VBY3Rpb25EYXRhLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbi8vIGltcG9ydCB7IGNyZWF0ZVJlY2lwZSB9IGZyb20gXCJ+L3NlcnZpY2VzL3JlY2lwZS1zZXJ2aWNlXCI7XG5cbnR5cGUgUG9zdEVycm9yID0ge1xuICB0aXRsZT86IGJvb2xlYW5cbiAgc2x1Zz86IGJvb2xlYW5cbiAgbWFya2Rvd24/OiBib29sZWFuXG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGF3YWl0IG5ldyBQcm9taXNlKHJlcyA9PiBzZXRUaW1lb3V0KHJlcywgMTAwMCkpXG5cbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKClcblxuICBjb25zdCB0aXRsZSA9IGZvcm1EYXRhLmdldChcInRpdGxlXCIpXG4gIGNvbnN0IHNsdWcgPSBmb3JtRGF0YS5nZXQoXCJzbHVnXCIpXG4gIGNvbnN0IG1hcmtkb3duID0gZm9ybURhdGEuZ2V0KFwibWFya2Rvd25cIilcblxuICBjb25zdCBlcnJvcnM6IFBvc3RFcnJvciA9IHt9XG4gIGlmICghdGl0bGUpIGVycm9ycy50aXRsZSA9IHRydWVcbiAgaWYgKCFzbHVnKSBlcnJvcnMuc2x1ZyA9IHRydWVcbiAgaWYgKCFtYXJrZG93bikgZXJyb3JzLm1hcmtkb3duID0gdHJ1ZVxuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnNcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIpXG4gIGludmFyaWFudCh0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIilcbiAgaW52YXJpYW50KHR5cGVvZiBtYXJrZG93biA9PT0gXCJzdHJpbmdcIilcbiAgLy8gYXdhaXQgY3JlYXRlUmVjaXBlKHsgdGl0bGUsIHNsdWcsIG1hcmtkb3duIH0pXG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2FkbWluXCIpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1Bvc3QoKSB7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKVxuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCIgaHRtbEZvcj1cInRpdGxlXCI+XG4gICAgICAgIFRpdGxlOlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXRcIiB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiAvPlxuICAgICAgICB7ZXJyb3JzPy50aXRsZSAmJiA8ZGl2PlRpdGxlIGlzIHJlcXVpcmVkPC9kaXY+fVxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsXCI+XG4gICAgICAgIFNsdWc6IDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInNsdWdcIiAvPlxuICAgICAgICB7ZXJyb3JzPy5zbHVnICYmIDxkaXY+U2x1ZyBpcyByZXF1aXJlZDwvZGl2Pn1cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbFwiIGh0bWxGb3I9XCJtYXJrZG93blwiPk1hcmtkb3duOlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiaW5wdXQgaC0yMFwiIGlkPVwibWFya2Rvd25cIiByb3dzPXsyMH0gbmFtZT1cIm1hcmtkb3duXCIgLz5cbiAgICAgICAge2Vycm9ycz8ubWFya2Rvd24gJiYgPGRpdj5NYXJrZG93biBpcyByZXF1aXJlZDwvZGl2Pn1cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJMYWdyZXIuLi5cIiA6IFwiTGFncmVcIn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKVxufSIsICJpbXBvcnQgdHlwZSB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG4vLyB0eXBlIEluZGV4RGF0YSA9IHtcbi8vICAgcmVzb3VyY2VzOiBBcnJheTx7IG5hbWU6IHN0cmluZzsgdXJsOiBzdHJpbmcgfT47XG4vLyAgIGRlbW9zOiBBcnJheTx7IG5hbWU6IHN0cmluZzsgdG86IHN0cmluZyB9Pjtcbi8vIH07XG5cbi8vIC8vIExvYWRlcnMgcHJvdmlkZSBkYXRhIHRvIGNvbXBvbmVudHMgYW5kIGFyZSBvbmx5IGV2ZXIgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIsIHNvXG4vLyAvLyB5b3UgY2FuIGNvbm5lY3QgdG8gYSBkYXRhYmFzZSBvciBydW4gYW55IHNlcnZlciBzaWRlIGNvZGUgeW91IHdhbnQgcmlnaHQgbmV4dFxuLy8gLy8gdG8gdGhlIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgaXQuXG4vLyAvLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbG9hZGVyXG4vLyBleHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4vLyAgIGxldCBkYXRhOiBJbmRleERhdGEgPSB7XG4vLyAgICAgcmVzb3VyY2VzOiBbXG4vLyAgICAgICB7XG4vLyAgICAgICAgIG5hbWU6IFwiUmVtaXggRG9jc1wiLFxuLy8gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9yZW1peC5ydW4vZG9jc1wiXG4vLyAgICAgICB9LFxuLy8gICAgICAge1xuLy8gICAgICAgICBuYW1lOiBcIlJlYWN0IFJvdXRlciBEb2NzXCIsXG4vLyAgICAgICAgIHVybDogXCJodHRwczovL3JlYWN0cm91dGVyLmNvbS9kb2NzXCJcbi8vICAgICAgIH0sXG4vLyAgICAgICB7XG4vLyAgICAgICAgIG5hbWU6IFwiUmVtaXggRGlzY29yZFwiLFxuLy8gICAgICAgICB1cmw6IFwiaHR0cHM6Ly9kaXNjb3JkLmdnL1ZCZVBzNmRcIlxuLy8gICAgICAgfVxuLy8gICAgIF0sXG4vLyAgICAgZGVtb3M6IFtcbi8vICAgICAgIHtcbi8vICAgICAgICAgdG86IFwiZGVtb3MvYWN0aW9uc1wiLFxuLy8gICAgICAgICBuYW1lOiBcIkFjdGlvbnNcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgdG86IFwiZGVtb3MvYWJvdXRcIixcbi8vICAgICAgICAgbmFtZTogXCJOZXN0ZWQgUm91dGVzLCBDU1MgbG9hZGluZy91bmxvYWRpbmdcIlxuLy8gICAgICAgfSxcbi8vICAgICAgIHtcbi8vICAgICAgICAgdG86IFwiZGVtb3MvcGFyYW1zXCIsXG4vLyAgICAgICAgIG5hbWU6IFwiVVJMIFBhcmFtcyBhbmQgRXJyb3IgQm91bmRhcmllc1wiXG4vLyAgICAgICB9XG4vLyAgICAgXVxuLy8gICB9O1xuXG4vLyAgIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCNqc29uXG4vLyAgIHJldHVybiBqc29uKGRhdGEpO1xuLy8gfTtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI21ldGFcbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIlJlbWl4IFN0YXJ0ZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJXZWxjb21lIHRvIHJlbWl4IVwiXG4gIH07XG59O1xuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9ndWlkZXMvcm91dGluZyNpbmRleC1yb3V0ZXNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8aDE+QSB0aXRsZTwvaDE+XG4gICAgICAgIDxwPkhlbGx1dXV1PC9wPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHsgRm9ybSwgdXNlU2VhcmNoUGFyYW1zLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIn4vY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlclNlc3Npb24sIGxvZ2luIH0gZnJvbSBcIi4uLy4uL3ByaXNtYS9zZXNzaW9uLnNlcnZlclwiO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgdXNlcm5hbWUgIT09IFwic3RyaW5nXCIgfHwgdXNlcm5hbWUubGVuZ3RoIDwgMykge1xuICAgIHJldHVybiBgVXNlcm5hbWVzIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGBQYXNzd29yZHMgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIHVzZXJuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KTogUHJvbWlzZTxSZXNwb25zZSB8IEFjdGlvbkRhdGE+ID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBmb3JtLmdldChcInJlZGlyZWN0VG9cIikgfHwgXCIvXCI7XG4gIFxuICBpZiAoXG4gICAgdHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIHJlZGlyZWN0VG8gIT09IFwic3RyaW5nXCJcbiAgKSB7XG4gICAgcmV0dXJuIHsgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gIH07XG4gIH1cblxuICBjb25zdCBmaWVsZHMgPSB7IHVzZXJuYW1lLCBwYXNzd29yZCB9O1xuICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICB1c2VybmFtZTogdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZSksXG4gICAgcGFzc3dvcmQ6IHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpXG4gIH07XG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKVxuICAgIHJldHVybiB7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfTtcblxuICBjb25zdCB1c2VyID0gYXdhaXQgbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiB7XG4gICAgICBmaWVsZHMsXG4gICAgICBmb3JtRXJyb3I6IGBVc2VybmFtZS9QYXNzd29yZCBjb21iaW5hdGlvbiBpcyBpbmNvcnJlY3RgXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLnVpZCwgcmVkaXJlY3RUbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpXG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICA8aDE+TG9nZyBpbm48L2gxPlxuICAgICAgPEZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgPElucHV0IG5hbWU9XCJyZWRpcmVjdFRvXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwicmVkaXJlY3RUb1wiKSA/PyB1bmRlZmluZWR9IC8+XG4gICAgICAgIDxJbnB1dCBuYW1lPVwidXNlcm5hbWVcIiBsYWJlbD1cIkJydWtlcm5hdm5cIiB0eXBlPVwiZW1haWxcIiAvPlxuICAgICAgICA8SW5wdXQgbmFtZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJQYXNzb3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgLz5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkxvZ2dlciBpbm4uLi5cIiA6IFwiTG9nZyBpbm5cIn1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7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
