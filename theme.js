const storageKey = 'semantique-theme';

const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey);
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
}

const setPreference = (theme) => {
    localStorage.setItem(storageKey, theme);
    reflectPreference();
}

const reflectPreference = () => {
    const theme = getColorPreference();
    document.documentElement.setAttribute('data-theme', theme);
    
    // Update the button text/icon if it exists
    const btn = document.querySelector('#theme-toggle');
    if (btn) {
        btn.innerText = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
    }
}

// Run on page load
reflectPreference();

// Toggle function
const toggleTheme = () => {
    const current = getColorPreference();
    setPreference(current === 'dark' ? 'light' : 'dark');
}

// Sync with system changes
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({matches:isDark}) => {
        setPreference(isDark ? 'dark' : 'light');
      });