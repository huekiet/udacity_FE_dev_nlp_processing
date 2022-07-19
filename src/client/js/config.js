// Config file
export const backendUrl = "";
export const minSentenceLength = 10;
export function init(additionalConfig) {
    document.getElementById('dog-logo').setAttribute('src', additionalConfig.logo);
}