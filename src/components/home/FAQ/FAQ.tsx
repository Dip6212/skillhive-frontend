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
      <section className="bg-slate-50 py-24">

        <Container>

          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know before enrolling."
          />

          {isLoading && (
            <div className="mt-16 text-center text-slate-500">
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
              <div className="mt-16 text-center text-slate-500">
                No FAQs available.
              </div>
            )}

          {!isLoading &&
            !isError &&
            faqs &&
            faqs.length > 0 && (
              <div className="mx-auto mt-16 max-w-4xl space-y-6">

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