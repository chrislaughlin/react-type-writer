import React, { useState} from 'react';
import { useSpring, animated } from 'react-spring'

const Bounce = ({ children }) => {
    const [state, toggle] = useState(true)
    const { x } = useSpring({
        from: { x: 0 }, x: state ? 1 : 0, config: { duration: 5000 }
    })

    React.useEffect(() => {
        setTimeout(() => {
            toggle(!state)
        }, 1000);
    }, [])
    return (
        <animated.div
            style={{
                opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                transform: x
                    .interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 2],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 2]
                    })
                    .interpolate(x => `scale(${x})`)
            }}>
            {children}
        </animated.div>
    );
}

const Writer = ({ text }) => {
    return (
        <Bounce>
            {text}
        </Bounce>
    );
};

Writer.propTypes = {};

export default Writer;

