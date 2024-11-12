export async function _proxyImg(url: string): Promise<any> {
  return await $fetch(`/api/proxyImg/${url}`);
}

export function proxyImg(url: string): Promise<Blob> {
  return _proxyImg(url)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      throw e;
    });
}
