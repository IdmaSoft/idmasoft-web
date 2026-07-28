"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

// True once the client has hydrated. Server and the first client render
// both report false (so there's no hydration mismatch); React then syncs
// it to true right after hydrating, before the next paint.
export function useIsHydrated(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
