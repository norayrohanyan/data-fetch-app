import { useEffect, useState } from "react";

export const useAnimation = (index: number, delay: number) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, index * delay);
        return () => clearTimeout(timeout);
    }, [index, delay]);

    return isVisible;
};
