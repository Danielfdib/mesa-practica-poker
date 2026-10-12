# Poker NL2 · Lecciones y mesa de práctica

Sitio para aprender poker NL Hold'em cash 6-max en micro límites (NL2–NL5):

- **Lecciones** — 8 lecciones (posición, pot odds, postflop, bankroll, revisión de manos, rangos y 3-bets, estadística y EV, estrategias de autores) con 3 ejercicios corregidos cada una, más las **reglas de oro**. El progreso se guarda en el navegador.
- **Mesa de práctica** — mesa 6-max (100bb) contra 5 bots: dos pagadores, un nit, un regular y un maníaco. Tu posición rota cada mano. Al final ves el resultado, VPIP/PFR, resultado por posición y las decisiones preflop fuera del plan.
- **Calculadoras** — rangos preflop en una grilla 13×13, outs y pot odds, bankroll y checklist antes de jugar.

**Probalo:** https://mesa-practica-poker.vercel.app

Sitio estático (HTML, CSS y JavaScript puro, sin dependencias ni build en Vercel).

## Cómo se arma

| Archivo | Origen |
|---|---|
| `index.html`, `lecciones.html`, `assets/` | Se editan a mano. El contenido del curso está en `assets/lecciones-data.js`. |
| `mesa.html` | Generado por `build.ps1` desde `../practica/mesa-practica.html` |
| `calculadoras.html` | Generado por `build.ps1` desde `../planillas/planillas-poker.html` |

`build.ps1` agrega a las páginas generadas la barra de navegación (`build/nav.html`) y el pie de Estudio Raíz (`build/credito.html`). No editar `mesa.html` ni `calculadoras.html` a mano.

> Herramienta educativa con fichas ficticias. No es asesoramiento para apostar. El poker con dinero real es solo para mayores de 18 años y donde sea legal.

---

Desarrollado por **[Estudio Raíz](https://estudio-raiz.vercel.app)** · San Miguel de Tucumán, Argentina.
