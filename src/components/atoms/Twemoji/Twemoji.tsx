import Image from "next/image";

export interface ITwemoji {
  emoji: string;
  width?: number;
  height?: number;
}

// Emoji source: https://github.com/twitter/twemoji
const Twemoji: React.FC<ITwemoji> = ({ emoji, width = 24, height = 24 }) => {
  const codepoint = emoji.codePointAt(0);
  const emojiCode =
    codepoint !== undefined ? codepoint.toString(16) : undefined;

  return (
    <>
      {emojiCode ? (
        <Image
          src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${emojiCode}.svg`}
          height={height}
          width={width}
          alt={emoji}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Twemoji;
