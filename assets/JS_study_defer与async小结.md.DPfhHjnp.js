import{_ as s,c as i,o as t,R as a}from"./chunks/framework.BmksyVjO.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"JS/study/defer与async小结.md","filePath":"JS/study/defer与async小结.md"}'),n={name:"JS/study/defer与async小结.md"},e=a(`<ol><li>首先，<strong>在没有 defer 或 async的情况下，浏览器会立即加载并执行指定的脚本</strong>，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。</li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myscript.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol start="2"><li><strong>共同点</strong>：defer 和 async 都是script标签中的属性，defer 和 async 在网络读取（脚本下载）这块儿是一样的，都是异步的（相较于 HTML 解析）。</li><li><strong>差别</strong>： <ul><li><strong>关键在于脚本下载完之后何时执行</strong>，defer是立即下载但延迟执行，加载后续文档元素的过程将和脚本的加载并行进行（异步），但是脚本的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成。async是立即下载并执行，加载和渲染后续文档元素的过程将和js脚本的加载与执行并行进行（异步）。</li><li><strong>加载顺序问题</strong>：defer是按照加载顺序执行脚本的，标记为async的脚本并不保证按照指定它们的先后顺序执行。对它来说脚本的加载和执行是紧紧挨着的，所以不管你声明的顺序如何，只要它加载完了就会立刻执行。</li></ul></li><li>async 对于应用脚本的用处不大，因为它完全不考虑依赖（哪怕是最低级的顺序执行），不过它对于那些可以不依赖任何脚本或不被任何脚本依赖的脚本来说却是非常合适的。</li></ol>`,3),l=[e];function r(h,p,k,d,c,o){return t(),i("div",null,l)}const y=s(n,[["render",r]]);export{g as __pageData,y as default};
