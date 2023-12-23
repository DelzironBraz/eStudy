const Button = (props) => {
    return (
        <button className="bg-white py-2 px-5 rounded-full mt-4 outline outline-1 hover:shadow-[0_3px_10px_rgba(0,0,0,0.2)_0px_3px_8px] hover:bg-brightGreen hover:text-white transition">
            {props.title}
        </button>
    );
}

export default Button;