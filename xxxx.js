var extendStatics = Object.setPrototypeOf || {
	__proto__: []
}
instanceof Array && function(e, t) {
	e.__proto__ = t
} || function(e, t) {
	for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
}, __extends = function(e, t) {
	function i() {
		this.constructor = e
	}
	extendStatics(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
}, __assign = Object.assign || function(e) {
	for (var t, i = 1, n = arguments.length; n > i; i++) {
		t = arguments[i];
		for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
	}
	return e
}, __rest = function(e, t) {
	var i = {};
	for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
	if (null != e && "function" == typeof Object.getOwnPropertySymbols)
		for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (i[n[s]] = e[n[s]]);
	return i
}, __decorate = function(e, t, i, n) {
	var s, r = arguments.length,
		o = 3 > r ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
	if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, n);
	else
		for (var a = e.length - 1; a >= 0; a--)(s = e[a]) && (o = (3 > r ? s(o) : r > 3 ? s(t, i, o) : s(t, i)) || o);
	return r > 3 && o && Object.defineProperty(t, i, o), o
}, __param = function(e, t) {
	return function(i, n) {
		t(i, n, e)
	}
}, __metadata = function(e, t) {
	return "object" == typeof Reflect && "function" == typeof Reflect.metadata ? Reflect.metadata(e, t) : void 0
}, __awaiter = function(e, t, i, n) {
	function s(e) {
		return e instanceof i ? e : new i(function(t) {
			t(e)
		})
	}
	return new(i || (i = Promise))(function(i, r) {
		function o(e) {
			try {
				h(n.next(e))
			} catch (t) {
				r(t)
			}
		}

		function a(e) {
			try {
				h(n["throw"](e))
			} catch (t) {
				r(t)
			}
		}

		function h(e) {
			e.done ? i(e.value) : s(e.value).then(o, a)
		}
		h((n = n.apply(e, t || [])).next())
	})
}, __generator = function(e, t) {
	function i(e) {
		return function(t) {
			return n([e, t])
		}
	}

	function n(i) {
		if (s) throw new TypeError("Generator is already executing.");
		for (; h;) try {
			if (s = 1, r && (o = 2 & i[0] ? r["return"] : i[0] ? r["throw"] || ((o = r["return"]) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
			switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
				case 0:
				case 1:
					o = i;
					break;
				case 4:
					return h.label++, {
						value: i[1],
						done: !1
					};
				case 5:
					h.label++, r = i[1], i = [0];
					continue;
				case 7:
					i = h.ops.pop(), h.trys.pop();
					continue;
				default:
					if (o = h.trys, !(o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
						h = 0;
						continue
					}
					if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
						h.label = i[1];
						break
					}
					if (6 === i[0] && h.label < o[1]) {
						h.label = o[1], o = i;
						break
					}
					if (o && h.label < o[2]) {
						h.label = o[2], h.ops.push(i);
						break
					}
					o[2] && h.ops.pop(), h.trys.pop();
					continue
			}
			i = t.call(e, h)
		} catch (n) {
			i = [6, n], r = 0
		} finally {
			s = o = 0
		}
		if (5 & i[0]) throw i[1];
		return {
			value: i[0] ? i[1] : void 0,
			done: !0
		}
	}
	var s, r, o, a, h = {
		label: 0,
		sent: function() {
			if (1 & o[0]) throw o[1];
			return o[1]
		},
		trys: [],
		ops: []
	};
	return a = {
		next: i(0),
		"throw": i(1),
		"return": i(2)
	}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
		return this
	}), a
}, __exportStar = function(e, t) {
	for (var i in e) "default" === i || t.hasOwnProperty(i) || __createBinding(t, e, i)
}, __createBinding = Object.create ? function(e, t, i, n) {
	void 0 === n && (n = i), Object.defineProperty(e, n, {
		enumerable: !0,
		get: function() {
			return t[i]
		}
	})
} : function(e, t, i, n) {
	void 0 === n && (n = i), e[n] = t[i]
}, __values = function(e) {
	var t = "function" == typeof Symbol && Symbol.iterator,
		i = t && e[t],
		n = 0;
	if (i) return i.call(e);
	if (e && "number" == typeof e.length) return {
		next: function() {
			return e && n >= e.length && (e = void 0), {
				value: e && e[n++],
				done: !e
			}
		}
	};
	throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}, __read = function(e, t) {
	var i = "function" == typeof Symbol && e[Symbol.iterator];
	if (!i) return e;
	var n, s, r = i.call(e),
		o = [];
	try {
		for (;
			(void 0 === t || t-- > 0) && !(n = r.next()).done;) o.push(n.value)
	} catch (a) {
		s = {
			error: a
		}
	} finally {
		try {
			n && !n.done && (i = r["return"]) && i.call(r)
		} finally {
			if (s) throw s.error
		}
	}
	return o
}, __spread = function() {
	for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(__read(arguments[t]));
	return e
}, __spreadArrays = function() {
	for (var e = 0, t = 0, i = arguments.length; i > t; t++) e += arguments[t].length;
	for (var n = Array(e), s = 0, t = 0; i > t; t++)
		for (var r = arguments[t], o = 0, a = r.length; a > o; o++, s++) n[s] = r[o];
	return n
}, __await = function(e) {
	return this instanceof __await ? (this.v = e, this) : new __await(e)
}, __asyncGenerator = function(e, t, i) {
	function n(e) {
		p[e] && (l[e] = function(t) {
			return new Promise(function(i, n) {
				c.push([e, t, i, n]) > 1 || s(e, t)
			})
		})
	}

	function s(e, t) {
		try {
			r(p[e](t))
		} catch (i) {
			h(c[0][3], i)
		}
	}

	function r(e) {
		e.value instanceof __await ? Promise.resolve(e.value.v).then(o, a) : h(c[0][2], e)
	}

	function o(e) {
		s("next", e)
	}

	function a(e) {
		s("throw", e)
	}

	function h(e, t) {
		e(t), c.shift(), c.length && s(c[0][0], c[0][1])
	}
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var l, p = i.apply(e, t || []),
		c = [];
	return l = {}, n("next"), n("throw"), n("return"), l[Symbol.asyncIterator] = function() {
		return this
	}, l
}, __asyncDelegator = function(e) {
	function t(t, s) {
		i[t] = e[t] ? function(i) {
			return (n = !n) ? {
				value: __await(e[t](i)),
				done: "return" === t
			} : s ? s(i) : i
		} : s
	}
	var i, n;
	return i = {}, t("next"), t("throw", function(e) {
		throw e
	}), t("return"), i[Symbol.iterator] = function() {
		return this
	}, i
}, __asyncValues = function(e) {
	function t(t) {
		n[t] = e[t] && function(n) {
			return new Promise(function(s, r) {
				n = e[t](n), i(s, r, n.done, n.value)
			})
		}
	}

	function i(e, t, i, n) {
		Promise.resolve(n).then(function(t) {
			e({
				value: t,
				done: i
			})
		}, t)
	}
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var n, s = e[Symbol.asyncIterator];
	return s ? s.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](), n = {}, t("next"), t("throw"), t("return"), n[Symbol.asyncIterator] = function() {
		return this
	}, n)
}, __makeTemplateObject = function(e, t) {
	return Object.defineProperty ? Object.defineProperty(e, "raw", {
		value: t
	}) : e.raw = t, e
}, __setModuleDefault = Object.create ? function(e, t) {
	Object.defineProperty(e, "default", {
		enumerable: !0,
		value: t
	})
} : function(e, t) {
	e["default"] = t
}, __importStar = function(e) {
	if (e && e.__esModule) return e;
	var t = {};
	if (null != e)
		for (var i in e) Object.hasOwnProperty.call(e, i) && __createBinding(t, e, i);
	return __setModuleDefault(t, e), t
}, __importDefault = function(e) {
	return e && e.__esModule ? e : {
		"default": e
	}
}, __classPrivateFieldGet = function(e, t) {
	if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
	return t.get(e)
}, __classPrivateFieldSet = function(e, t, i) {
	if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
	return t.set(e, i), i
}, __reflect = function(e, t, i) {
	e.__class__ = t, i ? i.push(t) : i = [t], e.__types__ = e.__types__ ? i.concat(e.__types__) : i
};
! function(e) {
	function t(n) {
		if (i[n]) return i[n].exports;
		var s = i[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(s.exports, s, s.exports, t), s.l = !0, s.exports
	}
	var i = {};
	return t.m = e, t.c = i, t.d = function(e, i, n) {
		t.o(e, i) || Object.defineProperty(e, i, {
			enumerable: !0,
			get: n
		})
	}, t.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, t.t = function(e, i) {
		if (1 & i && (e = t(e)), 8 & i) return e;
		if (4 & i && "object" == typeof e && e && e.__esModule) return e;
		var n = Object.create(null);
		if (t.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & i && "string" != typeof e)
			for (var s in e) t.d(n, s, function(t) {
				return e[t]
			}.bind(null, s));
		return n
	}, t.n = function(e) {
		var i = e && e.__esModule ? function() {
			return e["default"]
		} : function() {
			return e
		};
		return t.d(i, "a", i), i
	}, t.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 0)
}([function(e, t, i) {
	i(1), i(2), i(3), i(4), i(5), i(6), i(7), i(8), i(9), i(10), i(11), i(12), i(13), i(14), i(15), i(16), i(17), i(18), i(19), i(20), i(21), i(22), i(23), i(24), i(25), i(26);
	var n = function(e) {
		function t() {
			var t = null !== e && e.apply(this, arguments) || this;
			return t.isThemeLoadEnd = !1, t.isResourceLoadEnd = !1, t
		}
		return __extends(t, e), t.prototype.createChildren = function() {
			e.prototype.createChildren.call(this);
			var t = new AssetAdapter;
			egret.registerImplementation("eui.IAssetAdapter", t), egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter), RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this), Tools.LoadResConfig()
		}, t.prototype.onConfigComplete = function(e) {
			RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
			var t = new eui.Theme("resource/default.thm.json", this.stage);
			t.addEventListener(eui.UIEvent.COMPLETE, this.onThemeLoadComplete, this), RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this), RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this), RES.loadGroup("preload"), RES.loadGroup("L1")
		}, t.prototype.onThemeLoadComplete = function() {
			this.isThemeLoadEnd = !0, this.queryFCM()
		}, t.prototype.onResourceLoadComplete = function(e) {
			"preload" == e.groupName ? (RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this), RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this), RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this), RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this), this.isResourceLoadEnd = !0, this.createScene()) : "loading" == e.groupName ? (this.loadingView = new LoadingUI, this.stage.addChild(this.loadingView), RES.loadGroup("preload")) : "login" == e.groupName
		}, t.prototype.createScene = function() {
			this.isThemeLoadEnd && this.isResourceLoadEnd && this.startCreateScene()
		}, t.prototype.onItemLoadError = function(e) {
			console.warn("Url:" + e.resItem.url + " has failed to load")
		}, t.prototype.onResourceLoadError = function(e) {
			console.warn("Group:" + e.groupName + " has failed to load"), this.onResourceLoadComplete(e)
		}, t.prototype.onResourceProgress = function(e) {
			"preload" == e.groupName
		}, t.prototype.startCreateScene = function() {
			this.parent.addChild(Home.getInstance())
		}, t.prototype.queryFCM = function() {
			var e = this;
			HttpRequest.instance.post(UrlConfig.queryFCM).then(function(t) {
				if (t.resultStr.length > 0) {
					var i = decodeURIComponent(t.resultStr),
						n = Des.FCMDecrypt(i),
						s = n.indexOf("}");
					n = n.substr(0, s + 1);
					var r = JSON.parse(decodeURIComponent(n));
					if (Log.info("查询防沉迷结果：", r), 0 == r.ret && r.instructions.length > 0) {
						var o = r.instructions[0].title,
							a = r.instructions[0].msg,
							h = r.instructions[0].type;
						3 == h && (o = "游戏温馨提示", a = "根据国家防沉迷通知的相关要求和腾讯最新强化的防沉迷策略，所有用户必须使用真实有效身份信息进行实名认证，建议您完成实名认证再登录进行游戏。");
						var l = new FcmDialog(o, a);
						e.stage.addChild(l), l.addEventListener("close", function() {
							l.close(), 1 == h ? e.createScene() : (alert("防沉迷未通过！"), e.enterLogin())
						}, e)
					} else e.createScene()
				} else alert("防沉迷未通过！"), e.enterLogin()
			})["catch"](function(e) {
				Log.error("查询防沉迷异常：", e)
			})
		}, t.prototype.enterLogin = function() {
			Log.info("到登录界面！"), window.LoginManager && (window.LoginManager.logout(), window.LoginManager.login())
		}, t
	}(eui.UILayer);
	window.Main = n, __reflect(n.prototype, "Main", [])
}, function(e, t) {
	var i = function() {
		function e() {}
		return e.prototype.getAsset = function(e, t, i) {
			function n(n) {
				t.call(i, n, e)
			}
			if (RES.hasRes(e)) {
				var s = RES.getRes(e);
				s ? n(s) : RES.getResAsync(e, n, this)
			} else RES.getResByUrl(e, n, this, RES.ResourceItem.TYPE_IMAGE)
		}, e
	}();
	window.AssetAdapter = i, __reflect(i.prototype, "AssetAdapter", ["eui.IAssetAdapter"])
}, function(e, t) {
	var i = function() {
		function e() {}
		return e.prototype.getTheme = function(e, t, i, n) {
			function s(e) {
				t.call(n, e)
			}

			function r(t) {
				t.resItem.url == e && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null), i.call(n))
			}
			var o = this;
			if ("undefined" != typeof generateEUI) egret.callLater(function() {
				t.call(n, generateEUI)
			}, this);
			else if ("undefined" != typeof generateEUI2) RES.getResByUrl("resource/gameEui.json", function(e, i) {
				window.JSONParseClass.setData(e), egret.callLater(function() {
					t.call(n, generateEUI2)
				}, o)
			}, this, RES.ResourceItem.TYPE_JSON);
			else if ("undefined" != typeof generateJSON)
				if (e.indexOf(".exml") > -1) {
					var a = e.replace(".exml", "_EUI.json");
					generateJSON.paths[e] ? egret.callLater(function() {
						t.call(n, generateJSON.paths[e])
					}, this) : RES.getResByUrl(a, function(i) {
						window.JSONParseClass.setData(i), egret.callLater(function() {
							t.call(n, generateJSON.paths[e])
						}, o)
					}, this, RES.ResourceItem.TYPE_JSON)
				} else egret.callLater(function() {
					t.call(n, generateJSON)
				}, this);
			else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, r, null), RES.getResByUrl(e, s, this, RES.ResourceItem.TYPE_TEXT)
		}, e
	}();
	window.ThemeAdapter = i, __reflect(i.prototype, "ThemeAdapter", ["eui.IThemeAdapter"])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.isLoading = !1, t.addEventListener(egret.Event.ADDED_TO_STAGE, t.onAddToStage, t), t
		}
		return __extends(t, e), t.prototype.onAddToStage = function(e) {}, t.prototype.onDestory = function() {}, t.prototype.showLoading = function() {
			if (!this.isLoading) {
				if (this.isLoading = !0, !this.loadingContainer) {
					this.loadingContainer = new egret.DisplayObjectContainer;
					var e = new egret.Shape;
					e.graphics.beginFill(0, .8), e.graphics.drawRect(0, 0, this.width, this.height), e.graphics.endFill(), e.touchEnabled = !0, this.loadingContainer.addChild(e)
				}
				if (!this.loadingIcon) {
					var t = Tools.createBitmapByName("loading_png");
					t.x = this.width / 2, t.y = this.height / 2, this.loadingContainer.addChild(t), this.loadingIcon = t
				}
			}
		}, t.prototype.closeLoading = function() {
			this.isLoading && (this.loadingTween && this.loadingTween.setPaused(!0), this.loadingTween = null, egret.MainContext.instance.stage.removeChild(this.loadingContainer), this.isLoading = !1)
		}, t
	}(egret.DisplayObjectContainer);
	window.BaseView = i, __reflect(i.prototype, "BaseView", [])
}, function(e, t) {
	var i;
	! function(e) {
		e[e.ap = 1] = "ap", e[e.as = 2] = "as", e[e.br = 3] = "br", e[e.bp = 4] = "bp", e[e.poison = 5] = "poison", e[e.burn = 6] = "burn", e[e.electric = 7] = "electric", e[e.petrify = 8] = "petrify", e[e.frozen = 9] = "frozen", e[e.curse = 10] = "curse", e[e.vertigo = 11] = "vertigo", e[e.blind = 12] = "blind", e[e.sd = 13] = "sd", e[e.sleep = 14] = "sleep", e[e.confuse = 15] = "confuse", e[e.fetter = 16] = "fetter", e[e.random = 17] = "random"
	}(i || (i = {})), window.Buff = i;
	var n = function() {
		function e() {}
		return e.level = 1, e.passLevel = 0, e.roundId = 1, e.offsetHight = 0, e.helpLife = 0, e.ggList = [], e.adLevel = [{
			level: 0,
			adImage: "",
			url: "https://dnf.qq.com/cp/a20210618index/indexm.html"
		}], e.spArr = [{
			icon: "lightning_png",
			cd: "15",
			type: 1,
			extra: .5,
			dur: 10
		}, {
			icon: "lightning_png",
			cd: "20",
			type: 2,
			extra: 1,
			dur: 5
		}, {
			icon: "lightning_png",
			cd: "30",
			type: 3,
			extra: .5,
			dur: 0
		}, {
			icon: "lightning_png",
			cd: "90",
			type: 17,
			extra: 500,
			dur: 0
		}], e.iBuffMap = {
			43: {
				pre: 0,
				hp: 100,
				as: 0,
				dur: 999,
				cd: 0,
				cover: 0
			},
			51: {
				pre: 0,
				hp: 100,
				as: 0,
				dur: 999,
				cd: 0,
				cover: 0
			},
			52: {
				pre: 0,
				hp: 100,
				as: 0,
				dur: 999,
				cd: 0,
				cover: 0
			},
			53: {
				pre: i.electric,
				hp: 0,
				ap: 0,
				as: 100,
				dur: 999,
				cd: 0,
				cover: 1
			},
			71: {
				pre: i.burn,
				hp: 0,
				ap: 0,
				as: 100,
				dur: 999,
				cd: 0,
				cover: 1
			},
			91: {
				pre: i.poison,
				hp: 0,
				ap: 0,
				as: 100,
				dur: 999,
				cd: 0,
				cover: 1
			},
			92: {
				pre: i.burn,
				hp: 0,
				ap: 50,
				as: 0,
				dur: 999,
				cd: 0,
				cover: 1
			},
			93: {
				pre: i.electric,
				hp: 0,
				ap: 50,
				as: 0,
				dur: 999,
				cd: 0,
				cover: 1
			},
			94: {
				pre: i.petrify,
				hp: 0,
				ap: 0,
				as: 100,
				dur: 999,
				cd: 0,
				cover: 1
			}
		}, e.enterStatusMap = {
			11: {
				prob: 10,
				type: i.bp,
				dur: 999,
				cover: 0
			},
			12: {
				prob: 10,
				type: i.poison,
				dur: 999,
				cover: 0
			},
			13: {
				prob: 0,
				type: i.burn,
				dur: 5,
				cover: 0
			},
			14: {
				prob: -1,
				type: i.electric,
				dur: 10,
				cover: 1
			},
			15: {
				prob: 10,
				type: i.petrify,
				dur: 2,
				cover: 0
			},
			31: {
				prob: 5,
				type: i.random,
				dur: 999,
				cover: 0
			},
			41: {
				prob: 0,
				type: i.bp,
				dur: 5,
				cover: 0
			},
			61: {
				prob: 10,
				type: i.bp,
				dur: 999,
				cover: 0
			},
			64: {
				prob: 10,
				type: i.frozen,
				dur: 2,
				cover: 0
			},
			65: {
				prob: 10,
				type: i.vertigo,
				dur: 2,
				cover: 0
			},
			66: {
				prob: 10,
				type: i.blind,
				dur: 2,
				cover: 0
			},
			72: {
				prob: 10,
				type: i.curse,
				dur: 10,
				cover: 0
			},
			81: {
				prob: 0,
				type: i.poison,
				dur: 5,
				cover: 0
			},
			83: {
				prob: 0,
				type: i.curse,
				dur: 5,
				cover: 0,
				only: 10
			}
		}, e.dmgMap = {
			11: {
				pre: i.bp,
				dmg: 10,
				dhp: 10
			},
			12: {
				pre: i.poison,
				dmg: 10,
				dhp: 10
			},
			13: {
				pre: i.burn,
				dmg: 5,
				dhp: 10
			},
			14: {
				pre: i.electric,
				dmg: 10,
				dhp: 0
			},
			15: {
				pre: i.petrify,
				dmg: 20,
				dhp: 0,
				dur: 999
			},
			21: {
				pre: i.bp,
				dmg: 0,
				dhp: 10
			},
			22: {
				pre: i.petrify,
				dmg: 20,
				dhp: 0,
				dur: 1
			},
			31: {
				pre: i.random,
				dmg: 10,
				dhp: 10
			},
			41: {
				pre: i.bp,
				dmg: 5,
				dhp: 10
			},
			42: {
				pre: i.poison,
				dmg: 5,
				dhp: 10
			},
			43: {
				pre: i.burn,
				dmg: 5,
				dhp: 0
			},
			44: {
				pre: i.electric,
				dmg: 10,
				dhp: 0
			},
			45: {
				pre: i.petrify,
				dmg: 0,
				dhp: 0,
				dur: 1
			},
			51: {
				pre: i.bp,
				dmg: 5,
				dhp: 0
			},
			52: {
				pre: i.poison,
				dmg: 5,
				dhp: 0
			},
			53: {
				pre: i.electric,
				dmg: 10,
				dhp: 0
			},
			54: {
				pre: i.petrify,
				dmg: 10,
				dhp: 0,
				dur: 1
			},
			61: {
				pre: i.bp,
				dmg: 10,
				dhp: 10
			},
			62: {
				pre: i.burn,
				dmg: 10,
				dhp: 10
			},
			64: {
				pre: i.frozen,
				dmg: 20,
				dhp: 0
			},
			65: {
				pre: i.vertigo,
				dmg: 20,
				dhp: 0
			},
			66: {
				pre: i.blind,
				dmg: 20,
				dhp: 0
			},
			71: {
				pre: i.burn,
				dmg: 5,
				dhp: 0
			},
			81: {
				pre: i.poison,
				dmg: 5,
				dhp: 10
			},
			93: {
				pre: i.electric,
				dmg: 5,
				dhp: 0
			},
			94: {
				pre: i.petrify,
				dmg: 0,
				dhp: 0,
				dur: 1
			},
			101: {
				pre: i.burn,
				dmg: 20,
				dhp: 0
			},
			102: {
				pre: i.frozen,
				dmg: 10,
				dhp: 0,
				extra: {
					dur: 1,
					num: 5
				}
			}
		}, e.sDmgMap = {
			45: {
				pre: i.petrify,
				dmg: 50
			},
			63: {
				pre: i.electric,
				dmg: 50
			}
		}, e.specGG = {
			82: {
				pre: i.burn,
				enter: i.burn,
				cover: 1,
				cd: 10
			}
		}, e.ggArr = {
			11: {
				icon: "11",
				name: "猛烈的威势\n\n(头肩)",
				type: 0,
				index: 0
			},
			12: {
				icon: "12",
				name: "被污染的冰石肩甲\n\n(头肩)",
				type: 1,
				index: 0
			},
			13: {
				icon: "13",
				name: "守护自由的翼肩\n\n(头肩)",
				type: 2,
				index: 0
			},
			14: {
				icon: "14",
				name: "玉化亡灵肩甲\n\n(头肩)",
				type: 3,
				index: 0
			},
			15: {
				icon: "15",
				name: "六角形脉冲块\n\n(头肩)",
				type: 4,
				index: 0
			},
			21: {
				icon: "21",
				name: "飘扬在天空的羽毛\n\n(耳环)",
				type: 0,
				index: 1
			},
			22: {
				icon: "22",
				name: "内核芯片\n\n(耳环)",
				type: 4,
				index: 1
			},
			31: {
				icon: "31",
				name: "熔丝颈链\n\n(项链)",
				type: 0,
				index: 2
			},
			41: {
				icon: "41",
				name: "黑化束缚手镯\n\n(手镯)",
				type: 0,
				index: 3
			},
			42: {
				icon: "42",
				name: "石巨人核手镯\n\n(手镯)",
				type: 1,
				index: 2
			},
			43: {
				icon: "43",
				name: "迟钝的变化\n\n(手镯)",
				type: 2,
				index: 2
			},
			44: {
				icon: "44",
				name: "叶草的纯真\n\n(手镯)",
				type: 3,
				index: 2
			},
			45: {
				icon: "45",
				name: "电弧引爆源\n\n(手镯)",
				type: 4,
				index: 3
			},
			51: {
				icon: "51",
				name: "破坏的信念\n\n(腰带)",
				type: 0,
				index: 4
			},
			52: {
				icon: "52",
				name: "亘古的悬空石\n\n(腰带)",
				type: 1,
				index: 3
			},
			53: {
				icon: "53",
				name: "无法面对的骄傲\n\n(腰带)",
				type: 3,
				index: 3
			},
			54: {
				icon: "54",
				name: "配搭式表盘腰带\n\n(腰带)",
				type: 4,
				index: 4
			},
			61: {
				icon: "61",
				name: "血色结晶戒指\n\n(戒指)",
				type: 0,
				index: 5
			},
			62: {
				icon: "62",
				name: "血红生命指环\n\n(戒指)",
				type: 2,
				index: 3
			},
			63: {
				icon: "63",
				name: "闪耀的生命\n\n(戒指)",
				type: 3,
				index: 4
			},
			64: {
				icon: "64",
				name: "永不停歇的命运\n\n(戒指)",
				type: 5,
				index: 1
			},
			65: {
				icon: "65",
				name: "过电流磁环\n\n(戒指)",
				type: 7,
				index: 1
			},
			66: {
				icon: "66",
				name: "绽放的神秘之花\n\n(戒指)",
				type: 8,
				index: 1
			},
			71: {
				icon: "71",
				name: "御力装甲\n\n(上衣)",
				type: 2,
				index: 4
			},
			72: {
				icon: "72",
				name: "暗影黑西服\n\n(上衣)",
				type: 6,
				index: 1
			},
			81: {
				icon: "81",
				name: "压倒性力量\n\n(下装)",
				type: 1,
				index: 4
			},
			82: {
				icon: "82",
				name: "隐匿的自然生命\n\n(下装)",
				type: 2,
				index: 5
			},
			83: {
				icon: "83",
				name: "终极控制论\n\n(下装)",
				type: 6,
				index: 2
			},
			91: {
				icon: "91",
				name: "黑暗吞噬短靴\n\n(鞋)",
				type: 1,
				index: 5
			},
			92: {
				icon: "92",
				name: "HEM加固靴\n\n(鞋)",
				type: 2,
				index: 6
			},
			93: {
				icon: "93",
				name: "防电靴\n\n(鞋)",
				type: 3,
				index: 5
			},
			94: {
				icon: "94",
				name: "蒸汽朋克音速鞋\n\n(鞋)",
				type: 4,
				index: 5
			},
			101: {
				icon: "101",
				name: "虚拟现实眼镜\n\n(辅助装备)",
				type: 2,
				index: 7
			},
			102: {
				icon: "102",
				name: "摇曳的生命之水\n\n(辅助装备)",
				type: 5,
				index: 2
			}
		}, e.monsterMap = {
			1: {
				1: {
					num: 10,
					hp: 100,
					ap: 1,
					offX: -230,
					offY: -90,
					skill: 0,
					skin: "s_slqm_json",
					al: "108#213#0#0",
					away: 0
				},
				2: {
					num: 2,
					hp: 200,
					ap: 2,
					offX: -140,
					offY: -115,
					skill: 1,
					eid: 0,
					skin: "m_strsw_json",
					al: "110#208#0#0",
					away: 0
				},
				3: {
					num: 1,
					hp: 1e3,
					ap: 4,
					s1: 10,
					s2: 20,
					offX: 180,
					offY: 20,
					skill: 2,
					skin: "b_gzts_json",
					al: "110#221#0#27#27",
					away: 1,
					pX: -100,
					aX: 600
				}
			},
			2: {
				1: {
					num: 15,
					hp: 150,
					ap: 2,
					offX: -140,
					offY: 30,
					skill: 0,
					skin: "s_slqs_json",
					al: "107#211#0#0",
					away: 0
				},
				2: {
					num: 3,
					hp: 200,
					ap: 4,
					offX: -140,
					offY: -115,
					skill: 1,
					eid: 0,
					skin: "m_strsw_json",
					al: "110#208#0#0",
					away: 0
				},
				3: {
					num: 1,
					hp: 1500,
					ap: 8,
					s1: 20,
					s2: 30,
					s3: 40,
					offX: -350,
					offY: -120,
					skill: 2,
					skin: "b_slsw_json",
					al: "108#210#0#25",
					away: 0,
					pX: 0
				}
			},
			3: {
				1: {
					num: 20,
					hp: 200,
					ap: 4,
					offX: -120,
					offY: 0,
					skill: 0,
					skin: "s_slszj_json",
					al: "108#209#0#0",
					away: 0
				},
				2: {
					num: 5,
					hp: 400,
					ap: 8,
					offX: -160,
					offY: -150,
					skill: 1,
					eid: 0,
					skin: "m_bsssw_json",
					al: "110#208#0#0",
					away: 0
				},
				3: {
					num: 1,
					hp: 2e3,
					ap: 16,
					s1: 30,
					s2: 40,
					s3: 50,
					s4: 60,
					offX: 150,
					offY: -110,
					skill: 2,
					skin: "b_mjl_json",
					al: "108#218#0#18#18",
					away: 1,
					pX: -20,
					aX: 600
				}
			},
			4: {
				1: {
					num: 20,
					hp: 100,
					ap: 4,
					offX: -120,
					offY: 0,
					skill: 0,
					skin: "s_slszj_json",
					al: "108#209#0#0",
					away: 0
				},
				2: {
					num: 20,
					hp: 150,
					ap: 4,
					offX: -230,
					offY: -90,
					skill: 0,
					skin: "s_slqm_json",
					al: "108#213#0#0",
					away: 0
				},
				3: {
					num: 20,
					hp: 200,
					ap: 4,
					offX: -140,
					offY: 30,
					skill: 0,
					skin: "s_slqs_json",
					al: "107#211#0#0",
					away: 0
				},
				4: {
					num: 5,
					hp: 400,
					ap: 8,
					offX: -140,
					offY: -115,
					skill: 1,
					eid: 0,
					skin: "m_strsw_json",
					al: "110#208#0#0",
					away: 0
				},
				5: {
					num: 5,
					hp: 400,
					ap: 8,
					offX: -160,
					offY: -150,
					skill: 1,
					eid: 1,
					skin: "m_bsssw_json",
					al: "110#208#0#0",
					away: 0
				},
				6: {
					num: 1,
					hp: 3e3,
					ap: 32,
					s1: 40,
					s2: 50,
					s3: 60,
					s4: 80,
					offX: 100,
					offY: 20,
					skill: 2,
					skin: "b_mxe_json",
					al: "112#219#19#25#25",
					away: 1,
					pX: -40,
					aX: 500
				}
			},
			5: {
				1: {
					num: 10,
					hp: 200,
					ap: 8,
					offX: -80,
					offY: 80,
					skill: 0,
					skin: "s_dlxy_json",
					al: "106#209#0#0",
					away: 0
				},
				2: {
					num: 2,
					hp: 400,
					ap: 16,
					offX: 200,
					offY: -40,
					skill: 1,
					eid: 0,
					skin: "m_syss_json",
					al: "104#215#0#0",
					away: 1
				},
				3: {
					num: 1,
					hp: 4e3,
					ap: 32,
					s1: 40,
					s2: 60,
					offX: 160,
					offY: -40,
					skill: 2,
					skin: "b_bq_json",
					al: "106#207#0#18",
					away: 1,
					pX: -40,
					aX: 820
				}
			},
			6: {
				1: {
					num: 15,
					hp: 250,
					ap: 16,
					offX: 0,
					offY: -100,
					skill: 0,
					skin: "s_lp_json",
					al: "106#215#0#0",
					away: 0
				},
				2: {
					num: 3,
					hp: 450,
					ap: 32,
					offX: 0,
					offY: -85,
					skill: 1,
					eid: 0,
					skin: "m_syzs_json",
					al: "104#211#0#0",
					away: 0
				},
				3: {
					num: 1,
					hp: 5e3,
					ap: 64,
					s1: 60,
					s2: 80,
					s3: 100,
					offX: -15,
					offY: -60,
					skill: 2,
					skin: "b_gzgz_json",
					al: "108#216#0#16",
					away: 0,
					pX: -40
				}
			},
			7: {
				1: {
					num: 20,
					hp: 300,
					ap: 32,
					offX: 0,
					offY: -80,
					skill: 0,
					skin: "s_lp_json",
					al: "106#215#0#0",
					away: 0
				},
				2: {
					num: 5,
					hp: 500,
					ap: 64,
					offX: 0,
					offY: -85,
					skill: 1,
					eid: 0,
					skin: "m_syzs_json",
					al: "104#211#0#0",
					away: 0
				},
				3: {
					num: 1,
					hp: 6e3,
					ap: 128,
					s1: 80,
					s2: 100,
					s3: 120,
					s4: 140,
					offX: 10,
					offY: -110,
					skill: 2,
					skin: "b_azwz_json",
					al: "108#218#0#23",
					away: 0,
					pX: -40
				}
			},
			8: {
				1: {
					num: 25,
					hp: 300,
					ap: 32,
					offX: -80,
					offY: 80,
					skill: 0,
					skin: "s_dlxy_json",
					al: "106#209#0#0",
					away: 0
				},
				2: {
					num: 25,
					hp: 300,
					ap: 32,
					offX: 0,
					offY: -80,
					skill: 0,
					skin: "s_lp_json",
					al: "106#215#0#0",
					away: 0
				},
				3: {
					num: 5,
					hp: 500,
					ap: 64,
					offX: 200,
					offY: -40,
					skill: 1,
					eid: 0,
					skin: "m_syss_json",
					al: "104#215#0#0",
					away: 1
				},
				4: {
					num: 5,
					hp: 500,
					ap: 64,
					offX: 0,
					offY: -85,
					skill: 1,
					eid: 0,
					skin: "m_syzs_json",
					al: "104#211#0#0",
					away: 0
				},
				5: {
					num: 1,
					hp: 7e3,
					ap: 128,
					s1: 100,
					s2: 120,
					s3: 140,
					s4: 160,
					offX: -80,
					offY: -30,
					skill: 2,
					skin: "b_hjxc_json",
					al: "104#221#0#18#18",
					away: 0,
					pX: -40
				}
			},
			9: {
				1: {
					num: 10,
					hp: 1e3,
					ap: 32,
					offX: 60,
					offY: -30,
					skill: 0,
					skin: "s_yhzhsbv_json",
					al: "108#205#0#406"
				},
				2: {
					num: 2,
					hp: 1500,
					ap: 64,
					offX: 80,
					offY: -50,
					skill: 1,
					eid: 0,
					skin: "m_zals_json",
					al: "108#211#0#411"
				},
				3: {
					num: 1,
					hp: 1e4,
					ap: 128,
					s1: 120,
					s2: 140,
					offX: 20,
					offY: -80,
					skill: 2,
					skin: "b_jc_json",
					al: "106#224#0#0"
				}
			},
			10: {
				1: {
					num: 15,
					hp: 1200,
					ap: 64,
					offX: 0,
					offY: -20,
					skill: 0,
					skin: "s_yhzhsbn_json",
					al: "107#208#0#406"
				},
				2: {
					num: 3,
					hp: 1800,
					ap: 128,
					offX: 80,
					offY: -50,
					skill: 1,
					eid: 0,
					skin: "m_zals_json",
					al: "108#211#0#411"
				},
				3: {
					num: 1,
					hp: 13e3,
					ap: 156,
					s1: 140,
					s2: 160,
					s3: 180,
					offX: 30,
					offY: -160,
					skill: 2,
					skin: "b_yxs_json",
					al: "107#235#0#0"
				}
			},
			11: {
				1: {
					num: 20,
					hp: 1200,
					ap: 64,
					offX: 60,
					offY: -30,
					skill: 0,
					skin: "s_yhzhsbv_json",
					al: "108#205#0#406"
				},
				2: {
					num: 20,
					hp: 1200,
					ap: 64,
					offX: 0,
					offY: -20,
					skill: 0,
					skin: "s_yhzhsbn_json",
					al: "107#208#0#406"
				},
				3: {
					num: 5,
					hp: 2e3,
					ap: 128,
					offX: 80,
					offY: -50,
					skill: 1,
					eid: 0,
					skin: "m_zals_json",
					al: "108#211#0#411"
				},
				4: {
					num: 1,
					hp: 15e3,
					ap: 156,
					s1: 160,
					s2: 180,
					s3: 200,
					s4: 220,
					offY: 0,
					skill: 2,
					skin: "b_lk_json"
				}
			},
			12: {
				1: {
					num: 30,
					hp: 2e3,
					ap: 64,
					offX: 60,
					offY: -30,
					skill: 0,
					skin: "s_yhzhsbv_json",
					al: "108#205#0#406"
				},
				2: {
					num: 30,
					hp: 2e3,
					ap: 64,
					offX: 0,
					offY: -20,
					skill: 0,
					skin: "s_yhzhsbn_json",
					al: "107#208#0#406"
				},
				3: {
					num: 10,
					hp: 3e3,
					ap: 156,
					offX: 80,
					offY: -50,
					skill: 1,
					eid: 0,
					skin: "m_zals_json",
					al: "108#211#0#411"
				},
				4: {
					num: 1,
					hp: 2e4,
					ap: 200,
					s1: 180,
					s2: 200,
					s3: 220,
					s4: 240,
					offY: 0,
					skill: 2,
					skin: "b_xlk_json"
				}
			},
			13: {
				1: {
					num: 1,
					hp: 5e4,
					ap: 300,
					s1: 200,
					s2: 240,
					s3: 260,
					s4: 300,
					offY: 0,
					skill: 9
				}
			}
		}, e.monsterState = ["出血", "中毒", "灼烧", "感电", "石化", "冰冻", "诅咒", "眩晕", "失明"], e.levelData = [{
			id: "01",
			name: "白色大地",
			boss: "领主:规则天使",
			pass: "未通关"
		}, {
			id: "02",
			name: "圣殿贝里科蒂斯",
			boss: "领主:圣灵首位",
			pass: "未通关"
		}, {
			id: "03",
			name: "白色大地",
			boss: "领主:米迦勒",
			pass: "未通关"
		}, {
			id: "04",
			name: "白色大地",
			boss: "领主:使徒米歇尔",
			pass: "未通关"
		}, {
			id: "05",
			name: "王之摇篮",
			boss: "领主:贝奇",
			pass: "未通关"
		}, {
			id: "06",
			name: "海伯伦的预言所",
			boss: "领主:光之公主",
			pass: "未通关"
		}, {
			id: "07",
			name: "海伯伦的预言所",
			boss: "领主:暗之王子",
			pass: "未开放"
		}, {
			id: "08",
			name: "毁坏的寂静城",
			boss: "领主:黄金小丑",
			pass: "未开放"
		}], e.introProp = [
			[{
				icon: "equipt_json.11",
				name: "猛烈的威势(头肩)",
				desc: "-攻击敌人时，有10%几率使敌人进入出血状态\n\n-每秒出血10点\n\n-攻击出血状态的敌人额外造成10%伤害"
			}, {
				icon: "equipt_json.21",
				name: "飘扬在天空的羽毛(耳环)",
				desc: "-攻击出血状态的敌人，10%的几率造成-100出血伤害"
			}, {
				icon: "equipt_json.31",
				name: "熔丝颈链(项链)",
				desc: "-攻击敌人时，有5%几率随机赋予敌人异常状态（出血，中毒，灼伤，感电，石化，冰冻，诅咒，眩晕，失明，减速，睡眠，混乱，束缚）\n\n-攻击异常状态敌人额外造成10%伤害\n\n-敌人进入异常状态后，每秒受到异常状态伤害10点"
			}, {
				icon: "equipt_json.41",
				name: "黑化束缚手镯(手镯)",
				desc: "-攻击敌人5次，必定使敌人进入出血状态\n\n-攻击出血状态的敌人额外造成5%伤害\n\n-每秒出血10点"
			}, {
				icon: "equipt_json.51",
				name: "破坏的信念(腰带)",
				desc: "-HP最大值 +100\n\n-攻击出血状态的敌人额外造成5%伤害\n\n-击杀出血状态的敌人回复1%生命"
			}, {
				icon: "equipt_json.61",
				name: "血色结晶戒指(戒指)",
				desc: "-攻击敌人时，有10%几率使敌人进入出血状态\n\n-每秒出血10点\n\n-攻击出血状态的敌人额外造成10%伤害"
			}],
			[{
				icon: "equipt_json.12",
				name: "被污染的冰石肩甲(头肩)",
				desc: "-攻击敌人时，有10%几率使敌人进入中毒状态\n\n-中毒敌人每秒减少10点血\n\n-攻击中毒状态的敌人额外造成10%伤害"
			}, {
				icon: "equipt_json.31",
				name: "熔丝颈链(项链)",
				desc: "-攻击敌人时，有5%几率随机赋予敌人异常状态（出血，中毒，灼伤，感电，石化，冰冻，诅咒，眩晕，失明，减速，睡眠，混乱，束缚）\n\n-攻击异常状态敌人额外造成10%伤害\n\n-敌人进入异常状态后，每秒受到异常状态伤害10点"
			}, {
				icon: "equipt_json.42",
				name: "石巨人核手镯(手镯)",
				desc: "-攻击中毒状态的敌人额外造成5%伤害\n\n-中毒状态敌人每秒减少10点血"
			}, {
				icon: "equipt_json.52",
				name: "亘古的悬空石(腰带)",
				desc: "-HP最大值 +100\n\n-攻击中毒状态的敌人额外造成5%伤害"
			}, {
				icon: "equipt_json.81",
				name: "压倒性力量(下装)",
				desc: "-攻击敌人5次，必定使敌人进入中毒状态\n\n-攻击中毒状态的敌人额外造成5%伤害\n\n-中毒敌人每秒减少10点血"
			}, {
				icon: "equipt_json.91",
				name: "黑暗吞噬短靴(鞋)",
				desc: "-周围有敌人进入中毒状态时，攻速增加100%"
			}],
			[{
				icon: "equipt_json.13",
				name: "守护自由的翼肩(头肩)",
				desc: "-攻击敌人5次，必定使敌人进入灼烧状态\n\n-攻击灼烧状态的敌人额外造成5%伤害\n\n-灼烧状态敌人每秒伤害10点"
			}, {
				icon: "equipt_json.31",
				name: "熔丝颈链(项链)",
				desc: "-攻击敌人时，有5%几率随机赋予敌人异常状态（出血，中毒，灼伤，感电，石化，冰冻，诅咒，眩晕，失明，减速，睡眠，混乱，束缚）\n\n-攻击异常状态敌人额外造成10%伤害\n\n-敌人进入异常状态后，每秒受到异常状态伤害10点"
			}, {
				icon: "equipt_json.43",
				name: "迟钝的变化(手镯)",
				desc: "-HP最大值 +100\n\n-攻击灼烧状态的敌人额外造成5%伤害"
			}, {
				icon: "equipt_json.62",
				name: "血红生命指环(戒指)",
				desc: "-攻击灼烧状态的敌人额外造成10%伤害\n\n-灼烧状态敌人每秒伤害10点"
			}, {
				icon: "equipt_json.71",
				name: "御力装甲(上衣)",
				desc: "-周围有敌人进入灼烧状态时，攻速增加100%\n\n-攻击灼烧状态的敌人额外造成5%伤害"
			}, {
				icon: "equipt_json.82",
				name: "隐匿的自然生命(下装)",
				desc: "-攻击灼伤状态的敌人时， 使周围所有敌人进入灼伤状态(冷却时间10秒)\n\n-灼烧状态敌人每秒伤害10点\n\n-触发冰冻效果会触发爆炸，爆炸对敌人造成100点伤害(冷却时间10秒)"
			}, {
				icon: "equipt_json.92",
				name: "HEM加固靴(鞋)",
				desc: "-周围有敌人进入灼烧状态时，攻击力增加50%"
			}, {
				icon: "equipt_json.101",
				name: "虚拟现实眼镜(辅助装备)",
				desc: "-攻击灼烧状态的敌人额外造成20%伤害"
			}],
			[{
				icon: "equipt_json.14",
				name: "玉化亡灵肩甲(头肩)",
				desc: "-10秒自动给周围敌人赋予感电状态\n\n-攻击感电状态敌人增加10%伤害"
			}, {
				icon: "equipt_json.31",
				name: "熔丝颈链(项链)",
				desc: "-攻击敌人时，有5%几率随机赋予敌人异常状态（出血，中毒，灼伤，感电，石化，冰冻，诅咒，眩晕，失明，减速，睡眠，混乱，束缚）\n\n-攻击异常状态敌人额外造成10%伤害\n\n-敌人进入异常状态后，每秒受到异常状态伤害10点"
			}, {
				icon: "equipt_json.44",
				name: "叶草的纯真(手镯)",
				desc: "-攻击感电状态的敌人时额外造成10%伤害\n\n-击杀感电状态敌人攻速增加100%（持续10s，CD10s）"
			}, {
				icon: "equipt_json.53",
				name: "无法面对的骄傲(腰带)",
				desc: "-周围有敌人进入感电状态时，攻速增加100%\n\n-攻击感电状态的敌人额外造成10%伤害"
			}, {
				icon: "equipt_json.63",
				name: "闪耀的生命(戒指)",
				desc: "-攻击感电状态的敌人，大招造成的伤害增加50%"
			}, {
				icon: "equipt_json.93",
				name: "防电靴(鞋)",
				desc: "-周围有敌人进入感电状态时，攻击力增加50%\n\n-攻击感电状态的敌人额外造成5%伤害"
			}],
			[{
				icon: "equipt_json.15",
				name: "六角形脉冲块(头肩)",
				desc: "-攻击敌人时，有10%几率使敌人进入石化状态（石化时间2s）\n\n-攻击石化状态的敌人，伤害增加20%"
			}, {
				icon: "equipt_json.22",
				name: "内核芯片(耳环)",
				desc: "-石化时间+1s\n\n-攻击石化状态的敌人，伤害增加20%"
			}, {
				icon: "equipt_json.31",
				name: "熔丝颈链(项链)",
				desc: "-攻击敌人时，有5%几率随机赋予敌人异常状态（出血，中毒，灼伤，感电，石化，冰冻，诅咒，眩晕，失明，减速，睡眠，混乱，束缚）\n\n-攻击异常状态敌人额外造成10%伤害\n\n-敌人进入异常状态后，每秒受到异常状态伤害10点"
			}, {
				icon: "equipt_json.45",
				name: "电弧引爆源(手镯)",
				desc: "-石化时间+1s\n\n-攻击石化状态的敌人，大招造成的伤害增加50%"
			}, {
				icon: "equipt_json.54",
				name: "配搭式表盘腰带(腰带)",
				desc: "-攻击石化状态的敌人，伤害增加10%\n\n-石化时间+1s"
			}, {
				icon: "equipt_json.94",
				name: "蒸汽朋克音速鞋(鞋)",
				desc: "-周围有敌人进入石化状态，攻速增加100%\n\n-石化时间+1s"
			}],
			[{
				icon: "equipt_json.31",
				name: "熔丝颈链(项链)",
				desc: "-攻击敌人时，有5%几率随机赋予敌人异常状态（出血，中毒，灼伤，感电，石化，冰冻，诅咒，眩晕，失明，减速，睡眠，混乱，束缚）\n\n-攻击异常状态敌人额外造成10%伤害\n\n-敌人进入异常状态后，每秒受到异常状态伤害10点"
			}, {
				icon: "equipt_json.64",
				name: "永不停歇的命运(戒指)",
				desc: "-攻击敌人时，有10%几率使敌人进入冰冻状态；（冰冻时间2s）\n\n-攻击冰冻状态的敌人，伤害增加20%"
			}, {
				icon: "equipt_json.102",
				name: "摇曳的生命之水(辅助装备)",
				desc: "-攻击冰冻敌人5次，冰冻时间+1s\n\n-攻击冰冻状态的敌人，伤害增加10%"
			}],
			[{
				icon: "equipt_json.31",
				name: "熔丝颈链(项链)",
				desc: "-攻击敌人时，有5%几率随机赋予敌人异常状态（出血，中毒，灼伤，感电，石化，冰冻，诅咒，眩晕，失明，减速，睡眠，混乱，束缚）\n\n-攻击异常状态敌人额外造成10%伤害\n\n-敌人进入异常状态后，每秒受到异常状态伤害10点"
			}, {
				icon: "equipt_json.72",
				name: "暗影黑西服(上衣)",
				desc: "-攻击敌人时，有10%几率使敌人进入诅咒状态（持续10s）\n\n-击杀诅咒状态敌人时， 恢复1%生命"
			}, {
				icon: "equipt_json.83",
				name: "终极控制论(下装)",
				desc: "-诅咒状态下的敌人伤害降低10%（持续10s）\n\n-攻击5次，必定使敌人进入诅咒状态（持续10s，不可叠加，如敌人已在诅咒状态不会触发该效果）"
			}],
			[{
				icon: "equipt_json.31",
				name: "熔丝颈链(项链)",
				desc: "-攻击敌人时，有5%几率随机赋予敌人异常状态（出血，中毒，灼伤，感电，石化，冰冻，诅咒，眩晕，失明，减速，睡眠，混乱，束缚）\n\n-攻击异常状态敌人额外造成10%伤害\n\n-敌人进入异常状态后，每秒受到异常状态伤害10点"
			}, {
				icon: "equipt_json.65",
				name: "过电流磁环(戒指)",
				desc: "-攻击敌人时，有10%几率使敌人进入眩晕状态；（持续2s）\n\n-攻击眩晕状态的敌人，伤害增加20%"
			}],
			[{
				icon: "equipt_json.31",
				name: "熔丝颈链(项链)",
				desc: "-攻击敌人时，有5%几率随机赋予敌人异常状态（出血，中毒，灼伤，感电，石化，冰冻，诅咒，眩晕，失明，减速，睡眠，混乱，束缚）\n\n-攻击异常状态敌人额外造成10%伤害\n\n-敌人进入异常状态后，每秒受到异常状态伤害10点"
			}, {
				icon: "equipt_json.66",
				name: "绽放的神秘之花(戒指)",
				desc: "--攻击敌人时，有10%几率使敌人进入失明状态（持续2s，失明状态敌人攻击100%无法击中角色）\n\n-攻击失明状态的敌人，伤害增加20%"
			}]
		], e.giftData = [{
			icon: "icon_png",
			title: "第1关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第2关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第3关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第4关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第5关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第6关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第7关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第8关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第9关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第10关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第11关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第12关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}, {
			icon: "icon_png",
			title: "第13关奖励",
			name: "白色大地",
			geticon: "item_no_png",
			pkgid: 0
		}], e.giftName = ["黑钻会员1天", "黑钻会员2天", "黑钻会员3天", "黑钻会员5天", "黑钻会员7天", "黑钻会员9天", "黑钻会员11天", "黑钻会员13天", "黑钻会员15天", "黑钻会员20天", "黑钻会员30天", "黑钻会员45天", "黑钻会员60天"], e
	}();
	window.Config = n, __reflect(n.prototype, "Config", [])
}, function(e, t) {
	var i = function() {
		function e() {}
		return e.Decrypt = function(e) {
			var t = CryptoJS.enc.Utf8.parse("20223165129326PK"),
				i = CryptoJS.enc.Utf8.parse("PK12932620223165"),
				n = CryptoJS.AES.decrypt(e, t, {
					mode: CryptoJS.mode.CBC,
					padding: CryptoJS.pad.Pkcs7,
					iv: i
				}).toString(CryptoJS.enc.Utf8);
			return n
		}, e.FCMDecrypt = function(e) {
			var t = CryptoJS.enc.Utf8.parse("20210622163820DN"),
				i = CryptoJS.enc.Utf8.parse("DN16382020210622"),
				n = CryptoJS.AES.decrypt(e, t, {
					mode: CryptoJS.mode.CBC,
					padding: CryptoJS.pad.Pkcs7,
					iv: i
				}).toString(CryptoJS.enc.Utf8);
			return n
		}, e.Encrypt = function(e) {
			var t = CryptoJS.enc.Utf8.parse("20223165129326PK"),
				i = CryptoJS.enc.Utf8.parse("PK12932620223165"),
				n = CryptoJS.AES.encrypt(e, t, {
					iv: i,
					mode: CryptoJS.mode.CBC,
					padding: CryptoJS.pad.Pkcs7
				}).toString();
			return n
		}, e.Md5 = function(e) {
			return CryptoJS.MD5(e, 1).toString()
		}, e
	}();
	window.Des = i, __reflect(i.prototype, "Des", [])
}, function(e, t) {
	var i = function() {
		function e() {
			this.isH5 = !0, this.isQQ = !1, this.isWX = !1, this.openDataContext = {
				postMessage: function() {},
				createDisplayObject: function() {}
			}, this.isWxgame = !1, this.isQqgame = !1, this.isH5game = !0
		}
		return e.prototype.login = function() {
			return __awaiter(this, void 0, void 0, function() {
				return __generator(this, function(e) {
					return [2]
				})
			})
		}, e.prototype.getUserInfo = function(e) {
			e({
				nickName: "hello",
				avatarUrl: "Img"
			})
		}, e.prototype.getOpenidByMilo = function() {
			return __awaiter(this, void 0, void 0, function() {
				return __generator(this, function(e) {
					return [2, {
						openid: "openid",
						ieg_ams_session_token: "amsToken",
						ieg_ams_token: "amsToken"
					}]
				})
			})
		}, e.prototype.callWx = function(e, t) {
			console.log(">> call wx api :", e, t)
		}, e.prototype.initShare = function(e) {
			console.log(">> init share:", e)
		}, e.prototype.callShare = function(e) {
			console.log(">> handle click share:", e)
		}, e.prototype.alert = function(e) {
			window.alert ? window.alert(e) : console.log(">> platform.alert :", e)
		}, e.prototype.getEntryOptions = function() {
			return {}
		}, e.prototype.fetchAPI = function(e) {
			return __awaiter(this, void 0, void 0, function() {
				var t;
				return __generator(this, function(i) {
					switch (i.label) {
						case 0:
							return [4, this[e.action]()];
						case 1:
							return t = i.sent(), console.log(">> main fetch ", e.action, t), [2, t]
					}
				})
			})
		}, e
	}();
	window.DebugPlatform = i, __reflect(i.prototype, "DebugPlatform", ["Platform"]), window.platform || (window.platform = new i)
}, function(e, t) {
	var i = function() {
		function e() {
			this.baseUrl = ""
		}
		return Object.defineProperty(e, "instance", {
			get: function() {
				return this.http || (this.http = new e), this.http
			},
			enumerable: !1,
			configurable: !0
		}), e.prototype.request = function(e) {
			var t = this,
				i = e.method,
				n = void 0 === i ? egret.HttpMethod.GET : i,
				s = e.url,
				r = e.params,
				o = void 0 === r ? {} : r,
				a = e.headers,
				h = void 0 === a ? {} : a;
			/http(|s):\/\//.test(s) || (s = this.baseUrl + s);
			var l = "",
				p = {};
			p["Content-Type"] = "application/x-www-form-urlencoded";
			for (var c in h) p[c] = h[c];
			if ("application/json" === p["Content-Type"]) l = JSON.stringify(o), l = l.replace(/\+/g, "%2B").replace(/\&/g, "%26");
			else {
				for (var c in o) l += c + "=" + ("" + o[c]).replace(/\&/g, "%26") + "&";
				l = l.replace(/\+/g, "%2B"), l.length > 0 && (l = l.substring(0, l.length - 1), n === egret.HttpMethod.GET && (s += "?" + l))
			}
			return new Promise(function(e, i) {
				function r(t, n) {
					void 0 === n && (n = !0);
					var s;
					try {
						s = JSON.parse(o.response), "101" == s.iRet ? (Log.info("未登录情况！"), alert("登录已失效，请重新进入"), window.LoginManager && !window.isApp && (window.LoginManager.logout(), window.LoginManager.login())) : s.iRet < 0 ? alert("系统繁忙，请稍后再试") : 0 != s.iRet && alert(s.sMsg)
					} catch (r) {
						s = o.response
					}
					if (n) {
						var a = s.jData ? s.jData : s;
						e(a)
					} else i(s)
				}
				var o = new egret.HttpRequest;
				o.withCredentials = !0, o.responseType = egret.HttpResponseType.TEXT, o.open(s, n);
				for (var a in p) o.setRequestHeader(a, p[a]);
				n === egret.HttpMethod.GET ? o.send() : o.send(l), o.addEventListener(egret.Event.COMPLETE, function(e) {
					r(e)
				}, t), o.addEventListener(egret.IOErrorEvent.IO_ERROR, function(e) {
					r(e, !1)
				}, t)
			})
		}, e.prototype.setBaseUrl = function(e) {
			this.baseUrl = e
		}, e.prototype.get = function(e, t, i) {
			return void 0 === t && (t = {}), void 0 === i && (i = {}), this.request({
				url: e,
				params: t,
				headers: i
			})
		}, e.prototype.post = function(e, t, i) {
			return void 0 === t && (t = {}), void 0 === i && (i = {}), this.request({
				url: e,
				method: egret.HttpMethod.POST,
				params: t,
				headers: i
			})
		}, e.prototype.emit = function(e) {
			return milo.emit(e)
		}, e
	}();
	window.HttpRequest = i, __reflect(i.prototype, "HttpRequest", [])
}, function(e, t) {
	var i = function() {
		function e() {}
		return e.info = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			this.isOpen && console.info(e)
		}, e.error = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			this.isOpen && console.error(e)
		}, e.isOpen = !1, e
	}();
	window.Log = i, __reflect(i.prototype, "Log", [])
}, function(e, t) {
	var i = function() {
		function e() {}
		return e.createBitmapByName = function(e) {
			var t = new egret.Bitmap,
				i = RES.getRes(e);
			return t.texture = i, t
		}, e.LoadResConfig = function() {
			return __awaiter(this, void 0, void 0, function() {
				return __generator(this, function(e) {
					switch (e.label) {
						case 0:
							return [3, 2];
						case 1:
							return e.sent(), [3, 4];
						case 2:
							return [4, RES.loadConfig("https://game.gtimg.cn/images/dnf/mingame/adventure/default.res.json", "https://game.gtimg.cn/images/dnf/mingame/adventure/")];
						case 3:
							e.sent(), e.label = 4;
						case 4:
							return [2]
					}
				})
			})
		}, e.getRandomIndex = function(e, t) {
			return void 0 === e && (e = 0), void 0 === t && (t = 50), e >= t ? 0 : Math.ceil(Math.random() * (t - e)) + e
		}, e.Number2Text = function(e) {
			var t = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
			return t[e]
		}, e.getAdByLevel = function() {
			return Config.adLevel[0]
		}, e.loadImageByUrl = function(e, t) {
			try {
				RES.getResByUrl(e.url, function(i) {
					t && t({
						status: 1,
						event: i,
						item: e
					})
				})
			} catch (i) {
				Log.error(i), t && t({
					status: 0
				})
			}
		}, e
	}();
	window.Tools = i, __reflect(i.prototype, "Tools", [])
}, function(e, t) {
	var i = function() {
		function e() {}
		return e.preUrl = "https://comm.ams.game.qq.com/ide/?", e.queryFCM = e.preUrl + "sIdeToken=dVJRhD&iChartId=106543&iSubChartId=106543", e.init = {
			url: e.preUrl + "sIdeToken=jiru1Z&iChartId=132479&iSubChartId=132479",
			actId: "97_x6laWw",
			flowToken: "jiru1Z"
		}, e.getGiftList = {
			url: e.preUrl + "sIdeToken=Hh78RT&iChartId=134238&iSubChartId=134238",
			actId: "97_x6laWw",
			flowToken: "Hh78RT"
		}, e.getMyGift = {
			url: e.preUrl + "sIdeToken=PTHsdc&iChartId=132751&iSubChartId=132751",
			actId: "97_x6laWw",
			flowToken: "PTHsdc"
		}, e.getData = {
			url: e.preUrl + "sIdeToken=k3xALs&iChartId=133796&iSubChartId=133796",
			actId: "97_x6laWw",
			flowToken: "k3xALs"
		}, e.submitData = {
			url: e.preUrl + "sIdeToken=VWJW4O&iChartId=133941&iSubChartId=133941",
			actId: "97_x6laWw",
			flowToken: "VWJW4O"
		}, e.getAward = {
			url: e.preUrl + "sIdeToken=oPDdpz&iChartId=134008&iSubChartId=134008",
			actId: "97_x6laWw",
			flowToken: "oPDdpz"
		}, e.getAuth = {
			url: e.preUrl + "sIdeToken=QuND3R&iChartId=132710&iSubChartId=132710",
			actId: "97_x6laWw",
			flowToken: "QuND3R"
		}, e.setAuth = {
			url: e.preUrl + "sIdeToken=D4IxI8&iChartId=132541&iSubChartId=132541",
			actId: "97_x6laWw",
			flowToken: "D4IxI8"
		}, e.getFriendList = {
			url: e.preUrl + "sIdeToken=1OrLcq&iChartId=134193&iSubChartId=134193",
			actId: "97_x6laWw",
			flowToken: "1OrLcq"
		}, e.renew = {
			url: e.preUrl + "sIdeToken=fB0aZC&iChartId=134326&iSubChartId=134326",
			actId: "97_x6laWw",
			flowToken: "fB0aZC"
		}, e.inviteFriend = {
			url: e.preUrl + "sIdeToken=IR0OeB&iChartId=134194&iSubChartId=134194",
			actId: "97_x6laWw",
			flowToken: "IR0OeB"
		}, e.appInvite = {
			url: e.preUrl + "sIdeToken=RFVCC7&iChartId=134261&iSubChartId=134261",
			actId: "97_x6laWw",
			flowToken: "RFVCC7"
		}, e.eliteSubmit = {
			url: e.preUrl + "sIdeToken=ksn1W3&iChartId=139917&iSubChartId=139917",
			actId: "97_x6laWw",
			flowToken: "ksn1W3"
		}, e
	}();
	window.UrlConfig = i, __reflect(i.prototype, "UrlConfig", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			return null !== e && e.apply(this, arguments) || this
		}
		return __extends(t, e), t.prototype.refresh = function() {
			this.dispatchEvent(new egret.Event(egret.Event.CHANGE))
		}, t
	}(egret.EventDispatcher);
	window.Model = i, __reflect(i.prototype, "Model", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.skinName = "resource/eui_skins/AwardEquItem.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.creat, t), t
		}
		return __extends(t, e), t.prototype.creat = function() {}, t.prototype.getCurrentState = function() {
			return this.selected ? "selected" : "normal"
		}, t
	}(eui.ItemRenderer);
	window.AwardEquItem = i, __reflect(i.prototype, "AwardEquItem", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.skinName = "resource/eui_skins/EquipItem.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.creat, t), t
		}
		return __extends(t, e), t.prototype.creat = function() {}, t
	}(eui.ItemRenderer);
	window.EquipItem = i, __reflect(i.prototype, "EquipItem", [])
}, function(e, t) {
	var i = function(e) {
		function t(t, i) {
			var n = e.call(this) || this;
			return n.width = egret.MainContext.instance.stage.stageWidth, n.height = egret.MainContext.instance.stage.stageHeight, n.title = t, n.msg = i, n.init(), n
		}
		return __extends(t, e), t.prototype.init = function() {
			var e = new egret.Sprite;
			e.graphics.beginFill(0), e.graphics.drawRect(0, 0, this.width, this.height), e.graphics.endFill(), e.alpha = .5, this.addChild(e);
			var t = Tools.createBitmapByName("fcm_json.pop1");
			t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2, t.x = this.width / 2, t.y = this.height / 2, this.addChild(t);
			var i = new egret.TextField;
			i.text = this.title, i.size = 20, i.textColor = 16631552, i.width = this.width, i.textAlign = egret.HorizontalAlign.CENTER, i.y = t.y + 30, this.addChild(i);
			var n = Tools.createBitmapByName("fcm_json.btn-sure-on");
			n.anchorOffsetX = n.width / 2, n.anchorOffsetY = n.height / 2, n.y = t.y + 230, n.x = t.x, this.addChild(n), this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this), n.touchEnabled = !0;
			var s = new egret.TextField;
			s.height = 150;
			var r = 25;
			s.width = t.width - 2 * r, s.x = t.x - t.width / 2 + r, s.y = t.y + 60, this.addChild(s), s.text = this.msg, s.size = 20, s.textColor = 13876364, s.textAlign = egret.HorizontalAlign.CENTER, s.verticalAlign = egret.VerticalAlign.MIDDLE, s.lineSpacing = 10
		}, t.prototype.onButtonClick = function(e) {
			this.dispatchEvent(new egret.Event("close")), e.stopPropagation()
		}, t.prototype.close = function() {
			this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this), this.removeChildren(), this.parent && this.parent.removeChild(this)
		}, t
	}(egret.DisplayObjectContainer);
	window.FcmDialog = i, __reflect(i.prototype, "FcmDialog", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.cdArr = [15, 20, 30, 90], t.monsterList = {}, t.longMonList = {}, t.mBatleList = {}, t.bOnRun = !1, t.mNum = 0, t.mPreNum = 0, t.bOver = !1, t.bPause = !1, t.attackTime = 0, t.acceptTime = 0, t.totalRnd = 0, t.curRnd = 0, t.preHp = 0, t.preAp = 0, t.preAs = 0, t.bOpen = !1, t.skillData = {
				1: [],
				2: [],
				3: [],
				4: []
			}, t.reviveData = [], t.pageId = 1, t.bInRequest = !1, t.bossPkgData = [], t.friendList = [], t.invId = -1, t.gameDataArr = {}, t.height = egret.MainContext.instance.stage.stageHeight, t.skinName = "resource/eui_skins/Game.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.completeFun, t), t
		}
		return __extends(t, e), t.getInstance = function() {
			return null == t.instance && (t.instance = new t), t.instance
		}, t.prototype.completeFun = function() {
			this.initLayout(), this.initData(), this.eventListen(), RES.loadGroup("B" + Config.level)
		}, t.prototype.initLayout = function() {
			this.person = new Person, this.gp_owner.addChild(this.person), this.group_down.y = this.height - this.group_down.height - 20, this.gp_owner.y = this.group_down.y - 160, this.im_ground.y = this.gp_owner.y - 710, Log.info("自适应适配：", this.height, this.group_down.y, this.im_ground.y);
			var e = [{
				icon: "game_ele_json.s1",
				name: "万剑之巅"
			}, {
				icon: "game_ele_json.s2",
				name: "魔剑奥义"
			}, {
				icon: "game_ele_json.s3",
				name: "魔剑觉醒"
			}, {
				icon: "game_ele_json.s4",
				name: "时空斩"
			}];
			if (Config.passLevel < 4)
				for (var t = 0; t < 3 - Config.passLevel; t++) e[3 - t].icon = "s" + (4 - t) + "_gray_png";
			var i = e;
			this.tList.dataProvider = new eui.ArrayCollection(i), this.tList.itemRenderer = SkillItem, this.tList.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onSkillListItemTap, this), this.award_scro.viewport = this.award_list, this.award_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onAwardItemTap, this), this.prop_list.dataProvider = new eui.ArrayCollection(Config.monsterState), this.prop_list.itemRenderer = SuitItem, this.prop_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onListItemTap, this), this.suit_scrol.viewport = this.suit_introlist, this.suit_introlist.dataProvider = new eui.ArrayCollection(Config.introProp[0]), this.suit_introlist.itemRenderer = IntroItem, this.prop_list.selectedIndex = 0, Config.ggList.indexOf("43") >= 0 && (this.person.hpMax += 100, this.person.setHp(100, 0)), Config.ggList.indexOf("51") >= 0 && (this.person.hpMax += 100, this.person.setHp(100, 0)), Config.ggList.indexOf("52") >= 0 && (this.person.hpMax += 100, this.person.setHp(100, 0))
		}, t.prototype.initData = function() {
			var e = this;
			this.sRandom = Math.random(), this.mNum = 0, this.monsterList = {}, this.mBatleList = {}, this.gameDataArr = {};
			var t = this.getChildIndex(this.im_bg),
				i = this.getChildIndex(this.im_ground);
			Log.info("深度index：", t, i), 3 == Config.level ? (this.im_bg.source = "l3_png", this.im_ground.source = "b3_png", this.swapChildren(this.im_bg, this.im_ground)) : (this.im_bg.source = "l" + Config.level + "_jpg", this.im_ground.source = "b" + Config.level + "_png", t > i && this.swapChildren(this.im_bg, this.im_ground)), HttpRequest.instance.post(UrlConfig.getData.url, {
				iLevel: Config.level,
				sRandom: this.sRandom
			}).then(function(t) {
				if (0 == t.iRet && t.data) {
					var i = Des.Decrypt(t.data),
						n = i.lastIndexOf("}");
					i = i.substr(0, n + 1);
					var s = JSON.parse(decodeURIComponent(i));
					if (Log.isOpen && console.log("开局解密的结果是：", s, s.sRandom, e.sRandom), s.sRandom != e.sRandom) return void e.goHome();
					if (e.formToken = s.formToken, s.sGgList.length) {
						Config.ggList = s.sGgList.split(",");
						var r = [];
						Config.ggList.length && (Config.ggList.forEach(function(e) {
							r.push("equipt_json." + e)
						}), Log.info("装备列表：", r), e.equiList.dataProvider = new eui.ArrayCollection(r), e.equiList.itemRenderer = EquipItem)
					}
					e.usrToken = s.sUserToken, e.levelData = JSON.parse(s.sLevelData)
				} else alert("系统繁忙，请稍后再试！")
			}), this.resetData()
		}, t.prototype.resetData = function() {
			this.monsterList = {}, this.mBatleList = {}, clearInterval(this.monsterTimer), this.monsterTimer = null, this.curRndObj = Config.monsterMap[Config.level][Config.roundId], Log.info(" - 当前等级:" + Config.level + " - 当前轮次：" + Config.roundId, this.curRndObj), this.bOnRun = !1, this.bOver = !1, this.totalRnd = Object.keys(Config.monsterMap[Config.level]).length
		}, t.prototype.eventListen = function() {
			this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goHome, this), this.btn_go.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGo, this), this.person.addEventListener("fzDead", this.fzDead, this), this.person.addEventListener("fzHit", this.aMonster, this), this.c_continue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.goNextLevel, this), this.i_change.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeFriend, this);
			for (var e = [this.i_renew, this.n_share, this.award_close, this.suit_close, this.i_close], t = [this.c_back, this.c_return, this.n_back], i = 0; i < e.length; i++) e[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.closePop, this);
			for (var n = 0; n < t.length; n++) t[n].addEventListener(egret.TouchEvent.TOUCH_TAP, this.goHome, this);
			this.in_auth.addEventListener(egret.Event.CHANGE, this.onChange, this), this.list_chck.addEventListener(egret.Event.CHANGE, this.onChange, this), egret.startTick(this.onUpdate, this), this.equ_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onEquBossListItemTap, this), this.invt_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onInviteListItemTap, this), this.btn_preview.addEventListener(egret.TouchEvent.TOUCH_TAP, this.privewAward, this), this.btn_suit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.privewSuit, this), this.im_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkEqu, this)
		}, t.prototype.closePop = function(e) {
			var t = this;
			this.game_mask.visible = !1, this.group_renew.visible = !1, this.group_award.visible = !1, this.group_fail.visible = !1, this.group_succ.visible = !1, this.group_invite.visible = !1, this.group_awardlist.visible = !1, this.group_suit.visible = !1, this.bOpen = !1, e.currentTarget == this.i_renew ? Config.helpLife > 0 ? HttpRequest.instance.post(UrlConfig.renew.url, {
				sRandom: this.sRandom
			}).then(function(e) {
				0 == e.iRet && (Config.helpLife--, t.reviveData.push(t.person.aTimes), t.person.reset(1), t.bOnRun = !1, t.bOver = !1, Object.keys(t.mBatleList).length < 1 && (Log.info("没有攻击的，可以往前走一下"), t.person.playWalk(), t.bOnRun = !0), Object.keys(t.monsterList).forEach(function(e) {
					t.monsterList[e].resume()
				}), setTimeout(function() {
					t.person.startAttack()
				}, 250))
			}) : (this.n_cnt.text = "分享好友增加复活次数（" + Config.inviteNum + "/3）", this.game_mask.visible = !0, this.group_renew.visible = !0, this.setChildIndex(this.group_renew, 92)) : e.currentTarget == this.n_share ? window.isApp ? (window.appShare(), HttpRequest.instance.post(UrlConfig.appInvite.url).then(function(e) {
				0 == e.iRet && (Config.helpLife = e.iCoin, Config.inviteNum = e.inviteNum, t.game_mask.visible = !0, t.group_fail.visible = !0)
			})) : (this.game_mask.visible = !0, this.group_invite.visible = !0, this.setChildIndex(this.group_invite, 93), HttpRequest.instance.post(UrlConfig.getAuth.url, {
				isDoRelation: 1
			}).then(function(e) {
				0 == e.iRet && (e.isAuthShowRelation ? t.getFriend() : t.cancelFriend())
			})) : e.currentTarget == this.award_close || e.currentTarget == this.suit_close ? this.doResume() : e.currentTarget == this.i_close && (this.game_mask.visible = !0, Config.helpLife > 0 ? this.group_fail.visible = !0 : (this.n_cnt.text = "分享好友增加复活次数（" + Config.inviteNum + "/3）", this.group_renew.visible = !0))
		}, t.prototype.checkEqu = function() {
			this.bossPkgData.length > 1 && this.equ_list.selectedIndex < 0 ? alert("请先选择一个装备") : (this.game_mask.visible = !1, this.group_award.visible = !1, 1 == this.curRndObj.skill ? (Config.roundId = Config.roundId + 1, this.resetData(), this.startOff()) : 2 == this.curRndObj.skill && this.submit())
		}, t.prototype.getFriend = function() {
			var e = this;
			this.g_auth.visible = !1, this.list_chck.visible = !0, this.list_chck.selected = !0, this.invt_list.visible = !0, HttpRequest.instance.post(UrlConfig.getFriendList.url, {
				page: this.pageId,
				pageSize: 6
			}).then(function(t) {
				0 == t.iRet && t.list && t.list.length && (e.friendList = t.list, e.invt_list.dataProvider = new eui.ArrayCollection(t.list), e.invt_list.itemRenderer = InviteItem)
			})
		}, t.prototype.cancelFriend = function() {
			this.g_auth.visible = !0, this.list_chck.visible = !1, this.invt_list.visible = !1, this.in_auth.selected = !1
		}, t.prototype.onUpdate = function() {
			var e = this;
			if (!this.bOver && !this.bPause) return this.bOnRun && (1 == Config.roundId ? this.im_ground.x -= 4 : Config.roundId > 2 && this.curMonster && this.curMonster.bOnBattle && this.curMonster.isBoss ? (this.im_ground.x -= 3, this.curMonster.body.x -= 3, this.curMonster.hpBar.x -= 3) : this.im_ground.x -= 3, Object.keys(this.longMonList).length > 0 && Object.keys(this.longMonList).forEach(function(t) {
				e.longMonList[t].setPosition(), t && !e.mBatleList[t] && (e.mBatleList[t] = e.longMonList[t], Log.isOpen && console.log("添加一个战斗中的远程怪物：", t))
			})), this.im_ground.x <= -2250 && (this.im_ground.x = 0), !0
		}, t.prototype.goHome = function() {
			var e = this;
			window.report && window.report("btn_backHome", "返回首页"), Object.keys(this.monsterList).forEach(function(t) {
				e.monsterList[t].destroy()
			}), this.person.destroy(), this.destroy(), this.parent && (Home.getInstance().refreshData(), this.parent.removeChild(this))
		}, t.prototype.destroy = function() {
			this.btn_back.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.goHome, this), this.btn_go.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startOff, this), this.person.removeEventListener("fzDead", this.fzDead, this), this.person.removeEventListener("fzHit", this.aMonster, this), egret.stopTick(this.onUpdate, this), t.instance = null, this.removeChildren()
		}, t.prototype.startGo = function() {
			window.report && window.report("btn_go", "开始游戏"), this.startOff()
		}, t.prototype.startOff = function() {
			this.btn_go.visible = !1, this.bOnRun = !0, 1 == Config.roundId ? this.person.playRun() : this.person.playWalk(), this.curRnd++;
			var e = Math.floor(636 * this.curRnd / this.totalRnd);
			e = e > 636 ? 636 : e, egret.Tween.get(this.im_progress).to({
				width: e
			}, 8e3), this.addMonster()
		}, t.prototype.addMonster = function() {
			var e = this;
			this.monsterTimer = setInterval(function() {
				if (e.monsterTimer && !e.bOver && !e.bPause) {
					var t = new Monster;
					t.y = e.gp_owner.y - 740, e.addChild(t), e.swapChildren(t, e.group_down);
					var i = e.mNum + 1;
					t.id = i, e.monsterList[t.id] = t, Log.info("开始出现第" + i + "个怪物", e.monsterList), 1 == t.away && (e.longMonList[t.id] = t), i - e.mPreNum >= e.curRndObj.num && (clearInterval(e.monsterTimer), e.monsterTimer = null, Log.info("当前第" + e.curRndObj.num + "波怪物已出完！"), e.mPreNum = i), e.mNum = i, t.addEventListener("monsterHit", e.aFz, e), t.addEventListener("monsterDead", e.monsterDead, e)
				}
			}, 3e3)
		}, t.prototype.fzDead = function() {
			var e = this;
			Log.info("当前雪人挂啦～", this.monsterList), this.gameDataArr["" + this.person.aTimes] = {
				hero: {
					die: 1,
					hp: 0,
					ap: this.person.ap,
					as: this.person.as
				}
			}, this.bOver = !0, clearInterval(this.monsterTimer), this.monsterTimer = null, Object.keys(this.monsterList).forEach(function(t) {
				e.monsterList[t].pause()
			}), this.showFail()
		}, t.prototype.aFz = function(e) {
			var t = this,
				i = e.currentTarget;
			if (!this.bOver && !i.isDead && this.monsterList[i.id]) {
				this.mBatleList[i.id] || 0 != i.away || (this.mBatleList[i.id] = i), this.curMonster || (this.curMonster = i);
				var n = (new Date).getTime();
				if (this.bOnRun && (Log.info("雪人受到攻击啦～～～开始攻击～"), 0 == i.away ? (this.bOnRun = !1, setTimeout(function() {
						t.person.startAttack()
					}, 360)) : setTimeout(function() {
						Log.info("雪人受到攻击啦～～～开始攻击！！！"), null == t.curMonster && Object.keys(t.mBatleList).length < 1 || (t.bOnRun = !1, t.person.startAttack())
					}, 1220)), n - this.acceptTime > 1e3 && !this.bOnRun && (this.acceptTime = (new Date).getTime(), this.person.acceptHit()), i.stateList[Buff.blind]);
				else if (i.stateList[Buff.curse]) this.person.setHp(.9 * i.ap);
				else {
					var s = i.ap;
					if (2 == this.curRndObj.skill && this.levelData.bossSkillList && this.curMonster)
						for (var r = this.levelData.bossSkillList, o = r.times.length, a = 0; o > a; a++) {
							if (Log.isOpen && console.log("判断是否要下发boss技能：", a, this.curMonster.aTimes), r.times[a] == this.curMonster.aTimes) {
								Log.info("boss砍之前：", s, r, this.levelData), s += this.curRndObj["s" + r.sid[a]], Log.info("+boss砍之后：", s, this.curMonster), this.curMonster.playEff = !0;
								break
							}
							if (r.times[a] > this.curMonster.aTimes) break
						}
					Log.isOpen && console.log("===>雪人的血量：", s, i.id), this.person.setHp(s)
				}
			}
		}, t.prototype.aMonster = function() {
			var e = this;
			if (Log.isOpen && console.log("aMonster!!!", this.bOver, this.curMonster, this.mBatleList), !this.bOver && this.curMonster) {
				var t = 0;
				t = this.person.ap + .5 * this.person.apBuff.length * this.person.ap;
				var i = this.mBatleList;
				Object.keys(i).forEach(function(n) {
					var s = i[n];
					if (s && !s.isDead && s.bOnBattle) {
						e.calMonsterState(s);
						var r = e.calMonsExtraHurt(s);
						Log.info("+++怪物id:" + s.id + "受到的伤害是：", t, r, n), t += r, setTimeout(function() {
							s.setHp(t)
						}, 175)
					}
				})
			}
		}, t.prototype.monsterDead = function(e) {
			var t = this,
				i = e.currentTarget;
			if (this.monsterList[i.id] && (Log.info("==怪物ID：" + i.id + " 死了！", this.bOver, i.isDead), delete this.monsterList[i.id], this.mBatleList[i.id] && delete this.mBatleList[i.id], this.longMonList[i.id] && delete this.longMonList[i.id], i.removeEventListener("monsterHit", this.aFz, this), i.removeEventListener("monsterDead", this.monsterDead, this), Log.isOpen && console.log("==当前怪物-" + i.id + "-死了!"), this.curMonster && this.curMonster.id == i.id && (this.curMonster = null), !this.bOver && !i.isDead))
				if (i.stateList[Buff.electric] && Config.ggList.indexOf("44") >= 0 && 0 == this.person.eleCDTime ? (this.person.as = .5 * this.person.as, this.person.eleCDTime = 10, setTimeout(function() {
						t.person.as = 1
					}, 1e4), setTimeout(function() {
						t.person.eleCDTime = 0
					}, 2e4)) : i.stateList[Buff.bp] && Config.ggList.indexOf("51") >= 0 ? this.person.setHp(Math.round(.01 * this.person.hpMax), 0) : i.stateList[Buff.curse] && Config.ggList.indexOf("72") >= 0 && this.person.setHp(Math.round(.01 * this.person.hpMax), 0), this.person.asIDs[i.id] && (this.person.asBuff[this.person.asIDs[i.id]] -= 1, delete this.person.asIDs[i.id], 0 == this.person.asBuff[this.person.asIDs[i.id]] && delete this.person.asBuff[this.person.asIDs[i.id]]), this.person.apIDs[i.id] && (this.person.apBuff[this.person.apIDs[i.id]] -= 1, delete this.person.apIDs[i.id], 0 == this.person.apBuff[this.person.apIDs[i.id]] && delete this.person.apBuff[this.person.apIDs[i.id]]), this.gameDataArr["" + this.person.aTimes] = {
						hero: {
							die: 0,
							hp: this.person.hp,
							ap: this.person.ap,
							as: this.person.as
						},
						mon: {
							id: i.id,
							die: 1,
							hp: 0,
							ap: i.ap,
							status: i.stateList
						}
					}, Log.isOpen && console.log("1111", Object.keys(this.monsterList).length, this.mNum, this.mPreNum), 2 == i.curRndObj.skill) {
					if (Log.isOpen && console.log("@@本关的boss死掉了！"), this.person.stopAttack(), this.levelData.equList && this.levelData.equList.boss && this.levelData.equList.boss[0]) return void this.openPkg(this.levelData.equList.boss);
					this.showSucess()
				} else if (Object.keys(this.monsterList).length < 1 && this.mNum == this.mPreNum) {
				if (Log.isOpen && console.log("@@怪物都死了，停止攻击！"), this.person.stopAttack(), 1 == i.curRndObj.skill && this.levelData.equList && this.levelData.equList.elite) {
					var n = i.curRndObj.eid;
					if (this.levelData.equList.elite[n]) return this.openPkg([this.levelData.equList.elite[n]]), void this.eliteSubmit(this.levelData.equList.elite[n])
				}
				Config.roundId = Config.roundId + 1, this.resetData(), this.startOff()
			} else Object.keys(this.mBatleList).length < 1 ? (Log.isOpen && console.log("当前在战斗的怪物没有了，可以继续走", this.monsterTimer, this.monsterList, this.mNum, this.mPreNum), this.person.stopAttack(), this.person.playWalk(), this.bOver = !1, this.bOnRun = !0, null == this.monsterTimer && this.mNum != this.mPreNum && this.mNum - this.mPreNum < this.curRndObj.num && (Log.isOpen && console.log("继续遇到怪物！！！"), this.addMonster())) : Log.isOpen && console.log("出现了什么错误！", this.mBatleList, this.monsterList)
		}, t.prototype.calMonsterState = function(e) {
			var t = this;
			Config.ggList.length < 1 || Config.ggList.forEach(function(i) {
				var n = Config.enterStatusMap[i];
				if (n && !e.stateList[n.type]) {
					if (0 == n.prob) {
						if (n.only) {
							if (e.stateList[n.type]) return;
							Log.info("设置成：" + n.type + "，持续：" + n.only), e.stateList[n.type] = n.only, e.checkStateTimer(n.type), t.gameDataArr["" + t.person.aTimes] = {
								hero: {
									die: 0,
									hp: t.person.hp,
									ap: t.person.ap,
									as: t.person.as
								},
								mon: {
									id: e.id,
									die: 0,
									hp: e.hpBar.value,
									ap: e.ap,
									en: n.type,
									status: e.stateList
								}
							}
						}
						n.dur == e.aTimes && (Log.info("dur和aTimes一样，添加状态", n, e.aTimes), e.stateList[n.type] = 999, t.gameDataArr["" + t.person.aTimes] = {
							hero: {
								die: 0,
								hp: t.person.hp,
								ap: t.person.ap,
								as: t.person.as
							},
							mon: {
								id: e.id,
								die: 0,
								hp: e.hpBar.value,
								ap: e.ap,
								en: n.type,
								status: e.stateList
							}
						})
					} else if (n.prob < 0) 1 == n.cover ? Object.keys(t.monsterList).forEach(function(e) {
						t.monsterList[e].setStateTimer(n.type, n.dur)
					}) : e.setStateTimer(n.type, n.dur);
					else if (t.levelData && t.levelData.statusList && t.levelData.statusList[n.type])
						for (var s = t.levelData.statusList[n.type], r = s[0].length, o = 0; r > o; o++) {
							if (s[0][o] == e.aTimes) {
								e.stateList[n.type] = n.dur, n.dur < 999 && e.checkStateTimer(n.type);
								break
							}
							if (s[0][o] > e.aTimes) break
						}
					var a = e.stateList[n.type];
					"53" == i && a == Buff.electric || "71" == i && a == Buff.burn || "91" == i && a == Buff.poison || "94" == i && a == Buff.petrify ? (t.person.asIDs[e.id] = a, t.person.asBuff[a] ? t.person.asBuff[a] += 1 : t.person.asBuff[a] = 0) : ("92" == i && a == Buff.burn || "93" == i && a == Buff.electric) && (t.person.apIDs[e.id] = a, t.person.apBuff[a] ? t.person.apBuff[a] += 1 : t.person.apBuff[a] = 0)
				}
			})
		}, t.prototype.calMonsExtraHurt = function(e) {
			var t = this,
				i = 0,
				n = 1;
			return Config.ggList.length < 1 ? 0 : (Log.info("计算给怪物带来的额外伤害item:", e.id, this.person.ap), Config.ggList.forEach(function(s) {
				var r = Config.dmgMap[s];
				r && e.stateList[r.pre] && (r.pre == Buff.petrify && r.dur > 0 && r.dur < 999 && (e.stateList[Buff.petrify] = e.stateList[Buff.petrify] + r.dur), r.dmg > 0 && (Log.isOpen && console.log("###计算对敌人额外的伤害", i, t.person.ap, r.dmg), n *= 1 + r.dmg / 100), r.dhp > 0 && (Log.isOpen && console.log("###计算每秒出血增加：", i, r.dhp), i += r.dhp), r.extra && e.aTimes > 0 && e.aTimes % 5 == 0 && (e.stateList[r.pre] += 1))
			}), Log.isOpen && console.log("###计算对敌人额外的伤害总数：", i, n - 1, this.person.ap), i += Math.round(this.person.ap * (n - 1)), Log.info("计算给怪物带来的额外伤害 OVER!!", e.id, i, this.person.ap), i)
		}, t.prototype.onSkillListItemTap = function(e) {
			var t = this;
			if (window.report && window.report("btn_skill_" + e.currentTarget.selectedIndex, "雪人技能_" + e.currentTarget.selectedIndex), !this.bOver && this.curMonster) {
				var i = e.currentTarget.selectedIndex;
				if (!(i > Config.passLevel)) {
					var n = this.cdArr[i],
						s = this.tList.getChildAt(i);
					if (!this.person.doSkill && s.startCount(n)) switch (this.gameDataArr["" + this.person.aTimes] = {
							hero: {
								die: 0,
								hp: this.person.hp,
								ap: this.person.ap,
								as: this.person.as,
								skill: i + 1
							}
						}, this.skillData[i + 1].push(this.person.aTimes), this.person.playSkill(i + 1), i) {
						case 0:
							0 == this.preAp && (this.preAp = this.person.ap, this.person.ap = 1.5 * this.person.ap, setTimeout(function() {
								t.person.ap = t.preAp, t.preAp = 0
							}, 1e4));
							break;
						case 1:
							0 == this.preAs && (this.preAs = this.person.as, this.person.as = .5 * this.preAs, setTimeout(function() {
								t.person.as = 1, t.preAs = 0
							}, 5e3));
							break;
						case 2:
							this.person.hp && this.person.setHp(.2 * this.person.hpMax, 0);
							break;
						case 3:
							Object.keys(this.monsterList).forEach(function(e) {
								t.monsterList[e].setHp(500)
							})
					}
				}
			}
		}, t.prototype.openPkg = function(e) {
			Log.isOpen && console.log("获取到装备：", e), this.game_mask.visible = !0, this.group_award.visible = !0, this.setChildIndex(this.game_mask, 90), this.setChildIndex(this.group_award, 97);
			for (var t = 0; t < e.length; t++) {
				var i = e[t];
				if (i) {
					var n = Config.ggArr[i],
						s = Config.introProp[n.type][n.index];
					this.bossPkgData[t] = {
						icon: s.icon,
						name: n.name,
						desc: s.desc
					}
				}
			}
			this.equ_list.dataProvider = new eui.ArrayCollection(this.bossPkgData), this.equ_list.itemRenderer = AwardEquItem, this.equ_list.selectedIndex > -1 && (this.equ_des.text = this.bossPkgData[this.equ_list.selectedIndex].desc)
		}, t.prototype.showSucess = function() {
			this.game_mask.visible = !0, this.group_succ.visible = !0, this.setChildIndex(this.game_mask, 90), this.setChildIndex(this.group_succ, 92), Config.level > Config.passLevel ? this.s_cnt.text = "获得" + Config.giftName[Config.level - 1] : this.s_cnt.text = "已成功通关"
		}, t.prototype.showFail = function() {
			this.setChildIndex(this.game_mask, 90), this.setChildIndex(this.group_fail, 91), this.game_mask.visible = !0, this.group_fail.visible = !0, this.c_cnt.text = "很可惜，请继续加油！"
		}, t.prototype.goNextLevel = function() {
			var e = this;
			if (Config.level > 7) return void alert("暂未开放，敬请期待！");
			this.mPreNum = 0;
			for (var t = 0; 4 > t; t++) {
				var i = this.tList.getChildAt(t);
				i.clearCount()
			}
			this.skillData = {
				1: [],
				2: [],
				3: [],
				4: []
			}, Config.level = Config.level + 1, Config.roundId = 1, RES.loadGroup("B" + Config.level), this.game_mask.visible = !1, this.group_succ.visible = !1, this.initData(), this.person.reset(0), this.im_progress.width = 0, this.bOnRun = !0, this.person.playRun(), this.curRnd = 1;
			var n = Math.floor(636 * this.curRnd / this.totalRnd);
			n = n > 636 ? 636 : n, egret.Tween.get(this.im_progress).to({
				width: n
			}, 8e3), setTimeout(function() {
				e.addMonster()
			}, 1e3)
		}, t.prototype.changeFriend = function() {
			this.pageId++, this.getFriend(), window.report && window.report("btn_change", "换一批")
		}, t.prototype.onInviteListItemTap = function(e) {
			var t = this;
			if (!(this.invId > -1 || this.friendList[e.currentTarget.selectedIndex].bInvited)) {
				this.invId = e.currentTarget.selectedIndex, Log.info("onInviteListItemTap" + this.invId + "个!");
				var i = this.friendList[this.invId].uin;
				HttpRequest.instance.post(UrlConfig.inviteFriend.url, {
					toQQ: i
				}).then(function(e) {
					if (0 == e.iRet) {
						var i = t.invId;
						t.friendList[i].bInvited = !0, t.invt_list.dataProvider = new eui.ArrayCollection(t.friendList), t.invId = -1, Config.helpLife = e.iCoin, Config.inviteNum = e.inviteNum, alert("发送邀请成功！")
					} else t.invId = -1
				}, function() {
					t.invId = -1
				})
			}
		}, t.prototype.onEquBossListItemTap = function() {
			this.equ_des.text = this.bossPkgData[this.equ_list.selectedIndex].desc
		}, t.prototype.submit = function() {
			var e = this;
			if (this.equ_list.selectedIndex < 0) return void alert("请先选择一个装备");
			var t = this.levelData.equList.boss[this.equ_list.selectedIndex].toString(),
				i = "2022053178564Dn_f",
				n = Config.level + this.usrToken + this.formToken + this.person.hp + Config.ggList.concat(t) + JSON.stringify(this.skillData) + this.reviveData.toString() + t + i;
			("43" == t || "51" == t || "52" == t) && this.person.hpMax < 1300 && (this.person.hpMax += 100);
			var s = {
					formToken: this.formToken,
					sRandom: this.sRandom.toString(),
					iLevel: Config.level.toString(),
					sig: Des.Md5(n),
					hp: this.person.hp.toString(),
					ap: this.person.ap.toString(),
					as: this.person.as.toString(),
					ggList: Config.ggList.concat(t).toString(),
					skillData: JSON.stringify(this.skillData),
					reviveData: this.reviveData.toString(),
					bossDownCh: t,
					gameData: JSON.stringify(this.gameDataArr)
				},
				r = JSON.stringify(s),
				o = encodeURIComponent(encodeURIComponent(Des.Encrypt(r)));
			HttpRequest.instance.post(UrlConfig.submitData.url, {
				data: o
			}).then(function(t) {
				if (0 == t.iRet) {
					if (e.showSucess(), Config.level > Config.passLevel) {
						Config.passLevel = Config.level;
						var i = [{
							icon: "game_ele_json.s1",
							name: "万剑之巅"
						}, {
							icon: "game_ele_json.s2",
							name: "魔剑奥义"
						}, {
							icon: "game_ele_json.s3",
							name: "魔剑觉醒"
						}, {
							icon: "game_ele_json.s4",
							name: "时空斩"
						}];
						if (Config.passLevel < 4)
							for (var n = 0; n < 3 - Config.passLevel; n++) i[3 - n].icon = "s" + (4 - n) + "_gray_png";
						var s = i;
						e.tList.dataProvider = new eui.ArrayCollection(s), e.tList.itemRenderer = SkillItem, Config.levelData[Config.level - 1].pass = "已通关"
					}
				} else e.goHome()
			})
		}, t.prototype.onChange = function(e) {
			var t = this;
			if (!this.bInRequest) {
				var i = e.target;
				this.bInRequest = !0, i.selected ? HttpRequest.instance.post(UrlConfig.setAuth.url, {
					opTypeGR: 0,
					isDoGR: 0,
					opTypeRelation: 1,
					isDoRelation: 1
				}).then(function(e) {
					t.bInRequest = !1, 0 == e.iRet && t.getFriend()
				}) : HttpRequest.instance.post(UrlConfig.setAuth.url, {
					opTypeGR: 0,
					isDoGR: 0,
					opTypeRelation: 0,
					isDoRelation: 1
				}).then(function(e) {
					t.bInRequest = !1, 0 == e.iRet && t.cancelFriend()
				})
			}
		}, t.prototype.privewAward = function() {
			var e = this;
			window.report && window.report("btn_preveiAward", "奖励预览"), (this.bOnRun || this.btn_go.visible) && (this.bOpen || (this.doPause(), this.bOpen = !0, this.game_mask.visible = !0, this.group_awardlist.visible = !0, this.setChildIndex(this.game_mask, 92), this.setChildIndex(this.group_awardlist, 96), HttpRequest.instance.get(UrlConfig.getGiftList.url).then(function(t) {
				if (0 == t.iRet)
					for (var i = 0; i < t.list.length && 13 > i; i++) Config.giftData[i].name = t.list[i].name, i < Config.passLevel && (Config.giftData[i].geticon = t.list[i].bGet ? "item_yes_png" : "item_get_png");
				e.award_list.dataProvider = new eui.ArrayCollection(Config.giftData), e.award_list.itemRenderer = PropItem
			})))
		}, t.prototype.privewSuit = function() {
			window.report && window.report("btn_previwSuit", "套装效果预览"), (this.bOnRun || this.btn_go.visible) && (this.bOpen || (this.doPause(), this.bOpen = !0, this.game_mask.visible = !0, this.group_suit.visible = !0, this.setChildIndex(this.game_mask, 92), this.setChildIndex(this.group_suit, 95)))
		}, t.prototype.onAwardItemTap = function(e) {
			var t = this,
				i = e.currentTarget.selectedIndex;
			return i >= Config.passLevel ? void Log.info("还不能领！") : void HttpRequest.instance.post(UrlConfig.getAward.url, {
				packId: i + 1
			}).then(function(e) {
				0 == e.iRet && (alert("领取成功！"), Config.giftData[i].geticon = "item_yes_png", t.award_list.dataProvider = new eui.ArrayCollection(Config.giftData), t.award_list.itemRenderer = PropItem)
			})
		}, t.prototype.onListItemTap = function(e) {
			var t = e.currentTarget.selectedIndex;
			this.suit_name.text = Config.monsterState[t] + " 套装", this.suit_introlist.dataProvider = new eui.ArrayCollection(Config.introProp[t]), this.suit_introlist.itemRenderer = IntroItem
		}, t.prototype.doPause = function() {
			var e = this;
			this.bPause = !0, this.btn_go.visible || (Object.keys(this.monsterList).forEach(function(t) {
				e.monsterList[t].pause()
			}), this.bOnRun ? this.person.stopWalk() : this.person.stopAttack())
		}, t.prototype.doResume = function() {
			var e = this;
			this.bPause = !1, this.btn_go.visible || (Object.keys(this.monsterList).forEach(function(t) {
				e.monsterList[t].resume()
			}), this.bOnRun ? this.person.playWalk() : this.person.startAttack())
		}, t.prototype.eliteSubmit = function(e) {
			var t = this,
				i = "2022053178564Dn_f",
				n = Config.level + this.usrToken + this.formToken + e + i,
				s = {
					formToken: this.formToken,
					sRandom: this.sRandom.toString(),
					iLevel: Config.level.toString(),
					sig: Des.Md5(n),
					gg: e.toString()
				},
				r = JSON.stringify(s),
				o = encodeURIComponent(encodeURIComponent(Des.Encrypt(r)));
			HttpRequest.instance.post(UrlConfig.eliteSubmit.url, {
				data: o
			}).then(function(e) {
				if (0 == e.iRet && e.data) {
					var i = Des.Decrypt(e.data),
						n = i.lastIndexOf("}");
					i = i.substr(0, n + 1);
					var s = JSON.parse(decodeURIComponent(i));
					if (s.sRandom != t.sRandom) return void t.goHome();
					if (s.sGgList.length) {
						Config.ggList = s.sGgList.split(",");
						var r = [];
						Config.ggList.length && (Config.ggList.forEach(function(e) {
							r.push("equipt_json." + e)
						}), t.equiList.dataProvider = new eui.ArrayCollection(r), t.equiList.itemRenderer = EquipItem)
					}
				} else alert("系统繁忙，请稍后再试！")
			})
		}, t.instance = null, t
	}(eui.Component);
	window.Game = i, __reflect(i.prototype, "Game", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.bFirst = !0, t.levelPreId = -1, t.height = egret.MainContext.instance.stage.stageHeight, t.skinName = "resource/eui_skins/Home.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.completeFun, t), t
		}
		return __extends(t, e), t.getInstance = function() {
			return null == t.instance && (t.instance = new t), t.instance
		}, t.prototype.completeFun = function() {
			this.group_home.y = (this.height - this.group_home.height) / 2 - 100, this.initData(), this.setUsrInfo()
		}, t.prototype.initData = function() {
			var e = this;
			this.sRandom = Math.random(), HttpRequest.instance.post(UrlConfig.init.url, {
				sRandom: this.sRandom
			}).then(function(t) {
				if (0 == t.iRet && t.data) {
					var i = Des.Decrypt(t.data),
						n = i.indexOf("}");
					i = i.substr(0, n + 1);
					var s = JSON.parse(decodeURIComponent(i));
					if (s.sRandom != e.sRandom) return void alert("游戏出现异常，请重新进入");
					Config.passLevel = s.iLevel, Config.usrToken = s.sShareToken, Config.helpLife = s.iCoin, Config.inviteNum = s.inviteNum, Config.ggList = s.sGgList, e.createList(), e.eventListen()
				} else alert("系统繁忙，请稍后再试～")
			})
		}, t.prototype.setUsrInfo = function() {
			window.userInfo && (this.l_usrname.text = decodeURIComponent(window.userInfo.nickName)), window.isApp ? this.group_login.removeChild(this.l_logout) : this.l_logout.addEventListener(egret.TouchEvent.TOUCH_TAP, this.logOut, this), this.group_login.x = (egret.MainContext.instance.stage.stageWidth - this.group_login.width) / 2
		}, t.prototype.eventListen = function() {
			for (var e = [this.im_startgame, this.im_award, this.im_suit, this.im_rule, this.im_rank, this.l_record, this.rule_close, this.award_close, this.suit_close, this.rank_close, this.level_close, this.r_close], t = 0; t < e.length; t++) e[t].addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnTapHandler, this);
			this.level_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startGame, this)
		}, t.prototype.startGame = function() {
			return this.level_list.selectedIndex > Config.passLevel || this.level_list.selectedIndex < 0 ? void alert("请选择挑战关卡") : (Config.level = this.level_list.selectedIndex + 1, Config.roundId = 1, Log.info("开始第" + Config.level + "关挑战！"), this.group_level.visible = !1, this.black_mask.visible = !1, egret.Tween.get(this.black_mask).to({
				visible: !1
			}, 500, egret.Ease.backIn), egret.Tween.get(this.group_level).to({
				visible: !1,
				scaleX: 0,
				scaleY: 0
			}, 400, egret.Ease.backIn), window.report && window.report("level" + Config.level, "开始游戏"), void this.addChild(Game.getInstance()))
		}, t.prototype.createList = function() {
			this.award_scro.viewport = this.award_list, this.award_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onAwardItemTap, this), this.prop_list.dataProvider = new eui.ArrayCollection(Config.monsterState), this.prop_list.itemRenderer = SuitItem, this.prop_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onListItemTap, this), this.suit_scrol.viewport = this.suit_introlist, this.suit_introlist.dataProvider = new eui.ArrayCollection(Config.introProp[0]), this.suit_introlist.itemRenderer = IntroItem, this.prop_list.selectedIndex = 0;
			var e = Config.levelData;
			this.level_scro.viewport = this.level_list, this.level_list.dataProvider = new eui.ArrayCollection(e), this.level_list.itemRenderer = LevelItem, this.level_list.addEventListener(eui.ItemTapEvent.ITEM_TAP, this.onListItemTap, this)
		}, t.prototype.btnTapHandler = function(e) {
			for (var t = this, i = [this.im_startgame, this.im_award, this.im_suit, this.im_rule, this.im_rank, this.l_record], n = [this.level_close, this.award_close, this.suit_close, this.rule_close, this.rank_close, this.r_close], s = [this.group_level, this.group_getaward, this.group_suit, this.group_rule, this.group_rank, this.group_record], r = ["btn_start", "btn_awardlist", "btn_suit", "btn_rule", "btn_rank", "btn_record"], o = ["首页开始游戏", "领取奖励", "套装效果", "游戏规则", "排行榜", "个人获奖记录"], a = 0; a < i.length; a++) e.currentTarget == i[a] && (s[a].zIndex < 1 && (s[a].zIndex = s[a].zIndex + 1, s[a].y = s[a].y + this.group_home.y), s[a].visible = !0, this.black_mask.visible = !0, egret.Tween.get(this.black_mask).to({
				visible: !0
			}, 1e3, egret.Ease.backOut), egret.Tween.get(s[a]).to({
				visible: !0,
				scaleX: 1.1,
				scaleY: 1.1
			}, 1e3, egret.Ease.backOut), window.report && window.report(r[a], o[a])), e.currentTarget == n[a] && (s[a].visible = !1, this.black_mask.visible = !1, egret.Tween.get(this.black_mask).to({
				visible: !1
			}, 500, egret.Ease.backIn), egret.Tween.get(s[a]).to({
				visible: !1,
				scaleX: 0,
				scaleY: 0
			}, 400, egret.Ease.backIn)), e.currentTarget == i[a] && i[a] == this.im_award ? HttpRequest.instance.get(UrlConfig.getGiftList.url).then(function(e) {
				if (0 == e.iRet)
					for (var i = 0; i < e.list.length && 13 > i; i++) Config.giftData[i].name = e.list[i].name, i < Config.passLevel && (Config.giftData[i].geticon = e.list[i].bGet ? "item_yes_png" : "item_get_png");
				t.award_list.dataProvider = new eui.ArrayCollection(Config.giftData), t.award_list.itemRenderer = PropItem
			}) : e.currentTarget == i[a] && i[a] == this.l_record ? HttpRequest.instance.get(UrlConfig.getMyGift.url).then(function(e) {
				if (0 == e.iRet) {
					var i = e.data;
					t.s_scroller.viewport = t.r_list, t.r_list.dataProvider = new eui.ArrayCollection(i), t.r_list.itemRenderer = RecordItem
				}
			}) : e.currentTarget == i[a] && i[a] == this.im_suit && this.bFirst && (this.prop_list.dataProvider = new eui.ArrayCollection(Config.monsterState), this.prop_list.itemRenderer = SuitItem)
		}, t.prototype.onListItemTap = function(e) {
			var t = e.currentTarget.selectedIndex;
			if (e.currentTarget == this.prop_list) this.suit_name.text = Config.monsterState[t] + " 套装", this.suit_introlist.dataProvider = new eui.ArrayCollection(Config.introProp[t]), this.suit_introlist.itemRenderer = IntroItem;
			else if (e.currentTarget == this.level_list) {
				if (this.levelPreId == t) return;
				t > Config.passLevel && (this.level_list.selectedIndex = this.levelPreId), t = this.level_list.selectedIndex;
				for (var i = 0; i < this.level_list.numChildren; i++) {
					var n = this.level_list.getChildAt(i),
						s = parseInt(n.data.id);
					this.levelPreId > -1 && this.levelPreId == s - 1 && n.setSelect(!1), t > -1 && t == s - 1 && n.setSelect(!0)
				}
				this.levelPreId = t
			}
		}, t.prototype.onAwardItemTap = function(e) {
			var t = this,
				i = e.currentTarget.selectedIndex;
			return i >= Config.passLevel ? void Log.info("还不能领！") : void HttpRequest.instance.post(UrlConfig.getAward.url, {
				packId: i + 1
			}).then(function(e) {
				0 == e.iRet && (Config.giftData[i].geticon = "item_yes_png", t.award_list.dataProvider = new eui.ArrayCollection(Config.giftData), t.award_list.itemRenderer = PropItem)
			})
		}, t.prototype.logOut = function() {
			window.LoginManager && (window.LoginManager.logout(), window.location.reload())
		}, t.prototype.refreshData = function() {
			var e = Config.levelData;
			this.level_list.dataProvider = new eui.ArrayCollection(e), this.level_list.itemRenderer = LevelItem
		}, t.instance = null, t
	}(eui.Component);
	window.Home = i, __reflect(i.prototype, "Home", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.skinName = "resource/eui_skins/IntroItem.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.creat, t), t
		}
		return __extends(t, e), t.prototype.creat = function() {}, t
	}(eui.ItemRenderer);
	window.IntroItem = i, __reflect(i.prototype, "IntroItem", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.skinName = "resource/eui_skins/InviteItem.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.creat, t), t
		}
		return __extends(t, e), t.prototype.creat = function() {}, t.prototype.getCurrentState = function() {
			return this.data.bInvited ? "invite" : "normal"
		}, t.prototype.dataChanged = function() {
			this.data && this.data.bInvited ? this.currentState = "invite" : this.currentState = "normal"
		}, t
	}(eui.ItemRenderer);
	window.InviteItem = i, __reflect(i.prototype, "InviteItem", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.skinName = "resource/eui_skins/LevelItem.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.creat, t), t
		}
		return __extends(t, e), t.prototype.creat = function() {}, t.prototype.dataChanged = function() {
			this.data && parseInt(this.data.id) <= Config.passLevel ? (this.currentState = "pass", this.data.pass = "已通关") : (this.currentState = "normal", this.data.pass = "未通关"), this.im_select.visible = this.selected && parseInt(this.data.id) <= Config.passLevel + 1 ? !0 : !1
		}, t.prototype.setSelect = function(e) {
			this.im_select.visible = e
		}, t
	}(eui.ItemRenderer);
	window.LevelItem = i, __reflect(i.prototype, "LevelItem", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.loadingLength = 344, t.createView(), t
		}
		return __extends(t, e), t.prototype.createView = function() {
			this.load_bg = new egret.Bitmap, this.load_bg.texture = RES.getRes("load4_png"), this.load_bg.width = egret.MainContext.instance.stage.stageWidth, this.load_bg.height = egret.MainContext.instance.stage.stageHeight, this.load_bg.x = 0, this.load_bg.y = 0, this.addChild(this.load_bg), this.load_title = new egret.Bitmap, this.load_title.texture = RES.getRes("load3_png"), this.load_title.x = (egret.MainContext.instance.stage.stageWidth - this.load_title.width) / 2, this.load_title.y = 200, this.addChild(this.load_title), this.progress_box = new egret.Bitmap, this.progress_box.texture = RES.getRes("load2_png"), this.progress_box.x = (egret.MainContext.instance.stage.stageWidth - this.progress_box.width) / 2, this.progress_box.y = 430, this.addChild(this.progress_box), this.load_progress = new egret.Bitmap, this.load_progress.texture = RES.getRes("load1_png"), this.load_progress.x = (egret.MainContext.instance.stage.stageWidth - this.load_progress.width) / 2 + 12, this.load_progress.y = 465, this.load_progress.width = 0, this.addChild(this.load_progress), this.textField = new egret.TextField, this.addChild(this.textField), this.textField.width = egret.MainContext.instance.stage.stageWidth, this.textField.height = 100, this.textField.y = 510, this.textField.textAlign = "center"
		}, t.prototype.setProgress = function(e, t) {
			this.textField.text = "资源加载中" + e + "/" + t
		}, t
	}(egret.Sprite);
	window.LoadingUI = i, __reflect(i.prototype, "LoadingUI", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.isDead = !1, t.bOnBattle = !1, t.isBoss = !1, t.curRndObj = {}, t.hurtList = [], t.stateList = {
				1: 0
			}, t.preList = [], t.aTimes = 0, t.playEff = !1, t.bClose = !1, t.frame = 1, t.bPause = !1, t.bReady = !1, t.recTimer = 0, t.bOnWalk = !1, t.width = egret.MainContext.instance.stage.stageWidth, t.curRndObj = Config.monsterMap[Config.level][Config.roundId], t.curRndObj ? (t.hp = t.curRndObj.hp, t.ap = t.curRndObj.ap, t.framArr = t.curRndObj.al.split("#"), t.nick = t.curRndObj.skin + ".", 2 == t.curRndObj.skill && (t.isBoss = !0), t.init()) : console.error("找不到内容：", Config.level, Config.roundId), t
		}
		return __extends(t, e), t.prototype.init = function() {
			var e = this;
			this.frame = 101, this.body = Tools.createBitmapByName(this.nick + this.frame), (4 != Config.level || 6 != Config.roundId) && (this.body.scaleX = -1), this.addChild(this.body), this.body.x = this.width + this.body.width, this.body.y = 705 + this.curRndObj.offY, this.bodyX = this.body.x, this.hpBar = new eui.ProgressBar, this.hpBar.maximum = this.hp, this.hpBar.minimum = 0, this.hpBar.width = 100, this.hpBar.height = 10, this.hpBar.x = this.bodyX - this.body.width + (this.body.width - this.hpBar.width) / 2, 4 == Config.level && 6 == Config.roundId && (this.hpBar.x += 120), this.hpBar.y = this.body.y - 20, this.addChild(this.hpBar), this.hpBar.value = this.hp, this.playWalk(), egret.startTick(this.onUpdate, this), this.away = this.curRndObj.away;
			var t = 0 == this.away ? 3e3 : 1500;
			this.recTimer = (new Date).getTime(), console.log("远程：", this.away), this.aTimer = setTimeout(function() {
				e.bReady ? e.startHit() : e.bReady = !0
			}, t)
		}, t.prototype.onUpdate = function() {
			return this.isDead || this.bPause ? void 0 : (this.body.x -= 3, this.hpBar.x -= 3, this.bodyX = this.body.x, this.bodyX - this.body.width - 258 <= this.curRndObj.offX && (console.log("stopTick!!!", this.bReady, this.bOnBattle), egret.stopTick(this.onUpdate, this), this.stopWalk(), this.bReady ? this.startHit() : this.bReady = !0), !0)
		}, t.prototype.startHit = function() {
			var e = this;
			this.bOnBattle || (this.recTimer = 0, this.bOnBattle = !0, this.dispatchEvent(new egret.Event("monsterHit")), this.playFight(), this.hitTimer = setInterval(function() {
				e.dispatchEvent(new egret.Event("monsterHit")), e.isBoss && e.playEff ? (Log.info("开始播放boss大招！！！"), e.playEffect()) : e.playFight()
			}, 1e3))
		}, t.prototype.playWalk = function() {
			var e = this;
			this.timer || (this.bOnWalk = !0, this.frame = 101, this.timer = setInterval(function() {
				e.body.texture = RES.getRes(e.nick + e.frame), e.frame++, e.frame > e.framArr[0] ? e.frame = 101 : e.frame > 150 && (clearInterval(e.timer), e.timer = null)
			}, 80))
		}, t.prototype.stopWalk = function() {
			this.bOnWalk = !1, clearInterval(this.timer), this.timer = null, this.body.texture = RES.getRes(this.nick + "101")
		}, t.prototype.playFight = function() {
			var e = this;
			if (!this.timer) {
				this.frame = 201;
				var t = Math.round(1e3 / (this.framArr[1] - 201));
				if (4 == Config.level && 6 == Config.roundId) {
					if (!this.sMovie) {
						var i = this.frame - 200;
						this.sMovie = Tools.createBitmapByName(this.nick + i), Game.getInstance().addChild(this.sMovie)
					}
					this.sMovie.visible = !0, this.sMovie.x = this.curRndObj.pX, this.sMovie.y = Game.getInstance().gp_owner.y - 320
				}
				this.timer = setInterval(function() {
					if (e.body.texture = RES.getRes(e.nick + e.frame), 4 == Config.level && 6 == Config.roundId && e.sMovie) {
						var t = e.frame - 200;
						e.sMovie.texture = RES.getRes(e.nick + t)
					}
					e.frame++, (e.frame > e.framArr[1] || e.frame > 250) && (clearInterval(e.timer), e.timer = null)
				}, t)
			}
		}, t.prototype.playEffect = function() {
			var e = this;
			if (!this.timer && (this.frame = 1, this.framArr[3])) {
				var t = Math.round(1e3 / (this.framArr[3] - 1)),
					i = this.curRndObj.skin.split("_"),
					n = i[0] + "_" + i[1] + "_e_json.",
					s = "";
				this.framArr.length > 4 && (s = i[0] + "_" + i[1] + "_i_json.", this.sMovie || (this.sMovie = Tools.createBitmapByName(s + "1"), Game.getInstance().addChild(this.sMovie)), this.sMovie.visible = !0, this.sMovie.x = this.curRndObj.pX, this.sMovie.y = Game.getInstance().gp_owner.y - 250, 4 == Config.level && 6 == Config.roundId ? (this.sMovie.x = 0, this.sMovie.y = 0) : 8 == Config.level && 5 == Config.roundId && (this.sMovie.y = Game.getInstance().gp_owner.y - 50)), this.timer = setInterval(function() {
					if (e.body.texture = RES.getRes(n + e.frame), e.sMovie)
						if (4 == Config.level && 6 == Config.roundId) {
							var t = RES.getRes("mxe_" + e.frame + "_png");
							t && (e.sMovie.texture = t)
						} else e.sMovie.texture = RES.getRes(s + e.frame);
					e.frame++, (e.frame > e.framArr[3] || e.frame > 50) && (e.playEff = !1, clearInterval(e.timer), e.timer = null, e.sMovie && (e.sMovie.visible = !1), e.body.texture = RES.getRes(e.nick + "201"))
				}, t)
			}
		}, t.prototype.setHp = function(e) {
			var t = this;
			this.hp = this.hp - e, this.hpBar.value = this.hp < 0 ? 0 : this.hp, this.aTimes++, egret.Tween.get(this).to({
				x: 50
			}, 200).to({
				x: 0
			}, 200), this.hp <= 0 && setTimeout(function() {
				t.dead()
			}, 200)
		}, t.prototype.checkStateTimer = function(e) {
			var t = this;
			setTimeout(function() {
				t.stateList[e] = t.stateList[e] - 1, t.stateList[e] <= 1 ? delete t.stateList[e] : t.checkStateTimer(e)
			}, 1e3)
		}, t.prototype.setStateTimer = function(e, t) {
			var i = this;
			setTimeout(function() {
				i.isDead || (i.stateList[e] = 999)
			}, t)
		}, t.prototype.dead = function() {
			this.bodyX - this.body.width - 258 > this.curRndObj.offX && egret.stopTick(this.onUpdate, this), this.dispatchEvent(new egret.Event("monsterDead")), clearTimeout(this.aTimer), clearInterval(this.timer), this.timer = null, clearInterval(this.hitTimer), this.sMovie && (this.sMovie.visible = !1), this.parent && this.parent.removeChild(this), this.isDead = !0
		}, t.prototype.pause = function() {
			this.recTimer && (this.recTimer = (new Date).getTime() - this.recTimer), this.bPause = !0, clearTimeout(this.aTimer), clearInterval(this.hitTimer), clearInterval(this.timer), this.timer = null
		}, t.prototype.resume = function() {
			var e = this;
			if (this.bPause = !1, 1 == this.bOnBattle) this.bOnBattle = !1, this.startHit();
			else {
				this.playWalk();
				var t = this.recTimer ? this.recTimer : 3e3;
				Log.info("恢复：还有几秒：", t), this.aTimer = setTimeout(function() {
					e.bOnBattle = !1, e.startHit()
				}, t)
			}
		}, t.prototype.destroy = function() {
			clearTimeout(this.aTimer), clearInterval(this.timer), this.timer = null, clearInterval(this.hitTimer), this.parent && this.parent.removeChild(this)
		}, t.prototype.setPosition = function() {
			if (this.away && !this.isDead && this.bOnBattle) {
				this.bClose = !0;
				var e = 400;
				return this.curRndObj.aX && (e = this.curRndObj.aX), this.bodyX < e ? !1 : (this.body.x -= 3, this.bodyX = this.body.x, this.hpBar.x -= 3, !0)
			}
		}, t
	}(egret.DisplayObjectContainer);
	window.Monster = i, __reflect(i.prototype, "Monster", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.hp = 1e3, t.hpMax = 1e3, t.ap = 35, t.as = 1, t.aTimes = 0, t.isDead = !1, t.eleCDTime = 0, t.apBuff = [], t.asBuff = [], t.apIDs = [], t.asIDs = [], t.doSkill = !1, t.frame = 1, t.bAttack = !1, t.bPlay = !1, t.mFrame = 1, t.aFrame = 1, t.init(), t
		}
		return __extends(t, e), t.prototype.init = function() {
			this.player = Tools.createBitmapByName("fz_json.1"), this.addChild(this.player), this.aMovie || (this.aMovie = Tools.createBitmapByName("afz_json.1"), this.addChild(this.aMovie), this.aMovie.x = 60, this.aMovie.y = 35, this.aMovie.visible = !1), this.hpBar = new eui.ProgressBar, this.hpBar.maximum = this.hp, this.hpBar.minimum = 0, this.hpBar.width = 202, this.hpBar.height = 34, this.hpBar.x = 102, this.hpBar.y = 110, this.hpBar.maximum = this.hp, this.hpBar.value = this.hp, Game.getInstance().addChild(this.hpBar), Game.getInstance().swapChildren(this.hpBar, Game.getInstance().gp_owner)
		}, t.prototype.reset = function(e) {
			this.isDead && (this.isDead = !1), this.player.texture = RES.getRes("fz_json.1"), this.hp = this.hpMax, this.hpBar.value = this.hpMax, 0 == e && (this.aTimes = 0)
		}, t.prototype.startAttack = function() {
			this.bAttack || (this.bAttack = !0, this.doAttack())
		}, t.prototype.stopAttack = function() {
			Log.info("雪人停止攻击！！！"), this.bAttack = !1, this.bPlay = !1, clearTimeout(this.hitTimer), this.clearTimer(), this.player.texture = RES.getRes("fz_json.1")
		}, t.prototype.setHp = function(e, t) {
			void 0 === t && (t = 1), this.isDead || (1 == t ? this.hp = this.hp - Math.round(e) : (this.hp = this.hp + Math.round(e), this.hp = this.hp > this.hpMax ? this.hpMax : this.hp), this.hpBar.value = this.hp < 0 ? 0 : this.hp, this.hp < 1 && (this.isDead = !0, this.dispatchEvent(new egret.Event("fzDead")), this.playFail()))
		}, t.prototype.doAttack = function() {
			var e = this;
			this.isDead || this.hp > 0 && (this.playAttack(), this.dispatchEvent(new egret.Event("fzHit")), this.aTimes++, this.hitTimer = setTimeout(function() {
				e.doAttack()
			}, this.getAs()))
		}, t.prototype.getAs = function() {
			var e = this.asBuff.length,
				t = 1e3 * this.as;
			return e > 0 && (t /= 2 * e), 500 > t && Log.info("雪人当前的速度是：" + t, this.asBuff), t
		}, t.prototype.playWalk = function() {
			var e = this;
			this.clearTimer(), this.frame = 2, this.timer = setInterval(function() {
				e.player.texture = RES.getRes("fz_json." + e.frame), e.frame++, e.frame > 10 && (e.frame = 1)
			}, 80)
		}, t.prototype.stopWalk = function() {
			this.clearTimer()
		}, t.prototype.playRun = function() {
			var e = this;
			this.clearTimer(), this.frame = 51, this.timer = setInterval(function() {
				e.player.texture = RES.getRes("fz_json." + e.frame), e.frame++, e.frame > 58 && (e.frame = 51)
			}, 80)
		}, t.prototype.acceptHit = function() {
			var e = this;
			this.bPlay || (this.bPlay = !0, this.clearTimer(), this.frame = 11, this.timer = setInterval(function() {
				e.player.texture = RES.getRes("fz_json." + e.frame), e.frame++, e.frame > 12 && (e.bPlay = !1, e.clearTimer())
			}, 100), this.aTimer = setInterval(function() {
				e.aMovie.visible = !0, e.aMovie.texture = RES.getRes("afz_json." + e.aFrame), e.aFrame++, e.aFrame > 6 && (e.aMovie.visible = !1, clearInterval(e.aTimer), e.aFrame = 1)
			}, 50))
		}, t.prototype.playAttack = function() {
			var e = this;
			this.bPlay || (this.bPlay = !0, this.clearTimer(), this.frame = 21, this.timer = setInterval(function() {
				e.player.texture = RES.getRes("fz_json." + e.frame), e.frame++, e.frame > 28 && (e.bPlay = !1, e.clearTimer())
			}, 35))
		}, t.prototype.playFail = function() {
			var e = this;
			this.stopAttack(), this.frame = 41, this.timer = setInterval(function() {
				e.player.texture = RES.getRes("fz_json." + e.frame), e.frame++, e.frame > 43 && e.clearTimer()
			}, 80)
		}, t.prototype.clearTimer = function() {
			clearInterval(this.timer), this.timer = null, this.frame = 1
		}, t.prototype.destroy = function() {
			clearInterval(this.timer), clearTimeout(this.hitTimer), this.removeChildren(), this.parent && this.parent.removeChild(this)
		}, t.prototype.playSkill = function(e) {
			var t = this;
			if (!this.doSkill)
				if (this.mFrame = 1, this.doSkill = !0, this.sMovie || (this.sMovie = Tools.createBitmapByName("s" + e + "_json.1"), Game.getInstance().addChild(this.sMovie)), this.sMovie.visible = !0, 4 > e) this.sMovie.x = Game.getInstance().gp_owner.x - this.player.width / 2 + 190, this.sMovie.y = Game.getInstance().gp_owner.y - this.player.height / 2, this.mTimer = setInterval(function() {
					t.sMovie.texture = RES.getRes("s" + e + "_json." + t.mFrame), t.mFrame++, t.mFrame > 11 && (clearInterval(t.mTimer), t.sMovie.visible = !1, t.doSkill = !1)
				}, 200);
				else if (4 == e) {
				this.mFrame = 1, this.sMovie.x = 0, this.sMovie.y = Game.getInstance().gp_owner.y - 1624 + 277;
				var i = Game.getInstance().getChildIndex(this.sMovie),
					n = Game.getInstance().getChildIndex(Game.getInstance().gp_owner);
				i > n && Game.getInstance().swapChildren(this.sMovie, Game.getInstance().gp_owner), this.mTimer = setInterval(function() {
					t.player.texture = RES.getRes("s" + e + "_json." + t.mFrame), t.sMovie.texture = RES.getRes("s4_" + t.mFrame + "_png"), t.mFrame++, t.mFrame > 27 && (clearInterval(t.mTimer), t.sMovie.visible = !1, t.doSkill = !1)
				}, 200)
			}
		}, t
	}(egret.DisplayObjectContainer);
	window.Person = i, __reflect(i.prototype, "Person", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.skinName = "resource/eui_skins/PropItem.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.creat, t), t
		}
		return __extends(t, e), t.prototype.creat = function() {}, t
	}(eui.ItemRenderer);
	window.PropItem = i, __reflect(i.prototype, "PropItem", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.skinName = "resource/eui_skins/RecordItem.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.creat, t), t
		}
		return __extends(t, e), t.prototype.creat = function() {}, t
	}(eui.ItemRenderer);
	window.RecordItem = i, __reflect(i.prototype, "RecordItem", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.iscd = !1, t.skinName = "resource/eui_skins/SkillItem.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.creat, t), t
		}
		return __extends(t, e), t.prototype.creat = function() {}, t.prototype.startCount = function(e) {
			var t = this;
			return this.iscd ? !1 : (this.iscd = !0, this.currentState = "cd", this.cdtime.text = e.toString(), this.timer = setInterval(function() {
				e -= .1, t.cdtime.text = e.toFixed(1).toString(), .1 > e && (t.iscd = !1, t.currentState = "normal", clearInterval(t.timer))
			}, 100), !0)
		}, t.prototype.clearCount = function() {
			this.iscd && (this.currentState = "normal", clearInterval(this.timer), this.iscd = !1)
		}, t
	}(eui.ItemRenderer);
	window.SkillItem = i, __reflect(i.prototype, "SkillItem", [])
}, function(e, t) {
	var i = function(e) {
		function t() {
			var t = e.call(this) || this;
			return t.skinName = "resource/eui_skins/SuitItem.exml", t.addEventListener(eui.UIEvent.CREATION_COMPLETE, t.creat, t), t
		}
		return __extends(t, e), t.prototype.creat = function() {}, t.prototype.getCurrentState = function() {
			return this.selected ? "selected" : "normal"
		}, t
	}(eui.ItemRenderer);
	window.SuitItem = i, __reflect(i.prototype, "SuitItem", [])
}]);
