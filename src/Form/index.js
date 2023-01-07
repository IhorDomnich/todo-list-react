import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" type="text" placeholder="What to do?" autofocus />
        <button className="form__button">Add task</button>
    </form>
);

export default Form;