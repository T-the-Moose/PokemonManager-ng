import {Sprites} from "./sprites";
import {Types} from "./types";

export interface MonInterfaceJson {
  name: string;
  height: number;
  weight: number;
  type: Types;
  sprites: Sprites;
}

