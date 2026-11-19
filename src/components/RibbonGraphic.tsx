import Image from "next/image";

export function RibbonGraphic() {
  return (
    <div className="ribbon-graphic" aria-hidden="true">
      <Image
        src="/assets/hero-ribbon.png"
        alt=""
        fill
        priority
        loading="eager"
        sizes="(max-width: 767px) 115vw, (max-width: 1280px) 64vw, 780px"
        className="ribbon-graphic__image"
      />
    </div>
  );
}

