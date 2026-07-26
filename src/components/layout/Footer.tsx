import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

import Container from "../ui/Container/Container";
import SectionReveal from "../ui/sectionReveal/SectionReveal";
import { useSettings } from "@/hooks/useSettings";

const Footer = () => {
  const { data: settings = {} } = useSettings();

const getSetting = (key: string, fallback = "") => {
  return settings[key] ?? fallback;
};

  return (
    <SectionReveal>
      <footer className="bg-slate-950 text-white">
        <Container>
          <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
            {/* Company */}
            <div>
              <h2 className="text-3xl font-bold">
                {getSetting("Website Name", "SkillHive")}
              </h2>

              <p className="mt-6 leading-7 text-slate-400">
                {getSetting(
                  "Tagline",
                  "Shaping Future. Building Careers."
                )}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold">
                Quick Links
              </h3>

              <ul className="mt-6 space-y-3 text-slate-400">
                <li>Home</li>
                <li>Courses</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Popular Courses */}
            <div>
              <h3 className="text-xl font-semibold">
                Popular Courses
              </h3>

              <ul className="mt-6 space-y-3 text-slate-400">
                <li>AI Mastery Program</li>
                <li>Career Readiness</li>
                <li>Soft Skills Excellence</li>
                <li>Placement Assistance</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold">
                Contact
              </h3>

              <ul className="mt-6 space-y-3 text-slate-400">
                <li>{getSetting("Email", "info@skillhive.com")}</li>

                <li>{getSetting("Phone", "+91 9876543210")}</li>

                <li>{getSetting("Address", "Kolkata, India")}</li>
              </ul>

              <div className="mt-6 flex justify-center gap-4 text-2xl">
                <a
                  href={getSetting("Facebook URL", "#")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdFacebook />
                </a>

                <a
                  href={getSetting("Instagram URL", "#")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram />
                </a>

                <a
                  href={getSetting("LinkedIn URL", "#")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  href={getSetting("YouTube URL", "#")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 py-6 text-center text-slate-500">
            © {new Date().getFullYear()}{" "}
            {getSetting("Website Name", "SkillHive")}. All Rights Reserved.
          </div>
        </Container>
      </footer>
    </SectionReveal>
  );
};

export default Footer;