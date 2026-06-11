import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    step: '01',
    title: '精准获客',
    desc: '短视频内容引流 + 社群运营转化 + 代账公司返佣合作，多渠道精准触达OPC创业者。',
    items: ['短视频/小红书内容获客', '微信社群精准转化', '代账公司渠道合作', '老客户转介绍裂变'],
    color: '#DEDBC8',
  },
  {
    id: 2,
    step: '02',
    title: '签约诊断',
    desc: '确认客户资格条件——身份核验 + 社保满6个月核查，约定服务费并签订协议。',
    items: ['身份与社保资格预审', '免费诊断评估', '服务协议签约', '明确服务费与保障条款'],
    color: '#C8C4B0',
  },
  {
    id: 3,
    step: '03',
    title: '认定申报',
    desc: '代办自主创业身份认定，收集整理全套申报材料，登录平台在线提交申请。',
    items: ['自主创业身份认定', '材料清单收集整理', '广东政务服务网提交', 'AI辅助材料预审'],
    color: '#B8B4A2',
  },
  {
    id: 4,
    step: '04',
    title: '跟进完结',
    desc: '全程跟进审核进度与补正需求，公示通过后确认补贴到账，收取服务费并启动转介绍。',
    items: ['审核进度实时跟进', '公示期监控（5天）', '补贴到账确认通知', '满意度回访 & 转介绍'],
    color: '#A8A492',
  },
]

export default function Projects() {
  return (
    <section className="projects section bg-noise" id="projects">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
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
              className="project-card project-card-flow"
              key={project.id}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
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
                了解详情 <ArrowRight size={12} style={{ transform: 'rotate(-45deg)' }} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
