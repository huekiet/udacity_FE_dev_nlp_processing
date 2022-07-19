import { backendUrl } from "./config";

export async function callAnalyze(sentence) {
    try {
        const res = await fetch(`${backendUrl}/nlp-sentiment?txt=${sentence}`);
        return await res.json();  
    } catch {
        alert("An internal error occurred, please contact the admin for more information");
    }
}