import { Metadata } from "next";

type MetaTagsProps = {
  title: string;
  description: string;
  image: string;
  url: string;
  siteName?: string;
  type?: string;
};

export function CustomMetaTags({
  title,
  description,
  image,
  url,
  siteName = "Your Site Name",
  type = "website",
}: MetaTagsProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      url,
      siteName,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    // Canonical URL
    alternates: {
      canonical: url,
    },
  };
}
