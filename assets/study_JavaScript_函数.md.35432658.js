import{_ as o,c as n,o as a,d as e,a as l,b as s}from"./app.8d347387.js";const f=JSON.parse('{"title":"\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u51FD\u6570\u521B\u5EFA\u7684\u4E3B\u8981\u4E09\u79CD\u5F62\u5F0F","slug":"\u51FD\u6570\u521B\u5EFA\u7684\u4E3B\u8981\u4E09\u79CD\u5F62\u5F0F"},{"level":2,"title":"\u51FD\u6570\u57FA\u672C\u7279\u6027","slug":"\u51FD\u6570\u57FA\u672C\u7279\u6027"},{"level":2,"title":"\u51FD\u6570\u8FDB\u9636\u7279\u6027","slug":"\u51FD\u6570\u8FDB\u9636\u7279\u6027"}],"relativePath":"study/JavaScript/\u51FD\u6570.md"}'),t={name:"study/JavaScript/\u51FD\u6570.md"},c=e('<h1 id="\u51FD\u6570" tabindex="-1">\u51FD\u6570 <a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a></h1><h2 id="\u51FD\u6570\u521B\u5EFA\u7684\u4E3B\u8981\u4E09\u79CD\u5F62\u5F0F" tabindex="-1">\u51FD\u6570\u521B\u5EFA\u7684\u4E3B\u8981\u4E09\u79CD\u5F62\u5F0F <a class="header-anchor" href="#\u51FD\u6570\u521B\u5EFA\u7684\u4E3B\u8981\u4E09\u79CD\u5F62\u5F0F" aria-hidden="true">#</a></h2><ul><li>\u51FD\u6570\u58F0\u660E <ul><li>\u51FD\u6570\u63D0\u5347</li></ul></li><li>\u51FD\u6570\u8868\u8FBE\u5F0F <ul><li>\u533F\u540D\u51FD\u6570</li></ul></li><li>\u7BAD\u5934\u51FD\u6570 - \u9488\u5BF9\u90A3\u4E9B\u6CA1\u6709\u81EA\u5DF1\u7684\u201C\u4E0A\u4E0B\u6587\u201D\uFF0C\u4F46\u5728\u5F53\u524D\u4E0A\u4E0B\u6587\u4E2D\u8D77\u4F5C\u7528\u7684\u77ED\u4EE3\u7801\u7684 <ul><li>\u7B80\u6D01\u7279\u6027 <ul><li>\u5E26\u82B1\u62EC\u53F7 - <code>(...args) =&gt; { body }</code>\u9700\u8981\u663E\u5F0F\u8FD4\u56DEreturn</li><li>\u4E0D\u5E26\u82B1\u62EC\u53F7 - <code>(...args) =&gt; expression</code></li></ul></li><li>\u6CA1\u6709\u81EA\u5DF1\u7684this\u548Carguments\uFF0C\u65E0\u6CD5\u4F5C\u4E3A\u6784\u9020\u51FD\u6570</li></ul></li><li>\u5C11\u89C1\u7684\u521B\u5EFA\u65B9\u5F0F - <code>let func = new Function ([arg1, arg2, ...argN], functionBody)</code><ul><li>\u5E94\u7528\u573A\u666F\u975E\u5E38\u7279\u6B8A\uFF0C\u9700\u8981\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u4EE3\u7801\u6216\u8005\u52A8\u6001\u5730\u4ECE\u6A21\u677F\u7F16\u8BD1\u51FD\u6570\u65F6\u624D\u4F1A\u4F7F\u7528</li><li>\u4F7F\u7528 <code>new Function</code> \u521B\u5EFA\u7684\u51FD\u6570\uFF0C\u5B83\u7684 <code>[[Environment]]</code> \u6307\u5411\u5168\u5C40\u8BCD\u6CD5\u73AF\u5883\uFF0C\u800C\u4E0D\u662F\u51FD\u6570\u5F53\u524D\u7684\u8BCD\u6CD5\u73AF\u5883\u3002\u56E0\u6B64\uFF0C<strong>\u6211\u4EEC\u4E0D\u80FD\u5728 <code>new Function</code> \u4E2D\u76F4\u63A5\u4F7F\u7528\u5916\u90E8\u53D8\u91CF</strong>\u3002</li></ul></li></ul><h2 id="\u51FD\u6570\u57FA\u672C\u7279\u6027" tabindex="-1">\u51FD\u6570\u57FA\u672C\u7279\u6027 <a class="header-anchor" href="#\u51FD\u6570\u57FA\u672C\u7279\u6027" aria-hidden="true">#</a></h2><ul><li>\u5757\u7EA7\u4F5C\u7528\u57DF\u3001\u5C40\u90E8\u53D8\u91CF</li><li>\u4F5C\u4E3A\u53C2\u6570\u4F20\u7ED9\u51FD\u6570\u7684\u503C\uFF0C\u4F1A\u88AB\u590D\u5236\u5230\u5C40\u90E8\u53D8\u91CF</li><li>\u8BBF\u95EE\u5916\u90E8\u53D8\u91CF <ul><li>\u63A8\u8350\u4E3B\u8981\u4F7F\u7528\u5C40\u90E8\u53D8\u91CF\u548C\u53C2\u6570\uFF0C\u5916\u90E8\u53D8\u91CF\u8F85\u52A9\uFF0C\u5E2E\u52A9\u51FD\u6570\u7B80\u6D01\u6613\u61C2</li></ul></li><li>\u8FD4\u56DE\u503C\uFF0C\u5982\u679C\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C\u9ED8\u8BA4\u8FD4\u56DEundefined</li></ul><h2 id="\u51FD\u6570\u8FDB\u9636\u7279\u6027" tabindex="-1">\u51FD\u6570\u8FDB\u9636\u7279\u6027 <a class="header-anchor" href="#\u51FD\u6570\u8FDB\u9636\u7279\u6027" aria-hidden="true">#</a></h2>',6),r=l("ul",null,[l("li",null,"\u51FD\u6570\u53C2\u6570"),l("li",null,[s("Rest\u53C2\u6570 - \u51FD\u6570\u5B9A\u4E49\u65F6\u4F7F\u7528 "),l("ul",null,[l("li",null,[s("function func(arg1, arg2, "),l("strong",null,"...rest"),s(") {}")]),l("li",null,"\u8FC7\u53BB\u4E0D\u652F\u6301Rest\u8BED\u6CD5\u65F6\uFF0C\u53EF\u4EE5\u501F\u52A9\u7C7B\u6570\u7EC4arguments\u83B7\u53D6\u6240\u6709\u53C2\u6570")])]),l("li",null,[s("Spread\u53C2\u6570 - \u51FD\u6570\u8C03\u7528\u65F6\u4F7F\u7528 "),l("ul",null,[l("li",null,"Math.max(1,4, ...arr)"),l("li",null,[s("Spread\u8BED\u6CD5\u8FD8\u53EF\u4EE5\u7528\u6765 "),l("ul",null,[l("li",null,"\u5408\u5E76\u6570\u7EC4 - const newArr = [1, ...arr1, 3, ...arr2]"),l("li",null,[s("\u590D\u5236/\u8FC7\u6EE4\u5BF9\u8C61 "),l("ul",null,[l("li",{"css-module":".obj"},"const objCopy ="),l("li",null,"\u5254\u9664\u5C11\u6570\u5C5E\u6027\uFF1Aconst { name, ...tmp } = obj"),l("li",null,"\u4FDD\u7559\u5C11\u6570\u5C5E\u6027\uFF1Alet namePerson = (({ name }) => ({name}))(person)")])])])])])]),l("li",null,[s("\u95ED\u5305 "),l("ul",null,[l("li",null,"\u8BB0\u4F4F\u5176\u5916\u90E8\u53D8\u91CF\u5E76\u53EF\u4EE5\u8BBF\u95EE\u8FD9\u4E9B\u53D8\u91CF \u7684\u51FD\u6570")])]),l("li",null,[s("\u51FD\u6570\u5BF9\u8C61 "),l("ul",null,[l("li",null,[s("\u5185\u5EFA\u5C5E\u6027 "),l("ul",null,[l("li",null,"name - \u51FD\u6570\u540D\u79F0"),l("li",null,"length - \u8FD4\u56DE\u51FD\u6570\u5165\u53C2\u7684\u4E2A\u6570\uFF0C\u5E38\u5E94\u7528\u4E8E\u591A\u6001\u6027\u573A\u666F")])]),l("li",null,"\u6DFB\u52A0\u81EA\u5B9A\u4E49\u5C5E\u6027"),l("li",null,[s("\u547D\u540D\u51FD\u6570\u8868\u8FBE\u5F0F(NFE) "),l("ul",null,[l("li",null,[s("let sayHi = function "),l("strong",null,"func"),s("() {}")]),l("li",null,[s("\u7279\u6027 "),l("ul",null,[l("li",null,"\u5141\u8BB8\u51FD\u6570\u5728\u5185\u90E8\u5F15\u7528\u81EA\u5DF1"),l("li",null,"\u5728\u51FD\u6570\u5916\u662F\u4E0D\u53EF\u89C1\u7684")])])])])])]),l("li",null,[s("setTimeout&setInterval "),l("ul",null,[l("li",null,[s("\u4F7F\u7528\u5F62\u5F0F "),l("ul",null,[l("li",null,[l("code",null,"let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...) & let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...) ")]),l("li",null,[l("code",null,"clearTimeout(timerId) & clearInterval(timerId)")])])]),l("li",null,[s("\u5D4C\u5957\u7684"),l("code",null,"setTimeout"),l("ul",null,[l("li",null,[s("\u8981\u6BD4"),l("code",null,"setInterval"),s("\u66F4\u52A0\u7075\u6D3B\uFF0C \u66F4\u7CBE\u786E\u5730\u8BBE\u7F6E\u4E24\u6B21\u6267\u884C\u4E4B\u95F4\u7684\u5EF6\u65F6")])])]),l("li",null,"\u5783\u573E\u56DE\u6536"),l("li",null,[s("\u5F53\u4E00\u4E2A\u51FD\u6570\u4F20\u5165 "),l("code",null,"setInterval/setTimeout"),s(" \u65F6\uFF0C\u5C06\u4E3A\u5176\u521B\u5EFA\u4E00\u4E2A\u5185\u90E8\u5F15\u7528\uFF0C\u5E76\u4FDD\u5B58\u5728\u8C03\u5EA6\u7A0B\u5E8F\u4E2D\u3002\u8FD9\u6837\uFF0C\u5373\u4F7F\u8FD9\u4E2A\u51FD\u6570\u6CA1\u6709\u5176\u4ED6\u5F15\u7528\uFF0C\u4E5F\u80FD\u9632\u6B62\u5783\u573E\u56DE\u6536\u5668\uFF08GC\uFF09\u5C06\u5176\u56DE\u6536\uFF0C \u76F4\u5230 "),l("code",null,"clearInterval"),s(" \u88AB\u8C03\u7528")]),l("li",null,[s("\u96F6\u5EF6\u65F6\u7684"),l("code",null,"setTimeout"),l("ul",null,[l("li",null,[s("\u5386\u53F2\u9057\u7559\u95EE\u9898 - \u6D4F\u89C8\u5668\u4F1A\u5C06 "),l("code",null,"setTimeout"),s(" \u6216 "),l("code",null,"setInterval"),s(" \u7684\u4E94\u5C42\u6216\u66F4\u591A\u5C42\u5D4C\u5957\u8C03\u7528\uFF08\u8C03\u7528\u4E94\u6B21\u4E4B\u540E\uFF09\u7684\u6700\u5C0F\u5EF6\u65F6\u9650\u5236\u5728 4ms\u3002")])])]),l("li",null,[l("strong",null,"\u6CE8\u610F\uFF1A"),s(" \u6240\u6709\u7684\u8C03\u5EA6\u65B9\u6CD5\u90FD\u4E0D\u80FD "),l("strong",null,"\u4FDD\u8BC1"),s(" \u786E\u5207\u7684\u5EF6\u65F6 "),l("ul",null,[l("li",null,"CPU \u8FC7\u8F7D"),l("li",null,"\u6D4F\u89C8\u5668\u9875\u7B7E\u5904\u4E8E\u540E\u53F0\u6A21\u5F0F"),l("li",null,"\u7B14\u8BB0\u672C\u7535\u8111\u7528\u7684\u662F\u7701\u7535\u6A21\u5F0F"),l("li",null,"...\u7B49\u7B49\u8FD9\u4E9B\u90FD\u53EF\u80FD\u4F1A\u5C06\u5B9A\u65F6\u5668\u7684\u6700\u5C0F\u8BA1\u65F6\u5668\u5206\u8FA8\u7387\uFF08\u6700\u5C0F\u5EF6\u8FDF\uFF09\u589E\u52A0\u5230 300ms \u751A\u81F3 1000ms\uFF0C\u5177\u4F53\u4EE5\u6D4F\u89C8\u5668\u53CA\u5176\u8BBE\u7F6E\u4E3A\u51C6")])])])]),l("li",null,[s("call/apply - \u88C5\u9970\u5668\u6A21\u5F0F\u548C\u8F6C\u53D1 "),l("ul",null,[l("li",null,[s("\u88C5\u9970\u5668 - \u53EF\u4EE5\u63A5\u6536\u53E6\u4E00\u4E2A\u51FD\u6570\u5E76\u6539\u53D8\u5176\u884C\u4E3A\u7684\u7279\u6B8A\u51FD\u6570 "),l("ul",null,[l("li",null,"\u5982\u679C\u539F\u59CB\u51FD\u6570\u6709\u5C5E\u6027\uFF0C\u5219\u88C5\u9970\u540E\u7684\u51FD\u6570\u5C06\u4E0D\u518D\u63D0\u4F9B\u8FD9\u4E9B\u5C5E\u6027"),l("li",null,[s("\u4F7F\u7528\u573A\u666F1 - \u900F\u660E\u7F13\u5B58 "),l("ul",null,[l("li",null,[s("\u5BF9\u8C61\u65B9\u6CD5\u7684\u7F13\u5B58\u88C5\u9970\u5668 - \u9700\u8981\u6307\u5B9A\u4E0A\u4E0B\u6587 "),l("ul",null,[l("li",null,[l("strong",null,"func.call(context, ...args)")]),l("li",null,[l("strong",null,"func.apply(context, args)")]),l("li",null,"\u4E24\u8005\u8C03\u7528\u51E0\u4E4E\u662F\u7B49\u6548\u7684\uFF0C\u53EA\u6709\u4E00\u4E2A\u5173\u4E8Eargs\u7684\u5DEE\u522B\uFF0Capply\u53EA\u63A5\u53D7\u7C7B\u6570\u7EC4\uFF0Capply\u76F8\u8F83call\u53EF\u80FD\u4F1A\u66F4\u5FEB")])])])])]),l("div",{class:"language-javascript"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"slow"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"x"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u8FD9\u91CC\u53EF\u80FD\u4F1A\u6709\u91CD\u8D1F\u8F7D\u7684 CPU \u5BC6\u96C6\u578B\u5DE5\u4F5C")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#82AAFF"}},"alert"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"`"),l("span",{style:{color:"#C3E88D"}},"Called with "),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"x"),l("span",{style:{color:"#89DDFF"}},"}`"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"x"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"cachingDecorator"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"func"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"cache"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"new"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FFCB6B"}},"Map"),l("span",{style:{color:"#F07178"}},"()"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"x"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),l("span",{style:{color:"#F07178"}}," ("),l("span",{style:{color:"#A6ACCD"}},"cache"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"has"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"x"),l("span",{style:{color:"#F07178"}},")) "),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u5982\u679C\u7F13\u5B58\u4E2D\u6709\u5BF9\u5E94\u7684\u7ED3\u679C")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"cache"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"get"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"x"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u4ECE\u7F13\u5B58\u4E2D\u8BFB\u53D6\u7ED3\u679C")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"result"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"func"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"x"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";"),l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u5426\u5219\u5C31\u8C03\u7528 func")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// let result = func.call(this, x) // \u6307\u5B9A\u4E0A\u4E0B\u6587")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"    "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// let result = func.call(this, ...arguments) // \u63A5\u6536\u591A\u53C2\u6570")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#A6ACCD"}},"cache"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"set"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"x"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"result"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";"),l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u7136\u540E\u5C06\u7ED3\u679C\u7F13\u5B58\uFF08\u8BB0\u4F4F\uFF09\u4E0B\u6765")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"result"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"slow "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"cachingDecorator"),l("span",{style:{color:"#A6ACCD"}},"(slow)"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"// worker.slow = cachingDecorator(worker.slow) ")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"alert"),l("span",{style:{color:"#A6ACCD"}},"( "),l("span",{style:{color:"#82AAFF"}},"slow"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#A6ACCD"}},") )"),l("span",{style:{color:"#89DDFF"}},";"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// slow(1) \u88AB\u7F13\u5B58\u4E0B\u6765\u4E86\uFF0C\u5E76\u8FD4\u56DE\u7ED3\u679C")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"alert"),l("span",{style:{color:"#A6ACCD"}},"( "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"Again: "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"+"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"slow"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#F78C6C"}},"1"),l("span",{style:{color:"#A6ACCD"}},") )"),l("span",{style:{color:"#89DDFF"}},";"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u8FD4\u56DE\u7F13\u5B58\u4E2D\u7684 slow(1) \u7684\u7ED3\u679C")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"alert"),l("span",{style:{color:"#A6ACCD"}},"( "),l("span",{style:{color:"#82AAFF"}},"slow"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#F78C6C"}},"2"),l("span",{style:{color:"#A6ACCD"}},") )"),l("span",{style:{color:"#89DDFF"}},";"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// slow(2) \u88AB\u7F13\u5B58\u4E0B\u6765\u4E86\uFF0C\u5E76\u8FD4\u56DE\u7ED3\u679C")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"alert"),l("span",{style:{color:"#A6ACCD"}},"( "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"Again: "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"+"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"slow"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#F78C6C"}},"2"),l("span",{style:{color:"#A6ACCD"}},") )"),l("span",{style:{color:"#89DDFF"}},";"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u8FD4\u56DE\u7F13\u5B58\u4E2D\u7684 slow(2) \u7684\u7ED3\u679C")]),s(`
`),l("span",{class:"line"})])])]),l("ul",null,[l("li",null,"\u4F7F\u7528\u573A\u666F2 - \u547C\u53EB\u8F6C\u79FB")]),l("div",{class:"language-javascript"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u6781\u7B80\u5F62\u5F0F")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#A6ACCD"}}," wrapper "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"func"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"apply"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"this,"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"arguments"),l("span",{style:{color:"#F07178"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])]),l("ul",null,[l("li",null,"\u4F7F\u7528\u573A\u666F3 - \u65B9\u6CD5\u501F\u7528")]),l("div",{class:"language-javascript"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"func"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"  "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// return arguments.join() // \u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3Aarguments\u662F\u7C7B\u6570\u7EC4\u4E0D\u662F\u771F\u6B63\u7684\u6570\u7EC4\uFF0C\u6CA1\u6709join()\u65B9\u6CD5")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}},"  []"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"join"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"call"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"arguments"),l("span",{style:{color:"#F07178"}},") "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u65B9\u6CD5\u501F\u7528")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])])])])]),l("li",null,[s("\u51FD\u6570\u7ED1\u5B9A "),l("ul",null,[l("li",null,[s('func.bind(context, ...args)\u8FD4\u56DE\u51FD\u6570\u7684"\u7ED1\u5B9A\u7684(bound)\u53D8\u4F53" '),l("ul",null,[l("li",null,[s('\u7ED1\u5B9Athis - \u89E3\u51B3setTimeout\u4E2D\u4E22\u5931"this"\u95EE\u9898 '),l("ul",null,[l("li",null,"\u4E24\u79CD\u89E3\u51B3\u65B9\u6848\uFF1A\u5305\u88C5\u5668\u548Cfunc.bind(context),\u524D\u8005\u5B58\u5728\u6539\u53D8\u98CE\u9669\uFF0C\u540E\u8005\u7ED1\u5B9A\u66F4\u52A0\u7A33\u5B9A")])]),l("li",null,[s("\u7ED1\u5B9A\u53C2\u6570 - \u90E8\u5206(\u5E94\u7528)\u51FD\u6570(Partial fuctions) "),l("ul",null,[l("li",null,"\u901A\u8FC7\u7ED1\u5B9A\u5148\u6709\u51FD\u6570\u7684\u4E00\u4E9B\u53C2\u6570\u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u51FD\u6570")]),l("div",{class:"language-js"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"mul"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"a"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," b"),l("span",{style:{color:"#89DDFF"}},"){")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"a"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"*"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"b")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#A6ACCD"}}," tripple "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," mul"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"bind"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},"null,"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#F78C6C"}},"3"),l("span",{style:{color:"#A6ACCD"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#82AAFF"}},"alert"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#82AAFF"}},"tripple"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#F78C6C"}},"3"),l("span",{style:{color:"#A6ACCD"}},")) "),l("span",{style:{color:"#676E95","font-style":"italic"}},"// = mul(3,3) = 9")]),s(`
`),l("span",{class:"line"})])])]),l("ul",null,[l("li",null,[s("\u5728\u6CA1\u6709\u4E0A\u4E0B\u6587\u60C5\u51B5\u4E0B\u7684partial\uFF0C\u6BD4\u5982"),l("strong",null,"\u5BF9\u8C61\u65B9\u6CD5")])]),l("div",{class:"language-js"},[l("span",{class:"copy"}),l("pre",null,[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"partial"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"func"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"..."),l("span",{style:{color:"#A6ACCD"}},"argsBound"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#89DDFF"}},"(..."),l("span",{style:{color:"#A6ACCD"}},"args"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"func"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"call"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"this,"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"..."),l("span",{style:{color:"#A6ACCD"}},"argsBound"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"..."),l("span",{style:{color:"#A6ACCD"}},"args"),l("span",{style:{color:"#F07178"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u7528\u6CD5\uFF1A")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#A6ACCD"}}," user "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"firstName"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"John"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"say"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD"}},"time"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," phrase"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#82AAFF"}},"alert"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"`"),l("span",{style:{color:"#C3E88D"}},"["),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"time"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#C3E88D"}},"] "),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#89DDFF"}},"this."),l("span",{style:{color:"#A6ACCD"}},"firstName"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#C3E88D"}},": "),l("span",{style:{color:"#89DDFF"}},"${"),l("span",{style:{color:"#A6ACCD"}},"phrase"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#C3E88D"}},"!"),l("span",{style:{color:"#89DDFF"}},"`"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u6DFB\u52A0\u4E00\u4E2A\u5E26\u6709\u7ED1\u5B9A\u65F6\u95F4\u7684 partial \u65B9\u6CD5")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"user"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"sayNow "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#82AAFF"}},"partial"),l("span",{style:{color:"#A6ACCD"}},"(user"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"say"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"new"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Date"),l("span",{style:{color:"#A6ACCD"}},"()"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"getHours"),l("span",{style:{color:"#A6ACCD"}},"() "),l("span",{style:{color:"#89DDFF"}},"+"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},":"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"+"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"new"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#FFCB6B"}},"Date"),l("span",{style:{color:"#A6ACCD"}},"()"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"getMinutes"),l("span",{style:{color:"#A6ACCD"}},"())"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"user"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"sayNow"),l("span",{style:{color:"#A6ACCD"}},"("),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"Hello"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"// \u7C7B\u4F3C\u4E8E\u8FD9\u6837\u7684\u4E00\u4E9B\u5185\u5BB9\uFF1A")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#676E95","font-style":"italic"}},"// [10:00] John: Hello!")]),s(`
`),l("span",{class:"line"})])])])]),l("li",null,"lodash\u4FBF\u6377\u65B9\u6CD5\uFF1AbindAll")])])])]),l("li",null,"\u5806\u6808\u548C\u9012\u5F52")],-1),p=[c,r];function y(F,D,i,A,C,u){return a(),n("div",null,p)}var g=o(t,[["render",y]]);export{f as __pageData,g as default};
