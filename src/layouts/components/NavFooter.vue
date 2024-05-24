<template>
  <!-- footer -->
  <footer
  >
    <div class="flex flex-1">
      &copy;&nbsp;
      {{ new Date().getFullYear() }}&nbsp;
      Made With&nbsp;
      <img src="../../assets/images/heart.svg" />&nbsp;
      By&nbsp;
      <a
        class="link link-primary no-underline"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        >akashcry</a
      >
    </div>
    <div
      class="hidden md:!block"
    >
      <a
        class="link link-primary no-underline"
        href="https://github.com/akashcry/explorer-master"
        target="noopener noreferrer"
        >Github</a
      >
    </div>
  </footer>
</template>