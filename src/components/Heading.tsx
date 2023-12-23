const Heading = (props) => {
    return (
        <div className="w-full flex items center gap-2 items-center justify-center">
            <h3 className="text-4xl font-semibold">{props.title}</h3>
            <span className="text-4xl font-semibold text-brightGreen">{props.subTitle}</span>
        </div>
    );
};

export default Heading;