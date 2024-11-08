import { ACTIONS_CORS_HEADERS, ActionsJson } from "@solana/actions";

export const GET = async () => {
  const payload: ActionsJson = {
    rules: [
      // map all root level routes to an action
      {
<<<<<<< HEAD
        pathPattern: "/",
        apiPath: "/api/donate/",
      },
      {
        pathPattern: "/api/actions/",
        apiPath: "/api/actions/",
=======
        pathPattern: "/*",
        apiPath: "/api/actions/*",
      },
      // idempotent rule as the fallback
      {
        pathPattern: "/api/actions/**",
        apiPath: "/api/donate",
>>>>>>> b6f7f99 (added ./.github repo)
      },
    ],
  };

  return Response.json(payload, {
    headers: ACTIONS_CORS_HEADERS,
  });
};

// DO NOT FORGET TO INCLUDE THE `OPTIONS` HTTP METHOD
// THIS WILL ENSURE CORS WORKS FOR BLINKS
<<<<<<< HEAD
export const OPTIONS = GET;
=======
export const OPTIONS = GET;
>>>>>>> b6f7f99 (added ./.github repo)
