import React from 'react'

// Higher Order Component (HOC) is a pattern where a function takes a component as an argument and returns a new component.
// Allows you to share common functionality between components without having to repeat the code.
// Naming convention of HOCs is important. See below.
const withCounter = (WrappedComponent) =>
{
    class WithCounter extends React.Component
    {
        constructor(props)
        {
            super(props);
            this.state = {
                count: 0
            }
        }

        incrementCount = () =>
        {
            this.setState(previousState => {
                return {
                    count: previousState.count + 1
                }
            })
        }

        render()
        {
            return <WrappedComponent name='Horatio' count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return WithCounter
}

export default withCounter
