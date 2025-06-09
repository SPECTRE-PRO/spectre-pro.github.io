(() => {
  // node_modules/@lit/reactive-element/css-tag.js
  var t = globalThis;
  var e = t.ShadowRoot && (void 0 === t.ShadyCSS || t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
  var s = Symbol();
  var o = /* @__PURE__ */ new WeakMap();
  var n = class {
    constructor(t6, e7, o8) {
      if (this._$cssResult$ = true, o8 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
      this.cssText = t6, this.t = e7;
    }
    get styleSheet() {
      let t6 = this.o;
      const s5 = this.t;
      if (e && void 0 === t6) {
        const e7 = void 0 !== s5 && 1 === s5.length;
        e7 && (t6 = o.get(s5)), void 0 === t6 && ((this.o = t6 = new CSSStyleSheet()).replaceSync(this.cssText), e7 && o.set(s5, t6));
      }
      return t6;
    }
    toString() {
      return this.cssText;
    }
  };
  var r = (t6) => new n("string" == typeof t6 ? t6 : t6 + "", void 0, s);
  var i = (t6, ...e7) => {
    const o8 = 1 === t6.length ? t6[0] : e7.reduce((e8, s5, o9) => e8 + ((t7) => {
      if (true === t7._$cssResult$) return t7.cssText;
      if ("number" == typeof t7) return t7;
      throw Error("Value passed to 'css' function must be a 'css' function result: " + t7 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
    })(s5) + t6[o9 + 1], t6[0]);
    return new n(o8, t6, s);
  };
  var S = (s5, o8) => {
    if (e) s5.adoptedStyleSheets = o8.map((t6) => t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet);
    else for (const e7 of o8) {
      const o9 = document.createElement("style"), n7 = t.litNonce;
      void 0 !== n7 && o9.setAttribute("nonce", n7), o9.textContent = e7.cssText, s5.appendChild(o9);
    }
  };
  var c = e ? (t6) => t6 : (t6) => t6 instanceof CSSStyleSheet ? ((t7) => {
    let e7 = "";
    for (const s5 of t7.cssRules) e7 += s5.cssText;
    return r(e7);
  })(t6) : t6;

  // node_modules/@lit/reactive-element/reactive-element.js
  var { is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object;
  var a = globalThis;
  var c2 = a.trustedTypes;
  var l = c2 ? c2.emptyScript : "";
  var p = a.reactiveElementPolyfillSupport;
  var d = (t6, s5) => t6;
  var u = { toAttribute(t6, s5) {
    switch (s5) {
      case Boolean:
        t6 = t6 ? l : null;
        break;
      case Object:
      case Array:
        t6 = null == t6 ? t6 : JSON.stringify(t6);
    }
    return t6;
  }, fromAttribute(t6, s5) {
    let i7 = t6;
    switch (s5) {
      case Boolean:
        i7 = null !== t6;
        break;
      case Number:
        i7 = null === t6 ? null : Number(t6);
        break;
      case Object:
      case Array:
        try {
          i7 = JSON.parse(t6);
        } catch (t7) {
          i7 = null;
        }
    }
    return i7;
  } };
  var f = (t6, s5) => !i2(t6, s5);
  var b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
  Symbol.metadata ??= Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
  var y = class extends HTMLElement {
    static addInitializer(t6) {
      this._$Ei(), (this.l ??= []).push(t6);
    }
    static get observedAttributes() {
      return this.finalize(), this._$Eh && [...this._$Eh.keys()];
    }
    static createProperty(t6, s5 = b) {
      if (s5.state && (s5.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t6) && ((s5 = Object.create(s5)).wrapped = true), this.elementProperties.set(t6, s5), !s5.noAccessor) {
        const i7 = Symbol(), h5 = this.getPropertyDescriptor(t6, i7, s5);
        void 0 !== h5 && e2(this.prototype, t6, h5);
      }
    }
    static getPropertyDescriptor(t6, s5, i7) {
      const { get: e7, set: r7 } = h(this.prototype, t6) ?? { get() {
        return this[s5];
      }, set(t7) {
        this[s5] = t7;
      } };
      return { get: e7, set(s6) {
        const h5 = e7?.call(this);
        r7?.call(this, s6), this.requestUpdate(t6, h5, i7);
      }, configurable: true, enumerable: true };
    }
    static getPropertyOptions(t6) {
      return this.elementProperties.get(t6) ?? b;
    }
    static _$Ei() {
      if (this.hasOwnProperty(d("elementProperties"))) return;
      const t6 = n2(this);
      t6.finalize(), void 0 !== t6.l && (this.l = [...t6.l]), this.elementProperties = new Map(t6.elementProperties);
    }
    static finalize() {
      if (this.hasOwnProperty(d("finalized"))) return;
      if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
        const t7 = this.properties, s5 = [...r2(t7), ...o2(t7)];
        for (const i7 of s5) this.createProperty(i7, t7[i7]);
      }
      const t6 = this[Symbol.metadata];
      if (null !== t6) {
        const s5 = litPropertyMetadata.get(t6);
        if (void 0 !== s5) for (const [t7, i7] of s5) this.elementProperties.set(t7, i7);
      }
      this._$Eh = /* @__PURE__ */ new Map();
      for (const [t7, s5] of this.elementProperties) {
        const i7 = this._$Eu(t7, s5);
        void 0 !== i7 && this._$Eh.set(i7, t7);
      }
      this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s5) {
      const i7 = [];
      if (Array.isArray(s5)) {
        const e7 = new Set(s5.flat(1 / 0).reverse());
        for (const s6 of e7) i7.unshift(c(s6));
      } else void 0 !== s5 && i7.push(c(s5));
      return i7;
    }
    static _$Eu(t6, s5) {
      const i7 = s5.attribute;
      return false === i7 ? void 0 : "string" == typeof i7 ? i7 : "string" == typeof t6 ? t6.toLowerCase() : void 0;
    }
    constructor() {
      super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
    }
    _$Ev() {
      this._$ES = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t6) => t6(this));
    }
    addController(t6) {
      (this._$EO ??= /* @__PURE__ */ new Set()).add(t6), void 0 !== this.renderRoot && this.isConnected && t6.hostConnected?.();
    }
    removeController(t6) {
      this._$EO?.delete(t6);
    }
    _$E_() {
      const t6 = /* @__PURE__ */ new Map(), s5 = this.constructor.elementProperties;
      for (const i7 of s5.keys()) this.hasOwnProperty(i7) && (t6.set(i7, this[i7]), delete this[i7]);
      t6.size > 0 && (this._$Ep = t6);
    }
    createRenderRoot() {
      const t6 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
      return S(t6, this.constructor.elementStyles), t6;
    }
    connectedCallback() {
      this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t6) => t6.hostConnected?.());
    }
    enableUpdating(t6) {
    }
    disconnectedCallback() {
      this._$EO?.forEach((t6) => t6.hostDisconnected?.());
    }
    attributeChangedCallback(t6, s5, i7) {
      this._$AK(t6, i7);
    }
    _$ET(t6, s5) {
      const i7 = this.constructor.elementProperties.get(t6), e7 = this.constructor._$Eu(t6, i7);
      if (void 0 !== e7 && true === i7.reflect) {
        const h5 = (void 0 !== i7.converter?.toAttribute ? i7.converter : u).toAttribute(s5, i7.type);
        this._$Em = t6, null == h5 ? this.removeAttribute(e7) : this.setAttribute(e7, h5), this._$Em = null;
      }
    }
    _$AK(t6, s5) {
      const i7 = this.constructor, e7 = i7._$Eh.get(t6);
      if (void 0 !== e7 && this._$Em !== e7) {
        const t7 = i7.getPropertyOptions(e7), h5 = "function" == typeof t7.converter ? { fromAttribute: t7.converter } : void 0 !== t7.converter?.fromAttribute ? t7.converter : u;
        this._$Em = e7, this[e7] = h5.fromAttribute(s5, t7.type) ?? this._$Ej?.get(e7) ?? null, this._$Em = null;
      }
    }
    requestUpdate(t6, s5, i7) {
      if (void 0 !== t6) {
        const e7 = this.constructor, h5 = this[t6];
        if (i7 ??= e7.getPropertyOptions(t6), !((i7.hasChanged ?? f)(h5, s5) || i7.useDefault && i7.reflect && h5 === this._$Ej?.get(t6) && !this.hasAttribute(e7._$Eu(t6, i7)))) return;
        this.C(t6, s5, i7);
      }
      false === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t6, s5, { useDefault: i7, reflect: e7, wrapped: h5 }, r7) {
      i7 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t6) && (this._$Ej.set(t6, r7 ?? s5 ?? this[t6]), true !== h5 || void 0 !== r7) || (this._$AL.has(t6) || (this.hasUpdated || i7 || (s5 = void 0), this._$AL.set(t6, s5)), true === e7 && this._$Em !== t6 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t6));
    }
    async _$EP() {
      this.isUpdatePending = true;
      try {
        await this._$ES;
      } catch (t7) {
        Promise.reject(t7);
      }
      const t6 = this.scheduleUpdate();
      return null != t6 && await t6, !this.isUpdatePending;
    }
    scheduleUpdate() {
      return this.performUpdate();
    }
    performUpdate() {
      if (!this.isUpdatePending) return;
      if (!this.hasUpdated) {
        if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
          for (const [t8, s6] of this._$Ep) this[t8] = s6;
          this._$Ep = void 0;
        }
        const t7 = this.constructor.elementProperties;
        if (t7.size > 0) for (const [s6, i7] of t7) {
          const { wrapped: t8 } = i7, e7 = this[s6];
          true !== t8 || this._$AL.has(s6) || void 0 === e7 || this.C(s6, void 0, i7, e7);
        }
      }
      let t6 = false;
      const s5 = this._$AL;
      try {
        t6 = this.shouldUpdate(s5), t6 ? (this.willUpdate(s5), this._$EO?.forEach((t7) => t7.hostUpdate?.()), this.update(s5)) : this._$EM();
      } catch (s6) {
        throw t6 = false, this._$EM(), s6;
      }
      t6 && this._$AE(s5);
    }
    willUpdate(t6) {
    }
    _$AE(t6) {
      this._$EO?.forEach((t7) => t7.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t6)), this.updated(t6);
    }
    _$EM() {
      this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
      return this.getUpdateComplete();
    }
    getUpdateComplete() {
      return this._$ES;
    }
    shouldUpdate(t6) {
      return true;
    }
    update(t6) {
      this._$Eq &&= this._$Eq.forEach((t7) => this._$ET(t7, this[t7])), this._$EM();
    }
    updated(t6) {
    }
    firstUpdated(t6) {
    }
  };
  y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.0");

  // node_modules/lit-html/lit-html.js
  var t2 = globalThis;
  var i3 = t2.trustedTypes;
  var s2 = i3 ? i3.createPolicy("lit-html", { createHTML: (t6) => t6 }) : void 0;
  var e3 = "$lit$";
  var h2 = `lit$${Math.random().toFixed(9).slice(2)}$`;
  var o3 = "?" + h2;
  var n3 = `<${o3}>`;
  var r3 = document;
  var l2 = () => r3.createComment("");
  var c3 = (t6) => null === t6 || "object" != typeof t6 && "function" != typeof t6;
  var a2 = Array.isArray;
  var u2 = (t6) => a2(t6) || "function" == typeof t6?.[Symbol.iterator];
  var d2 = "[ 	\n\f\r]";
  var f2 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
  var v = /-->/g;
  var _ = />/g;
  var m = RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
  var p2 = /'/g;
  var g = /"/g;
  var $ = /^(?:script|style|textarea|title)$/i;
  var y2 = (t6) => (i7, ...s5) => ({ _$litType$: t6, strings: i7, values: s5 });
  var x = y2(1);
  var b2 = y2(2);
  var w = y2(3);
  var T = Symbol.for("lit-noChange");
  var E = Symbol.for("lit-nothing");
  var A = /* @__PURE__ */ new WeakMap();
  var C = r3.createTreeWalker(r3, 129);
  function P(t6, i7) {
    if (!a2(t6) || !t6.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== s2 ? s2.createHTML(i7) : i7;
  }
  var V = (t6, i7) => {
    const s5 = t6.length - 1, o8 = [];
    let r7, l3 = 2 === i7 ? "<svg>" : 3 === i7 ? "<math>" : "", c5 = f2;
    for (let i8 = 0; i8 < s5; i8++) {
      const s6 = t6[i8];
      let a3, u3, d3 = -1, y3 = 0;
      for (; y3 < s6.length && (c5.lastIndex = y3, u3 = c5.exec(s6), null !== u3); ) y3 = c5.lastIndex, c5 === f2 ? "!--" === u3[1] ? c5 = v : void 0 !== u3[1] ? c5 = _ : void 0 !== u3[2] ? ($.test(u3[2]) && (r7 = RegExp("</" + u3[2], "g")), c5 = m) : void 0 !== u3[3] && (c5 = m) : c5 === m ? ">" === u3[0] ? (c5 = r7 ?? f2, d3 = -1) : void 0 === u3[1] ? d3 = -2 : (d3 = c5.lastIndex - u3[2].length, a3 = u3[1], c5 = void 0 === u3[3] ? m : '"' === u3[3] ? g : p2) : c5 === g || c5 === p2 ? c5 = m : c5 === v || c5 === _ ? c5 = f2 : (c5 = m, r7 = void 0);
      const x2 = c5 === m && t6[i8 + 1].startsWith("/>") ? " " : "";
      l3 += c5 === f2 ? s6 + n3 : d3 >= 0 ? (o8.push(a3), s6.slice(0, d3) + e3 + s6.slice(d3) + h2 + x2) : s6 + h2 + (-2 === d3 ? i8 : x2);
    }
    return [P(t6, l3 + (t6[s5] || "<?>") + (2 === i7 ? "</svg>" : 3 === i7 ? "</math>" : "")), o8];
  };
  var N = class _N {
    constructor({ strings: t6, _$litType$: s5 }, n7) {
      let r7;
      this.parts = [];
      let c5 = 0, a3 = 0;
      const u3 = t6.length - 1, d3 = this.parts, [f5, v2] = V(t6, s5);
      if (this.el = _N.createElement(f5, n7), C.currentNode = this.el.content, 2 === s5 || 3 === s5) {
        const t7 = this.el.content.firstChild;
        t7.replaceWith(...t7.childNodes);
      }
      for (; null !== (r7 = C.nextNode()) && d3.length < u3; ) {
        if (1 === r7.nodeType) {
          if (r7.hasAttributes()) for (const t7 of r7.getAttributeNames()) if (t7.endsWith(e3)) {
            const i7 = v2[a3++], s6 = r7.getAttribute(t7).split(h2), e7 = /([.?@])?(.*)/.exec(i7);
            d3.push({ type: 1, index: c5, name: e7[2], strings: s6, ctor: "." === e7[1] ? H : "?" === e7[1] ? I : "@" === e7[1] ? L : k }), r7.removeAttribute(t7);
          } else t7.startsWith(h2) && (d3.push({ type: 6, index: c5 }), r7.removeAttribute(t7));
          if ($.test(r7.tagName)) {
            const t7 = r7.textContent.split(h2), s6 = t7.length - 1;
            if (s6 > 0) {
              r7.textContent = i3 ? i3.emptyScript : "";
              for (let i7 = 0; i7 < s6; i7++) r7.append(t7[i7], l2()), C.nextNode(), d3.push({ type: 2, index: ++c5 });
              r7.append(t7[s6], l2());
            }
          }
        } else if (8 === r7.nodeType) if (r7.data === o3) d3.push({ type: 2, index: c5 });
        else {
          let t7 = -1;
          for (; -1 !== (t7 = r7.data.indexOf(h2, t7 + 1)); ) d3.push({ type: 7, index: c5 }), t7 += h2.length - 1;
        }
        c5++;
      }
    }
    static createElement(t6, i7) {
      const s5 = r3.createElement("template");
      return s5.innerHTML = t6, s5;
    }
  };
  function S2(t6, i7, s5 = t6, e7) {
    if (i7 === T) return i7;
    let h5 = void 0 !== e7 ? s5._$Co?.[e7] : s5._$Cl;
    const o8 = c3(i7) ? void 0 : i7._$litDirective$;
    return h5?.constructor !== o8 && (h5?._$AO?.(false), void 0 === o8 ? h5 = void 0 : (h5 = new o8(t6), h5._$AT(t6, s5, e7)), void 0 !== e7 ? (s5._$Co ??= [])[e7] = h5 : s5._$Cl = h5), void 0 !== h5 && (i7 = S2(t6, h5._$AS(t6, i7.values), h5, e7)), i7;
  }
  var M = class {
    constructor(t6, i7) {
      this._$AV = [], this._$AN = void 0, this._$AD = t6, this._$AM = i7;
    }
    get parentNode() {
      return this._$AM.parentNode;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    u(t6) {
      const { el: { content: i7 }, parts: s5 } = this._$AD, e7 = (t6?.creationScope ?? r3).importNode(i7, true);
      C.currentNode = e7;
      let h5 = C.nextNode(), o8 = 0, n7 = 0, l3 = s5[0];
      for (; void 0 !== l3; ) {
        if (o8 === l3.index) {
          let i8;
          2 === l3.type ? i8 = new R(h5, h5.nextSibling, this, t6) : 1 === l3.type ? i8 = new l3.ctor(h5, l3.name, l3.strings, this, t6) : 6 === l3.type && (i8 = new z(h5, this, t6)), this._$AV.push(i8), l3 = s5[++n7];
        }
        o8 !== l3?.index && (h5 = C.nextNode(), o8++);
      }
      return C.currentNode = r3, e7;
    }
    p(t6) {
      let i7 = 0;
      for (const s5 of this._$AV) void 0 !== s5 && (void 0 !== s5.strings ? (s5._$AI(t6, s5, i7), i7 += s5.strings.length - 2) : s5._$AI(t6[i7])), i7++;
    }
  };
  var R = class _R {
    get _$AU() {
      return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t6, i7, s5, e7) {
      this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = t6, this._$AB = i7, this._$AM = s5, this.options = e7, this._$Cv = e7?.isConnected ?? true;
    }
    get parentNode() {
      let t6 = this._$AA.parentNode;
      const i7 = this._$AM;
      return void 0 !== i7 && 11 === t6?.nodeType && (t6 = i7.parentNode), t6;
    }
    get startNode() {
      return this._$AA;
    }
    get endNode() {
      return this._$AB;
    }
    _$AI(t6, i7 = this) {
      t6 = S2(this, t6, i7), c3(t6) ? t6 === E || null == t6 || "" === t6 ? (this._$AH !== E && this._$AR(), this._$AH = E) : t6 !== this._$AH && t6 !== T && this._(t6) : void 0 !== t6._$litType$ ? this.$(t6) : void 0 !== t6.nodeType ? this.T(t6) : u2(t6) ? this.k(t6) : this._(t6);
    }
    O(t6) {
      return this._$AA.parentNode.insertBefore(t6, this._$AB);
    }
    T(t6) {
      this._$AH !== t6 && (this._$AR(), this._$AH = this.O(t6));
    }
    _(t6) {
      this._$AH !== E && c3(this._$AH) ? this._$AA.nextSibling.data = t6 : this.T(r3.createTextNode(t6)), this._$AH = t6;
    }
    $(t6) {
      const { values: i7, _$litType$: s5 } = t6, e7 = "number" == typeof s5 ? this._$AC(t6) : (void 0 === s5.el && (s5.el = N.createElement(P(s5.h, s5.h[0]), this.options)), s5);
      if (this._$AH?._$AD === e7) this._$AH.p(i7);
      else {
        const t7 = new M(e7, this), s6 = t7.u(this.options);
        t7.p(i7), this.T(s6), this._$AH = t7;
      }
    }
    _$AC(t6) {
      let i7 = A.get(t6.strings);
      return void 0 === i7 && A.set(t6.strings, i7 = new N(t6)), i7;
    }
    k(t6) {
      a2(this._$AH) || (this._$AH = [], this._$AR());
      const i7 = this._$AH;
      let s5, e7 = 0;
      for (const h5 of t6) e7 === i7.length ? i7.push(s5 = new _R(this.O(l2()), this.O(l2()), this, this.options)) : s5 = i7[e7], s5._$AI(h5), e7++;
      e7 < i7.length && (this._$AR(s5 && s5._$AB.nextSibling, e7), i7.length = e7);
    }
    _$AR(t6 = this._$AA.nextSibling, i7) {
      for (this._$AP?.(false, true, i7); t6 && t6 !== this._$AB; ) {
        const i8 = t6.nextSibling;
        t6.remove(), t6 = i8;
      }
    }
    setConnected(t6) {
      void 0 === this._$AM && (this._$Cv = t6, this._$AP?.(t6));
    }
  };
  var k = class {
    get tagName() {
      return this.element.tagName;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    constructor(t6, i7, s5, e7, h5) {
      this.type = 1, this._$AH = E, this._$AN = void 0, this.element = t6, this.name = i7, this._$AM = e7, this.options = h5, s5.length > 2 || "" !== s5[0] || "" !== s5[1] ? (this._$AH = Array(s5.length - 1).fill(new String()), this.strings = s5) : this._$AH = E;
    }
    _$AI(t6, i7 = this, s5, e7) {
      const h5 = this.strings;
      let o8 = false;
      if (void 0 === h5) t6 = S2(this, t6, i7, 0), o8 = !c3(t6) || t6 !== this._$AH && t6 !== T, o8 && (this._$AH = t6);
      else {
        const e8 = t6;
        let n7, r7;
        for (t6 = h5[0], n7 = 0; n7 < h5.length - 1; n7++) r7 = S2(this, e8[s5 + n7], i7, n7), r7 === T && (r7 = this._$AH[n7]), o8 ||= !c3(r7) || r7 !== this._$AH[n7], r7 === E ? t6 = E : t6 !== E && (t6 += (r7 ?? "") + h5[n7 + 1]), this._$AH[n7] = r7;
      }
      o8 && !e7 && this.j(t6);
    }
    j(t6) {
      t6 === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t6 ?? "");
    }
  };
  var H = class extends k {
    constructor() {
      super(...arguments), this.type = 3;
    }
    j(t6) {
      this.element[this.name] = t6 === E ? void 0 : t6;
    }
  };
  var I = class extends k {
    constructor() {
      super(...arguments), this.type = 4;
    }
    j(t6) {
      this.element.toggleAttribute(this.name, !!t6 && t6 !== E);
    }
  };
  var L = class extends k {
    constructor(t6, i7, s5, e7, h5) {
      super(t6, i7, s5, e7, h5), this.type = 5;
    }
    _$AI(t6, i7 = this) {
      if ((t6 = S2(this, t6, i7, 0) ?? E) === T) return;
      const s5 = this._$AH, e7 = t6 === E && s5 !== E || t6.capture !== s5.capture || t6.once !== s5.once || t6.passive !== s5.passive, h5 = t6 !== E && (s5 === E || e7);
      e7 && this.element.removeEventListener(this.name, this, s5), h5 && this.element.addEventListener(this.name, this, t6), this._$AH = t6;
    }
    handleEvent(t6) {
      "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t6) : this._$AH.handleEvent(t6);
    }
  };
  var z = class {
    constructor(t6, i7, s5) {
      this.element = t6, this.type = 6, this._$AN = void 0, this._$AM = i7, this.options = s5;
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AI(t6) {
      S2(this, t6);
    }
  };
  var Z = { M: e3, P: h2, A: o3, C: 1, L: V, R: M, D: u2, V: S2, I: R, H: k, N: I, U: L, B: H, F: z };
  var j = t2.litHtmlPolyfillSupport;
  j?.(N, R), (t2.litHtmlVersions ??= []).push("3.3.0");
  var B = (t6, i7, s5) => {
    const e7 = s5?.renderBefore ?? i7;
    let h5 = e7._$litPart$;
    if (void 0 === h5) {
      const t7 = s5?.renderBefore ?? null;
      e7._$litPart$ = h5 = new R(i7.insertBefore(l2(), t7), t7, void 0, s5 ?? {});
    }
    return h5._$AI(t6), h5;
  };

  // node_modules/lit-element/lit-element.js
  var s3 = globalThis;
  var i4 = class extends y {
    constructor() {
      super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
    }
    createRenderRoot() {
      const t6 = super.createRenderRoot();
      return this.renderOptions.renderBefore ??= t6.firstChild, t6;
    }
    update(t6) {
      const r7 = this.render();
      this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t6), this._$Do = B(r7, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
      super.connectedCallback(), this._$Do?.setConnected(true);
    }
    disconnectedCallback() {
      super.disconnectedCallback(), this._$Do?.setConnected(false);
    }
    render() {
      return T;
    }
  };
  i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
  var o4 = s3.litElementPolyfillSupport;
  o4?.({ LitElement: i4 });
  (s3.litElementVersions ??= []).push("4.2.0");

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t3 = (t6) => (e7, o8) => {
    void 0 !== o8 ? o8.addInitializer(() => {
      customElements.define(t6, e7);
    }) : customElements.define(t6, e7);
  };

  // node_modules/@lit/reactive-element/decorators/property.js
  var o5 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
  var r4 = (t6 = o5, e7, r7) => {
    const { kind: n7, metadata: i7 } = r7;
    let s5 = globalThis.litPropertyMetadata.get(i7);
    if (void 0 === s5 && globalThis.litPropertyMetadata.set(i7, s5 = /* @__PURE__ */ new Map()), "setter" === n7 && ((t6 = Object.create(t6)).wrapped = true), s5.set(r7.name, t6), "accessor" === n7) {
      const { name: o8 } = r7;
      return { set(r8) {
        const n8 = e7.get.call(this);
        e7.set.call(this, r8), this.requestUpdate(o8, n8, t6);
      }, init(e8) {
        return void 0 !== e8 && this.C(o8, void 0, t6, e8), e8;
      } };
    }
    if ("setter" === n7) {
      const { name: o8 } = r7;
      return function(r8) {
        const n8 = this[o8];
        e7.call(this, r8), this.requestUpdate(o8, n8, t6);
      };
    }
    throw Error("Unsupported decorator location: " + n7);
  };
  function n4(t6) {
    return (e7, o8) => "object" == typeof o8 ? r4(t6, e7, o8) : ((t7, e8, o9) => {
      const r7 = e8.hasOwnProperty(o9);
      return e8.constructor.createProperty(o9, t7), r7 ? Object.getOwnPropertyDescriptor(e8, o9) : void 0;
    })(t6, e7, o8);
  }

  // node_modules/lit-html/directive-helpers.js
  var { I: t4 } = Z;
  var f3 = (o8) => void 0 === o8.strings;

  // node_modules/lit-html/directive.js
  var t5 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
  var e5 = (t6) => (...e7) => ({ _$litDirective$: t6, values: e7 });
  var i5 = class {
    constructor(t6) {
    }
    get _$AU() {
      return this._$AM._$AU;
    }
    _$AT(t6, e7, i7) {
      this._$Ct = t6, this._$AM = e7, this._$Ci = i7;
    }
    _$AS(t6, e7) {
      return this.update(t6, e7);
    }
    update(t6, e7) {
      return this.render(...e7);
    }
  };

  // node_modules/lit-html/async-directive.js
  var s4 = (i7, t6) => {
    const e7 = i7._$AN;
    if (void 0 === e7) return false;
    for (const i8 of e7) i8._$AO?.(t6, false), s4(i8, t6);
    return true;
  };
  var o6 = (i7) => {
    let t6, e7;
    do {
      if (void 0 === (t6 = i7._$AM)) break;
      e7 = t6._$AN, e7.delete(i7), i7 = t6;
    } while (0 === e7?.size);
  };
  var r5 = (i7) => {
    for (let t6; t6 = i7._$AM; i7 = t6) {
      let e7 = t6._$AN;
      if (void 0 === e7) t6._$AN = e7 = /* @__PURE__ */ new Set();
      else if (e7.has(i7)) break;
      e7.add(i7), c4(t6);
    }
  };
  function h3(i7) {
    void 0 !== this._$AN ? (o6(this), this._$AM = i7, r5(this)) : this._$AM = i7;
  }
  function n5(i7, t6 = false, e7 = 0) {
    const r7 = this._$AH, h5 = this._$AN;
    if (void 0 !== h5 && 0 !== h5.size) if (t6) if (Array.isArray(r7)) for (let i8 = e7; i8 < r7.length; i8++) s4(r7[i8], false), o6(r7[i8]);
    else null != r7 && (s4(r7, false), o6(r7));
    else s4(this, i7);
  }
  var c4 = (i7) => {
    i7.type == t5.CHILD && (i7._$AP ??= n5, i7._$AQ ??= h3);
  };
  var f4 = class extends i5 {
    constructor() {
      super(...arguments), this._$AN = void 0;
    }
    _$AT(i7, t6, e7) {
      super._$AT(i7, t6, e7), r5(this), this.isConnected = i7._$AU;
    }
    _$AO(i7, t6 = true) {
      i7 !== this.isConnected && (this.isConnected = i7, i7 ? this.reconnected?.() : this.disconnected?.()), t6 && (s4(this, i7), o6(this));
    }
    setValue(t6) {
      if (f3(this._$Ct)) this._$Ct._$AI(t6, this);
      else {
        const i7 = [...this._$Ct._$AH];
        i7[this._$Ci] = t6, this._$Ct._$AI(i7, this, 0);
      }
    }
    disconnected() {
    }
    reconnected() {
    }
  };

  // node_modules/lit-html/directives/ref.js
  var e6 = () => new h4();
  var h4 = class {
  };
  var o7 = /* @__PURE__ */ new WeakMap();
  var n6 = e5(class extends f4 {
    render(i7) {
      return E;
    }
    update(i7, [s5]) {
      const e7 = s5 !== this.G;
      return e7 && void 0 !== this.G && this.rt(void 0), (e7 || this.lt !== this.ct) && (this.G = s5, this.ht = i7.options?.host, this.rt(this.ct = i7.element)), E;
    }
    rt(t6) {
      if (this.isConnected || (t6 = void 0), "function" == typeof this.G) {
        const i7 = this.ht ?? globalThis;
        let s5 = o7.get(i7);
        void 0 === s5 && (s5 = /* @__PURE__ */ new WeakMap(), o7.set(i7, s5)), void 0 !== s5.get(this.G) && this.G.call(this.ht, void 0), s5.set(this.G, t6), void 0 !== t6 && this.G.call(this.ht, t6);
      } else this.G.value = t6;
    }
    get lt() {
      return "function" == typeof this.G ? o7.get(this.ht ?? globalThis)?.get(this.G) : this.G?.value;
    }
    disconnected() {
      this.lt === this.ct && this.rt(void 0);
    }
    reconnected() {
      this.rt(this.ct);
    }
  });

  // node_modules/giscus/dist/giscus.mjs
  var S3 = Object.defineProperty;
  var _2 = Object.getOwnPropertyDescriptor;
  var i6 = (e7, t6, s5, n7) => {
    for (var a3 = n7 > 1 ? void 0 : n7 ? _2(t6, s5) : t6, c5 = e7.length - 1, h5; c5 >= 0; c5--)
      (h5 = e7[c5]) && (a3 = (n7 ? h5(t6, s5, a3) : h5(a3)) || a3);
    return n7 && a3 && S3(t6, s5, a3), a3;
  };
  function E2(e7) {
    return customElements.get(e7) ? (t6) => t6 : t3(e7);
  }
  var r6 = class extends i4 {
    constructor() {
      super(), this.GISCUS_SESSION_KEY = "giscus-session", this.GISCUS_DEFAULT_HOST = "https://giscus.app", this.ERROR_SUGGESTION = "Please consider reporting this error at https://github.com/giscus/giscus/issues/new.", this.__session = "", this._iframeRef = e6(), this.messageEventHandler = this.handleMessageEvent.bind(this), this.hasLoaded = false, this.host = this.GISCUS_DEFAULT_HOST, this.strict = "0", this.reactionsEnabled = "1", this.emitMetadata = "0", this.inputPosition = "bottom", this.theme = "light", this.lang = "en", this.loading = "eager", this.setupSession(), window.addEventListener("message", this.messageEventHandler);
    }
    get iframeRef() {
      var e7;
      return (e7 = this._iframeRef) == null ? void 0 : e7.value;
    }
    get _host() {
      try {
        return new URL(this.host), this.host;
      } catch {
        return this.GISCUS_DEFAULT_HOST;
      }
    }
    disconnectedCallback() {
      super.disconnectedCallback(), window.removeEventListener("message", this.messageEventHandler);
    }
    _formatError(e7) {
      return `[giscus] An error occurred. Error message: "${e7}".`;
    }
    setupSession() {
      const e7 = location.href, t6 = new URL(e7), s5 = localStorage.getItem(this.GISCUS_SESSION_KEY), n7 = t6.searchParams.get("giscus") ?? "";
      if (this.__session = "", n7) {
        localStorage.setItem(this.GISCUS_SESSION_KEY, JSON.stringify(n7)), this.__session = n7, t6.searchParams.delete("giscus"), t6.hash = "", history.replaceState(void 0, document.title, t6.toString());
        return;
      }
      if (s5)
        try {
          this.__session = JSON.parse(s5);
        } catch (a3) {
          localStorage.removeItem(this.GISCUS_SESSION_KEY), console.warn(
            `${this._formatError(
              a3 == null ? void 0 : a3.message
            )} Session has been cleared.`
          );
        }
    }
    signOut() {
      localStorage.removeItem(this.GISCUS_SESSION_KEY), this.__session = "", this.update(/* @__PURE__ */ new Map());
    }
    handleMessageEvent(e7) {
      if (e7.origin !== this._host) return;
      const { data: t6 } = e7;
      if (!(typeof t6 == "object" && t6.giscus)) return;
      if (this.iframeRef && t6.giscus.resizeHeight && (this.iframeRef.style.height = `${t6.giscus.resizeHeight}px`), t6.giscus.signOut) {
        console.info("[giscus] User has logged out. Session has been cleared."), this.signOut();
        return;
      }
      if (!t6.giscus.error) return;
      const s5 = t6.giscus.error;
      if (s5.includes("Bad credentials") || s5.includes("Invalid state value") || s5.includes("State has expired")) {
        if (localStorage.getItem(this.GISCUS_SESSION_KEY) !== null) {
          console.warn(`${this._formatError(s5)} Session has been cleared.`), this.signOut();
          return;
        }
        console.error(
          `${this._formatError(s5)} No session is stored initially. ${this.ERROR_SUGGESTION}`
        );
      }
      if (s5.includes("Discussion not found")) {
        console.warn(
          `[giscus] ${s5}. A new discussion will be created if a comment/reaction is submitted.`
        );
        return;
      }
      console.error(`${this._formatError(s5)} ${this.ERROR_SUGGESTION}`);
    }
    sendMessage(e7) {
      var t6;
      !((t6 = this.iframeRef) != null && t6.contentWindow) || !this.hasLoaded || this.iframeRef.contentWindow.postMessage({ giscus: e7 }, this._host);
    }
    updateConfig() {
      const e7 = {
        setConfig: {
          repo: this.repo,
          repoId: this.repoId,
          category: this.category,
          categoryId: this.categoryId,
          term: this.getTerm(),
          number: +this.getNumber(),
          strict: this.strict === "1",
          reactionsEnabled: this.reactionsEnabled === "1",
          emitMetadata: this.emitMetadata === "1",
          inputPosition: this.inputPosition,
          theme: this.theme,
          lang: this.lang
        }
      };
      this.sendMessage(e7);
    }
    firstUpdated() {
      var e7;
      (e7 = this.iframeRef) == null || e7.addEventListener("load", () => {
        var t6;
        (t6 = this.iframeRef) == null || t6.classList.remove("loading"), this.hasLoaded = true, this.updateConfig();
      });
    }
    requestUpdate(e7, t6, s5) {
      if (!this.hasUpdated || e7 === "host") {
        super.requestUpdate(e7, t6, s5);
        return;
      }
      this.updateConfig();
    }
    getMetaContent(e7, t6 = false) {
      const s5 = t6 ? `meta[property='og:${e7}'],` : "", n7 = document.querySelector(
        s5 + `meta[name='${e7}']`
      );
      return n7 ? n7.content : "";
    }
    _getCleanedUrl() {
      const e7 = new URL(location.href);
      return e7.searchParams.delete("giscus"), e7.hash = "", e7;
    }
    getTerm() {
      switch (this.mapping) {
        case "url":
          return this._getCleanedUrl().toString();
        case "title":
          return document.title;
        case "og:title":
          return this.getMetaContent("title", true);
        case "specific":
          return this.term ?? "";
        case "number":
          return "";
        case "pathname":
        default:
          return location.pathname.length < 2 ? "index" : location.pathname.substring(1).replace(/\.\w+$/, "");
      }
    }
    getNumber() {
      return this.mapping === "number" ? this.term ?? "" : "";
    }
    getIframeSrc() {
      const e7 = this._getCleanedUrl().toString(), t6 = `${e7}${this.id ? "#" + this.id : ""}`, s5 = this.getMetaContent("description", true), n7 = this.getMetaContent("giscus:backlink") || e7, a3 = {
        origin: t6,
        session: this.__session,
        repo: this.repo,
        repoId: this.repoId ?? "",
        category: this.category ?? "",
        categoryId: this.categoryId ?? "",
        term: this.getTerm(),
        number: this.getNumber(),
        strict: this.strict,
        reactionsEnabled: this.reactionsEnabled,
        emitMetadata: this.emitMetadata,
        inputPosition: this.inputPosition,
        theme: this.theme,
        description: s5,
        backLink: n7
      }, c5 = this._host, h5 = this.lang ? `/${this.lang}` : "", l3 = new URLSearchParams(a3);
      return `${c5}${h5}/widget?${l3.toString()}`;
    }
    render() {
      return x`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${n6(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `;
    }
  };
  r6.styles = i`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;
  i6([
    n4({ reflect: true })
  ], r6.prototype, "host", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "repo", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "repoId", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "category", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "categoryId", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "mapping", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "term", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "strict", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "reactionsEnabled", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "emitMetadata", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "inputPosition", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "theme", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "lang", 2);
  i6([
    n4({ reflect: true })
  ], r6.prototype, "loading", 2);
  r6 = i6([
    E2("giscus-widget")
  ], r6);

  // <stdin>
  function setupTheme() {
    const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
    const themeToggleBtn = document.getElementById("theme-toggle");
    function setThemeAndSync(isDark) {
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("color-theme", isDark ? "dark" : "light");
      themeToggleDarkIcon.classList.toggle("hidden", isDark);
      themeToggleLightIcon.classList.toggle("hidden", !isDark);
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const storedTheme = localStorage.getItem("color-theme");
    const systemDark = prefersDark.matches;
    if (storedTheme) {
      setThemeAndSync(storedTheme === "dark");
    } else {
      setThemeAndSync(systemDark);
    }
    prefersDark.addEventListener("change", (e7) => {
      setThemeAndSync(e7.matches);
    });
    themeToggleBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.contains("dark");
      setThemeAndSync(!isDark);
    });
  }
  function setupToc() {
    const toc = document.querySelector("#toc");
    if (!toc) return;
    const tocToggle = toc.querySelector("#toc-toggle");
    const tocContent = toc.querySelector(".toc-content");
    const minusIcon = toc.querySelector(".toc-expand");
    const plusIcon = toc.querySelector(".toc-collapse");
    if (tocToggle) {
      tocToggle.addEventListener("click", function() {
        tocContent.classList.toggle("hidden");
        minusIcon.classList.toggle("hidden");
        plusIcon.classList.toggle("hidden");
        localStorage.setItem("tocState", tocContent.classList.contains("hidden") ? "hidden" : "visible");
      });
      const savedState = localStorage.getItem("tocState");
      if (savedState === "hidden") {
        tocContent.classList.add("hidden");
        minusIcon.classList.add("hidden");
        plusIcon.classList.remove("hidden");
      }
    }
  }
  function setupArticleAsideTabs() {
    const articleAside = document.getElementById("article-aside");
    if (!articleAside) return;
    const tabButtons = articleAside.querySelectorAll(".tab-button");
    const tabContents = articleAside.querySelectorAll(".tab-content");
    const tabSelect = articleAside.querySelector("select#Tab");
    function switchTab(tabId) {
      tabContents.forEach((content) => {
        content.classList.add("hidden");
      });
      const selectedContent = articleAside.querySelector(`#${tabId}`);
      if (selectedContent) {
        selectedContent.classList.remove("hidden");
      }
      tabButtons.forEach((button) => {
        const isSelected = button.dataset.tab === tabId;
        button.setAttribute("aria-selected", isSelected);
        button.classList.remove(
          "fluidity-tab-active",
          "fluidity-tab-inactive"
        );
        if (isSelected) {
          button.classList.add("fluidity-tab-active");
        } else {
          button.classList.add("fluidity-tab-inactive");
        }
      });
      if (tabSelect) {
        tabSelect.value = tabId.charAt(0).toUpperCase() + tabId.slice(1);
      }
    }
    tabButtons.forEach((button) => {
      button.addEventListener("click", (e7) => {
        e7.preventDefault();
        switchTab(button.dataset.tab);
      });
    });
    if (tabSelect) {
      tabSelect.addEventListener("change", (e7) => {
        switchTab(e7.target.value.toLowerCase());
      });
    }
    const initialTab = tabButtons[0]?.dataset.tab;
    if (initialTab) {
      switchTab(initialTab);
    }
  }
  function setupArticleSidebar() {
    const toggleButton = document.getElementById("toggle-sidebar");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    if (!toggleButton || !sidebar || !mainContent) return;
    toggleButton.addEventListener("click", () => {
      sidebar.remove();
      mainContent.parentNode.classList.remove("lg:grid-cols-3");
    });
  }
  function setupMobileMenu() {
    const button = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");
    if (!button || !menu) return;
    let isOpen = false;
    function showMenu() {
      menu.classList.remove("fluidity-mobile-menu-closed");
      menu.classList.add("fluidity-mobile-menu-open");
      menu.setAttribute("aria-hidden", "false");
      button.setAttribute("aria-expanded", "true");
      isOpen = true;
    }
    function hideMenu() {
      menu.classList.remove("fluidity-mobile-menu-open");
      menu.classList.add("fluidity-mobile-menu-closed");
      menu.setAttribute("aria-hidden", "true");
      button.setAttribute("aria-expanded", "false");
      isOpen = false;
    }
    button.addEventListener("click", (e7) => {
      e7.stopPropagation();
      if (isOpen) {
        hideMenu();
      } else {
        showMenu();
      }
    });
    document.addEventListener("click", (event) => {
      if (isOpen && !menu.contains(event.target) && !button.contains(event.target)) {
        hideMenu();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && isOpen) {
        hideMenu();
      }
    });
  }
  function init() {
    setupTheme();
    setupToc();
    setupArticleSidebar();
    setupArticleAsideTabs();
    setupMobileMenu();
  }
  document.addEventListener("DOMContentLoaded", init);
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
