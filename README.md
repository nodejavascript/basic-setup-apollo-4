# basic-setup-apollo-4
Apollo 4 Express setup with Apollo 3 React and Ant Design

## Why?
- Provide a 2023 Q1 boilerplate Apollo server 4 and client 3 using Express and React
- There are 0 npm vulnerabilities as of this writing
- Nicely linted with `StandardJS`, and code spacing to allow you to expand upon.

## SERVER Features
- Contains `cors` and `helmut`
- Has directive for date fields called `@date` to format date strings with option to use `dayjs`'s `fromNow`
- Has directive for queries/mutations resolvers called `@authenticated` that passes `user` object into resolver context or throw an error if `!user` (not enabled, code is commented for you)
- Contains `Joi` validation examples
- Has resolver for GitHub `users/${org}/repos`
- Has health-check for GraphQL resolver `ping`
- Contains `ExpressJS` routing example
- Has health-check for HTTP GET route `localhost/ping`

## CLIENT Features
- Contains connection to `Apollo Server 4`
  - configured `fetchPolicy`'s
  - Extended to parse to easily add headers in requests; example, `Authentication: "Bearer xyz"`
  - Extended to parse and display GraphQL and Network errors so you can expand
  - `Ant Design` is installed with useful examples
  - Examples of Apollo `useQuery` and field directive use for `@date`
  - When listing GitHub repositories, UI contains click-to-copy example (for cloning repo)
- `App` > `Home` includes components for `GithubListRepositories` and `PingResults`. Each of these uses API `useQuery` to GraphQL API


## Usage
clone repo
```
git clone git@github.com:nodejavascript/apollo-boiler-client.git
```
Before proceeding, please note: Run server before client or you will get `GraphqlClient errorLink networkError TypeError: Failed to fetch` errors in the console.

### SERVER
1. in `server` terminal
```
cd server/
cp .env.example .env
nano .env
```
2. update & save `GITHUB_TOKEN` (in .env) with your Personal access token. See [GitHub here](https://github.com/settings/tokens)

3. run
```
npm install
npm start
```

4. example in console if running:
```
development 4014 - startup, 03/30/2023 2:22 PM, v0.0.1
http://localhost:4014/ping
```

### CLIENT
1. in `client` terminal
```
cd client/
cp .env.example .env
nano .env
```
2. update & save `REACT_APP_GITHUB_ORG` to the GitHub `username` to want to query

3. run
```
npm install
npm start
```

This should open a new browser tab and display the page (see below screenshot)


## Tests
- Using `StandardJS` for syntax

## Queries
- ```
  query queryListRepositories {
    listRepositories (
      listRepositoriesInput: {
        org: "nodejavascript"
      }
    ) {
        id
        name
        full_name
        description
        size
        html_url
        ssh_url
        updated: updated_at
        updatedAgo: updated_at (format: "fromNow")

        owner {
          login
          avatar_url
        }
  	}
  }
```
- ```
  query queryPing {
    ping {
      timestamp
      version
    }
  }
```

Example of `Home` component:
![go to basic-setup-apollo-4](https://res.cloudinary.com/nodejavascript-com/image/upload/v1680198577/basic-setup-apollo-4/Selection_030.png)
