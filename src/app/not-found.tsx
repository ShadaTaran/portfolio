import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function NotFound() {
  return (
    <main>
      <Section>
        <Container>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-sm text-muted-foreground">
              404
            </span>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Page not found
            </h1>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
            </p>
            <Link
              href="/"
              className="mt-2 inline-flex w-fit items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:opacity-90"
            >
              Back home
            </Link>
          </div>
        </Container>
      </Section>
    </main>
  );
}
