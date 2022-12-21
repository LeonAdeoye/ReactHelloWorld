import React from 'react'

// Higher Order Component (HOC) is a pattern where a function takes a component as an argument and returns a new component.
const UpdatedComponent = (OriginalComponent) =>
{
    class NewComponent extends React.Component
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
            return <OriginalComponent name='Horatio' count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent
