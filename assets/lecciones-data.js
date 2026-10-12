/* Contenido del curso. Cada lección: texto (HTML) + ejercicios con corrección.
   Fuente: ../lecciones/*.md y ../reglas-aprendidas.md (adaptados para el público). */
window.LECCIONES = [
  {
    id: 1,
    icono: "🪑",
    titulo: "Posición y rangos de apertura",
    resumen: "Por qué el lugar en la mesa decide qué manos jugar, y qué abrir desde cada posición.",
    minutos: 8,
    html: `
      <h3>Por qué cash 6-max NL2</h3>
      <ul>
        <li>Más manos por hora → aprendés más rápido.</li>
        <li>Menos varianza que los torneos.</li>
        <li>La base sirve después para torneos (MTT) y Spin &amp; Go.</li>
        <li>Bankroll mínimo: <b>30–40 buy-ins</b> (NL2 = buy-in de $2 → $60–80).</li>
      </ul>

      <h3>La posición</h3>
      <p>Actuar último en cada calle es <b>información gratis</b>: ves qué hicieron los demás antes de decidir.
      Por eso desde las primeras posiciones se juegan pocas manos y desde el botón, muchas.</p>
      <p class="pill-row"><span class="pill">UTG</span>→<span class="pill">MP</span>→<span class="pill">CO</span>→<span class="pill">BTN</span>→<span class="pill">SB</span>→<span class="pill">BB</span></p>

      <h3>Rangos de apertura (nadie entró antes) — subir a 2.5bb</h3>
      <div class="tabla"><table>
        <tr><th>UTG</th><td>77+, ATs+, KJs+, QJs, JTs, AJo+, KQo</td></tr>
        <tr><th>MP</th><td>55+, A8s+, A5s, KTs+, QTs+, JTs, T9s, ATo+, KJo+</td></tr>
        <tr><th>CO</th><td>22+, A2s+, K9s+, Q9s+, J9s+, T9s, 98s, 87s, ATo+, KTo+, QJo</td></tr>
        <tr><th>BTN</th><td>22+, A2s+, K5s+, Q8s+, J8s+, T8s+, 97s+, 86s+, 76s, 65s, A7o+, K9o+, Q9o+, J9o+, T9o</td></tr>
        <tr><th>SB</th><td>≈ el rango del CO, subiendo a 3bb</td></tr>
      </table></div>
      <p class="nota"><b>Notación:</b> s = suited (mismo palo), o = offsuit, + = incluye las más altas (ATs+ = ATs, AJs, AQs, AKs).
      Mirá los rangos en colores en <a href="calculadoras">Calculadoras</a>.</p>

      <h3>Si alguien ya subió (versión simple)</h3>
      <ul>
        <li><b>3-bet</b> con QQ+ y AK.</li>
        <li><b>Pagar</b> con JJ–88 y AQs, solo en posición.</li>
        <li><b>Tirar</b> el resto.</li>
      </ul>

      <h3>Errores típicos</h3>
      <ol>
        <li>Limpear (entrar pagando la ciega) cuando nadie entró: subí o tirá.</li>
        <li>Jugar manos “lindas” como K7o o J5s.</li>
        <li>Jugar igual en todas las posiciones.</li>
      </ol>`,
    quiz: [
      {
        q: "Estás UTG con A9o y nadie entró. ¿Qué hacés?",
        ops: ["Subo a 2.5bb", "Pago la ciega (limp)", "Tiro"],
        ok: 2,
        por: "A9o no está en el rango de UTG. Desde ahí te pagan manos fuertes que te dominan: AJ, AQ, AK."
      },
      {
        q: "Estás en el BTN con Q9s y todos tiraron. ¿Qué hacés?",
        ops: ["Subo a 2.5bb", "Tiro", "Limpeo para ver el flop barato"],
        ok: 0,
        por: "Q9s está en el rango del botón. Abrís para robar las ciegas y jugar el resto de la mano con posición."
      },
      {
        q: "CO con TT y UTG ya subió. Según el plan simple:",
        ops: ["Tiro", "Pago en posición", "All-in"],
        ok: 1,
        por: "Con JJ–88 se paga en posición. Un 3-bet también existe, pero pagar está bien y es lo más simple."
      }
    ]
  },
  {
    id: 2,
    icono: "🧮",
    titulo: "Outs y pot odds",
    resumen: "La cuenta que decide si pagar una apuesta con un proyecto.",
    minutos: 8,
    html: `
      <p class="destacado">Pregunta central: <b>¿me conviene pagar esta apuesta con una mano que todavía no está hecha?</b></p>

      <h3>Outs: las cartas que te dan la mejor mano</h3>
      <div class="tabla"><table>
        <tr><th>Proyecto</th><th>Ejemplo</th><th>Outs</th></tr>
        <tr><td>Color</td><td>4 cartas del mismo palo</td><td>9</td></tr>
        <tr><td>Escalera abierta (OESD)</td><td>8-7 en 9-6-x</td><td>8</td></tr>
        <tr><td>Gutshot (escalera por dentro)</td><td>9-8 en J-T-x (necesitás la Q)</td><td>4</td></tr>
        <tr><td>Dos sobrecartas</td><td>AK en 8-5-2</td><td>6 (no siempre alcanzan)</td></tr>
        <tr><td>Color + escalera abierta</td><td></td><td>15</td></tr>
      </table></div>

      <h3>Regla del 2 y del 4</h3>
      <ul>
        <li>Una carta por venir: <b>outs × 2</b> = % aproximado.</li>
        <li>Dos cartas por venir (solo si estás all-in en el flop): <b>outs × 4</b>.</li>
        <li>Ejemplo: color en el turn = 9 × 2 ≈ 18% (exacto: 19.6%).</li>
      </ul>

      <h3>Pot odds</h3>
      <p class="formula">Equity necesaria = lo que pagás ÷ (bote + apuesta del rival + lo que pagás)</p>
      <div class="tabla"><table>
        <tr><th>Apuesta del rival</th><th>Equity necesaria</th></tr>
        <tr><td>1/4 del bote</td><td>16.7%</td></tr>
        <tr><td>1/3 del bote</td><td>20%</td></tr>
        <tr><td>1/2 del bote</td><td>25%</td></tr>
        <tr><td>2/3 del bote</td><td>29%</td></tr>
        <tr><td>Bote completo</td><td>33%</td></tr>
      </table></div>
      <p class="destacado"><b>Regla:</b> si tu equity es <b>mayor</b> que la necesaria, pagás. Si es menor, tirás. No inviertas la comparación.</p>

      <h3>Implied odds</h3>
      <p>A veces se paga aunque la cuenta no alcance, porque si ligás vas a cobrar más después (proyectos escondidos, rivales que pagan mucho). Usalo con moderación.</p>`,
    quiz: [
      {
        q: "Tenés 8♥7♥ en un flop 9♠6♦2♣. ¿Cuántos outs tenés para escalera?",
        ops: ["4", "8", "9"],
        ok: 1,
        por: "Escalera abierta: te sirve cualquier T o cualquier 5 → 8 outs."
      },
      {
        q: "Turn: bote $8, el rival apuesta $4 y tenés proyecto de color (9 outs). ¿Pagás?",
        ops: ["Pago: 18% alcanza", "Tiro: necesito 25% y tengo ~18%", "Subo de farol"],
        ok: 1,
        por: "Necesaria = 4 ÷ (8 + 4 + 4) = 25%. Tenés 9 × 2 ≈ 18%. Es menor → tirás (salvo implied odds muy claras)."
      },
      {
        q: "Turn: bote $12, apuesta $3, tenés escalera abierta. ¿Cuál es la cuenta correcta?",
        ops: ["18% vs 20% → pago", "16% vs 16.7% → casi justo; exacto 17.4% > 16.7% → pago", "32% vs 25% → pago fácil"],
        ok: 1,
        por: "8 × 2 = 16% (exacto 17.4%). La apuesta es 1/4 del bote: 3 ÷ (12 + 3 + 3) = 16.7%. 17.4% > 16.7% → call justo pero rentable. Ojo: 8 × 2 es 16, no 18."
      }
    ]
  },
  {
    id: 3,
    icono: "🃏",
    titulo: "Juego postflop básico",
    resumen: "Para qué apostar, cómo leer la textura del board y cómo ganarles a los rivales de límites bajos.",
    minutos: 7,
    html: `
      <h3>Razones para apostar</h3>
      <ul>
        <li><b>Valor:</b> te pagan manos peores.</li>
        <li><b>Farol:</b> se tiran manos mejores.</li>
        <li><b>Protección:</b> que el proyecto del rival pague caro por ver la próxima carta.</li>
      </ul>
      <p class="destacado">Si no es ninguna de esas, <b>pasá</b>. Ejemplo: con una pareja media en el river, si apostás solo te pagan manos que te ganan.</p>

      <h3>Continuation bet (c-bet) según la textura</h3>
      <div class="tabla"><table>
        <tr><th>Board</th><th>Ejemplo</th><th>Favorece a</th><th>Si subiste preflop</th></tr>
        <tr><td>Seco</td><td>K♣ 7♦ 2♥</td><td>Al que subió</td><td>C-bet frecuente y chica (1/3)</td></tr>
        <tr><td>Mojado</td><td>9♠ 8♠ 7♥</td><td>Al que pagó</td><td>Menos seguido; con manos fuertes, 2/3</td></tr>
        <tr><td>2+ rivales</td><td>—</td><td>—</td><td>Mucho menos, casi solo con manos buenas</td></tr>
      </table></div>

      <h3>Semi-farol</h3>
      <p>Si vas a farolear, que sea con proyecto: si te pagan, igual podés ligar.</p>

      <h3>Cómo ganarles en NL2/NL5</h3>
      <ul>
        <li>Apostá por valor más seguido y más grande (top pair con buen kicker: tres calles).</li>
        <li>Faroleá menos, sobre todo en el river.</li>
        <li>Si un jugador pasivo sube fuerte en turn o river, casi siempre tiene la mano. Con una pareja, tirá.</li>
      </ul>`,
    quiz: [
      {
        q: "BTN con A♠Q♦ contra la BB. Flop K♣7♦2♥ y la BB pasa. ¿Qué hacés?",
        ops: ["Apuesto 1/3 del bote", "Paso", "Apuesto el bote"],
        ok: 0,
        por: "Board seco que favorece al que subió preflop: c-bet chica y frecuente."
      },
      {
        q: "UTG con A♣A♦ contra el BTN. Flop 9♠8♠7♥. ¿Qué hacés?",
        ops: ["Paso para que apueste él (slowplay)", "Apuesto 2/3 o 3/4 del bote", "Me retiro"],
        ok: 1,
        por: "Board mojado con muchísimos proyectos: no des carta gratis. Contra pasivos, pasar además pierde una calle de valor. Mojado = apostar menos seguido, pero más grande con manos fuertes."
      },
      {
        q: "BB con 5♥5♣. Flop A♠K♦Q♣ y el BTN apuesta 1/3. ¿Qué hacés?",
        ops: ["Pago para ligar el trío", "Subo", "Tiro"],
        ok: 2,
        por: "Tenés 2 outs (~4%) y necesitás 20%. Además, aun ligando el trío podés perder contra JT (escalera)."
      }
    ]
  },
  {
    id: 4,
    icono: "🏦",
    titulo: "Bankroll y tilt",
    resumen: "Cuánta plata hace falta, cuándo subir o bajar de límite y cómo cortar a tiempo.",
    minutos: 6,
    html: `
      <h3>Bankroll: plata solo para poker</h3>
      <div class="tabla"><table>
        <tr><th>Formato</th><th>Buy-ins mínimos</th></tr>
        <tr><td>Cash (NL2, NL5…)</td><td>30–40</td></tr>
        <tr><td>Spin &amp; Go</td><td>100+</td></tr>
        <tr><td>Torneos (MTT)</td><td>100–200</td></tr>
      </table></div>
      <ul>
        <li><b>Subir</b> de límite con ~40 buy-ins del límite siguiente (NL5 = $200).</li>
        <li><b>Bajar</b> con menos de ~25 buy-ins del límite actual.</li>
        <li>Nunca depositar para recuperar pérdidas.</li>
      </ul>

      <h3>Varianza</h3>
      <ul>
        <li>Un ganador puede perder 10–20 buy-ins seguidos sin jugar mal.</li>
        <li>Hacen falta decenas de miles de manos para saber si ganás: 2.000 manos no dicen nada.</li>
        <li><b>Juzgá decisiones, no resultados.</b></li>
      </ul>

      <h3>Tilt</h3>
      <p>Causas: bad beats, rachas, cansancio, euforia.</p>
      <ul>
        <li><b>Stop-loss:</b> 3 buy-ins perdidos → la sesión terminó. Sin excepciones.</li>
        <li>Sesiones de 60–90 minutos con pausa.</li>
        <li>Nada de jugar cansado, enojado o con alcohol.</li>
        <li>1–2 mesas al principio.</li>
        <li>Anotá las manos dudosas para revisarlas después.</li>
      </ul>

      <h3>Juego responsable</h3>
      <p>Configurá límites de depósito y de tiempo en la sala <b>antes</b> del primer depósito. El poker con dinero real es solo para mayores de edad y donde sea legal.</p>`,
    quiz: [
      {
        q: "Tenés $100 para poker. ¿Qué límite de cash jugás?",
        ops: ["NL5 (20 buy-ins)", "NL2 (50 buy-ins) con stop-loss de 3 buy-ins", "NL10 para crecer rápido"],
        ok: 1,
        por: "$100 son 50 buy-ins de NL2: margen de sobra. En NL5 serían solo 20, por debajo del mínimo."
      },
      {
        q: "Perdiste 3 buy-ins en 20 minutos y querés recuperarlos. ¿Qué hacés?",
        ops: ["Pausa de 5 minutos y sigo", "Subo de límite para recuperar más rápido", "La sesión terminó por hoy"],
        ok: 2,
        por: "Llegaste al stop-loss: no es una pausa, es el final de la sesión."
      },
      {
        q: "Llevás 2.000 manos con +12 buy-ins en NL2 ($124 en total). ¿Subís a NL5?",
        ops: ["Sí, ya demostré que gano", "Todavía no: necesito ~$200 y la muestra es chica", "Sí, pero solo una mesa"],
        ok: 1,
        por: "Para NL5 hacen falta ~40 buy-ins ($200). Y 2.000 manos son una muestra muy chica para concluir algo."
      }
    ]
  },
  {
    id: 5,
    icono: "🔍",
    titulo: "Revisión de manos y herramientas",
    resumen: "El método de 5 pasos para aprender de cada sesión y qué software sirve (y cuál está prohibido).",
    minutos: 7,
    html: `
      <p class="destacado">Al principio: <b>50% jugar, 50% estudiar.</b></p>

      <h3>Método de 5 pasos (3–5 manos por sesión)</h3>
      <ol>
        <li><b>Contexto:</b> posiciones, stacks, tipo de rival.</li>
        <li><b>Preflop:</b> ¿la mano estaba en mi rango?</li>
        <li><b>Rango del rival</b> en cada calle.</li>
        <li><b>Objetivo de cada apuesta:</b> valor, farol o ninguno. ¿El tamaño tenía sentido?</li>
        <li><b>Conclusión en una línea</b> → a tu lista de reglas (como las <a href="#reglas">Reglas de oro</a>).</li>
      </ol>

      <h3>Herramientas</h3>
      <div class="tabla"><table>
        <tr><th>Tipo</th><th>Para qué</th><th>Ejemplos</th></tr>
        <tr><td>Calculadora de equity</td><td>Tu equity contra un rango</td><td>Equilab (gratis), Flopzilla</td></tr>
        <tr><td>Tracker</td><td>Guardar manos y estadísticas</td><td>PokerTracker 4, Hold'em Manager 3</td></tr>
        <tr><td>Estudio GTO</td><td>La jugada teórica</td><td>GTO Wizard</td></tr>
        <tr><td>Historial de manos</td><td>Revisar la mano</td><td>Desde el cliente de la sala</td></tr>
      </table></div>
      <p class="aviso">⚠️ Revisá la lista de software permitido de cada sala. Algunas (por ejemplo WPT Global y GGPoker) prohíben trackers y HUDs de terceros. Usar algo prohibido puede cerrar la cuenta.</p>

      <h3>Rutina semanal</h3>
      <ul>
        <li>3–4 sesiones de 60–90 minutos, 1–2 mesas.</li>
        <li>20 minutos de revisión después de cada sesión.</li>
        <li>1 hora semanal de un tema.</li>
        <li>Registro: fecha, manos, resultado y conclusión.</li>
      </ul>

      <h3>Mano para revisar</h3>
      <p>NL2 6-max, 100bb. El BTN es un jugador pasivo que paga mucho.</p>
      <ul class="mano">
        <li><b>Pre:</b> CO K♠J♠ abre 2.5bb, BTN paga.</li>
        <li><b>Flop</b> J♦8♣3♥ (bote 6.5bb): apostás 1/3, paga.</li>
        <li><b>Turn</b> 2♠: apostás 2/3, paga.</li>
        <li><b>River</b> Q♥: pasás y el BTN apuesta el bote.</li>
      </ul>`,
    quiz: [
      {
        q: "Contra este pagador, ¿qué tamaño convenía en flop y turn?",
        ops: ["1/3 para que pague seguro", "2/3 en ambas calles", "Pasar para inducir"],
        ok: 1,
        por: "Contra pagadores: valor grande. 2/3 cobra más de todas las manos peores que igual van a pagar."
      },
      {
        q: "En el river, ¿qué tiene el BTN cuando apuesta el bote?",
        ops: ["Muchos faroles", "Manos como T9 (escalera), QJ/J8/J3 (dobles), 88/33 (tríos), QT, AJ", "Siempre un proyecto fallado"],
        ok: 1,
        por: "Un pasivo que apuesta el bote en el river casi nunca farolea: el rango está lleno de manos que te ganan."
      },
      {
        q: "¿Pagás con K♠J♠?",
        ops: ["Pago: tengo la pareja más alta y no hay color", "Tiro", "Subo all-in"],
        ok: 1,
        por: "Con la Q en el board ya no tenés la pareja más alta. Pasivo + apuesta del bote = mano fuerte; necesitás 33% y casi ninguna mano peor apuesta así."
      }
    ]
  },
  {
    id: 6,
    icono: "🎯",
    titulo: "Rangos del rival y 3-bets",
    resumen: "Pensar en rangos, reconocer cada tipo de rival y cuándo re-subir preflop.",
    minutos: 8,
    html: `
      <h3>Pensar en rangos</h3>
      <p>Nunca le pongas una sola mano al rival. Empezá con todo lo que podría tener y descartá calle por calle:</p>
      <ul>
        <li>¿Qué abre o paga desde esa posición?</li>
        <li>¿Qué paga o sube en este board?</li>
        <li>¿Qué llega al river y apuesta así?</li>
      </ul>

      <h3>Tipos de jugador en límites bajos</h3>
      <div class="tabla"><table>
        <tr><th>Tipo</th><th>Cómo se reconoce</th><th>Cómo jugarle</th></tr>
        <tr><td>Pagador</td><td>Juega muchas manos y paga todo</td><td>Valor grande y seguido; casi nunca farolear</td></tr>
        <tr><td>Nit</td><td>Juega poquísimas</td><td>Robar ciegas; si sube, creerle y tirar</td></tr>
        <tr><td>Regular (TAG)</td><td>Pocas manos pero agresivo</td><td>Rangos estándar; evitar guerras de ego</td></tr>
        <tr><td>Maníaco</td><td>Sube y apuesta todo</td><td>Esperar manos buenas y dejarlo apostar</td></tr>
      </table></div>
      <p>Usá las notas de la sala para marcar a cada rival. La mesa de práctica tiene uno de cada uno.</p>

      <h3>3-bets</h3>
      <ul>
        <li><b>Valor:</b> QQ+ y AK siempre; contra CO/BTN sumá JJ, TT, AQ.</li>
        <li><b>Farol:</b> A5s, A4s (bloquean AA/AK y pueden ligar).</li>
        <li><b>Tamaño:</b> 3× la apertura en posición, 4× fuera de posición.</li>
        <li>Contra pagadores: solo por valor. Contra nits y regulares: sumá faroles.</li>
      </ul>

      <h3>Si te hacen 3-bet</h3>
      <ul>
        <li><b>4-bet:</b> KK+ y AK. Tamaño ≈ 2.2–2.5× el 3-bet.</li>
        <li><b>Pagar:</b> QQ–TT, AQs, KQs, QJs en posición.</li>
        <li><b>Tirar:</b> el resto.</li>
      </ul>

      <h3>Checklist antes de jugar</h3>
      <ul class="check">
        <li>Descansado, sin alcohol ni enojo</li>
        <li>Bankroll ≥ 30 buy-ins del límite</li>
        <li>Stop-loss de 3 buy-ins, sesión de 60–90 min</li>
        <li>1–2 mesas</li>
        <li>Tabla de rangos a mano</li>
        <li>Anotar 3–5 manos para revisar</li>
      </ul>
      <p class="destacado"><b>Foco de las primeras 5.000 manos:</b> respetar los rangos preflop, valor fuerte contra pagadores y tirar cuando un pasivo se pone agresivo en el river.</p>`,
    quiz: [
      {
        q: "Un rival juega el 45% de las manos y paga casi todo. ¿Cómo le jugás?",
        ops: ["Faroles grandes para que tire", "Valor grande en tres calles, cero faroles; si sube, creerle", "Evitarlo siempre"],
        ok: 1,
        por: "Es un pagador: su error es pagar de más. Le ganás apostando por valor (incluso con manos medias) y sin farolear."
      },
      {
        q: "Un regular tight abre 2.5bb desde el CO. Estás en el BTN con A♠5♠. ¿Qué hacés y de cuánto?",
        ops: ["Pago", "3-bet de farol a 7.5bb", "3-bet a 15bb"],
        ok: 1,
        por: "A5s es el farol ideal (bloquea AA y AK). En posición el tamaño es 3× la apertura: 7.5bb."
      },
      {
        q: "BTN con J♥T♥ y la BB, un nit, te hace 3-bet a 10bb. ¿Qué hacés?",
        ops: ["Pago para ver el flop", "4-bet de farol", "Tiro"],
        ok: 2,
        por: "Un nit que hace 3-bet tiene QQ+ o AK. JT está muy atrás: tirá."
      }
    ]
  },
  {
    id: 7,
    icono: "📈",
    titulo: "Estadística y EV: por qué este plan gana",
    resumen: "Varianza, equity, valor esperado y el error matemático de cada tipo de rival.",
    minutos: 10,
    html: `
      <h3>1. Un ejemplo real: errores vs mala suerte</h3>
      <p>Cuatro sesiones de práctica de un alumno (120 manos):</p>
      <div class="tabla"><table>
        <tr><th>Sesión</th><th>Resultado real</th><th>Siguiendo el plan (estimado)</th></tr>
        <tr><td>#1</td><td>−120.3bb</td><td>≈ −41bb</td></tr>
        <tr><td>#2</td><td>−110.2bb</td><td>≈ −40bb</td></tr>
        <tr><td>#3</td><td>−110.1bb</td><td>≈ +19bb</td></tr>
        <tr><td>#4</td><td>−47.3bb</td><td>≈ −21bb</td></tr>
        <tr><th>Total</th><th>−388bb</th><th>≈ −83bb</th></tr>
      </table></div>
      <ul>
        <li>El desvío típico en cash 6-max es ≈ 90bb cada 100 manos → en 120 manos, ≈ ±99bb.</li>
        <li>−388bb está a ~4 desvíos: <b>no es mala suerte, son errores de decisión</b>.</li>
        <li>−83bb está a ~0.8 desvíos: varianza normal.</li>
      </ul>

      <h3>2. Probabilidad de ir perdiendo siendo ganador</h3>
      <p>Jugador que gana +5bb/100 con desvío de 90bb/100:</p>
      <div class="tabla"><table>
        <tr><th>Manos</th><th>Ganancia esperada</th><th>P(ir perdiendo)</th></tr>
        <tr><td>30</td><td>+1.5bb</td><td>49%</td></tr>
        <tr><td>1.000</td><td>+50bb</td><td>43%</td></tr>
        <tr><td>10.000</td><td>+500bb</td><td>29%</td></tr>
        <tr><td>50.000</td><td>+2.500bb</td><td>11%</td></tr>
        <tr><td>100.000</td><td>+5.000bb</td><td>4%</td></tr>
      </table></div>
      <p>Perder la mayoría de las manos es normal: se pierde poco y seguido, y se gana menos seguido pero en botes grandes.</p>

      <h3>3. Equity: por qué importan la posición y la dominación</h3>
      <div class="tabla"><table>
        <tr><th>Mano</th><th>vs 1 al azar</th><th>vs rango fuerte (UTG)</th><th>vs 2 al azar</th></tr>
        <tr><td>AA</td><td>85%</td><td>~82%</td><td>73%</td></tr>
        <tr><td>AKo</td><td>66%</td><td>57%</td><td>49%</td></tr>
        <tr><td>AJo</td><td>63%</td><td>42%</td><td>46%</td></tr>
        <tr><td>K9s</td><td>60%</td><td>36%</td><td>44%</td></tr>
        <tr><td>A5o</td><td>58%</td><td>36%</td><td>38%</td></tr>
        <tr><td>44</td><td>57%</td><td>41%</td><td>37%</td></tr>
        <tr><td>J9o</td><td>53%</td><td>30%</td><td>35%</td></tr>
        <tr><td>72o</td><td>35%</td><td>24%</td><td>22%</td></tr>
      </table></div>
      <ul>
        <li><b>Posición:</b> desde el BTN peleás contra las ciegas (≈ manos al azar) → J9o abre. Desde UTG te pagan manos fuertes → J9o se tira.</li>
        <li><b>Dominación:</b> A5o parece buena, pero contra manos fuertes cae al 36%.</li>
        <li><b>Multiway:</b> con 2 rivales hasta AKo baja del 50% → no apuestes sin mano.</li>
      </ul>

      <h3>4. La agresión gana de dos formas</h3>
      <p class="formula">Folds necesarios para que un farol gane = apuesta ÷ (bote + apuesta)</p>
      <p>Medio bote: 33%. Bote completo: 50%. Robo desde el BTN: arriesgás 2.5bb para ganar 1.5bb → necesitás 62.5% de folds.
      Con 70%: EV = 0.70 × 1.5 − 0.30 × 2.5 = <b>+0.3bb</b>, más la equity cuando te pagan.</p>
      <p>Tirar tiene EV 0, pero las ciegas cuestan 25bb cada 100 manos: jugar demasiado cerrado también pierde.</p>

      <h3>5. El error matemático de cada rival</h3>
      <p class="formula">EV de pagar una apuesta del bote = bote × (3 × P(ganar) − 1) → necesitás más de 33%</p>
      <div class="tabla"><table>
        <tr><th>Tipo</th><th>Error</th><th>Cómo ganarle</th></tr>
        <tr><td>Pagador</td><td>Paga con poca equity (con 15%: −0.55 botes por call)</td><td>Valor grande. Un farol del bote con 10% de folds pierde 0.8 botes → nunca farolear</td></tr>
        <tr><td>Nit</td><td>Tira demasiado (robo con 85% de folds: +0.9bb)</td><td>Robar seguido; si apuesta, creerle</td></tr>
        <tr><td>Maníaco</td><td>Farolea demasiado</td><td>Pagar más liviano, no farolear</td></tr>
        <tr><td>Regular</td><td>Pocos errores</td><td>Evitar botes grandes marginales</td></tr>
      </table></div>
      <p class="nota">Órdenes de magnitud en micro (aproximados; dependen de la sala y el rake): TAG ganador +3 a +10bb/100 · nit ≈ 0 · pagador −20 a −50 · maníaco −30 a −80.</p>

      <h3>Qué hacer</h3>
      <ol>
        <li>Medí tu progreso con “resultado siguiendo el plan”, no con el real.</li>
        <li>Volumen antes de conclusiones: menos de 10.000 manos dice poco.</li>
        <li>Primero cortá los errores repetidos: faroles a pagadores y pagar cuando un pasivo se pone agresivo.</li>
      </ol>`,
    quiz: [
      {
        q: "Después de 120 manos vas −388bb. Si el desvío esperado es ±99bb, ¿qué significa?",
        ops: ["Mala suerte normal", "Probablemente errores de decisión: está a ~4 desvíos", "Que el poker es solo suerte"],
        ok: 1,
        por: "Un resultado a 4 desvíos casi nunca es varianza. Revisá las decisiones, no las cartas."
      },
      {
        q: "Hacés un farol del tamaño del bote. ¿Qué % de folds necesitás para que gane?",
        ops: ["33%", "50%", "66%"],
        ok: 1,
        por: "Apuesta ÷ (bote + apuesta) = 1 ÷ 2 = 50%."
      },
      {
        q: "¿Contra qué rival es peor negocio farolear?",
        ops: ["Nit", "Pagador", "Regular"],
        ok: 1,
        por: "El pagador casi no tira: con 10% de folds un farol del bote pierde 0.8 botes. Contra él, solo valor."
      }
    ]
  },
  {
    id: 8,
    icono: "📚",
    titulo: "Estrategias de autores y rivales que cambian",
    resumen: "Las ideas centrales de los libros clásicos, el SPR, el MDF y cómo actualizar tus lecturas.",
    minutos: 10,
    html: `
      <p class="nota">Resúmenes con palabras propias de las ideas centrales de cada obra (no son citas textuales).</p>

      <h3>La base: el Teorema Fundamental — David Sklansky, <i>The Theory of Poker</i></h3>
      <p>Cada vez que jugás distinto a como jugarías viendo las cartas del rival, él gana; cada vez que él juega distinto a como jugaría viendo las tuyas, ganás vos.
      Todo lo demás (rangos, lecturas, tamaños) sirve para acercarte a “ver” sus cartas y que él no vea las tuyas.</p>

      <h3>Estrategias para NL2</h3>
      <div class="tabla"><table>
        <tr><th>Estrategia</th><th>Autores / obra</th><th>Idea central</th><th>En NL2</th></tr>
        <tr><td>TAG explotador</td><td>Ed Miller, Sklansky y Malmuth, <i>Small Stakes Hold'em</i>; Nathan Williams, <i>Crushing the Microstakes</i></td><td>Preflop selectivo y agresivo; la plata sale de apostar por valor contra quienes pagan demasiado</td><td>✅ Base recomendada</td></tr>
        <tr><td>Valor grande, tirar ante apuestas grandes</td><td>Ed Miller, <i>The Course</i></td><td>En límites bajos se farolea poco en apuestas grandes y se paga demasiado</td><td>✅</td></tr>
        <tr><td>Planificar con SPR</td><td>Flynn, Mehta y Miller, <i>Professional No-Limit Hold'em</i></td><td>La relación stack/bote decide con qué manos te comprometés</td><td>✅ Evita all-ins malos</td></tr>
        <tr><td>Equilibrio / GTO</td><td>Chen y Ankenman, <i>The Mathematics of Poker</i>; Janda; Acevedo, <i>Modern Poker Theory</i></td><td>Frecuencias balanceadas de valor y farol</td><td>⚠️ Referencia; en NL2 gana más explotar</td></tr>
        <tr><td>LAG</td><td>Doyle Brunson, <i>Super/System</i></td><td>Muchas manos con mucha presión</td><td>❌ Mucha varianza; contra pagadores los faroles pierden</td></tr>
        <tr><td>Juego mental</td><td>Jared Tendler, <i>The Mental Game of Poker</i></td><td>El tilt tiene causas identificables; trabajar tu “juego C”</td><td>✅ Imprescindible</td></tr>
        <tr><td>Torneos por stack</td><td>Harrington y Robertie, <i>Harrington on Hold'em</i></td><td>La estrategia depende de cuántas ciegas tenés</td><td>Para freerolls y MTT</td></tr>
      </table></div>

      <h3>SPR (stack-to-pot ratio)</h3>
      <p class="formula">SPR = stack efectivo ÷ bote en el flop</p>
      <ul>
        <li>Abrís 2.5bb y paga la BB: bote ≈ 5.5bb, stacks ≈ 97.5bb → <b>SPR ≈ 18</b>.</li>
        <li>Bote de 3-bet (9bb pagado): bote ≈ 18.5bb, stacks ≈ 91bb → <b>SPR ≈ 5</b>.</li>
      </ul>
      <div class="tabla"><table>
        <tr><th>SPR</th><th>Con qué ir all-in</th></tr>
        <tr><td>&lt; 4</td><td>Top pair buen kicker y overpairs</td></tr>
        <tr><td>4–10</td><td>Dos pares, overpair fuerte en board seco; con cuidado</td></tr>
        <tr><td>&gt; 10</td><td>Tríos, escaleras, colores. Con una pareja: bote chico</td></tr>
      </table></div>

      <h3>MDF (defensa mínima)</h3>
      <p class="formula">MDF = bote ÷ (bote + apuesta)</p>
      <p>Es el % de tu rango con el que tenés que seguir para que un farol del rival no gane automáticamente: apuesta de 1/3 → 75% · 1/2 → 67% · bote → 50%.
      En NL2 los pasivos farolean poco en apuestas grandes → contra ellos defendés <b>menos</b> que el MDF. Contra el maníaco, más.</p>

      <h3>¿Los tipos de jugador cambian? Sí</h3>
      <ol>
        <li><b>Tilt:</b> un nit que pierde un bote grande puede jugar como maníaco un rato.</li>
        <li><b>Stack:</b> con pocas fichas se juega all-in o fold; con muchas, más suelto.</li>
        <li><b>Cansancio y horario:</b> las sesiones largas empeoran a todos.</li>
        <li><b>Adaptación:</b> los regulares te observan. Si robás mucho, te van a 3-betear más.</li>
        <li><b>Imagen:</b> después de mostrar un farol te pagan más → más valor, menos faroles.</li>
        <li><b>Niveles de pensamiento:</b> jugá un nivel por encima del rival, no más. Contra un pagador alcanza con el nivel 1.</li>
      </ol>
      <p><b>Una etiqueta es una hipótesis, no un hecho:</b> revisala cada ~20 manos y anotá cuándo y por qué cambió.</p>`,
    quiz: [
      {
        q: "Abrís 2.5bb en el BTN, la SB tira y la BB paga (stacks de 100bb). ¿SPR en el flop? Con top pair buen kicker, ¿vas all-in si un pagador sube fuerte?",
        ops: ["SPR ≈ 18; no: con una pareja y SPR alto, bote chico", "SPR ≈ 5; sí, all-in", "SPR ≈ 2; sí, siempre"],
        ok: 0,
        por: "Bote ≈ 5.5bb y stacks ≈ 97.5bb → SPR ≈ 18. Con una sola pareja y SPR alto no te comprometés, menos contra un pasivo que sube."
      },
      {
        q: "En el river un rival apuesta 2/3 del bote. ¿MDF? Si es un nit, ¿defendés más o menos?",
        ops: ["MDF 60%; contra un nit defendés menos", "MDF 40%; contra un nit defendés más", "MDF 75%; igual contra todos"],
        ok: 0,
        por: "1 ÷ (1 + 0.67) ≈ 60%. Un nit casi no farolea: defendés bastante menos que el MDF."
      },
      {
        q: "Un regular tight pierde 100bb con AA y en las 5 manos siguientes sube 4 veces. ¿Qué ajustás?",
        ops: ["Nada: es tight", "Lo trato como posible tilt/maníaco por ahora: pago más liviano y no lo faroleo", "Le hago 4-bet de farol"],
        ok: 1,
        por: "Las etiquetas cambian. Un tight en tilt juega como maníaco: esperá manos buenas, dejalo apostar y revisá la lectura en unas manos."
      }
    ]
  }
];

/* Reglas de oro: conclusiones en una línea. */
window.REGLAS = [
  { grupo: "Matemática", items: [
    "Pagá solo si tu equity <b>supera</b> la necesaria. No inviertas la comparación.",
    "Outs × 2 por carta: 8 outs = 16%, no 18%.",
    "Calculá la apuesta real sobre el bote: 1/4 no es 1/3.",
    "Gutshot en el turn ≈ 9% (4 outs × 2): si necesitás 20% o más, tirá."
  ]},
  { grupo: "Preflop", items: [
    "Desde la SB: subir o tirar. Nunca completar con manos flojas.",
    "Abrí siempre a 2.5bb (3bb solo desde la SB).",
    "Aislar limpers: 3bb + 1 por limper; desde las ciegas, 5bb o más.",
    "3-bet fuera de posición = 4× la apertura (no 3×).",
    "Ante un 4-bet: seguí solo con KK+ y AK (contra un maníaco, sumá QQ, JJ, AQs). ATs nunca va all-in: está dominado.",
    "En el BTN abrí todo el rango: jugar demasiado cerrado también cuesta.",
    "Manos especulativas (A5s, 76s, 33) desde UTG/MP se tiran: se guardan para CO y BTN.",
    "No hagas 3-bet con manos medias si hay un pagador en el bote: paga y perdés la fold equity.",
    "En torneos, con menos de 10bb: mano buena = all-in preflop."
  ]},
  { grupo: "Postflop", items: [
    "Antes de apostar el turn o el river, preguntate: “¿qué mano peor me paga?”.",
    "Overpair en board mojado: apostá 2/3–3/4, no pases.",
    "Con pareja media en el river: pasá.",
    "River que completa el proyecto obvio + apuesta grande: top pair sin la carta clave es solo un bluff-catcher → tirá.",
    "Multiway en board monótono sin pareja ni proyecto: no hagas c-bet.",
    "AA es solo una pareja: board doblado o color completo + pasivo que apuesta dos calles → tirá.",
    "Mano muy fuerte + stack corto + board con proyectos: all-in, no slowplay.",
    "No compres el “seguro” (insurance) de las salas: la prima es más cara que lo justo."
  ]},
  { grupo: "Rivales", items: [
    "Contra pagadores: valor grande y cero faroles.",
    "<b>Regla dura:</b> si hay un pagador en el bote y no tenés pareja o mejor, no apuestes en ninguna calle.",
    "Contra el maníaco no pelees preflop con manos medias: esperá mano y dejalo apostar.",
    "Si un pasivo se pone agresivo en turn o river, tiene la mano. Nunca subas el river con una sola pareja.",
    "Contra un maníaco, pareja media = pagar una calle; no tires al primer golpe."
  ]},
  { grupo: "Mentalidad", items: [
    "Stop-loss alcanzado: la sesión terminó por hoy, no es una pausa.",
    "Juzgá decisiones, no resultados (ganar con T5o no valida jugarla)."
  ]}
];
