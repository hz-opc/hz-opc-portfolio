import { ArrowRight, ChevronDown } from "lucide-react"

export default function Hero() {
  const titleWords = "OPC政策初创一次补贴".split(" ")

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-bg-fallback" />

        {/* Desktop: video */}
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>

        {/* Mobile: particles */}
        <div className="hero-particles-mobile" aria-hidden="true">
          <span className="hpm" style={{left:'5%',top:'10%',animationDelay:'0s'}} />
          <span className="hpm" style={{left:'15%',top:'30%',animationDelay:'0.5s'}} />
          <span className="hpm" style={{left:'25%',top:'55%',animationDelay:'1s'}} />
          <span className="hpm" style={{left:'35%',top:'20%',animationDelay:'1.5s'}} />
          <span className="hpm" style={{left:'45%',top:'70%',animationDelay:'2s'}} />
          <span className="hpm" style={{left:'55%',top:'15%',animationDelay:'0.3s'}} />
          <span className="hpm" style={{left:'65%',top:'45%',animationDelay:'0.8s'}} />
          <span className="hpm" style={{left:'75%',top:'60%',animationDelay:'1.3s'}} />
          <span className="hpm" style={{left:'85%',top:'25%',animationDelay:'1.8s'}} />
          <span className="hpm" style={{left:'10%',top:'80%',animationDelay:'0.6s'}} />
          <span className="hpm" style={{left:'40%',top:'40%',animationDelay:'2.2s'}} />
          <span className="hpm" style={{left:'60%',top:'85%',animationDelay:'0.9s'}} />
          <span className="hpm" style={{left:'80%',top:'50%',animationDelay:'1.6s'}} />
          <span className="hpm" style={{left:'20%',top:'65%',animationDelay:'2.5s'}} />
          <span className="hpm" style={{left:'90%',top:'75%',animationDelay:'1.2s'}} />
        </div>

        <div className="hero-bg-gradient" />
      </div>

      <div className="noise-overlay" style={{ opacity: 0.7, mixBlendMode: "overlay" }} />
      <div className="hero-gradient" />

      <div className="hero-content container">
        <div className="hero-heading">
          <h1 className="hero-title">
            {titleWords.map((word, i) => (
              <span key={i} className="hero-word" style={{ animationDelay: `${i * 0.1}s` }}>
                {word}
              </span>
            ))}
          </h1>
          <p className="hero-subtitle hero-fade-up" style={{ animationDelay: "0.7s" }}>
            深圳 · AI人工智能服务站
          </p>
        </div>

        <div className="hero-info">
          <p className="hero-desc hero-fade-up" style={{ animationDelay: "0.9s" }}>
            深圳 · OPC个人公司一次性创业补贴全流程代办服务。
            从资格预审到补贴到账，AI赋能高效申报，让每一份创业热情都被政策看见。
          </p>

          <a href="#contact" className="hero-cta hero-fade-up" style={{ animationDelay: "1.1s" }}>
            <span>免费咨询</span>
            <span className="hero-cta-icon">
              <ArrowRight size={16} color="#E1E0CC" />
            </span>
          </a>
        </div>
      </div>

      <div className="hero-scroll hero-fade-up" style={{ animationDelay: "1.5s" }}>
        <div className="hero-scroll-bounce">
          <ChevronDown size={24} color="rgba(225, 224, 204, 0.5)" />
        </div>
      </div>
    </section>
  )
}
