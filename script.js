const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = Array.from(document.querySelectorAll(".nav a"));
const sections = Array.from(document.querySelectorAll("main section"));
const langToggle = document.querySelector(".lang-toggle");

/* ================================================================
   内容数据区：News / Publications / Experience
   新条目直接加在对应数组的最上面即可，页面会按数组顺序渲染。
   ================================================================ */

// News：date 为显示日期；en / zh 分别是英文和中文文案
const newsData = [
  {
    date: "2026.07",
    en: 'We released <a href="https://arxiv.org/abs/2607.04426" target="_blank" rel="noopener noreferrer">ACE-Brain-0.5</a>, a unified embodied foundational model for physical agentic AI.',
    zh: '我们发布了 <a href="https://arxiv.org/abs/2607.04426" target="_blank" rel="noopener noreferrer">ACE-Brain-0.5</a>，一款面向物理具身智能体的统一具身基础模型。'
  },
  {
    date: "2026.05",
    en: 'I joined Alibaba Group, DAMO Academy(ALi Star Project) as a research intern, working on embodied foundation models, VLA models and Wolrd models.',
    zh: '我在阿里巴巴达摩院进行实习（阿里星项目），研究方向为具身基础模型、VLA模型和世界模型。'
  },
  {
    date: "2026.04",
    en: 'I joined ACE Robotics as a research intern, working on embodied foundation models and VLA.',
    zh: '我在大晓机器人进行实习，研究方向为具身基础模型和 VLA。'
  },
  {
    date: "2026.01",
    en: '<a href="https://arxiv.org/pdf/2510.11027" target="_blank" rel="noopener noreferrer">Vlaser</a> got accepted by ICLR 2026.',
    zh: '<a href="https://arxiv.org/pdf/2510.11027" target="_blank" rel="noopener noreferrer">Vlaser</a> 被 ICLR 2026 接收。'
  },
  {
    date: "2025.11",
    en: '<a href="https://ojs.aaai.org/index.php/AAAI/article/download/38947/42909" target="_blank" rel="noopener noreferrer">OC-VLA</a> got accepted by AAAI 2026.',
    zh: '<a href="https://ojs.aaai.org/index.php/AAAI/article/download/38947/42909" target="_blank" rel="noopener noreferrer">OC-VLA</a> 被 AAAI 2026 接收。'
  },
  {
    date: "2025.08",
    en: 'We released <a href="https://arxiv.org/abs/2508.18265" target="_blank" rel="noopener noreferrer">InternVL3.5</a>, the latest version of our open-source multimodal model.',
    zh: '我们发布了 <a href="https://arxiv.org/abs/2508.18265" target="_blank" rel="noopener noreferrer">InternVL3.5</a>，这是我们最新的开源多模态模型。'
  },
  {
    date: "2025.06",
    en: '<a href="https://openaccess.thecvf.com/content/ICCV2025/papers/Hou_Dita_Scaling_Diffusion_Transformer_for_Generalist_Vision-Language-Action_Policy_ICCV_2025_paper.pdf" target="_blank" rel="noopener noreferrer">Dita</a> got accepted by ICCV 2025.',
    zh: '<a href="https://openaccess.thecvf.com/content/ICCV2025/papers/Hou_Dita_Scaling_Diffusion_Transformer_for_Generalist_Vision-Language-Action_Policy_ICCV_2025_paper.pdf" target="_blank" rel="noopener noreferrer">Dita</a> 被 ICCV 2025 接收。'
  },
  {
    date: "2025.06",
    en: 'We released <a href="https://arxiv.org/abs/2506.00123" target="_blank" rel="noopener noreferrer">Visual Embodied Brain</a>, a powerful embodied brain model.',
    zh: '我们发布了 <a href="https://arxiv.org/abs/2506.00123" target="_blank" rel="noopener noreferrer">Visual Embodied Brain</a>， 一款性能卓越的具身大脑模型。'
  },
  {
    date: "2024.10",
    en: 'We released <a href="https://arxiv.org/abs/2410.15959" target="_blank" rel="noopener noreferrer">Diffusion Transformer Policy</a>, a pioneer of DiT Robot Policy',
    zh: '我们发布了 <a href="https://arxiv.org/abs/2410.15959" target="_blank" rel="noopener noreferrer">Diffusion Transformer Policy</a>，最早的 DiT Robot Policy 之一。'
  },
  {
    date: "2023.12",
    en: 'One <a href="https://ojs.aaai.org/index.php/AAAI/article/download/28106/28216" target="_blank" rel="noopener noreferrer">paper</a> on weakly supervised 3D semantic segmentation got accepted by AAAI 2024.',
    zh: '一篇弱监督 3D 语义分割<a href="https://ojs.aaai.org/index.php/AAAI/article/download/28106/28216" target="_blank" rel="noopener noreferrer">论文</a>被 AAAI 2024 接收。'
  },
  {
    date: "2023.09",
    en: 'I entered Zhejiang University, starting to pursue a Ph.D. in Computer Science and Technology.',
    zh: '我进入浙江大学，开始攻读计算机科学与技术的博士学位。'
  },
  {
    date: "2023.06",
    en: 'I joined Shanghai Artificial Intelligence Laboratory as an research intern and reported to <a href="https://jifengdai.org/" target="_blank" rel="noopener noreferrer">Prof. Jifeng Dai</a>.',
    zh: '我进入上海人工智能实验室进行实习，汇报给<a href="https://jifengdai.org/" target="_blank" rel="noopener noreferrer">代季峰教授</a>。'
  },
  {
    date: "2023.06",
    en: 'I graduated from Tsinghua University, earning my Master\'s degree.',
    zh: '我从清华大学毕业,获得硕士学位。'
  },
  {
    date: "2020.09",
    en: 'I entered Tsinghua University, Software School, starting to pursue a Master\'s degree in Electronic Information (Software Engineering).',
    zh: '我进入清华大学软件学院，开始攻读电子信息（软件工程）的硕士学位。'
  },
  {
    date: "2020.06",
    en: 'I graduated from Xiamen University, earning my Bachelor\'s degree in Integrated Circuit Design and Integrated Systems.',
    zh: '我从厦门大学集成电路设计与集成系统专业毕业，获得学士学位。'
  },
  {
    date: "2016.08",
    en: 'I entered Xiamen University, starting to pursue a Bachelor\'s degree.',
    zh: '我进入厦门大学，开始本科阶段。'
  }

];

// Publications：论文信息不区分语言；links 里放按钮文字和链接，
// 没有链接的按钮可以先写 "#" 占位，或者直接删掉那一项
const publicationsData = [
  {
    title:
      "ACE-Brain-0.5: A Unified Embodied Foundational Model for Physical Agentic AI",
    authors:
      "Z Gong*, H Gu*, Z Luo*, <strong>T Zhang</strong>*, T Tao*, Y Chi*, Z Liu*, L Zhu*, J Liu*, ...",
    venue: "arXiv preprint, 2026",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2607.04426" }]
  },
  {
    title:
      "Vlaser: Vision-Language-Action Model with Synergistic Embodied Reasoning",
    authors:
      "G Yang*, <strong>T Zhang</strong>*, H Hao*, W Wang, Y Liu, D Wang, G Chen, Z Cai, J Chen, ...",
    venue: "ICLR, 2026",
    links: [{ label: "Paper", url: "https://arxiv.org/pdf/2510.11027" }]
  },
  {
    title:
      "Grounding Actions in Camera Space: Observation-Centric Vision-Language-Action Policy",
    authors: "<strong>T Zhang</strong>*, H Duan*, H Hao, Y Qiao, J Dai, Z Hou",
    venue: "AAAI, 2026",
    links: [
      { label: "Paper", url: "https://ojs.aaai.org/index.php/AAAI/article/download/38947/42909" },
      { label: "Code", url: "https://github.com/ZTY0213/OC-VLA" }
    ]
  },
  {
    title:
      "Dita: Scaling Diffusion Transformer for Generalist Vision-Language-Action Policy",
    authors:
      "Z Hou*, <strong>T Zhang</strong>*, Y Xiong, H Duan, H Pu, R Tong, C Zhao, X Zhu, Y Qiao, J Dai, Y Chen",
    venue: "ICCV, 2025",
    links: [
      { label: "Project", url: "https://robodita.github.io/" },
      { label: "Paper", url: "https://openaccess.thecvf.com/content/ICCV2025/papers/Hou_Dita_Scaling_Diffusion_Transformer_for_Generalist_Vision-Language-Action_Policy_ICCV_2025_paper.pdf" },
      { label: "Video", url: "https://www.youtube.com/watch?v=pBLcmeg0mdY" }
    ]
  },
  {
    title:
      "Visual Embodied Brain: Let Multimodal Large Language Models See, Think, and Control in Spaces",
    authors:
      "G Luo, G Yang, Z Gong, G Chen, H Duan, E Cui, R Tong, Z Hou, <strong>T Zhang</strong>, ...",
    venue: "arXiv preprint, 2025",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2506.00123" }]
  },
  {
    title:
      "InternVL3.5: Advancing Open-Source Multimodal Models in Versatility, Reasoning, and Efficiency",
    authors:
      "W Wang, Z Gao, L Gu, H Pu, L Cui, X Wei, Z Liu, L Jing, S Ye, J Shao, ...",
    venue: "arXiv preprint, 2025",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2508.18265" }]
  },
  {
    title: "Diffusion Transformer Policy",
    authors:
      "Z Hou*, <strong>T Zhang</strong>*, Y Xiong, H Pu, C Zhao, R Tong, Y Qiao, J Dai, Y Chen",
    venue: "arXiv preprint, 2024",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2410.15959" }]
  },
  {
    title:
      "Multi-Modality Affinity Inference for Weakly Supervised 3D Semantic Segmentation",
    authors:
      "X Li, Q Xu, J Zhang, <strong>T Zhang</strong>, Q Yu, L Sheng, D Xu",
    venue: "AAAI, 2024",
    links: [{ label: "Paper", url: "https://ojs.aaai.org/index.php/AAAI/article/download/28106/28216" }]
  }
];

// Experience：date 为起止时间；en / zh 分别是英文和中文职位描述。
// date 支持两种写法：
//   1. 字符串（中英文显示相同）：date: "2024.01 - 2025.10"
//   2. 对象（中英文分别显示）：date: { en: "2026.05 - Now", zh: "2026.05 - 今" }
const experienceData = [
  {
    date: { en: "2026.05 - Now", zh: "2026.05 - 今" },
    en: "Research Intern, Alibaba Group, DAMO Academy(ALi Star Project)",
    zh: "见习研究员，阿里巴巴集团 达摩院(阿里星项目)"
  },
  {
    date: {
      en: "2026.01(2026.04 officially) - 2026.05",
      zh: "2026.01（2026.04 正式入职）- 2026.05"
    },
    en: "Research Intern, ACE Robotics, VLA Group",
    zh: "见习研究员，大晓机器人 VLA组"
  },
  {
    date: "2024.01 - 2026.01",
    en: "Research Intern, Shanghai Artificial Intelligence Laboratory, Large Model Center",
    zh: "见习研究员，上海人工智能实验室 大模型中心"
  },
  {
    date: "2023.06 - 2023.12",
    en: "Research Intern, Shanghai Artificial Intelligence Laboratory, Open General Vision Laboratory(OpenGVLab)",
    zh: "见习研究员，上海人工智能实验室 通用视觉实验室（OpenGVLab）"
  },
  {
    date: "2022.05 - 2022.09",
    en: "Algorithm Intern, Microsoft, AI Platform (STCA & MSRA Shanghai AI/ML Group)",
    zh: "算法实习生，微软 AI Platform（STCA & MSRA Shanghai AI/ML Group）"
  }
];

/* ---------------- 渲染函数 ---------------- */

// News 默认只显示前 NEWS_VISIBLE_COUNT 条，点击 See all 展开全部
const NEWS_VISIBLE_COUNT = 4;
let newsExpanded = false;

function renderNews(lang) {
  const container = document.getElementById("news-list");
  if (!container) return;
  const items = newsExpanded ? newsData : newsData.slice(0, NEWS_VISIBLE_COUNT);
  container.innerHTML = items
    .map(
      (item) => `
      <article class="timeline-item">
        <p class="timeline-date">${item.date}</p>
        <p>${item[lang]}</p>
      </article>`
    )
    .join("");

  const toggle = document.getElementById("news-toggle");
  if (toggle) {
    // 条目不超过默认数量时不需要展开按钮
    if (newsData.length <= NEWS_VISIBLE_COUNT) {
      toggle.style.display = "none";
    } else {
      toggle.style.display = "";
      const dict = translations[lang];
      toggle.textContent = newsExpanded ? dict["news.showLess"] : dict["news.seeAll"];
    }
  }
}

function renderPublications() {
  const container = document.getElementById("pub-list");
  if (!container) return;
  container.innerHTML = publicationsData
    .map((pub) => {
      const links = pub.links
        .map((link) => {
          const external = link.url.startsWith("http")
            ? ' target="_blank" rel="noopener noreferrer"'
            : "";
          return `<a href="${link.url}"${external}>${link.label}</a>`;
        })
        .join("");
      return `
      <article class="pub-card">
        <h3>${pub.title}</h3>
        <p class="authors">${pub.authors}</p>
        <p class="venue">${pub.venue}</p>
        <div class="pub-links">${links}</div>
      </article>`;
    })
    .join("");
}

function renderExperience(lang) {
  const container = document.getElementById("exp-list");
  if (!container) return;
  container.innerHTML = experienceData
    .map((item) => {
      const dateText =
        typeof item.date === "string" ? item.date : item.date[lang];
      return `
      <article class="list-row">
        <div>
          <h3>${item[lang]}</h3>
        </div>
        <p class="date">${dateText}</p>
      </article>`;
    })
    .join("");
}

/* ---------------- i18n ---------------- */

const translations = {
  en: {
    "nav.about": "About",
    "nav.news": "News",
    "nav.publications": "Publications",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.awards": "Awards",
    "nav.contact": "Contact",
    "hero.kicker": "Ph.D. Candidate at Zhejiang University",
    "hero.title": '<span class="gradient-text">Tianyi Zhang</span>',
    "hero.btnPubs": "View Publications",
    "hero.btnContact": "Get In Touch",
    "hero.location": "📍 Hangzhou, China",
    "hero.role": "Ph.D. Candidate, Zhejiang University",
    "about.title": "About",
    "about.p1":
      'I am <strong>Tianyi Zhang (张添翼)</strong>, a Ph.D. Candidate at the Zhejiang University (Graduated in 2027.03 expected), supervised by <a href="https://scholar.google.com/citations?user=qpBtpGsAAAAJ&hl=zh-CN&oi=ao" target="_blank" rel="noopener noreferrer">Prof. Xiaoou Tang</a>, <a href="https://scholar.google.com/citations?user=gFtI-8QAAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">Prof. Yu Qiao</a> and <a href="https://jifengdai.org/" target="_blank" rel="noopener noreferrer">Prof. Jifeng Dai</a>. My research focuses on embodied intelligence and multimodal large language models, with an emphasis on Vision-Language-Action (VLA) policy learning for robotic manipulation. Previously, I received my M.S. from Tsinghua University in 2023 and my B.S. from Xiamen University in 2020, ranking 1st in my major.',
    "about.p2":
      "Currently, I am looking for full-time job opportunities in the field of embodied intelligence and multimodal large language models. If you are interested in my research, please feel free to contact me.",
    "news.title": "News",
    "news.seeAll": "See all",
    "news.showLess": "Show less",
    "pubs.title": "Selected Publications",
    "edu.title": "Education",
    "edu.item1.h": "Ph.D. Candidate, Computer Science and Technology, Zhejiang University, China",
    "edu.item1.date": "2023.09 - Now",
    "edu.item2.h": "M.S., Electronic Information (Software Engineering), Tsinghua University, China",
    "edu.item3.h": "B.S., Integrated Circuit Design and Integrated Systems, Xiamen University, China",
    "exp.title": "Experience",
    "awards.title": "Honors & Awards",
    "awards.item1.h": "National Scholarship",
    "awards.item2.h": "ACM-ICPC Asia Regional Contest, Silver Medal ×2",
    "awards.item3.h": "Fujian Collegiate Programming Contest, Gold Medal",
    "awards.item4.h": "ACM-ICPC Asia Regional Contest, Bronze Medal ×2",
    "awards.item5.h": "CCF-CCSP Collegiate Computer Systems and Programming Contest, National Bronze Medal",
    "awards.item6.h": "The 4th China Collegiate Programming Contest (Guilin), National Bronze Medal",
    "contact.title": "Contact",
    "contact.p1":
      'Feel free to reach out: <a href="mailto:tianyizhang0213@zju.edu.cn">tianyizhang0213@zju.edu.cn</a>',
    "contact.p2":
      'Address: Yuquan Campus, Zhejiang University, Xihu District, Hangzhou, China',
    "footer.copy":
      '© <span id="year"></span> Tianyi Zhang. All rights reserved.',
    "footer.top": "Back to top ↑"
  },
  zh: {
    "nav.about": "关于",
    "nav.news": "动态",
    "nav.publications": "论文",
    "nav.education": "教育背景",
    "nav.experience": "实习经历",
    "nav.awards": "荣誉奖项",
    "nav.contact": "联系方式",
    "hero.kicker": "浙江大学 博士研究生",
    "hero.title": '<span class="gradient-text">张添翼</span>',
    "hero.btnPubs": "查看论文",
    "hero.btnContact": "联系我",
    "hero.location": "📍 中国 · 杭州",
    "hero.role": "浙江大学 博士研究生",
    "about.title": "关于我",
    "about.p1":
      '我是<strong>张添翼（Tianyi Zhang）</strong>，浙江大学博士研究生（预计 2027 年 3 月毕业），师从<a href="https://scholar.google.com/citations?user=qpBtpGsAAAAJ&hl=zh-CN&oi=ao" target="_blank" rel="noopener noreferrer">汤晓鸥教授</a>、<a href="https://scholar.google.com/citations?user=gFtI-8QAAAAJ&hl=zh-CN" target="_blank" rel="noopener noreferrer">乔宇教授</a>与<a href="https://jifengdai.org/" target="_blank" rel="noopener noreferrer">代季峰教授</a>，研究方向为具身智能与多模态大模型，重点关注面向机器人操作的 Vision-Language-Action（VLA）策略学习。此前，我于 2023 年获清华大学硕士学位，2020 年获厦门大学学士学位，本科专业成绩排名第一。',
    "about.p2":
      "目前，我正在寻找具身智能与多模态大模型领域的全职工作机会。如果您对我的研究感兴趣，欢迎随时与我联系。",
    "news.title": "近期动态",
    "news.seeAll": "查看全部",
    "news.showLess": "收起",
    "pubs.title": "代表论文",
    "edu.title": "教育背景",
    "edu.item1.h": "博士研究生，计算机科学与技术，浙江大学",
    "edu.item1.date": "2023.09 - 今",
    "edu.item2.h": "硕士，电子信息（软件工程），清华大学",
    "edu.item3.h": "学士，集成电路设计与集成系统，厦门大学",
    "exp.title": "实习经历",
    "awards.title": "荣誉与奖项",
    "awards.item1.h": "国家奖学金",
    "awards.item2.h": "ACM-ICPC 亚洲区域赛 银牌 ×2",
    "awards.item3.h": "福建省大学生程序设计竞赛 金牌",
    "awards.item4.h": "ACM-ICPC 亚洲区域赛 铜牌 ×2",
    "awards.item5.h": "CCF-CCSP 大学生计算机系统与程序设计竞赛 全国铜牌",
    "awards.item6.h": "第四届 CCPC 全国大学生程序设计竞赛（桂林站）全国铜牌",
    "contact.title": "联系方式",
    "contact.p1":
      '欢迎交流合作：<a href="mailto:tianyizhang0213@zju.edu.cn">tianyizhang0213@zju.edu.cn</a>',
    "contact.p2":
      '地址：浙江省杭州市西湖区浙江大学玉泉校区',
    "footer.copy": '© <span id="year"></span> 张添翼 · 版权所有',
    "footer.top": "回到顶部 ↑"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  if (langToggle) {
    // 按钮显示的是“将要切换到”的语言
    langToggle.textContent = lang === "zh" ? "EN" : "中";
  }
  renderNews(lang);
  renderExperience(lang);
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
  localStorage.setItem("site-lang", lang);
}

let currentLang = localStorage.getItem("site-lang") || "en";
renderPublications();
applyLanguage(currentLang);

if (langToggle) {
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "zh" ? "en" : "zh";
    applyLanguage(currentLang);
  });
}

const newsToggle = document.getElementById("news-toggle");
if (newsToggle) {
  newsToggle.addEventListener("click", () => {
    newsExpanded = !newsExpanded;
    renderNews(currentLang);
  });
}

/* ---------------- 导航 ---------------- */

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const currentId = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        const isMatch = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", isMatch);
      });
    });
  },
  {
    root: null,
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0
  }
);

sections.forEach((section) => {
  if (section.id) observer.observe(section);
});
