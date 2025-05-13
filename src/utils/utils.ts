export function handleScroll(setScroll: React.Dispatch<React.SetStateAction<boolean>>): void {
    const scroll: number = window.scrollY;
    scroll > 50 ? setScroll(true) : setScroll(false);
}

export function handleSession(keySession: string, navSelectValue: string, setNav: React.Dispatch<React.SetStateAction<string>>) {
    sessionStorage.setItem(keySession, navSelectValue);
    setNav(navSelectValue);
}