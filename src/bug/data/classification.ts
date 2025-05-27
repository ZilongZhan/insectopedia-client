import type { Phylum } from "./types";

const classifications: Phylum[] = [
  {
    name: "Arthropoda",
    classes: [
      {
        name: "Insecta",
        orders: [
          "Coleoptera",
          "Lepidoptera",
          "Diptera",
          "Hymenoptera",
          "Hemiptera",
        ],
      },
      {
        name: "Arachnida",
        orders: [
          "Araneae",
          "Scorpiones",
          "Acari",
          "Opiliones",
          "Pseudoscorpiones",
        ],
      },
      {
        name: "Crustacea",
        orders: [
          "Decapoda",
          "Isopoda",
          "Amphipoda",
          "Copepoda",
          "Branchiopoda",
        ],
      },
      {
        name: "Chilopoda",
        orders: [
          "Scutigeromorpha",
          "Lithobiomorpha",
          "Scolopendromorpha",
          "Geophilomorpha",
          "Craterostigmomorpha",
        ],
      },
      {
        name: "Diplopoda",
        orders: [
          "Julida",
          "Polydesmida",
          "Spirobolida",
          "Glomerida",
          "Chordeumatida",
        ],
      },
    ],
  },
  {
    name: "Mollusca",
    classes: [
      {
        name: "Gastropoda",
        orders: [
          "Stylommatophora",
          "Neogastropoda",
          "Patellogastropoda",
          "Vetigastropoda",
          "Neritimorpha",
        ],
      },
      {
        name: "Bivalvia",
        orders: ["Venerida", "Mytilida", "Ostreoida", "Unionida", "Pectinida"],
      },
      {
        name: "Cephalopoda",
        orders: [
          "Octopoda",
          "Teuthida",
          "Sepiida",
          "Nautilida",
          "Vampyromorphida",
        ],
      },
      {
        name: "Polyplacophora",
        orders: [
          "Chitonida",
          "Lepidopleurida",
          "Acanthochitonida",
          "Mopaliida",
          "Neoloricata",
        ],
      },
      {
        name: "Scaphopoda",
        orders: ["Dentaliida", "Gadilida"],
      },
    ],
  },
  {
    name: "Annelida",
    classes: [
      {
        name: "Polychaeta",
        orders: [
          "Phyllodocida",
          "Canalipalpata",
          "Eunicida",
          "Scolecida",
          "Terebellida",
        ],
      },
      {
        name: "Clitellata",
        orders: [
          "Haplotaxida",
          "Lumbriculida",
          "Branchiobdellida",
          "Enchytraeida",
          "Tubificida",
        ],
      },
      {
        name: "Hirudinea",
        orders: ["Arhynchobdellida", "Rhynchobdellida"],
      },
    ],
  },
  {
    name: "Nematoda",
    classes: [
      {
        name: "Chromadorea",
        orders: ["Rhabditida", "Ascaridida", "Strongylida", "Spirurida"],
      },
      {
        name: "Enoplea",
        orders: ["Dorylaimida", "Trichocephalida"],
      },
    ],
  },
  {
    name: "Onychophora",
    classes: [
      {
        name: "Udeonychophora",
        orders: ["Peripatopsidae", "Peripatidae"],
      },
    ],
  },
  {
    name: "Tardigrada",
    classes: [
      {
        name: "Eutardigrada",
        orders: ["Parachela", "Apochela"],
      },
      {
        name: "Heterotardigrada",
        orders: ["Echiniscoidea", "Arthrotardigrada"],
      },
    ],
  },
  {
    name: "Platyhelminthes",
    classes: [
      {
        name: "Turbellaria",
        orders: ["Tricladida", "Polycladida"],
      },
      {
        name: "Trematoda",
        orders: ["Echinostomida", "Plagiorchiida"],
      },
      {
        name: "Cestoda",
        orders: ["Cyclophyllidea", "Diphyllobothriidea"],
      },
    ],
  },
  {
    name: "Nematomorpha",
    classes: [
      {
        name: "Gordioida",
        orders: [],
      },
    ],
  },
  {
    name: "Rotifera",
    classes: [
      {
        name: "Monogononta",
        orders: ["Ploima", "Flosculariaceae"],
      },
      {
        name: "Bdelloidea",
        orders: ["Philodinida"],
      },
    ],
  },
  {
    name: "Gastrotricha",
    classes: [
      {
        name: "Chaetonotida",
        orders: ["Chaetonotidae", "Dasydytidae"],
      },
      {
        name: "Macrodasyida",
        orders: ["Thaumastodermatidae", "Lepidodasyidae"],
      },
    ],
  },
];

export default classifications;
