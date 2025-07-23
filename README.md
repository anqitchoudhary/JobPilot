# JobPilot - AI Career Coach 🚀

Welcome to JobPilot, a full-stack AI-powered career coach designed to help professionals accelerate their career growth. This application provides personalized guidance, interview preparation, and AI-powered tools for job success.

**[Live Demo](https://thejobpilot.vercel.app/)**

 \#\# About The Project

JobPilot is an all-in-one platform built to assist users in every step of their job search and career development. By leveraging the power of Google's Gemini AI, it provides intelligent insights, generates professional documents, and helps users prepare for technical interviews. The goal is to provide a seamless and powerful toolkit for anyone looking to advance in their professional life.

-----

## ✨ Key Features

  * **🤖 AI-Powered Industry Insights:** Get up-to-date analysis on your chosen industry, including salary ranges, demand levels, key trends, and recommended skills.
  * **📝 Smart Resume Builder:** Create, edit, and download a professional resume with a clean, modern template.
  * **✍️ AI Cover Letter Generator:** Generate personalized and compelling cover letters tailored to specific job descriptions. Features include inline editing and downloading as PDF or TXT.
  * **🧠 Technical Interview Prep:** Take AI-generated multiple-choice quizzes based on your industry and skills. Receive an improvement tip at the end to focus your learning.
  * **🕒 Scheduled Weekly Updates:** An Inngest cron job automatically updates industry insights every week, ensuring the data is always fresh.
  * **🔐 User Authentication:** Secure user sign-up and sign-in functionality is handled by Clerk.
  * **🎨 Modern UI:** A sleek, responsive, and user-friendly interface built with Shadcn UI and Tailwind CSS.

-----

## 🛠️ Tech Stack

This project is built with a modern, full-stack technology set.

  * **Framework:** [Next.js](https://nextjs.org/)
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
  * **Database:** [Neon DB](https://neon.tech/) (Serverless Postgres)
  * **ORM:** [Prisma](https://www.prisma.io/)
  * **Authentication:** [Clerk](https://clerk.com/)
  * **AI:** [Google Gemini API](https://ai.google.dev/)
  * **Background Jobs & Cron:** [Inngest](https://www.inngest.com/)
  * **Deployment:** [Vercel](https://vercel.com/)

-----

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need to have Node.js (version 18 or higher) and npm installed on your machine.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install NPM packages:**

    ```bash
    npm install
    ```

3.  **Set up your environment variables:**
    Create a file named `.env` in the root of your project and add the following keys. You will need to get these from their respective services (Clerk, Neon DB, and Google AI Studio).

    ```env
    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

    # Neon Database (PostgreSQL)
    DATABASE_URL="your_neon_database_connection_url_with_pooling"
    DIRECT_URL="your_neon_database_direct_connection_url"

    # Google Gemini AI
    GEMINI_API_KEY=your_google_gemini_api_key

    # Inngest (Optional for local dev, needed for production)
    INNGEST_SIGNING_KEY=your_inngest_signing_key
    ```

4.  **Push the database schema:**
    Run the following command to sync your Prisma schema with your Neon database.

    ```bash
    npx prisma db push
    ```

5.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Your application should now be running on [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000).

-----

## 🌐 Deployment

This project is deployed on **Vercel**. Any push to the `main` branch will trigger an automatic re-deployment with the latest changes.

## Acknowledgements

  * This project was built based on the teachings and guidance of **Piyush Agarwal/RoadsideCoder**.
  * Thanks to the creators and maintainers of all the fantastic open-source libraries used.
