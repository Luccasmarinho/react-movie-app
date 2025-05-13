export function handleScroll(setScroll: React.Dispatch<React.SetStateAction<boolean>>): void {
    const scroll: number = window.scrollY;
    scroll > 50 ? setScroll(true) : setScroll(false);
}

export function handleSession(navSelectValue: string, setNav: React.Dispatch<React.SetStateAction<string>>) {
    sessionStorage.setItem("s", navSelectValue);
    setNav(navSelectValue);
}