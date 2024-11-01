import { defineEventHandler, getQuery } from "h3";
import { fetchPokeV2 } from "~/utils/fetchPokeV2";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const params = event.context.params;
  if (!params || !params.path) {
    throw createError({
      statusCode: 400,
      statusMessage: "Path parameter is missing",
    });
  }
  return await fetchPokeV2(params.path, query);
});
