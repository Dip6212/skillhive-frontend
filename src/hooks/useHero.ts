import { useQuery } from "@tanstack/react-query";
import heroService from "@/services/heroService";

export const useHero = () => {
  return useQuery({
    queryKey: ["hero"],
    queryFn: () => heroService.getHero(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 1,
  });
};