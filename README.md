# FluxIA - Site Corporativo Unificado

Site profissional que une os dois braços do grupo FluxIA: **Ofertas Premium** e **Automação Inteligente**. Desenvolvido em HTML puro, CSS moderno e JavaScript vanilla, pronto para GitHub Pages.

## 📋 Estrutura de Arquivos

```
fluxia-corporate/
├── index.html              # Página principal (HTML puro)
├── style.css               # Estilos CSS (design premium)
├── script.js               # JavaScript interativo
├── CNAME                   # Domínio: fluxia.net.br
├── logo-fluxia.jpg         # Logo da empresa
├── hero-image.jpg          # Imagem hero
├── .gitignore              # Arquivos a ignorar
└── README.md               # Este arquivo
```

## 🎯 Características

✅ **Design Premium e Clean** - Interface moderna com gradientes e animações suaves  
✅ **Responsivo** - Funciona perfeitamente em mobile, tablet e desktop  
✅ **Dois Braços Unificados** - Ofertas e Automação integrados na mesma página  
✅ **Performance Otimizada** - Carregamento rápido, sem dependências externas  
✅ **SEO Pronto** - Meta tags, estrutura semântica, domínio personalizado  
✅ **Interatividade** - Menu mobile, scroll suave, animações ao scroll  
✅ **Contatos Integrados** - WhatsApp, email, Instagram, Facebook  

## 🚀 Como Fazer Upload no GitHub

### 1. Criar Repositório

Acesse https://github.com/new e crie um repositório chamado `fluxia-corporate` com visibilidade **Public**.

### 2. Fazer Upload do Código

```bash
cd fluxia-corporate
git init
git add .
git commit -m "Initial commit: FluxIA Corporate website"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/fluxia-corporate.git
git push -u origin main
```

### 3. Ativar GitHub Pages

1. Vá para seu repositório no GitHub
2. Clique em **Settings**
3. Procure por **Pages** no menu esquerdo
4. Em "Source", selecione **Deploy from a branch**
5. Selecione branch **main** e pasta **/ (root)**
6. Clique em **Save**

### 4. Configurar Domínio Personalizado

1. Em **Settings → Pages**, procure por "Custom domain"
2. Digite: `fluxia.net.br`
3. Configure o DNS no seu provedor de domínio:
   - Tipo A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Ou CNAME: `seu-usuario.github.io`

### 5. Pronto!

Seu site estará disponível em:
- `https://seu-usuario.github.io/fluxia-corporate` (sem domínio personalizado)
- `https://fluxia.net.br` (com domínio personalizado)

## ✏️ Editar Conteúdo

Todo o conteúdo está em `index.html`. Abra em um editor de texto e edite:

- **Textos e descrições** - Procure pelas tags `<h1>`, `<h2>`, `<p>`
- **Links de contato** - Atualize URLs do WhatsApp, email, Instagram, Facebook
- **Imagens** - Substitua `logo-fluxia.jpg` e `hero-image.jpg`
- **Cores** - Edite `style.css` (procure por `#0066ff` para azul, `#00d4ff` para ciano)

## 🎨 Personalizar Cores

As cores principais estão definidas em `style.css`:

```css
/* Azul primário */
#0066ff

/* Ciano secundário */
#00d4ff

/* Escuro */
#1a1f35

/* Cinza claro */
#4a5568
```

Para mudar a paleta, substitua essas cores em `style.css`.

## 📱 Trocar Imagens

As imagens estão na raiz do projeto:

- `logo-fluxia.jpg` - Logo (50x50px recomendado)
- `hero-image.jpg` - Imagem hero (1200x600px recomendado)

Para trocar:

1. Substitua os arquivos JPG
2. Execute:

```bash
git add *.jpg
git commit -m "Update: Novas imagens"
git push origin main
```

## 📞 Contatos Integrados

- **WhatsApp:** (53) 99925-2664
- **Email:** contato.fluxia@outlook.com
- **Instagram:** @fluxia.automacao
- **Facebook:** FluxIA Automação

Todos os links estão em `index.html` e podem ser atualizados facilmente.

## 🔧 Estrutura de Seções

O site possui as seguintes seções:

1. **Hero** - Apresentação principal com CTA
2. **Ofertas** - Informações sobre FluxIA Ofertas
3. **Automação** - Informações sobre FluxIA Automação
4. **Sobre** - Detalhes dos dois braços + estatísticas
5. **Contato** - Canais de comunicação
6. **Footer** - Links rápidos e redes sociais

## 📊 Estatísticas

O site exibe 4 estatísticas principais que podem ser editadas em `index.html`:

- 1000+ Clientes Ativos
- 50K+ Ofertas Mensais
- 24/7 Suporte
- 100% Satisfação

## 🎯 SEO

O site inclui:

- Meta tags descritivas
- Open Graph para compartilhamento
- Estrutura semântica HTML5
- Domínio personalizado (fluxia.net.br)
- Mobile-first responsive design

## 🚀 Deploy Automático (Opcional)

Para fazer deploy automático a cada push, crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy
      run: echo "Deployed!"
```

## 📝 Licença

Todos os direitos reservados © 2026 FluxIA

## 📧 Suporte

Para dúvidas sobre o site, entre em contato:
- WhatsApp: (53) 99925-2664
- Email: contato.fluxia@outlook.com
