import { useQuery } from "@tanstack/react-query";
import settingService from "@/services/settingService";

export const useSettings = () =>
  useQuery({
    queryKey: ["settings"],
    queryFn: () => settingService.getSettings(),
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });