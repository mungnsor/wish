import Image from "next/image";
import Link from "next/link";

const confetti = Array.from({ length: 22 }, (_, index) => index);

export default function GreetingPage() {
  return (
    <main className={`letter-page first-envelope ` }>
      <section className="birthday-card" aria-label="Mungunsor's birthday greeting">
        <div className="" /><div className="" /><div className="glow glow-two" /><div className="orbit orbit-large" /><div className="orbit orbit-small" />
        <div className="confetti-field" aria-hidden="true">{confetti.map((item) => <i className={`confetti confetti-${item % 5}`} key={item} />)}</div>
        <header className="card-header"><span className="twinkle">✦</span><p></p><span className="header-line" /></header>
        <div className="portrait-frame" aria-hidden="true"><div className="portrait-shine" /><div className="portrait-halo" /><div className="portrait-person"><Image src="/photo.png" alt="" fill priority sizes="(max-width: 640px) 74vw, 470px" /></div><span className="leaf leaf-left" /><span className="leaf leaf-right" /></div>
        <div className="message"><p className="eyebrow">ЧАМД ЗОРИУЛСАН</p><h1>Хайртай<br />чамдаа<br /><em>төрсөн өдрийн</em><br />мэнд хүргэе</h1><p className="signature">Мөнгөнсор-оос</p></div>
        <div className="cake" aria-label="Birthday cake"><div className="cake-flames"><i /><i /><i /></div><div className="cake-candles"><i /><i /><i /></div><div className="cake-frosting" /><div className="cake-layer" /><div className="cake-plate" /></div>
        <Link className="open-letter" href="/letter">Захиаг нээх <span aria-hidden="true">→</span></Link>
        <span className="corner-star star-top">✦</span><span className="corner-star star-bottom">✦</span><time className="date-stamp" dateTime="2026-08-19">2026 · 08 · 19</time><div className="card-footer"><i /><i /><i /></div>
      </section>
    </main>
  );
}
