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
        <p>Après avoir appris les bases du développement web en autonomie, j'ai décidé de me tourner vers un framework JavaScript côté client. Je me suis spécialisé en Vue.js et au fil de mes projets, j'ai pu maîtriser Nuxt.js, Node.js avec TypeScript et MongoDB.</p>
      </AppCard>
      <AppCard>
        <template #header-title>
          Ruby on Rails & Hotwired
        </template>
        <template #header-icons>
          <Icon size="1.5rem" name="vscode-icons:file-type-rails"></Icon>
          <Icon size="1.5rem" name="logos:postgresql"></Icon>
        </template>
        <p>En travaillant chez Codeur.com, j'ai eu l'opportunité de me former à Ruby on Rails. Lors de l'annonce de Hotwired, nous avons immédiatement adhéré à cette nouvelle approche du développement d'applications web et l'avons intégrée à notre stack technique.</p>
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
      <p>Pour déployer mes applications, je me suis formé à l'utilisation de Docker. J'utilise principalement le reverse proxy Traefik et je gère moi-même mes serveurs dédiés.</p>
    </AppCard>

    <AppCard>
      <template #header-title>
        Mentions spéciales
      </template>
      <template #header-icons>
        <Icon size="1.5rem" name="logos:deno"></Icon>
        <Icon size="1.5rem" name="logos:tailwindcss-icon"></Icon>
      </template>
      <strong>Deno</strong> : Deno est un nouveau runtime qui remplace Node.js. Créé par le même auteur, il offre de nombreux avantages tels que TypeScript par défaut, un test-runner et linter intégrés, ainsi qu'un système de modules plus simple que NPM.
      <br>
      <strong>Tailwind CSS</strong> : Pour citer son créateur : "It looks awful, and it works." Après avoir maîtrisé ce framework CSS, je ne peux que confirmer. Malgré son aspect très verbeux qui vient alourdir notre HTML, il permet cependant de créer des interfaces rapidement qui sont simple à maintenir. Je n'imagine plus réaliser un projet sans lui.

    </AppCard>
  </section>
</template>
