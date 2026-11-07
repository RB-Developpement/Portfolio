"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import type { ProjectImage } from "@/lib/project-details";

export function ProjectGallery({ images, name }: { images: ProjectImage[]; name: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const current = images[active];
  if (!current) return null;
  const step = (offset: number) => setActive(index => (index + offset + images.length) % images.length);
  return (
    <>
      <div className="case-gallery">
        {images.map((image, index) => <figure key={image.src}>
          <button className="case-thumbnail" type="button" aria-label={`Agrandir : ${image.alt}`} onClick={() => { setActive(index); dialog.current?.showModal(); }}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes={index === 0 ? "90vw" : "(max-width: 700px) 90vw, 45vw"} />
            <span aria-hidden="true"><Expand size={16} /> Agrandir</span>
          </button>
          <figcaption>{image.caption}</figcaption>
        </figure>)}
      </div>
      <dialog ref={dialog} className="case-lightbox" aria-label={`Galerie ${name}`} onKeyDown={event => {
        if (event.key === "Tab") {
          const buttons = event.currentTarget.querySelectorAll<HTMLButtonElement>("button");
          const first = buttons[0];
          const last = buttons[buttons.length - 1];
          if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        }
        if (event.key === "ArrowRight") { event.preventDefault(); step(1); }
        if (event.key === "ArrowLeft") { event.preventDefault(); step(-1); }
      }}>
        <div className="case-lightbox-bar">
          <p>{name} <span aria-live="polite">— {active + 1} / {images.length}</span></p>
          <button type="button" autoFocus aria-label="Fermer la galerie" onClick={() => dialog.current?.close()}><X aria-hidden="true" size={22} /></button>
        </div>
        <Image src={current.src} alt={current.alt} width={current.width} height={current.height} sizes="95vw" />
        <p className="case-caption" aria-live="polite">{current.caption}</p>
        {images.length > 1 && <div className="case-lightbox-nav">
          <button type="button" onClick={() => step(-1)}><ArrowLeft size={18} aria-hidden="true" /> Précédente</button>
          <button type="button" onClick={() => step(1)}>Suivante <ArrowRight size={18} aria-hidden="true" /></button>
        </div>}
      </dialog>
    </>
  );
}
