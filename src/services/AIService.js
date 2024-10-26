import axios from 'axios';

/**
 * Fetches a personalized nutrition recommendation based on age, weight, and fitness goal.
 * 
 * @param {number} age - The age of the user.
 * @param {number} weight - The weight of the user (in kilograms or preferred unit).
 * @param {string} goal - The fitness goal (e.g., 'weight loss', 'muscle gain').
 * @returns {Promise<string>} - A recommended nutrition plan from the AI service.
 * @throws Will throw an error if the request fails.
 */
export const getNutritionRecommendation = async (age, weight, goal) => {
    try {
        const response = await axios.post('/api/nutrition-plan', {
            age,
            weight,
            goal
        });

        return response.data.recommendation;
    } catch (error) {
        handleAIError(error, 'Failed to retrieve nutrition recommendation');
    }
};

/**
 * Sends a question to an AI service and retrieves a response.
 * 
 * @param {string} input - The user's query or input to the AI.
 * @returns {Promise<string>} - The AI's answer or response.
 * @throws Will throw an error if the request fails.
 */
export const askAI = async (input) => {
    try {
        const response = await axios.post('/api/ask-ai', { input });
        return response.data.answer;
    } catch (error) {
        handleAIError(error, 'Failed to retrieve AI response');
    }
};

/**
 * Centralized error handling for AI-related API requests.
 * 
 * @param {object} error - The error object thrown during the API request.
 * @param {string} customMessage - A custom error message for the specific request.
 * @throws Will re-throw an error with a more descriptive message.
 */
const handleAIError = (error, customMessage) => {
    if (error.response) {
        // The AI service responded with a status code outside 2xx
        throw new Error(`${customMessage}: ${error.response.data.message || error.response.statusText}`);
    } else if (error.request) {
        // The request was made but no response was received
        throw new Error(`${customMessage}: No response from AI service.`);
    } else {
        // Something else happened during the request
        throw new Error(`${customMessage}: ${error.message}`);
    }
};
