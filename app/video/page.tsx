import Link from "next/link";

export default function VideoPage() {
  return (
    <main className="letter-page video-page">
      <div className="letter-glow letter-glow-left" />
      <div className="letter-glow letter-glow-right" />

      <section className="video-greeting" aria-labelledby="video-greeting-title">
        <div className="video-greeting-heading">
          <div>
            <p>ONE MORE LITTLE SURPRISE</p>
          </div>
          <span className="video-greeting-heart" aria-hidden="true">♥</span>
        </div>

        <div className="video-frame">
          <span className="video-sparkle video-sparkle-one" aria-hidden="true">✦</span>
          <span className="video-sparkle video-sparkle-two" aria-hidden="true">✦</span>
          <video
            className="greeting-video"
            controls
            poster="/photo1.jpg"
            preload="metadata"
          >
            <source src="/greeting.mp4" type="video/mp4" />
            Таны хөтөч видео тоглуулах боломжгүй байна.
          </video>
        </div>

        <p className="video-greeting-note">
          Энэ өдрийн хамгийн дулаахан мэндчилгээг эндээс үзээрэй.
        </p>
        <Link className="video-back-link" href="/letter">
          <span aria-hidden="true">←</span> Захиа руу буцах
        </Link>
      </section>
    </main>
  );
}
