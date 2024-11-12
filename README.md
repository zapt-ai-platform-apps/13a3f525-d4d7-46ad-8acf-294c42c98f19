# immerJ - Career Development Platform

## Overview

immerJ is a career development platform leveraging AI to guide users from role conception to securing their dream job through an immersive and engaging journey. The platform is designed to assist secondary school students, university students, employed individuals seeking a change, and unemployed individuals in identifying suitable careers tailored to their interests and qualifications.

## User Journeys

### 1. Welcome Page

- **Step 1:** The user lands on the welcome page displaying the immerJ logo, the company's vision statement, and navigation options.
- **Step 2:** If not signed in, the user is prompted to sign in with ZAPT using social providers like Google, Facebook, or Apple.
- **Step 3:** Upon signing in, the user can select from the following hubs:
  - Develop My Vision
  - Close My Skill Gaps
  - Application Development

### 2. Develop My Vision Hub

#### Modules:

1. **Role Explorer**
   - **Step 1:** The user engages in a conversational chat with an AI career coach named immerJ.
   - **Step 2:** The AI asks a series of questions to understand the user's interests, academic background, and aspirations.
   - **Step 3:** Based on the responses, the AI provides 10 personalized career suggestions.
   - **Step 4:** The user selects a preferred role for further exploration.
   - **Step 5:** For students in year 12/13, additional specializations are offered.
   - **Step 6:** Detailed information about the selected role is provided, including key skills, day-in-the-life, entry requirements, and suggestions to close any qualification gaps.
   - **Step 7:** The user can choose to save the role for later exploration or explore another role.

2. **Find My Work Environment**
   - **Step 1:** The AI helps the user consider factors such as personal interests, work-life balance, job security, career growth, and work culture.
   - **Step 2:** The AI asks interactive questions for each theme to identify the user's exact preferences.
   - **Step 3:** Based on the insights, the AI summarizes findings and presents potential jobs that match the user's preferences.
   - **Step 4:** The user selects one of the options for further exploration.

3. **Identify My Skill Gaps**
   - **Step 1:** The AI highlights the competencies required for the selected role.
   - **Step 2:** The user is presented with challenging tasks related to the role.
   - **Step 3:** The user attempts each challenge, receiving hints and feedback as needed.
   - **Step 4:** After completing the challenges, the AI reviews strengths and areas for improvement.

4. **Immersive Day-in-the-life**
   - **Step 1:** The AI provides an immersive, descriptive experience of a day in the life of the selected role.
   - **Step 2:** The user participates in interactive tasks throughout the day simulation.
   - **Step 3:** Feedback is provided after each activity, focusing on areas to improve.
   - **Step 4:** At the end of the day, the AI offers an overall review of the user's performance.

### 3. Close My Skill Gaps Hub

- **Step 1:** The user views a list of competencies to focus on.
- **Step 2:** The platform provides relevant courses from Udemy and Coursera, apprenticeships, internships, and placements with hyperlinks.
- **Step 3:** The user can select and enroll in courses or apply for opportunities to close skill gaps.

### 4. Application Development Hub

- **Features:** 
  - **CV Development (Coming Soon)**
  - **Interview Practice (Coming Soon)**
  - **Apply for Roles**
- **Step 1:** When selecting "Apply for Roles," the platform searches LinkedIn and other job sites for suitable roles based on the user's saved preferences.
- **Step 2:** Roles are displayed with hyperlinks, allowing the user to apply directly.

## External APIs and Services

- **ChatGPT (OpenAI):** Used for conversational AI interactions.
- **Udemy and Coursera APIs:** Used to fetch relevant courses for skill development.
- **LinkedIn and Job Sites APIs:** Used to search and display job listings.
- **Supabase Auth:** Used for user authentication.
- **Sentry Error Logging:** Used for error tracking and monitoring.

**Note:** Some features like searching external job sites or courses may require additional API keys and handling, which should be configured appropriately in the environment variables.

---