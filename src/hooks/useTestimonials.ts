import { useQuery } from "@tanstack/react-query";
import testimonialService from "@/services/testimonialService";

export const useTestimonials = () => {
  return useQuery({
    queryKey: ["public-testimonials"],
    queryFn: () => testimonialService.getTestimonials(),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};