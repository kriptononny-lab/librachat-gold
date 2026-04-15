"use client";
import Link from "next/link";
import { BarChart2, FileText, Languages, Code2, Paperclip, Image as ImageIcon, Mic, SendHorizontal } from "lucide-react";

const QUICK_ACTIONS = [
  { icon: BarChart2, label: "Анализ данных" },
  { icon: FileText, label: "Написать текст" },
  { icon: Languages, label: "Перевести" },
  { icon: Code2, label: "Написать код" },
];

export function HeroSection() {
  return (
    <section style={{ padding: "92px 56px 68px", textAlign: "center", position: "relative", overflow: "hidden", background: "#080808" }}>
      {/* Orbs */}
      <div style={{ position:"absolute", top:"-100px", left:"50%", transform:"translateX(-50%)", width:"700px", height:"420px", background:"radial-gradient(ellipse,rgba(201,162,39,0.11) 0%,transparent 70%)", pointerEvents:"none", borderRadius:"50%" }} />
      <div style={{ position:"absolute", top:"30px", right:"-60px", width:"280px", height:"280px", background:"radial-gradient(ellipse,rgba(201,162,39,0.05) 0%,transparent 70%)", pointerEvents:"none", borderRadius:"50%" }} />
      <div style={{ position:"absolute", top:"30px", left:"-60px", width:"260px", height:"260px", background:"radial-gradient(ellipse,rgba(201,162,39,0.04) 0%,transparent 70%)", pointerEvents:"none", borderRadius:"50%" }} />

      <div style={{ position:"relative", zIndex:1 }}>
        {/* Badge */}
        <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", marginBottom:"22px" }}>
          <span className="badge-dot" />
          <span style={{ fontSize:"11px", fontWeight:500, color:"rgba(201,162,39,0.5)", letterSpacing:"0.08em", textTransform:"uppercase" }}>ИИ-АССИСТЕНТ НОВОГО ПОКОЛЕНИЯ</span>
        </div>

        {/* H1 */}
        <h1 style={{ fontSize:"clamp(38px,5.5vw,52px)", fontWeight:800, color:"#fff", lineHeight:1.07, letterSpacing:"-0.026em", marginBottom:"12px", fontFamily:"'Unbounded',sans-serif" }}>
          Привет, я <span style={{ background:"linear-gradient(135deg,#e8c84a,#c9a227)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>LibraChat.</span>
        </h1>

        {/* Subtitle — золотой */}
        <div style={{ fontSize:"19px", fontWeight:600, color:"rgba(201,162,39,0.7)", marginBottom:"14px" }}>
          Закрою лишние вкладки в твоём браузере.
        </div>

        {/* Desc */}
        <p style={{ fontSize:"15px", lineHeight:1.75, color:"rgba(255,255,255,0.38)", maxWidth:"460px", margin:"0 auto 44px" }}>
          Обрабатываю большие данные, пишу честные документы — без галлюцинаций и выдумок.
        </p>

        {/* Input */}
        <div style={{ maxWidth:"660px", margin:"0 auto 13px", position:"relative" }}>
          <div style={{ position:"absolute", inset:"-4px", borderRadius:"22px", background:"rgba(201,162,39,0.07)", filter:"blur(14px)", zIndex:0 }} />
          <div style={{ position:"relative", zIndex:1, background:"#111111", border:"1px solid rgba(201,162,39,0.2)", borderRadius:"20px", padding:"21px 16px 13px 25px", boxShadow:"0 0 0 4px rgba(201,162,39,0.03),0 28px 60px rgba(0,0,0,0.75)" }}>
            <div style={{ fontSize:"15px", color:"rgba(255,255,255,0.35)", lineHeight:1.65, minHeight:"52px", marginBottom:"13px", textAlign:"left" }}>
              Напиши контент-план для Instagram на месяц...
            </div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", borderTop:"1px solid rgba(255,255,255,0.05)", paddingTop:"11px" }}>
              <div style={{ display:"flex", gap:"2px" }}>
                {[Paperclip, ImageIcon, Mic].map((Icon, i) => (
                  <button key={i} style={{ width:"32px", height:"32px", borderRadius:"8px", background:"transparent", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.16)" }}>
                    <Icon size={16} />
                  </button>
                ))}
              </div>
              <Link href="https://librachat.kz/auth">
                <button style={{ width:"36px", height:"36px", borderRadius:"50%", background:"linear-gradient(135deg,#c9a227,#e8c84a)", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 14px rgba(201,162,39,0.22)" }}>
                  <SendHorizontal size={15} color="#000" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display:"flex", gap:"6px", justifyContent:"center", marginBottom:"48px", flexWrap:"wrap" }}>
          {QUICK_ACTIONS.map(({ icon: Icon, label }) => (
            <button key={label} style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:"999px", padding:"5px 13px", fontSize:"11px", color:"rgba(255,255,255,0.26)", cursor:"pointer", display:"flex", alignItems:"center", gap:"4px" }}>
              <Icon size={12} />
              {label}
            </button>
          ))}
        </div>

        {/* Stats — значения золотые */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", maxWidth:"540px", margin:"0 auto", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
          {[
            { value: "Без VPN", label: "начать пользоваться легко" },
            { value: "1 480", label: "тестировщиков подтвердили" },
            { value: "30 сек", label: "среднее время регистрации" },
          ].map(({ value, label }, i) => (
            <div key={label} style={{ padding:"19px 8px", textAlign:"center", borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
              <span style={{ fontSize:"17px", fontWeight:700, color:"#c9a227", display:"block", marginBottom:"4px" }}>{value}</span>
              <span style={{ fontSize:"10px", color:"rgba(255,255,255,0.2)", display:"block", lineHeight:1.45 }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Для бизнеса */}
        <div style={{ marginTop:"32px" }}>
          <Link href="/pricing" style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"transparent", border:"1px solid rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.45)", borderRadius:"999px", padding:"10px 24px", fontSize:"13px", textDecoration:"none" }}>
            Для бизнеса →
          </Link>
        </div>
      </div>
    </section>
  );
}
