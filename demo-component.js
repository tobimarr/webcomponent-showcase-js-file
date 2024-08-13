!function(t){function i(t,i,s,e){for(var o,n=arguments.length,r=n<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(o=t[h])&&(r=(n<3?o(r):n>3?o(i,s,r):o(i,s))||r);return n>3&&r&&Object.defineProperty(i,s,r),r}const s=globalThis,e=s.ShadowRoot&&(void 0===s.ShadyCSS||s.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class r{constructor(t,i,s){if(this._$cssResult$=!0,s!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=n.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(i,t))}return t}toString(){return this.cssText}}const h=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(i)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:f}=Object,p=globalThis,m=p.trustedTypes,g=m?m.emptyScript:"",b=p.reactiveElementPolyfillSupport,v=(t,i)=>t,y={toAttribute(t,i){switch(i){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},w=(t,i)=>!a(t,i),S={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=S){if(i.state&&(i.attribute=!1),this._$Ei(),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),e=this.getPropertyDescriptor(t,s,i);void 0!==e&&c(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){const{get:e,set:o}=l(this.prototype,t)??{get(){return this[i]},set(t){this[i]=t}};return{get(){return e?.call(this)},set(i){const n=e?.call(this);o.call(this,i),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??S}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=f(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,i=[...d(t),...u(t)];for(const s of i)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const i=litPropertyMetadata.get(t);if(void 0!==i)for(const[t,s]of i)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(h(t))}else void 0!==t&&i.push(h(t));return i}static _$Eu(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(e)t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),o=s.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EC(t,i){const s=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,s);if(void 0!==e&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(i,s.type);this._$Em=t,null==o?this.removeAttribute(e):this.setAttribute(e,o),this._$Em=null}}_$AK(t,i){const s=this.constructor,e=s._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=s.getPropertyOptions(e),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=e,this[e]=o.fromAttribute(i,t.type),this._$Em=null}}requestUpdate(t,i,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??w)(this[t],i))return;this.P(t,i,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,i,s){this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,i]of this._$Ep)this[t]=i;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[i,s]of t)!0!==s.wrapped||this._$AL.has(i)||void 0===this[i]||this.P(i,this[i],s)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(i)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,b?.({ReactiveElement:$}),(p.reactiveElementVersions??=[]).push("2.0.4");const k=globalThis,x=k.trustedTypes,C=x?x.createPolicy("lit-html",{createHTML:t=>t}):void 0,A="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+_,M=`<${E}>`,O=document,T=()=>O.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,P="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,N=/>/g,R=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,D=/"/g,H=/^(?:script|style|textarea|title)$/i,W=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),Z=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),J=new WeakMap,V=O.createTreeWalker(O,129);function Y(t,i){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(i):i}class q{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,n=0;const r=t.length-1,h=this.parts,[a,c]=((t,i)=>{const s=t.length-1,e=[];let o,n=2===i?"<svg>":3===i?"<math>":"",r=j;for(let i=0;i<s;i++){const s=t[i];let h,a,c=-1,l=0;for(;l<s.length&&(r.lastIndex=l,a=r.exec(s),null!==a);)l=r.lastIndex,r===j?"!--"===a[1]?r=I:void 0!==a[1]?r=N:void 0!==a[2]?(H.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=R):void 0!==a[3]&&(r=R):r===R?">"===a[0]?(r=o??j,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,h=a[1],r=void 0===a[3]?R:'"'===a[3]?D:L):r===D||r===L?r=R:r===I||r===N?r=j:(r=R,o=void 0);const d=r===R&&t[i+1].startsWith("/>")?" ":"";n+=r===j?s+M:c>=0?(e.push(h),s.slice(0,c)+A+s.slice(c)+_+d):s+_+(-2===c?i:d)}return[Y(t,n+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]})(t,i);if(this.el=q.createElement(a,s),V.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(e=V.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes())for(const t of e.getAttributeNames())if(t.endsWith(A)){const i=c[n++],s=e.getAttribute(t).split(_),r=/([.?@])?(.*)/.exec(i);h.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?X:"?"===r[1]?tt:"@"===r[1]?it:Q}),e.removeAttribute(t)}else t.startsWith(_)&&(h.push({type:6,index:o}),e.removeAttribute(t));if(H.test(e.tagName)){const t=e.textContent.split(_),i=t.length-1;if(i>0){e.textContent=x?x.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],T()),V.nextNode(),h.push({type:2,index:++o});e.append(t[i],T())}}}else if(8===e.nodeType)if(e.data===E)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(_,t+1));)h.push({type:7,index:o}),t+=_.length-1}o++}}static createElement(t,i){const s=O.createElement("template");return s.innerHTML=t,s}}function K(t,i,s=t,e){if(i===Z)return i;let o=void 0!==e?s.o?.[e]:s.l;const n=U(i)?void 0:i._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,s,e)),void 0!==e?(s.o??=[])[e]=o:s.l=o),void 0!==o&&(i=K(t,o._$AS(t,i.values),o,e)),i}class F{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??O).importNode(i,!0);V.currentNode=e;let o=V.nextNode(),n=0,r=0,h=s[0];for(;void 0!==h;){if(n===h.index){let i;2===h.type?i=new G(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new st(o,this,t)),this._$AV.push(i),h=s[++r]}n!==h?.index&&(o=V.nextNode(),n++)}return V.currentNode=O,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class G{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,i,s,e){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this.v=e?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=K(this,t,i),U(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(Y(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else{const t=new F(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t}}_$AC(t){let i=J.get(t.strings);return void 0===i&&J.set(t.strings,i=new q(t)),i}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new G(this.O(T()),this.O(T()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=B}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=K(this,t,i,0),n=!U(t)||t!==this._$AH&&t!==Z,n&&(this._$AH=t);else{const e=t;let r,h;for(t=o[0],r=0;r<o.length-1;r++)h=K(this,e[s+r],i,r),h===Z&&(h=this._$AH[r]),n||=!U(h)||h!==this._$AH[r],h===B?t=B:t!==B&&(t+=(h??"")+o[r+1]),this._$AH[r]=h}n&&!e&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class X extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class tt extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class it extends Q{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){if((t=K(this,t,i,0)??B)===Z)return;const s=this._$AH,e=t===B&&s!==B||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==B&&(s===B||e);e&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const et=k.litHtmlPolyfillSupport;et?.(q,G),(k.litHtmlVersions??=[]).push("3.2.0");class ot extends ${constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,i,s)=>{const e=s?.renderBefore??i;let o=e._$litPart$;if(void 0===o){const t=s?.renderBefore??null;e._$litPart$=o=new G(i.insertBefore(T(),t),t,void 0,s??{})}return o._$AI(t),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return Z}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.1.0");const rt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},ht=(t=rt,i,s)=>{const{kind:e,metadata:o}=s;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(s.name,t),"accessor"===e){const{name:e}=s;return{set(s){const o=i.get.call(this);i.set.call(this,s),this.requestUpdate(e,o,t)},init(i){return void 0!==i&&this.P(e,void 0,t),i}}}if("setter"===e){const{name:e}=s;return function(s){const o=this[e];i.call(this,s),this.requestUpdate(e,o,t)}}throw Error("Unsupported decorator location: "+e)};function at(t){return(i,s)=>"object"==typeof s?ht(t,i,s):((t,i,s)=>{const e=i.hasOwnProperty(s);return i.constructor.createProperty(s,e?{...t,wrapped:!0}:t),e?Object.getOwnPropertyDescriptor(i,s):void 0})(t,i,s)}t.DemoComponent=class extends ot{constructor(){super(...arguments),this.name="World",this.orderId="",this.theme="default",this.zipCode="",this.count=0}render(){return W`
      <div class="theme-${this.theme}">
        <h1>${this.sayHello(this.name)}!</h1>
        <button @click=${this._onClick} part="button" class="count">
          Click Count: ${this.count}
        </button>
        <form @submit="${this._submit}">
          <input value="${this.orderId}" @change=${this.updateOrderId} placeholder="Order ID"/>
          <input value="${this.zipCode}" @change=${this.updateZipcode} placeholder="Zip Code"/>
          <button type="submit">Submit</button>
        </form>
        <slot></slot>
      </div>
    `}_onClick(){this.count++,this.dispatchEvent(new CustomEvent("count-changed"))}_submit(t){null==t||t.preventDefault(),console.log("SUBMIT",this.orderId,this.zipCode),this.dispatchEvent(new CustomEvent("submit-demo-form",{detail:{orderId:this.orderId,zipCode:this.zipCode}}))}updateOrderId(t){const i=t.currentTarget;this.orderId=null==i?void 0:i.value}updateZipcode(t){const i=t.currentTarget;this.zipCode=null==i?void 0:i.value}sayHello(t){return`Meddl, ${t}`}},t.DemoComponent.styles=((t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new r(s,t,o)})`
    :host {
      display: block;
      max-width: 800px;
      margin-top: 10rem;
    }

    .theme-default {
      border: solid 1px gray;
      padding: 2rem 1rem;
      background-color: #bdbdd1;
      font-family: Josefin Sans,Arial,sans-serif;

      * {
        margin: 1rem 0;
      }

      button {
        border: 2px solid rgba(255, 255, 255, 0);
        background: rgba(64, 0, 200, 1);
        box-shadow: none;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        display: inline-block;
        line-height: 1.5;
        margin-bottom: 0;
        margin-top: 0;
        max-width: 100%;
        min-width: 0;
        overflow: hidden;
        padding: 4px 12px;
        text-align: center;
        outline: none;
        color: white;
        text-decoration: none;
        font-weight: bold;
        -webkit-appearance: button;
      }

      button:hover {
        filter: brightness(85%);
      }

      button:focus:not(:focus-visible) {
        outline: none;
      }

      button:focus:not(:-moz-focusring) {
        outline: none;
      }
    }


    .theme-alexander-reichert {
      background-image: url('https://www.icegif.com/wp-content/uploads/2024/03/nyan-cat-icegif-6.gif');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: contain;
      height: 50rem;
      padding: 0 2rem;
      top: 10rem;
      color: lime;
      font-weight: bold;
      font-family:'Comic Sans MS', 'VERDANA', 'ARIAL', 'HELVETICA';

      h1 {
        margin: 0;
        padding-top: 5rem;
        text-shadow: purple 10px 0 20px;
        transform-origin: 200px;
        -webkit-animation: disco 2s linear infinite;
        -moz-animation: disco 2s linear infinite;
        -ms-animation: disco 2s linear infinite;
        -o-animation: disco 2s linear infinite;
        animation: disco 2s linear infinite;
      }

      input, button {
        -webkit-animation: bounce 0.65s linear infinite;
        -moz-animation: bounce 0.65s linear infinite;
        -ms-animation: bounce 0.65s linear infinite;
        -o-animation: bounce 0.65s linear infinite;
        animation: bounce 0.65s linear infinite;
      }

      input {
        padding: 0.5rem 1rem;
        border-radius: 5rem;
        border: 1px solid pink;
        color: pink;
        font-weight: bold;
      }

      button {
        margin: 1rem 0;
        padding: 0.5rem 1rem;
        border-radius: 5rem;
        border: 1px solid pink;
        background: pink;
        font-weight: bold;
        color: white;
      }
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
      40% {transform: translateY(-30px);}
      60% {transform: translateY(-15px);}
    }

    @keyframes disco {
      0% {
        color: red;
        opacity: 0;
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      20% {
        opacity: 1;
      }
      35% {
        color: green;
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      70% {
        color: turquoise;
        opacity: 0;
      }
      85% {
        color: yellow;
        opacity: 1;
      }
      100% {
        color: red;
        opacity: 0
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
      }

    }
  `,i([at({type:String})],t.DemoComponent.prototype,"name",void 0),i([at({type:String})],t.DemoComponent.prototype,"orderId",void 0),i([at({type:String})],t.DemoComponent.prototype,"theme",void 0),i([at({type:String})],t.DemoComponent.prototype,"zipCode",void 0),i([at({type:Number})],t.DemoComponent.prototype,"count",void 0),t.DemoComponent=i([(t=>(i,s)=>{void 0!==s?s.addInitializer((()=>{customElements.define(t,i)})):customElements.define(t,i)})("demo-component")],t.DemoComponent),Object.defineProperty(t,"i",{value:!0})}({});
