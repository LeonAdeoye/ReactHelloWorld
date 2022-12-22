import React from 'react'

// Higher Order Component (HOC) is a pattern where a function takes a component as an argument and returns a new component.
// Allows you to share common functionality between components without having to repeat the code.
// You can also pass parameters to a HOC function. In the below case, you have the expected the wrapped component and then an extra parameter the increment number.
// Naming convention of HOCs is important: the HOC function starts with a camelCase while the component uses PascalCase.
const withCounter = (WrappedComponent, incrementNumber) =>
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
                    count: previousState.count + incrementNumber
                }
            })
        }

        render()
        {
            // Use the spread operator ... to pass down the remaining props from the HOC to the wrapped component: {... this.props}
            // The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
            // const numbersOne = [1, 2, 3];
            // const numbersTwo = [4, 5, 6];
            // const numbersCombined = [...numbersOne, ...numbersTwo];
            // console.log(numbersCombined); => 1,2,3,4,5,6
            return <WrappedComponent name='Horatio' count={this.state.count} incrementCount={this.incrementCount} {... this.props}/>
        }
    }
    return WithCounter
}

export default withCounter
