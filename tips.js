// tips.js
export function getRandomTip() {
    const tips = [
        "Start your day with a clear goal.",
        "Break big tasks into smaller, achievable chunks.",
        "Stay hydrated and take short breaks.",
        "Avoid multitasking. Focus on one thing at a time.",
        "Reflect on your progress at the end of each day."
    ];

    const index = Math.floor(Math.random() * tips.length);
    return tips[index];
}
