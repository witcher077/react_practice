import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error) {
           
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }
    render() {
        if (this.state.hasError) return <h1>Something went wrong 😞</h1>
        return this.props.children;
    }
}

export default ErrorBoundary;

// import React from "react";

// class ErrorBoundary extends React.Component {
//   state = { error: false };

//   static getDerivedStateFromError() {
//     return { error: true };
//   }

//   componentDidCatch(error, info) {
//     console.log(error, info);
//   }

//   render() {
//     if (this.state.error == true) return <h1>Something went wrong 😔 </h1>;
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;
