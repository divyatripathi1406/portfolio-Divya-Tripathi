"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  words: readonly string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

/** Cycles through `words`, typing and deleting each with a blinking caret. */
export function TypingAnimation({
  words,
  className,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1600,
}: TypingAnimationProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.1em] animate-pulse bg-primary align-middle" />
    </span>
  );
}
