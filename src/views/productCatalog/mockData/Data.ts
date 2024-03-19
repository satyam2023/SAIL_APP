import Glyphs from "assets/Glyphs";
import { ImageURISource } from "react-native";

export interface IProductData {
  heading: string;
  image: ImageURISource;
}

export const ProductData = [
  { heading: "Pig Iron", image: Glyphs.PigIron },
  {
    heading: "Cold Rolled Product",
    image: Glyphs.StainlessSteel,
  },
  { heading: "Pipes", image: Glyphs.StainlessSteel },
  { heading: "Semis", image: Glyphs.Semis },
  {
    heading: "Sail TMT Bars",
    image: Glyphs.StainlessSteel,
  },
  {
    heading: "Galvanised Products",
    image: Glyphs.StainlessSteel,
  },
  { heading: "Wirerods", image: Glyphs.StainlessSteel },
  { heading: "PM Plates", image: Glyphs.StainlessSteel },
  {
    heading: "Railway Products",
    image: Glyphs.StainlessSteel,
  },
  {
    heading: "Wheels and Axles",
    image: Glyphs.StainlessSteel,
  },
  {
    heading: "Hot Rolled Products",
    image: Glyphs.StainlessSteel,
  },
  {
    heading: "Stainless Steel Products",
    image: Glyphs.StainlessSteel,
  },
  {
    heading: "Electrical Steels",
    image: Glyphs.StainlessSteel,
  },
  {
    heading: "SAIL SEQR TMT Bars",
    image: Glyphs.StainlessSteel,
  },
];
