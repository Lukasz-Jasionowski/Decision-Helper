import React, { Component } from "react";

const answer = [
    'Yes', 'No', 'Maybe', 'You should know', 'Ask a friends', 'You know the best'
]

const MyContext = React.createContext();
class MyProvider extends Component {

    state = {
        screen: 0,
        question: '',
        result: ''
    }

    handleGoTo = (value) => {
        this.setState({ screen: value })
    }

    handleQuestion = (value) => {
        this.setState({ question: value })
    }

    getRandomValue = () => {
        return answer[Math.floor(Math.random() * answer.length)]
    }

    handleResult = () => {
        let rand = this.getRandomValue();
        if (this.state.result !== '') {
            while (rand === this.state.result) {
                rand = this.getRandomValue();
            }
        }
        this.setState({ result: rand })
    }

    handleReset = () => {
        this.setState({
            screen: 0,
            question: '',
            result: ''
        })
    }

    render() {
        return (
            <>
                <MyContext.Provider value={{
                    state: this.state,
                    goTo: this.handleGoTo,
                    question: this.handleQuestion,
                    result: this.handleResult,
                    reset: this.handleReset
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