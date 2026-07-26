import axiosInstance from "@/services/api";

export interface FaqResponse {
  id: number;
  question: string;
  answer: string;
  displayOrder: number;
  isActive: boolean;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

class FaqService {
  async getFaqs(): Promise<FaqResponse[]> {
    const response =
      await axiosInstance.get<ApiResponse<FaqResponse[]>>(
        "/public/faqs"
      );

    return response.data.data;
  }
}

const faqService = new FaqService();

export default faqService;