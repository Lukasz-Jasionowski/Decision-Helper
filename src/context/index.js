import React, { Component } from "react";

const MyContext = React.createContext();
class MyProvider extends Component {

    state = {
        screen: 0
    }

    handleGoTo = (value) => {
        this.setState({ screen: value })
    }

    render() {
        return (
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    goTo: this.handleGoTo
                }}
                >
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }
}

export {
    MyProvider,
    MyContext
}