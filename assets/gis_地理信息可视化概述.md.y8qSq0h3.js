import{_ as l,o as i,c as t,R as a}from"./chunks/framework.RpFkmAtX.js";const o="/assets/地理信息可视化1.MM3LxL02.png",r="/assets/地理信息可视化2.3A8uk6AS.png",s="/assets/地理信息可视化3.cTIR5Ts4.png",e="/assets/地理信息可视化4.x5d71nz7.png",n="/assets/地理信息可视化6.dVCMyxqo.png",c="/assets/地理信息可视化7.WEiWZxIv.png",x=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"gis/地理信息可视化概述.md","filePath":"gis/地理信息可视化概述.md"}'),u={name:"gis/地理信息可视化概述.md"},g=a('<h2 id="含义" tabindex="-1">含义 <a class="header-anchor" href="#含义" aria-label="Permalink to &quot;含义&quot;">​</a></h2><ul><li>地理信息可视化主要针对空间数据(spatial data)，指定义在三维空间中、具有<strong>位置信息</strong>的数据。</li><li>空间数据的绘制起源已久：<strong>地图制图学</strong>。计算机发明之后，如何用计算机存储、管理并展示地理空间数据形成了一门科学—地理信息系统(<code>GIS</code>)。</li><li>与<code>GIS</code>系统相比，地理信息可视化相当于他的<strong>前端数据表现</strong>的部分，而地理信息的存储和管理并不是可视化的关注重点。</li></ul><h2 id="地图投影" tabindex="-1">地图投影 <a class="header-anchor" href="#地图投影" aria-label="Permalink to &quot;地图投影&quot;">​</a></h2><ul><li>什么是地图投影 地图投影是地理信息可视化的最基本步骤，将地理坐标(经纬度)转换为二维屏幕坐标(x,y)，你可以想成就是把一个立体的圆球拉开扯平成一个平面的四边形的过程。</li><li>投影分类及常见投影 曲面转换为平面的过程必然会产生曲边的变形和误差，按照变形方式主要有以下三种： <ul><li><strong>等角度</strong>：角度和形状保持不变。也叫正形投影。 <ul><li><strong>墨卡托投影</strong>就是经典的等角度投影，是应用最广泛的地图投影之一，常用作航海图和航空图，为航海者航行定位和确定航向带来很大方便。</li><li>但缺点时会导致面积产生变形，在基准纬线(赤道)保持原始面积，之后随着离基准线越来越远而变大，到达南北两极面积变形达到最大。不过幸运的是在南北回归线之间的变形幅度很小，仍然适用于导航图。</li><li>现在大多数在线地图服务如谷歌地图，百度地图也都采用墨卡托投影。</li></ul></li><li><strong>等面积</strong>：经主比例尺放大以后与实际区域的面积保持不变。 <ul><li><strong>亚尔勃斯投影</strong>由于其等面积特性被广泛应用于着重表现面积的国家或地区图中，特别适合东西跨度较大的中纬度地区(比如中国、美国)。</li></ul></li><li><strong>等距离</strong>：投影后任何点到投影所选中的原点的距离保持不变。 <ul><li><strong>方位角投影</strong>等距投影，常被用于导航地图或者是表示地震影响的图，震中被为原点，可以准确的表示受地震影响的范围。</li></ul></li></ul></li></ul><p>地图投影算法众多，但没有一种算法可以同时满足以上三个特性。在实际应用中应根据不同需求选择最符合目标的投影方法。</p><h2 id="点要素可视化" tabindex="-1">点要素可视化 <a class="header-anchor" href="#点要素可视化" aria-label="Permalink to &quot;点要素可视化&quot;">​</a></h2><ul><li>离散分布较为均匀的情况 这种情况处理也比较简单，直接将对象根据它的坐标标注在地图上就可以了，具体想要什么样的形式什么样的效果，可以参考地图制图学的地图可视化的相关内容。</li><li>数据密集产生重叠的情况 <ul><li>这种情况下展现信息有误，对屏幕空间的利用也很不合理，就需要我们做特定处理，解决方法主要是两类： <ul><li>将地图划分区块，显示每个区块中数据对象的统计数据。 <ul><li>三维柱状图</li><li>用颜色深浅表示统计数据多少，可以解决三维柱状图可能会出现的遮盖问题</li><li>将地图分割成小块采用合适的重建或插值算法将数据转换成连续的形式呈现：<strong>热力图</strong><img src="'+o+'" alt=""></li></ul></li><li>通过合理的布局算法减少重叠，利用渲染和融合充分表现每个对象。 <ul><li>比如说常见的办法就是将重叠的点在一个目标位置周围的小范围内随机移动</li></ul></li></ul></li></ul></li></ul><h2 id="线要素可视化" tabindex="-1">线要素可视化 <a class="header-anchor" href="#线要素可视化" aria-label="Permalink to &quot;线要素可视化&quot;">​</a></h2><ul><li>常见可视化方法就是在颜色、在线的类型和宽度、标注等方面</li><li>线数据可视化中特别值得注意的问题：<strong>海量线数据的重叠和交叉问题</strong><ul><li>如果目的是为了理解数据整体模式，而不是展现每一条线段，可以采用适当的简化方法，比如将大量的线条聚类并简化为若干类线束来展示其内在模式即可。</li><li>对数据做适当抽象和聚合可以缓解计算量大问题</li><li>实际应用中，有时就是需要清楚呈现出每一条连线并进行信息检索。因此可以改变连线的形状和布局以减少连线的重叠和交叉。常见技术<strong>连线绑定</strong><img src="'+r+'" alt=""></li></ul></li></ul><h2 id="面要素可视化" tabindex="-1">面要素可视化 <a class="header-anchor" href="#面要素可视化" aria-label="Permalink to &quot;面要素可视化&quot;">​</a></h2><ul><li>常用方法采用颜色表示这些属性的值 <ul><li><strong>Choropleth地图</strong>依靠颜色来表现内在模式，因此选择适合颜色十分重要。Choropleth地图最大的问题在于数据分布和地理区域大小的的不对称。</li><li><strong>Cartogram</strong>可视化按照地理区域的属性值对各个区域进行适当变形，以克服Choropleth地图对空间使用的不合理性。核心问题是采用的变形算法。 <ul><li>第一种非连续的Cartogram，在保持区域的原始形状的情况下，按照属性对区域进行放大或缩小。这种方法很难保证各个区域之间的相对位置，使得原先相邻的区域不再相邻。</li><li>另一种就是连续的Cartogram，优先保证区域之间的邻接和相应位置不变，通过改变区域的形状实现面积和属性成正比。 <img src="'+s+'" alt=""></li></ul></li><li><strong>规则形状地图</strong>。就直接用简单的几何形状来表示地图上的区域，标准的几何图形能使用户更容易判断区域的面积大小。 <img src="'+e+'" alt=""></li><li><strong>多元关系地图</strong>。不同的地理位置的区域属性可能具有关联关系，可采用连线和集合等方法表达 <ul><li>气泡集合 <img src="'+n+'" alt=""></li><li>连线集合 <img src="'+c+'" alt=""></li></ul></li></ul></li></ul><blockquote><p>地理信息可视化其实有很大一部分是地图符号化的内容，具体的可以看链接<a href="https://wenku.baidu.com/view/50dda20de43a580216fc700abb68a98270feac1c.html" target="_blank" rel="noreferrer">https://wenku.baidu.com/view/50dda20de43a580216fc700abb68a98270feac1c.html</a></p></blockquote><h2 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h2><ol><li>地球与生存环境</li><li>城市与日常生活</li><li>地理时空数据</li><li>复杂地理数据的可视分析</li></ol><h2 id="面临的挑战" tabindex="-1">面临的挑战 <a class="header-anchor" href="#面临的挑战" aria-label="Permalink to &quot;面临的挑战&quot;">​</a></h2><ol><li>地图标注</li><li>地图综合</li><li>在线地图</li></ol>',16),h=[g];function d(_,m,p,b,f,q){return i(),t("div",null,h)}const P=l(u,[["render",d]]);export{x as __pageData,P as default};
