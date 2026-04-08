export async function onRequest(context) {
  return context.env.ASSETS.fetch(new URL('/fast-quote/index.html', context.request.url));
}
