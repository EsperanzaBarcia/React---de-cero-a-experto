import { useEffect, useEffectEvent, useState } from "react";

interface Pokemon {
    id: number,
    name: string,
    imageUrl: string
}

interface Props {
    id: number;
}

export const usePokemon = ({ id }: Props) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        //! Funciona pero no me convence lo de las response
        const getPokemonById = async (id: number) => {

            setIsLoading(true);

            await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

                .then(async (response) => {

                    if (response.ok) {
                        const data = await response.json();

                        if (data) {
                            setPokemon({
                                id: id,
                                name: data.name,
                                imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                            });
                        }

                    }
                    else {
                        setPokemon(null);
                    }

                })
                .catch((error) => {
                    console.log('aa');
                    console.log(error);
                    setPokemon(null);
                })
            setIsLoading(false);
        };

        getPokemonById(id);
    }, [id]);


    return {

        //Values
        isLoading,
        pokemon,

        formattedNumber: id.toString().padStart(3, '0'),
    }
}
