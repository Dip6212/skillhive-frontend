import axiosInstance from "./api";

export interface CourseResponse {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  duration: string;
  level: string;
  mode: string;
  rating: number;
  students: number;
  imageUrl: string;
  brochureUrl: string;
  featured: boolean;
  packageName: "BASIC" | "ADVANCE" | "PRO" | null;
}

export interface ModuleResponse {
  id: number;
  title: string;
  description: string;
  duration: string;
  displayOrder: number;
}

export interface PackageResponse {
  id: number;
  name: "BASIC" | "ADVANCE" | "PRO";
  modules: ModuleResponse[];
}

export interface CourseDetailsResponse {
  id: number;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  duration: string;
  level: string;
  mode: string;
  rating: number;
  students: number;
  imageUrl: string;
  brochureUrl: string;
  featured: boolean;
  packages: PackageResponse[];
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

class CourseService {
  async getCourses(): Promise<CourseResponse[]> {
    const response =
      await axiosInstance.get<ApiResponse<CourseResponse[]>>(
        "/public/courses"
      );

    return response.data.data;
  }

  async getCourse(slug: string): Promise<CourseDetailsResponse> {
    const response =
      await axiosInstance.get<ApiResponse<CourseDetailsResponse>>(
        `/public/courses/${slug}`
      );

    return response.data.data;
  }
}

const courseService = new CourseService();

export default courseService;

export const getCourses = () => courseService.getCourses();

export const getCourse = (slug: string) =>
  courseService.getCourse(slug);