import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import SectionReveal from "@/components/ui/sectionReveal/SectionReveal";

import FAQItem from "./FAQItem";

import { useFaqs } from "@/hooks/useFaqs";

const FAQ = () => {
  const {
    data: faqs,
    isLoading,
    isError,
  } = useFaqs();

  return (
    <SectionReveal>
      <section className="relative overflow-hidden py-28">

        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0">

          <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-yellow-400/5 blur-[160px]" />

          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-yellow-500/5 blur-[140px]" />

        </div>

        <Container>

          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before enrolling."
          />

          {isLoading && (
            <div className="mt-16 text-center text-zinc-400">
              Loading FAQs...
            </div>
          )}

          {isError && (
            <div className="mt-16 text-center text-red-500">
              Failed to load FAQs.
            </div>
          )}

          {!isLoading &&
            !isError &&
            faqs &&
            faqs.length === 0 && (
              <div className="mt-16 text-center text-zinc-400">
                No FAQs available.
              </div>
            )}

          {!isLoading &&
            !isError &&
            faqs &&
            faqs.length > 0 && (
              <div className="mx-auto mt-16 max-w-4xl space-y-5">

                {faqs.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                  />
                ))}

              </div>
            )}

        </Container>

      </section>
    </SectionReveal>
  );
};

export default FAQ;