declare module 'astro:env/server' {
	export const RESEND_API_KEY: string | undefined;	
	export const CONTACT_TO_EMAIL: string | undefined;	
	export const CONTACT_FROM_EMAIL: string | undefined;	
	export const CONTACT_DEMO_MODE: boolean;	
}