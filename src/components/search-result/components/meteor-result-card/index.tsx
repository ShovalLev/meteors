import React from 'react';
import { Card, CardImg, MeteorName } from './styles';
import { MeteorResultCardProps } from './types';
import MeteorIcon from '../../../../assets/meteor.svg';

const MeteorResultCard: React.FC<MeteorResultCardProps> = ({ name }) => {
    return (
        <Card>
            <CardImg src={MeteorIcon} />
            <MeteorName>{name}</MeteorName>
        </Card>
    )
};

export default MeteorResultCard;
