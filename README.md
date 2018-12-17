# ZX Ventures front-end challenge

This is my implementation of the [ZX Ventures front-end challenge][1].

## Requirements

- Node.js 8+
- [Yarn][2]

## Instructions

After cloning this repo:

1. Copy the `./.env.example` file to `./.env`
2. Replace the `GOOGLE_GEOCODING_API_KEY` with your own [API key][3].
3. Install all dependencies:
    ```
    yarn install
    ```
3. Start the development webpack server:
    ```
    yarn start
    ```
4. Go to `http://localhost:8080`\*

<sup>\* Port is automatically assigned. If `8080` is busy, then it will try increment the port like `8081`, `8082`, &hellip; Checkout the `webpack` logs to see the actual port.</sup>

 [1]: https://github.com/ZXVentures/code-challenge/blob/master/frontend-mobile.md
 [2]: https://yarnpkg.com/en/
 [3]: https://developers.google.com/maps/documentation/javascript/get-api-key
