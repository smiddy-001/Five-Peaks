export default function About(props) {
    const style = {
        color: 'blue',
        lineHeight: 10,
        padding: '1.5em',
    }
    return (
        <a style={style} className="Button">{props.text}{props.children}</a>
    );
}