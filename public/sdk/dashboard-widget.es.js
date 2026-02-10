var Gv = { exports: {} }, _0 = {};
var UE;
function gA() {
  if (UE) return _0;
  UE = 1;
  var W = /* @__PURE__ */ Symbol.for("react.transitional.element"), K = /* @__PURE__ */ Symbol.for("react.fragment");
  function ce(M, se, re) {
    var Se = null;
    if (re !== void 0 && (Se = "" + re), se.key !== void 0 && (Se = "" + se.key), "key" in se) {
      re = {};
      for (var Ne in se)
        Ne !== "key" && (re[Ne] = se[Ne]);
    } else re = se;
    return se = re.ref, {
      $$typeof: W,
      type: M,
      key: Se,
      ref: se !== void 0 ? se : null,
      props: re
    };
  }
  return _0.Fragment = K, _0.jsx = ce, _0.jsxs = ce, _0;
}
var D0 = {}, Xv = { exports: {} }, $e = {};
var HE;
function vA() {
  if (HE) return $e;
  HE = 1;
  var W = /* @__PURE__ */ Symbol.for("react.transitional.element"), K = /* @__PURE__ */ Symbol.for("react.portal"), ce = /* @__PURE__ */ Symbol.for("react.fragment"), M = /* @__PURE__ */ Symbol.for("react.strict_mode"), se = /* @__PURE__ */ Symbol.for("react.profiler"), re = /* @__PURE__ */ Symbol.for("react.consumer"), Se = /* @__PURE__ */ Symbol.for("react.context"), Ne = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.memo"), Ye = /* @__PURE__ */ Symbol.for("react.lazy"), ie = /* @__PURE__ */ Symbol.for("react.activity"), $ = Symbol.iterator;
  function H(O) {
    return O === null || typeof O != "object" ? null : (O = $ && O[$] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var ue = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, je = Object.assign, Bt = {};
  function Ce(O, A, k) {
    this.props = O, this.context = A, this.refs = Bt, this.updater = k || ue;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(O, A) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, O, A, "setState");
  }, Ce.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function Ve() {
  }
  Ve.prototype = Ce.prototype;
  function gt(O, A, k) {
    this.props = O, this.context = A, this.refs = Bt, this.updater = k || ue;
  }
  var Ct = gt.prototype = new Ve();
  Ct.constructor = gt, je(Ct, Ce.prototype), Ct.isPureReactComponent = !0;
  var vt = Array.isArray;
  function xe() {
  }
  var ye = { H: null, A: null, T: null, S: null }, at = Object.prototype.hasOwnProperty;
  function Te(O, A, k) {
    var te = k.ref;
    return {
      $$typeof: W,
      type: O,
      key: A,
      ref: te !== void 0 ? te : null,
      props: k
    };
  }
  function Gt(O, A) {
    return Te(O.type, A, O.props);
  }
  function me(O) {
    return typeof O == "object" && O !== null && O.$$typeof === W;
  }
  function Ot(O) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(k) {
      return A[k];
    });
  }
  var Re = /\/+/g;
  function we(O, A) {
    return typeof O == "object" && O !== null && O.key != null ? Ot("" + O.key) : A.toString(36);
  }
  function Xt(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(xe, xe) : (O.status = "pending", O.then(
          function(A) {
            O.status === "pending" && (O.status = "fulfilled", O.value = A);
          },
          function(A) {
            O.status === "pending" && (O.status = "rejected", O.reason = A);
          }
        )), O.status) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function L(O, A, k, te, ae) {
    var Ue = typeof O;
    (Ue === "undefined" || Ue === "boolean") && (O = null);
    var ut = !1;
    if (O === null) ut = !0;
    else
      switch (Ue) {
        case "bigint":
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case W:
            case K:
              ut = !0;
              break;
            case Ye:
              return ut = O._init, L(
                ut(O._payload),
                A,
                k,
                te,
                ae
              );
          }
      }
    if (ut)
      return ae = ae(O), ut = te === "" ? "." + we(O, 0) : te, vt(ae) ? (k = "", ut != null && (k = ut.replace(Re, "$&/") + "/"), L(ae, A, k, "", function(la) {
        return la;
      })) : ae != null && (me(ae) && (ae = Gt(
        ae,
        k + (ae.key == null || O && O.key === ae.key ? "" : ("" + ae.key).replace(
          Re,
          "$&/"
        ) + "/") + ut
      )), A.push(ae)), 1;
    ut = 0;
    var et = te === "" ? "." : te + ":";
    if (vt(O))
      for (var _t = 0; _t < O.length; _t++)
        te = O[_t], Ue = et + we(te, _t), ut += L(
          te,
          A,
          k,
          Ue,
          ae
        );
    else if (_t = H(O), typeof _t == "function")
      for (O = _t.call(O), _t = 0; !(te = O.next()).done; )
        te = te.value, Ue = et + we(te, _t++), ut += L(
          te,
          A,
          k,
          Ue,
          ae
        );
    else if (Ue === "object") {
      if (typeof O.then == "function")
        return L(
          Xt(O),
          A,
          k,
          te,
          ae
        );
      throw A = String(O), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ut;
  }
  function j(O, A, k) {
    if (O == null) return O;
    var te = [], ae = 0;
    return L(O, te, "", "", function(Ue) {
      return A.call(k, Ue, ae++);
    }), te;
  }
  function ee(O) {
    if (O._status === -1) {
      var A = O._result;
      A = A(), A.then(
        function(k) {
          (O._status === 0 || O._status === -1) && (O._status = 1, O._result = k);
        },
        function(k) {
          (O._status === 0 || O._status === -1) && (O._status = 2, O._result = k);
        }
      ), O._status === -1 && (O._status = 0, O._result = A);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var fe = typeof reportError == "function" ? reportError : function(O) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
        error: O
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", O);
      return;
    }
    console.error(O);
  }, Oe = {
    map: j,
    forEach: function(O, A, k) {
      j(
        O,
        function() {
          A.apply(this, arguments);
        },
        k
      );
    },
    count: function(O) {
      var A = 0;
      return j(O, function() {
        A++;
      }), A;
    },
    toArray: function(O) {
      return j(O, function(A) {
        return A;
      }) || [];
    },
    only: function(O) {
      if (!me(O))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return O;
    }
  };
  return $e.Activity = ie, $e.Children = Oe, $e.Component = Ce, $e.Fragment = ce, $e.Profiler = se, $e.PureComponent = gt, $e.StrictMode = M, $e.Suspense = X, $e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ye, $e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(O) {
      return ye.H.useMemoCache(O);
    }
  }, $e.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, $e.cacheSignal = function() {
    return null;
  }, $e.cloneElement = function(O, A, k) {
    if (O == null)
      throw Error(
        "The argument must be a React element, but you passed " + O + "."
      );
    var te = je({}, O.props), ae = O.key;
    if (A != null)
      for (Ue in A.key !== void 0 && (ae = "" + A.key), A)
        !at.call(A, Ue) || Ue === "key" || Ue === "__self" || Ue === "__source" || Ue === "ref" && A.ref === void 0 || (te[Ue] = A[Ue]);
    var Ue = arguments.length - 2;
    if (Ue === 1) te.children = k;
    else if (1 < Ue) {
      for (var ut = Array(Ue), et = 0; et < Ue; et++)
        ut[et] = arguments[et + 2];
      te.children = ut;
    }
    return Te(O.type, ae, te);
  }, $e.createContext = function(O) {
    return O = {
      $$typeof: Se,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, O.Provider = O, O.Consumer = {
      $$typeof: re,
      _context: O
    }, O;
  }, $e.createElement = function(O, A, k) {
    var te, ae = {}, Ue = null;
    if (A != null)
      for (te in A.key !== void 0 && (Ue = "" + A.key), A)
        at.call(A, te) && te !== "key" && te !== "__self" && te !== "__source" && (ae[te] = A[te]);
    var ut = arguments.length - 2;
    if (ut === 1) ae.children = k;
    else if (1 < ut) {
      for (var et = Array(ut), _t = 0; _t < ut; _t++)
        et[_t] = arguments[_t + 2];
      ae.children = et;
    }
    if (O && O.defaultProps)
      for (te in ut = O.defaultProps, ut)
        ae[te] === void 0 && (ae[te] = ut[te]);
    return Te(O, Ue, ae);
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(O) {
    return { $$typeof: Ne, render: O };
  }, $e.isValidElement = me, $e.lazy = function(O) {
    return {
      $$typeof: Ye,
      _payload: { _status: -1, _result: O },
      _init: ee
    };
  }, $e.memo = function(O, A) {
    return {
      $$typeof: Q,
      type: O,
      compare: A === void 0 ? null : A
    };
  }, $e.startTransition = function(O) {
    var A = ye.T, k = {};
    ye.T = k;
    try {
      var te = O(), ae = ye.S;
      ae !== null && ae(k, te), typeof te == "object" && te !== null && typeof te.then == "function" && te.then(xe, fe);
    } catch (Ue) {
      fe(Ue);
    } finally {
      A !== null && k.types !== null && (A.types = k.types), ye.T = A;
    }
  }, $e.unstable_useCacheRefresh = function() {
    return ye.H.useCacheRefresh();
  }, $e.use = function(O) {
    return ye.H.use(O);
  }, $e.useActionState = function(O, A, k) {
    return ye.H.useActionState(O, A, k);
  }, $e.useCallback = function(O, A) {
    return ye.H.useCallback(O, A);
  }, $e.useContext = function(O) {
    return ye.H.useContext(O);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(O, A) {
    return ye.H.useDeferredValue(O, A);
  }, $e.useEffect = function(O, A) {
    return ye.H.useEffect(O, A);
  }, $e.useEffectEvent = function(O) {
    return ye.H.useEffectEvent(O);
  }, $e.useId = function() {
    return ye.H.useId();
  }, $e.useImperativeHandle = function(O, A, k) {
    return ye.H.useImperativeHandle(O, A, k);
  }, $e.useInsertionEffect = function(O, A) {
    return ye.H.useInsertionEffect(O, A);
  }, $e.useLayoutEffect = function(O, A) {
    return ye.H.useLayoutEffect(O, A);
  }, $e.useMemo = function(O, A) {
    return ye.H.useMemo(O, A);
  }, $e.useOptimistic = function(O, A) {
    return ye.H.useOptimistic(O, A);
  }, $e.useReducer = function(O, A, k) {
    return ye.H.useReducer(O, A, k);
  }, $e.useRef = function(O) {
    return ye.H.useRef(O);
  }, $e.useState = function(O) {
    return ye.H.useState(O);
  }, $e.useSyncExternalStore = function(O, A, k) {
    return ye.H.useSyncExternalStore(
      O,
      A,
      k
    );
  }, $e.useTransition = function() {
    return ye.H.useTransition();
  }, $e.version = "19.2.4", $e;
}
var M0 = { exports: {} };
M0.exports;
var NE;
function SA() {
  return NE || (NE = 1, (function(W, K) {
    var ce = {};
    ce.NODE_ENV !== "production" && (function() {
      function M(g, C) {
        Object.defineProperty(Se.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              C[0],
              C[1]
            );
          }
        });
      }
      function se(g) {
        return g === null || typeof g != "object" ? null : (g = Ac && g[Ac] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function re(g, C) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var P = g + "." + C;
        Fa[P] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          C,
          g
        ), Fa[P] = !0);
      }
      function Se(g, C, P) {
        this.props = g, this.context = C, this.refs = Mt, this.updater = P || ii;
      }
      function Ne() {
      }
      function X(g, C, P) {
        this.props = g, this.context = C, this.refs = Mt, this.updater = P || ii;
      }
      function Q() {
      }
      function Ye(g) {
        return "" + g;
      }
      function ie(g) {
        try {
          Ye(g);
          var C = !1;
        } catch {
          C = !0;
        }
        if (C) {
          C = console;
          var P = C.error, le = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return P.call(
            C,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            le
          ), Ye(g);
        }
      }
      function $(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === tr ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case A:
            return "Fragment";
          case te:
            return "Profiler";
          case k:
            return "StrictMode";
          case et:
            return "Suspense";
          case _t:
            return "SuspenseList";
          case he:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case O:
              return "Portal";
            case Ue:
              return g.displayName || "Context";
            case ae:
              return (g._context.displayName || "Context") + ".Consumer";
            case ut:
              var C = g.render;
              return g = g.displayName, g || (g = C.displayName || C.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case la:
              return C = g.displayName || null, C !== null ? C : $(g.type) || "Memo";
            case vn:
              C = g._payload, g = g._init;
              try {
                return $(g(C));
              } catch {
              }
          }
        return null;
      }
      function H(g) {
        if (g === A) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === vn)
          return "<...>";
        try {
          var C = $(g);
          return C ? "<" + C + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ue() {
        var g = ve.A;
        return g === null ? null : g.getOwner();
      }
      function je() {
        return Error("react-stack-top-frame");
      }
      function Bt(g) {
        if (Bo.call(g, "key")) {
          var C = Object.getOwnPropertyDescriptor(g, "key").get;
          if (C && C.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function Ce(g, C) {
        function P() {
          Tl || (Tl = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            C
          ));
        }
        P.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: P,
          configurable: !0
        });
      }
      function Ve() {
        var g = $(this.type);
        return lr[g] || (lr[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function gt(g, C, P, le, pe, Ge) {
        var be = P.ref;
        return g = {
          $$typeof: Oe,
          type: g,
          key: C,
          props: P,
          _owner: le
        }, (be !== void 0 ? be : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: Ve
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: pe
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Ge
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function Ct(g, C) {
        return C = gt(
          g.type,
          C,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (C._store.validated = g._store.validated), C;
      }
      function vt(g) {
        xe(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === vn && (g._payload.status === "fulfilled" ? xe(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function xe(g) {
        return typeof g == "object" && g !== null && g.$$typeof === Oe;
      }
      function ye(g) {
        var C = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(P) {
          return C[P];
        });
      }
      function at(g, C) {
        return typeof g == "object" && g !== null && g.key != null ? (ie(g.key), ye("" + g.key)) : C.toString(36);
      }
      function Te(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(Q, Q) : (g.status = "pending", g.then(
              function(C) {
                g.status === "pending" && (g.status = "fulfilled", g.value = C);
              },
              function(C) {
                g.status === "pending" && (g.status = "rejected", g.reason = C);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function Gt(g, C, P, le, pe) {
        var Ge = typeof g;
        (Ge === "undefined" || Ge === "boolean") && (g = null);
        var be = !1;
        if (g === null) be = !0;
        else
          switch (Ge) {
            case "bigint":
            case "string":
            case "number":
              be = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case Oe:
                case O:
                  be = !0;
                  break;
                case vn:
                  return be = g._init, Gt(
                    be(g._payload),
                    C,
                    P,
                    le,
                    pe
                  );
              }
          }
        if (be) {
          be = g, pe = pe(be);
          var dt = le === "" ? "." + at(be, 0) : le;
          return qi(pe) ? (P = "", dt != null && (P = dt.replace(ar, "$&/") + "/"), Gt(pe, C, P, "", function(Xl) {
            return Xl;
          })) : pe != null && (xe(pe) && (pe.key != null && (be && be.key === pe.key || ie(pe.key)), P = Ct(
            pe,
            P + (pe.key == null || be && be.key === pe.key ? "" : ("" + pe.key).replace(
              ar,
              "$&/"
            ) + "/") + dt
          ), le !== "" && be != null && xe(be) && be.key == null && be._store && !be._store.validated && (P._store.validated = 2), pe = P), C.push(pe)), 1;
        }
        if (be = 0, dt = le === "" ? "." : le + ":", qi(g))
          for (var Qe = 0; Qe < g.length; Qe++)
            le = g[Qe], Ge = dt + at(le, Qe), be += Gt(
              le,
              C,
              P,
              Ge,
              pe
            );
        else if (Qe = se(g), typeof Qe == "function")
          for (Qe === g.entries && (Xi || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Xi = !0), g = Qe.call(g), Qe = 0; !(le = g.next()).done; )
            le = le.value, Ge = dt + at(le, Qe++), be += Gt(
              le,
              C,
              P,
              Ge,
              pe
            );
        else if (Ge === "object") {
          if (typeof g.then == "function")
            return Gt(
              Te(g),
              C,
              P,
              le,
              pe
            );
          throw C = String(g), Error(
            "Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return be;
      }
      function me(g, C, P) {
        if (g == null) return g;
        var le = [], pe = 0;
        return Gt(g, le, "", "", function(Ge) {
          return C.call(P, Ge, pe++);
        }), le;
      }
      function Ot(g) {
        if (g._status === -1) {
          var C = g._ioInfo;
          C != null && (C.start = C.end = performance.now()), C = g._result;
          var P = C();
          if (P.then(
            function(pe) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = pe;
                var Ge = g._ioInfo;
                Ge != null && (Ge.end = performance.now()), P.status === void 0 && (P.status = "fulfilled", P.value = pe);
              }
            },
            function(pe) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = pe;
                var Ge = g._ioInfo;
                Ge != null && (Ge.end = performance.now()), P.status === void 0 && (P.status = "rejected", P.reason = pe);
              }
            }
          ), C = g._ioInfo, C != null) {
            C.value = P;
            var le = P.displayName;
            typeof le == "string" && (C.name = le);
          }
          g._status === -1 && (g._status = 0, g._result = P);
        }
        if (g._status === 1)
          return C = g._result, C === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            C
          ), "default" in C || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            C
          ), C.default;
        throw g._result;
      }
      function Re() {
        var g = ve.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function we() {
        ve.asyncTransitions--;
      }
      function Xt(g) {
        if (Gn === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7);
            Gn = (W && W[C]).call(
              W,
              "timers"
            ).setImmediate;
          } catch {
            Gn = function(le) {
              ur === !1 && (ur = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var pe = new MessageChannel();
              pe.port1.onmessage = le, pe.port2.postMessage(void 0);
            };
          }
        return Gn(g);
      }
      function L(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function j(g, C) {
        C !== gl - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), gl = C;
      }
      function ee(g, C, P) {
        var le = ve.actQueue;
        if (le !== null)
          if (le.length !== 0)
            try {
              fe(le), Xt(function() {
                return ee(g, C, P);
              });
              return;
            } catch (pe) {
              ve.thrownErrors.push(pe);
            }
          else ve.actQueue = null;
        0 < ve.thrownErrors.length ? (le = L(ve.thrownErrors), ve.thrownErrors.length = 0, P(le)) : C(g);
      }
      function fe(g) {
        if (!Ml) {
          Ml = !0;
          var C = 0;
          try {
            for (; C < g.length; C++) {
              var P = g[C];
              do {
                ve.didUsePromise = !1;
                var le = P(!1);
                if (le !== null) {
                  if (ve.didUsePromise) {
                    g[C] = P, g.splice(0, C);
                    return;
                  }
                  P = le;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (pe) {
            g.splice(0, C + 1), ve.thrownErrors.push(pe);
          } finally {
            Ml = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Oe = /* @__PURE__ */ Symbol.for("react.transitional.element"), O = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), te = /* @__PURE__ */ Symbol.for("react.profiler"), ae = /* @__PURE__ */ Symbol.for("react.consumer"), Ue = /* @__PURE__ */ Symbol.for("react.context"), ut = /* @__PURE__ */ Symbol.for("react.forward_ref"), et = /* @__PURE__ */ Symbol.for("react.suspense"), _t = /* @__PURE__ */ Symbol.for("react.suspense_list"), la = /* @__PURE__ */ Symbol.for("react.memo"), vn = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.activity"), Ac = Symbol.iterator, Fa = {}, ii = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          re(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          re(g, "replaceState");
        },
        enqueueSetState: function(g) {
          re(g, "setState");
        }
      }, iu = Object.assign, Mt = {};
      Object.freeze(Mt), Se.prototype.isReactComponent = {}, Se.prototype.setState = function(g, C) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, C, "setState");
      }, Se.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var Gl = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Li in Gl)
        Gl.hasOwnProperty(Li) && M(Li, Gl[Li]);
      Ne.prototype = Se.prototype, Gl = X.prototype = new Ne(), Gl.constructor = X, iu(Gl, Se.prototype), Gl.isPureReactComponent = !0;
      var qi = Array.isArray, tr = /* @__PURE__ */ Symbol.for("react.client.reference"), ve = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, Bo = Object.prototype.hasOwnProperty, cu = console.createTask ? console.createTask : function() {
        return null;
      };
      Gl = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var Tl, wi, lr = {}, jo = Gl.react_stack_bottom_frame.bind(
        Gl,
        je
      )(), Gi = cu(H(je)), Xi = !1, ar = /\/+/g, nr = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var C = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(C)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, ur = !1, Gn = null, gl = 0, za = !1, Ml = !1, Yo = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Xt;
      Gl = Object.freeze({
        __proto__: null,
        c: function(g) {
          return Re().useMemoCache(g);
        }
      });
      var Li = {
        map: me,
        forEach: function(g, C, P) {
          me(
            g,
            function() {
              C.apply(this, arguments);
            },
            P
          );
        },
        count: function(g) {
          var C = 0;
          return me(g, function() {
            C++;
          }), C;
        },
        toArray: function(g) {
          return me(g, function(C) {
            return C;
          }) || [];
        },
        only: function(g) {
          if (!xe(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      K.Activity = he, K.Children = Li, K.Component = Se, K.Fragment = A, K.Profiler = te, K.PureComponent = X, K.StrictMode = k, K.Suspense = et, K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ve, K.__COMPILER_RUNTIME = Gl, K.act = function(g) {
        var C = ve.actQueue, P = gl;
        gl++;
        var le = ve.actQueue = C !== null ? C : [], pe = !1;
        try {
          var Ge = g();
        } catch (Qe) {
          ve.thrownErrors.push(Qe);
        }
        if (0 < ve.thrownErrors.length)
          throw j(C, P), g = L(ve.thrownErrors), ve.thrownErrors.length = 0, g;
        if (Ge !== null && typeof Ge == "object" && typeof Ge.then == "function") {
          var be = Ge;
          return Yo(function() {
            pe || za || (za = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Qe, Xl) {
              pe = !0, be.then(
                function(Ra) {
                  if (j(C, P), P === 0) {
                    try {
                      fe(le), Xt(function() {
                        return ee(
                          Ra,
                          Qe,
                          Xl
                        );
                      });
                    } catch (Oc) {
                      ve.thrownErrors.push(Oc);
                    }
                    if (0 < ve.thrownErrors.length) {
                      var rd = L(
                        ve.thrownErrors
                      );
                      ve.thrownErrors.length = 0, Xl(rd);
                    }
                  } else Qe(Ra);
                },
                function(Ra) {
                  j(C, P), 0 < ve.thrownErrors.length && (Ra = L(
                    ve.thrownErrors
                  ), ve.thrownErrors.length = 0), Xl(Ra);
                }
              );
            }
          };
        }
        var dt = Ge;
        if (j(C, P), P === 0 && (fe(le), le.length !== 0 && Yo(function() {
          pe || za || (za = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ve.actQueue = null), 0 < ve.thrownErrors.length)
          throw g = L(ve.thrownErrors), ve.thrownErrors.length = 0, g;
        return {
          then: function(Qe, Xl) {
            pe = !0, P === 0 ? (ve.actQueue = le, Xt(function() {
              return ee(
                dt,
                Qe,
                Xl
              );
            })) : Qe(dt);
          }
        };
      }, K.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, K.cacheSignal = function() {
        return null;
      }, K.captureOwnerStack = function() {
        var g = ve.getCurrentStack;
        return g === null ? null : g();
      }, K.cloneElement = function(g, C, P) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var le = iu({}, g.props), pe = g.key, Ge = g._owner;
        if (C != null) {
          var be;
          e: {
            if (Bo.call(C, "ref") && (be = Object.getOwnPropertyDescriptor(
              C,
              "ref"
            ).get) && be.isReactWarning) {
              be = !1;
              break e;
            }
            be = C.ref !== void 0;
          }
          be && (Ge = ue()), Bt(C) && (ie(C.key), pe = "" + C.key);
          for (dt in C)
            !Bo.call(C, dt) || dt === "key" || dt === "__self" || dt === "__source" || dt === "ref" && C.ref === void 0 || (le[dt] = C[dt]);
        }
        var dt = arguments.length - 2;
        if (dt === 1) le.children = P;
        else if (1 < dt) {
          be = Array(dt);
          for (var Qe = 0; Qe < dt; Qe++)
            be[Qe] = arguments[Qe + 2];
          le.children = be;
        }
        for (le = gt(
          g.type,
          pe,
          le,
          Ge,
          g._debugStack,
          g._debugTask
        ), pe = 2; pe < arguments.length; pe++)
          vt(arguments[pe]);
        return le;
      }, K.createContext = function(g) {
        return g = {
          $$typeof: Ue,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: ae,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, K.createElement = function(g, C, P) {
        for (var le = 2; le < arguments.length; le++)
          vt(arguments[le]);
        le = {};
        var pe = null;
        if (C != null)
          for (Qe in wi || !("__self" in C) || "key" in C || (wi = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), Bt(C) && (ie(C.key), pe = "" + C.key), C)
            Bo.call(C, Qe) && Qe !== "key" && Qe !== "__self" && Qe !== "__source" && (le[Qe] = C[Qe]);
        var Ge = arguments.length - 2;
        if (Ge === 1) le.children = P;
        else if (1 < Ge) {
          for (var be = Array(Ge), dt = 0; dt < Ge; dt++)
            be[dt] = arguments[dt + 2];
          Object.freeze && Object.freeze(be), le.children = be;
        }
        if (g && g.defaultProps)
          for (Qe in Ge = g.defaultProps, Ge)
            le[Qe] === void 0 && (le[Qe] = Ge[Qe]);
        pe && Ce(
          le,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var Qe = 1e4 > ve.recentlyCreatedOwnerStacks++;
        return gt(
          g,
          pe,
          le,
          ue(),
          Qe ? Error("react-stack-top-frame") : jo,
          Qe ? cu(H(g)) : Gi
        );
      }, K.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, K.forwardRef = function(g) {
        g != null && g.$$typeof === la ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var C = { $$typeof: ut, render: g }, P;
        return Object.defineProperty(C, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return P;
          },
          set: function(le) {
            P = le, g.name || g.displayName || (Object.defineProperty(g, "name", { value: le }), g.displayName = le);
          }
        }), C;
      }, K.isValidElement = xe, K.lazy = function(g) {
        g = { _status: -1, _result: g };
        var C = {
          $$typeof: vn,
          _payload: g,
          _init: Ot
        }, P = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = P, C._debugInfo = [{ awaited: P }], C;
      }, K.memo = function(g, C) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), C = {
          $$typeof: la,
          type: g,
          compare: C === void 0 ? null : C
        };
        var P;
        return Object.defineProperty(C, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return P;
          },
          set: function(le) {
            P = le, g.name || g.displayName || (Object.defineProperty(g, "name", { value: le }), g.displayName = le);
          }
        }), C;
      }, K.startTransition = function(g) {
        var C = ve.T, P = {};
        P._updatedFibers = /* @__PURE__ */ new Set(), ve.T = P;
        try {
          var le = g(), pe = ve.S;
          pe !== null && pe(P, le), typeof le == "object" && le !== null && typeof le.then == "function" && (ve.asyncTransitions++, le.then(we, we), le.then(Q, nr));
        } catch (Ge) {
          nr(Ge);
        } finally {
          C === null && P._updatedFibers && (g = P._updatedFibers.size, P._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), C !== null && P.types !== null && (C.types !== null && C.types !== P.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), C.types = P.types), ve.T = C;
        }
      }, K.unstable_useCacheRefresh = function() {
        return Re().useCacheRefresh();
      }, K.use = function(g) {
        return Re().use(g);
      }, K.useActionState = function(g, C, P) {
        return Re().useActionState(
          g,
          C,
          P
        );
      }, K.useCallback = function(g, C) {
        return Re().useCallback(g, C);
      }, K.useContext = function(g) {
        var C = Re();
        return g.$$typeof === ae && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), C.useContext(g);
      }, K.useDebugValue = function(g, C) {
        return Re().useDebugValue(g, C);
      }, K.useDeferredValue = function(g, C) {
        return Re().useDeferredValue(g, C);
      }, K.useEffect = function(g, C) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Re().useEffect(g, C);
      }, K.useEffectEvent = function(g) {
        return Re().useEffectEvent(g);
      }, K.useId = function() {
        return Re().useId();
      }, K.useImperativeHandle = function(g, C, P) {
        return Re().useImperativeHandle(g, C, P);
      }, K.useInsertionEffect = function(g, C) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Re().useInsertionEffect(g, C);
      }, K.useLayoutEffect = function(g, C) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Re().useLayoutEffect(g, C);
      }, K.useMemo = function(g, C) {
        return Re().useMemo(g, C);
      }, K.useOptimistic = function(g, C) {
        return Re().useOptimistic(g, C);
      }, K.useReducer = function(g, C, P) {
        return Re().useReducer(g, C, P);
      }, K.useRef = function(g) {
        return Re().useRef(g);
      }, K.useState = function(g) {
        return Re().useState(g);
      }, K.useSyncExternalStore = function(g, C, P) {
        return Re().useSyncExternalStore(
          g,
          C,
          P
        );
      }, K.useTransition = function() {
        return Re().useTransition();
      }, K.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(M0, M0.exports)), M0.exports;
}
var xE;
function Um() {
  if (xE) return Xv.exports;
  xE = 1;
  var W = {};
  return W.NODE_ENV === "production" ? Xv.exports = vA() : Xv.exports = SA(), Xv.exports;
}
var BE;
function bA() {
  if (BE) return D0;
  BE = 1;
  var W = {};
  return W.NODE_ENV !== "production" && (function() {
    function K(A) {
      if (A == null) return null;
      if (typeof A == "function")
        return A.$$typeof === Ot ? null : A.displayName || A.name || null;
      if (typeof A == "string") return A;
      switch (A) {
        case Ce:
          return "Fragment";
        case gt:
          return "Profiler";
        case Ve:
          return "StrictMode";
        case ye:
          return "Suspense";
        case at:
          return "SuspenseList";
        case me:
          return "Activity";
      }
      if (typeof A == "object")
        switch (typeof A.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), A.$$typeof) {
          case Bt:
            return "Portal";
          case vt:
            return A.displayName || "Context";
          case Ct:
            return (A._context.displayName || "Context") + ".Consumer";
          case xe:
            var k = A.render;
            return A = A.displayName, A || (A = k.displayName || k.name || "", A = A !== "" ? "ForwardRef(" + A + ")" : "ForwardRef"), A;
          case Te:
            return k = A.displayName || null, k !== null ? k : K(A.type) || "Memo";
          case Gt:
            k = A._payload, A = A._init;
            try {
              return K(A(k));
            } catch {
            }
        }
      return null;
    }
    function ce(A) {
      return "" + A;
    }
    function M(A) {
      try {
        ce(A);
        var k = !1;
      } catch {
        k = !0;
      }
      if (k) {
        k = console;
        var te = k.error, ae = typeof Symbol == "function" && Symbol.toStringTag && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return te.call(
          k,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ae
        ), ce(A);
      }
    }
    function se(A) {
      if (A === Ce) return "<>";
      if (typeof A == "object" && A !== null && A.$$typeof === Gt)
        return "<...>";
      try {
        var k = K(A);
        return k ? "<" + k + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function re() {
      var A = Re.A;
      return A === null ? null : A.getOwner();
    }
    function Se() {
      return Error("react-stack-top-frame");
    }
    function Ne(A) {
      if (we.call(A, "key")) {
        var k = Object.getOwnPropertyDescriptor(A, "key").get;
        if (k && k.isReactWarning) return !1;
      }
      return A.key !== void 0;
    }
    function X(A, k) {
      function te() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          k
        ));
      }
      te.isReactWarning = !0, Object.defineProperty(A, "key", {
        get: te,
        configurable: !0
      });
    }
    function Q() {
      var A = K(this.type);
      return ee[A] || (ee[A] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), A = this.props.ref, A !== void 0 ? A : null;
    }
    function Ye(A, k, te, ae, Ue, ut) {
      var et = te.ref;
      return A = {
        $$typeof: je,
        type: A,
        key: k,
        props: te,
        _owner: ae
      }, (et !== void 0 ? et : null) !== null ? Object.defineProperty(A, "ref", {
        enumerable: !1,
        get: Q
      }) : Object.defineProperty(A, "ref", { enumerable: !1, value: null }), A._store = {}, Object.defineProperty(A._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(A, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(A, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ue
      }), Object.defineProperty(A, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ut
      }), Object.freeze && (Object.freeze(A.props), Object.freeze(A)), A;
    }
    function ie(A, k, te, ae, Ue, ut) {
      var et = k.children;
      if (et !== void 0)
        if (ae)
          if (Xt(et)) {
            for (ae = 0; ae < et.length; ae++)
              $(et[ae]);
            Object.freeze && Object.freeze(et);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else $(et);
      if (we.call(k, "key")) {
        et = K(A);
        var _t = Object.keys(k).filter(function(vn) {
          return vn !== "key";
        });
        ae = 0 < _t.length ? "{key: someKey, " + _t.join(": ..., ") + ": ...}" : "{key: someKey}", O[et + ae] || (_t = 0 < _t.length ? "{" + _t.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ae,
          et,
          _t,
          et
        ), O[et + ae] = !0);
      }
      if (et = null, te !== void 0 && (M(te), et = "" + te), Ne(k) && (M(k.key), et = "" + k.key), "key" in k) {
        te = {};
        for (var la in k)
          la !== "key" && (te[la] = k[la]);
      } else te = k;
      return et && X(
        te,
        typeof A == "function" ? A.displayName || A.name || "Unknown" : A
      ), Ye(
        A,
        et,
        te,
        re(),
        Ue,
        ut
      );
    }
    function $(A) {
      H(A) ? A._store && (A._store.validated = 1) : typeof A == "object" && A !== null && A.$$typeof === Gt && (A._payload.status === "fulfilled" ? H(A._payload.value) && A._payload.value._store && (A._payload.value._store.validated = 1) : A._store && (A._store.validated = 1));
    }
    function H(A) {
      return typeof A == "object" && A !== null && A.$$typeof === je;
    }
    var ue = Um(), je = /* @__PURE__ */ Symbol.for("react.transitional.element"), Bt = /* @__PURE__ */ Symbol.for("react.portal"), Ce = /* @__PURE__ */ Symbol.for("react.fragment"), Ve = /* @__PURE__ */ Symbol.for("react.strict_mode"), gt = /* @__PURE__ */ Symbol.for("react.profiler"), Ct = /* @__PURE__ */ Symbol.for("react.consumer"), vt = /* @__PURE__ */ Symbol.for("react.context"), xe = /* @__PURE__ */ Symbol.for("react.forward_ref"), ye = /* @__PURE__ */ Symbol.for("react.suspense"), at = /* @__PURE__ */ Symbol.for("react.suspense_list"), Te = /* @__PURE__ */ Symbol.for("react.memo"), Gt = /* @__PURE__ */ Symbol.for("react.lazy"), me = /* @__PURE__ */ Symbol.for("react.activity"), Ot = /* @__PURE__ */ Symbol.for("react.client.reference"), Re = ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we = Object.prototype.hasOwnProperty, Xt = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    ue = {
      react_stack_bottom_frame: function(A) {
        return A();
      }
    };
    var j, ee = {}, fe = ue.react_stack_bottom_frame.bind(
      ue,
      Se
    )(), Oe = L(se(Se)), O = {};
    D0.Fragment = Ce, D0.jsx = function(A, k, te) {
      var ae = 1e4 > Re.recentlyCreatedOwnerStacks++;
      return ie(
        A,
        k,
        te,
        !1,
        ae ? Error("react-stack-top-frame") : fe,
        ae ? L(se(A)) : Oe
      );
    }, D0.jsxs = function(A, k, te) {
      var ae = 1e4 > Re.recentlyCreatedOwnerStacks++;
      return ie(
        A,
        k,
        te,
        !0,
        ae ? Error("react-stack-top-frame") : fe,
        ae ? L(se(A)) : Oe
      );
    };
  })(), D0;
}
var jE;
function EA() {
  if (jE) return Gv.exports;
  jE = 1;
  var W = {};
  return W.NODE_ENV === "production" ? Gv.exports = gA() : Gv.exports = bA(), Gv.exports;
}
var st = EA(), Lv = { exports: {} }, z0 = {}, Qv = { exports: {} }, v1 = {};
var YE;
function TA() {
  return YE || (YE = 1, (function(W) {
    function K(L, j) {
      var ee = L.length;
      L.push(j);
      e: for (; 0 < ee; ) {
        var fe = ee - 1 >>> 1, Oe = L[fe];
        if (0 < se(Oe, j))
          L[fe] = j, L[ee] = Oe, ee = fe;
        else break e;
      }
    }
    function ce(L) {
      return L.length === 0 ? null : L[0];
    }
    function M(L) {
      if (L.length === 0) return null;
      var j = L[0], ee = L.pop();
      if (ee !== j) {
        L[0] = ee;
        e: for (var fe = 0, Oe = L.length, O = Oe >>> 1; fe < O; ) {
          var A = 2 * (fe + 1) - 1, k = L[A], te = A + 1, ae = L[te];
          if (0 > se(k, ee))
            te < Oe && 0 > se(ae, k) ? (L[fe] = ae, L[te] = ee, fe = te) : (L[fe] = k, L[A] = ee, fe = A);
          else if (te < Oe && 0 > se(ae, ee))
            L[fe] = ae, L[te] = ee, fe = te;
          else break e;
        }
      }
      return j;
    }
    function se(L, j) {
      var ee = L.sortIndex - j.sortIndex;
      return ee !== 0 ? ee : L.id - j.id;
    }
    if (W.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var re = performance;
      W.unstable_now = function() {
        return re.now();
      };
    } else {
      var Se = Date, Ne = Se.now();
      W.unstable_now = function() {
        return Se.now() - Ne;
      };
    }
    var X = [], Q = [], Ye = 1, ie = null, $ = 3, H = !1, ue = !1, je = !1, Bt = !1, Ce = typeof setTimeout == "function" ? setTimeout : null, Ve = typeof clearTimeout == "function" ? clearTimeout : null, gt = typeof setImmediate < "u" ? setImmediate : null;
    function Ct(L) {
      for (var j = ce(Q); j !== null; ) {
        if (j.callback === null) M(Q);
        else if (j.startTime <= L)
          M(Q), j.sortIndex = j.expirationTime, K(X, j);
        else break;
        j = ce(Q);
      }
    }
    function vt(L) {
      if (je = !1, Ct(L), !ue)
        if (ce(X) !== null)
          ue = !0, xe || (xe = !0, Ot());
        else {
          var j = ce(Q);
          j !== null && Xt(vt, j.startTime - L);
        }
    }
    var xe = !1, ye = -1, at = 5, Te = -1;
    function Gt() {
      return Bt ? !0 : !(W.unstable_now() - Te < at);
    }
    function me() {
      if (Bt = !1, xe) {
        var L = W.unstable_now();
        Te = L;
        var j = !0;
        try {
          e: {
            ue = !1, je && (je = !1, Ve(ye), ye = -1), H = !0;
            var ee = $;
            try {
              t: {
                for (Ct(L), ie = ce(X); ie !== null && !(ie.expirationTime > L && Gt()); ) {
                  var fe = ie.callback;
                  if (typeof fe == "function") {
                    ie.callback = null, $ = ie.priorityLevel;
                    var Oe = fe(
                      ie.expirationTime <= L
                    );
                    if (L = W.unstable_now(), typeof Oe == "function") {
                      ie.callback = Oe, Ct(L), j = !0;
                      break t;
                    }
                    ie === ce(X) && M(X), Ct(L);
                  } else M(X);
                  ie = ce(X);
                }
                if (ie !== null) j = !0;
                else {
                  var O = ce(Q);
                  O !== null && Xt(
                    vt,
                    O.startTime - L
                  ), j = !1;
                }
              }
              break e;
            } finally {
              ie = null, $ = ee, H = !1;
            }
            j = void 0;
          }
        } finally {
          j ? Ot() : xe = !1;
        }
      }
    }
    var Ot;
    if (typeof gt == "function")
      Ot = function() {
        gt(me);
      };
    else if (typeof MessageChannel < "u") {
      var Re = new MessageChannel(), we = Re.port2;
      Re.port1.onmessage = me, Ot = function() {
        we.postMessage(null);
      };
    } else
      Ot = function() {
        Ce(me, 0);
      };
    function Xt(L, j) {
      ye = Ce(function() {
        L(W.unstable_now());
      }, j);
    }
    W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, W.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : at = 0 < L ? Math.floor(1e3 / L) : 5;
    }, W.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, W.unstable_next = function(L) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = $;
      }
      var ee = $;
      $ = j;
      try {
        return L();
      } finally {
        $ = ee;
      }
    }, W.unstable_requestPaint = function() {
      Bt = !0;
    }, W.unstable_runWithPriority = function(L, j) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var ee = $;
      $ = L;
      try {
        return j();
      } finally {
        $ = ee;
      }
    }, W.unstable_scheduleCallback = function(L, j, ee) {
      var fe = W.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? fe + ee : fe) : ee = fe, L) {
        case 1:
          var Oe = -1;
          break;
        case 2:
          Oe = 250;
          break;
        case 5:
          Oe = 1073741823;
          break;
        case 4:
          Oe = 1e4;
          break;
        default:
          Oe = 5e3;
      }
      return Oe = ee + Oe, L = {
        id: Ye++,
        callback: j,
        priorityLevel: L,
        startTime: ee,
        expirationTime: Oe,
        sortIndex: -1
      }, ee > fe ? (L.sortIndex = ee, K(Q, L), ce(X) === null && L === ce(Q) && (je ? (Ve(ye), ye = -1) : je = !0, Xt(vt, ee - fe))) : (L.sortIndex = Oe, K(X, L), ue || H || (ue = !0, xe || (xe = !0, Ot()))), L;
    }, W.unstable_shouldYield = Gt, W.unstable_wrapCallback = function(L) {
      var j = $;
      return function() {
        var ee = $;
        $ = j;
        try {
          return L.apply(this, arguments);
        } finally {
          $ = ee;
        }
      };
    };
  })(v1)), v1;
}
var S1 = {}, qE;
function AA() {
  return qE || (qE = 1, (function(W) {
    var K = {};
    K.NODE_ENV !== "production" && (function() {
      function ce() {
        if (xe = !1, Gt) {
          var j = W.unstable_now();
          Re = j;
          var ee = !0;
          try {
            e: {
              Ct = !1, vt && (vt = !1, at(me), me = -1), gt = !0;
              var fe = Ve;
              try {
                t: {
                  for (Ne(j), Ce = se(ue); Ce !== null && !(Ce.expirationTime > j && Q()); ) {
                    var Oe = Ce.callback;
                    if (typeof Oe == "function") {
                      Ce.callback = null, Ve = Ce.priorityLevel;
                      var O = Oe(
                        Ce.expirationTime <= j
                      );
                      if (j = W.unstable_now(), typeof O == "function") {
                        Ce.callback = O, Ne(j), ee = !0;
                        break t;
                      }
                      Ce === se(ue) && re(ue), Ne(j);
                    } else re(ue);
                    Ce = se(ue);
                  }
                  if (Ce !== null) ee = !0;
                  else {
                    var A = se(je);
                    A !== null && Ye(
                      X,
                      A.startTime - j
                    ), ee = !1;
                  }
                }
                break e;
              } finally {
                Ce = null, Ve = fe, gt = !1;
              }
              ee = void 0;
            }
          } finally {
            ee ? we() : Gt = !1;
          }
        }
      }
      function M(j, ee) {
        var fe = j.length;
        j.push(ee);
        e: for (; 0 < fe; ) {
          var Oe = fe - 1 >>> 1, O = j[Oe];
          if (0 < Se(O, ee))
            j[Oe] = ee, j[fe] = O, fe = Oe;
          else break e;
        }
      }
      function se(j) {
        return j.length === 0 ? null : j[0];
      }
      function re(j) {
        if (j.length === 0) return null;
        var ee = j[0], fe = j.pop();
        if (fe !== ee) {
          j[0] = fe;
          e: for (var Oe = 0, O = j.length, A = O >>> 1; Oe < A; ) {
            var k = 2 * (Oe + 1) - 1, te = j[k], ae = k + 1, Ue = j[ae];
            if (0 > Se(te, fe))
              ae < O && 0 > Se(Ue, te) ? (j[Oe] = Ue, j[ae] = fe, Oe = ae) : (j[Oe] = te, j[k] = fe, Oe = k);
            else if (ae < O && 0 > Se(Ue, fe))
              j[Oe] = Ue, j[ae] = fe, Oe = ae;
            else break e;
          }
        }
        return ee;
      }
      function Se(j, ee) {
        var fe = j.sortIndex - ee.sortIndex;
        return fe !== 0 ? fe : j.id - ee.id;
      }
      function Ne(j) {
        for (var ee = se(je); ee !== null; ) {
          if (ee.callback === null) re(je);
          else if (ee.startTime <= j)
            re(je), ee.sortIndex = ee.expirationTime, M(ue, ee);
          else break;
          ee = se(je);
        }
      }
      function X(j) {
        if (vt = !1, Ne(j), !Ct)
          if (se(ue) !== null)
            Ct = !0, Gt || (Gt = !0, we());
          else {
            var ee = se(je);
            ee !== null && Ye(
              X,
              ee.startTime - j
            );
          }
      }
      function Q() {
        return xe ? !0 : !(W.unstable_now() - Re < Ot);
      }
      function Ye(j, ee) {
        me = ye(function() {
          j(W.unstable_now());
        }, ee);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), W.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var ie = performance;
        W.unstable_now = function() {
          return ie.now();
        };
      } else {
        var $ = Date, H = $.now();
        W.unstable_now = function() {
          return $.now() - H;
        };
      }
      var ue = [], je = [], Bt = 1, Ce = null, Ve = 3, gt = !1, Ct = !1, vt = !1, xe = !1, ye = typeof setTimeout == "function" ? setTimeout : null, at = typeof clearTimeout == "function" ? clearTimeout : null, Te = typeof setImmediate < "u" ? setImmediate : null, Gt = !1, me = -1, Ot = 5, Re = -1;
      if (typeof Te == "function")
        var we = function() {
          Te(ce);
        };
      else if (typeof MessageChannel < "u") {
        var Xt = new MessageChannel(), L = Xt.port2;
        Xt.port1.onmessage = ce, we = function() {
          L.postMessage(null);
        };
      } else
        we = function() {
          ye(ce, 0);
        };
      W.unstable_IdlePriority = 5, W.unstable_ImmediatePriority = 1, W.unstable_LowPriority = 4, W.unstable_NormalPriority = 3, W.unstable_Profiling = null, W.unstable_UserBlockingPriority = 2, W.unstable_cancelCallback = function(j) {
        j.callback = null;
      }, W.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Ot = 0 < j ? Math.floor(1e3 / j) : 5;
      }, W.unstable_getCurrentPriorityLevel = function() {
        return Ve;
      }, W.unstable_next = function(j) {
        switch (Ve) {
          case 1:
          case 2:
          case 3:
            var ee = 3;
            break;
          default:
            ee = Ve;
        }
        var fe = Ve;
        Ve = ee;
        try {
          return j();
        } finally {
          Ve = fe;
        }
      }, W.unstable_requestPaint = function() {
        xe = !0;
      }, W.unstable_runWithPriority = function(j, ee) {
        switch (j) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            j = 3;
        }
        var fe = Ve;
        Ve = j;
        try {
          return ee();
        } finally {
          Ve = fe;
        }
      }, W.unstable_scheduleCallback = function(j, ee, fe) {
        var Oe = W.unstable_now();
        switch (typeof fe == "object" && fe !== null ? (fe = fe.delay, fe = typeof fe == "number" && 0 < fe ? Oe + fe : Oe) : fe = Oe, j) {
          case 1:
            var O = -1;
            break;
          case 2:
            O = 250;
            break;
          case 5:
            O = 1073741823;
            break;
          case 4:
            O = 1e4;
            break;
          default:
            O = 5e3;
        }
        return O = fe + O, j = {
          id: Bt++,
          callback: ee,
          priorityLevel: j,
          startTime: fe,
          expirationTime: O,
          sortIndex: -1
        }, fe > Oe ? (j.sortIndex = fe, M(je, j), se(ue) === null && j === se(je) && (vt ? (at(me), me = -1) : vt = !0, Ye(X, fe - Oe))) : (j.sortIndex = O, M(ue, j), Ct || gt || (Ct = !0, Gt || (Gt = !0, we()))), j;
      }, W.unstable_shouldYield = Q, W.unstable_wrapCallback = function(j) {
        var ee = Ve;
        return function() {
          var fe = Ve;
          Ve = ee;
          try {
            return j.apply(this, arguments);
          } finally {
            Ve = fe;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(S1)), S1;
}
var wE;
function KE() {
  if (wE) return Qv.exports;
  wE = 1;
  var W = {};
  return W.NODE_ENV === "production" ? Qv.exports = TA() : Qv.exports = AA(), Qv.exports;
}
var Vv = { exports: {} }, ka = {};
var GE;
function OA() {
  if (GE) return ka;
  GE = 1;
  var W = Um();
  function K(X) {
    var Q = "https://react.dev/errors/" + X;
    if (1 < arguments.length) {
      Q += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Ye = 2; Ye < arguments.length; Ye++)
        Q += "&args[]=" + encodeURIComponent(arguments[Ye]);
    }
    return "Minified React error #" + X + "; visit " + Q + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ce() {
  }
  var M = {
    d: {
      f: ce,
      r: function() {
        throw Error(K(522));
      },
      D: ce,
      C: ce,
      L: ce,
      m: ce,
      X: ce,
      S: ce,
      M: ce
    },
    p: 0,
    findDOMNode: null
  }, se = /* @__PURE__ */ Symbol.for("react.portal");
  function re(X, Q, Ye) {
    var ie = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: se,
      key: ie == null ? null : "" + ie,
      children: X,
      containerInfo: Q,
      implementation: Ye
    };
  }
  var Se = W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ne(X, Q) {
    if (X === "font") return "";
    if (typeof Q == "string")
      return Q === "use-credentials" ? Q : "";
  }
  return ka.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M, ka.createPortal = function(X, Q) {
    var Ye = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Q || Q.nodeType !== 1 && Q.nodeType !== 9 && Q.nodeType !== 11)
      throw Error(K(299));
    return re(X, Q, null, Ye);
  }, ka.flushSync = function(X) {
    var Q = Se.T, Ye = M.p;
    try {
      if (Se.T = null, M.p = 2, X) return X();
    } finally {
      Se.T = Q, M.p = Ye, M.d.f();
    }
  }, ka.preconnect = function(X, Q) {
    typeof X == "string" && (Q ? (Q = Q.crossOrigin, Q = typeof Q == "string" ? Q === "use-credentials" ? Q : "" : void 0) : Q = null, M.d.C(X, Q));
  }, ka.prefetchDNS = function(X) {
    typeof X == "string" && M.d.D(X);
  }, ka.preinit = function(X, Q) {
    if (typeof X == "string" && Q && typeof Q.as == "string") {
      var Ye = Q.as, ie = Ne(Ye, Q.crossOrigin), $ = typeof Q.integrity == "string" ? Q.integrity : void 0, H = typeof Q.fetchPriority == "string" ? Q.fetchPriority : void 0;
      Ye === "style" ? M.d.S(
        X,
        typeof Q.precedence == "string" ? Q.precedence : void 0,
        {
          crossOrigin: ie,
          integrity: $,
          fetchPriority: H
        }
      ) : Ye === "script" && M.d.X(X, {
        crossOrigin: ie,
        integrity: $,
        fetchPriority: H,
        nonce: typeof Q.nonce == "string" ? Q.nonce : void 0
      });
    }
  }, ka.preinitModule = function(X, Q) {
    if (typeof X == "string")
      if (typeof Q == "object" && Q !== null) {
        if (Q.as == null || Q.as === "script") {
          var Ye = Ne(
            Q.as,
            Q.crossOrigin
          );
          M.d.M(X, {
            crossOrigin: Ye,
            integrity: typeof Q.integrity == "string" ? Q.integrity : void 0,
            nonce: typeof Q.nonce == "string" ? Q.nonce : void 0
          });
        }
      } else Q == null && M.d.M(X);
  }, ka.preload = function(X, Q) {
    if (typeof X == "string" && typeof Q == "object" && Q !== null && typeof Q.as == "string") {
      var Ye = Q.as, ie = Ne(Ye, Q.crossOrigin);
      M.d.L(X, Ye, {
        crossOrigin: ie,
        integrity: typeof Q.integrity == "string" ? Q.integrity : void 0,
        nonce: typeof Q.nonce == "string" ? Q.nonce : void 0,
        type: typeof Q.type == "string" ? Q.type : void 0,
        fetchPriority: typeof Q.fetchPriority == "string" ? Q.fetchPriority : void 0,
        referrerPolicy: typeof Q.referrerPolicy == "string" ? Q.referrerPolicy : void 0,
        imageSrcSet: typeof Q.imageSrcSet == "string" ? Q.imageSrcSet : void 0,
        imageSizes: typeof Q.imageSizes == "string" ? Q.imageSizes : void 0,
        media: typeof Q.media == "string" ? Q.media : void 0
      });
    }
  }, ka.preloadModule = function(X, Q) {
    if (typeof X == "string")
      if (Q) {
        var Ye = Ne(Q.as, Q.crossOrigin);
        M.d.m(X, {
          as: typeof Q.as == "string" && Q.as !== "script" ? Q.as : void 0,
          crossOrigin: Ye,
          integrity: typeof Q.integrity == "string" ? Q.integrity : void 0
        });
      } else M.d.m(X);
  }, ka.requestFormReset = function(X) {
    M.d.r(X);
  }, ka.unstable_batchedUpdates = function(X, Q) {
    return X(Q);
  }, ka.useFormState = function(X, Q, Ye) {
    return Se.H.useFormState(X, Q, Ye);
  }, ka.useFormStatus = function() {
    return Se.H.useHostTransitionStatus();
  }, ka.version = "19.2.4", ka;
}
var Wa = {}, XE;
function _A() {
  if (XE) return Wa;
  XE = 1;
  var W = {};
  return W.NODE_ENV !== "production" && (function() {
    function K() {
    }
    function ce($) {
      return "" + $;
    }
    function M($, H, ue) {
      var je = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        ce(je);
        var Bt = !1;
      } catch {
        Bt = !0;
      }
      return Bt && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && je[Symbol.toStringTag] || je.constructor.name || "Object"
      ), ce(je)), {
        $$typeof: Ye,
        key: je == null ? null : "" + je,
        children: $,
        containerInfo: H,
        implementation: ue
      };
    }
    function se($, H) {
      if ($ === "font") return "";
      if (typeof H == "string")
        return H === "use-credentials" ? H : "";
    }
    function re($) {
      return $ === null ? "`null`" : $ === void 0 ? "`undefined`" : $ === "" ? "an empty string" : 'something with type "' + typeof $ + '"';
    }
    function Se($) {
      return $ === null ? "`null`" : $ === void 0 ? "`undefined`" : $ === "" ? "an empty string" : typeof $ == "string" ? JSON.stringify($) : typeof $ == "number" ? "`" + $ + "`" : 'something with type "' + typeof $ + '"';
    }
    function Ne() {
      var $ = ie.H;
      return $ === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), $;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var X = Um(), Q = {
      d: {
        f: K,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: K,
        C: K,
        L: K,
        m: K,
        X: K,
        S: K,
        M: K
      },
      p: 0,
      findDOMNode: null
    }, Ye = /* @__PURE__ */ Symbol.for("react.portal"), ie = X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Wa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Q, Wa.createPortal = function($, H) {
      var ue = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!H || H.nodeType !== 1 && H.nodeType !== 9 && H.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return M($, H, null, ue);
    }, Wa.flushSync = function($) {
      var H = ie.T, ue = Q.p;
      try {
        if (ie.T = null, Q.p = 2, $)
          return $();
      } finally {
        ie.T = H, Q.p = ue, Q.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Wa.preconnect = function($, H) {
      typeof $ == "string" && $ ? H != null && typeof H != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Se(H)
      ) : H != null && typeof H.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        re(H.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        re($)
      ), typeof $ == "string" && (H ? (H = H.crossOrigin, H = typeof H == "string" ? H === "use-credentials" ? H : "" : void 0) : H = null, Q.d.C($, H));
    }, Wa.prefetchDNS = function($) {
      if (typeof $ != "string" || !$)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          re($)
        );
      else if (1 < arguments.length) {
        var H = arguments[1];
        typeof H == "object" && H.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Se(H)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Se(H)
        );
      }
      typeof $ == "string" && Q.d.D($);
    }, Wa.preinit = function($, H) {
      if (typeof $ == "string" && $ ? H == null || typeof H != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Se(H)
      ) : H.as !== "style" && H.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Se(H.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        re($)
      ), typeof $ == "string" && H && typeof H.as == "string") {
        var ue = H.as, je = se(ue, H.crossOrigin), Bt = typeof H.integrity == "string" ? H.integrity : void 0, Ce = typeof H.fetchPriority == "string" ? H.fetchPriority : void 0;
        ue === "style" ? Q.d.S(
          $,
          typeof H.precedence == "string" ? H.precedence : void 0,
          {
            crossOrigin: je,
            integrity: Bt,
            fetchPriority: Ce
          }
        ) : ue === "script" && Q.d.X($, {
          crossOrigin: je,
          integrity: Bt,
          fetchPriority: Ce,
          nonce: typeof H.nonce == "string" ? H.nonce : void 0
        });
      }
    }, Wa.preinitModule = function($, H) {
      var ue = "";
      typeof $ == "string" && $ || (ue += " The `href` argument encountered was " + re($) + "."), H !== void 0 && typeof H != "object" ? ue += " The `options` argument encountered was " + re(H) + "." : H && "as" in H && H.as !== "script" && (ue += " The `as` option encountered was " + Se(H.as) + "."), ue ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        ue
      ) : (ue = H && typeof H.as == "string" ? H.as : "script", ue) === "script" || (ue = Se(ue), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        ue,
        $
      )), typeof $ == "string" && (typeof H == "object" && H !== null ? (H.as == null || H.as === "script") && (ue = se(
        H.as,
        H.crossOrigin
      ), Q.d.M($, {
        crossOrigin: ue,
        integrity: typeof H.integrity == "string" ? H.integrity : void 0,
        nonce: typeof H.nonce == "string" ? H.nonce : void 0
      })) : H == null && Q.d.M($));
    }, Wa.preload = function($, H) {
      var ue = "";
      if (typeof $ == "string" && $ || (ue += " The `href` argument encountered was " + re($) + "."), H == null || typeof H != "object" ? ue += " The `options` argument encountered was " + re(H) + "." : typeof H.as == "string" && H.as || (ue += " The `as` option encountered was " + re(H.as) + "."), ue && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ue
      ), typeof $ == "string" && typeof H == "object" && H !== null && typeof H.as == "string") {
        ue = H.as;
        var je = se(
          ue,
          H.crossOrigin
        );
        Q.d.L($, ue, {
          crossOrigin: je,
          integrity: typeof H.integrity == "string" ? H.integrity : void 0,
          nonce: typeof H.nonce == "string" ? H.nonce : void 0,
          type: typeof H.type == "string" ? H.type : void 0,
          fetchPriority: typeof H.fetchPriority == "string" ? H.fetchPriority : void 0,
          referrerPolicy: typeof H.referrerPolicy == "string" ? H.referrerPolicy : void 0,
          imageSrcSet: typeof H.imageSrcSet == "string" ? H.imageSrcSet : void 0,
          imageSizes: typeof H.imageSizes == "string" ? H.imageSizes : void 0,
          media: typeof H.media == "string" ? H.media : void 0
        });
      }
    }, Wa.preloadModule = function($, H) {
      var ue = "";
      typeof $ == "string" && $ || (ue += " The `href` argument encountered was " + re($) + "."), H !== void 0 && typeof H != "object" ? ue += " The `options` argument encountered was " + re(H) + "." : H && "as" in H && typeof H.as != "string" && (ue += " The `as` option encountered was " + re(H.as) + "."), ue && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ue
      ), typeof $ == "string" && (H ? (ue = se(
        H.as,
        H.crossOrigin
      ), Q.d.m($, {
        as: typeof H.as == "string" && H.as !== "script" ? H.as : void 0,
        crossOrigin: ue,
        integrity: typeof H.integrity == "string" ? H.integrity : void 0
      })) : Q.d.m($));
    }, Wa.requestFormReset = function($) {
      Q.d.r($);
    }, Wa.unstable_batchedUpdates = function($, H) {
      return $(H);
    }, Wa.useFormState = function($, H, ue) {
      return Ne().useFormState($, H, ue);
    }, Wa.useFormStatus = function() {
      return Ne().useHostTransitionStatus();
    }, Wa.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), Wa;
}
var LE;
function $E() {
  if (LE) return Vv.exports;
  LE = 1;
  var W = {};
  function K() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (W.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K);
      } catch (ce) {
        console.error(ce);
      }
    }
  }
  return W.NODE_ENV === "production" ? (K(), Vv.exports = OA()) : Vv.exports = _A(), Vv.exports;
}
var QE;
function DA() {
  if (QE) return z0;
  QE = 1;
  var W = KE(), K = Um(), ce = $E();
  function M(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function se(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function re(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function Se(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Ne(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function X(l) {
    if (re(l) !== l)
      throw Error(M(188));
  }
  function Q(l) {
    var n = l.alternate;
    if (!n) {
      if (n = re(l), n === null) throw Error(M(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var r = u.return;
      if (r === null) break;
      var s = r.alternate;
      if (s === null) {
        if (c = r.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (r.child === s.child) {
        for (s = r.child; s; ) {
          if (s === u) return X(r), l;
          if (s === c) return X(r), n;
          s = s.sibling;
        }
        throw Error(M(188));
      }
      if (u.return !== c.return) u = r, c = s;
      else {
        for (var m = !1, v = r.child; v; ) {
          if (v === u) {
            m = !0, u = r, c = s;
            break;
          }
          if (v === c) {
            m = !0, c = r, u = s;
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = s.child; v; ) {
            if (v === u) {
              m = !0, u = s, c = r;
              break;
            }
            if (v === c) {
              m = !0, c = s, u = r;
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(M(189));
        }
      }
      if (u.alternate !== c) throw Error(M(190));
    }
    if (u.tag !== 3) throw Error(M(188));
    return u.stateNode.current === u ? l : n;
  }
  function Ye(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Ye(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ie = Object.assign, $ = /* @__PURE__ */ Symbol.for("react.element"), H = /* @__PURE__ */ Symbol.for("react.transitional.element"), ue = /* @__PURE__ */ Symbol.for("react.portal"), je = /* @__PURE__ */ Symbol.for("react.fragment"), Bt = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ce = /* @__PURE__ */ Symbol.for("react.profiler"), Ve = /* @__PURE__ */ Symbol.for("react.consumer"), gt = /* @__PURE__ */ Symbol.for("react.context"), Ct = /* @__PURE__ */ Symbol.for("react.forward_ref"), vt = /* @__PURE__ */ Symbol.for("react.suspense"), xe = /* @__PURE__ */ Symbol.for("react.suspense_list"), ye = /* @__PURE__ */ Symbol.for("react.memo"), at = /* @__PURE__ */ Symbol.for("react.lazy"), Te = /* @__PURE__ */ Symbol.for("react.activity"), Gt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), me = Symbol.iterator;
  function Ot(l) {
    return l === null || typeof l != "object" ? null : (l = me && l[me] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Re = /* @__PURE__ */ Symbol.for("react.client.reference");
  function we(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Re ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case je:
        return "Fragment";
      case Ce:
        return "Profiler";
      case Bt:
        return "StrictMode";
      case vt:
        return "Suspense";
      case xe:
        return "SuspenseList";
      case Te:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ue:
          return "Portal";
        case gt:
          return l.displayName || "Context";
        case Ve:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ct:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ye:
          return n = l.displayName || null, n !== null ? n : we(l.type) || "Memo";
        case at:
          n = l._payload, l = l._init;
          try {
            return we(l(n));
          } catch {
          }
      }
    return null;
  }
  var Xt = Array.isArray, L = K.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, fe = [], Oe = -1;
  function O(l) {
    return { current: l };
  }
  function A(l) {
    0 > Oe || (l.current = fe[Oe], fe[Oe] = null, Oe--);
  }
  function k(l, n) {
    Oe++, fe[Oe] = l.current, l.current = n;
  }
  var te = O(null), ae = O(null), Ue = O(null), ut = O(null);
  function et(l, n) {
    switch (k(Ue, n), k(ae, l), k(te, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Af(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Af(n), l = Hg(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    A(te), k(te, l);
  }
  function _t() {
    A(te), A(ae), A(Ue);
  }
  function la(l) {
    l.memoizedState !== null && k(ut, l);
    var n = te.current, u = Hg(n, l.type);
    n !== u && (k(ae, l), k(te, u));
  }
  function vn(l) {
    ae.current === l && (A(te), A(ae)), ut.current === l && (A(ut), sl._currentValue = ee);
  }
  var he, Ac;
  function Fa(l) {
    if (he === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        he = n && n[1] || "", Ac = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + he + l + Ac;
  }
  var ii = !1;
  function iu(l, n) {
    if (!l || ii) return "";
    ii = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var F = function() {
                throw Error();
              };
              if (Object.defineProperty(F.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(F, []);
                } catch (w) {
                  var B = w;
                }
                Reflect.construct(l, [], F);
              } else {
                try {
                  F.call();
                } catch (w) {
                  B = w;
                }
                l.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                B = w;
              }
              (F = l()) && typeof F.catch == "function" && F.catch(function() {
              });
            }
          } catch (w) {
            if (w && B && typeof w.stack == "string")
              return [w.stack, B.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var s = c.DetermineComponentFrameRoot(), m = s[0], v = s[1];
      if (m && v) {
        var T = m.split(`
`), x = v.split(`
`);
        for (r = c = 0; c < T.length && !T[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; r < x.length && !x[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (c === T.length || r === x.length)
          for (c = T.length - 1, r = x.length - 1; 1 <= c && 0 <= r && T[c] !== x[r]; )
            r--;
        for (; 1 <= c && 0 <= r; c--, r--)
          if (T[c] !== x[r]) {
            if (c !== 1 || r !== 1)
              do
                if (c--, r--, 0 > r || T[c] !== x[r]) {
                  var V = `
` + T[c].replace(" at new ", " at ");
                  return l.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", l.displayName)), V;
                }
              while (1 <= c && 0 <= r);
            break;
          }
      }
    } finally {
      ii = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Fa(u) : "";
  }
  function Mt(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Fa(l.type);
      case 16:
        return Fa("Lazy");
      case 13:
        return l.child !== n && n !== null ? Fa("Suspense Fallback") : Fa("Suspense");
      case 19:
        return Fa("SuspenseList");
      case 0:
      case 15:
        return iu(l.type, !1);
      case 11:
        return iu(l.type.render, !1);
      case 1:
        return iu(l.type, !0);
      case 31:
        return Fa("Activity");
      default:
        return "";
    }
  }
  function Gl(l) {
    try {
      var n = "", u = null;
      do
        n += Mt(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var qi = Object.prototype.hasOwnProperty, tr = W.unstable_scheduleCallback, ve = W.unstable_cancelCallback, Bo = W.unstable_shouldYield, cu = W.unstable_requestPaint, Tl = W.unstable_now, wi = W.unstable_getCurrentPriorityLevel, lr = W.unstable_ImmediatePriority, jo = W.unstable_UserBlockingPriority, Gi = W.unstable_NormalPriority, Xi = W.unstable_LowPriority, ar = W.unstable_IdlePriority, nr = W.log, ur = W.unstable_setDisableYieldValue, Gn = null, gl = null;
  function za(l) {
    if (typeof nr == "function" && ur(l), gl && typeof gl.setStrictMode == "function")
      try {
        gl.setStrictMode(Gn, l);
      } catch {
      }
  }
  var Ml = Math.clz32 ? Math.clz32 : g, Yo = Math.log, Li = Math.LN2;
  function g(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Yo(l) / Li | 0) | 0;
  }
  var C = 256, P = 262144, le = 4194304;
  function pe(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ge(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var r = 0, s = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var v = c & 134217727;
    return v !== 0 ? (c = v & ~s, c !== 0 ? r = pe(c) : (m &= v, m !== 0 ? r = pe(m) : u || (u = v & ~l, u !== 0 && (r = pe(u))))) : (v = c & ~s, v !== 0 ? r = pe(v) : m !== 0 ? r = pe(m) : u || (u = c & ~l, u !== 0 && (r = pe(u)))), r === 0 ? 0 : n !== 0 && n !== r && (n & s) === 0 && (s = r & -r, u = n & -n, s >= u || s === 32 && (u & 4194048) !== 0) ? n : r;
  }
  function be(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function dt(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Qe() {
    var l = le;
    return le <<= 1, (le & 62914560) === 0 && (le = 4194304), l;
  }
  function Xl(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Ra(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function rd(l, n, u, c, r, s) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var v = l.entanglements, T = l.expirationTimes, x = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var V = 31 - Ml(u), F = 1 << V;
      v[V] = 0, T[V] = -1;
      var B = x[V];
      if (B !== null)
        for (x[V] = null, V = 0; V < B.length; V++) {
          var w = B[V];
          w !== null && (w.lane &= -536870913);
        }
      u &= ~F;
    }
    c !== 0 && Oc(l, c, 0), s !== 0 && r === 0 && l.tag !== 0 && (l.suspendedLanes |= s & ~(m & ~n));
  }
  function Oc(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Ml(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function ir(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Ml(u), r = 1 << c;
      r & n | l[c] & n && (l[c] |= n), u &= ~r;
    }
  }
  function ou(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Ma(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Ma(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function sd(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function C0() {
    var l = j.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : js(l.type));
  }
  function dd(l, n) {
    var u = j.p;
    try {
      return j.p = l, n();
    } finally {
      j.p = u;
    }
  }
  var ci = Math.random().toString(36).slice(2), vl = "__reactFiber$" + ci, Kt = "__reactProps$" + ci, _c = "__reactContainer$" + ci, cr = "__reactEvents$" + ci, U0 = "__reactListeners$" + ci, Hm = "__reactHandles$" + ci, Nm = "__reactResources$" + ci, qo = "__reactMarker$" + ci;
  function Qi(l) {
    delete l[vl], delete l[Kt], delete l[cr], delete l[U0], delete l[Hm];
  }
  function Dc(l) {
    var n = l[vl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[_c] || u[vl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = wh(l); l !== null; ) {
            if (u = l[vl]) return u;
            l = wh(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function zc(l) {
    if (l = l[vl] || l[_c]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function wo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(M(33));
  }
  function Rc(l) {
    var n = l[Nm];
    return n || (n = l[Nm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Al(l) {
    l[qo] = !0;
  }
  var Ca = /* @__PURE__ */ new Set(), Mc = {};
  function Ia(l, n) {
    Cc(l, n), Cc(l + "Capture", n);
  }
  function Cc(l, n) {
    for (Mc[l] = n, l = 0; l < n.length; l++)
      Ca.add(n[l]);
  }
  var or = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), fr = {}, hd = {};
  function rr(l) {
    return qi.call(hd, l) ? !0 : qi.call(fr, l) ? !1 : or.test(l) ? hd[l] = !0 : (fr[l] = !0, !1);
  }
  function oi(l, n, u) {
    if (rr(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function Go(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function fi(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function Sn(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function xm(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Bm(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var r = c.get, s = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(m) {
          u = "" + m, s.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function sr(l) {
    if (!l._valueTracker) {
      var n = xm(l) ? "checked" : "value";
      l._valueTracker = Bm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function jm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = xm(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function dr(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var H0 = /[\n"\\]/g;
  function bn(l) {
    return l.replace(
      H0,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function md(l, n, u, c, r, s, m, v) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Sn(n)) : l.value !== "" + Sn(n) && (l.value = "" + Sn(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Xo(l, m, Sn(n)) : u != null ? Xo(l, m, Sn(u)) : c != null && l.removeAttribute("value"), r == null && s != null && (l.defaultChecked = !!s), r != null && (l.checked = r && typeof r != "function" && typeof r != "symbol"), v != null && typeof v != "function" && typeof v != "symbol" && typeof v != "boolean" ? l.name = "" + Sn(v) : l.removeAttribute("name");
  }
  function yd(l, n, u, c, r, s, m, v) {
    if (s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (l.type = s), n != null || u != null) {
      if (!(s !== "submit" && s !== "reset" || n != null)) {
        sr(l);
        return;
      }
      u = u != null ? "" + Sn(u) : "", n = n != null ? "" + Sn(n) : u, v || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? r, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = v ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), sr(l);
  }
  function Xo(l, n, u) {
    n === "number" && dr(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function fu(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var r = 0; r < u.length; r++)
        n["$" + u[r]] = !0;
      for (u = 0; u < l.length; u++)
        r = n.hasOwnProperty("$" + l[u].value), l[u].selected !== r && (l[u].selected = r), r && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Sn(u), n = null, r = 0; r < l.length; r++) {
        if (l[r].value === u) {
          l[r].selected = !0, c && (l[r].defaultSelected = !0);
          return;
        }
        n !== null || l[r].disabled || (n = l[r]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function N0(l, n, u) {
    if (n != null && (n = "" + Sn(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Sn(u) : "";
  }
  function Ym(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(M(92));
        if (Xt(c)) {
          if (1 < c.length) throw Error(M(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Sn(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), sr(l);
  }
  function Uc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var hr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function qm(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || hr.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function x0(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(M(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var r in n)
        c = n[r], n.hasOwnProperty(r) && u[r] !== c && qm(l, r, c);
    } else
      for (var s in n)
        n.hasOwnProperty(s) && qm(l, s, n[s]);
  }
  function wm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zv = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Jv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vi(l) {
    return Jv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ll() {
  }
  var mr = null;
  function pd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Hc = null, ru = null;
  function Gm(l) {
    var n = zc(l);
    if (n && (l = n.stateNode)) {
      var u = l[Kt] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (md(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + bn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var r = c[Kt] || null;
                if (!r) throw Error(M(90));
                md(
                  c,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && jm(c);
          }
          break e;
        case "textarea":
          N0(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && fu(l, !!u.multiple, n, !1);
      }
    }
  }
  var Lo = !1;
  function yr(l, n, u) {
    if (Lo) return l(n, u);
    Lo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Lo = !1, (Hc !== null || ru !== null) && (vs(), Hc && (n = Hc, l = ru, ru = Hc = null, Gm(n), l)))
        for (n = 0; n < l.length; n++) Gm(l[n]);
    }
  }
  function Qo(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[Kt] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        M(231, n, typeof u)
      );
    return u;
  }
  var ul = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xm = !1;
  if (ul)
    try {
      var Nc = {};
      Object.defineProperty(Nc, "passive", {
        get: function() {
          Xm = !0;
        }
      }), window.addEventListener("test", Nc, Nc), window.removeEventListener("test", Nc, Nc);
    } catch {
      Xm = !1;
    }
  var ri = null, gd = null, vd = null;
  function B0() {
    if (vd) return vd;
    var l, n = gd, u = n.length, c, r = "value" in ri ? ri.value : ri.textContent, s = r.length;
    for (l = 0; l < u && n[l] === r[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === r[s - c]; c++) ;
    return vd = r.slice(l, 1 < c ? 1 - c : void 0);
  }
  function pr(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Sd() {
    return !0;
  }
  function Lm() {
    return !1;
  }
  function Ua(l) {
    function n(u, c, r, s, m) {
      this._reactName = u, this._targetInst = r, this.type = c, this.nativeEvent = s, this.target = m, this.currentTarget = null;
      for (var v in l)
        l.hasOwnProperty(v) && (u = l[v], this[v] = u ? u(s) : s[v]);
      return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Sd : Lm, this.isPropagationStopped = Lm, this;
    }
    return ie(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Sd);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Sd);
      },
      persist: function() {
      },
      isPersistent: Sd
    }), n;
  }
  var su = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, gr = Ua(su), Vo = ie({}, su, { view: 0, detail: 0 }), j0 = Ua(Vo), Qm, Vm, vr, bd = ie({}, Vo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Pa,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== vr && (vr && l.type === "mousemove" ? (Qm = l.screenX - vr.screenX, Vm = l.screenY - vr.screenY) : Vm = Qm = 0, vr = l), Qm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Vm;
    }
  }), Y0 = Ua(bd), Sr = ie({}, bd, { dataTransfer: 0 }), q0 = Ua(Sr), w0 = ie({}, Vo, { relatedTarget: 0 }), Ed = Ua(w0), G0 = ie({}, su, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zm = Ua(G0), X0 = ie({}, su, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), xc = Ua(X0), Bc = ie({}, su, { data: 0 }), En = Ua(Bc), Kv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Jm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, du = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function L0(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = du[l]) ? !!n[l] : !1;
  }
  function Pa() {
    return L0;
  }
  var hu = ie({}, Vo, {
    key: function(l) {
      if (l.key) {
        var n = Kv[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = pr(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Jm[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pa,
    charCode: function(l) {
      return l.type === "keypress" ? pr(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? pr(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Td = Ua(hu), Ad = ie({}, bd, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Od = Ua(Ad), mu = ie({}, Vo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pa
  }), $v = Ua(mu), Q0 = ie({}, su, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V0 = Ua(Q0), kv = ie({}, bd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Km = Ua(kv), Wv = ie({}, su, {
    newState: 0,
    oldState: 0
  }), Z0 = Ua(Wv), $m = [9, 13, 27, 32], Zo = ul && "CompositionEvent" in window, Zi = null;
  ul && "documentMode" in document && (Zi = document.documentMode);
  var km = ul && "TextEvent" in window && !Zi, Ql = ul && (!Zo || Zi && 8 < Zi && 11 >= Zi), Wm = " ", br = !1;
  function Ji(l, n) {
    switch (l) {
      case "keyup":
        return $m.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function _d(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var jc = !1;
  function J0(l, n) {
    switch (l) {
      case "compositionend":
        return _d(n);
      case "keypress":
        return n.which !== 32 ? null : (br = !0, Wm);
      case "textInput":
        return l = n.data, l === Wm && br ? null : l;
      default:
        return null;
    }
  }
  function K0(l, n) {
    if (jc)
      return l === "compositionend" || !Zo && Ji(l, n) ? (l = B0(), vd = gd = ri = null, jc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Ql && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Fv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Dd(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Fv[l.type] : n === "textarea";
  }
  function yu(l, n, u, c) {
    Hc ? ru ? ru.push(c) : ru = [c] : Hc = c, n = Hh(n, "onChange"), 0 < n.length && (u = new gr(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Jo = null, Yc = null;
  function zd(l) {
    mp(l, 0);
  }
  function pu(l) {
    var n = wo(l);
    if (jm(n)) return l;
  }
  function Rd(l, n) {
    if (l === "change") return n;
  }
  var Fm = !1;
  if (ul) {
    var Er;
    if (ul) {
      var ya = "oninput" in document;
      if (!ya) {
        var gu = document.createElement("div");
        gu.setAttribute("oninput", "return;"), ya = typeof gu.oninput == "function";
      }
      Er = ya;
    } else Er = !1;
    Fm = Er && (!document.documentMode || 9 < document.documentMode);
  }
  function Im() {
    Jo && (Jo.detachEvent("onpropertychange", Md), Yc = Jo = null);
  }
  function Md(l) {
    if (l.propertyName === "value" && pu(Yc)) {
      var n = [];
      yu(
        n,
        Yc,
        l,
        pd(l)
      ), yr(zd, n);
    }
  }
  function Pm(l, n, u) {
    l === "focusin" ? (Im(), Jo = n, Yc = u, Jo.attachEvent("onpropertychange", Md)) : l === "focusout" && Im();
  }
  function $0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return pu(Yc);
  }
  function k0(l, n) {
    if (l === "click") return pu(n);
  }
  function Ki(l, n) {
    if (l === "input" || l === "change")
      return pu(n);
  }
  function qc(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Ha = typeof Object.is == "function" ? Object.is : qc;
  function $i(l, n) {
    if (Ha(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var r = u[c];
      if (!qi.call(n, r) || !Ha(l[r], n[r]))
        return !1;
    }
    return !0;
  }
  function si(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ey(l, n) {
    var u = si(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = si(u);
    }
  }
  function ty(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ty(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function wc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = dr(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = dr(l.document);
    }
    return n;
  }
  function di(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var ly = ul && "documentMode" in document && 11 >= document.documentMode, vu = null, Tr = null, ki = null, Su = !1;
  function bu(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Su || vu == null || vu !== dr(c) || (c = vu, "selectionStart" in c && di(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), ki && $i(ki, c) || (ki = c, c = Hh(Tr, "onSelect"), 0 < c.length && (n = new gr(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = vu)));
  }
  function hi(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Wi = {
    animationend: hi("Animation", "AnimationEnd"),
    animationiteration: hi("Animation", "AnimationIteration"),
    animationstart: hi("Animation", "AnimationStart"),
    transitionrun: hi("Transition", "TransitionRun"),
    transitionstart: hi("Transition", "TransitionStart"),
    transitioncancel: hi("Transition", "TransitionCancel"),
    transitionend: hi("Transition", "TransitionEnd")
  }, Fi = {}, Ar = {};
  ul && (Ar = document.createElement("div").style, "AnimationEvent" in window || (delete Wi.animationend.animation, delete Wi.animationiteration.animation, delete Wi.animationstart.animation), "TransitionEvent" in window || delete Wi.transitionend.transition);
  function en(l) {
    if (Fi[l]) return Fi[l];
    if (!Wi[l]) return l;
    var n = Wi[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Ar)
        return Fi[l] = n[u];
    return l;
  }
  var Lt = en("animationend"), Or = en("animationiteration"), ay = en("animationstart"), ny = en("transitionrun"), Gc = en("transitionstart"), _r = en("transitioncancel"), Xn = en("transitionend"), W0 = /* @__PURE__ */ new Map(), Ln = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ln.push("scrollEnd");
  function Na(l, n) {
    W0.set(l, n), Ia(n, [l]);
  }
  var Ii = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, pa = [], Cl = 0, ga = 0;
  function tn() {
    for (var l = Cl, n = ga = Cl = 0; n < l; ) {
      var u = pa[n];
      pa[n++] = null;
      var c = pa[n];
      pa[n++] = null;
      var r = pa[n];
      pa[n++] = null;
      var s = pa[n];
      if (pa[n++] = null, c !== null && r !== null) {
        var m = c.pending;
        m === null ? r.next = r : (r.next = m.next, m.next = r), c.pending = r;
      }
      s !== 0 && Cd(u, r, s);
    }
  }
  function ln(l, n, u, c) {
    pa[Cl++] = l, pa[Cl++] = n, pa[Cl++] = u, pa[Cl++] = c, ga |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Tn(l, n, u, c) {
    return ln(l, n, u, c), Ko(l);
  }
  function aa(l, n) {
    return ln(l, null, null, n), Ko(l);
  }
  function Cd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var r = !1, s = l.return; s !== null; )
      s.childLanes |= u, c = s.alternate, c !== null && (c.childLanes |= u), s.tag === 22 && (l = s.stateNode, l === null || l._visibility & 1 || (r = !0)), l = s, s = s.return;
    return l.tag === 3 ? (s = l.stateNode, r && n !== null && (r = 31 - Ml(u), l = s.hiddenUpdates, c = l[r], c === null ? l[r] = [n] : c.push(n), n.lane = u | 536870912), s) : null;
  }
  function Ko(l) {
    if (50 < ro)
      throw ro = 0, Sh = null, Error(M(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Xc = {};
  function Eu(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xa(l, n, u, c) {
    return new Eu(l, n, u, c);
  }
  function An(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function an(l, n) {
    var u = l.alternate;
    return u === null ? (u = xa(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function F0(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Dr(l, n, u, c, r, s) {
    var m = 0;
    if (c = l, typeof l == "function") An(l) && (m = 1);
    else if (typeof l == "string")
      m = Cp(
        l,
        u,
        te.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Te:
          return l = xa(31, u, n, r), l.elementType = Te, l.lanes = s, l;
        case je:
          return Lc(u.children, r, s, n);
        case Bt:
          m = 8, r |= 24;
          break;
        case Ce:
          return l = xa(12, u, n, r | 2), l.elementType = Ce, l.lanes = s, l;
        case vt:
          return l = xa(13, u, n, r), l.elementType = vt, l.lanes = s, l;
        case xe:
          return l = xa(19, u, n, r), l.elementType = xe, l.lanes = s, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case gt:
                m = 10;
                break e;
              case Ve:
                m = 9;
                break e;
              case Ct:
                m = 11;
                break e;
              case ye:
                m = 14;
                break e;
              case at:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            M(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = xa(m, u, n, r), n.elementType = l, n.type = c, n.lanes = s, n;
  }
  function Lc(l, n, u, c) {
    return l = xa(7, l, c, n), l.lanes = u, l;
  }
  function zr(l, n, u) {
    return l = xa(6, l, null, n), l.lanes = u, l;
  }
  function Rr(l) {
    var n = xa(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Ud(l, n, u) {
    return n = xa(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var uy = /* @__PURE__ */ new WeakMap();
  function nn(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = uy.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: Gl(n)
      }, uy.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: Gl(n)
    };
  }
  var Qc = [], un = 0, Mr = null, $o = 0, jt = [], Ba = 0, Qn = null, cn = 1, ja = "";
  function Tu(l, n) {
    Qc[un++] = $o, Qc[un++] = Mr, Mr = l, $o = n;
  }
  function Cr(l, n, u) {
    jt[Ba++] = cn, jt[Ba++] = ja, jt[Ba++] = Qn, Qn = l;
    var c = cn;
    l = ja;
    var r = 32 - Ml(c) - 1;
    c &= ~(1 << r), u += 1;
    var s = 32 - Ml(n) + r;
    if (30 < s) {
      var m = r - r % 5;
      s = (c & (1 << m) - 1).toString(32), c >>= m, r -= m, cn = 1 << 32 - Ml(n) + r | u << r | c, ja = s + l;
    } else
      cn = 1 << s | u << r | c, ja = l;
  }
  function Hd(l) {
    l.return !== null && (Tu(l, 1), Cr(l, 1, 0));
  }
  function ko(l) {
    for (; l === Mr; )
      Mr = Qc[--un], Qc[un] = null, $o = Qc[--un], Qc[un] = null;
    for (; l === Qn; )
      Qn = jt[--Ba], jt[Ba] = null, ja = jt[--Ba], jt[Ba] = null, cn = jt[--Ba], jt[Ba] = null;
  }
  function iy(l, n) {
    jt[Ba++] = cn, jt[Ba++] = ja, jt[Ba++] = Qn, cn = n.id, ja = n.overflow, Qn = l;
  }
  var Sl = null, Qt = null, ot = !1, Au = null, Ya = !1, Ou = Error(M(519));
  function va(l) {
    var n = Error(
      M(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Hr(nn(n, l)), Ou;
  }
  function Wo(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[vl] = l, n[Kt] = c, u) {
      case "dialog":
        it("cancel", n), it("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        it("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < mo.length; u++)
          it(mo[u], n);
        break;
      case "source":
        it("error", n);
        break;
      case "img":
      case "image":
      case "link":
        it("error", n), it("load", n);
        break;
      case "details":
        it("toggle", n);
        break;
      case "input":
        it("invalid", n), yd(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        it("invalid", n);
        break;
      case "textarea":
        it("invalid", n), Ym(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || vp(n.textContent, u) ? (c.popover != null && (it("beforetoggle", n), it("toggle", n)), c.onScroll != null && it("scroll", n), c.onScrollEnd != null && it("scrollend", n), c.onClick != null && (n.onclick = Ll), n = !0) : n = !1, n || va(l, !0);
  }
  function Ur(l) {
    for (Sl = l.return; Sl; )
      switch (Sl.tag) {
        case 5:
        case 31:
        case 13:
          Ya = !1;
          return;
        case 27:
        case 3:
          Ya = !0;
          return;
        default:
          Sl = Sl.return;
      }
  }
  function _u(l) {
    if (l !== Sl) return !1;
    if (!ot) return Ur(l), ot = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || jh(l.type, l.memoizedProps)), u = !u), u && Qt && va(l), Ur(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(M(317));
      Qt = qh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(M(317));
      Qt = qh(l);
    } else
      n === 27 ? (n = Qt, Vu(l.type) ? (l = zf, zf = null, Qt = l) : Qt = n) : Qt = Sl ? Wl(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Vn() {
    Qt = Sl = null, ot = !1;
  }
  function Nd() {
    var l = Au;
    return l !== null && (Va === null ? Va = l : Va.push.apply(
      Va,
      l
    ), Au = null), l;
  }
  function Hr(l) {
    Au === null ? Au = [l] : Au.push(l);
  }
  var xd = O(null), Pi = null, Zn = null;
  function Du(l, n, u) {
    k(xd, n._currentValue), n._currentValue = u;
  }
  function na(l) {
    l._currentValue = xd.current, A(xd);
  }
  function Nr(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Bd(l, n, u, c) {
    var r = l.child;
    for (r !== null && (r.return = l); r !== null; ) {
      var s = r.dependencies;
      if (s !== null) {
        var m = r.child;
        s = s.firstContext;
        e: for (; s !== null; ) {
          var v = s;
          s = r;
          for (var T = 0; T < n.length; T++)
            if (v.context === n[T]) {
              s.lanes |= u, v = s.alternate, v !== null && (v.lanes |= u), Nr(
                s.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          s = v.next;
        }
      } else if (r.tag === 18) {
        if (m = r.return, m === null) throw Error(M(341));
        m.lanes |= u, s = m.alternate, s !== null && (s.lanes |= u), Nr(m, u, l), m = null;
      } else m = r.child;
      if (m !== null) m.return = r;
      else
        for (m = r; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (r = m.sibling, r !== null) {
            r.return = m.return, m = r;
            break;
          }
          m = m.return;
        }
      r = m;
    }
  }
  function on(l, n, u, c) {
    l = null;
    for (var r = n, s = !1; r !== null; ) {
      if (!s) {
        if ((r.flags & 524288) !== 0) s = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var m = r.alternate;
        if (m === null) throw Error(M(387));
        if (m = m.memoizedProps, m !== null) {
          var v = r.type;
          Ha(r.pendingProps.value, m.value) || (l !== null ? l.push(v) : l = [v]);
        }
      } else if (r === ut.current) {
        if (m = r.alternate, m === null) throw Error(M(387));
        m.memoizedState.memoizedState !== r.memoizedState.memoizedState && (l !== null ? l.push(sl) : l = [sl]);
      }
      r = r.return;
    }
    l !== null && Bd(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function ua(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Ha(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function zu(l) {
    Pi = l, Zn = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function De(l) {
    return Vc(Pi, l);
  }
  function I(l, n) {
    return Pi === null && zu(l), Vc(l, n);
  }
  function Vc(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, Zn === null) {
      if (l === null) throw Error(M(308));
      Zn = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else Zn = Zn.next = n;
    return u;
  }
  var jd = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, il = W.unstable_scheduleCallback, cy = W.unstable_NormalPriority, cl = {
    $$typeof: gt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Yd() {
    return {
      controller: new jd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Zc(l) {
    l.refCount--, l.refCount === 0 && il(cy, function() {
      l.controller.abort();
    });
  }
  var xr = null, Br = 0, ec = 0, tc = null;
  function Sa(l, n) {
    if (xr === null) {
      var u = xr = [];
      Br = 0, ec = so(), tc = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Br++, n.then(Dt, Dt), n;
  }
  function Dt() {
    if (--Br === 0 && xr !== null) {
      tc !== null && (tc.status = "fulfilled");
      var l = xr;
      xr = null, ec = 0, tc = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function qd(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        u.push(r);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var r = 0; r < u.length; r++) (0, u[r])(n);
      },
      function(r) {
        for (c.status = "rejected", c.reason = r, r = 0; r < u.length; r++)
          (0, u[r])(void 0);
      }
    ), c;
  }
  var Fo = L.S;
  L.S = function(l, n) {
    _i = Tl(), typeof n == "object" && n !== null && typeof n.then == "function" && Sa(l, n), Fo !== null && Fo(l, n);
  };
  var qa = O(null);
  function mi() {
    var l = qa.current;
    return l !== null ? l : Yt.pooledCache;
  }
  function wa(l, n) {
    n === null ? k(qa, qa.current) : k(qa, n.pool);
  }
  function wd() {
    var l = mi();
    return l === null ? null : { parent: cl._currentValue, pool: l };
  }
  var Jn = Error(M(460)), jr = Error(M(474)), lc = Error(M(542)), Io = { then: function() {
  } };
  function Yr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function oy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Ll, Ll), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, ry(l), l;
      default:
        if (typeof n.status == "string") n.then(Ll, Ll);
        else {
          if (l = Yt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(M(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "fulfilled", r.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var r = n;
                r.status = "rejected", r.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, ry(l), l;
        }
        throw nc = n, Jn;
    }
  }
  function ac(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (nc = u, Jn) : u;
    }
  }
  var nc = null;
  function fy() {
    if (nc === null) throw Error(M(459));
    var l = nc;
    return nc = null, l;
  }
  function ry(l) {
    if (l === Jn || l === lc)
      throw Error(M(483));
  }
  var uc = null, Jc = 0;
  function Po(l) {
    var n = Jc;
    return Jc += 1, uc === null && (uc = []), oy(uc, l, n);
  }
  function ef(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function qr(l, n) {
    throw n.$$typeof === $ ? Error(M(525)) : (l = Object.prototype.toString.call(n), Error(
      M(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function sy(l) {
    function n(U, z) {
      if (l) {
        var N = U.deletions;
        N === null ? (U.deletions = [z], U.flags |= 16) : N.push(z);
      }
    }
    function u(U, z) {
      if (!l) return null;
      for (; z !== null; )
        n(U, z), z = z.sibling;
      return null;
    }
    function c(U) {
      for (var z = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? z.set(U.key, U) : z.set(U.index, U), U = U.sibling;
      return z;
    }
    function r(U, z) {
      return U = an(U, z), U.index = 0, U.sibling = null, U;
    }
    function s(U, z, N) {
      return U.index = N, l ? (N = U.alternate, N !== null ? (N = N.index, N < z ? (U.flags |= 67108866, z) : N) : (U.flags |= 67108866, z)) : (U.flags |= 1048576, z);
    }
    function m(U) {
      return l && U.alternate === null && (U.flags |= 67108866), U;
    }
    function v(U, z, N, J) {
      return z === null || z.tag !== 6 ? (z = zr(N, U.mode, J), z.return = U, z) : (z = r(z, N), z.return = U, z);
    }
    function T(U, z, N, J) {
      var _e = N.type;
      return _e === je ? V(
        U,
        z,
        N.props.children,
        J,
        N.key
      ) : z !== null && (z.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === at && ac(_e) === z.type) ? (z = r(z, N.props), ef(z, N), z.return = U, z) : (z = Dr(
        N.type,
        N.key,
        N.props,
        null,
        U.mode,
        J
      ), ef(z, N), z.return = U, z);
    }
    function x(U, z, N, J) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== N.containerInfo || z.stateNode.implementation !== N.implementation ? (z = Ud(N, U.mode, J), z.return = U, z) : (z = r(z, N.children || []), z.return = U, z);
    }
    function V(U, z, N, J, _e) {
      return z === null || z.tag !== 7 ? (z = Lc(
        N,
        U.mode,
        J,
        _e
      ), z.return = U, z) : (z = r(z, N), z.return = U, z);
    }
    function F(U, z, N) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = zr(
          "" + z,
          U.mode,
          N
        ), z.return = U, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case H:
            return N = Dr(
              z.type,
              z.key,
              z.props,
              null,
              U.mode,
              N
            ), ef(N, z), N.return = U, N;
          case ue:
            return z = Ud(
              z,
              U.mode,
              N
            ), z.return = U, z;
          case at:
            return z = ac(z), F(U, z, N);
        }
        if (Xt(z) || Ot(z))
          return z = Lc(
            z,
            U.mode,
            N,
            null
          ), z.return = U, z;
        if (typeof z.then == "function")
          return F(U, Po(z), N);
        if (z.$$typeof === gt)
          return F(
            U,
            I(U, z),
            N
          );
        qr(U, z);
      }
      return null;
    }
    function B(U, z, N, J) {
      var _e = z !== null ? z.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return _e !== null ? null : v(U, z, "" + N, J);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case H:
            return N.key === _e ? T(U, z, N, J) : null;
          case ue:
            return N.key === _e ? x(U, z, N, J) : null;
          case at:
            return N = ac(N), B(U, z, N, J);
        }
        if (Xt(N) || Ot(N))
          return _e !== null ? null : V(U, z, N, J, null);
        if (typeof N.then == "function")
          return B(
            U,
            z,
            Po(N),
            J
          );
        if (N.$$typeof === gt)
          return B(
            U,
            z,
            I(U, N),
            J
          );
        qr(U, N);
      }
      return null;
    }
    function w(U, z, N, J, _e) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return U = U.get(N) || null, v(z, U, "" + J, _e);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case H:
            return U = U.get(
              J.key === null ? N : J.key
            ) || null, T(z, U, J, _e);
          case ue:
            return U = U.get(
              J.key === null ? N : J.key
            ) || null, x(z, U, J, _e);
          case at:
            return J = ac(J), w(
              U,
              z,
              N,
              J,
              _e
            );
        }
        if (Xt(J) || Ot(J))
          return U = U.get(N) || null, V(z, U, J, _e, null);
        if (typeof J.then == "function")
          return w(
            U,
            z,
            N,
            Po(J),
            _e
          );
        if (J.$$typeof === gt)
          return w(
            U,
            z,
            N,
            I(z, J),
            _e
          );
        qr(z, J);
      }
      return null;
    }
    function ge(U, z, N, J) {
      for (var _e = null, bt = null, Ee = z, Ke = z = 0, tt = null; Ee !== null && Ke < N.length; Ke++) {
        Ee.index > Ke ? (tt = Ee, Ee = null) : tt = Ee.sibling;
        var ct = B(
          U,
          Ee,
          N[Ke],
          J
        );
        if (ct === null) {
          Ee === null && (Ee = tt);
          break;
        }
        l && Ee && ct.alternate === null && n(U, Ee), z = s(ct, z, Ke), bt === null ? _e = ct : bt.sibling = ct, bt = ct, Ee = tt;
      }
      if (Ke === N.length)
        return u(U, Ee), ot && Tu(U, Ke), _e;
      if (Ee === null) {
        for (; Ke < N.length; Ke++)
          Ee = F(U, N[Ke], J), Ee !== null && (z = s(
            Ee,
            z,
            Ke
          ), bt === null ? _e = Ee : bt.sibling = Ee, bt = Ee);
        return ot && Tu(U, Ke), _e;
      }
      for (Ee = c(Ee); Ke < N.length; Ke++)
        tt = w(
          Ee,
          U,
          Ke,
          N[Ke],
          J
        ), tt !== null && (l && tt.alternate !== null && Ee.delete(
          tt.key === null ? Ke : tt.key
        ), z = s(
          tt,
          z,
          Ke
        ), bt === null ? _e = tt : bt.sibling = tt, bt = tt);
      return l && Ee.forEach(function(gc) {
        return n(U, gc);
      }), ot && Tu(U, Ke), _e;
    }
    function He(U, z, N, J) {
      if (N == null) throw Error(M(151));
      for (var _e = null, bt = null, Ee = z, Ke = z = 0, tt = null, ct = N.next(); Ee !== null && !ct.done; Ke++, ct = N.next()) {
        Ee.index > Ke ? (tt = Ee, Ee = null) : tt = Ee.sibling;
        var gc = B(U, Ee, ct.value, J);
        if (gc === null) {
          Ee === null && (Ee = tt);
          break;
        }
        l && Ee && gc.alternate === null && n(U, Ee), z = s(gc, z, Ke), bt === null ? _e = gc : bt.sibling = gc, bt = gc, Ee = tt;
      }
      if (ct.done)
        return u(U, Ee), ot && Tu(U, Ke), _e;
      if (Ee === null) {
        for (; !ct.done; Ke++, ct = N.next())
          ct = F(U, ct.value, J), ct !== null && (z = s(ct, z, Ke), bt === null ? _e = ct : bt.sibling = ct, bt = ct);
        return ot && Tu(U, Ke), _e;
      }
      for (Ee = c(Ee); !ct.done; Ke++, ct = N.next())
        ct = w(Ee, U, Ke, ct.value, J), ct !== null && (l && ct.alternate !== null && Ee.delete(ct.key === null ? Ke : ct.key), z = s(ct, z, Ke), bt === null ? _e = ct : bt.sibling = ct, bt = ct);
      return l && Ee.forEach(function(Ph) {
        return n(U, Ph);
      }), ot && Tu(U, Ke), _e;
    }
    function qt(U, z, N, J) {
      if (typeof N == "object" && N !== null && N.type === je && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case H:
            e: {
              for (var _e = N.key; z !== null; ) {
                if (z.key === _e) {
                  if (_e = N.type, _e === je) {
                    if (z.tag === 7) {
                      u(
                        U,
                        z.sibling
                      ), J = r(
                        z,
                        N.props.children
                      ), J.return = U, U = J;
                      break e;
                    }
                  } else if (z.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === at && ac(_e) === z.type) {
                    u(
                      U,
                      z.sibling
                    ), J = r(z, N.props), ef(J, N), J.return = U, U = J;
                    break e;
                  }
                  u(U, z);
                  break;
                } else n(U, z);
                z = z.sibling;
              }
              N.type === je ? (J = Lc(
                N.props.children,
                U.mode,
                J,
                N.key
              ), J.return = U, U = J) : (J = Dr(
                N.type,
                N.key,
                N.props,
                null,
                U.mode,
                J
              ), ef(J, N), J.return = U, U = J);
            }
            return m(U);
          case ue:
            e: {
              for (_e = N.key; z !== null; ) {
                if (z.key === _e)
                  if (z.tag === 4 && z.stateNode.containerInfo === N.containerInfo && z.stateNode.implementation === N.implementation) {
                    u(
                      U,
                      z.sibling
                    ), J = r(z, N.children || []), J.return = U, U = J;
                    break e;
                  } else {
                    u(U, z);
                    break;
                  }
                else n(U, z);
                z = z.sibling;
              }
              J = Ud(N, U.mode, J), J.return = U, U = J;
            }
            return m(U);
          case at:
            return N = ac(N), qt(
              U,
              z,
              N,
              J
            );
        }
        if (Xt(N))
          return ge(
            U,
            z,
            N,
            J
          );
        if (Ot(N)) {
          if (_e = Ot(N), typeof _e != "function") throw Error(M(150));
          return N = _e.call(N), He(
            U,
            z,
            N,
            J
          );
        }
        if (typeof N.then == "function")
          return qt(
            U,
            z,
            Po(N),
            J
          );
        if (N.$$typeof === gt)
          return qt(
            U,
            z,
            I(U, N),
            J
          );
        qr(U, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, z !== null && z.tag === 6 ? (u(U, z.sibling), J = r(z, N), J.return = U, U = J) : (u(U, z), J = zr(N, U.mode, J), J.return = U, U = J), m(U)) : u(U, z);
    }
    return function(U, z, N, J) {
      try {
        Jc = 0;
        var _e = qt(
          U,
          z,
          N,
          J
        );
        return uc = null, _e;
      } catch (Ee) {
        if (Ee === Jn || Ee === lc) throw Ee;
        var bt = xa(29, Ee, null, U.mode);
        return bt.lanes = J, bt.return = U, bt;
      }
    };
  }
  var Kc = sy(!0), dy = sy(!1), yi = !1;
  function Gd(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function wr(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function pi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function gi(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (St & 2) !== 0) {
      var r = c.pending;
      return r === null ? n.next = n : (n.next = r.next, r.next = n), c.pending = n, n = Ko(l), Cd(l, null, u), n;
    }
    return ln(l, c, n, u), Ko(l);
  }
  function Ru(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ir(l, u);
    }
  }
  function tf(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var r = null, s = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          s === null ? r = s = m : s = s.next = m, u = u.next;
        } while (u !== null);
        s === null ? r = s = n : s = s.next = n;
      } else r = s = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: s,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var Xd = !1;
  function Gr() {
    if (Xd) {
      var l = tc;
      if (l !== null) throw l;
    }
  }
  function ic(l, n, u, c) {
    Xd = !1;
    var r = l.updateQueue;
    yi = !1;
    var s = r.firstBaseUpdate, m = r.lastBaseUpdate, v = r.shared.pending;
    if (v !== null) {
      r.shared.pending = null;
      var T = v, x = T.next;
      T.next = null, m === null ? s = x : m.next = x, m = T;
      var V = l.alternate;
      V !== null && (V = V.updateQueue, v = V.lastBaseUpdate, v !== m && (v === null ? V.firstBaseUpdate = x : v.next = x, V.lastBaseUpdate = T));
    }
    if (s !== null) {
      var F = r.baseState;
      m = 0, V = x = T = null, v = s;
      do {
        var B = v.lane & -536870913, w = B !== v.lane;
        if (w ? (ft & B) === B : (c & B) === B) {
          B !== 0 && B === ec && (Xd = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: null,
            next: null
          });
          e: {
            var ge = l, He = v;
            B = n;
            var qt = u;
            switch (He.tag) {
              case 1:
                if (ge = He.payload, typeof ge == "function") {
                  F = ge.call(qt, F, B);
                  break e;
                }
                F = ge;
                break e;
              case 3:
                ge.flags = ge.flags & -65537 | 128;
              case 0:
                if (ge = He.payload, B = typeof ge == "function" ? ge.call(qt, F, B) : ge, B == null) break e;
                F = ie({}, F, B);
                break e;
              case 2:
                yi = !0;
            }
          }
          B = v.callback, B !== null && (l.flags |= 64, w && (l.flags |= 8192), w = r.callbacks, w === null ? r.callbacks = [B] : w.push(B));
        } else
          w = {
            lane: B,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          }, V === null ? (x = V = w, T = F) : V = V.next = w, m |= B;
        if (v = v.next, v === null) {
          if (v = r.shared.pending, v === null)
            break;
          w = v, v = w.next, w.next = null, r.lastBaseUpdate = w, r.shared.pending = null;
        }
      } while (!0);
      V === null && (T = F), r.baseState = T, r.firstBaseUpdate = x, r.lastBaseUpdate = V, s === null && (r.shared.lanes = 0), Cn |= m, l.lanes = m, l.memoizedState = F;
    }
  }
  function $c(l, n) {
    if (typeof l != "function")
      throw Error(M(191, l));
    l.call(n);
  }
  function Ld(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        $c(u[l], n);
  }
  var On = O(null), Vl = O(0);
  function Xr(l, n) {
    l = Xu, k(Vl, l), k(On, n), Xu = l | n.baseLanes;
  }
  function hy() {
    k(Vl, Xu), k(On, On.current);
  }
  function Lr() {
    Xu = Vl.current, A(On), A(Vl);
  }
  var ia = O(null), Ga = null;
  function vi(l) {
    var n = l.alternate;
    k(tl, tl.current & 1), k(ia, l), Ga === null && (n === null || On.current !== null || n.memoizedState !== null) && (Ga = l);
  }
  function Qr(l) {
    k(tl, tl.current), k(ia, l), Ga === null && (Ga = l);
  }
  function Vr(l) {
    l.tag === 22 ? (k(tl, tl.current), k(ia, l), Ga === null && (Ga = l)) : Mu();
  }
  function Mu() {
    k(tl, tl.current), k(ia, ia.current);
  }
  function ca(l) {
    A(ia), Ga === l && (Ga = null), A(tl);
  }
  var tl = O(0);
  function kc(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Op(u) || Hn(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Kn = 0, Je = null, Ut = null, ol = null, Zr = !1, Si = !1, cc = !1, lf = 0, af = 0, Wc = null, my = 0;
  function ll() {
    throw Error(M(321));
  }
  function Qd(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Ha(l[u], n[u])) return !1;
    return !0;
  }
  function bi(l, n, u, c, r, s) {
    return Kn = s, Je = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, L.H = l === null || l.memoizedState === null ? ng : Cy, cc = !1, s = u(c, r), cc = !1, Si && (s = Zd(
      n,
      u,
      c,
      r
    )), Vd(l), s;
  }
  function Vd(l) {
    L.H = rf;
    var n = Ut !== null && Ut.next !== null;
    if (Kn = 0, ol = Ut = Je = null, Zr = !1, af = 0, Wc = null, n) throw Error(M(300));
    l === null || ml || (l = l.dependencies, l !== null && ua(l) && (ml = !0));
  }
  function Zd(l, n, u, c) {
    Je = l;
    var r = 0;
    do {
      if (Si && (Wc = null), af = 0, Si = !1, 25 <= r) throw Error(M(301));
      if (r += 1, ol = Ut = null, l.updateQueue != null) {
        var s = l.updateQueue;
        s.lastEffect = null, s.events = null, s.stores = null, s.memoCache != null && (s.memoCache.index = 0);
      }
      L.H = Uy, s = n(u, c);
    } while (Si);
    return s;
  }
  function Iv() {
    var l = L.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? nf(n) : n, l = l.useState()[0], (Ut !== null ? Ut.memoizedState : null) !== l && (Je.flags |= 1024), n;
  }
  function yy() {
    var l = lf !== 0;
    return lf = 0, l;
  }
  function Jd(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Fc(l) {
    if (Zr) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Zr = !1;
    }
    Kn = 0, ol = Ut = Je = null, Si = !1, af = lf = 0, Wc = null;
  }
  function Zl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ol === null ? Je.memoizedState = ol = l : ol = ol.next = l, ol;
  }
  function Wt() {
    if (Ut === null) {
      var l = Je.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Ut.next;
    var n = ol === null ? Je.memoizedState : ol.next;
    if (n !== null)
      ol = n, Ut = l;
    else {
      if (l === null)
        throw Je.alternate === null ? Error(M(467)) : Error(M(310));
      Ut = l, l = {
        memoizedState: Ut.memoizedState,
        baseState: Ut.baseState,
        baseQueue: Ut.baseQueue,
        queue: Ut.queue,
        next: null
      }, ol === null ? Je.memoizedState = ol = l : ol = ol.next = l;
    }
    return ol;
  }
  function Jr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function nf(l) {
    var n = af;
    return af += 1, Wc === null && (Wc = []), l = oy(Wc, l, n), n = Je, (ol === null ? n.memoizedState : ol.next) === null && (n = n.alternate, L.H = n === null || n.memoizedState === null ? ng : Cy), l;
  }
  function uf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return nf(l);
      if (l.$$typeof === gt) return De(l);
    }
    throw Error(M(438, String(l)));
  }
  function Kr(l) {
    var n = null, u = Je.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Je.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Jr(), Je.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = Gt;
    return n.index++, u;
  }
  function Cu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function $r(l) {
    var n = Wt();
    return Ei(n, Ut, l);
  }
  function Ei(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(M(311));
    c.lastRenderedReducer = u;
    var r = l.baseQueue, s = c.pending;
    if (s !== null) {
      if (r !== null) {
        var m = r.next;
        r.next = s.next, s.next = m;
      }
      n.baseQueue = r = s, c.pending = null;
    }
    if (s = l.baseState, r === null) l.memoizedState = s;
    else {
      n = r.next;
      var v = m = null, T = null, x = n, V = !1;
      do {
        var F = x.lane & -536870913;
        if (F !== x.lane ? (ft & F) === F : (Kn & F) === F) {
          var B = x.revertLane;
          if (B === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), F === ec && (V = !0);
          else if ((Kn & B) === B) {
            x = x.next, B === ec && (V = !0);
            continue;
          } else
            F = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, T === null ? (v = T = F, m = s) : T = T.next = F, Je.lanes |= B, Cn |= B;
          F = x.action, cc && u(s, F), s = x.hasEagerState ? x.eagerState : u(s, F);
        } else
          B = {
            lane: F,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, T === null ? (v = T = B, m = s) : T = T.next = B, Je.lanes |= F, Cn |= F;
        x = x.next;
      } while (x !== null && x !== n);
      if (T === null ? m = s : T.next = v, !Ha(s, l.memoizedState) && (ml = !0, V && (u = tc, u !== null)))
        throw u;
      l.memoizedState = s, l.baseState = m, l.baseQueue = T, c.lastRenderedState = s;
    }
    return r === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Kd(l) {
    var n = Wt(), u = n.queue;
    if (u === null) throw Error(M(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, r = u.pending, s = n.memoizedState;
    if (r !== null) {
      u.pending = null;
      var m = r = r.next;
      do
        s = l(s, m.action), m = m.next;
      while (m !== r);
      Ha(s, n.memoizedState) || (ml = !0), n.memoizedState = s, n.baseQueue === null && (n.baseState = s), u.lastRenderedState = s;
    }
    return [s, c];
  }
  function py(l, n, u) {
    var c = Je, r = Wt(), s = ot;
    if (s) {
      if (u === void 0) throw Error(M(407));
      u = u();
    } else u = n();
    var m = !Ha(
      (Ut || r).memoizedState,
      u
    );
    if (m && (r.memoizedState = u, ml = !0), r = r.queue, Pr(vy.bind(null, c, r, l), [
      l
    ]), r.getSnapshot !== n || m || ol !== null && ol.memoizedState.tag & 1) {
      if (c.flags |= 2048, Ic(
        9,
        { destroy: void 0 },
        kr.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), Yt === null) throw Error(M(349));
      s || (Kn & 127) !== 0 || gy(c, n, u);
    }
    return u;
  }
  function gy(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Je.updateQueue, n === null ? (n = Jr(), Je.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function kr(l, n, u, c) {
    n.value = u, n.getSnapshot = c, $d(n) && kd(l);
  }
  function vy(l, n, u) {
    return u(function() {
      $d(n) && kd(l);
    });
  }
  function $d(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Ha(l, u);
    } catch {
      return !0;
    }
  }
  function kd(l) {
    var n = aa(l, 2);
    n !== null && Ja(n, l, 2);
  }
  function Wr(l) {
    var n = Zl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), cc) {
        za(!0);
        try {
          u();
        } finally {
          za(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Cu,
      lastRenderedState: l
    }, n;
  }
  function I0(l, n, u, c) {
    return l.baseState = u, Ei(
      l,
      Ut,
      typeof c == "function" ? c : Cu
    );
  }
  function Jl(l, n, u, c, r) {
    if (Ti(l)) throw Error(M(485));
    if (l = n.action, l !== null) {
      var s = {
        payload: r,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          s.listeners.push(m);
        }
      };
      L.T !== null ? u(!0) : s.isTransition = !1, c(s), u = n.pending, u === null ? (s.next = n.pending = s, Sy(n, s)) : (s.next = u.next, n.pending = u.next = s);
    }
  }
  function Sy(l, n) {
    var u = n.action, c = n.payload, r = l.state;
    if (n.isTransition) {
      var s = L.T, m = {};
      L.T = m;
      try {
        var v = u(r, c), T = L.S;
        T !== null && T(m, v), by(l, n, v);
      } catch (x) {
        Wd(l, n, x);
      } finally {
        s !== null && m.types !== null && (s.types = m.types), L.T = s;
      }
    } else
      try {
        s = u(r, c), by(l, n, s);
      } catch (x) {
        Wd(l, n, x);
      }
  }
  function by(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Ey(l, n, c);
      },
      function(c) {
        return Wd(l, n, c);
      }
    ) : Ey(l, n, u);
  }
  function Ey(l, n, u) {
    n.status = "fulfilled", n.value = u, cf(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Sy(l, u)));
  }
  function Wd(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, cf(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function cf(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Ty(l, n) {
    return n;
  }
  function Fr(l, n) {
    if (ot) {
      var u = Yt.formState;
      if (u !== null) {
        e: {
          var c = Je;
          if (ot) {
            if (Qt) {
              t: {
                for (var r = Qt, s = Ya; r.nodeType !== 8; ) {
                  if (!s) {
                    r = null;
                    break t;
                  }
                  if (r = Wl(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break t;
                  }
                }
                s = r.data, r = s === "F!" || s === "F" ? r : null;
              }
              if (r) {
                Qt = Wl(
                  r.nextSibling
                ), c = r.data === "F!";
                break e;
              }
            }
            va(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = Zl(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ty,
      lastRenderedState: n
    }, u.queue = c, u = Ry.bind(
      null,
      Je,
      c
    ), c.dispatch = u, c = Wr(!1), s = eo.bind(
      null,
      Je,
      !1,
      c.queue
    ), c = Zl(), r = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = r, u = Jl.bind(
      null,
      Je,
      r,
      s,
      u
    ), r.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Ay(l) {
    var n = Wt();
    return P0(n, Ut, l);
  }
  function P0(l, n, u) {
    if (n = Ei(
      l,
      n,
      Ty
    )[0], l = $r(Cu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = nf(n);
      } catch (m) {
        throw m === Jn ? lc : m;
      }
    else c = n;
    n = Wt();
    var r = n.queue, s = r.dispatch;
    return u !== n.memoizedState && (Je.flags |= 2048, Ic(
      9,
      { destroy: void 0 },
      Fd.bind(null, r, u),
      null
    )), [c, s, l];
  }
  function Fd(l, n) {
    l.action = n;
  }
  function Id(l) {
    var n = Wt(), u = Ut;
    if (u !== null)
      return P0(n, u, l);
    Wt(), n = n.memoizedState, u = Wt();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function Ic(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Je.updateQueue, n === null && (n = Jr(), Je.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function Oy() {
    return Wt().memoizedState;
  }
  function Ir(l, n, u, c) {
    var r = Zl();
    Je.flags |= l, r.memoizedState = Ic(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function of(l, n, u, c) {
    var r = Wt();
    c = c === void 0 ? null : c;
    var s = r.memoizedState.inst;
    Ut !== null && c !== null && Qd(c, Ut.memoizedState.deps) ? r.memoizedState = Ic(n, s, u, c) : (Je.flags |= l, r.memoizedState = Ic(
      1 | n,
      s,
      u,
      c
    ));
  }
  function Pd(l, n) {
    Ir(8390656, 8, l, n);
  }
  function Pr(l, n) {
    of(2048, 8, l, n);
  }
  function eg(l) {
    Je.flags |= 4;
    var n = Je.updateQueue;
    if (n === null)
      n = Jr(), Je.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function eh(l) {
    var n = Wt().memoizedState;
    return eg({ ref: n, nextImpl: l }), function() {
      if ((St & 2) !== 0) throw Error(M(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function es(l, n) {
    return of(4, 2, l, n);
  }
  function th(l, n) {
    return of(4, 4, l, n);
  }
  function _y(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function lh(l, n, u) {
    u = u != null ? u.concat([l]) : null, of(4, 4, _y.bind(null, n, l), u);
  }
  function ah() {
  }
  function Uu(l, n) {
    var u = Wt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Qd(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function nh(l, n) {
    var u = Wt();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Qd(n, c[1]))
      return c[0];
    if (c = l(), cc) {
      za(!0);
      try {
        l();
      } finally {
        za(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Dy(l, n, u) {
    return u === void 0 || (Kn & 1073741824) !== 0 && (ft & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = np(), Je.lanes |= l, Cn |= l, u);
  }
  function uh(l, n, u, c) {
    return Ha(u, n) ? u : On.current !== null ? (l = Dy(l, u, c), Ha(l, n) || (ml = !0), l) : (Kn & 42) === 0 || (Kn & 1073741824) !== 0 && (ft & 261930) === 0 ? (ml = !0, l.memoizedState = u) : (l = np(), Je.lanes |= l, Cn |= l, n);
  }
  function Hu(l, n, u, c, r) {
    var s = j.p;
    j.p = s !== 0 && 8 > s ? s : 8;
    var m = L.T, v = {};
    L.T = v, eo(l, !1, n, u);
    try {
      var T = r(), x = L.S;
      if (x !== null && x(v, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var V = qd(
          T,
          c
        );
        Pc(
          l,
          n,
          V,
          Oa(l)
        );
      } else
        Pc(
          l,
          n,
          c,
          Oa(l)
        );
    } catch (F) {
      Pc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: F },
        Oa()
      );
    } finally {
      j.p = s, m !== null && v.types !== null && (m.types = v.types), L.T = m;
    }
  }
  function zy() {
  }
  function ih(l, n, u, c) {
    if (l.tag !== 5) throw Error(M(476));
    var r = ts(l).queue;
    Hu(
      l,
      r,
      n,
      ee,
      u === null ? zy : function() {
        return ff(l), u(c);
      }
    );
  }
  function ts(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ee,
      baseState: ee,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cu,
        lastRenderedState: ee
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Cu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function ff(l) {
    var n = ts(l);
    n.next === null && (n = l.alternate.memoizedState), Pc(
      l,
      n.next.queue,
      {},
      Oa()
    );
  }
  function Ht() {
    return De(sl);
  }
  function tg() {
    return Wt().memoizedState;
  }
  function lg() {
    return Wt().memoizedState;
  }
  function ag(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = Oa();
          l = pi(u);
          var c = gi(n, l, u);
          c !== null && (Ja(c, n, u), Ru(c, n, u)), n = { cache: Yd() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Nu(l, n, u) {
    var c = Oa();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ti(l) ? My(n, u) : (u = Tn(l, n, u, c), u !== null && (Ja(u, l, c), ch(u, n, c)));
  }
  function Ry(l, n, u) {
    var c = Oa();
    Pc(l, n, u, c);
  }
  function Pc(l, n, u, c) {
    var r = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ti(l)) My(n, r);
    else {
      var s = l.alternate;
      if (l.lanes === 0 && (s === null || s.lanes === 0) && (s = n.lastRenderedReducer, s !== null))
        try {
          var m = n.lastRenderedState, v = s(m, u);
          if (r.hasEagerState = !0, r.eagerState = v, Ha(v, m))
            return ln(l, n, r, 0), Yt === null && tn(), !1;
        } catch {
        }
      if (u = Tn(l, n, r, c), u !== null)
        return Ja(u, l, c), ch(u, n, c), !0;
    }
    return !1;
  }
  function eo(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: so(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ti(l)) {
      if (n) throw Error(M(479));
    } else
      n = Tn(
        l,
        u,
        c,
        2
      ), n !== null && Ja(n, l, 2);
  }
  function Ti(l) {
    var n = l.alternate;
    return l === Je || n !== null && n === Je;
  }
  function My(l, n) {
    Si = Zr = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function ch(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, ir(l, u);
    }
  }
  var rf = {
    readContext: De,
    use: uf,
    useCallback: ll,
    useContext: ll,
    useEffect: ll,
    useImperativeHandle: ll,
    useLayoutEffect: ll,
    useInsertionEffect: ll,
    useMemo: ll,
    useReducer: ll,
    useRef: ll,
    useState: ll,
    useDebugValue: ll,
    useDeferredValue: ll,
    useTransition: ll,
    useSyncExternalStore: ll,
    useId: ll,
    useHostTransitionStatus: ll,
    useFormState: ll,
    useActionState: ll,
    useOptimistic: ll,
    useMemoCache: ll,
    useCacheRefresh: ll
  };
  rf.useEffectEvent = ll;
  var ng = {
    readContext: De,
    use: uf,
    useCallback: function(l, n) {
      return Zl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: De,
    useEffect: Pd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Ir(
        4194308,
        4,
        _y.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Ir(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Ir(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = Zl();
      n = n === void 0 ? null : n;
      var c = l();
      if (cc) {
        za(!0);
        try {
          l();
        } finally {
          za(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = Zl();
      if (u !== void 0) {
        var r = u(n);
        if (cc) {
          za(!0);
          try {
            u(n);
          } finally {
            za(!1);
          }
        }
      } else r = n;
      return c.memoizedState = c.baseState = r, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: r
      }, c.queue = l, l = l.dispatch = Nu.bind(
        null,
        Je,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = Zl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Wr(l);
      var n = l.queue, u = Ry.bind(null, Je, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: ah,
    useDeferredValue: function(l, n) {
      var u = Zl();
      return Dy(u, l, n);
    },
    useTransition: function() {
      var l = Wr(!1);
      return l = Hu.bind(
        null,
        Je,
        l.queue,
        !0,
        !1
      ), Zl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Je, r = Zl();
      if (ot) {
        if (u === void 0)
          throw Error(M(407));
        u = u();
      } else {
        if (u = n(), Yt === null)
          throw Error(M(349));
        (ft & 127) !== 0 || gy(c, n, u);
      }
      r.memoizedState = u;
      var s = { value: u, getSnapshot: n };
      return r.queue = s, Pd(vy.bind(null, c, s, l), [
        l
      ]), c.flags |= 2048, Ic(
        9,
        { destroy: void 0 },
        kr.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Zl(), n = Yt.identifierPrefix;
      if (ot) {
        var u = ja, c = cn;
        u = (c & ~(1 << 32 - Ml(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = lf++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = my++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ht,
    useFormState: Fr,
    useActionState: Fr,
    useOptimistic: function(l) {
      var n = Zl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = eo.bind(
        null,
        Je,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Kr,
    useCacheRefresh: function() {
      return Zl().memoizedState = ag.bind(
        null,
        Je
      );
    },
    useEffectEvent: function(l) {
      var n = Zl(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((St & 2) !== 0)
          throw Error(M(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Cy = {
    readContext: De,
    use: uf,
    useCallback: Uu,
    useContext: De,
    useEffect: Pr,
    useImperativeHandle: lh,
    useInsertionEffect: es,
    useLayoutEffect: th,
    useMemo: nh,
    useReducer: $r,
    useRef: Oy,
    useState: function() {
      return $r(Cu);
    },
    useDebugValue: ah,
    useDeferredValue: function(l, n) {
      var u = Wt();
      return uh(
        u,
        Ut.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = $r(Cu)[0], n = Wt().memoizedState;
      return [
        typeof l == "boolean" ? l : nf(l),
        n
      ];
    },
    useSyncExternalStore: py,
    useId: tg,
    useHostTransitionStatus: Ht,
    useFormState: Ay,
    useActionState: Ay,
    useOptimistic: function(l, n) {
      var u = Wt();
      return I0(u, Ut, l, n);
    },
    useMemoCache: Kr,
    useCacheRefresh: lg
  };
  Cy.useEffectEvent = eh;
  var Uy = {
    readContext: De,
    use: uf,
    useCallback: Uu,
    useContext: De,
    useEffect: Pr,
    useImperativeHandle: lh,
    useInsertionEffect: es,
    useLayoutEffect: th,
    useMemo: nh,
    useReducer: Kd,
    useRef: Oy,
    useState: function() {
      return Kd(Cu);
    },
    useDebugValue: ah,
    useDeferredValue: function(l, n) {
      var u = Wt();
      return Ut === null ? Dy(u, l, n) : uh(
        u,
        Ut.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Kd(Cu)[0], n = Wt().memoizedState;
      return [
        typeof l == "boolean" ? l : nf(l),
        n
      ];
    },
    useSyncExternalStore: py,
    useId: tg,
    useHostTransitionStatus: Ht,
    useFormState: Id,
    useActionState: Id,
    useOptimistic: function(l, n) {
      var u = Wt();
      return Ut !== null ? I0(u, Ut, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Kr,
    useCacheRefresh: lg
  };
  Uy.useEffectEvent = eh;
  function Hy(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : ie({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var to = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = Oa(), r = pi(c);
      r.payload = n, u != null && (r.callback = u), n = gi(l, r, c), n !== null && (Ja(n, l, c), Ru(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = Oa(), r = pi(c);
      r.tag = 1, r.payload = n, u != null && (r.callback = u), n = gi(l, r, c), n !== null && (Ja(n, l, c), Ru(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = Oa(), c = pi(u);
      c.tag = 2, n != null && (c.callback = n), n = gi(l, c, u), n !== null && (Ja(n, l, u), Ru(n, l, u));
    }
  };
  function $n(l, n, u, c, r, s, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, s, m) : n.prototype && n.prototype.isPureReactComponent ? !$i(u, c) || !$i(r, s) : !0;
  }
  function Ny(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && to.enqueueReplaceState(n, n.state, null);
  }
  function lo(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ie({}, u));
      for (var r in l)
        u[r] === void 0 && (u[r] = l[r]);
    }
    return u;
  }
  function xy(l) {
    Ii(l);
  }
  function oh(l) {
    console.error(l);
  }
  function By(l) {
    Ii(l);
  }
  function sf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function fh(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function df(l, n, u) {
    return u = pi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      sf(l, n);
    }, u;
  }
  function ug(l) {
    return l = pi(l), l.tag = 3, l;
  }
  function jy(l, n, u, c) {
    var r = u.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = c.value;
      l.payload = function() {
        return r(s);
      }, l.callback = function() {
        fh(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      fh(n, u, c), typeof r != "function" && (Qu === null ? Qu = /* @__PURE__ */ new Set([this]) : Qu.add(this));
      var v = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: v !== null ? v : ""
      });
    });
  }
  function ig(l, n, u, c, r) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && on(
        n,
        u,
        r,
        !0
      ), u = ia.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Ga === null ? Eh() : u.alternate === null && Ft === 0 && (Ft = 3), u.flags &= -257, u.flags |= 65536, u.lanes = r, c === Io ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), Oh(l, c, r)), !1;
          case 22:
            return u.flags |= 65536, c === Io ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), Oh(l, c, r)), !1;
        }
        throw Error(M(435, u.tag));
      }
      return Oh(l, c, r), Eh(), !1;
    }
    if (ot)
      return n = ia.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = r, c !== Ou && (l = Error(M(422), { cause: c }), Hr(nn(l, u)))) : (c !== Ou && (n = Error(M(423), {
        cause: c
      }), Hr(
        nn(n, u)
      )), l = l.current.alternate, l.flags |= 65536, r &= -r, l.lanes |= r, c = nn(c, u), r = df(
        l.stateNode,
        c,
        r
      ), tf(l, r), Ft !== 4 && (Ft = 2)), !1;
    var s = Error(M(520), { cause: c });
    if (s = nn(s, u), fl === null ? fl = [s] : fl.push(s), Ft !== 4 && (Ft = 2), n === null) return !0;
    c = nn(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = r & -r, u.lanes |= l, l = df(u.stateNode, c, l), tf(u, l), !1;
        case 1:
          if (n = u.type, s = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || s !== null && typeof s.componentDidCatch == "function" && (Qu === null || !Qu.has(s))))
            return u.flags |= 65536, r &= -r, u.lanes |= r, r = ug(r), jy(
              r,
              l,
              u,
              c
            ), tf(u, r), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Yy = Error(M(461)), ml = !1;
  function Ul(l, n, u, c) {
    n.child = l === null ? dy(n, null, u, c) : Kc(
      n,
      l.child,
      u,
      c
    );
  }
  function xu(l, n, u, c, r) {
    u = u.render;
    var s = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var v in c)
        v !== "ref" && (m[v] = c[v]);
    } else m = c;
    return zu(n), c = bi(
      l,
      n,
      u,
      m,
      s,
      r
    ), v = yy(), l !== null && !ml ? (Jd(l, n, r), Bu(l, n, r)) : (ot && v && Hd(n), n.flags |= 1, Ul(l, n, c, r), n.child);
  }
  function qy(l, n, u, c, r) {
    if (l === null) {
      var s = u.type;
      return typeof s == "function" && !An(s) && s.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = s, wy(
        l,
        n,
        s,
        c,
        r
      )) : (l = Dr(
        u.type,
        null,
        c,
        n,
        n.mode,
        r
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (s = l.child, !ao(l, r)) {
      var m = s.memoizedProps;
      if (u = u.compare, u = u !== null ? u : $i, u(m, c) && l.ref === n.ref)
        return Bu(l, n, r);
    }
    return n.flags |= 1, l = an(s, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function wy(l, n, u, c, r) {
    if (l !== null) {
      var s = l.memoizedProps;
      if ($i(s, c) && l.ref === n.ref)
        if (ml = !1, n.pendingProps = c = s, ao(l, r))
          (l.flags & 131072) !== 0 && (ml = !0);
        else
          return n.lanes = l.lanes, Bu(l, n, r);
    }
    return _n(
      l,
      n,
      u,
      c,
      r
    );
  }
  function Gy(l, n, u, c) {
    var r = c.children, s = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (s = s !== null ? s.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, r = 0; c !== null; )
            r = r | c.lanes | c.childLanes, c = c.sibling;
          c = r & ~s;
        } else c = 0, n.child = null;
        return as(
          l,
          n,
          s,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && wa(
          n,
          s !== null ? s.cachePool : null
        ), s !== null ? Xr(n, s) : hy(), Vr(n);
      else
        return c = n.lanes = 536870912, as(
          l,
          n,
          s !== null ? s.baseLanes | u : u,
          u,
          c
        );
    } else
      s !== null ? (wa(n, s.cachePool), Xr(n, s), Mu(), n.memoizedState = null) : (l !== null && wa(n, null), hy(), Mu());
    return Ul(l, n, r, u), n.child;
  }
  function ls(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function as(l, n, u, c, r) {
    var s = mi();
    return s = s === null ? null : { parent: cl._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && wa(n, null), hy(), Vr(n), l !== null && on(l, n, c, !0), n.childLanes = r, null;
  }
  function Kl(l, n) {
    return n = Ai(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Xy(l, n, u) {
    return Kc(n, l.child, null, u), l = Kl(n, n.pendingProps), l.flags |= 2, ca(n), n.memoizedState = null, l;
  }
  function Xa(l, n, u) {
    var c = n.pendingProps, r = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (ot) {
        if (c.mode === "hidden")
          return l = Kl(n, c), n.lanes = 536870912, ls(null, l);
        if (Qr(n), (l = Qt) ? (l = ke(
          l,
          Ya
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Qn !== null ? { id: cn, overflow: ja } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Rr(l), u.return = n, n.child = u, Sl = n, Qt = null)) : l = null, l === null) throw va(n);
        return n.lanes = 536870912, null;
      }
      return Kl(n, c);
    }
    var s = l.memoizedState;
    if (s !== null) {
      var m = s.dehydrated;
      if (Qr(n), r)
        if (n.flags & 256)
          n.flags &= -257, n = Xy(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(M(558));
      else if (ml || on(l, n, u, !1), r = (u & l.childLanes) !== 0, ml || r) {
        if (c = Yt, c !== null && (m = ou(c, u), m !== 0 && m !== s.retryLane))
          throw s.retryLane = m, aa(l, m), Ja(c, l, m), Yy;
        Eh(), n = Xy(
          l,
          n,
          u
        );
      } else
        l = s.treeContext, Qt = Wl(m.nextSibling), Sl = n, ot = !0, Au = null, Ya = !1, l !== null && iy(n, l), n = Kl(n, c), n.flags |= 4096;
      return n;
    }
    return l = an(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function ns(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(M(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function _n(l, n, u, c, r) {
    return zu(n), u = bi(
      l,
      n,
      u,
      c,
      void 0,
      r
    ), c = yy(), l !== null && !ml ? (Jd(l, n, r), Bu(l, n, r)) : (ot && c && Hd(n), n.flags |= 1, Ul(l, n, u, r), n.child);
  }
  function Ly(l, n, u, c, r, s) {
    return zu(n), n.updateQueue = null, u = Zd(
      n,
      c,
      u,
      r
    ), Vd(l), c = yy(), l !== null && !ml ? (Jd(l, n, s), Bu(l, n, s)) : (ot && c && Hd(n), n.flags |= 1, Ul(l, n, u, s), n.child);
  }
  function oc(l, n, u, c, r) {
    if (zu(n), n.stateNode === null) {
      var s = Xc, m = u.contextType;
      typeof m == "object" && m !== null && (s = De(m)), s = new u(c, s), n.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, s.updater = to, n.stateNode = s, s._reactInternals = n, s = n.stateNode, s.props = c, s.state = n.memoizedState, s.refs = {}, Gd(n), m = u.contextType, s.context = typeof m == "object" && m !== null ? De(m) : Xc, s.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (Hy(
        n,
        u,
        m,
        c
      ), s.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (m = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), m !== s.state && to.enqueueReplaceState(s, s.state, null), ic(n, c, s, r), Gr(), s.state = n.memoizedState), typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      s = n.stateNode;
      var v = n.memoizedProps, T = lo(u, v);
      s.props = T;
      var x = s.context, V = u.contextType;
      m = Xc, typeof V == "object" && V !== null && (m = De(V));
      var F = u.getDerivedStateFromProps;
      V = typeof F == "function" || typeof s.getSnapshotBeforeUpdate == "function", v = n.pendingProps !== v, V || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (v || x !== m) && Ny(
        n,
        s,
        c,
        m
      ), yi = !1;
      var B = n.memoizedState;
      s.state = B, ic(n, c, s, r), Gr(), x = n.memoizedState, v || B !== x || yi ? (typeof F == "function" && (Hy(
        n,
        u,
        F,
        c
      ), x = n.memoizedState), (T = yi || $n(
        n,
        u,
        T,
        c,
        B,
        x,
        m
      )) ? (V || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = x), s.props = c, s.state = x, s.context = m, c = T) : (typeof s.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      s = n.stateNode, wr(l, n), m = n.memoizedProps, V = lo(u, m), s.props = V, F = n.pendingProps, B = s.context, x = u.contextType, T = Xc, typeof x == "object" && x !== null && (T = De(x)), v = u.getDerivedStateFromProps, (x = typeof v == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (m !== F || B !== T) && Ny(
        n,
        s,
        c,
        T
      ), yi = !1, B = n.memoizedState, s.state = B, ic(n, c, s, r), Gr();
      var w = n.memoizedState;
      m !== F || B !== w || yi || l !== null && l.dependencies !== null && ua(l.dependencies) ? (typeof v == "function" && (Hy(
        n,
        u,
        v,
        c
      ), w = n.memoizedState), (V = yi || $n(
        n,
        u,
        V,
        c,
        B,
        w,
        T
      ) || l !== null && l.dependencies !== null && ua(l.dependencies)) ? (x || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(c, w, T), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(
        c,
        w,
        T
      )), typeof s.componentDidUpdate == "function" && (n.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = w), s.props = c, s.state = w, s.context = T, c = V) : (typeof s.componentDidUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return s = c, ns(l, n), c = (n.flags & 128) !== 0, s || c ? (s = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : s.render(), n.flags |= 1, l !== null && c ? (n.child = Kc(
      n,
      l.child,
      null,
      r
    ), n.child = Kc(
      n,
      null,
      u,
      r
    )) : Ul(l, n, u, r), n.memoizedState = s.state, l = n.child) : l = Bu(
      l,
      n,
      r
    ), l;
  }
  function Qy(l, n, u, c) {
    return Vn(), n.flags |= 256, Ul(l, n, u, c), n.child;
  }
  var Dn = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function us(l) {
    return { baseLanes: l, cachePool: wd() };
  }
  function is(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Qa), l;
  }
  function zn(l, n, u) {
    var c = n.pendingProps, r = !1, s = (n.flags & 128) !== 0, m;
    if ((m = s) || (m = l !== null && l.memoizedState === null ? !1 : (tl.current & 2) !== 0), m && (r = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (ot) {
        if (r ? vi(n) : Mu(), (l = Qt) ? (l = ke(
          l,
          Ya
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: Qn !== null ? { id: cn, overflow: ja } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Rr(l), u.return = n, n.child = u, Sl = n, Qt = null)) : l = null, l === null) throw va(n);
        return Hn(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var v = c.children;
      return c = c.fallback, r ? (Mu(), r = n.mode, v = Ai(
        { mode: "hidden", children: v },
        r
      ), c = Lc(
        c,
        r,
        u,
        null
      ), v.return = n, c.return = n, v.sibling = c, n.child = v, c = n.child, c.memoizedState = us(u), c.childLanes = is(
        l,
        m,
        u
      ), n.memoizedState = Dn, ls(null, c)) : (vi(n), rh(n, v));
    }
    var T = l.memoizedState;
    if (T !== null && (v = T.dehydrated, v !== null)) {
      if (s)
        n.flags & 256 ? (vi(n), n.flags &= -257, n = sh(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Mu(), n.child = l.child, n.flags |= 128, n = null) : (Mu(), v = c.fallback, r = n.mode, c = Ai(
          { mode: "visible", children: c.children },
          r
        ), v = Lc(
          v,
          r,
          u,
          null
        ), v.flags |= 2, c.return = n, v.return = n, c.sibling = v, n.child = c, Kc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = us(u), c.childLanes = is(
          l,
          m,
          u
        ), n.memoizedState = Dn, n = ls(null, c));
      else if (vi(n), Hn(v)) {
        if (m = v.nextSibling && v.nextSibling.dataset, m) var x = m.dgst;
        m = x, c = Error(M(419)), c.stack = "", c.digest = m, Hr({ value: c, source: null, stack: null }), n = sh(
          l,
          n,
          u
        );
      } else if (ml || on(l, n, u, !1), m = (u & l.childLanes) !== 0, ml || m) {
        if (m = Yt, m !== null && (c = ou(m, u), c !== 0 && c !== T.retryLane))
          throw T.retryLane = c, aa(l, c), Ja(m, l, c), Yy;
        Op(v) || Eh(), n = sh(
          l,
          n,
          u
        );
      } else
        Op(v) ? (n.flags |= 192, n.child = l.child, n = null) : (l = T.treeContext, Qt = Wl(
          v.nextSibling
        ), Sl = n, ot = !0, Au = null, Ya = !1, l !== null && iy(n, l), n = rh(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return r ? (Mu(), v = c.fallback, r = n.mode, T = l.child, x = T.sibling, c = an(T, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = T.subtreeFlags & 65011712, x !== null ? v = an(
      x,
      v
    ) : (v = Lc(
      v,
      r,
      u,
      null
    ), v.flags |= 2), v.return = n, c.return = n, c.sibling = v, n.child = c, ls(null, c), c = n.child, v = l.child.memoizedState, v === null ? v = us(u) : (r = v.cachePool, r !== null ? (T = cl._currentValue, r = r.parent !== T ? { parent: T, pool: T } : r) : r = wd(), v = {
      baseLanes: v.baseLanes | u,
      cachePool: r
    }), c.memoizedState = v, c.childLanes = is(
      l,
      m,
      u
    ), n.memoizedState = Dn, ls(l.child, c)) : (vi(n), u = l.child, l = u.sibling, u = an(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function rh(l, n) {
    return n = Ai(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Ai(l, n) {
    return l = xa(22, l, null, n), l.lanes = 0, l;
  }
  function sh(l, n, u) {
    return Kc(n, l.child, null, u), l = rh(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function hf(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Nr(l.return, n, u);
  }
  function fc(l, n, u, c, r, s) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: r,
      treeForkCount: s
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = r, m.treeForkCount = s);
  }
  function Vy(l, n, u) {
    var c = n.pendingProps, r = c.revealOrder, s = c.tail;
    c = c.children;
    var m = tl.current, v = (m & 2) !== 0;
    if (v ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, k(tl, m), Ul(l, n, c, u), c = ot ? $o : 0, !v && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && hf(l, u, n);
        else if (l.tag === 19)
          hf(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (r) {
      case "forwards":
        for (u = n.child, r = null; u !== null; )
          l = u.alternate, l !== null && kc(l) === null && (r = u), u = u.sibling;
        u = r, u === null ? (r = n.child, n.child = null) : (r = u.sibling, u.sibling = null), fc(
          n,
          !1,
          r,
          u,
          s,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, r = n.child, n.child = null; r !== null; ) {
          if (l = r.alternate, l !== null && kc(l) === null) {
            n.child = r;
            break;
          }
          l = r.sibling, r.sibling = u, u = r, r = l;
        }
        fc(
          n,
          !0,
          u,
          null,
          s,
          c
        );
        break;
      case "together":
        fc(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Bu(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Cn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (on(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(M(153));
    if (n.child !== null) {
      for (l = n.child, u = an(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = an(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function ao(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && ua(l)));
  }
  function cg(l, n, u) {
    switch (n.tag) {
      case 3:
        et(n, n.stateNode.containerInfo), Du(n, cl, l.memoizedState.cache), Vn();
        break;
      case 27:
      case 5:
        la(n);
        break;
      case 4:
        et(n, n.stateNode.containerInfo);
        break;
      case 10:
        Du(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Qr(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (vi(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? zn(l, n, u) : (vi(n), l = Bu(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        vi(n);
        break;
      case 19:
        var r = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (on(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), r) {
          if (c)
            return Vy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (r = n.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), k(tl, tl.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, Gy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        Du(n, cl, l.memoizedState.cache);
    }
    return Bu(l, n, u);
  }
  function cs(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        ml = !0;
      else {
        if (!ao(l, u) && (n.flags & 128) === 0)
          return ml = !1, cg(
            l,
            n,
            u
          );
        ml = (l.flags & 131072) !== 0;
      }
    else
      ml = !1, ot && (n.flags & 1048576) !== 0 && Cr(n, $o, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = ac(n.elementType), n.type = l, typeof l == "function")
            An(l) ? (c = lo(l, c), n.tag = 1, n = oc(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = _n(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var r = l.$$typeof;
              if (r === Ct) {
                n.tag = 11, n = xu(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (r === ye) {
                n.tag = 14, n = qy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = we(l) || l, Error(M(306, n, ""));
          }
        }
        return n;
      case 0:
        return _n(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, r = lo(
          c,
          n.pendingProps
        ), oc(
          l,
          n,
          c,
          r,
          u
        );
      case 3:
        e: {
          if (et(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(M(387));
          c = n.pendingProps;
          var s = n.memoizedState;
          r = s.element, wr(l, n), ic(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, Du(n, cl, c), c !== s.cache && Bd(
            n,
            [cl],
            u,
            !0
          ), Gr(), c = m.element, s.isDehydrated)
            if (s = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = s, n.memoizedState = s, n.flags & 256) {
              n = Qy(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== r) {
              r = nn(
                Error(M(424)),
                n
              ), Hr(r), n = Qy(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Qt = Wl(l.firstChild), Sl = n, ot = !0, Au = null, Ya = !0, u = dy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Vn(), c === r) {
              n = Bu(
                l,
                n,
                u
              );
              break e;
            }
            Ul(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return ns(l, n), l === null ? (u = Ci(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : ot || (u = n.type, l = n.pendingProps, c = Ms(
          Ue.current
        ).createElement(u), c[vl] = n, c[Kt] = l, kl(c, u, l), Al(c), n.stateNode = c) : n.memoizedState = Ci(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return la(n), l === null && ot && (c = n.stateNode = In(
          n.type,
          n.pendingProps,
          Ue.current
        ), Sl = n, Ya = !0, r = Qt, Vu(n.type) ? (zf = r, Qt = Wl(c.firstChild)) : Qt = r), Ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), ns(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && ot && ((r = c = Qt) && (c = Ap(
          c,
          n.type,
          n.pendingProps,
          Ya
        ), c !== null ? (n.stateNode = c, Sl = n, Qt = Wl(c.firstChild), Ya = !1, r = !0) : r = !1), r || va(n)), la(n), r = n.type, s = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = s.children, jh(r, s) ? c = null : m !== null && jh(r, m) && (n.flags |= 32), n.memoizedState !== null && (r = bi(
          l,
          n,
          Iv,
          null,
          null,
          u
        ), sl._currentValue = r), ns(l, n), Ul(l, n, c, u), n.child;
      case 6:
        return l === null && ot && ((l = u = Qt) && (u = aS(
          u,
          n.pendingProps,
          Ya
        ), u !== null ? (n.stateNode = u, Sl = n, Qt = null, l = !0) : l = !1), l || va(n)), null;
      case 13:
        return zn(l, n, u);
      case 4:
        return et(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = Kc(
          n,
          null,
          c,
          u
        ) : Ul(l, n, c, u), n.child;
      case 11:
        return xu(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Ul(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, Du(n, n.type, c.value), Ul(l, n, c.children, u), n.child;
      case 9:
        return r = n.type._context, c = n.pendingProps.children, zu(n), r = De(r), c = c(r), n.flags |= 1, Ul(l, n, c, u), n.child;
      case 14:
        return qy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return wy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Vy(l, n, u);
      case 31:
        return Xa(l, n, u);
      case 22:
        return Gy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return zu(n), c = De(cl), l === null ? (r = mi(), r === null && (r = Yt, s = Yd(), r.pooledCache = s, s.refCount++, s !== null && (r.pooledCacheLanes |= u), r = s), n.memoizedState = { parent: c, cache: r }, Gd(n), Du(n, cl, r)) : ((l.lanes & u) !== 0 && (wr(l, n), ic(n, null, null, u), Gr()), r = l.memoizedState, s = n.memoizedState, r.parent !== c ? (r = { parent: c, cache: c }, n.memoizedState = r, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = r), Du(n, cl, c)) : (c = s.cache, Du(n, cl, c), c !== r.cache && Bd(
          n,
          [cl],
          u,
          !0
        ))), Ul(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(M(156, n.tag));
  }
  function ju(l) {
    l.flags |= 4;
  }
  function dh(l, n, u, c, r) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (r & 335544128) === r)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (vf()) l.flags |= 8192;
        else
          throw nc = Io, jr;
    } else l.flags &= -16777217;
  }
  function og(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Vh(n))
      if (vf()) l.flags |= 8192;
      else
        throw nc = Io, jr;
  }
  function os(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Qe() : 536870912, l.lanes |= n, dc |= n);
  }
  function $l(l, n) {
    if (!ot)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Vt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags & 65011712, c |= r.flags & 65011712, r.return = l, r = r.sibling;
    else
      for (r = l.child; r !== null; )
        u |= r.lanes | r.childLanes, c |= r.subtreeFlags, c |= r.flags, r.return = l, r = r.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function al(l, n, u) {
    var c = n.pendingProps;
    switch (ko(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Vt(n), null;
      case 1:
        return Vt(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), na(cl), _t(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (_u(n) ? ju(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Nd())), Vt(n), null;
      case 26:
        var r = n.type, s = n.memoizedState;
        return l === null ? (ju(n), s !== null ? (Vt(n), og(n, s)) : (Vt(n), dh(
          n,
          r,
          null,
          c,
          u
        ))) : s ? s !== l.memoizedState ? (ju(n), Vt(n), og(n, s)) : (Vt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && ju(n), Vt(n), dh(
          n,
          r,
          l,
          c,
          u
        )), null;
      case 27:
        if (vn(n), u = Ue.current, r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && ju(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(M(166));
            return Vt(n), null;
          }
          l = te.current, _u(n) ? Wo(n) : (l = In(r, c, u), n.stateNode = l, ju(n));
        }
        return Vt(n), null;
      case 5:
        if (vn(n), r = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && ju(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(M(166));
            return Vt(n), null;
          }
          if (s = te.current, _u(n))
            Wo(n);
          else {
            var m = Ms(
              Ue.current
            );
            switch (s) {
              case 1:
                s = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  r
                );
                break;
              case 2:
                s = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  r
                );
                break;
              default:
                switch (r) {
                  case "svg":
                    s = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      r
                    );
                    break;
                  case "math":
                    s = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    s = m.createElement("div"), s.innerHTML = "<script><\/script>", s = s.removeChild(
                      s.firstChild
                    );
                    break;
                  case "select":
                    s = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? s.multiple = !0 : c.size && (s.size = c.size);
                    break;
                  default:
                    s = typeof c.is == "string" ? m.createElement(r, { is: c.is }) : m.createElement(r);
                }
            }
            s[vl] = n, s[Kt] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                s.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = s;
            e: switch (kl(s, r, c), r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && ju(n);
          }
        }
        return Vt(n), dh(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && ju(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(M(166));
          if (l = Ue.current, _u(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, r = Sl, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  c = r.memoizedProps;
              }
            l[vl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || vp(l.nodeValue, u)), l || va(n, !0);
          } else
            l = Ms(l).createTextNode(
              c
            ), l[vl] = n, n.stateNode = l;
        }
        return Vt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = _u(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(M(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(M(557));
              l[vl] = n;
            } else
              Vn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Vt(n), l = !1;
          } else
            u = Nd(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (ca(n), n) : (ca(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(M(558));
        }
        return Vt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (r = _u(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!r) throw Error(M(318));
              if (r = n.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(M(317));
              r[vl] = n;
            } else
              Vn(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Vt(n), r = !1;
          } else
            r = Nd(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return n.flags & 256 ? (ca(n), n) : (ca(n), null);
        }
        return ca(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, r = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (r = c.alternate.memoizedState.cachePool.pool), s = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (s = c.memoizedState.cachePool.pool), s !== r && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), os(n, n.updateQueue), Vt(n), null);
      case 4:
        return _t(), l === null && yp(n.stateNode.containerInfo), Vt(n), null;
      case 10:
        return na(n.type), Vt(n), null;
      case 19:
        if (A(tl), c = n.memoizedState, c === null) return Vt(n), null;
        if (r = (n.flags & 128) !== 0, s = c.rendering, s === null)
          if (r) $l(c, !1);
          else {
            if (Ft !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (s = kc(l), s !== null) {
                  for (n.flags |= 128, $l(c, !1), l = s.updateQueue, n.updateQueue = l, os(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    F0(u, l), u = u.sibling;
                  return k(
                    tl,
                    tl.current & 1 | 2
                  ), ot && Tu(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && Tl() > gs && (n.flags |= 128, r = !0, $l(c, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (l = kc(s), l !== null) {
              if (n.flags |= 128, r = !0, l = l.updateQueue, n.updateQueue = l, os(n, l), $l(c, !0), c.tail === null && c.tailMode === "hidden" && !s.alternate && !ot)
                return Vt(n), null;
            } else
              2 * Tl() - c.renderingStartTime > gs && u !== 536870912 && (n.flags |= 128, r = !0, $l(c, !1), n.lanes = 4194304);
          c.isBackwards ? (s.sibling = n.child, n.child = s) : (l = c.last, l !== null ? l.sibling = s : n.child = s, c.last = s);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = Tl(), l.sibling = null, u = tl.current, k(
          tl,
          r ? u & 1 | 2 : u & 1
        ), ot && Tu(n, c.treeForkCount), l) : (Vt(n), null);
      case 22:
      case 23:
        return ca(n), Lr(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Vt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Vt(n), u = n.updateQueue, u !== null && os(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && A(qa), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), na(cl), Vt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(M(156, n.tag));
  }
  function fg(l, n) {
    switch (ko(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return na(cl), _t(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return vn(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (ca(n), n.alternate === null)
            throw Error(M(340));
          Vn();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (ca(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(M(340));
          Vn();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return A(tl), null;
      case 4:
        return _t(), null;
      case 10:
        return na(n.type), null;
      case 22:
      case 23:
        return ca(n), Lr(), l !== null && A(qa), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return na(cl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zy(l, n) {
    switch (ko(n), n.tag) {
      case 3:
        na(cl), _t();
        break;
      case 26:
      case 27:
      case 5:
        vn(n);
        break;
      case 4:
        _t();
        break;
      case 31:
        n.memoizedState !== null && ca(n);
        break;
      case 13:
        ca(n);
        break;
      case 19:
        A(tl);
        break;
      case 10:
        na(n.type);
        break;
      case 22:
      case 23:
        ca(n), Lr(), l !== null && A(qa);
        break;
      case 24:
        na(cl);
    }
  }
  function fs(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var r = c.next;
        u = r;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var s = u.create, m = u.inst;
            c = s(), m.destroy = c;
          }
          u = u.next;
        } while (u !== r);
      }
    } catch (v) {
      Nt(n, n.return, v);
    }
  }
  function ba(l, n, u) {
    try {
      var c = n.updateQueue, r = c !== null ? c.lastEffect : null;
      if (r !== null) {
        var s = r.next;
        c = s;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, v = m.destroy;
            if (v !== void 0) {
              m.destroy = void 0, r = n;
              var T = u, x = v;
              try {
                x();
              } catch (V) {
                Nt(
                  r,
                  T,
                  V
                );
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    } catch (V) {
      Nt(n, n.return, V);
    }
  }
  function no(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Ld(n, u);
      } catch (c) {
        Nt(l, l.return, c);
      }
    }
  }
  function hh(l, n, u) {
    u.props = lo(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Nt(l, n, c);
    }
  }
  function kn(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (r) {
      Nt(l, n, r);
    }
  }
  function Ea(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (r) {
          Nt(l, n, r);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (r) {
          Nt(l, n, r);
        }
      else u.current = null;
  }
  function Jy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (r) {
      Nt(l, l.return, r);
    }
  }
  function mh(l, n, u) {
    try {
      var c = l.stateNode;
      lS(c, l.type, u, n), c[Kt] = n;
    } catch (r) {
      Nt(l, l.return, r);
    }
  }
  function Ky(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Vu(l.type) || l.tag === 4;
  }
  function yh(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ky(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Vu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function mf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Ll));
    else if (c !== 4 && (c === 27 && Vu(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (mf(l, n, u), l = l.sibling; l !== null; )
        mf(l, n, u), l = l.sibling;
  }
  function uo(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && Vu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (uo(l, n, u), l = l.sibling; l !== null; )
        uo(l, n, u), l = l.sibling;
  }
  function ph(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, r = n.attributes; r.length; )
        n.removeAttributeNode(r[0]);
      kl(n, c, u), n[vl] = l, n[Kt] = u;
    } catch (s) {
      Nt(l, l.return, s);
    }
  }
  var Yu = !1, bl = !1, $y = !1, ky = typeof WeakSet == "function" ? WeakSet : Set, Ol = null;
  function Pv(l, n) {
    if (l = l.containerInfo, Rs = Ui, l = wc(l), di(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var r = c.anchorOffset, s = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, s.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, v = -1, T = -1, x = 0, V = 0, F = l, B = null;
            t: for (; ; ) {
              for (var w; F !== u || r !== 0 && F.nodeType !== 3 || (v = m + r), F !== s || c !== 0 && F.nodeType !== 3 || (T = m + c), F.nodeType === 3 && (m += F.nodeValue.length), (w = F.firstChild) !== null; )
                B = F, F = w;
              for (; ; ) {
                if (F === l) break t;
                if (B === u && ++x === r && (v = m), B === s && ++V === c && (T = m), (w = F.nextSibling) !== null) break;
                F = B, B = F.parentNode;
              }
              F = w;
            }
            u = v === -1 || T === -1 ? null : { start: v, end: T };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Bh = { focusedElem: l, selectionRange: u }, Ui = !1, Ol = n; Ol !== null; )
      if (n = Ol, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, Ol = l;
      else
        for (; Ol !== null; ) {
          switch (n = Ol, s = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  r = l[u], r.ref.impl = r.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && s !== null) {
                l = void 0, u = n, r = s.memoizedProps, s = s.memoizedState, c = u.stateNode;
                try {
                  var ge = lo(
                    u.type,
                    r
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ge,
                    s
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (He) {
                  Nt(
                    u,
                    u.return,
                    He
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  rl(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      rl(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(M(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Ol = l;
            break;
          }
          Ol = n.return;
        }
  }
  function io(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        wu(l, u), c & 4 && fs(5, u);
        break;
      case 1:
        if (wu(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Nt(u, u.return, m);
            }
          else {
            var r = lo(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                r,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              Nt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && no(u), c & 512 && kn(u, u.return);
        break;
      case 3:
        if (wu(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Ld(l, n);
          } catch (m) {
            Nt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && ph(u);
      case 26:
      case 5:
        wu(l, u), n === null && c & 4 && Jy(u), c & 512 && kn(u, u.return);
        break;
      case 12:
        wu(l, u);
        break;
      case 31:
        wu(l, u), c & 4 && Fy(l, u);
        break;
      case 13:
        wu(l, u), c & 4 && rg(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = tS.bind(
          null,
          u
        ), Df(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Yu, !c) {
          n = n !== null && n.memoizedState !== null || bl, r = Yu;
          var s = bl;
          Yu = c, (bl = n) && !s ? Oi(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : wu(l, u), Yu = r, bl = s;
        }
        break;
      case 30:
        break;
      default:
        wu(l, u);
    }
  }
  function rs(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, rs(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Qi(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var $t = null, oa = !1;
  function qu(l, n, u) {
    for (u = u.child; u !== null; )
      Wy(l, n, u), u = u.sibling;
  }
  function Wy(l, n, u) {
    if (gl && typeof gl.onCommitFiberUnmount == "function")
      try {
        gl.onCommitFiberUnmount(Gn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        bl || Ea(u, n), qu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        bl || Ea(u, n);
        var c = $t, r = oa;
        Vu(u.type) && ($t = u.stateNode, oa = !1), qu(
          l,
          n,
          u
        ), Ri(u.stateNode), $t = c, oa = r;
        break;
      case 5:
        bl || Ea(u, n);
      case 6:
        if (c = $t, r = oa, $t = null, qu(
          l,
          n,
          u
        ), $t = c, oa = r, $t !== null)
          if (oa)
            try {
              ($t.nodeType === 9 ? $t.body : $t.nodeName === "HTML" ? $t.ownerDocument.body : $t).removeChild(u.stateNode);
            } catch (s) {
              Nt(
                u,
                n,
                s
              );
            }
          else
            try {
              $t.removeChild(u.stateNode);
            } catch (s) {
              Nt(
                u,
                n,
                s
              );
            }
        break;
      case 18:
        $t !== null && (oa ? (l = $t, Cs(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Uf(l)) : Cs($t, u.stateNode));
        break;
      case 4:
        c = $t, r = oa, $t = u.stateNode.containerInfo, oa = !0, qu(
          l,
          n,
          u
        ), $t = c, oa = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ba(2, u, n), bl || ba(4, u, n), qu(
          l,
          n,
          u
        );
        break;
      case 1:
        bl || (Ea(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && hh(
          u,
          n,
          c
        )), qu(
          l,
          n,
          u
        );
        break;
      case 21:
        qu(
          l,
          n,
          u
        );
        break;
      case 22:
        bl = (c = bl) || u.memoizedState !== null, qu(
          l,
          n,
          u
        ), bl = c;
        break;
      default:
        qu(
          l,
          n,
          u
        );
    }
  }
  function Fy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Uf(l);
      } catch (u) {
        Nt(n, n.return, u);
      }
    }
  }
  function rg(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Uf(l);
      } catch (u) {
        Nt(n, n.return, u);
      }
  }
  function sg(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new ky()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new ky()), n;
      default:
        throw Error(M(435, l.tag));
    }
  }
  function rc(l, n) {
    var u = sg(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var r = fn.bind(null, l, c);
        c.then(r, r);
      }
    });
  }
  function Ta(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var r = u[c], s = l, m = n, v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Vu(v.type)) {
                $t = v.stateNode, oa = !1;
                break e;
              }
              break;
            case 5:
              $t = v.stateNode, oa = !1;
              break e;
            case 3:
            case 4:
              $t = v.stateNode.containerInfo, oa = !0;
              break e;
          }
          v = v.return;
        }
        if ($t === null) throw Error(M(160));
        Wy(s, m, r), $t = null, oa = !1, s = r.alternate, s !== null && (s.return = null), r.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        Tt(n, l), n = n.sibling;
  }
  var Rn = null;
  function Tt(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ta(n, l), fa(l), c & 4 && (ba(3, l, l.return), fs(3, l), ba(5, l, l.return));
        break;
      case 1:
        Ta(n, l), fa(l), c & 512 && (bl || u === null || Ea(u, u.return)), c & 64 && Yu && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var r = Rn;
        if (Ta(n, l), fa(l), c & 512 && (bl || u === null || Ea(u, u.return)), c & 4) {
          var s = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, r = r.ownerDocument || r;
                  t: switch (c) {
                    case "title":
                      s = r.getElementsByTagName("title")[0], (!s || s[qo] || s[vl] || s.namespaceURI === "http://www.w3.org/2000/svg" || s.hasAttribute("itemprop")) && (s = r.createElement(c), r.head.insertBefore(
                        s,
                        r.querySelector("head > title")
                      )), kl(s, c, u), s[vl] = l, Al(s), c = s;
                      break e;
                    case "link":
                      var m = Qh(
                        "link",
                        "href",
                        r
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (s = m[v], s.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && s.getAttribute("rel") === (u.rel == null ? null : u.rel) && s.getAttribute("title") === (u.title == null ? null : u.title) && s.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), kl(s, c, u), r.head.appendChild(s);
                      break;
                    case "meta":
                      if (m = Qh(
                        "meta",
                        "content",
                        r
                      ).get(c + (u.content || ""))) {
                        for (v = 0; v < m.length; v++)
                          if (s = m[v], s.getAttribute("content") === (u.content == null ? null : "" + u.content) && s.getAttribute("name") === (u.name == null ? null : u.name) && s.getAttribute("property") === (u.property == null ? null : u.property) && s.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && s.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      s = r.createElement(c), kl(s, c, u), r.head.appendChild(s);
                      break;
                    default:
                      throw Error(M(468, c));
                  }
                  s[vl] = l, Al(s), c = s;
                }
                l.stateNode = c;
              } else
                Mp(
                  r,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Rp(
                r,
                c,
                l.memoizedProps
              );
          else
            s !== c ? (s === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : s.count--, c === null ? Mp(
              r,
              l.type,
              l.stateNode
            ) : Rp(
              r,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && mh(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ta(n, l), fa(l), c & 512 && (bl || u === null || Ea(u, u.return)), u !== null && c & 4 && mh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ta(n, l), fa(l), c & 512 && (bl || u === null || Ea(u, u.return)), l.flags & 32) {
          r = l.stateNode;
          try {
            Uc(r, "");
          } catch (ge) {
            Nt(l, l.return, ge);
          }
        }
        c & 4 && l.stateNode != null && (r = l.memoizedProps, mh(
          l,
          r,
          u !== null ? u.memoizedProps : r
        )), c & 1024 && ($y = !0);
        break;
      case 6:
        if (Ta(n, l), fa(l), c & 4) {
          if (l.stateNode === null)
            throw Error(M(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (ge) {
            Nt(l, l.return, ge);
          }
        }
        break;
      case 3:
        if (xs = null, r = Rn, Rn = yo(n.containerInfo), Ta(n, l), Rn = r, fa(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Uf(n.containerInfo);
          } catch (ge) {
            Nt(l, l.return, ge);
          }
        $y && ($y = !1, dg(l));
        break;
      case 4:
        c = Rn, Rn = yo(
          l.stateNode.containerInfo
        ), Ta(n, l), fa(l), Rn = c;
        break;
      case 12:
        Ta(n, l), fa(l);
        break;
      case 31:
        Ta(n, l), fa(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, rc(l, c)));
        break;
      case 13:
        Ta(n, l), fa(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (ps = Tl()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, rc(l, c)));
        break;
      case 22:
        r = l.memoizedState !== null;
        var T = u !== null && u.memoizedState !== null, x = Yu, V = bl;
        if (Yu = x || r, bl = V || T, Ta(n, l), bl = V, Yu = x, fa(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = r ? n._visibility & -2 : n._visibility | 1, r && (u === null || T || Yu || bl || co(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                T = u = n;
                try {
                  if (s = T.stateNode, r)
                    m = s.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    v = T.stateNode;
                    var F = T.memoizedProps.style, B = F != null && F.hasOwnProperty("display") ? F.display : null;
                    v.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (ge) {
                  Nt(T, T.return, ge);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = r ? "" : T.memoizedProps;
                } catch (ge) {
                  Nt(T, T.return, ge);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                T = n;
                try {
                  var w = T.stateNode;
                  r ? Tp(w, !0) : Tp(T.stateNode, !1);
                } catch (ge) {
                  Nt(T, T.return, ge);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, rc(l, u))));
        break;
      case 19:
        Ta(n, l), fa(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, rc(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ta(n, l), fa(l);
    }
  }
  function fa(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Ky(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(M(160));
        switch (u.tag) {
          case 27:
            var r = u.stateNode, s = yh(l);
            uo(l, s, r);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Uc(m, ""), u.flags &= -33);
            var v = yh(l);
            uo(l, v, m);
            break;
          case 3:
          case 4:
            var T = u.stateNode.containerInfo, x = yh(l);
            mf(
              l,
              x,
              T
            );
            break;
          default:
            throw Error(M(161));
        }
      } catch (V) {
        Nt(l, l.return, V);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function dg(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        dg(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function wu(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        io(l, n.alternate, n), n = n.sibling;
  }
  function co(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ba(4, n, n.return), co(n);
          break;
        case 1:
          Ea(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && hh(
            n,
            n.return,
            u
          ), co(n);
          break;
        case 27:
          Ri(n.stateNode);
        case 26:
        case 5:
          Ea(n, n.return), co(n);
          break;
        case 22:
          n.memoizedState === null && co(n);
          break;
        case 30:
          co(n);
          break;
        default:
          co(n);
      }
      l = l.sibling;
    }
  }
  function Oi(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, r = l, s = n, m = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Oi(
            r,
            s,
            u
          ), fs(4, s);
          break;
        case 1:
          if (Oi(
            r,
            s,
            u
          ), c = s, r = c.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (x) {
              Nt(c, c.return, x);
            }
          if (c = s, r = c.updateQueue, r !== null) {
            var v = c.stateNode;
            try {
              var T = r.shared.hiddenCallbacks;
              if (T !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < T.length; r++)
                  $c(T[r], v);
            } catch (x) {
              Nt(c, c.return, x);
            }
          }
          u && m & 64 && no(s), kn(s, s.return);
          break;
        case 27:
          ph(s);
        case 26:
        case 5:
          Oi(
            r,
            s,
            u
          ), u && c === null && m & 4 && Jy(s), kn(s, s.return);
          break;
        case 12:
          Oi(
            r,
            s,
            u
          );
          break;
        case 31:
          Oi(
            r,
            s,
            u
          ), u && m & 4 && Fy(r, s);
          break;
        case 13:
          Oi(
            r,
            s,
            u
          ), u && m & 4 && rg(r, s);
          break;
        case 22:
          s.memoizedState === null && Oi(
            r,
            s,
            u
          ), kn(s, s.return);
          break;
        case 30:
          break;
        default:
          Oi(
            r,
            s,
            u
          );
      }
      n = n.sibling;
    }
  }
  function ss(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Zc(u));
  }
  function gh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Zc(l));
  }
  function Mn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Iy(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Iy(l, n, u, c) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Mn(
          l,
          n,
          u,
          c
        ), r & 2048 && fs(9, n);
        break;
      case 1:
        Mn(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Mn(
          l,
          n,
          u,
          c
        ), r & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Zc(l)));
        break;
      case 12:
        if (r & 2048) {
          Mn(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var s = n.memoizedProps, m = s.id, v = s.onPostCommit;
            typeof v == "function" && v(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (T) {
            Nt(n, n.return, T);
          }
        } else
          Mn(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        Mn(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        Mn(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        s = n.stateNode, m = n.alternate, n.memoizedState !== null ? s._visibility & 2 ? Mn(
          l,
          n,
          u,
          c
        ) : ds(l, n) : s._visibility & 2 ? Mn(
          l,
          n,
          u,
          c
        ) : (s._visibility |= 2, Gu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), r & 2048 && ss(m, n);
        break;
      case 24:
        Mn(
          l,
          n,
          u,
          c
        ), r & 2048 && gh(n.alternate, n);
        break;
      default:
        Mn(
          l,
          n,
          u,
          c
        );
    }
  }
  function Gu(l, n, u, c, r) {
    for (r = r && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var s = l, m = n, v = u, T = c, x = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Gu(
            s,
            m,
            v,
            T,
            r
          ), fs(8, m);
          break;
        case 23:
          break;
        case 22:
          var V = m.stateNode;
          m.memoizedState !== null ? V._visibility & 2 ? Gu(
            s,
            m,
            v,
            T,
            r
          ) : ds(
            s,
            m
          ) : (V._visibility |= 2, Gu(
            s,
            m,
            v,
            T,
            r
          )), r && x & 2048 && ss(
            m.alternate,
            m
          );
          break;
        case 24:
          Gu(
            s,
            m,
            v,
            T,
            r
          ), r && x & 2048 && gh(m.alternate, m);
          break;
        default:
          Gu(
            s,
            m,
            v,
            T,
            r
          );
      }
      n = n.sibling;
    }
  }
  function ds(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, r = c.flags;
        switch (c.tag) {
          case 22:
            ds(u, c), r & 2048 && ss(
              c.alternate,
              c
            );
            break;
          case 24:
            ds(u, c), r & 2048 && gh(c.alternate, c);
            break;
          default:
            ds(u, c);
        }
        n = n.sibling;
      }
  }
  var hs = 8192;
  function Aa(l, n, u) {
    if (l.subtreeFlags & hs)
      for (l = l.child; l !== null; )
        yf(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function yf(l, n, u) {
    switch (l.tag) {
      case 26:
        Aa(
          l,
          n,
          u
        ), l.flags & hs && l.memoizedState !== null && rn(
          u,
          Rn,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Aa(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Rn;
        Rn = yo(l.stateNode.containerInfo), Aa(
          l,
          n,
          u
        ), Rn = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = hs, hs = 16777216, Aa(
          l,
          n,
          u
        ), hs = c) : Aa(
          l,
          n,
          u
        ));
        break;
      default:
        Aa(
          l,
          n,
          u
        );
    }
  }
  function hg(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function oo(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Ol = c, ep(
            c,
            l
          );
        }
      hg(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Py(l), l = l.sibling;
  }
  function Py(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        oo(l), l.flags & 2048 && ba(9, l, l.return);
        break;
      case 3:
        oo(l);
        break;
      case 12:
        oo(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, ms(l)) : oo(l);
        break;
      default:
        oo(l);
    }
  }
  function ms(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Ol = c, ep(
            c,
            l
          );
        }
      hg(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          ba(8, n, n.return), ms(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, ms(n));
          break;
        default:
          ms(n);
      }
      l = l.sibling;
    }
  }
  function ep(l, n) {
    for (; Ol !== null; ) {
      var u = Ol;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ba(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Zc(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Ol = c;
      else
        e: for (u = l; Ol !== null; ) {
          c = Ol;
          var r = c.sibling, s = c.return;
          if (rs(c), c === u) {
            Ol = null;
            break e;
          }
          if (r !== null) {
            r.return = s, Ol = r;
            break e;
          }
          Ol = s;
        }
    }
  }
  var tp = {
    getCacheForType: function(l) {
      var n = De(cl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return De(cl).controller.signal;
    }
  }, mg = typeof WeakMap == "function" ? WeakMap : Map, St = 0, Yt = null, nt = null, ft = 0, At = 0, La = null, Ze = !1, sc = !1, ys = !1, Xu = 0, Ft = 0, Cn = 0, Lu = 0, lp = 0, Qa = 0, dc = 0, fl = null, Va = null, Un = !1, ps = 0, _i = 0, gs = 1 / 0, zt = null, Qu = null, ht = 0, hc = null, fo = null, Wn = 0, vh = 0, Za = null, ap = null, ro = 0, Sh = null;
  function Oa() {
    return (St & 2) !== 0 && ft !== 0 ? ft & -ft : L.T !== null ? so() : C0();
  }
  function np() {
    if (Qa === 0)
      if ((ft & 536870912) === 0 || ot) {
        var l = P;
        P <<= 1, (P & 3932160) === 0 && (P = 262144), Qa = l;
      } else Qa = 536870912;
    return l = ia.current, l !== null && (l.flags |= 32), Qa;
  }
  function Ja(l, n, u) {
    (l === Yt && (At === 2 || At === 9) || l.cancelPendingCommit !== null) && (pf(l, 0), Di(
      l,
      ft,
      Qa,
      !1
    )), Ra(l, u), ((St & 2) === 0 || l !== Yt) && (l === Yt && ((St & 2) === 0 && (Lu |= u), Ft === 4 && Di(
      l,
      ft,
      Qa,
      !1
    )), Fn(l));
  }
  function up(l, n, u) {
    if ((St & 6) !== 0) throw Error(M(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || be(l, n), r = c ? eS(l, n) : ip(l, n, !0), s = c;
    do {
      if (r === 0) {
        sc && !c && Di(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, s && !bh(u)) {
          r = ip(l, n, !1), s = !1;
          continue;
        }
        if (r === 2) {
          if (s = n, l.errorRecoveryDisabledLanes & s)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var v = l;
              r = fl;
              var T = v.current.memoizedState.isDehydrated;
              if (T && (pf(v, m).flags |= 256), m = ip(
                v,
                m,
                !1
              ), m !== 2) {
                if (ys && !T) {
                  v.errorRecoveryDisabledLanes |= s, Lu |= s, r = 4;
                  break e;
                }
                s = Va, Va = r, s !== null && (Va === null ? Va = s : Va.push.apply(
                  Va,
                  s
                ));
              }
              r = m;
            }
            if (s = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          pf(l, 0), Di(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, s = r, s) {
            case 0:
            case 1:
              throw Error(M(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Di(
                c,
                n,
                Qa,
                !Ze
              );
              break e;
            case 2:
              Va = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(M(329));
          }
          if ((n & 62914560) === n && (r = ps + 300 - Tl(), 10 < r)) {
            if (Di(
              c,
              n,
              Qa,
              !Ze
            ), Ge(c, 0, !0) !== 0) break e;
            Wn = n, c.timeoutHandle = xg(
              yg.bind(
                null,
                c,
                u,
                Va,
                zt,
                Un,
                n,
                Qa,
                Lu,
                dc,
                Ze,
                s,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break e;
          }
          yg(
            c,
            u,
            Va,
            zt,
            Un,
            n,
            Qa,
            Lu,
            dc,
            Ze,
            s,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Fn(l);
  }
  function yg(l, n, u, c, r, s, m, v, T, x, V, F, B, w) {
    if (l.timeoutHandle = -1, F = n.subtreeFlags, F & 8192 || (F & 16785408) === 16785408) {
      F = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ll
      }, yf(
        n,
        s,
        F
      );
      var ge = (s & 62914560) === s ? ps - Tl() : (s & 4194048) === s ? _i - Tl() : 0;
      if (ge = Pn(
        F,
        ge
      ), ge !== null) {
        Wn = s, l.cancelPendingCommit = ge(
          Eg.bind(
            null,
            l,
            n,
            s,
            u,
            c,
            r,
            m,
            v,
            T,
            V,
            F,
            null,
            B,
            w
          )
        ), Di(l, s, m, !x);
        return;
      }
    }
    Eg(
      l,
      n,
      s,
      u,
      c,
      r,
      m,
      v,
      T
    );
  }
  function bh(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var r = u[c], s = r.getSnapshot;
          r = r.value;
          try {
            if (!Ha(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Di(l, n, u, c) {
    n &= ~lp, n &= ~Lu, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var r = n; 0 < r; ) {
      var s = 31 - Ml(r), m = 1 << s;
      c[s] = -1, r &= ~m;
    }
    u !== 0 && Oc(l, u, n);
  }
  function vs() {
    return (St & 6) === 0 ? (Ts(0), !1) : !0;
  }
  function Ss() {
    if (nt !== null) {
      if (At === 0)
        var l = nt.return;
      else
        l = nt, Zn = Pi = null, Fc(l), uc = null, Jc = 0, l = nt;
      for (; l !== null; )
        Zy(l.alternate, l), l = l.return;
      nt = null;
    }
  }
  function pf(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Yh(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Wn = 0, Ss(), Yt = l, nt = u = an(l.current, null), ft = n, At = 0, La = null, Ze = !1, sc = be(l, n), ys = !1, dc = Qa = lp = Lu = Cn = Ft = 0, Va = fl = null, Un = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var r = 31 - Ml(c), s = 1 << r;
        n |= l[r], c &= ~s;
      }
    return Xu = n, tn(), u;
  }
  function gf(l, n) {
    Je = null, L.H = rf, n === Jn || n === lc ? (n = fy(), At = 3) : n === jr ? (n = fy(), At = 4) : At = n === Yy ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, La = n, nt === null && (Ft = 1, sf(
      l,
      nn(n, l.current)
    ));
  }
  function vf() {
    var l = ia.current;
    return l === null ? !0 : (ft & 4194048) === ft ? Ga === null : (ft & 62914560) === ft || (ft & 536870912) !== 0 ? l === Ga : !1;
  }
  function pg() {
    var l = L.H;
    return L.H = rf, l === null ? rf : l;
  }
  function gg() {
    var l = L.A;
    return L.A = tp, l;
  }
  function Eh() {
    Ft = 4, Ze || (ft & 4194048) !== ft && ia.current !== null || (sc = !0), (Cn & 134217727) === 0 && (Lu & 134217727) === 0 || Yt === null || Di(
      Yt,
      ft,
      Qa,
      !1
    );
  }
  function ip(l, n, u) {
    var c = St;
    St |= 2;
    var r = pg(), s = gg();
    (Yt !== l || ft !== n) && (zt = null, pf(l, n)), n = !1;
    var m = Ft;
    e: do
      try {
        if (At !== 0 && nt !== null) {
          var v = nt, T = La;
          switch (At) {
            case 8:
              Ss(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ia.current === null && (n = !0);
              var x = At;
              if (At = 0, La = null, Sf(l, v, T, x), u && sc) {
                m = 0;
                break e;
              }
              break;
            default:
              x = At, At = 0, La = null, Sf(l, v, T, x);
          }
        }
        vg(), m = Ft;
        break;
      } catch (V) {
        gf(l, V);
      }
    while (!0);
    return n && l.shellSuspendCounter++, Zn = Pi = null, St = c, L.H = r, L.A = s, nt === null && (Yt = null, ft = 0, tn()), m;
  }
  function vg() {
    for (; nt !== null; ) zi(nt);
  }
  function eS(l, n) {
    var u = St;
    St |= 2;
    var c = pg(), r = gg();
    Yt !== l || ft !== n ? (zt = null, gs = Tl() + 500, pf(l, n)) : sc = be(
      l,
      n
    );
    e: do
      try {
        if (At !== 0 && nt !== null) {
          n = nt;
          var s = La;
          t: switch (At) {
            case 1:
              At = 0, La = null, Sf(l, n, s, 1);
              break;
            case 2:
            case 9:
              if (Yr(s)) {
                At = 0, La = null, bg(n);
                break;
              }
              n = function() {
                At !== 2 && At !== 9 || Yt !== l || (At = 7), Fn(l);
              }, s.then(n, n);
              break e;
            case 3:
              At = 7;
              break e;
            case 4:
              At = 5;
              break e;
            case 7:
              Yr(s) ? (At = 0, La = null, bg(n)) : (At = 0, La = null, Sf(l, n, s, 7));
              break;
            case 5:
              var m = null;
              switch (nt.tag) {
                case 26:
                  m = nt.memoizedState;
                case 5:
                case 27:
                  var v = nt;
                  if (m ? Vh(m) : v.stateNode.complete) {
                    At = 0, La = null;
                    var T = v.sibling;
                    if (T !== null) nt = T;
                    else {
                      var x = v.return;
                      x !== null ? (nt = x, bs(x)) : nt = null;
                    }
                    break t;
                  }
              }
              At = 0, La = null, Sf(l, n, s, 5);
              break;
            case 6:
              At = 0, La = null, Sf(l, n, s, 6);
              break;
            case 8:
              Ss(), Ft = 6;
              break e;
            default:
              throw Error(M(462));
          }
        }
        Sg();
        break;
      } catch (V) {
        gf(l, V);
      }
    while (!0);
    return Zn = Pi = null, L.H = c, L.A = r, St = u, nt !== null ? 0 : (Yt = null, ft = 0, tn(), Ft);
  }
  function Sg() {
    for (; nt !== null && !Bo(); )
      zi(nt);
  }
  function zi(l) {
    var n = cs(l.alternate, l, Xu);
    l.memoizedProps = l.pendingProps, n === null ? bs(l) : nt = n;
  }
  function bg(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Ly(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          ft
        );
        break;
      case 11:
        n = Ly(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          ft
        );
        break;
      case 5:
        Fc(n);
      default:
        Zy(u, n), n = nt = F0(n, Xu), n = cs(u, n, Xu);
    }
    l.memoizedProps = l.pendingProps, n === null ? bs(l) : nt = n;
  }
  function Sf(l, n, u, c) {
    Zn = Pi = null, Fc(n), uc = null, Jc = 0;
    var r = n.return;
    try {
      if (ig(
        l,
        r,
        n,
        u,
        ft
      )) {
        Ft = 1, sf(
          l,
          nn(u, l.current)
        ), nt = null;
        return;
      }
    } catch (s) {
      if (r !== null) throw nt = r, s;
      Ft = 1, sf(
        l,
        nn(u, l.current)
      ), nt = null;
      return;
    }
    n.flags & 32768 ? (ot || c === 1 ? l = !0 : sc || (ft & 536870912) !== 0 ? l = !1 : (Ze = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ia.current, c !== null && c.tag === 13 && (c.flags |= 16384))), cp(n, l)) : bs(n);
  }
  function bs(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        cp(
          n,
          Ze
        );
        return;
      }
      l = n.return;
      var u = al(
        n.alternate,
        n,
        Xu
      );
      if (u !== null) {
        nt = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        nt = n;
        return;
      }
      nt = n = l;
    } while (n !== null);
    Ft === 0 && (Ft = 5);
  }
  function cp(l, n) {
    do {
      var u = fg(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, nt = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        nt = l;
        return;
      }
      nt = l = u;
    } while (l !== null);
    Ft = 6, nt = null;
  }
  function Eg(l, n, u, c, r, s, m, v, T) {
    l.cancelPendingCommit = null;
    do
      Th();
    while (ht !== 0);
    if ((St & 6) !== 0) throw Error(M(327));
    if (n !== null) {
      if (n === l.current) throw Error(M(177));
      if (s = n.lanes | n.childLanes, s |= ga, rd(
        l,
        u,
        s,
        m,
        v,
        T
      ), l === Yt && (nt = Yt = null, ft = 0), fo = n, hc = l, Wn = u, vh = s, Za = r, ap = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, zg(Gi, function() {
        return Ah(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = L.T, L.T = null, r = j.p, j.p = 2, m = St, St |= 4;
        try {
          Pv(l, n, u);
        } finally {
          St = m, j.p = r, L.T = c;
        }
      }
      ht = 1, Tg(), Ag(), Og();
    }
  }
  function Tg() {
    if (ht === 1) {
      ht = 0;
      var l = hc, n = fo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = L.T, L.T = null;
        var c = j.p;
        j.p = 2;
        var r = St;
        St |= 4;
        try {
          Tt(n, l);
          var s = Bh, m = wc(l.containerInfo), v = s.focusedElem, T = s.selectionRange;
          if (m !== v && v && v.ownerDocument && ty(
            v.ownerDocument.documentElement,
            v
          )) {
            if (T !== null && di(v)) {
              var x = T.start, V = T.end;
              if (V === void 0 && (V = x), "selectionStart" in v)
                v.selectionStart = x, v.selectionEnd = Math.min(
                  V,
                  v.value.length
                );
              else {
                var F = v.ownerDocument || document, B = F && F.defaultView || window;
                if (B.getSelection) {
                  var w = B.getSelection(), ge = v.textContent.length, He = Math.min(T.start, ge), qt = T.end === void 0 ? He : Math.min(T.end, ge);
                  !w.extend && He > qt && (m = qt, qt = He, He = m);
                  var U = ey(
                    v,
                    He
                  ), z = ey(
                    v,
                    qt
                  );
                  if (U && z && (w.rangeCount !== 1 || w.anchorNode !== U.node || w.anchorOffset !== U.offset || w.focusNode !== z.node || w.focusOffset !== z.offset)) {
                    var N = F.createRange();
                    N.setStart(U.node, U.offset), w.removeAllRanges(), He > qt ? (w.addRange(N), w.extend(z.node, z.offset)) : (N.setEnd(z.node, z.offset), w.addRange(N));
                  }
                }
              }
            }
            for (F = [], w = v; w = w.parentNode; )
              w.nodeType === 1 && F.push({
                element: w,
                left: w.scrollLeft,
                top: w.scrollTop
              });
            for (typeof v.focus == "function" && v.focus(), v = 0; v < F.length; v++) {
              var J = F[v];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          Ui = !!Rs, Bh = Rs = null;
        } finally {
          St = r, j.p = c, L.T = u;
        }
      }
      l.current = n, ht = 2;
    }
  }
  function Ag() {
    if (ht === 2) {
      ht = 0;
      var l = hc, n = fo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = L.T, L.T = null;
        var c = j.p;
        j.p = 2;
        var r = St;
        St |= 4;
        try {
          io(l, n.alternate, n);
        } finally {
          St = r, j.p = c, L.T = u;
        }
      }
      ht = 3;
    }
  }
  function Og() {
    if (ht === 4 || ht === 3) {
      ht = 0, cu();
      var l = hc, n = fo, u = Wn, c = ap;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ht = 5 : (ht = 0, fo = hc = null, _g(l, l.pendingLanes));
      var r = l.pendingLanes;
      if (r === 0 && (Qu = null), sd(u), n = n.stateNode, gl && typeof gl.onCommitFiberRoot == "function")
        try {
          gl.onCommitFiberRoot(
            Gn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = L.T, r = j.p, j.p = 2, L.T = null;
        try {
          for (var s = l.onRecoverableError, m = 0; m < c.length; m++) {
            var v = c[m];
            s(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          L.T = n, j.p = r;
        }
      }
      (Wn & 3) !== 0 && Th(), Fn(l), r = l.pendingLanes, (u & 261930) !== 0 && (r & 42) !== 0 ? l === Sh ? ro++ : (ro = 0, Sh = l) : ro = 0, Ts(0);
    }
  }
  function _g(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Zc(n)));
  }
  function Th() {
    return Tg(), Ag(), Og(), Ah();
  }
  function Ah() {
    if (ht !== 5) return !1;
    var l = hc, n = vh;
    vh = 0;
    var u = sd(Wn), c = L.T, r = j.p;
    try {
      j.p = 32 > u ? 32 : u, L.T = null, u = Za, Za = null;
      var s = hc, m = Wn;
      if (ht = 0, fo = hc = null, Wn = 0, (St & 6) !== 0) throw Error(M(331));
      var v = St;
      if (St |= 4, Py(s.current), Iy(
        s,
        s.current,
        m,
        u
      ), St = v, Ts(0, !1), gl && typeof gl.onPostCommitFiberRoot == "function")
        try {
          gl.onPostCommitFiberRoot(Gn, s);
        } catch {
        }
      return !0;
    } finally {
      j.p = r, L.T = c, _g(l, n);
    }
  }
  function Dg(l, n, u) {
    n = nn(u, n), n = df(l.stateNode, n, 2), l = gi(l, n, 2), l !== null && (Ra(l, 2), Fn(l));
  }
  function Nt(l, n, u) {
    if (l.tag === 3)
      Dg(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Dg(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Qu === null || !Qu.has(c))) {
            l = nn(u, l), u = ug(2), c = gi(n, u, 2), c !== null && (jy(
              u,
              c,
              n,
              l
            ), Ra(c, 2), Fn(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function Oh(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new mg();
      var r = /* @__PURE__ */ new Set();
      c.set(n, r);
    } else
      r = c.get(n), r === void 0 && (r = /* @__PURE__ */ new Set(), c.set(n, r));
    r.has(u) || (ys = !0, r.add(u), l = op.bind(null, l, n, u), n.then(l, l));
  }
  function op(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Yt === l && (ft & u) === u && (Ft === 4 || Ft === 3 && (ft & 62914560) === ft && 300 > Tl() - ps ? (St & 2) === 0 && pf(l, 0) : lp |= u, dc === ft && (dc = 0)), Fn(l);
  }
  function _h(l, n) {
    n === 0 && (n = Qe()), l = aa(l, n), l !== null && (Ra(l, n), Fn(l));
  }
  function tS(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), _h(l, u);
  }
  function fn(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, r = l.memoizedState;
        r !== null && (u = r.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(M(314));
    }
    c !== null && c.delete(n), _h(l, u);
  }
  function zg(l, n) {
    return tr(l, n);
  }
  var Es = null, mc = null, Dh = !1, zh = !1, fp = !1, yc = 0;
  function Fn(l) {
    l !== mc && l.next === null && (mc === null ? Es = mc = l : mc = mc.next = l), zh = !0, Dh || (Dh = !0, bf());
  }
  function Ts(l, n) {
    if (!fp && zh) {
      fp = !0;
      do
        for (var u = !1, c = Es; c !== null; ) {
          if (l !== 0) {
            var r = c.pendingLanes;
            if (r === 0) var s = 0;
            else {
              var m = c.suspendedLanes, v = c.pingedLanes;
              s = (1 << 31 - Ml(42 | l) + 1) - 1, s &= r & ~(m & ~v), s = s & 201326741 ? s & 201326741 | 1 : s ? s | 2 : 0;
            }
            s !== 0 && (u = !0, _s(c, s));
          } else
            s = ft, s = Ge(
              c,
              c === Yt ? s : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (s & 3) === 0 || be(c, s) || (u = !0, _s(c, s));
          c = c.next;
        }
      while (u);
      fp = !1;
    }
  }
  function As() {
    Os();
  }
  function Os() {
    zh = Dh = !1;
    var l = 0;
    yc !== 0 && Ng() && (l = yc);
    for (var n = Tl(), u = null, c = Es; c !== null; ) {
      var r = c.next, s = rp(c, n);
      s === 0 ? (c.next = null, u === null ? Es = r : u.next = r, r === null && (mc = u)) : (u = c, (l !== 0 || (s & 3) !== 0) && (zh = !0)), c = r;
    }
    ht !== 0 && ht !== 5 || Ts(l), yc !== 0 && (yc = 0);
  }
  function rp(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, r = l.expirationTimes, s = l.pendingLanes & -62914561; 0 < s; ) {
      var m = 31 - Ml(s), v = 1 << m, T = r[m];
      T === -1 ? ((v & u) === 0 || (v & c) !== 0) && (r[m] = dt(v, n)) : T <= n && (l.expiredLanes |= v), s &= ~v;
    }
    if (n = Yt, u = ft, u = Ge(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (At === 2 || At === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && ve(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || be(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && ve(c), sd(u)) {
        case 2:
        case 8:
          u = jo;
          break;
        case 32:
          u = Gi;
          break;
        case 268435456:
          u = ar;
          break;
        default:
          u = Gi;
      }
      return c = sp.bind(null, l), u = tr(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && ve(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function sp(l, n) {
    if (ht !== 0 && ht !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Th() && l.callbackNode !== u)
      return null;
    var c = ft;
    return c = Ge(
      l,
      l === Yt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (up(l, c, n), rp(l, Tl()), l.callbackNode != null && l.callbackNode === u ? sp.bind(null, l) : null);
  }
  function _s(l, n) {
    if (Th()) return null;
    up(l, n, !0);
  }
  function bf() {
    _f(function() {
      (St & 6) !== 0 ? tr(
        lr,
        As
      ) : Os();
    });
  }
  function so() {
    if (yc === 0) {
      var l = ec;
      l === 0 && (l = C, C <<= 1, (C & 261888) === 0 && (C = 256)), yc = l;
    }
    return yc;
  }
  function dp(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Vi("" + l);
  }
  function Rg(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Ef(l, n, u, c, r) {
    if (n === "submit" && u && u.stateNode === r) {
      var s = dp(
        (r[Kt] || null).action
      ), m = c.submitter;
      m && (n = (n = m[Kt] || null) ? dp(n.formAction) : m.getAttribute("formAction"), n !== null && (s = n, m = null));
      var v = new gr(
        "action",
        "action",
        null,
        c,
        r
      );
      l.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (yc !== 0) {
                  var T = m ? Rg(r, m) : new FormData(r);
                  ih(
                    u,
                    {
                      pending: !0,
                      data: T,
                      method: r.method,
                      action: s
                    },
                    null,
                    T
                  );
                }
              } else
                typeof s == "function" && (v.preventDefault(), T = m ? Rg(r, m) : new FormData(r), ih(
                  u,
                  {
                    pending: !0,
                    data: T,
                    method: r.method,
                    action: s
                  },
                  s,
                  T
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var ho = 0; ho < Ln.length; ho++) {
    var Rh = Ln[ho], Mh = Rh.toLowerCase(), hp = Rh[0].toUpperCase() + Rh.slice(1);
    Na(
      Mh,
      "on" + hp
    );
  }
  Na(Lt, "onAnimationEnd"), Na(Or, "onAnimationIteration"), Na(ay, "onAnimationStart"), Na("dblclick", "onDoubleClick"), Na("focusin", "onFocus"), Na("focusout", "onBlur"), Na(ny, "onTransitionRun"), Na(Gc, "onTransitionStart"), Na(_r, "onTransitionCancel"), Na(Xn, "onTransitionEnd"), Cc("onMouseEnter", ["mouseout", "mouseover"]), Cc("onMouseLeave", ["mouseout", "mouseover"]), Cc("onPointerEnter", ["pointerout", "pointerover"]), Cc("onPointerLeave", ["pointerout", "pointerover"]), Ia(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ia(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ia("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ia(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ia(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ia(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var mo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Mg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo)
  );
  function mp(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], r = c.event;
      c = c.listeners;
      e: {
        var s = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var v = c[m], T = v.instance, x = v.currentTarget;
            if (v = v.listener, T !== s && r.isPropagationStopped())
              break e;
            s = v, r.currentTarget = x;
            try {
              s(r);
            } catch (V) {
              Ii(V);
            }
            r.currentTarget = null, s = T;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (v = c[m], T = v.instance, x = v.currentTarget, v = v.listener, T !== s && r.isPropagationStopped())
              break e;
            s = v, r.currentTarget = x;
            try {
              s(r);
            } catch (V) {
              Ii(V);
            }
            r.currentTarget = null, s = T;
          }
      }
    }
  }
  function it(l, n) {
    var u = n[cr];
    u === void 0 && (u = n[cr] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Ds(n, l, 2, !1), u.add(c));
  }
  function Ch(l, n, u) {
    var c = 0;
    n && (c |= 4), Ds(
      u,
      l,
      c,
      n
    );
  }
  var Uh = "_reactListening" + Math.random().toString(36).slice(2);
  function yp(l) {
    if (!l[Uh]) {
      l[Uh] = !0, Ca.forEach(function(u) {
        u !== "selectionchange" && (Mg.has(u) || Ch(u, !1, l), Ch(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Uh] || (n[Uh] = !0, Ch("selectionchange", !1, n));
    }
  }
  function Ds(l, n, u, c) {
    switch (js(n)) {
      case 2:
        var r = ra;
        break;
      case 8:
        r = Ju;
        break;
      default:
        r = Bn;
    }
    u = r.bind(
      null,
      n,
      u,
      l
    ), r = void 0, !Xm || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (r = !0), c ? r !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: r
    }) : l.addEventListener(n, u, !0) : r !== void 0 ? l.addEventListener(n, u, {
      passive: r
    }) : l.addEventListener(n, u, !1);
  }
  function Tf(l, n, u, c, r) {
    var s = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var v = c.stateNode.containerInfo;
          if (v === r) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === r)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (m = Dc(v), m === null) return;
            if (T = m.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              c = s = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        c = c.return;
      }
    yr(function() {
      var x = s, V = pd(u), F = [];
      e: {
        var B = W0.get(l);
        if (B !== void 0) {
          var w = gr, ge = l;
          switch (l) {
            case "keypress":
              if (pr(u) === 0) break e;
            case "keydown":
            case "keyup":
              w = Td;
              break;
            case "focusin":
              ge = "focus", w = Ed;
              break;
            case "focusout":
              ge = "blur", w = Ed;
              break;
            case "beforeblur":
            case "afterblur":
              w = Ed;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = Y0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = q0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = $v;
              break;
            case Lt:
            case Or:
            case ay:
              w = Zm;
              break;
            case Xn:
              w = V0;
              break;
            case "scroll":
            case "scrollend":
              w = j0;
              break;
            case "wheel":
              w = Km;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = xc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = Od;
              break;
            case "toggle":
            case "beforetoggle":
              w = Z0;
          }
          var He = (n & 4) !== 0, qt = !He && (l === "scroll" || l === "scrollend"), U = He ? B !== null ? B + "Capture" : null : B;
          He = [];
          for (var z = x, N; z !== null; ) {
            var J = z;
            if (N = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || N === null || U === null || (J = Qo(z, U), J != null && He.push(
              zs(z, J, N)
            )), qt) break;
            z = z.return;
          }
          0 < He.length && (B = new w(
            B,
            ge,
            null,
            u,
            V
          ), F.push({ event: B, listeners: He }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (B = l === "mouseover" || l === "pointerover", w = l === "mouseout" || l === "pointerout", B && u !== mr && (ge = u.relatedTarget || u.fromElement) && (Dc(ge) || ge[_c]))
            break e;
          if ((w || B) && (B = V.window === V ? V : (B = V.ownerDocument) ? B.defaultView || B.parentWindow : window, w ? (ge = u.relatedTarget || u.toElement, w = x, ge = ge ? Dc(ge) : null, ge !== null && (qt = re(ge), He = ge.tag, ge !== qt || He !== 5 && He !== 27 && He !== 6) && (ge = null)) : (w = null, ge = x), w !== ge)) {
            if (He = Y0, J = "onMouseLeave", U = "onMouseEnter", z = "mouse", (l === "pointerout" || l === "pointerover") && (He = Od, J = "onPointerLeave", U = "onPointerEnter", z = "pointer"), qt = w == null ? B : wo(w), N = ge == null ? B : wo(ge), B = new He(
              J,
              z + "leave",
              w,
              u,
              V
            ), B.target = qt, B.relatedTarget = N, J = null, Dc(V) === x && (He = new He(
              U,
              z + "enter",
              ge,
              u,
              V
            ), He.target = N, He.relatedTarget = qt, J = He), qt = J, w && ge)
              t: {
                for (He = Cg, U = w, z = ge, N = 0, J = U; J; J = He(J))
                  N++;
                J = 0;
                for (var _e = z; _e; _e = He(_e))
                  J++;
                for (; 0 < N - J; )
                  U = He(U), N--;
                for (; 0 < J - N; )
                  z = He(z), J--;
                for (; N--; ) {
                  if (U === z || z !== null && U === z.alternate) {
                    He = U;
                    break t;
                  }
                  U = He(U), z = He(z);
                }
                He = null;
              }
            else He = null;
            w !== null && pp(
              F,
              B,
              w,
              He,
              !1
            ), ge !== null && qt !== null && pp(
              F,
              qt,
              ge,
              He,
              !0
            );
          }
        }
        e: {
          if (B = x ? wo(x) : window, w = B.nodeName && B.nodeName.toLowerCase(), w === "select" || w === "input" && B.type === "file")
            var bt = Rd;
          else if (Dd(B))
            if (Fm)
              bt = Ki;
            else {
              bt = $0;
              var Ee = Pm;
            }
          else
            w = B.nodeName, !w || w.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? x && wm(x.elementType) && (bt = Rd) : bt = k0;
          if (bt && (bt = bt(l, x))) {
            yu(
              F,
              bt,
              u,
              V
            );
            break e;
          }
          Ee && Ee(l, B, x), l === "focusout" && x && B.type === "number" && x.memoizedProps.value != null && Xo(B, "number", B.value);
        }
        switch (Ee = x ? wo(x) : window, l) {
          case "focusin":
            (Dd(Ee) || Ee.contentEditable === "true") && (vu = Ee, Tr = x, ki = null);
            break;
          case "focusout":
            ki = Tr = vu = null;
            break;
          case "mousedown":
            Su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Su = !1, bu(F, u, V);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            bu(F, u, V);
        }
        var Ke;
        if (Zo)
          e: {
            switch (l) {
              case "compositionstart":
                var tt = "onCompositionStart";
                break e;
              case "compositionend":
                tt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                tt = "onCompositionUpdate";
                break e;
            }
            tt = void 0;
          }
        else
          jc ? Ji(l, u) && (tt = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (tt = "onCompositionStart");
        tt && (Ql && u.locale !== "ko" && (jc || tt !== "onCompositionStart" ? tt === "onCompositionEnd" && jc && (Ke = B0()) : (ri = V, gd = "value" in ri ? ri.value : ri.textContent, jc = !0)), Ee = Hh(x, tt), 0 < Ee.length && (tt = new En(
          tt,
          l,
          null,
          u,
          V
        ), F.push({ event: tt, listeners: Ee }), Ke ? tt.data = Ke : (Ke = _d(u), Ke !== null && (tt.data = Ke)))), (Ke = km ? J0(l, u) : K0(l, u)) && (tt = Hh(x, "onBeforeInput"), 0 < tt.length && (Ee = new En(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          V
        ), F.push({
          event: Ee,
          listeners: tt
        }), Ee.data = Ke)), Ef(
          F,
          l,
          x,
          u,
          V
        );
      }
      mp(F, n);
    });
  }
  function zs(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Hh(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var r = l, s = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || s === null || (r = Qo(l, u), r != null && c.unshift(
        zs(l, r, s)
      ), r = Qo(l, n), r != null && c.push(
        zs(l, r, s)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Cg(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function pp(l, n, u, c, r) {
    for (var s = n._reactName, m = []; u !== null && u !== c; ) {
      var v = u, T = v.alternate, x = v.stateNode;
      if (v = v.tag, T !== null && T === c) break;
      v !== 5 && v !== 26 && v !== 27 || x === null || (T = x, r ? (x = Qo(u, s), x != null && m.unshift(
        zs(u, x, T)
      )) : r || (x = Qo(u, s), x != null && m.push(
        zs(u, x, T)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var gp = /\r\n?/g, Ug = /\u0000|\uFFFD/g;
  function Nh(l) {
    return (typeof l == "string" ? l : "" + l).replace(gp, `
`).replace(Ug, "");
  }
  function vp(l, n) {
    return n = Nh(n), Nh(l) === n;
  }
  function xt(l, n, u, c, r, s) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Uc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Uc(l, "" + c);
        break;
      case "className":
        Go(l, "class", c);
        break;
      case "tabIndex":
        Go(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Go(l, u, c);
        break;
      case "style":
        x0(l, c, s);
        break;
      case "data":
        if (n !== "object") {
          Go(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Vi("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof s == "function" && (u === "formAction" ? (n !== "input" && xt(l, n, "name", r.name, r, null), xt(
            l,
            n,
            "formEncType",
            r.formEncType,
            r,
            null
          ), xt(
            l,
            n,
            "formMethod",
            r.formMethod,
            r,
            null
          ), xt(
            l,
            n,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (xt(l, n, "encType", r.encType, r, null), xt(l, n, "method", r.method, r, null), xt(l, n, "target", r.target, r, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = Vi("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Ll);
        break;
      case "onScroll":
        c != null && it("scroll", l);
        break;
      case "onScrollEnd":
        c != null && it("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(M(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(M(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Vi("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        it("beforetoggle", l), it("toggle", l), oi(l, "popover", c);
        break;
      case "xlinkActuate":
        fi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        fi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        fi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        fi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        fi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        fi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        fi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        fi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        fi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        oi(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Zv.get(u) || u, oi(l, u, c));
    }
  }
  function Sp(l, n, u, c, r, s) {
    switch (u) {
      case "style":
        x0(l, c, s);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(M(61));
          if (u = c.__html, u != null) {
            if (r.children != null) throw Error(M(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Uc(l, c) : (typeof c == "number" || typeof c == "bigint") && Uc(l, "" + c);
        break;
      case "onScroll":
        c != null && it("scroll", l);
        break;
      case "onScrollEnd":
        c != null && it("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Ll);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Mc.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (r = u.endsWith("Capture"), n = u.slice(2, r ? u.length - 7 : void 0), s = l[Kt] || null, s = s != null ? s[u] : null, typeof s == "function" && l.removeEventListener(n, s, r), typeof c == "function")) {
              typeof s != "function" && s !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, r);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : oi(l, u, c);
          }
    }
  }
  function kl(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        it("error", l), it("load", l);
        var c = !1, r = !1, s;
        for (s in u)
          if (u.hasOwnProperty(s)) {
            var m = u[s];
            if (m != null)
              switch (s) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(M(137, n));
                default:
                  xt(l, n, s, m, u, null);
              }
          }
        r && xt(l, n, "srcSet", u.srcSet, u, null), c && xt(l, n, "src", u.src, u, null);
        return;
      case "input":
        it("invalid", l);
        var v = s = m = r = null, T = null, x = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var V = u[c];
            if (V != null)
              switch (c) {
                case "name":
                  r = V;
                  break;
                case "type":
                  m = V;
                  break;
                case "checked":
                  T = V;
                  break;
                case "defaultChecked":
                  x = V;
                  break;
                case "value":
                  s = V;
                  break;
                case "defaultValue":
                  v = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(M(137, n));
                  break;
                default:
                  xt(l, n, c, V, u, null);
              }
          }
        yd(
          l,
          s,
          v,
          T,
          x,
          m,
          r,
          !1
        );
        return;
      case "select":
        it("invalid", l), c = m = s = null;
        for (r in u)
          if (u.hasOwnProperty(r) && (v = u[r], v != null))
            switch (r) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                c = v;
              default:
                xt(l, n, r, v, u, null);
            }
        n = s, u = m, l.multiple = !!c, n != null ? fu(l, !!c, n, !1) : u != null && fu(l, !!c, u, !0);
        return;
      case "textarea":
        it("invalid", l), s = r = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (v = u[m], v != null))
            switch (m) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                r = v;
                break;
              case "children":
                s = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(M(91));
                break;
              default:
                xt(l, n, m, v, u, null);
            }
        Ym(l, c, r, s);
        return;
      case "option":
        for (T in u)
          u.hasOwnProperty(T) && (c = u[T], c != null) && (T === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : xt(l, n, T, c, u, null));
        return;
      case "dialog":
        it("beforetoggle", l), it("toggle", l), it("cancel", l), it("close", l);
        break;
      case "iframe":
      case "object":
        it("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < mo.length; c++)
          it(mo[c], l);
        break;
      case "image":
        it("error", l), it("load", l);
        break;
      case "details":
        it("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        it("error", l), it("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (x in u)
          if (u.hasOwnProperty(x) && (c = u[x], c != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(M(137, n));
              default:
                xt(l, n, x, c, u, null);
            }
        return;
      default:
        if (wm(n)) {
          for (V in u)
            u.hasOwnProperty(V) && (c = u[V], c !== void 0 && Sp(
              l,
              n,
              V,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (v in u)
      u.hasOwnProperty(v) && (c = u[v], c != null && xt(l, n, v, c, u, null));
  }
  function lS(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var r = null, s = null, m = null, v = null, T = null, x = null, V = null;
        for (w in u) {
          var F = u[w];
          if (u.hasOwnProperty(w) && F != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = F;
              default:
                c.hasOwnProperty(w) || xt(l, n, w, null, c, F);
            }
        }
        for (var B in c) {
          var w = c[B];
          if (F = u[B], c.hasOwnProperty(B) && (w != null || F != null))
            switch (B) {
              case "type":
                s = w;
                break;
              case "name":
                r = w;
                break;
              case "checked":
                x = w;
                break;
              case "defaultChecked":
                V = w;
                break;
              case "value":
                m = w;
                break;
              case "defaultValue":
                v = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(M(137, n));
                break;
              default:
                w !== F && xt(
                  l,
                  n,
                  B,
                  w,
                  c,
                  F
                );
            }
        }
        md(
          l,
          m,
          v,
          T,
          x,
          V,
          s,
          r
        );
        return;
      case "select":
        w = m = v = B = null;
        for (s in u)
          if (T = u[s], u.hasOwnProperty(s) && T != null)
            switch (s) {
              case "value":
                break;
              case "multiple":
                w = T;
              default:
                c.hasOwnProperty(s) || xt(
                  l,
                  n,
                  s,
                  null,
                  c,
                  T
                );
            }
        for (r in c)
          if (s = c[r], T = u[r], c.hasOwnProperty(r) && (s != null || T != null))
            switch (r) {
              case "value":
                B = s;
                break;
              case "defaultValue":
                v = s;
                break;
              case "multiple":
                m = s;
              default:
                s !== T && xt(
                  l,
                  n,
                  r,
                  s,
                  c,
                  T
                );
            }
        n = v, u = m, c = w, B != null ? fu(l, !!u, B, !1) : !!c != !!u && (n != null ? fu(l, !!u, n, !0) : fu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        w = B = null;
        for (v in u)
          if (r = u[v], u.hasOwnProperty(v) && r != null && !c.hasOwnProperty(v))
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                xt(l, n, v, null, c, r);
            }
        for (m in c)
          if (r = c[m], s = u[m], c.hasOwnProperty(m) && (r != null || s != null))
            switch (m) {
              case "value":
                B = r;
                break;
              case "defaultValue":
                w = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(M(91));
                break;
              default:
                r !== s && xt(l, n, m, r, c, s);
            }
        N0(l, B, w);
        return;
      case "option":
        for (var ge in u)
          B = u[ge], u.hasOwnProperty(ge) && B != null && !c.hasOwnProperty(ge) && (ge === "selected" ? l.selected = !1 : xt(
            l,
            n,
            ge,
            null,
            c,
            B
          ));
        for (T in c)
          B = c[T], w = u[T], c.hasOwnProperty(T) && B !== w && (B != null || w != null) && (T === "selected" ? l.selected = B && typeof B != "function" && typeof B != "symbol" : xt(
            l,
            n,
            T,
            B,
            c,
            w
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var He in u)
          B = u[He], u.hasOwnProperty(He) && B != null && !c.hasOwnProperty(He) && xt(l, n, He, null, c, B);
        for (x in c)
          if (B = c[x], w = u[x], c.hasOwnProperty(x) && B !== w && (B != null || w != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(M(137, n));
                break;
              default:
                xt(
                  l,
                  n,
                  x,
                  B,
                  c,
                  w
                );
            }
        return;
      default:
        if (wm(n)) {
          for (var qt in u)
            B = u[qt], u.hasOwnProperty(qt) && B !== void 0 && !c.hasOwnProperty(qt) && Sp(
              l,
              n,
              qt,
              void 0,
              c,
              B
            );
          for (V in c)
            B = c[V], w = u[V], !c.hasOwnProperty(V) || B === w || B === void 0 && w === void 0 || Sp(
              l,
              n,
              V,
              B,
              c,
              w
            );
          return;
        }
    }
    for (var U in u)
      B = u[U], u.hasOwnProperty(U) && B != null && !c.hasOwnProperty(U) && xt(l, n, U, null, c, B);
    for (F in c)
      B = c[F], w = u[F], !c.hasOwnProperty(F) || B === w || B == null && w == null || xt(l, n, F, B, c, w);
  }
  function xh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function bp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var r = u[c], s = r.transferSize, m = r.initiatorType, v = r.duration;
        if (s && v && xh(m)) {
          for (m = 0, v = r.responseEnd, c += 1; c < u.length; c++) {
            var T = u[c], x = T.startTime;
            if (x > v) break;
            var V = T.transferSize, F = T.initiatorType;
            V && xh(F) && (T = T.responseEnd, m += V * (T < v ? 1 : (v - x) / (T - x)));
          }
          if (--c, n += 8 * (s + m) / (r.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Rs = null, Bh = null;
  function Ms(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Af(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Hg(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function jh(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Of = null;
  function Ng() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Of ? !1 : (Of = l, !0) : (Of = null, !1);
  }
  var xg = typeof setTimeout == "function" ? setTimeout : void 0, Yh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ep = typeof Promise == "function" ? Promise : void 0, _f = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ep < "u" ? function(l) {
    return Ep.resolve(null).then(l).catch(Bg);
  } : xg;
  function Bg(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Vu(l) {
    return l === "head";
  }
  function Cs(l, n) {
    var u = n, c = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(r), Uf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          Ri(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, Ri(u);
          for (var s = u.firstChild; s; ) {
            var m = s.nextSibling, v = s.nodeName;
            s[qo] || v === "SCRIPT" || v === "STYLE" || v === "LINK" && s.rel.toLowerCase() === "stylesheet" || u.removeChild(s), s = m;
          }
        } else
          u === "body" && Ri(l.ownerDocument.body);
      u = r;
    } while (u);
    Uf(n);
  }
  function Tp(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function rl(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rl(u), Qi(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Ap(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var r = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[qo])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (s = l.getAttribute("rel"), s === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (s !== r.rel || l.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || l.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (s = l.getAttribute("src"), (s !== (r.src == null ? null : r.src) || l.getAttribute("type") !== (r.type == null ? null : r.type) || l.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && s && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var s = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && l.getAttribute("name") === s)
          return l;
      } else return l;
      if (l = Wl(l.nextSibling), l === null) break;
    }
    return null;
  }
  function aS(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Wl(l.nextSibling), l === null)) return null;
    return l;
  }
  function ke(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Wl(l.nextSibling), l === null)) return null;
    return l;
  }
  function Op(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Hn(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Df(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Wl(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var zf = null;
  function qh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Wl(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function wh(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function In(l, n, u) {
    switch (n = Ms(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(M(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(M(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(M(454));
        return l;
      default:
        throw Error(M(451));
    }
  }
  function Ri(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Qi(l);
  }
  var Ka = /* @__PURE__ */ new Map(), Gh = /* @__PURE__ */ new Set();
  function yo(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var yl = j.d;
  j.d = {
    f: _p,
    r: nS,
    D: _l,
    C: G,
    L: Rt,
    m: uS,
    X: zp,
    S: Dp,
    M: Mi
  };
  function _p() {
    var l = yl.f(), n = vs();
    return l || n;
  }
  function nS(l) {
    var n = zc(l);
    n !== null && n.tag === 5 && n.type === "form" ? ff(n) : yl.r(l);
  }
  var po = typeof document > "u" ? null : document;
  function jg(l, n, u) {
    var c = po;
    if (c && typeof n == "string" && n) {
      var r = bn(n);
      r = 'link[rel="' + l + '"][href="' + r + '"]', typeof u == "string" && (r += '[crossorigin="' + u + '"]'), Gh.has(r) || (Gh.add(r), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(r) === null && (n = c.createElement("link"), kl(n, "link", l), Al(n), c.head.appendChild(n)));
    }
  }
  function _l(l) {
    yl.D(l), jg("dns-prefetch", l, null);
  }
  function G(l, n) {
    yl.C(l, n), jg("preconnect", l, n);
  }
  function Rt(l, n, u) {
    yl.L(l, n, u);
    var c = po;
    if (c && l && n) {
      var r = 'link[rel="preload"][as="' + bn(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (r += '[imagesrcset="' + bn(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (r += '[imagesizes="' + bn(
        u.imageSizes
      ) + '"]')) : r += '[href="' + bn(l) + '"]';
      var s = r;
      switch (n) {
        case "style":
          s = Zu(l);
          break;
        case "script":
          s = go(l);
      }
      Ka.has(s) || (l = ie(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), Ka.set(s, l), c.querySelector(r) !== null || n === "style" && c.querySelector(Nn(s)) || n === "script" && c.querySelector(Rf(s)) || (n = c.createElement("link"), kl(n, "link", l), Al(n), c.head.appendChild(n)));
    }
  }
  function uS(l, n) {
    yl.m(l, n);
    var u = po;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", r = 'link[rel="modulepreload"][as="' + bn(c) + '"][href="' + bn(l) + '"]', s = r;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          s = go(l);
      }
      if (!Ka.has(s) && (l = ie({ rel: "modulepreload", href: l }, n), Ka.set(s, l), u.querySelector(r) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Rf(s)))
              return;
        }
        c = u.createElement("link"), kl(c, "link", l), Al(c), u.head.appendChild(c);
      }
    }
  }
  function Dp(l, n, u) {
    yl.S(l, n, u);
    var c = po;
    if (c && l) {
      var r = Rc(c).hoistableStyles, s = Zu(l);
      n = n || "default";
      var m = r.get(s);
      if (!m) {
        var v = { loading: 0, preload: null };
        if (m = c.querySelector(
          Nn(s)
        ))
          v.loading = 5;
        else {
          l = ie(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = Ka.get(s)) && Xh(l, u);
          var T = m = c.createElement("link");
          Al(T), kl(T, "link", l), T._p = new Promise(function(x, V) {
            T.onload = x, T.onerror = V;
          }), T.addEventListener("load", function() {
            v.loading |= 1;
          }), T.addEventListener("error", function() {
            v.loading |= 2;
          }), v.loading |= 4, Ns(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: v
        }, r.set(s, m);
      }
    }
  }
  function zp(l, n) {
    yl.X(l, n);
    var u = po;
    if (u && l) {
      var c = Rc(u).hoistableScripts, r = go(l), s = c.get(r);
      s || (s = u.querySelector(Rf(r)), s || (l = ie({ src: l, async: !0 }, n), (n = Ka.get(r)) && Lh(l, n), s = u.createElement("script"), Al(s), kl(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function Mi(l, n) {
    yl.M(l, n);
    var u = po;
    if (u && l) {
      var c = Rc(u).hoistableScripts, r = go(l), s = c.get(r);
      s || (s = u.querySelector(Rf(r)), s || (l = ie({ src: l, async: !0, type: "module" }, n), (n = Ka.get(r)) && Lh(l, n), s = u.createElement("script"), Al(s), kl(s, "link", l), u.head.appendChild(s)), s = {
        type: "script",
        instance: s,
        count: 1,
        state: null
      }, c.set(r, s));
    }
  }
  function Ci(l, n, u, c) {
    var r = (r = Ue.current) ? yo(r) : null;
    if (!r) throw Error(M(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Zu(u.href), u = Rc(
          r
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Zu(u.href);
          var s = Rc(
            r
          ).hoistableStyles, m = s.get(l);
          if (m || (r = r.ownerDocument || r, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, s.set(l, m), (s = r.querySelector(
            Nn(l)
          )) && !s._p && (m.instance = s, m.state.loading = 5), Ka.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, Ka.set(l, u), s || Hs(
            r,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(M(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(M(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = go(u), u = Rc(
          r
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(M(444, l));
    }
  }
  function Zu(l) {
    return 'href="' + bn(l) + '"';
  }
  function Nn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Us(l) {
    return ie({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Hs(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), kl(n, "link", u), Al(n), l.head.appendChild(n));
  }
  function go(l) {
    return '[src="' + bn(l) + '"]';
  }
  function Rf(l) {
    return "script[async]" + l;
  }
  function Rp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + bn(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Al(c), c;
          var r = ie({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Al(c), kl(c, "style", r), Ns(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          r = Zu(u.href);
          var s = l.querySelector(
            Nn(r)
          );
          if (s)
            return n.state.loading |= 4, n.instance = s, Al(s), s;
          c = Us(u), (r = Ka.get(r)) && Xh(c, r), s = (l.ownerDocument || l).createElement("link"), Al(s);
          var m = s;
          return m._p = new Promise(function(v, T) {
            m.onload = v, m.onerror = T;
          }), kl(s, "link", c), n.state.loading |= 4, Ns(s, u.precedence, l), n.instance = s;
        case "script":
          return s = go(u.src), (r = l.querySelector(
            Rf(s)
          )) ? (n.instance = r, Al(r), r) : (c = u, (r = Ka.get(s)) && (c = ie({}, u), Lh(c, r)), l = l.ownerDocument || l, r = l.createElement("script"), Al(r), kl(r, "link", c), l.head.appendChild(r), n.instance = r);
        case "void":
          return null;
        default:
          throw Error(M(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Ns(c, u.precedence, l));
    return n.instance;
  }
  function Ns(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = c.length ? c[c.length - 1] : null, s = r, m = 0; m < c.length; m++) {
      var v = c[m];
      if (v.dataset.precedence === n) s = v;
      else if (s !== r) break;
    }
    s ? s.parentNode.insertBefore(l, s.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Xh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Lh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var xs = null;
  function Qh(l, n, u) {
    if (xs === null) {
      var c = /* @__PURE__ */ new Map(), r = xs = /* @__PURE__ */ new Map();
      r.set(u, c);
    } else
      r = xs, c = r.get(u), c || (c = /* @__PURE__ */ new Map(), r.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), r = 0; r < u.length; r++) {
      var s = u[r];
      if (!(s[qo] || s[vl] || l === "link" && s.getAttribute("rel") === "stylesheet") && s.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = s.getAttribute(n) || "";
        m = l + m;
        var v = c.get(m);
        v ? v.push(s) : c.set(m, [s]);
      }
    }
    return c;
  }
  function Mp(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function Cp(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Vh(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function rn(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var r = Zu(c.href), s = n.querySelector(
          Nn(r)
        );
        if (s) {
          n = s._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Mf.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = s, Al(s);
          return;
        }
        s = n.ownerDocument || n, c = Us(c), (r = Ka.get(r)) && Xh(c, r), s = s.createElement("link"), Al(s);
        var m = s;
        m._p = new Promise(function(v, T) {
          m.onload = v, m.onerror = T;
        }), kl(s, "link", c), u.instance = s;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Mf.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var xn = 0;
  function Pn(l, n) {
    return l.stylesheets && l.count === 0 && Jh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Jh(l, l.stylesheets), l.unsuspend) {
          var s = l.unsuspend;
          l.unsuspend = null, s();
        }
      }, 6e4 + n);
      0 < l.imgBytes && xn === 0 && (xn = 62500 * bp());
      var r = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Jh(l, l.stylesheets), l.unsuspend)) {
            var s = l.unsuspend;
            l.unsuspend = null, s();
          }
        },
        (l.imgBytes > xn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(r);
      };
    } : null;
  }
  function Mf() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Jh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Zh = null;
  function Jh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Zh = /* @__PURE__ */ new Map(), n.forEach(iS, l), Zh = null, Mf.call(l));
  }
  function iS(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Zh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Zh.set(l, u);
        for (var r = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), s = 0; s < r.length; s++) {
          var m = r[s];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      r = n.instance, m = r.getAttribute("data-precedence"), s = u.get(m) || c, s === c && u.set(null, r), u.set(m, r), this.count++, c = Mf.bind(this), r.addEventListener("load", c), r.addEventListener("error", c), s ? s.parentNode.insertBefore(r, s.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(r, l.firstChild)), n.state.loading |= 4;
    }
  }
  var sl = {
    $$typeof: gt,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0
  };
  function cS(l, n, u, c, r, s, m, v, T) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xl(0), this.hiddenUpdates = Xl(null), this.identifierPrefix = c, this.onUncaughtError = r, this.onCaughtError = s, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kh(l, n, u, c, r, s, m, v, T, x, V, F) {
    return l = new cS(
      l,
      n,
      u,
      m,
      T,
      x,
      V,
      F,
      v
    ), n = 1, s === !0 && (n |= 24), s = xa(3, null, null, n), l.current = s, s.stateNode = l, n = Yd(), n.refCount++, l.pooledCache = n, n.refCount++, s.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Gd(s), l;
  }
  function $h(l) {
    return l ? (l = Xc, l) : Xc;
  }
  function vo(l, n, u, c, r, s) {
    r = $h(r), c.context === null ? c.context = r : c.pendingContext = r, c = pi(n), c.payload = { element: u }, s = s === void 0 ? null : s, s !== null && (c.callback = s), u = gi(l, c, n), u !== null && (Ja(u, l, n), Ru(u, l, n));
  }
  function Yg(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Bs(l, n) {
    Yg(l, n), (l = l.alternate) && Yg(l, n);
  }
  function qg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = aa(l, 67108864);
      n !== null && Ja(n, l, 67108864), Bs(l, 67108864);
    }
  }
  function wg(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = Oa();
      n = Ma(n);
      var u = aa(l, n);
      u !== null && Ja(u, l, n), Bs(l, n);
    }
  }
  var Ui = !0;
  function ra(l, n, u, c) {
    var r = L.T;
    L.T = null;
    var s = j.p;
    try {
      j.p = 2, Bn(l, n, u, c);
    } finally {
      j.p = s, L.T = r;
    }
  }
  function Ju(l, n, u, c) {
    var r = L.T;
    L.T = null;
    var s = j.p;
    try {
      j.p = 8, Bn(l, n, u, c);
    } finally {
      j.p = s, L.T = r;
    }
  }
  function Bn(l, n, u, c) {
    if (Ui) {
      var r = Fl(c);
      if (r === null)
        Tf(
          l,
          n,
          c,
          kh,
          u
        ), sa(l, c);
      else if (Hp(
        r,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (sa(l, c), n & 4 && -1 < Pl.indexOf(l)) {
        for (; r !== null; ) {
          var s = zc(r);
          if (s !== null)
            switch (s.tag) {
              case 3:
                if (s = s.stateNode, s.current.memoizedState.isDehydrated) {
                  var m = pe(s.pendingLanes);
                  if (m !== 0) {
                    var v = s;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var T = 1 << 31 - Ml(m);
                      v.entanglements[1] |= T, m &= ~T;
                    }
                    Fn(s), (St & 6) === 0 && (gs = Tl() + 500, Ts(0));
                  }
                }
                break;
              case 31:
              case 13:
                v = aa(s, 2), v !== null && Ja(v, s, 2), vs(), Bs(s, 2);
            }
          if (s = Fl(c), s === null && Tf(
            l,
            n,
            c,
            kh,
            u
          ), s === r) break;
          r = s;
        }
        r !== null && c.stopPropagation();
      } else
        Tf(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function Fl(l) {
    return l = pd(l), Up(l);
  }
  var kh = null;
  function Up(l) {
    if (kh = null, l = Dc(l), l !== null) {
      var n = re(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Se(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Ne(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return kh = l, null;
  }
  function js(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (wi()) {
          case lr:
            return 2;
          case jo:
            return 8;
          case Gi:
          case Xi:
            return 32;
          case ar:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Cf = !1, eu = null, Dl = null, Il = null, sn = /* @__PURE__ */ new Map(), pc = /* @__PURE__ */ new Map(), _a = [], Pl = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sa(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        eu = null;
        break;
      case "dragenter":
      case "dragleave":
        Dl = null;
        break;
      case "mouseover":
      case "mouseout":
        Il = null;
        break;
      case "pointerover":
      case "pointerout":
        sn.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pc.delete(n.pointerId);
    }
  }
  function jn(l, n, u, c, r, s) {
    return l === null || l.nativeEvent !== s ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: s,
      targetContainers: [r]
    }, n !== null && (n = zc(n), n !== null && qg(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, r !== null && n.indexOf(r) === -1 && n.push(r), l);
  }
  function Hp(l, n, u, c, r) {
    switch (n) {
      case "focusin":
        return eu = jn(
          eu,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "dragenter":
        return Dl = jn(
          Dl,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "mouseover":
        return Il = jn(
          Il,
          l,
          n,
          u,
          c,
          r
        ), !0;
      case "pointerover":
        var s = r.pointerId;
        return sn.set(
          s,
          jn(
            sn.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
      case "gotpointercapture":
        return s = r.pointerId, pc.set(
          s,
          jn(
            pc.get(s) || null,
            l,
            n,
            u,
            c,
            r
          )
        ), !0;
    }
    return !1;
  }
  function Gg(l) {
    var n = Dc(l.target);
    if (n !== null) {
      var u = re(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Se(u), n !== null) {
            l.blockedOn = n, dd(l.priority, function() {
              wg(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = Ne(u), n !== null) {
            l.blockedOn = n, dd(l.priority, function() {
              wg(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Wh(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Fl(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        mr = c, u.target.dispatchEvent(c), mr = null;
      } else
        return n = zc(u), n !== null && qg(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Np(l, n, u) {
    Wh(l) && u.delete(n);
  }
  function Ys() {
    Cf = !1, eu !== null && Wh(eu) && (eu = null), Dl !== null && Wh(Dl) && (Dl = null), Il !== null && Wh(Il) && (Il = null), sn.forEach(Np), pc.forEach(Np);
  }
  function qs(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Cf || (Cf = !0, W.unstable_scheduleCallback(
      W.unstable_NormalPriority,
      Ys
    )));
  }
  var Ku = null;
  function Fh(l) {
    Ku !== l && (Ku = l, W.unstable_scheduleCallback(
      W.unstable_NormalPriority,
      function() {
        Ku === l && (Ku = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], r = l[n + 2];
          if (typeof c != "function") {
            if (Up(c || u) === null)
              continue;
            break;
          }
          var s = zc(u);
          s !== null && (l.splice(n, 3), n -= 3, ih(
            s,
            {
              pending: !0,
              data: r,
              method: u.method,
              action: c
            },
            c,
            r
          ));
        }
      }
    ));
  }
  function Uf(l) {
    function n(T) {
      return qs(T, l);
    }
    eu !== null && qs(eu, l), Dl !== null && qs(Dl, l), Il !== null && qs(Il, l), sn.forEach(n), pc.forEach(n);
    for (var u = 0; u < _a.length; u++) {
      var c = _a[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < _a.length && (u = _a[0], u.blockedOn === null); )
      Gg(u), u.blockedOn === null && _a.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var r = u[c], s = u[c + 1], m = r[Kt] || null;
        if (typeof s == "function")
          m || Fh(u);
        else if (m) {
          var v = null;
          if (s && s.hasAttribute("formAction")) {
            if (r = s, m = s[Kt] || null)
              v = m.formAction;
            else if (Up(r) !== null) continue;
          } else v = m.action;
          typeof v == "function" ? u[c + 1] = v : (u.splice(c, 3), c -= 3), Fh(u);
        }
      }
  }
  function Xg() {
    function l(s) {
      s.canIntercept && s.info === "react-transition" && s.intercept({
        handler: function() {
          return new Promise(function(m) {
            return r = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      r !== null && (r(), r = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var s = navigation.currentEntry;
        s && s.url != null && navigation.navigate(s.url, {
          state: s.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, r = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), r !== null && (r(), r = null);
      };
    }
  }
  function Ih(l) {
    this._internalRoot = l;
  }
  ws.prototype.render = Ih.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(M(409));
    var u = n.current, c = Oa();
    vo(u, c, l, n, null, null);
  }, ws.prototype.unmount = Ih.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      vo(l.current, 2, null, l, null, null), vs(), n[_c] = null;
    }
  };
  function ws(l) {
    this._internalRoot = l;
  }
  ws.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = C0();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < _a.length && n !== 0 && n < _a[u].priority; u++) ;
      _a.splice(u, 0, l), u === 0 && Gg(l);
    }
  };
  var Lg = K.version;
  if (Lg !== "19.2.4")
    throw Error(
      M(
        527,
        Lg,
        "19.2.4"
      )
    );
  j.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(M(188)) : (l = Object.keys(l).join(","), Error(M(268, l)));
    return l = Q(n), l = l !== null ? Ye(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Qg = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gs.isDisabled && Gs.supportsFiber)
      try {
        Gn = Gs.inject(
          Qg
        ), gl = Gs;
      } catch {
      }
  }
  return z0.createRoot = function(l, n) {
    if (!se(l)) throw Error(M(299));
    var u = !1, c = "", r = xy, s = oh, m = By;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Kh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      r,
      s,
      m,
      Xg
    ), l[_c] = n.current, yp(l), new Ih(n);
  }, z0.hydrateRoot = function(l, n, u) {
    if (!se(l)) throw Error(M(299));
    var c = !1, r = "", s = xy, m = oh, v = By, T = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (r = u.identifierPrefix), u.onUncaughtError !== void 0 && (s = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (v = u.onRecoverableError), u.formState !== void 0 && (T = u.formState)), n = Kh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      r,
      T,
      s,
      m,
      v,
      Xg
    ), n.context = $h(null), u = n.current, c = Oa(), c = Ma(c), r = pi(c), r.callback = null, gi(u, r, c), u = c, n.current.lanes = u, Ra(n, u), Fn(n), l[_c] = n.current, yp(l), new ws(n);
  }, z0.version = "19.2.4", z0;
}
var R0 = {}, VE;
function zA() {
  if (VE) return R0;
  VE = 1;
  var W = {};
  return W.NODE_ENV !== "production" && (function() {
    function K(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function ce(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = _l(e) ? e.slice() : ke({}, e);
      return f[o] = ce(e[o], t, a + 1, i), f;
    }
    function M(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return se(e, t, a, 0);
      }
    }
    function se(e, t, a, i) {
      var o = t[i], f = _l(e) ? e.slice() : ke({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], _l(f) ? f.splice(o, 1) : delete f[o]) : f[o] = se(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function re(e, t, a) {
      var i = t[a], o = _l(e) ? e.slice() : ke({}, e);
      return a + 1 === t.length ? (_l(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = re(e[i], t, a + 1), o);
    }
    function Se() {
      return !1;
    }
    function Ne() {
      return null;
    }
    function X() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function Q() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Ye() {
    }
    function ie() {
    }
    function $(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function H(e, t, a, i) {
      return new Fv(e, t, a, i);
    }
    function ue(e, t) {
      e.context === Bf && (gp(e.current, 2, t, e, null, null), no());
    }
    function je(e, t) {
      if (Wu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, rc(), K0(
          e.current,
          t,
          a
        ), no();
      }
    }
    function Bt(e) {
      Wu = e;
    }
    function Ce(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Ve(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function gt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Ct(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function vt(e) {
      if (Ve(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function xe(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Ve(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return vt(o), e;
            if (f === i) return vt(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function ye(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = ye(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function at(e) {
      return e === null || typeof e != "object" ? null : (e = po && e[po] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Te(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === jg ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case Wl:
          return "Fragment";
        case qh:
          return "Profiler";
        case zf:
          return "StrictMode";
        case Ka:
          return "Suspense";
        case Gh:
          return "SuspenseList";
        case _p:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Df:
            return "Portal";
          case In:
            return e.displayName || "Context";
          case wh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Ri:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case yo:
            return t = e.displayName || null, t !== null ? t : Te(e.type) || "Memo";
          case yl:
            t = e._payload, e = e._init;
            try {
              return Te(e(t));
            } catch {
            }
        }
      return null;
    }
    function Gt(e) {
      return typeof e.tag == "number" ? me(e) : typeof e.name == "string" ? e.name : null;
    }
    function me(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Te(t);
        case 8:
          return t === zf ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return me(e.return);
      }
      return null;
    }
    function Ot(e) {
      return { current: e };
    }
    function Re(e, t) {
      0 > Mi ? console.error("Unexpected pop.") : (t !== zp[Mi] && console.error("Unexpected Fiber popped."), e.current = Dp[Mi], Dp[Mi] = null, zp[Mi] = null, Mi--);
    }
    function we(e, t, a) {
      Mi++, Dp[Mi] = e.current, zp[Mi] = a, e.current = t;
    }
    function Xt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function L(e, t) {
      we(Nn, t, e), we(Zu, e, e), we(Ci, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Di(t) : Ho;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = Di(t), t = vs(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Mm;
                break;
              case "math":
                t = Nv;
                break;
              default:
                t = Ho;
            }
      }
      a = a.toLowerCase(), a = dr(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Re(Ci, e), we(Ci, a, e);
    }
    function j(e) {
      Re(Ci, e), Re(Zu, e), Re(Nn, e);
    }
    function ee() {
      return Xt(Ci.current);
    }
    function fe(e) {
      e.memoizedState !== null && we(Us, e, e);
      var t = Xt(Ci.current), a = e.type, i = vs(t.context, a);
      a = dr(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (we(Zu, e, e), we(Ci, i, e));
    }
    function Oe(e) {
      Zu.current === e && (Re(Ci, e), Re(Zu, e)), Us.current === e && (Re(Us, e), T0._currentValue = fd);
    }
    function O() {
    }
    function A() {
      if (Hs === 0) {
        go = console.log, Rf = console.info, Rp = console.warn, Ns = console.error, Xh = console.group, Lh = console.groupCollapsed, xs = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: O,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Hs++;
    }
    function k() {
      if (Hs--, Hs === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ke({}, e, { value: go }),
          info: ke({}, e, { value: Rf }),
          warn: ke({}, e, { value: Rp }),
          error: ke({}, e, { value: Ns }),
          group: ke({}, e, { value: Xh }),
          groupCollapsed: ke({}, e, { value: Lh }),
          groupEnd: ke({}, e, { value: xs })
        });
      }
      0 > Hs && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function te(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function ae(e) {
      if (Qh === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Qh = t && t[1] || "", Mp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Qh + e + Mp;
    }
    function Ue(e, t) {
      if (!e || Cp) return "";
      var a = Vh.get(e);
      if (a !== void 0) return a;
      Cp = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = G.H, G.H = null, A();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var b = function() {
                  throw Error();
                };
                if (Object.defineProperty(b.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(b, []);
                  } catch (ne) {
                    var Y = ne;
                  }
                  Reflect.construct(e, [], b);
                } else {
                  try {
                    b.call();
                  } catch (ne) {
                    Y = ne;
                  }
                  e.call(b.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ne) {
                  Y = ne;
                }
                (b = e()) && typeof b.catch == "function" && b.catch(function() {
                });
              }
            } catch (ne) {
              if (ne && Y && typeof ne.stack == "string")
                return [ne.stack, Y.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), D = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < D.length && !D[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === D.length)
            for (f = p.length - 1, d = D.length - 1; 1 <= f && 0 <= d && p[f] !== D[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== D[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== D[d]) {
                    var R = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && Vh.set(e, R), R;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Cp = !1, G.H = i, k(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? ae(p) : "", typeof e == "function" && Vh.set(e, p), p;
    }
    function ut(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ae(e.type);
        case 16:
          return ae("Lazy");
        case 13:
          return e.child !== t && t !== null ? ae("Suspense Fallback") : ae("Suspense");
        case 19:
          return ae("SuspenseList");
        case 0:
        case 15:
          return Ue(e.type, !1);
        case 11:
          return Ue(e.type.render, !1);
        case 1:
          return Ue(e.type, !0);
        case 31:
          return ae("Activity");
        default:
          return "";
      }
    }
    function et(e) {
      try {
        var t = "", a = null;
        do {
          t += ut(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var D = te(p), R = D.lastIndexOf(`
`), b = R === -1 ? D : D.slice(R + 1);
                    if (b.indexOf(h) !== -1) {
                      var Y = `
` + b;
                      break e;
                    }
                  }
                  Y = ae(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + Y;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (ne) {
        return `
Error generating stack: ` + ne.message + `
` + ne.stack;
      }
    }
    function _t(e) {
      return (e = e ? e.displayName || e.name : "") ? ae(e) : "";
    }
    function la() {
      if (rn === null) return null;
      var e = rn._debugOwner;
      return e != null ? Gt(e) : null;
    }
    function vn() {
      if (rn === null) return "";
      var e = rn;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ae(e.type);
            break;
          case 13:
            t += ae("Suspense");
            break;
          case 19:
            t += ae("SuspenseList");
            break;
          case 31:
            t += ae("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += _t(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += _t(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = te(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + te(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function he(e, t, a, i, o, f, d) {
      var h = rn;
      Ac(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Ac(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Ac(e) {
      G.getCurrentStack = e === null ? null : vn, xn = !1, rn = e;
    }
    function Fa(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function ii(e) {
      try {
        return iu(e), !1;
      } catch {
        return !0;
      }
    }
    function iu(e) {
      return "" + e;
    }
    function Mt(e, t) {
      if (ii(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Fa(e)
        ), iu(e);
    }
    function Gl(e, t) {
      if (ii(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Fa(e)
        ), iu(e);
    }
    function qi(e) {
      if (ii(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Fa(e)
        ), iu(e);
    }
    function tr(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        Ui = t.inject(e), ra = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function ve(e) {
      if (typeof qg == "function" && wg(e), ra && typeof ra.setStrictMode == "function")
        try {
          ra.setStrictMode(Ui, e);
        } catch (t) {
          Ju || (Ju = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function Bo(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (kh(e) / Up | 0) | 0;
    }
    function cu(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function Tl(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = cu(i) : (d &= h, d !== 0 ? o = cu(d) : a || (a = h & ~e, a !== 0 && (o = cu(a))))) : (h = i & ~f, h !== 0 ? o = cu(h) : d !== 0 ? o = cu(d) : a || (a = i & ~e, a !== 0 && (o = cu(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function wi(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function lr(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function jo() {
      var e = eu;
      return eu <<= 1, (eu & 62914560) === 0 && (eu = 4194304), e;
    }
    function Gi(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Xi(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function ar(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var D = 31 - Fl(a), R = 1 << D;
        h[D] = 0, y[D] = -1;
        var b = p[D];
        if (b !== null)
          for (p[D] = null, D = 0; D < b.length; D++) {
            var Y = b[D];
            Y !== null && (Y.lane &= -536870913);
          }
        a &= ~R;
      }
      i !== 0 && nr(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function nr(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - Fl(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function ur(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - Fl(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function Gn(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : gl(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function gl(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function za(e, t, a) {
      if (Bn)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - Fl(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Ml(e, t) {
      if (Bn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - Fl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Yo(e) {
      return e &= -e, Dl < e ? Il < e ? (e & 134217727) !== 0 ? sn : pc : Il : Dl;
    }
    function Li() {
      var e = Rt.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? sn : Bh(e.type));
    }
    function g(e, t) {
      var a = Rt.p;
      try {
        return Rt.p = e, t();
      } finally {
        Rt.p = a;
      }
    }
    function C(e) {
      delete e[Pl], delete e[sa], delete e[Hp], delete e[Gg], delete e[Wh];
    }
    function P(e) {
      var t = e[Pl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[jn] || a[Pl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Dh(e); e !== null; ) {
              if (a = e[Pl])
                return a;
              e = Dh(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function le(e) {
      if (e = e[Pl] || e[jn]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function pe(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Ge(e) {
      var t = e[Np];
      return t || (t = e[Np] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function be(e) {
      e[Ys] = !0;
    }
    function dt(e, t) {
      Qe(e, t), Qe(e + "Capture", t);
    }
    function Qe(e, t) {
      Ku[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ku[e] = t;
      var a = e.toLowerCase();
      for (Fh[a] = e, e === "onDoubleClick" && (Fh.ondblclick = e), e = 0; e < t.length; e++)
        qs.add(t[e]);
    }
    function Xl(e, t) {
      Uf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Ra(e) {
      return Pn.call(ws, e) ? !0 : Pn.call(Ih, e) ? !1 : Xg.test(e) ? ws[e] = !0 : (Ih[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function rd(e, t, a) {
      if (Ra(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (Mt(a, t), e === "" + a ? a : e);
      }
    }
    function Oc(e, t, a) {
      if (Ra(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          Mt(a, t), e.setAttribute(t, "" + a);
        }
    }
    function ir(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        Mt(a, t), e.setAttribute(t, "" + a);
      }
    }
    function ou(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        Mt(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Ma(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return qi(e), e;
        default:
          return "";
      }
    }
    function sd(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function C0(e, t, a) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            qi(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            qi(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function dd(e) {
      if (!e._valueTracker) {
        var t = sd(e) ? "checked" : "value";
        e._valueTracker = C0(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function ci(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = sd(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function vl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Kt(e) {
      return e.replace(
        Lg,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function _c(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Gs || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        la() || "A component",
        t.type
      ), Gs = !0), t.value === void 0 || t.defaultValue === void 0 || Qg || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        la() || "A component",
        t.type
      ), Qg = !0);
    }
    function cr(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (Mt(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ma(t)) : e.value !== "" + Ma(t) && (e.value = "" + Ma(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Hm(e, d, Ma(t)) : a != null ? Hm(e, d, Ma(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (Mt(h, "name"), e.name = "" + Ma(h)) : e.removeAttribute("name");
    }
    function U0(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (Mt(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          dd(e);
          return;
        }
        a = a != null ? "" + Ma(a) : "", t = t != null ? "" + Ma(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (Mt(d, "name"), e.name = d), dd(e);
    }
    function Hm(e, t, a) {
      t === "number" && vl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Nm(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Ap.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || n || (n = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || u || (u = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || l || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), l = !0);
    }
    function qo() {
      var e = la();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function Qi(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Ma(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Dc(e, t) {
      for (e = 0; e < r.length; e++) {
        var a = r[e];
        if (t[a] != null) {
          var i = _l(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            qo()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            qo()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || c || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), c = !0);
    }
    function zc(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        la() || "A component"
      ), s = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function wo(e, t, a) {
      if (t != null && (t = "" + Ma(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Ma(a) : "";
    }
    function Rc(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (_l(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Ma(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), dd(e);
    }
    function Al(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Al(e.children[0], t) : e;
    }
    function Ca(e) {
      return "  " + "  ".repeat(e);
    }
    function Mc(e) {
      return "+ " + "  ".repeat(e);
    }
    function Ia(e) {
      return "- " + "  ".repeat(e);
    }
    function Cc(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function or(e, t) {
      return m.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function fr(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Mc(a) + or(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Mc(a) + or(e, i) + `
` + Ia(a) + or(t, i) + `
`;
      }
      return Ca(a) + or(e, i) + `
`;
    }
    function hd(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function rr(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (_l(e)) return "[...]";
          if (e.$$typeof === Hn)
            return (t = Te(e.type)) ? "<" + t + ">" : "<...>";
          var a = hd(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = rr(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function oi(e, t) {
      return typeof e != "string" || m.test(e) ? "{" + rr(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Go(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = oi(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function fi(e, t, a) {
      var i = "", o = ke({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = rr(e[f], d);
          t.hasOwnProperty(f) ? (d = rr(t[f], d), i += Mc(a) + f + ": " + h + `
`, i += Ia(a) + f + ": " + d + `
`) : i += Mc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = rr(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Ia(a) + y + ": " + e + `
`);
      return i;
    }
    function Sn(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += Go(
          e,
          t,
          Ca(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var D = oi(
                p,
                h
              );
              h = oi(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && hd(p) === "Object" && hd(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < D.indexOf("...") || -1 < h.indexOf("...")) ? o += Ca(i + 1) + d + `={{
` + fi(
                p,
                y,
                i + 2
              ) + Ca(i + 1) + `}}
` : (o += Mc(i + 1) + d + "=" + D + `
`, o += Ia(i + 1) + d + "=" + h + `
`);
            } else
              o += Ca(i + 1) + d + "=" + oi(t[d], h) + `
`;
          }
        f.forEach(function(R) {
          if (R !== "children") {
            var b = 120 - 2 * (i + 1) - R.length - 1;
            o += Ia(i + 1) + R + "=" + oi(a[R], b) + `
`;
          }
        }), o = o === "" ? Ca(i) + "<" + e + `>
` : Ca(i) + "<" + e + `
` + o + Ca(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += fr(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + fr("" + t, null, i + 1) : o + fr("" + t, void 0, i + 1)), o;
    }
    function xm(e, t) {
      var a = Cc(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += xm(e, t), e = e.sibling;
        return a;
      }
      return Ca(t) + "<" + a + `>
`;
    }
    function Bm(e, t) {
      var a = Al(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ca(t) + `...
` + Bm(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ca(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = fr(o, e.serverProps, t), t++;
      else if (f = Cc(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = oi(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Ca(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Go(
            f,
            o,
            Mc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Sn(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += Bm(d, t), f++) : p += xm(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Ca(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Ia(t) + or(f, 120 - 2 * t) + `
`) : p + Go(
          f.type,
          f.props,
          Ia(t)
        );
      return a + i + p;
    }
    function sr(e) {
      try {
        return `

` + Bm(e, 0);
      } catch {
        return "";
      }
    }
    function jm(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? sr(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function dr(e, t) {
      var a = ke({}, e || F), i = { tag: t };
      return T.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), x.indexOf(t) !== -1 && (a.pTagInButtonScope = null), v.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function H0(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return V.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function bn(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function md(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function yd(e, t) {
      t = t || F;
      var a = t.current;
      if (t = (a = H0(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : bn(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, B[t]) return !1;
      B[t] = !0;
      var o = (t = rn) ? md(t.return, i) : null, f = t !== null && o !== null ? jm(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || he(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Xo(e, t, a) {
      if (a || H0("#text", t, !1))
        return !0;
      if (a = "#text|" + t, B[a]) return !1;
      B[a] = !0;
      var i = (a = rn) ? md(a, t) : null;
      return a = a !== null && i !== null ? jm(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function fu(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function N0(e) {
      return e.replace(z, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Ym(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? J.hasOwnProperty(t) && J[t] || (J[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        N0(t.replace(U, "ms-"))
      )) : qt.test(t) ? J.hasOwnProperty(t) && J[t] || (J[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !N.test(a) || _e.hasOwnProperty(a) && _e[a] || (_e[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(N, "")
      )), typeof a == "number" && (isNaN(a) ? bt || (bt = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || Ee || (Ee = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ke.has(t) ? t === "float" ? e.cssFloat = a : (Gl(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Uc(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = w[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = w[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = w[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var D = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                D == null || typeof D == "boolean" || D === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var R in a)
          !a.hasOwnProperty(R) || t != null && t.hasOwnProperty(R) || (R.indexOf("--") === 0 ? e.setProperty(R, "") : R === "float" ? e.cssFloat = "" : e[R] = "");
        for (var b in t)
          p = t[b], t.hasOwnProperty(b) && a[b] !== p && Ym(e, b, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Ym(e, i, t[i]);
    }
    function hr(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function qm(e) {
      return gc.get(e) || e;
    }
    function x0(e, t) {
      if (Pn.call(em, t) && em[t])
        return !0;
      if (WE.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = b1.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), em[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), em[t] = !0;
      }
      if (kE.test(t)) {
        if (e = t.toLowerCase(), e = b1.hasOwnProperty(e) ? e : null, e == null) return em[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), em[t] = !0);
      }
      return !0;
    }
    function wm(e, t) {
      var a = [], i;
      for (i in t)
        x0(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Zv(e, t, a, i) {
      if (Pn.call(dn, t) && dn[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), dn[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), dn[t] = !0;
        if (T1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), dn[t] = !0;
      } else if (T1.test(t))
        return FE.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), dn[t] = !0;
      if (IE.test(t) || PE.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), dn[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), dn[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), dn[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), dn[t] = !0;
      if (Ph.hasOwnProperty(o)) {
        if (o = Ph[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), dn[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), dn[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), dn[t] = !0);
          }
        case "function":
        case "symbol":
          return dn[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), dn[t] = !0;
          }
      }
      return !0;
    }
    function Jv(e, t, a) {
      var i = [], o;
      for (o in t)
        Zv(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Vi(e) {
      return eT.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Ll() {
    }
    function mr(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function pd(e) {
      var t = le(e);
      if (t && (e = t.stateNode)) {
        var a = e[sa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (cr(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (Mt(t, "name"), a = a.querySelectorAll(
                'input[name="' + Kt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[sa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  cr(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && ci(i);
            }
            break e;
          case "textarea":
            wo(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && Qi(e, !!a.multiple, t, !1);
        }
      }
    }
    function Hc(e, t, a) {
      if (oS) return e(t, a);
      oS = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (oS = !1, (tm !== null || lm !== null) && (no(), tm && (t = tm, e = lm, lm = tm = null, pd(t), e)))
          for (t = 0; t < e.length; t++) pd(e[t]);
      }
    }
    function ru(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[sa] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function Gm() {
      if (Vg) return Vg;
      var e, t = rS, a = t.length, i, o = "value" in Hf ? Hf.value : Hf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Vg = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Lo(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function yr() {
      return !0;
    }
    function Qo() {
      return !1;
    }
    function ul(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? yr : Qo, this.isPropagationStopped = Qo, this;
      }
      return ke(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = yr);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = yr);
        },
        persist: function() {
        },
        isPersistent: yr
      }), t;
    }
    function Xm(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = hT[e]) ? !!t[e] : !1;
    }
    function Nc() {
      return Xm;
    }
    function ri(e, t) {
      switch (e) {
        case "keyup":
          return _T.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== D1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function gd(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function vd(e, t) {
      switch (e) {
        case "compositionend":
          return gd(t);
        case "keypress":
          return t.which !== R1 ? null : (C1 = !0, M1);
        case "textInput":
          return e = t.data, e === M1 && C1 ? null : e;
        default:
          return null;
      }
    }
    function B0(e, t) {
      if (am)
        return e === "compositionend" || !mS && ri(e, t) ? (e = Gm(), Vg = rS = Hf = null, am = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return z1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function pr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!zT[e.type] : t === "textarea";
    }
    function Sd(e) {
      if (!vc) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Lm(e, t, a, i) {
      tm ? lm ? lm.push(i) : lm = [i] : tm = i, t = Lu(t, "onChange"), 0 < t.length && (a = new Zg(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Ua(e) {
      La(e, 0);
    }
    function su(e) {
      var t = pe(e);
      if (ci(t)) return e;
    }
    function gr(e, t) {
      if (e === "change") return t;
    }
    function Vo() {
      wp && (wp.detachEvent("onpropertychange", j0), Gp = wp = null);
    }
    function j0(e) {
      if (e.propertyName === "value" && su(Gp)) {
        var t = [];
        Lm(
          t,
          Gp,
          e,
          mr(e)
        ), Hc(Ua, t);
      }
    }
    function Qm(e, t, a) {
      e === "focusin" ? (Vo(), wp = t, Gp = a, wp.attachEvent("onpropertychange", j0)) : e === "focusout" && Vo();
    }
    function Vm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return su(Gp);
    }
    function vr(e, t) {
      if (e === "click") return su(t);
    }
    function bd(e, t) {
      if (e === "input" || e === "change")
        return su(t);
    }
    function Y0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Sr(e, t) {
      if (hn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!Pn.call(t, o) || !hn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function q0(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function w0(e, t) {
      var a = q0(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = q0(a);
      }
    }
    function Ed(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ed(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function G0(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = vl(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = vl(e.document);
      }
      return t;
    }
    function Zm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function X0(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      pS || nm == null || nm !== vl(i) || (i = nm, "selectionStart" in i && Zm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Xp && Sr(Xp, i) || (Xp = i, i = Lu(yS, "onSelect"), 0 < i.length && (t = new Zg(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = nm)));
    }
    function xc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Bc(e) {
      if (gS[e]) return gS[e];
      if (!um[e]) return e;
      var t = um[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in H1)
          return gS[e] = t[a];
      return e;
    }
    function En(e, t) {
      Y1.set(e, t), dt(t, [e]);
    }
    function Kv(e) {
      for (var t = Kg, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (_l(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== Kg && t !== TS)
              return bS;
            t = TS;
          } else return bS;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== Kg && t !== ES)
            return bS;
          t = ES;
        }
      }
      return t;
    }
    function Jm(e, t, a, i) {
      for (var o in e)
        Pn.call(e, o) && o[0] !== "_" && du(o, e[o], t, a, i);
    }
    function du(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Hn) {
              var f = Te(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && du(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!_l(t.children) || 0 < t.children.length) && (e = !0) : Pn.call(t, p) && p[0] !== "_" && du(
                  p,
                  t[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Kv(t), p === ES || p === Kg) {
                t = JSON.stringify(t);
                break;
              } else if (p === TS) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], du(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, du(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, du(
                e,
                t.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && Jm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === xT ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function L0(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          $g + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [$g + o, "…"],
                [kg + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Hn) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Te(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [$g + o, d],
                        [kg + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        G1 + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, L0(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    G1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              du(f, d, a, i, $g), du(f, h, a, i, kg);
            }
            o = !1;
          }
        } else
          a.push([
            kg + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Pa(e) {
      pt = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function hu(e, t, a, i) {
      It && (xf.start = t, xf.end = a, So.color = "warning", So.tooltipText = i, So.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          xf
        )
      ) : performance.measure(i, xf));
    }
    function Td(e, t, a) {
      hu(e, t, a, "Reconnect");
    }
    function Ad(e, t, a, i, o) {
      var f = me(e);
      if (f !== null && It) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [BT], p = L0(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Nf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Nf = !0, y[0] = jT, So.color = "warning", So.tooltipText = X1) : (So.color = i, So.tooltipText = f), So.properties = y, xf.start = t, xf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            xf
          )
        ) : performance.measure(
          "​" + f,
          xf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            $u,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          $u,
          void 0,
          i
        );
      }
    }
    function Od(e, t, a, i) {
      if (It) {
        var o = me(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && du("key", e.key, d, 0, ""), e.memoizedProps !== null && Jm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: $u,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function mu(e, t, a, i, o) {
      if (o !== null) {
        if (It) {
          var f = me(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && du("key", e.key, i, 0, ""), e.memoizedProps !== null && Jm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: $u,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = me(e), f !== null && It && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            $u,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          $u,
          void 0,
          o
        ));
    }
    function $v(e, t, a, i) {
      if (It && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            pt,
            mt,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          pt,
          mt,
          o
        );
      }
    }
    function Q0(e, t, a, i) {
      !It || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          pt,
          mt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        pt,
        mt,
        a
      ));
    }
    function V0(e, t, a, i) {
      !It || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          pt,
          mt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        pt,
        mt,
        a
      ));
    }
    function kv(e, t, a, i, o, f) {
      if (It && !(t <= e)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: pt,
              trackGroup: mt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function Km(e, t, a, i) {
      !It || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          pt,
          mt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        pt,
        mt,
        "error"
      ));
    }
    function Wv(e, t, a, i) {
      !It || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          pt,
          mt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        pt,
        mt,
        "secondary-light"
      ));
    }
    function Z0(e, t, a, i, o) {
      if (It && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: pt,
              trackGroup: mt,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function $m(e, t, a) {
      !It || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        pt,
        mt,
        "secondary-dark"
      );
    }
    function Zo() {
      for (var e = im, t = AS = im = 0; t < e; ) {
        var a = ku[t];
        ku[t++] = null;
        var i = ku[t];
        ku[t++] = null;
        var o = ku[t];
        ku[t++] = null;
        var f = ku[t];
        if (ku[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Wm(a, o, f);
      }
    }
    function Zi(e, t, a, i) {
      ku[im++] = e, ku[im++] = t, ku[im++] = a, ku[im++] = i, AS |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function km(e, t, a, i) {
      return Zi(e, t, a, i), br(e);
    }
    function Ql(e, t) {
      return Zi(e, null, null, t), br(e);
    }
    function Wm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Lp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Fl(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function br(e) {
      if (y0 > IT)
        throw ad = y0 = 0, p0 = l1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      ad > PT && (ad = 0, p0 = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Iy(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Iy(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Ji(e) {
      if (Wu === null) return e;
      var t = Wu(e);
      return t === void 0 ? e : t.current;
    }
    function _d(e) {
      if (Wu === null) return e;
      var t = Wu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Ji(e.render), e.render !== t) ? (t = { $$typeof: Ri, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function jc(e, t) {
      if (Wu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === yl) && (i = !0);
          break;
        case 11:
          (o === Ri || o === yl) && (i = !0);
          break;
        case 14:
        case 15:
          (o === yo || o === yl) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Wu(a), e !== void 0 && e === Wu(t)));
    }
    function J0(e) {
      Wu !== null && typeof WeakSet == "function" && (cm === null && (cm = /* @__PURE__ */ new WeakSet()), cm.add(e));
    }
    function K0(e, t, a) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Wu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Wu(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), cm !== null && (cm.has(e) || o !== null && cm.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = Ql(e, 2), o !== null && al(o, e, 2)), f === null || i || K0(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function Fv(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, L1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Dd(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function yu(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = H(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Ji(e.type);
          break;
        case 1:
          a.type = Ji(e.type);
          break;
        case 11:
          a.type = _d(e.type);
      }
      return a;
    }
    function Jo(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Yc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Dd(e) && (d = 1), h = Ji(h);
      else if (typeof e == "string")
        d = ee(), d = it(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case _p:
            return t = H(31, a, t, o), t.elementType = _p, t.lanes = f, t;
          case Wl:
            return pu(
              a.children,
              o,
              f,
              t
            );
          case zf:
            d = 8, o |= $a, o |= Hi;
            break;
          case qh:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = H(12, e, t, i | Fe), t.elementType = qh, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Ka:
            return t = H(13, a, t, o), t.elementType = Ka, t.lanes = f, t;
          case Gh:
            return t = H(19, a, t, o), t.elementType = Gh, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case In:
                  d = 10;
                  break e;
                case wh:
                  d = 9;
                  break e;
                case Ri:
                  d = 11, h = _d(h);
                  break e;
                case yo:
                  d = 14;
                  break e;
                case yl:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : _l(e) ? a = "array" : e !== void 0 && e.$$typeof === Hn ? (a = "<" + (Te(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? Gt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = H(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function zd(e, t, a) {
      return t = Yc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function pu(e, t, a, i) {
      return e = H(7, e, i, t), e.lanes = a, e;
    }
    function Rd(e, t, a) {
      return e = H(6, e, null, t), e.lanes = a, e;
    }
    function Fm(e) {
      var t = H(18, null, null, qe);
      return t.stateNode = e, t;
    }
    function Er(e, t, a) {
      return t = H(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function ya(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = OS.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: et(t)
        }, OS.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: et(t)
      };
    }
    function gu(e, t) {
      Ki(), om[fm++] = Qp, om[fm++] = Wg, Wg = e, Qp = t;
    }
    function Im(e, t, a) {
      Ki(), Fu[Iu++] = Eo, Fu[Iu++] = To, Fu[Iu++] = Ls, Ls = e;
      var i = Eo;
      e = To;
      var o = 32 - Fl(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - Fl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Eo = 1 << 32 - Fl(t) + o | a << o | i, To = f + e;
      } else
        Eo = 1 << f | a << o | i, To = e;
    }
    function Md(e) {
      Ki(), e.return !== null && (gu(e, 1), Im(e, 1, 0));
    }
    function Pm(e) {
      for (; e === Wg; )
        Wg = om[--fm], om[fm] = null, Qp = om[--fm], om[fm] = null;
      for (; e === Ls; )
        Ls = Fu[--Iu], Fu[Iu] = null, To = Fu[--Iu], Fu[Iu] = null, Eo = Fu[--Iu], Fu[Iu] = null;
    }
    function $0() {
      return Ki(), Ls !== null ? { id: Eo, overflow: To } : null;
    }
    function k0(e, t) {
      Ki(), Fu[Iu++] = Eo, Fu[Iu++] = To, Fu[Iu++] = Ls, Eo = t.id, To = t.overflow, Ls = e;
    }
    function Ki() {
      rt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function qc(e, t) {
      if (e.return === null) {
        if (tu === null)
          tu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (tu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          tu.distanceFromLeaf > t && (tu.distanceFromLeaf = t);
        }
        return tu;
      }
      var a = qc(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Ha() {
      rt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function $i(e, t) {
      Sc || (e = qc(e, 0), e.serverProps = null, t !== null && (t = zg(t), e.serverTail.push(t)));
    }
    function si(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = tu;
      throw i !== null && (tu = null, a = sr(i)), vu(
        ya(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), _S;
    }
    function ey(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[Pl] = e, t[sa] = i, dc(a, i), a) {
        case "dialog":
          Ze("cancel", t), Ze("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ze("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < g0.length; a++)
            Ze(g0[a], t);
          break;
        case "source":
          Ze("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ze("error", t), Ze("load", t);
          break;
        case "details":
          Ze("toggle", t);
          break;
        case "input":
          Xl("input", i), Ze("invalid", t), _c(t, i), U0(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          Nm(t, i);
          break;
        case "select":
          Xl("select", i), Ze("invalid", t), Dc(t, i);
          break;
        case "textarea":
          Xl("textarea", i), Ze("invalid", t), zc(t, i), Rc(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || gs(t.textContent, a) ? (i.popover != null && (Ze("beforetoggle", t), Ze("toggle", t)), i.onScroll != null && Ze("scroll", t), i.onScrollEnd != null && Ze("scrollend", t), i.onClick != null && (t.onclick = Ll), t = !0) : t = !1, t || si(e, !0);
    }
    function ty(e) {
      for (Da = e.return; Da; )
        switch (Da.tag) {
          case 5:
          case 31:
          case 13:
            Pu = !1;
            return;
          case 27:
          case 3:
            Pu = !0;
            return;
          default:
            Da = Da.return;
        }
    }
    function wc(e) {
      if (e !== Da) return !1;
      if (!rt)
        return ty(e), rt = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Ss(e.type, e.memoizedProps)), a = !a), a && Pt) {
        for (a = Pt; a; ) {
          var i = qc(e, 0), o = zg(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? mc(a) : fn(a.nextSibling);
        }
        si(e);
      }
      if (ty(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Pt = mc(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Pt = mc(e);
      } else
        t === 27 ? (t = Pt, zi(e.type) ? (e = m1, m1 = null, Pt = e) : Pt = t) : Pt = Da ? fn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function di() {
      Pt = Da = null, Sc = rt = !1;
    }
    function ly() {
      var e = jf;
      return e !== null && (gn === null ? gn = e : gn.push.apply(
        gn,
        e
      ), jf = null), e;
    }
    function vu(e) {
      jf === null ? jf = [e] : jf.push(e);
    }
    function Tr() {
      var e = tu;
      if (e !== null) {
        tu = null;
        for (var t = sr(e); 0 < e.children.length; )
          e = e.children[0];
        he(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function ki() {
      rm = Fg = null, sm = !1;
    }
    function Su(e, t, a) {
      we(DS, t._currentValue, e), t._currentValue = a, we(zS, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== V1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = V1;
    }
    function bu(e, t) {
      e._currentValue = DS.current;
      var a = zS.current;
      Re(zS, t), e._currentRenderer = a, Re(DS, t);
    }
    function hi(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Wi(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), hi(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), hi(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function Fi(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            hn(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Us.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(T0) : e = [T0]);
        }
        o = o.return;
      }
      e !== null && Wi(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Ar(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!hn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function en(e) {
      Fg = e, rm = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Lt(e) {
      return sm && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), ay(Fg, e);
    }
    function Or(e, t) {
      return Fg === null && en(e), ay(e, t);
    }
    function ay(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, rm === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        rm = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else rm = rm.next = t;
      return a;
    }
    function ny() {
      return {
        controller: new wT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Gc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function _r(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && GT(XT, function() {
        e.controller.abort();
      });
    }
    function Xn(e, t, a) {
      (e & 127) !== 0 ? 0 > bc && (bc = Nl(), Zp = Ig(t), RS = t, a != null && (MS = me(a)), (Et & (ta | nu)) !== ma && (pl = !0, qf = Vp), e = vf(), t = gf(), e !== dm || t !== Jp ? dm = -1.1 : t !== null && (qf = Vp), Zs = e, Jp = t) : (e & 4194048) !== 0 && 0 > ei && (ei = Nl(), Kp = Ig(t), Z1 = t, a != null && (J1 = me(a)), 0 > Do) && (e = vf(), t = gf(), (e !== Gf || t !== Js) && (Gf = -1.1), wf = e, Js = t);
    }
    function W0(e) {
      if (0 > bc) {
        bc = Nl(), Zp = e._debugTask != null ? e._debugTask : null, (Et & (ta | nu)) !== ma && (qf = Vp);
        var t = vf(), a = gf();
        t !== dm || a !== Jp ? dm = -1.1 : a !== null && (qf = Vp), Zs = t, Jp = a;
      }
      0 > ei && (ei = Nl(), Kp = e._debugTask != null ? e._debugTask : null, 0 > Do) && (e = vf(), t = gf(), (e !== Gf || t !== Js) && (Gf = -1.1), wf = e, Js = t);
    }
    function Ln() {
      var e = Qs;
      return Qs = 0, e;
    }
    function Na(e) {
      var t = Qs;
      return Qs = e, t;
    }
    function Ii(e) {
      var t = Qs;
      return Qs += e, t;
    }
    function pa() {
      Be = Me = -1.1;
    }
    function Cl() {
      var e = Me;
      return Me = -1.1, e;
    }
    function ga(e) {
      0 <= e && (Me = e);
    }
    function tn() {
      var e = dl;
      return dl = -0, e;
    }
    function ln(e) {
      0 <= e && (dl = e);
    }
    function Tn() {
      var e = nl;
      return nl = null, e;
    }
    function aa() {
      var e = pl;
      return pl = !1, e;
    }
    function Cd(e) {
      mn = Nl(), 0 > e.actualStartTime && (e.actualStartTime = mn);
    }
    function Ko(e) {
      if (0 <= mn) {
        var t = Nl() - mn;
        e.actualDuration += t, e.selfBaseDuration = t, mn = -1;
      }
    }
    function Xc(e) {
      if (0 <= mn) {
        var t = Nl() - mn;
        e.actualDuration += t, mn = -1;
      }
    }
    function Eu() {
      if (0 <= mn) {
        var e = Nl(), t = e - mn;
        mn = -1, Qs += t, dl += t, Be = e;
      }
    }
    function xa(e) {
      nl === null && (nl = []), nl.push(e), Oo === null && (Oo = []), Oo.push(e);
    }
    function An() {
      mn = Nl(), 0 > Me && (Me = mn);
    }
    function an(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function F0(e, t) {
      if (kp === null) {
        var a = kp = [];
        US = 0, Ks = St(), hm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return US++, t.then(Dr, Dr), t;
    }
    function Dr() {
      if (--US === 0 && (-1 < ei || (Do = -1.1), kp !== null)) {
        hm !== null && (hm.status = "fulfilled");
        var e = kp;
        kp = null, Ks = 0, hm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Lc(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function zr() {
      var e = $s.current;
      return e !== null ? e : Jt.pooledCache;
    }
    function Rr(e, t) {
      t === null ? we($s, $s.current, e) : we($s, t.pool, e);
    }
    function Ud() {
      var e = zr();
      return e === null ? null : { parent: Hl._currentValue, pool: e };
    }
    function uy() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function nn(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Qc(e, t, a) {
      G.actQueue !== null && (G.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Ll, Ll), t = a), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, $o(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Ll, Ll);
          else {
            if (e = Jt, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, $o(e), e;
          }
          throw Ws = t, l0 = !0, mm;
      }
    }
    function un(e) {
      try {
        return JT(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Ws = t, l0 = !0, mm) : t;
      }
    }
    function Mr() {
      if (Ws === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Ws;
      return Ws = null, l0 = !1, e;
    }
    function $o(e) {
      if (e === mm || e === iv)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function jt(e) {
      var t = Ie;
      return e != null && (Ie = t === null ? e : t.concat(e)), t;
    }
    function Ba() {
      var e = Ie;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function Qn(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = zd(e, a.mode, 0), t._debugInfo = Ie, t.return = a), he(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function cn(e) {
      var t = a0;
      return a0 += 1, ym === null && (ym = uy()), Qc(ym, e, t);
    }
    function ja(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Tu(e, t) {
      throw t.$$typeof === Op ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Cr(e, t) {
      var a = Ba();
      a !== null ? a.run(
        Tu.bind(null, e, t)
      ) : Tu(e, t);
    }
    function Hd(e, t) {
      var a = me(e) || "Component";
      db[a] || (db[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function ko(e, t) {
      var a = Ba();
      a !== null ? a.run(
        Hd.bind(null, e, t)
      ) : Hd(e, t);
    }
    function iy(e, t) {
      var a = me(e) || "Component";
      hb[a] || (hb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Sl(e, t) {
      var a = Ba();
      a !== null ? a.run(
        iy.bind(null, e, t)
      ) : iy(e, t);
    }
    function Qt(e) {
      function t(S, E) {
        if (e) {
          var _ = S.deletions;
          _ === null ? (S.deletions = [E], S.flags |= 16) : _.push(E);
        }
      }
      function a(S, E) {
        if (!e) return null;
        for (; E !== null; )
          t(S, E), E = E.sibling;
        return null;
      }
      function i(S) {
        for (var E = /* @__PURE__ */ new Map(); S !== null; )
          S.key !== null ? E.set(S.key, S) : E.set(S.index, S), S = S.sibling;
        return E;
      }
      function o(S, E) {
        return S = yu(S, E), S.index = 0, S.sibling = null, S;
      }
      function f(S, E, _) {
        return S.index = _, e ? (_ = S.alternate, _ !== null ? (_ = _.index, _ < E ? (S.flags |= 67108866, E) : _) : (S.flags |= 67108866, E)) : (S.flags |= 1048576, E);
      }
      function d(S) {
        return e && S.alternate === null && (S.flags |= 67108866), S;
      }
      function h(S, E, _, Z) {
        return E === null || E.tag !== 6 ? (E = Rd(
          _,
          S.mode,
          Z
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = Ie, E) : (E = o(E, _), E.return = S, E._debugInfo = Ie, E);
      }
      function y(S, E, _, Z) {
        var oe = _.type;
        return oe === Wl ? (E = D(
          S,
          E,
          _.props.children,
          Z,
          _.key
        ), Qn(_, E, S), E) : E !== null && (E.elementType === oe || jc(E, _) || typeof oe == "object" && oe !== null && oe.$$typeof === yl && un(oe) === E.type) ? (E = o(E, _.props), ja(E, _), E.return = S, E._debugOwner = _._owner, E._debugInfo = Ie, E) : (E = zd(_, S.mode, Z), ja(E, _), E.return = S, E._debugInfo = Ie, E);
      }
      function p(S, E, _, Z) {
        return E === null || E.tag !== 4 || E.stateNode.containerInfo !== _.containerInfo || E.stateNode.implementation !== _.implementation ? (E = Er(_, S.mode, Z), E.return = S, E._debugInfo = Ie, E) : (E = o(E, _.children || []), E.return = S, E._debugInfo = Ie, E);
      }
      function D(S, E, _, Z, oe) {
        return E === null || E.tag !== 7 ? (E = pu(
          _,
          S.mode,
          Z,
          oe
        ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = Ie, E) : (E = o(E, _), E.return = S, E._debugInfo = Ie, E);
      }
      function R(S, E, _) {
        if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
          return E = Rd(
            "" + E,
            S.mode,
            _
          ), E.return = S, E._debugOwner = S, E._debugTask = S._debugTask, E._debugInfo = Ie, E;
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Hn:
              return _ = zd(
                E,
                S.mode,
                _
              ), ja(_, E), _.return = S, S = jt(E._debugInfo), _._debugInfo = Ie, Ie = S, _;
            case Df:
              return E = Er(
                E,
                S.mode,
                _
              ), E.return = S, E._debugInfo = Ie, E;
            case yl:
              var Z = jt(E._debugInfo);
              return E = un(E), S = R(S, E, _), Ie = Z, S;
          }
          if (_l(E) || at(E))
            return _ = pu(
              E,
              S.mode,
              _,
              null
            ), _.return = S, _._debugOwner = S, _._debugTask = S._debugTask, S = jt(E._debugInfo), _._debugInfo = Ie, Ie = S, _;
          if (typeof E.then == "function")
            return Z = jt(E._debugInfo), S = R(
              S,
              cn(E),
              _
            ), Ie = Z, S;
          if (E.$$typeof === In)
            return R(
              S,
              Or(S, E),
              _
            );
          Cr(S, E);
        }
        return typeof E == "function" && ko(S, E), typeof E == "symbol" && Sl(S, E), null;
      }
      function b(S, E, _, Z) {
        var oe = E !== null ? E.key : null;
        if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
          return oe !== null ? null : h(S, E, "" + _, Z);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case Hn:
              return _.key === oe ? (oe = jt(_._debugInfo), S = y(
                S,
                E,
                _,
                Z
              ), Ie = oe, S) : null;
            case Df:
              return _.key === oe ? p(S, E, _, Z) : null;
            case yl:
              return oe = jt(_._debugInfo), _ = un(_), S = b(
                S,
                E,
                _,
                Z
              ), Ie = oe, S;
          }
          if (_l(_) || at(_))
            return oe !== null ? null : (oe = jt(_._debugInfo), S = D(
              S,
              E,
              _,
              Z,
              null
            ), Ie = oe, S);
          if (typeof _.then == "function")
            return oe = jt(_._debugInfo), S = b(
              S,
              E,
              cn(_),
              Z
            ), Ie = oe, S;
          if (_.$$typeof === In)
            return b(
              S,
              E,
              Or(S, _),
              Z
            );
          Cr(S, _);
        }
        return typeof _ == "function" && ko(S, _), typeof _ == "symbol" && Sl(S, _), null;
      }
      function Y(S, E, _, Z, oe) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
          return S = S.get(_) || null, h(E, S, "" + Z, oe);
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Hn:
              return _ = S.get(
                Z.key === null ? _ : Z.key
              ) || null, S = jt(Z._debugInfo), E = y(
                E,
                _,
                Z,
                oe
              ), Ie = S, E;
            case Df:
              return S = S.get(
                Z.key === null ? _ : Z.key
              ) || null, p(E, S, Z, oe);
            case yl:
              var Le = jt(Z._debugInfo);
              return Z = un(Z), E = Y(
                S,
                E,
                _,
                Z,
                oe
              ), Ie = Le, E;
          }
          if (_l(Z) || at(Z))
            return _ = S.get(_) || null, S = jt(Z._debugInfo), E = D(
              E,
              _,
              Z,
              oe,
              null
            ), Ie = S, E;
          if (typeof Z.then == "function")
            return Le = jt(Z._debugInfo), E = Y(
              S,
              E,
              _,
              cn(Z),
              oe
            ), Ie = Le, E;
          if (Z.$$typeof === In)
            return Y(
              S,
              E,
              _,
              Or(E, Z),
              oe
            );
          Cr(E, Z);
        }
        return typeof Z == "function" && ko(E, Z), typeof Z == "symbol" && Sl(E, Z), null;
      }
      function ne(S, E, _, Z) {
        if (typeof _ != "object" || _ === null) return Z;
        switch (_.$$typeof) {
          case Hn:
          case Df:
            ie(S, E, _);
            var oe = _.key;
            if (typeof oe != "string") break;
            if (Z === null) {
              Z = /* @__PURE__ */ new Set(), Z.add(oe);
              break;
            }
            if (!Z.has(oe)) {
              Z.add(oe);
              break;
            }
            he(E, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                oe
              );
            });
            break;
          case yl:
            _ = un(_), ne(S, E, _, Z);
        }
        return Z;
      }
      function de(S, E, _, Z) {
        for (var oe = null, Le = null, ze = null, Ae = E, We = E = 0, el = null; Ae !== null && We < _.length; We++) {
          Ae.index > We ? (el = Ae, Ae = null) : el = Ae.sibling;
          var Rl = b(
            S,
            Ae,
            _[We],
            Z
          );
          if (Rl === null) {
            Ae === null && (Ae = el);
            break;
          }
          oe = ne(
            S,
            Rl,
            _[We],
            oe
          ), e && Ae && Rl.alternate === null && t(S, Ae), E = f(Rl, E, We), ze === null ? Le = Rl : ze.sibling = Rl, ze = Rl, Ae = el;
        }
        if (We === _.length)
          return a(S, Ae), rt && gu(S, We), Le;
        if (Ae === null) {
          for (; We < _.length; We++)
            Ae = R(S, _[We], Z), Ae !== null && (oe = ne(
              S,
              Ae,
              _[We],
              oe
            ), E = f(
              Ae,
              E,
              We
            ), ze === null ? Le = Ae : ze.sibling = Ae, ze = Ae);
          return rt && gu(S, We), Le;
        }
        for (Ae = i(Ae); We < _.length; We++)
          el = Y(
            Ae,
            S,
            We,
            _[We],
            Z
          ), el !== null && (oe = ne(
            S,
            el,
            _[We],
            oe
          ), e && el.alternate !== null && Ae.delete(
            el.key === null ? We : el.key
          ), E = f(
            el,
            E,
            We
          ), ze === null ? Le = el : ze.sibling = el, ze = el);
        return e && Ae.forEach(function(xo) {
          return t(S, xo);
        }), rt && gu(S, We), Le;
      }
      function kt(S, E, _, Z) {
        if (_ == null)
          throw Error("An iterable object provided no iterator.");
        for (var oe = null, Le = null, ze = E, Ae = E = 0, We = null, el = null, Rl = _.next(); ze !== null && !Rl.done; Ae++, Rl = _.next()) {
          ze.index > Ae ? (We = ze, ze = null) : We = ze.sibling;
          var xo = b(S, ze, Rl.value, Z);
          if (xo === null) {
            ze === null && (ze = We);
            break;
          }
          el = ne(
            S,
            xo,
            Rl.value,
            el
          ), e && ze && xo.alternate === null && t(S, ze), E = f(xo, E, Ae), Le === null ? oe = xo : Le.sibling = xo, Le = xo, ze = We;
        }
        if (Rl.done)
          return a(S, ze), rt && gu(S, Ae), oe;
        if (ze === null) {
          for (; !Rl.done; Ae++, Rl = _.next())
            ze = R(S, Rl.value, Z), ze !== null && (el = ne(
              S,
              ze,
              Rl.value,
              el
            ), E = f(
              ze,
              E,
              Ae
            ), Le === null ? oe = ze : Le.sibling = ze, Le = ze);
          return rt && gu(S, Ae), oe;
        }
        for (ze = i(ze); !Rl.done; Ae++, Rl = _.next())
          We = Y(
            ze,
            S,
            Ae,
            Rl.value,
            Z
          ), We !== null && (el = ne(
            S,
            We,
            Rl.value,
            el
          ), e && We.alternate !== null && ze.delete(
            We.key === null ? Ae : We.key
          ), E = f(
            We,
            E,
            Ae
          ), Le === null ? oe = We : Le.sibling = We, Le = We);
        return e && ze.forEach(function(pA) {
          return t(S, pA);
        }), rt && gu(S, Ae), oe;
      }
      function yt(S, E, _, Z) {
        if (typeof _ == "object" && _ !== null && _.type === Wl && _.key === null && (Qn(_, null, S), _ = _.props.children), typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case Hn:
              var oe = jt(_._debugInfo);
              e: {
                for (var Le = _.key; E !== null; ) {
                  if (E.key === Le) {
                    if (Le = _.type, Le === Wl) {
                      if (E.tag === 7) {
                        a(
                          S,
                          E.sibling
                        ), Z = o(
                          E,
                          _.props.children
                        ), Z.return = S, Z._debugOwner = _._owner, Z._debugInfo = Ie, Qn(_, Z, S), S = Z;
                        break e;
                      }
                    } else if (E.elementType === Le || jc(
                      E,
                      _
                    ) || typeof Le == "object" && Le !== null && Le.$$typeof === yl && un(Le) === E.type) {
                      a(
                        S,
                        E.sibling
                      ), Z = o(E, _.props), ja(Z, _), Z.return = S, Z._debugOwner = _._owner, Z._debugInfo = Ie, S = Z;
                      break e;
                    }
                    a(S, E);
                    break;
                  } else t(S, E);
                  E = E.sibling;
                }
                _.type === Wl ? (Z = pu(
                  _.props.children,
                  S.mode,
                  Z,
                  _.key
                ), Z.return = S, Z._debugOwner = S, Z._debugTask = S._debugTask, Z._debugInfo = Ie, Qn(_, Z, S), S = Z) : (Z = zd(
                  _,
                  S.mode,
                  Z
                ), ja(Z, _), Z.return = S, Z._debugInfo = Ie, S = Z);
              }
              return S = d(S), Ie = oe, S;
            case Df:
              e: {
                for (oe = _, _ = oe.key; E !== null; ) {
                  if (E.key === _)
                    if (E.tag === 4 && E.stateNode.containerInfo === oe.containerInfo && E.stateNode.implementation === oe.implementation) {
                      a(
                        S,
                        E.sibling
                      ), Z = o(
                        E,
                        oe.children || []
                      ), Z.return = S, S = Z;
                      break e;
                    } else {
                      a(S, E);
                      break;
                    }
                  else t(S, E);
                  E = E.sibling;
                }
                Z = Er(
                  oe,
                  S.mode,
                  Z
                ), Z.return = S, S = Z;
              }
              return d(S);
            case yl:
              return oe = jt(_._debugInfo), _ = un(_), S = yt(
                S,
                E,
                _,
                Z
              ), Ie = oe, S;
          }
          if (_l(_))
            return oe = jt(_._debugInfo), S = de(
              S,
              E,
              _,
              Z
            ), Ie = oe, S;
          if (at(_)) {
            if (oe = jt(_._debugInfo), Le = at(_), typeof Le != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var ze = Le.call(_);
            return ze === _ ? (S.tag !== 0 || Object.prototype.toString.call(S.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(ze) !== "[object Generator]") && (rb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), rb = !0) : _.entries !== Le || BS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), BS = !0), S = kt(
              S,
              E,
              ze,
              Z
            ), Ie = oe, S;
          }
          if (typeof _.then == "function")
            return oe = jt(_._debugInfo), S = yt(
              S,
              E,
              cn(_),
              Z
            ), Ie = oe, S;
          if (_.$$typeof === In)
            return yt(
              S,
              E,
              Or(S, _),
              Z
            );
          Cr(S, _);
        }
        return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (oe = "" + _, E !== null && E.tag === 6 ? (a(
          S,
          E.sibling
        ), Z = o(E, oe), Z.return = S, S = Z) : (a(S, E), Z = Rd(
          oe,
          S.mode,
          Z
        ), Z.return = S, Z._debugOwner = S, Z._debugTask = S._debugTask, Z._debugInfo = Ie, S = Z), d(S)) : (typeof _ == "function" && ko(S, _), typeof _ == "symbol" && Sl(S, _), a(S, E));
      }
      return function(S, E, _, Z) {
        var oe = Ie;
        Ie = null;
        try {
          a0 = 0;
          var Le = yt(
            S,
            E,
            _,
            Z
          );
          return ym = null, Le;
        } catch (el) {
          if (el === mm || el === iv) throw el;
          var ze = H(29, el, null, S.mode);
          ze.lanes = Z, ze.return = S;
          var Ae = ze._debugInfo = Ie;
          if (ze._debugOwner = S._debugOwner, ze._debugTask = S._debugTask, Ae != null) {
            for (var We = Ae.length - 1; 0 <= We; We--)
              if (typeof Ae[We].stack == "string") {
                ze._debugOwner = Ae[We], ze._debugTask = Ae[We].debugTask;
                break;
              }
          }
          return ze;
        } finally {
          Ie = oe;
        }
      };
    }
    function ot(e, t) {
      var a = _l(e);
      return e = !a && typeof at(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Au(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Ya(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Ou(e) {
      return {
        lane: e,
        tag: yb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function va(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, YS === i && !vb) {
        var o = me(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), vb = !0;
      }
      return (Et & ta) !== ma ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = br(e), Wm(e, null, a), t) : (Zi(e, i, t, a), br(e));
    }
    function Wo(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ur(e, a);
      }
    }
    function Ur(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function _u() {
      if (qS) {
        var e = hm;
        if (e !== null) throw e;
      }
    }
    function Vn(e, t, a, i) {
      qS = !1;
      var o = e.updateQueue;
      Xf = !1, YS = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var D = e.alternate;
        D !== null && (D = D.updateQueue, h = D.lastBaseUpdate, h !== d && (h === null ? D.firstBaseUpdate = p : h.next = p, D.lastBaseUpdate = y));
      }
      if (f !== null) {
        var R = o.baseState;
        d = 0, D = p = y = null, h = f;
        do {
          var b = h.lane & -536870913, Y = b !== h.lane;
          if (Y ? (Pe & b) === b : (i & b) === b) {
            b !== 0 && b === Ks && (qS = !0), D !== null && (D = D.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              b = e;
              var ne = h, de = t, kt = a;
              switch (ne.tag) {
                case pb:
                  if (ne = ne.payload, typeof ne == "function") {
                    sm = !0;
                    var yt = ne.call(
                      kt,
                      R,
                      de
                    );
                    if (b.mode & $a) {
                      ve(!0);
                      try {
                        ne.call(kt, R, de);
                      } finally {
                        ve(!1);
                      }
                    }
                    sm = !1, R = yt;
                    break e;
                  }
                  R = ne;
                  break e;
                case jS:
                  b.flags = b.flags & -65537 | 128;
                case yb:
                  if (yt = ne.payload, typeof yt == "function") {
                    if (sm = !0, ne = yt.call(
                      kt,
                      R,
                      de
                    ), b.mode & $a) {
                      ve(!0);
                      try {
                        yt.call(kt, R, de);
                      } finally {
                        ve(!1);
                      }
                    }
                    sm = !1;
                  } else ne = yt;
                  if (ne == null) break e;
                  R = ke({}, R, ne);
                  break e;
                case gb:
                  Xf = !0;
              }
            }
            b = h.callback, b !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = o.callbacks, Y === null ? o.callbacks = [b] : Y.push(b));
          } else
            Y = {
              lane: b,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, D === null ? (p = D = Y, y = R) : D = D.next = Y, d |= b;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            Y = h, h = Y.next, Y.next = null, o.lastBaseUpdate = Y, o.shared.pending = null;
          }
        } while (!0);
        D === null && (y = R), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = D, f === null && (o.shared.lanes = 0), Vf |= d, e.lanes = d, e.memoizedState = R;
      }
      YS = null;
    }
    function Nd(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Hr(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Nd(a[e], t);
    }
    function xd(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Nd(a[e], t);
    }
    function Pi(e, t) {
      var a = Tc;
      we(ov, a, e), we(pm, t, e), Tc = a | t.baseLanes;
    }
    function Zn(e) {
      we(ov, Tc, e), we(
        pm,
        pm.current,
        e
      );
    }
    function Du(e) {
      Tc = ov.current, Re(pm, e), Re(ov, e);
    }
    function na(e) {
      var t = e.alternate;
      we(
        zl,
        zl.current & gm,
        e
      ), we(lu, e, e), ti === null && (t === null || pm.current !== null || t.memoizedState !== null) && (ti = e);
    }
    function Nr(e) {
      we(zl, zl.current, e), we(lu, e, e), ti === null && (ti = e);
    }
    function Bd(e) {
      e.tag === 22 ? (we(zl, zl.current, e), we(lu, e, e), ti === null && (ti = e)) : on(e);
    }
    function on(e) {
      we(zl, zl.current, e), we(
        lu,
        lu.current,
        e
      );
    }
    function ua(e) {
      Re(lu, e), ti === e && (ti = null), Re(zl, e);
    }
    function zu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || op(a) || _h(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function De() {
      var e = q;
      ai === null ? ai = [e] : ai.push(e);
    }
    function I() {
      var e = q;
      if (ai !== null && (Mo++, ai[Mo] !== e)) {
        var t = me(Xe);
        if (!Sb.has(t) && (Sb.add(t), ai !== null)) {
          for (var a = "", i = 0; i <= Mo; i++) {
            var o = ai[i], f = i === Mo ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Vc(e) {
      e == null || _l(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        q,
        typeof e
      );
    }
    function jd() {
      var e = me(Xe);
      Eb.has(e) || (Eb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function il() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function cy(e, t) {
      if (i0) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          q
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        q,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!hn(e[a], t[a])) return !1;
      return !0;
    }
    function cl(e, t, a, i, o, f) {
      zo = f, Xe = t, ai = e !== null ? e._debugHookTypes : null, Mo = -1, i0 = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = me(Xe), wS.has(f) || (wS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e !== null && e.memoizedState !== null ? XS : ai !== null ? Tb : GS, Is = f = (t.mode & $a) !== qe;
      var d = HS(a, i, o);
      if (Is = !1, Sm && (d = Zc(
        t,
        a,
        i,
        o
      )), f) {
        ve(!0);
        try {
          d = Zc(
            t,
            a,
            i,
            o
          );
        } finally {
          ve(!1);
        }
      }
      return Yd(e, t), d;
    }
    function Yd(e, t) {
      t._debugHookTypes = ai, t.dependencies === null ? Ro !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Ro
      }) : t.dependencies._debugThenableState = Ro, G.H = c0;
      var a = Zt !== null && Zt.next !== null;
      if (zo = 0, ai = q = xl = Zt = Xe = null, Mo = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), rv = !1, u0 = 0, Ro = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Bl || (e = e.dependencies, e !== null && Ar(e) && (Bl = !0)), l0 ? (l0 = !1, e = !0) : e = !1, e && (t = me(t) || "Unknown", bb.has(t) || wS.has(t) || (bb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Zc(e, t, a, i) {
      Xe = e;
      var o = 0;
      do {
        if (Sm && (Ro = null), u0 = 0, Sm = !1, o >= $T)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, i0 = !1, xl = Zt = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Mo = -1, G.H = Ab, f = HS(t, a, i);
      } while (Sm);
      return f;
    }
    function xr() {
      var e = G.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? Fo(t) : t, e = e.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== e && (Xe.flags |= 1024), t;
    }
    function Br() {
      var e = sv !== 0;
      return sv = 0, e;
    }
    function ec(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Hi) !== qe ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function tc(e) {
      if (rv) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        rv = !1;
      }
      zo = 0, ai = xl = Zt = Xe = null, Mo = -1, q = null, Sm = !1, u0 = sv = 0, Ro = null;
    }
    function Sa() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return xl === null ? Xe.memoizedState = xl = e : xl = xl.next = e, xl;
    }
    function Dt() {
      if (Zt === null) {
        var e = Xe.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Zt.next;
      var t = xl === null ? Xe.memoizedState : xl.next;
      if (t !== null)
        xl = t, Zt = e;
      else {
        if (e === null)
          throw Xe.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        Zt = e, e = {
          memoizedState: Zt.memoizedState,
          baseState: Zt.baseState,
          baseQueue: Zt.baseQueue,
          queue: Zt.queue,
          next: null
        }, xl === null ? Xe.memoizedState = xl = e : xl = xl.next = e;
      }
      return xl;
    }
    function qd() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Fo(e) {
      var t = u0;
      return u0 += 1, Ro === null && (Ro = uy()), e = Qc(Ro, e, t), t = Xe, (xl === null ? t.memoizedState : xl.next) === null && (t = t.alternate, G.H = t !== null && t.memoizedState !== null ? XS : GS), e;
    }
    function qa(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Fo(e);
        if (e.$$typeof === In) return Lt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function mi(e) {
      var t = null, a = Xe.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Xe.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = qd(), Xe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || i0)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = nS;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function wa(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function wd(e, t, a) {
      var i = Sa();
      if (a !== void 0) {
        var o = a(t);
        if (Is) {
          ve(!0);
          try {
            a(t);
          } finally {
            ve(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = yy.bind(
        null,
        Xe,
        e
      ), [i.memoizedState, e];
    }
    function Jn(e) {
      var t = Dt();
      return jr(t, Zt, e);
    }
    function jr(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, D = !1;
        do {
          var R = p.lane & -536870913;
          if (R !== p.lane ? (Pe & R) === R : (zo & R) === R) {
            var b = p.revertLane;
            if (b === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), R === Ks && (D = !0);
            else if ((zo & b) === b) {
              p = p.next, b === Ks && (D = !0);
              continue;
            } else
              R = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = R, d = f) : y = y.next = R, Xe.lanes |= b, Vf |= b;
            R = p.action, Is && a(f, R), f = p.hasEagerState ? p.eagerState : a(f, R);
          } else
            b = {
              lane: R,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = b, d = f) : y = y.next = b, Xe.lanes |= R, Vf |= R;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !hn(f, e.memoizedState) && (Bl = !0, D && (a = hm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function lc(e) {
      var t = Dt(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        hn(f, t.memoizedState) || (Bl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function Io(e, t, a) {
      var i = Xe, o = Sa();
      if (rt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        vm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), vm = !0);
      } else {
        if (f = t(), vm || (a = t(), hn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), vm = !0)), Jt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Pe & 127) !== 0 || oy(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Xr(
        nc.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, $c(
        li | pn,
        { destroy: void 0 },
        ac.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Yr(e, t, a) {
      var i = Xe, o = Dt(), f = rt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !vm) {
        var d = t();
        hn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), vm = !0);
      }
      (d = !hn(
        (Zt || o).memoizedState,
        a
      )) && (o.memoizedState = a, Bl = !0), o = o.queue;
      var h = nc.bind(null, i, o, e);
      if (Vl(2048, pn, h, [e]), o.getSnapshot !== t || d || xl !== null && xl.memoizedState.tag & li) {
        if (i.flags |= 2048, $c(
          li | pn,
          { destroy: void 0 },
          ac.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), Jt === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (zo & 127) !== 0 || oy(i, t, a);
      }
      return a;
    }
    function oy(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Xe.updateQueue, t === null ? (t = qd(), Xe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ac(e, t, a, i) {
      t.value = a, t.getSnapshot = i, fy(t) && ry(e);
    }
    function nc(e, t, a) {
      return a(function() {
        fy(t) && (Xn(2, "updateSyncExternalStore()", e), ry(e));
      });
    }
    function fy(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !hn(e, a);
      } catch {
        return !0;
      }
    }
    function ry(e) {
      var t = Ql(e, 2);
      t !== null && al(t, e, 2);
    }
    function uc(e) {
      var t = Sa();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Is) {
          ve(!0);
          try {
            a();
          } finally {
            ve(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wa,
        lastRenderedState: e
      }, t;
    }
    function Jc(e) {
      e = uc(e);
      var t = e.queue, a = Jd.bind(null, Xe, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Po(e) {
      var t = Sa();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Zl.bind(
        null,
        Xe,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function ef(e, t) {
      var a = Dt();
      return qr(a, Zt, e, t);
    }
    function qr(e, t, a, i) {
      return e.baseState = a, jr(
        e,
        Zt,
        typeof i == "function" ? i : wa
      );
    }
    function sy(e, t) {
      var a = Dt();
      return Zt !== null ? qr(a, Zt, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Kc(e, t, a, i, o) {
      if (Wt(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        G.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, dy(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function dy(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = G.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), G.T = d;
        try {
          var h = a(o, i), y = G.S;
          y !== null && y(d, h), yi(e, t, h);
        } catch (p) {
          wr(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), G.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), yi(e, t, d);
        } catch (p) {
          wr(e, t, p);
        }
    }
    function yi(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (G.asyncTransitions++, a.then(Si, Si), a.then(
        function(i) {
          Gd(e, t, i);
        },
        function(i) {
          return wr(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : Gd(e, t, a);
    }
    function Gd(e, t, a) {
      t.status = "fulfilled", t.value = a, pi(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, dy(e, a)));
    }
    function wr(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, pi(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function pi(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function gi(e, t) {
      return t;
    }
    function Ru(e, t) {
      if (rt) {
        var a = Jt.formState;
        if (a !== null) {
          e: {
            var i = Xe;
            if (rt) {
              if (Pt) {
                t: {
                  for (var o = Pt, f = Pu; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = fn(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === r1 || f === oE ? o : null;
                }
                if (o) {
                  Pt = fn(
                    o.nextSibling
                  ), i = o.data === r1;
                  break e;
                }
              }
              si(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Sa(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gi,
        lastRenderedState: t
      }, a.queue = i, a = Jd.bind(
        null,
        Xe,
        i
      ), i.dispatch = a, i = uc(!1), f = Zl.bind(
        null,
        Xe,
        !1,
        i.queue
      ), i = Sa(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Kc.bind(
        null,
        Xe,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function tf(e) {
      var t = Dt();
      return Xd(t, Zt, e);
    }
    function Xd(e, t, a) {
      if (t = jr(
        e,
        t,
        gi
      )[0], e = Jn(wa)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = Fo(t);
        } catch (d) {
          throw d === mm ? iv : d;
        }
      else i = t;
      t = Dt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Xe.flags |= 2048, $c(
        li | pn,
        { destroy: void 0 },
        Gr.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function Gr(e, t) {
      e.action = t;
    }
    function ic(e) {
      var t = Dt(), a = Zt;
      if (a !== null)
        return Xd(t, a, e);
      Dt(), t = t.memoizedState, a = Dt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function $c(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Xe.updateQueue, t === null && (t = qd(), Xe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Ld(e) {
      var t = Sa();
      return e = { current: e }, t.memoizedState = e;
    }
    function On(e, t, a, i) {
      var o = Sa();
      Xe.flags |= e, o.memoizedState = $c(
        li | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function Vl(e, t, a, i) {
      var o = Dt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      Zt !== null && i !== null && cy(i, Zt.memoizedState.deps) ? o.memoizedState = $c(t, f, a, i) : (Xe.flags |= e, o.memoizedState = $c(
        li | t,
        f,
        a,
        i
      ));
    }
    function Xr(e, t) {
      (Xe.mode & Hi) !== qe ? On(276826112, pn, e, t) : On(8390656, pn, e, t);
    }
    function hy(e) {
      Xe.flags |= 4;
      var t = Xe.updateQueue;
      if (t === null)
        t = qd(), Xe.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Lr(e) {
      var t = Sa(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Et & ta) !== ma)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function ia(e) {
      var t = Dt().memoizedState;
      return hy({ ref: t, nextImpl: e }), function() {
        if ((Et & ta) !== ma)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function Ga(e, t) {
      var a = 4194308;
      return (Xe.mode & Hi) !== qe && (a |= 134217728), On(a, au, e, t);
    }
    function vi(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Qr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Xe.mode & Hi) !== qe && (i |= 134217728), On(
        i,
        au,
        vi.bind(null, t, e),
        a
      );
    }
    function Vr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Vl(
        4,
        au,
        vi.bind(null, t, e),
        a
      );
    }
    function Mu(e, t) {
      return Sa().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function ca(e, t) {
      var a = Dt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && cy(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function tl(e, t) {
      var a = Sa();
      t = t === void 0 ? null : t;
      var i = e();
      if (Is) {
        ve(!0);
        try {
          e();
        } finally {
          ve(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function kc(e, t) {
      var a = Dt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && cy(t, i[1]))
        return i[0];
      if (i = e(), Is) {
        ve(!0);
        try {
          e();
        } finally {
          ve(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function Kn(e, t) {
      var a = Sa();
      return ol(a, e, t);
    }
    function Je(e, t) {
      var a = Dt();
      return Zr(
        a,
        Zt.memoizedState,
        e,
        t
      );
    }
    function Ut(e, t) {
      var a = Dt();
      return Zt === null ? ol(a, e, t) : Zr(
        a,
        Zt.memoizedState,
        e,
        t
      );
    }
    function ol(e, t, a) {
      return a === void 0 || (zo & 1073741824) !== 0 && (Pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Vt(), Xe.lanes |= e, Vf |= e, a);
    }
    function Zr(e, t, a, i) {
      return hn(a, t) ? a : pm.current !== null ? (e = ol(e, a, i), hn(e, t) || (Bl = !0), e) : (zo & 42) === 0 || (zo & 1073741824) !== 0 && (Pe & 261930) === 0 ? (Bl = !0, e.memoizedState = a) : (e = Vt(), Xe.lanes |= e, Vf |= e, t);
    }
    function Si() {
      G.asyncTransitions--;
    }
    function cc(e, t, a, i, o) {
      var f = Rt.p;
      Rt.p = f !== 0 && f < Il ? f : Il;
      var d = G.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), G.T = h, Zl(e, !1, t, a);
      try {
        var y = o(), p = G.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          G.asyncTransitions++, y.then(Si, Si);
          var D = Lc(
            y,
            i
          );
          Fc(
            e,
            t,
            D,
            $l(e)
          );
        } else
          Fc(
            e,
            t,
            i,
            $l(e)
          );
      } catch (R) {
        Fc(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: R },
          $l(e)
        );
      } finally {
        Rt.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), G.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function lf(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = af(e).queue;
      W0(e), cc(
        e,
        o,
        t,
        fd,
        a === null ? Ye : function() {
          return Wc(e), a(i);
        }
      );
    }
    function af(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: fd,
        baseState: fd,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: wa,
          lastRenderedState: fd
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: wa,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Wc(e) {
      G.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = af(e);
      t.next === null && (t = e.alternate.memoizedState), Fc(
        e,
        t.next.queue,
        {},
        $l(e)
      );
    }
    function my() {
      var e = uc(!1);
      return e = cc.bind(
        null,
        Xe,
        e.queue,
        !0,
        !1
      ), Sa().memoizedState = e, [!1, e];
    }
    function ll() {
      var e = Jn(wa)[0], t = Dt().memoizedState;
      return [
        typeof e == "boolean" ? e : Fo(e),
        t
      ];
    }
    function Qd() {
      var e = lc(wa)[0], t = Dt().memoizedState;
      return [
        typeof e == "boolean" ? e : Fo(e),
        t
      ];
    }
    function bi() {
      return Lt(T0);
    }
    function Vd() {
      var e = Sa(), t = Jt.identifierPrefix;
      if (rt) {
        var a = To, i = Eo;
        a = (i & ~(1 << 32 - Fl(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = sv++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = KT++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Zd() {
      return Sa().memoizedState = Iv.bind(
        null,
        Xe
      );
    }
    function Iv(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = $l(a), o = Ou(i), f = va(a, o, i);
            f !== null && (Xn(i, "refresh()", e), al(f, a, i), Wo(f, a, i)), e = ny(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function yy(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = $l(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Wt(e) ? Jr(t, o) : (o = km(e, t, o, i), o !== null && (Xn(i, "dispatch()", e), al(o, e, i), nf(o, t, i)));
    }
    function Jd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = $l(e), Fc(e, t, a, i) && Xn(i, "setState()", e);
    }
    function Fc(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Wt(e)) Jr(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = G.H;
          G.H = xi;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, hn(y, h))
              return Zi(e, t, o, 0), Jt === null && Zo(), !1;
          } catch {
          } finally {
            G.H = d;
          }
        }
        if (a = km(e, t, o, i), a !== null)
          return al(a, e, i), nf(a, t, i), !0;
      }
      return !1;
    }
    function Zl(e, t, a, i) {
      if (G.T === null && Ks === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: St(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Wt(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = km(
          e,
          a,
          i,
          2
        ), t !== null && (Xn(2, "setOptimistic()", e), al(t, e, 2));
    }
    function Wt(e) {
      var t = e.alternate;
      return e === Xe || t !== null && t === Xe;
    }
    function Jr(e, t) {
      Sm = rv = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function nf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, ur(e, a);
      }
    }
    function uf(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        xb.has(t) || (xb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Kr(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & $a) {
        ve(!0);
        try {
          f = a(i, o);
        } finally {
          ve(!1);
        }
      }
      f === void 0 && (t = Te(t) || "Component", Cb.has(t) || (Cb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : ke({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Cu(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & $a) {
          ve(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            ve(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Te(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Sr(a, i) || !Sr(o, f) : !0;
    }
    function $r(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = me(e) || "Component", _b.has(e) || (_b.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), LS.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Ei(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = ke({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Kd(e) {
      SS(e), console.warn(
        `%s

%s
`,
        bm ? "An error occurred in the <" + bm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function py(e) {
      var t = bm ? "The above error occurred in the <" + bm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((QS || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          pE + " " + e[0],
          gE,
          jv + i + jv,
          vE
        ) : e.splice(
          0,
          0,
          pE,
          gE,
          jv + i + jv,
          vE
        ), e.unshift(console), i = mA.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function gy(e) {
      SS(e);
    }
    function kr(e, t) {
      try {
        bm = t.source ? me(t.source) : null, QS = null;
        var a = t.value;
        if (G.actQueue !== null)
          G.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function vy(e, t, a) {
      try {
        bm = a.source ? me(a.source) : null, QS = me(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function $d(e, t, a) {
      return a = Ou(a), a.tag = jS, a.payload = { element: null }, a.callback = function() {
        he(t.source, kr, e, t);
      }, a;
    }
    function kd(e) {
      return e = Ou(e), e.tag = jS, e;
    }
    function Wr(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          J0(a), he(
            i.source,
            vy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        J0(a), he(
          i.source,
          vy,
          t,
          a,
          i
        ), typeof o != "function" && (Jf === null ? Jf = /* @__PURE__ */ new Set([this]) : Jf.add(this)), QT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          me(a) || "Unknown"
        );
      });
    }
    function I0(e, t, a, i, o) {
      if (a.flags |= 32768, Bn && Gu(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && Fi(
          t,
          a,
          o,
          !0
        ), rt && (Sc = !0), a = lu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return ti === null ? uo() : a.alternate === null && hl === Uo && (hl = mv), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === cv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), fa(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === cv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), fa(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return fa(e, i, o), uo(), !1;
      }
      if (rt)
        return Sc = !0, t = lu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== _S && vu(
          ya(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== _S && vu(
          ya(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = ya(i, a), o = $d(
          e.stateNode,
          i,
          o
        ), Ur(e, o), hl !== Lf && (hl = Ps)), !1;
      var f = ya(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (h0 === null ? h0 = [f] : h0.push(f), hl !== Lf && (hl = Ps), t === null) return !0;
      i = ya(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = $d(
              a.stateNode,
              i,
              e
            ), Ur(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Jf === null || !Jf.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = kd(o), Wr(
                o,
                e,
                a,
                i
              ), Ur(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function Jl(e, t, a, i) {
      t.child = e === null ? mb(t, null, a, i) : Fs(
        t,
        e.child,
        a,
        i
      );
    }
    function Sy(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return en(t), i = cl(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Br(), e !== null && !Bl ? (ec(e, t, o), Uu(e, t, o)) : (rt && h && Md(t), t.flags |= 1, Jl(e, t, i, o), t.child);
    }
    function by(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Dd(f) && f.defaultProps === void 0 && a.compare === null ? (a = Ji(f), t.tag = 15, t.type = a, of(t, f), Ey(
          e,
          t,
          a,
          i,
          o
        )) : (e = Yc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !nh(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Sr, a(d, i) && e.ref === t.ref)
          return Uu(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = yu(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Ey(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Sr(f, i) && e.ref === t.ref && t.type === e.type)
          if (Bl = !1, t.pendingProps = i = f, nh(e, o))
            (e.flags & 131072) !== 0 && (Bl = !0);
          else
            return t.lanes = e.lanes, Uu(e, t, o);
      }
      return Id(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Wd(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: Lp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return Ty(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Rr(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Pi(t, f) : Zn(t), Bd(t);
        else
          return i = t.lanes = 536870912, Ty(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Rr(t, f.cachePool), Pi(t, f), on(t), t.memoizedState = null) : (e !== null && Rr(t, null), Zn(t), on(t));
      return Jl(e, t, o, a), t.child;
    }
    function cf(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Lp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function Ty(e, t, a, i, o) {
      var f = zr();
      return f = f === null ? null : {
        parent: Hl._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Rr(t, null), Zn(t), Bd(t), e !== null && Fi(e, t, i, !0), t.childLanes = o, null;
    }
    function Fr(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = es(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Ay(e, t, a) {
      return Fs(t, e.child, null, a), e = Fr(
        t,
        t.pendingProps
      ), e.flags |= 2, ua(t), t.memoizedState = null, e;
    }
    function P0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (rt) {
          if (i.mode === "hidden")
            return e = Fr(t, i), t.lanes = 536870912, cf(null, e);
          if (Nr(t), (e = Pt) ? (a = Oh(
            e,
            Pu
          ), a = a !== null && a.data === ud ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: $0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Fm(a), i.return = t, t.child = i, Da = t, Pt = null)) : a = null, a === null)
            throw $i(t, e), si(t);
          return t.lanes = 536870912, null;
        }
        return Fr(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Nr(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = Ay(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (Ha(), (a & 536870912) !== 0 && mf(t), Bl || Fi(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Bl || o) {
          if (i = Jt, i !== null && (d = Gn(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Ql(e, d), al(i, e, d), VS;
          uo(), t = Ay(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, Pt = fn(
            d.nextSibling
          ), Da = t, rt = !0, jf = null, Sc = !1, tu = null, Pu = !1, e !== null && k0(t, e), t = Fr(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && mf(t), e = yu(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Fd(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Id(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Te(a) || "Unknown";
        Bb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Bb[f] = !0);
      }
      return t.mode & $a && Ni.recordLegacyContextWarning(
        t,
        null
      ), e === null && (of(t, t.type), a.contextTypes && (f = Te(a) || "Unknown", Yb[f] || (Yb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), en(t), a = cl(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = Br(), e !== null && !Bl ? (ec(e, t, o), Uu(e, t, o)) : (rt && i && Md(t), t.flags |= 1, Jl(e, t, a, o), t.child);
    }
    function Ic(e, t, a, i, o, f) {
      return en(t), Mo = -1, i0 = e !== null && e.type !== t.type, t.updateQueue = null, a = Zc(
        t,
        i,
        a,
        o
      ), Yd(e, t), i = Br(), e !== null && !Bl ? (ec(e, t, f), Uu(e, t, f)) : (rt && i && Md(t), t.flags |= 1, Jl(e, t, a, f), t.child);
    }
    function Oy(e, t, a, i, o) {
      switch (Ne(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = Jt, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = kd(h), Wr(
            h,
            d,
            t,
            ya(f, t)
          ), Ur(t, h);
      }
      if (en(t), t.stateNode === null) {
        if (d = Bf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== In) && !Nb.has(a) && (Nb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === wh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Te(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Lt(f)), f = new a(i, d), t.mode & $a) {
          ve(!0);
          try {
            f = new a(i, d);
          } finally {
            ve(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = LS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Ob, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Te(a) || "Component", Db.has(d) || (Db.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Te(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Rb.has(f) || (Rb.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = Te(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Hb.has(a) && (Hb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Ub.has(a) && (Ub.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Te(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || zb.has(a) || (zb.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Te(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || _l(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Au(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Lt(d) : Bf, f.state === i && (d = Te(a) || "Component", Mb.has(d) || (Mb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & $a && Ni.recordLegacyContextWarning(
          t,
          f
        ), Ni.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Kr(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          me(t) || "Component"
        ), LS.enqueueReplaceState(
          f,
          f.state,
          null
        )), Vn(t, i, f, o), _u(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hi) !== qe && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var D = t.memoizedProps;
        h = Ei(a, D), f.props = h;
        var R = f.context;
        y = a.contextType, d = Bf, typeof y == "object" && y !== null && (d = Lt(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", D = t.pendingProps !== D, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (D || R !== d) && $r(
          t,
          f,
          i,
          d
        ), Xf = !1;
        var b = t.memoizedState;
        f.state = b, Vn(t, i, f, o), _u(), R = t.memoizedState, D || b !== R || Xf ? (typeof p == "function" && (Kr(
          t,
          a,
          p,
          i
        ), R = t.memoizedState), (h = Xf || Cu(
          t,
          a,
          h,
          i,
          b,
          R,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hi) !== qe && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hi) !== qe && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = R), f.props = i, f.state = R, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Hi) !== qe && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Ya(e, t), d = t.memoizedProps, y = Ei(a, d), f.props = y, p = t.pendingProps, b = f.context, R = a.contextType, h = Bf, typeof R == "object" && R !== null && (h = Lt(R)), D = a.getDerivedStateFromProps, (R = typeof D == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || b !== h) && $r(
          t,
          f,
          i,
          h
        ), Xf = !1, b = t.memoizedState, f.state = b, Vn(t, i, f, o), _u();
        var Y = t.memoizedState;
        d !== p || b !== Y || Xf || e !== null && e.dependencies !== null && Ar(e.dependencies) ? (typeof D == "function" && (Kr(
          t,
          a,
          D,
          i
        ), Y = t.memoizedState), (y = Xf || Cu(
          t,
          a,
          y,
          i,
          b,
          Y,
          h
        ) || e !== null && e.dependencies !== null && Ar(e.dependencies)) ? (R || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, Y, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          Y,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = Y), f.props = i, f.state = Y, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Fd(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Ac(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, mn = -1;
        else if (a = eb(h), t.mode & $a) {
          ve(!0);
          try {
            eb(h);
          } finally {
            ve(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Fs(
          t,
          e.child,
          null,
          o
        ), t.child = Fs(
          t,
          null,
          a,
          o
        )) : Jl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Uu(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (Em || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        me(t) || "a component"
      ), Em = !0), e;
    }
    function Ir(e, t, a, i) {
      return di(), t.flags |= 256, Jl(e, t, a, i), t.child;
    }
    function of(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Te(t) || "Unknown", qb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), qb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Te(t) || "Unknown", jb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), jb[t] = !0));
    }
    function Pd(e) {
      return { baseLanes: e, cachePool: Ud() };
    }
    function Pr(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= wn), e;
    }
    function eg(e, t, a) {
      var i, o = t.pendingProps;
      Se(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (zl.current & n0) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (rt) {
          if (f ? na(t) : on(t), (e = Pt) ? (a = Oh(
            e,
            Pu
          ), a = a !== null && a.data !== ud ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: $0(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Fm(a), i.return = t, t.child = i, Da = t, Pt = null)) : a = null, a === null)
            throw $i(t, e), si(t);
          return _h(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          on(t);
          var y = t.mode;
          return h = es(
            { mode: "hidden", children: h },
            y
          ), o = pu(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = Pd(a), o.childLanes = Pr(
            e,
            i,
            a
          ), t.memoizedState = ZS, cf(
            null,
            o
          );
        }
        return na(t), eh(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var D = p.dehydrated;
        if (D !== null) {
          if (d)
            t.flags & 256 ? (na(t), t.flags &= -257, t = th(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (on(t), t.child = e.child, t.flags |= 128, t = null) : (on(t), h = o.fallback, y = t.mode, o = es(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = pu(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Fs(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = Pd(a), o.childLanes = Pr(
              e,
              i,
              a
            ), t.memoizedState = ZS, t = cf(
              null,
              o
            ));
          else if (na(t), Ha(), (a & 536870912) !== 0 && mf(t), _h(
            D
          )) {
            if (i = D.nextSibling && D.nextSibling.dataset, i) {
              h = i.dgst;
              var R = i.msg;
              y = i.stck;
              var b = i.cstck;
            }
            f = R, i = h, o = y, D = b, h = f, y = D, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && OS.set(
              h,
              o
            ), vu(o), t = th(
              e,
              t,
              a
            );
          } else if (Bl || Fi(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, Bl || i) {
            if (i = Jt, i !== null && (o = Gn(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Ql(
                e,
                o
              ), al(
                i,
                e,
                o
              ), VS;
            op(
              D
            ) || uo(), t = th(
              e,
              t,
              a
            );
          } else
            op(
              D
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, Pt = fn(
              D.nextSibling
            ), Da = t, rt = !0, jf = null, Sc = !1, tu = null, Pu = !1, e !== null && k0(t, e), t = eh(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (on(t), h = o.fallback, y = t.mode, b = e.child, D = b.sibling, o = yu(
        b,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = b.subtreeFlags & 65011712, D !== null ? h = yu(
        D,
        h
      ) : (h = pu(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, cf(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = Pd(a) : (y = h.cachePool, y !== null ? (b = Hl._currentValue, y = y.parent !== b ? { parent: b, pool: b } : y) : y = Ud(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Pr(
        e,
        i,
        a
      ), t.memoizedState = ZS, cf(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && mf(t), na(t), a = e.child, e = a.sibling, a = yu(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function eh(e, t) {
      return t = es(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function es(e, t) {
      return e = H(22, e, null, t), e.lanes = 0, e;
    }
    function th(e, t, a) {
      return Fs(t, e.child, null, a), e = eh(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function _y(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), hi(
        e.return,
        t,
        a
      );
    }
    function lh(e, t, a, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function ah(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = zl.current;
      if ((i = (h & n0) !== 0) ? (h = h & gm | n0, t.flags |= 128) : h &= gm, we(zl, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !wb[h])
        if (wb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", hv[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (hv[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (hv[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (hv[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (_l(d)) {
          for (h = 0; h < d.length; h++)
            if (!ot(
              d[h],
              h
            ))
              break e;
        } else if (h = at(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!ot(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (Jl(e, t, d, a), rt ? (Ki(), d = Qp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && _y(e, a, t);
          else if (e.tag === 19)
            _y(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && zu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), lh(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && zu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          lh(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          lh(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Uu(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), mn = -1, Vf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (Fi(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = yu(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = yu(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function nh(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ar(e)));
    }
    function Dy(e, t, a) {
      switch (t.tag) {
        case 3:
          L(
            t,
            t.stateNode.containerInfo
          ), Su(
            t,
            Hl,
            e.memoizedState.cache
          ), di();
          break;
        case 27:
        case 5:
          fe(t);
          break;
        case 4:
          L(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Su(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, Nr(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (na(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? eg(
              e,
              t,
              a
            ) : (na(t), e = Uu(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          na(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (Fi(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return ah(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), we(
            zl,
            zl.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, Wd(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          Su(
            t,
            Hl,
            e.memoizedState.cache
          );
      }
      return Uu(e, t, a);
    }
    function uh(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Yc(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Bl = !0;
        else {
          if (!nh(e, a) && (t.flags & 128) === 0)
            return Bl = !1, Dy(
              e,
              t,
              a
            );
          Bl = (e.flags & 131072) !== 0;
        }
      else
        Bl = !1, (i = rt) && (Ki(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Ki(), Im(t, Qp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = un(t.elementType), t.type = e, typeof e == "function")
            Dd(e) ? (i = Ei(
              e,
              i
            ), t.tag = 1, t.type = e = Ji(e), t = Oy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, of(t, e), t.type = e = Ji(e), t = Id(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Ri) {
                t.tag = 11, t.type = e = _d(e), t = Sy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === yo) {
                t.tag = 14, t = by(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === yl && (t = " Did you wrap a component in React.lazy() more than once?"), a = Te(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Id(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Ei(
            i,
            t.pendingProps
          ), Oy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (L(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Ya(e, t), Vn(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Su(t, Hl, i), i !== f.cache && Wi(
              t,
              [Hl],
              a,
              !0
            ), _u(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = Ir(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = ya(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), vu(o), t = Ir(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Pt = fn(e.firstChild), Da = t, rt = !0, jf = null, Sc = !1, tu = null, Pu = !0, a = mb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (di(), i === o) {
                t = Uu(
                  e,
                  t,
                  a
                );
                break e;
              }
              Jl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Fd(e, t), e === null ? (a = sp(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : rt || (a = t.type, e = t.pendingProps, i = Xt(
            Nn.current
          ), i = bh(
            i
          ).createElement(a), i[Pl] = t, i[sa] = e, ht(i, a, e), be(i), t.stateNode = i) : t.memoizedState = sp(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return fe(t), e === null && rt && (i = Xt(Nn.current), o = ee(), i = t.stateNode = Fn(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), Sc || (o = np(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (qc(t, 0).serverProps = o)), Da = t, Pu = !0, o = Pt, zi(t.type) ? (m1 = o, Pt = fn(
            i.firstChild
          )) : Pt = o), Jl(
            e,
            t,
            t.pendingProps.children,
            a
          ), Fd(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && rt && (f = ee(), i = yd(
            t.type,
            f.ancestorInfo
          ), o = Pt, (d = !o) || (d = Dg(
            o,
            t.type,
            t.pendingProps,
            Pu
          ), d !== null ? (t.stateNode = d, Sc || (f = np(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (qc(t, 0).serverProps = f)), Da = t, Pt = fn(
            d.firstChild
          ), Pu = !1, f = !0) : f = !1, d = !f), d && (i && $i(t, o), si(t))), fe(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Ss(o, f) ? i = null : d !== null && Ss(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = cl(
            e,
            t,
            xr,
            null,
            null,
            a
          ), T0._currentValue = o), Fd(e, t), Jl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && rt && (a = t.pendingProps, e = ee(), i = e.ancestorInfo.current, a = i != null ? Xo(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = Pt, (i = !e) || (i = Nt(
            e,
            t.pendingProps,
            Pu
          ), i !== null ? (t.stateNode = i, Da = t, Pt = null, i = !0) : i = !1, i = !i), i && (a && $i(t, e), si(t))), null;
        case 13:
          return eg(e, t, a);
        case 4:
          return L(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Fs(
            t,
            null,
            i,
            a
          ) : Jl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Sy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return Jl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return Jl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, Jl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Gb || (Gb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Su(t, i, f), Jl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), en(t), o = Lt(o), i = HS(
            i,
            o,
            void 0
          ), t.flags |= 1, Jl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return by(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Ey(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return ah(
            e,
            t,
            a
          );
        case 31:
          return P0(e, t, a);
        case 22:
          return Wd(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return en(t), i = Lt(Hl), e === null ? (o = zr(), o === null && (o = Jt, f = ny(), o.pooledCache = f, Gc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Au(t), Su(t, Hl, o)) : ((e.lanes & a) !== 0 && (Ya(e, t), Vn(t, null, null, a), _u()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Su(t, Hl, i)) : (i = f.cache, Su(t, Hl, i), i !== o.cache && Wi(
            t,
            [Hl],
            a,
            !0
          ))), Jl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Hu(e) {
      e.flags |= 4;
    }
    function zy(e, t, a, i, o) {
      if ((t = (e.mode & qT) !== qe) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (mh()) e.flags |= 8192;
          else
            throw Ws = cv, xS;
      } else e.flags &= -16777217;
    }
    function ih(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & ni) !== od)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Ch(t))
        if (mh()) e.flags |= 8192;
        else
          throw Ws = cv, xS;
    }
    function ts(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? jo() : 536870912, e.lanes |= t, ld |= t);
    }
    function ff(e, t) {
      if (!rt)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Ht(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & Fe) !== qe) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Fe) !== qe) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function tg(e, t, a) {
      var i = t.pendingProps;
      switch (Pm(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ht(t), null;
        case 1:
          return Ht(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), bu(Hl, t), j(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (wc(t) ? (Tr(), Hu(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ly())), Ht(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Hu(t), f !== null ? (Ht(t), ih(
            t,
            f
          )) : (Ht(t), zy(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Hu(t), Ht(t), ih(
            t,
            f
          )) : (Ht(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Hu(t), Ht(t), zy(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (Oe(t), a = Xt(Nn.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Hu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ht(t), null;
            }
            e = ee(), wc(t) ? ey(t) : (e = Fn(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Hu(t));
          }
          return Ht(t), null;
        case 5:
          if (Oe(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Hu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Ht(t), null;
            }
            var d = ee();
            if (wc(t))
              ey(t);
            else {
              switch (f = Xt(Nn.current), yd(o, d.ancestorInfo), d = d.context, f = bh(f), d) {
                case Mm:
                  f = f.createElementNS(
                    ct,
                    o
                  );
                  break;
                case Nv:
                  f = f.createElementNS(
                    tt,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        ct,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        tt,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || Pn.call(rE, o) || (rE[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[Pl] = t, f[sa] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (ht(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && Hu(t);
            }
          }
          return Ht(t), zy(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Hu(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Xt(Nn.current), a = ee(), wc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !Sc, i = null, f = Da, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Es(
                      e,
                      a,
                      i
                    ), o !== null && (qc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Es(
                      e,
                      a,
                      i
                    ), o !== null && (qc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Pl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || gs(e.nodeValue, a)), e || si(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && Xo(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = bh(e).createTextNode(
                i
              ), e[Pl] = t, t.stateNode = e;
          }
          return Ht(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = wc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[Pl] = t, Ht(t), (t.mode & Fe) !== qe && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Tr(), di(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Ht(t), (t.mode & Fe) !== qe && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = ly(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (ua(t), t) : (ua(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Ht(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = wc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[Pl] = t, Ht(t), (t.mode & Fe) !== qe && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Tr(), di(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Ht(t), (t.mode & Fe) !== qe && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = ly(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (ua(t), t) : (ua(t), null);
          }
          return ua(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Fe) !== qe && an(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), ts(t, t.updateQueue), Ht(t), (t.mode & Fe) !== qe && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return j(t), e === null && ys(
            t.stateNode.containerInfo
          ), Ht(t), null;
        case 10:
          return bu(t.type, t), Ht(t), null;
        case 19:
          if (Re(zl, t), i = t.memoizedState, i === null) return Ht(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) ff(i, !1);
            else {
              if (hl !== Uo || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = zu(e), f !== null) {
                    for (t.flags |= 128, ff(i, !1), e = f.updateQueue, t.updateQueue = e, ts(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Jo(a, e), a = a.sibling;
                    return we(
                      zl,
                      zl.current & gm | n0,
                      t
                    ), rt && gu(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && sl() > bv && (t.flags |= 128, o = !0, ff(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = zu(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, ts(t, e), ff(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !rt)
                  return Ht(t), null;
              } else
                2 * sl() - i.renderingStartTime > bv && a !== 536870912 && (t.flags |= 128, o = !0, ff(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = sl(), e.sibling = null, a = zl.current, a = o ? a & gm | n0 : a & gm, we(zl, a, t), rt && gu(t, i.treeForkCount), e) : (Ht(t), null);
        case 22:
        case 23:
          return ua(t), Du(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Ht(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ht(t), a = t.updateQueue, a !== null && ts(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && Re($s, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), bu(Hl, t), Ht(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function lg(e, t) {
      switch (Pm(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fe) !== qe && an(t), t) : null;
        case 3:
          return bu(Hl, t), j(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Oe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (ua(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            di();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fe) !== qe && an(t), t) : null;
        case 13:
          if (ua(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            di();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fe) !== qe && an(t), t) : null;
        case 19:
          return Re(zl, t), null;
        case 4:
          return j(t), null;
        case 10:
          return bu(t.type, t), null;
        case 22:
        case 23:
          return ua(t), Du(t), e !== null && Re($s, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Fe) !== qe && an(t), t) : null;
        case 24:
          return bu(Hl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ag(e, t) {
      switch (Pm(t), t.tag) {
        case 3:
          bu(Hl, t), j(t);
          break;
        case 26:
        case 27:
        case 5:
          Oe(t);
          break;
        case 4:
          j(t);
          break;
        case 31:
          t.memoizedState !== null && ua(t);
          break;
        case 13:
          ua(t);
          break;
        case 19:
          Re(zl, t);
          break;
        case 10:
          bu(t.type, t);
          break;
        case 22:
        case 23:
          ua(t), Du(t), e !== null && Re($s, t);
          break;
        case 24:
          bu(Hl, t);
      }
    }
    function Nu(e) {
      return (e.mode & Fe) !== qe;
    }
    function Ry(e, t) {
      Nu(e) ? (An(), eo(t, e), Eu()) : eo(t, e);
    }
    function Pc(e, t, a) {
      Nu(e) ? (An(), Ti(
        a,
        e,
        t
      ), Eu()) : Ti(
        a,
        e,
        t
      );
    }
    function eo(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & yn) !== fv && (Dm = !0), i = he(
              t,
              VT,
              a
            ), (e & yn) !== fv && (Dm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & au) !== 0 ? "useLayoutEffect" : (a.tag & yn) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, he(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Tt(t, t.return, h);
      }
    }
    function Ti(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & yn) !== fv && (Dm = !0), o = t, he(
                o,
                ZT,
                o,
                a,
                h
              ), (e & yn) !== fv && (Dm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        Tt(t, t.return, y);
      }
    }
    function My(e, t) {
      Nu(e) ? (An(), eo(t, e), Eu()) : eo(t, e);
    }
    function ch(e, t, a) {
      Nu(e) ? (An(), Ti(
        a,
        e,
        t
      ), Eu()) : Ti(
        a,
        e,
        t
      );
    }
    function rf(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Em || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          me(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          me(e) || "instance"
        ));
        try {
          he(
            e,
            xd,
            t,
            a
          );
        } catch (i) {
          Tt(e, e.return, i);
        }
      }
    }
    function ng(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Cy(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Em || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        me(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        me(e) || "instance"
      ));
      try {
        var o = Ei(
          e.type,
          a
        ), f = he(
          e,
          ng,
          t,
          o,
          i
        );
        a = Xb, f !== void 0 || a.has(e.type) || (a.add(e.type), he(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            me(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Tt(e, e.return, d);
      }
    }
    function Uy(e, t, a) {
      a.props = Ei(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Nu(e) ? (An(), he(
        e,
        ib,
        e,
        t,
        a
      ), Eu()) : he(
        e,
        ib,
        e,
        t,
        a
      );
    }
    function Hy(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (Nu(e))
            try {
              An(), e.refCleanup = t(a);
            } finally {
              Eu();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            me(e)
          ), t.current = a;
      }
    }
    function to(e, t) {
      try {
        he(e, Hy, e);
      } catch (a) {
        Tt(e, t, a);
      }
    }
    function $n(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Nu(e))
              try {
                An(), he(e, i);
              } finally {
                Eu(e);
              }
            else he(e, i);
          } catch (o) {
            Tt(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Nu(e))
              try {
                An(), he(e, a, null);
              } finally {
                Eu(e);
              }
            else he(e, a, null);
          } catch (o) {
            Tt(e, t, o);
          }
        else a.current = null;
    }
    function Ny(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", av && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function lo(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", av && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function xy(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        he(
          e,
          gg,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Tt(e, e.return, o);
      }
    }
    function oh(e, t, a) {
      try {
        he(
          e,
          ip,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Tt(e, e.return, i);
      }
    }
    function By(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && zi(e.type) || e.tag === 4;
    }
    function sf(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || By(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && zi(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function fh(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (Sg(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (Sg(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Ll));
      else if (i !== 4 && (i === 27 && zi(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (fh(e, t, a), e = e.sibling; e !== null; )
          fh(e, t, a), e = e.sibling;
    }
    function df(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && zi(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (df(e, t, a), e = e.sibling; e !== null; )
          df(e, t, a), e = e.sibling;
    }
    function ug(e) {
      for (var t, a = e.return; a !== null; ) {
        if (By(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = sf(e), df(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (vg(a), t.flags &= -33), t = sf(e), df(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = sf(e), fh(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function jy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        he(
          e,
          Ts,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Tt(e, e.return, i);
      }
    }
    function ig(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function Yy(e, t) {
      if (e = e.containerInfo, s1 = Yv, e = G0(e), Zm(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, D = 0, R = e, b = null;
              t: for (; ; ) {
                for (var Y; R !== a || o !== 0 && R.nodeType !== 3 || (h = d + o), R !== f || i !== 0 && R.nodeType !== 3 || (y = d + i), R.nodeType === 3 && (d += R.nodeValue.length), (Y = R.firstChild) !== null; )
                  b = R, R = Y;
                for (; ; ) {
                  if (R === e) break t;
                  if (b === a && ++p === o && (h = d), b === f && ++D === i && (y = d), (Y = R.nextSibling) !== null) break;
                  R = b, b = R.parentNode;
                }
                R = Y;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (d1 = {
        focusedElem: e,
        selectionRange: a
      }, Yv = !1, ha = t; ha !== null; )
        if (t = ha, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, ha = e;
        else
          for (; ha !== null; ) {
            switch (e = t = ha, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Cy(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Ah(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Ah(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, ha = e;
              break;
            }
            ha = t.return;
          }
    }
    function ml(e, t, a) {
      var i = Cl(), o = tn(), f = Tn(), d = aa(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          _n(e, a), h & 4 && Ry(a, au | li);
          break;
        case 1:
          if (_n(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Em || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                me(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                me(a) || "instance"
              )), Nu(a) ? (An(), he(
                a,
                NS,
                a,
                e
              ), Eu()) : he(
                a,
                NS,
                a,
                e
              );
            else {
              var y = Ei(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Em || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                me(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                me(a) || "instance"
              )), Nu(a) ? (An(), he(
                a,
                ab,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Eu()) : he(
                a,
                ab,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && rf(a), h & 512 && to(a, a.return);
          break;
        case 3:
          if (t = Ln(), _n(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              he(
                a,
                xd,
                h,
                y
              );
            } catch (D) {
              Tt(a, a.return, D);
            }
          }
          e.effectDuration += Na(t);
          break;
        case 27:
          t === null && h & 4 && jy(a);
        case 26:
        case 5:
          if (_n(e, a), t === null) {
            if (h & 4) xy(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                he(
                  a,
                  Eh,
                  y,
                  e,
                  t,
                  a
                );
              } catch (D) {
                Tt(
                  a,
                  a.return,
                  D
                );
              }
            }
          }
          h & 512 && to(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Ln(), _n(e, a), e = a.stateNode, e.effectDuration += Ii(h);
            try {
              he(
                a,
                Ny,
                a,
                t,
                Yf,
                e.effectDuration
              );
            } catch (D) {
              Tt(a, a.return, D);
            }
          } else _n(e, a);
          break;
        case 31:
          _n(e, a), h & 4 && wy(e, a);
          break;
        case 13:
          _n(e, a), h & 4 && Gy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = co.bind(
            null,
            a
          ), tS(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Co, !h) {
            t = t !== null && t.memoizedState !== null || jl, y = Co;
            var p = jl;
            Co = h, (jl = t) && !p ? (Dn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & Fe) !== qe && 0 <= Me && 0 <= Be && 0.05 < Be - Me && Td(
              a,
              Me,
              Be
            )) : _n(e, a), Co = y, jl = p;
          }
          break;
        case 30:
          break;
        default:
          _n(e, a);
      }
      (a.mode & Fe) !== qe && 0 <= Me && 0 <= Be && ((pl || 0.05 < dl) && mu(
        a,
        Me,
        Be,
        dl,
        nl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Be - Me && (ig(
        a.return.alternate,
        a.return
      ) || hu(
        a,
        Me,
        Be,
        "Mount"
      ))), ga(i), ln(o), nl = f, pl = d;
    }
    function Ul(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Ul(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && C(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function xu(e, t, a) {
      for (a = a.child; a !== null; )
        qy(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function qy(e, t, a) {
      if (ra && typeof ra.onCommitFiberUnmount == "function")
        try {
          ra.onCommitFiberUnmount(Ui, a);
        } catch (p) {
          Ju || (Ju = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Cl(), o = tn(), f = Tn(), d = aa();
      switch (a.tag) {
        case 26:
          jl || $n(a, t), xu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          jl || $n(a, t);
          var h = Yl, y = Yn;
          zi(a.type) && (Yl = a.stateNode, Yn = !1), xu(
            e,
            t,
            a
          ), he(
            a,
            As,
            a.stateNode
          ), Yl = h, Yn = y;
          break;
        case 5:
          jl || $n(a, t);
        case 6:
          if (h = Yl, y = Yn, Yl = null, xu(
            e,
            t,
            a
          ), Yl = h, Yn = y, Yl !== null)
            if (Yn)
              try {
                he(
                  a,
                  Sf,
                  Yl,
                  a.stateNode
                );
              } catch (p) {
                Tt(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                he(
                  a,
                  bg,
                  Yl,
                  a.stateNode
                );
              } catch (p) {
                Tt(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          Yl !== null && (Yn ? (e = Yl, bs(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), _f(e)) : bs(Yl, a.stateNode));
          break;
        case 4:
          h = Yl, y = Yn, Yl = a.stateNode.containerInfo, Yn = !0, xu(
            e,
            t,
            a
          ), Yl = h, Yn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ti(
            yn,
            a,
            t
          ), jl || Pc(
            a,
            t,
            au
          ), xu(
            e,
            t,
            a
          );
          break;
        case 1:
          jl || ($n(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && Uy(
            a,
            t,
            h
          )), xu(
            e,
            t,
            a
          );
          break;
        case 21:
          xu(
            e,
            t,
            a
          );
          break;
        case 22:
          jl = (h = jl) || a.memoizedState !== null, xu(
            e,
            t,
            a
          ), jl = h;
          break;
        default:
          xu(
            e,
            t,
            a
          );
      }
      (a.mode & Fe) !== qe && 0 <= Me && 0 <= Be && (pl || 0.05 < dl) && mu(
        a,
        Me,
        Be,
        dl,
        nl
      ), ga(i), ln(o), nl = f, pl = d;
    }
    function wy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          he(
            t,
            fp,
            e
          );
        } catch (a) {
          Tt(t, t.return, a);
        }
      }
    }
    function Gy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          he(
            t,
            yc,
            e
          );
        } catch (a) {
          Tt(t, t.return, a);
        }
    }
    function ls(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Lb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Lb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function as(e, t) {
      var a = ls(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), Bn)
            if (Tm !== null && Am !== null)
              Gu(Am, Tm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Oi.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function Kl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = Cl(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (zi(y.type)) {
                  Yl = y.stateNode, Yn = !1;
                  break e;
                }
                break;
              case 5:
                Yl = y.stateNode, Yn = !1;
                break e;
              case 3:
              case 4:
                Yl = y.stateNode.containerInfo, Yn = !0;
                break e;
            }
            y = y.return;
          }
          if (Yl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          qy(o, f, d), Yl = null, Yn = !1, (d.mode & Fe) !== qe && 0 <= Me && 0 <= Be && 0.05 < Be - Me && hu(
            d,
            Me,
            Be,
            "Unmount"
          ), ga(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          Xy(t, e), t = t.sibling;
    }
    function Xy(e, t) {
      var a = Cl(), i = tn(), o = Tn(), f = aa(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Kl(t, e), Xa(e), h & 4 && (Ti(
            yn | li,
            e,
            e.return
          ), eo(yn | li, e), Pc(
            e,
            e.return,
            au | li
          ));
          break;
        case 1:
          if (Kl(t, e), Xa(e), h & 512 && (jl || d === null || $n(d, d.return)), h & 64 && Co && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Bi, Kl(t, e), Xa(e), h & 512 && (jl || d === null || $n(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[Ys] || p[Pl] || p.namespaceURI === ct || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), ht(p, h, d), p[Pl] = e, be(p), h = p;
                        break e;
                      case "link":
                        var D = Mg(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (D) {
                          for (var R = 0; R < D.length; R++)
                            if (p = D[R], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              D.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ht(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (D = Mg(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (R = 0; R < D.length; R++)
                            if (p = D[R], Mt(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              D.splice(R, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ht(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[Pl] = e, be(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  mp(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Rh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? mp(
                y,
                e.type,
                e.stateNode
              ) : Rh(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && oh(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Kl(t, e), Xa(e), h & 512 && (jl || d === null || $n(d, d.return)), d !== null && h & 4 && oh(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Kl(t, e), Xa(e), h & 512 && (jl || d === null || $n(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              he(
                e,
                vg,
                y
              );
            } catch (de) {
              Tt(e, e.return, de);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, oh(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (JS = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Kl(t, e), Xa(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              he(
                e,
                eS,
                y,
                d,
                h
              );
            } catch (de) {
              Tt(e, e.return, de);
            }
          }
          break;
        case 3:
          if (y = Ln(), xv = null, p = Bi, Bi = Os(t.containerInfo), Kl(t, e), Bi = p, Xa(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              he(
                e,
                zh,
                t.containerInfo
              );
            } catch (de) {
              Tt(e, e.return, de);
            }
          JS && (JS = !1, ns(e)), t.effectDuration += Na(
            y
          );
          break;
        case 4:
          h = Bi, Bi = Os(
            e.stateNode.containerInfo
          ), Kl(t, e), Xa(e), Bi = h;
          break;
        case 12:
          h = Ln(), Kl(t, e), Xa(e), e.stateNode.effectDuration += Ii(h);
          break;
        case 31:
          Kl(t, e), Xa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, as(e, h)));
          break;
        case 13:
          Kl(t, e), Xa(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Sv = sl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, as(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var b = d !== null && d.memoizedState !== null, Y = Co, ne = jl;
          if (Co = Y || y, jl = ne || b, Kl(t, e), jl = ne, Co = Y, b && !y && !Y && !ne && (e.mode & Fe) !== qe && 0 <= Me && 0 <= Be && 0.05 < Be - Me && Td(
            e,
            Me,
            Be
          ), Xa(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Lp : t._visibility | Lp, !y || d === null || b || Co || jl || (oc(e), (e.mode & Fe) !== qe && 0 <= Me && 0 <= Be && 0.05 < Be - Me && hu(
              e,
              Me,
              Be,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  b = d = t;
                  try {
                    p = b.stateNode, y ? he(
                      b,
                      Tg,
                      p
                    ) : he(
                      b,
                      _g,
                      b.stateNode,
                      b.memoizedProps
                    );
                  } catch (de) {
                    Tt(b, b.return, de);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  b = t;
                  try {
                    D = b.stateNode, y ? he(
                      b,
                      Ag,
                      D
                    ) : he(
                      b,
                      Th,
                      D,
                      b.memoizedProps
                    );
                  } catch (de) {
                    Tt(b, b.return, de);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  b = t;
                  try {
                    R = b.stateNode, y ? he(
                      b,
                      Eg,
                      R
                    ) : he(
                      b,
                      Og,
                      b.stateNode
                    );
                  } catch (de) {
                    Tt(b, b.return, de);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, as(e, d))));
          break;
        case 19:
          Kl(t, e), Xa(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, as(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Kl(t, e), Xa(e);
      }
      (e.mode & Fe) !== qe && 0 <= Me && 0 <= Be && ((pl || 0.05 < dl) && mu(
        e,
        Me,
        Be,
        dl,
        nl
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < Be - Me && (ig(
        e.return.alternate,
        e.return
      ) || hu(
        e,
        Me,
        Be,
        "Mount"
      ))), ga(a), ln(i), nl = o, pl = f;
    }
    function Xa(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          he(e, ug, e);
        } catch (a) {
          Tt(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ns(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ns(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function _n(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          ml(e, t.alternate, t), t = t.sibling;
    }
    function Ly(e) {
      var t = Cl(), a = tn(), i = Tn(), o = aa();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Pc(
            e,
            e.return,
            au
          ), oc(e);
          break;
        case 1:
          $n(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && Uy(
            e,
            e.return,
            f
          ), oc(e);
          break;
        case 27:
          he(
            e,
            As,
            e.stateNode
          );
        case 26:
        case 5:
          $n(e, e.return), oc(e);
          break;
        case 22:
          e.memoizedState === null && oc(e);
          break;
        case 30:
          oc(e);
          break;
        default:
          oc(e);
      }
      (e.mode & Fe) !== qe && 0 <= Me && 0 <= Be && (pl || 0.05 < dl) && mu(
        e,
        Me,
        Be,
        dl,
        nl
      ), ga(t), ln(a), nl = i, pl = o;
    }
    function oc(e) {
      for (e = e.child; e !== null; )
        Ly(e), e = e.sibling;
    }
    function Qy(e, t, a, i) {
      var o = Cl(), f = tn(), d = Tn(), h = aa(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Dn(
            e,
            a,
            i
          ), Ry(a, au);
          break;
        case 1:
          if (Dn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && he(
            a,
            NS,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              he(
                a,
                Hr,
                t,
                e
              );
            } catch (p) {
              Tt(a, a.return, p);
            }
          }
          i && y & 64 && rf(a), to(a, a.return);
          break;
        case 27:
          jy(a);
        case 26:
        case 5:
          Dn(
            e,
            a,
            i
          ), i && t === null && y & 4 && xy(a), to(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = Ln(), Dn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Ii(y);
            try {
              he(
                a,
                Ny,
                a,
                t,
                Yf,
                i.effectDuration
              );
            } catch (p) {
              Tt(a, a.return, p);
            }
          } else
            Dn(
              e,
              a,
              i
            );
          break;
        case 31:
          Dn(
            e,
            a,
            i
          ), i && y & 4 && wy(e, a);
          break;
        case 13:
          Dn(
            e,
            a,
            i
          ), i && y & 4 && Gy(e, a);
          break;
        case 22:
          a.memoizedState === null && Dn(
            e,
            a,
            i
          ), to(a, a.return);
          break;
        case 30:
          break;
        default:
          Dn(
            e,
            a,
            i
          );
      }
      (a.mode & Fe) !== qe && 0 <= Me && 0 <= Be && (pl || 0.05 < dl) && mu(
        a,
        Me,
        Be,
        dl,
        nl
      ), ga(o), ln(f), nl = d, pl = h;
    }
    function Dn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Qy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function us(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Gc(e), a != null && _r(a));
    }
    function is(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Gc(t), e != null && _r(e));
    }
    function zn(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          rh(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function rh(e, t, a, i, o) {
      var f = Cl(), d = tn(), h = Tn(), y = aa(), p = Nf, D = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & Fe) !== qe && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ad(
            t,
            t.actualStartTime,
            o,
            ea,
            a
          ), zn(
            e,
            t,
            a,
            i,
            o
          ), D & 2048 && My(t, pn | li);
          break;
        case 1:
          (t.mode & Fe) !== qe && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? Od(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && Ad(
            t,
            t.actualStartTime,
            o,
            ea,
            a
          )), zn(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var R = Ln(), b = ea;
          ea = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, zn(
            e,
            t,
            a,
            i,
            o
          ), ea = b, D & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Gc(i), a != null && _r(a))), e.passiveEffectDuration += Na(
            R
          );
          break;
        case 12:
          if (D & 2048) {
            D = Ln(), zn(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += Ii(D);
            try {
              he(
                t,
                lo,
                t,
                t.alternate,
                Yf,
                e.passiveEffectDuration
              );
            } catch (Y) {
              Tt(t, t.return, Y);
            }
          } else
            zn(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          D = ea, R = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, R !== null && b === null ? (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (ea = !1, R = R.hydrationErrors, R !== null && Od(
            t,
            t.actualStartTime,
            o,
            R
          )) : ea = !0) : ea = !1, zn(
            e,
            t,
            a,
            i,
            o
          ), ea = D;
          break;
        case 13:
          D = ea, R = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, R === null || R.dehydrated === null || b !== null && b.dehydrated !== null ? ea = !1 : (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (ea = !1, R = R.hydrationErrors, R !== null && Od(
            t,
            t.actualStartTime,
            o,
            R
          )) : ea = !0), zn(
            e,
            t,
            a,
            i,
            o
          ), ea = D;
          break;
        case 23:
          break;
        case 22:
          b = t.stateNode, R = t.alternate, t.memoizedState !== null ? b._visibility & bo ? zn(
            e,
            t,
            a,
            i,
            o
          ) : hf(
            e,
            t,
            a,
            i,
            o
          ) : b._visibility & bo ? zn(
            e,
            t,
            a,
            i,
            o
          ) : (b._visibility |= bo, Ai(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & Fe) === qe || ea || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && Td(t, e, o), 0 <= Me && 0 <= Be && 0.05 < Be - Me && Td(
            t,
            Me,
            Be
          ))), D & 2048 && us(
            R,
            t
          );
          break;
        case 24:
          zn(
            e,
            t,
            a,
            i,
            o
          ), D & 2048 && is(t.alternate, t);
          break;
        default:
          zn(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & Fe) !== qe && ((e = !ea && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && hu(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Me && 0 <= Be && ((pl || 0.05 < dl) && mu(
        t,
        Me,
        Be,
        dl,
        nl
      ), e && 0.05 < Be - Me && hu(
        t,
        Me,
        Be,
        "Mount"
      ))), ga(f), ln(d), nl = h, pl = y, Nf = p;
    }
    function Ai(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        sh(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function sh(e, t, a, i, o, f) {
      var d = Cl(), h = tn(), y = Tn(), p = aa(), D = Nf;
      o && (t.mode & Fe) !== qe && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ad(
        t,
        t.actualStartTime,
        f,
        ea,
        a
      );
      var R = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ai(
            e,
            t,
            a,
            i,
            o,
            f
          ), My(t, pn);
          break;
        case 23:
          break;
        case 22:
          var b = t.stateNode;
          t.memoizedState !== null ? b._visibility & bo ? Ai(
            e,
            t,
            a,
            i,
            o,
            f
          ) : hf(
            e,
            t,
            a,
            i,
            f
          ) : (b._visibility |= bo, Ai(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && R & 2048 && us(
            t.alternate,
            t
          );
          break;
        case 24:
          Ai(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && R & 2048 && is(t.alternate, t);
          break;
        default:
          Ai(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & Fe) !== qe && 0 <= Me && 0 <= Be && (pl || 0.05 < dl) && mu(
        t,
        Me,
        Be,
        dl,
        nl
      ), ga(d), ln(h), nl = y, pl = p, Nf = D;
    }
    function hf(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, D = Nf;
          (f.mode & Fe) !== qe && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Ad(
            f,
            f.actualStartTime,
            p,
            ea,
            h
          );
          var R = f.flags;
          switch (f.tag) {
            case 22:
              hf(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && us(f.alternate, f);
              break;
            case 24:
              hf(
                d,
                f,
                h,
                y,
                p
              ), R & 2048 && is(f.alternate, f);
              break;
            default:
              hf(
                d,
                f,
                h,
                y,
                p
              );
          }
          Nf = D, f = t;
        }
    }
    function fc(e, t, a) {
      if (e.subtreeFlags & o0)
        for (e = e.child; e !== null; )
          Vy(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function Vy(e, t, a) {
      switch (e.tag) {
        case 26:
          fc(
            e,
            t,
            a
          ), e.flags & o0 && e.memoizedState !== null && Uh(
            a,
            Bi,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          fc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = Bi;
          Bi = Os(
            e.stateNode.containerInfo
          ), fc(
            e,
            t,
            a
          ), Bi = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = o0, o0 = 16777216, fc(
            e,
            t,
            a
          ), o0 = i) : fc(
            e,
            t,
            a
          ));
          break;
        default:
          fc(
            e,
            t,
            a
          );
      }
    }
    function Bu(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function ao(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Cl();
            ha = i, dh(
              i,
              e
            ), (i.mode & Fe) !== qe && 0 <= Me && 0 <= Be && 0.05 < Be - Me && hu(
              i,
              Me,
              Be,
              "Unmount"
            ), ga(o);
          }
        Bu(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          cg(e), e = e.sibling;
    }
    function cg(e) {
      var t = Cl(), a = tn(), i = Tn(), o = aa();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ao(e), e.flags & 2048 && ch(
            e,
            e.return,
            pn | li
          );
          break;
        case 3:
          var f = Ln();
          ao(e), e.stateNode.passiveEffectDuration += Na(f);
          break;
        case 12:
          f = Ln(), ao(e), e.stateNode.passiveEffectDuration += Ii(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & bo && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~bo, cs(e), (e.mode & Fe) !== qe && 0 <= Me && 0 <= Be && 0.05 < Be - Me && hu(
            e,
            Me,
            Be,
            "Disconnect"
          )) : ao(e);
          break;
        default:
          ao(e);
      }
      (e.mode & Fe) !== qe && 0 <= Me && 0 <= Be && (pl || 0.05 < dl) && mu(
        e,
        Me,
        Be,
        dl,
        nl
      ), ga(t), ln(a), pl = o, nl = i;
    }
    function cs(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Cl();
            ha = i, dh(
              i,
              e
            ), (i.mode & Fe) !== qe && 0 <= Me && 0 <= Be && 0.05 < Be - Me && hu(
              i,
              Me,
              Be,
              "Unmount"
            ), ga(o);
          }
        Bu(e);
      }
      for (e = e.child; e !== null; )
        ju(e), e = e.sibling;
    }
    function ju(e) {
      var t = Cl(), a = tn(), i = Tn(), o = aa();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ch(
            e,
            e.return,
            pn
          ), cs(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & bo && (f._visibility &= ~bo, cs(e));
          break;
        default:
          cs(e);
      }
      (e.mode & Fe) !== qe && 0 <= Me && 0 <= Be && (pl || 0.05 < dl) && mu(
        e,
        Me,
        Be,
        dl,
        nl
      ), ga(t), ln(a), pl = o, nl = i;
    }
    function dh(e, t) {
      for (; ha !== null; ) {
        var a = ha, i = a, o = t, f = Cl(), d = tn(), h = Tn(), y = aa();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            ch(
              i,
              o,
              pn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Gc(o));
            break;
          case 24:
            _r(i.memoizedState.cache);
        }
        if ((i.mode & Fe) !== qe && 0 <= Me && 0 <= Be && (pl || 0.05 < dl) && mu(
          i,
          Me,
          Be,
          dl,
          nl
        ), ga(f), ln(d), pl = y, nl = h, i = a.child, i !== null) i.return = a, ha = i;
        else
          e: for (a = e; ha !== null; ) {
            if (i = ha, f = i.sibling, d = i.return, Ul(i), i === a) {
              ha = null;
              break e;
            }
            if (f !== null) {
              f.return = d, ha = f;
              break e;
            }
            ha = d;
          }
      }
    }
    function og() {
      WT.forEach(function(e) {
        return e();
      });
    }
    function os() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || G.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function $l(e) {
      if ((Et & ta) !== ma && Pe !== 0)
        return Pe & -Pe;
      var t = G.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), St()) : Li();
    }
    function Vt() {
      if (wn === 0)
        if ((Pe & 536870912) === 0 || rt) {
          var e = Cf;
          Cf <<= 1, (Cf & 3932160) === 0 && (Cf = 262144), wn = e;
        } else wn = 536870912;
      return e = lu.current, e !== null && (e.flags |= 32), wn;
    }
    function al(e, t, a) {
      if (Dm && console.error("useInsertionEffect must not schedule updates."), a1 && (Av = !0), (e === Jt && (wt === ed || wt === td) || e.cancelPendingCommit !== null) && (Ea(e, 0), ba(
        e,
        Pe,
        wn,
        !1
      )), Xi(e, a), (Et & ta) !== ma && e === Jt) {
        if (xn)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = lt && me(lt) || "Unknown", aE.has(e) || (aE.add(e), t = me(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              lE || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), lE = !0);
          }
      } else
        Bn && za(e, t, a), hs(t), e === Jt && ((Et & ta) === ma && (Zf |= a), hl === Lf && ba(
          e,
          Pe,
          wn,
          !1
        )), Aa(e);
    }
    function fg(e, t, a) {
      if ((Et & (ta | nu)) !== ma)
        throw Error("Should not already be working.");
      if (Pe !== 0 && lt !== null) {
        var i = lt, o = sl();
        switch (k1) {
          case s0:
          case ed:
            var f = $p;
            It && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                $u,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              $u,
              void 0,
              "primary-light"
            ));
            break;
          case td:
            f = $p, It && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                $u,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              $u,
              void 0,
              "primary-light"
            ));
            break;
          default:
            It && (i = o - $p, 3 > i || console.timeStamp(
              "Blocked",
              $p,
              o,
              $u,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || wi(e, t)) ? bl(e, t) : ph(e, t, !0);
      var d = a;
      do {
        if (f === Uo) {
          Om && !a && ba(e, t, 0, !1), t = wt, $p = Nl(), k1 = t;
          break;
        } else {
          if (i = sl(), o = e.current.alternate, d && !fs(o)) {
            Pa(t), o = da, f = i, !It || f <= o || (El ? El.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                pt,
                mt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              pt,
              mt,
              "error"
            )), kn(t, i), f = ph(e, t, !1), d = !1;
            continue;
          }
          if (f === Ps) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Pa(t), Km(
                da,
                i,
                t,
                El
              ), kn(t, i), t = h;
              e: {
                i = e, f = d, d = h0;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Ea(i, h).flags |= 256), h = ph(
                  i,
                  h,
                  !1
                ), h !== Ps) {
                  if (kS && !y) {
                    i.errorRecoveryDisabledLanes |= f, Zf |= f, f = Lf;
                    break e;
                  }
                  i = gn, gn = d, i !== null && (gn === null ? gn = i : gn.push.apply(
                    gn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Ps) continue;
              i = sl();
            }
          }
          if (f === r0) {
            Pa(t), Km(
              da,
              i,
              t,
              El
            ), kn(t, i), Ea(e, 0), ba(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Uo:
              case r0:
                throw Error("Root did not complete. This is a bug in React.");
              case Lf:
                if ((t & 4194048) !== t) break;
              case yv:
                Pa(t), Q0(
                  da,
                  i,
                  t,
                  El
                ), kn(t, i), o = t, (o & 127) !== 0 ? ev = i : (o & 4194048) !== 0 && (tv = i), ba(
                  a,
                  t,
                  wn,
                  !Qf
                );
                break e;
              case Ps:
                gn = null;
                break;
              case mv:
              case Qb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (G.actQueue !== null)
              oa(
                a,
                o,
                t,
                gn,
                m0,
                vv,
                wn,
                Zf,
                ld,
                f,
                null,
                null,
                da,
                i
              );
            else {
              if ((t & 62914560) === t && (d = Sv + Jb - sl(), 10 < d)) {
                if (ba(
                  a,
                  t,
                  wn,
                  !Qf
                ), Tl(a, 0, !0) !== 0) break e;
                ji = t, a.timeoutHandle = sE(
                  Zy.bind(
                    null,
                    a,
                    o,
                    gn,
                    m0,
                    vv,
                    t,
                    wn,
                    Zf,
                    ld,
                    Qf,
                    f,
                    "Throttled",
                    da,
                    i
                  ),
                  d
                );
                break e;
              }
              Zy(
                a,
                o,
                gn,
                m0,
                vv,
                t,
                wn,
                Zf,
                ld,
                Qf,
                f,
                null,
                da,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Aa(e);
    }
    function Zy(e, t, a, i, o, f, d, h, y, p, D, R, b, Y) {
      e.timeoutHandle = cd;
      var ne = t.subtreeFlags, de = null;
      if ((ne & 8192 || (ne & 16785408) === 16785408) && (de = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ll
      }, Vy(t, f, de), ne = (f & 62914560) === f ? Sv - sl() : (f & 4194048) === f ? Zb - sl() : 0, ne = yp(de, ne), ne !== null)) {
        ji = f, e.cancelPendingCommit = ne(
          oa.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            D,
            de,
            de.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < de.count ? 0 < de.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : de.imgCount === 1 ? "Suspended on an Image" : 0 < de.imgCount ? "Suspended on Images" : null,
            b,
            Y
          )
        ), ba(
          e,
          f,
          d,
          !p
        );
        return;
      }
      oa(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        D,
        de,
        R,
        b,
        Y
      );
    }
    function fs(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!hn(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function ba(e, t, a, i) {
      t &= ~WS, t &= ~Zf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - Fl(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && nr(e, a, t);
    }
    function no() {
      return (Et & (ta | nu)) === ma ? (yf(0), !1) : !0;
    }
    function hh() {
      if (lt !== null) {
        if (wt === qn)
          var e = lt.return;
        else
          e = lt, ki(), tc(e), ym = null, a0 = 0, e = lt;
        for (; e !== null; )
          ag(e.alternate, e), e = e.return;
        lt = null;
      }
    }
    function kn(e, t) {
      (e & 127) !== 0 && (Vs = t), (e & 4194048) !== 0 && (_o = t), (e & 62914560) !== 0 && (K1 = t), (e & 2080374784) !== 0 && ($1 = t);
    }
    function Ea(e, t) {
      It && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        mt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        mt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        mt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        mt,
        "primary-light"
      ));
      var a = da;
      if (da = Nl(), Pe !== 0 && 0 < a) {
        if (Pa(Pe), hl === mv || hl === Lf)
          Q0(
            a,
            da,
            t,
            El
          );
        else {
          var i = da, o = El;
          if (It && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                pt,
                mt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              pt,
              mt,
              f
            );
          }
        }
        kn(Pe, da);
      }
      if (a = El, El = null, (t & 127) !== 0) {
        El = Zp, o = 0 <= bc && bc < Vs ? Vs : bc, i = 0 <= Zs && Zs < Vs ? Vs : Zs, f = 0 <= i ? i : 0 <= o ? o : da, 0 <= ev ? (Pa(2), V0(
          ev,
          f,
          t,
          a
        )) : lv & 127, a = o;
        var h = i, y = Jp, p = 0 < dm, D = qf === Vp, R = qf === Pg;
        if (o = da, i = Zp, f = RS, d = MS, It) {
          if (pt = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var b = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                pt,
                mt,
                b
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              pt,
              mt,
              b
            );
          }
          o > a && (h = D ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", D = R ? "Promise Resolved" : D ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", R = [], d != null && R.push(["Component name", d]), f != null && R.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: R,
                track: pt,
                trackGroup: mt,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              D,
              a
            )
          ) : performance.measure(D, a));
        }
        bc = -1.1, qf = 0, MS = RS = null, ev = -1.1, dm = Zs, Zs = -1.1, Vs = Nl();
      }
      if ((t & 4194048) !== 0 && (El = Kp, o = 0 <= Do && Do < _o ? _o : Do, a = 0 <= ei && ei < _o ? _o : ei, i = 0 <= wf && wf < _o ? _o : wf, f = 0 <= i ? i : 0 <= a ? a : da, 0 <= tv ? (Pa(256), V0(
        tv,
        f,
        t,
        El
      )) : lv & 4194048, R = i, h = Js, y = 0 < Gf, p = CS === Pg, f = da, i = Kp, d = Z1, D = J1, It && (pt = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < R ? R > o && (R = o) : R = o, o > R && h !== null && (b = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          R,
          o,
          pt,
          mt,
          b
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        R,
        o,
        pt,
        mt,
        b
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          pt,
          mt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        pt,
        mt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", R = [], D != null && R.push(["Component name", D]), d != null && R.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: R,
            track: pt,
            trackGroup: mt,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), ei = Do = -1.1, CS = 0, tv = -1.1, Gf = wf, wf = -1.1, _o = Nl()), (t & 62914560) !== 0 && (lv & 62914560) !== 0 && (Pa(4194304), $m(K1, da)), (t & 2080374784) !== 0 && (lv & 2080374784) !== 0 && (Pa(268435456), $m($1, da)), a = e.timeoutHandle, a !== cd && (e.timeoutHandle = cd, fA(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), ji = 0, hh(), Jt = e, lt = a = yu(
        e.current,
        null
      ), Pe = t, wt = qn, uu = null, Qf = !1, Om = wi(e, t), kS = !1, hl = Uo, ld = wn = WS = Zf = Vf = 0, gn = h0 = null, vv = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - Fl(i), f = 1 << o, t |= e[o], i &= ~f;
      return Tc = t, Zo(), e = w1(), 1e3 < e - q1 && (G.recentlyCreatedOwnerStacks = 0, q1 = e), Ni.discardPendingWarnings(), a;
    }
    function Jy(e, t) {
      Xe = null, G.H = c0, G.getCurrentStack = null, xn = !1, rn = null, t === mm || t === iv ? (t = Mr(), wt = s0) : t === xS ? (t = Mr(), wt = Vb) : wt = t === VS ? $S : t !== null && typeof t == "object" && typeof t.then == "function" ? d0 : pv, uu = t;
      var a = lt;
      a === null ? (hl = r0, kr(
        e,
        ya(t, e.current)
      )) : a.mode & Fe && Ko(a);
    }
    function mh() {
      var e = lu.current;
      return e === null ? !0 : (Pe & 4194048) === Pe ? ti === null : (Pe & 62914560) === Pe || (Pe & 536870912) !== 0 ? e === ti : !1;
    }
    function Ky() {
      var e = G.H;
      return G.H = c0, e === null ? c0 : e;
    }
    function yh() {
      var e = G.A;
      return G.A = kT, e;
    }
    function mf(e) {
      El === null && (El = e._debugTask == null ? null : e._debugTask);
    }
    function uo() {
      hl = Lf, Qf || (Pe & 4194048) !== Pe && lu.current !== null || (Om = !0), (Vf & 134217727) === 0 && (Zf & 134217727) === 0 || Jt === null || ba(
        Jt,
        Pe,
        wn,
        !1
      );
    }
    function ph(e, t, a) {
      var i = Et;
      Et |= ta;
      var o = Ky(), f = yh();
      if (Jt !== e || Pe !== t) {
        if (Bn) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Gu(e, Pe), d.clear()), Ml(e, t);
        }
        m0 = null, Ea(e, t);
      }
      t = !1, d = hl;
      e: do
        try {
          if (wt !== qn && lt !== null) {
            var h = lt, y = uu;
            switch (wt) {
              case $S:
                hh(), d = yv;
                break e;
              case s0:
              case ed:
              case td:
              case d0:
                lu.current === null && (t = !0);
                var p = wt;
                if (wt = qn, uu = null, io(e, h, y, p), a && Om) {
                  d = Uo;
                  break e;
                }
                break;
              default:
                p = wt, wt = qn, uu = null, io(e, h, y, p);
            }
          }
          Yu(), d = hl;
          break;
        } catch (D) {
          Jy(e, D);
        }
      while (!0);
      return t && e.shellSuspendCounter++, ki(), Et = i, G.H = o, G.A = f, lt === null && (Jt = null, Pe = 0, Zo()), d;
    }
    function Yu() {
      for (; lt !== null; ) ky(lt);
    }
    function bl(e, t) {
      var a = Et;
      Et |= ta;
      var i = Ky(), o = yh();
      if (Jt !== e || Pe !== t) {
        if (Bn) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Gu(e, Pe), f.clear()), Ml(e, t);
        }
        m0 = null, bv = sl() + Kb, Ea(e, t);
      } else
        Om = wi(
          e,
          t
        );
      e: do
        try {
          if (wt !== qn && lt !== null)
            t: switch (t = lt, f = uu, wt) {
              case pv:
                wt = qn, uu = null, io(
                  e,
                  t,
                  f,
                  pv
                );
                break;
              case ed:
              case td:
                if (nn(f)) {
                  wt = qn, uu = null, Ol(t);
                  break;
                }
                t = function() {
                  wt !== ed && wt !== td || Jt !== e || (wt = gv), Aa(e);
                }, f.then(t, t);
                break e;
              case s0:
                wt = gv;
                break e;
              case Vb:
                wt = KS;
                break e;
              case gv:
                nn(f) ? (wt = qn, uu = null, Ol(t)) : (wt = qn, uu = null, io(
                  e,
                  t,
                  f,
                  gv
                ));
                break;
              case KS:
                var d = null;
                switch (lt.tag) {
                  case 26:
                    d = lt.memoizedState;
                  case 5:
                  case 27:
                    var h = lt;
                    if (d ? Ch(d) : h.stateNode.complete) {
                      wt = qn, uu = null;
                      var y = h.sibling;
                      if (y !== null) lt = y;
                      else {
                        var p = h.return;
                        p !== null ? (lt = p, rs(p)) : lt = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                wt = qn, uu = null, io(
                  e,
                  t,
                  f,
                  KS
                );
                break;
              case d0:
                wt = qn, uu = null, io(
                  e,
                  t,
                  f,
                  d0
                );
                break;
              case $S:
                hh(), hl = yv;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          G.actQueue !== null ? Yu() : $y();
          break;
        } catch (D) {
          Jy(e, D);
        }
      while (!0);
      return ki(), G.H = i, G.A = o, Et = a, lt !== null ? Uo : (Jt = null, Pe = 0, Zo(), hl);
    }
    function $y() {
      for (; lt !== null && !Jh(); )
        ky(lt);
    }
    function ky(e) {
      var t = e.alternate;
      (e.mode & Fe) !== qe ? (Cd(e), t = he(
        e,
        uh,
        t,
        e,
        Tc
      ), Ko(e)) : t = he(
        e,
        uh,
        t,
        e,
        Tc
      ), e.memoizedProps = e.pendingProps, t === null ? rs(e) : lt = t;
    }
    function Ol(e) {
      var t = he(e, Pv, e);
      e.memoizedProps = e.pendingProps, t === null ? rs(e) : lt = t;
    }
    function Pv(e) {
      var t = e.alternate, a = (e.mode & Fe) !== qe;
      switch (a && Cd(e), e.tag) {
        case 15:
        case 0:
          t = Ic(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Pe
          );
          break;
        case 11:
          t = Ic(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Pe
          );
          break;
        case 5:
          tc(e);
        default:
          ag(t, e), e = lt = Jo(e, Tc), t = uh(t, e, Tc);
      }
      return a && Ko(e), t;
    }
    function io(e, t, a, i) {
      ki(), tc(t), ym = null, a0 = 0;
      var o = t.return;
      try {
        if (I0(
          e,
          o,
          t,
          a,
          Pe
        )) {
          hl = r0, kr(
            e,
            ya(a, e.current)
          ), lt = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw lt = o, f;
        hl = r0, kr(
          e,
          ya(a, e.current)
        ), lt = null;
        return;
      }
      t.flags & 32768 ? (rt || i === pv ? e = !0 : Om || (Pe & 536870912) !== 0 ? e = !1 : (Qf = e = !0, (i === ed || i === td || i === s0 || i === d0) && (i = lu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), $t(t, e)) : rs(t);
    }
    function rs(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          $t(
            t,
            Qf
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, Cd(t), a = he(
          t,
          tg,
          a,
          t,
          Tc
        ), (t.mode & Fe) !== qe && Xc(t), a !== null) {
          lt = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          lt = t;
          return;
        }
        lt = t = e;
      } while (t !== null);
      hl === Uo && (hl = Qb);
    }
    function $t(e, t) {
      do {
        var a = lg(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, lt = a;
          return;
        }
        if ((e.mode & Fe) !== qe) {
          Xc(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          lt = e;
          return;
        }
        lt = e = a;
      } while (e !== null);
      hl = yv, lt = null;
    }
    function oa(e, t, a, i, o, f, d, h, y, p, D, R, b, Y) {
      e.cancelPendingCommit = null;
      do
        rc();
      while (ql !== Kf);
      if (Ni.flushLegacyContextWarning(), Ni.flushPendingUnsafeLifecycleWarnings(), (Et & (ta | nu)) !== ma)
        throw Error("Should not already be working.");
      if (Pa(a), p === Ps ? Km(
        b,
        Y,
        a,
        El
      ) : i !== null ? kv(
        b,
        Y,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        El
      ) : $v(
        b,
        Y,
        a,
        El
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= AS, ar(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === Jt && (lt = Jt = null, Pe = 0), _m = t, $f = e, ji = a, PS = f, t1 = o, Pb = i, e1 = Y, eE = R, Yi = Ev, tE = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ds(vo, function() {
          return b0 = window.event, Yi === Ev && (Yi = IS), Ta(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Oo = null, Yf = Nl(), R !== null && Wv(
          Y,
          Yf,
          R,
          El
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null, o = Rt.p, Rt.p = Dl, d = Et, Et |= nu;
          try {
            Yy(e, t, a);
          } finally {
            Et = d, Rt.p = o, G.T = i;
          }
        }
        ql = kb, qu(), Wy(), Fy();
      }
    }
    function qu() {
      if (ql === kb) {
        ql = Kf;
        var e = $f, t = _m, a = ji, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = G.T, G.T = null;
          var o = Rt.p;
          Rt.p = Dl;
          var f = Et;
          Et |= nu;
          try {
            Tm = a, Am = e, pa(), Xy(t, e), Am = Tm = null, a = d1;
            var d = G0(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Ed(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Zm(h)) {
                var p = y.start, D = y.end;
                if (D === void 0 && (D = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    D,
                    h.value.length
                  );
                else {
                  var R = h.ownerDocument || document, b = R && R.defaultView || window;
                  if (b.getSelection) {
                    var Y = b.getSelection(), ne = h.textContent.length, de = Math.min(
                      y.start,
                      ne
                    ), kt = y.end === void 0 ? de : Math.min(y.end, ne);
                    !Y.extend && de > kt && (d = kt, kt = de, de = d);
                    var yt = w0(
                      h,
                      de
                    ), S = w0(
                      h,
                      kt
                    );
                    if (yt && S && (Y.rangeCount !== 1 || Y.anchorNode !== yt.node || Y.anchorOffset !== yt.offset || Y.focusNode !== S.node || Y.focusOffset !== S.offset)) {
                      var E = R.createRange();
                      E.setStart(yt.node, yt.offset), Y.removeAllRanges(), de > kt ? (Y.addRange(E), Y.extend(S.node, S.offset)) : (E.setEnd(S.node, S.offset), Y.addRange(E));
                    }
                  }
                }
              }
              for (R = [], Y = h; Y = Y.parentNode; )
                Y.nodeType === 1 && R.push({
                  element: Y,
                  left: Y.scrollLeft,
                  top: Y.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < R.length; h++) {
                var _ = R[h];
                _.element.scrollLeft = _.left, _.element.scrollTop = _.top;
              }
            }
            Yv = !!s1, d1 = s1 = null;
          } finally {
            Et = f, Rt.p = o, G.T = i;
          }
        }
        e.current = t, ql = Wb;
      }
    }
    function Wy() {
      if (ql === Wb) {
        ql = Kf;
        var e = tE;
        if (e !== null) {
          Yf = Nl();
          var t = Ao, a = Yf;
          !It || a <= t || console.timeStamp(
            e,
            t,
            a,
            pt,
            mt,
            "secondary-light"
          );
        }
        e = $f, t = _m, a = ji;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = G.T, G.T = null;
          var o = Rt.p;
          Rt.p = Dl;
          var f = Et;
          Et |= nu;
          try {
            Tm = a, Am = e, pa(), ml(
              e,
              t.alternate,
              t
            ), Am = Tm = null;
          } finally {
            Et = f, Rt.p = o, G.T = i;
          }
        }
        e = e1, t = eE, Ao = Nl(), e = t === null ? e : Yf, t = Ao, a = Yi === FS, i = El, Oo !== null ? Z0(
          e,
          t,
          Oo,
          !1,
          i
        ) : !It || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            pt,
            mt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          pt,
          mt,
          a ? "error" : "secondary-dark"
        )), ql = Fb;
      }
    }
    function Fy() {
      if (ql === Ib || ql === Fb) {
        if (ql === Ib) {
          var e = Ao;
          Ao = Nl();
          var t = Ao, a = Yi === FS;
          !It || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            pt,
            mt,
            a ? " error" : "secondary-light"
          ), Yi !== FS && (Yi = $b);
        }
        ql = Kf, iS(), e = $f;
        var i = _m;
        t = ji, a = Pb;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? ql = Tv : (ql = Kf, _m = $f = null, sg(
          e,
          e.pendingLanes
        ), ad = 0, p0 = null);
        var f = e.pendingLanes;
        if (f === 0 && (Jf = null), o || Mn(e), f = Yo(t), i = i.stateNode, ra && typeof ra.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Dl:
                var h = Kh;
                break;
              case Il:
                h = $h;
                break;
              case sn:
                h = vo;
                break;
              case pc:
                h = Bs;
                break;
              default:
                h = vo;
            }
            ra.onCommitFiberRoot(
              Ui,
              i,
              h,
              d
            );
          } catch (R) {
            Ju || (Ju = !0, console.error(
              "React instrumentation encountered an error: %o",
              R
            ));
          }
        if (Bn && e.memoizedUpdaters.clear(), og(), a !== null) {
          d = G.T, h = Rt.p, Rt.p = Dl, G.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], D = rg(p.stack);
              he(
                p.source,
                y,
                p.value,
                D
              );
            }
          } finally {
            G.T = d, Rt.p = h;
          }
        }
        (ji & 3) !== 0 && rc(), Aa(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (nv = !0, e === l1 ? y0++ : (y0 = 0, l1 = e)) : y0 = 0, o || kn(t, Ao), yf(0);
      }
    }
    function rg(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function sg(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, _r(t)));
    }
    function rc() {
      return qu(), Wy(), Fy(), Ta();
    }
    function Ta() {
      if (ql !== Tv) return !1;
      var e = $f, t = PS;
      PS = 0;
      var a = Yo(ji), i = sn > a ? sn : a;
      a = G.T;
      var o = Rt.p;
      try {
        Rt.p = i, G.T = null;
        var f = t1;
        t1 = null, i = $f;
        var d = ji;
        if (ql = Kf, _m = $f = null, ji = 0, (Et & (ta | nu)) !== ma)
          throw Error("Cannot flush passive effects while already rendering.");
        Pa(d), a1 = !0, Av = !1;
        var h = 0;
        if (Oo = null, h = sl(), Yi === $b)
          $m(
            Ao,
            h,
            LT
          );
        else {
          var y = Ao, p = h, D = Yi === IS;
          !It || p <= y || (El ? El.run(
            console.timeStamp.bind(
              console,
              D ? "Waiting for Paint" : "Waiting",
              y,
              p,
              pt,
              mt,
              "secondary-light"
            )
          ) : console.timeStamp(
            D ? "Waiting for Paint" : "Waiting",
            y,
            p,
            pt,
            mt,
            "secondary-light"
          ));
        }
        y = Et, Et |= nu;
        var R = i.current;
        pa(), cg(R);
        var b = i.current;
        R = e1, pa(), rh(
          i,
          b,
          d,
          f,
          R
        ), Mn(i), Et = y;
        var Y = sl();
        if (b = h, R = El, Oo !== null ? Z0(
          b,
          Y,
          Oo,
          !0,
          R
        ) : !It || Y <= b || (R ? R.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            b,
            Y,
            pt,
            mt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          b,
          Y,
          pt,
          mt,
          "secondary-dark"
        )), kn(d, Y), yf(0, !1), Av ? i === p0 ? ad++ : (ad = 0, p0 = i) : ad = 0, Av = a1 = !1, ra && typeof ra.onPostCommitFiberRoot == "function")
          try {
            ra.onPostCommitFiberRoot(Ui, i);
          } catch (de) {
            Ju || (Ju = !0, console.error(
              "React instrumentation encountered an error: %o",
              de
            ));
          }
        var ne = i.current.stateNode;
        return ne.effectDuration = 0, ne.passiveEffectDuration = 0, !0;
      } finally {
        Rt.p = o, G.T = a, sg(e, t);
      }
    }
    function Rn(e, t, a) {
      t = ya(a, t), xa(t), t = $d(e.stateNode, t, 2), e = va(e, t, 2), e !== null && (Xi(e, 2), Aa(e));
    }
    function Tt(e, t, a) {
      if (Dm = !1, e.tag === 3)
        Rn(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            Rn(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Jf === null || !Jf.has(i))) {
              e = ya(a, e), xa(e), a = kd(2), i = va(t, a, 2), i !== null && (Wr(
                a,
                i,
                t,
                e
              ), Xi(i, 2), Aa(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function fa(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new FT();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (kS = !0, o.add(a), i = dg.bind(null, e, t, a), Bn && Gu(e, a), t.then(i, i));
    }
    function dg(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > bc && (Vs = bc = Nl(), Zp = Ig("Promise Resolved"), qf = Pg) : (a & 4194048) !== 0 && 0 > ei && (_o = ei = Nl(), Kp = Ig("Promise Resolved"), CS = Pg), os() && G.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), Jt === e && (Pe & a) === a && (hl === Lf || hl === mv && (Pe & 62914560) === Pe && sl() - Sv < Jb ? (Et & ta) === ma && Ea(e, 0) : WS |= a, ld === Pe && (ld = 0)), Aa(e);
    }
    function wu(e, t) {
      t === 0 && (t = jo()), e = Ql(e, t), e !== null && (Xi(e, t), Aa(e));
    }
    function co(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), wu(e, a);
    }
    function Oi(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), wu(e, a);
    }
    function ss(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === zf;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && he(
            o,
            gh,
            i,
            o
          ) : ss(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? he(
            o,
            gh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && he(
            o,
            ss,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function gh(e, t) {
      ve(!0);
      try {
        Ly(t), ju(t), Qy(e, t.alternate, t, !1), sh(e, t, 0, null, !1, 0);
      } finally {
        ve(!1);
      }
    }
    function Mn(e) {
      var t = !0;
      e.current.mode & ($a | Hi) || (t = !1), ss(
        e,
        e.current,
        t
      );
    }
    function Iy(e) {
      if ((Et & ta) === ma) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = me(e) || "ReactComponent", Ov !== null) {
            if (Ov.has(t)) return;
            Ov.add(t);
          } else Ov = /* @__PURE__ */ new Set([t]);
          he(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Gu(e, t) {
      Bn && e.memoizedUpdaters.forEach(function(a) {
        za(e, a, t);
      });
    }
    function ds(e, t) {
      var a = G.actQueue;
      return a !== null ? (a.push(t), eA) : Mf(e, t);
    }
    function hs(e) {
      os() && G.actQueue === null && he(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          me(e)
        );
      });
    }
    function Aa(e) {
      e !== zm && e.next === null && (zm === null ? _v = zm = e : zm = zm.next = e), Dv = !0, G.actQueue !== null ? u1 || (u1 = !0, mg()) : n1 || (n1 = !0, mg());
    }
    function yf(e, t) {
      if (!i1 && Dv) {
        i1 = !0;
        do
          for (var a = !1, i = _v; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - Fl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ep(i, f));
            } else
              f = Pe, f = Tl(
                i,
                i === Jt ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== cd
              ), (f & 3) === 0 || wi(i, f) || (a = !0, ep(i, f));
            i = i.next;
          }
        while (a);
        i1 = !1;
      }
    }
    function hg() {
      b0 = window.event, oo();
    }
    function oo() {
      Dv = u1 = n1 = !1;
      var e = 0;
      kf !== 0 && pf() && (e = kf);
      for (var t = sl(), a = null, i = _v; i !== null; ) {
        var o = i.next, f = Py(i, t);
        f === 0 ? (i.next = null, a === null ? _v = o : a.next = o, o === null && (zm = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Dv = !0)), i = o;
      }
      ql !== Kf && ql !== Tv || yf(e), kf !== 0 && (kf = 0);
    }
    function Py(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - Fl(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = lr(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = Jt, a = Pe, a = Tl(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== cd
      ), i = e.callbackNode, a === 0 || e === t && (wt === ed || wt === td) || e.cancelPendingCommit !== null)
        return i !== null && tp(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || wi(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || G.actQueue !== null && i !== c1)
          tp(i);
        else return t;
        switch (Yo(a)) {
          case Dl:
          case Il:
            a = $h;
            break;
          case sn:
            a = vo;
            break;
          case pc:
            a = Bs;
            break;
          default:
            a = vo;
        }
        return i = ms.bind(null, e), G.actQueue !== null ? (G.actQueue.push(i), a = c1) : a = Mf(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && tp(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function ms(e, t) {
      if (nv = av = !1, b0 = window.event, ql !== Kf && ql !== Tv)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Yi === Ev && (Yi = IS), rc() && e.callbackNode !== a)
        return null;
      var i = Pe;
      return i = Tl(
        e,
        e === Jt ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== cd
      ), i === 0 ? null : (fg(
        e,
        i,
        t
      ), Py(e, sl()), e.callbackNode != null && e.callbackNode === a ? ms.bind(null, e) : null);
    }
    function ep(e, t) {
      if (rc()) return null;
      av = nv, nv = !1, fg(e, t, !0);
    }
    function tp(e) {
      e !== c1 && e !== null && Zh(e);
    }
    function mg() {
      G.actQueue !== null && G.actQueue.push(function() {
        return oo(), null;
      }), rA(function() {
        (Et & (ta | nu)) !== ma ? Mf(
          Kh,
          hg
        ) : oo();
      });
    }
    function St() {
      if (kf === 0) {
        var e = Ks;
        e === 0 && (e = js, js <<= 1, (js & 261888) === 0 && (js = 256)), kf = e;
      }
      return kf;
    }
    function Yt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Mt(e, "action"), Vi("" + e));
    }
    function nt(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ft(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Yt(
          (o[sa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[sa] || null) ? Yt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new Zg(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (kf !== 0) {
                    var y = d ? nt(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), lf(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? nt(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), lf(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function At(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        SS(i);
      }
      e.currentTarget = null;
    }
    function La(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? he(
                y,
                At,
                f,
                h,
                p
              ) : At(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? he(
                y,
                At,
                f,
                h,
                p
              ) : At(f, h, p), o = y;
            }
        }
      }
    }
    function Ze(e, t) {
      o1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[Hp];
      a === void 0 && (a = t[Hp] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (Xu(t, e, 2, !1), a.add(i));
    }
    function sc(e, t, a) {
      o1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Xu(
        a,
        e,
        i,
        t
      );
    }
    function ys(e) {
      if (!e[zv]) {
        e[zv] = !0, qs.forEach(function(a) {
          a !== "selectionchange" && (o1.has(a) || sc(a, !1, e), sc(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[zv] || (t[zv] = !0, sc("selectionchange", !1, t));
      }
    }
    function Xu(e, t, a, i) {
      switch (Bh(t)) {
        case Dl:
          var o = kl;
          break;
        case Il:
          o = lS;
          break;
        default:
          o = xh;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !fS || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Ft(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = P(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      Hc(function() {
        var p = f, D = mr(a), R = [];
        e: {
          var b = Y1.get(e);
          if (b !== void 0) {
            var Y = Zg, ne = e;
            switch (e) {
              case "keypress":
                if (Lo(a) === 0) break e;
              case "keydown":
              case "keyup":
                Y = yT;
                break;
              case "focusin":
                ne = "focus", Y = hS;
                break;
              case "focusout":
                ne = "blur", Y = hS;
                break;
              case "beforeblur":
              case "afterblur":
                Y = hS;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                Y = A1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                Y = aT;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                Y = vT;
                break;
              case N1:
              case x1:
              case B1:
                Y = iT;
                break;
              case j1:
                Y = bT;
                break;
              case "scroll":
              case "scrollend":
                Y = tT;
                break;
              case "wheel":
                Y = TT;
                break;
              case "copy":
              case "cut":
              case "paste":
                Y = oT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                Y = _1;
                break;
              case "toggle":
              case "beforetoggle":
                Y = OT;
            }
            var de = (t & 4) !== 0, kt = !de && (e === "scroll" || e === "scrollend"), yt = de ? b !== null ? b + "Capture" : null : b;
            de = [];
            for (var S = p, E; S !== null; ) {
              var _ = S;
              if (E = _.stateNode, _ = _.tag, _ !== 5 && _ !== 26 && _ !== 27 || E === null || yt === null || (_ = ru(S, yt), _ != null && de.push(
                Cn(
                  S,
                  _,
                  E
                )
              )), kt) break;
              S = S.return;
            }
            0 < de.length && (b = new Y(
              b,
              ne,
              null,
              a,
              D
            ), R.push({
              event: b,
              listeners: de
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (b = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", b && a !== xp && (ne = a.relatedTarget || a.fromElement) && (P(ne) || ne[jn]))
              break e;
            if ((Y || b) && (b = D.window === D ? D : (b = D.ownerDocument) ? b.defaultView || b.parentWindow : window, Y ? (ne = a.relatedTarget || a.toElement, Y = p, ne = ne ? P(ne) : null, ne !== null && (kt = Ve(ne), de = ne.tag, ne !== kt || de !== 5 && de !== 27 && de !== 6) && (ne = null)) : (Y = null, ne = p), Y !== ne)) {
              if (de = A1, _ = "onMouseLeave", yt = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (de = _1, _ = "onPointerLeave", yt = "onPointerEnter", S = "pointer"), kt = Y == null ? b : pe(Y), E = ne == null ? b : pe(ne), b = new de(
                _,
                S + "leave",
                Y,
                a,
                D
              ), b.target = kt, b.relatedTarget = E, _ = null, P(D) === p && (de = new de(
                yt,
                S + "enter",
                ne,
                a,
                D
              ), de.target = E, de.relatedTarget = kt, _ = de), kt = _, Y && ne)
                t: {
                  for (de = lp, yt = Y, S = ne, E = 0, _ = yt; _; _ = de(_))
                    E++;
                  _ = 0;
                  for (var Z = S; Z; Z = de(Z))
                    _++;
                  for (; 0 < E - _; )
                    yt = de(yt), E--;
                  for (; 0 < _ - E; )
                    S = de(S), _--;
                  for (; E--; ) {
                    if (yt === S || S !== null && yt === S.alternate) {
                      de = yt;
                      break t;
                    }
                    yt = de(yt), S = de(S);
                  }
                  de = null;
                }
              else de = null;
              Y !== null && Qa(
                R,
                b,
                Y,
                de,
                !1
              ), ne !== null && kt !== null && Qa(
                R,
                kt,
                ne,
                de,
                !0
              );
            }
          }
          e: {
            if (b = p ? pe(p) : window, Y = b.nodeName && b.nodeName.toLowerCase(), Y === "select" || Y === "input" && b.type === "file")
              var oe = gr;
            else if (pr(b))
              if (U1)
                oe = bd;
              else {
                oe = Vm;
                var Le = Qm;
              }
            else
              Y = b.nodeName, !Y || Y.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? p && hr(p.elementType) && (oe = gr) : oe = vr;
            if (oe && (oe = oe(e, p))) {
              Lm(
                R,
                oe,
                a,
                D
              );
              break e;
            }
            Le && Le(e, b, p), e === "focusout" && p && b.type === "number" && p.memoizedProps.value != null && Hm(b, "number", b.value);
          }
          switch (Le = p ? pe(p) : window, e) {
            case "focusin":
              (pr(Le) || Le.contentEditable === "true") && (nm = Le, yS = p, Xp = null);
              break;
            case "focusout":
              Xp = yS = nm = null;
              break;
            case "mousedown":
              pS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              pS = !1, X0(
                R,
                a,
                D
              );
              break;
            case "selectionchange":
              if (RT) break;
            case "keydown":
            case "keyup":
              X0(
                R,
                a,
                D
              );
          }
          var ze;
          if (mS)
            e: {
              switch (e) {
                case "compositionstart":
                  var Ae = "onCompositionStart";
                  break e;
                case "compositionend":
                  Ae = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Ae = "onCompositionUpdate";
                  break e;
              }
              Ae = void 0;
            }
          else
            am ? ri(e, a) && (Ae = "onCompositionEnd") : e === "keydown" && a.keyCode === D1 && (Ae = "onCompositionStart");
          Ae && (z1 && a.locale !== "ko" && (am || Ae !== "onCompositionStart" ? Ae === "onCompositionEnd" && am && (ze = Gm()) : (Hf = D, rS = "value" in Hf ? Hf.value : Hf.textContent, am = !0)), Le = Lu(
            p,
            Ae
          ), 0 < Le.length && (Ae = new O1(
            Ae,
            e,
            null,
            a,
            D
          ), R.push({
            event: Ae,
            listeners: Le
          }), ze ? Ae.data = ze : (ze = gd(a), ze !== null && (Ae.data = ze)))), (ze = DT ? vd(e, a) : B0(e, a)) && (Ae = Lu(
            p,
            "onBeforeInput"
          ), 0 < Ae.length && (Le = new rT(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            D
          ), R.push({
            event: Le,
            listeners: Ae
          }), Le.data = ze)), ft(
            R,
            e,
            p,
            a,
            D
          );
        }
        La(R, t);
      });
    }
    function Cn(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Lu(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = ru(e, a), o != null && i.unshift(
          Cn(e, o, f)
        ), o = ru(e, t), o != null && i.push(
          Cn(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function lp(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Qa(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = ru(a, f), p != null && d.unshift(
          Cn(a, p, y)
        )) : o || (p = ru(a, f), p != null && d.push(
          Cn(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function dc(e, t) {
      wm(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || E1 || (E1 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ku,
        possibleRegistrationNames: Fh
      };
      hr(e) || typeof t.is == "string" || Jv(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function fl(e, t, a, i) {
      t !== a && (a = _i(a), _i(t) !== a && (i[e] = t));
    }
    function Va(e, t, a) {
      t.forEach(function(i) {
        a[fo(i)] = i === "style" ? Wn(e) : e.getAttribute(i);
      });
    }
    function Un(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function ps(e, t) {
      return e = e.namespaceURI === tt || e.namespaceURI === ct ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function _i(e) {
      return ii(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Fa(e)
      ), iu(e)), (typeof e == "string" ? e : "" + e).replace(tA, `
`).replace(lA, "");
    }
    function gs(e, t) {
      return t = _i(t), _i(e) === t;
    }
    function zt(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Xo(i, t, !1), t === "body" || t === "textarea" && i === "" || fu(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Xo("" + i, t, !1), t !== "body" && fu(e, "" + i));
          break;
        case "className":
          ir(e, "class", i);
          break;
        case "tabIndex":
          ir(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ir(e, a, i);
          break;
        case "style":
          Uc(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            ir(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Mt(i, a), i = Vi("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Cv || (Cv = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Mv || (Mv = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Rv ? t !== "button" || o.type == null || o.type === "submit" || Rv ? typeof i == "function" && (o.name == null || iE || (iE = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Cv || (Cv = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Mv || (Mv = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Rv = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Rv = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && zt(e, t, "name", o.name, o, null), zt(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), zt(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), zt(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (zt(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), zt(e, t, "method", o.method, o, null), zt(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Mt(i, a), i = Vi("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Un(a, i), e.onclick = Ll);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Un(a, i), Ze("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Un(a, i), Ze("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          Mt(i, a), a = Vi("" + i), e.setAttributeNS(nd, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (Mt(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || Uv[a] || (Uv[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (Mt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (Mt(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (Mt(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Ze("beforetoggle", e), Ze("toggle", e), Oc(e, "popover", i);
          break;
        case "xlinkActuate":
          ou(
            e,
            nd,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          ou(
            e,
            nd,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          ou(
            e,
            nd,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          ou(
            e,
            nd,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          ou(
            e,
            nd,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          ou(
            e,
            nd,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          ou(
            e,
            f1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          ou(
            e,
            f1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          ou(
            e,
            f1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Oc(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          cE || i == null || typeof i != "object" || (cE = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = qm(a), Oc(e, a, i)) : Ku.hasOwnProperty(a) && i != null && typeof i != "function" && Un(a, i);
      }
    }
    function Qu(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Uc(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? fu(e, i) : (typeof i == "number" || typeof i == "bigint") && fu(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Un(a, i), Ze("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Un(a, i), Ze("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Un(a, i), e.onclick = Ll);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Ku.hasOwnProperty(a))
            i != null && typeof i != "function" && Un(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[sa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Oc(e, a, i);
            }
      }
    }
    function ht(e, t, a) {
      switch (dc(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Ze("error", e), Ze("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    zt(e, t, f, d, a, null);
                }
            }
          o && zt(e, t, "srcSet", a.srcSet, a, null), i && zt(e, t, "src", a.src, a, null);
          return;
        case "input":
          Xl("input", a), Ze("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var D = a[i];
              if (D != null)
                switch (i) {
                  case "name":
                    o = D;
                    break;
                  case "type":
                    d = D;
                    break;
                  case "checked":
                    y = D;
                    break;
                  case "defaultChecked":
                    p = D;
                    break;
                  case "value":
                    f = D;
                    break;
                  case "defaultValue":
                    h = D;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (D != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    zt(e, t, i, D, a, null);
                }
            }
          _c(e, a), U0(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          Xl("select", a), Ze("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  zt(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Dc(e, a), t = f, a = d, e.multiple = !!i, t != null ? Qi(e, !!i, t, !1) : a != null && Qi(e, !!i, a, !0);
          return;
        case "textarea":
          Xl("textarea", a), Ze("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  zt(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          zc(e, a), Rc(e, i, o, f);
          return;
        case "option":
          Nm(e, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : zt(e, t, y, i, a, null));
          return;
        case "dialog":
          Ze("beforetoggle", e), Ze("toggle", e), Ze("cancel", e), Ze("close", e);
          break;
        case "iframe":
        case "object":
          Ze("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < g0.length; i++)
            Ze(g0[i], e);
          break;
        case "image":
          Ze("error", e), Ze("load", e);
          break;
        case "details":
          Ze("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ze("error", e), Ze("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  zt(e, t, p, i, a, null);
              }
          return;
        default:
          if (hr(t)) {
            for (D in a)
              a.hasOwnProperty(D) && (i = a[D], i !== void 0 && Qu(
                e,
                t,
                D,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && zt(e, t, h, i, a, null));
    }
    function hc(e, t, a, i) {
      switch (dc(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, D = null;
          for (Y in a) {
            var R = a[Y];
            if (a.hasOwnProperty(Y) && R != null)
              switch (Y) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = R;
                default:
                  i.hasOwnProperty(Y) || zt(
                    e,
                    t,
                    Y,
                    null,
                    i,
                    R
                  );
              }
          }
          for (var b in i) {
            var Y = i[b];
            if (R = a[b], i.hasOwnProperty(b) && (Y != null || R != null))
              switch (b) {
                case "type":
                  f = Y;
                  break;
                case "name":
                  o = Y;
                  break;
                case "checked":
                  p = Y;
                  break;
                case "defaultChecked":
                  D = Y;
                  break;
                case "value":
                  d = Y;
                  break;
                case "defaultValue":
                  h = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Y !== R && zt(
                    e,
                    t,
                    b,
                    Y,
                    i,
                    R
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || uE || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), uE = !0), !t || i || nE || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), nE = !0), cr(
            e,
            d,
            h,
            y,
            p,
            D,
            f,
            o
          );
          return;
        case "select":
          Y = d = h = b = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  Y = y;
                default:
                  i.hasOwnProperty(f) || zt(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  b = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && zt(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = Y, b != null ? Qi(e, !!t, b, !1) : !!a != !!t && (i != null ? Qi(e, !!t, i, !0) : Qi(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          Y = b = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  zt(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  b = o;
                  break;
                case "defaultValue":
                  Y = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && zt(e, t, d, o, i, f);
              }
          wo(e, b, Y);
          return;
        case "option":
          for (var ne in a)
            b = a[ne], a.hasOwnProperty(ne) && b != null && !i.hasOwnProperty(ne) && (ne === "selected" ? e.selected = !1 : zt(
              e,
              t,
              ne,
              null,
              i,
              b
            ));
          for (y in i)
            b = i[y], Y = a[y], i.hasOwnProperty(y) && b !== Y && (b != null || Y != null) && (y === "selected" ? e.selected = b && typeof b != "function" && typeof b != "symbol" : zt(
              e,
              t,
              y,
              b,
              i,
              Y
            ));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var de in a)
            b = a[de], a.hasOwnProperty(de) && b != null && !i.hasOwnProperty(de) && zt(
              e,
              t,
              de,
              null,
              i,
              b
            );
          for (p in i)
            if (b = i[p], Y = a[p], i.hasOwnProperty(p) && b !== Y && (b != null || Y != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  zt(
                    e,
                    t,
                    p,
                    b,
                    i,
                    Y
                  );
              }
          return;
        default:
          if (hr(t)) {
            for (var kt in a)
              b = a[kt], a.hasOwnProperty(kt) && b !== void 0 && !i.hasOwnProperty(kt) && Qu(
                e,
                t,
                kt,
                void 0,
                i,
                b
              );
            for (D in i)
              b = i[D], Y = a[D], !i.hasOwnProperty(D) || b === Y || b === void 0 && Y === void 0 || Qu(
                e,
                t,
                D,
                b,
                i,
                Y
              );
            return;
          }
      }
      for (var yt in a)
        b = a[yt], a.hasOwnProperty(yt) && b != null && !i.hasOwnProperty(yt) && zt(e, t, yt, null, i, b);
      for (R in i)
        b = i[R], Y = a[R], !i.hasOwnProperty(R) || b === Y || b == null && Y == null || zt(e, t, R, b, i, Y);
    }
    function fo(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function Wn(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function vh(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (Gl(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Ke.has(f) ? (Gl(d, f), i += o + f.replace(ge, "-$1").toLowerCase().replace(He, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(ge, "-$1").toLowerCase().replace(He, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = _i(i), _i(t) !== i && (a.style = Wn(e)));
      }
    }
    function Za(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Mt(i, t), e === "" + i)
              return;
        }
      fl(t, e, i, f);
    }
    function ap(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      fl(t, e, i, f);
    }
    function ro(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (Mt(i, a), e === "" + i)
              return;
        }
      fl(t, e, i, f);
    }
    function Sh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (Mt(i, t), e === "" + i))
              return;
        }
      fl(t, e, i, f);
    }
    function Oa(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Mt(i, t), a = Vi("" + i), e === a)
              return;
        }
      fl(t, e, i, f);
    }
    function np(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (hr(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Ku.hasOwnProperty(y))
                typeof p != "function" && Un(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || fl(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = ps(e, p), fl(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), vh(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = rd(
                      e,
                      "class",
                      p
                    ), fl(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === Ho && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = rd(
                      e,
                      y,
                      p
                    ), fl(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Ku.hasOwnProperty(p))
              typeof y != "function" && Un(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || fl(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = ps(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Za(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Za(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), vh(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), fl(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), fl(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), fl(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), fl(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  Oa(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === aA) {
                    f.delete(p.toLowerCase()), fl(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  Oa(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Oa(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  ro(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  ro(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  ro(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  ap(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var D = d = p, R = o;
                    if (f.delete(D), h = h.getAttribute(D), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (Mt(y, d), h === "" + y)
                            break e;
                      }
                    fl(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, D = d = p, R = o, f.delete(D), h = h.getAttribute(D), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (Mt(y, d), h === "" + y))
                            break e;
                      }
                    fl(
                      d,
                      h,
                      y,
                      R
                    );
                  }
                  continue;
                case "rowSpan":
                  Sh(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Sh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Za(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Za(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Za(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Za(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Za(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Za(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Za(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Za(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Za(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Za(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || Uv[p] || (Uv[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), ap(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = qm(p), d = !1, i.context === Ho && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (D = p.toLowerCase(), D = Ph.hasOwnProperty(
                      D
                    ) && Ph[D] || null, D !== null && D !== p && (d = !0, f.delete(D)), f.delete(h));
                    e: if (D = e, R = h, h = y, Ra(R))
                      if (D.hasAttribute(R))
                        D = D.getAttribute(
                          R
                        ), Mt(
                          h,
                          R
                        ), h = D === "" + h ? h : D;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (D = R.toLowerCase().slice(0, 5), D !== "data-" && D !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || fl(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && Va(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function Ja(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function up(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function yg() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && up(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var D = y.transferSize, R = y.initiatorType;
              D && up(R) && (y = y.responseEnd, d += D * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function bh(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Di(e) {
      switch (e) {
        case ct:
          return Mm;
        case tt:
          return Nv;
        default:
          return Ho;
      }
    }
    function vs(e, t) {
      if (e === Ho)
        switch (t) {
          case "svg":
            return Mm;
          case "math":
            return Nv;
          default:
            return Ho;
        }
      return e === Mm && t === "foreignObject" ? Ho : e;
    }
    function Ss(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function pf() {
      var e = window.event;
      return e && e.type === "popstate" ? e === h1 ? !1 : (h1 = e, !0) : (h1 = null, !1);
    }
    function gf() {
      var e = window.event;
      return e && e !== b0 ? e.type : null;
    }
    function vf() {
      var e = window.event;
      return e && e !== b0 ? e.timeStamp : -1.1;
    }
    function pg(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function gg(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function Eh() {
    }
    function ip(e, t, a, i) {
      hc(e, t, a, i), e[sa] = i;
    }
    function vg(e) {
      fu(e, "");
    }
    function eS(e, t, a) {
      e.nodeValue = a;
    }
    function Sg(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[sa] || null;
        if (t !== null) {
          var a = le(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, he(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, he(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function zi(e) {
      return e === "head";
    }
    function bg(e, t) {
      e.removeChild(t);
    }
    function Sf(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function bs(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === S0 || a === Hv) {
            if (i === 0) {
              e.removeChild(o), _f(t);
              return;
            }
            i--;
          } else if (a === v0 || a === Wf || a === id || a === Rm || a === ud)
            i++;
          else if (a === uA)
            As(
              e.ownerDocument.documentElement
            );
          else if (a === cA) {
            a = e.ownerDocument.head, As(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Ys] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === iA && As(e.ownerDocument.body);
        a = o;
      } while (a);
      _f(t);
    }
    function cp(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === S0) {
            if (e === 0) break;
            e--;
          } else
            a !== v0 && a !== Wf && a !== id && a !== Rm || e++;
        a = i;
      } while (a);
    }
    function Eg(e) {
      cp(e, !0);
    }
    function Tg(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function Ag(e) {
      e.nodeValue = "";
    }
    function Og(e) {
      cp(e, !1);
    }
    function _g(e, t) {
      t = t[oA], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Th(e, t) {
      e.nodeValue = t;
    }
    function Ah(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Ah(a), C(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function Dg(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Ys])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          Mt(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = fn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Nt(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = fn(e.nextSibling), e === null)) return null;
      return e;
    }
    function Oh(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = fn(e.nextSibling), e === null)) return null;
      return e;
    }
    function op(e) {
      return e.data === Wf || e.data === id;
    }
    function _h(e) {
      return e.data === Rm || e.data === Wf && e.ownerDocument.readyState !== fE;
    }
    function tS(e, t) {
      var a = e.ownerDocument;
      if (e.data === id)
        e._reactRetry = t;
      else if (e.data !== Wf || a.readyState !== fE)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function fn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === v0 || t === Rm || t === Wf || t === id || t === ud || t === r1 || t === oE)
            break;
          if (t === S0 || t === Hv)
            return null;
        }
      }
      return e;
    }
    function zg(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[fo(f.name)] = f.name.toLowerCase() === "style" ? Wn(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === ud ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Es(e, t, a) {
      return a === null || a[nA] !== !0 ? (e.nodeValue === t ? e = null : (t = _i(t), e = _i(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function mc(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === S0 || a === Hv) {
            if (t === 0)
              return fn(e.nextSibling);
            t--;
          } else
            a !== v0 && a !== Rm && a !== Wf && a !== id && a !== ud || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Dh(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === v0 || a === Rm || a === Wf || a === id || a === ud) {
            if (t === 0) return e;
            t--;
          } else
            a !== S0 && a !== Hv || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function zh(e) {
      _f(e);
    }
    function fp(e) {
      _f(e);
    }
    function yc(e) {
      _f(e);
    }
    function Fn(e, t, a, i, o) {
      switch (o && yd(e, i.ancestorInfo), t = bh(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Ts(e, t, a, i) {
      if (!a[jn] && le(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      ht(a, e, t), a[Pl] = i, a[sa] = t;
    }
    function As(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      C(e);
    }
    function Os(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function rp(e, t, a) {
      var i = Cm;
      if (i && typeof t == "string" && t) {
        var o = Kt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), yE.has(o) || (yE.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), ht(t, "link", e), be(t), i.head.appendChild(t)));
      }
    }
    function sp(e, t, a, i) {
      var o = (o = Nn.current) ? Os(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = bf(a.href), t = Ge(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = bf(a.href);
            var f = Ge(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: od, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              so(e)
            )) && !f._p && (d.instance = f, d.state.loading = E0 | ni), !ui.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              ui.set(e, h), f || Rg(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + _s(t) + `
  + ` + _s(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + _s(t) + `
  + ` + _s(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Ef(a), t = Ge(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function _s(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : Pn.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : Pn.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : Pn.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function bf(e) {
      return 'href="' + Kt(e) + '"';
    }
    function so(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function dp(e) {
      return ke({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Rg(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = E0 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= E0;
      }), t.addEventListener("error", function() {
        return i.loading |= hE;
      }), ht(t, "link", a), be(t), e.head.appendChild(t));
    }
    function Ef(e) {
      return '[src="' + Kt(e) + '"]';
    }
    function ho(e) {
      return "script[async]" + e;
    }
    function Rh(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Kt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, be(i), i;
            var o = ke({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), be(i), ht(i, "style", o), Mh(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = bf(a.href);
            var f = e.querySelector(
              so(o)
            );
            if (f)
              return t.state.loading |= ni, t.instance = f, be(f), f;
            i = dp(a), (o = ui.get(o)) && hp(i, o), f = (e.ownerDocument || e).createElement("link"), be(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), ht(f, "link", i), t.state.loading |= ni, Mh(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Ef(a.src), (o = e.querySelector(
              ho(f)
            )) ? (t.instance = o, be(o), o) : (i = a, (o = ui.get(f)) && (i = ke({}, a), mo(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), be(o), ht(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & ni) === od && (i = t.instance, t.state.loading |= ni, Mh(i, a.precedence, e));
      return t.instance;
    }
    function Mh(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function hp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function mo(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Mg(e, t, a) {
      if (xv === null) {
        var i = /* @__PURE__ */ new Map(), o = xv = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = xv, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Ys] || f[Pl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== ct) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function mp(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function it(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Mm || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = Ja(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return t.rel === "stylesheet" ? (e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof e == "string" && t == null) : !0;
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function Ch(e) {
      return !(e.type === "stylesheet" && (e.state.loading & mE) === od);
    }
    function Uh(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & ni) === od) {
        if (a.instance === null) {
          var o = bf(i.href), f = t.querySelector(
            so(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ds.bind(e), t.then(e, e)), a.state.loading |= ni, a.instance = f, be(f);
            return;
          }
          f = t.ownerDocument || t, i = dp(i), (o = ui.get(o)) && hp(i, o), f = f.createElement("link"), be(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), ht(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & mE) === od && (e.count++, a = Ds.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function yp(e, t) {
      return e.stylesheets && e.count === 0 && Tf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && Tf(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, sA + t);
        0 < e.imgBytes && y1 === 0 && (y1 = 125 * yg() * hA);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Tf(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > y1 ? 50 : dA) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Ds() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          Tf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function Tf(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Bv = /* @__PURE__ */ new Map(), t.forEach(zs, e), Bv = null, Ds.call(e));
    }
    function zs(e, t) {
      if (!(t.state.loading & ni)) {
        var a = Bv.get(e);
        if (a) var i = a.get(p1);
        else {
          a = /* @__PURE__ */ new Map(), Bv.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(p1, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(p1, o), a.set(d, o), this.count++, i = Ds.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= ni;
      }
    }
    function Hh(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = cd, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gi(0), this.hiddenUpdates = Gi(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Cg(e, t, a, i, o, f, d, h, y, p, D, R) {
      return e = new Hh(
        e,
        t,
        a,
        d,
        y,
        p,
        D,
        R,
        h
      ), t = YT, f === !0 && (t |= $a | Hi), t |= Fe, f = H(3, null, null, t), e.current = f, f.stateNode = e, t = ny(), Gc(t), e.pooledCache = t, Gc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Au(f), e;
    }
    function pp(e) {
      return e ? (e = Bf, e) : Bf;
    }
    function gp(e, t, a, i, o, f) {
      if (ra && typeof ra.onScheduleFiberRoot == "function")
        try {
          ra.onScheduleFiberRoot(Ui, i, a);
        } catch (d) {
          Ju || (Ju = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = pp(o), i.context === null ? i.context = o : i.pendingContext = o, xn && rn !== null && !SE && (SE = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        me(rn) || "Unknown"
      )), i = Ou(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = va(e, i, t), a !== null && (Xn(t, "root.render()", null), al(a, e, t), Wo(a, e, t));
    }
    function Ug(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Nh(e, t) {
      Ug(e, t), (e = e.alternate) && Ug(e, t);
    }
    function vp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Ql(e, 67108864);
        t !== null && al(t, e, 67108864), Nh(e, 67108864);
      }
    }
    function xt(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = $l(e);
        t = gl(t);
        var a = Ql(e, t);
        a !== null && al(a, e, t), Nh(e, t);
      }
    }
    function Sp() {
      return rn;
    }
    function kl(e, t, a, i) {
      var o = G.T;
      G.T = null;
      var f = Rt.p;
      try {
        Rt.p = Dl, xh(e, t, a, i);
      } finally {
        Rt.p = f, G.T = o;
      }
    }
    function lS(e, t, a, i) {
      var o = G.T;
      G.T = null;
      var f = Rt.p;
      try {
        Rt.p = Il, xh(e, t, a, i);
      } finally {
        Rt.p = f, G.T = o;
      }
    }
    function xh(e, t, a, i) {
      if (Yv) {
        var o = bp(i);
        if (o === null)
          Ft(
            e,
            t,
            i,
            qv,
            a
          ), Ms(e, i);
        else if (Hg(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Ms(e, i), t & 4 && -1 < yA.indexOf(e)) {
          for (; o !== null; ) {
            var f = le(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = cu(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - Fl(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Aa(f), (Et & (ta | nu)) === ma && (bv = sl() + Kb, yf(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Ql(f, 2), h !== null && al(h, f, 2), no(), Nh(f, 2);
              }
            if (f = bp(i), f === null && Ft(
              e,
              t,
              i,
              qv,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          Ft(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function bp(e) {
      return e = mr(e), Rs(e);
    }
    function Rs(e) {
      if (qv = null, e = P(e), e !== null) {
        var t = Ve(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = gt(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = Ct(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return qv = e, null;
    }
    function Bh(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Dl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Il;
        case "message":
          switch (cS()) {
            case Kh:
              return Dl;
            case $h:
              return Il;
            case vo:
            case Yg:
              return sn;
            case Bs:
              return pc;
            default:
              return sn;
          }
        default:
          return sn;
      }
    }
    function Ms(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ff = null;
          break;
        case "dragenter":
        case "dragleave":
          If = null;
          break;
        case "mouseover":
        case "mouseout":
          Pf = null;
          break;
        case "pointerover":
        case "pointerout":
          A0.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          O0.delete(t.pointerId);
      }
    }
    function Af(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = le(t), t !== null && vp(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function Hg(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return Ff = Af(
            Ff,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return If = Af(
            If,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return Pf = Af(
            Pf,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return A0.set(
            f,
            Af(
              A0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, O0.set(
            f,
            Af(
              O0.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function jh(e) {
      var t = P(e.target);
      if (t !== null) {
        var a = Ve(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = gt(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                xt(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Ct(a), t !== null) {
              e.blockedOn = t, g(e.priority, function() {
                xt(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Of(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = bp(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          xp !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), xp = o, a.target.dispatchEvent(i), xp === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), xp = null;
        } else
          return t = le(a), t !== null && vp(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Ng(e, t, a) {
      Of(e) && a.delete(t);
    }
    function xg() {
      g1 = !1, Ff !== null && Of(Ff) && (Ff = null), If !== null && Of(If) && (If = null), Pf !== null && Of(Pf) && (Pf = null), A0.forEach(Ng), O0.forEach(Ng);
    }
    function Yh(e, t) {
      e.blockedOn === t && (e.blockedOn = null, g1 || (g1 = !0, rl.unstable_scheduleCallback(
        rl.unstable_NormalPriority,
        xg
      )));
    }
    function Ep(e) {
      wv !== e && (wv = e, rl.unstable_scheduleCallback(
        rl.unstable_NormalPriority,
        function() {
          wv === e && (wv = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Rs(i || a) === null)
                continue;
              break;
            }
            var f = le(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), lf(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function _f(e) {
      function t(y) {
        return Yh(y, e);
      }
      Ff !== null && Yh(Ff, e), If !== null && Yh(If, e), Pf !== null && Yh(Pf, e), A0.forEach(t), O0.forEach(t);
      for (var a = 0; a < er.length; a++) {
        var i = er[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < er.length && (a = er[0], a.blockedOn === null); )
        jh(a), a.blockedOn === null && er.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[sa] || null;
          if (typeof f == "function")
            d || Ep(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[sa] || null)
                h = d.formAction;
              else if (Rs(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Ep(a);
          }
        }
    }
    function Bg() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function Vu(e) {
      this._internalRoot = e;
    }
    function Cs(e) {
      this._internalRoot = e;
    }
    function Tp(e) {
      e[jn] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var rl = KE(), Ap = Um(), aS = $E(), ke = Object.assign, Op = /* @__PURE__ */ Symbol.for("react.element"), Hn = /* @__PURE__ */ Symbol.for("react.transitional.element"), Df = /* @__PURE__ */ Symbol.for("react.portal"), Wl = /* @__PURE__ */ Symbol.for("react.fragment"), zf = /* @__PURE__ */ Symbol.for("react.strict_mode"), qh = /* @__PURE__ */ Symbol.for("react.profiler"), wh = /* @__PURE__ */ Symbol.for("react.consumer"), In = /* @__PURE__ */ Symbol.for("react.context"), Ri = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ka = /* @__PURE__ */ Symbol.for("react.suspense"), Gh = /* @__PURE__ */ Symbol.for("react.suspense_list"), yo = /* @__PURE__ */ Symbol.for("react.memo"), yl = /* @__PURE__ */ Symbol.for("react.lazy"), _p = /* @__PURE__ */ Symbol.for("react.activity"), nS = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), po = Symbol.iterator, jg = /* @__PURE__ */ Symbol.for("react.client.reference"), _l = Array.isArray, G = Ap.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Rt = aS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, uS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Dp = [], zp = [], Mi = -1, Ci = Ot(null), Zu = Ot(null), Nn = Ot(null), Us = Ot(null), Hs = 0, go, Rf, Rp, Ns, Xh, Lh, xs;
    O.__reactDisabledLog = !0;
    var Qh, Mp, Cp = !1, Vh = new (typeof WeakMap == "function" ? WeakMap : Map)(), rn = null, xn = !1, Pn = Object.prototype.hasOwnProperty, Mf = rl.unstable_scheduleCallback, Zh = rl.unstable_cancelCallback, Jh = rl.unstable_shouldYield, iS = rl.unstable_requestPaint, sl = rl.unstable_now, cS = rl.unstable_getCurrentPriorityLevel, Kh = rl.unstable_ImmediatePriority, $h = rl.unstable_UserBlockingPriority, vo = rl.unstable_NormalPriority, Yg = rl.unstable_LowPriority, Bs = rl.unstable_IdlePriority, qg = rl.log, wg = rl.unstable_setDisableYieldValue, Ui = null, ra = null, Ju = !1, Bn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", Fl = Math.clz32 ? Math.clz32 : Bo, kh = Math.log, Up = Math.LN2, js = 256, Cf = 262144, eu = 4194304, Dl = 2, Il = 8, sn = 32, pc = 268435456, _a = Math.random().toString(36).slice(2), Pl = "__reactFiber$" + _a, sa = "__reactProps$" + _a, jn = "__reactContainer$" + _a, Hp = "__reactEvents$" + _a, Gg = "__reactListeners$" + _a, Wh = "__reactHandles$" + _a, Np = "__reactResources$" + _a, Ys = "__reactMarker$" + _a, qs = /* @__PURE__ */ new Set(), Ku = {}, Fh = {}, Uf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Xg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ih = {}, ws = {}, Lg = /[\n"\\]/g, Qg = !1, Gs = !1, l = !1, n = !1, u = !1, c = !1, r = ["value", "defaultValue"], s = !1, m = /["'&<>\n\t]|^\s|\s$/, v = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), T = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), x = T.concat(["button"]), V = "dd dt li option optgroup p rp rt".split(" "), F = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, B = {}, w = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, ge = /([A-Z])/g, He = /^ms-/, qt = /^(?:webkit|moz|o)[A-Z]/, U = /^-ms-/, z = /-(.)/g, N = /;\s*$/, J = {}, _e = {}, bt = !1, Ee = !1, Ke = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), tt = "http://www.w3.org/1998/Math/MathML", ct = "http://www.w3.org/2000/svg", gc = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), Ph = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, b1 = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, em = {}, kE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), WE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), E1 = !1, dn = {}, T1 = /^on./, FE = /^on[^A-Z]/, IE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), PE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), eT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, xp = null, tm = null, lm = null, oS = !1, vc = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fS = !1;
    if (vc)
      try {
        var Bp = {};
        Object.defineProperty(Bp, "passive", {
          get: function() {
            fS = !0;
          }
        }), window.addEventListener("test", Bp, Bp), window.removeEventListener("test", Bp, Bp);
      } catch {
        fS = !1;
      }
    var Hf = null, rS = null, Vg = null, Xs = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Zg = ul(Xs), jp = ke({}, Xs, { view: 0, detail: 0 }), tT = ul(jp), sS, dS, Yp, Jg = ke({}, jp, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Nc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Yp && (Yp && e.type === "mousemove" ? (sS = e.screenX - Yp.screenX, dS = e.screenY - Yp.screenY) : dS = sS = 0, Yp = e), sS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : dS;
      }
    }), A1 = ul(Jg), lT = ke({}, Jg, { dataTransfer: 0 }), aT = ul(lT), nT = ke({}, jp, { relatedTarget: 0 }), hS = ul(nT), uT = ke({}, Xs, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), iT = ul(uT), cT = ke({}, Xs, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), oT = ul(cT), fT = ke({}, Xs, { data: 0 }), O1 = ul(
      fT
    ), rT = O1, sT = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, dT = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, hT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, mT = ke({}, jp, {
      key: function(e) {
        if (e.key) {
          var t = sT[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? dT[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Nc,
      charCode: function(e) {
        return e.type === "keypress" ? Lo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), yT = ul(mT), pT = ke({}, Jg, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), _1 = ul(pT), gT = ke({}, jp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Nc
    }), vT = ul(gT), ST = ke({}, Xs, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bT = ul(ST), ET = ke({}, Jg, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), TT = ul(ET), AT = ke({}, Xs, {
      newState: 0,
      oldState: 0
    }), OT = ul(AT), _T = [9, 13, 27, 32], D1 = 229, mS = vc && "CompositionEvent" in window, qp = null;
    vc && "documentMode" in document && (qp = document.documentMode);
    var DT = vc && "TextEvent" in window && !qp, z1 = vc && (!mS || qp && 8 < qp && 11 >= qp), R1 = 32, M1 = String.fromCharCode(R1), C1 = !1, am = !1, zT = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, wp = null, Gp = null, U1 = !1;
    vc && (U1 = Sd("input") && (!document.documentMode || 9 < document.documentMode));
    var hn = typeof Object.is == "function" ? Object.is : Y0, RT = vc && "documentMode" in document && 11 >= document.documentMode, nm = null, yS = null, Xp = null, pS = !1, um = {
      animationend: xc("Animation", "AnimationEnd"),
      animationiteration: xc("Animation", "AnimationIteration"),
      animationstart: xc("Animation", "AnimationStart"),
      transitionrun: xc("Transition", "TransitionRun"),
      transitionstart: xc("Transition", "TransitionStart"),
      transitioncancel: xc("Transition", "TransitionCancel"),
      transitionend: xc("Transition", "TransitionEnd")
    }, gS = {}, H1 = {};
    vc && (H1 = document.createElement("div").style, "AnimationEvent" in window || (delete um.animationend.animation, delete um.animationiteration.animation, delete um.animationstart.animation), "TransitionEvent" in window || delete um.transitionend.transition);
    var N1 = Bc("animationend"), x1 = Bc("animationiteration"), B1 = Bc("animationstart"), MT = Bc("transitionrun"), CT = Bc("transitionstart"), UT = Bc("transitioncancel"), j1 = Bc("transitionend"), Y1 = /* @__PURE__ */ new Map(), vS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    vS.push("scrollEnd");
    var q1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var HT = performance, w1 = function() {
        return HT.now();
      };
    else {
      var NT = Date;
      w1 = function() {
        return NT.now();
      };
    }
    var SS = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, xT = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Kg = 0, bS = 1, ES = 2, TS = 3, $g = "– ", kg = "+ ", G1 = "  ", It = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", $u = "Components ⚛", mt = "Scheduler ⚛", pt = "Blocking", Nf = !1, So = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: $u
    }, xf = {
      start: -0,
      end: -0,
      detail: { devtools: So }
    }, BT = ["Changed Props", ""], X1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", jT = ["Changed Props", X1], Lp = 1, bo = 2, ku = [], im = 0, AS = 0, Bf = {};
    Object.freeze(Bf);
    var Wu = null, cm = null, qe = 0, YT = 1, Fe = 2, $a = 8, Hi = 16, qT = 32, L1 = !1;
    try {
      var Q1 = Object.preventExtensions({});
    } catch {
      L1 = !0;
    }
    var OS = /* @__PURE__ */ new WeakMap(), om = [], fm = 0, Wg = null, Qp = 0, Fu = [], Iu = 0, Ls = null, Eo = 1, To = "", Da = null, Pt = null, rt = !1, Sc = !1, tu = null, jf = null, Pu = !1, _S = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), DS = Ot(null), zS = Ot(null), V1 = {}, Fg = null, rm = null, sm = !1, wT = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, GT = rl.unstable_scheduleCallback, XT = rl.unstable_NormalPriority, Hl = {
      $$typeof: In,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Nl = rl.unstable_now, Ig = console.createTask ? console.createTask : function() {
      return null;
    }, Vp = 1, Pg = 2, da = -0, Yf = -0, Ao = -0, Oo = null, mn = -1.1, Qs = -0, dl = -0, Me = -1.1, Be = -1.1, nl = null, pl = !1, Vs = -0, bc = -1.1, Zp = null, qf = 0, RS = null, MS = null, Zs = -1.1, Jp = null, dm = -1.1, ev = -1.1, _o = -0, Do = -1.1, ei = -1.1, CS = 0, Kp = null, Z1 = null, J1 = null, wf = -1.1, Js = null, Gf = -1.1, tv = -1.1, K1 = -0, $1 = -0, lv = 0, LT = null, k1 = 0, $p = -1.1, av = !1, nv = !1, kp = null, US = 0, Ks = 0, hm = null, W1 = G.S;
    G.S = function(e, t) {
      if (Zb = sl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > Do && 0 > ei) {
          Do = Nl();
          var a = vf(), i = gf();
          (a !== Gf || i !== Js) && (Gf = -1.1), wf = a, Js = i;
        }
        F0(e, t);
      }
      W1 !== null && W1(e, t);
    };
    var $s = Ot(null), Ni = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Wp = [], Fp = [], Ip = [], Pp = [], e0 = [], t0 = [], ks = /* @__PURE__ */ new Set();
    Ni.recordUnsafeLifecycleWarnings = function(e, t) {
      ks.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Wp.push(e), e.mode & $a && typeof t.UNSAFE_componentWillMount == "function" && Fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ip.push(e), e.mode & $a && typeof t.UNSAFE_componentWillReceiveProps == "function" && Pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && e0.push(e), e.mode & $a && typeof t.UNSAFE_componentWillUpdate == "function" && t0.push(e));
    }, Ni.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Wp.length && (Wp.forEach(function(h) {
        e.add(
          me(h) || "Component"
        ), ks.add(h.type);
      }), Wp = []);
      var t = /* @__PURE__ */ new Set();
      0 < Fp.length && (Fp.forEach(function(h) {
        t.add(
          me(h) || "Component"
        ), ks.add(h.type);
      }), Fp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Ip.length && (Ip.forEach(function(h) {
        a.add(
          me(h) || "Component"
        ), ks.add(h.type);
      }), Ip = []);
      var i = /* @__PURE__ */ new Set();
      0 < Pp.length && (Pp.forEach(
        function(h) {
          i.add(
            me(h) || "Component"
          ), ks.add(h.type);
        }
      ), Pp = []);
      var o = /* @__PURE__ */ new Set();
      0 < e0.length && (e0.forEach(function(h) {
        o.add(
          me(h) || "Component"
        ), ks.add(h.type);
      }), e0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < t0.length && (t0.forEach(function(h) {
        f.add(
          me(h) || "Component"
        ), ks.add(h.type);
      }), t0 = []), 0 < t.size) {
        var d = $(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = $(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = $(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = $(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = $(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = $(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var uv = /* @__PURE__ */ new Map(), F1 = /* @__PURE__ */ new Set();
    Ni.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & $a && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !F1.has(e.type) && (i = uv.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], uv.set(a, i)), i.push(e));
    }, Ni.flushLegacyContextWarning = function() {
      uv.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(me(o) || "Component"), F1.add(o.type);
          });
          var i = $(a);
          he(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, Ni.discardPendingWarnings = function() {
      Wp = [], Fp = [], Ip = [], Pp = [], e0 = [], t0 = [], uv = /* @__PURE__ */ new Map();
    };
    var I1 = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = xn;
        xn = !0;
        try {
          return e(t, a);
        } finally {
          xn = i;
        }
      }
    }, HS = I1.react_stack_bottom_frame.bind(I1), P1 = {
      react_stack_bottom_frame: function(e) {
        var t = xn;
        xn = !0;
        try {
          return e.render();
        } finally {
          xn = t;
        }
      }
    }, eb = P1.react_stack_bottom_frame.bind(P1), tb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Tt(e, e.return, a);
        }
      }
    }, NS = tb.react_stack_bottom_frame.bind(
      tb
    ), lb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Tt(e, e.return, f);
        }
      }
    }, ab = lb.react_stack_bottom_frame.bind(
      lb
    ), nb = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, QT = nb.react_stack_bottom_frame.bind(
      nb
    ), ub = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Tt(e, t, i);
        }
      }
    }, ib = ub.react_stack_bottom_frame.bind(
      ub
    ), cb = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, VT = cb.react_stack_bottom_frame.bind(cb), ob = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          Tt(e, t, i);
        }
      }
    }, ZT = ob.react_stack_bottom_frame.bind(ob), fb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, JT = fb.react_stack_bottom_frame.bind(fb), mm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), xS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), iv = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), cv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Ws = null, l0 = !1, ym = null, a0 = 0, Ie = null, BS, rb = BS = !1, sb = {}, db = {}, hb = {};
    ie = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = me(e), o = i || "null";
        if (!sb[o]) {
          sb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = me(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = me(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), he(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Fs = Qt(!0), mb = Qt(!1), yb = 0, pb = 1, gb = 2, jS = 3, Xf = !1, vb = !1, YS = null, qS = !1, pm = Ot(null), ov = Ot(0), lu = Ot(null), ti = null, gm = 1, n0 = 2, zl = Ot(0), fv = 0, li = 1, yn = 2, au = 4, pn = 8, vm, Sb = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set(), zo = 0, Xe = null, Zt = null, xl = null, rv = !1, Sm = !1, Is = !1, sv = 0, u0 = 0, Ro = null, KT = 0, $T = 25, q = null, ai = null, Mo = -1, i0 = !1, c0 = {
      readContext: Lt,
      use: qa,
      useCallback: il,
      useContext: il,
      useEffect: il,
      useImperativeHandle: il,
      useLayoutEffect: il,
      useInsertionEffect: il,
      useMemo: il,
      useReducer: il,
      useRef: il,
      useState: il,
      useDebugValue: il,
      useDeferredValue: il,
      useTransition: il,
      useSyncExternalStore: il,
      useId: il,
      useHostTransitionStatus: il,
      useFormState: il,
      useActionState: il,
      useOptimistic: il,
      useMemoCache: il,
      useCacheRefresh: il
    };
    c0.useEffectEvent = il;
    var GS = null, Tb = null, XS = null, Ab = null, Ec = null, xi = null, dv = null;
    GS = {
      readContext: function(e) {
        return Lt(e);
      },
      use: qa,
      useCallback: function(e, t) {
        return q = "useCallback", De(), Vc(t), Mu(e, t);
      },
      useContext: function(e) {
        return q = "useContext", De(), Lt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", De(), Vc(t), Xr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", De(), Vc(a), Qr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", De(), Vc(t), On(4, yn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", De(), Vc(t), Ga(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", De(), Vc(t);
        var a = G.H;
        G.H = Ec;
        try {
          return tl(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", De();
        var i = G.H;
        G.H = Ec;
        try {
          return wd(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", De(), Ld(e);
      },
      useState: function(e) {
        q = "useState", De();
        var t = G.H;
        G.H = Ec;
        try {
          return Jc(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", De();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", De(), Kn(e, t);
      },
      useTransition: function() {
        return q = "useTransition", De(), my();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", De(), Io(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", De(), Vd();
      },
      useFormState: function(e, t) {
        return q = "useFormState", De(), jd(), Ru(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", De(), Ru(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", De(), Po(e);
      },
      useHostTransitionStatus: bi,
      useMemoCache: mi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", De(), Zd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", De(), Lr(e);
      }
    }, Tb = {
      readContext: function(e) {
        return Lt(e);
      },
      use: qa,
      useCallback: function(e, t) {
        return q = "useCallback", I(), Mu(e, t);
      },
      useContext: function(e) {
        return q = "useContext", I(), Lt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", I(), Xr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", I(), Qr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", I(), On(4, yn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", I(), Ga(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", I();
        var a = G.H;
        G.H = Ec;
        try {
          return tl(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", I();
        var i = G.H;
        G.H = Ec;
        try {
          return wd(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", I(), Ld(e);
      },
      useState: function(e) {
        q = "useState", I();
        var t = G.H;
        G.H = Ec;
        try {
          return Jc(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", I(), Kn(e, t);
      },
      useTransition: function() {
        return q = "useTransition", I(), my();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", I(), Io(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", I(), Vd();
      },
      useActionState: function(e, t) {
        return q = "useActionState", I(), Ru(e, t);
      },
      useFormState: function(e, t) {
        return q = "useFormState", I(), jd(), Ru(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", I(), Po(e);
      },
      useHostTransitionStatus: bi,
      useMemoCache: mi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", I(), Zd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", I(), Lr(e);
      }
    }, XS = {
      readContext: function(e) {
        return Lt(e);
      },
      use: qa,
      useCallback: function(e, t) {
        return q = "useCallback", I(), ca(e, t);
      },
      useContext: function(e) {
        return q = "useContext", I(), Lt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", I(), Vl(2048, pn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", I(), Vr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", I(), Vl(4, yn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", I(), Vl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", I();
        var a = G.H;
        G.H = xi;
        try {
          return kc(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", I();
        var i = G.H;
        G.H = xi;
        try {
          return Jn(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", I(), Dt().memoizedState;
      },
      useState: function() {
        q = "useState", I();
        var e = G.H;
        G.H = xi;
        try {
          return Jn(wa);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", I(), Je(e, t);
      },
      useTransition: function() {
        return q = "useTransition", I(), ll();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", I(), Yr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", I(), Dt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", I(), jd(), tf(e);
      },
      useActionState: function(e) {
        return q = "useActionState", I(), tf(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", I(), ef(e, t);
      },
      useHostTransitionStatus: bi,
      useMemoCache: mi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", I(), Dt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", I(), ia(e);
      }
    }, Ab = {
      readContext: function(e) {
        return Lt(e);
      },
      use: qa,
      useCallback: function(e, t) {
        return q = "useCallback", I(), ca(e, t);
      },
      useContext: function(e) {
        return q = "useContext", I(), Lt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", I(), Vl(2048, pn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", I(), Vr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", I(), Vl(4, yn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", I(), Vl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", I();
        var a = G.H;
        G.H = dv;
        try {
          return kc(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", I();
        var i = G.H;
        G.H = dv;
        try {
          return lc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", I(), Dt().memoizedState;
      },
      useState: function() {
        q = "useState", I();
        var e = G.H;
        G.H = dv;
        try {
          return lc(wa);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", I();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", I(), Ut(e, t);
      },
      useTransition: function() {
        return q = "useTransition", I(), Qd();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", I(), Yr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", I(), Dt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", I(), jd(), ic(e);
      },
      useActionState: function(e) {
        return q = "useActionState", I(), ic(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", I(), sy(e, t);
      },
      useHostTransitionStatus: bi,
      useMemoCache: mi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", I(), Dt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", I(), ia(e);
      }
    }, Ec = {
      readContext: function(e) {
        return Q(), Lt(e);
      },
      use: function(e) {
        return X(), qa(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", X(), De(), Mu(e, t);
      },
      useContext: function(e) {
        return q = "useContext", X(), De(), Lt(e);
      },
      useEffect: function(e, t) {
        return q = "useEffect", X(), De(), Xr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", X(), De(), Qr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        q = "useInsertionEffect", X(), De(), On(4, yn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", X(), De(), Ga(e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", X(), De();
        var a = G.H;
        G.H = Ec;
        try {
          return tl(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", X(), De();
        var i = G.H;
        G.H = Ec;
        try {
          return wd(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function(e) {
        return q = "useRef", X(), De(), Ld(e);
      },
      useState: function(e) {
        q = "useState", X(), De();
        var t = G.H;
        G.H = Ec;
        try {
          return Jc(e);
        } finally {
          G.H = t;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", X(), De();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", X(), De(), Kn(e, t);
      },
      useTransition: function() {
        return q = "useTransition", X(), De(), my();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", X(), De(), Io(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", X(), De(), Vd();
      },
      useFormState: function(e, t) {
        return q = "useFormState", X(), De(), Ru(e, t);
      },
      useActionState: function(e, t) {
        return q = "useActionState", X(), De(), Ru(e, t);
      },
      useOptimistic: function(e) {
        return q = "useOptimistic", X(), De(), Po(e);
      },
      useMemoCache: function(e) {
        return X(), mi(e);
      },
      useHostTransitionStatus: bi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", De(), Zd();
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", X(), De(), Lr(e);
      }
    }, xi = {
      readContext: function(e) {
        return Q(), Lt(e);
      },
      use: function(e) {
        return X(), qa(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", X(), I(), ca(e, t);
      },
      useContext: function(e) {
        return q = "useContext", X(), I(), Lt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", X(), I(), Vl(2048, pn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", X(), I(), Vr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", X(), I(), Vl(4, yn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", X(), I(), Vl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", X(), I();
        var a = G.H;
        G.H = xi;
        try {
          return kc(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", X(), I();
        var i = G.H;
        G.H = xi;
        try {
          return Jn(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", X(), I(), Dt().memoizedState;
      },
      useState: function() {
        q = "useState", X(), I();
        var e = G.H;
        G.H = xi;
        try {
          return Jn(wa);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", X(), I();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", X(), I(), Je(e, t);
      },
      useTransition: function() {
        return q = "useTransition", X(), I(), ll();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", X(), I(), Yr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", X(), I(), Dt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", X(), I(), tf(e);
      },
      useActionState: function(e) {
        return q = "useActionState", X(), I(), tf(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", X(), I(), ef(e, t);
      },
      useMemoCache: function(e) {
        return X(), mi(e);
      },
      useHostTransitionStatus: bi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", I(), Dt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", X(), I(), ia(e);
      }
    }, dv = {
      readContext: function(e) {
        return Q(), Lt(e);
      },
      use: function(e) {
        return X(), qa(e);
      },
      useCallback: function(e, t) {
        return q = "useCallback", X(), I(), ca(e, t);
      },
      useContext: function(e) {
        return q = "useContext", X(), I(), Lt(e);
      },
      useEffect: function(e, t) {
        q = "useEffect", X(), I(), Vl(2048, pn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return q = "useImperativeHandle", X(), I(), Vr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return q = "useInsertionEffect", X(), I(), Vl(4, yn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return q = "useLayoutEffect", X(), I(), Vl(4, au, e, t);
      },
      useMemo: function(e, t) {
        q = "useMemo", X(), I();
        var a = G.H;
        G.H = xi;
        try {
          return kc(e, t);
        } finally {
          G.H = a;
        }
      },
      useReducer: function(e, t, a) {
        q = "useReducer", X(), I();
        var i = G.H;
        G.H = xi;
        try {
          return lc(e, t, a);
        } finally {
          G.H = i;
        }
      },
      useRef: function() {
        return q = "useRef", X(), I(), Dt().memoizedState;
      },
      useState: function() {
        q = "useState", X(), I();
        var e = G.H;
        G.H = xi;
        try {
          return lc(wa);
        } finally {
          G.H = e;
        }
      },
      useDebugValue: function() {
        q = "useDebugValue", X(), I();
      },
      useDeferredValue: function(e, t) {
        return q = "useDeferredValue", X(), I(), Ut(e, t);
      },
      useTransition: function() {
        return q = "useTransition", X(), I(), Qd();
      },
      useSyncExternalStore: function(e, t, a) {
        return q = "useSyncExternalStore", X(), I(), Yr(
          e,
          t,
          a
        );
      },
      useId: function() {
        return q = "useId", X(), I(), Dt().memoizedState;
      },
      useFormState: function(e) {
        return q = "useFormState", X(), I(), ic(e);
      },
      useActionState: function(e) {
        return q = "useActionState", X(), I(), ic(e);
      },
      useOptimistic: function(e, t) {
        return q = "useOptimistic", X(), I(), sy(e, t);
      },
      useMemoCache: function(e) {
        return X(), mi(e);
      },
      useHostTransitionStatus: bi,
      useCacheRefresh: function() {
        return q = "useCacheRefresh", I(), Dt().memoizedState;
      },
      useEffectEvent: function(e) {
        return q = "useEffectEvent", X(), I(), ia(e);
      }
    };
    var Ob = {}, _b = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), zb = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), xb = /* @__PURE__ */ new Set();
    Object.freeze(Ob);
    var LS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = $l(e), o = Ou(i);
        o.payload = t, a != null && (uf(a), o.callback = a), t = va(e, o, i), t !== null && (Xn(i, "this.setState()", e), al(t, e, i), Wo(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = $l(e), o = Ou(i);
        o.tag = pb, o.payload = t, a != null && (uf(a), o.callback = a), t = va(e, o, i), t !== null && (Xn(i, "this.replaceState()", e), al(t, e, i), Wo(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = $l(e), i = Ou(a);
        i.tag = gb, t != null && (uf(t), i.callback = t), t = va(e, i, a), t !== null && (Xn(a, "this.forceUpdate()", e), al(t, e, a), Wo(t, e, a));
      }
    }, bm = null, QS = null, VS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Bl = !1, Bb = {}, jb = {}, Yb = {}, qb = {}, Em = !1, wb = {}, hv = {}, ZS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Gb = !1, Xb = null;
    Xb = /* @__PURE__ */ new Set();
    var Co = !1, jl = !1, JS = !1, Lb = typeof WeakSet == "function" ? WeakSet : Set, ha = null, Tm = null, Am = null, Yl = null, Yn = !1, Bi = null, ea = !1, o0 = 8192, kT = {
      getCacheForType: function(e) {
        var t = Lt(Hl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return Lt(Hl).controller.signal;
      },
      getOwner: function() {
        return rn;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var f0 = Symbol.for;
      f0("selector.component"), f0("selector.has_pseudo_class"), f0("selector.role"), f0("selector.test_id"), f0("selector.text");
    }
    var WT = [], FT = typeof WeakMap == "function" ? WeakMap : Map, ma = 0, ta = 2, nu = 4, Uo = 0, r0 = 1, Ps = 2, mv = 3, Lf = 4, yv = 6, Qb = 5, Et = ma, Jt = null, lt = null, Pe = 0, qn = 0, pv = 1, ed = 2, s0 = 3, Vb = 4, KS = 5, d0 = 6, gv = 7, $S = 8, td = 9, wt = qn, uu = null, Qf = !1, Om = !1, kS = !1, Tc = 0, hl = Uo, Vf = 0, Zf = 0, WS = 0, wn = 0, ld = 0, h0 = null, gn = null, vv = !1, Sv = 0, Zb = 0, Jb = 300, bv = 1 / 0, Kb = 500, m0 = null, El = null, Jf = null, Ev = 0, FS = 1, IS = 2, $b = 3, Kf = 0, kb = 1, Wb = 2, Fb = 3, Ib = 4, Tv = 5, ql = 0, $f = null, _m = null, ji = 0, PS = 0, e1 = -0, t1 = null, Pb = null, eE = null, Yi = Ev, tE = null, IT = 50, y0 = 0, l1 = null, a1 = !1, Av = !1, PT = 50, ad = 0, p0 = null, Dm = !1, Ov = null, lE = !1, aE = /* @__PURE__ */ new Set(), eA = {}, _v = null, zm = null, n1 = !1, u1 = !1, Dv = !1, i1 = !1, kf = 0, c1 = {};
    (function() {
      for (var e = 0; e < vS.length; e++) {
        var t = vS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), En(a, "on" + t);
      }
      En(N1, "onAnimationEnd"), En(x1, "onAnimationIteration"), En(B1, "onAnimationStart"), En("dblclick", "onDoubleClick"), En("focusin", "onFocus"), En("focusout", "onBlur"), En(MT, "onTransitionRun"), En(CT, "onTransitionStart"), En(UT, "onTransitionCancel"), En(j1, "onTransitionEnd");
    })(), Qe("onMouseEnter", ["mouseout", "mouseover"]), Qe("onMouseLeave", ["mouseout", "mouseover"]), Qe("onPointerEnter", ["pointerout", "pointerover"]), Qe("onPointerLeave", ["pointerout", "pointerover"]), dt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), dt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), dt("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), dt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), dt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), dt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var g0 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), o1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(g0)
    ), zv = "_reactListening" + Math.random().toString(36).slice(2), nE = !1, uE = !1, Rv = !1, iE = !1, Mv = !1, Cv = !1, cE = !1, Uv = {}, tA = /\r\n?/g, lA = /\u0000|\uFFFD/g, nd = "http://www.w3.org/1999/xlink", f1 = "http://www.w3.org/XML/1998/namespace", aA = "javascript:throw new Error('React form unexpectedly submitted.')", nA = "suppressHydrationWarning", ud = "&", Hv = "/&", v0 = "$", S0 = "/$", Wf = "$?", id = "$~", Rm = "$!", uA = "html", iA = "body", cA = "head", r1 = "F!", oE = "F", fE = "loading", oA = "style", Ho = 0, Mm = 1, Nv = 2, s1 = null, d1 = null, rE = { dialog: !0, webview: !0 }, h1 = null, b0 = void 0, sE = typeof setTimeout == "function" ? setTimeout : void 0, fA = typeof clearTimeout == "function" ? clearTimeout : void 0, cd = -1, dE = typeof Promise == "function" ? Promise : void 0, rA = typeof queueMicrotask == "function" ? queueMicrotask : typeof dE < "u" ? function(e) {
      return dE.resolve(null).then(e).catch(pg);
    } : sE, m1 = null, od = 0, E0 = 1, hE = 2, mE = 3, ni = 4, ui = /* @__PURE__ */ new Map(), yE = /* @__PURE__ */ new Set(), No = Rt.d;
    Rt.d = {
      f: function() {
        var e = No.f(), t = no();
        return e || t;
      },
      r: function(e) {
        var t = le(e);
        t !== null && t.tag === 5 && t.type === "form" ? Wc(t) : No.r(e);
      },
      D: function(e) {
        No.D(e), rp("dns-prefetch", e, null);
      },
      C: function(e, t) {
        No.C(e, t), rp("preconnect", e, t);
      },
      L: function(e, t, a) {
        No.L(e, t, a);
        var i = Cm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Kt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Kt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Kt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Kt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = bf(e);
              break;
            case "script":
              f = Ef(e);
          }
          ui.has(f) || (e = ke(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), ui.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            so(f)
          ) || t === "script" && i.querySelector(ho(f)) || (t = i.createElement("link"), ht(t, "link", e), be(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        No.m(e, t);
        var a = Cm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Kt(i) + '"][href="' + Kt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Ef(e);
          }
          if (!ui.has(f) && (e = ke({ rel: "modulepreload", href: e }, t), ui.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(ho(f)))
                  return;
            }
            i = a.createElement("link"), ht(i, "link", e), be(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        No.X(e, t);
        var a = Cm;
        if (a && e) {
          var i = Ge(a).hoistableScripts, o = Ef(e), f = i.get(o);
          f || (f = a.querySelector(
            ho(o)
          ), f || (e = ke({ src: e, async: !0 }, t), (t = ui.get(o)) && mo(e, t), f = a.createElement("script"), be(f), ht(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        No.S(e, t, a);
        var i = Cm;
        if (i && e) {
          var o = Ge(i).hoistableStyles, f = bf(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: od, preload: null };
            if (d = i.querySelector(
              so(f)
            ))
              h.loading = E0 | ni;
            else {
              e = ke(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = ui.get(f)) && hp(e, a);
              var y = d = i.createElement("link");
              be(y), ht(y, "link", e), y._p = new Promise(function(p, D) {
                y.onload = p, y.onerror = D;
              }), y.addEventListener("load", function() {
                h.loading |= E0;
              }), y.addEventListener("error", function() {
                h.loading |= hE;
              }), h.loading |= ni, Mh(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        No.M(e, t);
        var a = Cm;
        if (a && e) {
          var i = Ge(a).hoistableScripts, o = Ef(e), f = i.get(o);
          f || (f = a.querySelector(
            ho(o)
          ), f || (e = ke({ src: e, async: !0, type: "module" }, t), (t = ui.get(o)) && mo(e, t), f = a.createElement("script"), be(f), ht(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Cm = typeof document > "u" ? null : document, xv = null, sA = 6e4, dA = 800, hA = 500, y1 = 0, p1 = null, Bv = null, fd = uS, T0 = {
      $$typeof: In,
      Provider: null,
      Consumer: null,
      _currentValue: fd,
      _currentValue2: fd,
      _threadCount: 0
    }, pE = "%c%s%c", gE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", vE = "", jv = " ", mA = Function.prototype.bind, SE = !1, bE = null, EE = null, TE = null, AE = null, OE = null, _E = null, DE = null, zE = null, RE = null, ME = null;
    bE = function(e, t, a, i) {
      t = K(e, t), t !== null && (a = ce(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = Ql(e, 2), a !== null && al(a, e, 2));
    }, EE = function(e, t, a) {
      t = K(e, t), t !== null && (a = re(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = Ql(e, 2), a !== null && al(a, e, 2));
    }, TE = function(e, t, a, i) {
      t = K(e, t), t !== null && (a = M(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = ke({}, e.memoizedProps), a = Ql(e, 2), a !== null && al(a, e, 2));
    }, AE = function(e, t, a) {
      e.pendingProps = ce(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ql(e, 2), t !== null && al(t, e, 2);
    }, OE = function(e, t) {
      e.pendingProps = re(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ql(e, 2), t !== null && al(t, e, 2);
    }, _E = function(e, t, a) {
      e.pendingProps = M(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Ql(e, 2), t !== null && al(t, e, 2);
    }, DE = function(e) {
      var t = Ql(e, 2);
      t !== null && al(t, e, 2);
    }, zE = function(e) {
      var t = jo(), a = Ql(e, t);
      a !== null && al(a, e, t);
    }, RE = function(e) {
      Ne = e;
    }, ME = function(e) {
      Se = e;
    };
    var Yv = !0, qv = null, g1 = !1, Ff = null, If = null, Pf = null, A0 = /* @__PURE__ */ new Map(), O0 = /* @__PURE__ */ new Map(), er = [], yA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), wv = null;
    if (Cs.prototype.render = Vu.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Ce(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = $l(i);
      gp(i, o, a, t, null, null);
    }, Cs.prototype.unmount = Vu.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (Et & (ta | nu)) !== ma && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), gp(e.current, 2, null, e, null, null), no(), t[jn] = null;
      }
    }, Cs.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Li();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < er.length && t !== 0 && t < er[a].priority; a++) ;
        er.splice(a, 0, e), a === 0 && jh(e);
      }
    }, (function() {
      var e = Ap.version;
      if (e !== "19.2.4")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.4
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Rt.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = xe(t), e = e !== null ? ye(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.4",
        rendererPackageName: "react-dom",
        currentDispatcherRef: G,
        reconcilerVersion: "19.2.4"
      };
      return e.overrideHookState = bE, e.overrideHookStateDeletePath = EE, e.overrideHookStateRenamePath = TE, e.overrideProps = AE, e.overridePropsDeletePath = OE, e.overridePropsRenamePath = _E, e.scheduleUpdate = DE, e.scheduleRetry = zE, e.setErrorHandler = RE, e.setSuspenseHandler = ME, e.scheduleRefresh = je, e.scheduleRoot = ue, e.setRefreshHandler = Bt, e.getCurrentFiber = Sp, tr(e);
    })() && vc && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var CE = window.location.protocol;
      /^(https?|file):$/.test(CE) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (CE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    R0.createRoot = function(e, t) {
      if (!Ce(e))
        throw Error("Target container is not a DOM element.");
      Tp(e);
      var a = !1, i = "", o = Kd, f = py, d = gy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Hn && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Cg(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        Bg
      ), e[jn] = t.current, ys(e), new Vu(t);
    }, R0.hydrateRoot = function(e, t, a) {
      if (!Ce(e))
        throw Error("Target container is not a DOM element.");
      Tp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Kd, d = py, h = gy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Cg(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        Bg
      ), t.context = pp(null), a = t.current, i = $l(a), i = gl(i), o = Ou(i), o.callback = null, va(a, o, i), Xn(i, "hydrateRoot()", null), a = i, t.current.lanes = a, Xi(t, a), Aa(t), e[jn] = t.current, ys(e), new Cs(t);
    }, R0.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), R0;
}
var ZE;
function RA() {
  if (ZE) return Lv.exports;
  ZE = 1;
  var W = {};
  function K() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (W.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K);
      } catch (ce) {
        console.error(ce);
      }
    }
  }
  return W.NODE_ENV === "production" ? (K(), Lv.exports = DA()) : Lv.exports = zA(), Lv.exports;
}
var MA = RA(), wl = Um();
const CA = "/api/dashboard";
async function UA(W, K, ce) {
  const M = new URLSearchParams();
  W.length && M.set("metrics", W.join(",")), K?.repository && M.set("repository", K.repository), K?.date && M.set("date", K.date);
  let se = CA;
  if (ce !== void 0) {
    if (!ce)
      return [];
    se = ce.replace("/chat", "/dashboard");
  }
  try {
    const re = await fetch(`${se}?${M.toString()}`, {
      headers: {
        "x-llmq-sdk-token": "LLMQ_ACCESS_GRANTED"
      }
    });
    if (!re.ok)
      throw new Error(`Data Fetch Failed: ${re.status} ${re.statusText}`);
    return await re.json();
  } catch (re) {
    throw console.error("Data Fetch Error:", re), re;
  }
}
class HA {
  config;
  constructor(K = {}) {
    this.config = K;
  }
  setConfig(K) {
    this.config = { ...this.config, ...K };
  }
  /**
   * Parse the URL query string into Chart Specifications
   * @param searchParams URLSearchParams object or query string
   */
  parse(K) {
    const M = new URLSearchParams(K).get("c");
    if (!M) return [];
    try {
      return JSON.parse(M);
    } catch (se) {
      return console.error("UCO SDK: Failed to parse chart spec", se), [];
    }
  }
  /**
   * Fetch data for all charts, handling global and independent filters
   * @param specs Array of Chart Specs
   * @param globalFilters Filters applied to ALL charts (e.g. from URL ?filter=...)
   */
  async fetchAll(K, ce = {}) {
    const M = { ...this.config.defaultFilters, ...ce }, se = {}, re = {}, Se = [];
    for (const Ne of K) {
      const X = { ...M, ...Ne.f || {} };
      for (const Q of Ne.m) {
        const Ye = JSON.stringify(X), ie = `${Q}::${Ye}`;
        if (!se[ie] && !re[ie]) {
          const $ = UA([Q], X, this.config.endpoint).then((H) => {
            H && H.length > 0 ? se[ie] = H[0].values : se[ie] = [];
          }).catch((H) => {
            console.error(`Failed to fetch ${Q}:`, H), re[ie] = "Failed to load data", se[ie] = [];
          });
          Se.push($);
        }
      }
    }
    return await Promise.all(Se), { data: se, errors: re };
  }
  /**
   * Helper to reconstruct data for a specific spec from the raw result map
   */
  getDataForSpec(K, ce, M = {}) {
    const re = { ...{ ...this.config.defaultFilters, ...M }, ...K.f || {} }, Se = JSON.stringify(re);
    return K.m.map((Ne) => ({
      name: Ne,
      values: ce[`${Ne}::${Se}`] || []
    }));
  }
  /**
   * Helper to check if a specific spec has errors
   */
  getErrorForSpec(K, ce, M = {}) {
    const re = { ...{ ...this.config.defaultFilters, ...M }, ...K.f || {} }, Se = JSON.stringify(re);
    for (const Ne of K.m) {
      const X = `${Ne}::${Se}`;
      if (ce[X]) return ce[X];
    }
    return null;
  }
  /**
   * Get available Global Filters for the UI to render
   */
  getAvailableFilters() {
    return [
      {
        key: "repository",
        label: "Repository",
        type: "select",
        options: [
          { value: "", label: "All Repositories" },
          { value: "frontend-ui", label: "Frontend UI" },
          { value: "backend-api", label: "Backend API" },
          { value: "auth-service", label: "Auth Service" }
        ]
      },
      {
        key: "date",
        label: "Date Range",
        type: "select",
        options: [
          { value: "30d", label: "Last 30 Days" },
          { value: "7d", label: "Last 7 Days" }
        ]
      }
    ];
  }
}
const JE = (W, K) => {
  if (!W) return { data: { columns: [] } };
  const ce = K.filter((se) => W.m.includes(se.name)).map((se) => [se.name, ...se.values]), M = W.s ? [W.m] : [];
  return {
    data: {
      columns: ce,
      type: W.t === "area" ? "area-spline" : W.t,
      // Map 'area' to billboard specific type if needed
      groups: M
    },
    title: {
      text: W.ti || ""
    },
    // Default configs
    axis: {
      x: {
        type: "category",
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
      }
    },
    grid: {
      y: {
        show: !0
      }
    },
    legend: {
      show: !0
    }
  };
}, NA = ({
  id: W,
  spec: K,
  data: ce
}) => {
  const M = wl.useRef(null), se = wl.useRef(null);
  wl.useEffect(() => {
    const Se = window.bb;
    if (!Se || !se.current) return;
    if (M.current) {
      try {
        M.current.destroy();
      } catch {
      }
      M.current = null;
    }
    const Ne = JE(K, ce);
    return M.current = Se.generate({
      ...Ne,
      bindto: se.current,
      data: {
        ...Ne.data,
        columns: Ne.data?.columns || [],
        type: Ne.data?.type || "line"
      }
    }), () => {
      if (M.current) {
        try {
          M.current.destroy();
        } catch {
        }
        M.current = null;
      }
    };
  }, []);
  const re = wl.useRef(!0);
  return wl.useEffect(() => {
    if (re.current) {
      re.current = !1;
      return;
    }
    if (!M.current) return;
    const Se = JE(K, ce);
    Se.data && M.current.load({
      columns: Se.data.columns,
      type: Se.data.type,
      groups: Se.data.groups,
      unload: !0
    });
  }, [K, ce]), /* @__PURE__ */ st.jsx("div", { style: { minHeight: "300px", position: "relative" }, children: /* @__PURE__ */ st.jsx("div", { ref: se, style: { width: "100%", minHeight: "300px" } }) });
};
async function xA(W, K) {
  try {
    const ce = await fetch(W.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-llmq-sdk-token": "LLMQ_ACCESS_GRANTED"
        // "Encrypted" access token
      },
      body: JSON.stringify({ messages: K })
    });
    if (!ce.ok) {
      const se = await ce.text();
      throw new Error(`Proxy Error: ${ce.status} - ${se}`);
    }
    return (await ce.json()).choices[0].message.content;
  } catch (ce) {
    throw console.error("Chat Proxy Request Failed:", ce), ce;
  }
  throw new Error("Configuration Error: Missing API Key or Endpoint");
}
const BA = ({ onClose: W, contextData: K, onUpdateDashboard: ce, apiKey: M, apiEndpoint: se }) => {
  const [re, Se] = wl.useState(""), Ne = se || "/api/chat", X = "", [Q, Ye] = wl.useState(!1), [ie, $] = wl.useState(!1), [H, ue] = wl.useState([
    { role: "assistant", content: "Hello! I have access to the dashboard metrics. Ask me about the PR velocity, SLA status, or contributors." }
  ]), je = wl.useRef(null);
  wl.useEffect(() => {
    je.current && (je.current.scrollTop = je.current.scrollHeight);
  }, [H]);
  const Bt = async () => {
    if (!re.trim() || ie) return;
    const Ce = re;
    Se(""), $(!0);
    const Ve = [...H, { role: "user", content: Ce }];
    ue(Ve);
    try {
      const gt = `
You are an expert Data Analyst Assistant for a Git Role-Based Management Dashboard.
Current Configuration & Data:
- KPIs: ${JSON.stringify(K.kpiData)}
- Global Filters: ${JSON.stringify(K.globalFilters)}
- Active Charts: ${K.specs.map((Te) => Te.ti || Te.m.join(", ")).join("; ")}

Current Data Access:
I have simulated access to the underlying Git metrics database.
If asked about specific numbers not in the summary, assume logical extrapolations based on the summary provided.

Rules:
- Be concise and professional.
- Refer to the specific metrics provided above.
- If the user asks for actionable insights, provide them based on the SLA comliance and Review Cycles.

Capabilities:
- You can CONTROL the dashboard view. If the user asks to see specific charts, focus on a metric, or filter by a repository/date, you must output a JSON command block.
- Format:
:::VIEW_UPDATE
{
  "specs": [ ...array of chart specs... ],
  "filters": { "repository": "backend-api", "date": "7d" }
}
:::
- Use 'specs' to change the displayed charts. A spec has { t: 'bar'|'line', m: ['metric_name'], ti: 'Title' }.
  - Available metrics: prs_opened, prs_merged, time_to_merge, active_contributors, bugs_reported, bugs_fixed, health_score, review_cycles, sla_compliance, code_coverage, api_latency_ms.
- Use 'filters' to set global filters.
  - repository options: 'frontend-ui', 'backend-api', 'auth-service', '' (for all).
  - date options: '7d', '30d'.
- ONLY output the JSON block if the user explicitly asks to change the view or if your insight requires visualizing specific data.
- IMPORTANT: When updating the view, ALWAYS include a small sample of the relevant data values in your text response (e.g., "Review cycles have dropped from 1.5 to 0.85..."). Can be a small markdown table or bullet points.
            `.trim(), Ct = Ve.filter((Te, Gt) => !(Gt === 0 && Te.role === "assistant")), vt = [
        { role: "system", content: gt },
        ...Ct.map((Te) => ({ role: Te.role, content: Te.content }))
      ], xe = await xA({ apiKey: X, endpoint: Ne }, vt), ye = xe.match(/:::VIEW_UPDATE\s*(\{.*?\})\s*:::/s);
      let at = xe;
      if (ye)
        try {
          const Te = JSON.parse(ye[1]);
          console.log("AI Requested View Update:", Te), ce && ce(Te), at = xe.replace(ye[0], "").trim();
        } catch (Te) {
          console.error("Failed to parse AI View Update:", Te);
        }
      ue((Te) => [...Te, { role: "assistant", content: at }]);
    } catch (gt) {
      console.error(gt), ue((Ct) => [...Ct, { role: "assistant", content: "Sorry, I encountered an error. Please check your configuration." }]);
    } finally {
      $(!1);
    }
  };
  return Q ? (Ye(!1), null) : /* @__PURE__ */ st.jsxs("div", { style: {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    width: "350px",
    height: "500px",
    background: "white",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid #e2e8f0",
    zIndex: 100
  }, children: [
    /* @__PURE__ */ st.jsxs("div", { style: { padding: "1rem", background: "#eff6ff", borderBottom: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
      /* @__PURE__ */ st.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
        /* @__PURE__ */ st.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" } }),
        /* @__PURE__ */ st.jsx("span", { style: { fontWeight: "600", color: "#1e293b" }, children: "Analytics Assistant" })
      ] }),
      /* @__PURE__ */ st.jsxs("div", { style: { display: "flex", gap: "0.5rem" }, children: [
        /* @__PURE__ */ st.jsx("button", { onClick: () => Ye(!0), style: { border: "none", background: "transparent", cursor: "pointer", fontSize: "0.8rem", color: "#64748b" }, children: "⚙️" }),
        /* @__PURE__ */ st.jsx("button", { onClick: W, style: { border: "none", background: "transparent", cursor: "pointer", fontSize: "1.25rem", color: "#64748b" }, children: "×" })
      ] })
    ] }),
    /* @__PURE__ */ st.jsxs("div", { ref: je, style: { flex: 1, padding: "1rem", overflowY: "auto", display: "flex", flexDirection: "column", gap: "1rem" }, children: [
      H.map((Ce, Ve) => /* @__PURE__ */ st.jsx("div", { style: {
        alignSelf: Ce.role === "user" ? "flex-end" : "flex-start",
        maxWidth: "85%",
        padding: "0.75rem 1rem",
        borderRadius: "12px",
        fontSize: "0.875rem",
        lineHeight: "1.4",
        background: Ce.role === "user" ? "#3b82f6" : "#f1f5f9",
        color: Ce.role === "user" ? "white" : "#334155",
        borderBottomRightRadius: Ce.role === "user" ? "2px" : "12px",
        borderBottomLeftRadius: Ce.role === "assistant" ? "2px" : "12px",
        whiteSpace: "pre-wrap"
      }, children: Ce.content }, Ve)),
      ie && /* @__PURE__ */ st.jsx("div", { style: { alignSelf: "flex-start", color: "#94a3b8", fontSize: "0.8rem", marginLeft: "1rem" }, children: "Thinking..." })
    ] }),
    /* @__PURE__ */ st.jsx("div", { style: { padding: "1rem", borderTop: "1px solid #e2e8f0" }, children: /* @__PURE__ */ st.jsxs("div", { style: { display: "flex", gap: "0.5rem" }, children: [
      /* @__PURE__ */ st.jsx(
        "input",
        {
          type: "text",
          value: re,
          onChange: (Ce) => Se(Ce.target.value),
          onKeyDown: (Ce) => Ce.key === "Enter" && Bt(),
          placeholder: "Ask about your metrics...",
          disabled: ie,
          style: {
            flex: 1,
            padding: "0.5rem 0.75rem",
            borderRadius: "8px",
            border: "1px solid #cbd5e1",
            outline: "none",
            fontSize: "0.875rem"
          }
        }
      ),
      /* @__PURE__ */ st.jsx("button", { onClick: Bt, disabled: ie, style: {
        background: ie ? "#94a3b8" : "#3b82f6",
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "0 1rem",
        cursor: "pointer",
        fontWeight: "600"
      }, children: "Send" })
    ] }) })
  ] });
}, jA = ({ initialSpecs: W = [], initialFilters: K = {}, apiKey: ce, apiEndpoint: M, contextData: se = {} }) => {
  const [re, Se] = wl.useState(W), [Ne, X] = wl.useState(K), [Q, Ye] = wl.useState({}), [ie, $] = wl.useState({}), [H, ue] = wl.useState(!1), [je, Bt] = wl.useState(!0), Ve = wl.useRef(new HA({ endpoint: M })).current;
  wl.useEffect(() => {
    Ve.setConfig({ endpoint: M });
  }, [M]), wl.useEffect(() => {
    (async () => {
      ue(!0);
      try {
        let ye = re;
        ye.length === 0 && (ye = [
          { t: "bar", m: ["prs_opened", "prs_merged"], ti: "PR Velocity" },
          { t: "area", m: ["time_to_merge"], ti: "Time to Merge (Avg Days)" },
          { t: "line", m: ["active_contributors"], ti: "Active Contributors" },
          { t: "bar", m: ["bugs_reported", "bugs_fixed"], ti: "Quality: Bugs" }
        ], Se(ye));
        const { data: at, errors: Te } = await Ve.fetchAll(ye, Ne);
        Ye(at), $(Te);
      } catch (ye) {
        console.error("Dashboard failed to load:", ye);
      } finally {
        ue(!1);
      }
    })();
  }, [re, Ne]);
  const gt = (xe) => {
    xe.specs && Se(xe.specs), xe.filters && X((ye) => ({ ...ye, ...xe.filters }));
  }, Ct = (xe, ye) => {
    X((at) => {
      const Te = { ...at };
      return ye ? Te[xe] = ye : delete Te[xe], Te;
    });
  }, vt = {
    // ... Copying mostly from Home.tsx but scoping to the dashboard container
    container: {
      fontFamily: "'Inter', sans-serif",
      color: "#0f172a",
      background: "#f8fafc",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "1.5rem",
      boxSizing: "border-box"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "2rem"
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#0f172a"
    },
    controls: {
      display: "flex",
      gap: "1rem",
      alignItems: "center"
    },
    chartsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1.5rem",
      marginBottom: "2rem"
    },
    chartCard: {
      background: "white",
      borderRadius: "12px",
      padding: "1.5rem",
      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      border: "1px solid #e2e8f0",
      minHeight: "400px"
    },
    select: {
      padding: "0.5rem 1rem",
      borderRadius: "6px",
      border: "1px solid #cbd5e1",
      background: "white",
      color: "#334155",
      fontSize: "0.875rem",
      cursor: "pointer",
      outline: "none"
    },
    fab: {
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      background: "#3b82f6",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.4)",
      cursor: "pointer",
      border: "none",
      zIndex: 9e3
      // High z-index for widget
    }
  };
  return /* @__PURE__ */ st.jsxs("div", { style: vt.container, children: [
    /* @__PURE__ */ st.jsxs("header", { style: vt.header, children: [
      /* @__PURE__ */ st.jsxs("div", { children: [
        /* @__PURE__ */ st.jsx("h2", { style: vt.title, children: "Git Metrics Dashboard" }),
        /* @__PURE__ */ st.jsx("p", { style: { color: "#64748b", fontSize: "0.875rem" }, children: "Powered by Dashboard SDK" })
      ] }),
      /* @__PURE__ */ st.jsxs("div", { style: vt.controls, children: [
        H && /* @__PURE__ */ st.jsx("span", { style: { fontSize: "0.8rem", color: "#3b82f6" }, children: "Loading..." }),
        Ve.getAvailableFilters().map((xe) => /* @__PURE__ */ st.jsx(
          "select",
          {
            style: vt.select,
            value: Ne[xe.key] || "",
            onChange: (ye) => Ct(xe.key, ye.target.value),
            children: xe.options.map((ye) => /* @__PURE__ */ st.jsx("option", { value: ye.value, children: ye.label }, ye.value))
          },
          xe.key
        ))
      ] })
    ] }),
    /* @__PURE__ */ st.jsx("div", { style: vt.chartsGrid, children: re.map((xe, ye) => {
      const at = Ve.getDataForSpec(xe, Q, Ne), Te = Ve.getErrorForSpec(xe, ie, Ne);
      return /* @__PURE__ */ st.jsxs("div", { style: vt.chartCard, children: [
        /* @__PURE__ */ st.jsx("h3", { style: { fontWeight: "600", fontSize: "1.125rem", marginBottom: "1rem" }, children: xe.ti }),
        Te ? /* @__PURE__ */ st.jsxs("div", { style: {
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ef4444",
          background: "#fef2f2",
          borderRadius: "8px",
          flexDirection: "column",
          gap: "0.5rem"
        }, children: [
          /* @__PURE__ */ st.jsx("span", { style: { fontSize: "1.5rem" }, children: "⚠️" }),
          /* @__PURE__ */ st.jsx("span", { children: "Failed to load data" }),
          /* @__PURE__ */ st.jsx("span", { style: { fontSize: "0.75rem", opacity: 0.8 }, children: "Check API Endpoint" })
        ] }) : /* @__PURE__ */ st.jsx(NA, { id: `embed-chart-${ye}`, spec: xe, data: at })
      ] }, ye);
    }) }),
    /* @__PURE__ */ st.jsx("button", { onClick: () => Bt(!0), style: vt.fab, children: "💬" }),
    je && /* @__PURE__ */ st.jsx("div", { style: { position: "fixed", bottom: 0, right: 0, zIndex: 9001 }, children: /* @__PURE__ */ st.jsx(
      BA,
      {
        onClose: () => Bt(!1),
        contextData: { ...se, specs: re, globalFilters: Ne },
        onUpdateDashboard: gt,
        apiKey: ce,
        apiEndpoint: M
      }
    ) })
  ] });
};
window.renderDashboard = (W, K = {}) => {
  const ce = document.getElementById(W);
  if (!ce) {
    console.error(`Dashboard SDK: Element with id '${W}' not found.`);
    return;
  }
  MA.createRoot(ce).render(/* @__PURE__ */ st.jsx(jA, { initialSpecs: K.specs, initialFilters: K.filters, apiKey: K.apiKey, apiEndpoint: K.apiEndpoint, contextData: K.contextData }));
};
console.log("Dashboard SDK Loaded. Use window.renderDashboard(elementId, config) to initialize.");
