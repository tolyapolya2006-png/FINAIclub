export const siteConfig = {
  name: "FU AI Club",
  telegramUrl: null as string | null,
};

export const navigation = [
  { label: "О клубе", href: "/#about" },
  { label: "Что мы делаем", href: "/#activities" },
  { label: "Мероприятия", href: "/events" },
  { label: "Сообщество", href: "/#community" },
  { label: "Партнёрство", href: "/#partners" },
] as const;

