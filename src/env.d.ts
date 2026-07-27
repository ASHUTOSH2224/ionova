/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GHOST_API_URL: string;
    readonly VITE_GHOST_CONTENT_API_KEY: string;
    readonly PUBLIC_KIT_API_KEY: string;
    readonly PUBLIC_KIT_FORM_ID: string;
    readonly PUBLIC_KIT_WHITEPAPER_FORM_ID: string;
    readonly PUBLIC_KIT_DEMO_TAG_ID: string;
    readonly PUBLIC_KIT_WHITEPAPER_TAG_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
