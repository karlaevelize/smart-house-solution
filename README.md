## What is Redux?

- State Management
- Global State Management
- Take the state out of component level and place it in the store

## Why Redux? (Students answer)

- Passing the props
- Useless props for some components
- If you miss one of the components, everything breaks

## Redux Flow

![Redux flow](https://hub.packtpub.com/wp-content/uploads/2018/07/Redux-Flow.png)

## Redux Terminology

- Actions: object with type and payload. Type is a string. Payload is your data.

```js
{
  type: "",
  payload: data
}

```

- Reducer: Decides what to do with data received from acion/payload, updated the store
- Selector: goes to store and selects the data you want
- Store: keeps/stores the state
- Provider: makes the store available for ourr entire application
- Dispatch: used to "call" an action
