import uuid from "react-uuid";

const data = [
	{
		id: uuid(),
		latest: true,
		brand: "marshall",
		type: "speaker",
		productName: "Marshall",
		alt: "Marshall speaker",
		image: "https://m.media-amazon.com/images/I/51UYQQsQVfL._AC_UY218_.jpg",
		description: "Acton II 15 Watt Wireless Bluetooth Speaker (Black)",
		price: "1900.00",
		oldPrice: "3000.00",
		inStock: false,
	},
	{
		id: uuid(),
		latest: true,
		brand: "jbl",
		type: "speaker",
		productName: "JBL Go 3",
		alt: "JBL Go 3",
		image: "https://m.media-amazon.com/images/I/81GE-JdnNMS._AC_UY218_.jpg",
		description: "Wireless Ultra Portable Bluetooth Speaker, JBL Pro Sound)",
		price: "2999.00",
		oldPrice: "3999.00",
		inStock: false,
	},
	{
		id: uuid(),
		latest: true,
		brand: "boat",
		type: "wireless",
		productName: "boAt Rockerz 450",
		alt: "boAt Rockerz 450",
		image: "https://m.media-amazon.com/images/I/61edVIWAN1L._AC_UY218_.jpg",
		description:
			"boAt Rockerz 450 Pro Bluetooth Wireless On Ear Headphones with Mic (Hazel Beige)",
		price: "1900.00",
		oldPrice: "2000.00",
		inStock: true,
	},
	{
		id: uuid(),
		latest: true,
		brand: "marshall",
		type: "speaker",
		alt: "Marshall speaker",
		productName: "Marshall Acton II",
		image: "https://m.media-amazon.com/images/I/51Tn3qxqr3L._AC_UY218_.jpg",
		description:
			"Marshall Acton II 60 Watt Wireless Bluetooth Speaker (Black), (MRL1001900)",
		price: "5000.00",
		oldPrice: "6000.00",
		inStock: true,
	},
	{
		id: uuid(),
		latest: false,
		productName: "Sony WH-CH510",
		brand: "sony",
		type: "wireless",
		alt: "Sony WH-CH510",
		image: "https://m.media-amazon.com/images/I/81di9mF9OVL._AC_UY218_.jpg",
		description:
			"Sony WH-CH510 Bluetooth Wireless On Ear Headphones with Mic (Blue)",
		price: "2900.00",
		oldPrice: "4000.00",
		inStock: true,
	},

	{
		id: uuid(),
		latest: true,
		productName: "Sony MDR-ZX110AP",
		brand: "sony",
		type: "wired",
		alt: "Sony MDR-ZX110AP",
		image: "https://m.media-amazon.com/images/I/61kLSSQ6P7L._AC_UY218_.jpg",
		description:
			"Sony MDR-ZX110AP Wired On-Ear Headphones with tangle free cable, 3.5mm Jack, Headset with Mic for phone calls and 1 Year Warranty - (Black)",
		price: "1390.00",
		oldPrice: "2000.00",
		inStock: true,
	},
	{
		id: uuid(),
		latest: true,
		brand: "marshall",
		type: "speaker",
		productName: "Marshall",
		alt: "Marshall speaker",
		image: "https://m.media-amazon.com/images/I/51UYQQsQVfL._AC_UY218_.jpg",
		description: "Acton II 15 Watt Wireless Bluetooth Speaker (Black)",
		price: "1900.00",
		oldPrice: "3000.00",
		inStock: true,
	},
	{
		id: uuid(),
		latest: false,
		brand: "bose",
		type: "wireless",
		productName: "Bose QuietComfort 35",
		alt: "Bose QuietComfort 35",
		image: "https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_UY218_.jpg",
		description:
			"Bose QuietComfort 35 II Noise Cancelling Bluetooth Headphones— Wireless, Over Ear Headphones with Built in Microphone and Alexa Voice Control, Black",
		price: "4900.00",
		oldPrice: "7000.00",
		inStock: true,
	},
	{
		id: uuid(),
		latest: true,
		brand: "bose",
		type: "noiseCancelling",
		productName: "Bose QuietComfort",
		alt: "Bose Sport Earbuds",
		image:
			"https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/qc_earbuds/silo_images/v2/QCEB_PDP_Ecom-Gallery-SB02.png/jcr:content/renditions/cq5dam.web.600.600.png",
		description:
			"Bose QuietComfort Noise Cancelling Earbuds - True Wireless Earbuds, Bluetooth in-Ear Headphones, The World's Most Effective Noise Cancelling Earbuds",
		price: "3900.00",
		oldPrice: "5000.00",
		inStock: true,
	},
	{
		id: uuid(),
		latest: false,
		brand: "boat",
		type: "wireless",
		productName: "boAt Rockerz 550",
		alt: "boAt Rockerz 550",
		image: "https://m.media-amazon.com/images/I/61F5SXdi9jL._AC_UY218_.jpg",
		description:
			"boAt Rockerz 550 Bluetooth Wireless Over Ear Headphone with Mic (Black Symphony)",
		price: "900.00",
		oldPrice: "1000.00",
		inStock: true,
	},
];
const brands = ["bose", "boat", "marshall", "sony", "jbl"];
const types = ["wired", "wireless", "speaker", "noiseCancelling"];

export { data, brands, types };
