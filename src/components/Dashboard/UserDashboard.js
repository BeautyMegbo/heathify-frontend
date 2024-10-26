import React from 'react';
import NutritionPlan from '../AI/NutritionPlan';
import AIChatBot from '../AI/AIChatBot';

function UserDashboard() {
    return (
        <div>
            <h1>Welcome to Your Dashboard</h1>
            <NutritionPlan />
            <AIChatBot />
        </div>
    );
}

export default UserDashboard;
