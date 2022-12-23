import React from 'react'

const UserContext = React.createContext("Harper");

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserContext, UserConsumer}
