export type LogoDefinition = {
  /**
   * The OpenFoodFacts tag used or interactions with robotoff and off
   */
  tag: string;
  /**
   * The name of the logo
   */
  label: string;
  /**
   * The url of the logo
   */
  logo: string;
  /**
   * A message to provide informations about the logo
   */
  message?: string;
  /**
   * A URL of the deifinition of the logo
   */
  link?: string;
  /**
   * To specify if the game needs to be restricted to a specific robotoff predictor
   * @default "universal-logo-detector"
   */
  predictor?: string;
};

export const LOGOS = {
  // Nutriscore
  "en:nutriscore-grade-a": {
    tag: "en:nutriscore-grade-a",
    label: "Nutriscore A",
    logo: "https://static.openfoodfacts.org/images/attributes/nutriscore-a.svg",
    predictor: null,
  },
  "en:nutriscore-grade-b": {
    tag: "en:nutriscore-grade-b",
    label: "Nutriscore B",
    logo: "https://static.openfoodfacts.org/images/attributes/nutriscore-b.svg",
    predictor: null,
  },
  "en:nutriscore-grade-c": {
    tag: "en:nutriscore-grade-c",
    label: "Nutriscore C",
    logo: "https://static.openfoodfacts.org/images/attributes/nutriscore-c.svg",
    predictor: null,
  },
  "en:nutriscore-grade-d": {
    tag: "en:nutriscore-grade-d",
    label: "Nutriscore D",
    logo: "https://static.openfoodfacts.org/images/attributes/nutriscore-d.svg",
    predictor: null,
  },
  "en:nutriscore-grade-e": {
    tag: "en:nutriscore-grade-e",
    label: "Nutriscore E",
    logo: "https://static.openfoodfacts.org/images/attributes/nutriscore-e.svg",
    predictor: null,
  },
  // INAO
  "fr:ab-agriculture-biologique": {
    tag: "fr:ab-agriculture-biologique",
    label: "AB (Agriculture Bio)",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/ab-agriculture-biologique.74x90.svg",
  },
  "en:eu-organic": {
    tag: "en:eu-organic",
    label: "Bio Européen",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/bio-europeen.135x90.png",
  },
  "en:pdo": {
    tag: "en:pdo",
    label: "AOP (Appelation d'Origine Protégée)",
    link: "https://www.inao.gouv.fr/Les-signes-officiels-de-la-qualite-et-de-l-origine-SIQO/Appellation-d-origine-protegee-controlee-AOP-AOC",
    message: "Ne pas confondre avec IGP ou STG",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/aop.90x90.svg",
  },
  "en:pgi": {
    tag: "en:pgi",
    label: "IGP (Indication Géographique Protégée)",
    link: "https://www.inao.gouv.fr/Les-signes-officiels-de-la-qualite-et-de-l-origine-SIQO/Indication-geographique-protegee",
    message: "Ne pas confondre avec  AOP ou STG",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/igp.90x90.svg",
  },
  "en:tsg": {
    tag: "en:tsg",
    label: "Spécialité traditionnelle garantie (STG)",
    link: "https://www.inao.gouv.fr/Les-signes-officiels-de-la-qualite-et-de-l-origine-SIQO/Specialite-traditionnelle-garantie-STG",
    message: "Ne pas confondre avec IGP ou AOP",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/stg.90x90.svg",
  },
  "fr:label-rouge": {
    tag: "fr:label-rouge",
    label: "Label Rouge",
    link: "https://www.inao.gouv.fr/Les-signes-officiels-de-la-qualite-et-de-l-origine-SIQO/Label-Rouge",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/label-rouge.90x90.svg",
  },
  // Various origins
"en:fsc-mix": {
    tag: "en:fsc-mix",
    label: "FSC Mix",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/fsc-mix.90x90.svg",
  },
"en:fsc": {
    tag: "en:fsc",
    label: "FSC",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/fsc.90x90.svg",
  },
"en:pefc": {
    tag: "en:pefc",
    label: "PEFC",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/pefc.90x90.svg",
  },
"en:green-dot": {
    tag: "en:green-dot",
    label: "Green Dot (means the manufacturer paid a contribution to CITEO)",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/green-dot.90x90.svg",
  },
"fr:triman": {
    tag: "fr:triman",
    label: "Triman (means it's actually recyclable)",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/triman.90x90.svg",
  },

"en:dolphin-safe": {
    tag: "en:dolphin-safe",
    label: "Dolphin Safe",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/dolphin-safe.90x90.svg",
  },
"en:canada-organic": {
    tag: "en:canada-organic",
    label: "Canada Organic",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/canada-organic.90x90.svg",
  },
"de:ohne-gentechnik": {
    tag: "de:ohne-gentechnik",
    label: "Ohne Gentechnik",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/de:ohne-gentechnik.90x90.svg",
  },
"en:roundtable-on-sustainable-palm-oil": {
    tag: "en:roundtable-on-sustainable-palm-oil",
    label: "RSPO",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/roundtable-on-sustainable-palm-oil.90x90.svg",
  },
"en:made-in-france": {
    tag: "en:made-in-france",
    label: "Fabriqué en France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/made-in-france.90x90.svg",
  },
"en:transformed-in-france": {
    tag: "en:transformed-in-france",
    label: "Transformé en France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/transformed-in-france.90x90.svg",
  },
"fr:origine-france": {
    tag: "fr:origine-france",
    label: "Origine France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/origine-france.90x90.svg",
  },
"en:packaged-in-france": {
    tag: "en:packaged-in-france",
    label: "Conditionné en France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/packaged-in-france.90x90.svg",
  },
"en:french-agriculture": {
    tag: "en:french-agriculture",
    label: "Agriculture France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/french-agriculture.90x90.svg",
  },
"en:cooked-in-france": {
    tag: "en:cooked-in-france",
    label: "Cuisiné en France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/cooked-in-france.90x90.svg",
  },
"fr:fruits-et-legumes-de-france": {
    tag: "fr:fruits-et-legumes-de-france",
    label: "Fruits et Légumes de France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/fruits-et-legumes-de-france.90x90.svg",
  },
"en:grown-in-france": {
    tag: "en:grown-in-france",
    label: "Cultivé en France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/grown-in-france.90x90.svg",
  },
"fr:bio-equitable-en-france": {
    tag: "fr:bio-equitable-en-france",
    label: "Bio équitable en France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/bio-equitable-en-france.90x90.svg",
  },
"en:french-eggs": {
    tag: "en:french-eggs",
    label: "Oeufs de France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/french-eggs.90x90.svg",
  },
"en:potatoes-from-france": {
    tag: "en:potatoes-from-france",
    label: "Pommes de terre de France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/potatoes-from-france.90x90.svg",
  },
"en:max-havelaar-france": {
    tag: "en:max-havelaar-france",
    label: "Max Havelaar France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/max-havelaar-france.90x90.svg",
  },
"fr:sud-de-france": {
    tag: "fr:sud-de-france",
    label: "Sud de France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/sud-de-france.90x90.svg",
  },
"fr:legumes-de-france": {
    tag: "fr:legumes-de-france",
    label: "Légumes de France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/legumes-de-france.90x90.svg",
  },
"en:harvested-in-france": {
    tag: "en:harvested-in-france",
    label: "Récolté en France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/harvested-in-france.90x90.svg",
  },
"fr:agri-ethique-france": {
    tag: "fr:agri-ethique-france",
    label: "Agri-Éthique France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/agri-ethique-france.90x90.svg",
  },
"en:apples-from-france": {
    tag: "en:apples-from-france",
    label: "Pommes de France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/apples-from-france.90x90.svg",
  },
"en:egg-laid-in-france": {
    tag: "en:egg-laid-in-france",
    label: "Pondu en France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/egg-laid-in-france.90x90.svg",
  },
"fr:fruits-de-france": {
    tag: "fr:fruits-de-france",
    label: "Fruits de France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/fruits-de-france.90x90.svg",
  },
"fr:tomates-de-france": {
    tag: "fr:tomates-de-france",
    label: "Tomates de France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/tomates-de-france.90x90.svg",
  },
"en:qualite-france-french-quality": {
    tag: "en:qualite-france-french-quality",
    label: "Qualité France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/qualite-france-french-quality.90x90.svg",
  },
"fr:mais-de-france": {
    tag: "fr:mais-de-france",
    label: "Maïs de France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/mais-de-france.90x90.svg",
  },
"en:honey-from-france": {
    tag: "en:honey-from-france",
    label: "Miel de France",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/honey-from-france.90x90.svg",
  },
"en:french-meat": {
    tag: "en:french-meat",
    label: "Viande Française",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/french-meat.90x90.svg",
  },
"en:french-poultry": {
    tag: "en:french-poultry",
    label: "Volaille Française",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/french-poultry.90x90.svg",
  },
"en:french-pork": {
    tag: "en:french-pork",
    label: "Viande Porcine Française",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/french-pork.90x90.svg",
  },
"en:french-beef": {
    tag: "en:french-beef",
    label: "Viande Bovine Française",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/french-beef.90x90.svg",
  },
"en:french-milk": {
    tag: "en:french-milk",
    label: "Lait Français",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/en/labels/french-milk.90x90.svg",
  },
"fr:Farine-de-ble-français": {
    tag: "fr:Farine-de-ble-français",
    label: "Farine de blé français",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/Farine-de-ble-français.90x90.svg",
  },
"fr:Ble-français": {
    tag: "fr:Ble-français",
    label: "Blé français",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/Ble-français.90x90.svg",
  },
"fr:Soja-Français": {
    tag: "fr:Soja-Français",
    label: "Soja Français",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/Soja-Français.90x90.svg",
  },
"fr:Soja-Français-sans-OGM": {
    tag: "fr:Soja-Français-sans-OGM",
    label: "Soja Français sans OGM",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/Soja-Français-sans-OGM.90x90.svg",
  },
"fr:poulet-francais": {
    tag: "fr:poulet-francais",
    label: "Poulet Français",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/poulet-francais.90x90.svg",
  },
"fr:lapin-francais": {
    tag: "fr:lapin-francais",
    label: "Lapin Français",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/lapin-francais.90x90.svg",
  },
"fr:french-duck": {
    tag: "fr:french-duck",
    label: "Canard Français",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/french-duck.90x90.svg",
  },
"fr:viande-de-veau-francais": {
    tag: "fr:viande-de-veau-francais",
    label: "Viande de veau français",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/viande-de-veau-francais.90x90.svg",
  },
"fr:societe-francaise-de-controle-de-viande-halal": {
    tag: "fr:societe-francaise-de-controle-de-viande-halal",
    label: "Société Française de Contrôle de Viande Halal",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/societe-francaise-de-controle-de-viande-halal.90x90.svg",
  },
"fr:farine-de-sarrasin-francais": {
    tag: "fr:farine-de-sarrasin-francais",
    label: "Farine de sarrasin français",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/farine-de-sarrasin-francais.90x90.svg",
  },
"fr:peche-francaise": {
    tag: "fr:peche-francaise",
    label: "Pêche française",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/peche-francaise.90x90.svg",
  },
"fr:viande-ovine-francaise": {
    tag: "fr:viande-ovine-francaise",
    label: "Viande Ovine Française",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/viande-ovine-francaise.90x90.svg",
  },
"fr:viande-d-agneau-francais": {
    tag: "fr:viande-d-agneau-francais",
    label: "Viande d'agneau français",
    link: "",
    message: "",
    logo: "https://static.openfoodfacts.org/images/lang/fr/labels/viande-d-agneau-francais.90x90.svg",
  },


  // Eco-score
  // To-Do add the origin france logos
  "en:organic": {
    tag: "en:organic",
    label: "Bio",
    logo: "https://world-fr.openfoodfacts.org/images/lang/fr/labels/bio.96x90.png",
  },
  "en:eg-oko-verordnung": {
    tag: "en:eg-oko-verordnung",
    label: "eg oko verordnung",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/eg-oko-verordnung.110x90.svg",
  },
  "fr:haute-valeur-environnementale": {
    tag: "fr:haute-valeur-environnementale",
    label: "Haute Valeur Environnementale",
    logo: "https://world-fr.openfoodfacts.org/images/lang/fr/labels/haute-valeur-environnementale.90x90.svg",
  },
  "fr:bleu-blanc-coeur": {
    tag: "fr:bleu-blanc-coeur",
    label: "Bleu Blanc Coeur",
    logo: "https://world-fr.openfoodfacts.org/images/lang/fr/labels/bleu-blanc-coeur.98x90.svg",
  },
  "en:roundtable-on-sustainable-palm-oil": {
    tag: "en:roundtable-on-sustainable-palm-oil",
    label: "Roundtable on sustainable palm oil",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/roundtable-on-sustainable-palm-oil.90x90.svg",
  },
  "en:rainforest-alliance": {
    tag: "en:rainforest-alliance",
    label: "Rainforest Alliance",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/rainforest-alliance.90x90.svg",
  },
  "en:fairtrade-international": {
    tag: "en:fairtrade-international",
    label: "Fairtrade International",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/fairtrade-international.77x90.svg",
  },
  "en:max-havelaar": {
    tag: "en:max-havelaar",
    label: "Max Havelaar",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/max-havelaar.64x90.svg",
  },
  "en:sustainable-seafood-msc": {
    tag: "en:sustainable-seafood-msc",
    label: "Sustainable seafood msc",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/sustainable-seafood-msc.126x90.svg",
  },
  "en:responsible-aquaculture-asc": {
    tag: "en:responsible-aquaculture-asc",
    label: "responsible aquaculture asc",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/responsible-aquaculture-asc.188x90.svg",
  },
    // To-Do add Packaging logos
"1-pet": {
    tag: "1-pet",
    label: "1-PET",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/1-PET.73x90.svg",
  },
"1-PETE": {
    tag: "1-PETE",
    label: "1-PETE",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/1-PETE.73x90.svg",
  },
"2-PEHD": {
    tag: "2-PEHD",
    label: "2-PEHD",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/2-PEHD.73x90.svg",
  },
"2-HDPE": {
    tag: "2-HDPE",
    label: "2-HDPE",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/2-HDPE.73x90.svg",
  },
"3-PVC": {
    tag: "3-PVC",
    label: "3-PVC",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/3-PVC.73x90.svg",
  },
"4-PELD": {
    tag: "4-PELD",
    label: "4-PELD",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/4-PELD.73x90.svg",
  },
"4-LDPE": {
    tag: "4-LDPE",
    label: "4-LDPE",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/4-LDPE.73x90.svg",
  },
"5-PP": {
    tag: "5-PP",
    label: "5-PP",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/5-PP.73x90.svg",
  },
"06-PS": {
    tag: "06-PS",
    label: "06-PS",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/06-PS.73x90.svg",
  },
"7-O": {
    tag: "7-O",
    label: "7-O",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/7-O.73x90.svg",
  },
"8-Lead": {
    tag: "8-Lead",
    label: "8-Lead",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/8-Lead.73x90.svg",
  },
"9-Alkaline": {
    tag: "9-Alkaline",
    label: "9-Alkaline",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/9-Alkaline.73x90.svg",
  },
"10-NiCD": {
    tag: "10-NiCD",
    label: "10-NiCD",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/10-NiCD.73x90.svg",
  },
"11-NiMH": {
    tag: "11-NiMH",
    label: "11-NiMH",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/11-NiMH.73x90.svg",
  },
"12-Li": {
    tag: "12-Li",
    label: "12-Li",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/12-Li.73x90.svg",
  },
"13-SO(Z)": {
    tag: "13-SO(Z)",
    label: "13-SO(Z)",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/13-SO(Z).73x90.svg",
  },
"14-CZ": {
    tag: "14-CZ",
    label: "14-CZ",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/14-CZ.73x90.svg",
  },
"20-PAP": {
    tag: "20-PAP",
    label: "20-PAP",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/20-PAP.73x90.svg",
  },
"21-PAP": {
    tag: "21-PAP",
    label: "21-PAP",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/21-PAP.73x90.svg",
  },
"22-PAP": {
    tag: "22-PAP",
    label: "22-PAP",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/22-PAP.73x90.svg",
  },
"40-FE": {
    tag: "40-FE",
    label: "40-FE",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/40-FE.73x90.svg",
  },
"41-ALU": {
    tag: "41-ALU",
    label: "41-ALU",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/41-ALU.73x90.svg",
  },
"50-FOR": {
    tag: "50-FOR",
    label: "50-FOR",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/50-FOR.73x90.svg",
  },
"51-FOR": {
    tag: "51-FOR",
    label: "51-FOR",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/51-FOR.73x90.svg",
  },
"60-COT": {
    tag: "60-COT",
    label: "60-COT",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/60-COT.73x90.svg",
  },
"61-TEX": {
    tag: "61-TEX",
    label: "61-TEX",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/61-TEX.73x90.svg",
  },
"62-TEX": {
    tag: "62-TEX",
    label: "62-TEX",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/62-TEX.73x90.svg",
  },
"69-TEX": {
    tag: "69-TEX",
    label: "69-TEX",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/69-TEX.73x90.svg",
  },
"70-GL": {
    tag: "70-GL",
    label: "70-GL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/70-GL.73x90.svg",
  },
"71-GL": {
    tag: "71-GL",
    label: "71-GL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/71-GL.73x90.svg",
  },
"72-GL": {
    tag: "72-GL",
    label: "72-GL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/72-GL.73x90.svg",
  },
"73-GL": {
    tag: "73-GL",
    label: "73-GL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/73-GL.73x90.svg",
  },
"74-GL": {
    tag: "74-GL",
    label: "74-GL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/74-GL.73x90.svg",
  },
"75-GL": {
    tag: "75-GL",
    label: "75-GL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/75-GL.73x90.svg",
  },
"76-GL": {
    tag: "76-GL",
    label: "76-GL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/76-GL.73x90.svg",
  },
"77-GL": {
    tag: "77-GL",
    label: "77-GL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/77-GL.73x90.svg",
  },
"78-GL": {
    tag: "78-GL",
    label: "78-GL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/78-GL.73x90.svg",
  },
"79-GL": {
    tag: "79-GL",
    label: "79-GL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/79-GL.73x90.svg",
  },
"80-Paper": {
    tag: "80-Paper",
    label: "80-Paper",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/80-Paper.73x90.svg",
  },
"81-PapPet": {
    tag: "81-PapPet",
    label: "81-PapPet",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/81-PapPet.73x90.svg",
  },
"82": {
    tag: "82",
    label: "82",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/82.73x90.svg",
  },
"83": {
    tag: "83",
    label: "83",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/83.73x90.svg",
  },
"84-C/PAP": {
    tag: "84-C/PAP",
    label: "84-C/PAP",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/84-C/PAP.73x90.svg",
  },
"84-PapAl": {
    tag: "84-PapAl",
    label: "84-PapAl",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/84-PapAl.73x90.svg",
  },
"85": {
    tag: "85",
    label: "85",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/85.73x90.svg",
  },
"87-CSL": {
    tag: "87-CSL",
    label: "87-CSL",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/87-CSL.73x90.svg",
  },
"90": {
    tag: "90",
    label: "90",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/90.73x90.svg",
  },
"91": {
    tag: "91",
    label: "91",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/91.73x90.svg",
  },
"92": {
    tag: "92",
    label: "92",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/92.73x90.svg",
  },
"95": {
    tag: "95",
    label: "95",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/95.73x90.svg",
  },
"96": {
    tag: "96",
    label: "96",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/96.73x90.svg",
  },
"97": {
    tag: "97",
    label: "97",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/97.73x90.svg",
  },
"98": {
    tag: "98",
    label: "98",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/packaging/98.73x90.svg",
  },
"de:einwegpfand": {
    tag: "de:einwegpfand",
    label: "Einwegpfand",
    link: "",
    message: "",
    logo: "https://world-fr.openfoodfacts.org/images/lang/de/packaging/einwegpfand.70x90.svg",
  },
    // To-Do add Halal logos
  },
  "en:halal-food-council-of-europe": {
    tag: "en:halal-food-council-of-europe"
    label: "Halal Food Council of Europe",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/halal-food-council-of-europe.188x90.svg",
  },
  "fr:societe-francaise-de-controle-de-viande-halal": {
    tag: "fr:societe-francaise-de-controle-de-viande-halal"
    label: "Société francaise-de-controle-de-viande-halal",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/societe-francaise-de-controle-de-viande-halal.188x90.svg",
  },
  "fr:controle-de-la-mosquee-d-evry-courcouronnes": {
    tag: "fr:controle-de-la-mosquee-d-evry-courcouronnes"
    label: "Contrôle-de-la-mosquee-d-evry-courcouronnes",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/controle-de-la-mosquee-d-evry-courcouronnes.188x90.svg",
  },
  "fr:association-rituelle-de-la-grande-mosquee-de-lyon": {
    tag: "fr:association-rituelle-de-la-grande-mosquee-de-lyon"
    label: "association-rituelle-de-la-grande-mosquee-de-lyon",
    logo: "https://world-fr.openfoodfacts.org/images/lang/en/labels/association-rituelle-de-la-grande-mosquee-de-lyon.188x90.svg",
  },
    // To-Do add Other scores logos
};

type DashBoardTheme = {
  /**
   * The tag used in the URL to identify the section
   */
  tag: string;
  /**
   * The name used for the section
   */
  title: string;
  /**
   * The logos associated to this theme
   */
  logos: (keyof typeof LOGOS)[];
};

export const DASHBOARD: DashBoardTheme[] = [
  {
    tag: "nutriscore",
    title: "NutriScore",
    logos: [
      "en:nutriscore-grade-a",
      "en:nutriscore-grade-b",
      "en:nutriscore-grade-c",
      "en:nutriscore-grade-d",
      "en:nutriscore-grade-e",
    ],
  },
  {
    tag: "eco-score",
    title: "EcoScore",
    logos: [
      "en:organic",
      "en:eu-organic",
      "fr:ab-agriculture-biologique",
      "en:eg-oko-verordnung",
      "fr:haute-valeur-environnementale",
      "fr:label-rouge",
      "fr:bleu-blanc-coeur",
      "en:roundtable-on-sustainable-palm-oil",
      "en:rainforest-alliance",
      "en:fairtrade-international",
      "en:max-havelaar",
      "en:sustainable-seafood-msc",
      "en:responsible-aquaculture-asc",
    ],
  },
  {
    tag: "inao",
    title: "INAO",
    logos: [
      "fr:ab-agriculture-biologique",
      "en:eu-organic",
      "en:pdo",
      "en:pgi",
      "en:tsg",
      "fr:label-rouge",
    ],
  },
// To-Do add Scores dashboard
// To-Do add Packaging dashboard
// To-Do add Halal dashboard  
// To-Do add Kosher dashboard
// To-Do add Origins dashboard

];
