import { useQuery } from "@tanstack/react-query";
import courseService from "@/services/courseService";

export const useCourses = () => {
  return useQuery({
    queryKey: ["public-courses"],
    queryFn: () => courseService.getCourses(),
    staleTime: 0,
    retry: 1,
    refetchOnWindowFocus: false,
    refetchOnMount: "always",
  });
};