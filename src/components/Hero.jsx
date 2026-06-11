import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Pure CSS Background - no external video */}
      <div className="hero-bg">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-particles">
          <span className="particle p1" />
          <span className="particle p2" />
          <span className="particle p3" />
          <span className="particle p4" />
          <span className="particle p5" />
          <span className="particle p6" />
        </div>
      </div>

      {/* Noise Overlay */}
      <div className="noise-overlay" style={{ opacity: 0.7, mixBlendMode: 'overlay' }} />

      {/* Gradient Overlay */}
      <div className="hero-gradient" />

      {/* Content */}
      <div className="hero-content container">
        <div className="hero-heading">
          <WordsPullUp
            text="OPC政策初创一次补贴"
            className="hero-title"
          />
          <motion.p
            className="hero-subtitle"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            深圳 · AI人工智能服务站
          </motion.p>
        </div>

        <div className="hero-info">
          <motion.p
            className="hero-desc"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            深圳 · OPC个人公司一次性创业补贴全流程代办服务。
            从资格预审到补贴到账，AI赋能高效申报，让每一份创业热情都被政策看见。
          </motion.p>

          <motion.a
            href="#contact"
            className="hero-cta"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>免费咨询</span>
            <span className="hero-cta-icon">
              <ArrowRight size={16} color="#E1E0CC" />
            </span>
          </motion.a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} color="rgba(225, 224, 204, 0.5)" />
        </motion.div>
      </motion.div>
    </section>
  )
}
