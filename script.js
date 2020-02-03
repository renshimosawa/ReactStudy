let dom = document.querySelector('#root');
let element = React.createElement(
    'div', {}, [
        React.createElement(
            'h2', {}, "HELLO!"
        ),
        React.createElement(
            'h3', {}, "React sample page"
        ),
        React.createElement(
            'ul', {}, [
                React.createElement(
                    'li', {}, "First Item."
                ),
                React.createElement(
                    'li', {}, "Second Item."
                ),
                React.createElement(
                    'li', {}, "Third Item."
                ),
            ]
        ),
    ]
);
ReactDOM.render(element, dom);