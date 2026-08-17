"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [isOpening, setIsOpening] = useState(false);
  const router = useRouter();

  function openGreeting() {
    if (isOpening) return;
    setIsOpening(true);
    window.setTimeout(() => router.push("/greeting"), 860);
  }

  return (
    <main className={`letter-page first-envelope ${isOpening ? "is-open" : ""}`}>
      <div className="letter-glow letter-glow-left" /><div className="letter-glow letter-glow-right" />
      <section className="envelope-scene initial-envelope" aria-label="Birthday envelope">
        <div className="envelope">
          <button className="envelope-toggle" type="button" onClick={openGreeting} aria-label="Дугтуйг задлах">
            <span className="envelope-back" /><span className="envelope-flap" /><span className="envelope-front" /><span className="envelope-seal" aria-hidden="true">♥</span>
          </button>
        </div>
        <p className="envelope-hint">Дугтуйн дээр дарж задлаарай</p>
      </section>
    </main>
  );
}
