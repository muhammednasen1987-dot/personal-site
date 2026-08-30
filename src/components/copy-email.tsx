"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CopyEmail({
  copyLabel,
  copiedLabel,
}: {
  copyLabel: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(copyLabel, site.email);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={copy}
      className="h-10 rounded-sm border-brass/30 bg-transparent text-paper hover:text-brass"
    >
      {copied ? copiedLabel : copyLabel}
    </Button>
  );
}
