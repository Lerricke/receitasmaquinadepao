# 150 Receitas de Padaria — Máquina de Pão

Landing page da oferta *150 Receitas de Padaria Doces e Salgadas na sua Máquina de Pão*.
Site estático puro (HTML + CSS + JS), sem build.

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
3. **Mockup** — a capa da hero hoje é feita em CSS. Para trocar por imagem real,
   substituir o bloco `.mockup` (existe em duas cópias: mobile e desktop).
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
