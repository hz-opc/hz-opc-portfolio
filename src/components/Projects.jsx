import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    step: "01",
    title: "精准获客",
    desc: "短视频内容引流 + 社群运营转化 + 代账公司返佣合作，多渠道精准触达OPC创业者。",
    items: ["短视频/小红书内容获客", "微信社群精准转化", "代账公司渠道合作", "老客户转介绍裂变"],
  },
  {
    id: 2,
    step: "02",
    title: "签约诊断",
    desc: "确认客户资格条件——身份核验 + 社保满6个月核查，约定服务费并签订协议。",
    items: ["身份与社保资格预审", "免费诊断评估", "服务协议签约", "明确服务费与保障条款"],
  },
  {
    id: 3,
    step: "03",
    title: "认定申报",
    desc: "代办自主创业身份认定，收集整理全套申报材料，登录平台在线提交申请。",
    items: ["自主创业身份认定", "材料清单收集整理", "广东政务服务网提交", "AI辅助材料预审"],
  },
  {
    id: 4,
    step: "04",
    title: "跟进完结",
    desc: "全程跟进审核进度与补正需求，公示通过后确认补贴到账，收取服务费并启动转介绍。",
    items: ["审核进度实时跟进", "公示期监控（5天）", "补贴到账确认通知", "满意度回访 & 转介绍"],
  },
]

function AstronautSVG() {
  return (
    <svg className="project-card-astro-svg" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Helmet */}
      <circle cx="120" cy="90" r="42" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="120" cy="90" r="32" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
      {/* Visor */}
      <ellipse cx="120" cy="85" rx="18" ry="20" stroke="currentColor" strokeWidth="0.6" />
      {/* Body */}
      <rect x="85" y="135" width="70" height="65" rx="14" stroke="currentColor" strokeWidth="0.8" />
      {/* Backpack */}
      <rect x="158" y="140" width="18" height="40" rx="5" stroke="currentColor" strokeWidth="0.6" />
      {/* Belt */}
      <line x1="85" y1="170" x2="155" y2="170" stroke="currentColor" strokeWidth="0.5" />
      {/* Arms */}
      <line x1="85" y1="145" x2="65" y2="175" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
      <line x1="155" y1="145" x2="175" y2="175" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round" />
      {/* Legs */}
      <rect x="90" y="200" width="25" height="30" rx="8" stroke="currentColor" strokeWidth="0.7" />
      <rect x="125" y="200" width="25" height="30" rx="8" stroke="currentColor" strokeWidth="0.7" />
      {/* Boots */}
      <rect x="88" y="226" width="29" height="10" rx="4" stroke="currentColor" strokeWidth="0.6" />
      <rect x="123" y="226" width="29" height="10" rx="4" stroke="currentColor" strokeWidth="0.6" />
      {/* Stars */}
      <circle cx="50" cy="50" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="190" cy="40" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="30" cy="100" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="200" cy="100" r="1.5" fill="currentColor" opacity="0.4" />
      <circle cx="45" cy="160" r="1" fill="currentColor" opacity="0.25" />
      <circle cx="195" cy="180" r="1" fill="currentColor" opacity="0.25" />
      {/* + decorative */}
      <line x1="55" y1="45" x2="55" y2="55" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
      <line x1="50" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section className="projects section bg-noise" id="projects">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <span className="section-label">服务流程</span>
        <h2 className="section-title">
          全流程<span className="text-accent">代办</span>
        </h2>
        <p className="section-desc">
          从获客到补贴到账，标准化SOP确保每个环节高效推进，全程约15-25个工作日。
        </p>

        <div className="projects-grid projects-grid-alt">
          {projects.map((project, i) => (
            <motion.div
              className="project-card project-card-flow project-card-astro"
              key={project.id}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="project-card-astro-bg">
                <AstronautSVG />
                <div className="project-card-astro-grid" />
              </div>

              <div className="project-card-header">
                <span className="project-card-step">{project.step}</span>
                <h3 className="project-card-title">{project.title}</h3>
              </div>
              <p className="project-card-desc">{project.desc}</p>
              <ul className="project-card-checklist">
                {project.items.map(item => (
                  <li key={item} className="project-card-checkitem">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="project-card-link">
                了解更多
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
