<template>
  <section id="experiences">
    <h2 class="h2">Expériences</h2>
    <AppContentWithSide>
      <h3 class="h3">Codeur.com</h3>
      <p class="italic font-medium">Décembre 2019 - Maintenant</p>
      <p class="italic mb-4">Développeur Ruby on Rails</p>
      <p>En décembre 2019, j'ai eu l'opportunité de rejoindre l'équipe de Codeur.com en tant que développeur fullstack pour mon 1er emploi.</p>
      <p>Mes missions au sein de l'entreprise aujourd'hui sont de maintenir et développer de nouvelles fonctionnalités sur <a class="underline" href="https://codeur.com">Codeur.com</a>, <a class="underline" href="https://graphiste.com">Graphiste.com</a>, <a class="underline" href="https://redacteur.com">Rédacteur.com</a>, <a class="underline" href="https://traduc.com">Traduc.com</a> et <a class="underline" href="https://facture.net">Facture.net</a>.</p>
      <br>
      <p>La phase d'entretient fut pour moi un certain challenge car on m'a demandé d'essayer d'apprendre Ruby on Rails que je n'avais jamais pratiqué entre le 1er et le 2nd entretient. À l'aide de la série de tutoriaux de Grafikart sur youtube, j'ai pu apprendre les bases du framework pour réussir à développer une mini copie de Spotify maison (que j'ai même utilisé pendant quelques mois avant de l'abandonner).
      </p>
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
      <p class="italic font-medium mb-4">Juillet - Aout 2020</p>
      <p>En 2020 j'ai été approché par une société de formation qui était à la recherche d'un développeur pour dispenser une formation d'initiation au framework Vue.js à une agence Lyonnaise. J'étais content de pouvoir partager mon grand intéret pour ce framework, mais après cette 1ère expérience en tant que formateur, j'avoue n'avoir pas particulièrement apprécié l'exercice et je ne souhaite pas à ce jour recommencer.</p>

      <template #side>
        <AppPostit variant="green" class="mt-4 -rotate-6">
          <br>
          Formateur Vue.js
        </AppPostit>
      </template>
    </AppContentWithSide>

    <AppContentWithSide>
      <h3 class="h3">Le maitre des fleurs</h3>
      <p class="italic font-medium">Novembre 2020 - Aujourd'hui</p>
      <p class="italic mb-4">CTO (si je voulais me la raconter)</p>
      <p>Le maitre des fleurs est un quizz de culture général multijoueur. Il se joue jusqu'a 4000 joueurs simultannéments. Les joueurs commencent avec 3 vies, à chaque questions, ceux qui se trompent perdent une vie, le but est d'être le dernier survivant !</p>
      <br>
      <p>Depuis 2020 j'ai l'occasion de collaborer avec le streamer <a class="underline" href="https://twitch.tv/ponce">Ponce</a> et Céline sa cheffe de projet afin de dévelloper un outil permettant d'animer une émission façon jeu télévisé. J'étais à l'origine la seule personne impliquée dans la réalisation du projet, puis au fil du temps, j'ai été rejoins par <a href="https://twitter.com/BastiUi">BastiUi</a> pour le design UI/UX et <a href="https://jonathan-boyer.fr/">Jonathan</a> (AKA Grafikart, oui le même qui a fait la série de vidéo youtube qui m'a permit d'apprendre rapidement les bases de Ruby on Rails) en renfort sur le dévelopement</p>
      <br>
      <p>Avec ce projet je me suis confronté à certains challenges, tel que le faite de devoir optimiser le code pour supporter une charge relativement élevée sur des lapses de temps très cours (vagues de réponses à l'affichage d'une question). Et comme ce projet est plus un jeu vidéo, il a fallu résoudre des problèmes de synchronisation entre les clients et le serveur. Ce projet a également été ma première confrontation à l'administration système et aux attaques informatiques répétés (en l'occurence DDOS).</p>
      <br>
      <p>Le faite que ce jeu ne soit joué qu'une fois par semaine lors des émissions de Ponce, le droit à l'erreur est pratiquement innexistant : Une mauvaise mise en production à pour impact immédiat d'une émission hebdomadaire annulée. Même si Ponce et son équipe ne m'ont jamais mis la pression à ce sujet, c'est une pression que je me suis imposé tout au long de la vie du projet.</p>
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
      <p class="italic font-medium">Avril 2020 - Aujourd'hui</p>
      <p class="italic mb-4">Projet personnel</p>
      <p>En 2019, je sortais ma première application web : Handyclip. Une application qui permettait de chercher et télécharger facilement des extraits vidéos de la plateforme <a class="underline" href="https://twitch.tv" target="_blank">Twitch.tv</a>. En Avril 2020 j'ai décidé de réécrire l'application avec d'autres technologies et notamment Nuxt.js en y rajoutant des fonctionnalités.</p>
      <br>
      <p>En Octobre 2023, j'ai décidé de reprendre le projet en commançant par une réécriture ("nan mais c'est pas vrai c'est une maladie à ce niveau !", oui.) et avec l'ambition de proposer une version payante afin de supporter les frais d'hébergement et de pouvoir consacrer du temps au dévelopment de nouvelles fonctionnalités.</p>
      <br>
      <p>Pour ce renouveau de mon application, je vais également me frotter pour la première fois au SEO pour améliorer sa découvrabilité et ainsi faire augmenter sa base d'utilisateurs très restreinte depuis sa première version.</p>

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
