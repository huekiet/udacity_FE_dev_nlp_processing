import { backendUrl } from "./config";

export async function callAnalyze(url) {
    try {
        const res = await fetch(`${backendUrl}/nlp-sentiment?url=${url}`);
        return await res.json();  
    } catch {
        alert("An internal error occurred, please contact the admin for more information");
    }
}