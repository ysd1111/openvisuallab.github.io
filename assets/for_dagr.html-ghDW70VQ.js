import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c as l,a as n,b as a,d as s,f as t}from"./app-Dphyv2nC.js";const c={},d=n("p",null,"Low Latency Automotive Vision with Event Cameras",-1),p=n("h2",{id:"安装系统及基础软件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装系统及基础软件"},[n("span",null,"安装系统及基础软件")])],-1),u={href:"https://2-mo.github.io/coooder/ubuntu/base/0.%E5%AE%89%E8%A3%85ubuntu%E7%B3%BB%E7%BB%9F.html",target:"_blank",rel:"noopener noreferrer"},h=t(`<h3 id="安装基础软件" tabindex="-1"><a class="header-anchor" href="#安装基础软件"><span>安装基础软件</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">vim</span> net-tools openssh-server
<span class="token comment"># net-tools 然后 ifconfig用来看IP地址</span>
<span class="token comment"># 安装完openssh-server就可以远程使用ssh来配置啦</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装cuda及驱动" tabindex="-1"><a class="header-anchor" href="#安装cuda及驱动"><span>安装CUDA及驱动</span></a></h3>`,3),m={href:"https://developer.nvidia.com/cuda-downloads",target:"_blank",rel:"noopener noreferrer"},b=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://developer.download.nvidia.com/compute/cuda/12.6.1/local_installers/cuda_12.6.1_560.35.03_linux.run
<span class="token function">sudo</span> <span class="token function">sh</span> cuda_12.6.1_560.35.03_linux.run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v={href:"https://developer.nvidia.com/cuda-toolkit-archive",target:"_blank",rel:"noopener noreferrer"},g=t(`<h4 id="写入vim-bashrc-使用nvcc-v查看版本" tabindex="-1"><a class="header-anchor" href="#写入vim-bashrc-使用nvcc-v查看版本"><span>写入<code>vim ~/.bashrc</code>, 使用<code>nvcc -V</code>查看版本</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/cuda/bin
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LD_LIBRARY_PATH</span><span class="token operator">=</span><span class="token variable">$LD_LIBRARY_PATH</span>:/usr/local/cuda/lib64
<span class="token builtin class-name">export</span> <span class="token assign-left variable">LIBRARY_PATH</span><span class="token operator">=</span><span class="token variable">$LIBRARY_PATH</span>:/usr/local/cuda/lib64 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置ubuntu源-建议在软件更新中使用gui界面设置" tabindex="-1"><a class="header-anchor" href="#配置ubuntu源-建议在软件更新中使用gui界面设置"><span>配置ubuntu源（建议在软件更新中使用GUI界面设置）</span></a></h4>`,3),k={href:"https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"配置虚拟环境及镜像源",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置虚拟环境及镜像源"},[n("span",null,"配置虚拟环境及镜像源")])],-1),f=n("h3",{id:"安装miniconda",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装miniconda"},[n("span",null,"安装miniconda")])],-1),x={href:"https://docs.anaconda.com/miniconda/#quick-command-line-install",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/miniconda3
<span class="token function">wget</span> https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh <span class="token parameter variable">-O</span> ~/miniconda3/miniconda.sh
<span class="token function">bash</span> ~/miniconda3/miniconda.sh <span class="token parameter variable">-b</span> <span class="token parameter variable">-u</span> <span class="token parameter variable">-p</span> ~/miniconda3
<span class="token function">rm</span> ~/miniconda3/miniconda.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="初始化-重开终端生效-显示-base-表示成功" tabindex="-1"><a class="header-anchor" href="#初始化-重开终端生效-显示-base-表示成功"><span>初始化（重开终端生效，显示（base）表示成功）</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>~/miniconda3/bin/conda init <span class="token function">bash</span>
~/miniconda3/bin/conda init <span class="token function">zsh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="配置conda源" tabindex="-1"><a class="header-anchor" href="#配置conda源"><span>配置Conda源</span></a></h4>`,4),A={href:"https://mirror.tuna.tsinghua.edu.cn/help/anaconda/",target:"_blank",rel:"noopener noreferrer"},L=t(`<p>写入 <code>vim ~/.condarc</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>channels:
  - defaults
show_channel_urls: <span class="token boolean">true</span>
default_channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置pypi源" tabindex="-1"><a class="header-anchor" href="#设置pypi源"><span>设置PyPi源</span></a></h4>`,3),E={href:"https://mirror.tuna.tsinghua.edu.cn/help/pypi/",target:"_blank",rel:"noopener noreferrer"},B=n("h4",{id:"镜像源合集",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#镜像源合集"},[n("span",null,"镜像源合集")])],-1),q={href:"https://mirrors.cernet.edu.cn/site/CQUPT",target:"_blank",rel:"noopener noreferrer"},w=n("p",null,"重邮镜像源，不登录电信移动账号也能用",-1),T={href:"https://help.mirrors.cernet.edu.cn/",target:"_blank",rel:"noopener noreferrer"},P=n("h2",{id:"开工-配置代码环境",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#开工-配置代码环境"},[n("span",null,"开工（配置代码环境）")])],-1),C={href:"https://github.com/uzh-rpg/dagr/tree/master",target:"_blank",rel:"noopener noreferrer"},V=t(`<p>按其<code>README.md</code>来, 下面只记录不同的地方</p><p>mkl找不到版本，加 <code>-c conda-forge</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>conda <span class="token function">install</span> <span class="token parameter variable">-y</span> <span class="token assign-left variable">setuptools</span><span class="token operator">==</span><span class="token number">69.5</span>.1 <span class="token assign-left variable">mkl</span><span class="token operator">==</span><span class="token number">2024.0</span> <span class="token assign-left variable">pytorch</span><span class="token operator">==</span><span class="token number">1.11</span>.0 <span class="token assign-left variable">torchvision</span><span class="token operator">==</span><span class="token number">0.12</span>.0 <span class="token assign-left variable">torchaudio</span><span class="token operator">==</span><span class="token number">0.11</span>.0 <span class="token assign-left variable">cudatoolkit</span><span class="token operator">=</span><span class="token number">11.3</span> <span class="token parameter variable">-c</span> pytorch <span class="token parameter variable">-c</span> conda-forge 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),R={href:"https://anaconda.org/conda-forge/mkl/files",target:"_blank",rel:"noopener noreferrer"};function D(U,I){const e=i("ExternalLinkIcon");return r(),l("div",null,[d,p,n("blockquote",null,[n("p",null,[a("参考: "),n("a",u,[a("https://2-mo.github.io/coooder/ubuntu/base/0.安装ubuntu系统.html"),s(e)])])]),h,n("blockquote",null,[n("p",null,[n("a",m,[a("https://developer.nvidia.com/cuda-downloads"),s(e)])])]),b,n("p",null,[a("历史版本："),n("a",v,[a("https://developer.nvidia.com/cuda-toolkit-archive"),s(e)])]),g,n("blockquote",null,[n("p",null,[n("a",k,[a("https://mirror.tuna.tsinghua.edu.cn/help/ubuntu/"),s(e)])])]),_,f,n("blockquote",null,[n("p",null,[n("a",x,[a("https://docs.anaconda.com/miniconda/#quick-command-line-install"),s(e)])])]),y,n("blockquote",null,[n("p",null,[n("a",A,[a("https://mirror.tuna.tsinghua.edu.cn/help/anaconda/"),s(e)])])]),L,n("blockquote",null,[n("p",null,[n("a",E,[a("https://mirror.tuna.tsinghua.edu.cn/help/pypi/"),s(e)])])]),B,n("blockquote",null,[n("p",null,[n("a",q,[a("https://mirrors.cernet.edu.cn/site/CQUPT"),s(e)])])]),w,n("p",null,[a("镜像配置及使用帮助参考文档: "),n("a",T,[a("https://help.mirrors.cernet.edu.cn/"),s(e)])]),P,n("blockquote",null,[n("p",null,[n("a",C,[a("https://github.com/uzh-rpg/dagr/tree/master"),s(e)])])]),V,n("blockquote",null,[n("p",null,[n("a",R,[a("https://anaconda.org/conda-forge/mkl/files"),s(e)])])])])}const O=o(c,[["render",D],["__file","for_dagr.html.vue"]]),S=JSON.parse('{"path":"/coooder/for_dagr.html","title":"","lang":"en-US","frontmatter":{"titile":"简单记录📝","description":"Low Latency Automotive Vision with Event Cameras 安装系统及基础软件 参考: https://2-mo.github.io/coooder/ubuntu/base/0.安装ubuntu系统.html 安装基础软件 安装CUDA及驱动 https://developer.nvidia.com/cuda-do...","head":[["meta",{"property":"og:url","content":"https://openvisuallab.github.io/coooder/for_dagr.html"}],["meta",{"property":"og:site_name","content":"OpenVisualLab"}],["meta",{"property":"og:description","content":"Low Latency Automotive Vision with Event Cameras 安装系统及基础软件 参考: https://2-mo.github.io/coooder/ubuntu/base/0.安装ubuntu系统.html 安装基础软件 安装CUDA及驱动 https://developer.nvidia.com/cuda-do..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-20T15:34:36.000Z"}],["meta",{"property":"article:author","content":"OpenVisualLab"}],["meta",{"property":"article:modified_time","content":"2024-09-20T15:34:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-20T15:34:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OpenVisualLab\\",\\"url\\":\\"https://openvisuallab.github.io\\"}]}"]]},"headers":[{"level":2,"title":"安装系统及基础软件","slug":"安装系统及基础软件","link":"#安装系统及基础软件","children":[{"level":3,"title":"安装基础软件","slug":"安装基础软件","link":"#安装基础软件","children":[]},{"level":3,"title":"安装CUDA及驱动","slug":"安装cuda及驱动","link":"#安装cuda及驱动","children":[]}]},{"level":2,"title":"配置虚拟环境及镜像源","slug":"配置虚拟环境及镜像源","link":"#配置虚拟环境及镜像源","children":[{"level":3,"title":"安装miniconda","slug":"安装miniconda","link":"#安装miniconda","children":[]}]},{"level":2,"title":"开工（配置代码环境）","slug":"开工-配置代码环境","link":"#开工-配置代码环境","children":[]}],"git":{"createdTime":1726846147000,"updatedTime":1726846476000,"contributors":[{"name":"2-mo","email":"1982800736@qq.com","commits":3}]},"readingTime":{"minutes":1.16,"words":347},"filePathRelative":"coooder/for_dagr.md","localizedDate":"September 20, 2024","excerpt":"<p>Low Latency Automotive Vision with Event Cameras</p>\\n<h2>安装系统及基础软件</h2>\\n<blockquote>\\n<p>参考: <a href=\\"https://2-mo.github.io/coooder/ubuntu/base/0.%E5%AE%89%E8%A3%85ubuntu%E7%B3%BB%E7%BB%9F.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://2-mo.github.io/coooder/ubuntu/base/0.安装ubuntu系统.html</a></p>\\n</blockquote>","autoDesc":true}');export{O as comp,S as data};
