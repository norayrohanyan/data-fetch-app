const URL = 'https://jsonplaceholder.typicode.com';

export const fetchData = async <T>(resource: string, params?: string): Promise<T[]> => {
  try {
    const response = await fetch(`${URL}/${resource}?_${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: T[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
