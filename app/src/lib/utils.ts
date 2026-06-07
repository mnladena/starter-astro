import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export async function fetchExternalHtml(url: string, { username, password, fallback = "" }: { username?: string; password?: string; fallback?: string } = {}): Promise<string> {
    try {
        const headers: Record<string, string> = {}

        if (username && password) {
            const auth = Buffer.from(`${username}:${password}`).toString("base64")
            headers["Authorization"] = `Basic ${auth}`
        }

        const res = await fetch(url, { headers })

        if (!res.ok) {
            console.warn(`[fetchExternalHtml] Failed to fetch ${url}. Status: ${res.status}`)
            return fallback
        }

        return await res.text()
    } catch (err) {
        console.error(`[fetchExternalHtml] Error fetching ${url}:`, err)
        return fallback
    }
}


export function fullDateTimeWIB(timestamp: string) {
    const date = new Date(Number(timestamp) * 1000)
    return `${date.toLocaleDateString("id-ID", {
        timeZone: "Asia/Jakarta",
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    })} ` +
        `${date.toLocaleTimeString("id-ID", {
            timeZone: "Asia/Jakarta",
            hour: "2-digit",
            minute: "2-digit",
        })} WIB`
}

export function decodeHtml(input: string) {
    if (!input) return "";

    // 1. Decode unicode escape sequences like \u003C
    const unicodeDecoded = input.replace(
        /\\u([\dA-Fa-f]{4})/g,
        (_, hex) => String.fromCharCode(parseInt(hex, 16))
    );

    // 2. Decode HTML entities
    const htmlDecoded = unicodeDecoded
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&");

    // 3. Normalize line breaks
    return htmlDecoded
        .replace(/\r\n/g, "\n")
        .replace(/\r/g, "\n");
}
