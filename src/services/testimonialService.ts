import axiosInstance from "@/services/api";

export interface MediaResponse {
  id: number;
  fileName: string;
  originalFileName: string;
  contentType: string;
  fileSize: number;
  fileUrl: string;
}

export interface TestimonialResponse {
  id: number;
  name: string;
  designation: string;
  company: string;
  review: string;
  rating: number;
  displayOrder: number;
  isActive: boolean;
  profileImage: MediaResponse | null;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

class TestimonialService {
  async getTestimonials(): Promise<TestimonialResponse[]> {
    const response =
      await axiosInstance.get<ApiResponse<TestimonialResponse[]>>(
        "/public/testimonials"
      );

    return response.data.data;
  }
}

const testimonialService = new TestimonialService();

export default testimonialService;