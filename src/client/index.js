import { handleSubmit } from "./js/formHandler";
import { init } from "./js/config"
// Style import
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import DogLogo from "./assets/img/cute-dog-cartoon.jpg";

const additionalConfig = {
    logo: DogLogo
}
init(additionalConfig);

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js');
    });
}

export { handleSubmit };
