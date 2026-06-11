import { motion } from 'framer-motion'

const skills = [
  {
    title: '政策研究',
    desc: '深度掌握深圳OPC补贴政策体系，熟读5+核心补贴文件，跟进人社局最新动态。',
    items: ['创业补贴政策', '社保补贴细则', '场租补贴条件', '各区配套政策'],
  },
  {
    title: '全流程代办',
    desc: '从资格预审到补贴到账，8大标准节点SOP化运作，确保每单高效精准交付。',
    items: ['资格免费诊断', '材料清单整理', '在线申报提交', '审核跟进补正'],
  },
  {
    title: 'AI 赋能',
    desc: '运用AI技术辅助材料预审、政策匹配与客户管理，大幅提升服务效率与准确度。',
    items: ['AI材料合规审核', '政策智能匹配', '客户CRM管理', '进度自助查询'],
  },
  {
    title: '获客运营',
    desc: '短视频+社群+渠道合作三维获客体系，精准触达深圳OPC创业者群体。',
    items: ['短视频内容引流', '微信社群运营', '代账渠道合作', '转介绍裂变机制'],
  },
]

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <span className="section-label">核心优势</span>
        <h2 className="section-title">
          为什么选择<span className="text-accent">我</span>
        </h2>
        <p className="section-desc">
          四大核心能力构建竞争壁垒，为每一位OPC创业者提供靠谱、高效、透明的补贴代办服务。
        </p>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              className="skill-card"
              key={skill.title}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="skill-card-num">0{i + 1}</span>
              <h3 className="skill-card-title">{skill.title}</h3>
              <p className="skill-card-desc">{skill.desc}</p>
              <ul className="skill-card-list">
                {skill.items.map(item => (
                  <li key={item} className="skill-card-item">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
