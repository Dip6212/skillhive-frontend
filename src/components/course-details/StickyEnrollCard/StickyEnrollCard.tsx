import { useState } from "react";
import { ArrowRight, GraduationCap, ShieldCheck } from "lucide-react";

import Container from "../../ui/Container/Container";
import Button from "../../ui/Button/Button";

import LeadCaptureModal from "../../shared/LeadCaptureModal/LeadCaptureModal";

const StickyEnrollCard = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  const handleSubmitSuccess = () => {
    setOpen(false);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-black py-24 lg:py-32">

        {/* Background Glow */}

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-500/5 blur-[180px]" />

        <Container>

          <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] lg:p-16">

            {/* Decorative */}

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-yellow-500/10 blur-[120px]" />
            <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-yellow-500/5 blur-[120px]" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">

              {/* LEFT */}

              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm font-semibold text-yellow-400">

                  <GraduationCap size={18} />

                  Career Growth Starts Here

                </div>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
                  Ready To Launch
                  <br />
                  Your Tech Career?
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                  Join SkillHive and learn from industry experts through
                  practical projects, mentorship, career guidance, and
                  placement-focused training.
                </p>

                <div className="mt-8 flex flex-wrap gap-6">

                  <div className="flex items-center gap-3 text-zinc-300">

                    <ShieldCheck
                      size={20}
                      className="text-yellow-500"
                    />

                    Placement Support

                  </div>

                  <div className="flex items-center gap-3 text-zinc-300">

                    <ShieldCheck
                      size={20}
                      className="text-yellow-500"
                    />

                    Industry Projects

                  </div>

                  <div className="flex items-center gap-3 text-zinc-300">

                    <ShieldCheck
                      size={20}
                      className="text-yellow-500"
                    />

                    Expert Mentors

                  </div>

                </div>

              </div>

              {/* RIGHT */}

              <div className="flex justify-center">

                <Button
                  size="lg"
                  onClick={() => setOpen(true)}
                  className="group min-w-[230px] rounded-2xl px-8 py-5 text-lg shadow-[0_10px_40px_rgba(234,179,8,0.25)]"
                >
                  Enroll Now

                  <ArrowRight
                    size={20}
                    className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Button>

              </div>

            </div>

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