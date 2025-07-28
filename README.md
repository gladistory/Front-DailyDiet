# Documentação Técnica: FrontDailyDiet

## Objetivo
Esta página documenta a estrutura técnica e principais funcionalidades do projeto **FrontDailyDiet**, servindo como referência para desenvolvedores e demais interessados.

## Visão Geral do Projeto
- **Descrição**: O FrontDailyDiet é uma aplicação web desenvolvida em Angular para controle de refeições diárias, permitindo ao usuário registrar, editar, excluir e visualizar refeições, além de acompanhar métricas relacionadas à dieta.
- **Principais Funcionalidades**:
  - Cadastro, edição e exclusão de refeições
  - Autenticação de usuários (login e registro)
  - Visualização de métricas e estatísticas das refeições (percentual dentro/fora da dieta, totais)
  - Proteção de rotas via guarda de autenticação
  - Interface responsiva e componentes reutilizáveis
  - Agrupamento de refeições por data
  - Feedback visual sobre o status da dieta (dentro/fora)

## Stack Tecnológico
- **Linguagem:** TypeScript
- **Framework Frontend:** Angular
- **Outros:** HTML, CSS/SCSS

## Padrões de Codificação
- Organização modular dos componentes
- Uso de services para lógica de negócio e integração com APIs
- Separação de responsabilidades (componentes, serviços, interfaces)
- Convenções de nomenclatura Angular

## Estrutura do Projeto
```
src/
  app/
    _services/            # Serviços de autenticação e refeições
      auth.service.ts
      meals.service.ts
    auth/                 # Guardas de autenticação
      auth.guard.ts
    components/           # Componentes reutilizáveis
      hide-nav/
      navbar/
      percent/
      primary-button/
      secundary-button/
    interfaces/           # Tipagens TypeScript
      Meal.ts
      Metrics.ts
      User.ts
    pages/                # Páginas principais
      create-meal/
      home/
      isdiet/
      login/
      not-is-diet/
      register/
      view-meal/
        deleteModal/
        edit-meal/
      view-metrics/
    app.component.*        # Arquivo principal do componente raiz
    app.config.ts          # Configuração do app
    app.routes.ts          # Rotas da aplicação
  environments/            # Configurações de ambiente
  assets/                  # Imagens e recursos estáticos
  styles.css, main.ts      # Arquivos globais
```

## Arquitetura
- **Componentes**: Responsáveis pela interface e interação com o usuário.
- **Serviços**: Centralizam chamadas HTTP e lógica de negócio.
- **Guards**: Controle de rotas e autenticação.
- **Interfaces**: Definem contratos de dados (ex: `Meal`, `User`).

---