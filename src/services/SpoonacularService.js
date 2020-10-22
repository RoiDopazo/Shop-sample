import Axios from 'axios';
import AxiosInstance from './AxiosInstance';

const SpoonacularService = {
  getCuisines: () => {
    return [
      { name: 'African' },
      { name: 'American' },
      { name: 'British' },
      { name: 'Cajun' },
      { name: 'Caribbean' },
      { name: 'Chinese' },
      { name: 'Eastern European' },
      { name: 'European' },
      { name: 'French' },
      { name: 'German' },
      { name: 'Greek' },
      { name: 'Indian' },
      { name: 'Irish' },
      { name: 'Italian' },
      { name: 'Japanese' },
      { name: 'Jewish' },
      { name: 'Korean' },
      { name: 'Latin American' },
      { name: 'Mediterranean' },
      { name: 'Mexican' },
      { name: 'Middle Eastern' },
      { name: 'Nordic' },
      { name: 'Southern' },
      { name: 'Spanish' },
      { name: 'Thai' },
      { name: 'Vietnamese' },
    ];
  },

  searchRecipes: async ({ category }) => {
    console.log(category);
    try {
      const data = await AxiosInstance.get('recipes/complexSearch');
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  },
};

export default SpoonacularService;
