const React = require('react');
const { Component } = React;

class WordRelay extends Component{
    state = {
        word: '고양이',
        value: '',
        result: '',
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: this.state.value.charAt(this.state.value.length -1) + ' -> ',
                word: this.state.value,
                value: '',
            });
            this.input.focus();
        } else {
            this.setState({
                result: this.state.word.charAt(this.state.word.length -1) + '로 시작하는 단어를 입력해 주세요!!!',
                value: '',
            });
            this.input.focus();
        }
    };

    onChangeInput = (e) => {
        this.setState({ value: e.target.value });
    };

    input;

    onRefInput = (c) => {
        this.input = c;
    };

    render() {
        return(
            <>
                <div>{this.state.word}</div>
                <form onSubmit={this.onSubmitForm}>
                    <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                    <button>입력!</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }
}

module.exports = WordRelay;
