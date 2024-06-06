import{_ as t,c as a,o as e,R as s}from"./chunks/framework.BmksyVjO.js";const r="/assets/HTTP%E7%BC%93%E5%AD%98.CN6l2mgz.png",o="/assets/%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6.CDsLjpQt.png",u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"JS/study/HTTP缓存策略小结.md","filePath":"JS/study/HTTP缓存策略小结.md"}'),_={name:"JS/study/HTTP缓存策略小结.md"},n=s('<h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>缓存是性能优化中简单高效的一种优化方式。一个优秀的缓存策略可以缩短网页请求资源的距离，减少延迟，并且由于缓存文件可以重复利用，还可以减少带宽，降低网络负荷。</p><p>对于一个数据请求来说，可以分为发起网络请求、后端处理、浏览器响应三个步骤。浏览器缓存可以帮助我们在第一和第三步骤中优化性能。比如说直接使用缓存而不发起请求，或者发起了请求但后端存储的数据和前端一致，那么就没有必要再将数据回传回来，这样就减少了响应数据。</p><p><strong>通常浏览器缓存策略分为两种：强缓存和协商缓存，都是通过设置 HTTP Header 来实现的</strong>。</p><p>强缓存：浏览器直接从本地存储中获取数据，不与服务器进行交互；</p><p>协商缓存：浏览器发送请求到服务器，服务器判断是否可使用本地缓存。</p><h2 id="http缓存思维导图" tabindex="-1">HTTP缓存思维导图 <a class="header-anchor" href="#http缓存思维导图" aria-label="Permalink to &quot;HTTP缓存思维导图&quot;">​</a></h2><p><img src="'+r+'" alt=""></p><h2 id="缓存机制流程图示" tabindex="-1">缓存机制流程图示 <a class="header-anchor" href="#缓存机制流程图示" aria-label="Permalink to &quot;缓存机制流程图示&quot;">​</a></h2><p><img src="'+o+'" alt=""></p>',10),p=[n];function c(i,d,l,h,T,m){return e(),a("div",null,p)}const f=t(_,[["render",c]]);export{u as __pageData,f as default};
