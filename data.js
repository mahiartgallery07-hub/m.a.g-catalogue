// ============================================================
// CATALOGUE DATA — pulled live from your Google Drive
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
// "products" = each BAG/PURSE/CLUTCH file inside that category folder.
//
// HOW "COMMON PHOTOS" WORK
// ------------------------------------------------------------
// Each category below has a "commonPhotos" list — this is for the
// "COMMON PHOTO" / "COMMON PIC" files (sizing charts, before/after
// oiling shots, care instructions, etc.) sitting in that category's
// Drive folder.
//
// Once you add file IDs there, the site automatically:
//   1. Shows them as a horizontal swipeable strip at the top of
//      that category's page.
//   2. Includes them in the full-screen "listing" carousel for
//      EVERY product in that category — so tapping any bag photo
//      opens a gallery that starts with that bag, and lets people
//      swipe through to see the common/info photos too.
//
// To add one: open the file in Drive, click Share -> "Anyone with
// the link -> Viewer", copy the long ID from the URL
// (drive.google.com/file/d/THIS_PART/view), and add a line like:
//   driveImg("PASTE_FILE_ID_HERE"),
// inside that category's commonPhotos array below.
//
// ------------------------------------------------------------
// UPDATED 2026-07-19 — synced with your current Drive folders:
//   1. MATKA BAG               -> 15 products (added BAG1, which
//                                  was in the folder but missing
//                                  from the site before)
//   2. CRUNCHY HANDLE BAG      -> 15 products (unchanged)
//   3. HAND PURSE (CROSS BODY) -> NEW, 9 products
//   4. HAND PURSE              -> NEW, 9 products
//   5. HAND CLUTCH             -> NEW, 9 products
//   6. CROSS BODY BAG          -> 9 products (unchanged)
//
// NOTE: You have two folders that both look like a "hand purse"
// category — "3.HAND PURSE ( CROSS BODY )" and
// "3.HAND PURSE (3 FOLDER)". They have different photos in them,
// so I've added both as separate categories ("Hand Purse (Cross
// Body)" and "Hand Purse") rather than guessing you want them
// merged. Rename or merge them yourself below if that's not right.
//
// Still-empty folders in Drive (no front pic / products yet):
//   COIN PURSE, SLING BAG, SLING BAG (SQUARE), LAPTOP BAG,
//   DUFFLE BAG, BACKPACK, MEN'S WALLET, CROSS BODY BAGS (5.)
// Add photos to them the same way and send the word; I'll pull
// them in too.
// ============================================================

function driveImg(id) {
  return "https://drive.google.com/thumbnail?id=" + id + "&sz=w1000";
}

const CATALOGUE = [
  {
    name: "Matka Bag",
    thumbnail: driveImg("1i1PJMcmdIo0mehyMgeGk6BQeTWGVmV3K"),
    banner: driveImg("1i1PJMcmdIo0mehyMgeGk6BQeTWGVmV3K"),
    commonPhotos: [
      driveImg("1YOJkddsgYMtPqyv5X89kMVenfuMKVJt0"), // COMMON PIC 1
      driveImg("15XPQoLxu1oGJG_1PE92L80nSPuRLrNWh")  // COMMON PIC 2
    ],
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
    commonPhotos: [
      driveImg("1pYhoRbc-hy2rZK-1i03sYa58Fj0UwNdk"), // COMMON PHOTO 1
      driveImg("1rHcTS-hHXXt3RljA6HgufQY7PvBAJ24F"), // COMMON PHOTO 2
      driveImg("1cKZ7INa2_J7RMDAVvF8S5JEYPiuLVHtn"), // COMMON PHOTO 3
      driveImg("1R8rPH_UQ05cg_p3KByNhFZfjtY4nK3oS")  // COMMON PHOTO 4
    ],
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
  },
  {
    name: "Hand Purse (Cross Body)",
    thumbnail: driveImg("1VMhjZCF0CwZVCrALW2Xqg5Cn-shNfDid"),
    banner: driveImg("1VMhjZCF0CwZVCrALW2Xqg5Cn-shNfDid"),
    commonPhotos: [
      driveImg("1nNR0sfyjRFGRPRBvEpMTa4G98KAXrPyG") // COMMON PIC 1
    ],
    products: [
      { name: "Hand Purse 1", image: driveImg("11zqhI9TQCMX9OVuwI06gfhi_ll-bfhof") },
      { name: "Hand Purse 2", image: driveImg("1BqrcoPnBKDcGAleGxLtFvRQkBW8CCVe9") },
      { name: "Hand Purse 3", image: driveImg("1II04wI83q8cW_LDc2kLfzWNxk8-pfbD7") },
      { name: "Hand Purse 4", image: driveImg("1y04mjSQW1tEsdRsiRJ1in5IuZPEpY2Cz") },
      { name: "Hand Purse 5", image: driveImg("12YxjYdpMDhTqsWzs66NA-CN_iuNiu2OL") },
      { name: "Hand Purse 6", image: driveImg("1G-cAUvBrVI_E2hTsWh0tDQC3S938akNA") },
      { name: "Hand Purse 7", image: driveImg("1UAPc90TF_nFdJaqLS-njDgmmLhoiNKYt") },
      { name: "Hand Purse 8", image: driveImg("1xPUHivdNcOMbYs-1mjFdBGDDRugGRDmf") },
      { name: "Hand Purse 9", image: driveImg("1Cvb555YBPU1euzbDsX3MNcpeDUgkt3u1") }
    ]
  },
  {
    name: "Hand Purse",
    thumbnail: driveImg("1Kq6wGdJN2cN9Duk3Dq2TxHd8hE5zCnp9"),
    banner: driveImg("1Kq6wGdJN2cN9Duk3Dq2TxHd8hE5zCnp9"),
    commonPhotos: [
      driveImg("1I05XG8MqDUQFEh9pzAIbBwaybE0B1qAU") // COMMON PIC 1
    ],
    products: [
      { name: "Hand Purse 1", image: driveImg("1bErnHmlbuxOaC-TUByBFkopmTQrA-dEf") },
      { name: "Hand Purse 2", image: driveImg("1ah94R1dxozWG9Wnc8rr-a0r87xs129eo") },
      { name: "Hand Purse 3", image: driveImg("1ZYUubeQ_nTspC2okzHRqAC_2EsyZ9iBS") },
      { name: "Hand Purse 4", image: driveImg("1iu_aGfowo3I0PP_VO4qsa5QTPJYCngL0") },
      { name: "Hand Purse 5", image: driveImg("1oLkqVmw9Y10CtjNgRvvH42ExadJ5wTXh") },
      { name: "Hand Purse 6", image: driveImg("10RxrZaS6dSk9qnGSpfSgUKUCZmxxsp9p") },
      { name: "Hand Purse 7", image: driveImg("1EcQqV8wUb_A_bY_Xyb9slmmyMA1ioTPo") },
      { name: "Hand Purse 8", image: driveImg("10CXFZA8Bnl6LVx6YMOcg7cjwal5McTmv") },
      { name: "Hand Purse 9", image: driveImg("1-fdsAAxqYgifO_E-NX5q5Ik4tgAgW6px") }
    ]
  },
  {
    name: "Hand Clutch",
    thumbnail: driveImg("1S1zwhqd0qruN1C0V4Usjq1cI_k3EAe2A"),
    banner: driveImg("1S1zwhqd0qruN1C0V4Usjq1cI_k3EAe2A"),
    commonPhotos: [
      driveImg("1qhG8Wt0BIbuNPxQ6zXrZNBAgqGf8gRrG") // COMMON PIC 1
    ],
    products: [
      { name: "Hand Clutch 1", image: driveImg("1avq6mVOjR9gMlI-sxHA_xv0NOk6eG9uA") },
      { name: "Hand Clutch 2", image: driveImg("1ATIn6ozNxo79aqB9p5UwGbWzUr_iUwnB") },
      { name: "Hand Clutch 3", image: driveImg("1xxWE9U6WNAgRvdO8M8_sFAv3pA6u61wb") },
      { name: "Hand Clutch 4", image: driveImg("1llk-2ipLsffSUFRVOzwPIIQzEotaDQ_K") },
      { name: "Hand Clutch 5", image: driveImg("1zoHGI0Ctd6K1y_MzHlJvTmHvGJIhRzUH") },
      { name: "Hand Clutch 6", image: driveImg("1jY9ESu4R8Cyjxwn8nNYJaImVJZEzccgx") },
      { name: "Hand Clutch 7", image: driveImg("1JxD5WEO2L1O6d-0m3oApq0Lhu_E3lpwj") },
      { name: "Hand Clutch 8", image: driveImg("1GDRQaTOIgL4J0EnG6GyBLFodDsJmQbOq") },
      { name: "Hand Clutch 9", image: driveImg("1KAcyRMLhWjRf918rbW-wvnBI7qKhrran") }
    ]
  },
  {
    name: "Cross Body Bag",
    thumbnail: driveImg("1EZqHSw5zMV4yNTacNRF9SUllrKI-OJfH"),
    banner: driveImg("1EZqHSw5zMV4yNTacNRF9SUllrKI-OJfH"),
    commonPhotos: [
      driveImg("17BEb78KQtq8OmFYMHfFMLwjBy4xlq6YH"), // COMMON PIC 1
      driveImg("12fKNRRYiXXjVVLHRwsJFrk-5p5xGlBNC")  // COMMOM PIC 2
    ],
    products: [
      { name: "Cross Body Bag 1", image: driveImg("1neU7hO3K-nSyNKwHpS2e2WwTNtmGRxSh") },
      { name: "Cross Body Bag 2", image: driveImg("18_FqlXWn5LziE5AyacInG0LpVPglViEf") },
      { name: "Cross Body Bag 3", image: driveImg("1-gJhKq2mza94ZWJWxGTCFoDeIpNi_R8z") },
      { name: "Cross Body Bag 4", image: driveImg("1hmF8hxAns6b8jUS_-um6yJr9e1BMG277") },
      { name: "Cross Body Bag 5", image: driveImg("1NsRONndGrKU8x2Nx27a1m-wS87xB2NUy") },
      { name: "Cross Body Bag 6", image: driveImg("1JjHdYJQ40a5I6fYQMjOWRWzDC3lXegq1") },
      { name: "Cross Body Bag 7", image: driveImg("1p3Yaq8Ml9GuDrl0YRcq5rk9VUpYR8kvm") },
      { name: "Cross Body Bag 8", image: driveImg("1FynZqCZe0g6g22HFKRNFReBLhvTByTLC") },
      { name: "Cross Body Bag 9", image: driveImg("1487a-u3ZQ3rWWZ9Cve6l4QjYcA3cON3q") }
    ]
  }
  // 👉 Add more categories here once you upload photos into their
  // Drive folders (COIN PURSE, SLING BAG, SLING BAG (SQUARE),
  // LAPTOP BAG, DUFFLE BAG, BACKPACK, MEN'S WALLET, etc.)
  // Copy this shape for each new one:
  // {
  //   name: "Category Name",
  //   thumbnail: driveImg("front_image_file_id"),
  //   banner: driveImg("front_image_file_id"),
  //   commonPhotos: [ driveImg("common_photo_file_id"), ... ],
  //   products: [
  //     { name: "Category Name 1", image: driveImg("file_id") },
  //   ]
  // }
];
