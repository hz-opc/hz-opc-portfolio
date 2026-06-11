import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '200+', label: '服务客户' },
    { value: '98%', label: '申报成功率' },
    { value: '15-25', label: '工作日完结' },
    { value: '500万+', label: '累计补贴' },
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-card" ref={ref}>
          {/* Avatar */}
          <motion.div
            className="about-avatar"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-avatar-inner">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </motion.div>

          <span className="section-label">关于我</span>

          <div className="about-heading">
            <span className="about-heading-normal">我是HZ，</span>{' '}
            <span className="about-heading-italic">深圳OPC政策补贴服务商，</span>{' '}
            <span className="about-heading-normal">专注为个人创业者提供一站式补贴申报代办，用AI技术赋能全流程效率。</span>
          </div>

          <motion.p
            className="about-body"
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            立足深圳，深耕OPC个人公司一次性创业补贴领域。
            从短视频引流获客到社群精准转化，从资格认定到线上申报，从公示跟进到补贴到账——
            每一个环节都经过实战打磨，每一次服务都追求极致效率。
          </motion.p>

          <div className="about-stats">
            {stats.map((stat, i) => (
              <motion.div
                className="about-stat"
                key={stat.label}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="about-stat-value">{stat.value}</span>
                <span className="about-stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="about-contact-row">
            <span className="about-link-item">📍 中国 · 深圳</span>
            <span className="about-link-item">📱 微信：HCJ_0903</span>
          </div>
        </div>
      </div>
    </section>
  )
}
