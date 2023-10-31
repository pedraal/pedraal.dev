<template>
  <section id="stacks">
    <h2 class="h2">Mes Stacks</h2>
    <div class="my-4 grid gap-4 md:grid-cols-2">
      <AppCard>
        <template #header-title>
          Nuxt, Typescript & Mongodb
        </template>
        <template #header-icons>
          <Icon size="1.5rem" name="vscode-icons:file-type-nuxt"></Icon>
          <Icon size="1.5rem" name="vscode-icons:file-type-typescript-official"></Icon>
          <Icon size="1.5rem" name="logos:mongodb-icon"></Icon>
        </template>
        Après avoir appris les bases du développement web en autonomie, j'ai décidé de me tourner vers un framework JS frontend. Je me suis spécialisé en Vue.js et au fil de mes projets j'ai pu prendre en main Nuxt.js, Node+Typescript et Mongodb.
      </AppCard>
      <AppCard>
        <template #header-title>
          Ruby on Rails & Hotwired
        </template>
        <template #header-icons>
          <Icon size="1.5rem" name="vscode-icons:file-type-rails"></Icon>
          <Icon size="1.5rem" name="logos:postgresql"></Icon>
        </template>
        En travaillant chez Codeur.com, j'ai pu me former à Ruby on Rails. À l'annonce de Hotwired, nous avons tout de suite adhérer à cette nouvelle façon de développer des applications web et l'avons intégrer à notre stack technique.
      </AppCard>
    </div>

    <AppCard class="mb-4">
      <template #header-title>
        DevOps
      </template>
      <template #header-icons>
        <Icon size="1.5rem" name="logos:docker-icon"></Icon>
        <Icon size="1.5rem" name="simple-icons:traefikproxy"></Icon>
      </template>
      Pour déployer mes applications, je me suis formé à l'utilisation de Docker, j'utilise principalement le reverse proxy Traefik et je gère moi même mes serveurs dédiés.
    </AppCard>

    <AppCard>
      <template #header-title>
        Mentions spéciales
      </template>
      <template #header-icons>
        <Icon size="1.5rem" name="logos:deno"></Icon>
        <Icon size="1.5rem" name="logos:tailwindcss-icon"></Icon>
      </template>
      <strong>Deno</strong> : Deno est un nouveau runtime qui vient en remplacement de Node. Créé par le même auteur, il présente de nombreux avantages tel que Typescript par défaut, un test-runner+linter intégrés et un système de modules plus simple que NPM.
      <br>
      <strong>Tailwindcss</strong> : Pour citer son créateur "It looks awfu, and it works". Après avoir pris en main ce framework CSS, je ne peux que confirmer. Il permet de créer des interfaces rapidement et facilement. Je n'imagine plus faire un projet sans lui.
    </AppCard>
  </section>
</template>
