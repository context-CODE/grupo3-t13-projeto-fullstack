import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

export interface iAdvertisement {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  color: string;
  kilometers: number;
  price: number;
  description: string;
  image: string;
}

interface iFilter {
  brand: string;
  model: string;
  color: string;
  fuel: string;
  year: string;
  kilometers: string;
  price: string;
}

interface iAdvertisementContext {
  advertisements: iAdvertisement[] | undefined;
  setAdvertisements: Dispatch<SetStateAction<iAdvertisement[] | undefined>>;
  brands: string[];
  filter: iFilter;
  addFilter(filterObj: Partial<iFilter>): void;
}

interface iAdvertisementProviderProps {
  children: React.ReactNode;
}

const AdvertisementContext = createContext({} as iAdvertisementContext);

export const AdvertisementProvider = ({
  children,
}: iAdvertisementProviderProps) => {
  const [advertisements, setAdvertisements] = useState<iAdvertisement[]>();
  const [filter, setFilter] = useState<iFilter>({
    brand: '',
    model: '',
    color: '',
    fuel: '',
    year: '',
    price: '',
    kilometers: '',
  });
  const brands: string[] = [
    'chevrolet',
    'citroën',
    'fiat',
    'ford',
    'honda',
    'hyundai',
    'nissan',
    'peugeot',
    'renault',
    'toyota',
    'volkswagen',
  ];

  const addFilter = (filterObj: Partial<iFilter>): void => {
    const filters: string[] = Object.keys(filter);

    filters.forEach((e) => {
      if (e === Object.keys(filterObj)[0]) {
        setFilter({
          ...filter,
          ...filterObj,
        });
      }
    });
  };
  console.log(filter);

  return (
    <AdvertisementContext.Provider
      value={{ advertisements, setAdvertisements, brands, filter, addFilter }}
    >
      {children}
    </AdvertisementContext.Provider>
  );
};

export const useAdvertisementContext = () => useContext(AdvertisementContext);
