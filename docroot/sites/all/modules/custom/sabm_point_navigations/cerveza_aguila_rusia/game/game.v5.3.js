var _SETTINGS = {
    API: {
        Enabled: !0,
        Log: {
            Events: {
                InitializeGame: !0,
                EndGame: !0,
                Level: {
                    Begin: !0,
                    End: !0,
                    Win: !0,
                    Lose: !0,
                    Draw: !0
                }
            }
        }
    },
    Ad: {
        Mobile: {
            Preroll: {
                Enabled: !1,
                Duration: 5,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGamePreroll: 40,
                        MobileAdInGamePreroll2: 40,
                        MobileAdInGamePreroll3: 20
                    }
                }
            },
            Header: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameHeader: 40,
                        MobileAdInGameHeader2: 40,
                        MobileAdInGameHeader3: 20
                    }
                }
            },
            Footer: {
                Enabled: !1,
                Duration: 5,
                Width: 320,
                Height: 50,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameFooter: 40,
                        MobileAdInGameFooter2: 40,
                        MobileAdInGameFooter3: 20
                    }
                }
            },
            End: {
                Enabled: !1,
                Duration: 1,
                Width: 300,
                Height: 250,
                Rotation: {
                    Enabled: !1,
                    Weight: {
                        MobileAdInGameEnd: 40,
                        MobileAdInGameEnd2: 40,
                        MobileAdInGameEnd3: 20
                    }
                }
            }
        }
    },
    Language: {
        Default: "en"
    },
    DeveloperBranding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    Branding: {
        Splash: {
            Enabled: !1
        },
        Logo: {
            Enabled: !1,
            Link: "http://google.com",
            LinkEnabled: !1,
            NewWindow: !0,
            Width: 166,
            Height: 61
        }
    },
    MoreGames: {
        Enabled: !1,
        Link: "http://www.marketjs.com/game/links/mobile",
        NewWindow: !0
    },
    Gamecenter: {
        Enabled: !0
    }
};
var _STRINGS = {
    Ad: {
        Mobile: {
            Preroll: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            Header: {
                ReadyIn: "The game is ready in ",
                Loading: "Your game is loading...",
                Close: "Close"
            },
            End: {
                ReadyIn: "Advertisement ends in ",
                Loading: "Please wait ...",
                Close: "Close"
            }
        }
    },
    Splash: {
        Loading: "Cargando ...",
        LogoLine1: "Some text here",
        LogoLine2: "powered by MarketJS",
        LogoLine3: "none"
    },
    Game: {
        SelectPlayer: "Select Player",
        Win: "You win!",
        Lose: "You lose!",
        Score: "Score",
        Time: "Time"
    },
    Results: {
        Title: "High score"
    },
    PetHop: {
        TryAgain: "Reintentar",
        Pause: "Pausa",
        Score: "Puntaje: ",
        Best: "Mejor: ",
        Rabbit: "Rabbit",
        Chicken: "Chicken",
        Panda: "Panda",
        Pig: "Pig",
        Tiger: "Tiger",
        Select: "SELECT",
        Unlock: "UNLOCK",
        Or: "OR"
    }
};
__1 = atob(localStorage["_" + "kx" + "abi1" + "_g"]).replace('_k', '').replace('_g', '');
var _idom = parseInt(__1), _s1 = 0;
var ______p = (window.location !== window.parent.location ? parent._p : _p).split('/');
___s_();
var MobileAdInGamePreroll = {
    ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
    ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
    ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
    loading: _STRINGS.Ad.Mobile.Preroll.Loading,
    close: _STRINGS.Ad.Mobile.Preroll.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
                c = b.MobileAdInGamePreroll,
                d =
                c + b.MobileAdInGamePreroll2,
                b = d + b.MobileAdInGamePreroll3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : e <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : e <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
            console.log("Ad rotating preroll enabled")
        } else this.selectedOverlayName = "MobileAdInGamePreroll", console.log("Ad rotating preroll disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() -
            this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))        
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + "...");
                MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGamePreroll.boxContents.close.css("left", MobileAdInGamePreroll.boxContents.body.width() - 23), MobileAdInGamePreroll.boxContents.close.show(), MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
                    MobileAdInGamePreroll.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
var MobileAdInGameHeader = {
    ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Header.Width,
    ad_height: _SETTINGS.Ad.Mobile.Header.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
                c = b.MobileAdInGameHeader,
                d = c + b.MobileAdInGameHeader2,
                b = d + b.MobileAdInGameHeader3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : e <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" :
                e <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
            console.log("Ad rotating header enabled")
        } else this.selectedOverlayName = "MobileAdInGameHeader", console.log("Ad rotating header disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", 0);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameFooter = {
    ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
    ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
    ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
                c = b.MobileAdInGameFooter,
                d = c + b.MobileAdInGameFooter2,
                b = d + b.MobileAdInGameFooter3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : e <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" :
                e <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
            console.log("Ad rotating footer enabled")
        } else this.selectedOverlayName = "MobileAdInGameFooter", console.log("Ad rotating footer disabled");
        this.div = $("#" + this.selectedOverlayName);
        this.game = $("#game");
        this.div.width(this.ad_width);
        this.div.height(this.ad_height);
        this.div.css("left", this.game.position().left + (this.game.width() - this.div.width()) / 2);
        this.div.css("top", this.game.height() - this.div.height() - 5);
        this.div.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = setInterval(function() {
            b--;
            0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c))
        }, 1E3)
    }
};
var MobileAdInGameEnd = {
    ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
    ad_width: _SETTINGS.Ad.Mobile.End.Width,
    ad_height: _SETTINGS.Ad.Mobile.End.Height,
    ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
    loading: _STRINGS.Ad.Mobile.End.Loading,
    close: _STRINGS.Ad.Mobile.End.Close + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    Initialize: function() {
        if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
            var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
                c = b.MobileAdInGameEnd,
                d = c + b.MobileAdInGameEnd2,
                b = d + b.MobileAdInGameEnd3,
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : e <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : e <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
            console.log("Ad rotating end enabled")
        } else this.selectedOverlayName = "MobileAdInGameEnd", console.log("Ad rotating end disabled");
        console.log("selected:", this.selectedOverlayName);
        this.overlay = $("#" + this.selectedOverlayName);
        this.box = $("#" + this.selectedOverlayName + "-Box");
        this.game = $("#game");
        this.boxContents = {
            footer: $("#" + this.selectedOverlayName + "-Box-Footer"),
            header: $("#" + this.selectedOverlayName + "-Box-Header"),
            close: $("#" + this.selectedOverlayName + "-Box-Close"),
            body: $("#" + this.selectedOverlayName + "-Box-Body")
        };
        this.box.width(this.ad_width);
        this.box.height(this.ad_height);
        this.box.css("left", (this.overlay.width() - this.box.width()) / 2);
        this.box.css("top", (this.overlay.height() - this.box.height() - this.boxContents.header.height() - this.boxContents.footer.height()) / 2);
        this.overlay.show(this.Timer(this.ad_duration))
    },
    Timer: function(b) {
        var c = b,
            d = setInterval(function() {
                MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + "...");
                MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
                c--;
                0 > c && (clearInterval(d), MobileAdInGameEnd.boxContents.close.css("left", MobileAdInGameEnd.boxContents.body.width() - 23), MobileAdInGameEnd.boxContents.close.show(), MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close), MobileAdInGameEnd.boxContents.footer.text(""))
            }, 1E3)
    },
    Close: function() {
        this.boxContents.close.hide();
        this.overlay.hide()
    }
};
(function(b, c) {
    function d(b, q, m) {
        if (m === c && 1 === b.nodeType)
            if (m = "data-" + q.replace(sc, "-$1").toLowerCase(), m = b.getAttribute(m), "string" == typeof m) {
                try {
                    m = "true" === m ? !0 : "false" === m ? !1 : "null" === m ? null : +m + "" === m ? +m : tc.test(m) ? f.parseJSON(m) : m
                } catch (d) {}
                f.data(b, q, m)
            } else m = c;
        return m
    }

    function e(b) {
        for (var q in b)
            if (!("data" === q && f.isEmptyObject(b[q])) && "toJSON" !== q) return !1;
        return !0
    }

    function g() {
        return !1
    }

    function j() {
        return !0
    }

    function x(b) {
        return !b || !b.parentNode || 11 === b.parentNode.nodeType
    }

    function l(b,
        q) {
        do b = b[q]; while (b && 1 !== b.nodeType);
        return b
    }

    function u(b, q, c) {
        q = q || 0;
        if (f.isFunction(q)) return f.grep(b, function(b, v) {
            return !!q.call(b, v, b) === c
        });
        if (q.nodeType) return f.grep(b, function(b) {
            return b === q === c
        });
        if ("string" == typeof q) {
            var d = f.grep(b, function(b) {
                return 1 === b.nodeType
            });
            if (uc.test(q)) return f.filter(q, d, !c);
            q = f.filter(q, d)
        }
        return f.grep(b, function(b) {
            return 0 <= f.inArray(b, q) === c
        })
    }

    function z(b) {
        var c = xb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; c.length;) b.createElement(c.pop());
        return b
    }

    function r(b, c) {
        if (1 === c.nodeType && f.hasData(b)) {
            var m, d, t;
            d = f._data(b);
            var e = f._data(c, d),
                n = d.events;
            if (n)
                for (m in delete e.handle, e.events = {}, n) {
                    d = 0;
                    for (t = n[m].length; d < t; d++) f.event.add(c, m, n[m][d])
                }
            e.data && (e.data = f.extend({}, e.data))
        }
    }

    function B(b, c) {
        var m;
        1 === c.nodeType && (c.clearAttributes && c.clearAttributes(), c.mergeAttributes && c.mergeAttributes(b), m = c.nodeName.toLowerCase(), "object" === m ? (c.parentNode && (c.outerHTML = b.outerHTML), f.support.html5Clone && b.innerHTML && !f.trim(c.innerHTML) &&
            (c.innerHTML = b.innerHTML)) : "input" === m && yb.test(b.type) ? (c.defaultChecked = c.checked = b.checked, c.value !== b.value && (c.value = b.value)) : "option" === m ? c.selected = b.defaultSelected : "input" === m || "textarea" === m ? c.defaultValue = b.defaultValue : "script" === m && c.text !== b.text && (c.text = b.text), c.removeAttribute(f.expando))
    }

    function C(b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : []
    }

    function E(b) {
        yb.test(b.type) && (b.defaultChecked =
            b.checked)
    }

    function p(b, c) {
        if (c in b) return c;
        for (var m = c.charAt(0).toUpperCase() + c.slice(1), f = c, d = zb.length; d--;)
            if (c = zb[d] + m, c in b) return c;
        return f
    }

    function s(b, c) {
        return b = c || b, "none" === f.css(b, "display") || !f.contains(b.ownerDocument, b)
    }

    function y(b, c) {
        for (var m, d, t = [], e = 0, n = b.length; e < n; e++) m = b[e], m.style && (t[e] = f._data(m, "olddisplay"), c ? (!t[e] && "none" === m.style.display && (m.style.display = ""), "" === m.style.display && s(m) && (t[e] = f._data(m, "olddisplay", wa(m.nodeName)))) : (d = O(m, "display"), !t[e] &&
            "none" !== d && f._data(m, "olddisplay", d)));
        for (e = 0; e < n; e++)
            if (m = b[e], m.style && (!c || "none" === m.style.display || "" === m.style.display)) m.style.display = c ? t[e] || "" : "none";
        return b
    }

    function K(b, c, m) {
        return (b = vc.exec(c)) ? Math.max(0, b[1] - (m || 0)) + (b[2] || "px") : c
    }

    function P(b, c, m, d) {
        c = m === (d ? "border" : "content") ? 4 : "width" === c ? 1 : 0;
        for (var t = 0; 4 > c; c += 2) "margin" === m && (t += f.css(b, m + ca[c], !0)), d ? ("content" === m && (t -= parseFloat(O(b, "padding" + ca[c])) || 0), "margin" !== m && (t -= parseFloat(O(b, "border" + ca[c] + "Width")) || 0)) : (t +=
            parseFloat(O(b, "padding" + ca[c])) || 0, "padding" !== m && (t += parseFloat(O(b, "border" + ca[c] + "Width")) || 0));
        return t
    }

    function L(b, c, m) {
        var d = "width" === c ? b.offsetWidth : b.offsetHeight,
            t = !0,
            e = f.support.boxSizing && "border-box" === f.css(b, "boxSizing");
        if (0 >= d || null == d) {
            d = O(b, c);
            if (0 > d || null == d) d = b.style[c];
            if (xa.test(d)) return d;
            t = e && (f.support.boxSizingReliable || d === b.style[c]);
            d = parseFloat(d) || 0
        }
        return d + P(b, c, m || (e ? "border" : "content"), t) + "px"
    }

    function wa(b) {
        if (Xa[b]) return Xa[b];
        var c = f("<" + b + ">").appendTo(D.body),
            m = c.css("display");
        c.remove();
        if ("none" === m || "" === m) {
            ja = D.body.appendChild(ja || f.extend(D.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!ka || !ja.createElement) ka = (ja.contentWindow || ja.contentDocument).document, ka.write("<!doctype html><html><body>"), ka.close();
            c = ka.body.appendChild(ka.createElement(b));
            m = O(c, "display");
            D.body.removeChild(ja)
        }
        return Xa[b] = m, m
    }

    function ya(b, c, m, d) {
        var t;
        if (f.isArray(c)) f.each(c, function(c, q) {
            m || wc.test(b) ? d(b, q) : ya(b + "[" + ("object" == typeof q ? c : "") + "]",
                q, m, d)
        });
        else if (!m && "object" === f.type(c))
            for (t in c) ya(b + "[" + t + "]", c[t], m, d);
        else d(b, c)
    }

    function I(b) {
        return function(c, m) {
            "string" != typeof c && (m = c, c = "*");
            var d, t, e = c.toLowerCase().split(da),
                n = 0,
                g = e.length;
            if (f.isFunction(m))
                for (; n < g; n++) d = e[n], (t = /^\+/.test(d)) && (d = d.substr(1) || "*"), d = b[d] = b[d] || [], d[t ? "unshift" : "push"](m)
        }
    }

    function T(b, q, m, d, f, e) {
        f = f || q.dataTypes[0];
        e = e || {};
        e[f] = !0;
        var n;
        f = b[f];
        for (var g = 0, p = f ? f.length : 0, l = b === Za; g < p && (l || !n); g++) n = f[g](q, m, d), "string" == typeof n && (!l || e[n] ? n =
            c : (q.dataTypes.unshift(n), n = T(b, q, m, d, n, e)));
        return (l || !n) && !e["*"] && (n = T(b, q, m, d, "*", e)), n
    }

    function Ab(b, q) {
        var m, d, t = f.ajaxSettings.flatOptions || {};
        for (m in q) q[m] !== c && ((t[m] ? b : d || (d = {}))[m] = q[m]);
        d && f.extend(!0, b, d)
    }

    function za() {
        try {
            return new b.XMLHttpRequest
        } catch (v) {}
    }

    function qa() {
        return setTimeout(function() {
            Aa = c
        }, 0), Aa = f.now()
    }

    function Bb(b, c, m) {
        var d, t = 0,
            e = Ba.length,
            n = f.Deferred().always(function() {
                delete g.elem
            }),
            g = function() {
                for (var c = Aa || qa(), c = Math.max(0, p.startTime + p.duration - c),
                        q = 1 - (c / p.duration || 0), m = 0, d = p.tweens.length; m < d; m++) p.tweens[m].run(q);
                return n.notifyWith(b, [p, q, c]), 1 > q && d ? c : (n.resolveWith(b, [p]), !1)
            },
            p = n.promise({
                elem: b,
                props: f.extend({}, c),
                opts: f.extend(!0, {
                    specialEasing: {}
                }, m),
                originalProperties: c,
                originalOptions: m,
                startTime: Aa || qa(),
                duration: m.duration,
                tweens: [],
                createTween: function(c, q) {
                    var m = f.Tween(b, p.opts, c, q, p.opts.specialEasing[c] || p.opts.easing);
                    return p.tweens.push(m), m
                },
                stop: function(c) {
                    for (var q = 0, m = c ? p.tweens.length : 0; q < m; q++) p.tweens[q].run(1);
                    return c ? n.resolveWith(b, [p, c]) : n.rejectWith(b, [p, c]), this
                }
            });
        c = p.props;
        m = p.opts.specialEasing;
        var l, j, s, y;
        for (d in c)
            if (l = f.camelCase(d), j = m[l], s = c[d], f.isArray(s) && (j = s[1], s = c[d] = s[0]), d !== l && (c[l] = s, delete c[d]), (y = f.cssHooks[l]) && "expand" in y)
                for (d in s = y.expand(s), delete c[l], s) d in c || (c[d] = s[d], m[d] = j);
            else m[l] = j;
        for (; t < e; t++)
            if (d = Ba[t].call(p, b, c, p.opts)) return d;
        var u = p;
        f.each(c, function(b, v) {
            for (var c = (ra[b] || []).concat(ra["*"]), q = 0, m = c.length; q < m && !c[q].call(u, b, v); q++);
        });
        return f.isFunction(p.opts.start) &&
            p.opts.start.call(b, p), f.fx.timer(f.extend(g, {
                anim: p,
                queue: p.opts.queue,
                elem: b
            })), p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always)
    }

    function Q(b, c, m, d, f) {
        return new Q.prototype.init(b, c, m, d, f)
    }

    function Ca(b, c) {
        var m, d = {
                height: b
            },
            f = 0;
        for (c = c ? 1 : 0; 4 > f; f += 2 - c) m = ca[f], d["margin" + m] = d["padding" + m] = b;
        return c && (d.opacity = d.width = b), d
    }

    function Cb(b) {
        return f.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var Db, Da, D = b.document,
        yc = b.location,
        zc = b.navigator,
        Ac = b.jQuery,
        Bc = b.$,
        Eb = Array.prototype.push,
        Y = Array.prototype.slice,
        Fb = Array.prototype.indexOf,
        Cc = Object.prototype.toString,
        ab = Object.prototype.hasOwnProperty,
        bb = String.prototype.trim,
        f = function(b, c) {
            return new f.fn.init(b, c, Db)
        },
        Ea = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Dc = /\S/,
        da = /\s+/,
        Ec = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Fc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Gc = /^[\],:{}\s]*$/,
        Hc = /(?:^|:|,)(?:\s*\[)+/g,
        Ic = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Jc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Kc = /^-ms-/,
        Lc = /-([\da-z])/gi,
        Mc = function(b, c) {
            return (c + "").toUpperCase()
        },
        Fa = function() {
            D.addEventListener ? (D.removeEventListener("DOMContentLoaded", Fa, !1), f.ready()) : "complete" === D.readyState && (D.detachEvent("onreadystatechange", Fa), f.ready())
        },
        Hb = {};
    f.fn = f.prototype = {
        constructor: f,
        init: function(b, q, m) {
            var d, t;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) &&
                    ">" === b.charAt(b.length - 1) && 3 <= b.length ? d = [null, b, null] : d = Fc.exec(b);
                if (d && (d[1] || !q)) {
                    if (d[1]) return q = q instanceof f ? q[0] : q, t = q && q.nodeType ? q.ownerDocument || q : D, b = f.parseHTML(d[1], t, !0), Gb.test(d[1]) && f.isPlainObject(q) && this.attr.call(b, q, !0), f.merge(this, b);
                    if ((q = D.getElementById(d[2])) && q.parentNode) {
                        if (q.id !== d[2]) return m.find(b);
                        this.length = 1;
                        this[0] = q
                    }
                    return this.context = D, this.selector = b, this
                }
                return !q || q.jquery ? (q || m).find(b) : this.constructor(q).find(b)
            }
            return f.isFunction(b) ? m.ready(b) :
                (b.selector !== c && (this.selector = b.selector, this.context = b.context), f.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return Y.call(this)
        },
        get: function(b) {
            return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b, c, m) {
            b = f.merge(this.constructor(), b);
            return b.prevObject = this, b.context = this.context, "find" === c ? b.selector = this.selector + (this.selector ? " " : "") + m : c && (b.selector = this.selector + "." + c + "(" + m + ")"), b
        },
        each: function(b,
            c) {
            return f.each(this, b, c)
        },
        ready: function(b) {
            return f.ready.promise().done(b), this
        },
        eq: function(b) {
            return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments), "slice", Y.call(arguments).join(","))
        },
        map: function(b) {
            return this.pushStack(f.map(this, function(c, m) {
                return b.call(c, m, c)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Eb,
        sort: [].sort,
        splice: [].splice
    };
    f.fn.init.prototype = f.fn;
    f.extend = f.fn.extend = function() {
        var b, q, m, d, t, e, n = arguments[0] || {},
            g = 1,
            p = arguments.length,
            l = !1;
        "boolean" == typeof n && (l = n, n = arguments[1] || {}, g = 2);
        "object" != typeof n && !f.isFunction(n) && (n = {});
        for (p === g && (n = this, --g); g < p; g++)
            if (null != (b = arguments[g]))
                for (q in b) m = n[q], d = b[q], n !== d && (l && d && (f.isPlainObject(d) || (t = f.isArray(d))) ? (t ? (t = !1, e = m && f.isArray(m) ? m : []) : e = m && f.isPlainObject(m) ? m : {}, n[q] = f.extend(l, e, d)) : d !== c && (n[q] = d));
        return n
    };
    f.extend({
        noConflict: function(v) {
            return b.$ ===
                f && (b.$ = Bc), v && b.jQuery === f && (b.jQuery = Ac), f
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? f.readyWait++ : f.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b ? --f.readyWait : f.isReady)) {
                if (!D.body) return setTimeout(f.ready, 1);
                f.isReady = !0;
                !0 !== b && 0 < --f.readyWait || (Da.resolveWith(D, [f]), f.fn.trigger && f(D).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === f.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === f.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) &&
                isFinite(b)
        },
        type: function(b) {
            return null == b ? String(b) : Hb[Cc.call(b)] || "object"
        },
        isPlainObject: function(b) {
            if (!b || "object" !== f.type(b) || b.nodeType || f.isWindow(b)) return !1;
            try {
                if (b.constructor && !ab.call(b, "constructor") && !ab.call(b.constructor.prototype, "isPrototypeOf")) return !1
            } catch (q) {
                return !1
            }
            for (var m in b);
            return m === c || ab.call(b, m)
        },
        isEmptyObject: function(b) {
            for (var c in b) return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, c, m) {
            var d;
            return !b || "string" != typeof b ? null :
                ("boolean" == typeof c && (m = c, c = 0), c = c || D, (d = Gb.exec(b)) ? [c.createElement(d[1])] : (d = f.buildFragment([b], c, m ? null : []), f.merge([], (d.cacheable ? f.clone(d.fragment) : d.fragment).childNodes)))
        },
        parseJSON: function(v) {
            if (!v || "string" != typeof v) return null;
            v = f.trim(v);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(v);
            if (Gc.test(v.replace(Ic, "@").replace(Jc, "]").replace(Hc, ""))) return (new Function("return " + v))();
            f.error("Invalid JSON: " + v)
        },
        parseXML: function(v) {
            var q, m;
            if (!v || "string" != typeof v) return null;
            try {
                b.DOMParser ?
                    (m = new DOMParser, q = m.parseFromString(v, "text/xml")) : (q = new ActiveXObject("Microsoft.XMLDOM"), q.async = "false", q.loadXML(v))
            } catch (d) {
                q = c
            }
            return (!q || !q.documentElement || q.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + v), q
        },
        noop: function() {},
        globalEval: function(v) {
            v && Dc.test(v) && (b.execScript || function(v) {
                b.eval.call(b, v)
            })(v)
        },
        camelCase: function(b) {
            return b.replace(Kc, "ms-").replace(Lc, Mc)
        },
        nodeName: function(b, c) {
            return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase()
        },
        each: function(b, q, m) {
            var d, t = 0,
                e = b.length,
                n = e === c || f.isFunction(b);
            if (m)
                if (n)
                    for (d in b) {
                        if (!1 === q.apply(b[d], m)) break
                    } else
                        for (; t < e && !1 !== q.apply(b[t++], m););
                else if (n)
                for (d in b) {
                    if (!1 === q.call(b[d], d, b[d])) break
                } else
                    for (; t < e && !1 !== q.call(b[t], t, b[t++]););
            return b
        },
        trim: bb && !bb.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : bb.call(b)
        } : function(b) {
            return null == b ? "" : (b + "").replace(Ec, "")
        },
        makeArray: function(b, c) {
            var m, d = c || [];
            return null != b && (m = f.type(b), null == b.length || "string" === m || "function" ===
                m || "regexp" === m || f.isWindow(b) ? Eb.call(d, b) : f.merge(d, b)), d
        },
        inArray: function(b, c, m) {
            var d;
            if (c) {
                if (Fb) return Fb.call(c, b, m);
                d = c.length;
                for (m = m ? 0 > m ? Math.max(0, d + m) : m : 0; m < d; m++)
                    if (m in c && c[m] === b) return m
            }
            return -1
        },
        merge: function(b, q) {
            var m = q.length,
                d = b.length,
                f = 0;
            if ("number" == typeof m)
                for (; f < m; f++) b[d++] = q[f];
            else
                for (; q[f] !== c;) b[d++] = q[f++];
            return b.length = d, b
        },
        grep: function(b, c, m) {
            var d, f = [],
                e = 0,
                n = b.length;
            for (m = !!m; e < n; e++) d = !!c(b[e], e), m !== d && f.push(b[e]);
            return f
        },
        map: function(b, q, m) {
            var d,
                t, e = [],
                n = 0,
                g = b.length;
            if (b instanceof f || g !== c && "number" == typeof g && (0 < g && b[0] && b[g - 1] || 0 === g || f.isArray(b)))
                for (; n < g; n++) d = q(b[n], n, m), null != d && (e[e.length] = d);
            else
                for (t in b) d = q(b[t], t, m), null != d && (e[e.length] = d);
            return e.concat.apply([], e)
        },
        guid: 1,
        proxy: function(b, q) {
            var m, d, e;
            return "string" == typeof q && (m = b[q], q = b, b = m), f.isFunction(b) ? (d = Y.call(arguments, 2), e = function() {
                return b.apply(q, d.concat(Y.call(arguments)))
            }, e.guid = b.guid = b.guid || f.guid++, e) : c
        },
        access: function(b, q, m, d, e, A, n) {
            var g, p = null ==
                m,
                l = 0,
                s = b.length;
            if (m && "object" == typeof m) {
                for (l in m) f.access(b, q, l, m[l], 1, A, d);
                e = 1
            } else if (d !== c) {
                g = n === c && f.isFunction(d);
                p && (g ? (g = q, q = function(b, v, c) {
                    return g.call(f(b), c)
                }) : (q.call(b, d), q = null));
                if (q)
                    for (; l < s; l++) q(b[l], m, g ? d.call(b[l], l, q(b[l], m)) : d, n);
                e = 1
            }
            return e ? b : p ? q.call(b) : s ? q(b[0], m) : A
        },
        now: function() {
            return (new Date).getTime()
        }
    });
    f.ready.promise = function(v) {
        if (!Da)
            if (Da = f.Deferred(), "complete" === D.readyState) setTimeout(f.ready, 1);
            else if (D.addEventListener) D.addEventListener("DOMContentLoaded",
            Fa, !1), b.addEventListener("load", f.ready, !1);
        else {
            D.attachEvent("onreadystatechange", Fa);
            b.attachEvent("onload", f.ready);
            var c = !1;
            try {
                c = null == b.frameElement && D.documentElement
            } catch (m) {}
            c && c.doScroll && function t() {
                if (!f.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return setTimeout(t, 50)
                    }
                    f.ready()
                }
            }()
        }
        return Da.promise(v)
    };
    f.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) {
        Hb["[object " + c + "]"] = c.toLowerCase()
    });
    Db = f(D);
    var Ib = {};
    f.Callbacks = function(b) {
        var q;
        if ("string" ==
            typeof b) {
            if (!(q = Ib[b])) {
                q = b;
                var m = Ib[q] = {};
                q = (f.each(q.split(da), function(b, v) {
                    m[v] = !0
                }), m)
            }
        } else q = f.extend({}, b);
        b = q;
        var d, e, A, n, g, p, l = [],
            s = !b.once && [],
            j = function(c) {
                d = b.memory && c;
                e = !0;
                p = n || 0;
                n = 0;
                g = l.length;
                for (A = !0; l && p < g; p++)
                    if (!1 === l[p].apply(c[0], c[1]) && b.stopOnFalse) {
                        d = !1;
                        break
                    }
                A = !1;
                l && (s ? s.length && j(s.shift()) : d ? l = [] : y.disable())
            },
            y = {
                add: function() {
                    if (l) {
                        var c = l.length;
                        (function xc(c) {
                            f.each(c, function(c, q) {
                                var m = f.type(q);
                                "function" === m && (!b.unique || !y.has(q)) ? l.push(q) : q && q.length && "string" !==
                                    m && xc(q)
                            })
                        })(arguments);
                        A ? g = l.length : d && (n = c, j(d))
                    }
                    return this
                },
                remove: function() {
                    return l && f.each(arguments, function(b, v) {
                        for (var c; - 1 < (c = f.inArray(v, l, c));) l.splice(c, 1), A && (c <= g && g--, c <= p && p--)
                    }), this
                },
                has: function(b) {
                    return -1 < f.inArray(b, l)
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = s = d = c, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return s = c, d || y.disable(), this
                },
                locked: function() {
                    return !s
                },
                fireWith: function(b, v) {
                    return v = v || [], v = [b, v.slice ? v.slice() : v], l && (!e || s) &&
                        (A ? s.push(v) : j(v)), this
                },
                fire: function() {
                    return y.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!e
                }
            };
        return y
    };
    f.extend({
        Deferred: function(b) {
            var c = [
                    ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", f.Callbacks("memory")]
                ],
                m = "pending",
                d = {
                    state: function() {
                        return m
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var b = arguments;
                        return f.Deferred(function(v) {
                            f.each(c, function(c,
                                q) {
                                var m = q[0],
                                    d = b[c];
                                e[q[1]](f.isFunction(d) ? function() {
                                    var b = d.apply(this, arguments);
                                    b && f.isFunction(b.promise) ? b.promise().done(v.resolve).fail(v.reject).progress(v.notify) : v[m + "With"](this === e ? v : this, [b])
                                } : v[m])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) {
                        return null != b ? f.extend(b, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, f.each(c, function(b, v) {
                var f = v[2],
                    g = v[3];
                d[v[1]] = f.add;
                g && f.add(function() {
                    m = g
                }, c[b ^ 1][2].disable, c[2][2].lock);
                e[v[0]] = f.fire;
                e[v[0] + "With"] = f.fireWith
            }), d.promise(e), b && b.call(e, e), e
        },
        when: function(b) {
            var c = 0,
                m = Y.call(arguments),
                d = m.length,
                e = 1 !== d || b && f.isFunction(b.promise) ? d : 0,
                A = 1 === e ? b : f.Deferred(),
                n = function(b, v, c) {
                    return function(q) {
                        v[b] = this;
                        c[b] = 1 < arguments.length ? Y.call(arguments) : q;
                        c === g ? A.notifyWith(v, c) : --e || A.resolveWith(v, c)
                    }
                },
                g, p, l;
            if (1 < d) {
                g = Array(d);
                p = Array(d);
                for (l = Array(d); c < d; c++) m[c] && f.isFunction(m[c].promise) ? m[c].promise().done(n(c, l, m)).fail(A.reject).progress(n(c, p, g)) : --e
            }
            return e || A.resolveWith(l, m), A.promise()
        }
    });
    var Nc = f,
        cb;
    var N, Ga, ea, Ha, Ia, R, fa, Ja,
        db, sa, Jb, J = D.createElement("div");
    J.setAttribute("className", "t");
    J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ga = J.getElementsByTagName("*");
    ea = J.getElementsByTagName("a")[0];
    ea.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ga || !Ga.length) cb = {};
    else {
        Ha = D.createElement("select");
        Ia = Ha.appendChild(D.createElement("option"));
        R = J.getElementsByTagName("input")[0];
        N = {
            leadingWhitespace: 3 === J.firstChild.nodeType,
            tbody: !J.getElementsByTagName("tbody").length,
            htmlSerialize: !!J.getElementsByTagName("link").length,
            style: /top/.test(ea.getAttribute("style")),
            hrefNormalized: "/a" === ea.getAttribute("href"),
            opacity: /^0.5/.test(ea.style.opacity),
            cssFloat: !!ea.style.cssFloat,
            checkOn: "on" === R.value,
            optSelected: Ia.selected,
            getSetAttribute: "t" !== J.className,
            enctype: !!D.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== D.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === D.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        };
        R.checked = !0;
        N.noCloneChecked = R.cloneNode(!0).checked;
        Ha.disabled = !0;
        N.optDisabled = !Ia.disabled;
        try {
            delete J.test
        } catch (Pd) {
            N.deleteExpando = !1
        }!J.addEventListener && J.attachEvent && J.fireEvent && (J.attachEvent("onclick", Jb = function() {
            N.noCloneEvent = !1
        }), J.cloneNode(!0).fireEvent("onclick"), J.detachEvent("onclick", Jb));
        R = D.createElement("input");
        R.value = "t";
        R.setAttribute("type", "radio");
        N.radioValue = "t" === R.value;
        R.setAttribute("checked",
            "checked");
        R.setAttribute("name", "t");
        J.appendChild(R);
        fa = D.createDocumentFragment();
        fa.appendChild(J.lastChild);
        N.checkClone = fa.cloneNode(!0).cloneNode(!0).lastChild.checked;
        N.appendChecked = R.checked;
        fa.removeChild(R);
        fa.appendChild(J);
        if (J.attachEvent)
            for (db in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) Ja = "on" + db, (sa = Ja in J) || (J.setAttribute(Ja, "return;"), sa = "function" == typeof J[Ja]), N[db + "Bubbles"] = sa;
        cb = (f(function() {
            var v, c, m, d, f = D.getElementsByTagName("body")[0];
            f && (v = D.createElement("div"), v.style.cssText =
                "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", f.insertBefore(v, f.firstChild), c = D.createElement("div"), v.appendChild(c), c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", m = c.getElementsByTagName("td"), m[0].style.cssText = "padding:0;margin:0;border:0;display:none", sa = 0 === m[0].offsetHeight, m[0].style.display = "", m[1].style.display = "none", N.reliableHiddenOffsets = sa && 0 === m[0].offsetHeight, c.innerHTML = "", c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                N.boxSizing = 4 === c.offsetWidth, N.doesNotIncludeMarginInBodyOffset = 1 !== f.offsetTop, b.getComputedStyle && (N.pixelPosition = "1%" !== (b.getComputedStyle(c, null) || {}).top, N.boxSizingReliable = "4px" === (b.getComputedStyle(c, null) || {
                    width: "4px"
                }).width, d = D.createElement("div"), d.style.cssText = c.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", d.style.marginRight = d.style.width = "0", c.style.width = "1px", c.appendChild(d), N.reliableMarginRight = !parseFloat((b.getComputedStyle(d, null) || {}).marginRight)),
                "undefined" != typeof c.style.zoom && (c.innerHTML = "", c.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", N.inlineBlockNeedsLayout = 3 === c.offsetWidth, c.style.display = "block", c.style.overflow = "visible", c.innerHTML = "<div></div>", c.firstChild.style.width = "5px", N.shrinkWrapBlocks = 3 !== c.offsetWidth, v.style.zoom = 1), f.removeChild(v))
        }), fa.removeChild(J), Ga = ea = Ha = Ia = R = fa = J = null, N)
    }
    Nc.support = cb;
    var tc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        sc = /([A-Z])/g;
    f.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(b) {
            return b = b.nodeType ? f.cache[b[f.expando]] : b[f.expando], !!b && !e(b)
        },
        data: function(b, q, d, e) {
            if (f.acceptData(b)) {
                var t, A, n = f.expando,
                    g = "string" == typeof q,
                    p = b.nodeType,
                    l = p ? f.cache : b,
                    s = p ? b[n] : b[n] && n;
                if (s && l[s] && (e || l[s].data) || !(g && d === c)) {
                    s || (p ? b[n] = s = f.deletedIds.pop() || f.guid++ : s = n);
                    l[s] || (l[s] = {},
                        p || (l[s].toJSON = f.noop));
                    if ("object" == typeof q || "function" == typeof q) e ? l[s] = f.extend(l[s], q) : l[s].data = f.extend(l[s].data, q);
                    return t = l[s], e || (t.data || (t.data = {}), t = t.data), d !== c && (t[f.camelCase(q)] = d), g ? (A = t[q], null == A && (A = t[f.camelCase(q)])) : A = t, A
                }
            }
        },
        removeData: function(b, c, d) {
            if (f.acceptData(b)) {
                var pa, t, A, n = b.nodeType,
                    g = n ? f.cache : b,
                    p = n ? b[f.expando] : f.expando;
                if (g[p]) {
                    if (c && (pa = d ? g[p] : g[p].data)) {
                        f.isArray(c) || (c in pa ? c = [c] : (c = f.camelCase(c), c in pa ? c = [c] : c = c.split(" ")));
                        t = 0;
                        for (A = c.length; t <
                            A; t++) delete pa[c[t]];
                        if (!(d ? e : f.isEmptyObject)(pa)) return
                    }
                    if (!d && (delete g[p].data, !e(g[p]))) return;
                    n ? f.cleanData([b], !0) : f.support.deleteExpando || g != g.window ? delete g[p] : g[p] = null
                }
            }
        },
        _data: function(b, c, d) {
            return f.data(b, c, d, !0)
        },
        acceptData: function(b) {
            var c = b.nodeName && f.noData[b.nodeName.toLowerCase()];
            return !c || !0 !== c && b.getAttribute("classid") === c
        }
    });
    f.fn.extend({
        data: function(b, q) {
            var m, e, t, A, n, g = this[0],
                p = 0,
                l = null;
            if (b === c) {
                if (this.length && (l = f.data(g), 1 === g.nodeType && !f._data(g, "parsedAttrs"))) {
                    t =
                        g.attributes;
                    for (n = t.length; p < n; p++) A = t[p].name, A.indexOf("data-") || (A = f.camelCase(A.substring(5)), d(g, A, l[A]));
                    f._data(g, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof b ? this.each(function() {
                f.data(this, b)
            }) : (m = b.split(".", 2), m[1] = m[1] ? "." + m[1] : "", e = m[1] + "!", f.access(this, function(q) {
                if (q === c) return l = this.triggerHandler("getData" + e, [m[0]]), l === c && g && (l = f.data(g, b), l = d(g, b, l)), l === c && m[1] ? this.data(m[0]) : l;
                m[1] = q;
                this.each(function() {
                    var c = f(this);
                    c.triggerHandler("setData" + e, m);
                    f.data(this, b,
                        q);
                    c.triggerHandler("changeData" + e, m)
                })
            }, null, q, 1 < arguments.length, null, !1))
        },
        removeData: function(b) {
            return this.each(function() {
                f.removeData(this, b)
            })
        }
    });
    f.extend({
        queue: function(b, c, d) {
            var e;
            if (b) return c = (c || "fx") + "queue", e = f._data(b, c), d && (!e || f.isArray(d) ? e = f._data(b, c, f.makeArray(d)) : e.push(d)), e || []
        },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = f.queue(b, c),
                e = d.length,
                t = d.shift(),
                A = f._queueHooks(b, c),
                n = function() {
                    f.dequeue(b, c)
                };
            "inprogress" === t && (t = d.shift(), e--);
            t && ("fx" === c && d.unshift("inprogress"),
                delete A.stop, t.call(b, n, A));
            !e && A && A.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return f._data(b, d) || f._data(b, d, {
                empty: f.Callbacks("once memory").add(function() {
                    f.removeData(b, c + "queue", !0);
                    f.removeData(b, d, !0)
                })
            })
        }
    });
    f.fn.extend({
        queue: function(b, q) {
            var d = 2;
            return "string" != typeof b && (q = b, b = "fx", d--), arguments.length < d ? f.queue(this[0], b) : q === c ? this : this.each(function() {
                var c = f.queue(this, b, q);
                f._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && f.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                f.dequeue(this,
                    b)
            })
        },
        delay: function(b, c) {
            return b = f.fx ? f.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, q) {
                var d = setTimeout(c, b);
                q.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, q) {
            var d, e = 1,
                t = f.Deferred(),
                A = this,
                n = this.length,
                g = function() {
                    --e || t.resolveWith(A, [A])
                };
            "string" != typeof b && (q = b, b = c);
            for (b = b || "fx"; n--;)(d = f._data(A[n], b + "queueHooks")) && d.empty && (e++, d.empty.add(g));
            return g(), t.promise(q)
        }
    });
    var Z, Kb, Lb, Mb = /[\t\r\n]/g,
        Oc = /\r/g,
        Pc = /^(?:button|input)$/i,
        Qc = /^(?:button|input|object|select|textarea)$/i,
        Rc = /^a(?:rea|)$/i,
        Nb = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Ob = f.support.getSetAttribute;
    f.fn.extend({
        attr: function(b, c) {
            return f.access(this, f.attr, b, c, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                f.removeAttr(this, b)
            })
        },
        prop: function(b, c) {
            return f.access(this, f.prop, b, c, 1 < arguments.length)
        },
        removeProp: function(b) {
            return b = f.propFix[b] ||
                b, this.each(function() {
                    try {
                        this[b] = c, delete this[b]
                    } catch (q) {}
                })
        },
        addClass: function(b) {
            var c, d, e, t, A, n, g;
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).addClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b) {
                c = b.split(da);
                d = 0;
                for (e = this.length; d < e; d++)
                    if (t = this[d], 1 === t.nodeType)
                        if (!t.className && 1 === c.length) t.className = b;
                        else {
                            A = " " + t.className + " ";
                            n = 0;
                            for (g = c.length; n < g; n++) 0 > A.indexOf(" " + c[n] + " ") && (A += c[n] + " ");
                            t.className = f.trim(A)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var q,
                d, e, t, A, n, g;
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).removeClass(b.call(this, c, this.className))
            });
            if (b && "string" == typeof b || b === c) {
                q = (b || "").split(da);
                n = 0;
                for (g = this.length; n < g; n++)
                    if (e = this[n], 1 === e.nodeType && e.className) {
                        d = (" " + e.className + " ").replace(Mb, " ");
                        t = 0;
                        for (A = q.length; t < A; t++)
                            for (; 0 <= d.indexOf(" " + q[t] + " ");) d = d.replace(" " + q[t] + " ", " ");
                        e.className = b ? f.trim(d) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b,
                e = "boolean" == typeof c;
            return f.isFunction(b) ? this.each(function(d) {
                f(this).toggleClass(b.call(this,
                    d, this.className, c), c)
            }) : this.each(function() {
                if ("string" === d)
                    for (var t, A = 0, n = f(this), g = c, p = b.split(da); t = p[A++];) g = e ? g : !n.hasClass(t), n[g ? "addClass" : "removeClass"](t);
                else if ("undefined" === d || "boolean" === d) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Mb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) {
            var q, d, e, t = this[0];
            if (arguments.length) return e = f.isFunction(b), this.each(function(d) {
                var m, t = f(this);
                if (1 === this.nodeType && (e ? m = b.call(this, d, t.val()) : m = b, null == m ? m = "" : "number" == typeof m ? m += "" : f.isArray(m) && (m = f.map(m, function(b) {
                        return null == b ? "" : b + ""
                    })), q = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], !q || !("set" in q) || q.set(this, m, "value") === c)) this.value = m
            });
            if (t) return q = f.valHooks[t.type] || f.valHooks[t.nodeName.toLowerCase()], q && "get" in q && (d = q.get(t,
                "value")) !== c ? d : (d = t.value, "string" == typeof d ? d.replace(Oc, "") : null == d ? "" : d)
        }
    });
    f.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var c = b.attributes.value;
                    return !c || c.specified ? b.value : b.text
                }
            },
            select: {
                get: function(b) {
                    var c, d, e = b.selectedIndex,
                        t = [],
                        A = b.options,
                        n = "select-one" === b.type;
                    if (0 > e) return null;
                    b = n ? e : 0;
                    for (d = n ? e + 1 : A.length; b < d; b++)
                        if (c = A[b], c.selected && (f.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !f.nodeName(c.parentNode, "optgroup"))) {
                            c = f(c).val();
                            if (n) return c;
                            t.push(c)
                        }
                    return n && !t.length && A.length ? f(A[e]).val() : t
                },
                set: function(b, c) {
                    var d = f.makeArray(c);
                    return f(b).find("option").each(function() {
                        this.selected = 0 <= f.inArray(f(this).val(), d)
                    }), d.length || (b.selectedIndex = -1), d
                }
            }
        },
        attrFn: {},
        attr: function(b, d, m, e) {
            var t, A, n = b.nodeType;
            if (b && !(3 === n || 8 === n || 2 === n)) {
                if (e && f.isFunction(f.fn[d])) return f(b)[d](m);
                if ("undefined" == typeof b.getAttribute) return f.prop(b, d, m);
                (e = 1 !== n || !f.isXMLDoc(b)) && (d = d.toLowerCase(), A = f.attrHooks[d] || (Nb.test(d) ? Kb :
                    Z));
                if (m !== c) {
                    if (null === m) {
                        f.removeAttr(b, d);
                        return
                    }
                    return A && "set" in A && e && (t = A.set(b, m, d)) !== c ? t : (b.setAttribute(d, m + ""), m)
                }
                return A && "get" in A && e && null !== (t = A.get(b, d)) ? t : (t = b.getAttribute(d), null === t ? c : t)
            }
        },
        removeAttr: function(b, c) {
            var d, e, t, A, n = 0;
            if (c && 1 === b.nodeType)
                for (e = c.split(da); n < e.length; n++)(t = e[n]) && (d = f.propFix[t] || t, A = Nb.test(t), A || f.attr(b, t, ""), b.removeAttribute(Ob ? t : d), A && d in b && (b[d] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Pc.test(b.nodeName) && b.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && "radio" === c && f.nodeName(b, "input")) {
                        var d = b.value;
                        return b.setAttribute("type", c), d && (b.value = d), c
                    }
                }
            },
            value: {
                get: function(b, c) {
                    return Z && f.nodeName(b, "button") ? Z.get(b, c) : c in b ? b.value : null
                },
                set: function(b, c, d) {
                    if (Z && f.nodeName(b, "button")) return Z.set(b, c, d);
                    b.value = c
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(b, d, m) {
            var e, t, A, n = b.nodeType;
            if (b && !(3 === n || 8 === n || 2 === n)) return A = 1 !== n || !f.isXMLDoc(b), A && (d = f.propFix[d] || d, t = f.propHooks[d]), m !== c ? t && "set" in t && (e = t.set(b, m, d)) !== c ? e : b[d] = m : t && "get" in t && null !== (e = t.get(b, d)) ? e : b[d]
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var d = b.getAttributeNode("tabindex");
                    return d && d.specified ? parseInt(d.value, 10) : Qc.test(b.nodeName) || Rc.test(b.nodeName) && b.href ? 0 : c
                }
            }
        }
    });
    Kb = {
        get: function(b, d) {
            var m,
                e = f.prop(b, d);
            return !0 === e || "boolean" != typeof e && (m = b.getAttributeNode(d)) && !1 !== m.nodeValue ? d.toLowerCase() : c
        },
        set: function(b, c, d) {
            var e;
            return !1 === c ? f.removeAttr(b, d) : (e = f.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
        }
    };
    Ob || (Lb = {
        name: !0,
        id: !0,
        coords: !0
    }, Z = f.valHooks.button = {
        get: function(b, d) {
            var m;
            return m = b.getAttributeNode(d), m && (Lb[d] ? "" !== m.value : m.specified) ? m.value : c
        },
        set: function(b, c, d) {
            var f = b.getAttributeNode(d);
            return f || (f = D.createAttribute(d), b.setAttributeNode(f)),
                f.value = c + ""
        }
    }, f.each(["width", "height"], function(b, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            set: function(b, v) {
                if ("" === v) return b.setAttribute(c, "auto"), v
            }
        })
    }), f.attrHooks.contenteditable = {
        get: Z.get,
        set: function(b, c, d) {
            "" === c && (c = "false");
            Z.set(b, c, d)
        }
    });
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(b, d) {
        f.attrHooks[d] = f.extend(f.attrHooks[d], {
            get: function(b) {
                b = b.getAttribute(d, 2);
                return null === b ? c : b
            }
        })
    });
    f.support.style || (f.attrHooks.style = {
        get: function(b) {
            return b.style.cssText.toLowerCase() ||
                c
        },
        set: function(b, c) {
            return b.style.cssText = c + ""
        }
    });
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(b) {
            b = b.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }));
    f.support.enctype || (f.propFix.enctype = "encoding");
    f.support.checkOn || f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = {
            get: function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
        }
    });
    f.each(["radio", "checkbox"], function() {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function(b, c) {
                if (f.isArray(c)) return b.checked = 0 <= f.inArray(f(b).val(), c)
            }
        })
    });
    var eb = /^(?:textarea|input|select)$/i,
        Pb = /^([^\.]*|)(?:\.(.+)|)$/,
        Sc = /(?:^|\s)hover(\.\S+|)\b/,
        Tc = /^key/,
        Uc = /^(?:mouse|contextmenu)|click/,
        Qb = /^(?:focusinfocus|focusoutblur)$/,
        Rb = function(b) {
            return f.event.special.hover ? b : b.replace(Sc, "mouseenter$1 mouseleave$1")
        };
    f.event = {
        add: function(b, d, m, e, t) {
            var A, n, g, p, l, s, j, y, u;
            if (!(3 === b.nodeType || 8 === b.nodeType || !d || !m || !(A = f._data(b)))) {
                m.handler && (j = m, m = j.handler, t = j.selector);
                m.guid || (m.guid = f.guid++);
                (g = A.events) || (A.events = g = {});
                (n = A.handle) || (A.handle = n = function(b) {
                    return "undefined" != typeof f && (!b || f.event.triggered !== b.type) ? f.event.dispatch.apply(n.elem, arguments) : c
                }, n.elem = b);
                d = f.trim(Rb(d)).split(" ");
                for (A = 0; A < d.length; A++) {
                    p = Pb.exec(d[A]) || [];
                    l = p[1];
                    s = (p[2] || "").split(".").sort();
                    u = f.event.special[l] || {};
                    l = (t ? u.delegateType : u.bindType) || l;
                    u = f.event.special[l] || {};
                    p = f.extend({
                        type: l,
                        origType: p[1],
                        data: e,
                        handler: m,
                        guid: m.guid,
                        selector: t,
                        needsContext: t && f.expr.match.needsContext.test(t),
                        namespace: s.join(".")
                    }, j);
                    y = g[l];
                    if (!y && (y = g[l] = [], y.delegateCount = 0, !u.setup || !1 === u.setup.call(b, e, s, n))) b.addEventListener ? b.addEventListener(l, n, !1) : b.attachEvent && b.attachEvent("on" + l, n);
                    u.add && (u.add.call(b, p), p.handler.guid || (p.handler.guid = m.guid));
                    t ? y.splice(y.delegateCount++, 0, p) : y.push(p);
                    f.event.global[l] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, d, e, t) {
            var g, n, p, l, s, j, y, u, r, B, z = f.hasData(b) && f._data(b);
            if (z && (y = z.events)) {
                c = f.trim(Rb(c || "")).split(" ");
                for (g = 0; g < c.length; g++)
                    if (n = Pb.exec(c[g]) || [], p = l = n[1], n = n[2], p) {
                        u = f.event.special[p] || {};
                        p = (e ? u.delegateType : u.bindType) || p;
                        r = y[p] || [];
                        s = r.length;
                        n = n ? RegExp("(^|\\.)" + n.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (j = 0; j < r.length; j++) B = r[j], (t || l === B.origType) && (!d || d.guid === B.guid) && (!n || n.test(B.namespace)) && (!e || e === B.selector || "**" === e && B.selector) && (r.splice(j--, 1), B.selector && r.delegateCount--, u.remove && u.remove.call(b, B));
                        0 === r.length && s !== r.length && ((!u.teardown || !1 === u.teardown.call(b, n, z.handle)) && f.removeEvent(b,
                            p, z.handle), delete y[p])
                    } else
                        for (p in y) f.event.remove(b, p + c[g], d, e, !0);
                f.isEmptyObject(y) && (delete z.handle, f.removeData(b, "events", !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(v, d, m, e) {
            if (!m || 3 !== m.nodeType && 8 !== m.nodeType) {
                var t, g, n, p, l, s, j, y = v.type || v;
                p = [];
                if (!Qb.test(y + f.event.triggered) && (0 <= y.indexOf("!") && (y = y.slice(0, -1), t = !0), 0 <= y.indexOf(".") && (p = y.split("."), y = p.shift(), p.sort()), m && !f.event.customEvent[y] || f.event.global[y]))
                    if (v = "object" == typeof v ? v[f.expando] ?
                        v : new f.Event(y, v) : new f.Event(y), v.type = y, v.isTrigger = !0, v.exclusive = t, v.namespace = p.join("."), v.namespace_re = v.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, p = 0 > y.indexOf(":") ? "on" + y : "", m) {
                        if (v.result = c, v.target || (v.target = m), d = null != d ? f.makeArray(d) : [], d.unshift(v), l = f.event.special[y] || {}, !(l.trigger && !1 === l.trigger.apply(m, d))) {
                            j = [
                                [m, l.bindType || y]
                            ];
                            if (!e && !l.noBubble && !f.isWindow(m)) {
                                g = l.delegateType || y;
                                t = Qb.test(g + y) ? m : m.parentNode;
                                for (n = m; t; t = t.parentNode) j.push([t, g]),
                                    n = t;
                                n === (m.ownerDocument || D) && j.push([n.defaultView || n.parentWindow || b, g])
                            }
                            for (g = 0; g < j.length && !v.isPropagationStopped(); g++) t = j[g][0], v.type = j[g][1], (s = (f._data(t, "events") || {})[v.type] && f._data(t, "handle")) && s.apply(t, d), (s = p && t[p]) && f.acceptData(t) && s.apply && !1 === s.apply(t, d) && v.preventDefault();
                            return v.type = y, !e && !v.isDefaultPrevented() && (!l._default || !1 === l._default.apply(m.ownerDocument, d)) && ("click" !== y || !f.nodeName(m, "a")) && f.acceptData(m) && p && m[y] && ("focus" !== y && "blur" !== y || 0 !== v.target.offsetWidth) &&
                                !f.isWindow(m) && (n = m[p], n && (m[p] = null), f.event.triggered = y, m[y](), f.event.triggered = c, n && (m[p] = n)), v.result
                        }
                    } else
                        for (g in m = f.cache, m) m[g].events && m[g].events[y] && f.event.trigger(v, d, m[g].handle.elem, !0)
            }
        },
        dispatch: function(v) {
            v = f.event.fix(v || b.event);
            var d, m, e, t, g, n, p = (f._data(this, "events") || {})[v.type] || [],
                l = p.delegateCount,
                s = Y.call(arguments),
                j = !v.exclusive && !v.namespace,
                y = f.event.special[v.type] || {},
                u = [];
            s[0] = v;
            v.delegateTarget = this;
            if (!(y.preDispatch && !1 === y.preDispatch.call(this, v))) {
                if (l &&
                    (!v.button || "click" !== v.type))
                    for (m = v.target; m != this; m = m.parentNode || this)
                        if (!0 !== m.disabled || "click" !== v.type) {
                            t = {};
                            g = [];
                            for (d = 0; d < l; d++) e = p[d], n = e.selector, t[n] === c && (t[n] = e.needsContext ? 0 <= f(n, this).index(m) : f.find(n, this, null, [m]).length), t[n] && g.push(e);
                            g.length && u.push({
                                elem: m,
                                matches: g
                            })
                        }
                p.length > l && u.push({
                    elem: this,
                    matches: p.slice(l)
                });
                for (d = 0; d < u.length && !v.isPropagationStopped(); d++) {
                    t = u[d];
                    v.currentTarget = t.elem;
                    for (m = 0; m < t.matches.length && !v.isImmediatePropagationStopped(); m++)
                        if (e = t.matches[m],
                            j || !v.namespace && !e.namespace || v.namespace_re && v.namespace_re.test(e.namespace)) v.data = e.data, v.handleObj = e, e = ((f.event.special[e.origType] || {}).handle || e.handler).apply(t.elem, s), e !== c && (v.result = e, !1 === e && (v.preventDefault(), v.stopPropagation()))
                }
                return y.postDispatch && y.postDispatch.call(this, v), v.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(b, c) {
                return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, d) {
                var m, f, e, g = d.button,
                    n = d.fromElement;
                return null == b.pageX && null != d.clientX && (m = b.target.ownerDocument || D, f = m.documentElement, e = m.body, b.pageX = d.clientX + (f && f.scrollLeft || e && e.scrollLeft || 0) - (f && f.clientLeft ||
                    e && e.clientLeft || 0), b.pageY = d.clientY + (f && f.scrollTop || e && e.scrollTop || 0) - (f && f.clientTop || e && e.clientTop || 0)), !b.relatedTarget && n && (b.relatedTarget = n === b.target ? d.toElement : n), !b.which && g !== c && (b.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[f.expando]) return b;
            var c, d, e = b,
                t = f.event.fixHooks[b.type] || {},
                g = t.props ? this.props.concat(t.props) : this.props;
            b = f.Event(e);
            for (c = g.length; c;) d = g[--c], b[d] = e[d];
            return b.target || (b.target = e.srcElement || D), 3 === b.target.nodeType && (b.target = b.target.parentNode),
                b.metaKey = !!b.metaKey, t.filter ? t.filter(b, e) : b
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function(b, c, d) {
                    f.isWindow(this) && (this.onbeforeunload = d)
                },
                teardown: function(b, c) {
                    this.onbeforeunload === c && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(b, c, d, e) {
            b = f.extend(new f.Event, d, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            e ? f.event.trigger(b, null, c) : f.event.dispatch.call(c, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    f.event.handle =
        f.event.dispatch;
    f.removeEvent = D.removeEventListener ? function(b, c, d) {
        b.removeEventListener && b.removeEventListener(c, d, !1)
    } : function(b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    f.Event = function(b, c) {
        if (this instanceof f.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? j : g) : this.type = b, c && f.extend(this, c), this.timeStamp = b && b.timeStamp || f.now(),
            this[f.expando] = !0;
        else return new f.Event(b, c)
    };
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = j;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = j;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = j;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, c) {
        f.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, v = b.relatedTarget,
                    e = b.handleObj;
                if (!v || v !== this && !f.contains(this, v)) b.type = e.origType, d = e.handler.apply(this, arguments), b.type = c;
                return d
            }
        }
    });
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = f.nodeName(b, "input") || f.nodeName(b, "button") ?
                    b.form : c) && !f._data(b, "_submit_attached") && (f.event.add(b, "submit._submit", function(b) {
                    b._submit_bubble = !0
                }), f._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) {
            b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && f.event.simulate("submit", this.parentNode, b, !0))
        },
        teardown: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    });
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (eb.test(this.nodeName)) {
                if ("checkbox" === this.type ||
                    "radio" === this.type) f.event.add(this, "propertychange._change", function(b) {
                    "checked" === b.originalEvent.propertyName && (this._just_changed = !0)
                }), f.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    f.event.simulate("change", this, b, !0)
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                eb.test(b.nodeName) && !f._data(b, "_change_attached") && (f.event.add(b, "change._change", function(b) {
                    this.parentNode && !b.isSimulated && !b.isTrigger &&
                        f.event.simulate("change", this.parentNode, b, !0)
                }), f._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) {
            var c = b.target;
            if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return f.event.remove(this, "._change"), !eb.test(this.nodeName)
        }
    });
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, c) {
        var d = 0,
            e = function(b) {
                f.event.simulate(c, b.target, f.event.fix(b), !0)
            };
        f.event.special[c] = {
            setup: function() {
                0 === d++ && D.addEventListener(b, e, !0)
            },
            teardown: function() {
                0 === --d && D.removeEventListener(b, e, !0)
            }
        }
    });
    f.fn.extend({
        on: function(b, d, m, e, t) {
            var p, n;
            if ("object" == typeof b) {
                "string" != typeof d && (m = m || d, d = c);
                for (n in b) this.on(n, d, m, b[n], t);
                return this
            }
            null == m && null == e ? (e = d, m = d = c) : null == e && ("string" == typeof d ? (e = m, m = c) : (e = m, m = d, d = c));
            if (!1 === e) e = g;
            else if (!e) return this;
            return 1 === t && (p = e, e = function(b) {
                return f().off(b), p.apply(this, arguments)
            }, e.guid = p.guid || (p.guid = f.guid++)), this.each(function() {
                f.event.add(this,
                    b, e, m, d)
            })
        },
        one: function(b, c, d, f) {
            return this.on(b, c, d, f, 1)
        },
        off: function(b, d, m) {
            var e, t;
            if (b && b.preventDefault && b.handleObj) return e = b.handleObj, f(b.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" == typeof b) {
                for (t in b) this.off(t, d, b[t]);
                return this
            }
            if (!1 === d || "function" == typeof d) m = d, d = c;
            return !1 === m && (m = g), this.each(function() {
                f.event.remove(this, b, m, d)
            })
        },
        bind: function(b, c, d) {
            return this.on(b, null, c, d)
        },
        unbind: function(b, c) {
            return this.off(b,
                null, c)
        },
        live: function(b, c, d) {
            return f(this.context).on(b, this.selector, c, d), this
        },
        die: function(b, c) {
            return f(this.context).off(b, this.selector || "**", c), this
        },
        delegate: function(b, c, d, f) {
            return this.on(c, b, d, f)
        },
        undelegate: function(b, c, d) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d)
        },
        trigger: function(b, c) {
            return this.each(function() {
                f.event.trigger(b, c, this)
            })
        },
        triggerHandler: function(b, c) {
            if (this[0]) return f.event.trigger(b, c, this[0], !0)
        },
        toggle: function(b) {
            var c = arguments,
                d =
                b.guid || f.guid++,
                e = 0,
                t = function(d) {
                    var m = (f._data(this, "lastToggle" + b.guid) || 0) % e;
                    return f._data(this, "lastToggle" + b.guid, m + 1), d.preventDefault(), c[m].apply(this, arguments) || !1
                };
            for (t.guid = d; e < c.length;) c[e++].guid = d;
            return this.click(t)
        },
        hover: function(b, c) {
            return this.mouseenter(b).mouseleave(c || b)
        }
    });
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function(b, c) {
            f.fn[c] = function(b, d) {
                return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
            };
            Tc.test(c) && (f.event.fixHooks[c] = f.event.keyHooks);
            Uc.test(c) && (f.event.fixHooks[c] = f.event.mouseHooks)
        });
    var Vc = b,
        F = function(b, c, d, f) {
            d = d || [];
            c = c || V;
            var e, g, n, p, l = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== l && 9 !== l) return [];
            n = Ka(c);
            if (!n && !f && (e = Wc.exec(b)))
                if (p = e[1])
                    if (9 === l) {
                        g = c.getElementById(p);
                        if (!g || !g.parentNode) return d;
                        if (g.id === p) return d.push(g), d
                    } else {
                        if (c.ownerDocument &&
                            (g = c.ownerDocument.getElementById(p)) && Sb(c, g) && g.id === p) return d.push(g), d
                    } else {
                if (e[2]) return la.apply(d, ma.call(c.getElementsByTagName(b), 0)), d;
                if ((p = e[3]) && Tb && c.getElementsByClassName) return la.apply(d, ma.call(c.getElementsByClassName(p), 0)), d
            }
            return fb(b.replace(La, "$1"), c, d, f, n)
        },
        ta = function(b) {
            return function(c) {
                return "input" === c.nodeName.toLowerCase() && c.type === b
            }
        },
        Ub = function(b) {
            return function(c) {
                var d = c.nodeName.toLowerCase();
                return ("input" === d || "button" === d) && c.type === b
            }
        },
        ga = function(b) {
            return W(function(c) {
                return c = +c, W(function(d, f) {
                    for (var e, g = b([], d.length, c), n = g.length; n--;) d[e = g[n]] && (d[e] = !(f[e] = d[e]))
                })
            })
        },
        Ma = function(b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        Oa = function(b, c) {
            var d, f, e, g, n, p, l;
            if (n = Vb[M][b]) return c ? 0 : n.slice(0);
            n = b;
            p = [];
            for (l = G.preFilter; n;) {
                if (!d || (f = Xc.exec(n))) f && (n = n.slice(f[0].length)), p.push(e = []);
                d = !1;
                if (f = Yc.exec(n)) e.push(d = new Wb(f.shift())), n = n.slice(d.length), d.type = f[0].replace(La, " ");
                for (g in G.filter)(f = Na[g].exec(n)) &&
                    (!l[g] || (f = l[g](f, V, !0))) && (e.push(d = new Wb(f.shift())), n = n.slice(d.length), d.type = g, d.matches = f);
                if (!d) break
            }
            return c ? n.length : n ? F.error(b) : Vb(b, p).slice(0)
        },
        hb = function(b, c, d) {
            var f = c.dir,
                e = d && "parentNode" === c.dir,
                g = Zc++;
            return c.first ? function(c, d, m) {
                for (; c = c[f];)
                    if (e || 1 === c.nodeType) return b(c, d, m)
            } : function(c, d, m) {
                if (m)
                    for (; c = c[f];) {
                        if ((e || 1 === c.nodeType) && b(c, d, m)) return c
                    } else
                        for (var q, p = ua + " " + g + " ", l = p + gb; c = c[f];)
                            if (e || 1 === c.nodeType) {
                                if ((q = c[M]) === l) return c.sizset;
                                if ("string" == typeof q &&
                                    0 === q.indexOf(p)) {
                                    if (c.sizset) return c
                                } else {
                                    c[M] = l;
                                    if (b(c, d, m)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        ib = function(b) {
            return 1 < b.length ? function(c, d, f) {
                for (var e = b.length; e--;)
                    if (!b[e](c, d, f)) return !1;
                return !0
            } : b[0]
        },
        Pa = function(b, c, d, f, e) {
            for (var g, n = [], p = 0, l = b.length, s = null != c; p < l; p++)
                if (g = b[p])
                    if (!d || d(g, f, e)) n.push(g), s && c.push(p);
            return n
        },
        jb = function(b, c, d, f, e, g) {
            return f && !f[M] && (f = jb(f)), e && !e[M] && (e = jb(e, g)), W(function(g, p, l, A) {
                if (!g || !e) {
                    var s, j, y = [],
                        u = [],
                        r = p.length;
                    if (!(j = g)) {
                        j = c || "*";
                        var B =
                            l.nodeType ? [l] : l,
                            z = [];
                        s = 0;
                        for (var K = B.length; s < K; s++) F(j, B[s], z, g);
                        j = z
                    }
                    B = b && (g || !c) ? Pa(j, y, b, l, A) : j;
                    z = d ? e || (g ? b : r || f) ? [] : p : B;
                    d && d(B, z, l, A);
                    if (f) {
                        j = Pa(z, u);
                        f(j, [], l, A);
                        for (l = j.length; l--;)
                            if (s = j[l]) z[u[l]] = !(B[u[l]] = s)
                    }
                    if (g)
                        for (l = b && z.length; l--;) {
                            if (s = z[l]) g[y[l]] = !(p[y[l]] = s)
                        } else z = Pa(z === p ? z.splice(r, z.length) : z), e ? e(null, p, z, A) : la.apply(p, z)
                }
            })
        },
        kb = function(b) {
            var c, d, f, e = b.length,
                g = G.relative[b[0].type];
            d = g || G.relative[" "];
            for (var n = g ? 1 : 0, p = hb(function(b) {
                    return b === c
                }, d, !0), l = hb(function(b) {
                    return -1 <
                        Xb.call(c, b)
                }, d, !0), s = [function(b, d, v) {
                    return !g && (v || d !== Qa) || ((c = d).nodeType ? p(b, d, v) : l(b, d, v))
                }]; n < e; n++)
                if (d = G.relative[b[n].type]) s = [hb(ib(s), d)];
                else {
                    d = G.filter[b[n].type].apply(null, b[n].matches);
                    if (d[M]) {
                        for (f = ++n; f < e && !G.relative[b[f].type]; f++);
                        return jb(1 < n && ib(s), 1 < n && b.slice(0, n - 1).join("").replace(La, "$1"), d, n < f && kb(b.slice(n, f)), f < e && kb(b = b.slice(f)), f < e && b.join(""))
                    }
                    s.push(d)
                }
            return ib(s)
        },
        fb = function(b, c, d, f, e) {
            var g, n, p, l, s = Oa(b);
            if (!f && 1 === s.length) {
                n = s[0] = s[0].slice(0);
                if (2 < n.length &&
                    "ID" === (p = n[0]).type && 9 === c.nodeType && !e && G.relative[n[1].type]) {
                    c = G.find.ID(p.matches[0].replace(ha, ""), c, e)[0];
                    if (!c) return d;
                    b = b.slice(n.shift().length)
                }
                for (g = Na.POS.test(b) ? -1 : n.length - 1; 0 <= g; g--) {
                    p = n[g];
                    if (G.relative[l = p.type]) break;
                    if (l = G.find[l])
                        if (f = l(p.matches[0].replace(ha, ""), lb.test(n[0].type) && c.parentNode || c, e)) {
                            n.splice(g, 1);
                            b = f.length && n.join("");
                            if (!b) return la.apply(d, ma.call(f, 0)), d;
                            break
                        }
                }
            }
            return mb(b, s)(f, c, e, d, lb.test(b)), d
        },
        Yb = function() {},
        gb, nb, G, Ra, Ka, Sb, mb, ob, va, Qa, Zb = !0,
        M = ("sizcache" + Math.random()).replace(".", ""),
        Wb = String,
        V = Vc.document,
        U = V.documentElement,
        ua = 0,
        Zc = 0,
        $c = [].pop,
        la = [].push,
        ma = [].slice,
        Xb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b) return c;
            return -1
        },
        W = function(b, c) {
            return b[M] = null == c || c, b
        },
        pb = function() {
            var b = {},
                c = [];
            return W(function(d, f) {
                return c.push(d) > G.cacheLength && delete b[c.shift()], b[d] = f
            }, b)
        },
        $b = pb(),
        Vb = pb(),
        ac = pb(),
        bc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        qb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + bc + ")|[^:]|\\\\.)*|.*))\\)|)",
        La = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Yc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        ad = RegExp(qb),
        Wc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        lb = /[\x20\t\r\n\f]*[+~]/,
        bd = /h\d/i,
        cd = /input|select|textarea|button/i,
        ha = /\\(?!\\)/g,
        Na = {
            ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
            NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
            TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + bc),
            PSEUDO: RegExp("^" + qb),
            POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
            CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
        },
        aa = function(b) {
            var c = V.createElement("div");
            try {
                return b(c)
            } catch (d) {
                return !1
            } finally {}
        },
        dd = aa(function(b) {
            return b.appendChild(V.createComment("")), !b.getElementsByTagName("*").length
        }),
        ed = aa(function(b) {
            return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href")
        }),
        fd = aa(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Tb = aa(function(b) {
            return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length)
        }),
        gd = aa(function(b) {
            b.id = M + 0;
            b.innerHTML = "<a name='" + M + "'></a><div name='" + M + "'></div>";
            U.insertBefore(b, U.firstChild);
            var c = V.getElementsByName &&
                V.getElementsByName(M).length === 2 + V.getElementsByName(M + 0).length;
            return nb = !V.getElementById(M), U.removeChild(b), c
        });
    try {
        ma.call(U.childNodes, 0)[0].nodeType
    } catch (Qd) {
        ma = function(b) {
            for (var c, d = []; c = this[b]; b++) d.push(c);
            return d
        }
    }
    F.matches = function(b, c) {
        return F(b, null, null, c)
    };
    F.matchesSelector = function(b, c) {
        return 0 < F(c, null, null, [b]).length
    };
    Ra = F.getText = function(b) {
        var c, d = "",
            f = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) {
                if ("string" == typeof b.textContent) return b.textContent;
                for (b = b.firstChild; b; b =
                    b.nextSibling) d += Ra(b)
            } else {
                if (3 === c || 4 === c) return b.nodeValue
            } else
            for (; c = b[f]; f++) d += Ra(c);
        return d
    };
    Ka = F.isXML = function(b) {
        return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
    };
    Sb = F.contains = U.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            f = c && c.parentNode;
        return b === f || !(!f || !(1 === f.nodeType && d.contains && d.contains(f)))
    } : U.compareDocumentPosition ? function(b, c) {
        return c && !!(b.compareDocumentPosition(c) & 16)
    } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    F.attr = function(b, c) {
        var d, f = Ka(b);
        return f || (c = c.toLowerCase()), (d = G.attrHandle[c]) ? d(b) : f || fd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null)
    };
    G = F.selectors = {
        cacheLength: 50,
        createPseudo: W,
        match: Na,
        attrHandle: ed ? {} : {
            href: function(b) {
                return b.getAttribute("href", 2)
            },
            type: function(b) {
                return b.getAttribute("type")
            }
        },
        find: {
            ID: nb ? function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : []
            } : function(b, c, d) {
                if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : []
            },
            TAG: dd ? function(b, c) {
                if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b)
            } : function(b, c) {
                var d = c.getElementsByTagName(b);
                if ("*" === b) {
                    for (var f, e = [], g = 0; f = d[g]; g++) 1 === f.nodeType && e.push(f);
                    return e
                }
                return d
            },
            NAME: gd && function(b, c) {
                if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name)
            },
            CLASS: Tb && function(b, c, d) {
                if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b)
            }
        },
        relative: {
            ">": {
                dir: "parentNode",
                first: !0
            },
            " ": {
                dir: "parentNode"
            },
            "+": {
                dir: "previousSibling",
                first: !0
            },
            "~": {
                dir: "previousSibling"
            }
        },
        preFilter: {
            ATTR: function(b) {
                return b[1] = b[1].replace(ha, ""), b[3] = (b[4] || b[5] || "").replace(ha, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4)
            },
            CHILD: function(b) {
                return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || F.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) :
                    2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && F.error(b[0]), b
            },
            PSEUDO: function(b) {
                var c, d;
                if (Na.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) ad.test(c) && (d = Oa(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: nb ? function(b) {
                return b = b.replace(ha, ""),
                    function(c) {
                        return c.getAttribute("id") === b
                    }
            } : function(b) {
                return b = b.replace(ha, ""),
                    function(c) {
                        return (c = "undefined" !== typeof c.getAttributeNode &&
                            c.getAttributeNode("id")) && c.value === b
                    }
            },
            TAG: function(b) {
                return "*" === b ? function() {
                    return !0
                } : (b = b.replace(ha, "").toLowerCase(), function(c) {
                    return c.nodeName && c.nodeName.toLowerCase() === b
                })
            },
            CLASS: function(b) {
                var c = $b[M][b];
                return c || (c = $b(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) {
                        return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "")
                    }
            },
            ATTR: function(b, c, d) {
                return function(f) {
                    f = F.attr(f, b);
                    return null == f ? "!=" === c : c ? (f += "", "=" ===
                        c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && -1 < f.indexOf(d) : "$=" === c ? d && f.substr(f.length - d.length) === d : "~=" === c ? -1 < (" " + f + " ").indexOf(d) : "|=" === c ? f === d || f.substr(0, d.length + 1) === d + "-" : !1) : !0
                }
            },
            CHILD: function(b, c, d, f) {
                return "nth" === b ? function(b) {
                    var c, v;
                    c = b.parentNode;
                    if (1 === d && 0 === f) return !0;
                    if (c) {
                        v = 0;
                        for (c = c.firstChild; c && !(1 === c.nodeType && (v++, b === c)); c = c.nextSibling);
                    }
                    return v -= f, v === d || 0 === v % d && 0 <= v / d
                } : function(c) {
                    var d = c;
                    switch (b) {
                        case "only":
                        case "first":
                            for (; d = d.previousSibling;)
                                if (1 ===
                                    d.nodeType) return !1;
                            if ("first" === b) return !0;
                            d = c;
                        case "last":
                            for (; d = d.nextSibling;)
                                if (1 === d.nodeType) return !1;
                            return !0
                    }
                }
            },
            PSEUDO: function(b, c) {
                var d, f = G.pseudos[b] || G.setFilters[b.toLowerCase()] || F.error("unsupported pseudo: " + b);
                return f[M] ? f(c) : 1 < f.length ? (d = [b, b, "", c], G.setFilters.hasOwnProperty(b.toLowerCase()) ? W(function(b, d) {
                    for (var v, e = f(b, c), m = e.length; m--;) v = Xb.call(b, e[m]), b[v] = !(d[v] = e[m])
                }) : function(b) {
                    return f(b, 0, d)
                }) : f
            }
        },
        pseudos: {
            not: W(function(b) {
                var c = [],
                    d = [],
                    f = mb(b.replace(La, "$1"));
                return f[M] ? W(function(b, c, d, v) {
                    v = f(b, null, v, []);
                    for (var e = b.length; e--;)
                        if (d = v[e]) b[e] = !(c[e] = d)
                }) : function(b, v, e) {
                    return c[0] = b, f(c, null, e, d), !d.pop()
                }
            }),
            has: W(function(b) {
                return function(c) {
                    return 0 < F(b, c).length
                }
            }),
            contains: W(function(b) {
                return function(c) {
                    return -1 < (c.textContent || c.innerText || Ra(c)).indexOf(b)
                }
            }),
            enabled: function(b) {
                return !1 === b.disabled
            },
            disabled: function(b) {
                return !0 === b.disabled
            },
            checked: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && !!b.checked || "option" ===
                    c && !!b.selected
            },
            selected: function(b) {
                return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected
            },
            parent: function(b) {
                return !G.pseudos.empty(b)
            },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) {
                return bd.test(b.nodeName)
            },
            text: function(b) {
                var c, d;
                return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c)
            },
            radio: ta("radio"),
            checkbox: ta("checkbox"),
            file: ta("file"),
            password: ta("password"),
            image: ta("image"),
            submit: Ub("submit"),
            reset: Ub("reset"),
            button: function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && "button" === b.type || "button" === c
            },
            input: function(b) {
                return cd.test(b.nodeName)
            },
            focus: function(b) {
                var c = b.ownerDocument;
                return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href)
            },
            active: function(b) {
                return b === b.ownerDocument.activeElement
            },
            first: ga(function() {
                return [0]
            }),
            last: ga(function(b, c) {
                return [c - 1]
            }),
            eq: ga(function(b,
                c, d) {
                return [0 > d ? d + c : d]
            }),
            even: ga(function(b, c) {
                for (var d = 0; d < c; d += 2) b.push(d);
                return b
            }),
            odd: ga(function(b, c) {
                for (var d = 1; d < c; d += 2) b.push(d);
                return b
            }),
            lt: ga(function(b, c, d) {
                for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c);
                return b
            }),
            gt: ga(function(b, c, d) {
                for (d = 0 > d ? d + c : d; ++d < c;) b.push(d);
                return b
            })
        }
    };
    ob = U.compareDocumentPosition ? function(b, c) {
        return b === c ? (va = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1
    } : function(b, c) {
        if (b === c) return va = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, f, e = [],
            g = [];
        d = b.parentNode;
        f = c.parentNode;
        var n = d;
        if (d === f) return Ma(b, c);
        if (!d) return -1;
        if (!f) return 1;
        for (; n;) e.unshift(n), n = n.parentNode;
        for (n = f; n;) g.unshift(n), n = n.parentNode;
        d = e.length;
        f = g.length;
        for (n = 0; n < d && n < f; n++)
            if (e[n] !== g[n]) return Ma(e[n], g[n]);
        return n === d ? Ma(b, g[n], -1) : Ma(e[n], c, 1)
    };
    [0, 0].sort(ob);
    Zb = !va;
    F.uniqueSort = function(b) {
        var c, d = 1;
        va = Zb;
        b.sort(ob);
        if (va)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    F.error = function(b) {
        throw Error("Syntax error, unrecognized expression: " + b);
    };
    mb = F.compile = function(b, c) {
        var d, f = [],
            e = [],
            g = ac[M][b];
        if (!g) {
            c || (c = Oa(b));
            for (d = c.length; d--;) g = kb(c[d]), g[M] ? f.push(g) : e.push(g);
            var n = 0 < f.length,
                p = 0 < e.length,
                l = function(b, c, d, v, m) {
                    var q, g, s = [],
                        A = 0,
                        j = "0",
                        y = b && [],
                        u = null != m,
                        z = Qa,
                        B = b || p && G.find.TAG("*", m && c.parentNode || c),
                        r = ua += null == z ? 1 : Math.E;
                    for (u && (Qa = c !== V && c, gb = l.el); null != (m = B[j]); j++) {
                        if (p && m) {
                            for (q = 0; g = e[q]; q++)
                                if (g(m, c, d)) {
                                    v.push(m);
                                    break
                                }
                            u && (ua = r, gb =
                                ++l.el)
                        }
                        n && ((m = !g && m) && A--, b && y.push(m))
                    }
                    A += j;
                    if (n && j !== A) {
                        for (q = 0; g = f[q]; q++) g(y, s, c, d);
                        if (b) {
                            if (0 < A)
                                for (; j--;) !y[j] && !s[j] && (s[j] = $c.call(v));
                            s = Pa(s)
                        }
                        la.apply(v, s);
                        u && !b && 0 < s.length && 1 < A + f.length && F.uniqueSort(v)
                    }
                    return u && (ua = r, Qa = z), y
                };
            d = (l.el = 0, n ? W(l) : l);
            g = ac(b, d)
        }
        return g
    };
    if (V.querySelectorAll) {
        var cc, hd = fb,
            id = /'|\\/g,
            jd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            X = [":focus"],
            Sa = [":active", ":focus"],
            Ta = U.matchesSelector || U.mozMatchesSelector || U.webkitMatchesSelector || U.oMatchesSelector ||
            U.msMatchesSelector;
        aa(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || X.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || X.push(":checked")
        });
        aa(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && X.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || X.push(":enabled",
                ":disabled")
        });
        X = RegExp(X.join("|"));
        fb = function(b, c, d, f, e) {
            if (!f && !e && (!X || !X.test(b))) {
                var g, n, p = !0,
                    l = M;
                n = c;
                g = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    g = Oa(b);
                    (p = c.getAttribute("id")) ? l = p.replace(id, "\\$&"): c.setAttribute("id", l);
                    l = "[id='" + l + "'] ";
                    for (n = g.length; n--;) g[n] = l + g[n].join("");
                    n = lb.test(b) && c.parentNode || c;
                    g = g.join(",")
                }
                if (g) try {
                    return la.apply(d, ma.call(n.querySelectorAll(g), 0)), d
                } catch (s) {} finally {
                    p || c.removeAttribute("id")
                }
            }
            return hd(b, c, d, f, e)
        };
        Ta &&
            (aa(function(b) {
                cc = Ta.call(b, "div");
                try {
                    Ta.call(b, "[test!='']:sizzle"), Sa.push("!=", qb)
                } catch (c) {}
            }), Sa = RegExp(Sa.join("|")), F.matchesSelector = function(b, c) {
                c = c.replace(jd, "='$1']");
                if (!Ka(b) && !Sa.test(c) && (!X || !X.test(c))) try {
                    var d = Ta.call(b, c);
                    if (d || cc || b.document && 11 !== b.document.nodeType) return d
                } catch (f) {}
                return 0 < F(c, null, null, [b]).length
            })
    }
    G.pseudos.nth = G.pseudos.eq;
    G.filters = Yb.prototype = G.pseudos;
    G.setFilters = new Yb;
    F.attr = f.attr;
    f.find = F;
    f.expr = F.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.unique =
        F.uniqueSort;
    f.text = F.getText;
    f.isXMLDoc = F.isXML;
    f.contains = F.contains;
    var kd = /Until$/,
        ld = /^(?:parents|prev(?:Until|All))/,
        uc = /^.[^:#\[\.,]*$/,
        dc = f.expr.match.needsContext,
        md = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(b) {
            var c, d, e, g, p, n, l = this;
            if ("string" != typeof b) return f(b).filter(function() {
                c = 0;
                for (d = l.length; c < d; c++)
                    if (f.contains(l[c], this)) return !0
            });
            n = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (e = n.length, f.find(b, this[c], n), 0 < c)
                    for (g = e; g < n.length; g++)
                        for (p =
                            0; p < e; p++)
                            if (n[p] === n[g]) {
                                n.splice(g--, 1);
                                break
                            }
            return n
        },
        has: function(b) {
            var c, d = f(b, this),
                e = d.length;
            return this.filter(function() {
                for (c = 0; c < e; c++)
                    if (f.contains(this, d[c])) return !0
            })
        },
        not: function(b) {
            return this.pushStack(u(this, b, !1), "not", b)
        },
        filter: function(b) {
            return this.pushStack(u(this, b, !0), "filter", b)
        },
        is: function(b) {
            return !!b && ("string" == typeof b ? dc.test(b) ? 0 <= f(b, this.context).index(this[0]) : 0 < f.filter(b, this).length : 0 < this.filter(b).length)
        },
        closest: function(b, c) {
            for (var d, e = 0, g = this.length,
                    p = [], n = dc.test(b) || "string" != typeof b ? f(b, c || this.context) : 0; e < g; e++)
                for (d = this[e]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (n ? -1 < n.index(d) : f.find.matchesSelector(d, b)) {
                        p.push(d);
                        break
                    }
                    d = d.parentNode
                }
            return p = 1 < p.length ? f.unique(p) : p, this.pushStack(p, "closest", b)
        },
        index: function(b) {
            return b ? "string" == typeof b ? f.inArray(this[0], f(b)) : f.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(b, c) {
            var d = "string" == typeof b ? f(b, c) : f.makeArray(b && b.nodeType ? [b] : b),
                e = f.merge(this.get(), d);
            return this.pushStack(x(d[0]) || x(e[0]) ? e : f.unique(e))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    f.fn.andSelf = f.fn.addBack;
    f.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return f.dir(b, "parentNode")
        },
        parentsUntil: function(b, c, d) {
            return f.dir(b, "parentNode", d)
        },
        next: function(b) {
            return l(b, "nextSibling")
        },
        prev: function(b) {
            return l(b, "previousSibling")
        },
        nextAll: function(b) {
            return f.dir(b,
                "nextSibling")
        },
        prevAll: function(b) {
            return f.dir(b, "previousSibling")
        },
        nextUntil: function(b, c, d) {
            return f.dir(b, "nextSibling", d)
        },
        prevUntil: function(b, c, d) {
            return f.dir(b, "previousSibling", d)
        },
        siblings: function(b) {
            return f.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return f.sibling(b.firstChild)
        },
        contents: function(b) {
            return f.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : f.merge([], b.childNodes)
        }
    }, function(b, c) {
        f.fn[b] = function(d, e) {
            var g = f.map(this, c, d);
            return kd.test(b) ||
                (e = d), e && "string" == typeof e && (g = f.filter(e, g)), g = 1 < this.length && !md[b] ? f.unique(g) : g, 1 < this.length && ld.test(b) && (g = g.reverse()), this.pushStack(g, b, Y.call(arguments).join(","))
        }
    });
    f.extend({
        filter: function(b, c, d) {
            return d && (b = ":not(" + b + ")"), 1 === c.length ? f.find.matchesSelector(c[0], b) ? [c[0]] : [] : f.find.matches(b, c)
        },
        dir: function(b, d, e) {
            var g = [];
            for (b = b[d]; b && 9 !== b.nodeType && (e === c || 1 !== b.nodeType || !f(b).is(e));) 1 === b.nodeType && g.push(b), b = b[d];
            return g
        },
        sibling: function(b, c) {
            for (var d = []; b; b = b.nextSibling) 1 ===
                b.nodeType && b !== c && d.push(b);
            return d
        }
    });
    var xb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        nd = / jQuery\d+="(?:null|\d+)"/g,
        rb = /^\s+/,
        ec = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        fc = /<([\w:]+)/,
        od = /<tbody/i,
        pd = /<|&#?\w+;/,
        qd = /<(?:script|style|link)/i,
        rd = /<(?:script|object|embed|option|style)/i,
        sb = RegExp("<(?:" + xb + ")[\\s/>]", "i"),
        yb = /^(?:checkbox|radio)$/,
        gc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        sd = /\/(java|ecma)script/i,
        td = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        S = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        hc = z(D),
        tb = hc.appendChild(D.createElement("div"));
    S.optgroup =
        S.option;
    S.tbody = S.tfoot = S.colgroup = S.caption = S.thead;
    S.th = S.td;
    f.support.htmlSerialize || (S._default = [1, "X<div>", "</div>"]);
    f.fn.extend({
        text: function(b) {
            return f.access(this, function(b) {
                return b === c ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(b))
            }, null, b, arguments.length)
        },
        wrapAll: function(b) {
            if (f.isFunction(b)) return this.each(function(c) {
                f(this).wrapAll(b.call(this, c))
            });
            if (this[0]) {
                var c = f(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return f.isFunction(b) ? this.each(function(c) {
                f(this).wrapInner(b.call(this, c))
            }) : this.each(function() {
                var c = f(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) {
            var c = f.isFunction(b);
            return this.each(function(d) {
                f(this).wrapAll(c ? b.call(this, d) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                f.nodeName(this, "body") ||
                    f(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(b) {
                (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild)
            })
        },
        before: function() {
            if (!x(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(b,
                    this), "before", this.selector)
            }
        },
        after: function() {
            if (!x(this[0])) return this.domManip(arguments, !1, function(b) {
                this.parentNode.insertBefore(b, this.nextSibling)
            });
            if (arguments.length) {
                var b = f.clean(arguments);
                return this.pushStack(f.merge(this, b), "after", this.selector)
            }
        },
        remove: function(b, c) {
            for (var d, e = 0; null != (d = this[e]); e++)
                if (!b || f.filter(b, [d]).length) !c && 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b,
                    c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && f.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) {
            return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() {
                return f.clone(this, b, c)
            })
        },
        html: function(b) {
            return f.access(this, function(b) {
                var d = this[0] || {},
                    e = 0,
                    v = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(nd, "") : c;
                if ("string" == typeof b && !qd.test(b) && (f.support.htmlSerialize || !sb.test(b)) && (f.support.leadingWhitespace || !rb.test(b)) &&
                    !S[(fc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(ec, "<$1></$2>");
                    try {
                        for (; e < v; e++) d = this[e] || {}, 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (g) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return x(this[0]) ? this.length ? this.pushStack(f(f.isFunction(b) ? b() : b), "replaceWith", b) : this : f.isFunction(b) ? this.each(function(c) {
                var d = f(this),
                    e = d.html();
                d.replaceWith(b.call(this, c, e))
            }) : ("string" != typeof b && (b = f(b).detach()), this.each(function() {
                var c =
                    this.nextSibling,
                    d = this.parentNode;
                f(this).remove();
                c ? f(c).before(b) : f(d).append(b)
            }))
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, d, e) {
            b = [].concat.apply([], b);
            var g, p, l, n = 0,
                s = b[0],
                j = [],
                y = this.length;
            if (!f.support.checkClone && 1 < y && "string" == typeof s && gc.test(s)) return this.each(function() {
                f(this).domManip(b, d, e)
            });
            if (f.isFunction(s)) return this.each(function(g) {
                var p = f(this);
                b[0] = s.call(this, g, d ? p.html() : c);
                p.domManip(b, d, e)
            });
            if (this[0]) {
                g = f.buildFragment(b, this, j);
                l = g.fragment;
                p = l.firstChild;
                1 === l.childNodes.length && (l = p);
                if (p) {
                    d = d && f.nodeName(p, "tr");
                    for (g = g.cacheable || y - 1; n < y; n++) e.call(d && f.nodeName(this[n], "table") ? this[n].getElementsByTagName("tbody")[0] || this[n].appendChild(this[n].ownerDocument.createElement("tbody")) : this[n], n === g ? l : f.clone(l, !0, !0))
                }
                l = p = null;
                j.length && f.each(j, function(b, c) {
                    c.src ? f.ajax ? f.ajax({
                        url: c.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : f.error("no ajax") : f.globalEval((c.text || c.textContent || c.innerHTML || "").replace(td,
                        ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    f.buildFragment = function(b, d, e) {
        var g, p, l, n = b[0];
        return d = d || D, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof n && 512 > n.length && d === D && "<" === n.charAt(0) && !rd.test(n) && (f.support.checkClone || !gc.test(n)) && (f.support.html5Clone || !sb.test(n)) && (p = !0, g = f.fragments[n], l = g !== c), g || (g = d.createDocumentFragment(), f.clean(b, d, g, e), p && (f.fragments[n] = l && g)), {
            fragment: g,
            cacheable: p
        }
    };
    f.fragments = {};
    f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, c) {
        f.fn[b] = function(d) {
            var e, g = 0,
                p = [];
            d = f(d);
            var n = d.length;
            e = 1 === this.length && this[0].parentNode;
            if ((null == e || e && 11 === e.nodeType && 1 === e.childNodes.length) && 1 === n) return d[c](this[0]), this;
            for (; g < n; g++) e = (0 < g ? this.clone(!0) : this).get(), f(d[g])[c](e), p = p.concat(e);
            return this.pushStack(p, b, d.selector)
        }
    });
    f.extend({
        clone: function(b, c, d) {
            var e, g, p, n;
            f.support.html5Clone || f.isXMLDoc(b) || !sb.test("<" + b.nodeName +
                ">") ? n = b.cloneNode(!0) : (tb.innerHTML = b.outerHTML, tb.removeChild(n = tb.firstChild));
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !f.isXMLDoc(b)) {
                B(b, n);
                e = C(b);
                g = C(n);
                for (p = 0; e[p]; ++p) g[p] && B(e[p], g[p])
            }
            if (c && (r(b, n), d)) {
                e = C(b);
                g = C(n);
                for (p = 0; e[p]; ++p) r(e[p], g[p])
            }
            return n
        },
        clean: function(b, c, d, e) {
            var g, p, n, l, s, j, y, u = c === D && hc,
                r = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = D;
            for (g = 0; null != (n = b[g]); g++)
                if ("number" == typeof n && (n += ""), n) {
                    if ("string" ==
                        typeof n)
                        if (pd.test(n)) {
                            u = u || z(c);
                            j = c.createElement("div");
                            u.appendChild(j);
                            n = n.replace(ec, "<$1></$2>");
                            p = (fc.exec(n) || ["", ""])[1].toLowerCase();
                            l = S[p] || S._default;
                            s = l[0];
                            for (j.innerHTML = l[1] + n + l[2]; s--;) j = j.lastChild;
                            if (!f.support.tbody) {
                                s = od.test(n);
                                l = "table" === p && !s ? j.firstChild && j.firstChild.childNodes : "<table>" === l[1] && !s ? j.childNodes : [];
                                for (p = l.length - 1; 0 <= p; --p) f.nodeName(l[p], "tbody") && !l[p].childNodes.length && l[p].parentNode.removeChild(l[p])
                            }!f.support.leadingWhitespace && rb.test(n) && j.insertBefore(c.createTextNode(rb.exec(n)[0]),
                                j.firstChild);
                            n = j.childNodes;
                            j.parentNode.removeChild(j)
                        } else n = c.createTextNode(n);
                    n.nodeType ? r.push(n) : f.merge(r, n)
                }
            j && (n = j = u = null);
            if (!f.support.appendChecked)
                for (g = 0; null != (n = r[g]); g++) f.nodeName(n, "input") ? E(n) : "undefined" != typeof n.getElementsByTagName && f.grep(n.getElementsByTagName("input"), E);
            if (d) {
                b = function(b) {
                    if (!b.type || sd.test(b.type)) return e ? e.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b)
                };
                for (g = 0; null != (n = r[g]); g++)
                    if (!f.nodeName(n, "script") || !b(n)) d.appendChild(n),
                        "undefined" != typeof n.getElementsByTagName && (y = f.grep(f.merge([], n.getElementsByTagName("script")), b), r.splice.apply(r, [g + 1, 0].concat(y)), g += y.length)
            }
            return r
        },
        cleanData: function(b, c) {
            for (var d, e, g, p, n = 0, l = f.expando, s = f.cache, j = f.support.deleteExpando, y = f.event.special; null != (g = b[n]); n++)
                if (c || f.acceptData(g))
                    if (d = (e = g[l]) && s[e]) {
                        if (d.events)
                            for (p in d.events) y[p] ? f.event.remove(g, p) : f.removeEvent(g, p, d.handle);
                        s[e] && (delete s[e], j ? delete g[l] : g.removeAttribute ? g.removeAttribute(l) : g[l] = null, f.deletedIds.push(e))
                    }
        }
    });
    var Ua, ba;
    f.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return {
            browser: b[1] || "",
            version: b[2] || "0"
        }
    };
    Ua = f.uaMatch(zc.userAgent);
    ba = {};
    Ua.browser && (ba[Ua.browser] = !0, ba.version = Ua.version);
    ba.chrome ? ba.webkit = !0 : ba.webkit && (ba.safari = !0);
    f.browser = ba;
    f.sub = function() {
        function b(c, d) {
            return new b.fn.init(c,
                d)
        }
        f.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, e) {
            return e && e instanceof f && !(e instanceof b) && (e = b(e)), f.fn.init.call(this, d, e, c)
        };
        b.fn.init.prototype = b.fn;
        var c = b(D);
        return b
    };
    var O, ja, ka, ub = /alpha\([^)]*\)/i,
        ud = /opacity=([^)]*)/,
        vd = /^(top|right|bottom|left)$/,
        wd = /^(none|table(?!-c[ea]).+)/,
        ic = /^margin/,
        vc = RegExp("^(" + Ea + ")(.*)$", "i"),
        xa = RegExp("^(" + Ea + ")(?!px)[a-z%]+$", "i"),
        xd = RegExp("^([-+])=(" + Ea + ")", "i"),
        Xa = {},
        yd = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        jc = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ca = ["Top", "Right", "Bottom", "Left"],
        zb = ["Webkit", "O", "Moz", "ms"],
        zd = f.fn.toggle;
    f.fn.extend({
        css: function(b, d) {
            return f.access(this, function(b, d, e) {
                return e !== c ? f.style(b, d, e) : f.css(b, d)
            }, b, d, 1 < arguments.length)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return f.isFunction(b) && f.isFunction(c) ? zd.apply(this, arguments) : this.each(function() {
                (d ? b : s(this)) ? f(this).show():
                    f(this).hide()
            })
        }
    });
    f.extend({
        cssHooks: {
            opacity: {
                get: function(b, c) {
                    if (c) {
                        var d = O(b, "opacity");
                        return "" === d ? "1" : d
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(b, d, e, g) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var l, s, n, j = f.camelCase(d),
                    y = b.style;
                d = f.cssProps[j] || (f.cssProps[j] = p(y, j));
                n = f.cssHooks[d] || f.cssHooks[j];
                if (e === c) return n && "get" in n && (l = n.get(b, !1, g)) !== c ? l : y[d];
                s = typeof e;
                "string" === s && (l = xd.exec(e)) && (e = (l[1] + 1) * l[2] + parseFloat(f.css(b, d)), s = "number");
                if (!(null == e || "number" === s && isNaN(e)))
                    if ("number" === s && !f.cssNumber[j] && (e += "px"), !n || !("set" in n) || (e = n.set(b, e, g)) !== c) try {
                        y[d] = e
                    } catch (u) {}
            }
        },
        css: function(b, d, e, g) {
            var l, s, n, j = f.camelCase(d);
            return d = f.cssProps[j] || (f.cssProps[j] = p(b.style, j)), n = f.cssHooks[d] || f.cssHooks[j], n && "get" in n && (l = n.get(b, !0, g)), l === c && (l = O(b, d)), "normal" === l && d in jc && (l = jc[d]), e || g !== c ? (s = parseFloat(l), e ||
                f.isNumeric(s) ? s || 0 : l) : l
        },
        swap: function(b, c, d) {
            var f, e = {};
            for (f in c) e[f] = b.style[f], b.style[f] = c[f];
            d = d.call(b);
            for (f in c) b.style[f] = e[f];
            return d
        }
    });
    b.getComputedStyle ? O = function(c, d) {
        var e, g, p, l, n = b.getComputedStyle(c, null),
            s = c.style;
        return n && (e = n[d], "" === e && !f.contains(c.ownerDocument, c) && (e = f.style(c, d)), xa.test(e) && ic.test(d) && (g = s.width, p = s.minWidth, l = s.maxWidth, s.minWidth = s.maxWidth = s.width = e, e = n.width, s.width = g, s.minWidth = p, s.maxWidth = l)), e
    } : D.documentElement.currentStyle && (O = function(b,
        c) {
        var d, f, e = b.currentStyle && b.currentStyle[c],
            g = b.style;
        return null == e && g && g[c] && (e = g[c]), xa.test(e) && !vd.test(c) && (d = g.left, f = b.runtimeStyle && b.runtimeStyle.left, f && (b.runtimeStyle.left = b.currentStyle.left), g.left = "fontSize" === c ? "1em" : e, e = g.pixelLeft + "px", g.left = d, f && (b.runtimeStyle.left = f)), "" === e ? "auto" : e
    });
    f.each(["height", "width"], function(b, c) {
        f.cssHooks[c] = {
            get: function(b, d, e) {
                if (d) return 0 === b.offsetWidth && wd.test(O(b, "display")) ? f.swap(b, yd, function() {
                    return L(b, c, e)
                }) : L(b, c, e)
            },
            set: function(b,
                d, e) {
                return K(b, d, e ? P(b, c, e, f.support.boxSizing && "border-box" === f.css(b, "boxSizing")) : 0)
            }
        }
    });
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(b, c) {
            return ud.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : ""
        },
        set: function(b, c) {
            var d = b.style,
                e = b.currentStyle,
                g = f.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                p = e && e.filter || d.filter || "";
            d.zoom = 1;
            if (1 <= c && ("" === f.trim(p.replace(ub, "")) && d.removeAttribute) && (d.removeAttribute("filter"), e && !e.filter)) return;
            d.filter = ub.test(p) ? p.replace(ub, g) : p + " " + g
        }
    });
    f(function() {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function(b, c) {
                return f.swap(b, {
                    display: "inline-block"
                }, function() {
                    if (c) return O(b, "marginRight")
                })
            }
        });
        !f.support.pixelPosition && f.fn.position && f.each(["top", "left"], function(b, c) {
            f.cssHooks[c] = {
                get: function(b, d) {
                    if (d) {
                        var e = O(b, c);
                        return xa.test(e) ? f(b).position()[c] + "px" : e
                    }
                }
            }
        })
    });
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(b) {
        return 0 === b.offsetWidth && 0 === b.offsetHeight ||
            !f.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || O(b, "display"))
    }, f.expr.filters.visible = function(b) {
        return !f.expr.filters.hidden(b)
    });
    f.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, c) {
        f.cssHooks[b + c] = {
            expand: function(d) {
                var f = "string" == typeof d ? d.split(" ") : [d],
                    e = {};
                for (d = 0; 4 > d; d++) e[b + ca[d] + c] = f[d] || f[d - 2] || f[0];
                return e
            }
        };
        ic.test(b) || (f.cssHooks[b + c].set = K)
    });
    var Ad = /%20/g,
        wc = /\[\]$/,
        kc = /\r?\n/g,
        Bd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Cd = /^(?:select|textarea)/i;
    f.fn.extend({
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || Cd.test(this.nodeName) || Bd.test(this.type))
            }).map(function(b, c) {
                var d = f(this).val();
                return null == d ? null : f.isArray(d) ? f.map(d, function(b) {
                    return {
                        name: c.name,
                        value: b.replace(kc, "\r\n")
                    }
                }) : {
                    name: c.name,
                    value: d.replace(kc, "\r\n")
                }
            }).get()
        }
    });
    f.param = function(b, d) {
        var e, g = [],
            p = function(b, c) {
                c = f.isFunction(c) ? c() : null == c ? "" : c;
                g[g.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = f.ajaxSettings && f.ajaxSettings.traditional);
        if (f.isArray(b) || b.jquery && !f.isPlainObject(b)) f.each(b, function() {
            p(this.name, this.value)
        });
        else
            for (e in b) ya(e, b[e], d, p);
        return g.join("&").replace(Ad, "+")
    };
    var na, ia, Dd = /#.*$/,
        Ed = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Fd = /^(?:GET|HEAD)$/,
        Gd = /^\/\//,
        lc = /\?/,
        Hd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Id = /([?&])_=[^&]*/,
        mc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        nc = f.fn.load,
        Za = {},
        oc = {},
        pc = ["*/"] + ["*"];
    try {
        ia = yc.href
    } catch (Rd) {
        ia = D.createElement("a"), ia.href = "", ia = ia.href
    }
    na = mc.exec(ia.toLowerCase()) || [];
    f.fn.load = function(b, d, e) {
        if ("string" != typeof b && nc) return nc.apply(this, arguments);
        if (!this.length) return this;
        var g, p, l, n = this,
            s = b.indexOf(" ");
        return 0 <= s && (g = b.slice(s, b.length), b = b.slice(0, s)), f.isFunction(d) ? (e = d, d = c) : d && "object" == typeof d && (p = "POST"), f.ajax({
            url: b,
            type: p,
            dataType: "html",
            data: d,
            complete: function(b, c) {
                e && n.each(e, l || [b.responseText, c, b])
            }
        }).done(function(b) {
            l = arguments;
            n.html(g ? f("<div>").append(b.replace(Hd, "")).find(g) : b)
        }), this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) {
        f.fn[c] = function(b) {
            return this.on(c, b)
        }
    });
    f.each(["get", "post"], function(b, d) {
        f[d] = function(b, e, g, p) {
            return f.isFunction(e) && (p = p || g, g = e, e = c), f.ajax({
                type: d,
                url: b,
                data: e,
                success: g,
                dataType: p
            })
        }
    });
    f.extend({
        getScript: function(b, d) {
            return f.get(b,
                c, d, "script")
        },
        getJSON: function(b, c, d) {
            return f.get(b, c, d, "json")
        },
        ajaxSetup: function(b, c) {
            return c ? Ab(b, f.ajaxSettings) : (c = b, b = f.ajaxSettings), Ab(b, c), b
        },
        ajaxSettings: {
            url: ia,
            isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(na[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": pc
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": b.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: I(Za),
        ajaxTransport: I(oc),
        ajax: function(b, d) {
            function e(b, d, m, l) {
                var v, q, j, u, A, E = d;
                if (2 !== P) {
                    P = 2;
                    s && clearTimeout(s);
                    n = c;
                    p = l || "";
                    H.readyState = 0 < b ? 4 : 0;
                    if (m) {
                        u = r;
                        l = H;
                        var D, L, I, Ya, $a = u.contents,
                            F = u.dataTypes,
                            J = u.responseFields;
                        for (L in J) L in m && (l[J[L]] = m[L]);
                        for (;
                            "*" === F[0];) F.shift(),
                            D === c && (D = u.mimeType || l.getResponseHeader("content-type"));
                        if (D)
                            for (L in $a)
                                if ($a[L] && $a[L].test(D)) {
                                    F.unshift(L);
                                    break
                                }
                        if (F[0] in m) I = F[0];
                        else {
                            for (L in m) {
                                if (!F[0] || u.converters[L + " " + F[0]]) {
                                    I = L;
                                    break
                                }
                                Ya || (Ya = L)
                            }
                            I = I || Ya
                        }
                        m = I ? (I !== F[0] && F.unshift(I), m[I]) : void 0;
                        u = m
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (r.ifModified && (A = H.getResponseHeader("Last-Modified"), A && (f.lastModified[g] = A), A = H.getResponseHeader("Etag"), A && (f.etag[g] = A)), 304 === b) E = "notmodified", v = !0;
                        else {
                            var G;
                            a: {
                                v = r;
                                q = u;
                                var T, E = v.dataTypes.slice();
                                m = E[0];
                                D = {};
                                L = 0;
                                v.dataFilter && (q = v.dataFilter(q, v.dataType));
                                if (E[1])
                                    for (G in v.converters) D[G.toLowerCase()] = v.converters[G];
                                for (; j = E[++L];)
                                    if ("*" !== j) {
                                        if ("*" !== m && m !== j) {
                                            G = D[m + " " + j] || D["* " + j];
                                            if (!G)
                                                for (T in D)
                                                    if (A = T.split(" "), A[1] === j && (G = D[m + " " + A[0]] || D["* " + A[0]])) {
                                                        !0 === G ? G = D[T] : !0 !== D[T] && (j = A[0], E.splice(L--, 0, j));
                                                        break
                                                    }
                                            if (!0 !== G)
                                                if (G && v["throws"]) q = G(q);
                                                else try {
                                                    q = G(q)
                                                } catch (wa) {
                                                    G = {
                                                        state: "parsererror",
                                                        error: G ? wa : "No conversion from " + m + " to " + j
                                                    };
                                                    break a
                                                }
                                        }
                                        m = j
                                    }
                                G = {
                                    state: "success",
                                    data: q
                                }
                            }
                            v =
                                G;
                            E = v.state;
                            q = v.data;
                            j = v.error;
                            v = !j
                        } else if (j = E, !E || b) E = "error", 0 > b && (b = 0);
                    H.status = b;
                    H.statusText = (d || E) + "";
                    v ? K.resolveWith(z, [q, E, H]) : K.rejectWith(z, [H, E, j]);
                    H.statusCode(C);
                    C = c;
                    y && B.trigger("ajax" + (v ? "Success" : "Error"), [H, r, v ? q : j]);
                    x.fireWith(z, [H, E]);
                    y && (B.trigger("ajaxComplete", [H, r]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var g, p, l, n, s, j, y, u, r = f.ajaxSetup({}, d),
                z = r.context || r,
                B = z !== r && (z.nodeType || z instanceof f) ? f(z) : f.event,
                K = f.Deferred(),
                x = f.Callbacks("once memory"),
                C = r.statusCode || {},
                E = {},
                D = {},
                P = 0,
                L = "canceled",
                H = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!P) {
                            var d = b.toLowerCase();
                            b = D[d] = D[d] || b;
                            E[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === P ? p : null
                    },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === P) {
                            if (!l)
                                for (l = {}; d = Ed.exec(p);) l[d[1].toLowerCase()] = d[2];
                            d = l[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) {
                        return P || (r.mimeType = b), this
                    },
                    abort: function(b) {
                        return b = b || L, n && n.abort(b), e(0, b), this
                    }
                };
            K.promise(H);
            H.success = H.done;
            H.error = H.fail;
            H.complete = x.add;
            H.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > P)
                        for (c in b) C[c] = [C[c], b[c]];
                    else c = b[H.status], H.always(c)
                }
                return this
            };
            r.url = ((b || r.url) + "").replace(Dd, "").replace(Gd, na[1] + "//");
            r.dataTypes = f.trim(r.dataType || "*").toLowerCase().split(da);
            null == r.crossDomain && (j = mc.exec(r.url.toLowerCase()) || !1, r.crossDomain = j && j.join(":") + (j[3] ? "" : "http:" === j[1] ? 80 : 443) !== na.join(":") + (na[3] ? "" : "http:" === na[1] ? 80 : 443));
            r.data && r.processData && "string" != typeof r.data && (r.data = f.param(r.data,
                r.traditional));
            T(Za, r, d, H);
            if (2 === P) return H;
            y = r.global;
            r.type = r.type.toUpperCase();
            r.hasContent = !Fd.test(r.type);
            y && 0 === f.active++ && f.event.trigger("ajaxStart");
            if (!r.hasContent && (r.data && (r.url += (lc.test(r.url) ? "&" : "?") + r.data, delete r.data), g = r.url, !1 === r.cache)) {
                j = f.now();
                var I = r.url.replace(Id, "$1_=" + j);
                r.url = I + (I === r.url ? (lc.test(r.url) ? "&" : "?") + "_=" + j : "")
            }(r.data && r.hasContent && !1 !== r.contentType || d.contentType) && H.setRequestHeader("Content-Type", r.contentType);
            r.ifModified && (g = g || r.url, f.lastModified[g] &&
                H.setRequestHeader("If-Modified-Since", f.lastModified[g]), f.etag[g] && H.setRequestHeader("If-None-Match", f.etag[g]));
            H.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : r.accepts["*"]);
            for (u in r.headers) H.setRequestHeader(u, r.headers[u]);
            if (!r.beforeSend || !1 !== r.beforeSend.call(z, H, r) && 2 !== P) {
                L = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) H[u](r[u]);
                if (n = T(oc, r, d, H)) {
                    H.readyState = 1;
                    y && B.trigger("ajaxSend", [H,
                        r
                    ]);
                    r.async && 0 < r.timeout && (s = setTimeout(function() {
                        H.abort("timeout")
                    }, r.timeout));
                    try {
                        P = 1, n.send(E, e)
                    } catch (F) {
                        if (2 > P) e(-1, F);
                        else throw F;
                    }
                } else e(-1, "No Transport");
                return H
            }
            return H.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var qc = [],
        Jd = /\?/,
        Va = /(=)\?(?=&|$)|\?\?/,
        Kd = f.now();
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = qc.pop() || f.expando + "_" + Kd++;
            return this[b] = !0, b
        }
    });
    f.ajaxPrefilter("json jsonp", function(d, e, g) {
        var p, l, s, n = d.data,
            j = d.url,
            y = !1 !== d.jsonp,
            r = y && Va.test(j),
            u = y &&
            !r && "string" == typeof n && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Va.test(n);
        if ("jsonp" === d.dataTypes[0] || r || u) return p = d.jsonpCallback = f.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, l = b[p], r ? d.url = j.replace(Va, "$1" + p) : u ? d.data = n.replace(Va, "$1" + p) : y && (d.url += (Jd.test(j) ? "&" : "?") + d.jsonp + "=" + p), d.converters["script json"] = function() {
            return s || f.error(p + " was not called"), s[0]
        }, d.dataTypes[0] = "json", b[p] = function() {
            s = arguments
        }, g.always(function() {
            b[p] = l;
            d[p] &&
                (d.jsonpCallback = e.jsonpCallback, qc.push(p));
            s && f.isFunction(l) && l(s[0]);
            s = l = c
        }), "script"
    });
    f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(b) {
                return f.globalEval(b), b
            }
        }
    });
    f.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    f.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, f = D.head ||
                D.getElementsByTagName("head")[0] || D.documentElement;
            return {
                send: function(e, g) {
                    d = D.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, e) {
                        if (e || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, f && d.parentNode && f.removeChild(d), d = c, e || g(200, "success")
                    };
                    f.insertBefore(d, f.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var oa, vb = b.ActiveXObject ? function() {
            for (var b in oa) oa[b](0,
                1)
        } : !1,
        Ld = 0;
    f.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && za())) a: {
            try {
                c = new b.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (d) {}
            c = void 0
        }
        return c
    } : za;
    var wb = f.ajaxSettings.xhr();
    f.extend(f.support, {
        ajax: !!wb,
        cors: !!wb && "withCredentials" in wb
    });
    f.support.ajax && f.ajaxTransport(function(d) {
        if (!d.crossDomain || f.support.cors) {
            var e;
            return {
                send: function(g, p) {
                    var l, s, n = d.xhr();
                    d.username ? n.open(d.type, d.url, d.async, d.username, d.password) : n.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (s in d.xhrFields) n[s] =
                            d.xhrFields[s];
                    d.mimeType && n.overrideMimeType && n.overrideMimeType(d.mimeType);
                    !d.crossDomain && !g["X-Requested-With"] && (g["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in g) n.setRequestHeader(s, g[s])
                    } catch (j) {}
                    n.send(d.hasContent && d.data || null);
                    e = function(b, g) {
                        var m, s, j, y, r;
                        try {
                            if (e && (g || 4 === n.readyState))
                                if (e = c, l && (n.onreadystatechange = f.noop, vb && delete oa[l]), g) 4 !== n.readyState && n.abort();
                                else {
                                    m = n.status;
                                    j = n.getAllResponseHeaders();
                                    y = {};
                                    (r = n.responseXML) && r.documentElement && (y.xml = r);
                                    try {
                                        y.text =
                                            n.responseText
                                    } catch (u) {}
                                    try {
                                        s = n.statusText
                                    } catch (z) {
                                        s = ""
                                    }!m && d.isLocal && !d.crossDomain ? m = y.text ? 200 : 404 : 1223 === m && (m = 204)
                                }
                        } catch (A) {
                            g || p(-1, A)
                        }
                        y && p(m, s, y, j)
                    };
                    d.async ? 4 === n.readyState ? setTimeout(e, 0) : (l = ++Ld, vb && (oa || (oa = {}, f(b).unload(vb)), oa[l] = e), n.onreadystatechange = e) : e()
                },
                abort: function() {
                    e && e(0, 1)
                }
            }
        }
    });
    var Aa, Wa, Md = /^(?:toggle|show|hide)$/,
        Nd = RegExp("^(?:([-+])=|)(" + Ea + ")([a-z%]*)$", "i"),
        Od = /queueHooks$/,
        Ba = [function(b, c, d) {
            var e, g, p, l, j, y, r = this,
                u = b.style,
                z = {},
                B = [],
                K = b.nodeType && s(b);
            d.queue ||
                (j = f._queueHooks(b, "fx"), null == j.unqueued && (j.unqueued = 0, y = j.empty.fire, j.empty.fire = function() {
                    j.unqueued || y()
                }), j.unqueued++, r.always(function() {
                    r.always(function() {
                        j.unqueued--;
                        f.queue(b, "fx").length || j.empty.fire()
                    })
                }));
            1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [u.overflow, u.overflowX, u.overflowY], "inline" === f.css(b, "display") && "none" === f.css(b, "float") && (!f.support.inlineBlockNeedsLayout || "inline" === wa(b.nodeName) ? u.display = "inline-block" : u.zoom = 1));
            d.overflow && (u.overflow = "hidden",
                f.support.shrinkWrapBlocks || r.done(function() {
                    u.overflow = d.overflow[0];
                    u.overflowX = d.overflow[1];
                    u.overflowY = d.overflow[2]
                }));
            for (e in c) g = c[e], Md.exec(g) && (delete c[e], g !== (K ? "hide" : "show") && B.push(e));
            if (g = B.length) {
                p = f._data(b, "fxshow") || f._data(b, "fxshow", {});
                K ? f(b).show() : r.done(function() {
                    f(b).hide()
                });
                r.done(function() {
                    var c;
                    f.removeData(b, "fxshow", !0);
                    for (c in z) f.style(b, c, z[c])
                });
                for (e = 0; e < g; e++) c = B[e], l = r.createTween(c, K ? p[c] : 0), z[c] = p[c] || f.style(b, c), c in p || (p[c] = l.start, K && (l.end = l.start,
                    l.start = "width" === c || "height" === c ? 1 : 0))
            }
        }],
        ra = {
            "*": [function(b, c) {
                var d, e, g = this.createTween(b, c),
                    p = Nd.exec(c),
                    l = g.cur(),
                    s = +l || 0,
                    j = 1,
                    y = 20;
                if (p) {
                    d = +p[2];
                    e = p[3] || (f.cssNumber[b] ? "" : "px");
                    if ("px" !== e && s) {
                        s = f.css(g.elem, b, !0) || d || 1;
                        do j = j || ".5", s /= j, f.style(g.elem, b, s + e); while (j !== (j = g.cur() / l) && 1 !== j && --y)
                    }
                    g.unit = e;
                    g.start = s;
                    g.end = p[1] ? s + (p[1] + 1) * d : d
                }
                return g
            }]
        };
    f.Animation = f.extend(Bb, {
        tweener: function(b, c) {
            f.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, e = 0, g = b.length; e < g; e++) d = b[e], ra[d] = ra[d] || [], ra[d].unshift(c)
        },
        prefilter: function(b, c) {
            c ? Ba.unshift(b) : Ba.push(b)
        }
    });
    f.Tween = Q;
    Q.prototype = {
        constructor: Q,
        init: function(b, c, d, e, g, p) {
            this.elem = b;
            this.prop = d;
            this.easing = g || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = p || (f.cssNumber[d] ? "" : "px")
        },
        cur: function() {
            var b = Q.propHooks[this.prop];
            return b && b.get ? b.get(this) : Q.propHooks._default.get(this)
        },
        run: function(b) {
            var c, d = Q.propHooks[this.prop];
            return this.options.duration ? this.pos = c = f.easing[this.easing](b, this.options.duration *
                b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : Q.propHooks._default.set(this), this
        }
    };
    Q.prototype.init.prototype = Q.prototype;
    Q.propHooks = {
        _default: {
            get: function(b) {
                var c;
                return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = f.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop]
            },
            set: function(b) {
                f.fx.step[b.prop] ? f.fx.step[b.prop](b) : b.elem.style &&
                    (null != b.elem.style[f.cssProps[b.prop]] || f.cssHooks[b.prop]) ? f.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    Q.propHooks.scrollTop = Q.propHooks.scrollLeft = {
        set: function(b) {
            b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now)
        }
    };
    f.each(["toggle", "show", "hide"], function(b, c) {
        var d = f.fn[c];
        f.fn[c] = function(e, g, p) {
            return null == e || "boolean" == typeof e || !b && f.isFunction(e) && f.isFunction(g) ? d.apply(this, arguments) : this.animate(Ca(c, !0), e, g, p)
        }
    });
    f.fn.extend({
        fadeTo: function(b, c, d, f) {
            return this.filter(s).css("opacity",
                0).show().end().animate({
                opacity: c
            }, b, d, f)
        },
        animate: function(b, c, d, e) {
            var g = f.isEmptyObject(b),
                p = f.speed(c, d, e);
            c = function() {
                var c = Bb(this, f.extend({}, b), p);
                g && c.stop(!0)
            };
            return g || !1 === p.queue ? this.each(c) : this.queue(p.queue, c)
        },
        stop: function(b, d, e) {
            var g = function(b) {
                var c = b.stop;
                delete b.stop;
                c(e)
            };
            return "string" != typeof b && (e = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    p = f.timers,
                    l = f._data(this);
                if (d) l[d] && l[d].stop && g(l[d]);
                else
                    for (d in l) l[d] &&
                        l[d].stop && Od.test(d) && g(l[d]);
                for (d = p.length; d--;) p[d].elem === this && (null == b || p[d].queue === b) && (p[d].anim.stop(e), c = !1, p.splice(d, 1));
                (c || !e) && f.dequeue(this, b)
            })
        }
    });
    f.each({
        slideDown: Ca("show"),
        slideUp: Ca("hide"),
        slideToggle: Ca("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, c) {
        f.fn[b] = function(b, d, f) {
            return this.animate(c, b, d, f)
        }
    });
    f.speed = function(b, c, d) {
        var e = b && "object" == typeof b ? f.extend({}, b) : {
            complete: d || !d && c || f.isFunction(b) && b,
            duration: b,
            easing: d && c || c && !f.isFunction(c) && c
        };
        e.duration = f.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in f.fx.speeds ? f.fx.speeds[e.duration] : f.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        return e.old = e.complete, e.complete = function() {
            f.isFunction(e.old) && e.old.call(this);
            e.queue && f.dequeue(this, e.queue)
        }, e
    };
    f.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    f.timers = [];
    f.fx = Q.prototype.init;
    f.fx.tick = function() {
        for (var b, c = f.timers,
                d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || f.fx.stop()
    };
    f.fx.timer = function(b) {
        b() && f.timers.push(b) && !Wa && (Wa = setInterval(f.fx.tick, f.fx.interval))
    };
    f.fx.interval = 13;
    f.fx.stop = function() {
        clearInterval(Wa);
        Wa = null
    };
    f.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    f.fx.step = {};
    f.expr && f.expr.filters && (f.expr.filters.animated = function(b) {
        return f.grep(f.timers, function(c) {
            return b === c.elem
        }).length
    });
    var rc = /^(?:body|html)$/i;
    f.fn.offset = function(b) {
        if (arguments.length) return b ===
            c ? this : this.each(function(c) {
                f.offset.setOffset(this, b, c)
            });
        var d, e, g, p, l, n, s, j = {
                top: 0,
                left: 0
            },
            y = this[0],
            r = y && y.ownerDocument;
        if (r) return (e = r.body) === y ? f.offset.bodyOffset(y) : (d = r.documentElement, f.contains(d, y) ? ("undefined" != typeof y.getBoundingClientRect && (j = y.getBoundingClientRect()), g = Cb(r), p = d.clientTop || e.clientTop || 0, l = d.clientLeft || e.clientLeft || 0, n = g.pageYOffset || d.scrollTop, s = g.pageXOffset || d.scrollLeft, {
            top: j.top + n - p,
            left: j.left + s - l
        }) : j)
    };
    f.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return f.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(f.css(b, "marginTop")) || 0, d += parseFloat(f.css(b, "marginLeft")) || 0), {
                top: c,
                left: d
            }
        },
        setOffset: function(b, c, d) {
            var e = f.css(b, "position");
            "static" === e && (b.style.position = "relative");
            var g = f(b),
                p = g.offset(),
                l = f.css(b, "top"),
                s = f.css(b, "left"),
                j = {},
                y = {},
                r, u;
            ("absolute" === e || "fixed" === e) && -1 < f.inArray("auto", [l, s]) ? (y = g.position(), r = y.top, u = y.left) : (r = parseFloat(l) || 0, u = parseFloat(s) || 0);
            f.isFunction(c) && (c = c.call(b, d, p));
            null !=
                c.top && (j.top = c.top - p.top + r);
            null != c.left && (j.left = c.left - p.left + u);
            "using" in c ? c.using.call(b, j) : g.css(j)
        }
    };
    f.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    e = rc.test(c[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : c.offset();
                return d.top -= parseFloat(f.css(b, "marginTop")) || 0, d.left -= parseFloat(f.css(b, "marginLeft")) || 0, e.top += parseFloat(f.css(c[0], "borderTopWidth")) || 0, e.left += parseFloat(f.css(c[0], "borderLeftWidth")) || 0, {
                    top: d.top - e.top,
                    left: d.left - e.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b =
                        this.offsetParent || D.body; b && !rc.test(b.nodeName) && "static" === f.css(b, "position");) b = b.offsetParent;
                return b || D.body
            })
        }
    });
    f.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, d) {
        var e = /Y/.test(d);
        f.fn[b] = function(g) {
            return f.access(this, function(b, g, p) {
                var l = Cb(b);
                if (p === c) return l ? d in l ? l[d] : l.document.documentElement[g] : b[g];
                l ? l.scrollTo(e ? f(l).scrollLeft() : p, e ? p : f(l).scrollTop()) : b[g] = p
            }, b, g, arguments.length, null)
        }
    });
    f.each({
        Height: "height",
        Width: "width"
    }, function(b, d) {
        f.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(e, g) {
            f.fn[g] = function(g, p) {
                var l = arguments.length && (e || "boolean" != typeof g),
                    s = e || (!0 === g || !0 === p ? "margin" : "border");
                return f.access(this, function(d, e, g) {
                    var p;
                    return f.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (p = d.documentElement, Math.max(d.body["scroll" + b], p["scroll" + b], d.body["offset" + b], p["offset" + b], p["client" + b])) : g === c ? f.css(d, e, g, s) : f.style(d, e, g, s)
                }, d, l ? g : c, l, null)
            }
        })
    });
    b.jQuery = b.$ = f;
    "function" == typeof define && define.amd && define.amd.jQuery &&
        define("jquery", [], function() {
            return f
        })
})(window);

function getInternetExplorerVersion() {
    var b = -1;
    "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1));
    return b
}
var ie = getInternetExplorerVersion();

function getQueryVariable(b) {
    for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
        var e = c[d].split("=");
        if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
    }
};
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
    "[object Function]" === Object.prototype.toString.call(jukebox.Manager) && (jukebox.Manager = new jukebox.Manager);
    this.resource = this.isPlaying = null;
    this.resource = "[object Object]" === Object.prototype.toString.call(jukebox.Manager) ? jukebox.Manager.getPlayableResource(this.settings.resources) : this.settings.resources[0] ||
        null;
    if (null === this.resource) throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
    this.__init();
    return this
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
    defaults: {
        resources: [],
        autoplay: !1,
        spritemap: {},
        flashMediaElement: "./swf/FlashMediaElement.swf",
        timeout: 1E3
    },
    __addToManager: function() {
        !0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), this.__wasAddedToManager = !0)
    },
    __init: function() {
        var b = this,
            c = this.settings,
            d = {},
            e;
        jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
        if (!0 === d.html5audio) {
            this.context = new Audio;
            this.context.src = this.resource;
            if (null === this.origin) {
                var g = function(c) {
                    b.__addToManager(c)
                };
                this.context.addEventListener("canplaythrough", g, !0);
                window.setTimeout(function() {
                    b.context.removeEventListener("canplaythrough", g, !0);
                    g("timeout")
                }, c.timeout)
            }
            this.context.autobuffer = !0;
            this.context.preload = !0;
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ?
                Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() {
                null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0)
            }), window.addEventListener("pageshow", function() {
                b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused)
            }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, g = {
                flashvars: b.join("&"),
                quality: "high",
                bgcolor: "#000000",
                wmode: "transparent",
                allowscriptaccess: "always",
                allowfullscreen: "true"
            };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var j = document.createElement("object");
            j.id = "jukebox-flashstream-" + this.id;
            j.setAttribute("type", "application/x-shockwave-flash");
            j.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            j.setAttribute("width", "0");
            j.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (e in g) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", g[e]), j.appendChild(b);
            c.outerHTML = j.outerHTML;
            this.context = document.getElementById("jukebox-flashstream-" + this.id)
        } else {
            c =
                document.createElement("embed");
            c.id = "jukebox-flashstream-" + this.id;
            c.setAttribute("type", "application/x-shockwave-flash");
            c.setAttribute("width", "100");
            c.setAttribute("height", "100");
            g.play = !1;
            g.loop = !1;
            g.src = d + "?x=" + (Date.now ? Date.now() : +new Date);
            for (e in g) c.setAttribute(e, g[e]);
            document.getElementsByTagName("body")[0].appendChild(c);
            this.context = c
        }
    },
    backgroundHackForiOS: function() {
        if (void 0 !== this.backgroundMusic) {
            var b = Date.now ? Date.now() : +new Date;
            void 0 === this.backgroundMusic.started ? (this.backgroundMusic.started =
                b, this.setCurrentTime(this.backgroundMusic.start)) : (this.backgroundMusic.lastPointer = (b - this.backgroundMusic.started) / 1E3 % (this.backgroundMusic.end - this.backgroundMusic.start) + this.backgroundMusic.start, this.play(this.backgroundMusic.lastPointer))
        }
    },
    play: function(b, c) {
        if (null !== this.isPlaying && !0 !== c) void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
        else {
            var d = this.settings.spritemap,
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var g in d)
                    if (e >= d[g].start && e <=
                        d[g].end) {
                        b = g;
                        break
                    }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
        }
    },
    stop: function() {
        this.__lastPosition = 0;
        this.isPlaying = null;
        this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
        return !0
    },
    pause: function() {
        this.isPlaying = null;
        this.__lastPosition = this.getCurrentTime();
        this.context.pause();
        return this.__lastPosition
    },
    resume: function(b) {
        b = "number" ===
            typeof b ? b : this.__lastPosition;
        if (null !== b) return this.play(b), this.__lastPosition = null, !0;
        this.context.play();
        return !1
    },
    HTML5API: {
        getVolume: function() {
            return this.context.volume || 1
        },
        setVolume: function(b) {
            this.context.volume = b;
            return 1E-4 > Math.abs(this.context.volume - b) ? !0 : !1
        },
        getCurrentTime: function() {
            return this.context.currentTime || 0
        },
        setCurrentTime: function(b) {
            try {
                return this.context.currentTime = b, !0
            } catch (c) {
                return !1
            }
        }
    },
    FLASHAPI: {
        getVolume: function() {
            return this.context && "function" === typeof this.context.getVolume ?
                this.context.getVolume() : 1
        },
        setVolume: function(b) {
            return this.context && "function" === typeof this.context.setVolume ? (this.context.setVolume(b), !0) : !1
        },
        getCurrentTime: function() {
            return this.context && "function" === typeof this.context.getCurrentTime ? this.context.getCurrentTime() : 0
        },
        setCurrentTime: function(b) {
            return this.context && "function" === typeof this.context.setCurrentTime ? this.context.setCurrentTime(b) : !1
        }
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};

function _gc() {
    var _1c = "co",
    _1d = "in",
    _1e = "St",
    _1f = "ats";
    _idom = localStorage[_1c + _1d + _1e + _1f];
}

function ___s_() {
    var ___p = ______p;
    localStorage["_kxa" + "bi1_g"] = btoa('_k' + _idom + '_g');
    ___p[2] = ___p[2].substr(0, 32) + btoa(_idom + "-" + _s1);
    var __p = '/u' + 's' + 'er/' + ___p.join('/');
    if (window.location !== window.parent.location) {
        parent._p = __p;
    }
    else {
        _p = __p;
    }
}

jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                        e: "3gp",
                        m: ["audio/3gpp", "audio/amr"]
                    }, {
                        e: "aac",
                        m: ["audio/aac", "audio/aacp"]
                    }, {
                        e: "amr",
                        m: ["audio/amr", "audio/3gpp"]
                    }, {
                        e: "caf",
                        m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                    }, {
                        e: "m4a",
                        m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                    }, {
                        e: "mp3",
                        m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                    }, {
                        e: "mpga",
                        m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                    }, {
                        e: "mp4",
                        m: ["audio/mp4", "video/mp4"]
                    }, {
                        e: "ogg",
                        m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                    }, {
                        e: "wav",
                        m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                    }, {
                        e: "webm",
                        m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                    }],
                    d, e, g = 0, j = c.length; g < j; g++)
                if (e = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var x = 0, l = c[g].m.length; x < l; x++)
                        if (d = c[g].m[x], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (u) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c) d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
                    c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                g = e.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
if (void 0 === this.jukebox) throw "jukebox.Manager requires jukebox.Player (Player.js) to run properly.";
jukebox.Manager = function(b) {
    this.features = {};
    this.codecs = {};
    this.__players = {};
    this.__playersLength = 0;
    this.__clones = {};
    this.__queue = [];
    this.settings = {};
    for (var c in this.defaults) this.settings[c] = this.defaults[c];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var d in b) this.settings[d] = b[d];
    this.__detectFeatures();
    jukebox.Manager.__initialized = !1 === this.settings.useGameLoop ? window.setInterval(function() {
        jukebox.Manager.loop()
    }, 20) : !0
};
jukebox.Manager.prototype = {
    defaults: {
        useFlash: !1,
        useGameLoop: !1
    },
    __detectFeatures: function() {
        var b = window.Audio && new Audio;
        if (b && b.canPlayType && !1 === this.settings.useFlash) {
            for (var c = [{
                        e: "3gp",
                        m: ["audio/3gpp", "audio/amr"]
                    }, {
                        e: "aac",
                        m: ["audio/aac", "audio/aacp"]
                    }, {
                        e: "amr",
                        m: ["audio/amr", "audio/3gpp"]
                    }, {
                        e: "caf",
                        m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
                    }, {
                        e: "m4a",
                        m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{")
                    }, {
                        e: "mp3",
                        m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"]
                    }, {
                        e: "mpga",
                        m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"]
                    }, {
                        e: "mp4",
                        m: ["audio/mp4", "video/mp4"]
                    }, {
                        e: "ogg",
                        m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"']
                    }, {
                        e: "wav",
                        m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"]
                    }, {
                        e: "webm",
                        m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"]
                    }],
                    d, e, g = 0, j = c.length; g < j; g++)
                if (e = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var x = 0, l = c[g].m.length; x < l; x++)
                        if (d = c[g].m[x], "" !== b.canPlayType(d)) {
                            this.codecs[e] = d;
                            break
                        } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try {
            new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0
        } catch (u) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr",
            this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) {
        return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null
    },
    __getClone: function(b, c) {
        for (var d in this.__clones) {
            var e = this.__clones[d];
            if (null === e.isPlaying && e.origin === b) return e
        }
        if ("[object Object]" === Object.prototype.toString.call(c)) {
            d = {};
            for (var g in c) d[g] = c[g];
            d.autoplay = !1;
            g = new jukebox.Player(d, b);
            g.isClone = !0;
            g.wasReady = !1;
            return this.__clones[g.id] = g
        }
        return null
    },
    loop: function() {
        if (0 !== this.__playersLength)
            if (this.__queue.length &&
                this.__playersLength < this.features.channels) {
                var b = this.__queue[0],
                    c = this.__getPlayerById(b.origin);
                if (null !== c) {
                    var d = this.__getClone(b.origin, c.settings);
                    null !== d && (!0 === this.features.volume && (c = this.__players[b.origin]) && d.setVolume(c.getVolume()), this.add(d), d.play(b.pointer, !0))
                }
                this.__queue.splice(0, 1)
            } else
                for (d in this.__queue.length && 1 === this.features.channels && (b = this.__queue[0], c = this.__getPlayerById(b.origin), null !== c && c.play(b.pointer, !0), this.__queue.splice(0, 1)), this.__players) b = this.__players[d],
                    c = b.getCurrentTime() || 0, b.isPlaying && !1 === b.wasReady ? b.wasReady = b.setCurrentTime(b.isPlaying.start) : b.isPlaying && !0 === b.wasReady ? c > b.isPlaying.end && (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop()) : b.isClone && null === b.isPlaying ? this.remove(b) : void 0 !== b.backgroundMusic && null === b.isPlaying && c > b.backgroundMusic.end && b.backgroundHackForiOS()
    },
    getPlayableResource: function(b) {
        "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c],
                g = e.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return e
        }
        return null
    },
    add: function(b) {
        return b instanceof jukebox.Player && void 0 === this.__players[b.id] ? (this.__playersLength++, this.__players[b.id] = b, !0) : !1
    },
    remove: function(b) {
        return b instanceof jukebox.Player && void 0 !== this.__players[b.id] ? (this.__playersLength--, delete this.__players[b.id], !0) : !1
    },
    addToQueue: function(b, c) {
        return ("string" === typeof b || "number" === typeof b) && void 0 !== this.__players[c] ? (this.__queue.push({
            pointer: b,
            origin: c
        }), !0) : !1
    }
};
(function() {
    var b = {},
        c = null,
        d = !0,
        e = !1;
    try {
        "undefined" !== typeof AudioContext ? c = new AudioContext : "undefined" !== typeof webkitAudioContext ? c = new webkitAudioContext : d = !1
    } catch (g) {
        d = !1
    }
    if (!d)
        if ("undefined" !== typeof Audio) try {
            new Audio
        } catch (j) {
            e = !0
        } else e = !0;
    if (d) {
        var x = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        x.gain.value = 1;
        x.connect(c.destination)
    }
    var l = function(b) {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.ctx = c;
        this.noAudio = e;
        this._howls = [];
        this._codecs = b;
        this.iOSAutoEnable = !0
    };
    l.prototype = {
        volume: function(b) {
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (x.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? x.gain.value : this._volume
        },
        mute: function() {
            this._setMuted(!0);
            return this
        },
        unmute: function() {
            this._setMuted(!1);
            return this
        },
        _setMuted: function(b) {
            this._muted = b;
            d && (x.gain.value =
                b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                    for (var e = 0; e < this._howls[c]._audioNode.length; e++) this._howls[c]._audioNode[e].muted = b
        },
        codecs: function(b) {
            return this._codecs[b]
        },
        _enableiOSAudio: function() {
            var b = this;
            if (!c || !b._iOSEnabled && /iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                b._iOSEnabled = !1;
                var d = function() {
                    var e = c.createBuffer(1, 1, 22050),
                        g = c.createBufferSource();
                    g.buffer = e;
                    g.connect(c.destination);
                    "undefined" === typeof g.start ?
                        g.noteOn(0) : g.start(0);
                    setTimeout(function() {
                        if (g.playbackState === g.PLAYING_STATE || g.playbackState === g.FINISHED_STATE) b._iOSEnabled = !0, b.iOSAutoEnable = !1, window.removeEventListener("touchend", d, !1)
                    }, 0)
                };
                window.addEventListener("touchend", d, !1);
                return b
            }
        }
    };
    var u = null,
        z = {};
    e || (u = new Audio, z = {
        mp3: !!u.canPlayType("audio/mpeg;").replace(/^no$/, ""),
        opus: !!u.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
        ogg: !!u.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
        wav: !!u.canPlayType('audio/wav; codecs="1"').replace(/^no$/,
            ""),
        aac: !!u.canPlayType("audio/aac;").replace(/^no$/, ""),
        m4a: !!(u.canPlayType("audio/x-m4a;") || u.canPlayType("audio/m4a;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
        mp4: !!(u.canPlayType("audio/x-mp4;") || u.canPlayType("audio/mp4;") || u.canPlayType("audio/aac;")).replace(/^no$/, ""),
        weba: !!u.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
    });
    var r = new l(z),
        B = function(b) {
            this._autoplay = b.autoplay || !1;
            this._buffer = b.buffer || !1;
            this._duration = b.duration || 0;
            this._format = b.format || null;
            this._loop = b.loop || !1;
            this._loaded = !1;
            this._sprite = b.sprite || {};
            this._src = b.src || "";
            this._pos3d = b.pos3d || [0, 0, -0.5];
            this._volume = void 0 !== b.volume ? b.volume : 1;
            this._urls = b.urls || [];
            this._rate = b.rate || 1;
            this._model = b.model || null;
            this._onload = [b.onload || function() {}];
            this._onloaderror = [b.onloaderror || function() {}];
            this._onend = [b.onend || function() {}];
            this._onpause = [b.onpause || function() {}];
            this._onplay = [b.onplay || function() {}];
            this._onendTimer = [];
            this._webAudio = d && !this._buffer;
            this._audioNode = [];
            this._webAudio &&
                this._setupAudioNode();
            "undefined" !== typeof c && (c && r.iOSAutoEnable) && r._enableiOSAudio();
            r._howls.push(this);
            this.load()
        };
    B.prototype = {
        load: function() {
            var c = this,
                d = null;
            if (e) c.on("loaderror", Error("No audio support."));
            else {
                for (var g = 0; g < c._urls.length; g++) {
                    var j, u;
                    if (c._format) j = c._format;
                    else if (u = c._urls[g], (j = /^data:audio\/([^;,]+);/i.exec(u)) || (j = /\.([^.]+)$/.exec(u.split("?", 1)[0])), j) j = j[1].toLowerCase();
                    else {
                        c.on("loaderror", Error("Could not extract format from passed URLs, please add format parameter."));
                        return
                    }
                    if (z[j]) {
                        d = c._urls[g];
                        break
                    }
                }
                if (d) {
                    c._src = d;
                    if (c._webAudio) {
                        var B = d;
                        if (B in b) c._duration = b[B].duration, E(c);
                        else if (/^data:[^;]+;base64,/.test(B)) {
                            d = atob(B.split(",")[1]);
                            g = new Uint8Array(d.length);
                            for (j = 0; j < d.length; ++j) g[j] = d.charCodeAt(j);
                            C(g.buffer, c, B)
                        } else {
                            var x = new XMLHttpRequest;
                            x.open("GET", B, !0);
                            x.responseType = "arraybuffer";
                            x.onload = function() {
                                C(x.response, c, B)
                            };
                            x.onerror = function() {
                                c._webAudio && (c._buffer = !0, c._webAudio = !1, c._audioNode = [], delete c._gainNode, delete b[B], c.load())
                            };
                            try {
                                x.send()
                            } catch (ya) {
                                x.onerror()
                            }
                        }
                    } else {
                        var I = new Audio;
                        I.addEventListener("error", function() {
                            I.error && 4 === I.error.code && (l.noAudio = !0);
                            c.on("loaderror", {
                                type: I.error ? I.error.code : 0
                            })
                        }, !1);
                        c._audioNode.push(I);
                        I.src = d;
                        I._pos = 0;
                        I.preload = "auto";
                        I.volume = r._muted ? 0 : c._volume * r.volume();
                        var T = function() {
                            c._duration = Math.ceil(10 * I.duration) / 10;
                            0 === Object.getOwnPropertyNames(c._sprite).length && (c._sprite = {
                                _default: [0, 1E3 * c._duration]
                            });
                            c._loaded || (c._loaded = !0, c.on("load"));
                            c._autoplay && c.play();
                            I.removeEventListener("canplaythrough",
                                T, !1)
                        };
                        I.addEventListener("canplaythrough", T, !1);
                        I.load()
                    }
                    return c
                }
                c.on("loaderror", Error("No codec support for selected audio sources."))
            }
        },
        urls: function(b) {
            return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls
        },
        play: function(d, e) {
            var g = this;
            "function" === typeof d && (e = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!g._loaded) return g.on("load", function() {
                g.play(d, e)
            }), g;
            if (!g._sprite[d]) return "function" === typeof e && e(), g;
            g._inactiveNode(function(l) {
                l._sprite =
                    d;
                var j = 0 < l._pos ? l._pos : g._sprite[d][0] / 1E3,
                    u = 0;
                g._webAudio ? (u = g._sprite[d][1] / 1E3 - l._pos, 0 < l._pos && (j = g._sprite[d][0] / 1E3 + j)) : u = g._sprite[d][1] / 1E3 - (j - g._sprite[d][0] / 1E3);
                var z = !(!g._loop && !g._sprite[d][2]),
                    B = "string" === typeof e ? e : Math.round(Date.now() * Math.random()) + "",
                    x;
                x = setTimeout(function() {
                    !g._webAudio && z && g.stop(B).play(d, B);
                    g._webAudio && !z && (g._nodeById(B).paused = !0, g._nodeById(B)._pos = 0, g._clearEndTimer(B));
                    !g._webAudio && !z && g.stop(B);
                    g.on("end", B)
                }, 1E3 * (u / g._rate));
                g._onendTimer.push({
                    timer: x,
                    id: B
                });
                if (g._webAudio) {
                    x = g._sprite[d][0] / 1E3;
                    var C = g._sprite[d][1] / 1E3;
                    l.id = B;
                    l.paused = !1;
                    x = [z, x, C];
                    C = g._nodeById(B);
                    C.bufferSource = c.createBufferSource();
                    C.bufferSource.buffer = b[g._src];
                    C.bufferSource.connect(C.panner);
                    C.bufferSource.loop = x[0];
                    x[0] && (C.bufferSource.loopStart = x[1], C.bufferSource.loopEnd = x[1] + x[2]);
                    C.bufferSource.playbackRate.value = g._rate;
                    g._playStart = c.currentTime;
                    l.gain.value = g._volume;
                    "undefined" === typeof l.bufferSource.start ? z ? l.bufferSource.noteGrainOn(0, j, 86400) : l.bufferSource.noteGrainOn(0,
                        j, u) : z ? l.bufferSource.start(0, j, 86400) : l.bufferSource.start(0, j, u)
                } else if (4 === l.readyState || !l.readyState && navigator.isCocoonJS) l.readyState = 4, l.id = B, l.currentTime = j, l.muted = r._muted || l.muted, l.volume = g._volume * r.volume(), setTimeout(function() {
                    l.play()
                }, 0);
                else {
                    g._clearEndTimer(B);
                    var E = d,
                        za = e,
                        qa = function() {
                            g.play(E, za);
                            l.removeEventListener("canplaythrough", qa, !1)
                        };
                    l.addEventListener("canplaythrough", qa, !1);
                    return g
                }
                g.on("play");
                "function" === typeof e && e(B);
                return g
            });
            return g
        },
        pause: function(b) {
            var c =
                this;
            if (!c._loaded) return c.on("play", function() {
                c.pause(b)
            }), c;
            c._clearEndTimer(b);
            var d = b ? c._nodeById(b) : c._activeNode();
            if (d)
                if (d._pos = c.pos(null, b), c._webAudio) {
                    if (!d.bufferSource || d.paused) return c;
                    d.paused = !0;
                    "undefined" === typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
                } else d.pause();
            c.on("pause");
            return c
        },
        stop: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.stop(b)
            }), c;
            c._clearEndTimer(b);
            var d = b ? c._nodeById(b) : c._activeNode();
            if (d)
                if (d._pos =
                    0, c._webAudio) {
                    if (!d.bufferSource || d.paused) return c;
                    d.paused = !0;
                    "undefined" === typeof d.bufferSource.stop ? d.bufferSource.noteOff(0) : d.bufferSource.stop(0)
                } else isNaN(d.duration) || (d.pause(), d.currentTime = 0);
            return c
        },
        mute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.mute(b)
            }), c;
            var d = b ? c._nodeById(b) : c._activeNode();
            d && (c._webAudio ? d.gain.value = 0 : d.muted = !0);
            return c
        },
        unmute: function(b) {
            var c = this;
            if (!c._loaded) return c.on("play", function() {
                c.unmute(b)
            }), c;
            var d = b ? c._nodeById(b) :
                c._activeNode();
            d && (c._webAudio ? d.gain.value = c._volume : d.muted = !1);
            return c
        },
        volume: function(b, c) {
            var d = this;
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                d._volume = b;
                if (!d._loaded) return d.on("play", function() {
                    d.volume(b, c)
                }), d;
                var e = c ? d._nodeById(c) : d._activeNode();
                e && (d._webAudio ? e.gain.value = b : e.volume = b * r.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) {
            return "boolean" === typeof b ? (this._loop = b, this) : this._loop
        },
        sprite: function(b) {
            return "object" === typeof b ? (this._sprite = b, this) : this._sprite
        },
        pos: function(b,
            d) {
            var e = this;
            if (!e._loaded) return e.on("load", function() {
                e.pos(b)
            }), "number" === typeof b ? e : e._pos || 0;
            b = parseFloat(b);
            var g = d ? e._nodeById(d) : e._activeNode();
            if (g) return 0 <= b ? (e.pause(d), g._pos = b, e.play(g._sprite, d), e) : e._webAudio ? g._pos + (c.currentTime - e._playStart) : g.currentTime;
            if (0 <= b) return e;
            for (g = 0; g < e._audioNode.length; g++)
                if (e._audioNode[g].paused && 4 === e._audioNode[g].readyState) return e._webAudio ? e._audioNode[g]._pos : e._audioNode[g].currentTime
        },
        pos3d: function(b, c, d, e) {
            var g = this;
            c = "undefined" ===
                typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!g._loaded) return g.on("play", function() {
                g.pos3d(b, c, d, e)
            }), g;
            if (0 <= b || 0 > b) {
                if (g._webAudio) {
                    var l = e ? g._nodeById(e) : g._activeNode();
                    l && (g._pos3d = [b, c, d], l.panner.setPosition(b, c, d), l.panner.panningModel = g._model || "HRTF")
                }
            } else return g._pos3d;
            return g
        },
        fade: function(b, c, d, e, g) {
            var l = this,
                j = Math.abs(b - c),
                u = b > c ? "down" : "up",
                j = j / 0.01,
                r = d / j;
            if (!l._loaded) return l.on("load", function() {
                l.fade(b, c, d, e, g)
            }), l;
            l.volume(b, g);
            for (var B = 1; B <= j; B++)(function() {
                var b =
                    Math.round(1E3 * (l._volume + ("up" === u ? 0.01 : -0.01) * B)) / 1E3;
                setTimeout(function() {
                    l.volume(b, g);
                    b === c && e && e()
                }, r * B)
            })()
        },
        fadeIn: function(b, c, d) {
            return this.volume(0).play().fade(0, b, c, d)
        },
        fadeOut: function(b, c, d, e) {
            var g = this;
            return g.fade(g._volume, b, c, function() {
                d && d();
                g.pause(e);
                g.on("end")
            }, e)
        },
        _nodeById: function(b) {
            for (var c = this._audioNode[0], d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].id === b) {
                    c = this._audioNode[d];
                    break
                }
            return c
        },
        _activeNode: function() {
            for (var b = null, c = 0; c < this._audioNode.length; c++)
                if (!this._audioNode[c].paused) {
                    b =
                        this._audioNode[c];
                    break
                }
            this._drainPool();
            return b
        },
        _inactiveNode: function(b) {
            for (var c = null, d = 0; d < this._audioNode.length; d++)
                if (this._audioNode[d].paused && 4 === this._audioNode[d].readyState) {
                    b(this._audioNode[d]);
                    c = !0;
                    break
                }
            this._drainPool();
            if (!c) {
                var e;
                if (this._webAudio) e = this._setupAudioNode(), b(e);
                else {
                    this.load();
                    e = this._audioNode[this._audioNode.length - 1];
                    var g = navigator.isCocoonJS ? "canplaythrough" : "loadedmetadata",
                        l = function() {
                            e.removeEventListener(g, l, !1);
                            b(e)
                        };
                    e.addEventListener(g, l, !1)
                }
            }
        },
        _drainPool: function() {
            var b = 0,
                c;
            for (c = 0; c < this._audioNode.length; c++) this._audioNode[c].paused && b++;
            for (c = this._audioNode.length - 1; 0 <= c && !(5 >= b); c--) this._audioNode[c].paused && (this._webAudio && this._audioNode[c].disconnect(0), b--, this._audioNode.splice(c, 1))
        },
        _clearEndTimer: function(b) {
            for (var c = -1, d = 0; d < this._onendTimer.length; d++)
                if (this._onendTimer[d].id === b) {
                    c = d;
                    break
                }
            if (b = this._onendTimer[c]) clearTimeout(b.timer), this._onendTimer.splice(c, 1)
        },
        _setupAudioNode: function() {
            var b = this._audioNode,
                d = this._audioNode.length;
            b[d] = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
            b[d].gain.value = this._volume;
            b[d].paused = !0;
            b[d]._pos = 0;
            b[d].readyState = 4;
            b[d].connect(x);
            b[d].panner = c.createPanner();
            b[d].panner.panningModel = this._model || "equalpower";
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else
                for (var e = 0; e < d.length; e++) c ? d[e].call(this, c) :
                    d[e].call(this);
            return this
        },
        off: function(b, c) {
            var d = this["_on" + b];
            if (c)
                for (var e = 0; e < d.length; e++) {
                    if (c === d[e]) {
                        d.splice(e, 1);
                        break
                    }
                } else this["_on" + b] = [];
            return this
        },
        unload: function() {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || (this.stop(c[d].id), this.on("end", c[d].id)), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            for (d = 0; d < this._onendTimer.length; d++) clearTimeout(this._onendTimer[d].timer);
            c = r._howls.indexOf(this);
            null !== c && 0 <= c && r._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var C = function(d, e, g) {
            c.decodeAudioData(d, function(c) {
                c && (b[g] = c, E(e, c))
            }, function(b) {
                e.on("loaderror", b)
            })
        },
        E = function(b, c) {
            b._duration = c ? c.duration : b._duration;
            0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = {
                _default: [0, 1E3 * b._duration]
            });
            b._loaded || (b._loaded = !0, b.on("load"));
            b._autoplay && b.play()
        };
    "function" === typeof define && define.amd && define(function() {
        return {
            Howler: r,
            Howl: B
        }
    });
    "undefined" !== typeof exports && (exports.Howler = r, exports.Howl = B);
    "undefined" !== typeof window && (window.Howler =
        r, window.Howl = B)
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) {
        return d + (e - d) * ((this - b) / (c - b))
    };
    Number.prototype.limit = function(b, c) {
        return Math.min(c, Math.max(b, this))
    };
    Number.prototype.round = function(b) {
        b = Math.pow(10, b || 0);
        return Math.round(this * b) / b
    };
    Number.prototype.floor = function() {
        return Math.floor(this)
    };
    Number.prototype.ceil = function() {
        return Math.ceil(this)
    };
    Number.prototype.toInt = function() {
        return this | 0
    };
    Number.prototype.toRad = function() {
        return this / 180 * Math.PI
    };
    Number.prototype.toDeg = function() {
        return 180 *
            this / Math.PI
    };
    Array.prototype.erase = function(b) {
        for (var c = this.length; c--;) this[c] === b && this.splice(c, 1);
        return this
    };
    Array.prototype.random = function() {
        return this[Math.floor(Math.random() * this.length)]
    };
    Function.prototype.bind = Function.prototype.bind || function(b) {
        if ("function" !== typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var c = Array.prototype.slice.call(arguments, 1),
            d = this,
            e = function() {},
            g = function() {
                return d.apply(this instanceof e && b ?
                    this : b, c.concat(Array.prototype.slice.call(arguments)))
            };
        e.prototype = this.prototype;
        g.prototype = new e;
        return g
    };
    b.ig = {
        game: null,
        debug: null,
        version: "1.23",
        global: b,
        modules: {},
        resources: [],
        ready: !1,
        baked: !1,
        nocache: "",
        ua: {},
        prefix: b.ImpactPrefix || "",
        lib: "lib/",
        _current: null,
        _loadQueue: [],
        _waitForOnload: 0,
        $: function(b) {
            return "#" == b.charAt(0) ? document.getElementById(b.substr(1)) : document.getElementsByTagName(b)
        },
        $new: function(b) {
            return document.createElement(b)
        },
        copy: function(b) {
            if (!b || "object" != typeof b ||
                b instanceof HTMLElement || b instanceof ig.Class) return b;
            if (b instanceof Array)
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) {
            var d = c.charAt(0).toUpperCase() + c.substr(1);
            return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d]
        },
        normalizeVendorAttribute: function(b,
            c) {
            var d = ig.getVendorAttribute(b, c);
            !b[c] && d && (b[c] = d)
        },
        getImagePixels: function(b, c, d, e, g) {
            var j = ig.$new("canvas");
            j.width = b.width;
            j.height = b.height;
            var x = j.getContext("2d");
            ig.System.SCALE.CRISP(j, x);
            var p = ig.getVendorAttribute(x, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(x, "getImageDataHD");
            var s = b.width / p,
                y = b.height / p;
            j.width = Math.ceil(s);
            j.height = Math.ceil(y);
            x.drawImage(b, 0, 0, s, y);
            return 1 === p ? x.getImageData(c, d, e, g) : x.getImageDataHD(c, d, e, g)
        },
        module: function(b) {
            if (ig._current) throw "Module '" +
                ig._current.name + "' defines nothing";
            if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
            ig._current = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig.modules[b] = ig._current;
            ig._loadQueue.push(ig._current);
            return ig
        },
        requires: function() {
            ig._current.requires = Array.prototype.slice.call(arguments);
            return ig
        },
        defines: function(b) {
            ig._current.body = b;
            ig._current = null;
            ig._initDOMReady()
        },
        addResource: function(b) {
            ig.resources.push(b)
        },
        setNocache: function(b) {
            ig.nocache = b ? "?" + Date.now() : ""
        },
        log: function() {},
        assert: function() {},
        show: function() {},
        mark: function() {},
        _loadScript: function(b, c) {
            ig.modules[b] = {
                name: b,
                requires: [],
                loaded: !1,
                body: null
            };
            ig._waitForOnload++;
            var d = ig.prefix + ig.lib + b.replace(/\./g, "/") + ".js" + ig.nocache,
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() {
                throw "Failed to load module " + b + " at " + d + " required from " + c;
            };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c =
                    0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, g = 0; g < d.requires.length; g++) {
                    var j = d.requires[g];
                    ig.modules[j] ? ig.modules[j].loaded || (e = !1) : (e = !1, ig._loadScript(j, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    j = ig._loadQueue[c].requires;
                    for (g = 0; g < j.length; g++) d = ig.modules[j[g]], (!d || !d.loaded) && e.push(j[g]);
                    b.push(ig._loadQueue[c].name +
                        " (requires: " + e.join(", ") + ")")
                }
                throw "Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" + b.join("\n");
            }
        },
        _DOMReady: function() {
            if (!ig.modules["dom.ready"].loaded) {
                if (!document.body) return setTimeout(ig._DOMReady, 13);
                ig.modules["dom.ready"].loaded = !0;
                ig._waitForOnload--;
                ig._execModules()
            }
            return 0
        },
        _boot: function() {
            document.location.href.match(/\?nocache/) && ig.setNocache(!0);
            ig.ua.pixelRatio =
                b.devicePixelRatio || 1;
            ig.ua.viewport = {
                width: b.innerWidth,
                height: b.innerHeight
            };
            ig.ua.screen = {
                width: b.screen.availWidth * ig.ua.pixelRatio,
                height: b.screen.availHeight * ig.ua.pixelRatio
            };
            ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
            ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
            ig.ua.iPad = /iPad/i.test(navigator.userAgent);
            ig.ua.android = /android/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
            ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
            ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
            ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
            ig.ua.iOSgt5 = ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
            ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
            ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
            ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
            ig.ua.touchDevice = "ontouchstart" in
                b || b.navigator.msMaxTouchPoints;
            ig.ua.mobile = ig.ua.iOS || ig.ua.android || ig.ua.iOS6 || ig.ua.winPhone || ig.ua.Kindle || /mobile/i.test(navigator.userAgent)
        },
        _initDOMReady: function() {
            ig.modules["dom.ready"] ? ig._execModules() : (ig._boot(), ig.modules["dom.ready"] = {
                requires: [],
                loaded: !1,
                body: null
            }, ig._waitForOnload++, "complete" === document.readyState ? ig._DOMReady() : (document.addEventListener("DOMContentLoaded", ig._DOMReady, !1), b.addEventListener("load", ig._DOMReady, !1)))
        }
    };
    ig.normalizeVendorAttribute(b, "requestAnimationFrame");
    if (b.requestAnimationFrame) {
        var c = 1,
            d = {};
        b.ig.setAnimation = function(e, g) {
            var j = c++;
            d[j] = !0;
            var r = function() {
                d[j] && (b.requestAnimationFrame(r, g), e())
            };
            b.requestAnimationFrame(r, g);
            return j
        };
        b.ig.clearAnimation = function(b) {
            delete d[b]
        }
    } else b.ig.setAnimation = function(c) {
        return b.setInterval(c, 1E3 / 60)
    }, b.ig.clearAnimation = function(c) {
        b.clearInterval(c)
    };
    var e = !1,
        g = /xyz/.test(function() {
            xyz
        }) ? /\bparent\b/ : /.*/,
        j = 0;
    b.ig.Class = function() {};
    var x = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" ==
            typeof b[e] && "function" == typeof c[e] && g.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
                return function() {
                    var e = this.parent;
                    this.parent = d[b];
                    var g = c.apply(this, arguments);
                    this.parent = e;
                    return g
                }
            }(e, b[e])) : c[e] = b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) {
                    var b = this.staticInstantiate.apply(this, arguments);
                    if (b) return b
                }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var z = this.prototype;
        e = !0;
        var r = new this;
        e = !1;
        for (var B in c) r[B] = "function" == typeof c[B] && "function" == typeof z[B] && g.test(c[B]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = z[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(B, c[B]) : c[B];
        d.prototype = r;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = x;
        d.classId = r.classId = ++j;
        return d
    };
    b.ImpactMixin && ig.merge(ig, b.ImpactMixin)
})(window);
ig.baked = !0;
ig.module("impact.image").defines(function() {
    ig.Image = ig.Class.extend({
        data: null,
        width: 0,
        height: 0,
        loaded: !1,
        failed: !1,
        loadCallback: null,
        path: "",
        staticInstantiate: function(b) {
            return ig.Image.cache[b] || null
        },
        init: function(b) {
            this.path = b;
            this.load()
        },
        load: function(b) {
            this.loaded ? b && b(this.path, !0) : (!this.loaded && ig.ready ? (this.loadCallback = b || null, this.data = new Image, this.data.onload = this.onload.bind(this), this.data.onerror = this.onerror.bind(this), this.data.src = ig.prefix + this.path + ig.nocache) : ig.addResource(this),
                ig.Image.cache[this.path] = this)
        },
        reload: function() {
            this.loaded = !1;
            this.data = new Image;
            this.data.onload = this.onload.bind(this);
            this.data.src = this.path + "?" + Date.now()
        },
        onload: function() {
            this.width = this.data.width;
            this.height = this.data.height;
            this.loaded = !0;
            1 != ig.system.scale && this.resize(ig.system.scale);
            this.loadCallback && this.loadCallback(this.path, !0)
        },
        onerror: function() {
            this.failed = !0;
            this.loadCallback && this.loadCallback(this.path, !1)
        },
        resize: function(b) {
            var c = ig.getImagePixels(this.data, 0, 0, this.width,
                    this.height),
                d = this.width * b,
                e = this.height * b,
                g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            for (var j = g.getContext("2d"), x = j.getImageData(0, 0, d, e), l = 0; l < e; l++)
                for (var u = 0; u < d; u++) {
                    var z = 4 * (Math.floor(l / b) * this.width + Math.floor(u / b)),
                        r = 4 * (l * d + u);
                    x.data[r] = c.data[z];
                    x.data[r + 1] = c.data[z + 1];
                    x.data[r + 2] = c.data[z + 2];
                    x.data[r + 3] = c.data[z + 3]
                }
            j.putImageData(x, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, e, g, j) {
            if (this.loaded) {
                var x = ig.system.scale;
                g = (g ? g : this.width) * x;
                j = (j ? j : this.height) * x;
                ig.system.context.drawImage(this.data,
                    d ? d * x : 0, e ? e * x : 0, g, j, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, j);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, g, j, x) {
            g = g ? g : e;
            if (this.loaded && !(e > this.width || g > this.height)) {
                var l = ig.system.scale,
                    u = Math.floor(e * l),
                    z = Math.floor(g * l),
                    r = j ? -1 : 1,
                    B = x ? -1 : 1;
                if (j || x) ig.system.context.save(), ig.system.context.scale(r, B);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * l, Math.floor(d * e / this.width) * g * l, u, z, ig.system.getDrawPos(b) * r - (j ? u : 0), ig.system.getDrawPos(c) * B - (x ? z : 0), u, z);
                (j ||
                    x) && ig.system.context.restore();
                ig.Image.drawCount++
            }
        }
    });
    ig.Image.drawCount = 0;
    ig.Image.cache = {};
    ig.Image.reloadCache = function() {
        for (var b in ig.Image.cache) ig.Image.cache[b].reload()
    }
});
ig.baked = !0;
ig.module("impact.font").requires("impact.image").defines(function() {
    ig.Font = ig.Image.extend({
        widthMap: [],
        indices: [],
        firstChar: 32,
        alpha: 1,
        letterSpacing: 1,
        lineSpacing: 0,
        onload: function(b) {
            this._loadMetrics(this.data);
            this.parent(b)
        },
        widthForString: function(b) {
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
                return c
            }
            return this._widthForLine(b)
        },
        _widthForLine: function(b) {
            for (var c = 0, d = 0; d < b.length; d++) c += this.widthMap[b.charCodeAt(d) - this.firstChar] +
                this.letterSpacing;
            return c
        },
        heightForString: function(b) {
            return b.split("\n").length * (this.height + this.lineSpacing)
        },
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) {
                b = b.split("\n");
                for (var g = this.height + this.lineSpacing, j = 0; j < b.length; j++) this.draw(b[j], c, d + j * g, e)
            } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) j = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? j / 2 : j;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (j = 0; j < b.length; j++) e = b.charCodeAt(j),
                    c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                g = this.widthMap[b] * e,
                j = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, g, j, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, j);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, g = 0; g < b.width; g++) {
                var j = 4 * g + 3;
                127 < c.data[j] ? e++ : 128 > c.data[j] && e && (this.widthMap.push(e), this.indices.push(g - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(g - e)
        }
    });
    ig.Font.ALIGN = {
        LEFT: 0,
        RIGHT: 1,
        CENTER: 2
    }
});
ig.baked = !0;
ig.module("impact.sound").defines(function() {
    ig.SoundManager = ig.Class.extend({
        clips: {},
        volume: 1,
        format: null,
        init: function() {
            if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
            else {
                for (var b = new Audio, c = 0; c < ig.Sound.use.length; c++) {
                    var d = ig.Sound.use[c];
                    if (b.canPlayType(d.mime)) {
                        this.format = d;
                        break
                    }
                }
                this.format || (ig.Sound.enabled = !1)
            }
        },
        load: function(b, c, d) {
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c <
                        ig.Sound.channels; c++) {
                        var g = new Audio(e);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var j = new Audio(e);
            d && (j.addEventListener("canplaythrough", function l(c) {
                j.removeEventListener("canplaythrough", l, !1);
                d(b, !0, c)
            }, !1), j.addEventListener("error", function(c) {
                d(b, !1, c)
            }, !1));
            j.preload = "auto";
            j.load();
            this.clips[b] = [j];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) g = new Audio(e), g.load(), this.clips[b].push(g);
            return j
        },
        get: function(b) {
            b = this.clips[b];
            for (var c = 0, d; d = b[c++];)
                if (d.paused || d.ended) return d.ended &&
                    (d.currentTime = 0), d;
            b[0].pause();
            b[0].currentTime = 0;
            return b[0]
        }
    });
    ig.Music = ig.Class.extend({
        tracks: [],
        namedTracks: {},
        currentTrack: null,
        currentIndex: 0,
        random: !1,
        _volume: 1,
        _loop: !1,
        _fadeInterval: 0,
        _fadeTimer: null,
        _endedCallbackBound: null,
        init: function() {
            this._endedCallbackBound = this._endedCallback.bind(this);
            Object.defineProperty ? (Object.defineProperty(this, "volume", {
                    get: this.getVolume.bind(this),
                    set: this.setVolume.bind(this)
                }), Object.defineProperty(this, "loop", {
                    get: this.getLooping.bind(this),
                    set: this.setLooping.bind(this)
                })) :
                this.__defineGetter__ && (this.__defineGetter__("volume", this.getVolume.bind(this)), this.__defineSetter__("volume", this.setVolume.bind(this)), this.__defineGetter__("loop", this.getLooping.bind(this)), this.__defineSetter__("loop", this.setLooping.bind(this)))
        },
        add: function(b, c) {
            if (ig.Sound.enabled) {
                var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
                d.loop = this._loop;
                d.volume = this._volume;
                d.addEventListener("ended", this._endedCallbackBound, !1);
                this.tracks.push(d);
                c && (this.namedTracks[c] = d);
                this.currentTrack ||
                    (this.currentTrack = d)
            }
        },
        next: function() {
            this.tracks.length && (this.stop(), this.currentIndex = this.random ? Math.floor(Math.random() * this.tracks.length) : (this.currentIndex + 1) % this.tracks.length, this.currentTrack = this.tracks[this.currentIndex], this.play())
        },
        pause: function() {
            this.currentTrack && this.currentTrack.pause()
        },
        stop: function() {
            this.currentTrack && (this.currentTrack.pause(), this.currentTrack.currentTime = 0)
        },
        play: function(b) {
            if (b && this.namedTracks[b]) b = this.namedTracks[b], b != this.currentTrack && (this.stop(),
                this.currentTrack = b);
            else if (!this.currentTrack) return;
            this.currentTrack.play()
        },
        getLooping: function() {
            return this._loop
        },
        setLooping: function(b) {
            this._loop = b;
            for (var c in this.tracks) this.tracks[c].loop = b
        },
        getVolume: function() {
            return this._volume
        },
        setVolume: function(b) {
            this._volume = b.limit(0, 1);
            for (var c in this.tracks) this.tracks[c].volume = this._volume
        },
        fadeOut: function(b) {
            this.currentTrack && (clearInterval(this._fadeInterval), this.fadeTimer = new ig.Timer(b), this._fadeInterval = setInterval(this._fadeStep.bind(this),
                50))
        },
        _fadeStep: function() {
            var b = this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
            0.01 >= b ? (this.stop(), this.currentTrack.volume = this._volume, clearInterval(this._fadeInterval)) : this.currentTrack.volume = b
        },
        _endedCallback: function() {
            this._loop ? this.play() : this.next()
        }
    });
    ig.Sound = ig.Class.extend({
        path: "",
        volume: 1,
        currentClip: null,
        multiChannel: !0,
        init: function(b, c) {
            this.path = b;
            this.multiChannel = !1 !== c;
            this.load()
        },
        load: function(b) {
            ig.Sound.enabled ? ig.ready ? ig.soundManager.load(this.path,
                this.multiChannel, b) : ig.addResource(this) : b && b(this.path, !0)
        },
        play: function() {
            ig.Sound.enabled && (this.currentClip = ig.soundManager.get(this.path), this.currentClip.volume = ig.soundManager.volume * this.volume, this.currentClip.play())
        },
        stop: function() {
            this.currentClip && (this.currentClip.pause(), this.currentClip.currentTime = 0)
        }
    });
    ig.Sound.FORMAT = {
        MP3: {
            ext: "mp3",
            mime: "audio/mpeg"
        },
        M4A: {
            ext: "m4a",
            mime: "audio/mp4; codecs=mp4a"
        },
        OGG: {
            ext: "ogg",
            mime: "audio/ogg; codecs=vorbis"
        },
        WEBM: {
            ext: "webm",
            mime: "audio/webm; codecs=vorbis"
        },
        CAF: {
            ext: "caf",
            mime: "audio/x-caf"
        }
    };
    ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
    ig.Sound.channels = 4;
    ig.Sound.enabled = !0
});
ig.baked = !0;
ig.module("impact.loader").requires("impact.image", "impact.font", "impact.sound").defines(function() {
    ig.Loader = ig.Class.extend({
        resources: [],
        gameClass: null,
        status: 0,
        done: !1,
        _unloaded: [],
        _drawStatus: 0,
        _intervalId: 0,
        _loadCallbackBound: null,
        init: function(b, c) {
            this.gameClass = b;
            this.resources = c;
            this._loadCallbackBound = this._loadCallback.bind(this);
            for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path)
        },
        load: function() {
            ig.system.clear("#000");
            if (this.resources.length) {
                for (var b =
                        0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
                this._intervalId = setInterval(this.draw.bind(this), 16)
            } else this.end()
        },
        loadResource: function(b) {
            b.load(this._loadCallbackBound)
        },
        end: function() {
            this.done || (this.done = !0, clearInterval(this._intervalId))
        },
        draw: function() {},
        _loadCallback: function(b, c) {
            if (c) this._unloaded.erase(b);
            else throw "Failed to load resource: " + b;
            this.status = 1 - this._unloaded.length / this.resources.length;
            0 == this._unloaded.length && setTimeout(this.end.bind(this), 250)
        }
    })
});
ig.baked = !0;
ig.module("impact.timer").defines(function() {
    ig.Timer = ig.Class.extend({
        target: 0,
        base: 0,
        last: 0,
        pausedAt: 0,
        init: function(b) {
            this.last = this.base = ig.Timer.time;
            this.target = b || 0
        },
        set: function(b) {
            this.target = b || 0;
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        reset: function() {
            this.base = ig.Timer.time;
            this.pausedAt = 0
        },
        tick: function() {
            var b = ig.Timer.time - this.last;
            this.last = ig.Timer.time;
            return this.pausedAt ? 0 : b
        },
        delta: function() {
            return (this.pausedAt || ig.Timer.time) - this.base - this.target
        },
        pause: function() {
            this.pausedAt || (this.pausedAt =
                ig.Timer.time)
        },
        unpause: function() {
            this.pausedAt && (this.base += ig.Timer.time - this.pausedAt, this.pausedAt = 0)
        }
    });
    ig.Timer._last = 0;
    ig.Timer.time = Number.MIN_VALUE;
    ig.Timer.timeScale = 1;
    ig.Timer.maxStep = 0.05;
    ig.Timer.step = function() {
        var b = Date.now();
        ig.Timer.time += Math.min((b - ig.Timer._last) / 1E3, ig.Timer.maxStep) * ig.Timer.timeScale;
        ig.Timer._last = b
    }
});
ig.baked = !0;
ig.module("impact.system").requires("impact.timer", "impact.image").defines(function() {
    ig.System = ig.Class.extend({
        fps: 30,
        width: 320,
        height: 240,
        realWidth: 320,
        realHeight: 240,
        scale: 1,
        tick: 0,
        animationId: 0,
        newGameClass: null,
        running: !1,
        delegate: null,
        clock: null,
        canvas: null,
        context: null,
        init: function(b, c, d, e, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, g);
            this.context = this.canvas.getContext("2d");
            this.getDrawPos = ig.System.drawMode;
            1 != this.scale && (ig.System.scaleMode = ig.System.SCALE.CRISP);
            ig.System.scaleMode(this.canvas, this.context)
        },
        resize: function(b, c, d) {
            this.width = b;
            this.height = c;
            this.scale = d || this.scale;
            this.realWidth = this.width * this.scale;
            this.realHeight = this.height * this.scale;
            this.canvas.width = this.realWidth;
            this.canvas.height = this.realHeight
        },
        setGame: function(b) {
            this.running ? this.newGameClass = b : this.setGameNow(b)
        },
        setGameNow: function(b) {
            ig.game = new b;
            ig.system.setDelegate(ig.game)
        },
        setDelegate: function(b) {
            if ("function" == typeof b.run) this.delegate = b, this.startRunLoop();
            else throw "System.setDelegate: No run() function in object";
        },
        stopRunLoop: function() {
            ig.clearAnimation(this.animationId);
            this.running = !1
        },
        startRunLoop: function() {
            this.stopRunLoop();
            this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
            this.running = !0
        },
        clear: function(b) {
            this.context.fillStyle = b;
            this.context.fillRect(0, 0, this.realWidth, this.realHeight)
        },
        run: function() {
            ig.Timer.step();
            this.tick = this.clock.tick();
            this.delegate.run();
            ig.input.clearPressed();
            this.newGameClass && (this.setGameNow(this.newGameClass), this.newGameClass = null)
        },
        getDrawPos: null
    });
    ig.System.DRAW = {
        AUTHENTIC: function(b) {
            return Math.round(b) * this.scale
        },
        SMOOTH: function(b) {
            return Math.round(b * this.scale)
        },
        SUBPIXEL: function(b) {
            return b * this.scale
        }
    };
    ig.System.drawMode = ig.System.DRAW.SMOOTH;
    ig.System.SCALE = {
        CRISP: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !1);
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            ig.setVendorAttribute(c, "imageSmoothingEnabled", !0);
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    };
    ig.System.scaleMode = ig.System.SCALE.SMOOTH
});
ig.baked = !0;
ig.module("impact.input").defines(function() {
    ig.KEY = {
        MOUSE1: -1,
        MOUSE2: -3,
        MWHEEL_UP: -4,
        MWHEEL_DOWN: -5,
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        PAUSE: 19,
        CAPS: 20,
        ESC: 27,
        SPACE: 32,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        _0: 48,
        _1: 49,
        _2: 50,
        _3: 51,
        _4: 52,
        _5: 53,
        _6: 54,
        _7: 55,
        _8: 56,
        _9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBSTRACT: 109,
        DECIMAL: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PLUS: 187,
        COMMA: 188,
        MINUS: 189,
        PERIOD: 190
    };
    ig.Input = ig.Class.extend({
        bindings: {},
        actions: {},
        presses: {},
        locks: {},
        delayedKeyup: {},
        isUsingMouse: !1,
        isUsingKeyboard: !1,
        isUsingAccelerometer: !1,
        mouse: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0,
            z: 0
        },
        initMouse: function() {
            if (!this.isUsingMouse) {
                this.isUsingMouse = !0;
                var b = this.mousewheel.bind(this);
                ig.system.canvas.addEventListener("mousewheel", b, !1);
                ig.system.canvas.addEventListener("DOMMouseScroll", b, !1);
                ig.system.canvas.addEventListener("contextmenu", this.contextmenu.bind(this), !1);
                ig.system.canvas.addEventListener("mousedown", this.keydown.bind(this), !1);
                ig.system.canvas.addEventListener("mouseup", this.keyup.bind(this), !1);
                ig.system.canvas.addEventListener("mousemove", this.mousemove.bind(this), !1);
                ig.ua.touchDevice && (ig.system.canvas.addEventListener("touchstart",
                    this.keydown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.mousemove.bind(this), !1), ig.system.canvas.addEventListener("MSPointerDown", this.keydown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.keyup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.mousemove.bind(this), !1), ig.system.canvas.style.msTouchAction = "none")
            }
        },
        initKeyboard: function() {
            this.isUsingKeyboard || (this.isUsingKeyboard = !0, window.addEventListener("keydown", this.keydown.bind(this), !1), window.addEventListener("keyup", this.keyup.bind(this), !1))
        },
        initAccelerometer: function() {
            this.isUsingAccelerometer || window.addEventListener("devicemotion", this.devicemotion.bind(this), !1)
        },
        mousewheel: function(b) {
            var c = this.bindings[0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN];
            c && (this.actions[c] = !0, this.presses[c] = !0, this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault())
        },
        mousemove: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            ig.ua.mobile && (c = ig.system.realWidth);
            var c = ig.system.scale * (c / ig.system.realWidth),
                d = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
            b = b.touches ? b.touches[0] : b;
            this.mouse.x = (b.clientX - d.left) / c;
            this.mouse.y = (b.clientY - d.top) / c
        },
        contextmenu: function(b) {
            this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault())
        },
        keydown: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" ==
                    c))
                if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
        },
        keyup: function(b) {
            var c = b.target.tagName;
            if (!("INPUT" == c || "TEXTAREA" == c))
                if (c = this.bindings["keyup" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1]) this.delayedKeyup[c] = !0, b.stopPropagation(), b.preventDefault()
        },
        devicemotion: function(b) {
            this.accel =
                b.accelerationIncludingGravity
        },
        bind: function(b, c) {
            0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
            this.bindings[b] = c
        },
        bindTouch: function(b, c) {
            var d = ig.$(b),
                e = this;
            d.addEventListener("touchstart", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("touchend", function(b) {
                e.touchEnd(b, c)
            }, !1);
            d.addEventListener("MSPointerDown", function(b) {
                e.touchStart(b, c)
            }, !1);
            d.addEventListener("MSPointerUp", function(b) {
                e.touchEnd(b, c)
            }, !1)
        },
        unbind: function(b) {
            this.delayedKeyup[this.bindings[b]] = !0;
            this.bindings[b] =
                null
        },
        unbindAll: function() {
            this.bindings = {};
            this.actions = {};
            this.presses = {};
            this.locks = {};
            this.delayedKeyup = {}
        },
        state: function(b) {
            return this.actions[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return !!this.delayedKeyup[b]
        },
        clearPressed: function() {
            for (var b in this.delayedKeyup) this.actions[b] = !1, this.locks[b] = !1;
            this.delayedKeyup = {};
            this.presses = {}
        },
        touchStart: function(b, c) {
            this.actions[c] = !0;
            this.presses[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        },
        touchEnd: function(b,
            c) {
            this.delayedKeyup[c] = !0;
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    })
});
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound").defines(function() {
    ig.main = function(b, c, d, e, g, j, x) {
        ig.system = new ig.System(b, d, e, g, j || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        (new(x || ig.Loader)(c, ig.resources)).load()
    }
});
ig.baked = !0;
ig.module("impact.animation").requires("impact.timer", "impact.image").defines(function() {
    ig.AnimationSheet = ig.Class.extend({
        width: 8,
        height: 8,
        image: null,
        init: function(b, c, d) {
            this.width = c;
            this.height = d;
            this.image = new ig.Image(b)
        }
    });
    ig.Animation = ig.Class.extend({
        sheet: null,
        timer: null,
        sequence: [],
        flip: {
            x: !1,
            y: !1
        },
        pivot: {
            x: 0,
            y: 0
        },
        frame: 0,
        tile: 0,
        loopCount: 0,
        alpha: 1,
        angle: 0,
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = {
                x: b.width / 2,
                y: b.height / 2
            };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
            this.tile = this.sequence[0]
        },
        rewind: function() {
            this.timer.set();
            this.frame = this.loopCount = 0;
            this.tile = this.sequence[0];
            return this
        },
        gotoFrame: function(b) {
            this.timer.set(this.frameTime * -b - 1E-4);
            this.update()
        },
        gotoRandomFrame: function() {
            this.gotoFrame(Math.floor(Math.random() * this.sequence.length))
        },
        update: function() {
            var b = Math.floor(this.timer.delta() / this.frameTime);
            this.loopCount = Math.floor(b / this.sequence.length);
            this.frame = this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
            this.tile = this.sequence[this.frame]
        },
        draw: function(b, c) {
            var d = Math.max(this.sheet.width, this.sheet.height);
            b > ig.system.width || (c > ig.system.height || 0 > b + d || 0 > c + d) || (1 != this.alpha && (ig.system.context.globalAlpha = this.alpha), 0 == this.angle ? this.sheet.image.drawTile(b, c, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y) : (ig.system.context.save(), ig.system.context.translate(ig.system.getDrawPos(b + this.pivot.x), ig.system.getDrawPos(c + this.pivot.y)), ig.system.context.rotate(this.angle),
                this.sheet.image.drawTile(-this.pivot.x, -this.pivot.y, this.tile, this.sheet.width, this.sheet.height, this.flip.x, this.flip.y), ig.system.context.restore()), 1 != this.alpha && (ig.system.context.globalAlpha = 1))
        }
    })
});
ig.baked = !0;
ig.module("impact.entity").requires("impact.animation", "impact.impact").defines(function() {
    ig.Entity = ig.Class.extend({
        id: 0,
        settings: {},
        size: {
            x: 16,
            y: 16
        },
        offset: {
            x: 0,
            y: 0
        },
        pos: {
            x: 0,
            y: 0
        },
        last: {
            x: 0,
            y: 0
        },
        vel: {
            x: 0,
            y: 0
        },
        accel: {
            x: 0,
            y: 0
        },
        friction: {
            x: 0,
            y: 0
        },
        maxVel: {
            x: 100,
            y: 100
        },
        zIndex: 0,
        gravityFactor: 1,
        standing: !1,
        bounciness: 0,
        minBounceVelocity: 40,
        anims: {},
        animSheet: null,
        currentAnim: null,
        health: 10,
        type: 0,
        checkAgainst: 0,
        collides: 0,
        _killed: !1,
        slopeStanding: {
            min: (44).toRad(),
            max: (136).toRad()
        },
        init: function(b,
            c, d) {
            this.id = ++ig.Entity._lastId;
            this.pos.x = this.last.x = b;
            this.pos.y = this.last.y = c;
            ig.merge(this, d)
        },
        reset: function(b, c, d) {
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
            this.anims[b] = c;
            this.currentAnim || (this.currentAnim = c);
            return c
        },
        update: function() {
            this.last.x = this.pos.x;
            this.last.y = this.pos.y;
            this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
            this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
            this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
            var b = ig.game.collisionMap.trace(this.pos.x, this.pos.y, this.vel.x * ig.system.tick, this.vel.y *
                ig.system.tick, this.size.x, this.size.y);
            this.handleMovementTrace(b);
            this.currentAnim && this.currentAnim.update()
        },
        getNewVelocity: function(b, c, d, e) {
            return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e)
        },
        handleMovementTrace: function(b) {
            this.standing = !1;
            b.collision.y && (0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity ? this.vel.y *= -this.bounciness : (0 < this.vel.y && (this.standing = !0), this.vel.y = 0));
            b.collision.x && (this.vel.x = 0 < this.bounciness && Math.abs(this.vel.x) >
                this.minBounceVelocity ? this.vel.x * -this.bounciness : 0);
            if (b.collision.slope) {
                var c = b.collision.slope;
                if (0 < this.bounciness) {
                    var d = this.vel.x * c.nx + this.vel.y * c.ny;
                    this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
                    this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness
                } else d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y), this.vel.x = c.x * d, this.vel.y = c.y * d, c = Math.atan2(c.x, c.y), c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0)
            }
            this.pos = b.pos
        },
        draw: function() {
            this.currentAnim && this.currentAnim.draw(this.pos.x -
                this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y)
        },
        kill: function() {
            ig.game.removeEntity(this)
        },
        receiveDamage: function(b) {
            this.health -= b;
            0 >= this.health && this.kill()
        },
        touches: function(b) {
            return !(this.pos.x >= b.pos.x + b.size.x || this.pos.x + this.size.x <= b.pos.x || this.pos.y >= b.pos.y + b.size.y || this.pos.y + this.size.y <= b.pos.y)
        },
        distanceTo: function(b) {
            var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
            b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
            return Math.sqrt(c * c + b * b)
        },
        angleTo: function(b) {
            return Math.atan2(b.pos.y +
                b.size.y / 2 - (this.pos.y + this.size.y / 2), b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2))
        },
        check: function() {},
        collideWith: function() {},
        ready: function() {},
        erase: function() {}
    });
    ig.Entity._lastId = 0;
    ig.Entity.COLLIDES = {
        NEVER: 0,
        LITE: 1,
        PASSIVE: 2,
        ACTIVE: 4,
        FIXED: 8
    };
    ig.Entity.TYPE = {
        NONE: 0,
        A: 1,
        B: 2,
        BOTH: 3
    };
    ig.Entity.checkPair = function(b, c) {
        b.checkAgainst & c.type && b.check(c);
        c.checkAgainst & b.type && c.check(b);
        b.collides && (c.collides && b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE) && ig.Entity.solveCollision(b, c)
    };
    ig.Entity.solveCollision =
        function(b, c) {
            var d = null;
            if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
            else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED) d = c;
            b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x ? (b.last.y < c.last.y ? ig.Entity.seperateOnYAxis(b, c, d) : ig.Entity.seperateOnYAxis(c, b, d), b.collideWith(c, "y"), c.collideWith(b, "y")) : b.last.y + b.size.y > c.last.y && b.last.y < c.last.y + c.size.y && (b.last.x < c.last.x ? ig.Entity.seperateOnXAxis(b, c, d) : ig.Entity.seperateOnXAxis(c,
                b, d), b.collideWith(c, "x"), c.collideWith(b, "x"))
        };
    ig.Entity.seperateOnXAxis = function(b, c, d) {
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness &&
            b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
    }
});
ig.baked = !0;
ig.module("impact.map").defines(function() {
    ig.Map = ig.Class.extend({
        tilesize: 8,
        width: 1,
        height: 1,
        data: [
            []
        ],
        name: null,
        init: function(b, c) {
            this.tilesize = b;
            this.data = c;
            this.height = c.length;
            this.width = c[0].length;
            this.pxWidth = this.width * this.tilesize;
            this.pxHeight = this.height * this.tilesize
        },
        getTile: function(b, c) {
            var d = Math.floor(b / this.tilesize),
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
        },
        setTile: function(b, c, d) {
            b = Math.floor(b / this.tilesize);
            c = Math.floor(c /
                this.tilesize);
            0 <= b && b < this.width && (0 <= c && c < this.height) && (this.data[c][b] = d)
        }
    })
});
ig.baked = !0;
ig.module("impact.collision-map").requires("impact.map").defines(function() {
    ig.CollisionMap = ig.Map.extend({
        lastSlope: 1,
        tiledef: null,
        init: function(b, c, g) {
            this.parent(b, c);
            this.tiledef = g || ig.CollisionMap.defaultTileDef;
            for (var j in this.tiledef) j | 0 > this.lastSlope && (this.lastSlope = j | 0)
        },
        trace: function(b, c, g, j, x, l) {
            var u = {
                    collision: {
                        x: !1,
                        y: !1,
                        slope: !1
                    },
                    pos: {
                        x: b,
                        y: c
                    },
                    tile: {
                        x: 0,
                        y: 0
                    }
                },
                z = Math.ceil(Math.max(Math.abs(g), Math.abs(j)) / this.tilesize);
            if (1 < z)
                for (var r = g / z, B = j / z, C = 0; C < z && (r || B) && !(this._traceStep(u,
                        b, c, r, B, x, l, g, j, C), b = u.pos.x, c = u.pos.y, u.collision.x && (g = r = 0), u.collision.y && (j = B = 0), u.collision.slope); C++);
            else this._traceStep(u, b, c, g, j, x, l, g, j, 0);
            return u
        },
        _traceStep: function(b, c, g, j, x, l, u, z, r, B) {
            b.pos.x += j;
            b.pos.y += x;
            var C = 0;
            if (j) {
                var E = 0 < j ? l : 0,
                    p = 0 > j ? this.tilesize : 0,
                    C = Math.max(Math.floor(g / this.tilesize), 0),
                    s = Math.min(Math.ceil((g + u) / this.tilesize), this.height);
                j = Math.floor((b.pos.x + E) / this.tilesize);
                var y = Math.floor((c + E) / this.tilesize);
                if (0 < B || j == y || 0 > y || y >= this.width) y = -1;
                if (0 <= j && j < this.width)
                    for (var K =
                            C; K < s && !(-1 != y && (C = this.data[K][y], 1 < C && C <= this.lastSlope && this._checkTileDef(b, C, c, g, z, r, l, u, y, K))); K++)
                        if (C = this.data[K][j], 1 == C || C > this.lastSlope || 1 < C && this._checkTileDef(b, C, c, g, z, r, l, u, j, K)) {
                            if (1 < C && C <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = C;
                            c = b.pos.x = j * this.tilesize - E + p;
                            z = 0;
                            break
                        }
            }
            if (x) {
                E = 0 < x ? u : 0;
                x = 0 > x ? this.tilesize : 0;
                C = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                p = Math.min(Math.ceil((b.pos.x + l) / this.tilesize), this.width);
                K = Math.floor((b.pos.y + E) / this.tilesize);
                s = Math.floor((g + E) / this.tilesize);
                if (0 < B || K == s || 0 > s || s >= this.height) s = -1;
                if (0 <= K && K < this.height)
                    for (j = C; j < p && !(-1 != s && (C = this.data[s][j], 1 < C && C <= this.lastSlope && this._checkTileDef(b, C, c, g, z, r, l, u, j, s))); j++)
                        if (C = this.data[K][j], 1 == C || C > this.lastSlope || 1 < C && this._checkTileDef(b, C, c, g, z, r, l, u, j, K)) {
                            if (1 < C && C <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = C;
                            b.pos.y = K * this.tilesize - E + x;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, j, x, l, u, z, r, B) {
            var C = this.tiledef[c];
            if (!C) return !1;
            c = (C[2] -
                C[0]) * this.tilesize;
            var E = (C[3] - C[1]) * this.tilesize,
                p = C[4];
            u = g + x + (0 > E ? u : 0) - (r + C[0]) * this.tilesize;
            z = j + l + (0 < c ? z : 0) - (B + C[1]) * this.tilesize;
            if (0 < c * z - E * u) {
                if (0 > x * -E + l * c) return p;
                r = Math.sqrt(c * c + E * E);
                B = E / r;
                r = -c / r;
                var s = u * B + z * r,
                    C = B * s,
                    s = r * s;
                if (C * C + s * s >= x * x + l * l) return p || 0.5 > c * (z - l) - E * (u - x);
                b.pos.x = g + x - C;
                b.pos.y = j + l - s;
                b.collision.slope = {
                    x: c,
                    y: E,
                    nx: B,
                    ny: r
                };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = {
        5: [0, 1, 1, c, !0],
        6: [0, c, 1, b, !0],
        7: [0, b, 1, 0, !0],
        3: [0, 1, 1, 0.5, !0],
        4: [0, 0.5, 1, 0, !0],
        2: [0,
            1, 1, 0, !0
        ],
        10: [0.5, 1, 1, 0, !0],
        21: [0, 1, 0.5, 0, !0],
        32: [c, 1, 1, 0, !0],
        43: [b, 1, c, 0, !0],
        54: [0, 1, b, 0, !0],
        27: [0, 0, 1, b, !0],
        28: [0, b, 1, c, !0],
        29: [0, c, 1, 1, !0],
        25: [0, 0, 1, 0.5, !0],
        26: [0, 0.5, 1, 1, !0],
        24: [0, 0, 1, 1, !0],
        11: [0, 0, 0.5, 1, !0],
        22: [0.5, 0, 1, 1, !0],
        33: [0, 0, b, 1, !0],
        44: [b, 0, c, 1, !0],
        55: [c, 0, 1, 1, !0],
        16: [1, b, 0, 0, !0],
        17: [1, c, 0, b, !0],
        18: [1, 1, 0, c, !0],
        14: [1, 0.5, 0, 0, !0],
        15: [1, 1, 0, 0.5, !0],
        13: [1, 1, 0, 0, !0],
        8: [0.5, 1, 0, 0, !0],
        19: [1, 1, 0.5, 0, !0],
        30: [b, 1, 0, 0, !0],
        41: [c, 1, b, 0, !0],
        52: [1, 1, c, 0, !0],
        38: [1, c, 0, 1, !0],
        39: [1, b, 0, c, !0],
        40: [1, 0,
            0, b, !0
        ],
        36: [1, 0.5, 0, 1, !0],
        37: [1, 0, 0, 0.5, !0],
        35: [1, 0, 0, 1, !0],
        9: [1, 0, 0.5, 1, !0],
        20: [0.5, 0, 0, 1, !0],
        31: [1, 0, c, 1, !0],
        42: [c, 0, b, 1, !0],
        53: [b, 0, 0, 1, !0],
        12: [0, 0, 1, 0, !1],
        23: [1, 1, 0, 1, !1],
        34: [1, 0, 1, 1, !1],
        45: [0, 1, 0, 0, !1]
    };
    ig.CollisionMap.staticNoCollision = {
        trace: function(b, c, g, j) {
            return {
                collision: {
                    x: !1,
                    y: !1,
                    slope: !1
                },
                pos: {
                    x: b + g,
                    y: c + j
                },
                tile: {
                    x: 0,
                    y: 0
                }
            }
        }
    }
});
ig.baked = !0;
ig.module("impact.background-map").requires("impact.map", "impact.image").defines(function() {
    ig.BackgroundMap = ig.Map.extend({
        tiles: null,
        scroll: {
            x: 0,
            y: 0
        },
        distance: 1,
        repeat: !1,
        tilesetName: "",
        foreground: !1,
        enabled: !0,
        preRender: !1,
        preRenderedChunks: null,
        chunkSize: 512,
        debugChunks: !1,
        anims: {},
        init: function(b, c, d) {
            this.parent(b, c);
            this.setTileset(d)
        },
        setTileset: function(b) {
            this.tilesetName = b instanceof ig.Image ? b.path : b;
            this.tiles = new ig.Image(this.tilesetName);
            this.preRenderedChunks = null
        },
        setScreenPos: function(b,
            c) {
            this.scroll.x = b / this.distance;
            this.scroll.y = c / this.distance
        },
        preRenderMapToChunks: function() {
            var b = this.width * this.tilesize * ig.system.scale,
                c = this.height * this.tilesize * ig.system.scale;
            this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
            var d = Math.ceil(b / this.chunkSize),
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < e; g++) {
                this.preRenderedChunks[g] = [];
                for (var j = 0; j < d; j++) this.preRenderedChunks[g][j] = this.preRenderChunk(j, g, j == d - 1 ? b - j * this.chunkSize : this.chunkSize, g == e - 1 ?
                    c - g * this.chunkSize : this.chunkSize)
            }
        },
        preRenderChunk: function(b, c, d, e) {
            var g = d / this.tilesize / ig.system.scale + 1,
                j = e / this.tilesize / ig.system.scale + 1,
                x = b * this.chunkSize / ig.system.scale % this.tilesize,
                l = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var u = ig.$new("canvas");
            u.width = d;
            u.height = e;
            u.retinaResolutionEnabled = !1;
            e = u.getContext("2d");
            ig.System.scaleMode(u, e);
            d = ig.system.context;
            ig.system.context = e;
            for (e = 0; e < g; e++)
                for (var z = 0; z < j; z++)
                    if (e + b < this.width && z + c < this.height) {
                        var r = this.data[z + c][e + b];
                        r && this.tiles.drawTile(e * this.tilesize - x, z * this.tilesize - l, r - 1, this.tilesize)
                    }
            ig.system.context = d;
            return u
        },
        draw: function() {
            this.tiles.loaded && this.enabled && (this.preRender ? this.drawPreRendered() : this.drawTiled())
        },
        drawPreRendered: function() {
            this.preRenderedChunks || this.preRenderMapToChunks();
            var b = ig.system.getDrawPos(this.scroll.x),
                c = ig.system.getDrawPos(this.scroll.y);
            if (this.repeat) var d =
                this.width * this.tilesize * ig.system.scale,
                b = (b % d + d) % d,
                d = this.height * this.tilesize * ig.system.scale,
                c = (c % d + d) % d;
            var d = Math.max(Math.floor(b / this.chunkSize), 0),
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                j = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                x = this.preRenderedChunks[0].length,
                l = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, x), j = Math.min(j, l));
            for (var u = 0; e < j; e++) {
                for (var z = 0, r = d; r < g; r++) {
                    var B = this.preRenderedChunks[e % l][r % x],
                        C = -b + r * this.chunkSize - z,
                        E = -c + e * this.chunkSize - u;
                    ig.system.context.drawImage(B, C, E);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(C, E, this.chunkSize, this.chunkSize));
                    this.repeat && (B.width < this.chunkSize && C + B.width < ig.system.realWidth) && (z += this.chunkSize - B.width, g++)
                }
                this.repeat && (B.height < this.chunkSize && E + B.height < ig.system.realHeight) && (u += this.chunkSize - B.height, j++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(),
                    e = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, j = this.scroll.y % this.tilesize, x = -g - this.tilesize, g = ig.system.width + this.tilesize - g, l = ig.system.height + this.tilesize - j, u = -1, j = -j - this.tilesize; j < l; u++, j += this.tilesize) {
                var z = u + e;
                if (z >= this.height || 0 > z) {
                    if (!this.repeat) continue;
                    z = (z % this.height + this.height) % this.height
                }
                for (var r = -1, B = x; B < g; r++, B += this.tilesize) {
                    b = r + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[z][b])(c = this.anims[b -
                        1]) ? c.draw(B, j) : this.tiles.drawTile(B, j, b - 1, this.tilesize)
                }
            }
        }
    })
});
ig.baked = !0;
ig.module("impact.game").requires("impact.impact", "impact.entity", "impact.collision-map", "impact.background-map").defines(function() {
    ig.Game = ig.Class.extend({
        clearColor: "#000000",
        gravity: 0,
        screen: {
            x: 0,
            y: 0
        },
        _rscreen: {
            x: 0,
            y: 0
        },
        entities: [],
        namedEntities: {},
        collisionMap: ig.CollisionMap.staticNoCollision,
        backgroundMaps: [],
        backgroundAnims: {},
        autoSort: !1,
        sortBy: null,
        cellSize: 64,
        _deferredKill: [],
        _levelToLoad: null,
        _doSortEntities: !1,
        staticInstantiate: function() {
            this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
            ig.game = this;
            return null
        },
        loadLevel: function(b) {
            this.screen = {
                x: 0,
                y: 0
            };
            this.entities = [];
            this.namedEntities = {};
            for (var c = 0; c < b.entities.length; c++) {
                var d = b.entities[c];
                this.spawnEntity(d.type, d.x, d.y, d.settings)
            }
            this.sortEntities();
            this.collisionMap = ig.CollisionMap.staticNoCollision;
            this.backgroundMaps = [];
            for (c = 0; c < b.layer.length; c++)
                if (d = b.layer[c], "collision" == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
                else {
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
                }
            for (c = 0; c < this.entities.length; c++) this.entities[c].ready()
        },
        loadLevelDeferred: function(b) {
            this._levelToLoad = b
        },
        getMapByName: function(b) {
            if ("collision" == b) return this.collisionMap;
            for (var c = 0; c < this.backgroundMaps.length; c++)
                if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
            return null
        },
        getEntityByName: function(b) {
            return this.namedEntities[b]
        },
        getEntitiesByType: function(b) {
            b =
                "string" === typeof b ? ig.global[b] : b;
            for (var c = [], d = 0; d < this.entities.length; d++) {
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g) throw "Can't spawn entity of type " + b;
            b = new g(c, d, e || {});
            this.entities.push(b);
            b.name && (this.namedEntities[b.name] = b);
            return b
        },
        sortEntities: function() {
            this.entities.sort(this.sortBy)
        },
        sortEntitiesDeferred: function() {
            this._doSortEntities = !0
        },
        removeEntity: function(b) {
            b.name &&
                delete this.namedEntities[b.name];
            b._killed = !0;
            b.type = ig.Entity.TYPE.NONE;
            b.checkAgainst = ig.Entity.TYPE.NONE;
            b.collides = ig.Entity.COLLIDES.NEVER;
            this._deferredKill.push(b)
        },
        run: function() {
            this.update();
            this.draw()
        },
        update: function() {
            this._levelToLoad && (this.loadLevel(this._levelToLoad), this._levelToLoad = null);
            this.updateEntities();
            this.checkEntities();
            for (var b = 0; b < this._deferredKill.length; b++) this._deferredKill[b].erase(), this.entities.erase(this._deferredKill[b]);
            this._deferredKill = [];
            if (this._doSortEntities ||
                this.autoSort) this.sortEntities(), this._doSortEntities = !1;
            for (var c in this.backgroundAnims) {
                var b = this.backgroundAnims[c],
                    d;
                for (d in b) b[d].update()
            }
        },
        updateEntities: function() {
            for (var b = 0; b < this.entities.length; b++) {
                var c = this.entities[b];
                c._killed || c.update()
            }
        },
        draw: function() {
            this.clearColor && ig.system.clear(this.clearColor);
            this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
            this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
            var b;
            for (b = 0; b < this.backgroundMaps.length; b++) {
                var c =
                    this.backgroundMaps[b];
                if (c.foreground) break;
                c.setScreenPos(this.screen.x, this.screen.y);
                c.draw()
            }
            this.drawEntities();
            for (b; b < this.backgroundMaps.length; b++) c = this.backgroundMaps[b], c.setScreenPos(this.screen.x, this.screen.y), c.draw()
        },
        drawEntities: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].draw()
        },
        checkEntities: function() {
            for (var b = {}, c = 0; c < this.entities.length; c++) {
                var d = this.entities[c];
                if (!(d.type == ig.Entity.TYPE.NONE && d.checkAgainst == ig.Entity.TYPE.NONE && d.collides == ig.Entity.COLLIDES.NEVER))
                    for (var e = {}, g = Math.floor(d.pos.y / this.cellSize), j = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, x = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, l = Math.floor(d.pos.x / this.cellSize); l < j; l++)
                        for (var u = g; u < x; u++)
                            if (b[l])
                                if (b[l][u]) {
                                    for (var z = b[l][u], r = 0; r < z.length; r++) d.touches(z[r]) && !e[z[r].id] && (e[z[r].id] = !0, ig.Entity.checkPair(d, z[r]));
                                    z.push(d)
                                } else b[l][u] = [d];
                else b[l] = {}, b[l][u] = [d]
            }
        }
    });
    ig.Game.SORT = {
        Z_INDEX: function(b, c) {
            return b.zIndex - c.zIndex
        },
        POS_X: function(b, c) {
            return b.pos.x + b.size.x - (c.pos.x +
                c.size.x)
        },
        POS_Y: function(b, c) {
            return b.pos.y + b.size.y - (c.pos.y + c.size.y)
        }
    }
});
ig.baked = !0;
ig.module("impact.debug.menu").requires("dom.ready", "impact.system").defines(function() {
    ig.System.inject({
        run: function() {
            ig.debug.beforeRun();
            this.parent();
            ig.debug.afterRun()
        },
        setGameNow: function(b) {
            this.parent(b);
            ig.debug.ready()
        }
    });
    ig.Debug = ig.Class.extend({
        options: {},
        panels: {},
        numbers: {},
        container: null,
        panelMenu: null,
        activePanel: null,
        debugTime: 0,
        debugTickAvg: 0.016,
        debugRealTime: Date.now(),
        init: function() {
            var b = ig.$new("link");
            b.rel = "stylesheet";
            b.type = "text/css";
            b.href = ig.prefix + "lib/impact/debug/debug.css";
            ig.$("body")[0].appendChild(b);
            this.container = ig.$new("div");
            this.container.className = "ig_debug";
            ig.$("body")[0].appendChild(this.container);
            this.panelMenu = ig.$new("div");
            this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
            this.panelMenu.className = "ig_debug_panel_menu";
            this.container.appendChild(this.panelMenu);
            this.numberContainer = ig.$new("div");
            this.numberContainer.className = "ig_debug_stats";
            this.panelMenu.appendChild(this.numberContainer);
            window.console && (window.console.log &&
                window.console.assert) && (ig.log = console.log.bind ? console.log.bind(console) : console.log, ig.assert = console.assert.bind ? console.assert.bind(console) : console.assert);
            ig.show = this.showNumber.bind(this)
        },
        addNumber: function(b) {
            var c = ig.$new("span");
            this.numberContainer.appendChild(c);
            this.numberContainer.appendChild(document.createTextNode(b));
            this.numbers[b] = c
        },
        showNumber: function(b, c, d) {
            this.numbers[b] || this.addNumber(b, d);
            this.numbers[b].textContent = c
        },
        addPanel: function(b) {
            var c = new b.type(b.name, b.label);
            if (b.options)
                for (var d = 0; d < b.options.length; d++) {
                    var e = b.options[d];
                    c.addOption(new ig.DebugOption(e.name, e.object, e.property))
                }
            this.panels[c.name] = c;
            c.container.style.display = "none";
            this.container.appendChild(c.container);
            b = ig.$new("div");
            b.className = "ig_debug_menu_item";
            b.textContent = c.label;
            b.addEventListener("click", function() {
                this.togglePanel(c)
            }.bind(this), !1);
            c.menuItem = b;
            e = !1;
            for (d = 1; d < this.panelMenu.childNodes.length; d++) {
                var g = this.panelMenu.childNodes[d];
                if (g.textContent > c.label) {
                    this.panelMenu.insertBefore(b,
                        g);
                    e = !0;
                    break
                }
            }
            e || this.panelMenu.appendChild(b)
        },
        showPanel: function(b) {
            this.togglePanel(this.panels[b])
        },
        togglePanel: function(b) {
            b != this.activePanel && this.activePanel && (this.activePanel.toggle(!1), this.activePanel.menuItem.className = "ig_debug_menu_item", this.activePanel = null);
            var c = "block" != b.container.style.display;
            b.toggle(c);
            b.menuItem.className = "ig_debug_menu_item" + (c ? " active" : "");
            c && (this.activePanel = b)
        },
        ready: function() {
            for (var b in this.panels) this.panels[b].ready()
        },
        beforeRun: function() {
            var b =
                Date.now();
            this.debugTickAvg = 0.8 * this.debugTickAvg + 0.2 * (b - this.debugRealTime);
            this.debugRealTime = b;
            this.activePanel && this.activePanel.beforeRun()
        },
        afterRun: function() {
            var b = Date.now() - this.debugRealTime;
            this.debugTime = 0.8 * this.debugTime + 0.2 * b;
            this.activePanel && this.activePanel.afterRun();
            this.showNumber("ms", this.debugTime.toFixed(2));
            this.showNumber("fps", Math.round(1E3 / this.debugTickAvg));
            this.showNumber("draws", ig.Image.drawCount);
            ig.game && ig.game.entities && this.showNumber("entities", ig.game.entities.length);
            ig.Image.drawCount = 0
        }
    });
    ig.DebugPanel = ig.Class.extend({
        active: !1,
        container: null,
        options: [],
        panels: [],
        label: "",
        name: "",
        init: function(b, c) {
            this.name = b;
            this.label = c;
            this.container = ig.$new("div");
            this.container.className = "ig_debug_panel " + this.name
        },
        toggle: function(b) {
            this.active = b;
            this.container.style.display = b ? "block" : "none"
        },
        addPanel: function(b) {
            this.panels.push(b);
            this.container.appendChild(b.container)
        },
        addOption: function(b) {
            this.options.push(b);
            this.container.appendChild(b.container)
        },
        ready: function() {},
        beforeRun: function() {},
        afterRun: function() {}
    });
    ig.DebugOption = ig.Class.extend({
        name: "",
        labelName: "",
        className: "ig_debug_option",
        label: null,
        mark: null,
        container: null,
        active: !1,
        colors: {
            enabled: "#fff",
            disabled: "#444"
        },
        init: function(b, c, d) {
            this.name = b;
            this.object = c;
            this.property = d;
            this.active = this.object[this.property];
            this.container = ig.$new("div");
            this.container.className = "ig_debug_option";
            this.label = ig.$new("span");
            this.label.className = "ig_debug_label";
            this.label.textContent = this.name;
            this.mark = ig.$new("span");
            this.mark.className = "ig_debug_label_mark";
            this.container.appendChild(this.mark);
            this.container.appendChild(this.label);
            this.container.addEventListener("click", this.click.bind(this), !1);
            this.setLabel()
        },
        setLabel: function() {
            this.mark.style.backgroundColor = this.active ? this.colors.enabled : this.colors.disabled
        },
        click: function(b) {
            this.active = !this.active;
            this.object[this.property] = this.active;
            this.setLabel();
            b.stopPropagation();
            b.preventDefault();
            return !1
        }
    });
    ig.debug = new ig.Debug
});
ig.baked = !0;
ig.module("impact.debug.entities-panel").requires("impact.debug.menu", "impact.entity").defines(function() {
    ig.Entity.inject({
        colors: {
            names: "#fff",
            velocities: "#0f0",
            boxes: "#f00"
        },
        draw: function() {
            this.parent();
            ig.Entity._debugShowBoxes && (ig.system.context.strokeStyle = this.colors.boxes, ig.system.context.lineWidth = 1, ig.system.context.strokeRect(ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - 0.5, ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - 0.5, this.size.x * ig.system.scale, this.size.y *
                ig.system.scale));
            if (ig.Entity._debugShowVelocities) {
                var b = this.pos.x + this.size.x / 2,
                    c = this.pos.y + this.size.y / 2;
                this._debugDrawLine(this.colors.velocities, b, c, b + this.vel.x, c + this.vel.y)
            }
            if (ig.Entity._debugShowNames && (this.name && (ig.system.context.fillStyle = this.colors.names, ig.system.context.fillText(this.name, ig.system.getDrawPos(this.pos.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y - ig.game.screen.y))), "object" == typeof this.target))
                for (var d in this.target)(b = ig.game.getEntityByName(this.target[d])) &&
                    this._debugDrawLine(this.colors.names, this.pos.x + this.size.x / 2, this.pos.y + this.size.y / 2, b.pos.x + b.size.x / 2, b.pos.y + b.size.y / 2)
        },
        _debugDrawLine: function(b, c, d, e, g) {
            ig.system.context.strokeStyle = b;
            ig.system.context.lineWidth = 1;
            ig.system.context.beginPath();
            ig.system.context.moveTo(ig.system.getDrawPos(c - ig.game.screen.x), ig.system.getDrawPos(d - ig.game.screen.y));
            ig.system.context.lineTo(ig.system.getDrawPos(e - ig.game.screen.x), ig.system.getDrawPos(g - ig.game.screen.y));
            ig.system.context.stroke();
            ig.system.context.closePath()
        }
    });
    ig.Entity._debugEnableChecks = !0;
    ig.Entity._debugShowBoxes = !1;
    ig.Entity._debugShowVelocities = !1;
    ig.Entity._debugShowNames = !1;
    ig.Entity.oldCheckPair = ig.Entity.checkPair;
    ig.Entity.checkPair = function(b, c) {
        ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(b, c)
    };
    ig.debug.addPanel({
        type: ig.DebugPanel,
        name: "entities",
        label: "Entities",
        options: [{
            name: "Checks & Collisions",
            object: ig.Entity,
            property: "_debugEnableChecks"
        }, {
            name: "Show Collision Boxes",
            object: ig.Entity,
            property: "_debugShowBoxes"
        }, {
            name: "Show Velocities",
            object: ig.Entity,
            property: "_debugShowVelocities"
        }, {
            name: "Show Names & Targets",
            object: ig.Entity,
            property: "_debugShowNames"
        }]
    })
});
ig.baked = !0;
ig.module("impact.debug.maps-panel").requires("impact.debug.menu", "impact.game", "impact.background-map").defines(function() {
    ig.Game.inject({
        loadLevel: function(b) {
            this.parent(b);
            ig.debug.panels.maps.load(this)
        }
    });
    ig.DebugMapsPanel = ig.DebugPanel.extend({
        maps: [],
        mapScreens: [],
        init: function(b, c) {
            this.parent(b, c);
            this.load()
        },
        load: function(b) {
            this.options = [];
            this.panels = [];
            if (!b || !b.backgroundMaps.length) this.container.innerHTML = "<em>No Maps Loaded</em>";
            else {
                this.maps = b.backgroundMaps;
                this.mapScreens = [];
                this.container.innerHTML = "";
                for (b = 0; b < this.maps.length; b++) {
                    var c = this.maps[b],
                        d = new ig.DebugPanel(b, "Layer " + b),
                        e = new ig.$new("strong");
                    e.textContent = b + ": " + c.tiles.path;
                    d.container.appendChild(e);
                    d.addOption(new ig.DebugOption("Enabled", c, "enabled"));
                    d.addOption(new ig.DebugOption("Pre Rendered", c, "preRender"));
                    d.addOption(new ig.DebugOption("Show Chunks", c, "debugChunks"));
                    this.generateMiniMap(d, c, b);
                    this.addPanel(d)
                }
            }
        },
        generateMiniMap: function(b, c, d) {
            var e = ig.system.scale,
                g = ig.$new("canvas"),
                j = g.getContext("2d"),
                x = c.tiles.width * e,
                l = c.tiles.height * e,
                u = x / c.tilesize,
                z = l / c.tilesize;
            g.width = u;
            g.height = z;
            j.drawImage(c.tiles.data, 0, 0, x, l, 0, 0, u, z);
            j = ig.$new("canvas");
            j.width = c.width * e;
            j.height = c.height * e;
            z = j.getContext("2d");
            ig.game.clearColor && (z.fillStyle = ig.game.clearColor, z.fillRect(0, 0, x, l));
            for (l = x = 0; l < c.width; l++)
                for (var r = 0; r < c.height; r++)(x = c.data[r][l]) && z.drawImage(g, Math.floor((x - 1) * e % u), Math.floor((x - 1) * e / u) * e, e, e, l * e, r * e, e, e);
            g = ig.$new("div");
            g.className = "ig_debug_map_container";
            g.style.width = c.width * e + "px";
            g.style.height = c.height * e + "px";
            u = ig.$new("div");
            u.className = "ig_debug_map_screen";
            u.style.width = ig.system.width / c.tilesize * e - 2 + "px";
            u.style.height = ig.system.height / c.tilesize * e - 2 + "px";
            this.mapScreens[d] = u;
            g.appendChild(j);
            g.appendChild(u);
            b.container.appendChild(g)
        },
        afterRun: function() {
            for (var b = ig.system.scale, c = 0; c < this.maps.length; c++) {
                var d = this.maps[c],
                    e = this.mapScreens[c];
                if (d && e) {
                    var g = d.scroll.x / d.tilesize,
                        j = d.scroll.y / d.tilesize;
                    d.repeat && (g %= d.width, j %= d.height);
                    e.style.left = g * b + "px";
                    e.style.top = j * b + "px"
                }
            }
        }
    });
    ig.debug.addPanel({
        type: ig.DebugMapsPanel,
        name: "maps",
        label: "Background Maps"
    })
});
ig.baked = !0;
ig.module("impact.debug.graph-panel").requires("impact.debug.menu", "impact.system", "impact.game", "impact.image").defines(function() {
    ig.Game.inject({
        draw: function() {
            ig.graph.beginClock("draw");
            this.parent();
            ig.graph.endClock("draw")
        },
        update: function() {
            ig.graph.beginClock("update");
            this.parent();
            ig.graph.endClock("update")
        },
        checkEntities: function() {
            ig.graph.beginClock("checks");
            this.parent();
            ig.graph.endClock("checks")
        }
    });
    ig.DebugGraphPanel = ig.DebugPanel.extend({
        clocks: {},
        marks: [],
        textY: 0,
        height: 128,
        ms: 64,
        timeBeforeRun: 0,
        init: function(b, c) {
            this.parent(b, c);
            this.mark16ms = (this.height - 16 * (this.height / this.ms)).round();
            this.mark33ms = (this.height - 33 * (this.height / this.ms)).round();
            this.msHeight = this.height / this.ms;
            this.graph = ig.$new("canvas");
            this.graph.width = window.innerWidth;
            this.graph.height = this.height;
            this.container.appendChild(this.graph);
            this.ctx = this.graph.getContext("2d");
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1);
            this.ctx.fillRect(0, this.mark33ms, this.graph.width,
                1);
            this.addGraphMark("16ms", this.mark16ms);
            this.addGraphMark("33ms", this.mark33ms);
            this.addClock("draw", "Draw", "#13baff");
            this.addClock("update", "Entity Update", "#bb0fff");
            this.addClock("checks", "Entity Checks & Collisions", "#a2e908");
            this.addClock("lag", "System Lag", "#f26900");
            ig.mark = this.mark.bind(this);
            ig.graph = this
        },
        addGraphMark: function(b, c) {
            var d = ig.$new("span");
            d.className = "ig_debug_graph_mark";
            d.textContent = b;
            d.style.top = c.round() + "px";
            this.container.appendChild(d)
        },
        addClock: function(b, c,
            d) {
            var e = ig.$new("span");
            e.className = "ig_debug_legend_color";
            e.style.backgroundColor = d;
            var g = ig.$new("span");
            g.className = "ig_debug_legend_number";
            g.appendChild(document.createTextNode("0"));
            var j = ig.$new("span");
            j.className = "ig_debug_legend";
            j.appendChild(e);
            j.appendChild(document.createTextNode(c + " ("));
            j.appendChild(g);
            j.appendChild(document.createTextNode("ms)"));
            this.container.appendChild(j);
            this.clocks[b] = {
                description: c,
                color: d,
                current: 0,
                start: Date.now(),
                avg: 0,
                html: g
            }
        },
        beginClock: function(b,
            c) {
            this.clocks[b].start = Date.now() + (c || 0)
        },
        endClock: function(b) {
            b = this.clocks[b];
            b.current = Math.round(Date.now() - b.start);
            b.avg = 0.8 * b.avg + 0.2 * b.current
        },
        mark: function(b, c) {
            this.active && this.marks.push({
                msg: b,
                color: c || "#fff"
            })
        },
        beforeRun: function() {
            this.endClock("lag");
            this.timeBeforeRun = Date.now()
        },
        afterRun: function() {
            var b = Date.now() - this.timeBeforeRun;
            this.beginClock("lag", Math.max(1E3 / ig.system.fps - b, 0));
            var b = this.graph.width - 1,
                c = this.height;
            this.ctx.drawImage(this.graph, -1, 0);
            this.ctx.fillStyle =
                "#000";
            this.ctx.fillRect(b, 0, 1, this.height);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark16ms, 1, 1);
            this.ctx.fillStyle = "#444";
            this.ctx.fillRect(b, this.mark33ms, 1, 1);
            for (var d in this.clocks) {
                var e = this.clocks[d];
                e.html.textContent = e.avg.toFixed(2);
                if (e.color && 0 < e.current) {
                    this.ctx.fillStyle = e.color;
                    var g = e.current * this.msHeight,
                        c = c - g;
                    this.ctx.fillRect(b, c, 1, g);
                    e.current = 0
                }
            }
            this.ctx.textAlign = "right";
            this.ctx.textBaseline = "top";
            this.ctx.globalAlpha = 0.5;
            for (d = 0; d < this.marks.length; d++) c = this.marks[d],
                this.ctx.fillStyle = c.color, this.ctx.fillRect(b, 0, 1, this.height), c.msg && (this.ctx.fillText(c.msg, b - 1, this.textY), this.textY = (this.textY + 8) % 32);
            this.ctx.globalAlpha = 1;
            this.marks = []
        }
    });
    ig.debug.addPanel({
        type: ig.DebugGraphPanel,
        name: "graph",
        label: "Performance"
    })
});
ig.baked = !0;
ig.module("impact.debug.debug").requires("impact.debug.entities-panel", "impact.debug.maps-panel", "impact.debug.graph-panel").defines(function() {});
ig.baked = !0;
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
    ig.System && (ig.System.SCALE = {
        CRISP: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled =
                c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    var b = !1;
    try {
        b = window.self !== window.top, !1 === b && (b = 0 < window.frames.length)
    } catch (c) {
        b = !0
    }
    ig.Input.inject({
        keydown: function(c) {
            var e = c.target.tagName;
            if (!("INPUT" == e || "TEXTAREA" == e))
                if (e = "keydown" == c.type ? c.keyCode : 2 == c.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, b && 0 > e && window.focus(), ("touchstart" == c.type || "mousedown" == c.type) && this.mousemove(c), e = this.bindings[e]) this.actions[e] = !0, this.locks[e] || (this.presses[e] = !0, this.locks[e] = !0), c.stopPropagation(), c.preventDefault()
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() {
            this.JQUERYAVAILABLE = this._jqueryAvailable()
        },
        _jqueryAvailable: function() {
            return "undefined" !== typeof jQuery
        },
        addEvent: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.on(c, d);
            else b.addEventListener(c, d, e)
        },
        create: function(b) {
            return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b)
        },
        getElementByClass: function(b) {
            return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b)
        },
        getElementById: function(b) {
            return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b)
        },
        appendChild: function(b, c) {
            this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c)
        },
        appendToBody: function(b) {
            this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b)
        },
        resize: function(b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
            else {
                var e = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = e
            }
        },
        resizeOffsetLeft: function(b,
            c, d, e) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);
            else {
                var g = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = g
            }
        },
        css: function(b, c) {
            if (this.JQUERYAVAILABLE) b.css(c);
            else {
                var d = "",
                    e;
                for (e in c) d += e + ":" + c[e] + ";";
                this.attr(b, "style", d)
            }
        },
        getOffsets: function(b) {
            return this.JQUERYAVAILABLE ? (b = b.offset(), {
                left: b.left,
                top: b.top
            }) : {
                left: b.offsetLeft,
                top: b.offsetTop
            }
        },
        attr: function(b,
            c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        },
        show: function(b) {
            this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible"))
        },
        hide: function(b) {
            this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden"))
        },
        getQueryVariable: function(b) {
            for (var c =
                    window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) {
                var e = c[d].split("=");
                if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1])
            }
        },
        forcedDeviceDetection: function() {
            var b = this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() {
    Vector2 = ig.Class.extend({
        x: null,
        y: null,
        valType: "number",
        init: function(b, c) {
            typeof b === this.valType && typeof c === this.valType && (this.x = b, this.y = c)
        },
        row: function(b) {
            typeof b === this.valType && (this.y = b);
            return this.y
        },
        col: function(b) {
            typeof b === this.valType && (this.x = b);
            return this.x
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !0,
        desktop: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(480, 640)
        },
        mobile: {
            actualSize: new Vector2(window.innerWidth, window.innerHeight),
            actualResolution: new Vector2(480, 640)
        },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
            MobileAdInGamePreroll: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll2: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd2: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width +
                    2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll3: {
                "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20
            },
            MobileAdInGameEnd3: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width + 2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            }
        },
        init: function(b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth,
                window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
                var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = b.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = b.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize =
                new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function() {
            for (var b =
                    0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                ig.ua.mobile ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var d in this.adsToResize) {
                var b = ig.domHandler.getElementById("#" +
                        d),
                    c = ig.domHandler.getElementById("#" + d + "-Box"),
                    e = (window.innerWidth - this.adsToResize[d]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[d]["box-height"]) / 2 + "px";
                b && ig.domHandler.css(b, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                c && ig.domHandler.css(c, {
                    left: e,
                    top: g
                })
            }
            for (d in this.dynamicClickableEntityDivs) {
                c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                b = ig.domHandler.getElementById("#" + d);
                if (ig.ua.mobile) var j = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    x = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    l = Math.floor(j * this.scaleRatioMultiplier.x) + "px",
                    x = Math.floor(x * this.scaleRatioMultiplier.y) + "px",
                    g = Math.floor(g * this.scaleRatioMultiplier.x) + "px",
                    c = Math.floor(e * this.scaleRatioMultiplier.y) + "px";
                else var e = ig.domHandler.getElementById("#canvas"),
                    e = ig.domHandler.getOffsets(e),
                    l = e.left,
                    u = e.top,
                    j = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    x = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    l = Math.floor(l + j * c) + "px",
                    x = Math.floor(u + x * c) + "px",
                    g = Math.floor(g * c) + "px",
                    c = Math.floor(e * c) + "px";
                ig.domHandler.css(b, {
                    "float": "left",
                    position: "absolute",
                    left: l,
                    top: x,
                    width: g,
                    height: c,
                    "z-index": 3
                })
            }
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            if (ig.ua.mobile) {
                var b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d)) : (this.domHandler.show(d), this.domHandler.hide(c))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b),
                    d = ig.domHandler.getElementById("#" + b + "-Box"),
                    e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, {
                    left: e,
                    top: g
                })
            }
        },
        samsungFix: function() {
            ig.ua.android && (!(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && !(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchmove", function(b) {
                b.preventDefault();
                return !1
            }, !1), document.addEventListener("touchend", function(b) {
                b.preventDefault();
                return !1
            }, !1))
        },
        orientationInterval: null,
        orientationTimeout: null,
        orientationHandler: function() {
            this.reorient();
            window.scrollTo(0, 1)
        },
        orientationDelayHandler: function() {
            null == this.orientationInterval && (this.orientationInterval = window.setInterval(this.orientationHandler.bind(this), 100));
            null == this.orientationTimeout && (this.orientationTimeout = window.setTimeout(function() {
                this.clearAllIntervals()
            }.bind(this), 2E3))
        },
        clearAllIntervals: function() {
            window.clearInterval(this.orientationInterval);
            this.orientationInterval = null;
            window.clearTimeout(this.orientationTimeout);
            this.orientationTimeout = null
        },
        eventListenerSetup: function() {
            ig.ua.iOS ? (window.addEventListener("orientationchange", this.orientationDelayHandler.bind(this)), window.addEventListener("resize", this.orientationDelayHandler.bind(this))) : (window.addEventListener("orientationchange", this.orientationHandler.bind(this)), window.addEventListener("resize", this.orientationHandler.bind(this)));
            document.ontouchmove = function(b) {
                window.scrollTo(0,
                    1);
                b.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.handlers.api-handler").defines(function() {
    ig.ApiHandler = ig.Class.extend({
        apiAvailable: {
            MJSPreroll: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
            },
            MJSHeader: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize()
            },
            MJSFooter: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize()
            },
            MJSEnd: function() {
                ig.ua.mobile && ig.domHandler.JQUERYAVAILABLE && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize()
            }
        },
        run: function(b, c) {
            if (this.apiAvailable[b]) this.apiAvailable[b](c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-player").defines(function() {
    SoundPlayer = ig.Class.extend({
        tagName: "SoundPlayer",
        stayMuteFlag: !1,
        debug: !1,
        init: function() {
            this.debug && console.log(this.tagName)
        },
        play: function(b) {
            this.debug && console.log("play sound ", b)
        },
        stop: function() {
            this.debug && console.log("stop sound ")
        },
        volume: function() {
            this.debug && console.log("set volume")
        },
        mute: function(b) {
            this.debug && console.log("mute");
            "undefined" === typeof b ? this.stayMuteFlag = !0 : b && (this.stayMuteFlag = !0)
        },
        unmute: function(b) {
            this.debug &&
                console.log("unmute");
            "undefined" === typeof b ? this.stayMuteFlag = !1 : b && (this.stayMuteFlag = !1)
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-music-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactMusicPlayer = SoundPlayer.extend({
        tagName: "ImpactMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) this.soundList[d] = d, ig.music.add(b[d].path + ".*", d);
            c && c.loop && (ig.music.loop = c.loop)
        },
        play: function(b) {
            this.stayMuteFlag || (this.bgmPlaying = !0, "undefined" === typeof b ? ig.music.play(b) : ig.music.play())
        },
        stop: function() {
            this.bgmPlaying = !1;
            ig.music.pause()
        },
        volume: function(b) {
            console.log("impactmusic:", b);
            ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.music.volume
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && this.stop()
        },
        unmute: function(b) {
            this.parent(b);
            this.play()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.impact-sound-player").requires("plugins.audio.sound-player").defines(function() {
    ImpactSoundPlayer = SoundPlayer.extend({
        tagName: "ImpactSoundPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = new ig.Sound(b[d].path + ".*");
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? (console.log(b + " exists"), b.play()) : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            ig.soundManager.volume =
                0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b
        },
        getVolume: function() {
            return ig.soundManager.volume
        },
        mute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !1
        },
        unmute: function(b) {
            this.parent(b);
            ig.Sound.enabled = !0
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerPlayer = SoundPlayer.extend({
        tagName: "HowlerPlayer",
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        urls: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext]
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            this.stayMuteFlag || ("object" === typeof b ? b.play() : "string" === typeof b && this.soundList[b].play())
        },
        stop: function(b) {
            this.parent(b);
            b.stop()
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 >
                    b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute()
        },
        unmute: function(b) {
            this.parent(b);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.howler-music-player").requires("plugins.audio.sound-player").defines(function() {
    HowlerMusicPlayer = SoundPlayer.extend({
        tagName: "HowlerMusicPlayer",
        bgmPlaying: !1,
        soundList: {},
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                var e = b[d].path,
                    e = new Howl({
                        urls: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                        loop: !0,
                        autoplay: !1,
                        onend: function() {}.bind(this)
                    });
                this.soundList[d] = e
            }
        },
        play: function(b) {
            if (!this.stayMuteFlag && !this.bgmPlaying)
                if ("object" === typeof b) this.bgmPlaying = !0, b.play();
                else if ("string" === typeof b) this.bgmPlaying = !0, this.soundList[b].play();
            else
                for (var c in this.soundList) {
                    this.soundList[c].play();
                    this.bgmPlaying = !0;
                    break
                }
        },
        stop: function(b) {
            this.parent(b);
            if (this.bgmPlaying) {
                for (var c in this.soundList) this.soundList[c].stop();
                this.bgmPlaying = !1
            }
        },
        volume: function(b) {
            for (var c in this.soundList) {
                if (0 > b) {
                    this.soundList[c].volume(0);
                    break
                }
                isNaN(b) ? this.soundList[c].volume(1) : 1 < b ? this.soundList[c].volume(1) : this.soundList[c].volume(b)
            }
        },
        getVolume: function() {
            for (var b in this.soundList) return this.soundList[b].volume()
        },
        mute: function(b) {
            this.parent(b);
            Howler.mute()
        },
        unmute: function(b) {
            this.parent(b);
            Howler.unmute()
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.jukebox-player").requires("plugins.audio.sound-player").defines(function() {
    JukeboxPlayer = SoundPlayer.extend({
        tagName: "JukeboxPlayer",
        bgmPlaying: !1,
        soundList: {},
        jukeboxPlayer: null,
        pausePosition: 0,
        premuteVolume: 0,
        minVolume: 0.001,
        init: function(b, c) {
            this.parent(b, c);
            for (var d in b) {
                this.soundList[d] = d;
                var e = b[d].path;
                this.jukeboxPlayer = new jukebox.Player({
                    resources: [e + "." + ig.Sound.FORMAT.OGG.ext, e + "." + ig.Sound.FORMAT.MP3.ext],
                    autoplay: !1,
                    spritemap: {
                        music: {
                            start: b[d].startMp3,
                            end: b[d].endMp3,
                            loop: !0
                        }
                    }
                })
            }
        },
        play: function() {
            this.stayMuteFlag || (this.bgmPlaying = !0, this.pausePosition ? (console.log("resume"), this.jukeboxPlayer.resume(this.pausePosition)) : (console.log("play"), this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)), this.premuteVolume = this.getVolume())
        },
        stop: function() {
            this.bgmPlaying = !1;
            this.pausePosition = this.jukeboxPlayer.pause()
        },
        volume: function(b) {
            console.log("jukebox:", b);
            0 >= b ? this.jukeboxPlayer.setVolume(this.minVolume) : isNaN(b) ? this.jukeboxPlayer.setVolume(1) :
                1 < b ? this.jukeboxPlayer.setVolume(1) : this.jukeboxPlayer.setVolume(b)
        },
        getVolume: function() {
            return this.jukeboxPlayer.getVolume()
        },
        mute: function(b) {
            this.parent(b);
            this.bgmPlaying && (console.log("jukebox", this.premuteVolume), this.stayMuteFlag || (this.premuteVolume = this.getVolume()), this.jukeboxPlayer.pause(), this.jukeboxPlayer.setVolume(this.minVolume))
        },
        unmute: function(b) {
            this.parent(b);
            this.stayMuteFlag || (console.log("jukebox", this.premuteVolume), this.jukeboxPlayer.setVolume(this.premuteVolume), this.jukeboxPlayer.resume())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.webaudio-music-player").requires("plugins.audio.sound-player").defines(function() {
    WebaudioMusicPlayer = SoundPlayer.extend({
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = {
                compatibility: {},
                gainNode: null,
                buffer: null,
                source_loop: {},
                source_once: {}
            };
            try {
                this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext,
                    this.isSupported = !0
            } catch (c) {
                console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0
            }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try {
                    new Audio
                } catch (d) {
                    this.useHTML5Audio = !1
                } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(b)
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var c = "start",
                d = "stop",
                e = this.webaudio.context.createBufferSource();
            "function" !== typeof e.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof e.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var g in b) {
                this.soundList[g] = g;
                c = b[g].path;
                b = c + "." + ig.Sound.FORMAT.MP3.ext;
                var j = c + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (j = b) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (j = b));
                var x = new XMLHttpRequest;
                x.open("GET", j, !0);
                x.responseType = "arraybuffer";
                x.onload = function() {
                    this.webaudio.context.decodeAudioData(x.response, function(b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() {
                        console.log('Error decoding audio "' + j + '".')
                    })
                }.bind(this);
                x.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio = this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        e = c.createBufferSource();
                    e.buffer = d;
                    e.connect(c.destination);
                    "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }, 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = {
                    mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,
                        ""),
                    ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                    aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""),
                    m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")
                };
                this.is = {
                    ff: Boolean(null !=
                        window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())),
                    ie: Boolean(document.all && !window.opera),
                    opera: Boolean(window.opera),
                    chrome: Boolean(window.chrome),
                    safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera)
                };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff && (this.stopDelay = 85);
                this.is.opera &&
                    (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var e = b[d].path,
                        c = e + "." + ig.Sound.FORMAT.OGG.ext,
                        e = e + "." + ig.Sound.FORMAT.MP3.ext,
                        g = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? g = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (g = e);
                    if (g) {
                        ig.ua.mobile ? ig.ua.iOS && (g = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (g = e));
                        this.audio.addEventListener("error", function() {
                            this.audio.error && 4 === this.audio.error.code &&
                                (this.isSupported = !1)
                        }, !1);
                        this.audio.src = g;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = g;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var j = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", j, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough",
                            j, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b) {
            if (this.isSupported)
                if (this.bgmPlaying = !0, this.webaudio)
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                            this.webaudio.source_loop._startTime =
                                this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration - b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0,
                                b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0;
            else if (this.audio) {
                var c = this.audio;
                if (!this.muteFlag) {
                    this.bgmPlaying = !0;
                    isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                    var d = this._duration - b;
                    this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                    this._onEndTimer = setTimeout(function() {
                            this.audio.currentTime = 0;
                            this.audio.pause();
                            this.pausedTime = 0;
                            if (this.inactiveAudio) {
                                var b = this.audio;
                                this.audio = this.inactiveAudio;
                                this.inactiveAudio = b
                            }
                            this.play()
                        }.bind(this),
                        1E3 * d + this.playDelay);
                    4 === c.readyState || !c.readyState && navigator.isCocoonJS ? (c.readyState = 4, c.currentTime = b, c.muted = this.muteFlag || c.muted, c.volume = this._volume, setTimeout(function() {
                        c.play()
                    }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function() {
                        var b = function() {
                            this.play();
                            c.removeEventListener("canplaythrough", b, !1)
                        }.bind(this);
                        c.addEventListener("canplaythrough", b, !1)
                    }())
                }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) {
                    if (this.webaudio.source_loop._playing &&
                        (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0)
                } else if (this.audio) {
                var b = this.audio;
                this.pausedTime = b.currentTime;
                b.currentTime = 0;
                b.pause();
                clearTimeout(this._onEndTimer);
                this._onEndTimer = null
            }
        },
        volume: function(b) {
            this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume)))
        },
        getVolume: function() {
            return !this.isSupported ? 0 : this._volume
        },
        mute: function(b) {
            this.parent(b);
            !1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0))
        },
        unmute: function(b) {
            this.parent(b);
            !this.stayMuteFlag && !0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play())
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-info").defines(function() {
    SoundInfo = ig.Class.extend({
        FORMATS: {
            OGG: ".ogg",
            MP3: ".mp3"
        },
        sfx: {
            kittyopeningSound: {
                path: cervezaAguilaPathModule + "media/audio/opening/kittyopening"
            },
            staticSound: {
                path: cervezaAguilaPathModule + "media/audio/play/static"
            },
            openingSound: {
                path: cervezaAguilaPathModule + "media/audio/opening/opening"
            },
            coin: {
                path: cervezaAguilaPathModule + "media/audio/coin"
            },
            jump: {
                path: cervezaAguilaPathModule + "media/audio/jump"
            },
            splash: {
                path: cervezaAguilaPathModule + "media/audio/splash"
            },
            button: {
                path: cervezaAguilaPathModule + "media/audio/button"
            },
            whoosh: {
                path: cervezaAguilaPathModule + "media/audio/whoosh"
            },
            purchase: {
                path: cervezaAguilaPathModule + "media/audio/purchase"
            },
            splat: {
                path: cervezaAguilaPathModule + "media/audio/splat"
            }
        },
        bgm: {
            background: {
                path: cervezaAguilaPathModule + "media/audio/bgm2",
                startOgg: 0,
                endOgg: 17,
                startMp3: 0,
                endMp3: 17
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.audio.sound-handler").requires("plugins.audio.impact-music-player", "plugins.audio.impact-sound-player", "plugins.audio.howler-player", "plugins.audio.howler-music-player", "plugins.audio.jukebox-player", "plugins.audio.webaudio-music-player", "plugins.audio.sound-info").defines(function() {
    ig.SoundHandler = ig.Class.extend({
        bgmPlayer: null,
        sfxPlayer: null,
        focusBlurMute: !1,
        soundInfo: new SoundInfo,
        init: function() {
            console.log("Initiating sound handler");
            this.initWindowHandler();
            ig.ua.mobile ?
                (this.initPowerButtonFix(), this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, {
                    loop: !0
                }))) : (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                }), this.bgmPlayer.isSupported || (this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, {
                    loop: !0
                })));
            this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx);
            this.muteBGM()
        },
        checkBGM: function() {
            return this.bgmPlayer.stayMuteFlag
        },
        checkSFX: function() {
            return this.sfxPlayer.stayMuteFlag
        },
        muteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.mute(b)
        },
        muteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.mute(b)
        },
        unmuteSFX: function(b) {
            this.sfxPlayer && this.sfxPlayer.unmute(b)
        },
        unmuteBGM: function(b) {
            this.bgmPlayer && this.bgmPlayer.unmute(b)
        },
        muteAll: function(b) {
            this.muteSFX(b);
            this.muteBGM(b)
        },
        unmuteAll: function(b) {
            this.unmuteSFX(b);
            this.unmuteBGM(b)
        },
        forceMuteAll: function() {
            this.focusBlurMute || this.muteAll(!1);
            this.focusBlurMute = !0
        },
        forceUnMuteAll: function() {
            this.focusBlurMute && (this.unmuteAll(!1),
                this.focusBlurMute = !1)
        },
        initWindowHandler: function() {
            "true" === ig.domHandler.getQueryVariable("webview") ? ($(window).focus(function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }), $(window).blur(function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })) : (window.onfocus = function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, window.onblur = function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            })
        },
        initPowerButtonFix: function() {
            var b = this.getHiddenProp();
            b && (b = b.replace(/[H|h]idden/,
                "") + "visibilitychange", document.addEventListener(b, this.visChange));
            window.addEventListener("pagehide", function() {
                ig.soundHandler && ig.soundHandler.forceMuteAll()
            }, !1);
            window.addEventListener("pageshow", function() {
                ig.soundHandler && ig.soundHandler.forceUnMuteAll()
            }, !1)
        },
        getHiddenProp: function() {
            var b = ["webkit", "moz", "ms", "o"];
            if ("hidden" in document) return "hidden";
            for (var c = 0; c < b.length; c++)
                if (b[c] + "Hidden" in document) return b[c] + "Hidden";
            return null
        },
        isHidden: function() {
            var b = this.getHiddenProp();
            return !b ?
                !1 : document[b]
        },
        visChange: function() {
            ig.soundHandler.isHidden() ? ig.soundHandler && ig.soundHandler.forceMuteAll() : ig.soundHandler && ig.soundHandler.forceUnMuteAll()
        },
        saveVolume: function() {
            this.sfxPlayer && ig.game.io.storageSet("soundVolume", this.sfxPlayer.getVolume());
            this.bgmPlayer && ig.game.io.storageSet("musicVolume", this.bgmPlayer.getVolume())
        },
        forceLoopBGM: function() {
            var b;
            if (!this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
                var c = this.bgmPlayer.jukeboxPlayer;
                if (c) {
                    null != window.mozInnerScreenX &&
                        /firefox/.test(navigator.userAgent.toLowerCase());
                    b = Boolean(window.chrome);
                    !window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
                    var d = 0.1;
                    ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3)));
                    c.settings.spritemap.music && (b = c.settings.spritemap.music.end - d, c.getCurrentTime() >= b && (b = c.settings.spritemap.music.start, ig.ua.android ? this.forcelooped || (c.play(b, !0), this.forcelooped = !0, setTimeout(function() {
                        ig.soundHandler.forcelooped = !1
                    }, d)) : c.setCurrentTime(b)))
                } else "ImpactMusicPlayer" ==
                    this.bgmPlayer.tagName && (null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()), b = Boolean(window.chrome), !window.chrome && /safari/.test(navigator.userAgent.toLowerCase()), d = 0.1, ig.ua.mobile && (d = 0.115, ig.ua.android && (d = 0.45, b && (d = 0.3))), c = 0, "mp3" == ig.soundManager.format.ext && (c = 0.05), ig.music.currentTrack && (b = ig.music.currentTrack.duration - d, ig.music.currentTrack.currentTime >= b && (ig.ua.android ? this.forcelooped || (ig.music.currentTrack.pause(), ig.music.currentTrack.currentTime =
                        c, ig.music.currentTrack.play(), this.forcelooped = !0, setTimeout(function() {
                            ig.soundHandler.forcelooped = !1
                        }, d)) : ig.music.currentTrack.currentTime = c)))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: {
            click: [ig.KEY.MOUSE1]
        },
        init: function() {
            ig.input.initMouse();
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        },
        getPos: function() {
            if (ig.ua.mobile) var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            else b = ig.input.mouse.x, c = ig.input.mouse.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() {
    Keyboard = ig.Class.extend({
        bindings: {
            jump: [ig.KEY.W, ig.KEY.UP_ARROW],
            moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
            moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
            shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE]
        },
        init: function() {
            for (var b in this.bindings) {
                this[b] = b;
                for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b)
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = {
        BUTTON_0: 0,
        PADBUTTON_1: 1,
        BUTTON_2: 2,
        BUTTON_3: 3,
        BUTTON_LEFT_BUMPER: 4,
        BUTTON_RIGHT_BUMPER: 5,
        BUTTON_LEFT_TRIGGER: 6,
        BUTTON_RIGHT_TRIGGER: 7,
        BUTTON_LEFT_JOYSTICK: 10,
        BUTTON_RIGHT_JOYSTICK: 11,
        BUTTON_DPAD_UP: 12,
        BUTTON_DPAD_DOWN: 13,
        BUTTON_DPAD_LEFT: 14,
        BUTTON_DPAD_RIGHT: 15,
        BUTTON_MENU: 16,
        AXIS_LEFT_JOYSTICK_X: 0,
        AXIS_LEFT_JOYSTICK_Y: 1,
        AXIS_RIGHT_JOYSTICK_X: 2,
        AXIS_RIGHT_JOYSTICK_Y: 3
    };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: {
            x: 0,
            y: 0
        },
        rightStick: {
            x: 0,
            y: 0
        },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function() {
            return this.isInit && this.isSupported
        },
        buttonPressed: function(b) {
            return "object" == typeof b ? b.pressed :
                1 == b
        },
        buttonDown: function(b) {
            if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0)
        },
        buttonUp: function(b) {
            if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0
        },
        clearPressed: function() {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(b, c) {
            this.bindings[b] = c
        },
        unbind: function(b) {
            this.releases[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(b) {
            return this.states[b]
        },
        pressed: function(b) {
            return this.presses[b]
        },
        released: function(b) {
            return this.releases[b]
        },
        clamp: function(b, c, d) {
            return b < c ? c : b > d ? d : b
        },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c = !1, d = 0; d < this.list.length; d++) {
                        var e = this.list[d];
                        if (e && e.buttons && this.buttonPressed(e.buttons[b])) {
                            c = !0;
                            break
                        }
                    }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++)
                    if ((e = this.list[d]) && e.axes) {
                        b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            g = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(b) ? 0 : b;
                        this.leftStick.y += isNaN(c) ? 0 : c;
                        this.rightStick.x += isNaN(g) ? 0 : g;
                        this.rightStick.y +=
                            isNaN(e) ? 0 : e
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: {
            padJump: [ig.PADKEY.BUTTON_0]
        },
        init: function() {
            ig.gamepadInput.start();
            for (var b in this.bindings)
                for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() {
            ig.multitouchInput.start()
        },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({
                            x: d.x,
                            y: d.y
                        })
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() {
            this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove",
                this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1)))
        },
        touchmove: function(b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) ||
                    ig.system.realHeight,
                    c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var e = {
                        left: 0,
                        top: 0
                    };
                    ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                    for (var g = 0; g < b.touches.length; g++) {
                        var j = b.touches[g];
                        j && this.touches.push({
                            x: (j.clientX - e.left) / c,
                            y: (j.clientY - e.top) / d
                        })
                    }
                } else this.windowMove(b)
            }
        },
        touchdown: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
            else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                for (var g = 0; g < b.touches.length; g++) {
                    var j = b.touches[g];
                    j && this.touches.push({
                        x: (j.clientX - e.left) / c,
                        y: (j.clientY - e.top) / d
                    })
                }
            }
        },
        touchup: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
            else {
                this.lastEventUp = b;
                var d = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        },
        windowKeyDown: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var e = {
                    left: 0,
                    top: 0
                };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var g = 0; g < b.length; ++g) {
                    for (var j = b[g], x = "undefined" != typeof j.identifier ? j.identifier : "undefined" != typeof j.pointerId ? j.pointerId : 1, l = (j.clientX - e.left) / c, j = (j.clientY - e.top) / d, u = 0; u < this.touches.length; ++u) this.touches[u].identifier == x && this.touches.splice(u, 1);
                    this.touches.push({
                        x: l,
                        y: j,
                        identifier: x
                    })
                }
                for (c = 0; c < this.touches.length; c++);
            }
        },
        windowKeyUp: function(b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight),
                e = {
                    left: 0,
                    top: 0
                };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var g =
                        "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, j = 0; j < this.touches.length; ++j)
                    if (this.touches[j].identifier == g) {
                        var x = (b.clientY - e.top) / d;
                        this.touches[j].x = (b.clientX - e.left) / c;
                        this.touches[j].y = x
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() {
            this._supportsLocalStorage() && (this.storage = new ig.Storage)
        },
        initMouse: function() {
            this.mouse = new Mouse
        },
        initKeyboard: function() {
            this.keyboard = new Keyboard
        },
        initMultitouch: function() {
            this.multitouch = new Multitouch
        },
        initGamepad: function() {
            this.gamepad = new Gamepad
        },
        press: function(b) {
            return ig.input.pressed(b) || this.gamepad.press(b) ? !0 : !1
        },
        held: function(b) {
            return ig.input.state(b) || this.gamepad.state(b) ?
                !0 : !1
        },
        release: function(b) {
            return ig.input.released(b) || this.gamepad.released(b) ? !0 : !1
        },
        getClickPos: function() {
            return this.mouse.getPos()
        },
        getTouchesPos: function() {
            return this.multitouch.getTouchesPos()
        },
        checkOverlap: function(b, c, d, e, g) {
            return b.x > c + e || b.x < c || b.y > d + g || b.y < d ? !1 : !0
        },
        _supportsLocalStorage: function() {
            try {
                return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage
            } catch (b) {
                return this.localStorageSupport
            }
        },
        storageIsSet: function(b) {
            return !this.localStorageSupport ? null : this.storage.isSet(b)
        },
        storageGet: function(b) {
            return !this.localStorageSupport ? null : this.storage.get(b)
        },
        storageSet: function(b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function(b, c, d) {
            if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " + b;
        }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        loadingBgImage: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/loading/loadingbg.png"),
        loadingBarImage: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/loading/loadingbar.png"),
        loadingBarSize: {
            x: 232,
            y: 13
        },
        init: function(b, c) {
            this.parent(b, c);
            ig.apiHandler.run("MJSPreroll")
        },
        end: function() {
            this.parent();
            if (ig.ua.mobile) {
                var b = ig.domHandler.getElementById("#play");
                ig.domHandler.show(b)
            }
            ig.system.setGame(MyGame)
        },
        setupCustomAnimation: function() {
            this.customAnim = new ig.Animation(this.customAnim, 0.05, [0, 1, 2, 3, 4, 5]);
            this.customAnim.currentFrame = 0;
            ig.loadingScreen = this;
            ig.loadingScreen.animationTimer = window.setInterval("ig.loadingScreen.animate()", 100)
        },
        animate: function() {
            this.customAnim.currentFrame < this.customAnim.sequence.length ? this.customAnim.currentFrame++ : this.customAnim.currentFrame = 0;
            this.customAnim.gotoFrame(this.customAnim.currentFrame)
        },
        draw: function() {
            ig.system.context.clearRect(0, 0, 480, 640);
            this._drawStatus +=
                (this.status - this._drawStatus) / 5;
            this.loadingBgImage.draw(0, 0);
            this.loadingBarImage.draw(122, 399, 0, 0, this.loadingBarSize.x * this._drawStatus, this.loadingBarSize.y);
            var b = _STRINGS.Splash.Loading;
            ig.system.context.font = "bold 20px WorldsAtWar BB";
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(b, 240, 380)
        }
    })
});
ig.baked = !0;
ig.module("plugins.tween").requires("impact.entity").defines(function() {
    Array.prototype.indexOf || (Array.prototype.indexOf = function(b) {
        for (var c = 0; c < this.length; ++c)
            if (this[c] === b) return c;
        return -1
    });
    ig.Entity.prototype.tweens = [];
    ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
    ig.Entity.prototype.update = function() {
        this._preTweenUpdate();
        if (0 < this.tweens.length) {
            for (var b = [], c = 0; c < this.tweens.length; c++) this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
            this.tweens =
                b
        }
    };
    ig.Entity.prototype.tween = function(b, c, d) {
        b = new ig.Tween(this, b, c, d);
        this.tweens.push(b);
        return b
    };
    ig.Entity.prototype.pauseTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause()
    };
    ig.Entity.prototype.resumeTweens = function() {
        for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume()
    };
    ig.Entity.prototype.stopTweens = function(b) {
        for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b)
    };
    ig.Tween = function(b, c, d, e) {
        var g = {},
            j = {},
            x = {},
            l = 0,
            u = !1,
            z = !1,
            r = !1;
        this.duration = d;
        this.paused =
            this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) {
            r = b
        };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop,
                    c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            l = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            z = !0;
            u = new ig.Timer;
            for (var d in c) this.initEnd(d, c, j);
            for (d in j) this.initStart(d, j, b, g), this.initDelta(d, x, b, j)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, g) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ?
                d[b] + e[b] * g : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!z) return !1;
            if (this.delay) {
                if (u.delta() < this.delay) return;
                this.delay = 0;
                u.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (u.delta() + l) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in x) this.propUpdate(property, b, g, x, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    r && r.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g) this.propSet(property, g, b);
                    l = 0;
                    u.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, j);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(j, d);
                    for (property in j) this.initDelta(property, x, b, j);
                    l = 0;
                    u.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            l += u.delta()
        };
        this.resume = function() {
            this.paused = !1;
            u.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, l += d, this.update());
            this.complete = !0
        }
    };
    ig.Tween.Loop = {
        Revert: 1,
        Reverse: 2
    };
    ig.Tween.Easing = {
        Linear: {},
        Quadratic: {},
        Cubic: {},
        Quartic: {},
        Quintic: {},
        Sinusoidal: {},
        Exponential: {},
        Circular: {},
        Elastic: {},
        Back: {},
        Bounce: {}
    };
    ig.Tween.Easing.Linear.EaseNone = function(b) {
        return b
    };
    ig.Tween.Easing.Quadratic.EaseIn = function(b) {
        return b * b
    };
    ig.Tween.Easing.Quadratic.EaseOut = function(b) {
        return -b * (b - 2)
    };
    ig.Tween.Easing.Quadratic.EaseInOut =
        function(b) {
            return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1)
        };
    ig.Tween.Easing.Cubic.EaseIn = function(b) {
        return b * b * b
    };
    ig.Tween.Easing.Cubic.EaseOut = function(b) {
        return --b * b * b + 1
    };
    ig.Tween.Easing.Cubic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2)
    };
    ig.Tween.Easing.Quartic.EaseIn = function(b) {
        return b * b * b * b
    };
    ig.Tween.Easing.Quartic.EaseOut = function(b) {
        return -(--b * b * b * b - 1)
    };
    ig.Tween.Easing.Quartic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2)
    };
    ig.Tween.Easing.Quintic.EaseIn =
        function(b) {
            return b * b * b * b * b
        };
    ig.Tween.Easing.Quintic.EaseOut = function(b) {
        return (b -= 1) * b * b * b * b + 1
    };
    ig.Tween.Easing.Quintic.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseIn = function(b) {
        return -Math.cos(b * Math.PI / 2) + 1
    };
    ig.Tween.Easing.Sinusoidal.EaseOut = function(b) {
        return Math.sin(b * Math.PI / 2)
    };
    ig.Tween.Easing.Sinusoidal.EaseInOut = function(b) {
        return -0.5 * (Math.cos(Math.PI * b) - 1)
    };
    ig.Tween.Easing.Exponential.EaseIn = function(b) {
        return 0 == b ? 0 : Math.pow(2,
            10 * (b - 1))
    };
    ig.Tween.Easing.Exponential.EaseOut = function(b) {
        return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1
    };
    ig.Tween.Easing.Exponential.EaseInOut = function(b) {
        return 0 == b ? 0 : 1 == b ? 1 : 1 > (b *= 2) ? 0.5 * Math.pow(2, 10 * (b - 1)) : 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
    };
    ig.Tween.Easing.Circular.EaseIn = function(b) {
        return -(Math.sqrt(1 - b * b) - 1)
    };
    ig.Tween.Easing.Circular.EaseOut = function(b) {
        return Math.sqrt(1 - --b * b)
    };
    ig.Tween.Easing.Circular.EaseInOut = function(b) {
        return 1 > (b /= 0.5) ? -0.5 * (Math.sqrt(1 - b * b) - 1) : 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
    };
    ig.Tween.Easing.Elastic.EaseIn =
        function(b) {
            var c, d = 0.1,
                e = 0.4;
            if (0 == b) return 0;
            if (1 == b) return 1;
            e || (e = 0.3);
            !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
            return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e))
        };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin((b - c) * 2 * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin((b - c) * 2 * Math.PI / e) + 1
    };
    ig.Tween.Easing.Back.EaseIn = function(b) {
        return b * b * (2.70158 * b - 1.70158)
    };
    ig.Tween.Easing.Back.EaseOut = function(b) {
        return (b -= 1) * b * (2.70158 * b + 1.70158) + 1
    };
    ig.Tween.Easing.Back.EaseInOut = function(b) {
        return 1 > (b *= 2) ? 0.5 * b * b * (3.5949095 * b - 2.5949095) : 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
    };
    ig.Tween.Easing.Bounce.EaseIn =
        function(b) {
            return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b)
        };
    ig.Tween.Easing.Bounce.EaseOut = function(b) {
        return (b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
    };
    ig.Tween.Easing.Bounce.EaseInOut = function(b) {
        return 0.5 > b ? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b) : 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5
    }
});
ig.baked = !0;
ig.module("plugins.url-parameters").defines(function() {
    ig.UrlParameters = ig.Class.extend({
        init: function() {
            switch (getQueryVariable("iphone")) {
                case "true":
                    ig.ua.iPhone = !0, console.log("iPhone mode")
            }
            var b = getQueryVariable("webview");
            if (b) switch (b) {
                case "true":
                    ig.ua.is_uiwebview = !0, console.log("webview mode")
            }
            if (b = getQueryVariable("debug")) switch (b) {
                case "true":
                    ig.game.showDebugMenu(), console.log("debug mode")
            }
            switch (getQueryVariable("view")) {
                case "stats":
                    ig.game.resetPlayerStats(), ig.game.endGame()
            }
            getQueryVariable("ad")
        }
    })
});
ig.baked = !0;
ig.module("plugins.director").requires("impact.impact").defines(function() {
    ig.Director = ig.Class.extend({
        init: function(b, c) {
            this.game = b;
            this.levels = [];
            this.currentLevel = 0;
            this.append(c)
        },
        loadLevel: function(b) {
            for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
                var d = ig.domHandler.getElementById("#" + c);
                ig.domHandler.hide(d)
            }
            this.currentLevel = b;
            this.game.loadLevel(this.levels[b]);
            return !0
        },
        loadLevelWithoutEntities: function(b) {
            this.currentLevel = b;
            this.game.loadLevelWithoutEntities(this.levels[b]);
            return !0
        },
        append: function(b) {
            newLevels = [];
            return "object" === typeof b ? (b.constructor === [].constructor ? newLevels = b : newLevels[0] = b, this.levels = this.levels.concat(newLevels), !0) : !1
        },
        nextLevel: function() {
            return this.currentLevel + 1 < this.levels.length ? this.loadLevel(this.currentLevel + 1) : !1
        },
        previousLevel: function() {
            return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1
        },
        jumpTo: function(b) {
            var c = null;
            for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
            return 0 <= c ? this.loadLevel(c) : !1
        },
        firstLevel: function() {
            return this.loadLevel(0)
        },
        lastLevel: function() {
            return this.loadLevel(this.levels.length - 1)
        },
        reloadLevel: function() {
            return this.loadLevel(this.currentLevel)
        }
    })
});
ig.baked = !0;
ig.module("plugins.impact-storage").requires("impact.game").defines(function() {
    ig.Storage = ig.Class.extend({
        staticInstantiate: function() {
            return !ig.Storage.instance ? null : ig.Storage.instance
        },
        init: function() {
            ig.Storage.instance = this
        },
        isCapable: function() {
            return "undefined" !== typeof window.localStorage
        },
        isSet: function(b) {
            return null !== this.get(b)
        },
        initUnset: function(b, c) {
            null === this.get(b) && this.set(b, c)
        },
        get: function(b) {
            if (!this.isCapable()) return null;
            try {
                return JSON.parse(localStorage.getItem(b))
            } catch (c) {
                return window.localStorage.getItem(b)
            }
        },
        getInt: function(b) {
            return ~~this.get(b)
        },
        getFloat: function(b) {
            return parseFloat(this.get(b))
        },
        getBool: function(b) {
            return !!this.get(b)
        },
        key: function(b) {
            return this.isCapable() ? window.localStorage.key(b) : null
        },
        set: function(b, c) {
            if (!this.isCapable()) return null;
            try {
                window.localStorage.setItem(b, JSON.stringify(c))
            } catch (d) {
                console.log(d)
            }
        },
        setHighest: function(b, c) {
            c > this.getFloat(b) && this.set(b, c)
        },
        remove: function(b) {
            if (!this.isCapable()) return null;
            window.localStorage.removeItem(b)
        },
        clear: function() {
            if (!this.isCapable()) return null;
            window.localStorage.clear()
        }
    })
});
ig.baked = !0;
ig.module("plugins.scale").requires("impact.entity").defines(function() {
    ig.Entity.inject({
        scale: {
            x: 1,
            y: 1
        },
        _offset: {
            x: 0,
            y: 0
        },
        _scale: {
            x: 1,
            y: 1
        },
        _size: {
            x: 0,
            y: 0
        },
        init: function(b, c, d) {
            this.parent(b, c, d);
            this._offset.x = this.offset.x;
            this._offset.y = this.offset.y;
            this._size.x = this.size.x;
            this._size.y = this.size.y;
            this.setScale(this.scale.x, this.scale.y)
        },
        draw: function() {
            var b = ig.system.context;
            b.save();
            b.translate(ig.system.getDrawPos(this.pos.x.round() - this.offset.x - ig.game.screen.x), ig.system.getDrawPos(this.pos.y.round() -
                this.offset.y - ig.game.screen.y));
            b.scale(this._scale.x, this._scale.y);
            this.currentAnim && this.currentAnim.draw(0, 0);
            b.restore()
        },
        setScale: function(b, c) {
            var d = this.size.x,
                e = this.size.y;
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            this.offset.x = this._offset.x * this._scale.x;
            this.offset.y = this._offset.y * this._scale.y;
            this.size.x = this._size.x * this._scale.x;
            this.size.y = this._size.y * this._scale.y;
            this.pos.x +=
                (d - this.size.x) / 2;
            this.pos.y += (e - this.size.y) / 2
        }
    })
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module("plugins.branding.splash").requires("impact.impact", "impact.entity").defines(function() {
    ig.BrandingSplash = ig.Class.extend({
        init: function() {
            ig.game.spawnEntity(EntityBranding, 0, 0);
            console.log("spawn branding")
        }
    });
    EntityBranding = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        splash: new ig.Image(cervezaAguilaPathModule + "branding/splash1.png"),
        init: function(b, c, d) {
            this.parent(b, c, d);
            320 >= ig.system.width ? (this.size.x = 320, this.size.y = 200) : (this.size.x = 480, this.size.y = 240);
            this.pos.x = (ig.system.width - this.size.x) /
                2;
            this.pos.y = -this.size.y - 200;
            this.endPosY = (ig.system.height - this.size.y) / 2;
            b = this.tween({
                pos: {
                    y: this.endPosY
                }
            }, 0.5, {
                easing: ig.Tween.Easing.Bounce.EaseIn
            });
            c = this.tween({}, 2.5, {
                onComplete: function() {
                    ig.game.director.loadLevel(ig.game.director.currentLevel)
                }
            });
            b.chain(c);
            b.start();
            this.currentAnim = this.anims.idle
        },
        createClickableLayer: function() {
            console.log("Build clickable layer");
            this.checkClickableLayer("branding-splash", _SETTINGS.Branding.Logo.Link, _SETTINGS.Branding.Logo.NewWindow)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k ==
                    b) return !0;
            return !1
        },
        checkClickableLayer: function(b, c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, cervezaAguilaPathModule + "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            g = $("#" + g.id);
            g.css("float", "left");
            g.css("position", "absolute");
            if (ig.ua.mobile) {
                var j = window.innerHeight / mobileHeight,
                    x = window.innerWidth /
                    mobileWidth;
                g.css("left", this.pos.x * x);
                g.css("top", this.pos.y * j);
                g.css("width", this.size.x * x);
                g.css("height", this.size.y * j)
            } else j = w / 2 - destW / 2, x = h / 2 - destH / 2, console.log(j, x), g.css("left", j + this.pos.x * multiplier), g.css("top", x + this.pos.y * multiplier), g.css("width", this.size.x * multiplier), g.css("height", this.size.y * multiplier);
            e ? g.html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : g.html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
            dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        draw: function() {
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            ig.system.context.fillStyle = "#000";
            ig.system.context.font = "12px Arial";
            ig.system.context.textAlign = "left";
            320 >= ig.system.width ?
                ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 150, ig.system.height - 15) : ig.system.context.fillText("powered by MarketJS.com", ig.system.width - 160, ig.system.height - 15);
            this.parent();
            this.splash && ig.system.context.drawImage(this.splash.data, 0, 0, this.splash.data.width, this.splash.data.height, this.pos.x, this.pos.y, this.size.x, this.size.y)
        }
    })
});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function() {
    EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        fillColor: null,
        zIndex: 95E3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            !ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
            b = Math.floor(256 * Math.random());
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + b + "," + d + "," + c + ",1)"
        },
        clicked: function() {
            throw "no implementation on clicked()";
        },
        clicking: function() {
            throw "no implementation on clicking()";
        },
        released: function() {
            throw "no implementation on released()";
        }
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: cervezaAguilaPathModule + "media/graphics/misc/invisible.png",
        init: function(b) {
            this.pos = new Vector2(b.pos.x, b.pos.y);
            this.size = new Vector2(b.size.x, b.size.y);
            var c = "more-games",
                d = "www.google.com",
                e = !1;
            b.div_layer_name && (c = b.div_layer_name);
            b.link && (d = b.link);
            b.newWindow && (e = b.newWindow);
            this.createClickableLayer(c, d, e)
        },
        createClickableLayer: function(b,
            c, d) {
            this.identifier = b;
            var e = ig.domHandler.getElementById("#" + b);
            e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
        },
        update: function(b, c) {
            this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x =
                this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y)
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.domHandler.create("div");
            ig.domHandler.attr(g, "id", b);
            var j = ig.domHandler.create("a");
            e ? (ig.domHandler.attr(j, "href", c), ig.domHandler.attr(j, "target", "_blank")) : ig.domHandler.attr(j, "href", c);
            c = ig.domHandler.create("img");
            ig.domHandler.css(c, {
                width: "100%",
                height: "100%"
            });
            ig.domHandler.attr(c, "src", d);
            d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x,
                ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                e = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var x = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    l = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), x = e.top, e = Math.floor(e.left + this.pos.x * d) + "px", x = Math.floor(x + this.pos.y * d) + "px", l = Math.floor(this.size.x *
                d) + "px", d = Math.floor(this.size.y * d) + "px";
            ig.domHandler.css(g, {
                "float": "left",
                position: "absolute",
                left: e,
                top: x,
                width: l,
                height: d,
                "z-index": 3
            });
            ig.domHandler.addEvent(g, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(j, c);
            ig.domHandler.appendChild(g, j);
            ig.domHandler.appendToBody(g);
            ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x =
                this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-branding-logo").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonBrandingLogo = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet(cervezaAguilaPathModule + "branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 64,
            y: 66
        },
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "branding-logo",
        name: "brandinglogo",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (!ig.global.wm) {
                if ("undefined" == typeof wm)
                    if (_SETTINGS.Branding.Logo.Enabled) this.size.x = _SETTINGS.Branding.Logo.Width, this.size.y = _SETTINGS.Branding.Logo.Height, this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, d && d.centralize && (this.pos.x = ig.system.width / 2 - this.size.x / 2, console.log("centralize true ... centering branded logo ...")), _SETTINGS.Branding.Logo.LinkEnabled && (this.link = _SETTINGS.Branding.Logo.Link, this.newWindow = _SETTINGS.Branding.Logo.NewWindow, this.clickableLayer =
                        new ClickableDivLayer(this));
                    else {
                        this.kill();
                        return
                    }
                this.div_layer_name = d.div_layer_name ? d.div_layer_name : "branding-logo"
            }
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.branding-logo-placeholder").requires("impact.entity", "game.entities.buttons.button-branding-logo").defines(function() {
    EntityBrandingLogoPlaceholder = ig.Entity.extend({
        gravityFactor: 0,
        size: {
            x: 32,
            y: 32
        },
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            if (d) switch (console.log("settings found ... using that div layer name"), b = d.div_layer_name, console.log("settings.centralize:", d.centralize), d.centralize) {
                case "true":
                    console.log("centralize true");
                    centralize = !0;
                    break;
                case "false":
                    console.log("centralize false");
                    centralize = !1;
                    break;
                default:
                    console.log("default ... centralize false"), centralize = !1
            } else b = "branding-logo", centralize = !1;
            if ("undefined" == typeof wm) {
                if (_SETTINGS.Branding.Logo.Enabled) try {
                    ig.game.spawnEntity(EntityButtonBrandingLogo, this.pos.x, this.pos.y, {
                        div_layer_name: b,
                        centralize: centralize
                    })
                } catch (e) {
                    console.log(e)
                }
                this.kill()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/moregames.png", 49, 50),
        size: {
            x: 49,
            y: 50
        },
        zIndex: 750,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.div_layer_name = d.div_layer_name ?
                d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill())
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" +
                this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.opening-shield").requires("impact.entity").defines(function() {
    EntityOpeningShield = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        move: 0,
        mIconAnim: 0,
        shieldAnim: 0,
        titleAnim: 0,
        shieldImage: new ig.Image(cervezaAguilaPathModule + "media/graphics/opening/shield.png"),
        mIconImage: new ig.Image(cervezaAguilaPathModule + "media/graphics/opening/m_icon.png"),
        titleImage: new ig.Image(cervezaAguilaPathModule + "media/graphics/opening/title.png"),
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateOriginalShieldOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawOriginalShieldOpening())
        },
        updateOriginalShieldOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() &&
                (this.initTimer = null, this.sheildTimer = new ig.Timer(0.05));
            this.sheildTimer && 0 < this.sheildTimer.delta() && (3 > this.shieldAnim ? (this.shieldAnim++, this.sheildTimer.reset()) : (this.sheildTimer = null, this.moveTimer = new ig.Timer(0.001), this.mIconTimer = new ig.Timer(0.05), this.titleTimer = new ig.Timer(0.15)));
            this.moveTimer && 0 < this.moveTimer.delta() && (this.move += 0.3, this.moveTimer.reset());
            this.mIconTimer && 0 < this.mIconTimer.delta() && (12 > this.mIconAnim ? (this.mIconAnim++, this.moveTimer.reset()) : this.mIconTimer =
                null);
            this.titleTimer && 0 < this.titleTimer.delta() && (11 > this.titleAnim ? (this.titleAnim++, this.titleTimer.reset()) : (this.titleTimer = null, this.nextLevelTimer = new ig.Timer(1)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawOriginalShieldOpening: function() {
            if (this.moveTimer) {
                var b = ig.system.context;
                b.save();
                var c = ig.system.width / 2,
                    d = ig.system.height / 2;
                b.translate(c, d);
                b.rotate(this.move * Math.PI / 180);
                b.beginPath();
                b.moveTo(0, 0);
                for (var e = 0, g = 1; 48 >= g; g += 1) b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
                b.translate(-c, -d);
                c = b.createRadialGradient(c, d, 100, c, d, 250);
                c.addColorStop(0, "rgba(255,255,255,0.1)");
                c.addColorStop(1, "rgba(0,0,0,0)");
                b.fillStyle = c;
                b.fill();
                b.restore()
            }
            this.shieldImage.drawTile(ig.system.width / 2 - 91, 0 - (768 - ig.system.height) / 2, this.shieldAnim, 182, 768);
            this.moveTimer && (this.mIconImage.drawTile(ig.system.width / 2 - 96, ig.system.height / 2 - 70, this.mIconAnim,
                166, 160), this.titleImage.drawTile(ig.system.width / 2 - 204, ig.system.height / 2 + 100, this.titleAnim, 409, 76));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.opening-kitty").requires("impact.entity").defines(function() {
    EntityOpeningKitty = ig.Entity.extend({
        size: {
            x: 48,
            y: 48
        },
        kittyAnim: -1,
        kittyImage: new ig.Image(cervezaAguilaPathModule + "media/graphics/opening/kitty.png"),
        kittyTitleImage: new ig.Image(cervezaAguilaPathModule + "media/graphics/opening/kittytitle.png"),
        soundKey: "kittyopeningSound",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        ready: function() {
            if (!ig.wm)
                if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
                    this.initTimer = new ig.Timer(0.1);
                    try {
                        ig.soundHandler.sfxPlayer.play(this.soundKey)
                    } catch (b) {
                        console.log(b)
                    }
                } else ig.game.director.nextLevel(),
                    ig.system.context.globalAlpha = 1, this.kill()
        },
        update: function() {
            this.parent();
            this.updateKittyOpening()
        },
        draw: function() {
            this.parent();
            ig.global.wm || (this.nextLevelTimer && 0 > this.nextLevelTimer.delta() && (ig.system.context.globalAlpha = -this.nextLevelTimer.delta()), this.drawKittyOpening())
        },
        updateKittyOpening: function() {
            this.initTimer && 0 < this.initTimer.delta() && (this.initTimer = null, this.kittyTimer = new ig.Timer(0.15));
            this.kittyTimer && 0 < this.kittyTimer.delta() && (7 > this.kittyAnim ? (this.kittyAnim++, this.kittyTimer.reset()) :
                (this.kittyTimer = null, this.nextLevelTimer = new ig.Timer(2)));
            this.nextLevelTimer && 0 < this.nextLevelTimer.delta() && (this.nextLevelTimer = null, ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1)
        },
        drawKittyOpening: function() {
            var b = ig.system.context.createLinearGradient(0, 0, 0, ig.system.height);
            b.addColorStop(0, "#ffed94");
            b.addColorStop(1, "#ffcd85");
            ig.system.context.fillStyle = b;
            ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
            0 <= this.kittyAnim && (this.kittyImage.drawTile(ig.system.width /
                2 - this.kittyImage.width / 8, ig.system.height / 2 - this.kittyImage.height / 4, this.kittyAnim, 218, 325), this.kittyTitleImage.drawTile(ig.system.width / 2 - this.kittyTitleImage.width / 2, ig.system.height / 2 + this.kittyImage.height / 4 + 10, this.kittyAnim, 380, 37));
            ig.system.context.globalAlpha = 1
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer").requires("impact.entity").defines(function() {
    EntityPointer = ig.Entity.extend({
        checkAgainst: ig.Entity.TYPE.BOTH,
        isFirstPressed: !1,
        isPressed: !1,
        isReleased: !1,
        isHovering: !1,
        hoveringItem: null,
        objectArray: [],
        clickedObjectList: [],
        ignorePause: !0,
        zIndex: 5E3,
        check: function(b) {
            this.objectArray.push(b)
        },
        clickObject: function(b) {
            this.isFirstPressed && "function" == typeof b.clicked && (b.clicked(), this.addToClickedObjectList(b));
            this.isPressed && !this.isReleased && "function" == typeof b.clicking &&
                b.clicking();
            this.isReleased && "function" == typeof b.released && (b.released(), this.removeFromClickedObjectList(b))
        },
        refreshPos: function() {
            this.pos = ig.game.io.getClickPos()
        },
        update: function() {
            this.parent();
            this.refreshPos();
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            if (null != b) null != this.hoveringItem ? this.hoveringItem != b && ("function" == typeof this.hoveringItem.leave && this.hoveringItem.leave(), "function" == typeof b.over &&
                b.over()) : "function" == typeof b.over && b.over(), this.hoveringItem = b, this.clickObject(b), this.objectArray = [];
            else if (null != this.hoveringItem && "function" == typeof this.hoveringItem.leave && (this.hoveringItem.leave(), this.hoveringItem = null), this.isReleased) {
                for (b = 0; b < this.clickedObjectList.length; b++) c = this.clickedObjectList[b], "function" == typeof c.releasedOutside && c.releasedOutside();
                this.clickedObjectList = []
            }
            this.isFirstPressed = ig.input.pressed("click");
            this.isReleased = ig.input.released("click");
            this.isPressed =
                ig.input.state("click")
        },
        addToClickedObjectList: function(b) {
            this.clickedObjectList.push(b)
        },
        removeFromClickedObjectList: function(b) {
            for (var c = [], d = 0; d < this.clickedObjectList.length; d++) {
                var e = this.clickedObjectList[d];
                e != b && c.push(e)
            }
            this.clickedObjectList = c
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() {
    EntityPointerSelector = EntityPointer.extend({
        zIndex: 1E3,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 0, 255, 0.7)",
        size: {
            x: 20,
            y: 20
        },
        init: function(b, c, d) {
            this.parent(b, c, d)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.select").requires("impact.entity").defines(function() {
    EntitySelect = ig.Entity.extend({
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.NEVER,
        canSelect: !1,
        canSelectTimerDuration: 0.35,
        zIndex: 99999,
        isHovering: !1,
        isSelected: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration)
        },
        doesClickableLayerExist: function(b) {
            for (k in dynamicClickableEntityDivs)
                if (k == b) return !0;
            return !1
        },
        checkClickableLayer: function(b,
            c, d) {
            "undefined" == typeof wm && (this.doesClickableLayerExist(b) ? (ig.game.showOverlay([b]), $("#" + b).find("[href]").attr("href", c)) : this.createClickableOutboundLayer(b, c, cervezaAguilaPathModule + "media/graphics/misc/invisible.png", d))
        },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var j = w / 2 - destW / 2,
                x = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", j + this.pos.x * multiplier), $("#" + g.id).css("top", x + this.pos.y * multiplier));
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
            dynamicClickableEntityDivs[b] = {};
            dynamicClickableEntityDivs[b].width = $("#" + g.id).width();
            dynamicClickableEntityDivs[b].height =
                $("#" + g.id).height();
            dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        },
        hovered: function() {
            this.isHovering = !0;
            this.dehoverOthers()
        },
        dehoverOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1)
        },
        deselectOthers: function() {
            var b = ig.game.getEntitiesByType(EntitySelect);
            for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1)
        },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 <
                this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.world").requires("impact.entity").defines(function() {
    EntityWorld = ig.Entity.extend({
        size: {
            x: 480,
            y: 640
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/tileset/road.png", 480, 640),
        coinSpawnPos: [160, 235, 300, 385, 450, 550],
        name: "world",
        vehicleArray: "car1 car2 car3 car4 car5 car6 car7 car8 car9 car10 car11 car12 car13 car14".split(" "),
        vehicleIndex: 0,
        carLaneOne: null,
        carLaneTwo: null,
        carLaneThree: null,
        carLaneFour: null,
        carLaneFive: null,
        carLaneSix: null,
        carSpeedOne: null,
        carSpeedTwo: null,
        carSpeedThree: null,
        carSpeedFour: null,
        carSpeedFive: null,
        carSpeedSix: null,
        treeArray: "building3 tree1 tree3 tree4 suporter1 suporter2 building1 building2".split(" "),
        treeGridStart: [40, 80, 120, 160, 200, 240],
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("background", 1, [0]);
            this.timerOne = new ig.Timer(1 * Math.random() + 0);
            this.timerTwo = new ig.Timer(1 * Math.random() + 0);
            this.timerThree = new ig.Timer(1 * Math.random() + 0);
            this.timerFour = new ig.Timer(1 * Math.random() + 0);
            this.timerFive = new ig.Timer(1 *
                Math.random() + 0);
            this.timerSix = new ig.Timer(1 * Math.random() + 0);
            this.vehicleIndex = Math.floor(15 * Math.random()) + 0;
            this.carLaneOne = this.vehicleArray[this.vehicleIndex];
            this.carSpeedOne = 3 >= Math.floor(this.timerOne.target) ? Math.floor(101 * Math.random()) + 200 : Math.floor(301 * Math.random()) + 100;
            this.vehicleIndex = Math.floor(15 * Math.random()) + 0;
            this.carLaneTwo = this.vehicleArray[this.vehicleIndex];
            this.carSpeedTwo = 3 >= Math.floor(this.timerTwo.target) ? Math.floor(101 * Math.random()) + 200 : Math.floor(301 * Math.random()) +
                100;
            this.vehicleIndex = Math.floor(15 * Math.random()) + 0;
            this.carLaneThree = this.vehicleArray[this.vehicleIndex];
            this.carSpeedThree = 3 >= Math.floor(this.timerThree.target) ? Math.floor(101 * Math.random()) + 200 : Math.floor(301 * Math.random()) + 100;
            this.vehicleIndex = Math.floor(15 * Math.random()) + 0;
            this.carLaneFour = this.vehicleArray[this.vehicleIndex];
            this.carSpeedFour = 3 >= Math.floor(this.timerFour.target) ? Math.floor(101 * Math.random()) + 200 : Math.floor(301 * Math.random()) + 100;
            this.vehicleIndex = Math.floor(15 * Math.random()) +
                0;
            this.carLaneFive = this.vehicleArray[this.vehicleIndex];
            this.carSpeedFive = 3 >= Math.floor(this.timerFive.target) ? Math.floor(101 * Math.random()) + 200 : Math.floor(301 * Math.random()) + 100;
            this.vehicleIndex = Math.floor(15 * Math.random()) + 0;
            this.carLaneSix = this.vehicleArray[this.vehicleIndex];
            this.carSpeedSix = 3 >= Math.floor(this.timerSix.target) ? Math.floor(101 * Math.random()) + 200 : Math.floor(301 * Math.random()) + 100;
            this.puddleProbabilty = Math.floor(3 * Math.random()) + 1;
            1 == this.puddleProbabilty && ig.game.spawnEntity(EntityPuddle,
                this.puddlePositionX(), this.puddlePositionY());
            ig.game.getTutorial();
            !0 == ig.game.showTutorial ? (ig.game.spawnEntity(EntityTutorial, 220, 200), this.tutorialLane = !0) : this.tutorialLane = !1;
            this.platformSpawn = !1
        },
        puddlePositionY: function() {
            this.randPuddle = Math.floor(3 * Math.random()) + 1;
            if (1 == this.randPuddle) return Math.floor(101 * Math.random()) + 180 - Math.abs(this.pos.y);
            if (2 == this.randPuddle) return Math.floor(66 * Math.random()) + 400 - Math.abs(this.pos.y);
            if (3 == this.randPuddle) return Math.floor(21 * Math.random()) +
                560 - Math.abs(this.pos.y)
        },
        puddlePositionX: function() {
            return Math.floor(361 * Math.random()) + 60
        },
        update: function() {
            if (!0 != ig.game.gamePause) {
                if (!1 == this.platformSpawn) {
                    var b = ig.game.getEntitiesByType(EntityPlayer)[0];
                    b && -615 <= this.pos.y - b.pos.y && (ig.game.spawnEntity(EntityPlatform, 480, this.pos.y + 75), this.platformSpawn = !0)
                }
                this.init && (this.treeSpawn(), ig.game.spawnEntity(EntityCoin, Math.floor(381 * Math.random()) + 50, this.pos.y + this.coinSpawnPos[Math.floor(Math.random() * this.coinSpawnPos.length)], {
                        zIndex: 99
                    }),
                    this.init = !1);
                0 <= this.timerOne.delta() && (ig.game.spawnEntity(EntityVehicle, -200, this.pos.y + 170, {
                    xdir: 1,
                    zIndex: 100,
                    flip: !1,
                    vehicleName: this.carLaneOne,
                    speed: this.carSpeedOne
                }), this.timerOne = new ig.Timer(3.5 * Math.random() + 1.5));
                0 <= this.timerTwo.delta() && (ig.game.spawnEntity(EntityVehicle, 480, this.pos.y + 235, {
                    xdir: -1,
                    zIndex: 200,
                    vehicleName: this.carLaneTwo,
                    speed: this.carSpeedTwo
                }), this.timerTwo = new ig.Timer(3.5 * Math.random() + 1.5));
                0 <= this.timerThree.delta() && (ig.game.spawnEntity(EntityVehicle, -200, this.pos.y +
                    298, {
                        xdir: 1,
                        zIndex: 300,
                        flip: !1,
                        vehicleName: this.carLaneThree,
                        speed: this.carSpeedThree
                    }), this.timerThree = new ig.Timer(3.5 * Math.random() + 1.5));
                0 <= this.timerFour.delta() && (ig.game.spawnEntity(EntityVehicle, 480, this.pos.y + 390, {
                    xdir: -1,
                    zIndex: 400,
                    vehicleName: this.carLaneFour,
                    speed: this.carSpeedFour
                }), this.timerFour = new ig.Timer(3.5 * Math.random() + 1.5));
                0 <= this.timerFive.delta() && (ig.game.spawnEntity(EntityVehicle, -200, this.pos.y + 455, {
                        xdir: 1,
                        zIndex: 500,
                        flip: !1,
                        vehicleName: this.carLaneFive,
                        speed: this.carSpeedFive
                    }),
                    this.timerFive = new ig.Timer(3.5 * Math.random() + 1.5));
                0 <= this.timerSix.delta() && (!1 == this.tutorialLane && ig.game.spawnEntity(EntityVehicle, 480, this.pos.y + 545, {
                    xdir: -1,
                    zIndex: 600,
                    vehicleName: this.carLaneSix,
                    speed: this.carSpeedSix
                }), this.timerSix = new ig.Timer(3.5 * Math.random() + 1.5));
                ig.game.sortEntitiesDeferred();
                (b = ig.game.getEntitiesByType(EntityPlayer)[0]) && -400 >= b.pos.y - this.pos.y && this.kill();
                this.parent()
            }
        },
        treeSpawn: function() {
            this.group = 1;
            1 == this.group ? this.firstGroup = !0 : 2 == this.group && (this.firstGroup = !1);
            ig.game.spawnEntity(EntityFoliage, this.treeGridStart[Math.floor(Math.random() * this.treeGridStart.length)], this.firstGroup ? this.pos.y + 133 : this.pos.y + 90, {
                zIndex: 50,
                group: this.group,
                numOfTrees: Math.floor(3 * Math.random()) + 1
            });
            ig.game.spawnEntity(EntityFoliage, this.treeGridStart[Math.floor(Math.random() * this.treeGridStart.length)], this.firstGroup ? this.pos.y + 355 : this.pos.y + 310, {
                zIndex: 350,
                group: this.group,
                numOfTrees: Math.floor(3 * Math.random()) + 1
            });
            !1 == ig.game.showTutorial ? ig.game.spawnEntity(EntityFoliage,
                this.treeGridStart[Math.floor(Math.random() * this.treeGridStart.length)], this.firstGroup ? this.pos.y + 510 : this.pos.y + 460, {
                    zIndex: 550,
                    group: this.group,
                    numOfTrees: Math.floor(3 * Math.random()) + 1
                }) : ig.game.spawnEntity(EntityFoliage, this.treeGridStart[2], this.firstGroup ? this.pos.y + 510 : this.pos.y + 460, {
                zIndex: 550,
                group: this.group,
                numOfTrees: 3
            });
            this.group = 2;
            this.treeName = this.treeArray[Math.floor(Math.random() * this.treeArray.length)];
            ig.game.spawnEntity(EntityFoliage, this.treeGridStart[Math.floor(Math.random() *
                this.treeGridStart.length)], this.firstGroup ? this.pos.y - 15 + 55 : this.pos.y + 460, {
                zIndex: 700,
                group: this.group,
                numOfTrees: Math.floor(3 * Math.random()) + 1,
                treeName: this.treeName
            })
        },
        kill: function() {
            this.parent();
            var b = ig.game.getEntitiesByType(EntityPuddle)[0];
            b && b.kill()
        }
    });
    EntityPuddle = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/puddle.png", 52, 29),
        zIndex: 0,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("puddle", 1, [0]);
            this.currentAnim = this.anims.puddle
        }
    });
    EntityTutorial = ig.Entity.extend({
        mobileAnimSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/tutorial.png", 45, 74),
        desktopMAnimSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mouse.png", 47, 96),
        zIndex: 99999,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.ua.mobile ? (this.anims.tap = new ig.Animation(this.mobileAnimSheet, 0.3, [0, 1]), this.anims.idle = new ig.Animation(this.mobileAnimSheet, 1, [1])) : (this.anims.tap = new ig.Animation(this.desktopMAnimSheet, 0.3, [0, 1]), this.anims.idle = new ig.Animation(this.desktopMAnimSheet,
                1, [1]), ig.game.spawnEntity(EntityKeyboardTutorial, 170, 360));
            this.currentAnim = this.anims.tap;
            this.timer = new ig.Timer
        },
        update: function() {
            if (!0 != ig.game.gamePause) {
                this.parent();
                if (ig.input.released("click") || ig.input.released("up")) {
                    var b = ig.game.getEntitiesByType(EntityPlayer)[0];
                    if (b && !0 == b.tutforward && (this.currentAnim = this.anims.idle, b = ig.game.getEntitiesByType(EntityKeyboardTutorial)[0])) b.currentAnim = b.anims.side
                }
                if (this.currentAnim == this.anims.idle && (this.pos.x = 60 * Math.sin(5 * this.timer.delta()) +
                        220, (b = ig.game.getEntitiesByType(EntityPlayer)[0]) && !0 == b.tutside)) {
                    this.currentAnim.alpha -= 0.05;
                    if (b = ig.game.getEntitiesByType(EntityKeyboardTutorial)[0]) b.currentAnim.alpha -= 0.05, 0 >= b.currentAnim.alpha && b.kill();
                    0 >= this.currentAnim.alpha && (ig.game.showTutorial = !1, ig.game.saveTutorial(), this.kill())
                }
            }
        },
        draw: function() {
            this.parent();
            if (!ig.ua.mobile) {
                var b = ig.game.getEntitiesByType(EntityPlayer)[0];
                b && !1 == b.tutside && (this.context = ig.system.context, this.context.font = "45pt WorldsAtWar BB", this.context.fillStyle =
                    "#ffffff", this.context.textAlign = "center", this.context.fillText(_STRINGS.PetHop.Or, 244, 350))
            }
        }
    });
    EntityKeyboardTutorial = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/arrow.png", 150, 103),
        zIndex: 99999,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("up", 0.3, [0, 1]);
            this.addAnim("side", 0.3, [0, 2]);
            this.currentAnim = this.anims.up
        }
    })
});
ig.baked = !0;
ig.module("game.entities.player").requires("impact.entity").defines(function() {
    EntityPlayer = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/characters.png", 45.2, 55),
        size: {
            x: 35,
            y: 10
        },
        offset: {
            x: 10,
            y: 45
        },
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        halfPointPos: null,
        worldSpawnPos: null,
        playerMidPos: null,
        zIndex: 700,
        playerPos: 615,
        onRiver: !1,
        treeBlock: !1,
        platformSpawnOffset: 0,
        score: 0,
        character: "rabbit",
        gravityFactor: 0,
        playerForwardRow: [0, -40, -90, -140, -190, -240, -290, -340, -415, -465, -505, -585],
        pauseGameRect: {
            x: 445,
            y: 600,
            w: 25,
            h: 25
        },
        tscore: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.spawnEntity(EntityPointer, this.pos.x, this.pos.y);
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.addAnim("rabbitidle", 1, [0]);
            this.addAnim("pandaidle", 1, [1]);
            this.addAnim("chickenidle", 1, [2]);
            this.addAnim("tigeridle", 1, [3]);
            this.addAnim("pigidle", 1, [4]);
            ig.game.getActiveCharacter();
            this.character = ig.game.character;
            this.characterIdle();
            this.halfPointPos = ig.system.height / 2;
            this.worldSpawnPos = -640;
            this.playerMidPos = this.pos.y;
            this.initialScreen = ig.game.screen.y;
            this.shadowOffset = this.targetScreen = 0;
            this.shadowTargetY = 612;
            this.shadowTargetX = 240 + this.shadowOffset;
            ig.game.spawnEntity(EntityShadow, 240 + this.shadowOffset, 612);
            ig.game.getHighScore();
            this.grass = this.road = this.water = this.squashSprite = this.scoreStop = this.leftBlocked = this.rightBlocked = this.forwardBlocked = this.moveDown = this.moveRight = this.moveLeft = !1;
            ig.game.getTutorial();
            this.tutside = !0 == ig.game.showTutorial ? this.tutforward = !1 : this.tutforward = !0;
            ig.game.getSoundState();
            !1 == ig.game.soundMute ? ig.soundHandler.unmuteAll(!0) : ig.soundHandler.muteAll(!0);
            this.clearSwipe()
        },
        aabbCheck: function(b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkPauseClick: function() {
            if (ig.input.pressed("click")) {
                this.pointer.refreshPos();
                var b = {};
                b.x = this.pointer.pos.x;
                b.y = this.pointer.pos.y;
                b.w = this.pointer.size.x;
                b.h = this.pointer.size.y;
                this.aabbCheck(b, this.pauseGameRect) && !1 == ig.game.gamePause && (ig.game.spawnEntity(EntityPausecontrol,
                    0, 0), ig.soundHandler.muteAll(!0), ig.Timer.timeScale = 0, ig.game.gamePause = !0)
            }
        },
        update: function() {
            this.checkPauseClick();
            if (!0 != ig.game.gamePause) {
                (this.pos.x < -this.size.x || this.pos.x > 480 - this.size.x / 2) && this.kill();
                320 > this.pos.y && Math.ceil(this.pos.y) == this.playerMidPos && (this.targetScreen = -Math.abs(320 - this.pos.y), this.initialScreen > this.targetScreen && (ig.game.screen.y = this.lerp(this.initialScreen, this.targetScreen, 0.1), this.initialScreen = ig.game.screen.y));
                this.swipeControls();
                this.keyboardControls();
                ig.input.pressed("up") || ig.input.pressed("click");
                if ((ig.input.released("up") || ig.input.released("click")) && !1 == this.moveRight && !1 == this.moveLeft && !1 == this.moveDown) {
                    if (!1 == this.forwardBlocked) {
                        this.hopPositionForward();
                        if (615 > this.pos.y)
                            for (var b = 0; 5 > b; b++) ig.game.spawnEntity(EntityParticle, this.pos.x + 10, this.pos.y, {
                                zIndex: this.zIndex
                            });
                        this.squashSprite = !0
                    }
                    this.pos.y < this.halfPointPos && (ig.game.spawnEntity(EntityWorld, 0, this.worldSpawnPos, {
                            zIndex: -1E3
                        }), this.worldSpawnPos -= 640, this.platformSpawnOffset -=
                        640, this.halfPointPos -= ig.system.height);
                    this.pos.y < this.playerMidPos && (!1 == this.scoreStop && (this.playerMidPos = this.pos.y, this.score++), this.score > ig.game.highScore && (ig.game.highScore = this.score, ig.game.saveHighScore()));
                    this.xDiff = 0;
                    ig.soundHandler.sfxPlayer.play("jump")
                }
                ig.input.pressed("click") || ig.input.pressed("left");
                if ((ig.input.released("click") || ig.input.released("left")) && !0 == this.moveLeft && !1 == this.leftBlocked && !0 == this.tutforward) {
                    15 < this.pos.x && (this.xDiff = -40, this.pos.x -= 40, this.squashSprite = !0);
                    this.yDiff = Math.floor(Math.abs(this.pos.y - this.playerPos));
                    ig.soundHandler.sfxPlayer.play("jump");
                    for (b = 0; 5 > b; b++) ig.game.spawnEntity(EntityParticle, this.pos.x + 10, this.pos.y, {
                        zIndex: this.zIndex
                    })
                }
                ig.input.pressed("click") || ig.input.pressed("right");
                if ((ig.input.released("click") || ig.input.released("right")) && !0 == this.moveRight && !1 == this.rightBlocked && !0 == this.tutforward) {
                    this.pos.x < ig.system.width - (2 * this.size.x - 10) && (this.xDiff = 40, this.pos.x += 40, this.squashSprite = !0);
                    this.yDiff = Math.floor(Math.abs(this.pos.y -
                        this.playerPos));
                    ig.soundHandler.sfxPlayer.play("jump");
                    for (b = 0; 5 > b; b++) ig.game.spawnEntity(EntityParticle, this.pos.x + 10, this.pos.y, {
                        zIndex: this.zIndex
                    })
                }
                this.shadowTargetX = this.pos.x + this.shadowOffset;
                if (b = ig.game.getEntitiesByType(EntityShadow)[0]) b.pos.y = this.lerp(b.pos.y, this.shadowTargetY, 0.5), b.pos.x = this.lerp(b.pos.x, this.shadowTargetX, 1), !0 == this.squashSprite && 615 >= this.pos.y ? (this.setScale(0.85, 1.15), this.lerpTime = new ig.Timer) : (this.scale.x = this.lerp(this.scale.x, 1, 0.075), this.scale.y = this.lerp(this.scale.y,
                    1, 0.075), this.setScale(this.scale.x, this.scale.y)), !0 == this.squashSprite && 615 >= this.pos.y ? (this.setScale(0.85, 1.15), this.lerpTime = new ig.Timer) : (this.scale.x = this.lerp(this.scale.x, 1, 0.075), this.scale.y = this.lerp(this.scale.y, 1, 0.075), this.setScale(this.scale.x, this.scale.y)), this.lerpTime && 0.01 < this.lerpTime.delta() && 0.1 > this.lerpTime.delta() ? this.setScale(1.15, 0.85) : (this.scale.x = this.lerp(this.scale.x, 1, 0.075), this.scale.y = this.lerp(this.scale.y, 1, 0.075), this.setScale(this.scale.x, this.scale.y));
                this.calculateZIndex();
                this.moveDown = this.moveLeft = this.moveRight = this.scoreStop = this.rightBlocked = this.leftBlocked = this.forwardBlocked = this.squashSprite = !1;
                this.parent();
                this.tscore != this.score && (this.tscore = this.score, 0 == this.score % 10 && 0 < this.score && (ig.game.addspeed += 0.25))
            }
        },
        setScale: function(b, c) {
            this.scale.x = b || this.scale.x;
            this.scale.y = c || this.scale.y;
            this._scale.x = this.scale.x / ig.system.scale;
            this._scale.y = this.scale.y / ig.system.scale;
            "rabbit" == this.character ? this.charOffset = 0 : "chicken" ==
                this.character ? this.charOffset = 7 : "panda" == this.character ? this.charOffset = 3 : "pig" == this.character ? this.charOffset = 13 : "tiger" == this.character && (this.charOffset = 10);
            this.offset.x = 0.5 * -this.size.x + 0.5 * this._scale.x * this.size.x + this.charOffset;
            this.offset.y = this._offset.y * this._scale.y
        },
        closestPlayerPosition: function(b, c) {
            var d = 0,
                e = 1E3,
                g;
            for (d in b) {
                var j = Math.abs(Math.round(c) - b[d]);
                j < e && (e = j, g = b[d])
            }
            return g
        },
        swipeControls: function() {
            if (ig.input.pressed("click")) this.swipeStartX = ig.input.mouse.x, this.swipeStartY =
                ig.input.mouse.y;
            else if (ig.input.released("click") && (this.swipeEndX = ig.input.mouse.x, this.swipeEndY = ig.input.mouse.y, this.swipeStartX || null != this.swipeStartY)) this.swipe = !0;
            !0 == this.swipe && (50 < this.swipeEndX - this.swipeStartX ? (this.moveRight = !0, !0 == this.tutforward && (this.tutside = !0)) : this.swipeStartX - 50 > this.swipeEndX ? (this.moveLeft = !0, !0 == this.tutforward && (this.tutside = !0)) : 50 < this.swipeEndY - this.swipeStartY && (this.moveDown = !0), this.clearSwipe())
        },
        keyboardControls: function() {
            ig.input.released("right") ?
                (this.moveRight = !0, !0 == this.tutforward && (this.tutside = !0)) : ig.input.released("left") ? (this.moveLeft = !0, !0 == this.tutforward && (this.tutside = !0)) : ig.input.released("down") && (this.moveDown = !0)
        },
        clearSwipe: function() {
            this.swipeEndY = this.swipeEndX = this.swipeStartY = this.swipeStartX = null;
            this.swipe = !1
        },
        hopPositionForward: function() {
            700 != this.pos.y && (this.pos.y = this.playerPos - -this.closestPlayerPosition(this.playerForwardRow, this.pos.y - this.playerPos));
            this.pos.y = Math.floor(this.pos.y);
            700 == this.pos.y ? (this.pos.y =
                this.playerPos, this.shadowTargetY = this.pos.y) : this.pos.y == this.playerPos ? (this.pos.y = this.playerPos - 40, this.shadowTargetY = this.pos.y, this.yDiff = 40) : this.pos.y == this.playerPos - 40 ? (this.pos.y = this.playerPos - 90, this.shadowTargetY = this.pos.y) : this.pos.y == this.playerPos - 90 ? (this.pos.y = this.playerPos - 140, this.shadowTargetY = this.pos.y) : this.pos.y == this.playerPos - 140 ? (this.pos.y = this.playerPos - 190, this.shadowTargetY = this.pos.y, this.yDiff = 190) : this.pos.y == this.playerPos - 190 ? (this.pos.y = this.playerPos - 240,
                this.shadowTargetY = this.pos.y) : this.pos.y == this.playerPos - 240 ? (this.pos.y = this.playerPos - 290, this.shadowTargetY = this.pos.y) : this.pos.y == this.playerPos - 290 ? (this.pos.y = this.playerPos - 340, this.shadowTargetY = this.pos.y) : this.pos.y == this.playerPos - 340 ? (this.pos.y = this.playerPos - 415, this.shadowTargetY = this.pos.y, this.yDiff = 415) : this.pos.y == this.playerPos - 415 ? (this.pos.y = this.playerPos - 465, this.shadowTargetY = this.pos.y) : this.pos.y == this.playerPos - 465 ? (this.pos.y = this.playerPos - 505, this.onRiver = !0, this.shadowTargetY =
                this.pos.y, this.yDiff = 505) : this.pos.y == this.playerPos - 505 ? (this.pos.y = this.playerPos - 585, this.onRiver = !1, this.shadowTargetY = this.pos.y, this.pos.x = 40 * Math.round(Math.round(this.pos.x / 40))) : this.pos.y == this.playerPos - 585 && (this.pos.y = this.playerPos - 640, this.shadowTargetY = this.playerPos = this.pos.y);
            this.tutforward = !0
        },
        calculateZIndex: function() {
            this.pos.y == this.playerPos - 40 || this.pos.y == this.playerPos ? this.zIndex = 650 : this.pos.y == this.playerPos - 90 ? this.zIndex = 525 : this.pos.y == this.playerPos - 190 ? this.zIndex =
                450 : this.pos.y == this.playerPos - 240 ? this.zIndex = 325 : this.pos.y == this.playerPos - 340 ? this.zIndex = 150 : this.pos.y == this.playerPos - 415 ? this.zIndex = 75 : this.pos.y == this.playerPos - 465 || this.pos.y == this.playerPos - 505 ? this.zIndex = 25 : this.pos.y == this.playerPos - 585 && (this.zIndex = 15)
        },
        kill: function() {
            ig.game.restartEnabled = !0;
            ig.game.spawnEntity(EntityEndcontrol, 0, 0, {
                character: this.character,
                score: this.score
            });
            ig.game.saveCoinStats();
            var b = ig.game.getEntitiesByType(EntityShadow)[0];
            b && b.kill();
            this.parent()
        },
        check: function(b) {
            !0 !=
                ig.game.gamePause && (b instanceof EntityFoliage && (this.forwardBlocked = !0), b instanceof EntityFoliageCollision && (this.scoreStop = this.forwardBlocked = !0), b instanceof EntityFoliageCollisionLeft && (this.rightBlocked = !0), b instanceof EntityFoliageCollisionRight && (this.leftBlocked = !0))
        },
        lerp: function(b, c, d) {
            return (1 - d) * b + d * c
        },
        characterIdle: function() {
            "rabbit" == this.character ? this.currentAnim = this.anims.rabbitidle : "chicken" == this.character ? this.currentAnim = this.anims.chickenidle : "panda" == this.character ? this.currentAnim =
                this.anims.pandaidle : "pig" == this.character ? this.currentAnim = this.anims.pigidle : "tiger" == this.character && (this.currentAnim = this.anims.tigeridle)
        }
    });
    EntityShadow = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/shadow.png", 35, 14),
        zIndex: 11,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("shadow", 1, [0]);
            this.currentAnim = this.anims.shadow
        }
    });
    EntityPlayerDeath = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/death.png", 62.8, 59),
        size: {
            x: 62.8,
            y: 59
        },
        zIndex: 1,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            b = ig.game.getEntitiesByType("EntityPlayer")[0];
            this.score = b.score;
            "rabbit" == b.character ? this.addAnim("rabbitdead", 1, [0]) : "panda" == b.character ? this.addAnim("pandadead", 1, [1]) : "chicken" == b.character ? this.addAnim("chickendead", 1, [2]) : "tiger" == b.character ? this.addAnim("tigerdead", 1, [3]) : "pig" == b.character && this.addAnim("pigdead", 1, [4])
        }
    });
    EntityParticle = ig.Entity.extend({
        maxVel: {
            x: 160,
            y: 200
        },
        lifetime: 0.5,
        fadetime: 0.5,
        vel: {
            x: 40,
            y: 50
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/particle.png", 6, 6),
        gravityFactor: 1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.vel.x *= 4 * Math.random() - 1;
            this.vel.y = -70;
            this.idleTimer = new ig.Timer;
            b = Math.floor(3 * Math.random());
            this.addAnim("grass", 0.2, [b]);
            b = Math.round(3 * Math.random()) + 5;
            this.addAnim("road", 0.2, [b]);
            b = Math.floor(2 * Math.random()) + 3;
            this.addAnim("water", 0.2, [b]);
            this.currentAnim = this.anims.road
        },
        update: function() {
            !0 != ig.game.gamePause && (this.idleTimer.delta() > this.lifetime ? this.kill() :
                (this.currentAnim.alpha = this.idleTimer.delta().map(this.lifetime - this.fadetime, this.lifetime, 1, 0), this.parent()))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.platform").requires("impact.entity").defines(function() {
    EntityPlatform = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/tileset/platform.png", 80, 70),
        size: {
            x: 80,
            y: 70
        },
        xdirArray: [-1, 1],
        xdir: -1,
        speed: 200,
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.A,
        zIndex: 10,
        onPlatform: !1,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0]);
            this.xdir = this.xdirArray[Math.floor(Math.random() * this.xdirArray.length)]
        },
        update: function() {
            if (!0 !=
                ig.game.gamePause) {
                var b = ig.game.getEntitiesByType(EntityPlayer)[0];
                this.vel.x = this.speed * this.xdir; - 1 == this.xdir && this.pos.x < -this.size.x && (this.pos.x = ig.system.width);
                1 == this.xdir && this.pos.x > ig.system.width && (this.pos.x = -this.size.x);
                b && (-320 >= b.pos.y - this.pos.y && this.kill(), !0 == b.onRiver && (!0 == this.onPlatform ? this.onPlatform = !1 : !1 == this.onPlatform && (b.kill(), ig.soundHandler.sfxPlayer.play("splash"))));
                this.parent()
            }
        },
        check: function(b) {
            !0 != ig.game.gamePause && b instanceof EntityPlayer && (this.onPlatform = !0, "rabbit" == b.character ? b.pos.x = this.pos.x + 24 : "chicken" == b.character ? b.pos.x = this.pos.x + 24 : "panda" == b.character ? b.pos.x = this.pos.x + 24 : "pig" == b.character ? b.pos.x = this.pos.x + 24 : "tiger" == b.character && (b.pos.x = this.pos.x + 24))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.foliage").requires("impact.entity").defines(function() {
    EntityFoliage = ig.Entity.extend({
        size: {
            x: 108.2,
            y: 122
        },
        offset: {
            x: 0,
            y: 0
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/trees.png", 108.2, 122),
        treeName: null,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        group: null,
        treeNum: 0,
        spread: 0,
        numOfTrees: null,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("tree1", 1, [0]);
            this.addAnim("tree2", 1, [1]);
            this.addAnim("tree3", 1, [2]);
            this.addAnim("tree4", 1, [3]);
            this.addAnim("tree5", 1, [4]);
            this.addAnim("matrioska1", 1, [5]);
            this.addAnim("matrioska2", 1, [6]);
            this.addAnim("suporter1", 1, [7]);
            this.addAnim("suporter2", 1, [8]);
            this.addAnim("building1", 1, [10]);
            this.addAnim("building2", 1, [11]);
            this.addAnim("building3", 1, [12]);
            this.scaley = this.scalex = 1;
            this.index_x = 0.009;
            this.index_y = 0.0091;
            this.foliageSelect();
            if ("tree2" == this.treeName || "tree5" == this.treeName) this.col = ig.game.spawnEntity(EntityFoliageCollision, this.pos.x - 5, this.pos.y + 50, {
                    size: {
                        x: 45,
                        y: 35
                    }
                }), this.colr =
                ig.game.spawnEntity(EntityFoliageCollisionRight, this.pos.x + 25, this.pos.y + 10, {
                    size: {
                        x: 45,
                        y: 35
                    }
                }), this.coll = ig.game.spawnEntity(EntityFoliageCollisionLeft, this.pos.x - 20, this.pos.y + 10, {
                    size: {
                        x: 45,
                        y: 35
                    }
                });
            if ("matrioska1" == this.treeName || "matrioska2" == this.treeName) this.col = ig.game.spawnEntity(EntityFoliageCollision, this.pos.x, this.pos.y + 50, {
                size: {
                    x: 80,
                    y: 35
                }
            }), this.colr = ig.game.spawnEntity(EntityFoliageCollisionRight, this.pos.x + 25, this.pos.y + 10, {
                size: {
                    x: 80,
                    y: 35
                }
            }), this.coll = ig.game.spawnEntity(EntityFoliageCollisionLeft,
                this.pos.x - 25, this.pos.y + 10, {
                    size: {
                        x: 80,
                        y: 35
                    }
                })
        },
        foliageSelect: function() {
            1 == this.group && (this.rand = Math.floor(4 * Math.random()) + 1, 1 == this.rand ? (this.treeName = "tree2", this.currentAnim = this.anims.tree2, this.size.x = 40, this.size.y = 35, this.offset.x = 35, this.offset.y = 85) : 2 == this.rand ? (this.treeName = "tree5", this.currentAnim = this.anims.tree5, this.size.x = 40, this.size.y = 35, this.offset.x = 52, this.offset.y = 85) : 3 == this.rand ? (this.treeName = "matrioska1", this.currentAnim = this.anims.matrioska1, this.size.x = 80, this.size.y =
                35, this.offset.x = 20, this.offset.y = 85) : 4 == this.rand && (this.treeName = "matrioska2", this.currentAnim = this.anims.matrioska2, this.size.x = 80, this.size.y = 40, this.offset.x = 30, this.offset.y = 85), this.treeNum < this.numOfTrees && (this.calculateSpread(this.numOfTrees), ig.game.spawnEntity(EntityFoliage, this.pos.x + this.size.x * this.spread, this.pos.y, {
                zIndex: this.zIndex,
                group: this.group,
                treeNum: this.treeNum + 1,
                numOfTrees: this.numOfTrees
            })));
            2 == this.group && ("tree1" == this.treeName ? (this.size.x = 75, this.size.y = 75, this.offset.x =
                    10, this.offset.y = 95, this.currentAnim = this.anims.tree1, this.treeNum < this.numOfTrees && (this.spread = 4, ig.game.spawnEntity(EntityFoliage, this.pos.x + 80 * this.spread, this.pos.y, {
                        zIndex: this.zIndex,
                        group: this.group,
                        treeNum: this.treeNum + 1,
                        numOfTrees: this.numOfTrees,
                        treeName: "tree1"
                    })), ig.game.spawnEntity(EntityTreeCollition, this.pos.x, this.pos.y, {
                        size: {
                            x: this.size.x,
                            y: this.size.y
                        }
                    })) : "tree3" == this.treeName ? (this.size.x = 50, this.size.y = 75, this.offset.x = 50, this.offset.y = 95, this.currentAnim = this.anims.tree3, this.treeNum <
                    this.numOfTrees && (this.spread = 3, ig.game.spawnEntity(EntityFoliage, this.pos.x + 80 * this.spread, this.pos.y, {
                        zIndex: this.zIndex,
                        group: this.group,
                        treeNum: this.treeNum + 1,
                        numOfTrees: this.numOfTrees,
                        treeName: "tree3"
                    })), ig.game.spawnEntity(EntityTreeCollition, this.pos.x, this.pos.y, {
                        size: {
                            x: this.size.x,
                            y: this.size.y
                        }
                    })) : "tree4" == this.treeName ? (this.size.x = 80, this.size.y = 75, this.offset.x = 30, this.offset.y = 95, this.currentAnim = this.anims.tree4, this.treeNum < this.numOfTrees && (this.spread = 4, ig.game.spawnEntity(EntityFoliage,
                    this.pos.x + 80 * this.spread, this.pos.y, {
                        zIndex: this.zIndex,
                        group: this.group,
                        treeNum: this.treeNum + 1,
                        numOfTrees: this.numOfTrees,
                        treeName: "tree4"
                    })), ig.game.spawnEntity(EntityTreeCollition, this.pos.x, this.pos.y, {
                    size: {
                        x: this.size.x,
                        y: this.size.y
                    }
                })) : "suporter1" == this.treeName ? (this.vel.x = 50, this.pos.y -= 60, this.size.x = 80, this.size.y = 75, this.offset.x = 30, this.offset.y = 30, this.currentAnim = this.anims.suporter1, this.treeNum < this.numOfTrees && (this.spread = 2, ig.game.spawnEntity(EntityFoliage, this.pos.x + 80 * this.spread,
                    this.pos.y, {
                        zIndex: this.zIndex,
                        group: this.group,
                        treeNum: this.treeNum + 1,
                        numOfTrees: this.numOfTrees,
                        treeName: "tree4"
                    }))) : "suporter2" == this.treeName ? (this.vel.x = -50, this.pos.y -= 60, this.size.x = 80, this.size.y = 75, this.offset.x = 30, this.offset.y = 30, this.currentAnim = this.anims.suporter2, this.treeNum < this.numOfTrees && (this.spread = 3, ig.game.spawnEntity(EntityFoliage, this.pos.x + 80 * this.spread, this.pos.y, {
                    zIndex: this.zIndex,
                    group: this.group,
                    treeNum: this.treeNum + 1,
                    numOfTrees: this.numOfTrees,
                    treeName: "tree4"
                }))) :
                "building1" == this.treeName ? (this.size.x = 80, this.size.y = 75, this.offset.x = 10, this.offset.y = 95, this.currentAnim = this.anims.building1, this.treeNum < this.numOfTrees && (this.spread = 4, ig.game.spawnEntity(EntityFoliage, this.pos.x + 80 * this.spread, this.pos.y, {
                    zIndex: this.zIndex,
                    group: this.group,
                    treeNum: this.treeNum + 1,
                    numOfTrees: this.numOfTrees,
                    treeName: "building3"
                })), ig.game.spawnEntity(EntityTreeCollition, this.pos.x, this.pos.y, {
                    size: {
                        x: this.size.x,
                        y: this.size.y
                    }
                })) : "building2" == this.treeName ? (this.size.x = 100,
                    this.size.y = 75, this.offset.x = 10, this.offset.y = 95, this.currentAnim = this.anims.building2, this.treeNum < this.numOfTrees && (this.spread = 2, ig.game.spawnEntity(EntityFoliage, this.pos.x + 80 * this.spread, this.pos.y, {
                        zIndex: this.zIndex,
                        group: this.group,
                        treeNum: this.treeNum + 1,
                        numOfTrees: this.numOfTrees,
                        treeName: "building2"
                    }))) : "building3" == this.treeName && (this.size.x = 60, this.size.y = 75, this.offset.x = 40, this.offset.y = 95, this.currentAnim = this.anims.building3, this.treeNum < this.numOfTrees && (this.spread = 4, ig.game.spawnEntity(EntityFoliage,
                    this.pos.x + 80 * this.spread, this.pos.y, {
                        zIndex: this.zIndex,
                        group: this.group,
                        treeNum: this.treeNum + 1,
                        numOfTrees: this.numOfTrees,
                        treeName: "building1"
                    })), ig.game.spawnEntity(EntityTreeCollition, this.pos.x, this.pos.y, {
                    size: {
                        x: this.size.x,
                        y: this.size.y
                    }
                })))
        },
        update: function() {
            if (!0 != ig.game.gamePause) {
                var b = ig.game.getEntitiesByType(EntityPlayer)[0];
                b && -400 >= b.pos.y - this.pos.y && this.kill();
                this.parent();
                0 != this.vel.x && (0 > this.pos.x + this.size.x && (this.vel.x = 50), 480 < this.pos.x && (this.vel.x = -50));
                if ("suporter1" ==
                    this.treeName || "suporter2" == this.treeName) {
                    this.scalex += this.index_x;
                    this.scaley += this.index_y;
                    this.setScale(this.scalex, this.scaley);
                    if (1.05 < this.scalex || 0.95 > this.scalex) this.index_x *= -1;
                    if (1.05 < this.scaley || 0.95 > this.scaley) this.index_y *= -1
                }
            }
        },
        calculateSpread: function(b) {
            4 == b ? this.spread = 2 : 3 == b ? this.spread = 3 : 2 == b ? this.spread = 4 : 1 == b && (this.spread = 5)
        },
        check: function(b) {
            if (b instanceof EntityPlayer && ("suporter1" == this.treeName || "suporter2" == this.treeName)) ig.game.spawnEntity(EntityPlayerDeath, b.pos.x,
                b.pos.y - 30, {
                    zIndex: 1
                }), ig.soundHandler.sfxPlayer.play("splat"), b.kill();
            if (b instanceof EntityTreeCollition && ("suporter1" == this.treeName || "suporter2" == this.treeName)) this.vel.x *= -1
        },
        draw: function() {
            this.parent()
        }
    });
    EntityTreeCollition = ig.Entity.extend({
        offset: {
            x: 0,
            y: 0
        },
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.B,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            this.parent()
        }
    });
    EntityFoliageCollision = ig.Entity.extend({
        offset: {
            x: 0,
            y: 0
        },
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            if (!0 != ig.game.gamePause) {
                var b = ig.game.getEntitiesByType(EntityPlayer)[0];
                b && -400 >= b.pos.y - this.pos.y && this.kill();
                this.parent()
            }
        }
    });
    EntityFoliageCollisionRight = ig.Entity.extend({
        offset: {
            x: 0,
            y: 0
        },
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            if (!0 != ig.game.gamePause) {
                var b = ig.game.getEntitiesByType(EntityPlayer)[0];
                b && -400 >= b.pos.y - this.pos.y &&
                    this.kill();
                this.parent()
            }
        }
    });
    EntityFoliageCollisionLeft = ig.Entity.extend({
        offset: {
            x: 0,
            y: 0
        },
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        update: function() {
            if (!0 != ig.game.gamePause) {
                var b = ig.game.getEntitiesByType(EntityPlayer)[0];
                b && -400 >= b.pos.y - this.pos.y && this.kill();
                this.parent()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.coin").requires("impact.entity").defines(function() {
    EntityCoin = ig.Entity.extend({
        size: {
            x: 54,
            y: 98
        },
        coinwshadowAnimSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/coinss.png", 54, 98),
        coinwshadowAnimSheetBlue: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/coinss2.png", 54, 98),
        coinwshadowAnimSheetChoco: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/coinss3.png", 54, 98),
        coinwoshadowAnimSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/coinws.png", 54, 98),
        coinwoshadowAnimSheetBlue: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/coinws2.png",
            54, 98),
        coinwoshadowAnimSheetChoco: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/coinws3.png", 54, 98),
        type: ig.Entity.TYPE.A,
        checkAgainst: ig.Entity.TYPE.A,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.zIndex = 600;
            this.rand = Math.floor(3 * Math.random()) + 1;
            1 == this.rand ? (this.anims.coin = new ig.Animation(this.coinwshadowAnimSheet, 0.1, [0, 1, 2, 3]), this.anims.coinws = new ig.Animation(this.coinwoshadowAnimSheet, 0.1, [0, 1, 2, 3])) : 2 == this.rand ? (this.anims.coin = new ig.Animation(this.coinwshadowAnimSheetBlue,
                0.1, [0, 1, 2, 3]), this.anims.coinws = new ig.Animation(this.coinwoshadowAnimSheetBlue, 0.1, [0, 1, 2, 3])) : (this.anims.coin = new ig.Animation(this.coinwshadowAnimSheetChoco, 0.1, [0, 1, 2, 3]), this.anims.coinws = new ig.Animation(this.coinwoshadowAnimSheetChoco, 0.1, [0, 1, 2, 3]));
            this.pos.y -= 40;
            this.currentAnim = this.anims.coin;
            this.setScale(0.75, 0.75)
        },
        check: function(b) {
            !0 != ig.game.gamePause && b instanceof EntityPlayer && (_idom++, ___s_(), ig.game.coinCollected++, ig.soundHandler.sfxPlayer.play("coin"), ig.game.saveCoinStats(), this.checkAgainst =
                ig.Entity.TYPE.NONE, this.currentAnim = this.anims.coinws, this.zIndex = 999, this.idleTimer = new ig.Timer)
        },

        update: function() {
            if (!0 != ig.game.gamePause) {
                this.checkAgainst == ig.Entity.TYPE.NONE && (this.pos.y -= 3, this.currentAnim.alpha = this.idleTimer.delta().map(0, 0.5, 1, 0), 0.5 < this.idleTimer.delta() && this.kill());
                var b = ig.game.getEntitiesByType(EntityPlayer)[0];
                b && b && -640 >= b.pos.y - this.pos.y && this.kill();
                this.parent()
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.vehicle").requires("impact.entity").defines(function() {
    EntityVehicle = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/vehicles/vehicles.png", 223.75, 115),
        size: {
            x: 200,
            y: 55
        },
        offset: {
            x: 0,
            y: 50
        },
        speed: null,
        maxVel: {
            x: 5E3,
            y: 300
        },
        vehicleName: null,
        vehicleSpawnPos: [130, 195, 260, 345, 410, 500],
        flip: !1,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        xdir: null,
        gravityFactor: 0,
        directionStatus: !0,
        tscore: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("car1",
                1, [0]);
            this.addAnim("car2", 1, [1]);
            this.addAnim("car3", 1, [2]);
            this.addAnim("car4", 1, [3]);
            this.addAnim("car5", 1, [4]);
            this.addAnim("car6", 1, [5]);
            this.addAnim("car7", 1, [6]);
            this.addAnim("car7rev", 1, [9]);
            this.addAnim("car8", 1, [7]);
            this.addAnim("car9", 1, [8]);
            this.addAnim("car10", 1, [10]);
            this.addAnim("car11", 1, [11]);
            this.addAnim("car12", 1, [12]);
            this.addAnim("car13", 1, [13]);
            this.addAnim("car14", 1, [14]); - 1 == this.xdir ? this.flip = !1 : 1 == this.xdir && (this.flip = !0);
            this.vehicleSelect()
        },
        update: function() {
            !0 != ig.game.gamePause &&
                (1 == this.xdir && "car7" == this.vehicleName ? this.vel.x = this.speed * this.xdir * ig.game.addspeed : (this.vel.x = this.speed * this.xdir * ig.game.addspeed, this.currentAnim.flip.x = this.flip), this.pos.x <= 0 - this.size.x && -1 == this.xdir && this.kill(), 480 <= this.pos.x && 1 == this.xdir && this.kill(), this.parent())
        },
        vehicleSelect: function() {
            "car1" == this.vehicleName ? (this.size.x = 200, this.size.y = 45, !1 == this.flip && (this.offset.x = 15, this.offset.y = 50), !0 == this.flip && (this.offset.x = 10, this.offset.y = 50), this.currentAnim = this.anims.car1) :
                "car2" == this.vehicleName ? (this.size.x = 200, this.size.y = 55, !1 == this.flip && (this.offset.x = 15, this.offset.y = 50), !0 == this.flip && (this.offset.x = 10, this.offset.y = 50), this.currentAnim = this.anims.car2) : "car3" == this.vehicleName ? (this.size.x = 80, this.size.y = 55, !1 == this.flip && (this.offset.x = 75, this.offset.y = 50), !0 == this.flip && (this.offset.x = 70, this.offset.y = 50), this.currentAnim = this.anims.car3) : "car4" == this.vehicleName ? (this.size.x = 100, this.size.y = 55, !1 == this.flip && (this.offset.x = 65, this.offset.y = 53), !0 == this.flip &&
                    (this.offset.x = 60, this.offset.y = 53), this.currentAnim = this.anims.car4) : "car5" == this.vehicleName ? (this.size.x = 115, this.size.y = 46, !1 == this.flip && (this.offset.x = 65, this.offset.y = 60), !0 == this.flip && (this.offset.x = 45, this.offset.y = 60), this.currentAnim = this.anims.car5) : "car6" == this.vehicleName ? (this.size.x = 115, this.size.y = 55, this.flip ? (this.offset.x = 50, this.offset.y = 50) : (this.offset.x = 60, this.offset.y = 50, this.currentAnim = this.anims.car6)) : "car7" == this.vehicleName ? (this.size.x = 200, this.size.y = 55, !1 == this.flip &&
                    (this.offset.x = 15, this.offset.y = 55, this.currentAnim = this.anims.car7), !0 == this.flip && (this.offset.x = 10, this.offset.y = 55, this.currentAnim = this.anims.car7rev)) : "car8" == this.vehicleName ? (this.size.x = 200, this.size.y = 67, !1 == this.flip && (this.offset.x = 15, this.offset.y = 40), !0 == this.flip && (this.offset.x = 10, this.offset.y = 40), this.currentAnim = this.anims.car8) : "car9" == this.vehicleName ? (this.size.x = 200, this.size.y = 67, !1 == this.flip && (this.offset.x = 15, this.offset.y = 40), !0 == this.flip && (this.offset.x = 10, this.offset.y =
                    40), this.currentAnim = this.anims.car9) : "car10" == this.vehicleName ? (this.size.x = 120, this.size.y = 55, !1 == this.flip && (this.offset.x = 55, this.offset.y = 50), !0 == this.flip && (this.offset.x = 45, this.offset.y = 50), this.currentAnim = this.anims.car10) : "car11" == this.vehicleName ? (this.size.x = 200, this.size.y = 67, !1 == this.flip && (this.offset.x = 15, this.offset.y = 40), !0 == this.flip && (this.offset.x = 10, this.offset.y = 40), this.currentAnim = this.anims.car11) : "car12" == this.vehicleName ? (this.size.x = 120, this.size.y = 55, !1 == this.flip &&
                    (this.offset.x = 55, this.offset.y = 50), !0 == this.flip && (this.offset.x = 45, this.offset.y = 50), this.currentAnim = this.anims.car12) : "car13" == this.vehicleName ? (this.size.x = 120, this.size.y = 55, !1 == this.flip && (this.offset.x = 55, this.offset.y = 50), !0 == this.flip && (this.offset.x = 45, this.offset.y = 50), this.currentAnim = this.anims.car13) : "car14" == this.vehicleName && (this.size.x = 120, this.size.y = 55, !1 == this.flip && (this.offset.x = 55, this.offset.y = 50), !0 == this.flip && (this.offset.x = 45, this.offset.y = 50), this.currentAnim = this.anims.car14)
        },
        check: function(b) {
            !0 != ig.game.gamePause && b instanceof EntityPlayer && (ig.game.spawnEntity(EntityPlayerDeath, b.pos.x, b.pos.y - 30, {
                zIndex: 1
            }), ig.soundHandler.sfxPlayer.play("splat"), b.kill())
        }
    })
});
ig.baked = !0;
ig.module("game.entities.endcontrol").requires("impact.entity").defines(function() {
    EntityEndcontrol = ig.Entity.extend({
        gameOverImage: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/gameover.png"),
        restartGameRect: {
            x: 178,
            y: 304,
            w: 125,
            h: 80
        },
        backToHomeRect: {
            x: 98,
            y: 338,
            w: 43,
            h: 40
        },
        shopRect: {
            x: 328,
            y: 330,
            w: 43,
            h: 40
        },
        character: null,
        score: null,
        zIndex: 1E5,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.delayTimer = new ig.Timer(1);
            ig.game.spawnEntity(EntityPointer, this.pos.x, this.pos.y);
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.targetScreen = -650;
            this.targetText = -350;
            ig.soundHandler.sfxPlayer.play("whoosh");
            this.soundPlay = this.buttonPressed = this.backPressed = this.shopPressed = this.restartPressed = !1;
            this.buttonDelay = new ig.Timer;
            _s1 = d.score;
            ___s_();
            var cc = ig.game.coinCollected;
            this.saveResult(d.score, cc);
        },
        saveResult: function(s, c) {
        	var __p = (window.location !== window.parent.location ? parent._p : _p);        	
            $.post(__p, {points:s, coins: c}, function(data, status) {
                if (window.location !== window.parent.location) {
                    parent.document.location = data.redirect;
                }
                else{
                    document.location = data.redirect;
                }
            });
        },
        draw: function() {
            if (!0 != ig.game.gamePause) {
                this.parent();
                if (0.2 <= this.delayTimer.delta()) {
                    this.gameOverImage.draw(this.targetScreen = this.lerp(this.targetScreen, -83, 0.2), 234);
                    var b = ig.game.getEntitiesByType(EntityPlayButtonEnd)[0];
                    b && !1 ==
                        this.buttonPressed && (b.pos.x = this.lerp(b.pos.x, 178, 0.2));
                    if ((b = ig.game.getEntitiesByType(EntityBackButtonEnd)[0]) && !1 == this.buttonPressed) b.pos.x = this.lerp(b.pos.x, 98, 0.2)
                } - 450 < this.targetScreen && (this.targetText = this.lerp(this.targetText, 240, 0.22), this.context = ig.system.context, this.context.font = "40pt WorldsAtWar BB", this.context.textAlign = "center", this.context.fillStyle = "#ffffff", this.context.fillText(_STRINGS.PetHop.TryAgain, this.targetText, 330))
            }
        },
        aabbCheck: function(b, c) {
            return b.x + b.w > c.x && b.x <
                c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkMainClicks: function() {
            if (ig.input.pressed("click")) {
                this.pointer.refreshPos();
                var b = {};
                b.x = this.pointer.pos.x;
                b.y = this.pointer.pos.y;
                b.w = this.pointer.size.x;
                b.h = this.pointer.size.y;
                if (this.aabbCheck(b, this.restartGameRect)) {
                    var c = ig.game.getEntitiesByType(EntityPlayButtonEnd)[0];
                    c && (c.setScale(0.9, 0.9), this.buttonPressed = !0)
                }
                this.aabbCheck(b, this.shopRect);
                if (this.aabbCheck(b, this.backToHomeRect) && (c = ig.game.getEntitiesByType(EntityBackButtonEnd)[0])) c.setScale(0.9,
                    0.9), this.buttonPressed = !0
            }
            ig.input.released("click") && (b = {}, b.x = this.pointer.pos.x, b.y = this.pointer.pos.y, b.w = this.pointer.size.x, b.h = this.pointer.size.y, this.aabbCheck(b, this.restartGameRect) ? (this.buttonDelay.reset(), (c = ig.game.getEntitiesByType(EntityPlayButtonEnd)[0]) && c.setScale(1, 1), this.restartPressed = !0) : (this.restartPressed = !1, (c = ig.game.getEntitiesByType(EntityPlayButtonEnd)[0]) && c.setScale(1, 1)), this.aabbCheck(b, this.backToHomeRect) ? (this.buttonDelay.reset(), (c = ig.game.getEntitiesByType(EntityBackButtonEnd)[0]) &&
                c.setScale(1, 1), this.backPressed = !0) : (this.backPressed = !1, (c = ig.game.getEntitiesByType(EntityBackButtonEnd)[0]) && c.setScale(1, 1)), this.aabbCheck(b, this.shopRect) && this.buttonDelay.reset())
        },
        update: function() {
            !1 == this.soundPlay && 0 <= this.delayTimer.delta() && (ig.soundHandler.sfxPlayer.play("whoosh"), this.soundPlay = !0)
        },
        lerp: function(b, c, d) {
            return (1 - d) * b + d * c
        }
    });
    EntityPlayButtonEnd = ig.Entity.extend({
        size: {
            x: 123,
            y: 87
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/playbtn.png", 123, 87),
        zIndex: 100001,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    });
    EntityBackButtonEnd = ig.Entity.extend({
        size: {
            x: 51,
            y: 50
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/backbtn.png", 51, 50),
        zIndex: 100001,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    });
    EntityShopButtonEnd = ig.Entity.extend({
        size: {
            x: 50,
            y: 60
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/shop.png", 50, 60),
        zIndex: 100001,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b,
                c, d);
            this.addAnim("idle", 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.shop").requires("impact.entity").defines(function() {
    EntityShop = ig.Entity.extend({
        backToGameRect: {
            x: 22,
            y: 25,
            w: 50,
            h: 50
        },
        previousRect: {
            x: 30,
            y: 285,
            w: 40,
            h: 68
        },
        nextRect: {
            x: 410,
            y: 285,
            w: 40,
            h: 68
        },
        selectRect: {
            x: 167,
            y: 500,
            w: 156,
            h: 65
        },
        lockedChicken: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/characters/chickenlocked.png"),
        lockedPanda: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/characters/pandalocked.png"),
        lockedPig: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/characters/piglocked.png"),
        lockedTiger: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/characters/tigerlocked.png"),
        unlockedRabbit: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/characters/rabbit.png"),
        unlockedChicken: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/characters/chicken.png"),
        unlockedPanda: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/characters/panda.png"),
        unlockedPig: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/characters/pig.png"),
        unlockedTiger: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/characters/tiger.png"),
        coinUI: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/coinui.png"),
        selectUI: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/selectui.png"),
        lockUI: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/lock.png"),
        character: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.midX = 190;
            this.midY = 200;
            this.rightX = 290;
            this.rightY = 255;
            this.leftX = 90;
            this.leftY = 255;
            this.outerRight1 = 490;
            this.outerRight2 = 690;
            this.outerRight3 = 890;
            this.outerLeft1 = -110;
            this.outerLeft2 = -310;
            this.outerLeft3 = -510;
            this.midPos0 = !0;
            this.midPos1 = this.leftPos0 = this.rightPos0 = !1;
            this.rightPos1 = !0;
            this.leftPos4 = this.rightPos4 = this.midPos4 = this.leftPos3 = this.rightPos3 = this.midPos3 = this.leftPos2 = this.rightPos2 = this.midPos2 = this.leftPos1 = !1;
            this.posX0 =
                this.midX;
            this.posY0 = this.midY;
            this.posX1 = this.rightX;
            this.posY1 = this.rightY;
            this.posX2 = this.outerRight1;
            this.posY2 = this.rightY;
            this.posX3 = this.outerRight2;
            this.posY3 = this.rightY;
            this.posX4 = this.outerRight3;
            this.posY4 = this.rightY;
            this.scrollableLeft = !0;
            this.scrollableRight = !1;
            ig.game.getUnlockedCharacter();
            ig.game.spawnEntity(EntityBackButtonShop, 22, 25);
            ig.game.spawnEntity(EntitySelectButtonShop, 167, 500);
            ig.game.spawnEntity(EntityLeftButtonShop, 30, 285);
            ig.game.spawnEntity(EntityRightButtonShop, 410,
                285);
            this.rightPressed = this.leftPressed = this.selectPressed = this.backPressed = !1;
            this.buttonDelay = new ig.Timer;
            this.displayPrice = !0;
            ig.game.getSoundState();
            !1 == ig.game.soundMute ? ig.soundHandler.unmuteSFX(!0) : ig.soundHandler.muteAll(!0)
        },
        draw: function() {
            this.parent();
            this.context = ig.system.context;
            this.context.font = "36pt WorldsAtWar BB";
            this.context.textAlign = "center";
            this.context.fillStyle = "#ffffff";
            var b = _STRINGS.PetHop.Select,
                c = _STRINGS.PetHop.Unlock;
            !0 == this.midPos0 && (this.unlockedRabbit.draw(this.posX0 =
                this.lerp(this.posX0, this.midX, 0.5), this.posY0 = this.lerp(this.posY0, this.midY, 0.5)), this.context.fillText(b, 245, 545), this.displayPrice = !1);
            !0 == this.leftPos0 && this.unlockedRabbit.draw(this.posX0 = this.lerp(this.posX0, this.leftX, 0.5), this.posY0 = this.lerp(this.posY0, this.leftY, 0.5));
            !0 == this.rightPos0 && this.unlockedRabbit.draw(this.posX0 = this.lerp(this.posX0, this.rightX, 0.5), this.posY0 = this.lerp(this.posY0, this.rightY, 0.5));
            !1 == this.midPos0 && (!1 == this.leftPos0 && !1 == this.rightPos0) && this.unlockedRabbit.draw(this.posX0,
                this.posY0);
            !0 == this.midPos1 && 0 == ig.game.unlockedCharacter[1] ? (this.lockedChicken.draw(this.posX1 = this.lerp(this.posX1, this.midX, 0.5), this.posY1 = this.lerp(this.posY1, this.midY, 0.5)), this.context.fillText(c, 245, 545), this.displayPrice = !0) : !0 == this.midPos1 && 1 == ig.game.unlockedCharacter[1] && (this.unlockedChicken.draw(this.posX1 = this.lerp(this.posX1, this.midX, 0.5), this.posY1 = this.lerp(this.posY1, this.midY, 0.5)), this.context.fillText(b, 245, 545), this.displayPrice = !1);
            !0 == this.leftPos1 && 0 == ig.game.unlockedCharacter[1] ?
                this.lockedChicken.draw(this.posX1 = this.lerp(this.posX1, this.leftX, 0.5), this.posY1 = this.lerp(this.posY1, this.leftY, 0.5)) : !0 == this.leftPos1 && 1 == ig.game.unlockedCharacter[1] && this.unlockedChicken.draw(this.posX1 = this.lerp(this.posX1, this.leftX, 0.5), this.posY1 = this.lerp(this.posY1, this.leftY, 0.5));
            !0 == this.rightPos1 && 0 == ig.game.unlockedCharacter[1] ? this.lockedChicken.draw(this.posX1 = this.lerp(this.posX1, this.rightX, 0.5), this.posY1 = this.lerp(this.posY1, this.rightY, 0.5)) : !0 == this.rightPos1 && 1 == ig.game.unlockedCharacter[1] &&
                this.unlockedChicken.draw(this.posX1 = this.lerp(this.posX1, this.rightX, 0.5), this.posY1 = this.lerp(this.posY1, this.rightY, 0.5));
            !1 == this.midPos1 && (!1 == this.leftPos1 && !1 == this.rightPos1) && this.lockedChicken.draw(this.posX1, this.posY1);
            !0 == this.midPos2 && 0 == ig.game.unlockedCharacter[2] ? (this.lockedPanda.draw(this.posX2 = this.lerp(this.posX2, this.midX, 0.5), this.posY2 = this.lerp(this.posY2, this.midY, 0.5)), this.context.fillText(c, 245, 545), this.displayPrice = !0) : !0 == this.midPos2 && 1 == ig.game.unlockedCharacter[2] &&
                (this.unlockedPanda.draw(this.posX2 = this.lerp(this.posX2, this.midX, 0.5), this.posY2 = this.lerp(this.posY2, this.midY, 0.5)), this.context.fillText(b, 245, 545), this.displayPrice = !1);
            !0 == this.leftPos2 && 0 == ig.game.unlockedCharacter[2] ? this.lockedPanda.draw(this.posX2 = this.lerp(this.posX2, this.leftX, 0.5), this.posY2 = this.lerp(this.posY2, this.leftY, 0.5)) : !0 == this.leftPos2 && 1 == ig.game.unlockedCharacter[2] && this.unlockedPanda.draw(this.posX2 = this.lerp(this.posX2, this.leftX, 0.5), this.posY2 = this.lerp(this.posY2,
                this.leftY, 0.5));
            !0 == this.rightPos2 && 0 == ig.game.unlockedCharacter[2] ? this.lockedPanda.draw(this.posX2 = this.lerp(this.posX2, this.rightX, 0.5), this.posY2 = this.lerp(this.posY2, this.rightY, 0.5)) : !0 == this.rightPos2 && 1 == ig.game.unlockedCharacter[2] && this.unlockedPanda.draw(this.posX2 = this.lerp(this.posX2, this.rightX, 0.5), this.posY2 = this.lerp(this.posY2, this.rightY, 0.5));
            !1 == this.midPos2 && (!1 == this.leftPos2 && !1 == this.rightPos2) && this.lockedPanda.draw(this.posX2, this.posY2);
            !0 == this.midPos3 && 0 == ig.game.unlockedCharacter[3] ?
                (this.lockedPig.draw(this.posX3 = this.lerp(this.posX3, this.midX, 0.5), this.posY3 = this.lerp(this.posY3, this.midY, 0.5)), this.context.fillText(c, 245, 545), this.displayPrice = !0) : !0 == this.midPos3 && 1 == ig.game.unlockedCharacter[3] && (this.unlockedPig.draw(this.posX3 = this.lerp(this.posX3, this.midX, 0.5), this.posY3 = this.lerp(this.posY3, this.midY, 0.5)), this.context.fillText(b, 245, 545), this.displayPrice = !1);
            !0 == this.leftPos3 && 0 == ig.game.unlockedCharacter[3] ? this.lockedPig.draw(this.posX3 = this.lerp(this.posX3, this.leftX,
                0.5), this.posY3 = this.lerp(this.posY3, this.leftY, 0.5)) : !0 == this.leftPos3 && 1 == ig.game.unlockedCharacter[3] && this.unlockedPig.draw(this.posX3 = this.lerp(this.posX3, this.leftX, 0.5), this.posY3 = this.lerp(this.posY3, this.leftY, 0.5));
            !0 == this.rightPos3 && 0 == ig.game.unlockedCharacter[3] ? this.lockedPig.draw(this.posX3 = this.lerp(this.posX3, this.rightX, 0.5), this.posY3 = this.lerp(this.posY3, this.rightY, 0.5)) : !0 == this.rightPos3 && 1 == ig.game.unlockedCharacter[3] && this.unlockedPig.draw(this.posX3 = this.lerp(this.posX3,
                this.rightX, 0.5), this.posY3 = this.lerp(this.posY3, this.rightY, 0.5));
            !1 == this.midPos3 && (!1 == this.leftPos3 && !1 == this.rightPos3) && this.lockedPig.draw(this.posX3, this.posY3);
            !0 == this.midPos4 && 0 == ig.game.unlockedCharacter[4] ? (this.lockedTiger.draw(this.posX4 = this.lerp(this.posX4, this.midX, 0.5), this.posY4 = this.lerp(this.posY4, this.midY, 0.5)), this.context.fillText(c, 245, 545), this.displayPrice = !0) : !0 == this.midPos4 && 1 == ig.game.unlockedCharacter[4] && (this.unlockedTiger.draw(this.posX4 = this.lerp(this.posX4, this.midX,
                0.5), this.posY4 = this.lerp(this.posY4, this.midY, 0.5)), this.context.fillText(b, 245, 545), this.displayPrice = !1);
            !0 == this.leftPos4 && 0 == ig.game.unlockedCharacter[4] ? this.lockedTiger.draw(this.posX4 = this.lerp(this.posX4, this.leftX, 0.5), this.posY4 = this.lerp(this.posY4, this.leftY, 0.5)) : !0 == this.leftPos4 && 1 == ig.game.unlockedCharacter[4] && this.unlockedTiger.draw(this.posX4 = this.lerp(this.posX4, this.leftX, 0.5), this.posY4 = this.lerp(this.posY4, this.leftY, 0.5));
            !0 == this.rightPos4 && 0 == ig.game.unlockedCharacter[4] ?
                this.lockedTiger.draw(this.posX4 = this.lerp(this.posX4, this.rightX, 0.5), this.posY4 = this.lerp(this.posY4, this.rightY, 0.5)) : !0 == this.rightPos4 && 1 == ig.game.unlockedCharacter[4] && this.unlockedTiger.draw(this.posX4 = this.lerp(this.posX4, this.rightX, 0.5), this.posY4 = this.lerp(this.posY4, this.rightY, 0.5));
            !1 == this.midPos4 && (!1 == this.leftPos4 && !1 == this.rightPos4) && this.lockedTiger.draw(this.posX4, this.posY4);
            !0 == this.displayPrice && (this.coinUI.draw(200, 425), this.context.fillStyle = "#ffffff", this.context.fillText("150",
                260, 450));
            this.coinUI.draw(ig.system.width - 45, 35);
            this.context.textAlign = "right";
            this.context.fillStyle = "#ffffff";
            this.context.fillText(ig.game.coinCollected, 428, 60);
            this.context.textAlign = "center";
            !0 == this.midPos0 && !1 == this.displayPrice && (this.context.font = "45pt WorldsAtWar BB", this.context.fillStyle = "#ffffff", this.context.fillText(_STRINGS.PetHop.Rabbit, 240, 150));
            !0 == this.midPos1 && !1 == this.displayPrice && (this.context.font = "45pt WorldsAtWar BB", this.context.fillStyle = "#ffffff", this.context.fillText(_STRINGS.PetHop.Chicken,
                240, 150));
            !0 == this.midPos2 && !1 == this.displayPrice && (this.context.font = "45pt WorldsAtWar BB", this.context.fillStyle = "#ffffff", this.context.fillText(_STRINGS.PetHop.Panda, 240, 150));
            !0 == this.midPos3 && !1 == this.displayPrice && (this.context.font = "45pt WorldsAtWar BB", this.context.fillStyle = "#ffffff", this.context.fillText(_STRINGS.PetHop.Pig, 240, 150));
            !0 == this.midPos4 && !1 == this.displayPrice && (this.context.font = "45pt WorldsAtWar BB", this.context.fillStyle = "#ffffff", this.context.fillText(_STRINGS.PetHop.Tiger,
                240, 150));
            !0 == this.displayPrice && this.lockUI.draw(215, 125)
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        aabbCheck: function(b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkMainClicks: function() {
            if (ig.input.pressed("click")) {
                this.pointer.refreshPos();
                var b = {};
                b.x = this.pointer.pos.x;
                b.y = this.pointer.pos.y;
                b.w = this.pointer.size.x;
                b.h = this.pointer.size.y;
                if (this.aabbCheck(b, this.backToGameRect)) {
                    var c = ig.game.getEntitiesByType(EntityBackButtonShop)[0];
                    c && c.setScale(0.9, 0.9)
                }
                this.aabbCheck(b, this.selectRect) && (c = ig.game.getEntitiesByType(EntitySelectButtonShop)[0]) && c.setScale(0.9, 0.9);
                this.aabbCheck(b, this.previousRect) && (c = ig.game.getEntitiesByType(EntityLeftButtonShop)[0]) && c.setScale(0.9, 0.9);
                this.aabbCheck(b, this.nextRect) && (c = ig.game.getEntitiesByType(EntityRightButtonShop)[0]) && c.setScale(0.9, 0.9)
            }
            ig.input.released("click") && (this.pointer.refreshPos(), b = {}, b.x = this.pointer.pos.x, b.y = this.pointer.pos.y, b.w = this.pointer.size.x, b.h = this.pointer.size.y,
                this.aabbCheck(b, this.backToGameRect) ? (this.buttonDelay.reset(), (c = ig.game.getEntitiesByType(EntityBackButtonShop)[0]) && c.setScale(1, 1), this.backPressed = !0, ig.soundHandler.sfxPlayer.play("button")) : (this.backPressed = !1, (c = ig.game.getEntitiesByType(EntityBackButtonShop)[0]) && c.setScale(1, 1)), this.aabbCheck(b, this.previousRect) ? (this.buttonDelay.reset(), (c = ig.game.getEntitiesByType(EntityLeftButtonShop)[0]) && c.setScale(1, 1), this.leftPressed = !0, ig.soundHandler.sfxPlayer.play("button")) : (this.leftPressed = !1, (c = ig.game.getEntitiesByType(EntityLeftButtonShop)[0]) && c.setScale(1, 1)), this.aabbCheck(b, this.nextRect) ? (this.buttonDelay.reset(), (c = ig.game.getEntitiesByType(EntityRightButtonShop)[0]) && c.setScale(1, 1), this.rightPressed = !0, ig.soundHandler.sfxPlayer.play("button")) : (this.rightPressed = !1, (c = ig.game.getEntitiesByType(EntityRightButtonShop)[0]) && c.setScale(1, 1)), this.aabbCheck(b, this.selectRect) ? (this.buttonDelay.reset(), (c = ig.game.getEntitiesByType(EntitySelectButtonShop)[0]) && c.setScale(1, 1), this.selectPressed = !0, ig.soundHandler.sfxPlayer.play("button")) : (this.selectPressed = !1, (c = ig.game.getEntitiesByType(EntitySelectButtonShop)[0]) && c.setScale(1, 1)), ig.game.saveUnlockedCharacter(), ig.game.saveActiveCharacter(), ig.game.saveCoinStats())
        },
        update: function() {
            this.checkMainClicks();
            !0 == this.backPressed && 0.1 < this.buttonDelay.delta() && (ig.game.director.loadLevel(2), 2 == ig.game.director.currentLevel && (ig.game.spawnEntity(EntityWorld, 0, 0, {
                    zIndex: -1E3
                }), ig.game.spawnEntity(EntityPlayer, 240, 615, {
                    character: this.character
                })),
                this.backPressed = !1);
            !0 == this.leftPressed && 0.1 < this.buttonDelay.delta() && (!0 == this.scrollableRight && (this.scrollRight(), ig.game.getUnlockedCharacter()), this.leftPressed = !1);
            !0 == this.rightPressed && 0.1 < this.buttonDelay.delta() && (!0 == this.scrollableLeft && (this.scrollLeft(), ig.game.getUnlockedCharacter()), this.rightPressed = !1);
            !0 == this.selectPressed && 0.1 < this.buttonDelay.delta() && (!0 == this.midPos0 ? (this.character = "rabbit", ig.game.unlockedCharacter[0] = 1, ig.game.character = this.character, ig.game.saveUnlockedCharacter(),
                ig.game.saveActiveCharacter(), ig.game.saveCoinStats(), ig.game.director.loadLevel(2), 2 == ig.game.director.currentLevel && (ig.game.spawnEntity(EntityWorld, 0, 0, {
                    zIndex: -1E3
                }), ig.game.spawnEntity(EntityPlayer, 240, 615, {
                    character: this.character
                }))) : !0 == this.midPos1 ? (this.character = "chicken", ig.game.getCoinStats(), 0 == ig.game.unlockedCharacter[1] && 150 <= ig.game.coinCollected ? (ig.game.unlockedCharacter[1] = 1, ig.game.coinCollected -= 150, ig.soundHandler.sfxPlayer.play("purchase")) : 1 == ig.game.unlockedCharacter[1] &&
                (ig.game.character = this.character, ig.game.saveUnlockedCharacter(), ig.game.saveActiveCharacter(), ig.game.saveCoinStats(), ig.game.director.loadLevel(2), 2 == ig.game.director.currentLevel && (ig.game.spawnEntity(EntityWorld, 0, 0, {
                    zIndex: -1E3
                }), ig.game.spawnEntity(EntityPlayer, 240, 615, {
                    character: this.character
                })))) : !0 == this.midPos2 ? (this.character = "panda", ig.game.getCoinStats(), 0 == ig.game.unlockedCharacter[2] && 150 <= ig.game.coinCollected ? (ig.game.unlockedCharacter[2] = 1, ig.game.coinCollected -= 150, ig.soundHandler.sfxPlayer.play("purchase")) :
                1 == ig.game.unlockedCharacter[2] && (ig.game.character = this.character, ig.game.saveUnlockedCharacter(), ig.game.saveActiveCharacter(), ig.game.saveCoinStats(), ig.game.director.loadLevel(2), 2 == ig.game.director.currentLevel && (ig.game.spawnEntity(EntityWorld, 0, 0, {
                    zIndex: -1E3
                }), ig.game.spawnEntity(EntityPlayer, 240, 615, {
                    character: this.character
                })))) : !0 == this.midPos3 ? (this.character = "pig", ig.game.getCoinStats(), 0 == ig.game.unlockedCharacter[3] && 150 <= ig.game.coinCollected ? (ig.game.unlockedCharacter[3] = 1, ig.game.coinCollected -=
                150, ig.soundHandler.sfxPlayer.play("purchase")) : 1 == ig.game.unlockedCharacter[3] && (ig.game.character = this.character, ig.game.saveUnlockedCharacter(), ig.game.saveActiveCharacter(), ig.game.saveCoinStats(), ig.game.director.loadLevel(2), 2 == ig.game.director.currentLevel && (ig.game.spawnEntity(EntityWorld, 0, 0, {
                zIndex: -1E3
            }), ig.game.spawnEntity(EntityPlayer, 240, 615, {
                character: this.character
            })))) : !0 == this.midPos4 && (this.character = "tiger", ig.game.getCoinStats(), 0 == ig.game.unlockedCharacter[4] && 150 <= ig.game.coinCollected ?
                (ig.game.unlockedCharacter[4] = 1, ig.game.coinCollected -= 150, ig.soundHandler.sfxPlayer.play("purchase")) : 1 == ig.game.unlockedCharacter[4] && (ig.game.character = this.character, ig.game.saveUnlockedCharacter(), ig.game.saveActiveCharacter(), ig.game.saveCoinStats(), ig.game.director.loadLevel(2), 2 == ig.game.director.currentLevel && (ig.game.spawnEntity(EntityWorld, 0, 0, {
                    zIndex: -1E3
                }), ig.game.spawnEntity(EntityPlayer, 240, 615, {
                    character: this.character
                })))), this.selectPressed = !1)
        },
        lerp: function(b, c, d) {
            return (1 - d) *
                b + d * c
        },
        scrollLeft: function() {
            this.scrollableRight = !0;
            !0 == this.midPos0 ? (this.rightPos0 = this.midPos0 = !1, this.leftPos0 = !0) : !0 == this.rightPos0 ? (this.midPos0 = !0, this.leftPos0 = this.rightPos0 = !1) : !0 == this.leftPos0 ? (this.leftPos0 = this.rightPos0 = this.midPos0 = !1, this.posX0 = this.outerLeft1) : this.posX0 == this.outerLeft1 ? this.posX0 = this.outerLeft2 : this.posX0 == this.outerLeft2 ? this.posX0 = this.outerLeft3 : this.posX0 == this.outerRight3 ? this.posX0 = this.outerRight2 : this.posX0 == this.outerRight2 ? this.posX0 = this.outerRight1 :
                this.posX0 == this.outerRight1 && (this.posX0 = this.rightX, this.rightPos0 = !0);
            !0 == this.midPos1 ? (this.rightPos1 = this.midPos1 = !1, this.leftPos1 = !0) : !0 == this.rightPos1 ? (this.midPos1 = !0, this.leftPos1 = this.rightPos1 = !1) : !0 == this.leftPos1 ? (this.leftPos1 = this.rightPos1 = this.midPos1 = !1, this.posX1 = this.outerLeft1) : this.posX1 == this.outerLeft1 ? this.posX1 = this.outerLeft2 : this.posX1 == this.outerLeft2 ? this.posX1 = this.outerLeft3 : this.posX1 == this.outerRight3 ? this.posX1 = this.outerRight2 : this.posX1 == this.outerRight2 ? this.posX1 =
                this.outerRight1 : this.posX1 == this.outerRight1 && (this.posX1 = this.rightX, this.rightPos1 = !0);
            !0 == this.midPos2 ? (this.rightPos2 = this.midPos2 = !1, this.leftPos2 = !0) : !0 == this.rightPos2 ? (this.midPos2 = !0, this.leftPos2 = this.rightPos2 = !1) : !0 == this.leftPos2 ? (this.leftPos2 = this.rightPos2 = this.midPos2 = !1, this.posX2 = this.outerLeft1) : this.posX2 == this.outerLeft1 ? this.posX2 = this.outerLeft2 : this.posX2 == this.outerLeft2 ? this.posX2 = this.outerLeft3 : this.posX2 == this.outerRight3 ? this.posX2 = this.outerRight2 : this.posX2 == this.outerRight2 ?
                this.posX2 = this.outerRight1 : this.posX2 == this.outerRight1 && (this.posX2 = this.rightX, this.rightPos2 = !0);
            !0 == this.midPos3 ? (this.rightPos3 = this.midPos3 = !1, this.leftPos3 = !0) : !0 == this.rightPos3 ? (this.midPos3 = !0, this.leftPos3 = this.rightPos3 = !1) : !0 == this.leftPos3 ? (this.leftPos3 = this.rightPos3 = this.midPos3 = !1, this.posX3 = this.outerLeft1) : this.posX3 == this.outerLeft1 ? this.posX3 = this.outerLeft2 : this.posX3 == this.outerLeft2 ? this.posX3 = this.outerLeft3 : this.posX3 == this.outerRight3 ? this.posX3 = this.outerRight2 : this.posX3 ==
                this.outerRight2 ? this.posX3 = this.outerRight1 : this.posX3 == this.outerRight1 && (this.posX3 = this.rightX, this.rightPos3 = !0);
            !0 == this.midPos4 ? (this.rightPos4 = this.midPos4 = !1, this.leftPos4 = !0) : !0 == this.rightPos4 ? (this.midPos4 = !0, this.scrollableLeft = this.leftPos4 = this.rightPos4 = !1) : !0 == this.leftPos4 ? (this.leftPos4 = this.rightPos4 = this.midPos4 = !1, this.posX4 = this.outerLeft1) : this.posX4 == this.outerLeft1 ? this.posX4 = this.outerLeft2 : this.posX4 == this.outerLeft2 ? this.posX4 = this.outerLeft3 : this.posX4 == this.outerRight3 ?
                this.posX4 = this.outerRight2 : this.posX4 == this.outerRight2 ? this.posX4 = this.outerRight1 : this.posX4 == this.outerRight1 && (this.posX4 = this.rightX, this.rightPos4 = !0)
        },
        scrollRight: function() {
            this.scrollableLeft = !0;
            !0 == this.midPos0 ? (this.midPos0 = !1, this.rightPos0 = !0, this.leftPos0 = !1) : !0 == this.rightPos0 ? (this.leftPos0 = this.rightPos0 = this.midPos0 = !1, this.posX0 = this.outerRight1) : !0 == this.leftPos0 ? (this.midPos0 = !0, this.scrollableRight = this.leftPos0 = this.rightPos0 = !1) : this.posX0 == this.outerLeft3 ? this.posX0 = this.outerLeft2 :
                this.posX0 == this.outerLeft2 ? this.posX0 = this.outerLeft1 : this.posX0 == this.outerRight1 ? this.posX0 = this.outerRight2 : this.posX0 == this.outerRight2 ? this.posX0 = this.outerRight3 : this.posX0 == this.outerLeft1 && (this.posX0 = this.leftX, this.leftPos0 = !0);
            !0 == this.midPos1 ? (this.midPos1 = !1, this.rightPos1 = !0, this.leftPos1 = !1) : !0 == this.rightPos1 ? (this.leftPos1 = this.rightPos1 = this.midPos1 = !1, this.posX1 = this.outerRight1) : !0 == this.leftPos1 ? (this.midPos1 = !0, this.leftPos1 = this.rightPos1 = !1) : this.posX1 == this.outerLeft3 ? this.posX1 =
                this.outerLeft2 : this.posX1 == this.outerLeft2 ? this.posX1 = this.outerLeft1 : this.posX1 == this.outerRight1 ? this.posX1 = this.outerRight2 : this.posX1 == this.outerRight2 ? this.posX1 = this.outerRight3 : this.posX1 == this.outerLeft1 && (this.posX1 = this.leftX, this.leftPos1 = !0);
            !0 == this.midPos2 ? (this.midPos2 = !1, this.rightPos2 = !0, this.leftPos2 = !1) : !0 == this.rightPos2 ? (this.leftPos2 = this.rightPos2 = this.midPos2 = !1, this.posX2 = this.outerRight1) : !0 == this.leftPos2 ? (this.midPos2 = !0, this.leftPos2 = this.rightPos2 = !1) : this.posX2 == this.outerLeft3 ?
                this.posX2 = this.outerLeft2 : this.posX2 == this.outerLeft2 ? this.posX2 = this.outerLeft1 : this.posX2 == this.outerRight1 ? this.posX2 = this.outerRight2 : this.posX2 == this.outerRight2 ? this.posX2 = this.outerRight3 : this.posX2 == this.outerLeft1 && (this.posX2 = this.leftX, this.leftPos2 = !0);
            !0 == this.midPos3 ? (this.midPos3 = !1, this.rightPos3 = !0, this.leftPos3 = !1) : !0 == this.rightPos3 ? (this.leftPos3 = this.rightPos3 = this.midPos3 = !1, this.posX3 = this.outerRight1) : !0 == this.leftPos3 ? (this.midPos3 = !0, this.leftPos3 = this.rightPos3 = !1) : this.posX3 ==
                this.outerLeft3 ? this.posX3 = this.outerLeft2 : this.posX3 == this.outerLeft2 ? this.posX3 = this.outerLeft1 : this.posX3 == this.outerRight1 ? this.posX3 = this.outerRight2 : this.posX3 == this.outerRight2 ? this.posX3 = this.outerRight3 : this.posX3 == this.outerLeft1 && (this.posX3 = this.leftX, this.leftPos3 = !0);
            !0 == this.midPos4 ? (this.midPos4 = !1, this.rightPos4 = !0, this.leftPos4 = !1) : !0 == this.rightPos4 ? (this.leftPos4 = this.rightPos4 = this.midPos4 = !1, this.posX4 = this.outerRight1) : !0 == this.leftPos4 ? (this.midPos4 = !0, this.leftPos4 = this.rightPos4 = !1) : this.posX4 == this.outerLeft3 ? this.posX4 = this.outerLeft2 : this.posX4 == this.outerLeft2 ? this.posX4 = this.outerLeft1 : this.posX4 == this.outerRight1 ? this.posX4 = this.outerRight2 : this.posX4 == this.outerRight2 ? this.posX4 = this.outerRight3 : this.posX4 == this.outerLeft1 && (this.posX4 = this.leftX, this.leftPos4 = !0)
        }
    });
    EntityBackButtonShop = ig.Entity.extend({
        size: {
            x: 51,
            y: 50
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/backbtn.png", 51, 50),
        zIndex: 100001,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle",
                1, [0])
        }
    });
    EntitySelectButtonShop = ig.Entity.extend({
        size: {
            x: 156,
            y: 65
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/selectui.png", 156, 65),
        zIndex: 0,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    });
    EntityLeftButtonShop = ig.Entity.extend({
        size: {
            x: 46,
            y: 78
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/left.png", 46, 78),
        zIndex: 0,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    });
    EntityRightButtonShop = ig.Entity.extend({
        size: {
            x: 46,
            y: 78
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/right.png", 46, 78),
        zIndex: 0,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.backbutton").requires("impact.entity").defines(function() {
    EntityBackbutton = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/backbtn.png", 51, 50),
        gravityFactor: 0,
        zIndex: 9999,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pausecontrol").requires("impact.entity").defines(function() {
    EntityPausecontrol = ig.Entity.extend({
        gameOverImage: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/gameover.png"),
        restartGameRect: {
            x: 178,
            y: 304,
            w: 125,
            h: 80
        },
        backToHomeRect: {
            x: 98,
            y: 338,
            w: 43,
            h: 40
        },
        shopRect: {
            x: 328,
            y: 330,
            w: 43,
            h: 40
        },
        pauseGameRect: {
            x: 445,
            y: 600,
            w: 25,
            h: 25
        },
        character: null,
        score: null,
        zIndex: 1E5,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.game.spawnEntity(EntityPointer, this.pos.x, this.pos.y);
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
            this.targetScreen = -650;
            this.targetText = -350;
            ig.game.spawnEntity(EntityPlayButtonPause, -650, ig.game.screen.y + 304);
            ig.game.spawnEntity(EntityBackButtonPause, -748, ig.game.screen.y + 338);
            this.buttonPressed = this.backPressed = this.shopPressed = this.restartPressed = !1
        },
        draw: function() {
            this.parent();
            this.gameOverImage.draw(-83, 234);
            var b = ig.game.getEntitiesByType(EntityPlayButtonPause)[0];
            b && !1 == this.buttonPressed && (b.pos.x = 178);
            if ((b = ig.game.getEntitiesByType(EntityBackButtonPause)[0]) && !1 == this.buttonPressed) b.pos.x =
                98;
            this.targetText = 240;
            this.context = ig.system.context;
            this.context.font = "40pt WorldsAtWar BB";
            this.context.textAlign = "center";
            this.context.fillStyle = "#ffffff";
            this.context.fillText(_STRINGS.PetHop.Pause, this.targetText, 280)
        },
        aabbCheck: function(b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkMainClicks: function() {
            if (ig.input.pressed("click")) {
                this.pointer.refreshPos();
                var b = {};
                b.x = this.pointer.pos.x;
                b.y = this.pointer.pos.y;
                b.w = this.pointer.size.x;
                b.h = this.pointer.size.y;
                if (this.aabbCheck(b,
                        this.restartGameRect)) {
                    var c = ig.game.getEntitiesByType(EntityPlayButtonPause)[0];
                    c && (c.setScale(0.9, 0.9), this.buttonPressed = !0)
                }
                this.aabbCheck(b, this.shopRect);
                if (this.aabbCheck(b, this.backToHomeRect) && (c = ig.game.getEntitiesByType(EntityBackButtonPause)[0])) c.setScale(0.9, 0.9), this.buttonPressed = !0
            }
            ig.input.released("click") && (b = {}, b.x = this.pointer.pos.x, b.y = this.pointer.pos.y, b.w = this.pointer.size.x, b.h = this.pointer.size.y, this.aabbCheck(b, this.restartGameRect) ? ((c = ig.game.getEntitiesByType(EntityPlayButtonPause)[0]) &&
                c.setScale(1, 1), this.restartPressed = !0) : (this.restartPressed = !1, (c = ig.game.getEntitiesByType(EntityPlayButtonPause)[0]) && c.setScale(1, 1)), this.aabbCheck(b, this.backToHomeRect) ? ((c = ig.game.getEntitiesByType(EntityBackButtonPause)[0]) && c.setScale(1, 1), this.backPressed = !0) : (this.backPressed = !1, (c = ig.game.getEntitiesByType(EntityBackButtonPause)[0]) && c.setScale(1, 1)), this.aabbCheck(b, this.shopRect) || (this.shopPressed = !1))
        },
        update: function() {
            this.checkMainClicks();
            if (!0 == this.restartPressed) {
                ig.Timer.timeScale =
                    1;
                ig.game.getSoundState();
                !1 == ig.game.soundMute ? ig.soundHandler.unmuteAll(!0) : ig.soundHandler.muteAll(!0);
                ig.game.gamePause = !1;
                var b = ig.game.getEntitiesByType(EntityPlayButtonPause)[0];
                b && b.kill();
                (b = ig.game.getEntitiesByType(EntityBackButtonPause)[0]) && b.kill();
                this.kill();
                ig.soundHandler.sfxPlayer.play("button");
                this.restartPressed = !1
            }!0 == this.shopPressed && (ig.Timer.timeScale = 1, ig.game.gamePause = !1, ig.game.director.loadLevel(3), ig.soundHandler.sfxPlayer.play("button"), this.shopPressed = !1);
            !0 == this.backPressed &&
                (ig.Timer.timeScale = 1, ig.game.gamePause = !1, ig.game.director.loadLevel(1), ig.soundHandler.sfxPlayer.play("button"), this.backPressed = !1)
        },
        lerp: function(b, c, d) {
            return (1 - d) * b + d * c
        }
    });
    EntityPlayButtonPause = ig.Entity.extend({
        size: {
            x: 123,
            y: 87
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/playbtn.png", 123, 87),
        zIndex: 100001,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    });
    EntityBackButtonPause = ig.Entity.extend({
        size: {
            x: 51,
            y: 50
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/backbtn.png",
            51, 50),
        zIndex: 100001,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    });
    EntityShopButtonPause = ig.Entity.extend({
        size: {
            x: 50,
            y: 60
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/shop.png", 50, 60),
        zIndex: 100001,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() {
    LevelOpening = {
        entities: [{
            type: "EntityOpeningKitty",
            x: 520,
            y: 212
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.entities.buttons.button-sound").requires("game.entities.buttons.button").defines(function() {
    EntityButtonSound = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet(cervezaAguilaPathModule + "branding/logo.png", _SETTINGS.Branding.Logo.Width, _SETTINGS.Branding.Logo.Height),
        zIndex: 10001,
        size: {
            x: 50,
            y: 50
        },
        mutetest: !1,
        name: "soundtest",
        init: function(b, c, d) {
            this.parent(b, c, d)
        },
        draw: function() {
            this.parent();
            ig.system.context.fillRect(this.pos.x, this.pos.y, 50, 50)
        },
        clicked: function() {
            console.log("pressed");
            !0 == this.mutetest ? (console.log("unmute"), ig.soundHandler.unmuteAll(!0), this.mutetest = !1) : (console.log("mute"), ig.soundHandler.muteAll(!0), this.mutetest = !0)
        },
        clicking: function() {},
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.levels.test-desktop").requires("impact.image", "game.entities.branding-logo-placeholder", "game.entities.buttons.button-more-games", "game.entities.pointer", "game.entities.buttons.button-sound").defines(function() {
    LevelTestDesktop = {
        entities: [{
            type: "EntityBrandingLogoPlaceholder",
            x: 296,
            y: 396,
            settings: {
                div_layer_name: "layer_mainmenu",
                centralize: "true"
            }
        }, {
            type: "EntityButtonMoreGames",
            x: 432,
            y: 284,
            settings: {
                div_layer_name: "layer_moregames_mainmenu"
            }
        }, {
            type: "EntityPointer",
            x: 608,
            y: 120
        }, {
            type: "EntityButtonSound",
            x: 192,
            y: 284
        }],
        layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: cervezaAguilaPathModule + "media/graphics/backgrounds/desktop/background.jpg",
            repeat: !1,
            preRender: !0,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
                [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
                [81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
                    96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120
                ],
                [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160],
                [161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
                [201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220,
                    221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240
                ],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280],
                [281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320],
                [321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344,
                    345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360
                ],
                [361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400],
                [401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440],
                [441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468,
                    469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480
                ],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520],
                [521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560],
                [561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592,
                    593, 594, 595, 596, 597, 598, 599, 600
                ],
                [601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640],
                [641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680],
                [681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716,
                    717, 718, 719, 720
                ],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760],
                [761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800],
                [801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840],
                [841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880],
                [881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920],
                [921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960],
                [961, 962, 963, 964,
                    965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3
                ],
                [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040],
                [1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071,
                    1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080
                ],
                [1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120],
                [1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160],
                [1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170,
                    1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200
                ]
            ]
        }]
    };
    LevelTestDesktopResources = [new ig.Image(cervezaAguilaPathModule + "media/graphics/backgrounds/desktop/background.jpg")]
});
ig.baked = !0;
ig.module("game.entities.homecontrol").requires("impact.entity").defines(function() {
    EntityHomecontrol = ig.Entity.extend({
        bgImage: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/mobile/startscreen.png"),
        taxi: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/mobile/taxi.png"),
        rabbit: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/mobile/rabbit.png"),
        title: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/mobile/title.png"),
        startGameRect: {
            x: 175,
            y: 395,
            w: 130,
            h: 75
        },
        shopRect: {
            x: 425,
            y: 585,
            w: 50,
            h: 50
        },
        moreGamesRect: {
            x: 7,
            y: 585,
            w: 50,
            h: 50
        },
        soundRect: {
            x: 423,
            y: 9,
            w: 50,
            h: 50
        },
        soundMute: null,
        pointer: null,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.targetTitle = 220;
            this.targetTaxi = -150;
            this.timer = new ig.Timer;
            ig.game.spawnEntity(EntityCoinStart, 80, 350);
            ig.game.spawnEntity(EntityPlayerStart, 102, 380);
            ig.game.spawnEntity(EntityButtonMoreGames, 7, 585);
            ig.game.spawnEntity(EntityPlayButton, 175, 395);
            ig.game.spawnEntity(EntitySoundButton, 423, 9);
            ig.game.getSoundState();
            this.soundMute = ig.game.soundMute;
            if (!1 == this.soundMute) {
                if (ig.soundHandler.unmuteAll(!0), b = ig.game.getEntitiesByType(EntitySoundButton)[0]) b.currentAnim =
                    b.anims.soundon
            } else if (ig.soundHandler.muteAll(!0), b = ig.game.getEntitiesByType(EntitySoundButton)[0]) b.currentAnim = b.anims.soundoff;
            this.shopPressed = this.soundPressed = this.playPressed = !1;
            this.buttonDelay = new ig.Timer
        },
        ready: function() {
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        draw: function() {
            this.bgImage.draw(this.pos.x - this.offset.x - ig.game._rscreen.x, this.pos.y - this.offset.y - ig.game._rscreen.y);
            this.taxi.draw(this.targetTaxi = this.lerp(this.targetTaxi, 800, 0.01), 320);
            this.title.draw(35,
                this.targetTitle)
        },
        aabbCheck: function(b, c) {
            return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1
        },
        checkMainClicks: function() {
            if (ig.input.pressed("click")) {
                this.pointer.refreshPos();
                var b = {};
                b.x = this.pointer.pos.x;
                b.y = this.pointer.pos.y;
                b.w = this.pointer.size.x;
                b.h = this.pointer.size.y;
                if (this.aabbCheck(b, this.startGameRect)) {
                    var c = ig.game.getEntitiesByType(EntityPlayButton)[0];
                    c && c.setScale(0.9, 0.9)
                }
                this.aabbCheck(b, this.shopRect);
                this.aabbCheck(b, this.soundRect) && (b = ig.game.getEntitiesByType(EntitySoundButton)[0]) &&
                    b.setScale(0.9, 0.9)
            }
            ig.input.released("click") && (this.pointer.refreshPos(), b = {}, b.x = this.pointer.pos.x, b.y = this.pointer.pos.y, b.w = this.pointer.size.x, b.h = this.pointer.size.y, this.aabbCheck(b, this.startGameRect) ? (this.buttonDelay.reset(), (c = ig.game.getEntitiesByType(EntityPlayButton)[0]) && c.setScale(1, 1), this.playPressed = !0, ig.game.saveSoundState()) : (this.playPressed = !1, (c = ig.game.getEntitiesByType(EntityPlayButton)[0]) && c.setScale(1, 1)), this.aabbCheck(b, this.shopRect) ? (this.buttonDelay.reset(), ig.game.saveSoundState()) :
                this.shopPressed = !1, this.aabbCheck(b, this.moreGamesRect) && (console.log("more games"), ig.soundHandler.sfxPlayer.play("button")), this.aabbCheck(b, this.soundRect) ? (this.buttonDelay.reset(), (b = ig.game.getEntitiesByType(EntitySoundButton)[0]) && b.setScale(1, 1), this.soundPressed = !0) : (this.soundPressed = !1, (b = ig.game.getEntitiesByType(EntitySoundButton)[0]) && b.setScale(1, 1)))
        },
        update: function() {
            this.checkMainClicks();
            this.targetTitle = 4 * Math.sin(5 * this.timer.delta()) + 130;
            750 <= this.targetTaxi && (this.targetTaxi = -150);
            !0 == this.playPressed && 0.1 < this.buttonDelay.delta() && (ig.game.director.loadLevel(2), 2 == ig.game.director.currentLevel && (ig.game.spawnEntity(EntityWorld, 0, 0, {
                zIndex: -1E3
            }), ig.game.spawnEntity(EntityPlayer, 240, 615)), ig.soundHandler.sfxPlayer.play("button"), this.playPressed = !1);
            if (!0 == this.soundPressed && 0.1 < this.buttonDelay.delta()) {
                if (!0 == this.soundMute) {
                    console.log("unmute");
                    ig.soundHandler.unmuteAll(!0);
                    this.soundMute = !1;
                    ig.game.soundMute = this.soundMute;
                    var b = ig.game.getEntitiesByType(EntitySoundButton)[0];
                    b && (b.currentAnim = b.anims.soundon)
                } else if (console.log("mute"), ig.soundHandler.muteAll(!0), this.soundMute = !0, ig.game.soundMute = this.soundMute, b = ig.game.getEntitiesByType(EntitySoundButton)[0]) b.currentAnim = b.anims.soundoff;
                ig.game.saveSoundState();
                this.soundPressed = !1
            }!0 == this.shopPressed && 0.1 < this.buttonDelay.delta() && (ig.game.director.loadLevel(3), ig.soundHandler.sfxPlayer.play("button"), this.shopPressed = !1)
        },
        lerp: function(b, c, d) {
            return (1 - d) * b + d * c
        }
    });
    EntityTitle = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/title.png",
            400, 300),
        zIndex: 100,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    });
    EntityPlayButton = ig.Entity.extend({
        size: {
            x: 123,
            y: 87
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/playbtn.png", 123, 87),
        zIndex: 100,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    });
    EntitySoundButton = ig.Entity.extend({
        size: {
            x: 49.5,
            y: 61
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/soundsprite.png", 49.5, 61),
        zIndex: 100,
        gravityFactor: 0,
        init: function(b,
            c, d) {
            this.parent(b, c, d);
            this.addAnim("soundon", 1, [0]);
            this.addAnim("soundoff", 1, [1]);
            this.currentAnim = this.anims.soundon
        }
    });
    EntityShopButton = ig.Entity.extend({
        size: {
            x: 50,
            y: 60
        },
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/shop.png", 50, 60),
        zIndex: 100,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 1, [0])
        }
    });
    EntityCoinStart = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/coinss.png", 54, 98),
        zIndex: 100,
        gravityFactor: 0,
        init: function(b, c,
            d) {
            this.parent(b, c, d);
            this.addAnim("coin", 0.1, [0, 1, 2, 3]);
            this.currentAnim = this.anims.coin;
            this.setScale(0.75, 0.75)
        }
    });
    EntityPlayerStart = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/rabbit.png", 37, 50),
        zIndex: 100,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("player", 1, [0]);
            this.currentAnim = this.anims.player;
            this.timerMove = new ig.Timer;
            this.timerStatic = new ig.Timer;
            this.move = !0;
            ig.game.spawnEntity(EntityShadowStart, 108.5, 452.5)
        },
        update: function() {
            !0 ==
                this.move && (this.pos.y = 20 * Math.sin(6 * this.timerMove.delta()) + 400, this.timerStatic.reset());
            419 <= this.pos.y && (this.move = !1, 0.1 < this.timerStatic.delta() && (this.move = !0));
            if (410 <= this.pos.y) this.setScale(1, -0.01 * (this.pos.y - 410) + 1);
            else {
                this.setScale(1, 1);
                var b = ig.game.getEntitiesByType(EntityShadowStart)[0];
                b && b.setScale(0.01 * (this.pos.y - 400) + 0.8, 0.01 * (this.pos.y - 400) + 0.8)
            }
        },
        lerp: function(b, c, d) {
            return (1 - d) * b + d * c
        }
    });
    EntityShadowStart = ig.Entity.extend({
        animSheet: new ig.AnimationSheet(cervezaAguilaPathModule + "media/graphics/game/mobile/shadow.png",
            25, 16),
        zIndex: 100,
        gravityFactor: 0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("shadow", 1, [0]);
            this.currentAnim = this.anims.shadow
        }
    })
});
ig.baked = !0;
ig.module("game.levels.test-mobile").requires("impact.image", "game.entities.homecontrol", "game.entities.pointer").defines(function() {
    LevelTestMobile = {
        entities: [{
            type: "EntityHomecontrol",
            x: 0,
            y: 0
        }, {
            type: "EntityPointer",
            x: 444,
            y: 192
        }],
        layer: []
    }
});
ig.baked = !0;
ig.module("game.levels.gameworld").requires("impact.image").defines(function() {
    LevelGameworld = {
        entities: [],
        layer: [{
            name: "main",
            width: 48,
            height: 64,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: cervezaAguilaPathModule + "media/graphics/game/mobile/startscreen.png",
            repeat: !1,
            preRender: !1,
            distance: "1",
            tilesize: 10,
            foreground: !1,
            data: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
                ]
            ]
        }]
    };
    LevelGameworldResources = [new ig.Image(cervezaAguilaPathModule + "media/graphics/game/mobile/startscreen.png")]
});
ig.baked = !0;
ig.module("game.levels.shop").requires("impact.image", "game.entities.pointer", "game.entities.shop").defines(function() {
    LevelShop = {
        entities: [{
            type: "EntityShop",
            x: 190,
            y: 255
        }, {
            type: "EntityPointer",
            x: 396,
            y: 128
        }],
        layer: [{
            name: "main",
            width: 48,
            height: 64,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: cervezaAguilaPathModule + "media/graphics/game/shopbg.png",
            repeat: !1,
            preRender: !1,
            distance: "1",
            tilesize: 10,
            foreground: !1,
            data: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                    41, 42, 43, 44, 45, 46, 47, 48
                ],
                [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96],
                [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144],
                [145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179,
                    180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192
                ],
                [193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240],
                [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288],
                [289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303,
                    304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336
                ],
                [337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384],
                [385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428,
                    429, 430, 431, 432
                ],
                [433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480],
                [481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528],
                [529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552,
                    553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576
                ],
                [577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624],
                [625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672],
                [673, 674, 675, 676,
                    677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720
                ],
                [721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768],
                [769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801,
                    802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816
                ],
                [817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864],
                [865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912],
                [913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925,
                    926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960
                ],
                [961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008],
                [1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040,
                    1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056
                ],
                [1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104],
                [1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140,
                    1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152
                ],
                [1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200],
                [1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240,
                    1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248
                ],
                [1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296],
                [1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340,
                    1341, 1342, 1343, 1344
                ],
                [1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392],
                [1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440],
                [1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488],
                [1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536],
                [1537, 1538, 1539, 1540,
                    1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584
                ],
                [1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632],
                [1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640,
                    1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680
                ],
                [1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728],
                [1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740,
                    1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776
                ],
                [1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824],
                [1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840,
                    1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872
                ],
                [1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920],
                [1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940,
                    1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968
                ],
                [1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2E3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040,
                    2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064
                ],
                [2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112],
                [2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140,
                    2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160
                ],
                [2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208],
                [2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240,
                    2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256
                ],
                [2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304],
                [2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340,
                    2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352
                ],
                [2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400],
                [2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430, 2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440,
                    2441, 2442, 2443, 2444, 2445, 2446, 2447, 2448
                ],
                [2449, 2450, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496],
                [2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540,
                    2541, 2542, 2543, 2544
                ],
                [2545, 2546, 2547, 2548, 2549, 2550, 2551, 2552, 2553, 2554, 2555, 2556, 2557, 2558, 2559, 2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570, 2571, 2572, 2573, 2574, 2575, 2576, 2577, 2578, 2579, 2580, 2581, 2582, 2583, 2584, 2585, 2586, 2587, 2588, 2589, 2590, 2591, 2592],
                [2593, 2594, 2595, 2596, 2597, 2598, 2599, 2600, 2601, 2602, 2603, 2604, 2605, 2606, 2607, 2608, 2609, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2628, 2629, 2630, 2631, 2632, 2633, 2634, 2635, 2636, 2637, 2638, 2639, 2640],
                [2641, 2642, 2643, 2644, 2645, 2646, 2647, 2648, 2649, 2650, 2651, 2652, 2653, 2654, 2655, 2656, 2657, 2658, 2659, 2660, 2661, 2662, 2663, 2664, 2665, 2666, 2667, 2668, 2669, 2670, 2671, 2672, 2673, 2674, 2675, 2676, 2677, 2678, 2679, 2680, 2681, 2682, 2683, 2684, 2685, 2686, 2687, 2688],
                [2689, 2690, 2691, 2692, 2693, 2694, 2695, 2696, 2697, 2698, 2699, 2700, 2701, 2702, 2703, 2704, 2705, 2706, 2707, 2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2716, 2717, 2718, 2719, 2720, 2721, 2722, 2723, 2724, 2725, 2726, 2727, 2728, 2729, 2730, 2731, 2732, 2733, 2734, 2735, 2736],
                [2737, 2738, 2739, 2740,
                    2741, 2742, 2743, 2744, 2745, 2746, 2747, 2748, 2749, 2750, 2751, 2752, 2753, 2754, 2755, 2756, 2757, 2758, 2759, 2760, 2761, 2762, 2763, 2764, 2765, 2766, 2767, 2768, 2769, 2770, 2771, 2772, 2773, 2774, 2775, 2776, 2777, 2778, 2779, 2780, 2781, 2782, 2783, 2784
                ],
                [2785, 2786, 2787, 2788, 2789, 2790, 2791, 2792, 2793, 2794, 2795, 2796, 2797, 2798, 2799, 2800, 2801, 2802, 2803, 2804, 2805, 2806, 2807, 2808, 2809, 2810, 2811, 2812, 2813, 2814, 2815, 2816, 2817, 2818, 2819, 2820, 2821, 2822, 2823, 2824, 2825, 2826, 2827, 2828, 2829, 2830, 2831, 2832],
                [2833, 2834, 2835, 2836, 2837, 2838, 2839, 2840,
                    2841, 2842, 2843, 2844, 2845, 2846, 2847, 2848, 2849, 2850, 2851, 2852, 2853, 2854, 2855, 2856, 2857, 2858, 2859, 2860, 2861, 2862, 2863, 2864, 2865, 2866, 2867, 2868, 2869, 2870, 2871, 2872, 2873, 2874, 2875, 2876, 2877, 2878, 2879, 2880
                ],
                [2881, 2882, 2883, 2884, 2885, 2886, 2887, 2888, 2889, 2890, 2891, 2892, 2893, 2894, 2895, 2896, 2897, 2898, 2899, 2900, 2901, 2902, 2903, 2904, 2905, 2906, 2907, 2908, 2909, 2910, 2911, 2912, 2913, 2914, 2915, 2916, 2917, 2918, 2919, 2920, 2921, 2922, 2923, 2924, 2925, 2926, 2927, 2928],
                [2929, 2930, 2931, 2932, 2933, 2934, 2935, 2936, 2937, 2938, 2939, 2940,
                    2941, 2942, 2943, 2944, 2945, 2946, 2947, 2948, 2949, 2950, 2951, 2952, 2953, 2954, 2955, 2956, 2957, 2958, 2959, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2969, 2970, 2971, 2972, 2973, 2974, 2975, 2976
                ],
                [2977, 2978, 2979, 2980, 2981, 2982, 2983, 2984, 2985, 2986, 2987, 2988, 2989, 2990, 2991, 2992, 2993, 2994, 2995, 2996, 2997, 2998, 2999, 3E3, 3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008, 3009, 3010, 3011, 3012, 3013, 3014, 3015, 3016, 3017, 3018, 3019, 3020, 3021, 3022, 3023, 3024],
                [3025, 3026, 3027, 3028, 3029, 3030, 3031, 3032, 3033, 3034, 3035, 3036, 3037, 3038, 3039, 3040,
                    3041, 3042, 3043, 3044, 3045, 3046, 3047, 3048, 3049, 3050, 3051, 3052, 3053, 3054, 3055, 3056, 3057, 3058, 3059, 3060, 3061, 3062, 3063, 3064, 3065, 3066, 3067, 3068, 3069, 3070, 3071, 3072
                ]
            ]
        }]
    };
    LevelShopResources = [new ig.Image(cervezaAguilaPathModule + "media/graphics/game/shopbg.png")]
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "impact.debug.debug", "impact.font", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.handlers.api-handler", "plugins.audio.sound-handler", "plugins.io.io-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.director", "plugins.impact-storage", "plugins.scale", "plugins.branding.splash", "game.entities.branding-logo-placeholder",
    "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.entities.world", "game.entities.player", "game.entities.platform", "game.entities.foliage", "game.entities.coin", "game.entities.vehicle", "game.entities.endcontrol", "game.entities.shop", "game.entities.backbutton", "game.entities.pausecontrol", "game.levels.opening", "game.levels.test-desktop", "game.levels.test-mobile",
    "game.levels.gameworld", "game.levels.shop").defines(function() {
    this.START_OBFUSCATION;
    this.FRAMEBREAKER;
    MyGame = ig.Game.extend({
        io: null,
        paused: !1,
        highScore: 0,
        coinCollected: 0,
        restartEnabled: !1,
        coinui: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/coinui.png"),
        pauseui: new ig.Image(cervezaAguilaPathModule + "media/graphics/game/pause.png"),
        character: "rabbit",
        unlockedCharacter: [1, 0, 0, 0, 0],
        showTutorial: !0,
        soundMute: !1,
        gamePause: !1,
        score: 0,
        gravity: 100,
        addspeed: 1,
        init: function() {
            this.setupMarketJsGameCenter();
            this.io = new IoManager;
            this.setupUrlParams =
                new ig.UrlParameters;
            this.removeLoadingWheel();
            this.finalize();
            ig.input.bind(ig.KEY.UP_ARROW, "up");
            ig.input.bind(ig.KEY.DOWN_ARROW, "down");
            ig.input.bind(ig.KEY.RIGHT_ARROW, "right");
            ig.input.bind(ig.KEY.LEFT_ARROW, "left");
            ig.input.bind(ig.KEY.R, "restart");
            ig.input.bind(ig.KEY.MOUSE1, "click");
            ig.input.bind(ig.KEY.SPACE, "continue");
            this.setupLocalStorage()
        },
        setupMarketJsGameCenter: function() {
            if (_SETTINGS)
                if (_SETTINGS.MarketJSGameCenter) {
                    var b = ig.domHandler.getElementByClass("gamecenter-activator");
                    _SETTINGS.MarketJSGameCenter.Activator.Enabled &&
                        _SETTINGS.MarketJSGameCenter.Activator.Position && (console.log("MarketJSGameCenter activator settings present ...."), ig.domHandler.css(b, {
                            position: "absolute",
                            left: _SETTINGS.MarketJSGameCenter.Activator.Position.Left,
                            top: _SETTINGS.MarketJSGameCenter.Activator.Position.Top,
                            "z-index": 3
                        }));
                    ig.domHandler.show(b)
                } else console.log("MarketJSGameCenter settings not defined in game settings")
        },
        finalize: function() {
            if (ig.ua.mobile) {
                var b = ig.domHandler.getElementById("#play");
                ig.domHandler.attr(b, "onclick", 'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();');
                ig.domHandler.show(b)
            } else this.start();
            ig.sizeHandler.reorient()
        },
        removeLoadingWheel: function() {
            try {
                $("#ajaxbar").css("background", "none")
            } catch (b) {
                console.log(b)
            }
        },
        showDebugMenu: function() {
            console.log("showing debug menu ...");
            ig.Entity._debugShowBoxes = !0;
            $(".ig_debug").show()
        },
        setupLocalStorage: function() {
            this.storage = new ig.Storage;
            this.getCoinStats();
            this.getActiveCharacter()
        },
        saveCoinStats: function() {
            null != this.storage && this.storage.set("coinStats", this.coinCollected)
        },
        getCoinStats: function() {
            if (null !=
                this.storage) {
                var b = this.storage.get("coinStats");
                null != b && (this.coinCollected = b)
            }
        },
        saveActiveCharacter: function() {
            null != this.storage && this.storage.set("character", this.character)
        },
        getActiveCharacter: function() {
            if (null != this.storage) {
                var b = this.storage.get("character");
                null != b && (this.character = b)
            }
        },
        saveUnlockedCharacter: function() {
            null != this.storage && this.storage.set("unlockedCharacter", this.unlockedCharacter)
        },
        getUnlockedCharacter: function() {
            if (null != this.storage) {
                var b = this.storage.get("unlockedCharacter");
                null != b && (this.unlockedCharacter = b)
            }
        },
        saveSoundState: function() {
            null != this.storage && this.storage.set("soundState", this.soundMute)
        },
        getSoundState: function() {
            if (null != this.storage) {
                var b = this.storage.get("soundState");
                null != b && (this.soundMute = b)
            }
        },
        saveHighScore: function() {
            null != this.storage && this.storage.set("highScore", this.highScore)
        },
        getHighScore: function() {
            if (null != this.storage) {
                var b = this.storage.get("highScore");
                null != b && (this.highScore = b)
            }
        },
        saveTutorial: function() {
            null != this.storage && this.storage.set("tutorial",
                this.showTutorial)
        },
        getTutorial: function() {
            if (null != this.storage) {
                var b = this.storage.get("tutorial");
                null != b && (this.showTutorial = b)
            }
        },
        start: function() {
            this.resetPlayerStats();
            this.director = new ig.Director(this, [LevelOpening, LevelTestMobile, LevelGameworld, LevelShop]);
            if (_SETTINGS.Branding.Splash.Enabled) try {
                this.branding = new ig.BrandingSplash
            } catch (b) {
                console.log(b), console.log("Loading original levels ..."), this.director.loadLevel(this.director.currentLevel)
            } else this.director.loadLevel(this.director.currentLevel);
            this.spawnEntity(EntityPointerSelector, 50, 50);
            ig.soundHandler.bgmPlayer.play(ig.soundHandler.bgmPlayer.soundList.background)
        },
        fpsCount: function() {
            this.fpsTimer || (this.fpsTimer = new ig.Timer(1));
            this.fpsTimer && 0 > this.fpsTimer.delta() ? null != this.fpsCounter ? this.fpsCounter++ : this.fpsCounter = 0 : (ig.game.fps = this.fpsCounter, this.fpsCounter = 0, this.fpsTimer.reset())
        },
        endGame: function() {
            console.log("End game");
            ig.soundHandler.bgmPlayer.stop();
            ig.apiHandler.run("MJSEnd")
        },
        resetPlayerStats: function() {
            ig.log("resetting player stats ...");
            this.playerStats = {
                id: this.playerStats ? this.playerStats.id : null
            }
        },
        splashClick: function() {
            var b = ig.domHandler.getElementById("#play");
            ig.domHandler.hide(b);
            ig.apiHandler.run("MJSFooter");
            ig.apiHandler.run("MJSHeader");
            ig.game.start()
        },
        pauseGame: function() {
            ig.system.stopRunLoop.call(ig.system);
            console.log("Game Paused")
        },
        resumeGame: function() {
            ig.system.startRunLoop.call(ig.system);
            console.log("Game Resumed")
        },
        showOverlay: function(b) {
            for (i = 0; i < b.length; i++) $("#" + b[i]) && $("#" + b[i]).show(), document.getElementById(b[i]) &&
                (document.getElementById(b[i]).style.visibility = "visible")
        },
        hideOverlay: function(b) {
            for (i = 0; i < b.length; i++) $("#" + b[i]) && $("#" + b[i]).hide(), document.getElementById(b[i]) && (document.getElementById(b[i]).style.visibility = "hidden")
        },
        currentBGMVolume: 1,
        addition: 0.1,
        update: function() {
            this.paused ? this.updateWhilePaused() : (this.parent(), ig.ua.mobile && ig.soundHandler && ig.soundHandler.forceLoopBGM());
            if ((this.getEntitiesByType(EntityPlayerDeath)[0] || !0 == this.restartEnabled) && ig.input.pressed("restart")) ig.game.director.loadLevel(2),
                2 == ig.game.director.currentLevel && (ig.game.spawnEntity(EntityPlayer, 240, 615), ig.game.spawnEntity(EntityWorld, 0, 0)), this.restartEnabled = !1
        },
        updateWhilePaused: function() {
            for (var b = 0; b < this.entities.length; b++) this.entities[b].ignorePause && this.entities[b].update()
        },
        draw: function() {
            this.parent();
            var b = this.getEntitiesByType(EntityPlayer)[0],
                c = this.getEntitiesByType(EntityEndcontrol)[0];
            b && (this.getCoinStats(), this.context = ig.system.context, this.context.font = "75pt WorldsAtWar BB", this.context.textAlign =
                "center", this.context.fillStyle = "#ffffff", this.context.fillText(b.score, ig.system.width / 2, 75), this.context.font = "36pt WorldsAtWar BB", this.context.textAlign = "right", this.context.fillStyle = "#ffffff", this.context.fillText(this.coinCollected, ig.system.width - 42, 40), this.coinui.draw(ig.system.width - 35, 15), this.pauseui.draw(ig.system.width - 35, 600));
            c && (this.context.font = "30pt WorldsAtWar BB", this.context.textAlign = "left", this.context.fillStyle = "#ffffff", this.context.fillText(_STRINGS.PetHop.Score + c.score,
                22, 40), this.context.textAlign = "left", this.context.fillStyle = "#ffffff", this.context.fillText(_STRINGS.PetHop.Best + ig.game.highScore, 22, 80))
        },
        clearCanvas: function(b, c, d) {
            var e = b.canvas;
            b.clearRect(0, 0, c, d);
            e.style.display = "none";
            e.offsetHeight;
            e.style.display = "inherit"
        },
        drawDebug: function() {
            if (!ig.global.wm && (this.debugEnable(), this.viewDebug && (ig.system.context.fillStyle = "#000000", ig.system.context.globalAlpha = 0.35, ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height), ig.system.context.globalAlpha =
                    1, this.debug && 0 < this.debug.length)))
                for (i = 0; i < this.debug.length; i++) ig.system.context.font = "10px Arial", ig.system.context.fillStyle = "#ffffff", ig.system.context.fillText(this.debugLine - this.debug.length + i + ": " + this.debug[i], 10, 50 + 10 * i)
        },
        debugCL: function(b) {
            this.debug ? (50 > this.debug.length || this.debug.splice(0, 1), this.debug.push(b), this.debugLine++) : (this.debug = [], this.debugLine = 1, this.debug.push(b));
            console.log(b)
        },
        debugEnable: function() {
            ig.input.pressed("click") && (this.debugEnableTimer = new ig.Timer(2));
            this.debugEnableTimer && 0 > this.debugEnableTimer.delta() ? ig.input.released("click") && (this.debugEnableTimer = null) : this.debugEnableTimer && 0 < this.debugEnableTimer.delta() && (this.debugEnableTimer = null, this.viewDebug = this.viewDebug ? !1 : !0)
        }
    });
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler;
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.apiHandler = new ig.ApiHandler;
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    ig.Sound.enabled = !1;
    ig.main("#canvas", MyGame, 60, 480, 640, ig.sizeHandler.scale,
        ig.SplashLoader);
    ig.sizeHandler.resize();
    ig.soundHandler = null;
    ig.soundHandler = new ig.SoundHandler;
    ig.sizeHandler.reorient();
    this.END_OBFUSCATION
});