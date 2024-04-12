export type AvatarProps = {
  src: string;
  alt: string;
};

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return (
    <img className="inline-block h-10 w-10 rounded-full" src={src} alt={alt} />
  );
};
