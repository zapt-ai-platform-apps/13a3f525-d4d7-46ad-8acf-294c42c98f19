# immerJ - Career Development Platform

## Overview

immerJ is a career development platform leveraging AI to guide users from role conception to securing their dream job through an immersive and engaging journey. The platform is designed to assist secondary school students in identifying suitable careers tailored to their interests and qualifications.

On the landing page, users are greeted with an inspiring background image, the immerJ logo, and the company's vision statement. Users can explore the platform and choose to sign in to access personalized features.

## User Journeys

### 1. Landing and Authentication

1. **Landing Page:** New users visit the platform and are greeted with an inspiring background image, the immerJ logo, and the company's vision statement.

   - **Company Vision:** "A career development platform leveraging AI to take users from role conception to working their dream job through an immersive & engaging journey."

2. **Exploration:** Users can explore the platform's offerings and learn more about the services provided.

3. **Authentication:**

   - **Sign In Prompt:** Users who wish to access personalized features can click the "Sign In" button available on the landing page.
   
   - **Sign In Modal:** Upon clicking "Sign In," an authentication form appears without leaving the page, featuring options to sign in with ZAPT using social providers like Google, Facebook, or Apple.

4. **Post-Login Redirection:**

   - **Direct Access to Develop My Vision:** Upon successful sign-in, users are automatically redirected to the "Develop My Vision" hub for a personalized career development experience.

### 2. Develop My Vision Hub

This hub guides the user through a series of modules to help them explore and refine their career vision.

**Modules:**

- **Role Explorer:** Interactive chat to discover roles aligned with the user's interests. The user responds to a series of questions, and the AI assistant helps them identify a preferred role. The system saves key outputs such as:

  - Preferred Role Title
  - Detailed Preferred Role Title
  - Academic Year
  - Subjects Taken
  - Country

- **Find My Work Environment:** Chat-based exploration of ideal work environments. The assistant gathers information about the user's preferred sector and organization type. These outputs are saved for future use.

- **Identify My Skill Gaps:** Interactive session to uncover areas for skill development. The assistant identifies focus competencies for the user to develop, which are saved.

- **Immersive Day-in-the-Life:** Simulated experience of a day in the preferred role. Additional focus competencies may be identified and saved.

### 3. Viewing Saved Outputs

- **My Profile Page:** Users can access a dedicated page where all their saved outputs are displayed. The preferred role title serves as the heading, and under it, all associated outputs are organized, including:

  - Academic Year
  - Subjects Taken
  - Country
  - Sector
  - Organization Type
  - Focus Competencies

### 4. Other Core Modules (Accessible After Login)

#### 4.1 Close My Skill Gaps Hub

- **Skill Development:** Users can view competencies to focus on and are provided with curated courses to help develop these skills.

#### 4.2 Application Development Hub

- **Features:**
  - **CV Development (Coming Soon)**
  - **Interview Practice (Coming Soon)**
  - **Apply for Roles**

### 5. Logout Functionality

- **Log Out Button:** Users who are signed in can securely log out of their accounts using the "Log Out" button available in the navigation header.

## Additional Features

- **Responsive Design:** The platform features a responsive design that utilizes the entire screen, providing an immersive experience across various devices and screen sizes.
- **Data Persistence:** Key outputs from the user's interactions are saved and displayed in the "My Profile" page for future reference.

## External APIs Used

- **ZAPT AI Services:** Used for AI-powered career coaching and interactive chat modules through the `createEvent` function.

---

**Note:** Some features like CV Development and Interview Practice are planned for future updates.