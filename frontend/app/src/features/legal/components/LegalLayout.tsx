import { Link } from "react-router-dom";
import { Footer } from "#shared/components/Footer.tsx";
import type { LegalLayoutProps, LegalSectionProps, LegalTextProps } from "#legal/types/legalTypes.ts";

export function LegalLayout({ title, lastUpdated, intro, children }: LegalLayoutProps) {
    return (
        <div className="min-h-full w-full bg-gray-100 flex flex-col">
            <header className="w-full bg-white border-b border-gray-200">
                <div className="mx-auto w-11/12 max-w-3xl py-6">
                    <Link to="/login" className="text-sm text-red-500 hover:underline">
                        &larr; Back to login
                    </Link>
                    <h1 className="mt-3 text-2xl sm:text-3xl font-bold font-sans">{title}</h1>
                    <p className="mt-1 text-sm text-gray-500">Last updated: {lastUpdated}</p>
                </div>
            </header>

            <main className="mx-auto w-11/12 max-w-3xl flex-1 py-8">
                <p className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm leading-relaxed">
                    {intro}
                </p>
                {children}
            </main>

            <Footer />
        </div>
    );
}

export function LegalSection({ heading, children }: LegalSectionProps) {
    return (
        <section className="mt-8">
            <h2 className="text-lg sm:text-xl font-semibold font-sans">{heading}</h2>
            <div className="mt-2">{children}</div>
        </section>
    );
}

export function LegalText({ children }: LegalTextProps) {
    return <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-800">{children}</p>;
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
    return (
        <ul className="mt-3 ml-5 list-disc space-y-2 text-sm sm:text-base leading-relaxed text-gray-800">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
