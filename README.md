# immerJ - Career Development Platform

## Overview

immerJ is a career development platform leveraging AI to guide users from role conception to securing their dream job through an immersive and engaging journey. The platform is designed to assist secondary school students in identifying suitable careers tailored to their interests and qualifications.

The enhanced HomePage features a full-screen, immersive design with inspiring imagery representing endless career opportunities. Users are greeted with the platform's vision and easy navigation to key modules.

## User Journeys

### 1. Welcome Page

1. **Landing:** The user lands on the welcome page featuring an inspiring background image, the immerJ logo, the company's vision statement, and navigation options.

   - **Company Vision:** "A career development platform leveraging AI to take users from role conception to working their dream job through an immersive & engaging journey."

2. **Authentication:** If not signed in, the user is prompted to sign in with ZAPT using social providers like Google, Facebook, or Apple.

3. **Navigation:** Once signed in, the user can choose from the following options:

   - **Develop My Vision**
   - **Close My Skill Gaps**
   - **Application Development**

### 2. Develop My Vision Hub

This hub guides the user through a series of modules to help them explore and refine their career vision.

#### Modules:

**1. Role Explorer**

- **Step 1:** The user engages in a conversational chat with an AI career coach named immerJ.
- **Step 2:** The AI asks a series of personalized questions to understand the user's interests, academic background, and aspirations.
- **Step 3:** Based on the responses, the AI provides 10 personalized career suggestions.
- **Step 4:** The user selects a preferred role for further exploration.
- **Step 5:** If the user is in years 12/13, additional specializations are offered.
- **Step 6:** Detailed information about the selected role is provided, including key skills, day-in-the-life, entry requirements, gap analysis, and pros and cons specific to the user.
- **Step 7:** The AI offers next steps, including relevant university courses or vocational training with hyperlinks.
- **Step 8:** The user can choose to save the role for later or explore another role.

**2. Find My Work Environment**

- **Step 1:** The AI helps the user consider factors such as personal interests, work-life balance, job security, career growth, and work culture.
- **Step 2:** The AI asks interactive questions for each theme to identify the user's exact preferences.
- **Step 3:** Based on the insights, the AI summarizes findings and presents potential jobs matching the user's preferences.
- **Step 4:** The user selects one of the options for further exploration.

**3. Identify My Skill Gaps**

- **Step 1:** The AI highlights the competencies required for the selected role.
- **Step 2:** The user is presented with challenging tasks related to each competency.
- **Step 3:** The user attempts each challenge, receiving hints and feedback as needed.
- **Step 4:** After completing the challenges, the AI reviews strengths and areas for improvement.

**4. Immersive Day-in-the-Life**

- **Step 1:** The AI provides an immersive, descriptive experience of a day in the life of the selected role.
- **Step 2:** The user participates in interactive tasks throughout the day simulation.
- **Step 3:** Feedback is provided after each activity, focusing on areas to improve.
- **Step 4:** At the end of the day, the AI offers an overall review of the user's performance.

### 3. Close My Skill Gaps Hub

- **Step 1:** The user views a list of competencies to focus on, based on previous modules.
- **Step 2:** The platform provides curated placeholder courses from Udemy and Coursera to help the user develop these skills.
- **Step 3:** The user can select and explore courses with direct links to close skill gaps.

### 4. Application Development Hub

- **Features:**
  - **CV Development (Coming Soon)**
  - **Interview Practice (Coming Soon)**
  - **Apply for Roles**
- **Step 1:** When selecting "Apply for Roles," the platform displays placeholder job listings relevant to the user's preferences.
- **Step 2:** Jobs are displayed with company names and links, allowing the user to explore potential opportunities.

## Additional Features

- **Logout Functionality:** Users can securely log out of their accounts using the "Log Out" button available in the navigation header.
- **Responsive Design:** The platform features a responsive design that utilizes the entire screen, providing an immersive experience across various devices and screen sizes.

## External APIs Used

- **ZAPT AI Services:** Used for AI-powered career coaching and interactive chat modules through the `createEvent` function.
- **Note:** In the current version, placeholder data is used for courses and job listings. External APIs for Udemy, Coursera, and job search platforms will be integrated in future updates.

---

**Note:** Some features like CV Development and Interview Practice are planned for future updates.