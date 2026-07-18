// ============================================================
// CATALOGUE DATA — pulled live from your Google Drive
// "MAHI ART GALLERY" folder
// ------------------------------------------------------------
// This is the ONLY file you need to edit to update your website.
// No backend, no database — just this list of categories/products.
//
// Each product's "image" is a direct Google Drive link built from
// the file's ID: https://drive.google.com/thumbnail?id=FILE_ID&sz=w1000
// These files are already shared as "Anyone with the link can view",
// so they will load for any visitor to your site.
//
// TO ADD A NEW PRODUCT: upload the photo to the matching folder in
// your Drive, right-click -> Share -> "Anyone with the link", copy
// the file ID from the link, and add a new line below in the same
// pattern.
// ============================================================

function driveImg(id) {
  return "https://drive.google.com/thumbnail?id=" + id + "&sz=w1000";
}

const CATALOGUE = [
  {
    name: "Crunchy Handle Bag",
    thumbnail: driveImg("1WaDpzmj61F80GmCYiX1l307rmK7tzrhg"),
    products: [
      { name: "Crunchy Handle Bag 1",  image: driveImg("1WaDpzmj61F80GmCYiX1l307rmK7tzrhg") },
      { name: "Crunchy Handle Bag 2",  image: driveImg("1sLeg_TcP6nOVPtglVqXcr5OhqmzAAU9c") },
      { name: "Crunchy Handle Bag 3",  image: driveImg("1VyYY1d-9U0k3uvPbt0ao-BJmkhUNQIHk") },
      { name: "Crunchy Handle Bag 4",  image: driveImg("16ocOY-s6xBdqmReX0OePCEshQJuJsB6i") },
      { name: "Crunchy Handle Bag 5",  image: driveImg("1LsBNeRFMTHLvPaUzRnksVlLUw4ayco3m") },
      { name: "Crunchy Handle Bag 6",  image: driveImg("1nTcYX7kV5241d-U3caXynfPgz8mwpy4Q") },
      { name: "Crunchy Handle Bag 7",  image: driveImg("1qKDVm281BZX7jqfPQzozsfUd-zvutH51") },
      { name: "Crunchy Handle Bag 8",  image: driveImg("1t_dBuVaIXAX91vmbBhKrkZF6zLXxkyuN") },
      { name: "Crunchy Handle Bag 9",  image: driveImg("19BFHbJZK3Djw1h3DUp4gKk1FTAyhfITN") },
      { name: "Crunchy Handle Bag 10", image: driveImg("1s3Pjz67_AlPj1TcDloemhkDLkM8_6iXl") },
      { name: "Crunchy Handle Bag 11", image: driveImg("1nsFtTAGPpyrjNCMN_RrOo6ooQTIQyzZV") },
      { name: "Crunchy Handle Bag 12", image: driveImg("1cSGBPGLCFY8bz002HhLz0Cq8ieh6kzDc") },
      { name: "Crunchy Handle Bag 13", image: driveImg("1DL2O1WRkpB727Z2mIfmEbUNIXPNgxJk7") },
      { name: "Crunchy Handle Bag 14", image: driveImg("1TsOmupt6y3QnKyZ3Hjf-mPIYlUU0UAp3") },
      { name: "Crunchy Handle Bag 15", image: driveImg("1l3rgVaA-y-MER3T7MMm6TcVu1pc71T1W") },
      { name: "Crunchy Handle Bag 16", image: driveImg("1YPx_WEXlifrgvgz3rxVo8uL3iKSuV08F") },
      { name: "Crunchy Handle Bag 17", image: driveImg("1sdNBY7ZJWPsl81IVfF2nZcQtnMDvutRW") },
      { name: "Crunchy Handle Bag 18", image: driveImg("1MaPdoanOWcjBrDc7Ve_yDnHGRQkgGKfG") },
      { name: "Crunchy Handle Bag 19", image: driveImg("1KM-2O_q8m4C5en4GGIUqMoG5sxAaXQFM") },
      { name: "Crunchy Handle Bag 20", image: driveImg("1DsnJJctg-gImhhqgAdGVWfaHJakbRknx") },
      { name: "Crunchy Handle Bag 21", image: driveImg("1XG2OGsQCHTGgNgnbWQEj7pf9AA43muV1") },
      { name: "Crunchy Handle Bag 22", image: driveImg("1Zmg0ZNPOBInrkVDn6M0ddMwxscY6tcma") },
      { name: "Crunchy Handle Bag 23", image: driveImg("1pJ7ufBccY_UwNAdepeewi9dSiBgjGm8P") },
      { name: "Crunchy Handle Bag 24", image: driveImg("1lU0OvP4pbiaH26RgcvUVkcgGZ-_FqGh_") },
      { name: "Crunchy Handle Bag 25", image: driveImg("1qvCujA-NJT0oWe9FXUxbt8We3-ouq16W") },
      { name: "Crunchy Handle Bag 26", image: driveImg("1jEnv1kjKemRUjoDKE91uRXP617PLCKIG") },
      { name: "Crunchy Handle Bag 27", image: driveImg("1sm92fyH1YPkI8ZeyXhb4Qv7FoW5vL0Nq") },
      { name: "Crunchy Handle Bag 28", image: driveImg("11gEnhKZr9VN1Rg2s8aqaw3gR3atFKf8E") },
      { name: "Crunchy Handle Bag 29", image: driveImg("1xDoPkpTMwMjqu49TB8rutfDEOsfzKZCn") },
      { name: "Crunchy Handle Bag 30", image: driveImg("1D7ej51FSdijaX1ABQ9Bn-lTKCt0-HnB5") },
      { name: "Crunchy Handle Bag 31", image: driveImg("1luDiId4xFCRytR5OUlOOxmShksJy0ApI") },
      { name: "Crunchy Handle Bag 32", image: driveImg("1pATS2NsUCERmyolVsWOS3LMVUysmyqPb") },
      { name: "Crunchy Handle Bag 33", image: driveImg("1cA7ef-kWmJJ_dg9unTqm9CINyrxvFrIB") }
    ]
  },
  {
    name: "Matka Bag",
    thumbnail: driveImg("1JKbTZbQq07xlbbzQqwvQtF4C5DQouwmo"),
    products: [
      { name: "Matka Bag 1",  image: driveImg("1JKbTZbQq07xlbbzQqwvQtF4C5DQouwmo") },
      { name: "Matka Bag 2",  image: driveImg("1XnrqyY9XxZOV1UO9K-U6DGjKcjBfUmZ-") },
      { name: "Matka Bag 3",  image: driveImg("1PS2-aW5hcpWCdZs3i7Mz1WADy-XyOZvg") },
      { name: "Matka Bag 4",  image: driveImg("19gZgayYPx77IUGvy-YFODgtB_DGc_NS2") },
      { name: "Matka Bag 5",  image: driveImg("1f2-F4YrDJEa-hkx0kGYtf_7OSTfyrS7L") },
      { name: "Matka Bag 6",  image: driveImg("1A9t0ZawLGxSlVU5cmpIF4wD2kzYnEchV") },
      { name: "Matka Bag 7",  image: driveImg("18PW3OIRO6Hm35Ed0VfLDSDGSgdjl-43-") },
      { name: "Matka Bag 8",  image: driveImg("16rJQ4YQT4hZIgHNNdTPzmi8K-Eal5DRX") },
      { name: "Matka Bag 9",  image: driveImg("1vV2-r7SF6spIJTRO1PJqpQNpqT9D9bIq") },
      { name: "Matka Bag 10", image: driveImg("1jpi1DkdBwW4MGoKXZuDrSPALLN_XQlVd") },
      { name: "Matka Bag 11", image: driveImg("1ae_BOAVJzATrsvUohCjm4C6aLKpouvD0") },
      { name: "Matka Bag 12", image: driveImg("18i7ozxwZm0mbxhSG2Ur5syj0BkdaSrDt") },
      { name: "Matka Bag 13", image: driveImg("1id2USjpTq8SC7uJg4dz2gNtiO-ThFKSC") },
      { name: "Matka Bag 14", image: driveImg("1PRF66D-tHNj4vMBO7lOvvbEtFaDzjcvp") },
      { name: "Matka Bag 15", image: driveImg("1cwqc9Hnq8oyVy2HK5acDHotJWBBswqjO") },
      { name: "Matka Bag 16", image: driveImg("1JKhTUa_ZlfMb-MydCP03iQzO8zqMdhKS") },
      { name: "Matka Bag 17", image: driveImg("1MWjPmBHJdtPhqBgpWYNhGpvaNtUA7FeO") },
      { name: "Matka Bag 18", image: driveImg("16m4fWB826do91DhuXPkUITBHKUO-Npq0") },
      { name: "Matka Bag 19", image: driveImg("1a4htpFySmoXzvVf3zbpIc_250Fmm63-L") },
      { name: "Matka Bag 20", image: driveImg("1H4m0tcJ3GL3dunaXTAenmzAAlyTbHFva") },
      { name: "Matka Bag 21", image: driveImg("1m9mqo97XPUCvG4rMczYskvOguP1HdR5l") }
    ]
  },
  {
    name: "Hand Clutch",
    thumbnail: driveImg("1CkUNLwEkFJPJtrBIvOirazXFtyCNspCA"),
    products: [
      { name: "Hand Clutch 1",  image: driveImg("1CkUNLwEkFJPJtrBIvOirazXFtyCNspCA") },
      { name: "Hand Clutch 2",  image: driveImg("1TsoujFpfDiuRJiZ38Sx4ZXaTxVil67jy") },
      { name: "Hand Clutch 3",  image: driveImg("1AW-gDJtZaPnRuhUUn-3kGUBuCwh6Fkci") },
      { name: "Hand Clutch 4",  image: driveImg("1IF7s7fBjdwx-HJfIBQ1nV_frFgSDKy3q") },
      { name: "Hand Clutch 5",  image: driveImg("1T0jxXLnRkhXAQBKCLt5VDHwgVoj9hHhF") },
      { name: "Hand Clutch 6",  image: driveImg("1rqvuoelPWUdz5ihwMar3QxDKNEab0npa") },
      { name: "Hand Clutch 7",  image: driveImg("1aStervAufMPFzaI9K_1wYUSIOB7pltvI") },
      { name: "Hand Clutch 8",  image: driveImg("1Lk8xnDiIyObyxwiDyl0tjWmAcMsOTFnt") },
      { name: "Hand Clutch 9",  image: driveImg("1tnGyHmpfgKWV3JNWbgEyQBQbffd2lTvv") },
      { name: "Hand Clutch 10", image: driveImg("1o_vFzf4jbEQTsS6KGRP1z8Q3Knq-lhkR") },
      { name: "Hand Clutch 11", image: driveImg("1BS0SafH2wWOAf45nkyP35Oy4BXg-6F4T") },
      { name: "Hand Clutch 12", image: driveImg("1Vw_UMchPp8g7s89V08fwCtJdliRTtAbg") },
      { name: "Hand Clutch 13", image: driveImg("1draIFsULplVlg3_bKB2MozwlenZB3EC5") },
      { name: "Hand Clutch 14", image: driveImg("1ObaMelkBYq87eY_s4qHx5iyYf0sV_hSj") },
      { name: "Hand Clutch 15", image: driveImg("1hQR8E9I0YbFP7ZywGRpD_h6-x-dhzKLF") },
      { name: "Hand Clutch 16", image: driveImg("1MYkkLCbKz54GIAP6IHVSbMxw-VJ_KC-I") },
      { name: "Hand Clutch 17", image: driveImg("1Emc8D5rThA-18KiPiW3__chsu1Ty29YW") }
    ]
  }
  // 👉 Add more categories here, same pattern, using driveImg("FILE_ID")
];
