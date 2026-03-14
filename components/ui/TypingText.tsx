"use client";
import React from "react";
import TextType from "./TextType";

interface TypingTextProps {
  texts: string[];
  typingSpeed?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({
  texts = ["Full-stack Developer"],
  typingSpeed = 75,
  pauseDuration = 1500,
  deletingSpeed = 30,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
}) => {
  return (
    <TextType
      text={texts}
      typingSpeed={typingSpeed}
      pauseDuration={pauseDuration}
      deletingSpeed={deletingSpeed}
      showCursor={showCursor}
      cursorCharacter={cursorCharacter}
      className={className}
      loop
    />
  );
};

export default TypingText;
