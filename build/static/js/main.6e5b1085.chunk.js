(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    201: function (e, t, r) {
      e.exports = r(215);
    },
    208: function (e, t, r) {},
    214: function (e, t, r) {},
    215: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        a = r.n(n),
        o = r(185),
        i = r(77),
        c = r(16),
        l = r(34),
        s = r(220),
        u = r(221),
        m = r(233),
        d = r(230),
        f = r(198),
        h = r(62),
        p = r(234),
        v = r(235),
        g = r(236),
        y = r(229);
      r(208);
      function E() {
        E = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function s(e, t, r, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, "_invoke", { value: _(e, r, c) }), i;
        }
        function u(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        e.wrap = s;
        var m = {};
        function d() {}
        function f() {}
        function h() {}
        var p = {};
        l(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(I([])));
        g && g !== t && r.call(g, o) && (p = g);
        var y = (h.prototype = d.prototype = Object.create(p));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = u(e[a], e, o);
                    if ("throw" !== l.type) {
                      var s = l.arg,
                        m = s.value;
                      return m && "object" == typeof m && r.call(m, "__await")
                        ? t.resolve(m.__await).then(
                            function (e) {
                              n("next", e, i, c);
                            },
                            function (e) {
                              n("throw", e, i, c);
                            },
                          )
                        : t.resolve(m).then(
                            function (e) {
                              (s.value = e), i(s);
                            },
                            function (e) {
                              return n("throw", e, i, c);
                            },
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function _(e, t, r) {
          var n = "suspendedStart";
          return function (a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = x(i, r);
                if (c) {
                  if (c === m) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = u(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === m)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function x(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var a = u(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), m
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                m)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              m);
        }
        function L(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(L, this),
            this.reset(!0);
        }
        function I(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          n(y, "constructor", { value: h, configurable: !0 }),
          n(h, "constructor", { value: f, configurable: !0 }),
          (f.displayName = l(h, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(w.prototype),
          l(w.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new w(s(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          b(y),
          l(y, c, "Generator"),
          l(y, o, function () {
            return this;
          }),
          l(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = I),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: I(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          e
        );
      }
      var b = function () {
          var e = (function () {
            var e = Object(l.a)(
              E().mark(function e(t) {
                var r, n, o, i, c, l;
                return E().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.email),
                            (n = t.password),
                            ((o = {}).correo_admin = r),
                            (o.contrasena_admin = n),
                            (e.prev = 4),
                            (e.next = 7),
                            y.a.post("http://137.184.7.251:3002/loginauth", o)
                          );
                        case 7:
                          if (!(i = e.sent).data) {
                            e.next = 17;
                            break;
                          }
                          return (
                            (e.next = 11),
                            y.a.post("http://137.184.7.251:3002/login", i.data)
                          );
                        case 11:
                          (c = e.sent),
                            (l = c.data),
                            localStorage.setItem("token", l.access_token),
                            (window.location.href = "/user"),
                            (e.next = 18);
                          break;
                        case 17:
                          m.a.success({
                            message: "Crecenciales incorrectas",
                            description: "Intente nuevamente",
                            icon: a.a.createElement(p.a, {
                              style: { color: "#ED6019" },
                            }),
                          });
                        case 18:
                          e.next = 23;
                          break;
                        case 20:
                          (e.prev = 20),
                            (e.t0 = e.catch(4)),
                            m.a.success({
                              message: "Sistema en mantenimiento",
                              description:
                                "Contacte con los administradores del servidor",
                              icon: a.a.createElement(p.a, {
                                style: { color: "#ED6019" },
                              }),
                            });
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[4, 20]],
                );
              }),
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return a.a.createElement(
            "div",
            { className: "sign-page" },
            a.a.createElement(s.a, { className: "sign-r1" }),
            a.a.createElement(
              s.a,
              { className: "sign-container" },
              a.a.createElement(u.a, { span: 2 }, " "),
              a.a.createElement(u.a, { span: 10, className: "sign-image-box" }),
              a.a.createElement(
                u.a,
                { span: 10, className: "sign-in-form" },
                a.a.createElement(
                  d.a,
                  {
                    name: "basic",
                    labelCol: { span: 16 },
                    wrapperCol: { span: 16 },
                    style: { maxWidth: 800 },
                    initialValues: { remember: !0 },
                    onFinish: e,
                    onFinishFailed: function (e) {
                      console.log("Failed:", e);
                    },
                    autoComplete: "off",
                    className: "only-form",
                  },
                  a.a.createElement(
                    d.a.Item,
                    {
                      name: "email",
                      rules: [
                        {
                          required: !0,
                          message: "Por favor ingrese su email!",
                        },
                        { type: "email", message: "Ingrese un correo valido" },
                      ],
                    },
                    a.a.createElement(f.a, {
                      prefix: a.a.createElement(v.a, {
                        className: "site-form-item-icon",
                      }),
                      placeholder: "Correo",
                    }),
                  ),
                  a.a.createElement(
                    d.a.Item,
                    {
                      name: "password",
                      rules: [
                        {
                          required: !1,
                          message: "Por favor ingrese su contrase\xf1a!",
                        },
                      ],
                    },
                    a.a.createElement(f.a.Password, {
                      prefix: a.a.createElement(g.a, {
                        className: "site-form-item-icon",
                      }),
                      placeholder: "Contrase\xf1a",
                    }),
                  ),
                  a.a.createElement(
                    d.a.Item,
                    null,
                    a.a.createElement(
                      h.a,
                      { type: "primary", htmlType: "submit" },
                      "Ingresar",
                    ),
                  ),
                ),
              ),
              a.a.createElement(u.a, { span: 2 }, " "),
            ),
            a.a.createElement(s.a, { className: "sign-r2" }),
          );
        },
        w = r(7),
        _ = "http://137.184.7.251:3001/api_db",
        x = r(237);
      function L() {
        L = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (k) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function s(e, t, r, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            c = new j(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function u(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (k) {
            return { type: "throw", arg: k };
          }
        }
        e.wrap = s;
        var m = {};
        function d() {}
        function f() {}
        function h() {}
        var p = {};
        l(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(I([])));
        g && g !== t && r.call(g, o) && (p = g);
        var y = (h.prototype = d.prototype = Object.create(p));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = u(e[a], e, o);
                    if ("throw" !== l.type) {
                      var s = l.arg,
                        m = s.value;
                      return m && "object" == typeof m && r.call(m, "__await")
                        ? t.resolve(m.__await).then(
                            function (e) {
                              n("next", e, i, c);
                            },
                            function (e) {
                              n("throw", e, i, c);
                            },
                          )
                        : t.resolve(m).then(
                            function (e) {
                              (s.value = e), i(s);
                            },
                            function (e) {
                              return n("throw", e, i, c);
                            },
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function (a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return S();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = _(i, r);
                if (c) {
                  if (c === m) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = u(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === m)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var a = u(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), m
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                m)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              m);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function j(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function I(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: S };
        }
        function S() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          n(y, "constructor", { value: h, configurable: !0 }),
          n(h, "constructor", { value: f, configurable: !0 }),
          (f.displayName = l(h, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(s(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(y),
          l(y, c, "Generator"),
          l(y, o, function () {
            return this;
          }),
          l(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = I),
          (j.prototype = {
            constructor: j,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(O),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), O(r), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    O(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: I(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          e
        );
      }
      function O(e, t) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = Object(l.a)(
          L().mark(function e(t, r) {
            return L().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      y.a
                        .post("".concat(_, "/").concat(r), t)
                        .then(function (e) {
                          console.log("Error del servidor", e.data);
                        })
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function I(e, t, r) {
        return S.apply(this, arguments);
      }
      function S() {
        return (S = Object(l.a)(
          L().mark(function e(t, r, n) {
            return L().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      console.log("llega"),
                      (e.next = 3),
                      y.a
                        .put("".concat(_, "/").concat(n, "/").concat(r), t)
                        .then(function (e) {
                          console.log("Error del servidor", e.data);
                        })
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      function k(e, t) {
        return F.apply(this, arguments);
      }
      function F() {
        return (F = Object(l.a)(
          L().mark(function e(t, r) {
            return L().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      y.a
                        .delete("".concat(_, "/").concat(r, "/").concat(t))
                        .then(function (e) {
                          console.log("Error del servidor", e.data);
                        })
                    );
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      var N = function (e) {
          var t = {},
            r = new Date(e.tiempo_acti.$d);
          (t.nombre_acti = e.nombre_acti),
            (t.descripcion_acti = e.descripcion_acti),
            (t.tiempo_acti = r.toLocaleTimeString("it-IT")),
            (t.cal_quemadas_acti = e.cal_quemadas_acti),
            (t.puntos_ot_acti = e.puntos_ot_acti),
            O(t, "activity"),
            m.a.success({
              message: "Actividad creada",
              description: "",
              icon: a.a.createElement(x.a, { style: { color: "#108ee9" } }),
            }),
            window.location.reload();
        },
        C = function (e, t) {
          var r = {},
            n = e.nacimiento.$M + 1;
          (r.nombre_activity = e.nombre),
            (r.apellido_activity = e.apellido),
            (r.correo_activity = e.correo),
            (r.contrasena_activity = ""
              .concat(e.apellido)
              .concat(e.nacimiento.$y)),
            (r.fecha_nacimiento_activity = ""
              .concat(e.nacimiento.$y, "-")
              .concat(n, "-")
              .concat(e.nacimiento.$D)),
            (r.genero_activity = e.genero),
            (r.id_emp = 1),
            (r.id_admin = 1),
            I(r, t.id_acti, "activity"),
            m.a.success({
              message: "Actividad actualizada",
              description: "Los datos han sido actualizados",
              icon: a.a.createElement(x.a, { style: { color: "#108ee9" } }),
            }),
            window.location.reload();
        },
        P = function (e) {
          k(e.id_acti, "activity"),
            m.a.warning({
              message: "Actividad desactivada",
              description: "Los datos han sido eliminados",
            }),
            window.location.reload();
        },
        T = r(189),
        D = r(238),
        G = r(239),
        M = r(240),
        q = r(228),
        V = function (e) {
          var t = e.columns,
            r = e.rowSelection,
            n = e.setterDataSearch,
            o = e.data,
            i = e.resetValues,
            c = e.setterModalInsert,
            l = e.disblableButton,
            m = e.setterModalUpdate,
            d = e.setterModalDelete,
            p = e.SearchLabel,
            v = f.a.Search;
          return a.a.createElement(q.a, {
            columns: t,
            dataSource: o,
            bordered: !0,
            rowKey: function (e) {
              return (
                e.id_user || e.id_acti || e.id_admin || e.id_reg || e.id_pre
              );
            },
            rowSelection: Object(T.a)({ type: "radio" }, r),
            title: function () {
              return a.a.createElement(v, {
                placeholder: p,
                allowClear: !0,
                enterButton: "Buscar",
                size: "large",
                onSearch: function (e) {
                  n(e);
                },
              });
            },
            footer: function () {
              return a.a.createElement(
                s.a,
                null,
                a.a.createElement(u.a, { span: 8 }),
                a.a.createElement(
                  u.a,
                  { span: 2 },
                  a.a.createElement(
                    h.a,
                    {
                      type: "primary",
                      style: { background: "#3C86F1" },
                      icon: a.a.createElement(D.a, null),
                      onClick: function () {
                        i(), c(!0);
                      },
                    },
                    "Insertar",
                  ),
                ),
                a.a.createElement(u.a, { span: 1 }),
                a.a.createElement(
                  u.a,
                  { span: 2 },
                  a.a.createElement(
                    h.a,
                    {
                      type: "primary",
                      disabled: l,
                      style: { background: "#43EA35" },
                      icon: a.a.createElement(G.a, null),
                      onClick: function () {
                        i(), m(!0);
                      },
                    },
                    "Actualizar",
                  ),
                ),
                a.a.createElement(u.a, { span: 1 }),
                a.a.createElement(
                  u.a,
                  { span: 2 },
                  a.a.createElement(
                    h.a,
                    {
                      type: "primary",
                      disabled: l,
                      style: { background: "#F14E4E" },
                      icon: a.a.createElement(M.a, null),
                      onClick: function () {
                        return d(!0);
                      },
                    },
                    "Desactivar",
                  ),
                ),
                a.a.createElement(u.a, { span: 8 }),
              );
            },
          });
        },
        A = r(226),
        Y = r(231),
        B = r(122),
        R = {
          labelCol: { xs: { span: 24 }, sm: { span: 8 } },
          wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
        },
        U = {
          wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          },
        },
        $ = r(136),
        z = function (e) {
          var t = e.form,
            r = e.onFinish;
          return a.a.createElement(
            d.a,
            Object.assign({}, R, {
              form: t,
              name: "register",
              onFinish: r,
              style: { maxWidth: 600 },
              scrollToFirstError: !0,
            }),
            a.a.createElement(
              d.a.Item,
              {
                name: "nombre_acti",
                label: "Nombre",
                rules: [{ required: !0, message: "Ingrese un nombre!" }],
              },
              a.a.createElement(
                $.a,
                null,
                a.a.createElement(
                  $.a.Option,
                  { value: "Caminata" },
                  "Caminata ",
                ),
                a.a.createElement(
                  $.a.Option,
                  { value: "Caminata Rapida" },
                  "Caminata Rapida",
                ),
                a.a.createElement($.a.Option, { value: "Trote" }, "Trote "),
                a.a.createElement($.a.Option, { value: "Correr" }, "Correr "),
              ),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "descripcion_acti",
                label: "Descripci\xf3n",
                rules: [
                  { type: "string", message: "Ingrese un nombre valido!" },
                  { required: !0, message: "Ingrese una descripci\xf3n!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "tiempo_acti",
                label: "Tiempo",
                rules: [
                  {
                    type: "time",
                    message: "Ingrese un tiempo valido!",
                    status: !1,
                  },
                  { required: !0, message: "Ingrese un tiempo de duracion!" },
                ],
              },
              a.a.createElement(A.a, { format: "HH:mm:ss" }),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "cal_quemadas_acti",
                label: "Calorias",
                rules: [
                  { type: "double", message: "Ingrese un valor valido!" },
                  { required: !0, message: "Ingrese un valor calorico!" },
                ],
              },
              a.a.createElement(Y.a, { min: 1, max: 1e3, defaultValue: 50 }),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "puntos_ot_acti",
                label: "Puntos",
                rules: [
                  { type: "integer", message: "Solo numeros enteros" },
                  { required: !0, message: "Ingrese una cantidad de puntos!" },
                ],
              },
              a.a.createElement(Y.a, { min: 1, max: 100, defaultValue: 5 }),
            ),
            a.a.createElement(
              d.a.Item,
              Object.assign(
                {
                  name: "terminos",
                  valuePropName: "checked",
                  rules: [
                    {
                      validator: function (e, t) {
                        return t
                          ? Promise.resolve()
                          : Promise.reject(new Error("Debe aceptar"));
                      },
                    },
                  ],
                },
                U,
              ),
              a.a.createElement(
                B.a,
                null,
                "Acepto los ",
                a.a.createElement("a", null, "terminos y condiciones "),
              ),
            ),
            a.a.createElement(
              d.a.Item,
              U,
              a.a.createElement(
                h.a,
                { type: "primary", htmlType: "submit" },
                "Ingresar",
              ),
            ),
          );
        },
        W = r(180),
        H = r(55),
        J = r.n(H),
        K = $.a.Option,
        Q = function (e) {
          var t = e.onFinishUpdate,
            r = e.selectedRow,
            n = e.form2;
          return a.a.createElement(
            d.a,
            Object.assign({}, R, {
              form: n,
              name: "update",
              onFinish: t,
              style: { maxWidth: 600 },
              scrollToFirstError: !0,
            }),
            a.a.createElement(
              d.a.Item,
              {
                name: "nombre",
                label: "Nombre",
                initialValue: r.nombre_activity,
                resetFields: !0,
                rules: [
                  { type: "string", message: "Ingrese un nombre valido!" },
                  { required: !0, message: "Ingrese un nombre!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "apellido",
                label: "Apellido",
                initialValue: r.apellido_activity,
                rules: [
                  { type: "string", message: "Ingrese un nombre valido!" },
                  { required: !0, message: "Ingrese un apellido!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "correo",
                label: "Correo",
                initialValue: r.correo_activity,
                rules: [
                  { type: "email", message: "Ingrese un correo valido!" },
                  { required: !0, message: "Ingrese un correo valido!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "nacimiento",
                label: "Fecha de Nacimiento",
                initialValue: J()(r.fecha_nacimiento_activity, "YYYY-MM-DD"),
                rules: [
                  {
                    type: "date",
                    message: "Ingrese una fecha valida!",
                    status: !1,
                  },
                  { required: !0, message: "Ingrese una fecha de nacimiento!" },
                  function (e) {
                    var t = e.getFieldValue;
                    return {
                      validator: function (e, r) {
                        return t("nacimiento").year() < 2004
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("La fecha ingresada no es valida!"),
                            );
                      },
                    };
                  },
                ],
              },
              a.a.createElement(W.a, {
                format: "YYYY-MM-DD",
                disabledTime: !0,
              }),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "genero",
                label: "Genero",
                initialValue: r.genero_activity,
                rules: [{ required: !0, message: "Seleccione un genero!" }],
              },
              a.a.createElement(
                $.a,
                { placeholder: "Seleccione su sexo" },
                a.a.createElement(K, { value: "Masculino" }, "Masculino"),
                a.a.createElement(K, { value: "Femenino" }, "Femenino"),
                a.a.createElement(
                  K,
                  { value: "No especificar" },
                  "No especificar",
                ),
              ),
            ),
            a.a.createElement(
              d.a.Item,
              U,
              a.a.createElement(
                h.a,
                { type: "primary", htmlType: "submit" },
                "Actualizar",
              ),
            ),
          );
        },
        X = function (e, t) {
          return -1 === t ? { colSpan: 0 } : {};
        },
        Z = function (e) {
          return [
            {
              title: "#",
              dataIndex: "id_acti",
              rowScope: "id",
              defaultSortOrder: "ascend",
              sorter: function (e, t) {
                return e.id_activity - t.id_activity;
              },
            },
            {
              title: "Nombre",
              dataIndex: "nombre_acti",
              key: "name",
              onCell: X,
              filteredValue: [e],
              onFilter: function (e, t) {
                return (
                  String(t.nombre_acti)
                    .toLowerCase()
                    .includes(e.toLowerCase()) ||
                  String(t.id_activity)
                    .toLowerCase()
                    .includes(e.toLowerCase()) ||
                  String(t.puntos_ot_acti)
                    .toLowerCase()
                    .includes(e.toLowerCase())
                );
              },
            },
            {
              title: "Descripci\xf3n",
              dataIndex: "descripcion_acti",
              key: "lastname",
              onCell: X,
            },
            {
              title: "Tiempo",
              dataIndex: "tiempo_acti",
              key: "email",
              onCell: X,
            },
            {
              title: "Calorias",
              dataIndex: "cal_quemadas_acti",
              key: "birthday",
              onCell: X,
            },
            {
              title: "Puntos",
              dataIndex: "puntos_ot_acti",
              key: "gender",
              onCell: X,
            },
          ];
        },
        ee = r(232),
        te = function (e) {
          var t = e.modalBegin,
            r = e.resetValues,
            n = e.running,
            o = e.titleModal,
            i = e.form,
            c = e.design,
            l = e.isDelete,
            s = e.okDelete,
            u = e.selectedRow;
          return a.a.createElement(
            ee.a,
            {
              title: o,
              okButtonProps: c,
              centered: !0,
              open: t,
              onOk: function () {
                l ? (s(u), window.location.reload()) : (n(!1), r());
              },
              onCancel: function () {
                n(!1), r();
              },
            },
            i,
          );
        };
      function re() {
        re = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (S) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function s(e, t, r, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function u(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        e.wrap = s;
        var m = {};
        function d() {}
        function f() {}
        function h() {}
        var p = {};
        l(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(j([])));
        g && g !== t && r.call(g, o) && (p = g);
        var y = (h.prototype = d.prototype = Object.create(p));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = u(e[a], e, o);
                    if ("throw" !== l.type) {
                      var s = l.arg,
                        m = s.value;
                      return m && "object" == typeof m && r.call(m, "__await")
                        ? t.resolve(m.__await).then(
                            function (e) {
                              n("next", e, i, c);
                            },
                            function (e) {
                              n("throw", e, i, c);
                            },
                          )
                        : t.resolve(m).then(
                            function (e) {
                              (s.value = e), i(s);
                            },
                            function (e) {
                              return n("throw", e, i, c);
                            },
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function (a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return I();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = _(i, r);
                if (c) {
                  if (c === m) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = u(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === m)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var a = u(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), m
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                m)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              m);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function L(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function j(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: I };
        }
        function I() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          n(y, "constructor", { value: h, configurable: !0 }),
          n(h, "constructor", { value: f, configurable: !0 }),
          (f.displayName = l(h, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(s(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(y),
          l(y, c, "Generator"),
          l(y, o, function () {
            return this;
          }),
          l(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), L(r), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    L(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          e
        );
      }
      var ne = function () {
          var e = Object(n.useState)([]),
            t = Object(w.a)(e, 2),
            r = t[0],
            o = t[1],
            i = Object(n.useState)([]),
            c = Object(w.a)(i, 2),
            s = c[0],
            u = c[1],
            m = Object(n.useState)(""),
            f = Object(w.a)(m, 2),
            h = f[0],
            p = f[1],
            v = Object(n.useState)(!1),
            g = Object(w.a)(v, 2),
            E = g[0],
            b = g[1],
            x = Object(n.useState)(!1),
            L = Object(w.a)(x, 2),
            O = L[0],
            j = L[1],
            I = Object(n.useState)(!1),
            S = Object(w.a)(I, 2),
            k = S[0],
            F = S[1],
            T = Object(n.useState)(!0),
            D = Object(w.a)(T, 2),
            G = D[0],
            M = D[1],
            q = d.a.useForm(),
            A = Object(w.a)(q, 1)[0],
            Y = d.a.useForm(),
            B = Object(w.a)(Y, 1)[0],
            R = function () {
              setTimeout(A.resetFields(), 500),
                setTimeout(B.resetFields(), 500);
            },
            U = {
              selectedRow: s,
              onChange: function (e, t) {
                u(t[0]), M(!1);
              },
            };
          Object(n.useEffect)(function () {
            function e() {
              return (e = Object(l.a)(
                re().mark(function e() {
                  return re().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            y.a
                              .get("".concat(_, "/activity"))
                              .then(function (e) {
                                o(e.data);
                              })
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, []);
          var $ = function (e) {
              return b(e);
            },
            W = function (e) {
              return j(e);
            },
            H = function (e) {
              return F(e);
            };
          return a.a.createElement(
            "div",
            null,
            a.a.createElement(V, {
              columns: Z(h),
              rowSelection: U,
              setterDataSearch: function (e) {
                return p(e);
              },
              data: r,
              resetValues: R,
              setterModalInsert: $,
              disblableButton: G,
              setterModalUpdate: W,
              setterModalDelete: H,
              SearchLabel: "Ingrese #, Nombre o cantidad de puntos",
            }),
            a.a.createElement(te, {
              modalBegin: E,
              titleModal: "Inserte un usuario",
              resetValues: R,
              running: $,
              isDelete: !1,
              form: a.a.createElement(z, { form: A, onFinish: N }),
            }),
            a.a.createElement(te, {
              modalBegin: O,
              titleModal: "Editar",
              resetValues: R,
              running: W,
              isDelete: !1,
              form: a.a.createElement(Q, {
                onFinishUpdate: C,
                selectedRow: s,
                form2: B,
              }),
            }),
            a.a.createElement(te, {
              modalBegin: k,
              titleModal: "Desactivar usuario",
              resetValues: R,
              running: H,
              design: { danger: !0 },
              okDelete: P,
              selectedRow: s,
              isDelete: !0,
              form: a.a.createElement(
                "p",
                null,
                "Esta a punto de desactivar al usuario",
                " ".concat(s.nombre_activity, " "),
                "".concat(s.apellido_activity, " "),
                "con ID: ",
                s.id_activity,
                " ",
              ),
            }),
          );
        },
        ae = function () {
          return a.a.createElement("div", null, "Admin");
        },
        oe = function () {
          return a.a.createElement("div", null, "Registros");
        },
        ie = function (e) {
          var t = {};
          (t.nombre_pre = e.nombre),
            (t.descripcion_pre = e.descripcion),
            (t.puntos_rq_pre = e.puntos),
            O(t, "reward"),
            window.location.reload(),
            m.a.success({
              message: "Premio creado",
              description: "Se ha almacenado!",
              icon: a.a.createElement(x.a, { style: { color: "#108ee9" } }),
            });
        },
        ce = function (e, t) {
          var r = {};
          (r.nombre_pre = e.nombre),
            (r.descripcion_pre = e.descripcion),
            (r.puntos_rq_pre = e.puntos),
            I(r, t.id_pre, "reward"),
            m.a.success({
              message: "Premio actualizado",
              description: "Los datos han sido actualizados",
              icon: a.a.createElement(x.a, { style: { color: "#108ee9" } }),
            }),
            window.location.reload();
        },
        le = function (e) {
          k(e.id_pre, "reward"),
            m.a.warning({
              message: "Usuario desactivado",
              description: "Los datos han sido eliminados",
            }),
            window.location.reload();
        },
        se = function (e) {
          return [
            {
              title: "#",
              dataIndex: "id_pre",
              rowScope: "id",
              defaultSortOrder: "ascend",
              sorter: function (e, t) {
                return e.id_pre - t.id_pre;
              },
            },
            {
              title: "Nombre del Premio",
              dataIndex: "nombre_pre",
              key: "name",
              onCell: X,
              filteredValue: [e],
              onFilter: function (e, t) {
                return (
                  String(t.nombre_pre)
                    .toLowerCase()
                    .includes(e.toLowerCase()) ||
                  String(t.id_pre).toLowerCase().includes(e.toLowerCase()) ||
                  String(t.puntos_rq_pre)
                    .toLowerCase()
                    .includes(e.toLowerCase())
                );
              },
            },
            {
              title: "Descripci\xf3n",
              dataIndex: "descripcion_pre",
              key: "description",
              onCell: X,
            },
            {
              title: "Puntos Necesarios",
              dataIndex: "puntos_rq_pre",
              key: "points",
              onCell: X,
            },
          ];
        },
        ue = function (e) {
          var t = e.form,
            r = e.onFinish;
          return a.a.createElement(
            d.a,
            Object.assign({}, R, {
              form: t,
              name: "register",
              onFinish: r,
              style: { maxWidth: 600 },
              scrollToFirstError: !0,
            }),
            a.a.createElement(
              d.a.Item,
              {
                name: "nombre",
                label: "Nombre",
                rules: [
                  { type: "string", message: "Ingrese un nombre valido!" },
                  { required: !0, message: "Ingrese un nombre!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "descripcion",
                label: "Descripcion",
                rules: [
                  {
                    type: "string",
                    message: "Ingrese una descripcion valida!",
                  },
                  { required: !0, message: "Ingrese una descripcion!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "puntos",
                label: "Puntos",
                rules: [
                  {
                    required: !0,
                    message: "Ingrrese una cantidad de puntos(50-10000)!",
                  },
                ],
              },
              a.a.createElement(Y.a, { min: 50, max: 1e4, defaultValue: 50 }),
            ),
            a.a.createElement(
              d.a.Item,
              Object.assign(
                {
                  name: "terminos",
                  valuePropName: "checked",
                  rules: [
                    {
                      validator: function (e, t) {
                        return t
                          ? Promise.resolve()
                          : Promise.reject(new Error("Debe aceptar"));
                      },
                    },
                  ],
                },
                U,
              ),
              a.a.createElement(
                B.a,
                null,
                "Acepto los ",
                a.a.createElement("a", null, "terminos y condiciones "),
              ),
            ),
            a.a.createElement(
              d.a.Item,
              U,
              a.a.createElement(
                h.a,
                { type: "primary", htmlType: "submit" },
                "Ingresar",
              ),
            ),
          );
        },
        me = function (e) {
          var t = e.onFinishUpdate,
            r = e.selectedRow,
            n = e.form2;
          return a.a.createElement(
            d.a,
            Object.assign({}, R, {
              form: n,
              name: "update",
              onFinish: function (e) {
                t(e, r);
              },
              style: { maxWidth: 600 },
              scrollToFirstError: !0,
            }),
            a.a.createElement(
              d.a.Item,
              {
                name: "nombre",
                label: "Nombre",
                initialValue: r.nombre_pre,
                rules: [
                  { type: "string", message: "Ingrese un nombre valido!" },
                  { required: !0, message: "Ingrese un nombre!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "descripcion",
                label: "Descripcion",
                initialValue: r.descripcion_pre,
                rules: [
                  {
                    type: "string",
                    message: "Ingrese una descripcion valida!",
                  },
                  { required: !0, message: "Ingrese una descripcion!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "puntos",
                label: "Puntos",
                initialValue: r.puntos_rq_pre,
                rules: [
                  {
                    required: !0,
                    message: "Ingrrese una cantidad de puntos(50-10000)!",
                  },
                ],
              },
              a.a.createElement(Y.a, { min: 50, max: 1e4, defaultValue: 50 }),
            ),
            a.a.createElement(
              d.a.Item,
              U,
              a.a.createElement(
                h.a,
                { type: "primary", htmlType: "submit" },
                "Actualizar",
              ),
            ),
          );
        };
      function de() {
        de = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (S) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function s(e, t, r, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function u(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        e.wrap = s;
        var m = {};
        function d() {}
        function f() {}
        function h() {}
        var p = {};
        l(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(j([])));
        g && g !== t && r.call(g, o) && (p = g);
        var y = (h.prototype = d.prototype = Object.create(p));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = u(e[a], e, o);
                    if ("throw" !== l.type) {
                      var s = l.arg,
                        m = s.value;
                      return m && "object" == typeof m && r.call(m, "__await")
                        ? t.resolve(m.__await).then(
                            function (e) {
                              n("next", e, i, c);
                            },
                            function (e) {
                              n("throw", e, i, c);
                            },
                          )
                        : t.resolve(m).then(
                            function (e) {
                              (s.value = e), i(s);
                            },
                            function (e) {
                              return n("throw", e, i, c);
                            },
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function (a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return I();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = _(i, r);
                if (c) {
                  if (c === m) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = u(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === m)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var a = u(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), m
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                m)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              m);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function L(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function j(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: I };
        }
        function I() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          n(y, "constructor", { value: h, configurable: !0 }),
          n(h, "constructor", { value: f, configurable: !0 }),
          (f.displayName = l(h, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(s(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(y),
          l(y, c, "Generator"),
          l(y, o, function () {
            return this;
          }),
          l(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), L(r), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    L(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          e
        );
      }
      var fe = function () {
          var e = Object(n.useState)([]),
            t = Object(w.a)(e, 2),
            r = t[0],
            o = t[1],
            i = Object(n.useState)([]),
            c = Object(w.a)(i, 2),
            s = c[0],
            u = c[1],
            m = Object(n.useState)(""),
            f = Object(w.a)(m, 2),
            h = f[0],
            p = f[1],
            v = Object(n.useState)(!1),
            g = Object(w.a)(v, 2),
            E = g[0],
            b = g[1],
            x = Object(n.useState)(!1),
            L = Object(w.a)(x, 2),
            O = L[0],
            j = L[1],
            I = Object(n.useState)(!1),
            S = Object(w.a)(I, 2),
            k = S[0],
            F = S[1],
            N = Object(n.useState)(!0),
            C = Object(w.a)(N, 2),
            P = C[0],
            T = C[1],
            D = d.a.useForm(),
            G = Object(w.a)(D, 1)[0],
            M = d.a.useForm(),
            q = Object(w.a)(M, 1)[0],
            A = function () {
              setTimeout(G.resetFields(), 500),
                setTimeout(q.resetFields(), 500);
            },
            Y = {
              selectedRow: s,
              onChange: function (e, t) {
                u(t[0]), T(!1);
              },
            },
            B = function (e) {
              return b(e);
            },
            R = function (e) {
              return j(e);
            },
            U = function (e) {
              return F(e);
            };
          return (
            Object(n.useEffect)(function () {
              function e() {
                return (e = Object(l.a)(
                  de().mark(function e() {
                    return de().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.next = 2),
                              y.a
                                .get("".concat(_, "/reward"))
                                .then(function (e) {
                                  o(e.data);
                                })
                            );
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  }),
                )).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            }, []),
            a.a.createElement(
              "div",
              null,
              a.a.createElement(V, {
                columns: se(h),
                rowSelection: Y,
                setterDataSearch: function (e) {
                  return p(e);
                },
                data: r,
                resetValues: A,
                setterModalInsert: B,
                disblableButton: P,
                setterModalUpdate: R,
                setterModalDelete: U,
                SearchLabel: "Ingrese #, Apellido o Correo",
              }),
              a.a.createElement(te, {
                modalBegin: E,
                titleModal: "Inserte un Premio",
                resetValues: A,
                running: B,
                isDelete: !1,
                form: a.a.createElement(ue, { form: G, onFinish: ie }),
              }),
              a.a.createElement(te, {
                modalBegin: O,
                titleModal: "Editar",
                resetValues: A,
                running: R,
                isDelete: !1,
                form: a.a.createElement(me, {
                  onFinishUpdate: ce,
                  selectedRow: s,
                  form2: q,
                }),
              }),
              a.a.createElement(te, {
                modalBegin: k,
                titleModal: "Desactivar Premio",
                resetValues: A,
                running: U,
                design: { danger: !0 },
                okDelete: le,
                selectedRow: s,
                isDelete: !0,
                form: a.a.createElement(
                  "p",
                  null,
                  "Esta a punto de desactivar el premio",
                  " ".concat(s.nombre_pre, " "),
                  "con ID: ",
                  s.id_pre,
                  " ",
                ),
              }),
            )
          );
        },
        he = function (e) {
          var t = {},
            r = e.nacimiento.$M + 1;
          (t.nombre_user = e.nombre),
            (t.apellido_user = e.apellido),
            (t.correo_user = e.correo),
            (t.contrasena_user = "".concat(e.apellido).concat(e.nacimiento.$y)),
            (t.fecha_nacimiento_user = ""
              .concat(e.nacimiento.$y, "-")
              .concat(r, "-")
              .concat(e.nacimiento.$D)),
            (t.genero_user = e.genero),
            (t.id_emp = 1),
            (t.id_admin = 1),
            O(t, "user"),
            m.a.success({
              message: "Usuario creado",
              description: "Notifique al usuario",
              icon: a.a.createElement(x.a, { style: { color: "#108ee9" } }),
            }),
            window.location.reload();
        },
        pe = function (e, t) {
          var r = {},
            n = e.nacimiento.$M + 1;
          (r.nombre_user = e.nombre),
            (r.apellido_user = e.apellido),
            (r.correo_user = e.correo),
            (r.contrasena_user = "".concat(e.apellido).concat(e.nacimiento.$y)),
            (r.fecha_nacimiento_user = ""
              .concat(e.nacimiento.$y, "-")
              .concat(n, "-")
              .concat(e.nacimiento.$D)),
            (r.genero_user = e.genero),
            (r.id_emp = 1),
            (r.id_admin = 1),
            I(r, t.id_user, "user"),
            m.a.success({
              message: "Usuario actualizado",
              description: "Los datos han sido actualizados",
              icon: a.a.createElement(x.a, { style: { color: "#108ee9" } }),
            }),
            window.location.reload();
        },
        ve = function (e) {
          k(e.id_user, "user"),
            m.a.warning({
              message: "Usuario desactivado",
              description: "Los datos han sido eliminados",
            }),
            window.location.reload();
        },
        ge = $.a.Option,
        ye = function (e) {
          var t = e.form,
            r = e.onFinish;
          return a.a.createElement(
            d.a,
            Object.assign({}, R, {
              form: t,
              name: "register",
              onFinish: r,
              style: { maxWidth: 600 },
              scrollToFirstError: !0,
            }),
            a.a.createElement(
              d.a.Item,
              {
                name: "nombre",
                label: "Nombre",
                rules: [
                  { type: "string", message: "Ingrese un nombre valido!" },
                  { required: !0, message: "Ingrese un nombre!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "apellido",
                label: "Apellido",
                rules: [
                  { type: "string", message: "Ingrese un nombre valido!" },
                  { required: !0, message: "Ingrese un apellido!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "correo",
                label: "Correo",
                rules: [
                  { type: "email", message: "Ingrese un correo valido!" },
                  { required: !0, message: "Ingrese un correo valido!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "nacimiento",
                label: "Fecha de Nacimiento",
                rules: [
                  {
                    type: "date",
                    message: "Ingrese una fecha valida!",
                    status: !1,
                  },
                  { required: !0, message: "Ingrese una fecha de nacimiento!" },
                  function (e) {
                    var t = e.getFieldValue;
                    return {
                      validator: function (e, r) {
                        return t("nacimiento").year() < 2004 &&
                          t("nacimiento").year() > 1940
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("La fecha ingresada no es valida!"),
                            );
                      },
                    };
                  },
                ],
              },
              a.a.createElement(W.a, {
                format: "YYYY-MM-DD",
                disabledTime: !0,
              }),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "genero",
                label: "Genero",
                rules: [{ required: !0, message: "Seleccione un genero!" }],
              },
              a.a.createElement(
                $.a,
                { placeholder: "Seleccione su sexo" },
                a.a.createElement(ge, { value: "Masculino" }, "Masculino"),
                a.a.createElement(ge, { value: "Femenino" }, "Femenino"),
                a.a.createElement(
                  ge,
                  { value: "No especificar" },
                  "No especificar",
                ),
              ),
            ),
            a.a.createElement(
              d.a.Item,
              Object.assign(
                {
                  name: "terminos",
                  valuePropName: "checked",
                  rules: [
                    {
                      validator: function (e, t) {
                        return t
                          ? Promise.resolve()
                          : Promise.reject(new Error("Debe aceptar"));
                      },
                    },
                  ],
                },
                U,
              ),
              a.a.createElement(
                B.a,
                null,
                "Acepto los ",
                a.a.createElement("a", null, "terminos y condiciones "),
              ),
            ),
            a.a.createElement(
              d.a.Item,
              U,
              a.a.createElement(
                h.a,
                { type: "primary", htmlType: "submit" },
                "Ingresar",
              ),
            ),
          );
        },
        Ee = $.a.Option,
        be = function (e) {
          var t = e.onFinishUpdate,
            r = e.selectedRow,
            n = e.form2;
          return a.a.createElement(
            d.a,
            Object.assign({}, R, {
              form: n,
              name: "update",
              onFinish: function (e) {
                t(e, r);
              },
              style: { maxWidth: 600 },
              scrollToFirstError: !0,
            }),
            a.a.createElement(
              d.a.Item,
              {
                name: "nombre",
                label: "Nombre",
                initialValue: r.nombre_user,
                resetFields: !0,
                rules: [
                  { type: "string", message: "Ingrese un nombre valido!" },
                  { required: !0, message: "Ingrese un nombre!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "apellido",
                label: "Apellido",
                initialValue: r.apellido_user,
                rules: [
                  { type: "string", message: "Ingrese un nombre valido!" },
                  { required: !0, message: "Ingrese un apellido!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "correo",
                label: "Correo",
                initialValue: r.correo_user,
                rules: [
                  { type: "email", message: "Ingrese un correo valido!" },
                  { required: !0, message: "Ingrese un correo valido!" },
                ],
              },
              a.a.createElement(f.a, null),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "nacimiento",
                label: "Fecha de Nacimiento",
                initialValue: J()(r.fecha_nacimiento_user, "YYYY-MM-DD"),
                rules: [
                  {
                    type: "date",
                    message: "Ingrese una fecha valida!",
                    status: !1,
                  },
                  { required: !0, message: "Ingrese una fecha de nacimiento!" },
                  function (e) {
                    var t = e.getFieldValue;
                    return {
                      validator: function (e, r) {
                        return t("nacimiento").year() < 2004
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("La fecha ingresada no es valida!"),
                            );
                      },
                    };
                  },
                ],
              },
              a.a.createElement(W.a, {
                format: "YYYY-MM-DD",
                disabledTime: !0,
              }),
            ),
            a.a.createElement(
              d.a.Item,
              {
                name: "genero",
                label: "Genero",
                initialValue: r.genero_user,
                rules: [{ required: !0, message: "Seleccione un genero!" }],
              },
              a.a.createElement(
                $.a,
                { placeholder: "Seleccione su sexo" },
                a.a.createElement(Ee, { value: "Masculino" }, "Masculino"),
                a.a.createElement(Ee, { value: "Femenino" }, "Femenino"),
                a.a.createElement(
                  Ee,
                  { value: "No especificar" },
                  "No especificar",
                ),
              ),
            ),
            a.a.createElement(
              d.a.Item,
              U,
              a.a.createElement(
                h.a,
                { type: "primary", htmlType: "submit" },
                "Actualizar",
              ),
            ),
          );
        },
        we = function (e) {
          return [
            {
              title: "#",
              dataIndex: "id_user",
              rowScope: "id",
              defaultSortOrder: "ascend",
              sorter: function (e, t) {
                return e.id_user - t.id_user;
              },
            },
            {
              title: "Nombre",
              dataIndex: "nombre_user",
              key: "name",
              onCell: X,
              filteredValue: [e],
              onFilter: function (e, t) {
                return (
                  String(t.nombre_user)
                    .toLowerCase()
                    .includes(e.toLowerCase()) ||
                  String(t.id_user).toLowerCase().includes(e.toLowerCase()) ||
                  String(t.correo_user).toLowerCase().includes(e.toLowerCase())
                );
              },
            },
            {
              title: "Apellido",
              dataIndex: "apellido_user",
              key: "lastname",
              onCell: X,
            },
            {
              title: "Correo",
              dataIndex: "correo_user",
              key: "email",
              onCell: X,
            },
            {
              title: "Fecha de Nacimiento",
              dataIndex: "fecha_nacimiento_user",
              key: "birthday",
              onCell: X,
            },
            {
              title: "Genero",
              dataIndex: "genero_user",
              key: "gender",
              onCell: X,
            },
          ];
        };
      function _e() {
        _e = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          r = t.hasOwnProperty,
          n =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          i = a.asyncIterator || "@@asyncIterator",
          c = a.toStringTag || "@@toStringTag";
        function l(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (S) {
          l = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function s(e, t, r, a) {
          var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            c = new O(a || []);
          return n(i, "_invoke", { value: w(e, r, c) }), i;
        }
        function u(e, t, r) {
          try {
            return { type: "normal", arg: e.call(t, r) };
          } catch (S) {
            return { type: "throw", arg: S };
          }
        }
        e.wrap = s;
        var m = {};
        function d() {}
        function f() {}
        function h() {}
        var p = {};
        l(p, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          g = v && v(v(j([])));
        g && g !== t && r.call(g, o) && (p = g);
        var y = (h.prototype = d.prototype = Object.create(p));
        function E(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function b(e, t) {
          var a;
          n(this, "_invoke", {
            value: function (n, o) {
              function i() {
                return new t(function (a, i) {
                  !(function n(a, o, i, c) {
                    var l = u(e[a], e, o);
                    if ("throw" !== l.type) {
                      var s = l.arg,
                        m = s.value;
                      return m && "object" == typeof m && r.call(m, "__await")
                        ? t.resolve(m.__await).then(
                            function (e) {
                              n("next", e, i, c);
                            },
                            function (e) {
                              n("throw", e, i, c);
                            },
                          )
                        : t.resolve(m).then(
                            function (e) {
                              (s.value = e), i(s);
                            },
                            function (e) {
                              return n("throw", e, i, c);
                            },
                          );
                    }
                    c(l.arg);
                  })(n, o, a, i);
                });
              }
              return (a = a ? a.then(i, i) : i());
            },
          });
        }
        function w(e, t, r) {
          var n = "suspendedStart";
          return function (a, o) {
            if ("executing" === n)
              throw new Error("Generator is already running");
            if ("completed" === n) {
              if ("throw" === a) throw o;
              return I();
            }
            for (r.method = a, r.arg = o; ; ) {
              var i = r.delegate;
              if (i) {
                var c = _(i, r);
                if (c) {
                  if (c === m) continue;
                  return c;
                }
              }
              if ("next" === r.method) r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
                r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);
              n = "executing";
              var l = u(e, t, r);
              if ("normal" === l.type) {
                if (
                  ((n = r.done ? "completed" : "suspendedYield"), l.arg === m)
                )
                  continue;
                return { value: l.arg, done: r.done };
              }
              "throw" === l.type &&
                ((n = "completed"), (r.method = "throw"), (r.arg = l.arg));
            }
          };
        }
        function _(e, t) {
          var r = t.method,
            n = e.iterator[r];
          if (void 0 === n)
            return (
              (t.delegate = null),
              ("throw" === r &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                _(e, t),
                "throw" === t.method)) ||
                ("return" !== r &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + r + "' method",
                  )))),
              m
            );
          var a = u(n, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), m
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                m)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              m);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function L(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function O(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function j(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var n = -1,
                a = function t() {
                  for (; ++n < e.length; )
                    if (r.call(e, n)) return (t.value = e[n]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: I };
        }
        function I() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = h),
          n(y, "constructor", { value: h, configurable: !0 }),
          n(h, "constructor", { value: f, configurable: !0 }),
          (f.displayName = l(h, c, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), l(e, c, "GeneratorFunction")),
              (e.prototype = Object.create(y)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          E(b.prototype),
          l(b.prototype, i, function () {
            return this;
          }),
          (e.AsyncIterator = b),
          (e.async = function (t, r, n, a, o) {
            void 0 === o && (o = Promise);
            var i = new b(s(t, r, n, a), o);
            return e.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          E(y),
          l(y, c, "Generator"),
          l(y, o, function () {
            return this;
          }),
          l(y, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = j),
          (O.prototype = {
            constructor: O,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    r.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(r, n) {
                return (
                  (i.type = "throw"),
                  (i.arg = e),
                  (t.next = r),
                  n && ((t.method = "next"), (t.arg = void 0)),
                  !!n
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  i = o.completion;
                if ("root" === o.tryLoc) return n("end");
                if (o.tryLoc <= this.prev) {
                  var c = r.call(o, "catchLoc"),
                    l = r.call(o, "finallyLoc");
                  if (c && l) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return n(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var a = this.tryEntries[n];
                if (
                  a.tryLoc <= this.prev &&
                  r.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var i = o ? o.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), m)
                  : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                m
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e)
                  return this.complete(r.completion, r.afterLoc), L(r), m;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var a = n.arg;
                    L(r);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, r) {
              return (
                (this.delegate = { iterator: j(e), resultName: t, nextLoc: r }),
                "next" === this.method && (this.arg = void 0),
                m
              );
            },
          }),
          e
        );
      }
      var xe = function () {
          var e = Object(n.useState)([]),
            t = Object(w.a)(e, 2),
            r = t[0],
            o = t[1],
            i = Object(n.useState)([]),
            c = Object(w.a)(i, 2),
            s = c[0],
            u = c[1],
            m = Object(n.useState)(""),
            f = Object(w.a)(m, 2),
            h = f[0],
            p = f[1],
            v = Object(n.useState)(!1),
            g = Object(w.a)(v, 2),
            E = g[0],
            b = g[1],
            x = Object(n.useState)(!1),
            L = Object(w.a)(x, 2),
            O = L[0],
            j = L[1],
            I = Object(n.useState)(!1),
            S = Object(w.a)(I, 2),
            k = S[0],
            F = S[1],
            N = Object(n.useState)(!0),
            C = Object(w.a)(N, 2),
            P = C[0],
            T = C[1],
            D = d.a.useForm(),
            G = Object(w.a)(D, 1)[0],
            M = d.a.useForm(),
            q = Object(w.a)(M, 1)[0],
            A = function () {
              setTimeout(G.resetFields(), 500),
                setTimeout(q.resetFields(), 500);
            },
            Y = {
              selectedRow: s,
              onChange: function (e, t) {
                u(t[0]), T(!1);
              },
            };
          Object(n.useEffect)(function () {
            function e() {
              return (e = Object(l.a)(
                _e().mark(function e() {
                  return _e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            y.a.get("".concat(_, "/user")).then(function (e) {
                              o(e.data);
                            })
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              )).apply(this, arguments);
            }
            !(function () {
              e.apply(this, arguments);
            })();
          }, []);
          var B = function (e) {
              return b(e);
            },
            R = function (e) {
              return j(e);
            },
            U = function (e) {
              return F(e);
            };
          return a.a.createElement(
            "div",
            null,
            a.a.createElement(V, {
              columns: we(h),
              rowSelection: Y,
              setterDataSearch: function (e) {
                return p(e);
              },
              data: r,
              resetValues: A,
              setterModalInsert: B,
              disblableButton: P,
              setterModalUpdate: R,
              setterModalDelete: U,
              SearchLabel: "Ingrese #, Apellido o Correo",
            }),
            a.a.createElement(te, {
              modalBegin: E,
              titleModal: "Inserte un usuario",
              resetValues: A,
              running: B,
              isDelete: !1,
              form: a.a.createElement(ye, { form: G, onFinish: he }),
            }),
            a.a.createElement(te, {
              modalBegin: O,
              titleModal: "Editar",
              resetValues: A,
              running: R,
              isDelete: !1,
              form: a.a.createElement(be, {
                onFinishUpdate: pe,
                selectedRow: s,
                form2: q,
              }),
            }),
            a.a.createElement(te, {
              modalBegin: k,
              titleModal: "Desactivar usuario",
              resetValues: A,
              running: U,
              design: { danger: !0 },
              okDelete: ve,
              selectedRow: s,
              isDelete: !0,
              form: a.a.createElement(
                "p",
                null,
                "Esta a punto de desactivar al usuario",
                " ".concat(s.nombre_user, " "),
                "".concat(s.apellido_user, " "),
                "con ID: ",
                s.id_user,
                " ",
              ),
            }),
          );
        },
        Le = function () {
          return a.a.createElement("div", null, "Premios reclamados");
        },
        Oe = r(170),
        je = r(227),
        Ie = function () {
          return a.a.createElement(
            je.a.Footer,
            { style: { textAlign: "center" } },
            "Company \xa92023 Created by PowerFit Team",
          );
        },
        Se = r(167),
        ke = r(241),
        Fe = r(242),
        Ne = r(243),
        Ce = r(244),
        Pe = r(245);
      function Te(e, t, r) {
        return { icon: r, key: t, label: e };
      }
      var De = [
          Te(
            "Usuarios",
            "1",
            a.a.createElement(
              i.b,
              { to: "/user" },
              " ",
              a.a.createElement(v.a, null),
              " ",
            ),
          ),
          Te(
            "Premios",
            "2",
            a.a.createElement(
              i.b,
              { to: "/reward" },
              " ",
              a.a.createElement(ke.a, null),
              " ",
            ),
          ),
          Te(
            "Ganadores",
            "3",
            a.a.createElement(
              i.b,
              { to: "/winner" },
              " ",
              a.a.createElement(x.a, null),
              " ",
            ),
          ),
          Te(
            "Actividades",
            "4",
            a.a.createElement(
              i.b,
              { to: "/activity" },
              " ",
              a.a.createElement(Fe.a, null),
              " ",
            ),
          ),
          Te(
            "Registros",
            "5",
            a.a.createElement(
              i.b,
              { to: "/register" },
              " ",
              a.a.createElement(Ne.a, null),
              " ",
            ),
          ),
          Te(
            "Acceso",
            "6",
            a.a.createElement(
              i.b,
              { to: "/admin" },
              " ",
              a.a.createElement(Ce.a, null),
              " ",
            ),
          ),
          Te(
            "",
            "5",
            a.a.createElement(
              h.a,
              {
                onClick: function () {
                  localStorage.removeItem("token"),
                    (window.location.href = "/");
                },
                type: "primary",
                icon: a.a.createElement(Pe.a, null),
                danger: !0,
              },
              " ",
              "Salir",
            ),
          ),
        ],
        Ge = function () {
          var e = Object(n.useState)(!1),
            t = Object(w.a)(e, 2),
            r = t[0],
            o = t[1];
          return a.a.createElement(
            je.a.Sider,
            {
              collapsible: !0,
              collapsed: r,
              onCollapse: function (e) {
                return o(e);
              },
            },
            a.a.createElement("div", { className: "demo-logo-vertical" }),
            a.a.createElement(Se.a, {
              theme: "dark",
              defaultSelectedKeys: ["1"],
              mode: "inline",
              items: De,
            }),
          );
        },
        Me = function () {
          var e = Oe.a.useToken().token.colorBgContainer;
          return a.a.createElement(je.a.Header, {
            style: { padding: 0, background: e },
          });
        };
      var qe = function () {
          var e = Oe.a.useToken().token.colorBgContainer;
          return localStorage.getItem("token")
            ? localStorage.getItem("token")
              ? a.a.createElement(
                  i.a,
                  null,
                  a.a.createElement(
                    je.a,
                    { style: { minHeight: "100vh" } },
                    a.a.createElement(Ge, null),
                    a.a.createElement(
                      je.a,
                      null,
                      a.a.createElement(Me, null),
                      a.a.createElement(
                        je.a.Content,
                        { style: { margin: "0 16px" } },
                        a.a.createElement(
                          "div",
                          {
                            style: {
                              padding: 24,
                              minHeight: 360,
                              background: e,
                            },
                          },
                          a.a.createElement(
                            c.c,
                            null,
                            a.a.createElement(c.a, {
                              path: "/activity",
                              element: a.a.createElement(ne, null),
                            }),
                            a.a.createElement(c.a, {
                              path: "/admin",
                              element: a.a.createElement(ae, null),
                            }),
                            a.a.createElement(c.a, {
                              path: "/register",
                              element: a.a.createElement(oe, null),
                            }),
                            a.a.createElement(c.a, {
                              path: "/reward",
                              element: a.a.createElement(fe, null),
                            }),
                            a.a.createElement(c.a, {
                              path: "/user",
                              element: a.a.createElement(xe, null),
                            }),
                            a.a.createElement(c.a, {
                              path: "/winner",
                              element: a.a.createElement(Le, null),
                            }),
                          ),
                        ),
                      ),
                      a.a.createElement(Ie, null),
                    ),
                  ),
                )
              : "super" === localStorage.getItem("super")
              ? a.a.createElement(
                  i.a,
                  null,
                  a.a.createElement(
                    c.c,
                    null,
                    a.a.createElement(c.a, {
                      path: "/admin",
                      element: a.a.createElement(ae, null),
                    }),
                  ),
                )
              : a.a.createElement(
                  i.a,
                  null,
                  a.a.createElement(
                    c.c,
                    null,
                    a.a.createElement(c.a, {
                      path: "/",
                      element: a.a.createElement(b, null),
                    }),
                  ),
                )
            : a.a.createElement(
                i.a,
                null,
                a.a.createElement(
                  c.c,
                  null,
                  a.a.createElement(c.a, {
                    path: "/",
                    element: a.a.createElement(b, null),
                  }),
                ),
              );
        },
        Ve = (r(214), document.getElementById("root"));
      Object(o.createRoot)(Ve).render(
        a.a.createElement(n.StrictMode, null, a.a.createElement(qe, null)),
      );
    },
  },
  [[201, 1, 2]],
]);
//# sourceMappingURL=main.6e5b1085.chunk.js.map
