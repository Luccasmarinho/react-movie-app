export function handleScroll(setScroll: React.Dispatch<React.SetStateAction<boolean>>): void {
    const scroll: number = window.scrollY;
    scroll > 50 ? setScroll(true) : setScroll(false);
}