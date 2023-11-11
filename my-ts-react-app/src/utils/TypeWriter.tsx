import React from "react";

type TypeWriterProps = {
    strings: Array<string>;
    speed?: number;
    };

function TypeWriter({strings, speed} : TypeWriterProps) {
    const [text, setText] = React.useState("");
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [loopNum, setLoopNum] = React.useState(0);
    const [typingSpeed, setTypingSpeed] = React.useState(speed ? speed : 150);

    React.useEffect(() => {
        let timer: any;
        const handleType = () => {
            const i = loopNum % strings.length;
            const fullText = strings[i];

            setText(
                isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(
                isDeleting ? 30 : 150
            );

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, strings]);

    return (
        <span>{text}</span>
    );
}

export default TypeWriter;