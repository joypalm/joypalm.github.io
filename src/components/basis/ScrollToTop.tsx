import { useEffect } from "react";
import { useLocation } from "react-router";

export function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}