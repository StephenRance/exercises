import BodyArea from './BodyArea.type';
import Image from './Image.type';

type Exercise = {
  bodyAreas: BodyArea[];
  female: Image;
  id: string;
  male: Image;
  name: string;
  topLift?: string;
  transcript: string;
};

export default Exercise;
