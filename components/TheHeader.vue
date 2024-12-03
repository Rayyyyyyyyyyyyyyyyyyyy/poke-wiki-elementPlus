<script setup lang="ts">
import { Menu } from "@element-plus/icons-vue";
import { EPageName } from "~/consts/appConst";

const router = useRouter();
const goPageOnIndex = (name: string) => {
  const fileName = name.replace("header", "/pokemon");
  router.push(fileName);
};
const goHome = () => {
  router.push("/");
};

const routeNameList = [
  "/pokemon/IllustratedBook",
  "/pokemon/MoveBook",
  "/pokemon/AreaList",
];
</script>

<template>
  <div class="header background">
    <div class="header-main">
      <div class="logo-box" @click="goHome">
        <ImageComponent url-path="pokemon/logo" />
      </div>

      <el-dropdown popper-class="menu-drop">
        <el-icon class="header-menu"><Menu /></el-icon>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(pathName, inx) in routeNameList"
              @click="goPageOnIndex(pathName)"
              :key="inx"
              >{{
                EPageName[pathName as keyof typeof EPageName]
              }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>

      <div class="route-list">
        <div class="header-item" v-for="(pathName, inx) in routeNameList">
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
  background-image: url("public/images/pokemon/header_bg.png");
  @apply bg-cover;
}

/* Retina @2x */
@media only screen and (min-resolution: 192dpi),
  /* 支持dppx */ only screen and (-webkit-min-device-pixel-ratio: 2) {
  .background {
    background-image: url("public/images/pokemon/header_bg@2x.png");
  }
}

/* Retina @3x */
@media only screen and (min-resolution: 288dpi),
  /* 支持dppx */ only screen and (-webkit-min-device-pixel-ratio: 3) {
  .background {
    background-image: url("public/images/pokemon/header_bg@3x.png");
  }
}

.header {
  @apply h-full;
  max-height: 148px;

  .header-main {
    @apply w-10/12 mx-auto h-full;
    @apply flex justify-between items-center;

    .logo-box {
      @apply w-56 h-full;
      @apply cursor-pointer;
      @apply flex items-center justify-center;
    }

    .header-menu {
      @apply text-4xl text-white;
      @apply hidden;
      @apply cursor-pointer;

      @apply rotate-0;
      @apply transition delay-150 duration-300;

      @apply sm:block;
      @apply lg:hidden;

      &:hover {
        @apply rotate-90;
        @apply transition delay-150 duration-300;
      }
    }

    .route-list {
      @apply h-full w-full hidden;
      @apply items-center justify-center;
      @apply lg:flex;

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
