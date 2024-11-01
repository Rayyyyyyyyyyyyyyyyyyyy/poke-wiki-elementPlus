import { defineEventHandler, getQuery } from "h3";
import {fetchPokeApi} from "~/utils/fetchPokeApi"; // 根據框架引入相應的函數

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const params = event.context.params;

  if (!params || !params.path) {
    throw createError({
      statusCode: 400,
      statusMessage: "Path parameter is missing",
    });
  }
  return await fetchPokeApi(params.path, query);
});
