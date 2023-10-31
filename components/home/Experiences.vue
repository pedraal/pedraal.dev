<template>
  <section id="experiences">
    <h2 class="h2">Expériences</h2>
    <AppContentWithSide>
      <h3 class="h3">Codeur.com</h3>
      <p class="italic font-medium">Décembre 2019 - Maintenant</p>
      <p class="italic mb-4">Développeur Ruby on Rails</p>
      <p>En décembre 2019, j'ai eu l'opportunité de rejoindre l'équipe de Codeur.com en tant que développeur fullstack pour mon premier emploi.</p>
      <p>Mes missions au sein de l'entreprise aujourd'hui consistent à maintenir et développer de nouvelles fonctionnalités sur <a class="underline" href="https://codeur.com">Codeur.com</a>, <a class="underline" href="https://graphiste.com">Graphiste.com</a>, <a class="underline" href="https://redacteur.com">Rédacteur.com</a>, <a class="underline" href="https://traduc.com">Traduc.com</a> et <a class="underline" href="https://facture.net">Facture.net</a>.</p>
      <br>
      <p>La phase d'entretien a été pour moi un vrai défi, car on m'a demandé d'apprendre Ruby on Rails que je n'avais jamais pratiqué entre le premier et le deuxième entretien. Grâce à la série de tutoriels de Grafikart sur YouTube, j'ai pu acquérir les bases du framework et réussir à développer une mini copie de Spotify maison (que j'ai même utilisée pendant quelques mois avant de l'abandonner).</p>
      <template #side>
        <AppPostit variant="blue" class="mt-4 rotate-12">
          Codeur.com
          <br>
          <br>
          Développeur fullstack Ruby on Rails
        </AppPostit>
      </template>
    </AppContentWithSide>

    <AppContentWithSide right>
      <h3 class="h3">Formateur</h3>
      <p class="italic font-medium">Juillet - Aout 2020</p>
      <p class="italic mb-4">Formateur Vue.js</p>
      <p>En 2020, j'ai été approché par une société de formation qui était à la recherche d'un développeur pour dispenser une formation d'initiation au framework Vue.js à une agence lyonnaise. J'étais content de pouvoir partager mon grand intérêt pour ce framework, mais après cette première expérience en tant que formateur, j'avoue n'avoir pas particulièrement apprécié l'exercice et je ne souhaite pas à ce jour recommencer.</p>
      <template #side>
        <AppPostit variant="green" class="mt-4 -rotate-6">
          <br>
          Formateur Vue.js
        </AppPostit>
      </template>
    </AppContentWithSide>

    <AppContentWithSide>
      <h3 class="h3">Le maitre des fleurs</h3>
      <AppExternalLink href="https://maitre-des-fleurs.com">
        Voir le site
        <Icon class="-mt-1" size="1.5rem" name="heroicons:arrow-top-right-on-square"></Icon>
      </AppExternalLink>
      <p class="italic font-medium">Novembre 2020 - Aujourd'hui</p>
      <p class="italic mb-4">CTO (si je voulais me la raconter)</p>
      <p>Le Maître des Fleurs est un quiz de culture générale multijoueur. Il se joue jusqu'à 4000 joueurs simultanément. Les joueurs commencent avec 3 vies, à chaque question, ceux qui se trompent perdent une vie. Le but est d'être le dernier survivant !</p>
      <br>
      <p>Depuis 2020, j'ai l'occasion de collaborer avec le streameur <a class="underline" href="https://twitch.tv/ponce">Ponce</a> et Céline, sa cheffe de projet, afin de développer un outil permettant d'animer une émission à la manière d'un jeu télévisé. J'étais à l'origine la seule personne impliquée dans la réalisation du projet, puis au fil du temps, j'ai été rejoint par <a href="https://twitter.com/BastiUi">BastiUi</a> pour le design UI/UX et <a href="https://jonathan-boyer.fr/">Jonathan</a> (AKA Grafikart, oui, le même qui a fait la série de vidéos YouTube qui m'a permis d'apprendre rapidement les bases de Ruby on Rails) en renfort sur le développement.</p>
      <br>
      <p>Avec ce projet, je me suis confronté à certains défis, tels que l'optimisation du code pour supporter une charge relativement élevée sur des laps de temps très courts (vagues de réponses lors de l'affichage d'une question). Comme ce projet est plus un jeu vidéo, il a fallu résoudre des problèmes de synchronisation entre les clients et le serveur. Ce projet a également été ma première confrontation avec l'administration système et les attaques informatiques répétées (en l'occurrence des attaques DDOS).</p>
      <br>
      <p>Le fait que ce jeu ne soit joué qu'une fois par semaine lors des émissions de Ponce signifie que le droit à l'erreur est pratiquement inexistant : une mauvaise mise en production a pour conséquence immédiate l'annulation d'une émission hebdomadaire. Même si Ponce et son équipe ne m'ont jamais mis la pression à ce sujet, c'est une pression que je me suis imposée tout au long de la vie du projet.</p>
      <template #side>
        <AppPostit variant="pink" class="mt-4 rotate-6">
          PonceCorp
          <br>
          <br>
          Le maitre des fleurs
        </AppPostit>
      </template>
    </AppContentWithSide>

    <AppContentWithSide right>
      <h3 class="h3">Twitchbuddy</h3>
      <AppExternalLink href="https://twitchbuddy.app">
        Voir le site
        <Icon class="-mt-1" size="1.5rem" name="heroicons:arrow-top-right-on-square"></Icon>
      </AppExternalLink>
      <p class="italic font-medium">Avril 2020 - Aujourd'hui</p>
      <p class="italic mb-4">Projet personnel</p>
      <p>En 2019, j'ai lancé ma première application web : Handyclip. Une application qui permettait de chercher et télécharger facilement des extraits vidéos de la plateforme <a class="underline" href="https://twitch.tv" target="_blank">Twitch.tv</a>. En avril 2020, j'ai décidé de réécrire l'application avec d'autres technologies, notamment Nuxt.js, en y ajoutant des fonctionnalités.</p>
      <br>
      <p>En octobre 2023, j'ai décidé de reprendre le projet en commençant par une réécriture ("nan mais c'est pas vrai, c'est une maladie à ce niveau !", oui.) et avec l'ambition de proposer une version payante afin de couvrir les frais d'hébergement et de pouvoir consacrer du temps au développement de nouvelles fonctionnalités.</p>
      <br>
      <p>Pour ce renouveau de mon application, je vais également me plonger pour la première fois dans l'optimisation pour les moteurs de recherche (SEO) afin d'améliorer sa visibilité et ainsi augmenter sa base d'utilisateurs, qui était très limitée depuis sa première version.</p>
      <template #side>
        <AppPostit variant="indigo" class="mt-4 -rotate-3">
          Twitchbuddy
          <br>
          <br>
          Projet perso
        </AppPostit>
      </template>
    </AppContentWithSide>
  </section>
</template>
