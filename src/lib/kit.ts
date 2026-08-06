export interface DemoFormData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    jobTitle: string;
    volume: string;
    message: string;
}

export interface WhitepaperFormData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
}

export interface ReadinessAssessmentFormData {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    jobTitle: string;
    volume: string;
    intent: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
}

const KIT_API_URL = "https://api.convertkit.com/v3";
const KIT_READINESS_FORM_ID = "9771572";

/**
 * Tags a subscriber via Kit's /tags/{tagId}/subscribe endpoint.
 * This fires tag-based automations every time — even for existing subscribers —
 * which solves the problem of incentive emails not being re-sent.
 */
const tagSubscriber = async (
    tagId: string,
    email: string,
    firstName: string,
    fields: Record<string, string>,
) => {
    const apiKey = import.meta.env.PUBLIC_KIT_API_KEY;

    const response = await fetch(`${KIT_API_URL}/tags/${tagId}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            api_key: apiKey,
            email,
            first_name: firstName,
            fields,
        }),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("Kit Tag API Error:", errorData);
    }
};

export const subscribeToKit = async (formData: DemoFormData) => {
    const formId = import.meta.env.PUBLIC_KIT_FORM_ID;
    const apiKey = import.meta.env.PUBLIC_KIT_API_KEY;
    const tagId = import.meta.env.PUBLIC_KIT_DEMO_TAG_ID;

    if (!formId || !apiKey) {
        console.error("Kit configuration missing. Please ensure PUBLIC_KIT_FORM_ID and PUBLIC_KIT_API_KEY are set.");
        throw new Error("Configuration missing");
    }

    const fields = {
        last_name: formData.lastName,
        company: formData.company,
        job_title: formData.jobTitle,
        volume: formData.volume,
        message: formData.message,
    };

    const body = {
        api_key: apiKey,
        email: formData.email,
        first_name: formData.firstName,
        fields,
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

        // Tag the subscriber so tag-based automations fire even for existing subscribers
        if (tagId) {
            await tagSubscriber(tagId, formData.email, formData.firstName, fields);
        }

        return await response.json();
    } catch (error) {
        console.error("Error submitting to Kit:", error);
        throw error;
    }
};

export const subscribeToWhitepaperKit = async (formData: WhitepaperFormData) => {
    const formId = import.meta.env.PUBLIC_KIT_WHITEPAPER_FORM_ID;
    const apiKey = import.meta.env.PUBLIC_KIT_API_KEY;
    const tagId = import.meta.env.PUBLIC_KIT_WHITEPAPER_TAG_ID;

    if (!formId || !apiKey) {
        console.error("Kit configuration missing. Please ensure PUBLIC_KIT_WHITEPAPER_FORM_ID and PUBLIC_KIT_API_KEY are set.");
        throw new Error("Configuration missing");
    }

    const fields = {
        last_name: formData.lastName,
        company: formData.company,
    };

    const body = {
        api_key: apiKey,
        email: formData.email,
        first_name: formData.firstName,
        fields,
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

        // Tag the subscriber so tag-based automations fire even for existing subscribers
        if (tagId) {
            await tagSubscriber(tagId, formData.email, formData.firstName, fields);
        }

        return await response.json();
    } catch (error) {
        console.error("Error submitting to Kit:", error);
        throw error;
    }
};

export const subscribeToReadinessAssessmentKit = async (formData: ReadinessAssessmentFormData) => {
    const formId = import.meta.env.PUBLIC_KIT_READINESS_FORM_ID || KIT_READINESS_FORM_ID;
    const apiKey = import.meta.env.PUBLIC_KIT_API_KEY;
    const tagId = import.meta.env.PUBLIC_KIT_READINESS_TAG_ID || import.meta.env.PUBLIC_KIT_DEMO_TAG_ID;

    if (!formId || !apiKey) {
        console.error("Kit configuration missing. Please ensure PUBLIC_KIT_READINESS_FORM_ID and PUBLIC_KIT_API_KEY are set.");
        throw new Error("Configuration missing");
    }

    const typeDetails = [
        formData.intent && `Intent: ${formData.intent}`,
        formData.volume && `Monthly volume: ${formData.volume}`,
        "Lead source: readiness_assessment",
        "Source page: /readiness-assessment",
        formData.utmSource && `UTM source: ${formData.utmSource}`,
        formData.utmMedium && `UTM medium: ${formData.utmMedium}`,
        formData.utmCampaign && `UTM campaign: ${formData.utmCampaign}`,
    ].filter(Boolean).join(" | ");

    const fields = {
        last_name: formData.lastName,
        company_name: formData.company,
        job_title: formData.jobTitle,
        type: typeDetails,
    };

    const body = {
        api_key: apiKey,
        email: formData.email,
        first_name: formData.firstName,
        fields,
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

        if (tagId) {
            await tagSubscriber(tagId, formData.email, formData.firstName, fields);
        }

        return await response.json();
    } catch (error) {
        console.error("Error submitting readiness assessment to Kit:", error);
        throw error;
    }
};
