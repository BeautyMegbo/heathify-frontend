import React, { useState } from 'react';
import { getNutritionRecommendation } from '../../services/AIService';

function NutritionPlan() {
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [goal, setGoal] = useState(''); // e.g., weight loss, muscle gain
    const [recommendation, setRecommendation] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const recommendation = await getNutritionRecommendation(age, weight, goal);
        setRecommendation(recommendation);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" />
                <select value={goal} onChange={(e) => setGoal(e.target.value)}>
                    <option value="">Select Goal</option>
                    <option value="weight loss">Weight Loss</option>
                    <option value="muscle gain">Muscle Gain</option>
                </select>
                <button type="submit">Get Recommendation</button>
            </form>
            {recommendation && <div><h3>Your AI Nutrition Plan:</h3><p>{recommendation}</p></div>}
        </div>
    );
}

export default NutritionPlan;
