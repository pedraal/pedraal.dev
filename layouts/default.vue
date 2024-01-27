<template>
  <div class="font-base bg-dotted-black dark:bg-dotted-white min-h-screen w-full overflow-x-hidden dark:bg-zinc-900 dark:text-white">
    <div class="container max-w-4xl mx-auto p-4">
      <AppNavbar />
      <main class="mt-8">
        <slot />
      </main>
    </div>
  </div>
</template>
