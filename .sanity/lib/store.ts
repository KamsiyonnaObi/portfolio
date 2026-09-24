// ./sanity/lib/store.ts

import * as queryStore from "@sanity/react-loader";
import type { QueryParams } from "@sanity/client";

import { client } from "./client";
import { token } from "./token";

queryStore.setServerClient(client.withConfig({ token }));

type LoadQueryOptions = Parameters<typeof queryStore.loadQuery>[2];

/**
 * Without a `cache` or `next` option the loader fetches with
 * `cache: "no-store"`, which makes every page that queries Sanity render
 * dynamically. Revalidate on a timer by default so pages can be prebuilt and
 * served from the CDN, refreshed in the background at most once a minute.
 */
export function loadQuery<QueryResponseResult>(
  query: string,
  params: QueryParams = {},
  options: LoadQueryOptions = {}
) {
  return queryStore.loadQuery<QueryResponseResult>(query, params, {
    next: { revalidate: 60 },
    ...options,
  });
}
