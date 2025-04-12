document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

const translations = {
    en: {
        heading: "Welcome to KisaanConnect",
        description: "This platform empowers farmers with the latest tools, resources, and community connections."
    },
    hi: {
        heading: "किसान कनेक्ट में आपका स्वागत है",
        description: "यह प्लेटफॉर्म किसानों को नवीनतम उपकरणों, संसाधनों और समुदाय से जोड़ने में मदद करता है।"
    }
};

document.getElementById('language-selector').addEventListener('change', function () {
    const lang = this.value;
    document.getElementById('heading').innerText = translations[lang].heading;
    document.getElementById('description').innerText = translations[lang].description;
});


base_path = Path("/mnt/data/kisaanconnect")
base_path.mkdir(parents=True, exist_ok=True)

files = {
    "homepage.html": homepage_html,
    "homepage.css": homepage_css,
    "script.js": script_js
}