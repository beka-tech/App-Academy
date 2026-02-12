import React from "react";

// All elements data
const elements = [
  {
    symbol: "H",
    name: "Hydrogen",
    category: "Reactive non-metals",
    atomicNumber: 1,
  },
  { symbol: "He", name: "Helium", category: "Noble gases", atomicNumber: 2 },
  { symbol: "Li", name: "Lithium", category: "Alkali metals", atomicNumber: 3 },
  {
    symbol: "Be",
    name: "Beryllium",
    category: "Alkaline earth metals",
    atomicNumber: 4,
  },
  { symbol: "B", name: "Boron", category: "Metalloids", atomicNumber: 5 },
  {
    symbol: "C",
    name: "Carbon",
    category: "Reactive non-metals",
    atomicNumber: 6,
  },
  {
    symbol: "N",
    name: "Nitrogen",
    category: "Reactive non-metals",
    atomicNumber: 7,
  },
  {
    symbol: "O",
    name: "Oxygen",
    category: "Reactive non-metals",
    atomicNumber: 8,
  },
  {
    symbol: "F",
    name: "Fluorine",
    category: "Reactive non-metals",
    atomicNumber: 9,
  },
  { symbol: "Ne", name: "Neon", category: "Noble gases", atomicNumber: 10 },
  { symbol: "Na", name: "Sodium", category: "Alkali metals", atomicNumber: 11 },
  {
    symbol: "Mg",
    name: "Magnesium",
    category: "Alkaline earth metals",
    atomicNumber: 12,
  },
  {
    symbol: "Al",
    name: "Aluminium",
    category: "Post-transition metals",
    atomicNumber: 13,
  },
  { symbol: "Si", name: "Silicon", category: "Metalloids", atomicNumber: 14 },
  {
    symbol: "P",
    name: "Phosphorus",
    category: "Reactive non-metals",
    atomicNumber: 15,
  },
  {
    symbol: "S",
    name: "Sulfur",
    category: "Reactive non-metals",
    atomicNumber: 16,
  },
  {
    symbol: "Cl",
    name: "Chlorine",
    category: "Reactive non-metals",
    atomicNumber: 17,
  },
  { symbol: "Ar", name: "Argon", category: "Noble gases", atomicNumber: 18 },
  {
    symbol: "K",
    name: "Potassium",
    category: "Alkali metals",
    atomicNumber: 19,
  },
  {
    symbol: "Ca",
    name: "Calcium",
    category: "Alkaline earth metals",
    atomicNumber: 20,
  },
  {
    symbol: "Sc",
    name: "Scandium",
    category: "Transition metals",
    atomicNumber: 21,
  },
  {
    symbol: "Ti",
    name: "Titanium",
    category: "Transition metals",
    atomicNumber: 22,
  },
  {
    symbol: "V",
    name: "Vanadium",
    category: "Transition metals",
    atomicNumber: 23,
  },
  {
    symbol: "Cr",
    name: "Chromium",
    category: "Transition metals",
    atomicNumber: 24,
  },
  {
    symbol: "Mn",
    name: "Manganese",
    category: "Transition metals",
    atomicNumber: 25,
  },
  {
    symbol: "Fe",
    name: "Iron",
    category: "Transition metals",
    atomicNumber: 26,
  },
  {
    symbol: "Co",
    name: "Cobalt",
    category: "Transition metals",
    atomicNumber: 27,
  },
  {
    symbol: "Ni",
    name: "Nickel",
    category: "Transition metals",
    atomicNumber: 28,
  },
  {
    symbol: "Cu",
    name: "Copper",
    category: "Transition metals",
    atomicNumber: 29,
  },
  {
    symbol: "Zn",
    name: "Zinc",
    category: "Transition metals",
    atomicNumber: 30,
  },
  {
    symbol: "Ga",
    name: "Gallium",
    category: "Post-transition metals",
    atomicNumber: 31,
  },
  { symbol: "Ge", name: "Germanium", category: "Metalloids", atomicNumber: 32 },
  { symbol: "As", name: "Arsenic", category: "Metalloids", atomicNumber: 33 },
  {
    symbol: "Se",
    name: "Selenium",
    category: "Reactive non-metals",
    atomicNumber: 34,
  },
  {
    symbol: "Br",
    name: "Bromine",
    category: "Reactive non-metals",
    atomicNumber: 35,
  },
  { symbol: "Kr", name: "Krypton", category: "Noble gases", atomicNumber: 36 },
  {
    symbol: "Rb",
    name: "Rubidium",
    category: "Alkali metals",
    atomicNumber: 37,
  },
  {
    symbol: "Sr",
    name: "Strontium",
    category: "Alkaline earth metals",
    atomicNumber: 38,
  },
  {
    symbol: "Y",
    name: "Yttrium",
    category: "Transition metals",
    atomicNumber: 39,
  },
  {
    symbol: "Zr",
    name: "Zirconium",
    category: "Transition metals",
    atomicNumber: 40,
  },
  {
    symbol: "Nb",
    name: "Niobium",
    category: "Transition metals",
    atomicNumber: 41,
  },
  {
    symbol: "Mo",
    name: "Molybdenum",
    category: "Transition metals",
    atomicNumber: 42,
  },
  {
    symbol: "Tc",
    name: "Technetium",
    category: "Transition metals",
    atomicNumber: 43,
  },
  {
    symbol: "Ru",
    name: "Ruthenium",
    category: "Transition metals",
    atomicNumber: 44,
  },
  {
    symbol: "Rh",
    name: "Rhodium",
    category: "Transition metals",
    atomicNumber: 45,
  },
  {
    symbol: "Pd",
    name: "Palladium",
    category: "Transition metals",
    atomicNumber: 46,
  },
  {
    symbol: "Ag",
    name: "Silver",
    category: "Transition metals",
    atomicNumber: 47,
  },
  {
    symbol: "Cd",
    name: "Cadmium",
    category: "Transition metals",
    atomicNumber: 48,
  },
  {
    symbol: "In",
    name: "Indium",
    category: "Post-transition metals",
    atomicNumber: 49,
  },
  {
    symbol: "Sn",
    name: "Tin",
    category: "Post-transition metals",
    atomicNumber: 50,
  },
  { symbol: "Sb", name: "Antimony", category: "Metalloids", atomicNumber: 51 },
  { symbol: "Te", name: "Tellurium", category: "Metalloids", atomicNumber: 52 },
  {
    symbol: "I",
    name: "Iodine",
    category: "Reactive non-metals",
    atomicNumber: 53,
  },
  { symbol: "Xe", name: "Xenon", category: "Noble gases", atomicNumber: 54 },
  { symbol: "Cs", name: "Cesium", category: "Alkali metals", atomicNumber: 55 },
  {
    symbol: "Ba",
    name: "Barium",
    category: "Alkaline earth metals",
    atomicNumber: 56,
  },
  {
    symbol: "La",
    name: "Lanthanum",
    category: "Lanthanides",
    atomicNumber: 57,
  },
  { symbol: "Ce", name: "Cerium", category: "Lanthanides", atomicNumber: 58 },
  {
    symbol: "Pr",
    name: "Praseodymium",
    category: "Lanthanides",
    atomicNumber: 59,
  },
  {
    symbol: "Nd",
    name: "Neodymium",
    category: "Lanthanides",
    atomicNumber: 60,
  },
  {
    symbol: "Pm",
    name: "Promethium",
    category: "Lanthanides",
    atomicNumber: 61,
  },
  { symbol: "Sm", name: "Samarium", category: "Lanthanides", atomicNumber: 62 },
  { symbol: "Eu", name: "Europium", category: "Lanthanides", atomicNumber: 63 },
  {
    symbol: "Gd",
    name: "Gadolinium",
    category: "Lanthanides",
    atomicNumber: 64,
  },
  { symbol: "Tb", name: "Terbium", category: "Lanthanides", atomicNumber: 65 },
  {
    symbol: "Dy",
    name: "Dysprosium",
    category: "Lanthanides",
    atomicNumber: 66,
  },
  { symbol: "Ho", name: "Holmium", category: "Lanthanides", atomicNumber: 67 },
  { symbol: "Er", name: "Erbium", category: "Lanthanides", atomicNumber: 68 },
  { symbol: "Tm", name: "Thulium", category: "Lanthanides", atomicNumber: 69 },
  {
    symbol: "Yb",
    name: "Ytterbium",
    category: "Lanthanides",
    atomicNumber: 70,
  },
  { symbol: "Lu", name: "Lutetium", category: "Lanthanides", atomicNumber: 71 },
  {
    symbol: "Hf",
    name: "Hafnium",
    category: "Transition metals",
    atomicNumber: 72,
  },
  {
    symbol: "Ta",
    name: "Tantalum",
    category: "Transition metals",
    atomicNumber: 73,
  },
  {
    symbol: "W",
    name: "Tungsten",
    category: "Transition metals",
    atomicNumber: 74,
  },
  {
    symbol: "Re",
    name: "Rhenium",
    category: "Transition metals",
    atomicNumber: 75,
  },
  {
    symbol: "Os",
    name: "Osmium",
    category: "Transition metals",
    atomicNumber: 76,
  },
  {
    symbol: "Ir",
    name: "Iridium",
    category: "Transition metals",
    atomicNumber: 77,
  },
  {
    symbol: "Pt",
    name: "Platinum",
    category: "Transition metals",
    atomicNumber: 78,
  },
  {
    symbol: "Au",
    name: "Gold",
    category: "Transition metals",
    atomicNumber: 79,
  },
  {
    symbol: "Hg",
    name: "Mercury",
    category: "Transition metals",
    atomicNumber: 80,
  },
  {
    symbol: "Tl",
    name: "Thallium",
    category: "Post-transition metals",
    atomicNumber: 81,
  },
  {
    symbol: "Pb",
    name: "Lead",
    category: "Post-transition metals",
    atomicNumber: 82,
  },
  {
    symbol: "Bi",
    name: "Bismuth",
    category: "Post-transition metals",
    atomicNumber: 83,
  },
  { symbol: "Po", name: "Polonium", category: "Metalloids", atomicNumber: 84 },
  { symbol: "At", name: "Astatine", category: "Metalloids", atomicNumber: 85 },
  { symbol: "Rn", name: "Radon", category: "Noble gases", atomicNumber: 86 },
  {
    symbol: "Fr",
    name: "Francium",
    category: "Alkali metals",
    atomicNumber: 87,
  },
  {
    symbol: "Ra",
    name: "Radium",
    category: "Alkaline earth metals",
    atomicNumber: 88,
  },
  { symbol: "Ac", name: "Actinium", category: "Actinides", atomicNumber: 89 },
  { symbol: "Th", name: "Thorium", category: "Actinides", atomicNumber: 90 },
  {
    symbol: "Pa",
    name: "Protactinium",
    category: "Actinides",
    atomicNumber: 91,
  },
  { symbol: "U", name: "Uranium", category: "Actinides", atomicNumber: 92 },
  { symbol: "Np", name: "Neptunium", category: "Actinides", atomicNumber: 93 },
  { symbol: "Pu", name: "Plutonium", category: "Actinides", atomicNumber: 94 },
  { symbol: "Am", name: "Americium", category: "Actinides", atomicNumber: 95 },
  { symbol: "Cm", name: "Curium", category: "Actinides", atomicNumber: 96 },
  { symbol: "Bk", name: "Berkelium", category: "Actinides", atomicNumber: 97 },
  {
    symbol: "Cf",
    name: "Californium",
    category: "Actinides",
    atomicNumber: 98,
  },
  {
    symbol: "Es",
    name: "Einsteinium",
    category: "Actinides",
    atomicNumber: 99,
  },
  { symbol: "Fm", name: "Fermium", category: "Actinides", atomicNumber: 100 },
  {
    symbol: "Md",
    name: "Mendelevium",
    category: "Actinides",
    atomicNumber: 101,
  },
  { symbol: "No", name: "Nobelium", category: "Actinides", atomicNumber: 102 },
  {
    symbol: "Lr",
    name: "Lawrencium",
    category: "Actinides",
    atomicNumber: 103,
  },
  {
    symbol: "Rf",
    name: "Rutherfordium",
    category: "Transition metals",
    atomicNumber: 104,
  },
  {
    symbol: "Db",
    name: "Dubnium",
    category: "Transition metals",
    atomicNumber: 105,
  },
  {
    symbol: "Sg",
    name: "Seaborgium",
    category: "Transition metals",
    atomicNumber: 106,
  },
  {
    symbol: "Bh",
    name: "Bohrium",
    category: "Transition metals",
    atomicNumber: 107,
  },
  {
    symbol: "Hs",
    name: "Hassium",
    category: "Transition metals",
    atomicNumber: 108,
  },
  {
    symbol: "Mt",
    name: "Meitnerium",
    category: "Unknown properties",
    atomicNumber: 109,
  },
  {
    symbol: "Ds",
    name: "Darmstadtium",
    category: "Unknown properties",
    atomicNumber: 110,
  },
  {
    symbol: "Rg",
    name: "Roentgenium",
    category: "Unknown properties",
    atomicNumber: 111,
  },
  {
    symbol: "Cn",
    name: "Copernicium",
    category: "Transition metals",
    atomicNumber: 112,
  },
  {
    symbol: "Nh",
    name: "Nihonium",
    category: "Post-transition metals",
    atomicNumber: 113,
  },
  {
    symbol: "Fl",
    name: "Flerovium",
    category: "Post-transition metals",
    atomicNumber: 114,
  },
  {
    symbol: "Mc",
    name: "Moscovium",
    category: "Post-transition metals",
    atomicNumber: 115,
  },
  {
    symbol: "Lv",
    name: "Livermorium",
    category: "Post-transition metals",
    atomicNumber: 116,
  },
  {
    symbol: "Ts",
    name: "Tennessine",
    category: "Reactive non-metals",
    atomicNumber: 117,
  },
  {
    symbol: "Og",
    name: "Oganesson",
    category: "Noble gases",
    atomicNumber: 118,
  },
];

// Category colors using Tailwind CSS
const categoryColors = {
  "Alkali metals": "bg-red-200",
  "Alkaline earth metals": "bg-orange-200",
  "Transition metals": "bg-yellow-200",
  "Post-transition metals": "bg-green-200",
  Metalloids: "bg-blue-200",
  "Reactive non-metals": "bg-indigo-200",
  "Noble gases": "bg-purple-200",
  Lanthanides: "bg-pink-200",
  Actinides: "bg-teal-200",
  "Unknown properties": "bg-gray-200",
};

// Periodic Table Component
const PeriodicTable = () => {
  return (
    <div className="grid grid-cols-18 gap-1 p-4">
      {elements.map((element) => (
        <div
          key={element.atomicNumber}
          className={`p-2 border border-gray-300 text-center ${
            categoryColors[element.category]
          }`}
        >
          <div className="text-sm font-bold">{element.symbol}</div>
          <div className="text-xs">{element.name}</div>
          <div className="text-xs">{element.atomicNumber}</div>
        </div>
      ))}
    </div>
  );
};

export default PeriodicTable;
