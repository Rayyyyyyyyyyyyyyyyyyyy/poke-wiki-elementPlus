// server/utils/fetchPokeApi.ts

import { useRuntimeConfig, createError } from "#imports";

export async function fetchPokeV2(path: string, query: any) {
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
      baseURL: config.public.baseURL_V2,
      headers: { Accept: "application/json" },
      params: {
        ...query,
      },
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch movie data",
    });
  }
}
