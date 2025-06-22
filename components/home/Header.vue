<template>
  <header class="mt-24 grid gap-8 lg:grid-cols-2">
    <div class="flex items-center justify-center">
      <div class="text-2xl leading-loose">
        <p>Bienvenue sur mon site, je&nbsp;m'appelle</p>
        <p
          class="font-handwritten text-6xl font-semibold underline decoration-indigo-600 decoration-wavy underline-offset-8"
        >
          Pierre Golfier
        </p>
        <p class="mt-4">
          Je suis développeur web fullstack.
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="relative">
        <!-- <NuxtImg src="/avatar.png" alt="Pierre Golfier" width="400" height="400" /> -->
        <img
          src="~/assets/images/avatar.png"
          alt="Pierre Golfier"
          width="400"
          height="400"
        >
        <div class="absolute top-0 right-full translate-x-full sm:translate-x-1/2">
          <p class="font-handwritten whitespace-nowrap">
            C'est moi, vite fait
          </p>
          <AppArrowSvg class="fill-primary h-20 w-20 translate-x-1/2 rotate-90" />
        </div>
        <div class="absolute top-0 right-0 translate-x-1/2">
          <AppPostit
            variant="pink"
            class="rotate-6"
          >
            <p>Hobbies&nbsp;:</p>
            <ul class="list-inside list-disc max-md:text-sm">
              <li>Gaming</li>
              <li>Cuisine</li>
              <li>Développement</li>
            </ul>
          </AppPostit>
        </div>
        <div class="absolute top-3/4 left-0">
          <AppPostit
            variant="green"
            class="mt-4 -rotate-3"
          >
            <p>Setup&nbsp;:</p>
            <ul class="list-inside list-disc max-md:text-sm">
              <li>Macbook</li>
              <li>Clavier Corne v4</li>
              <li>Neovim</li>
            </ul>
          </AppPostit>
        </div>
      </div>
    </div>
  </header>
</template>
