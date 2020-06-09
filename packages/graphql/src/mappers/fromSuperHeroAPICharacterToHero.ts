import type SuperHeroAPICharacter from '../Hero/SuperHeroAPICharacter';
import type { Hero } from '../Hero/typeDefs';
import fromHeightToMeters from './fromHeightToMeters';

/**
 * Get numbers and periods from string and try to parse to float.
 * @param text
 */
const getNumber = (text: string) => parseFloat(text.replace(/[^\d\,]/g, ''));

export default function fromSuperHeroAPICharacterToHero(
  hero: SuperHeroAPICharacter,
): Hero {
  return {
    id: hero.id,
    name: hero.name,
    avatar: hero.image.url,
    stats: {
      combat: parseFloat(hero.powerstats.combat),
      durability: parseFloat(hero.powerstats.durability),
      intelligence: parseFloat(hero.powerstats.intelligence),
      power: parseFloat(hero.powerstats.power),
      speed: parseFloat(hero.powerstats.speed),
      strength: parseFloat(hero.powerstats.strength),
    },
    appearance: {
      eyeColor: hero.appearance['eye-color'],
      gender: hero.appearance.gender,
      hairColor: hero.appearance['hair-color'],
      height: fromHeightToMeters(hero.appearance.height),
      race: hero.appearance.race,
      weight: getNumber(hero.appearance.weight[1]),
    },
    biography: {
      aliases: hero.biography.aliases,
      alignment: hero.biography.alignment,
      alterEgos: hero.biography['alter-egos'],
      firstAppearance: hero.biography['first-appearance'],
      fullName: hero.biography['full-name'],
      placeOfBirth: hero.biography['place-of-birth'],
      publisher: hero.biography.publisher,
    },
    connections: {
      groupAffiliation: hero.connections['group-affiliation'],
      relatives: hero.connections.relatives,
    },
    work: {
      base: hero.work.base,
      occupation: hero.work.occupation,
    },
  };
}
