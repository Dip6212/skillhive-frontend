import axiosInstance from "./api";

export interface MediaResponse {
  id: number;
  fileName: string;
  originalFileName: string;
  contentType: string;
  fileSize: number;
  fileUrl: string;
}

export interface HeroResponse {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  heroImage: MediaResponse | null;
  backgroundImage: MediaResponse | null;
  isActive: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

class HeroService {
  async getHero(): Promise<HeroResponse> {
    const response = await axiosInstance.get<ApiResponse<HeroResponse>>(
      "/public/hero"
    );

    return response.data.data;
  }
}

export default new HeroService();