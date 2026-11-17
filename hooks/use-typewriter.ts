"use client";

import { useState, useEffect } from "react";

export function useTypewriter(words: string[], speed = 100, delay = 2000) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const word = words[currentWordIndex];

        if (isDeleting) {
            timer = setTimeout(() => {
                setCurrentText((prev) => prev.slice(0, -1));
            }, speed / 2);
        } else {
            timer = setTimeout(() => {
                setCurrentText((prev) => word.slice(0, prev.length + 1));
            }, speed);
        }

        if (!isDeleting && currentText === word) {
            timer = setTimeout(() => setIsDeleting(true), delay);
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

    return currentText;
}
export default useTypewriter;
