import { useEffect, useState } from 'react';
import types from '../data/types';

export default function useDmgRelations(selectedTypes) {
  const [x0Types, setX0Types] = useState([]);
  const [x025Types, setX025Types] = useState([]);
  const [x05Types, setX05Types] = useState([]);
  const [x1Types, setX1Types] = useState([]);
  const [x2Types, setX2Types] = useState([]);
  const [x4Types, setX4Types] = useState([]);

  useEffect(() => {
    const x0 = [];
    const x025 = [];
    const x05 = [];
    const x1 = [];
    const x2 = [];
    const x4 = [];

    const dmgRelations = {
      '-2': x025,
      '-1': x05,
      0: x1,
      1: x2,
      2: x4,
      10: x0,
    };

    for (const type of types) {
      let dmg = 0;
      for (const selectedType of selectedTypes) {
        if (type.strengths.includes(selectedType.name)) {
          dmg += 1;
        } else if (type.weaknesses.includes(selectedType.name)) {
          dmg -= 1;
        } else if (type.immunes.includes(selectedType.name)) {
          dmg = 10;
          break;
        }
      }

      dmgRelations[dmg].push(type);
    }

    // if (selectedTypes.length === 1) {
    //   for (const type of types) {
    //     if (selectedTypes[0].immunes.includes(type.name)) {
    //       x0.push(type);
    //       continue;
    //     }
    //     if (type.weaknesses.includes(selectedTypes[0].name)) {
    //       x05.push(type);
    //       continue;
    //     }
    //     if (type.strengths.includes(selectedTypes[0].name)) {
    //       x2.push(type);
    //       continue;
    //     }

    //     x1.push(type);
    //   }
    // }

    // if (selectedTypes.length === 2) {
    //   for (const type of types) {
    //     if (
    //       selectedTypes[0].immunes.includes(type.name) ||
    //       selectedTypes[1].immunes.includes(type.name)
    //     ) {
    //       x0.push(type);
    //       continue;
    //     }

    //     if (
    //       type.weaknesses.includes(selectedTypes[0].name) &&
    //       type.weaknesses.includes(selectedTypes[1].name)
    //     ) {
    //       x025.push(type);
    //       continue;
    //     }

    //     if (
    //       (type.weaknesses.includes(selectedTypes[0].name) &&
    //         !type.strengths.includes(selectedTypes[1].name)) ||
    //       (type.weaknesses.includes(selectedTypes[1].name) &&
    //         !type.strengths.includes(selectedTypes[0].name))
    //     ) {
    //       x05.push(type);
    //       continue;
    //     }

    //     if (
    //       (!type.strengths.includes(selectedTypes[0].name) &&
    //         !type.strengths.includes(selectedTypes[1].name) &&
    //         !type.weaknesses.includes(selectedTypes[0].name) &&
    //         !type.weaknesses.includes(selectedTypes[1].name)) ||
    //       (type.strengths.includes(selectedTypes[0].name) &&
    //         type.weaknesses.includes(selectedTypes[1].name)) ||
    //       (type.strengths.includes(selectedTypes[1].name) &&
    //         type.weaknesses.includes(selectedTypes[0].name))
    //     ) {
    //       x1.push(type);
    //       continue;
    //     }

    //     if (
    //       type.strengths.includes(selectedTypes[0].name) &&
    //       type.strengths.includes(selectedTypes[1].name)
    //     ) {
    //       x4.push(type);
    //       continue;
    //     }

    //     if (
    //       (type.strengths.includes(selectedTypes[0].name) &&
    //         !type.weaknesses.includes(selectedTypes[1].name)) ||
    //       (type.strengths.includes(selectedTypes[1].name) &&
    //         !type.weaknesses.includes(selectedTypes[0].name))
    //     ) {
    //       x2.push(type);
    //       continue;
    //     }
    //   }
    // }

    setX0Types(x0);
    setX025Types(x025);
    setX05Types(x05);
    setX1Types(x1);
    setX2Types(x2);
    setX4Types(x4);
  }, [selectedTypes]);

  return {
    x0Types,
    x025Types,
    x05Types,
    x1Types,
    x2Types,
    x4Types,
  };
}
