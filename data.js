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
//   7. COIN PURSE              -> NEW, 8 products (grid style)
//   8. MESSENGER BAG           -> NEW, 4 listings (subcategory style)
//   9. LAPTOP BAG              -> NEW, 5 listings (subcategory style)
//  10. DUFFLE BAG              -> NEW, 5 listings (subcategory style)
//  11. BACKPACK                -> NEW, 7 listings (subcategory style)
//
// NOTE: You have two folders that both look like a "hand purse"
// category — "3.HAND PURSE ( CROSS BODY )" and
// "3.HAND PURSE (3 FOLDER)". They have different photos in them,
// so I've added both as separate categories ("Hand Purse (Cross
// Body)" and "Hand Purse") rather than guessing you want them
// merged. Rename or merge them yourself below if that's not right.
//
// ------------------------------------------------------------
// TWO CATEGORY STYLES
// ------------------------------------------------------------
// A) "Catalogue" categories (no `type` set, e.g. Matka Bag, Coin
//    Purse): category page shows a GRID of every product (one
//    photo each). Tapping a product opens a carousel with that
//    photo + any commonPhotos.
//
// B) "Subcategory" categories (`type: "subcategory"`, e.g.
//    Messenger Bag, Laptop Bag, Duffle Bag, Backpack): the
//    category itself is just a front picture. Tapping it opens a
//    LISTING page — one tile per bag, named, showing that bag's
//    own front photo. Tapping a listing goes STRAIGHT into a
//    carousel of every photo of that one bag (front + all angles/
//    dimension shots) — no grid, no common photos mixed in,
//    because every photo in that listing's folder is the same bag.
//
// For subcategory folders where no file was explicitly named
// "front image", I picked the earliest/first photo in the folder
// as the listing's thumbnail — rename a file to include "front"
// in Drive if you want a different one used, and let me know to
// re-sync.
//
// Still-empty folders in Drive (no photos yet, so left out):
//   MESSENGER BAG (SQUARE) — subfolders exist but all empty
//   MEN'S WALLET, CROSS BODY BAGS (5.) — no files at all
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
  },
  {
    // Grid-style category (Type A). Folder had no subfolders, just
    // loose photos, so every photo is its own product per your call.
    name: "Coin Purse",
    thumbnail: driveImg("1uV2MmFsOBvl4qfsbuCdiCT_hE37E2741"),
    banner: driveImg("1uV2MmFsOBvl4qfsbuCdiCT_hE37E2741"),
    commonPhotos: [],
    products: [
      { name: "Coin Purse 1", image: driveImg("1EMSfXmFc5WF_VU1yjFqTcYF-RN2hYLst") },
      { name: "Coin Purse 2", image: driveImg("1Iso_sdRuoY5-XG_Mugbum4cHXKUGwzfG") },
      { name: "Coin Purse 3", image: driveImg("1eF2Kj9pA9wnk-0QiDmvyOcsCC5Ac9Gut") },
      { name: "Coin Purse 4", image: driveImg("1k3UA6LxU1nonjV08zNhLGqWxZYltJ_1v") },
      { name: "Coin Purse 5", image: driveImg("1yyDy0d41agkoelE5ifKwjv5lhHQI1Pui") },
      { name: "Coin Purse 6", image: driveImg("1KNS_e0Vwp18qxN8h0kHQ-uaEeBhSdL0I") },
      { name: "Coin Purse 7", image: driveImg("1_Btw-kA30JFXkOutbCDYuOxrNNcvOwNu") },
      { name: "Coin Purse 8", image: driveImg("1qdmYYb-SsWcmMDjODmNA-_ibxrdFBpzL") }
    ]
  },
  {
    // Subcategory-style category (Type B). Category front pic is
    // Drive's "0.front image of ctagoery" file. Each Sling Bag
    // subfolder becomes one listing that opens straight into a
    // carousel of that bag's own photos.
    name: "Messenger Bag",
    type: "subcategory",
    thumbnail: driveImg("1wO2a7ccsow7wI7rw6lQjhdioEDyDv-fs"),
    banner: driveImg("1wO2a7ccsow7wI7rw6lQjhdioEDyDv-fs"),
    subcategories: [
      {
        name: "Sling Bag 1",
        image: driveImg("1oexwQuRJIUoO_ND48Kf9q3o17tgcppjQ"),
        photos: [
          driveImg("1oexwQuRJIUoO_ND48Kf9q3o17tgcppjQ"),
          driveImg("1MA3eX95tNBI4gkFLjcWMCmOk7hrLrS1u"),
          driveImg("1NJBzEhNMEZVqUm5OuTxcrDC_mSe0F1V7"),
          driveImg("1hqkF71r2gxBQ3VVw_aNeb5YRctQF7lg0"),
          driveImg("1QJMskW2fZFhwzqQfTh9MOsiQ3786XKu8")
        ]
      },
      {
        name: "Sling Bag 2",
        image: driveImg("1POvnv0GTNrcw-Wo1H2ET_Fkza7BLtqtS"),
        photos: [
          driveImg("1POvnv0GTNrcw-Wo1H2ET_Fkza7BLtqtS"),
          driveImg("1GK7h9zhueqHiI6u_T-eWQrBxcsOwOlou"),
          driveImg("1UqV9d8G4LP5YK0BPRmgaiYyZUu4ebneP"),
          driveImg("1OJnciitTomXAWeFCKOZxMThGJ-oWhxjf")
        ]
      },
      {
        name: "Sling Bag 3",
        image: driveImg("1t1jjlR5Trwssp4lY4NOKnd49rETQtgSL"),
        photos: [
          driveImg("1t1jjlR5Trwssp4lY4NOKnd49rETQtgSL"),
          driveImg("18jFIjkhwvPSSrDvy0e-pKz52iJLJOrIr"),
          driveImg("1Rxt_-tCR7JTkTEZWW8GzdGVLMO9q01I9")
        ]
      },
      {
        name: "Sling Bag 4",
        image: driveImg("1EyKnjQL-VVKX1GYp48zzyQ9krq-amX4V"),
        photos: [
          driveImg("1EyKnjQL-VVKX1GYp48zzyQ9krq-amX4V"),
          driveImg("1cZJvqBDgB833PuCpx5kz7ycwJjGw3KHG"),
          driveImg("1sjKZ3eD2WSnmQBvE8SM6hGWtJum1ZQE3"),
          driveImg("1m-9org3Rd34eqYLW8djhVhw7ocJFWANp"),
          driveImg("1qb7arg0o-fBk4Tws8_ACTK40Yfw7x9u6")
        ]
      }
    ]
  },
  {
    // Subcategory-style category (Type B). No dedicated category
    // front pic existed in Drive, so Laptop Bag 1's front image
    // is used as the category tile too — add a "0.front image"
    // file at the LAPTOP BAG folder level if you want a different one.
    name: "Laptop Bag",
    type: "subcategory",
    thumbnail: driveImg("1pM7nUBGBFMfsqn_bxDgW8QIM3X6b5B-m"),
    banner: driveImg("1pM7nUBGBFMfsqn_bxDgW8QIM3X6b5B-m"),
    subcategories: [
      {
        name: "Laptop Bag 1",
        image: driveImg("1pM7nUBGBFMfsqn_bxDgW8QIM3X6b5B-m"),
        photos: [
          driveImg("1pM7nUBGBFMfsqn_bxDgW8QIM3X6b5B-m"),
          driveImg("1M4bXxh68ZlHIm6IAZqtYNNoD8fhvcklm"),
          driveImg("1JahSf13CwFp_Yas3erXk1HuAwTNs-g9-"),
          driveImg("1Yatb7q6DwBmkpc0CLr0nYLAkK2K2qDcK"),
          driveImg("1iIC1MSCX63JSkxVNyAGtZAVtI3phfyRI")
        ]
      },
      {
        name: "Laptop Bag 2",
        image: driveImg("1PFU-Jsnl3ZQySitjgNbFZrhkSv4ce4he"),
        photos: [
          driveImg("1PFU-Jsnl3ZQySitjgNbFZrhkSv4ce4he"),
          driveImg("1UmfyKDk8KD6i-623phPw7Ij4EH48RZ0q"),
          driveImg("179kjY-z4T12RSJw7vBalPS9F10ViujgJ"),
          driveImg("1D-SGKHvxvKattHBsMqW6tFc_YaUQy1mk"),
          driveImg("13F1opX8A9yDSewaFDTanjCd-Xq4w7vxb")
        ]
      },
      {
        name: "Laptop Bag 3",
        image: driveImg("1Zu5Ylj4HcKXBwAe3iAHHtyH0NldU5C7B"),
        photos: [
          driveImg("1Zu5Ylj4HcKXBwAe3iAHHtyH0NldU5C7B"),
          driveImg("1wDztW0JVyImnkAXPuSwi47jzgFa5IM9r"),
          driveImg("10dPalwmNKKy18DSqlrmg6jeA-dQmnqTj"),
          driveImg("1AAdBkXGTnPLEOMP1wjm1cVFiKnlWJiRN"),
          driveImg("1gObpex0e3gklRrQ2x2w2n6KouEGYuTsj")
        ]
      },
      {
        name: "Laptop Bag 4",
        image: driveImg("19e41ghUN-cSRVEa-8tGRwUOlALfXyMKT"),
        photos: [
          driveImg("19e41ghUN-cSRVEa-8tGRwUOlALfXyMKT"),
          driveImg("1IgSAYxPG_Lb2TxX4ALzzZ9YDnW5Qs1g3"),
          driveImg("1z0C3Ni5Kitcp1bJCd9gXSg7v8e8bMpGz"),
          driveImg("1vHxmS2nW8_b_0zayOg-semBi6-CSkxUN"),
          driveImg("1u9u3__wLD7BkLQwsvvzkoALgBmNWBS0Y"),
          driveImg("1aQEwkAq6DOVGIv9UvHoJ8ooi4x50JIT6"),
          driveImg("1LHXxqyoCbfMeVdb7QwoqS98q0rwBMzrF")
        ]
      },
      {
        name: "Laptop Bag 5",
        image: driveImg("1MaFtRQuTlyZfJS3FSjZjJI5O5hFAQhJk"),
        photos: [
          driveImg("1MaFtRQuTlyZfJS3FSjZjJI5O5hFAQhJk"),
          driveImg("1WGgtVzhCRCjK_UyivF0xgZ8GFL01tbJv"),
          driveImg("11TsytSfht19iis37FH9y0M3YwdfGzrUb"),
          driveImg("1KcwTga1JQZpVADB6oGzhf4sLD_SjxisU")
        ]
      }
    ]
  },
  {
    // Subcategory-style category (Type B). No dedicated category
    // front pic in Drive, so Duffle Bag 1's front image is used as
    // the category tile too.
    name: "Duffle Bag",
    type: "subcategory",
    thumbnail: driveImg("1QXFz5aj41zrJWoPxOyZ6NmPzfnmvAgkZ"),
    banner: driveImg("1QXFz5aj41zrJWoPxOyZ6NmPzfnmvAgkZ"),
    subcategories: [
      {
        name: "Duffle Bag 1",
        image: driveImg("1QXFz5aj41zrJWoPxOyZ6NmPzfnmvAgkZ"),
        photos: [
          driveImg("1QXFz5aj41zrJWoPxOyZ6NmPzfnmvAgkZ"),
          driveImg("1fby2XCbkb2tIl_H2L8_NcUUaQIlqFJa7"),
          driveImg("1aOGWsk0aXnefjKut2oitOoxLfiQnB6tQ"),
          driveImg("1YqnECctJxH6sU9DIaDJazglXuXsQH6az"),
          driveImg("1WLX_nNoJ2ZSm5lkEeTNrQLXs8xLNvXHP"),
          driveImg("1QvNx_Ra_4g6hPjJfPpcnlns5wR7cNGpB")
        ]
      },
      {
        name: "Duffle Bag 2",
        image: driveImg("1iXuVsUg2m3tw1yb9o7XJEOey_UCXpuEm"),
        photos: [
          driveImg("1iXuVsUg2m3tw1yb9o7XJEOey_UCXpuEm"),
          driveImg("1V1R3zwI8kRtvXWKqLSpvXVIZ41MzvNL8"),
          driveImg("1dmzEmuDVHWfvdLnyxkRo8GbjBnyxziqq"),
          driveImg("1bDXSspA1zU8gVi5hPPJUafBJvdgA63xd"),
          driveImg("1J5H82-p9dJpTndHfM1Yzk_AtVrIJtoxK")
        ]
      },
      {
        name: "Duffle Bag 3",
        image: driveImg("1chdfpXPqvVuNls_YkcWnv1if9733e7ZT"),
        photos: [
          driveImg("1chdfpXPqvVuNls_YkcWnv1if9733e7ZT"),
          driveImg("1HAZ2LjT2HqnKU_TetSNpAbOsZztefOBd"),
          driveImg("1Fv_lDnuCtCPD7azzXqegYxjuyt4ot3Px"),
          driveImg("1Zv9VA5ReP4cGkh6YPpmQxWWOA9DcTOLr")
        ]
      },
      {
        name: "Duffle Bag 4",
        image: driveImg("1y1YuAn1ulT9skryJdUtpxejnEk8Cxiy1"),
        photos: [
          driveImg("1y1YuAn1ulT9skryJdUtpxejnEk8Cxiy1"),
          driveImg("12YmzNbbIk7pnYb4QVRSnnkKP5VQmcyt9"),
          driveImg("1cThp8VAV6CMu3KksgxSR5snunDqFOWUE"),
          driveImg("16YnO66MffqRI0XD1gkQTwwa6cL-nQP8p")
        ]
      },
      {
        name: "Duffle Bag 5",
        image: driveImg("1iu1NBrMsVRb1hpV90GzptZlxZAW8MpHf"),
        photos: [
          driveImg("1iu1NBrMsVRb1hpV90GzptZlxZAW8MpHf"),
          driveImg("1SYWiDBfLBVlkSmwZWAB2UVEm7GWNucvI"),
          driveImg("1qxxQQkdtRHULoa4TVMXz5FhX-0smcfcG"),
          driveImg("1tuuKU-VXCo1fjxMozeo6ocwCIjzZhHmh"),
          driveImg("1euNvv1i3CDzuuOmztBVjFL_ObbWwDFTc")
        ]
      }
    ]
  },
  {
    // Subcategory-style category (Type B). No dedicated category
    // front pic in Drive, so the first Backpack listing's front
    // image is used as the category tile too. Folder names were
    // inconsistent (BACKAPCK / BACKPACK(SIZE) / ROLLING BAG) —
    // cleaned up for display, unrelated to the file IDs below.
    name: "Backpack",
    type: "subcategory",
    thumbnail: driveImg("1UZB8U8_Vjbf8h7grxL_jacCXUWZlxsBv"),
    banner: driveImg("1UZB8U8_Vjbf8h7grxL_jacCXUWZlxsBv"),
    subcategories: [
      {
        name: "Backpack 1",
        image: driveImg("1UZB8U8_Vjbf8h7grxL_jacCXUWZlxsBv"),
        photos: [
          driveImg("1UZB8U8_Vjbf8h7grxL_jacCXUWZlxsBv"),
          driveImg("1WsJasXJxS9knjJ5gJ-VT0JJryZUI8Mul"),
          driveImg("1reFTNW3FxCIIVRM40TYttFjSDalF4mYu"),
          driveImg("15zw0CtdmR60FgOvTcQsgMDolv6ExwTmJ")
        ]
      },
      {
        name: "Backpack 2",
        image: driveImg("17ukibpAdiJ0lZY-Idjl_oc0MkWOfwQZq"),
        photos: [
          driveImg("17ukibpAdiJ0lZY-Idjl_oc0MkWOfwQZq"),
          driveImg("1qk_2jhlyq7Pqi5nHte0iWLI0LMRp58-x"),
          driveImg("1_1sRqNHp5iuyDjqmitoMwwIrExk-OgZh"),
          driveImg("1sx5yGZ41y6jyuukTfyPmEyzj0UPS1VD3")
        ]
      },
      {
        name: "Backpack (Small)",
        image: driveImg("1cJ6l7p0vYA39gfltu_FjpOZybjGAYfTr"),
        photos: [
          driveImg("1cJ6l7p0vYA39gfltu_FjpOZybjGAYfTr"),
          driveImg("1lxqstkBLo8cCC9j8hq3ElLp1Jdv0ak1D"),
          driveImg("1SL6lr6QSQGlUe6dIr_6ycvdDnJ89QsvD"),
          driveImg("1TQYAV31EXEqvigE-vVYNphPBNhBAln6l"),
          driveImg("1ft-rME-qgc2cvJ-BG5sTrhzgdQccM2A4")
        ]
      },
      {
        name: "Backpack (Medium)",
        image: driveImg("17Nk2h4zGxLOl6M-kdK8vjlhfvuopZAbC"),
        photos: [
          driveImg("17Nk2h4zGxLOl6M-kdK8vjlhfvuopZAbC"),
          driveImg("1cKJCnaeoOif1OQrqbjoTyZgb_e7-JwdA"),
          driveImg("1ZwqI-C-JY8qnlJ6UPeunkdKSMPbwECeE"),
          driveImg("1vV2-3_YoPceagoN4GCWiv0rrQ4AeIp6j")
        ]
      },
      {
        name: "Backpack (Large)",
        image: driveImg("1UBuExgXlBrRCFdaQEeFC672_obI_Nref"),
        photos: [
          driveImg("1UBuExgXlBrRCFdaQEeFC672_obI_Nref"),
          driveImg("13X8_ZpOyCmg9n8y862g_42gqywTFR8ZL"),
          driveImg("1-4FoxKlzKf1yhBRK0YcBIz7TzJSkLbIf")
        ]
      },
      {
        name: "Rolling Bag (Large)",
        image: driveImg("1yatvte7adwHQTLLwr2NgKUAsIMUT_cTe"),
        photos: [
          driveImg("1yatvte7adwHQTLLwr2NgKUAsIMUT_cTe"),
          driveImg("1tv0oxKsJ5Fis4fuJK_nXpwisjnjU2zYl"),
          driveImg("1NmzYVmSyPJZSY7bdhjjby75Vw2GinUuh"),
          driveImg("1FLBQjU54OIhNb4ylobGxqgr913muU_vK"),
          driveImg("1llGZ3Gda80vv3d2xQqDA_uIPY9c5YfLA")
        ]
      },
      {
        name: "Rolling Bag (Small)",
        image: driveImg("1RDJxOBl7YUsGmq-4e9puaJ3DUeeEUX6L"),
        photos: [
          driveImg("1RDJxOBl7YUsGmq-4e9puaJ3DUeeEUX6L"),
          driveImg("1ds90xLhNT5IKtzaN0MvrNg_M1MvZ2T3-"),
          driveImg("1k4mtggUmiTaKZFVPyUGkwUfbJGZqg65U"),
          driveImg("1_yI8HKQma8zJEhCbSAHSFMRNrL_Me2zA"),
          driveImg("1s4eg3uHEobemWwngFF8Tff7SHmpKuAvs")
        ]
      }
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
