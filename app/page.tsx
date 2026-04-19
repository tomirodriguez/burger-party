"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Hibiscus, Sparkle } from "./stitch";

type Medallon = "notco-pollo" | "notco-carne" | "vegetalex";

const medallones: Array<{ id: Medallon; marca: string; tipo: string; nota: string }> = [
  {
    id: "notco-pollo",
    marca: "NotCo",
    tipo: "Medallón de «pollo»",
    nota: "Crocante por fuera, plantil por dentro.",
  },
  {
    id: "notco-carne",
    marca: "NotCo",
    tipo: "Medallón de «carne»",
    nota: "Sabor res, conciencia tranquila.",
  },
  {
    id: "vegetalex",
    marca: "Vegetalex",
    tipo: "Medallón de carne vegetal",
    nota: "El caballito de batalla del Sr. anfitrión.",
  },
];

const requisitos = [
  {
    titulo: "Vestimenta estrictamente formal",
    detalle:
      "Se ruega a la Srta. Orellana presentarse ataviada con indumentaria de carácter formal. Se tolerará, como es habitual y ya debidamente documentado, el característico aroma corporal al que la concurrencia se encuentra ampliamente acostumbrada.",
  },
  {
    titulo: "Un (1) muñeco de Stitch",
    detalle:
      "Deberá exhibir al menos un (1) peluche de Stitch al momento del acceso. Su omisión será penalizada con una fotografía comprometedora tomada sin previo aviso, a discreción del anfitrión.",
  },
  {
    titulo: "Una (1) o más gomitas capilares",
    detalle:
      "Se exigen una o más gomitas de pelo. En caso de ausencia comprobada, la organización proveerá un broche capilar oficial sin costo adicional.",
  },
  {
    titulo: "Protocolo de higiene — transporte público",
    detalle:
      "Si la concurrencia se efectuara mediante transporte público, se solicita encarecidamente higienizarse de manera apropiada a su arribo, a fin de no propagar patógeno alguno entre los presentes.",
  },
];

export default function Page() {
  const [medallon, setMedallon] = useState<Medallon | "">("");
  const [postre, setPostre] = useState(false);
  const [almohada, setAlmohada] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const medallonElegido = useMemo(
    () => medallones.find((m) => m.id === medallon),
    [medallon],
  );

  const puedeConfirmar = medallon !== "" && almohada;

  const mensajeWhatsapp = useMemo(() => {
    if (!medallonElegido) return "";
    const lineas = [
      "Estimado anfitrión,",
      "",
      "Por medio de la presente confirmo formalmente mi asistencia — con pernoctada incluida — a la Burger Party del martes 21 de abril de 2026, en Casa de Pepi.",
      "",
      `Medallón seleccionado: ${medallonElegido.tipo} · ${medallonElegido.marca}.`,
      `Postre con restos de helado: ${postre ? "sí, asumo los riesgos bromatológicos" : "no, gracias"}.`,
      `Peaje almohadil para Hannah Montana: ${almohada ? "aceptado sin reservas" : "pendiente"}.`,
      "",
      "Me presentaré con vestimenta formal, al menos un peluche de Stitch y gomitas capilares reglamentarias.",
      "",
      "Ohana.",
      "— Jazmin Orellana",
    ];
    return lineas.join("\n");
  }, [medallonElegido, postre, almohada]);

  const waHref = `https://wa.me/5491124093583?text=${encodeURIComponent(mensajeWhatsapp)}`;

  return (
    <main className="relative mx-auto flex w-full max-w-[480px] flex-col gap-8 px-5 pb-24 pt-10">
      <Hibiscus className="pointer-events-none absolute -left-4 top-4 size-16 animate-float opacity-80" />
      <Hibiscus className="pointer-events-none absolute right-2 top-40 size-10 animate-float opacity-70" />
      <Sparkle className="pointer-events-none absolute right-6 top-10 size-5 animate-sparkle text-stitch-yellow" />
      <Sparkle className="pointer-events-none absolute left-8 top-72 size-4 animate-sparkle text-stitch-pink" />

      <header className="relative flex flex-col items-center gap-3 text-center">
        <span className="rounded-full border border-stitch-deep/30 bg-white/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-stitch-deep backdrop-blur">
          Invitación oficial
        </span>
        <div className="relative z-10 flex size-64 items-center justify-center rounded-full bg-gradient-to-br from-stitch-sky via-white to-stitch-rose shadow-[inset_0_0_40px_rgba(31,79,122,0.18),0_18px_40px_-16px_rgba(14,42,68,0.5)]">
          <Image
            src="/stitch.png"
            alt="Experimento 626 — Stitch"
            width={520}
            height={460}
            priority
            unoptimized
            className="block h-auto w-52 animate-float"
          />
          <span className="stamp absolute -right-1 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest">
            RSVP
          </span>
        </div>
        <h1 className="font-formal text-4xl font-bold leading-tight text-stitch-navy">
          Invitación Formal
        </h1>
        <p className="font-formal text-lg italic text-stitch-deep">
          Burger Party · Cena privada
        </p>
      </header>

      <section className="paper relative rounded-3xl p-6 text-[15px] leading-relaxed text-stitch-navy/90">
        <p className="font-formal text-base">Estimadísima señorita</p>
        <p className="font-formal text-3xl font-bold text-stitch-deep">
          Jazmin Orellana,
        </p>
        <p className="mt-4">
          Por medio de la presente misiva, y con el debido respeto que su
          persona amerita, tengo el honor de extenderle una cordial invitación
          a la <strong>cena privada de hamburguesas</strong> que se celebrará
          en mi humilde residencia.
        </p>
        <p className="mt-3">
          Se ruega la máxima seriedad en la lectura de los presentes términos,
          pese a la inocultable ridiculez de algunos de ellos.
        </p>
      </section>

      <section className="rounded-3xl border border-stitch-deep/15 bg-white/70 p-5 shadow-sm backdrop-blur">
        <h2 className="font-formal text-xl font-bold text-stitch-deep">
          Acto protocolar
        </h2>
        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
          <dt className="font-semibold">Fecha:</dt>
          <dd>Martes 21 de abril de 2026.</dd>
          <dt className="font-semibold">Hora:</dt>
          <dd>Cae la tarde, asciende el hambre (20 : qlo aprox.).</dd>
          <dt className="font-semibold">Lugar:</dt>
          <dd>Casa de Pepi.</dd>
          <dt className="font-semibold">Código:</dt>
          <dd>Formal, con al menos un peluche de Stitch.</dd>
          <dt className="font-semibold">Modalidad:</dt>
          <dd>
            Incluye pernoctada en las dependencias del anfitrión (cuarto
            compartido, no negociable).
          </dd>
        </dl>
      </section>

      <section className="rounded-3xl border border-stitch-deep/15 bg-stitch-sky/40 p-5">
        <h2 className="font-formal text-xl font-bold text-stitch-deep">
          Requisitos de ingreso
        </h2>
        <ol className="mt-4 space-y-4">
          {requisitos.map((r, i) => (
            <li key={r.titulo} className="flex gap-3">
              <span className="mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-stitch-deep text-xs font-bold text-stitch-cream">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-stitch-navy">{r.titulo}</p>
                <p className="text-sm text-stitch-navy/80">{r.detalle}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-3xl border border-stitch-pink/40 bg-white/80 p-5">
        <h2 className="font-formal text-xl font-bold text-stitch-deep">
          Minuta gastronómica
        </h2>
        <p className="mt-2 text-sm text-stitch-navy/80">
          Propuesta íntegramente a base de plantas. Se solicita a la comensal
          seleccionar, con antelación, el medallón de su preferencia:
        </p>
        <fieldset className="mt-4 space-y-3">
          <legend className="sr-only">Elección de medallón</legend>
          {medallones.map((m) => {
            const active = medallon === m.id;
            return (
              <label
                key={m.id}
                className={`flex cursor-pointer items-start gap-3 rounded-2xl border-2 p-3 transition ${
                  active
                    ? "border-stitch-pink bg-stitch-rose/30"
                    : "border-stitch-deep/15 bg-white hover:border-stitch-blue"
                }`}
              >
                <input
                  type="radio"
                  name="medallon"
                  value={m.id}
                  checked={active}
                  onChange={() => setMedallon(m.id)}
                  className="mt-1 size-4 accent-stitch-pink"
                />
                <div>
                  <p className="font-semibold text-stitch-navy">
                    {m.tipo}{" "}
                    <span className="text-stitch-deep">· {m.marca}</span>
                  </p>
                  <p className="text-xs text-stitch-navy/70">{m.nota}</p>
                </div>
              </label>
            );
          })}
        </fieldset>

        <div className="mt-5 rounded-2xl bg-stitch-sand/60 p-4 text-sm">
          <p className="font-semibold text-stitch-deep">
            Guarnición estándar incluida:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-stitch-navy/85">
            <li>
              Queso cheddar <em>Felices las Vacas</em> (sin vaca triste alguna).
            </li>
            <li>Lechuga fresca, lavada con agua corriente y dignidad.</li>
            <li>Tomate en rodaja, maduro pero compuesto.</li>
            <li>
              Pan de papa <strong>— para mayor placer</strong>.
            </li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-stitch-yellow/60 bg-stitch-yellow/20 p-5">
        <h2 className="font-formal text-xl font-bold text-stitch-deep">
          Aperitivo de postre (opcional)
        </h2>
        <p className="mt-2 text-sm text-stitch-navy/85">
          De solicitarse con antelación formal, podrá disponerse de un aperitivo
          dulce al cierre de la velada. Se comunica, en ánimo de absoluta
          transparencia, que entre los insumos disponibles se hallan los{" "}
          <strong>
            restos de un cuarto (¼) de helado oficialmente en proceso de
            putrefacción
          </strong>
          , los cuales — pese a su estado — conservan plena utilidad simbólica.
        </p>
        <label className="mt-4 flex items-start gap-3 rounded-2xl bg-white/80 p-3">
          <input
            type="checkbox"
            checked={postre}
            onChange={(e) => setPostre(e.target.checked)}
            className="mt-1 size-4 accent-stitch-pink"
          />
          <span className="text-sm">
            Sí, solicito formalmente un postre. Asumo los riesgos bromatológicos.
          </span>
        </label>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-stitch-deep to-stitch-navy p-5 text-stitch-cream">
        <div className="flex items-start gap-3">
          <Sparkle className="mt-1 size-5 animate-sparkle text-stitch-yellow" />
          <div>
            <h2 className="font-formal text-xl font-bold">
              Función estelar nocturna
            </h2>
            <p className="mt-2 text-sm text-stitch-cream/90">
              Transmisión oficial de{" "}
              <strong>«Hannah Montana: Especial 20.° Aniversario»</strong>, a
              disfrutarse desde el sillón mayor del living.
            </p>
            <p className="mt-3 rounded-xl bg-white/10 p-3 text-sm italic">
              Peaje de acceso: ofrendar su cuerpo en calidad de almohada humana
              al anfitrión durante el total de la transmisión. Arancel no
              negociable.
            </p>
            <label className="mt-4 flex items-start gap-3 rounded-2xl bg-white/10 p-3">
              <input
                type="checkbox"
                checked={almohada}
                onChange={(e) => setAlmohada(e.target.checked)}
                className="mt-1 size-4 accent-stitch-pink"
              />
              <span className="text-sm">
                Acepto el peaje almohadil y sus condiciones de uso.
              </span>
            </label>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-dashed border-stitch-deep/30 bg-white/70 p-5 text-sm">
        <h2 className="font-formal text-lg font-bold text-stitch-deep">
          Cláusulas adicionales (letra chica pero importante)
        </h2>
        <ul className="mt-3 space-y-2 text-stitch-navy/85">
          <li>
            · El anfitrión se reserva el derecho de admisión, especialmente si
            la comensal arribara sin el preceptivo peluche.
          </li>
          <li>
            · La pernoctada incluye desayuno consistente en café y tostadas
            con manteca de maní. Cualquier adición al menú matutino deberá
            solicitarse con la debida anticipación formal.
          </li>
          <li>
            · No se proveen cepillos de higiene bucal. La invitada deberá
            aportar el propio, el cual deberá ingresar al domicilio dentro de
            un casco protector apropiado a fin de evitar cualquier
            contaminación cruzada.
          </li>
          <li>
            · Respecto de la prenda para pernoctar: en caso de no contar con
            pijama propio, el anfitrión proveerá una remera agujereada como
            reemplazo de emergencia.
          </li>
          <li>
            · La organización declina toda responsabilidad respecto de los
            pelos de Pepi que pudieran adherirse a la vestimenta formal de la
            comensal durante o después del evento. Se sugiere rodillo adhesivo
            propio.
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-stitch-pink/50 bg-stitch-rose/30 p-5">
        <h2 className="font-formal text-xl font-bold text-stitch-deep">
          Confirmación de asistencia
        </h2>
        <p className="mt-2 text-sm text-stitch-navy/85">
          La Srta. Orellana tendrá a bien confirmar su presencia pulsando el
          botón infra. Requisitos inexcusables: <strong>elegir medallón</strong>{" "}
          y <strong>aceptar el peaje almohadil</strong>. Al confirmar, se abrirá
          WhatsApp con la comunicación oficial pre-redactada.
        </p>

        <ul className="mt-3 space-y-1 text-xs text-stitch-navy/70">
          <li>
            {medallon ? "✓" : "·"} Medallón {medallon ? "seleccionado" : "sin seleccionar"}
          </li>
          <li>
            {almohada ? "✓" : "·"} Peaje almohadil{" "}
            {almohada ? "aceptado" : "pendiente"}
          </li>
        </ul>

        {puedeConfirmar ? (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setEnviado(true)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-stitch-leaf px-4 py-3 text-base font-bold text-stitch-cream shadow-lg transition active:scale-95"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="currentColor"
              aria-hidden
            >
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L0 24l6.35-1.66a11.88 11.88 0 0 0 5.7 1.45h.01c6.56 0 11.89-5.33 11.89-11.88 0-3.17-1.24-6.15-3.43-8.43Zm-8.46 18.3h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.77.99 1-3.68-.23-.38a9.9 9.9 0 0 1-1.52-5.24c0-5.46 4.45-9.91 9.92-9.91 2.65 0 5.14 1.03 7.01 2.91a9.87 9.87 0 0 1 2.9 7.01c0 5.46-4.45 9.9-9.91 9.9Zm5.44-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.48.71.31 1.27.49 1.7.63.71.23 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            {enviado ? "Reabrir WhatsApp" : "Confirmar vía WhatsApp"}
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="mt-4 w-full cursor-not-allowed rounded-2xl bg-stitch-navy/20 px-4 py-3 text-base font-bold text-stitch-navy/60"
          >
            {medallon === ""
              ? "Antes elegí medallón, Jaz"
              : "Falta aceptar el peaje almohadil"}
          </button>
        )}

        {enviado && (
          <p className="mt-3 text-center text-xs text-stitch-navy/70">
            Mensaje cargado. Pulsá «Enviar» dentro de WhatsApp para
            formalizar.
          </p>
        )}
      </section>

      <footer className="mt-4 flex flex-col items-center gap-2 text-center">
        <Sparkle className="size-4 animate-sparkle text-stitch-pink" />
        <p className="font-formal text-sm italic text-stitch-deep">
          «Ohana significa familia. Familia significa que nadie se queda sin
          hamburguesa.»
        </p>
        <p className="text-[11px] uppercase tracking-[0.3em] text-stitch-navy/60">
          Anfitrión — Experimento 627
        </p>
      </footer>
    </main>
  );
}
