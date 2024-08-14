"use client";
import { initRelayEnvironment } from "@/relay-environment";
import { ReactNode } from "react";
import type { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { RelayEnvironmentProvider } from "react-relay";

export function RelayProvider({
  children,
  initialRecords,
}: {
  children: ReactNode;
  initialRecords: RecordMap | undefined;
}) {
  // we can do hydrating here
  const env = initRelayEnvironment(initialRecords);
  return (
    <RelayEnvironmentProvider environment={env}>
      <div className="border p-10">
        <h2>Relay Provider - Client-side hydrated from server</h2>
        <p>No client-side network call</p>
        {children}
      </div>
    </RelayEnvironmentProvider>
  );
}
