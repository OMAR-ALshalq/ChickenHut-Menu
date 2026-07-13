import { Helmet } from "react-helmet-async";

export default function SEOMeta({
  title = "ChickenHut | ألذ دجاج في دمشق",
  description = "منيو مطعم ChickenHut في دمشق. ألذ أطباق الدجاج المقلي والمشوي والبرجر مع أسعار وصور. اطلب الآن أو زورونا في سوريا",
  keywords = "chickenhut, تشكين هت, مطعم دجاج, منيو دجاج, مطاعم دمشق, مطاعم سوريا, دجاج مقلي, برجر دجاج, شاورما دجاج, أكل سوري, chicken damascus syria restaurant",
  image = "/Imag/Logo.jpg", // غيّره لرابط شعارك الحقيقي
  url = "https://chickenhut-menu.onrender.com/" // غيّره لرابط المنيو الحقيقي
}) {
  return (
    <>
      {/* البيانات الهيكلية Schema.org */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "ChickenHut",
            description: "مطعم دجاج في دمشق يقدم أشهى الأطباق",
            image: image,
            address: {
              "@type": "PostalAddress",
              streetAddress: "شارع الحمرا, مقابل فندق الشام",
              addressLocality: "دمشق",
              addressCountry: "SY"
            },
            servesCuisine: "دجاج, سوري, عالمي",
            priceRange: "$",
            telephone: "0096311XXXXXXX",
            menu: url,
            acceptsReservations: "True"
          })}
        </script>
      </Helmet>

      {/* الوسوم الوصفية */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={url} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="restaurant.menu" />
        <meta property="og:locale" content="ar_SY" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
    </>
  );
}
