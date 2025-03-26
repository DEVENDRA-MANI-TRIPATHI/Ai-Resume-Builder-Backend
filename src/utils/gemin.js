import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config(); // Load API key from .env file

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Analyzes a resume against a job description using Gemini AI.
 * @param {string} resumeText - The resume content.
 * @param {string} jobDescription - The job description to compare against.
 * @returns {Promise<object>} - Structured AI response with ATS score, missing keywords, and suggestions.
 */
export const analyzeResume = async (resumeText, jobDescription) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
            Analyze the following resume and compare it to the job description.
            Provide a JSON-formatted response with the following fields:
            
            - ats_score: A number between 0-100 representing ATS compatibility.
            - strengths: A list of key strengths found in the resume.
            - weaknesses: A list of missing elements or weaknesses.
            - missing_keywords: Extract key skills, tools, or qualifications from the job description that are missing in the resume.
            - improvements: Actionable suggestions to improve compatibility, including how to integrate missing skills and format optimizations.
            
            Respond ONLY in valid JSON format. DO NOT include code block formatting like \`\`\`json.
            
            ### Resume:
            ${resumeText}
            
            ### Job Description:
            ${jobDescription}
        `;

        const result = await model.generateContent(prompt);
        let responseText = result.response.text();

        // Ensure we remove potential Markdown formatting (```json ... ```)
        responseText = responseText.replace(/```json|```/g, "").trim();

        return JSON.parse(responseText); // Safely parse JSON
    } catch (error) {
        console.error("❌ Gemini API Error:", error.message);
        return { error: "Error processing your request." };
    }
};
