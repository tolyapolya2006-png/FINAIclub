"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation, siteConfig } from "@/config/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" onClick={() => setMenuOpen(false)}>
          <span className="brand__name">FU AI Club</span>
        </Link>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <CommunityCta compact />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        id="mobile-navigation"
        aria-label="Мобильная навигация"
      >
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <CommunityCta />
      </nav>
    </header>
  );
}

function CommunityCta({ compact = false }: { compact?: boolean }) {
  const label = "Присоединиться к сообществу";

  if (!siteConfig.telegramUrl) {
    return (
      <button
        className={`button button--dark${compact ? " button--compact" : ""}`}
        type="button"
        disabled
        title="Ссылка на сообщество появится после подтверждения канала"
        aria-label={`${label}. Ссылка пока не настроена`}
      >
        {compact ? "Присоединиться" : label}
        <span aria-hidden="true">↗</span>
      </button>
    );
  }

  return (
    <a
      className={`button button--dark${compact ? " button--compact" : ""}`}
      href={siteConfig.telegramUrl}
      target="_blank"
      rel="noreferrer"
    >
      {compact ? "Присоединиться" : label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

