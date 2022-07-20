// Config file
export const backendUrl = "";
export function init(additionalConfig) {
    document.getElementById('dog-logo').setAttribute('src', additionalConfig.logo);
}