interface BannerTileProps {
  image: string;
  imageAltText?: string;
  text: string;
  href: string;
}

export const BannerTile = ({
  image,
  imageAltText,
  text,
  href,
}: BannerTileProps) => (
  <div className="banner-tile">
    <a href={href}>
      <img src={image} alt={imageAltText} width={"40px"} />
      <div>{text}</div>
    </a>
  </div>
);
