import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';  // Base URL for backend requests

// Login User Function
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/login`, { email, password });
        
        // Save token if returned
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }

        return response.data; // Axios automatically parses JSON into response.data
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || `Login failed with status ${error.response.status}`);
        } else {
            throw new Error(error.message || 'Login request failed');
        }
    }
};

// Register User Function (Overwriting to use the new API_BASE_URL)
export const registerUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, { email, password });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || `Registration failed with status ${error.response.status}`);
        } else {
            throw new Error(error.message || 'Registration request failed');
        }
    }
};

// Fetch posts (New function added from previous code)
export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

// Verify Two-Factor Authentication (2FA) Code
export const verifyTwoFactorCode = async (code) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/verify-2fa`, { code });
        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || `2FA failed with status ${error.response.status}`);
        } else {
            throw new Error(error.message || '2FA request failed');
        }
    }
};

// Fetch AI-generated Diagnosis
export const getAIDiagnosis = async (symptoms) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/ai-diagnosis`, { symptoms });
        return response.data.diagnosis;
    } catch (error) {
        throw new Error(`Error fetching diagnosis: ${error.response?.data?.message || error.message}`);
    }
};

// Fetch AI-generated Prescription
export const getAIPrescription = async (age, weight, condition) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/ai-prescription`, {
            age,
            weight,
            condition
        });
        return response.data.prescription;
    } catch (error) {
        throw new Error(`Error fetching prescription: ${error.response?.data?.message || error.message}`);
    }
};
