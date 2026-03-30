import { client } from "@/sanity/lib/client";
import { bannerPromotionQuery } from "@/sanity/lib/queries";
import PromotionBannerClient, {
  type BannerPromotion,
} from "./PromotionBannerClient";

export default async function PromotionBanner() {
  const promo = await client.fetch<BannerPromotion | null>(
    bannerPromotionQuery,
    {},
    { next: { revalidate: 300 } },
  );

  if (!promo) return null;

  return <PromotionBannerClient promo={promo} />;
}
