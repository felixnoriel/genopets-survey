# fullstack-monorepo
### Updated version of the project, what has been done:
#### Steps to run the project:
1. Clone this project
2. Install dependencies and run the app locally by going to the root folder then run the ff:
```
yarn install
yarn dev
```
2. access the front end at http://localhost:3000
3. Answer all questions and submit the answers. All questions are required.
4. After submitting, refresh the page and answers should load and prefill the survey. 
#### API
- Use sqlite3 as a local database, typeorm for query builder and repository type approach on handling database entities
- Setup `use case` type of approach on implementing business logic
- Created controller & endpoint to receive requests on creating survey answers
- Created unit and e2e tests (tests folder)

#### Frontend
- Install zustand as a store state management
- Create a hook to fetch survey answers from the API on page load and set them as default values if they exist
- Create a function to submit answers to the API. This includes validation that all questions are required.
- Show numeric ranking if the question answer type is `rank`
- Update designs to make it look like/close enough to the image below

### Original version:

This is a monorepo containing 3 parts: `ui`, `frontend` and `api`

`ui` is the component library, `frontend` is the web app built in Next.js and `api` is the backend built in Nest.js

To start developing, simply make the following commands at the root:

```
yarn install
yarn dev
```

After that, `frontend` can be accessed at `http://localhost:3001`, the storybook for `ui` at `http://localhost:6006` and the backend `api` at `http://localhost:8080`

The original aesthetics can be seen here:

<img width="922" alt="Screen Shot 2022-01-19 at 2 56 35 AM" src="https://user-images.githubusercontent.com/11192982/150119894-81c9dc06-03d7-4b98-9b85-3756812d401e.png">
