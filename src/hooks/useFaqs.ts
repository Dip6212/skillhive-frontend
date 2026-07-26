import { useQuery } from "@tanstack/react-query";
import faqService from "@/services/faqService";

export const useFaqs = () => {
  return useQuery({
    queryKey: ["public-faqs"],
    queryFn: () => faqService.getFaqs(),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};