import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const t = useTranslations("About");
  return (
    <>
      <h1>{t("title")}</h1>
      <br />
      <br />
      <Link href="/">Ir para a tela principal</Link>
    </>
  );
}
