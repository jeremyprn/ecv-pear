import { PearProduct } from "./product.js";

export const products = [
	new PearProduct(
		1,
		"AIRPODS (3e génération)",
		"La magie, remasterisée.",
		"199,99",
		"store_pods.png",
		false,
		"Tout nouveau design profilé doté d’un capteur-pression et d’une tige plus courte.<br><br>Égalisation adaptative ajustant automatiquement la musique en fonction de la forme de votre oreille.<br><br>Une touche de magie. Connexion sans effort, passage automatique d’un appareil à l’autre et partage de contenu audio plus simple que jamais. "
	),
	new PearProduct(
		2,
		"IPAD",
		"Son talent va vous surprendre. Son prix aussi",
		"389,00",
		"store_ipad.png",
		false,
		"Un écran Retina de 10,2 pouces avec technologie True Tone pour un niveau de détail incroyable, des couleurs éclatantes et une expérience visuelle confortable.<br><br>Passez des appels vidéo plus naturels grâce à la caméra avant ultra grand-angle 12 Mpx avec Cadre centré. <br><br>L’Apple Pencil et le Smart Keyboard font passer votre travail et votre créativité au niveau supérieur."
	),
	new PearProduct(
		3,
		"HOMEPOD MINI",
		"Envoie du son. Et de la couleur",
		"99,99",
		"store_sound.png",
		true,
		"Un son à 360 degrés. Placez des HomePod mini dans toute la maison pour profiter d’un son multiroom¹ unique et de fonctionnalités comme les Annonces Interphone.<br><br>Siri est votre assistant intelligent sur HomePod mini. Consultez votre agenda ou la météo, programmez des alarmes et effectuez vos tâches quotidiennes, rien qu’avec votre voix.<br><br>Contrôlez vos accessoires domotiques au seul son de votre voix, avec le HomePod mini."
	),
];
