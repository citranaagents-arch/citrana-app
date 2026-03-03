import { MarketingHeader } from "@/components/marketing/MarketingHeader";
import { MarketingFooter } from "@/components/marketing/MarketingFooter";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[hsl(var(--background))]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 60% at 50% -10%, hsl(var(--primary) / 0.12), transparent 50%),
            radial-gradient(ellipse 70% 50% at 85% 50%, hsl(var(--accent) / 0.08), transparent 45%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='0.02' fill-rule='evenodd'%3E%3Cpath d='M24 0h2v2h-2V0zm0 4h2v2h-2V4zm0 4h2v2h-2V8zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 flex min-h-screen flex-col">
        <MarketingHeader />
        <main className="flex-1">{children}</main>
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <MarketingFooter />
        </div>
      </div>
    </div>
  );
}
