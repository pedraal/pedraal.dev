<template>
  <header class="mt-24 grid gap-8 lg:grid-cols-2">
    <div class="flex items-center justify-center">
      <div class="text-3xl leading-loose">
        <p>Bienvenue sur mon site, je m'appelle</p>
        <p class="font-handwritten text-6xl font-semibold underline decoration-indigo-600 decoration-wavy underline-offset-8">
          Pierre Golfier
        </p>
        <p class="mt-4">
          Je suis développeur web fullstack.
        </p>
      </div>
    </div>
    <div class="relative">
      <img src="/images/avatar.png" alt="Pierre Golfier" class="mx-auto rounded-full">
      <div class="absolute top-0 right-0">
        <PrimerPostIt variant="blue" class="mt-6 hidden -rotate-3 text-black md:block">
          <ul class="list-inside list-disc">
            <p>Liste de courses&nbsp;:</p>
            <li>Café</li>
            <li>Café</li>
            <li>Nouilles</li>
          </ul>
        </PrimerPostIt>
      </div>
      <div class="absolute inset-x-0 top-3/4 mt-4 flex flex-wrap justify-center gap-6">
        <PrimerPostIt variant="green" class="mt-4 -rotate-3 text-black">
          <ul class="list-inside list-disc">
            <p>Matos&nbsp;:</p>
            <li>Macbook</li>
            <li>Logitech MX</li>
            <li>Ipad</li>
          </ul>
        </PrimerPostIt>
        <PrimerPostIt variant="pink" class="rotate-6 text-black">
          <ul class="list-inside list-disc">
            <p>Hobbies&nbsp;:</p>
            <li>Gaming</li>
            <li>Cuisine</li>
            <li>Développement</li>
          </ul>
        </PrimerPostIt>
      </div>
    </div>
  </header>
</template>
