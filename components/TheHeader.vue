<script setup lang="ts">
const router = useRouter();
const goPageOnIndex = (name: string) => {
  const fileName = name.replace("header", "/pokemon");
  router.push(fileName);
};
const goHome = () => {
  router.push("/");
};
</script>

<template>
  <div class="header background">
    <div class="header-main">
      <div class="logo-box" @click="goHome">
        <ImageComponent url-path="header/logo" />
      </div>

      <div class="route-list">
        <div
          class="header-item"
          v-for="(pathName, inx) in [
            'header/IllustratedBook',
            'header/MoveBook',
            'header/AreaList',
          ]"
        >
          <ImageComponent
            :key="inx"
            :url-path="pathName"
            @click="goPageOnIndex(pathName)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background {
  background-image: url("/images/header/header_bg.png");
  @apply bg-cover;
}

/* Retina @2x */
@media only screen and (min-resolution: 192dpi),
  /* 支持dppx */ only screen and (-webkit-min-device-pixel-ratio: 2) {
  .background {
    background-image: url("assets/images/header/header_bg@2x.png");
  }
}

/* Retina @3x */
@media only screen and (min-resolution: 288dpi),
  /* 支持dppx */ only screen and (-webkit-min-device-pixel-ratio: 3) {
  .background {
    background-image: url("assets/images/header/header_bg@3x.png");
  }
}

.header {
  @apply h-full;
  max-height: 148px;

  .header-main {
    @apply w-10/12 mx-auto h-full;
    @apply flex;

    .logo-box {
      @apply w-56 h-full;
      @apply cursor-pointer;
      @apply flex items-center justify-center;
    }

    .route-list {
      @apply h-full w-full flex;
      @apply items-center justify-center;

      .header-item + .header-item {
        @apply ml-8;
      }
      .header-item {
        @apply cursor-pointer;
        @apply w-40;
      }
    }
  }
}
</style>
