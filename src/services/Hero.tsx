type Numeric = string & {
  _type?: 'Numeric';
};

type Alignment = 'good';

type Hero = {
  id: string;
  name: string;
  powerstats: {
    intelligence: Numeric;
    strength: Numeric;
    speed: Numeric;
    durability: Numeric;
    power: Numeric;
    combat: Numeric;
  };
  biography: {
    'full-name': string;
    'alter-egos': string;
    aliases: string[];
    'place-of-birth': string;
    'first-appearance': string;
    publisher: string;
    alignment: Alignment;
  };
  appearance: {
    gender: string;
    race: string;
    height: [string, string];
    weight: [string, string];
    'eye-color': string;
    'hair-color': string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    'group-affiliation': string;
    relatives: string;
  };
  image: {
    url: string;
  };
};

export default Hero;
