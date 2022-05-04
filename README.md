This is created from the remix indie stack starter.

It does show an endless loop using the fetcher to load some api data:

https://github.com/KnisterPeter/test-remix-fetcher-loop/blob/main/app/routes/fetcher.tsx

The fetcher does change a soon as data is fetched, this will lead to an
endless loop of requests made.

https://remix.run/docs/en/v1.4.3/api/remix#usefetcher does seem to suggest this
pattern, but it looks like it's not sufficient.
