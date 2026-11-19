import Image from "next/image";

import { siteConfig } from "@/config/site";

const activities = [
  {
    number: "01",
    title: "Лекции и встречи с экспертами",
    description:
      "Узнаём о новых технологиях, актуальных направлениях развития AI и реальных кейсах от специалистов индустрии, исследователей и предпринимателей.",
  },
  {
    number: "02",
    title: "Практические воркшопы",
    description:
      "Переходим от теории к практике. Учимся работать с AI-инструментами, создавать агентов, ботов, сайты и автоматизировать повседневные задачи.",
  },
  {
    number: "03",
    title: "Мини-хакатоны и соревнования",
    description:
      "Проверяем идеи на практике. Собираемся в команды, создаём собственные решения за ограниченное время и представляем результаты.",
  },
  {
    number: "04",
    title: "Кейсы и совместные проекты",
    description:
      "Работаем над практическими задачами вместе с другими студентами, университетскими сообществами и потенциальными работодателями.",
  },
] as const;

export function HomeSections() {
  return (
    <>
      <AboutSection />
      <ActivitiesSection />
      <CommunityPartnershipSection />
      <Footer />
    </>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="section-label">
      <span aria-hidden="true" />
      {children}
    </p>
  );
}

function AboutSection() {
  return (
    <section className="home-section about-section" id="about" aria-labelledby="about-title">
      <div className="section-shell">
        <div className="about-grid">
          <div>
            <SectionLabel>О клубе</SectionLabel>
            <h2 id="about-title" className="section-title">
              AI — не только технология. Это возможность создавать.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              FU AI Club — открытое студенческое сообщество Финансового университета для тех, кто
              хочет не просто следить за развитием искусственного интеллекта, а научиться применять
              его на практике.
            </p>
            <p>
              Мы объединяем студентов разных специальностей и уровней подготовки: от тех, кто только
              открывает для себя AI, до тех, кто уже разрабатывает собственные технологические
              проекты.
            </p>
          </div>
        </div>
        <div className="principles" aria-label="Принципы FU AI Club">
          <span>Открытое сообщество</span>
          <span>Практика и реальные проекты</span>
          <span>Эксперты индустрии</span>
          <span>Бесплатное участие</span>
        </div>
      </div>
      <RibbonFragment className="ribbon-fragment ribbon-fragment--about" />
    </section>
  );
}

function ActivitiesSection() {
  return (
    <section className="home-section activities-section" id="activities" aria-labelledby="activities-title">
      <div className="section-shell">
        <SectionLabel>Что мы делаем</SectionLabel>
        <div className="activities-heading">
          <h2 id="activities-title" className="section-title">
            От знакомства с AI — к собственным проектам.
          </h2>
          <p>
            Мы объединяем образовательные мероприятия, практику и командную работу, чтобы каждый мог
            найти интересный для себя формат.
          </p>
        </div>
        <div className="activity-grid">
          {activities.map((activity, index) => (
            <article className={`activity-card${index === 1 ? " activity-card--dark" : ""}`} key={activity.number}>
              <span className="activity-card__number">{activity.number}</span>
              <ActivityIcon index={index} />
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActivityIcon({ index }: { index: number }) {
  const common = { width: 30, height: 30, viewBox: "0 0 30 30", fill: "none", "aria-hidden": true as const };
  if (index === 0) {
    return <svg {...common}><path d="m15 4 10 5-10 5L5 9l10-5Z" stroke="currentColor" strokeWidth="1.8"/><path d="m5 14 10 5 10-5M5 19l10 5 10-5" stroke="currentColor" strokeWidth="1.8"/></svg>;
  }
  if (index === 1) {
    return <svg {...common}><path d="m11 8-6 7 6 7M19 8l6 7-6 7M17 6l-4 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>;
  }
  if (index === 2) {
    return <svg {...common}><path d="m17 3-9 13h7l-2 11 9-14h-7l2-10Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/></svg>;
  }
  return <svg {...common}><path d="M8 12h14v11H8zM11 12V8h8v4M5 16h3m14 0h3M12 23v3m6-3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 17h6" stroke="currentColor" strokeWidth="1.8"/></svg>;
}

function CommunityPartnershipSection() {
  return (
    <section className="home-section community-section" aria-label="Сообщество и партнёрство">
      <div className="section-shell community-grid">
        <article id="community" className="community-card">
          <SectionLabel>Сообщество</SectionLabel>
          <h2 className="section-title">Неважно, с чего ты начинаешь. Важно, что тебе интересно.</h2>
          <p>
            Никогда не создавал AI-агентов? Только осваиваешь нейросети? Уже разрабатываешь собственные
            проекты?
          </p>
          <p>В FU AI Club найдётся место каждому.</p>
          <p>Здесь можно задавать вопросы, обмениваться опытом, знакомиться с единомышленниками и вместе пробовать новые идеи.</p>
          <CommunityButton />
        </article>
        <article id="partners" className="community-card community-card--partnership">
          <SectionLabel>Партнёрство</SectionLabel>
          <h2 className="section-title">Давайте создавать новое вместе.</h2>
          <p>
            FU AI Club открыт к сотрудничеству с экспертами, технологическими компаниями, студенческими
            объединениями и другими университетами.
          </p>
          <p>
            Мы хотим объединять знания, практический опыт и новые идеи через совместные мероприятия,
            лекции, воркшопы и кейс-чемпионаты.
          </p>
          <p>
            Хотите выступить перед студентами, предложить практическую задачу или организовать совместное
            событие?
          </p>
          <button className="button button--outline" type="button" disabled title="Контакт появится после подтверждения адреса">
            Обсудить сотрудничество
            <span aria-hidden="true">↗</span>
          </button>
        </article>
      </div>
      <RibbonFragment className="ribbon-fragment ribbon-fragment--community" />
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

function RibbonFragment({ className }: { className: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Image src="/assets/hero-ribbon.png" alt="" fill sizes="360px" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__inner">
        <span className="site-footer__brand">FU AI Club</span>
        <span>Студенческое AI-сообщество Финансового университета.</span>
        <span>Исследуй. Создавай. Меняй.</span>
      </div>
    </footer>
  );
}

