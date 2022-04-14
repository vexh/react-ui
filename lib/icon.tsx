import React from 'react';

interface IconProps {
    name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({ name }) => {
    return <div>{name}</div>
}

export default Icon;