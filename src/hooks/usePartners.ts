import { useQuery } from "@tanstack/react-query";
import partnerService from "@/services/partnerService";

export const usePartners = () => {
  return useQuery({
    queryKey: ["public-partners"],
    queryFn: () => partnerService.getPartners(),
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: 1,
  });
};