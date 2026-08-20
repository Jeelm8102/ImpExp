export default function CTA() {
  return (
    <section id="contact" className="relative bg-alabaster py-32 md:py-40 overflow-hidden text-center">
      <div className="absolute -inset-[10%] blur-[80px] opacity-[0.2]">
        <div className="absolute w-[36vw] h-[36vw] rounded-full top-[10%] left-[10%] bg-[radial-gradient(circle,_#B14A32,_transparent_70%)] animate-float-a" />
        <div className="absolute w-[30vw] h-[30vw] rounded-full bottom-[10%] right-[14%] bg-[radial-gradient(circle,_#C98A2B,_transparent_70%)] animate-float-b" />
      </div>

      <div className="relative z-[2] mx-auto max-w-2xl px-6 md:px-10">
        <p className="eyebrow text-saffron mb-5">Start a Consignment</p>
        <h2 className="font-display text-4xl md:text-6xl font-normal leading-tight">
          Tell us the product,
          <br />
          <span className="italic text-saffron">we&apos;ll chart the route.</span>
        </h2>
        <p className="mt-6 text-ink/60 max-w-lg mx-auto">
          Share your product list, target port and volume — our trade desk responds with
          pricing and lead time within one business day.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="bg-ink text-alabaster px-8 py-4 rounded-full font-medium text-sm hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(20,27,46,0.15)] hover:bg-paprika transition-all"
          >
            Request a Quote
          </a>
          <a
            href="mailto:trade@monsoonmeridian.com"
            className="border border-ink/25 px-8 py-4 rounded-full text-sm hover:border-saffron hover:text-saffron hover:bg-saffron/[0.06] transition-colors"
          >
            trade@monsoonmeridian.com
          </a>
        </div>
      </div>
    </section>
  );
}
