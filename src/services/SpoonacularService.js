import AxiosInstance from './AxiosInstance';

const SpoonacularService = {
  getCuisines: () => {
    // There is no endpoint in the api to get the cuisines
    // It has to be mocked for now
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
    // return AxiosInstance.get('/recipes/complexSearch');
    return {
      results: [
        {
          id: 592479,
          title: 'Kale and Quinoa Salad with Black Beans',
          image: 'https://spoonacular.com/recipeImages/592479-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 547775,
          title: 'Creamy Avocado Pasta',
          image: 'https://spoonacular.com/recipeImages/547775-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 818941,
          title: 'Avocado Toast with Eggs, Spinach, and Tomatoes',
          image: 'https://spoonacular.com/recipeImages/818941-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 495111,
          title: 'Citrus Sesame Kale',
          image: 'https://spoonacular.com/recipeImages/495111-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 689502,
          title: 'Melt In Your Mouth Kale Salad',
          image: 'https://spoonacular.com/recipeImages/689502-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 582897,
          title: 'Mexican Salad with Lime Dressing',
          image: 'https://spoonacular.com/recipeImages/582897-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 777037,
          title: 'Weekly Meal Plan #17',
          image: 'https://spoonacular.com/recipeImages/777037-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 801710,
          title: 'Matcha Green Tea and Pineapple Smoothie',
          image: 'https://spoonacular.com/recipeImages/801710-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 695486,
          title: 'Green Smoothie',
          image: 'https://spoonacular.com/recipeImages/695486-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 812966,
          title: 'Low Carb Frosty',
          image: 'https://spoonacular.com/recipeImages/812966-312x231.jpg',
          imageType: 'jpg',
        },
      ],
      offset: 0,
      number: 10,
      totalResults: 370432,
    };
  },
};

export default SpoonacularService;
