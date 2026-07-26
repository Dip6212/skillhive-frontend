import axiosInstance from "@/services/api";

export interface SettingResponse {
  id: number;
  key: string;
  value: string;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

class SettingService {
  async getSettings(): Promise<Record<string, string>> {
    const response =
      await axiosInstance.get<ApiResponse<SettingResponse[]>>(
        "/public/settings"
      );

    const settings: Record<string, string> = {};

    response.data.data.forEach((item) => {
      settings[item.key] = item.value;
    });

    return settings;
  }
}

export default new SettingService();