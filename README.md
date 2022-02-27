# Run the app:

docker-compose up

# App

http://localhost:3000/

## Implementation details

- Sketched the solution to find out how many components I should build
- Checked online the Final Space API to understand how the endpoints work and what are the values returned
- Decided to use Semantic-ui to help me scaffold the solution

First of all I scaffolded the solution with dummy data. Once I had it, I implemented the api endpoints to make real calls to the Final Space API.
In the begining I wanted to enrich the episodes with the characters images but I decided to do it separately as I saw it simpler.
For the pagination I decided to make it simple as the api does not return a big chunk of episodes, so I ended up adding 2 buttons, previous & next, and currentPage and totalPages.

In the end I decided to dockerize the final solution, so it is easier to run and avoid installing stuff locally.

## Improvements

- Add tests for the components
- Improve how the characters images are positioned on the page
- For bigger chunks of data maybe use an out-of-the-box library to help with pagination
