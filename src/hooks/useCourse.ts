import { useQuery } from "@tanstack/react-query";
import courseService from "@/services/courseService";

export const useCourse = (slug: string) => {
  return useQuery({
    queryKey: ["public-course", slug],
    queryFn: () => courseService.getCourse(slug),
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false,
  });
};