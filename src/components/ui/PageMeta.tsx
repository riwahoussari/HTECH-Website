import { Helmet } from "react-helmet";

export function PageMeta({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Helmet>
      <title>
        {title ? `${title.split("<br>").join(" ")} | HTECH` : "HTECH"}
      </title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
