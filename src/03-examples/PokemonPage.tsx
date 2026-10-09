import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {

    const { counter, increment, decrement } = useCounter();

    const { isLoading, pokemon, formattedNumber } = usePokemon({ id: counter });

    if (isLoading) {
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">#{formattedNumber} {pokemon?.name}</h3>
                <h3 className="text-xl font-bold text-white">Cargando...</h3>
            </div>

        );
    }

    if (!pokemon) {
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">#{formattedNumber} No disponible</h3>
                <div className="flex gap-2">

                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={decrement}>
                        Anterior
                    </button>

                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                        onClick={increment}>
                        Siguiente
                    </button>

                </div>
            </div>

        );
    }

    return (
        <div className="bg-gradient flex flex-col items-center">
            <h1 className="text-2xl font-thin text-white">Pokémon</h1>
            <h3 className="text-xl font-bold text-white">#{formattedNumber} {pokemon.name}</h3>
            <img
                src={pokemon.imageUrl}
                alt={pokemon.name}
            />

            <div className="flex gap-2">

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={decrement}>
                    Anterior
                </button>

                <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                    onClick={increment}>
                    Siguiente
                </button>

            </div>
        </div>
    );
};