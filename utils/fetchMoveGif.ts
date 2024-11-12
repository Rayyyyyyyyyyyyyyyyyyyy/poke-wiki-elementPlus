// server/utils/fetchPokeApi.ts

import { useRuntimeConfig, createError } from "#imports";

export async function fetchMoveGif(path: string) {
  const config = useRuntimeConfig();

  if (!path) {
    throw createError({
      statusCode: 400,
      statusMessage: "Path parameter is missing",
    });
  }

  try {
    // 發送 API 請求
    return await $fetch(path, {
      baseURL: config.public.gifUrl,
      headers: {
        "User-Agent": "Mozilla/5.0",
        Referer: "https://s1.52poke.wiki/",
      },
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch movie data",
    });
  }
}
