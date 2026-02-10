export interface DemoFormData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    jobTitle: string;
    volume: string;
    message: string;
}

const KIT_API_URL = "https://api.convertkit.com/v3";

export const subscribeToKit = async (formData: DemoFormData) => {
    const formId = import.meta.env.PUBLIC_KIT_FORM_ID;
    const apiKey = import.meta.env.PUBLIC_KIT_API_KEY; // Public API Key

    if (!formId || !apiKey) {
        console.error("Kit configuration missing. Please ensure PUBLIC_KIT_FORM_ID and PUBLIC_KIT_API_KEY are set.");
        throw new Error("Configuration missing");
    }

    const body = {
        api_key: apiKey,
        email: formData.email,
        first_name: formData.firstName,
        fields: {
            last_name: formData.lastName,
            company: formData.company,
            job_title: formData.jobTitle,
            volume: formData.volume,
            message: formData.message,
        },
    };

    try {
        const response = await fetch(`${KIT_API_URL}/forms/${formId}/subscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error("Kit API Error:", errorData);
            throw new Error(errorData.message || "Failed to submit to Kit");
        }

        return await response.json();
    } catch (error) {
        console.error("Error submitting to Kit:", error);
        throw error;
    }
};
