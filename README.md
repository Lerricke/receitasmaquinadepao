# 150 Receitas de Padaria — Máquina de Pão

Landing page da oferta *150 Receitas de Padaria Doces e Salgadas na sua Máquina de Pão*.
Site estático puro (HTML + CSS + JS), sem build.

Estrutura espelhada da referência `panificadora.donaneide.site`:
barra topo → hero → categorias → receitas → dor → bloco escuro "o que vem dentro"
→ bônus + faixa de valor → planos empilhados (básico → ponte → completo)
→ garantia → FAQ → fechamento escuro → rodapé.
Escala de fonte fixa: PC 40/35/30/25/20/18/16 · mobile 35/30/25/22/20/18/16
(o h1 da hero é caso à parte: 64px no PC, 40px no mobile).

```
index.html
assets/css/style.css
assets/js/main.js      ← links de checkout ficam aqui
netlify.toml
robots.txt
```

## Antes de rodar tráfego

1. **Links de checkout** — editar `CHECKOUT` no topo de `assets/js/main.js`:
   ```js
   var CHECKOUT = {
     basico:   'https://...',   // R$ 17,90
     completo: 'https://...'    // R$ 27,90
   };
   ```
   Sem isso os dois botões de plano não levam a lugar nenhum (avisa no console).
2. **Pixel / tracking** — colar a tag logo antes do `</body>` do `index.html`,
   nunca dentro de um `<script>` já existente.
3. **Mockup** — a capa é feita em CSS. Para trocar por imagem real, substituir o
   bloco `.mockup` (aparece 2x: na hero e na seção escura "o que vem dentro").
   As fotos de receita da referência viram `.tiles` / `.cats` com emoji — dá pra
   trocar por `<img>` sem mexer no grid.
4. **Domínio** — ajustar `og:url` / `canonical` no `<head>` depois de apontar o domínio.

## Deploy no Netlify

Conectar o repositório (Add new site → Import from Git):

- **Build command:** vazio
- **Publish directory:** `.`

O `netlify.toml` já traz isso configurado, então o Netlify não pergunta nada.

## Preview local

```bash
npx serve .          # ou qualquer server estático
```
