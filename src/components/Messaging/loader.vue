<template>
  <div class="preloader">
  </div>
</template>

<style scoped>
  .preloader {
    position: relative;
    min-height: 60px;
}

.preloader:before {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: block !important;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}

.preloader:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    margin-top: -15px;
    width: 30px;
    height: 30px;
    border: 4px #c8c8c8 solid;
    border-top: 4px black solid;
    border-radius: 50%;
    -webkit-animation: preloader .6s infinite linear;
            animation: preloader .6s infinite linear;
}

@-webkit-keyframes preloader {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
    }
}

@keyframes preloader {
    0% {
        -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(359deg);
                transform: rotate(359deg);
    }
}
</style>