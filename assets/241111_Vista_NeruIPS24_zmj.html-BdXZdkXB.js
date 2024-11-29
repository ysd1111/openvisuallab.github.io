import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as i,c as r,a as e,b as a,d as n,f as o}from"./app-DFveFq5L.js";const h={},c=e("p",null,"Vista: A Generalizable Driving World Model with High Fidelity and Versatile Controllability",-1),m=e("p",null,"分享人: Zhang Mingzhu (张明珠)",-1),p=e("a",{href:"/tinyweekly/papers/VISTA_NeurIPS24_world_model.pdf"},"【论文本地连接】",-1),d={href:"https://meeting.tencent.com/crm/2GEgBYyldf",target:"_blank",rel:"noopener noreferrer"},_={href:"https://openreview.net/forum?id=Tw9nfNyOMy&referrer=%5Bthe%20profile%20of%20Li%20Chen%5D(%2Fprofile%3Fid%3D~Li_Chen15)",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/OpenDriveLab/Vista",target:"_blank",rel:"noopener noreferrer"},g=o('<h2 id="收获总结" tabindex="-1"><a class="header-anchor" href="#收获总结"><span>收获总结</span></a></h2><p>1、通过对baseline的讲解，进一步熟悉世界模型，了解世界模型主要是使用了扩散模型或者Transformer架构。世界模型预测给定潜在行为的世界的合理未来。原则上，它不仅预测环境将如何随时间展开，而且还推断出潜在的物理动力学和代理行为。这样的属性对于表示学习、基于模型的强化学习以及模型预测控制都是有用的。</p><p>2、可以针对夜间场景生成模糊问题进行专用网络的设计。针对夜间低光照驾驶视频生成中常出现的画面模糊、细节缺失、动态一致性差等问题，借助世界模型，引入物理世界规律，提升生成模型的视觉保真度，使生成的视频不仅在整体感知上更贴近真实场景，还要能精细还原场景中的动态细节（如车辆、行人、路标的清晰度和运动轨迹）。这种增强后的视觉保真度将显著提高夜间低光照驾驶场景的真实性，从而为自动驾驶系统的感知、决策和控制提供更可靠的数据支撑。这不仅能改善下游任务（如目标检测、轨迹预测、障碍物识别）的精确度，还能助力自动驾驶系统在夜间复杂环境下的安全驾驶。</p><p>3、在分享中加入框架图和解释性文字，以便听众更好地理解和跟上进度。</p><h2 id="分享摘要" tabindex="-1"><a class="header-anchor" href="#分享摘要"><span>分享摘要</span></a></h2><p>关键词：世界模型；高保真；多功能可控 本篇论文针对现有的驾驶世界模型在泛化性、关键细节的预测保真度以及灵活应用的动作可控性方面仍然存在局限的问题，受到稳定视频扩散模型（SVD）启发，提出了一个具有高保真度和通用可控性的可泛化驾驶世界模型。并且在不访问Groundtruth真实行为的情况下，为现实世界的行为评估建立一个通用的奖励。经过大规模的训练，Vista的能力可以无缝地泛化到不同的场景。在超过70%的比较中，Vista的表现优于最先进的通用视频生成器，在FID和FVD方面，Vista的表现分别比表现最好的驾驶世界模型高出55%和27%。</p><h2 id="问答简记" tabindex="-1"><a class="header-anchor" href="#问答简记"><span>问答简记</span></a></h2>',7),x=e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"Q"),e("mo",null,":")]),e("annotation",{encoding:"application/x-tex"},"Q:")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal"},"Q"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},":")])])]),a("为什么选三张而不是更多先验信息帧")],-1),f=e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"A"),e("mo",null,":")]),e("annotation",{encoding:"application/x-tex"},"A:")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal"},"A"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},":")])])]),a("三张图片帧就可以包含世界模型所需的距离速度，还有加速度。他说三张图片帧里面就可以完全包含这些信息，就选择了三张。")],-1),b=e("hr",null,null,-1),w=e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"Q"),e("mo",null,":")]),e("annotation",{encoding:"application/x-tex"},"Q:")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal"},"Q"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},":")])])]),a("你能解释一下什么叫保真度吗？")],-1),k=e("p",null,[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"A"),e("mo",null,":")]),e("annotation",{encoding:"application/x-tex"},"A:")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.6833em"}}),e("span",{class:"mord mathnormal"},"A"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},":")])])]),a("视频高保真度是指视频在还原或呈现内容时的真实性和准确性。高保真度的视频不仅需要在视觉效果上接近真实场景，还要在应用需求上满足特定的技术指标。")],-1),V=e("hr",null,null,-1),M=e("h2",{id:"汇报时老师和同学们问题",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#汇报时老师和同学们问题"},[e("span",null,"汇报时老师和同学们问题")])],-1),v=e("h2",{id:"_1、世界模型强调物理规律-这里怎么强调的2、这个是数据驱动的吗-物理能力还是依赖于baseline吗-3、针对的问题-方法套到其它方法是不是也行-但是和世界模型联系不大4、生成速度怎么样",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1、世界模型强调物理规律-这里怎么强调的2、这个是数据驱动的吗-物理能力还是依赖于baseline吗-3、针对的问题-方法套到其它方法是不是也行-但是和世界模型联系不大4、生成速度怎么样"},[e("span",null,"1、世界模型强调物理规律，这里怎么强调的 2、这个是数据驱动的吗？物理能力还是依赖于baseline吗？ 3、针对的问题，方法套到其它方法是不是也行，但是和世界模型联系不大 4、生成速度怎么样")])],-1),y=e("p",null,"1、低光照增强的监督是什么？ 2、和世界模型的联系，正常是加到扩散里面，能不能加入真正的物理知识，比如人不能在天上飞，总结物理规律 3、动机，晚上的数据量增大了，是否就解决这个问题了。不是！ 4、只是用于做训练还是给人看，对于纹理不太关注，主要关注结构 5、针对下游任务应用设计约束，增强不是什么都增强，而且比如聚焦于物体的，比如天空就不用增强了，小设计说明是针对自动驾驶场景 6、目标：有限信息下对于未来视频可以生成的比较好",-1);function z(N,S){const s=l("ExternalLinkIcon");return i(),r("div",null,[c,m,e("p",null,[p,a(),e("a",d,[a("【腾讯会议🔗】"),n(s)]),e("a",_,[a("[openreview]"),n(s)]),a(),e("a",u,[a("[github🌟565]"),n(s)])]),g,x,f,b,w,k,V,M,v,y])}const T=t(h,[["render",z],["__file","241111_Vista_NeruIPS24_zmj.html.vue"]]),L=JSON.parse('{"path":"/browser/epoch_one_24_1028_1202/241111_Vista_NeruIPS24_zmj.html","title":"VISTA (Zhang Mingzhu)","lang":"en-US","frontmatter":{"title":"VISTA (Zhang Mingzhu)","order":3,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"收获总结","slug":"收获总结","link":"#收获总结","children":[]},{"level":2,"title":"分享摘要","slug":"分享摘要","link":"#分享摘要","children":[]},{"level":2,"title":"问答简记","slug":"问答简记","link":"#问答简记","children":[]},{"level":2,"title":"汇报时老师和同学们问题","slug":"汇报时老师和同学们问题","link":"#汇报时老师和同学们问题","children":[]},{"level":2,"title":"1、世界模型强调物理规律，这里怎么强调的2、这个是数据驱动的吗？物理能力还是依赖于baseline吗？3、针对的问题，方法套到其它方法是不是也行，但是和世界模型联系不大4、生成速度怎么样","slug":"_1、世界模型强调物理规律-这里怎么强调的2、这个是数据驱动的吗-物理能力还是依赖于baseline吗-3、针对的问题-方法套到其它方法是不是也行-但是和世界模型联系不大4、生成速度怎么样","link":"#_1、世界模型强调物理规律-这里怎么强调的2、这个是数据驱动的吗-物理能力还是依赖于baseline吗-3、针对的问题-方法套到其它方法是不是也行-但是和世界模型联系不大4、生成速度怎么样","children":[]}],"git":{"createdTime":1732274117000,"updatedTime":1732890635000,"contributors":[{"name":"Tiu Mo","email":"1982800736@qq.com","commits":1},{"name":"mingzhuzhang1","email":"145547769+mingzhuzhang1@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.73,"words":1119},"filePathRelative":"browser/epoch_one_24_1028_1202/241111_Vista_NeruIPS24_zmj.md","localizedDate":"November 22, 2024"}');export{T as comp,L as data};
