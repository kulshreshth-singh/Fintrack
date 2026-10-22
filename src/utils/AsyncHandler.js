
/*
 * asyncHandler: A higher-order function that wraps an Express
 * route handler and forwards asynchronous errors to Express.
 *
 * Why?
 * Avoid writing repetitive try...catch blocks in every controller.
 */
const asyncHandler = (requestHandler) => {

    // Return a new function that Express can execute for each request.
    return (req, res, next) => {

        /*
         * Execute the controller and normalize its return value
         * into a Promise.
         *
         * If the Promise rejects, catch the error and pass it
         * to Express's error-handling middleware using next(error).
         */
        Promise.resolve(requestHandler(req, res, next))
            .catch((error) => next(error));
    };
};

export { asyncHandler };

/**
 * Purpose: Reuse asynchronous error handling for Express controllers.



Type: Higher-order function — accepts a function and returns a function.



requestHandler: The original controller.



Returned function: The handler Express executes for each request.



Promise.resolve(): Normalizes the returned value or Promise.



.catch(): Handles Promise rejection.



next(error): Forwards the error to Express error-handling middleware.



Does not do: Send an error response, validate data, or fix the underlying error.



Important limitation: This exact implementation doesn't catch a synchronous throw from a non-async handler before Promise.resolve() is called.
 */