<template>
  <section id="stacks">
    <h2 class="h2">
      Mes Stacks
    </h2>
    <div class="my-4 grid gap-4 md:grid-cols-2">
      <AppCard>
        <template #header-title>
          Nuxt, TypeScript & MongoDB
        </template>
        <template #header-icons>
          <Icon
            size="1.5rem"
            name="vscode-icons:file-type-nuxt"
          />
          <Icon
            size="1.5rem"
            name="vscode-icons:file-type-typescript-official"
          />
          <Icon
            size="1.5rem"
            name="logos:mongodb-icon"
          />
        </template>
        <p>Après avoir appris les bases du développement web en autonomie, j'ai décidé de me tourner vers un framework JavaScript côté client. Je me suis spécialisé en Vue.js et au fil de mes projets, j'ai pu maîtriser Nuxt, Node.js, TypeScript et MongoDB.</p>
      </AppCard>
      <AppCard>
        <template #header-title>
          Ruby on Rails & Hotwired
        </template>
        <template #header-icons>
          <Icon
            size="1.5rem"
            name="vscode-icons:file-type-rails"
          />
          <Icon
            size="1.5rem"
            name="logos:postgresql"
          />
        </template>
        <p>En travaillant chez Codeur.com, j'ai eu l'opportunité d'apprendre et maîtriser Ruby on Rails. Lors de l'annonce de Hotwired, nous avons immédiatement adhéré à cette nouvelle approche du développement d'applications web et l'avons intégrée à notre stack technique.</p>
      </AppCard>
    </div>

    <AppCard class="mb-4">
      <template #header-title>
        DevOps
      </template>
      <template #header-icons>
        <Icon
          size="1.5rem"
          name="logos:docker-icon"
        />
        <Icon
          size="1.5rem"
          name="simple-icons:traefikproxy"
        />
      </template>
      <p>Pour déployer mes applications, je me suis formé à Docker. J'utilise principalement le reverse proxy Traefik et je gère moi-même mes serveurs dédiés.</p>
    </AppCard>

    <AppCard>
      <template #header-title>
        Autres
      </template>
      <template #header-icons>
        <Icon
          size="1.5rem"
          name="logos:deno"
        />
        <Icon
          size="1.5rem"
          name="logos:tailwindcss-icon"
        />
      </template>
      <strong>Deno</strong> : Deno est un runtime JavaScript qui remplace Node.js. Créé par le même auteur, il offre de nombreux avantages tels que TypeScript par défaut, un test-runner et linter intégrés, ainsi qu'un système de modules plus simple que NPM.
      <br>
      <br>
      <strong>Tailwind CSS</strong> : Pour citer son créateur : "It looks awful, and it works." Après avoir maîtrisé ce framework CSS, je ne peux que confirmer. Malgré son aspect très verbeux, il permet cependant de créer rapidement des interfaces simples à maintenir.
    </AppCard>
  </section>
</template>
