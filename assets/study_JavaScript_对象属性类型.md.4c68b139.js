import{_ as e,c as l,o as s,d as a}from"./app.8d347387.js";const y=JSON.parse('{"title":"\u5BF9\u8C61\u5C5E\u6027\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6570\u636E\u5C5E\u6027","slug":"\u6570\u636E\u5C5E\u6027"},{"level":2,"title":"\u8BBF\u95EE\u5668\u5C5E\u6027","slug":"\u8BBF\u95EE\u5668\u5C5E\u6027"}],"relativePath":"study/JavaScript/\u5BF9\u8C61\u5C5E\u6027\u7C7B\u578B.md"}'),o={name:"study/JavaScript/\u5BF9\u8C61\u5C5E\u6027\u7C7B\u578B.md"},i=a(`<h1 id="\u5BF9\u8C61\u5C5E\u6027\u7C7B\u578B" tabindex="-1">\u5BF9\u8C61\u5C5E\u6027\u7C7B\u578B <a class="header-anchor" href="#\u5BF9\u8C61\u5C5E\u6027\u7C7B\u578B" aria-hidden="true">#</a></h1><h2 id="\u6570\u636E\u5C5E\u6027" tabindex="-1">\u6570\u636E\u5C5E\u6027 <a class="header-anchor" href="#\u6570\u636E\u5C5E\u6027" aria-hidden="true">#</a></h2><ul><li>\u5C5E\u6027\u63CF\u8FF0\u7B26 <ul><li>value - \u5C5E\u6027\u503C</li><li>writable - \u662F\u5426\u53EA\u53EF\u8BFB</li><li>enumerable - \u662F\u5426\u4F1A\u5728\u5FAA\u73AF\u4E2D\u5217\u51FA</li><li>configurable - \u8BE5\u5C5E\u6027\u662F\u5426\u53EF\u4EE5\u88AB\u5220\u9664\uFF0C\u8FD9\u4E9B\u7279\u6027\u6807\u5FD7\u662F\u5426\u53EF\u4EE5\u88AB\u4FEE\u6539 <ul><li><strong>configurable: false</strong>\u9632\u6B62\u66F4\u6539\u548C\u5220\u9664\u5C5E\u6027\u63CF\u8FF0\u7B26\uFF0C\u4F46\u662F\u5141\u8BB8\u66F4\u6539\u5BF9\u8C61\u7684\u503C\uFF0C\u4F46\u662F\u5C06configurable\u66F4\u6539\u4E3Afalse\u662F\u4E0D\u53EF\u9006\u7684</li></ul></li><li>\u201C\u5E38\u7528\u65B9\u5F0F\u201D\u521B\u5EFA\u65F6\u9ED8\u8BA4\u90FD\u662Ftrue</li></ul></li><li>\u83B7\u53D6\u5C5E\u6027\u63CF\u8FF0\u7B26\u96C6\u5408 <ul><li><code>Object.getOwnPropertyDescriptor(obj, propertyName)</code></li><li><code>Object.getOwnPropertyDescriptors(obj)</code></li></ul></li><li>\u4FEE\u6539\u5C5E\u6027\u63CF\u8FF0\u7B26 <ul><li><code>Object.defineProperty(obj, propertyName, descriptor)</code></li><li><code>Object.defineProperties(obj, descriptors)</code><ul><li>\u5B9E\u73B0\u201C\u66F4\u597D\u201C\u514B\u9686 - <code>let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));</code></li><li>\u4E0E<code>for..in</code>\u533A\u522B\uFF1A\u4E0D\u4F1A\u5FFD\u7565symbol\u7C7B\u578B\u548C\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027</li></ul></li><li>\u5F53\u4F7F\u7528\u63CF\u8FF0\u5668\u521B\u5EFA\u4E00\u4E2A\u5C5E\u6027\uFF0C\u5B83\u7684\u6807\u8BC6\u9ED8\u8BA4\u662F <code>false</code></li></ul></li><li>\u8BBE\u5B9A\u5168\u5C40\u5BC6\u5C01\u5BF9\u8C61(\u5F88\u5C11\u7528) <ul><li><code>Object.preventExtensions(obj)</code> - \u7981\u6B62\u5411\u5BF9\u8C61\u6DFB\u52A0\u65B0\u5C5E\u6027</li><li><code>Object.seal(obj)</code> - \u7981\u6B62\u6DFB\u52A0/\u5220\u9664\u5C5E\u6027</li><li><code>Object.freeze(obj)</code> - \u7981\u6B62\u6DFB\u52A0/\u5220\u9664/\u66F4\u6539\u5C5E\u6027</li><li><code>Object.isExtensible(obj)</code></li><li><code>Object.isSealed(obj)</code></li><li><code>Object.isFrozen(obj)</code></li></ul></li></ul><h2 id="\u8BBF\u95EE\u5668\u5C5E\u6027" tabindex="-1">\u8BBF\u95EE\u5668\u5C5E\u6027 <a class="header-anchor" href="#\u8BBF\u95EE\u5668\u5C5E\u6027" aria-hidden="true">#</a></h2><ul><li><p>\u672C\u8D28\u4E0A\u662F\u7528\u4E8E\u83B7\u53D6\u548C\u8BBE\u7F6E\u503C\u7684\u51FD\u6570\uFF0C\u4F46\u4ECE\u5916\u90E8\u4EE3\u7801\u6765\u770B\u5C31\u50CF\u5E38\u89C4\u5C5E\u6027</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> obj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    get propName {</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5F53\u8BFB\u53D6obj.propName\u65F6\uFF0Cgetter\u8D77\u4F5C\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    set propName </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// \u5F53\u6267\u884Cobj.propName = value\u65F6\uFF0Csetter\u8D77\u4F5C\u7528</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>\u5C5E\u6027\u6807\u5FD7</p><ul><li>get - \u4E0D\u5E26\u53C2\u6570\u7684\u51FD\u6570\uFF0C\u5728\u8BFB\u53D6\u51FD\u6570\u65F6\u6267\u884C</li><li>set - \u5E26\u4E00\u4E2A\u53C2\u6570\u7684\u51FD\u6570\uFF0C\u5728\u5C5E\u6027\u88AB\u8BBE\u7F6E\u65F6\u8C03\u7528</li><li>enumerable</li><li>configurable</li><li><strong>\u6CE8\u610F</strong>\uFF1A\u8BBF\u95EE\u5668\u5C5E\u6027\u7684\u6807\u5FD7\u4E0D\u53EF\u80FD\u51FA\u73B0value\u7279\u6027</li></ul></li><li><p>\u4F7F\u7528\u6280\u5DE7</p><ul><li><code>getter/setter</code> \u53EF\u4EE5\u7528\u4F5C\u201C\u771F\u5B9E\u201D\u5C5E\u6027\u503C\u7684\u5305\u88C5\u5668\uFF0C\u4EE5\u4FBF\u5BF9\u5B83\u4EEC\u8FDB\u884C\u66F4\u591A\u7684\u63A7\u5236</li><li>\u517C\u5BB9\u6027\uFF1A \u5141\u8BB8\u968F\u65F6\u901A\u8FC7\u4F7F\u7528 getter \u548C setter \u66FF\u6362\u201C\u6B63\u5E38\u7684\u201D\u6570\u636E\u5C5E\u6027\uFF0C\u6765\u63A7\u5236\u548C\u8C03\u6574\u8FD9\u4E9B\u5C5E\u6027\u7684\u884C\u4E3A</li></ul></li></ul>`,5),t=[i];function n(c,r,p,d,u,b){return s(),l("div",null,t)}var j=e(o,[["render",n]]);export{y as __pageData,j as default};
