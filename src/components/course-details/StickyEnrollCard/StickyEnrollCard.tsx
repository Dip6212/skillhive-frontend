import { useState } from "react";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";

import LeadCaptureModal from "../../shared/LeadCaptureModal/LeadCaptureModal";

const StickyEnrollCard = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmitSuccess = () => {
    // Later we'll also send analytics or API events here if needed
    setOpen(false);
  };

  return (
    <>
      <section className="bg-blue-700 py-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-white p-10 shadow-xl lg:flex-row">
            <div>
              <h2 className="text-3xl font-bold">
                Ready To Start Your Career?
              </h2>

              <p className="mt-3 text-slate-600">
                Talk to our career counsellors and get personalized guidance.
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => setOpen(true)}
            >
              Enroll Now
            </Button>
          </div>
        </Container>
      </section>

      <LeadCaptureModal
        open={open}
        onClose={closeModal}
        onSubmitSuccess={handleSubmitSuccess}
      />
    </>
  );
};

export default StickyEnrollCard;