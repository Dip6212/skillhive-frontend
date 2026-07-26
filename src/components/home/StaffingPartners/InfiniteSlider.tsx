import { motion } from "framer-motion";
import PartnerLogo from "./PartnerLogo";

import { usePartners } from "@/hooks/usePartners";

const InfiniteSlider = () => {
  const {
    data: partners,
    isLoading,
    isError,
  } = usePartners();

  if (isLoading) {
    return (
      <div className="text-center py-10">
        Loading partners...
      </div>
    );
  }

  if (isError || !partners) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load partners.
      </div>
    );
  }

  const items = [...partners, ...partners];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((partner) => (
          <PartnerLogo
            key={`${partner.id}-${Math.random()}`}
            name={partner.name}
            logo={partner.logo?.fileUrl ?? ""}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;