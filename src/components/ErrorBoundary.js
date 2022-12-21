import React, {Component} from 'react';

// Error boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI.
// A class component becomes an Error Boundary by defining either or both of the getDerivedStateFromError and componentDidCatch lifecycle methods.
// The placement of the Error Boundary also matters as it controls if the entire app should have the fallback UI or just the component causing the problem.
class ErrorBoundary extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo)
    {
        console.log(`ERROR MESSAGE LOGGED:>>>>>>>>${error.message}`)
    }

    static getDerivedStateFromError(error)
    {
        return {
            hasError: true
        }
    }

    render()
    {
        if(this.state.hasError)
        {
            return <h1>Hero Error boundary - something went wrong.</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;
