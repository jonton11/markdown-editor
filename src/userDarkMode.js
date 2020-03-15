
import { useEffect, useState } from 'react';

themeToggle = () => {
    const [ theme, setTheme ] = useState('light');
    const toggleTheme = () => setTheme((theme === 'dark') ? setTheme('light') : setTheme('dark'))

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');

        localTheme && setTheme(localTheme);
    }, [])

    return { theme, toggleTheme }
}

export default themeToggle