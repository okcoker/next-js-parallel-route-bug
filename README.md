# next-js-parallel-route-bug

Update: In building this project to illustrate the bug, it seems that even the non dynamic routes are throwing an error though in my own project, we are not seeing this issue with non dynamic routes.

Parallel routes (@modal), which have intercepted routes ((...)product/[productId]), which are a child of dynamic routes ([username]), are throwing a 500 error on vercel. You don't even have to click on the link to see this error as all links on the page are prefetched by Next.js unless otherwise specified. It seems like this 500 error is preventing the intercepted route from being intercepted.

These pages do not throw the error locally OR when running the production build locally.

This seemingly started happening in Next.js v15 after migrating from v14




