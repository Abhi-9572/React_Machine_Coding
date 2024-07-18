// Throttling in JavaScript is a technique used to limit the number of times a function can be executed over a period of time. This is useful for performance optimization, especially when dealing with events that fire frequently, such as window resizing, scrolling, or keypresses.

// How Throttling Works:

// Limit Execution Rate: Throttling ensures that a function is executed at most once every specified interval of time.
// Controlled Execution: Even if the event is triggered continuously, the throttled function will only run at the specified intervals.
// Simple Example:

// Imagine you have a function that runs whenever you scroll the page. Without throttling, this function could run hundreds of times per second, potentially causing performance issues. By throttling the function, you can limit its execution to, say, once every 200 milliseconds.

// Here’s how you can implement throttling in JavaScript:
