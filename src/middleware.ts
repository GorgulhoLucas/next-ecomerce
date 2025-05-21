// Importa o middleware e helpers do Clerk
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define as rotas públicas — ou seja, que não exigem login
const isPublicRoute = createRouteMatcher([
  '/',              // Página inicial
  '/sign-in(.*)',   // Página de login e suas variações (ex: /sign-in/redirect)
  '/sign-up(.*)',   // Página de cadastro e variações
  '/product',
  '/product/(.*)',
]);

// Função principal do middleware
export default clerkMiddleware(async (auth, req) => {
  // Se a rota não for pública...
  if (!isPublicRoute(req)) {
    // ...protege a rota, ou seja:
    // se o usuário não estiver autenticado, ele será redirecionado para o /sign-in
    await auth.protect();
  }
});

// Aqui você diz ao Next.js em quais rotas o middleware deve ser executado
export const config = {
  matcher: [
    // Aplica o middleware em /product e todas as subrotas (ex: /product/123)

    // Garante que sign-in e sign-up também passem pelo middleware (apesar de serem públicas)
    '/sign-in',
    '/sign-up',

    // Aplica o middleware em todas as rotas, exceto:
    // - arquivos estáticos (_next, imagens, CSS, JS, etc)
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

    // Aplica o middleware nas rotas da API também
    '/(api|trpc)(.*)',
  ],
};
