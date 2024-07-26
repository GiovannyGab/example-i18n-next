import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    <>
      <h1>{t("title")}</h1>
      <br />
      <br />
      <Link href={`${locale}/about`} locale={locale as any}>
        {t("btnIrAbout")}
      </Link>
    </>
  );
}
