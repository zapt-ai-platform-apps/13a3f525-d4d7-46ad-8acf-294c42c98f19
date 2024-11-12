# immerJ - Career Development Platform

## Overview

immerJ is a career development platform leveraging AI to guide users from role conception to securing their dream job through an immersive and engaging journey. The platform is designed to assist secondary school students in identifying suitable careers tailored to their interests and qualifications.

After signing in, users are directed straight to the "Develop My Vision" hub, embarking on a personalized journey toward their dream career.

## User Journeys

### 1. Landing and Authentication

1. **Landing:** New users visit the platform and are greeted with an inspiring background image, the immerJ logo, and the company's vision statement.

   - **Company Vision:** "A career development platform leveraging AI to take users from role conception to working their dream job through an immersive & engaging journey."

2. **Authentication:**

   - **Sign In Prompt:** Users are prompted to sign in to access the platform's features.

   - **Sign In with ZAPT:** Upon clicking "Sign In," users are directed to the sign-in page, featuring options to sign in with ZAPT using social providers like Google, Facebook, or Apple.

3. **Post-Login Redirection:**

   - **Direct Access to Develop My Vision:** Upon successful sign-in, users are automatically redirected to the "Develop My Vision" hub, bypassing the landing page on subsequent visits.

### 2. Develop My Vision Hub

This hub guides the user through a series of modules to help them explore and refine their career vision.

**Modules:**

- **Role Explorer:** Interactive chat to discover roles aligned with the user's interests.

- **Find My Work Environment:** Chat-based exploration of ideal work environments.

- **Identify My Skill Gaps:** Interactive session to uncover areas for skill development.

- **Immersive Day-in-the-Life:** Simulated experience of a day in the preferred role.

### 3. Other Core Modules (Accessible After Login)

#### 3.1 Close My Skill Gaps Hub

- **Skill Development:** Users can view competencies to focus on and are provided with curated courses to help develop these skills.

#### 3.2 Application Development Hub

- **Features:**
  - **CV Development (Coming Soon)**
  - **Interview Practice (Coming Soon)**
  - **Apply for Roles**

### 4. Logout Functionality

- **Log Out Button:** Users who are signed in can securely log out of their accounts using the "Log Out" button available in the navigation header.

## Additional Features

- **Responsive Design:** The platform features a responsive design that utilizes the entire screen, providing an immersive experience across various devices and screen sizes.

## External APIs Used

- **ZAPT AI Services:** Used for AI-powered career coaching and interactive chat modules through the `createEvent` function.

---

**Note:** Some features like CV Development and Interview Practice are planned for future updates.