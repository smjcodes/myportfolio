import Image from "next/image";

import { siteConfig } from "@/data/site";

type ProfileCardProps = {
  compact?: boolean;
};

export function ProfileCard({ compact = false }: ProfileCardProps) {
  return (
    <a
      className={`profile-card${compact ? " profile-card--compact" : ""}`}
      href="#introduction"
      aria-label={`Go to ${siteConfig.fullName} introduction`}
    >
      <span className="profile-card__image-wrap">
        <Image
          className="profile-card__image"
          src={siteConfig.profile.photo.src}
          alt={siteConfig.profile.photo.alt}
          width={siteConfig.profile.photo.width}
          height={siteConfig.profile.photo.height}
          priority
        />
      </span>
      <span className="profile-card__name">{siteConfig.fullName}</span>
    </a>
  );
}
