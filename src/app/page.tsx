"use client";
import { useState, useEffect } from "react";
const WHATSAPP = "16019078409";
const COUNTRIES: any = {
  FR: { flag: "🇫🇷", en: "France", ar: "فرنسا", provider: "beIN + CANAL+", yearly: 480 },
  DE: { flag: "🇩🇪", en: "Germany", ar: "ألمانيا", provider: "DAZN + Sky", yearly: 540 },
  GB: { flag: "🇬🇧", en: "UK", ar: "بريطانيا", provider: "Sky Sports", yearly: 598 },
  NL: { flag: "🇳🇱", en: "Netherlands", ar: "هولندا", provider: "Viaplay", yearly: 239 },
  BE: { flag: "🇧🇪", en: "Belgium", ar: "بلجيكا", provider: "Telenet + Eleven", yearly: 348 },
  SE: { flag: "🇸🇪", en: "Sweden", ar: "السويد", provider: "Viaplay", yearly: 430 },
};
const DICT: any = {
  ar: { badge: "للعرب في أوروبا - VPN مجانا", h1a: "اشتراك TOD الرسمي", h1b: "بجودة FHD بدون تقطيع", sub: "نفس مصدر beIN في قطر. ليس IPTV مسروق. مع VPN بنقرة واحدة يعمل في فرنسا، ألمانيا، بلجيكا وكل أوروبا.", cta: "اطلب الآن 58€ عبر واتساب", trust: "تفعيل فوري 5 دقائق • ضمان 24 ساعة", priceYear: "سنة كاملة", save: "توفر" },
  en: { badge: "For Arabs in Europe - FREE VPN", h1a: "Official TOD Subscription", h1b: "True FHD No Buffering", sub: "Same beIN source as Qatar. Not stolen IPTV. With 1-click VPN works in France, Germany, Belgium & all Europe.", cta: "Order Now 58€ on WhatsApp", trust: "5 min activation • 24h guarantee", priceYear: "full year", save: "Save" }
};
export default function Home() {
  const [locale, setLocale] = useState<"ar" | "en">("ar");
  const [country, setCountry] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const t = DICT[locale]; const isAr = locale === "ar";
  useEffect(() => {
    fetch("https://ipapi.co/json/").then(r=>r.json()).then(d=>{ if(d.country_code && COUNTRIES[d.country_code]) setCountry(d.country_code); else setCountry("FR"); }).catch(()=>setCountry("FR"));
  }, []);
  const detected = country ? COUNTRIES[country] : null;
  const WA_LINK = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(isAr ? "السلام عليكم اريد اشتراك TOD EUROPE 58€ مع VPN" : "Hello I want TOD EUROPE 58EUR with VPN");
  return (
    <main dir={isAr ? "rtl" : "ltr"} className="bg-[#0a0a0f] text-white">
      {detected && <div className="bg-[#03FF8E] text-black text-center py-2.5 text-xs font-black sticky top-0 z-[70]">{detected.flag} {isAr ? "أنت في " + detected.ar : "You are in " + detected.en} : <span className="line-through opacity-60">{detected.provider} {detected.yearly}€/year</span> vs TOD 58€/year <span className="bg-black text-[#03FF8E] px-2 py-0.5 rounded-full">{t.save} {detected.yearly - 58}€</span></div>}
      <header className="border-b border-white/10 sticky top-0 bg-[#0a0a0f]/90 backdrop-blur z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="font-black text-xl"><span className="text-[#ffbc00]">TOD</span> EUROPE <span className="text-[10px] bg-white/10 px-2 py-1 rounded-full ml-2">WOWMART STYLE</span></div>
          <div className="flex items-center gap-2">
            <div className="flex bg-white/10 rounded-full p-1 text-xs font-bold">
              <button onClick={()=>setLocale("ar")} className={`px-3 py-1 rounded-full ${isAr?"bg-white text-black":"text-white/60"}`}>العربية</button>
              <button onClick={()=>setLocale("en")} className={`px-3 py-1 rounded-full ${!isAr?"bg-white text-black":"text-white/60"}`}>EN</button>
            </div>
            <a href={WA_LINK} className="bg-[#25D366] px-5 py-2 rounded-full font-black text-sm">WhatsApp</a>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-12 grid md:grid-cols-2 gap-8 items-center">
        <div className={isAr?"text-center md:text-right":"text-center md:text-left"}>
          <div className="inline-block bg-[#ffbc00]/20 border border-[#ffbc00]/30 text-[#ffbc00] px-3 py-1 rounded-full text-xs font-bold">{t.badge} 🇫🇷 🇩🇪 🇬🇧 🇧🇪 🇳🇱 🇸🇪</div>
          <h1 className="text-4xl md:text-5xl font-black leading-[1.1] mt-4">{t.h1a}<br/><span className="text-[#ffbc00]">{t.h1b}</span></h1>
          <p className="text-white/60 mt-4 text-sm leading-relaxed">{t.sub}</p>
          <ul className="text-sm mt-4 space-y-2 text-left md:text-right bg-white/5 p-4 rounded-2xl border border-white/10">
            <li>✓ {isAr?"كل beIN SPORTS 1-10 بتعليق عربي":"All beIN SPORTS 1-10 Arabic commentary"}</li>
            <li>✓ {isAr?"دوري الأبطال + 5 دوريات كبرى":"Champions League + 5 major leagues"}</li>
            <li>✓ {isAr?"جودة FHD 50FPS بدون تقطيع - مصدر رسمي":"True FHD 50FPS zero buffering - Official source"}</li>
            <li>✓ {isAr?"يعمل على تلفاز، جوال، Apple TV، Fire Stick":"Works on TV, Mobile, Apple TV, Fire Stick"}</li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href={WA_LINK} className="bg-[#ffbc00] px-8 py-4 rounded-full font-black text-center shadow-[0_0_30px_rgba(255,33,67,0.4)]">{t.cta}</a>
            <div className="text-center sm:text-right"><div className="font-black">58€ <span className="text-xs font-normal text-white/60">/ {t.priceYear}</span></div><div className="text-xs text-[#03FF8E]">4.83€/month • VPN Free</div></div>
          </div>
          <p className="text-xs text-white/40 mt-2">{t.trust} • ⭐ 4.9/5 (8400+ {isAr?"مشترك":"subscribers"})</p>
        </div>
        <div className="bg-gradient-to-br from-[#1a1d2b] to-[#0a0a0f] border border-white/10 rounded-[28px] p-6 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ffbc00] text-white text-xs font-black px-4 py-1 rounded-full">58€ {isAr?"سنة كاملة":"/ YEAR"} • {isAr?"الأكثر طلبا":"BEST SELLER"}</div>
          <div className="text-center mt-4">
            <div className="text-5xl font-black">58€ <span className="text-sm text-white/50 line-through">199€</span></div>
            <p className="text-xs text-[#03FF8E] font-bold">+ VPN Premium Included</p>
            <div className="grid grid-cols-3 gap-2 mt-6 text-xs">
              <div className="bg-white text-black p-3 rounded-2xl font-bold">🏆<br/>{isAr?"الأبطال":"UCL"}</div>
              <div className="bg-white text-black p-3 rounded-2xl font-bold">🏴󠁧󠁢󠁥󠁮󠁧󠁿<br/>Premier</div>
              <div className="bg-white text-black p-3 rounded-2xl font-bold">🎬<br/>{isAr?"أفلام":"Movies"}</div>
            </div>
            <a href={WA_LINK} className="block bg-white text-black py-3 rounded-full font-black mt-6">WhatsApp - {isAr?"اطلب الآن":"Order Now"}</a>
            <p className="text-[11px] text-white/40 mt-2">PayPal • Card • SEPA • Apple Pay</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4">
        <h2 className="text-center font-black text-2xl">{isAr?"لماذا TOD أفضل من IPTV العادي؟":"Why TOD is better than cheap IPTV?"}</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6"><h3 className="text-red-400 font-black">❌ IPTV 60€/year</h3><ul className="text-sm space-y-2 mt-3 opacity-70"><li>• {isAr?"يقطع عند الهدف - سيرفرات مسروقة":"Buffers on goals - stolen servers"}</li><li>• 720p 25FPS {isAr?"مغبشة":"blurry"}</li><li>• {isAr?"يفصل في النهائيات":"Crashes on finals"}</li><li>• {isAr?"يتأخر دقيقتين":"2 min delay"}</li></ul></div>
          <div className="bg-[#ffbc00] rounded-3xl p-6"><h3 className="font-black">✅ TOD EUROPE 58€/year</h3><ul className="text-sm space-y-2 mt-3 font-medium"><li>✓ {isAr?"مصدر beIN الرسمي CDN":"Official beIN CDN - zero buffering"}</li><li>✓ FHD 50FPS FHDHD</li><li>✓ {isAr?"ثبات 100% حتى مع 10M مشاهد":"100% stable even with 10M viewers"}</li><li>✓ VPN + {isAr?"تطبيق TOD الرسمي":"Official TOD app"}</li></ul></div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-10">
        <h2 className="text-center font-black text-xl">{isAr?"وفر حتى 80% مقارنة بمزودك المحلي - سعر سنوي":"Save 80% vs your local provider - Yearly price"}</h2>
        <div className="bg-[#141822] border border-white/10 rounded-3xl overflow-hidden mt-6 text-sm">
          <div className="grid grid-cols-3 bg-white/5 p-3 text-xs font-black text-center"><div>{isAr?"الدولة":"Country"}</div><div>{isAr?"سعرهم / سنة":"Their price / year"}</div><div className="text-[#03FF8E]">TOD EUROPE</div></div>
          {Object.entries(COUNTRIES).map(([k,v]:any)=><div key={k} className={`grid grid-cols-3 p-3 border-t border-white/5 text-center items-center ${k===country?"bg-[#03FF8E]/10":""}`}><div className="font-bold text-right">{v.flag} {isAr?v.ar:v.en}</div><div className="line-through text-white/50 text-xs">{v.provider} {v.yearly}€</div><div className="font-black text-[#03FF8E]">58€ <span className="text-xs">({t.save} {v.yearly-58}€)</span></div></div>)}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-center font-black text-xl">{isAr?"أسئلة شائعة":"FAQ"}</h2>
        {[
          {q:isAr?"هل يعمل في أوروبا بدون تقطيع؟": "Does it work in Europe without buffering?", a:isAr?"نعم، مع VPN بنقرة واحدة يصبح كأنك في قطر. سرعة 10 ميغا تكفي FHD.":"Yes, 1-click VPN makes it like you are in Qatar. 10 Mbps is enough for FHD."},
          {q:isAr?"هل الـ VPN صعب؟":"Is VPN difficult?", a:isAr?"لا، تطبيق واحد تضغط Connect ويعمل TOD مباشرة. نرسل فيديو 30 ثانية.":"No, 1 app, 1 tap Connect and TOD works. We send 30s video."},
          {q:isAr?"كم جهاز؟":"How many devices?", a:isAr?"جهازين في نفس الوقت + كل أجهزتك.":"2 devices at same time + all your devices."},
        ].map((f,i)=><div key={i} className="bg-white/5 border border-white/10 rounded-2xl mt-3"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full text-right p-4 font-bold flex justify-between">{f.q}<span>{openFaq===i?"−":"+"}</span></button>{openFaq===i && <p className="px-4 pb-4 text-sm text-white/60">{f.a}</p>}</div>)}
      </section>

      <section className="text-center py-8 border-t border-white/10">
        <a href={WA_LINK} className="bg-[#25D366] px-10 py-4 rounded-full font-black inline-block">{isAr?"احجز على واتساب 58€ - تفعيل 5 دقائق":"Order on WhatsApp 58€ - 5 min activation"} 💬</a>
        <p className="text-xs text-white/30 mt-4">TOD EUROPE - Independent Reseller. TOD & beIN trademarks. VPN required outside MENA.</p>
      </section>
      <div className="fixed bottom-0 inset-x-0 bg-[#141822] border-t border-white/10 p-3 flex gap-3 md:hidden z-50"><div className="flex-1 font-black">58€/year <span className="text-xs text-[#03FF8E]">+ FREE VPN</span></div><a href={WA_LINK} className="bg-[#25D366] flex-1 text-center py-3 rounded-full font-black">WhatsApp</a></div>
    </main>
  );
}