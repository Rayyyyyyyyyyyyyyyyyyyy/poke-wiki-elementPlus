import { hash as ohash } from "ohash";
import { LRUCache } from "lru-cache";

const promiseCache = new LRUCache<string, any>({
  max: 500,
  ttl: 2000 * 60 * 60, // 2 小時
});

export async function _getPokeV2(url: string, params: any): Promise<any> {
  return await $fetch(`/api/pokeV2/${url}`, {
    params,
  });
}

export function getPokeV2(url: string, params: any): Promise<any> {
  const hash = ohash([url, params]);
  const state = useState<any>(hash, () => null);

  // 如果已經有緩存的數據，直接返回
  if (state.value) return Promise.resolve(state.value);

  // 如果緩存中沒有該請求，則發起請求並緩存結果
  if (!promiseCache.has(hash)) {
    const apiPromise = _getPokeV2(url, params)
      .then((res) => {
        state.value = res;
        return res;
      })
      .catch((e) => {
        promiseCache.delete(hash); // 請求失敗時刪除緩存
        throw e;
      });

    promiseCache.set(hash, apiPromise); // 緩存請求的 Promise
  }

  return promiseCache.get(hash)!; // 返回緩存的 Promise
}
