<template>
  <header class="mt-24 grid gap-8 lg:grid-cols-2">
    <div class="flex items-center justify-center">
      <div class="text-2xl leading-loose">
        <p>Bienvenue sur mon site, je&nbsp;m'appelle</p>
        <p class="font-handwritten text-6xl font-semibold underline decoration-indigo-600 decoration-wavy underline-offset-8">
          Pierre Golfier
        </p>
        <p class="mt-4">
          Je suis développeur web fullstack.
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative">
        <img src="/images/avatar.png" alt="Pierre Golfier">
        <div class="absolute top-0 right-full hidden translate-x-1/2 md:block">
          <p class="font-handwritten whitespace-nowrap">
            C'est moi, vite fait
          </p>
          <AppArrowSvg class="fill-primary h-20 w-20 translate-x-1/2 rotate-90" />
        </div>
        <div class="absolute top-0 right-0 hidden translate-x-1/2 md:block">
          <AppPostit variant="blue" class="mt-6 -rotate-3 ">
            <ul class="list-inside sm:list-disc">
              <p>Liste de courses&nbsp;:</p>
              <li>Café</li>
              <li>Nouilles</li>
              <li>Café</li>
            </ul>
          </AppPostit>
        </div>
        <div class="absolute inset-x-0 top-3/4 mt-4 flex justify-center gap-6">
          <AppPostit variant="green" class="mt-4 -rotate-3">
            <ul class="list-inside sm:list-disc">
              <p>Matos&nbsp;:</p>
              <li>Macbook Air M1</li>
              <li>Clavier souris Logitech MX</li>
              <li>Écran LG 34" 21:9</li>
            </ul>
          </AppPostit>
          <AppPostit variant="pink" class="rotate-6">
            <ul class="list-inside sm:list-disc">
              <p>Hobbies&nbsp;:</p>
              <li>Gaming</li>
              <li>Cuisine</li>
              <li>Développement</li>
              <li>Sport</li>
            </ul>
          </AppPostit>
        </div>
      </div>
    </div>
  </header>
</template>
