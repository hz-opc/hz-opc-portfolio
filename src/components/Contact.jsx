import { ArrowRight, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyWechat = () => {
    navigator.clipboard.writeText('HCJ_0903')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-bg-glow"></div>

      <div className="container contact-inner">
        <span className="section-label">联系方式</span>
        <h2 className="contact-title">
          让补贴<span className="text-accent">不再错过</span>
        </h2>
        <p className="contact-desc">
          无论你是刚注册OPC公司的创业者，还是正在考虑申请补贴的个人企业主——<br />
          欢迎随时联系，获取免费资格诊断与一对一服务方案。
        </p>

        <button onClick={copyWechat} className="contact-cta">
          <span>微信：HCJ_0903</span>
          <span className="contact-cta-icon">
            {copied ? <Check size={16} color="#000" /> : <Copy size={16} color="#000" />}
          </span>
        </button>

        <div className="contact-social">
          <span className="contact-social-link">📍 中国 · 深圳</span>
          <span className="contact-divider">|</span>
          <span className="contact-social-link">📱 HCJ_0903</span>
          <span className="contact-divider">|</span>
          <span className="contact-social-link">🤖 AI智能服务站</span>
        </div>

        <p className="contact-footer">© 2026 HZ · OPC政策补贴服务 · 深圳AI智能服务站</p>
      </div>
    </section>
  )
}
