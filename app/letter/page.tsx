"use client";
import Image from "next/image";
const memories = [
  { label: "Чиний инээмсэглэл", tone: "memory-pink" },
  { label: "Нандин мөч", tone: "memory-gold" },
  { label: "Хамтдаа", tone: "memory-lilac" },
];

export default function LetterPage() {
  return (
    <main className="letter-page">
      <div className="letter-glow letter-glow-left" />
      <div className="letter-glow letter-glow-right" />
      <section className="memories" aria-labelledby="memories-title">
        <div className="memories-heading"><div><p>OUR LITTLE STORY</p><h2 id="memories-title">Дурсамжууд</h2></div></div>
        <div className="memory-grid">{memories.map((memory, index) => (
          <figure className={`memory-card ${memory.tone}`} key={memory.label}>
            <div className="memory-photo"><Image src="/photo.png" alt={memory.label} fill sizes="(max-width: 600px) 68vw, 210px" priority={index === 0} /></div>
            <figcaption><span>0{index + 1}</span>{memory.label}</figcaption>
          </figure>
        ))}</div>
        <article className="memory-letter" aria-label="Хайрын захиа">
          <p className="memory-letter-kicker">A LITTLE LETTER FOR YOU</p>
          <h3>Хайрт минь,</h3>
          <p>Төрсөн өдрийн мэнд хүргэе. Чиний инээмсэглэл өдөр бүрийг илүү дулаахан, онцгой болгодог шүү.</p>
          <p>Энэ шинэ насандаа хүссэн бүхнээ бүтээж, аз жаргалтай байгаарай. Би үргэлж чиний талд байна.</p>
          <p className="memory-letter-signature">Хайртай шүү,<br /><strong>Мөнгөнсор</strong></p>
        </article>
      </section>
    </main>
  );
}
