import Image from "next/image";
import Link from "next/link";

const memories = [
  {
    label: "Чиний инээмсэглэл",
    tone: "memory-pink",
    image: "/photo1.jpg",
  },
  {
    label: "Нандин мөч",
    tone: "memory-gold",
    image: "/photo2.png",
  },
  {
    label: "Хамтдаа",
    tone: "memory-lilac",
    image: "/photo3.png",
  },
];

export default function LetterPage() {
  return (
    <main className="letter-page">
      <div className="letter-glow letter-glow-left" />
      <div className="letter-glow letter-glow-right" />

      <section className="memories" aria-labelledby="memories-title">
        <article className="memory-letter" aria-label="Хайрын захиа">
          <p className="memory-letter-kicker">
            A LITTLE LETTER FOR YOU
          </p>

          <p>
            Чамтайгаа найзалж, хамтдаа инээж, жаргаж, заримдаа гуниглаж
            өнгөрүүлсэн мөч бүр надад үнэхээр үнэ цэнтэй байдаг. Амьдралд
            олон хүнтэй тааралддаг ч сэтгэлд ойр, итгэж болох, өөрийнхөөрөө
            байж чаддаг хүн цөөхөн байдаг. Харин чи миний хувьд тийм
            ховорхон хүмүүсийн нэг.
          </p>

          <p>
            Цаашдаа бидний зам өөр өөр тийшээ хөтөлж, амьдралын олон зүйл
            өөрчлөгдсөн ч бидний нөхөрлөл хэзээ ч мартагдахгүй байгаасай.
            Хамтдаа бүтээсэн дурсамжуудаа олон жилийн дараа инээмсэглэн
            дурсаж, “ямар сайхан найзууд байж дээ” гэж хэлэх өдөр ирээсэй.
          </p>

          <p className="memory-letter-signature">
            Хайртай шүү, Үнсье
          </p>
          <Link className="video-page-link" href="/video">
            Мэндчилгээний видеог үзэх <span>♥</span>
          </Link>
        </article>

        <div className="memory-grid">
          {memories.map((memory, index) => (
            <figure
              className={`memory-card ${memory.tone}`}
              key={memory.label}
            >
              <div className="memory-photo">
                <Image
                  src={memory.image}
                  alt={memory.label}
                  fill
                  sizes="(max-width: 600px) 68vw, 210px"
                  priority={index === 0}
                />
              </div>

              <figcaption>
                <span>0{index + 1}</span>
                {memory.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
