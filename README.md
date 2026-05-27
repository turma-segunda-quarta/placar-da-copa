# Projeto Site — Placar da Copa

Projeto prático para treinar:

- HTML
- CSS
- Git
- GitHub
- Branches
- Pull Request
- Trabalho em equipe

O tema escolhido pela turma foi **Placar da Copa**.

A ideia é criar um site com informações sobre a Copa, incluindo placares, jogos, seleções, escalações, notícias, grupos, estatísticas e onde assistir.

---

# 📂 Estrutura do Projeto

```txt
placar-da-copa/
│
├── index.html
├── style.css
├── README.md
│
└── pages/
    ├── placar/
    │   ├── placar.html
    │   └── style.css
    │
    ├── jogos/
    │   ├── jogos.html
    │   └── style.css
    │
    ├── selecoes/
    │   ├── selecoes.html
    │   └── style.css
    │
    ├── escalacoes/
    │   ├── escalacoes.html
    │   └── style.css
    │
    ├── grupos/
    │   ├── grupos.html
    │   └── style.css
    │
    ├── classificacao/
    │   ├── classificacao.html
    │   └── style.css
    │
    ├── estatisticas/
    │   ├── estatisticas.html
    │   └── style.css
    │
    ├── noticias/
    │   ├── noticias.html
    │   └── style.css
    │
    ├── onde-assistir/
    │   ├── onde-assistir.html
    │   └── style.css
    │
    ├── estadios/  (FRANCISCO CARLOS)
    │   ├── estadios.html
    │   └── style.css
    │
    ├── artilharia/
    │   ├── artilharia.html
    │   └── style.css
    │
    └── contato/
        ├── contato.html
        └── style.css
```
# 📌 Requisitos Gerais

Todos devem:

- Utilizar HTML e CSS
- JS é opcional
- Criar layout organizado
- Usar:
  - `header`
  - `main`
  - `footer`
- Criar navegação entre páginas
- Utilizar Flexbox ou Grid
- Adicionar efeito hover em botões/links
- Criar o site para visualização em monitores
- Criar layout responsivo básico opcional
- Fazer commits frequentes
- Não alterar arquivos dos coleguinhas XD

---

# 🏠 Página Inicial — index.html

## Requisitos

- Nome/logo do site: Placar da Copa
- Menu de navegação funcionando
- Banner principal
- Pequena apresentação do site
- Cards de destaque para:
  - placar
  - jogos
  - seleções
  - notícias
- Rodapé com informações do projeto

---

# ⚽ Placar — pages/placar/placar.html

## Requisitos

- Mostrar placares de jogos
- Cada jogo deve conter:
  - seleção A
  - seleção B
  - placar
  - status do jogo

### Exemplo de status

- ao vivo
- encerrado
- em breve

- Pode usar cards ou tabela

---

# 📅 Jogos — pages/jogos/jogos.html

## Requisitos

- Lista de jogos da Copa
- Cada jogo deve conter:
  - data
  - horário
  - seleções
  - estádio
- Organizar os jogos por dia
- Destacar jogos importantes

---

# 🌍 Seleções — pages/selecoes/selecoes.html

## Requisitos

- Exibir pelo menos 8 seleções
- Cada seleção deve conter:
  - bandeira
  - nome do país
  - continente
  - técnico
- Organizar em grid
- Hover nos cards

---

# 📋 Escalações — pages/escalacoes/escalacoes.html

## Requisitos

- Mostrar escalação de pelo menos 2 seleções
- Cada escalação deve conter:
  - goleiro
  - defensores
  - meio-campistas
  - atacantes
- Pode usar lista, cards ou desenho simples do campo

---

# 🏆 Grupos — pages/grupos/grupos.html

## Requisitos

- Mostrar grupos da Copa
- Cada grupo deve conter 4 seleções

### Exemplo

- Grupo A
- Grupo B
- Grupo C

- Pode usar tabelas ou cards

---

# 📊 Classificação — pages/classificacao/classificacao.html

## Requisitos

- Criar tabela de classificação
- A tabela deve conter:
  - posição
  - seleção
  - pontos
  - vitórias
  - empates
  - derrotas
- Destacar as seleções classificadas

---

# 📈 Estatísticas — pages/estatisticas/estatisticas.html

## Requisitos

- Mostrar estatísticas gerais da Copa

### Exemplos

- total de gols
- média de gols
- cartões amarelos
- cartões vermelhos
- jogos realizados

- Pode usar cards ou tabelas

---

# 📰 Notícias — pages/noticias/noticias.html

## Requisitos

- Criar pelo menos 4 notícias
- Cada notícia deve conter:
  - título
  - imagem
  - resumo
  - data
- Organizar em cards
- Botão “Ler mais”

---

# 📺 Onde Assistir — pages/onde-assistir/onde-assistir.html

## Requisitos

- Informar onde assistir aos jogos
- Cada transmissão deve conter:
  - jogo
  - canal/plataforma
  - horário
- Pode usar tabela ou cards

### Exemplo

- TV aberta
- streaming
- canal esportivo

---

# 🏟 Estádios — pages/estadios/estadios.html

## Requisitos

- Mostrar estádios da Copa
- Cada estádio deve conter:
  - nome
  - cidade
  - capacidade
  - imagem
- Organizar em grid

---

# 👟 Artilharia — pages/artilharia/artilharia.html

## Requisitos

- Mostrar ranking de artilheiros
- Cada jogador deve conter:
  - posição
  - nome
  - seleção
  - quantidade de gols
- Pode usar tabela
- Destacar o primeiro colocado

---

# 📞 Contato — pages/contato/contato.html

## Requisitos

- Formulário de contato
- Campo nome
- Campo email
- Campo mensagem
- Botão enviar
- Informações do projeto
- Links fictícios para redes sociais

---

# ⭐ Desafios Extras Opcional

Quem quiser pode adicionar:

- Dark mode
- Menu responsivo
- Animações
- Modal
- Carrossel
- Placar ao vivo fictício
- Filtro por seleção
- Filtro por grupo
- Validação de formulário
- Toast de sucesso

A maioria desses desafios usa JavaScript.

---

# 🌳 Organização Git/GitHub

## Regras

- Cada aluno será responsável por uma página
- Cada aluno deve criar sua própria branch
- Não alterar arquivos dos colegas
- Fazer commits frequentes
- Criar Pull Request ao finalizar

# 🧭 Comandos Iniciais

## Clonar o projeto

```bash
git clone link-do-repositorio
```

---

## Entrar na pasta do projeto

```bash
cd placar-da-copa
```

---

## Criar uma branch

```bash
git checkout -b feature/nome-da-pagina
```

### Exemplos

```bash
git checkout -b feature/placar
git checkout -b feature/jogos
git checkout -b feature/noticias
```

---

# 💾 Salvando Alterações

## Verificar arquivos alterados

```bash
git status
```

---

## Adicionar arquivos

```bash
git add .
```

---

## Criar commit

```bash
git commit -m "Cria página de placar"
```

---

## Enviar branch para o GitHub

```bash
git push origin feature/nome-da-pagina
```

### Exemplo

```bash
git push origin feature/placar
```

---

# 🔀 Pull Request

Depois de enviar a branch para o GitHub:

1. Acesse o repositório no GitHub
2. Clique em **“Compare & pull request”**
3. Escreva um breve resumo do que foi feito
4. Crie o Pull Request
5. Aguarde a revisão antes de fazer merge

---

# ✅ Objetivo Final

Ao final do projeto, todos devem praticar:

- Estruturação de sites
- Organização de código
- HTML
- CSS
- Git
- GitHub
- Branches
- Merge
- Pull Request
- Trabalho em equipe
