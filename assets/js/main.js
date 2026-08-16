/* ================================================================
   CONFIGURE AQUI OS LINKS DE CHECKOUT
   Cole as URLs finais (GGCheckout / Cakto / Hotmart / o que for usado).
   Enquanto estiverem vazias, os botões de plano não levam a lugar nenhum.
   ================================================================ */
var CHECKOUT = {
  basico:   '',   // R$ 17,90 — 150 receitas
  completo: ''    // R$ 27,90 — 150 receitas + 5 bônus
};

(function () {
  'use strict';

  /* --- aplica as URLs nos botões marcados com data-checkout --- */
  var faltando = [];
  Array.prototype.forEach.call(document.querySelectorAll('[data-checkout]'), function (el) {
    var plano = el.getAttribute('data-checkout');
    var url = CHECKOUT[plano];

    if (url) {
      el.setAttribute('href', url);
      return;
    }

    faltando.push(plano);
    el.addEventListener('click', function (e) { e.preventDefault(); });
  });

  if (faltando.length) {
    console.warn('[checkout] URL não configurada para: ' + faltando.join(', ') +
                 ' — edite CHECKOUT em assets/js/main.js');
  }

  /* --- barra fixa: aparece depois da hero, some em cima dos planos --- */
  var bar = document.getElementById('stickybar');
  var planos = document.getElementById('planos');

  if (bar && planos) {
    var planosVisivel = false;

    var atualizar = function () {
      var passouHero = window.scrollY > window.innerHeight * 0.7;
      bar.classList.toggle('is-visible', passouHero && !planosVisivel);
    };

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        planosVisivel = entries[0].isIntersecting;
        atualizar();
      }, { threshold: 0.15 }).observe(planos);
    }

    var agendado = false;
    window.addEventListener('scroll', function () {
      if (agendado) { return; }
      agendado = true;
      window.requestAnimationFrame(function () { agendado = false; atualizar(); });
    }, { passive: true });

    atualizar();
  }

  /* --- ano do rodapé --- */
  var ano = document.getElementById('year');
  if (ano) { ano.textContent = new Date().getFullYear(); }
})();
