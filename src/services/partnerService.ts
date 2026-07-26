import axiosInstance from "./api";

export interface MediaResponse {
  id: number;
  fileName: string;
  originalFileName: string;
  contentType: string;
  fileSize: number;
  fileUrl: string;
}

export interface PartnerResponse {
  id: number;
  name: string;
  websiteUrl: string;
  displayOrder: number;
  isActive: boolean;
  logo: MediaResponse | null;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

class PartnerService {
  async getPartners(): Promise<PartnerResponse[]> {
    const response =
      await axiosInstance.get<ApiResponse<PartnerResponse[]>>(
        "/public/partners"
      );

    return response.data.data;
  }
}

export default new PartnerService();