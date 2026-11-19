import Link from "next/link";

import { RibbonGraphic } from "@/components/RibbonGraphic";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <RibbonGraphic />
      <div className="hero__inner">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">
            FU AI
            <br />
            Club
          </h1>
          <p className="hero__tagline">Изучай и Практикуй.</p>
          <p className="hero__subhead">Студенческое AI-сообщество Финансового университета.</p>
          <p className="hero__description">
            Изучаем искусственный интеллект, экспериментируем с технологиями, создаём собственные
            проекты и объединяем людей, которым интересно будущее AI.
          </p>
          <div className="hero__actions">
            <CommunityButton />
            <Link className="button button--outline" href="#about">
              Узнать о клубе
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommunityButton() {
  if (!siteConfig.telegramUrl) {
    return (
      <button
        className="button button--dark"
        type="button"
        disabled
        title="Ссылка на сообщество появится после подтверждения канала"
        aria-label="Присоединиться к сообществу. Ссылка пока не настроена"
      >
        Присоединиться к сообществу
        <span aria-hidden="true">↗</span>
      </button>
    );
  }

  return (
    <a className="button button--dark" href={siteConfig.telegramUrl} target="_blank" rel="noreferrer">
      Присоединиться к сообществу
      <span aria-hidden="true">↗</span>
    </a>
  );
}

