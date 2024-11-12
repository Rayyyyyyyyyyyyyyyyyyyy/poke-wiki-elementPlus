import { fetchMoveGif } from "~/utils/fetchMoveGif";

export default defineEventHandler(async (event) => {
  // 從請求的 URL 中取得動態路徑參數 `id`
  const params = event.context.params;
  // 檢查是否獲取到 id，否則返回錯誤
  if (!params || !params.id) {
    throw createError({
      statusCode: 400,
      statusMessage: "Path parameter is missing",
    });
  }
  return await fetchMoveGif(params.id);
});
