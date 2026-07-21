import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="max-w-md mx-auto px-6 text-center">
        <p className="text-gold font-heading text-sm font-semibold tracking-[0.2em] uppercase mb-4">
          Page Not Found
        </p>
        <h1 className="font-heading text-4xl font-bold text-navy mb-4">404</h1>
        <p className="text-slate text-lg leading-relaxed mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-12 px-8 bg-gold text-navy font-semibold text-sm rounded-lg hover:bg-dark-gold transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 border border-navy/20 text-navy font-semibold text-sm rounded-lg hover:border-navy/40 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
