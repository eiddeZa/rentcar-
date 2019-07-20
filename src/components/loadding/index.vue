<template>
  <div class="loader"></div>
</template>
<script>
export default {
    name:"loadding",
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
.loader {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  -webkit-transform: rotate(165deg);
          transform: rotate(165deg);
}

.loader:before, .loader:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.25rem;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.loader:before {
  -webkit-animation: before 2s infinite;
          animation: before 2s infinite;
}

.loader:after {
  -webkit-animation: after 2s infinite;
          animation: after 2s infinite;
}

@-webkit-keyframes before {
  0% {
    width: 0.5rem;
    -webkit-box-shadow: 1rem -0.5rem rgba(225, 20, 98, 0.75), -1rem 0.5rem rgba(111, 202, 220, 0.75);
            box-shadow: 1rem -0.5rem rgba(225, 20, 98, 0.75), -1rem 0.5rem rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 2.5rem;
    -webkit-box-shadow: 0 -0.5rem rgba(225, 20, 98, 0.75), 0 0.5rem rgba(111, 202, 220, 0.75);
            box-shadow: 0 -0.5rem rgba(225, 20, 98, 0.75), 0 0.5rem rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5rem;
    -webkit-box-shadow: -1rem -0.5rem rgba(225, 20, 98, 0.75), 1rem 0.5rem rgba(111, 202, 220, 0.75);
            box-shadow: -1rem -0.5rem rgba(225, 20, 98, 0.75), 1rem 0.5rem rgba(111, 202, 220, 0.75);
  }
  100% {
    -webkit-box-shadow: 1rem -0.5rem rgba(225, 20, 98, 0.75), -1rem 0.5rem rgba(111, 202, 220, 0.75);
            box-shadow: 1rem -0.5rem rgba(225, 20, 98, 0.75), -1rem 0.5rem rgba(111, 202, 220, 0.75);
  }
}

@keyframes before {
  0% {
    width: 0.5rem;
    -webkit-box-shadow: 1rem -0.5rem rgba(225, 20, 98, 0.75), -1rem 0.5rem rgba(111, 202, 220, 0.75);
            box-shadow: 1rem -0.5rem rgba(225, 20, 98, 0.75), -1rem 0.5rem rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 2.5rem;
    -webkit-box-shadow: 0 -0.5rem rgba(225, 20, 98, 0.75), 0 0.5rem rgba(111, 202, 220, 0.75);
            box-shadow: 0 -0.5rem rgba(225, 20, 98, 0.75), 0 0.5rem rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5rem;
    -webkit-box-shadow: -1rem -0.5rem rgba(225, 20, 98, 0.75), 1rem 0.5rem rgba(111, 202, 220, 0.75);
            box-shadow: -1rem -0.5rem rgba(225, 20, 98, 0.75), 1rem 0.5rem rgba(111, 202, 220, 0.75);
  }
  100% {
    -webkit-box-shadow: 1rem -0.5rem rgba(225, 20, 98, 0.75), -1rem 0.5rem rgba(111, 202, 220, 0.75);
            box-shadow: 1rem -0.5rem rgba(225, 20, 98, 0.75), -1rem 0.5rem rgba(111, 202, 220, 0.75);
  }
}

@-webkit-keyframes after {
  0% {
    height: 0.5rem;
    -webkit-box-shadow: 0.5rem 1rem rgba(61, 184, 143, 0.75), -0.5rem -1rem rgba(233, 169, 32, 0.75);
            box-shadow: 0.5rem 1rem rgba(61, 184, 143, 0.75), -0.5rem -1rem rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 2.5rem;
    -webkit-box-shadow: 0.5rem 0 rgba(61, 184, 143, 0.75), -0.5rem 0 rgba(233, 169, 32, 0.75);
            box-shadow: 0.5rem 0 rgba(61, 184, 143, 0.75), -0.5rem 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5rem;
    -webkit-box-shadow: 0.5rem -1rem rgba(61, 184, 143, 0.75), -0.5rem 1rem rgba(233, 169, 32, 0.75);
            box-shadow: 0.5rem -1rem rgba(61, 184, 143, 0.75), -0.5rem 1rem rgba(233, 169, 32, 0.75);
  }
  100% {
    -webkit-box-shadow: 0.5rem 1rem rgba(61, 184, 143, 0.75), -0.5rem -1rem rgba(233, 169, 32, 0.75);
            box-shadow: 0.5rem 1rem rgba(61, 184, 143, 0.75), -0.5rem -1rem rgba(233, 169, 32, 0.75);
  }
}

@keyframes after {
  0% {
    height: 0.5rem;
    -webkit-box-shadow: 0.5rem 1rem rgba(61, 184, 143, 0.75), -0.5rem -1rem rgba(233, 169, 32, 0.75);
            box-shadow: 0.5rem 1rem rgba(61, 184, 143, 0.75), -0.5rem -1rem rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 2.5rem;
    -webkit-box-shadow: 0.5rem 0 rgba(61, 184, 143, 0.75), -0.5rem 0 rgba(233, 169, 32, 0.75);
            box-shadow: 0.5rem 0 rgba(61, 184, 143, 0.75), -0.5rem 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5rem;
    -webkit-box-shadow: 0.5rem -1rem rgba(61, 184, 143, 0.75), -0.5rem 1rem rgba(233, 169, 32, 0.75);
            box-shadow: 0.5rem -1rem rgba(61, 184, 143, 0.75), -0.5rem 1rem rgba(233, 169, 32, 0.75);
  }
  100% {
    -webkit-box-shadow: 0.5rem 1rem rgba(61, 184, 143, 0.75), -0.5rem -1rem rgba(233, 169, 32, 0.75);
            box-shadow: 0.5rem 1rem rgba(61, 184, 143, 0.75), -0.5rem -1rem rgba(233, 169, 32, 0.75);
  }
}

/**
* Attrempt to center the whole thing!
*/
html,
body {
  height: 100%;
}

.loader {
  position: absolute;
  top: calc(50% - 1.75rem);
  left: calc(50% - 1.25rem);
}
/*# sourcremappingURL=index.css.map */
</style>
