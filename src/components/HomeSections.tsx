import { siteConfig } from "@/config/site";
import { ActivitiesGrid } from "@/components/ActivitiesGrid";
import Image from "next/image";

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
          <span><b>01</b>Открыто для всех</span>
          <span><b>02</b>Практика и эксперименты</span>
          <span><b>03</b>Свобода участия</span>
          <span><b>04</b>Обмен знаниями</span>
        </div>
      </div>
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
        <ActivitiesGrid activities={activities} />
      </div>
    </section>
  );
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
          <RibbonFragment variant="partnership" />
        </article>
      </div>
    </section>
  );
}

function RibbonFragment({ variant }: { variant: "partnership" }) {
  return (
    <div className={`ribbon-fragment ribbon-fragment--${variant}`} aria-hidden="true">
      <Image
        src="/assets/partnership-ribbon.png"
        alt=""
        width={1881}
        height={836}
        sizes="(max-width: 900px) 320px, 460px"
        className="ribbon-fragment__image"
      />
    </div>
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

