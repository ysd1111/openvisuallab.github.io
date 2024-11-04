import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as s,a as e,b as n,d as i,f as t}from"./app-BNg3NBeK.js";const c={},d=t('<h2 id="➢-认识异常检测" tabindex="-1"><a class="header-anchor" href="#➢-认识异常检测"><span>➢ 认识异常检测</span></a></h2><h3 id="■-什么是视频异常检测" tabindex="-1"><a class="header-anchor" href="#■-什么是视频异常检测"><span>■ 什么是视频异常检测？</span></a></h3><p>视频异常检测（Video Anomaly Detection, VAD）是指在视频序列中自动检测和定位异常事件或行为的任务。异常是指与正常模式显著不同的事件，如交通事故、犯罪行为等。VAD 在安全监控、智能交通系统和公共安全等领域中有广泛的应用。</p><h4 id="_1-简单介绍-从异常行为检测到视频异常行为检测" tabindex="-1"><a class="header-anchor" href="#_1-简单介绍-从异常行为检测到视频异常行为检测"><span>1. 简单介绍（从异常行为检测到视频异常行为检测）</span></a></h4>',4),h={href:"https://mp.weixin.qq.com/s/UmT0DjFqRPsjv2m28ySvdw",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"link",-1),p={href:"https://mp.weixin.qq.com/s/Aghbz4m1eWFCNGgEy8q6Cg",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"link",-1),m={href:"https://mp.weixin.qq.com/s/MwpELRlC1cuDgqn4staAzA",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"link",-1),f={href:"https://mp.weixin.qq.com/s/i3Xw2-ivARnF7rBSFtxugw",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"link",-1),v=t('<h4 id="_2-论文综述" tabindex="-1"><a class="header-anchor" href="#_2-论文综述"><span>2. 论文综述</span></a></h4><ul><li>[1] 邬开俊等. 视频异常检测技术研究进展 [J]. 计算机科学与探索, 2022。</li><li>[2] Bharathkumar Ramachandra et al. A survey of single-scene video anomaly detection (TPAMI 2020)。</li></ul><h3 id="■-视频异常检测的挑战" tabindex="-1"><a class="header-anchor" href="#■-视频异常检测的挑战"><span>■ 视频异常检测的挑战</span></a></h3><ul><li><strong>异常定义的模糊性</strong>：异常事件的定义通常是主观的，具有多样性，导致检测难度较大。</li><li><strong>数据不平衡</strong>：正常事件在视频数据中远多于异常事件，这导致训练过程中的数据不平衡问题。</li><li><strong>实时性要求</strong>：在实际应用中，需要实时检测异常以便及时响应。</li><li><strong>场景多样性</strong>：视频场景和拍摄角度的多样性增加了检测难度。</li></ul><h3 id="■-视频异常检测方法分类" tabindex="-1"><a class="header-anchor" href="#■-视频异常检测方法分类"><span>■ 视频异常检测方法分类</span></a></h3><h4 id="_1-无监督方法" tabindex="-1"><a class="header-anchor" href="#_1-无监督方法"><span>1. 无监督方法</span></a></h4><p>无监督方法不需要标签数据，仅依赖正常样本来学习正常行为的模式，通过检测偏离这些模式的行为来识别异常。</p><ul><li><strong>自编码器</strong>：通过重建输入视频帧，若重建误差较高则认为是异常。</li><li><strong>记忆增强网络</strong>：通过将正常行为存储在记忆模块中，当新输入不匹配这些记忆时，检测为异常。</li></ul><h4 id="_2-弱监督方法" tabindex="-1"><a class="header-anchor" href="#_2-弱监督方法"><span>2. 弱监督方法</span></a></h4><p>弱监督方法使用视频级别的标签进行训练，不需要逐帧标注。</p><ul><li><strong>多实例学习</strong>：将视频看作由多个实例组成的包，通过学习视频中正常和异常实例的差异来检测异常。</li><li><strong>对比学习</strong>：通过比较正常和异常数据，学习到区分特征。</li></ul><h3 id="■-经典数据集" tabindex="-1"><a class="header-anchor" href="#■-经典数据集"><span>■ 经典数据集</span></a></h3><h4 id="_1-无监督数据集" tabindex="-1"><a class="header-anchor" href="#_1-无监督数据集"><span>1. 无监督数据集</span></a></h4><ul><li><strong>UCSD Pedestrian</strong>：主要用于行人行为分析，包含行人通道中的异常事件，如骑自行车、滑板等。此数据集通常用于无监督异常检测。</li><li><strong>ShanghaiTech</strong>：较大规模的数据集，包含校园监控视频，涵盖多种异常行为，适用于无监督方法。</li><li><strong>Avenue</strong>：以校园场景为背景，涵盖诸如突然跑步、丢弃物品等异常行为。此数据集适用于无监督异常检测方法。</li></ul><h4 id="_2-弱监督数据集" tabindex="-1"><a class="header-anchor" href="#_2-弱监督数据集"><span>2. 弱监督数据集</span></a></h4><ul><li><strong>UCF-Crime</strong>：一个用于弱监督视频异常检测的大规模数据集，涵盖不同场景下的犯罪行为，如偷窃、打架等。视频级标注用于训练和评估模型。</li><li><strong>XD-Violence</strong>：包含各种暴力事件的视频数据集，常用于弱监督方法，帮助模型学习区分正常与异常行为。</li><li><strong>UCFCrime2Local</strong>：UCF-Crime 的子集，包含空间标注，用于在弱监督条件下进行异常事件的精确定位。</li></ul><h3 id="■-评价指标" tabindex="-1"><a class="header-anchor" href="#■-评价指标"><span>■ 评价指标</span></a></h3><h4 id="_1-auc-曲线下面积" tabindex="-1"><a class="header-anchor" href="#_1-auc-曲线下面积"><span>1. AUC（曲线下面积）</span></a></h4><ul><li><strong>定义</strong>：AUC（Area Under the Curve）指的是 ROC 曲线（接收者操作特征曲线）下的面积。ROC 曲线描绘了模型在不同阈值下的假阳性率与真阳性率的关系。</li><li><strong>用途</strong>：用于衡量分类模型在不同阈值下的整体性能。AUC 值越接近 1，模型的区分能力越强。</li><li><strong>优点</strong>：在衡量模型的总体表现时，AUC 可以帮助了解模型的稳定性和判别能力，不依赖于具体的阈值。</li></ul><h4 id="_2-eer-等错误率" tabindex="-1"><a class="header-anchor" href="#_2-eer-等错误率"><span>2. EER（等错误率）</span></a></h4><ul><li><strong>定义</strong>：EER（Equal Error Rate）是指假阳性率（False Positive Rate, FPR）和假阴性率（False Negative Rate, FNR）相等时的错误率。</li><li><strong>用途</strong>：常用于验证模型性能的一个稳定点，尤其是在需要权衡假阳性和假阴性影响时。</li><li><strong>优点</strong>：EER 可以为不同阈值下的平衡性能提供直接的比较，适用于二分类问题中权重相当的应用场景。</li></ul><h4 id="_3-f1-score" tabindex="-1"><a class="header-anchor" href="#_3-f1-score"><span>3. F1-score</span></a></h4><ul><li><strong>定义</strong>：F1-score 是精确率（Precision）和召回率（Recall）的调和平均数，公式为： $$F1 = 2 \\times \\frac{\\text{Precision} \\times \\text{Recall}}{\\text{Precision} + \\text{Recall}}$$</li><li><strong>用途</strong>：用于在分类问题中权衡模型的精确率和召回率，特别是在类分布不平衡时尤为有效。</li><li><strong>优点</strong>：F1-score 平衡考虑了精确率和召回率，适合评估那些对假阳性和假阴性影响敏感的模型。</li><li><strong>应用场景</strong>：适用于异常检测中对误报和漏报都有较高要求的场合。</li></ul><h4 id="_4-precision-精确率" tabindex="-1"><a class="header-anchor" href="#_4-precision-精确率"><span>4. Precision（精确率）</span></a></h4><ul><li><strong>定义</strong>：精确率是指模型预测为正样本的实例中实际为正样本的比例。公式为： $$\\text{Precision} = \\frac{\\text{TP}}{\\text{TP} + \\text{FP}}$$</li><li><strong>用途</strong>：衡量模型预测结果的准确性，适用于对假阳性率较敏感的应用。</li></ul><h4 id="_5-recall-召回率" tabindex="-1"><a class="header-anchor" href="#_5-recall-召回率"><span>5. Recall（召回率）</span></a></h4><ul><li><strong>定义</strong>：召回率是指实际为正样本的实例中被模型正确预测为正样本的比例。公式为： $$\\text{Recall} = \\frac{\\text{TP}}{\\text{TP} + \\text{FN}}$$</li><li><strong>用途</strong>：评估模型对正样本的检测能力，适用于对假阴性率较敏感的场景。</li></ul><p>每个指标在不同的应用场景中具有不同的重要性。例如，在安全监控中，可能更关注召回率，以确保尽可能少的异常被漏检；而在高误报成本的场景下，精确率则更为重要。</p><h2 id="➢-优秀团队-学术大佬" tabindex="-1"><a class="header-anchor" href="#➢-优秀团队-学术大佬"><span>➢ 优秀团队 / 学术大佬</span></a></h2><h3 id="■-高盛华-上海科技大学-视觉与数据智能中心" tabindex="-1"><a class="header-anchor" href="#■-高盛华-上海科技大学-视觉与数据智能中心"><span>■ 高盛华 - 上海科技大学（视觉与数据智能中心）</span></a></h3><ul><li>[1] A Revisit of Sparse Coding Based Anomaly Detection in Stacked RNN Framework (ICCV 2017) 提出了ShanghaiTech数据集。</li><li>[2] Future Frame Prediction for Anomaly Detection – A New Baseline (CVPR 2018)。</li><li>[3] Future Frame Prediction for Anomaly Detection (TPAMI 2022)。</li></ul><h3 id="■-radu-ionescu-securifai-university-of-bucharest" tabindex="-1"><a class="header-anchor" href="#■-radu-ionescu-securifai-university-of-bucharest"><span>■ Radu Ionescu - SecurifAI/University of Bucharest</span></a></h3><ul><li>[1] Detecting abnormal events in video using Narrowed Normality Clusters (WACV 2019)。</li><li>[2] Object-centric Auto-encoders and Dummy Anomalies for Abnormal Event Detection in Video (CVPR 2019)。</li><li>[3] Anomaly Detection in Video via Self-Supervised and Multi-Task Learning (CVPR 2021)。</li><li>[4] A Background-Agnostic Framework with Adversarial Training for Abnormal Event Detection in Video (TPAMI 2021)。</li><li>[5] UBnormal New Benchmark for Supervised Open-Set Video Anomaly Detection (CVPR 2022)。</li><li>[6] Self-Supervised Predictive Convolutional Attentive Block for Anomaly Detection (CVPR 2022)。</li></ul><h2 id="➢-经典论文推荐-加-👍" tabindex="-1"><a class="header-anchor" href="#➢-经典论文推荐-加-👍"><span>➢ 经典论文推荐（加“👍”）</span></a></h2><h3 id="■-unsupervised-vad" tabindex="-1"><a class="header-anchor" href="#■-unsupervised-vad"><span>■ Unsupervised VAD</span></a></h3><ul><li><p><strong>Conference Papers</strong></p><ul><li>[1] Learning Temporal Regularity in Video Sequences (CVPR 2016)。</li><li>[2] 👍 Future Frame Prediction for Anomaly Detection – A New Baseline (CVPR 2018)。</li><li>[3] 👍 Memorizing Normality to Detect Anomaly: Memory-augmented Deep Autoencoder for Unsupervised Anomaly Detection (ICCV 2019) → 首次在视频异常检测中使用记忆模块。</li><li>[4] 👍 Object-Centric Auto-Encoders and Dummy Anomalies for Abnormal Event Detection (CVPR 2019) → 首次结合对象检测和VAD以实现对象级异常检测。</li><li>[5] AnoPCN: Video Anomaly Detection via Deep Predictive Coding Network (ACM MM 2019) → 首个混合模型。</li><li>[6] 👍 Learning Memory-guided Normality for Anomaly Detection (CVPR 2020) → 基于MemAE。</li><li>[7] Cluster Attention Contrast for Video Anomaly Detection (ACM MM 2020) → 首次应用对比学习。</li><li>[8] 👍 Anomaly Detection in Video via Self-Supervised and Multi-Task Learning (CVPR 2021) → 对象级。</li><li>[9] 👍 A Hybrid Video Anomaly Detection Framework via Memory-Augmented Flow Reconstruction and Flow-Guided Frame Prediction (ICCV 2021) → 混合模型。</li><li>[10] Anomaly Detection in Video Sequence with Appearance-Motion Correspondence (ICCV 2019) → 双流网络。</li><li>[11] Video Anomaly Detection and Localization via Gaussian Mixture Fully Convolutional Variational Autoencoder → 双流网络。</li><li>[12] Self-supervised Sparse Representation for Video Anomaly Detection (ECCV 2022) → 首次尝试解决无监督和弱监督VAD。</li><li>[13] Video Anomaly Detection by Solving Decoupled Spatio-Temporal Jigsaw Puzzles (ECCV 2022)。</li></ul></li><li><p><strong>Journal Papers</strong></p><ul><li>[1] Video Anomaly Detection with Sparse Coding Inspired Deep Neural Networks (TPAMI 2021)。</li><li>[2] A Background-Agnostic Framework With Adversarial Training for Abnormal Event Detection in Video (TPAMI 2022)。</li><li>[3] Influence-Aware Attention Networks for Anomaly Detection in Surveillance Videos (TCSVT 2022)。</li><li>[4] Bidirectional Spatio-Temporal Feature Learning With Multiscale Evaluation for Video Anomaly Detection (TCSVT 2022)。</li><li>[5] Anomaly Detection With Bidirectional Consistency in Videos (TNNLS 2022)。</li><li>[6] Variational Abnormal Behavior Detection With Motion Consistency (TIP 2022)。</li><li>[7] DoTA: Unsupervised Detection of Traffic Anomaly in Driving Videos (TPAMI 2023)。</li><li>[8] A Hierarchical Spatio-Temporal Graph Convolutional Neural Network for Anomaly Detection in Videos (TCSVT 2023)。</li><li>[9] Learnable Locality-Sensitive Hashing for Video Anomaly Detection (TCSVT 2023)。</li><li>[10] A Kalman Variational Autoencoder Model Assisted by Odometric Clustering for Video Frame Prediction and Anomaly Detection (TIP 2023)。</li><li>[11] Abnormal Event Detection and Localization via Adversarial Event Prediction (TNNLS 2023)。</li></ul></li></ul><h3 id="■-weakly-supervised-vad" tabindex="-1"><a class="header-anchor" href="#■-weakly-supervised-vad"><span>■ Weakly Supervised VAD</span></a></h3>',37),y={href:"http://crcv.ucf.edu/projects/real-world/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"code",-1),V=e("li",null,"[2] Weakly Supervised Video Anomaly Detection via Center-Guided Discriminative Learning (ICME 2020)。",-1),D={href:"https://github.com/jx-zhong-for-academic-purpose/GCN-Anomaly-Detection",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"code",-1),C={href:"https://roc-ng.github.io/XD-Violence/",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"code",-1),S={href:"https://github.com/xaggi/claws_eccv",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"code",-1),P={href:"https://github.com/ktr-hubrt/WSAL",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"code",-1),R={href:"https://github.com/ktr-hubrt/MPN",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"code",-1),L=e("li",null,"[8] Weakly-Supervised Spatio-Temporal Anomaly Detection in Surveillance Video (IJCAI 2021)。",-1),E={href:"https://github.com/tianyu0207/RTFM",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"code",-1),F={href:"https://github.com/fjchange/MIST_VAD",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"code",-1),W={href:"https://github.com/LiShuo1001/MSL",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"code",-1),q={href:"https://github.com/ArielZc/CU-Net",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"code",-1),z={href:"https://github.com/JustinYuu/MACIL_SD",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"code",-1),J=e("li",null,"[14] Decouple and Resolve: Transformer-Based Models for Online Anomaly Detection From Weakly Labeled Videos (TIFS 2023)。",-1),j={href:"https://github.com/henrryzh1/UR-DMU",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"code",-1),$={href:"https://github.com/coranholmes/TEVAD",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"code",-1),X=e("li",null,"[17] Look Around for Anomalies: Weakly-supervised Anomaly Detection via Context-Motion Relational Learning (CVPR 2023)。",-1),Z={href:"https://github.com/ktr-hubrt/UMIL",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"code",-1),Y={href:"https://github.com/shengyangsun/HSC_VAD",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"code",-1),ee=e("li",null,"[20] MGFN: Magnitude-Contrastive Glance-and-Focus Network for Weakly-Supervised Video Anomaly Detection (AAAI 2023)。",-1),ne={href:"https://github.com/ArielZc/DE-Net",target:"_blank",rel:"noopener noreferrer"},oe=e("code",null,"code",-1),ie=e("li",null,"[22] Text Prompt with Normality Guidance for Weakly Supervised Video Anomaly Detection (CVPR 2024)。",-1),te={href:"https://github.com/Junxi-Chen/PE-MIL",target:"_blank",rel:"noopener noreferrer"},le=e("code",null,"code",-1),ae=e("h3",{id:"■-based-on-large-model",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#■-based-on-large-model"},[e("span",null,"■ Based on Large Model")])],-1),re={href:"https://lucazanella.github.io/lavad/",target:"_blank",rel:"noopener noreferrer"},se=e("code",null,"code",-1),ce=e("li",null,"[2] Open-Vocabulary Video Anomaly Detection (CVPR 2024)。",-1),de={href:"https://github.com/fesvhtr/CUVA",target:"_blank",rel:"noopener noreferrer"},he=e("code",null,"code",-1),ue={href:"https://github.com/jqtangust/hawk",target:"_blank",rel:"noopener noreferrer"},pe=e("code",null,"code",-1),ge={href:"https://github.com/ktr-hubrt/VAD-LLaMA",target:"_blank",rel:"noopener noreferrer"},me=e("code",null,"code",-1),_e={href:"https://hananshafi.github.io/vane-benchmark/",target:"_blank",rel:"noopener noreferrer"},fe=e("code",null,"code",-1),Ae={href:"https://holmesvad.github.io/",target:"_blank",rel:"noopener noreferrer"},ve=e("code",null,"code",-1),ye={href:"https://github.com/nwpu-zxr/VadCLIP",target:"_blank",rel:"noopener noreferrer"},be=e("code",null,"code",-1),Ve=e("h2",{id:"➢-经典项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#➢-经典项目"},[e("span",null,"➢ 经典项目")])],-1),De={href:"https://github.com/cvlab-yonsei/MNAD",target:"_blank",rel:"noopener noreferrer"},ke=e("code",null,"GitHub",-1),Ce=t('<h2 id="➢-发现的新的有意思的研究方向-→-explainable-anomaly-detection-ead-可解释性异常检测" tabindex="-1"><a class="header-anchor" href="#➢-发现的新的有意思的研究方向-→-explainable-anomaly-detection-ead-可解释性异常检测"><span>➢ 发现的新的有意思的研究方向 → Explainable Anomaly Detection (EAD) 可解释性异常检测</span></a></h2><h3 id="■-定义" tabindex="-1"><a class="header-anchor" href="#■-定义"><span>■ 定义</span></a></h3><p>此任务旨在检测视频中的异常事件并自动生成高层次解释。理解异常事件的原因至关重要，因为所需的响应取决于其性质和严重性。</p><h3 id="■-相关工作" tabindex="-1"><a class="header-anchor" href="#■-相关工作"><span>■ 相关工作</span></a></h3><ul><li>[1] Joint Detection and Recounting of Abnormal Events by Learning Deep Generic Knowledge (ICCV 2017)。</li><li>[2] X-MAN: Explaining multiple sources of anomalies in video (CVPR workshop 2021)。</li><li>[3] Discrete neural representations for explainable anomaly detection (WACV 2022)。</li></ul>',5);function xe(Se,Me){const o=a("ExternalLinkIcon");return r(),s("div",null,[d,e("ul",null,[e("li",null,[n("[1] 异常行为检测简介："),e("a",h,[u,i(o)])]),e("li",null,[n("[2] 基于深度学习的异常行为检测介绍："),e("a",p,[g,i(o)])]),e("li",null,[n("[3] 研究现状："),e("a",m,[_,i(o)])]),e("li",null,[n("[4] 视频异常行为检测简介："),e("a",f,[A,i(o)])])]),v,e("ul",null,[e("li",null,[n("[1] 👍 Real-world Anomaly Detection in Surveillance Videos (CVPR 2018)。"),e("a",y,[b,i(o)])]),V,e("li",null,[n("[3] Graph Convolutional Label Noise Cleaner: Train a Plug-And-Play Action Classifier for Anomaly Detection (CVPR 2019)。"),e("a",D,[k,i(o)])]),e("li",null,[n("[4] Not only Look, but also Listen: Learning Multimodal Violence Detection under Weak Supervision (ECCV 2020)。"),e("a",C,[x,i(o)])]),e("li",null,[n("[5] CLAWS: Clustering Assisted Weakly Supervised Learning with Normalcy Suppression for Anomalous Event Detection (ECCV 2020)。"),e("a",S,[M,i(o)])]),e("li",null,[n("[6] Localizing Anomalies From Weakly-Labeled Videos (TIP 2021)。"),e("a",P,[w,i(o)])]),e("li",null,[n("[7] Learning Normal Dynamics in Videos with Meta Prototype Network (CVPR 2021)。"),e("a",R,[T,i(o)])]),L,e("li",null,[n("[9] Weakly-supervised Video Anomaly Detection with Robust Temporal Feature Magnitude Learning (ICCV 2021)。"),e("a",E,[N,i(o)])]),e("li",null,[n("[10] MIST: Multiple Instance Self-Training Framework for Video Anomaly Detection (CVPR 2021)。"),e("a",F,[I,i(o)])]),e("li",null,[n("[11] Self-Training Multi-Sequence Learning with Transformer for Weakly Supervised Video Anomaly Detection (AAAI 2022)。"),e("a",W,[U,i(o)]),n("(only readme)")]),e("li",null,[n("[12] Exploiting Completeness and Uncertainty of Pseudo Labels for Weakly Supervised Video Anomaly Detection (CVPR 2022)。"),e("a",q,[B,i(o)])]),e("li",null,[n("[13] Modality-Aware Contrastive Instance Learning with Self-Distillation for Weakly-Supervised Audio-Visual Violence Detection (ACM MM 2022)。"),e("a",z,[O,i(o)])]),J,e("li",null,[n("[15] Dual Memory Units with Uncertainty Regulation for Weakly Supervised Video Anomaly Detection (AAAI 2023)。"),e("a",j,[G,i(o)])]),e("li",null,[n("[16] TEVAD: Improved video anomaly detection with captions (CVPR 2023)。"),e("a",$,[H,i(o)])]),X,e("li",null,[n("[18] Unbiased Multiple Instance Learning for Weakly Supervised Video Anomaly Detection (CVPR 2023)。"),e("a",Z,[K,i(o)])]),e("li",null,[n("[19] Hierarchical Semantic Contrast for Scene-aware Video Anomaly Detection (CVPR 2023)。"),e("a",Y,[Q,i(o)])]),ee,e("li",null,[n("[21] Dynamic Erasing Network Based on Multi-Scale Temporal Features for Weakly Supervised Video Anomaly Detection (ArXiv 2023)。"),e("a",ne,[oe,i(o)])]),ie,e("li",null,[n("[23] Prompt-Enhanced Multiple Instance Learning for Weakly Supervised Video Anomaly Detection (CVPR 2024)。"),e("a",te,[le,i(o)])])]),ae,e("ul",null,[e("li",null,[n("[1] 👍 Harnessing Large Language Models for Training-free Video Anomaly Detection (CVPR 2024)。"),e("a",re,[se,i(o)])]),ce,e("li",null,[n("[3] 👍 Uncovering What, Why and How: A Comprehensive Benchmark for Causation Understanding of Video Anomaly (CVPR 2024)。"),e("a",de,[he,i(o)])]),e("li",null,[n("[4] 👍 HAWK: Learning to Understand Open-World Video Anomalies (NeurIPS 2024)。"),e("a",ue,[pe,i(o)])]),e("li",null,[n("[5] Video Anomaly Detection and Explanation via Large Language Models (ArXiv 2024)。"),e("a",ge,[me,i(o)])]),e("li",null,[n("[6] VANE-Bench: Video Anomaly Evaluation Benchmark for Conversational LMMs (ArXiv 2024)。"),e("a",_e,[fe,i(o)])]),e("li",null,[n("[7] 👍 Holmes-VAD: Towards Unbiased and Explainable Video Anomaly Detection via Multi-modal LLM (ArXiv 2024)。"),e("a",Ae,[ve,i(o)])]),e("li",null,[n("[8] VadCLIP: Adapting Vision-Language Models for Weakly Supervised Video Anomaly Detection (AAAI 2023)。"),e("a",ye,[be,i(o)])])]),Ve,e("ul",null,[e("li",null,[n("○ MNAD → "),e("a",De,[ke,i(o)]),n("，可作为视频异常检测的基准项目。")])]),Ce])}const Re=l(c,[["render",xe],["__file","index.html.vue"]]),Te=JSON.parse('{"path":"/archiver/video_anomaly_detection/","title":"Overview","lang":"en-US","frontmatter":{"author":"Mo Meng Jingcheng (莫梦竟成); Zheng JianKang (郑健康)","title":"Overview","dir":{"text":"Video Anomaly Detection"},"description":"➢ 认识异常检测 ■ 什么是视频异常检测？ 视频异常检测（Video Anomaly Detection, VAD）是指在视频序列中自动检测和定位异常事件或行为的任务。异常是指与正常模式显著不同的事件，如交通事故、犯罪行为等。VAD 在安全监控、智能交通系统和公共安全等领域中有广泛的应用。 1. 简单介绍（从异常行为检测到视频异常行为检测） [1] 异...","head":[["meta",{"property":"og:url","content":"https://openvisuallab.github.io/archiver/video_anomaly_detection/"}],["meta",{"property":"og:site_name","content":"OpenVisualLab"}],["meta",{"property":"og:title","content":"Overview"}],["meta",{"property":"og:description","content":"➢ 认识异常检测 ■ 什么是视频异常检测？ 视频异常检测（Video Anomaly Detection, VAD）是指在视频序列中自动检测和定位异常事件或行为的任务。异常是指与正常模式显著不同的事件，如交通事故、犯罪行为等。VAD 在安全监控、智能交通系统和公共安全等领域中有广泛的应用。 1. 简单介绍（从异常行为检测到视频异常行为检测） [1] 异..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-04T14:23:16.000Z"}],["meta",{"property":"article:author","content":"Mo Meng Jingcheng (莫梦竟成); Zheng JianKang (郑健康)"}],["meta",{"property":"article:modified_time","content":"2024-11-04T14:23:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Overview\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-04T14:23:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mo Meng Jingcheng (莫梦竟成); Zheng JianKang (郑健康)\\"}]}"]]},"headers":[{"level":2,"title":"➢ 认识异常检测","slug":"➢-认识异常检测","link":"#➢-认识异常检测","children":[{"level":3,"title":"■ 什么是视频异常检测？","slug":"■-什么是视频异常检测","link":"#■-什么是视频异常检测","children":[]},{"level":3,"title":"■ 视频异常检测的挑战","slug":"■-视频异常检测的挑战","link":"#■-视频异常检测的挑战","children":[]},{"level":3,"title":"■ 视频异常检测方法分类","slug":"■-视频异常检测方法分类","link":"#■-视频异常检测方法分类","children":[]},{"level":3,"title":"■ 经典数据集","slug":"■-经典数据集","link":"#■-经典数据集","children":[]},{"level":3,"title":"■ 评价指标","slug":"■-评价指标","link":"#■-评价指标","children":[]}]},{"level":2,"title":"➢ 优秀团队 / 学术大佬","slug":"➢-优秀团队-学术大佬","link":"#➢-优秀团队-学术大佬","children":[{"level":3,"title":"■ 高盛华 - 上海科技大学（视觉与数据智能中心）","slug":"■-高盛华-上海科技大学-视觉与数据智能中心","link":"#■-高盛华-上海科技大学-视觉与数据智能中心","children":[]},{"level":3,"title":"■ Radu Ionescu - SecurifAI/University of Bucharest","slug":"■-radu-ionescu-securifai-university-of-bucharest","link":"#■-radu-ionescu-securifai-university-of-bucharest","children":[]}]},{"level":2,"title":"➢ 经典论文推荐（加“👍”）","slug":"➢-经典论文推荐-加-👍","link":"#➢-经典论文推荐-加-👍","children":[{"level":3,"title":"■ Unsupervised VAD","slug":"■-unsupervised-vad","link":"#■-unsupervised-vad","children":[]},{"level":3,"title":"■ Weakly Supervised VAD","slug":"■-weakly-supervised-vad","link":"#■-weakly-supervised-vad","children":[]},{"level":3,"title":"■ Based on Large Model","slug":"■-based-on-large-model","link":"#■-based-on-large-model","children":[]}]},{"level":2,"title":"➢ 经典项目","slug":"➢-经典项目","link":"#➢-经典项目","children":[]},{"level":2,"title":"➢ 发现的新的有意思的研究方向 → Explainable Anomaly Detection (EAD) 可解释性异常检测","slug":"➢-发现的新的有意思的研究方向-→-explainable-anomaly-detection-ead-可解释性异常检测","link":"#➢-发现的新的有意思的研究方向-→-explainable-anomaly-detection-ead-可解释性异常检测","children":[{"level":3,"title":"■ 定义","slug":"■-定义","link":"#■-定义","children":[]},{"level":3,"title":"■ 相关工作","slug":"■-相关工作","link":"#■-相关工作","children":[]}]}],"git":{"createdTime":1729431754000,"updatedTime":1730730196000,"contributors":[{"name":"lemonzjk","email":"155338123+lemonzjk@users.noreply.github.com","commits":5}]},"readingTime":{"minutes":9.09,"words":2726},"filePathRelative":"archiver/video_anomaly_detection/README.md","localizedDate":"October 20, 2024","excerpt":"<h2>➢ 认识异常检测</h2>\\n<h3>■ 什么是视频异常检测？</h3>\\n<p>视频异常检测（Video Anomaly Detection, VAD）是指在视频序列中自动检测和定位异常事件或行为的任务。异常是指与正常模式显著不同的事件，如交通事故、犯罪行为等。VAD 在安全监控、智能交通系统和公共安全等领域中有广泛的应用。</p>\\n<h4>1. 简单介绍（从异常行为检测到视频异常行为检测）</h4>\\n<ul>\\n<li>[1] 异常行为检测简介：<a href=\\"https://mp.weixin.qq.com/s/UmT0DjFqRPsjv2m28ySvdw\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>link</code></a></li>\\n<li>[2] 基于深度学习的异常行为检测介绍：<a href=\\"https://mp.weixin.qq.com/s/Aghbz4m1eWFCNGgEy8q6Cg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>link</code></a></li>\\n<li>[3] 研究现状：<a href=\\"https://mp.weixin.qq.com/s/MwpELRlC1cuDgqn4staAzA\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>link</code></a></li>\\n<li>[4] 视频异常行为检测简介：<a href=\\"https://mp.weixin.qq.com/s/i3Xw2-ivARnF7rBSFtxugw\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><code>link</code></a></li>\\n</ul>","autoDesc":true}');export{Re as comp,Te as data};
