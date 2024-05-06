# Not Another Todo List!

Yes, this is another todo application. I am making this application to learn modern React techniques and tooling (Vite), Testing (unit, integration, and regression), CI/CD, Express/Node, and Postgres.

Plus, I never made a todo list when I started out programming, like many others have done before me. I figure now would be a good time to complete one with the skills and production techniques I've learned over the years.

## How it's going
- Users can add and delete todos
- Users can toggle whether a todo is completed
- It doesn't crash lol
- [backend server repo](https://github.com/rubb3rDucc/todo_list_server)

## Todos for the Todos
- [ ] Users can not edit todos
- [ ] The app looks ugly and needs a visual update
- [x] <s>The API route/url for toggling whether the todo is completed or not does not work when setting the toggle to false</s>
- [ ] User login/logout does not work, there isn't a login/logout page, and it's currently set on one user for testing the dashboard functionality
- [ ] Todo components do not automatically update after changes, needs a manual page refresh
- [ ] Setup CI/CD pipeline with Github Actions with either Node or Docker, or both
- [ ] Need unit, regression, and integration testing setup with SuperTest and Mocha or Jest
- [ ] Need automated testing setup with Testing Library
- [ ] create mocks for db and user data for automated builds
- [ ] setup repo rules and PRs

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
