// ============================================================
// CATALOGUE DATA — pulled live from your new Google Drive
// "CATEGORIES" folder (owner: hanwantdabi@gmail.com)
// ------------------------------------------------------------
// This is the ONLY file you need to edit to update your website.
// No backend, no database — just this list of categories/products.
//
// Each image is a direct Google Drive link built from the file's ID:
// https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000
// Make sure every new file you add is shared as
// "Anyone with the link -> Viewer" or it won't show on the site.
//
// "banner" = that category's "FRONT IMAGE/PIC OF CATEGORY" file.
// "products" = each BAGx.jpg inside that category folder.
//
// NOTE: I left out the "COMMON PHOTO" / "COMMON PIC" files (sizing
// charts, before/after oiling shots, etc.) since those looked like
// general info graphics rather than individual products. Tell me if
// you'd like those shown too (e.g. as extra info images on the
// category page) and I'll add them back in.
//
// Only "Matka Bag" and "Crunchy Handle Bag" have photos uploaded so
// far — the other 10 category folders you created are still empty.
// Add photos to them the same way and send the word; I'll pull them
// in too.
// ============================================================

function driveImg(id) {
  return "https://drive.google.com/thumbnail?id=" + id + "&sz=w1000";
}

const CATALOGUE = [
  {
    name: "Matka Bag",
    thumbnail: driveImg("1i1PJMcmdIo0mehyMgeGk6BQeTWGVmV3K"),
    banner: driveImg("1i1PJMcmdIo0mehyMgeGk6BQeTWGVmV3K"),
    products: [
      { name: "Matka Bag 1",  image: driveImg("18AFGu4fAS1A1OZdB9hzxJByo4kyDv7vm") },
      { name: "Matka Bag 2",  image: driveImg("1SOcVLXMJ5c4C8aoQxRBrtADnCRKl8h1N") },
      { name: "Matka Bag 3",  image: driveImg("1nznot81yv9sH8POM4lM36cG6IyARlfGj") },
      { name: "Matka Bag 4",  image: driveImg("165geC_kUMO38b5woSkMUhP1DPz8IJH1w") },
      { name: "Matka Bag 5",  image: driveImg("1M5pqliafwLqGoFvzoO2wdkfcUNCb_7ge") },
      { name: "Matka Bag 6",  image: driveImg("1e24rjxBJR99uLURDBtrJzXRwz9BxTZdZ") },
      { name: "Matka Bag 7",  image: driveImg("1U1jEtZ4aucywP49wPQOlpb3rBIxaEErQ") },
      { name: "Matka Bag 8",  image: driveImg("1feN3OeZbxmPAJEg5mm1euI6myB-swDuB") },
      { name: "Matka Bag 9",  image: driveImg("1OLWDTzymPCErXdIz6Yp3NUCsRtkIG8PK") },
      { name: "Matka Bag 10", image: driveImg("1beKWyH6J9vI0Ymp-SpZOeUXmDFJyu1ck") },
      { name: "Matka Bag 11", image: driveImg("1ONt1FHhagzz3NGWsAG7kJqbyVJjZIasp") },
      { name: "Matka Bag 12", image: driveImg("1IG3ACEN91fh4bhQ8z3YRd6G81t5dxD_D") },
      { name: "Matka Bag 13", image: driveImg("1sCs0liaWH1HQi5g_sT6IO5vNjS0fUxKO") },
      { name: "Matka Bag 14", image: driveImg("1B4WN0q_tUPv_GBVq2yZ-WWcoJcBMxRJP") },
      { name: "Matka Bag 15", image: driveImg("1K0QynVVm3kvTmFeqroRepDF9s5xKgvIz") }
    ]
  },
  {
    name: "Crunchy Handle Bag",
    thumbnail: driveImg("1LNbLbNiZj9y2zHA0wsUnzd7aC4zTlg25"),
    banner: driveImg("1LNbLbNiZj9y2zHA0wsUnzd7aC4zTlg25"),
    products: [
      { name: "Crunchy Handle Bag 1",  image: driveImg("1Ox4u5QsDgKuLv7Dv00OELZ-2WR2_3K-I") },
      { name: "Crunchy Handle Bag 2",  image: driveImg("1WNydsl8vhv6SH-fuk6G7h0jRVePXPan6") },
      { name: "Crunchy Handle Bag 3",  image: driveImg("13PzrRpClpD3OIE7c-3T6CL_TwWjJwH3W") },
      { name: "Crunchy Handle Bag 4",  image: driveImg("1n9aVKU7o9yLZk8z6VOfgNXOnDz5GSdRD") },
      { name: "Crunchy Handle Bag 5",  image: driveImg("1phoDahhn8IlV_dD_tDhj8C0J5YiCGlxN") },
      { name: "Crunchy Handle Bag 6",  image: driveImg("1eIh5FWyYrO-xNY_Xky6dk10Z39s1fMev") },
      { name: "Crunchy Handle Bag 7",  image: driveImg("1P-YkqExn2Sb_F6TGMqQKJQ4nRO0q-Qmx") },
      { name: "Crunchy Handle Bag 8",  image: driveImg("1pnuabpaqF9eHFZhe9nvpMBuI-fJpIhKk") },
      { name: "Crunchy Handle Bag 9",  image: driveImg("1XNRQbhRp4aGNPMkJUsoyBJICXEDRxl3P") },
      { name: "Crunchy Handle Bag 10", image: driveImg("1zjobxtP0eSqDrti7OYfB97hVveTa5XEA") },
      { name: "Crunchy Handle Bag 11", image: driveImg("1Pw4D_CVUDan38xZIDyxk8TcgPyiXIYOQ") },
      { name: "Crunchy Handle Bag 12", image: driveImg("1DwEitJbKCW3VaS6EeXTyo748AXSUOcdv") },
      { name: "Crunchy Handle Bag 13", image: driveImg("1EYmNafZy5RQZhz9aWBW55HYvisoUZWvm") },
      { name: "Crunchy Handle Bag 14", image: driveImg("19LfNDOVdPjQiujrjsdbk_Tu5rge607-a") },
      { name: "Crunchy Handle Bag 15", image: driveImg("1bQAzDo2ROMIAnxN9xb__F_L_ijfWV3E8") }
    ]
  }
  // 👉 Add more categories here once you upload photos into their
  // Drive folders (BACKPACK, MEN'S WALLET, LAPTOP BAG, etc.)
];
