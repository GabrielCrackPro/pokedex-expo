import axios, { AxiosInstance } from "axios";
import { Pokemon } from "../models/Pokemon";
import { Endpoints } from "../constants/endpoints";

const api: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getDataList = async (listEndpoint: Endpoints, limit: number) => {
  try {
    const response = await api.get(`${listEndpoint}?limit=${limit}`);
    const list = response.data.results;
    const data = await Promise.all(
      list.map(async (entry: any) => {
        try {
          const response = await api.get(`${listEndpoint}/${entry.name}`);
          return response.data;
        } catch (error) {}
      }),
    );
    return data;
  } catch (error) {}
};

export const getPokemon = async (
  pokemonId: number | string,
): Promise<Pokemon | undefined> => {
  try {
    const response = await api.get(`pokemon/${pokemonId}`);

    return response.data;
  } catch (error) {}
};

export const getPokemonProperty = async (
  pokemonId: number,
  query: Endpoints,
): Promise<keyof Pokemon | undefined> => {
  try {
    const response = await api.get(`${query}/${pokemonId}`);
    return response.data;
  } catch (error) {}
};

export const getProperty = async (endpoint: Endpoints | string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {}
};
