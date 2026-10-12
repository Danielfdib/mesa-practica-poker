/* Escuela de Poker NL2 — progreso guardado en el navegador (no se envía a ningún lado). */
(function () {
  var KEY = "pk_escuela_v1";

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || { lecciones: {} }; }
    catch (e) { return { lecciones: {} }; }
  }
  function save(s) {
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) { /* sin almacenamiento: se pierde al cerrar */ }
  }

  window.Escuela = {
    estado: load,
    // Guarda el mejor puntaje de una lección. Se da por completada al responder todo.
    guardarLeccion: function (id, aciertos, total) {
      var s = load();
      var prev = s.lecciones[id] || { mejor: 0 };
      s.lecciones[id] = { mejor: Math.max(prev.mejor, aciertos), total: total, hecha: true };
      save(s);
    },
    progreso: function () {
      var s = load(), total = (window.LECCIONES || []).length;
      var hechas = (window.LECCIONES || []).filter(function (l) { return s.lecciones[l.id] && s.lecciones[l.id].hecha; }).length;
      return { hechas: hechas, total: total, pct: total ? Math.round(hechas * 100 / total) : 0 };
    },
    reiniciar: function () { save({ lecciones: {} }); }
  };
})();
