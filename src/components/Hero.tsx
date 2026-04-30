import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WordsPullUp } from "./WordsPullUp";

const EASE = [0.16, 1, 0.3, 1] as const;
const CTA_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdCsAEav_RcrYABNzxcitREDRkPSsPpO794hDsEwL758GXiEw/viewform?usp=publish-editor";

export function Hero() {
  return (
    <section className="h-screen w-full p-4 md:p-6 bg-black">
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black">
        {/* Background video (Vimeo iframe) */}
        <div className="absolute inset-0 pointer-events-none">
          <iframe
            src="https://player.vimeo.com/video/1188008102?background=1&autoplay=1&loop=1&muted=1&autopause=0"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[56.25vw] min-w-full min-h-full"
            allow="autoplay; fullscreen"
            frameBorder={0}
            title="VietnamBible background"
          />
        </div>

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Bottom navbar / content */}
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-2 md:pb-4">
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
            {/* Heading */}
            <div className="col-span-12 lg:col-span-8">
              <WordsPullUp
                text="VietnamBible"
                showAsterisk
                className="text-[10.4vw] sm:text-[9.6vw] md:text-[8.8vw] lg:text-[8vw] xl:text-[7.6vw] 2xl:text-[8vw] font-medium leading-[0.85] tracking-[-0.07em]"
              />
            </div>

            {/* Right column */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 md:gap-6 pb-4 md:pb-8">
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
              >
                VietnamBible is the quintessential travel guide with plans to develop into the
                biggest food/travel brand in Vietnam and the information kiosk for all foreign
                tourists visiting Vietnam. Our team has over 1 billion lifetime views and plan to
                use aconcurrent social media and editorial based strategy to become the number 1
                English speaking publication in this rapidly developing market.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              >
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-primary rounded-full pl-5 pr-1.5 py-1.5 text-black font-medium text-sm sm:text-base"
                >
                  <span>Sponsorships available</span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#E1E0CC" }} />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
