import api from "./api";

import type { ContactFormData } from "@/validations/contactSchema";

export const createEnquiry = async (
    data: ContactFormData
) => {

    const response = await api.post(
        "/public/enquiries",
        data
    );

    return response.data;
};