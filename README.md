This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


server side rendered form with client side small searbar sing "use client "

post. this post.that we use destructure all the component in the post 
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap");
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
  --color-primary:#EE2B69; 
  
  --font-work-sans: "Work Sans", sans-serif;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-work-sans);
}

@layer utilities {
  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text-30-extrabold {
    font-size: 30px;
    font-weight: 800;
    color: white;
  }

  .text-30-bold {
    font-size: 30px;
    font-weight: 700;
    color: black;
  }

  .pink_container {
    width: 100%;
    min-height: 530px;
    background-color: var(--color-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2.5rem 1.5rem;
    
  } 
  
  .section_container {
    padding-left: 0.75rem;  /* px-6 */
    padding-right: 0.75rem; /* px-6 */
    padding-top: 2.5rem;   /* py-10 */
    padding-bottom: 2.5rem; /* py-10 */
    max-width: 50rem;      /* max-w-7xl */
    margin-left: auto;     /* mx-auto */
    margin-right: auto;    /* mx-auto */
  }
  .pattern {
    background-image: linear-gradient(
      to right,
     transparent 10%,
      rgba(0, 0, 0, 0.2) 49.5%,
      rgb(255, 255, 255) 50.5%,
      transparent 50.5%
    );
    background-size: 5% 100%;
    background-position: center;
    background-repeat: repeat-x;
  }

  .tag {
    background-color: var(--color-secondary);
    padding: 0.75rem 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 0.125rem;
    position: relative;
  }

  .heading {
    text-transform: uppercase;
    background-color: black;
    padding: 1.5rem;
    font-weight: 800;
    color: white;
    font-size: clamp(36px, 5vw, 54px);
    line-height: clamp(46px, 6vw, 64px);
    max-width: 64rem;
    text-align: center;
    margin: 1.25rem auto;
  }

  .card_grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.25rem;
}

@media (min-width: 640px) { /* sm */
    .card_grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
    }
}

@media (min-width: 768px) { /* md */
    .card_grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

  .profile_container {
    width: 100%;
    padding: 5rem 1.5rem 2.5rem;
    max-width: 80rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .profile_card {
    width: 20rem;
    padding: 5rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    border: 5px solid black;
    box-shadow: var(--shadow-100);
    border-radius: 1.875rem;
    position: relative;
  }

  .search-form {
    max-width: 48rem;
    width: 100%;
    min-height: 5rem;
    background-color: white;
    border: 5px solid black;
    border-radius: 5rem;
    font-size: 24px;
    margin-top: 2rem;
    padding: 1.25rem;
    display: flex;
    align-items: center;
    gap: 1.25rem; 
    color:#0a0a0a
  } 
 


  .search-input {
    flex-grow: 1;
    font-weight: 800;
    width: 100%;
    outline: none; 
    &::placeholder {
      color: black; /* Ensures the placeholder text color is black */
    }
  } 
  

  .divider {
    border-top: 2px dotted theme('colors.zinc.400'); /* Dotted border */
    max-width: 48rem; /* Equivalent to max-w-4xl */
    margin: 2.5rem auto; /* Equivalent to my-10 mx-auto */
  }
  
  .search-btn {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
} /* Global styles */

/* Custom styles that are not available in Tailwind */
.startup-card {
  background-color: white;
  border: 5px solid black;
  padding: 1.5rem;
  border-radius: 22px;
  box-shadow: var(--shadow-200); /* custom shadow if defined */
  transition: all 0.5s;
}

.startup-card:hover {
  border-color: var(--primary); /* custom color */
  background-color: var(--primary-100); /* custom hover color */
}

.startup-card_date {
  font-weight: 500;
  font-size: 16px;
  background-color: var(--primary-100);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
}

.startup-card_desc {
  font-size: 16px;
  line-height: 1.5;
  color: #333; /* or custom color */
  margin-top: 1rem;
}

.startup-card_img {
  width: 100%;
  height: 164px;
  border-radius: 10px;
  object-fit: cover;
}

.startup-card_btn {
  border-radius: 9999px;
  background-color: #333; /* black color */
  color: white;
  font-weight: 500;
  font-size: 16px;
  padding: 1rem 2rem;
}

.startup-form_label {
  font-weight: 700;
  font-size: 18px;
  color: rgb(239, 239, 239);
  text-transform: uppercase;
  position: relative;
  z-index: 10;
}

.startup-form_input, .startup-form_textarea {
  border: 3px solid rgb(130, 59, 59);
  padding: 1.5rem;
  font-size: 18px;
  font-weight: 600;
  border-radius: 9999px;
  margin-top: 1rem;
  color: rgb(109, 28, 28);
  position: relative;
  z-index: 10;
}

.startup-form_btn {
  background-color: var(--primary);
  border: 4px solid black;
  border-radius: 9999px;
  padding: 1.25rem;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  min-height: 70px;
}

/* Tag and category style */
.category-tag {
  font-weight: 500;
  font-size: 16px;
  background-color: var(--primary-100);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
}

.view-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1.25rem;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}

.view-text {
  font-weight: 500;
  font-size: 16px;
  background-color: var(--primary-100);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-transform: capitalize;
}


.tag-tri {
  position: relative;
}
.tag-tri::before {
  content: '';
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  border-top: 10px solid black;
  border-right: 10px solid transparent;
}

.tag-tri::after {
  content: '';
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  border-bottom: 10px solid rgb(0, 0, 0);
  border-left: 10px solid transparent;
}*/
