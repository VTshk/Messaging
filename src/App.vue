<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="sass">
@font-face
  font-family: TTnorms
  src: url('./assets/fonts/TTNorms-Medium.ttf')

body
  background: #e5e5e5
#app
  font-family: TTnorms, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

h4, p
  margin: 0
</style>
