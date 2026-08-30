"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Dictionary } from "@/lib/i18n";
import { site } from "@/lib/site";

export function ContactForm({ copy }: { copy: Dictionary["contact"] }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [opened, setOpened] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpened(false);

    if (!name.trim()) {
      setError(copy.errorName);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(copy.errorEmail);
      return;
    }
    if (!message.trim()) {
      setError(copy.errorMessage);
      return;
    }

    setError(null);
    const topic = subject.trim() || site.product;
    const body = `${name.trim()}\n${email.trim()}\n\n${message.trim()}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={copy.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            aria-required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={copy.namePh}
            className="h-11 rounded-sm bg-ink border-brass/25"
          />
        </Field>
        <Field id="email" label={copy.email}>
          <Input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={copy.emailPh}
            className="h-11 rounded-sm bg-ink border-brass/25"
            dir="ltr"
          />
        </Field>
      </div>
      <Field id="subject" label={copy.subject}>
        <Input
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder={copy.subjectPh}
          className="h-11 rounded-sm bg-ink border-brass/25"
        />
      </Field>
      <Field id="message" label={copy.message}>
        <Textarea
          id="message"
          name="message"
          required
          aria-required="true"
          rows={7}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={copy.messagePh}
          className="rounded-sm bg-ink border-brass/25 min-h-40"
        />
      </Field>
      {error ? (
        <p role="alert" className="text-sm text-red-300">
          {error}
        </p>
      ) : null}
      {opened ? (
        <p role="status" className="text-sm text-olive">
          {copy.opened}
        </p>
      ) : null}
      <Button
        type="submit"
        className="cta cta-primary h-12 rounded-sm px-6 text-base"
      >
        {copy.submit}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-paper/85">
        {label}
      </Label>
      {children}
    </div>
  );
}
